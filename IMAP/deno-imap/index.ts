import { ImapClient } from 'jsr:@workingdevshero/deno-imap';

// Create a new IMAP client
const client = new ImapClient({
  host: 'imap.example.com',
  port: 993,
  tls: true,
  username: 'user@example.com',
  password: 'password',
});

// Connect and authenticate
await client.connect();
await client.authenticate();

// List mailboxes
const mailboxes = await client.listMailboxes();
console.log('Available mailboxes:', mailboxes);

// Select a mailbox
const inbox = await client.selectMailbox('INBOX');
console.log('INBOX has', inbox.exists, 'messages');

// Search for unread messages
const unreadMessages = await client.search({ flags: { has: ['\\Unseen'] } });
console.log('Unread message IDs:', unreadMessages);

// Fetch messages (safely handling mailboxes with fewer than 10 messages)
const messageCount = inbox.exists || 0;
const fetchRange = messageCount > 0 ? `1:${Math.min(messageCount, 10)}` : '1';

const messages = await client.fetch(fetchRange, {
  envelope: true,
  headers: ['Subject', 'From', 'Date'],
});

// Display message details
for (const message of messages) {
  console.log('Message #', message.seq);
  console.log('Subject:', message.envelope?.subject);
  console.log(
    'From:',
    message.envelope?.from?.[0]?.mailbox + '@' + message.envelope?.from?.[0]?.host,
  );
  console.log('Date:', message.envelope?.date);
}

// Disconnect
client.disconnect();
