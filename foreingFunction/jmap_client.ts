// JMAP Client for Deno using FFI to communicate with Rust runtime
// This client sends JSON requests to the Rust JMAP runtime and receives JSON responses

// Define the FFI function signatures
const lib = Deno.dlopen("./target/release/libjmap_runtime.dylib", {
  process_jmap_request: {
    parameters: ["buffer"],
    result: "pointer",
  },
  free_string: {
    parameters: ["pointer"],
    result: "void",
  },
});

// JMAP Client class
export class JMAPClient {
  private lib: any;

  constructor() {
    this.lib = lib;
  }

  // Send a JMAP request and get response
  async sendRequest(request: any): Promise<any> {
    try {
      // Convert request object to JSON string
      const requestJson = JSON.stringify(request);
      console.log("Sending JMAP request:", requestJson);

      // Convert string to Uint8Array for FFI
      const requestBuffer = new TextEncoder().encode(requestJson + "\0");

      // Call Rust function
      const responsePointer =
        this.lib.symbols.process_jmap_request(requestBuffer);

      // Convert response pointer back to string
      const responseString = Deno.UnsafePointerView.getCString(responsePointer);
      console.log("Received JMAP response:", responseString);

      // Parse JSON response
      const response = JSON.parse(responseString);

      // Free the memory allocated by Rust
      this.lib.symbols.free_string(responsePointer);

      return response;
    } catch (error) {
      console.error("Error in JMAP request:", error);
      throw error;
    }
  }

  // Helper method for Email/query
  async queryEmails(filter?: any, sort?: any[], limit?: number): Promise<any> {
    const request = {
      using: ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail"],
      methodCalls: [
        {
          id: "query_1",
          method: "Email/query",
          arguments: {
            accountId: "1",
            filter: filter || { inMailbox: "INBOX" },
            sort: sort || [{ property: "receivedAt", isAscending: false }],
            limit: limit || 10,
          },
        },
      ],
    };

    return this.sendRequest(request);
  }

  // Helper method for Email/get
  async getEmails(ids: string[], properties?: string[]): Promise<any> {
    const request = {
      using: ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail"],
      methodCalls: [
        {
          id: "get_1",
          method: "Email/get",
          arguments: {
            accountId: "1",
            ids: ids,
            properties: properties || [
              "id",
              "threadId",
              "mailboxIds",
              "subject",
              "from",
              "to",
              "receivedAt",
              "size",
              "preview",
            ],
          },
        },
      ],
    };

    return this.sendRequest(request);
  }

  // Helper method for Email/set
  async setEmails(
    create?: any,
    update?: any,
    destroy?: string[],
  ): Promise<any> {
    const request = {
      using: ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail"],
      methodCalls: [
        {
          id: "set_1",
          method: "Email/set",
          arguments: {
            accountId: "1",
            create: create || {},
            update: update || {},
            destroy: destroy || [],
          },
        },
      ],
    };

    return this.sendRequest(request);
  }

  // Helper method for Core/echo
  async echo(data: any): Promise<any> {
    const request = {
      using: ["urn:ietf:params:jmap:core"],
      methodCalls: [
        {
          id: "echo_1",
          method: "Core/echo",
          arguments: data,
        },
      ],
    };

    return this.sendRequest(request);
  }

  // Close the library
  close() {
    this.lib.close();
  }
}

// Example usage
if (import.meta.main) {
  const client = new JMAPClient();

  try {
    // Test Core/echo
    console.log("\n=== Testing Core/echo ===");
    const echoResponse = await client.echo({ message: "Hello from Deno!" });
    console.log("Echo response:", echoResponse);

    // Test Email/query
    console.log("\n=== Testing Email/query ===");
    const queryResponse = await client.queryEmails(
      { inMailbox: "INBOX" },
      [{ property: "receivedAt", isAscending: false }],
      5,
    );
    console.log("Query response:", queryResponse);

    // Test Email/get
    console.log("\n=== Testing Email/get ===");
    const getResponse = await client.getEmails(["email1", "email2"]);
    console.log("Get response:", getResponse);

    // Test Email/set
    console.log("\n=== Testing Email/set ===");
    const setResponse = await client.setEmails({
      email1: {
        mailboxIds: { inbox: true },
        subject: "Test Email",
        from: [{ name: "Sender", email: "sender@example.com" }],
        to: [{ name: "Recipient", email: "recipient@example.com" }],
        textBody: [{ partId: "text", type: "text/plain" }],
        bodyValues: {
          text: {
            value: "This is a test email body.",
            charset: "UTF-8",
          },
        },
      },
    });
    console.log("Set response:", setResponse);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    client.close();
  }
}
