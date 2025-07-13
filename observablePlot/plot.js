var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/isoformat@0.2.1/denonext/isoformat.mjs
function f(t14, n17) {
  if (t14 instanceof Date || (t14 = /* @__PURE__ */ new Date(+t14)), isNaN(t14)) return typeof n17 == "function" ? n17(t14) : n17;
  let s24 = t14.getUTCHours(), u17 = t14.getUTCMinutes(), r13 = t14.getUTCSeconds(), e33 = t14.getUTCMilliseconds();
  return `${$(t14.getUTCFullYear(), 4)}-${o(t14.getUTCMonth() + 1, 2)}-${o(t14.getUTCDate(), 2)}${s24 || u17 || r13 || e33 ? `T${o(s24, 2)}:${o(u17, 2)}${r13 || e33 ? `:${o(r13, 2)}${e33 ? `.${o(e33, 3)}` : ""}` : ""}Z` : ""}`;
}
function $(t14) {
  return t14 < 0 ? `-${o(-t14, 6)}` : t14 > 9999 ? `+${o(t14, 6)}` : o(t14, 4);
}
function o(t14, n17) {
  return `${t14}`.padStart(n17, "0");
}
var c = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function i(t14, n17) {
  return c.test(t14 += "") ? new Date(t14) : typeof n17 == "function" ? n17(t14) : n17;
}

// deno:https://esm.sh/internmap@2.0.3/denonext/internmap.mjs
var u = class extends Map {
  constructor(e33, s24 = h) {
    if (super(), Object.defineProperties(this, {
      _intern: {
        value: /* @__PURE__ */ new Map()
      },
      _key: {
        value: s24
      }
    }), e33 != null) for (let [r13, f25] of e33) this.set(r13, f25);
  }
  get(e33) {
    return super.get(n(this, e33));
  }
  has(e33) {
    return super.has(n(this, e33));
  }
  set(e33, s24) {
    return super.set(i2(this, e33), s24);
  }
  delete(e33) {
    return super.delete(c2(this, e33));
  }
};
var o2 = class extends Set {
  constructor(e33, s24 = h) {
    if (super(), Object.defineProperties(this, {
      _intern: {
        value: /* @__PURE__ */ new Map()
      },
      _key: {
        value: s24
      }
    }), e33 != null) for (let r13 of e33) this.add(r13);
  }
  has(e33) {
    return super.has(n(this, e33));
  }
  add(e33) {
    return super.add(i2(this, e33));
  }
  delete(e33) {
    return super.delete(c2(this, e33));
  }
};
function n({ _intern: t14, _key: e33 }, s24) {
  let r13 = e33(s24);
  return t14.has(r13) ? t14.get(r13) : s24;
}
function i2({ _intern: t14, _key: e33 }, s24) {
  let r13 = e33(s24);
  return t14.has(r13) ? t14.get(r13) : (t14.set(r13, s24), s24);
}
function c2({ _intern: t14, _key: e33 }, s24) {
  let r13 = e33(s24);
  return t14.has(r13) && (s24 = t14.get(r13), t14.delete(r13)), s24;
}
function h(t14) {
  return t14 !== null && typeof t14 == "object" ? t14.valueOf() : t14;
}

// deno:https://esm.sh/d3-array@3.2.4/denonext/d3-array.mjs
function s(e33, t14) {
  return e33 == null || t14 == null ? NaN : e33 < t14 ? -1 : e33 > t14 ? 1 : e33 >= t14 ? 0 : NaN;
}
function H(e33, t14) {
  return e33 == null || t14 == null ? NaN : t14 < e33 ? -1 : t14 > e33 ? 1 : t14 >= e33 ? 0 : NaN;
}
function F(e33) {
  let t14, n17, o26;
  e33.length !== 2 ? (t14 = s, n17 = (u17, c23) => s(e33(u17), c23), o26 = (u17, c23) => e33(u17) - c23) : (t14 = e33 === s || e33 === H ? e33 : Xe, n17 = e33, o26 = e33);
  function r13(u17, c23, l19 = 0, m22 = u17.length) {
    if (l19 < m22) {
      if (t14(c23, c23) !== 0) return m22;
      do {
        let d18 = l19 + m22 >>> 1;
        n17(u17[d18], c23) < 0 ? l19 = d18 + 1 : m22 = d18;
      } while (l19 < m22);
    }
    return l19;
  }
  function f25(u17, c23, l19 = 0, m22 = u17.length) {
    if (l19 < m22) {
      if (t14(c23, c23) !== 0) return m22;
      do {
        let d18 = l19 + m22 >>> 1;
        n17(u17[d18], c23) <= 0 ? l19 = d18 + 1 : m22 = d18;
      } while (l19 < m22);
    }
    return l19;
  }
  function i20(u17, c23, l19 = 0, m22 = u17.length) {
    let d18 = r13(u17, c23, l19, m22 - 1);
    return d18 > l19 && o26(u17[d18 - 1], c23) > -o26(u17[d18], c23) ? d18 - 1 : d18;
  }
  return {
    left: r13,
    center: i20,
    right: f25
  };
}
function Xe() {
  return 0;
}
function b(e33) {
  return e33 === null ? NaN : +e33;
}
function* ce(e33, t14) {
  if (t14 === void 0) for (let n17 of e33) n17 != null && (n17 = +n17) >= n17 && (yield n17);
  else {
    let n17 = -1;
    for (let o26 of e33) (o26 = t14(o26, ++n17, e33)) != null && (o26 = +o26) >= o26 && (yield o26);
  }
}
var de = F(s);
var ae = de.right;
var Ye = de.left;
var Ze = F(b).center;
var re = ae;
var ve = me(oe);
var et = me(tt);
function me(e33) {
  return function(t14, n17, o26 = n17) {
    if (!((n17 = +n17) >= 0)) throw new RangeError("invalid rx");
    if (!((o26 = +o26) >= 0)) throw new RangeError("invalid ry");
    let { data: r13, width: f25, height: i20 } = t14;
    if (!((f25 = Math.floor(f25)) >= 0)) throw new RangeError("invalid width");
    if (!((i20 = Math.floor(i20 !== void 0 ? i20 : r13.length / f25)) >= 0)) throw new RangeError("invalid height");
    if (!f25 || !i20 || !n17 && !o26) return t14;
    let u17 = n17 && e33(n17), c23 = o26 && e33(o26), l19 = r13.slice();
    return u17 && c23 ? (N(u17, l19, r13, f25, i20), N(u17, r13, l19, f25, i20), N(u17, l19, r13, f25, i20), q(c23, r13, l19, f25, i20), q(c23, l19, r13, f25, i20), q(c23, r13, l19, f25, i20)) : u17 ? (N(u17, r13, l19, f25, i20), N(u17, l19, r13, f25, i20), N(u17, r13, l19, f25, i20)) : c23 && (q(c23, r13, l19, f25, i20), q(c23, l19, r13, f25, i20), q(c23, r13, l19, f25, i20)), t14;
  };
}
function N(e33, t14, n17, o26, r13) {
  for (let f25 = 0, i20 = o26 * r13; f25 < i20; ) e33(t14, n17, f25, f25 += o26, 1);
}
function q(e33, t14, n17, o26, r13) {
  for (let f25 = 0, i20 = o26 * r13; f25 < o26; ++f25) e33(t14, n17, f25, f25 + i20, o26);
}
function tt(e33) {
  let t14 = oe(e33);
  return (n17, o26, r13, f25, i20) => {
    r13 <<= 2, f25 <<= 2, i20 <<= 2, t14(n17, o26, r13 + 0, f25 + 0, i20), t14(n17, o26, r13 + 1, f25 + 1, i20), t14(n17, o26, r13 + 2, f25 + 2, i20), t14(n17, o26, r13 + 3, f25 + 3, i20);
  };
}
function oe(e33) {
  let t14 = Math.floor(e33);
  if (t14 === e33) return nt(e33);
  let n17 = e33 - t14, o26 = 2 * e33 + 1;
  return (r13, f25, i20, u17, c23) => {
    if (!((u17 -= c23) >= i20)) return;
    let l19 = t14 * f25[i20], m22 = c23 * t14, d18 = m22 + c23;
    for (let a19 = i20, p21 = i20 + m22; a19 < p21; a19 += c23) l19 += f25[Math.min(u17, a19)];
    for (let a19 = i20, p21 = u17; a19 <= p21; a19 += c23) l19 += f25[Math.min(u17, a19 + m22)], r13[a19] = (l19 + n17 * (f25[Math.max(i20, a19 - d18)] + f25[Math.min(u17, a19 + d18)])) / o26, l19 -= f25[Math.max(i20, a19 - m22)];
  };
}
function nt(e33) {
  let t14 = 2 * e33 + 1;
  return (n17, o26, r13, f25, i20) => {
    if (!((f25 -= i20) >= r13)) return;
    let u17 = e33 * o26[r13], c23 = i20 * e33;
    for (let l19 = r13, m22 = r13 + c23; l19 < m22; l19 += i20) u17 += o26[Math.min(f25, l19)];
    for (let l19 = r13, m22 = f25; l19 <= m22; l19 += i20) u17 += o26[Math.min(f25, l19 + c23)], n17[l19] = u17 / t14, u17 -= o26[Math.max(r13, l19 - c23)];
  };
}
function w(e33, t14) {
  let n17 = 0;
  if (t14 === void 0) for (let o26 of e33) o26 != null && (o26 = +o26) >= o26 && ++n17;
  else {
    let o26 = -1;
    for (let r13 of e33) (r13 = t14(r13, ++o26, e33)) != null && (r13 = +r13) >= r13 && ++n17;
  }
  return n17;
}
function rt(e33) {
  return e33.length | 0;
}
function ot(e33) {
  return !(e33 > 0);
}
function ft(e33) {
  return typeof e33 != "object" || "length" in e33 ? e33 : Array.from(e33);
}
function it2(e33) {
  return (t14) => e33(...t14);
}
function se(...e33) {
  let t14 = typeof e33[e33.length - 1] == "function" && it2(e33.pop());
  e33 = e33.map(ft);
  let n17 = e33.map(rt), o26 = e33.length - 1, r13 = new Array(o26 + 1).fill(0), f25 = [];
  if (o26 < 0 || n17.some(ot)) return f25;
  for (; ; ) {
    f25.push(r13.map((u17, c23) => e33[c23][u17]));
    let i20 = o26;
    for (; ++r13[i20] === n17[i20]; ) {
      if (i20 === 0) return t14 ? f25.map(t14) : f25;
      r13[i20--] = 0;
    }
  }
}
function pe(e33, t14) {
  var n17 = 0, o26 = 0;
  return Float64Array.from(e33, t14 === void 0 ? (r13) => n17 += +r13 || 0 : (r13) => n17 += +t14(r13, o26++, e33) || 0);
}
function J(e33, t14) {
  let n17 = 0, o26, r13 = 0, f25 = 0;
  if (t14 === void 0) for (let i20 of e33) i20 != null && (i20 = +i20) >= i20 && (o26 = i20 - r13, r13 += o26 / ++n17, f25 += o26 * (i20 - r13));
  else {
    let i20 = -1;
    for (let u17 of e33) (u17 = t14(u17, ++i20, e33)) != null && (u17 = +u17) >= u17 && (o26 = u17 - r13, r13 += o26 / ++n17, f25 += o26 * (u17 - r13));
  }
  if (n17 > 1) return f25 / (n17 - 1);
}
function K(e33, t14) {
  let n17 = J(e33, t14);
  return n17 && Math.sqrt(n17);
}
function E(e33, t14) {
  let n17, o26;
  if (t14 === void 0) for (let r13 of e33) r13 != null && (n17 === void 0 ? r13 >= r13 && (n17 = o26 = r13) : (n17 > r13 && (n17 = r13), o26 < r13 && (o26 = r13)));
  else {
    let r13 = -1;
    for (let f25 of e33) (f25 = t14(f25, ++r13, e33)) != null && (n17 === void 0 ? f25 >= f25 && (n17 = o26 = f25) : (n17 > f25 && (n17 = f25), o26 < f25 && (o26 = f25)));
  }
  return [
    n17,
    o26
  ];
}
var V = class {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t14) {
    let n17 = this._partials, o26 = 0;
    for (let r13 = 0; r13 < this._n && r13 < 32; r13++) {
      let f25 = n17[r13], i20 = t14 + f25, u17 = Math.abs(t14) < Math.abs(f25) ? t14 - (i20 - f25) : f25 - (i20 - t14);
      u17 && (n17[o26++] = u17), t14 = i20;
    }
    return n17[o26] = t14, this._n = o26 + 1, this;
  }
  valueOf() {
    let t14 = this._partials, n17 = this._n, o26, r13, f25, i20 = 0;
    if (n17 > 0) {
      for (i20 = t14[--n17]; n17 > 0 && (o26 = i20, r13 = t14[--n17], i20 = o26 + r13, f25 = r13 - (i20 - o26), !f25); ) ;
      n17 > 0 && (f25 < 0 && t14[n17 - 1] < 0 || f25 > 0 && t14[n17 - 1] > 0) && (r13 = f25 * 2, o26 = i20 + r13, r13 == o26 - i20 && (i20 = o26));
    }
    return i20;
  }
};
function h2(e33) {
  return e33;
}
function P(e33, ...t14) {
  return S(e33, h2, h2, t14);
}
function fe(e33, t14, ...n17) {
  return S(e33, h2, t14, n17);
}
function ge(e33, t14, ...n17) {
  return S(e33, Array.from, t14, n17);
}
function S(e33, t14, n17, o26) {
  return function r13(f25, i20) {
    if (i20 >= o26.length) return n17(f25);
    let u17 = new u(), c23 = o26[i20++], l19 = -1;
    for (let m22 of f25) {
      let d18 = c23(m22, ++l19, f25), a19 = u17.get(d18);
      a19 ? a19.push(m22) : u17.set(d18, [
        m22
      ]);
    }
    for (let [m22, d18] of u17) u17.set(m22, r13(d18, i20));
    return t14(u17);
  }(e33, 0);
}
function Q(e33, t14) {
  return Array.from(t14, (n17) => e33[n17]);
}
function L(e33, ...t14) {
  if (typeof e33[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  e33 = Array.from(e33);
  let [n17] = t14;
  if (n17 && n17.length !== 2 || t14.length > 1) {
    let o26 = Uint32Array.from(e33, (r13, f25) => f25);
    return t14.length > 1 ? (t14 = t14.map((r13) => e33.map(r13)), o26.sort((r13, f25) => {
      for (let i20 of t14) {
        let u17 = g(i20[r13], i20[f25]);
        if (u17) return u17;
      }
    })) : (n17 = e33.map(n17), o26.sort((r13, f25) => g(n17[r13], n17[f25]))), Q(e33, o26);
  }
  return e33.sort(O(n17));
}
function O(e33 = s) {
  if (e33 === s) return g;
  if (typeof e33 != "function") throw new TypeError("compare is not a function");
  return (t14, n17) => {
    let o26 = e33(t14, n17);
    return o26 || o26 === 0 ? o26 : (e33(n17, n17) === 0) - (e33(t14, t14) === 0);
  };
}
function g(e33, t14) {
  return (e33 == null || !(e33 >= e33)) - (t14 == null || !(t14 >= t14)) || (e33 < t14 ? -1 : e33 > t14 ? 1 : 0);
}
function Me(e33, t14, n17) {
  return (t14.length !== 2 ? L(fe(e33, t14, n17), ([o26, r13], [f25, i20]) => s(r13, i20) || s(o26, f25)) : L(P(e33, n17), ([o26, r13], [f25, i20]) => t14(r13, i20) || s(o26, f25))).map(([o26]) => o26);
}
var ye = Array.prototype;
var be = ye.slice;
var un = ye.map;
var pt = Math.sqrt(50);
var xt = Math.sqrt(10);
var ht = Math.sqrt(2);
function W(e33, t14, n17) {
  let o26 = (t14 - e33) / Math.max(0, n17), r13 = Math.floor(Math.log10(o26)), f25 = o26 / Math.pow(10, r13), i20 = f25 >= pt ? 10 : f25 >= xt ? 5 : f25 >= ht ? 2 : 1, u17, c23, l19;
  return r13 < 0 ? (l19 = Math.pow(10, -r13) / i20, u17 = Math.round(e33 * l19), c23 = Math.round(t14 * l19), u17 / l19 < e33 && ++u17, c23 / l19 > t14 && --c23, l19 = -l19) : (l19 = Math.pow(10, r13) * i20, u17 = Math.round(e33 / l19), c23 = Math.round(t14 / l19), u17 * l19 < e33 && ++u17, c23 * l19 > t14 && --c23), c23 < u17 && 0.5 <= n17 && n17 < 2 ? W(e33, t14, n17 * 2) : [
    u17,
    c23,
    l19
  ];
}
function X(e33, t14, n17) {
  if (t14 = +t14, e33 = +e33, n17 = +n17, !(n17 > 0)) return [];
  if (e33 === t14) return [
    e33
  ];
  let o26 = t14 < e33, [r13, f25, i20] = o26 ? W(t14, e33, n17) : W(e33, t14, n17);
  if (!(f25 >= r13)) return [];
  let u17 = f25 - r13 + 1, c23 = new Array(u17);
  if (o26) if (i20 < 0) for (let l19 = 0; l19 < u17; ++l19) c23[l19] = (f25 - l19) / -i20;
  else for (let l19 = 0; l19 < u17; ++l19) c23[l19] = (f25 - l19) * i20;
  else if (i20 < 0) for (let l19 = 0; l19 < u17; ++l19) c23[l19] = (r13 + l19) / -i20;
  else for (let l19 = 0; l19 < u17; ++l19) c23[l19] = (r13 + l19) * i20;
  return c23;
}
function M(e33, t14, n17) {
  return t14 = +t14, e33 = +e33, n17 = +n17, W(e33, t14, n17)[2];
}
function gt(e33, t14, n17) {
  t14 = +t14, e33 = +e33, n17 = +n17;
  let o26 = t14 < e33, r13 = o26 ? M(t14, e33, n17) : M(e33, t14, n17);
  return (o26 ? -1 : 1) * (r13 < 0 ? 1 / -r13 : r13);
}
function Z(e33) {
  return Math.max(1, Math.ceil(Math.log(w(e33)) / Math.LN2) + 1);
}
function U(e33, t14) {
  let n17;
  if (t14 === void 0) for (let o26 of e33) o26 != null && (n17 < o26 || n17 === void 0 && o26 >= o26) && (n17 = o26);
  else {
    let o26 = -1;
    for (let r13 of e33) (r13 = t14(r13, ++o26, e33)) != null && (n17 < r13 || n17 === void 0 && r13 >= r13) && (n17 = r13);
  }
  return n17;
}
function R(e33, t14) {
  let n17, o26 = -1, r13 = -1;
  if (t14 === void 0) for (let f25 of e33) ++r13, f25 != null && (n17 < f25 || n17 === void 0 && f25 >= f25) && (n17 = f25, o26 = r13);
  else for (let f25 of e33) (f25 = t14(f25, ++r13, e33)) != null && (n17 < f25 || n17 === void 0 && f25 >= f25) && (n17 = f25, o26 = r13);
  return o26;
}
function I(e33, t14) {
  let n17;
  if (t14 === void 0) for (let o26 of e33) o26 != null && (n17 > o26 || n17 === void 0 && o26 >= o26) && (n17 = o26);
  else {
    let o26 = -1;
    for (let r13 of e33) (r13 = t14(r13, ++o26, e33)) != null && (n17 > r13 || n17 === void 0 && r13 >= r13) && (n17 = r13);
  }
  return n17;
}
function k(e33, t14) {
  let n17, o26 = -1, r13 = -1;
  if (t14 === void 0) for (let f25 of e33) ++r13, f25 != null && (n17 > f25 || n17 === void 0 && f25 >= f25) && (n17 = f25, o26 = r13);
  else for (let f25 of e33) (f25 = t14(f25, ++r13, e33)) != null && (n17 > f25 || n17 === void 0 && f25 >= f25) && (n17 = f25, o26 = r13);
  return o26;
}
function D(e33, t14, n17 = 0, o26 = 1 / 0, r13) {
  if (t14 = Math.floor(t14), n17 = Math.floor(Math.max(0, n17)), o26 = Math.floor(Math.min(e33.length - 1, o26)), !(n17 <= t14 && t14 <= o26)) return e33;
  for (r13 = r13 === void 0 ? g : O(r13); o26 > n17; ) {
    if (o26 - n17 > 600) {
      let c23 = o26 - n17 + 1, l19 = t14 - n17 + 1, m22 = Math.log(c23), d18 = 0.5 * Math.exp(2 * m22 / 3), a19 = 0.5 * Math.sqrt(m22 * d18 * (c23 - d18) / c23) * (l19 - c23 / 2 < 0 ? -1 : 1), p21 = Math.max(n17, Math.floor(t14 - l19 * d18 / c23 + a19)), x23 = Math.min(o26, Math.floor(t14 + (c23 - l19) * d18 / c23 + a19));
      D(e33, t14, p21, x23, r13);
    }
    let f25 = e33[t14], i20 = n17, u17 = o26;
    for (B(e33, n17, t14), r13(e33[o26], f25) > 0 && B(e33, n17, o26); i20 < u17; ) {
      for (B(e33, i20, u17), ++i20, --u17; r13(e33[i20], f25) < 0; ) ++i20;
      for (; r13(e33[u17], f25) > 0; ) --u17;
    }
    r13(e33[n17], f25) === 0 ? B(e33, n17, u17) : (++u17, B(e33, u17, o26)), u17 <= t14 && (n17 = u17 + 1), t14 <= u17 && (o26 = u17 - 1);
  }
  return e33;
}
function B(e33, t14, n17) {
  let o26 = e33[t14];
  e33[t14] = e33[n17], e33[n17] = o26;
}
function $2(e33, t14 = s) {
  let n17, o26 = false;
  if (t14.length === 1) {
    let r13;
    for (let f25 of e33) {
      let i20 = t14(f25);
      (o26 ? s(i20, r13) > 0 : s(i20, i20) === 0) && (n17 = f25, r13 = i20, o26 = true);
    }
  } else for (let r13 of e33) (o26 ? t14(r13, n17) > 0 : t14(r13, r13) === 0) && (n17 = r13, o26 = true);
  return n17;
}
function A(e33, t14, n17) {
  if (e33 = Float64Array.from(ce(e33, n17)), !(!(o26 = e33.length) || isNaN(t14 = +t14))) {
    if (t14 <= 0 || o26 < 2) return I(e33);
    if (t14 >= 1) return U(e33);
    var o26, r13 = (o26 - 1) * t14, f25 = Math.floor(r13), i20 = U(D(e33, f25).subarray(0, f25 + 1)), u17 = I(e33.subarray(f25 + 1));
    return i20 + (u17 - i20) * (r13 - f25);
  }
}
function wt(e33, t14, n17 = b) {
  if (!(!(o26 = e33.length) || isNaN(t14 = +t14))) {
    if (t14 <= 0 || o26 < 2) return +n17(e33[0], 0, e33);
    if (t14 >= 1) return +n17(e33[o26 - 1], o26 - 1, e33);
    var o26, r13 = (o26 - 1) * t14, f25 = Math.floor(r13), i20 = +n17(e33[f25], f25, e33), u17 = +n17(e33[f25 + 1], f25 + 1, e33);
    return i20 + (u17 - i20) * (r13 - f25);
  }
}
function Ie(e33, t14, n17) {
  let o26 = w(e33), r13 = A(e33, 0.75) - A(e33, 0.25);
  return o26 && r13 ? Math.ceil((n17 - t14) / (2 * r13 * Math.pow(o26, -1 / 3))) : 1;
}
function Ae(e33, t14, n17) {
  let o26 = w(e33), r13 = K(e33);
  return o26 && r13 ? Math.ceil((n17 - t14) * Math.cbrt(o26) / (3.49 * r13)) : 1;
}
function Ne(e33, t14) {
  let n17 = 0, o26 = 0;
  if (t14 === void 0) for (let r13 of e33) r13 != null && (r13 = +r13) >= r13 && (++n17, o26 += r13);
  else {
    let r13 = -1;
    for (let f25 of e33) (f25 = t14(f25, ++r13, e33)) != null && (f25 = +f25) >= f25 && (++n17, o26 += f25);
  }
  if (n17) return o26 / n17;
}
function qe(e33, t14) {
  return A(e33, 0.5, t14);
}
function* yt(e33) {
  for (let t14 of e33) yield* t14;
}
function Ee(e33) {
  return Array.from(yt(e33));
}
function Se(e33, t14) {
  let n17 = new u();
  if (t14 === void 0) for (let f25 of e33) f25 != null && f25 >= f25 && n17.set(f25, (n17.get(f25) || 0) + 1);
  else {
    let f25 = -1;
    for (let i20 of e33) (i20 = t14(i20, ++f25, e33)) != null && i20 >= i20 && n17.set(i20, (n17.get(i20) || 0) + 1);
  }
  let o26, r13 = 0;
  for (let [f25, i20] of n17) i20 > r13 && (r13 = i20, o26 = f25);
  return o26;
}
function Re(e33, t14 = It) {
  let n17 = [], o26, r13 = false;
  for (let f25 of e33) r13 && n17.push(t14(o26, f25)), o26 = f25, r13 = true;
  return n17;
}
function It(e33, t14) {
  return [
    e33,
    t14
  ];
}
function ke(e33, t14, n17) {
  e33 = +e33, t14 = +t14, n17 = (r13 = arguments.length) < 2 ? (t14 = e33, e33 = 0, 1) : r13 < 3 ? 1 : +n17;
  for (var o26 = -1, r13 = Math.max(0, Math.ceil((t14 - e33) / n17)) | 0, f25 = new Array(r13); ++o26 < r13; ) f25[o26] = e33 + o26 * n17;
  return f25;
}
var At = Fe(Math.random);
function Fe(e33) {
  return function(n17, o26 = 0, r13 = n17.length) {
    let f25 = r13 - (o26 = +o26);
    for (; f25; ) {
      let i20 = e33() * f25-- | 0, u17 = n17[f25 + o26];
      n17[f25 + o26] = n17[i20 + o26], n17[i20 + o26] = u17;
    }
    return n17;
  };
}
function Ve(e33, t14) {
  let n17 = 0;
  if (t14 === void 0) for (let o26 of e33) (o26 = +o26) && (n17 += o26);
  else {
    let o26 = -1;
    for (let r13 of e33) (r13 = +t14(r13, ++o26, e33)) && (n17 += r13);
  }
  return n17;
}
function _e(e33) {
  if (typeof e33[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  return Array.from(e33).reverse();
}

// deno:https://esm.sh/d3-axis@3.0.0/denonext/d3-axis.mjs
function R2(t14) {
  return t14;
}
var z = 1;
var F2 = 2;
var C = 3;
var k2 = 4;
var B2 = 1e-6;
function L2(t14) {
  return "translate(" + t14 + ",0)";
}
function O2(t14) {
  return "translate(0," + t14 + ")";
}
function T(t14) {
  return (r13) => +t14(r13);
}
function N2(t14, r13) {
  return r13 = Math.max(0, t14.bandwidth() - r13 * 2) / 2, t14.round() && (r13 = Math.round(r13)), (l19) => +t14(l19) + r13;
}
function X2() {
  return !this.__axis;
}
function V2(t14, r13) {
  var l19 = [], m22 = null, h20 = null, c23 = 6, a19 = 6, b25 = 3, e33 = typeof globalThis < "u" && globalThis.devicePixelRatio > 1 ? 0 : 0.5, o26 = t14 === z || t14 === k2 ? -1 : 1, x23 = t14 === k2 || t14 === F2 ? "x" : "y", S27 = t14 === z || t14 === C ? L2 : O2;
  function i20(n17) {
    var E29 = m22 ?? (r13.ticks ? r13.ticks.apply(r13, l19) : r13.domain()), I21 = h20 ?? (r13.tickFormat ? r13.tickFormat.apply(r13, l19) : R2), P20 = Math.max(c23, 0) + b25, H23 = r13.range(), y21 = +H23[0] + e33, A26 = +H23[H23.length - 1] + e33, v23 = (r13.bandwidth ? N2 : T)(r13.copy(), e33), g18 = n17.selection ? n17.selection() : n17, f25 = g18.selectAll(".domain").data([
      null
    ]), u17 = g18.selectAll(".tick").data(E29, r13).order(), _19 = u17.exit(), M22 = u17.enter().append("g").attr("class", "tick"), p21 = u17.select("line"), d18 = u17.select("text");
    f25 = f25.merge(f25.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), u17 = u17.merge(M22), p21 = p21.merge(M22.append("line").attr("stroke", "currentColor").attr(x23 + "2", o26 * c23)), d18 = d18.merge(M22.append("text").attr("fill", "currentColor").attr(x23, o26 * P20).attr("dy", t14 === z ? "0em" : t14 === C ? "0.71em" : "0.32em")), n17 !== g18 && (f25 = f25.transition(n17), u17 = u17.transition(n17), p21 = p21.transition(n17), d18 = d18.transition(n17), _19 = _19.transition(n17).attr("opacity", B2).attr("transform", function(s24) {
      return isFinite(s24 = v23(s24)) ? S27(s24 + e33) : this.getAttribute("transform");
    }), M22.attr("opacity", B2).attr("transform", function(s24) {
      var w26 = this.parentNode.__axis;
      return S27((w26 && isFinite(w26 = w26(s24)) ? w26 : v23(s24)) + e33);
    })), _19.remove(), f25.attr("d", t14 === k2 || t14 === F2 ? a19 ? "M" + o26 * a19 + "," + y21 + "H" + e33 + "V" + A26 + "H" + o26 * a19 : "M" + e33 + "," + y21 + "V" + A26 : a19 ? "M" + y21 + "," + o26 * a19 + "V" + e33 + "H" + A26 + "V" + o26 * a19 : "M" + y21 + "," + e33 + "H" + A26), u17.attr("opacity", 1).attr("transform", function(s24) {
      return S27(v23(s24) + e33);
    }), p21.attr(x23 + "2", o26 * c23), d18.attr(x23, o26 * P20).text(I21), g18.filter(X2).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t14 === F2 ? "start" : t14 === k2 ? "end" : "middle"), g18.each(function() {
      this.__axis = v23;
    });
  }
  return i20.scale = function(n17) {
    return arguments.length ? (r13 = n17, i20) : r13;
  }, i20.ticks = function() {
    return l19 = Array.from(arguments), i20;
  }, i20.tickArguments = function(n17) {
    return arguments.length ? (l19 = n17 == null ? [] : Array.from(n17), i20) : l19.slice();
  }, i20.tickValues = function(n17) {
    return arguments.length ? (m22 = n17 == null ? null : Array.from(n17), i20) : m22 && m22.slice();
  }, i20.tickFormat = function(n17) {
    return arguments.length ? (h20 = n17, i20) : h20;
  }, i20.tickSize = function(n17) {
    return arguments.length ? (c23 = a19 = +n17, i20) : c23;
  }, i20.tickSizeInner = function(n17) {
    return arguments.length ? (c23 = +n17, i20) : c23;
  }, i20.tickSizeOuter = function(n17) {
    return arguments.length ? (a19 = +n17, i20) : a19;
  }, i20.tickPadding = function(n17) {
    return arguments.length ? (b25 = +n17, i20) : b25;
  }, i20.offset = function(n17) {
    return arguments.length ? (e33 = +n17, i20) : e33;
  }, i20;
}
function q2(t14) {
  return V2(C, t14);
}

// deno:https://esm.sh/d3-dispatch@3.0.1/denonext/d3-dispatch.mjs
var l = {
  value: () => {
  }
};
function s2() {
  for (var r13 = 0, t14 = arguments.length, n17 = {}, e33; r13 < t14; ++r13) {
    if (!(e33 = arguments[r13] + "") || e33 in n17 || /[\s.]/.test(e33)) throw new Error("illegal type: " + e33);
    n17[e33] = [];
  }
  return new f2(n17);
}
function f2(r13) {
  this._ = r13;
}
function h3(r13, t14) {
  return r13.trim().split(/^|\s+/).map(function(n17) {
    var e33 = "", o26 = n17.indexOf(".");
    if (o26 >= 0 && (e33 = n17.slice(o26 + 1), n17 = n17.slice(0, o26)), n17 && !t14.hasOwnProperty(n17)) throw new Error("unknown type: " + n17);
    return {
      type: n17,
      name: e33
    };
  });
}
f2.prototype = s2.prototype = {
  constructor: f2,
  on: function(r13, t14) {
    var n17 = this._, e33 = h3(r13 + "", n17), o26, u17 = -1, i20 = e33.length;
    if (arguments.length < 2) {
      for (; ++u17 < i20; ) if ((o26 = (r13 = e33[u17]).type) && (o26 = w2(n17[o26], r13.name))) return o26;
      return;
    }
    if (t14 != null && typeof t14 != "function") throw new Error("invalid callback: " + t14);
    for (; ++u17 < i20; ) if (o26 = (r13 = e33[u17]).type) n17[o26] = a(n17[o26], r13.name, t14);
    else if (t14 == null) for (o26 in n17) n17[o26] = a(n17[o26], r13.name, null);
    return this;
  },
  copy: function() {
    var r13 = {}, t14 = this._;
    for (var n17 in t14) r13[n17] = t14[n17].slice();
    return new f2(r13);
  },
  call: function(r13, t14) {
    if ((o26 = arguments.length - 2) > 0) for (var n17 = new Array(o26), e33 = 0, o26, u17; e33 < o26; ++e33) n17[e33] = arguments[e33 + 2];
    if (!this._.hasOwnProperty(r13)) throw new Error("unknown type: " + r13);
    for (u17 = this._[r13], e33 = 0, o26 = u17.length; e33 < o26; ++e33) u17[e33].value.apply(t14, n17);
  },
  apply: function(r13, t14, n17) {
    if (!this._.hasOwnProperty(r13)) throw new Error("unknown type: " + r13);
    for (var e33 = this._[r13], o26 = 0, u17 = e33.length; o26 < u17; ++o26) e33[o26].value.apply(t14, n17);
  }
};
function w2(r13, t14) {
  for (var n17 = 0, e33 = r13.length, o26; n17 < e33; ++n17) if ((o26 = r13[n17]).name === t14) return o26.value;
}
function a(r13, t14, n17) {
  for (var e33 = 0, o26 = r13.length; e33 < o26; ++e33) if (r13[e33].name === t14) {
    r13[e33] = l, r13 = r13.slice(0, e33).concat(r13.slice(e33 + 1));
    break;
  }
  return n17 != null && r13.push({
    name: t14,
    value: n17
  }), r13;
}
var c3 = s2;

// deno:https://esm.sh/d3-selection@3.0.0/denonext/d3-selection.mjs
var E2 = "http://www.w3.org/1999/xhtml";
var N3 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: E2,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function x(t14) {
  var e33 = t14 += "", r13 = e33.indexOf(":");
  return r13 >= 0 && (e33 = t14.slice(0, r13)) !== "xmlns" && (t14 = t14.slice(r13 + 1)), N3.hasOwnProperty(e33) ? {
    space: N3[e33],
    local: t14
  } : t14;
}
function Vt(t14) {
  return function() {
    var e33 = this.ownerDocument, r13 = this.namespaceURI;
    return r13 === E2 && e33.documentElement.namespaceURI === E2 ? e33.createElement(t14) : e33.createElementNS(r13, t14);
  };
}
function Ft(t14) {
  return function() {
    return this.ownerDocument.createElementNS(t14.space, t14.local);
  };
}
function d(t14) {
  var e33 = x(t14);
  return (e33.local ? Ft : Vt)(e33);
}
function Bt() {
}
function g2(t14) {
  return t14 == null ? Bt : function() {
    return this.querySelector(t14);
  };
}
function H2(t14) {
  typeof t14 != "function" && (t14 = g2(t14));
  for (var e33 = this._groups, r13 = e33.length, i20 = new Array(r13), n17 = 0; n17 < r13; ++n17) for (var o26 = e33[n17], f25 = o26.length, l19 = i20[n17] = new Array(f25), u17, s24, c23 = 0; c23 < f25; ++c23) (u17 = o26[c23]) && (s24 = t14.call(u17, u17.__data__, c23, o26)) && ("__data__" in u17 && (s24.__data__ = u17.__data__), l19[c23] = s24);
  return new a2(i20, this._parents);
}
function v(t14) {
  return t14 == null ? [] : Array.isArray(t14) ? t14 : Array.from(t14);
}
function Mt() {
  return [];
}
function V3(t14) {
  return t14 == null ? Mt : function() {
    return this.querySelectorAll(t14);
  };
}
function Tt(t14) {
  return function() {
    return v(t14.apply(this, arguments));
  };
}
function U2(t14) {
  typeof t14 == "function" ? t14 = Tt(t14) : t14 = V3(t14);
  for (var e33 = this._groups, r13 = e33.length, i20 = [], n17 = [], o26 = 0; o26 < r13; ++o26) for (var f25 = e33[o26], l19 = f25.length, u17, s24 = 0; s24 < l19; ++s24) (u17 = f25[s24]) && (i20.push(t14.call(u17, u17.__data__, s24, f25)), n17.push(u17));
  return new a2(i20, n17);
}
function F3(t14) {
  return function() {
    return this.matches(t14);
  };
}
function L3(t14) {
  return function(e33) {
    return e33.matches(t14);
  };
}
var Pt = Array.prototype.find;
function qt(t14) {
  return function() {
    return Pt.call(this.children, t14);
  };
}
function Dt() {
  return this.firstElementChild;
}
function X3(t14) {
  return this.select(t14 == null ? Dt : qt(typeof t14 == "function" ? t14 : L3(t14)));
}
var It2 = Array.prototype.filter;
function Ot() {
  return Array.from(this.children);
}
function kt(t14) {
  return function() {
    return It2.call(this.children, t14);
  };
}
function z2(t14) {
  return this.selectAll(t14 == null ? Ot : kt(typeof t14 == "function" ? t14 : L3(t14)));
}
function Y(t14) {
  typeof t14 != "function" && (t14 = F3(t14));
  for (var e33 = this._groups, r13 = e33.length, i20 = new Array(r13), n17 = 0; n17 < r13; ++n17) for (var o26 = e33[n17], f25 = o26.length, l19 = i20[n17] = [], u17, s24 = 0; s24 < f25; ++s24) (u17 = o26[s24]) && t14.call(u17, u17.__data__, s24, o26) && l19.push(u17);
  return new a2(i20, this._parents);
}
function b2(t14) {
  return new Array(t14.length);
}
function K2() {
  return new a2(this._enter || this._groups.map(b2), this._parents);
}
function w3(t14, e33) {
  this.ownerDocument = t14.ownerDocument, this.namespaceURI = t14.namespaceURI, this._next = null, this._parent = t14, this.__data__ = e33;
}
w3.prototype = {
  constructor: w3,
  appendChild: function(t14) {
    return this._parent.insertBefore(t14, this._next);
  },
  insertBefore: function(t14, e33) {
    return this._parent.insertBefore(t14, e33);
  },
  querySelector: function(t14) {
    return this._parent.querySelector(t14);
  },
  querySelectorAll: function(t14) {
    return this._parent.querySelectorAll(t14);
  }
};
function G(t14) {
  return function() {
    return t14;
  };
}
function Ht(t14, e33, r13, i20, n17, o26) {
  for (var f25 = 0, l19, u17 = e33.length, s24 = o26.length; f25 < s24; ++f25) (l19 = e33[f25]) ? (l19.__data__ = o26[f25], i20[f25] = l19) : r13[f25] = new w3(t14, o26[f25]);
  for (; f25 < u17; ++f25) (l19 = e33[f25]) && (n17[f25] = l19);
}
function Ut(t14, e33, r13, i20, n17, o26, f25) {
  var l19, u17, s24 = /* @__PURE__ */ new Map(), c23 = e33.length, h20 = o26.length, m22 = new Array(c23), p21;
  for (l19 = 0; l19 < c23; ++l19) (u17 = e33[l19]) && (m22[l19] = p21 = f25.call(u17, u17.__data__, l19, e33) + "", s24.has(p21) ? n17[l19] = u17 : s24.set(p21, u17));
  for (l19 = 0; l19 < h20; ++l19) p21 = f25.call(t14, o26[l19], l19, o26) + "", (u17 = s24.get(p21)) ? (i20[l19] = u17, u17.__data__ = o26[l19], s24.delete(p21)) : r13[l19] = new w3(t14, o26[l19]);
  for (l19 = 0; l19 < c23; ++l19) (u17 = e33[l19]) && s24.get(m22[l19]) === u17 && (n17[l19] = u17);
}
function Xt(t14) {
  return t14.__data__;
}
function J2(t14, e33) {
  if (!arguments.length) return Array.from(this, Xt);
  var r13 = e33 ? Ut : Ht, i20 = this._parents, n17 = this._groups;
  typeof t14 != "function" && (t14 = G(t14));
  for (var o26 = n17.length, f25 = new Array(o26), l19 = new Array(o26), u17 = new Array(o26), s24 = 0; s24 < o26; ++s24) {
    var c23 = i20[s24], h20 = n17[s24], m22 = h20.length, p21 = zt(t14.call(c23, c23 && c23.__data__, s24, i20)), _19 = p21.length, D18 = l19[s24] = new Array(_19), I21 = f25[s24] = new Array(_19), Rt4 = u17[s24] = new Array(m22);
    r13(c23, h20, D18, I21, Rt4, p21, e33);
    for (var y21 = 0, C18 = 0, O15, k24; y21 < _19; ++y21) if (O15 = D18[y21]) {
      for (y21 >= C18 && (C18 = y21 + 1); !(k24 = I21[C18]) && ++C18 < _19; ) ;
      O15._next = k24 || null;
    }
  }
  return f25 = new a2(f25, i20), f25._enter = l19, f25._exit = u17, f25;
}
function zt(t14) {
  return typeof t14 == "object" && "length" in t14 ? t14 : Array.from(t14);
}
function Q2() {
  return new a2(this._exit || this._groups.map(b2), this._parents);
}
function W2(t14, e33, r13) {
  var i20 = this.enter(), n17 = this, o26 = this.exit();
  return typeof t14 == "function" ? (i20 = t14(i20), i20 && (i20 = i20.selection())) : i20 = i20.append(t14 + ""), e33 != null && (n17 = e33(n17), n17 && (n17 = n17.selection())), r13 == null ? o26.remove() : r13(o26), i20 && n17 ? i20.merge(n17).order() : n17;
}
function Z2(t14) {
  for (var e33 = t14.selection ? t14.selection() : t14, r13 = this._groups, i20 = e33._groups, n17 = r13.length, o26 = i20.length, f25 = Math.min(n17, o26), l19 = new Array(n17), u17 = 0; u17 < f25; ++u17) for (var s24 = r13[u17], c23 = i20[u17], h20 = s24.length, m22 = l19[u17] = new Array(h20), p21, _19 = 0; _19 < h20; ++_19) (p21 = s24[_19] || c23[_19]) && (m22[_19] = p21);
  for (; u17 < n17; ++u17) l19[u17] = r13[u17];
  return new a2(l19, this._parents);
}
function $3() {
  for (var t14 = this._groups, e33 = -1, r13 = t14.length; ++e33 < r13; ) for (var i20 = t14[e33], n17 = i20.length - 1, o26 = i20[n17], f25; --n17 >= 0; ) (f25 = i20[n17]) && (o26 && f25.compareDocumentPosition(o26) ^ 4 && o26.parentNode.insertBefore(f25, o26), o26 = f25);
  return this;
}
function j(t14) {
  t14 || (t14 = Yt);
  function e33(h20, m22) {
    return h20 && m22 ? t14(h20.__data__, m22.__data__) : !h20 - !m22;
  }
  for (var r13 = this._groups, i20 = r13.length, n17 = new Array(i20), o26 = 0; o26 < i20; ++o26) {
    for (var f25 = r13[o26], l19 = f25.length, u17 = n17[o26] = new Array(l19), s24, c23 = 0; c23 < l19; ++c23) (s24 = f25[c23]) && (u17[c23] = s24);
    u17.sort(e33);
  }
  return new a2(n17, this._parents).order();
}
function Yt(t14, e33) {
  return t14 < e33 ? -1 : t14 > e33 ? 1 : t14 >= e33 ? 0 : NaN;
}
function tt2() {
  var t14 = arguments[0];
  return arguments[0] = this, t14.apply(null, arguments), this;
}
function et2() {
  return Array.from(this);
}
function rt2() {
  for (var t14 = this._groups, e33 = 0, r13 = t14.length; e33 < r13; ++e33) for (var i20 = t14[e33], n17 = 0, o26 = i20.length; n17 < o26; ++n17) {
    var f25 = i20[n17];
    if (f25) return f25;
  }
  return null;
}
function nt2() {
  let t14 = 0;
  for (let e33 of this) ++t14;
  return t14;
}
function it3() {
  return !this.node();
}
function ot2(t14) {
  for (var e33 = this._groups, r13 = 0, i20 = e33.length; r13 < i20; ++r13) for (var n17 = e33[r13], o26 = 0, f25 = n17.length, l19; o26 < f25; ++o26) (l19 = n17[o26]) && t14.call(l19, l19.__data__, o26, n17);
  return this;
}
function Kt(t14) {
  return function() {
    this.removeAttribute(t14);
  };
}
function Gt(t14) {
  return function() {
    this.removeAttributeNS(t14.space, t14.local);
  };
}
function Jt(t14, e33) {
  return function() {
    this.setAttribute(t14, e33);
  };
}
function Qt(t14, e33) {
  return function() {
    this.setAttributeNS(t14.space, t14.local, e33);
  };
}
function Wt(t14, e33) {
  return function() {
    var r13 = e33.apply(this, arguments);
    r13 == null ? this.removeAttribute(t14) : this.setAttribute(t14, r13);
  };
}
function Zt(t14, e33) {
  return function() {
    var r13 = e33.apply(this, arguments);
    r13 == null ? this.removeAttributeNS(t14.space, t14.local) : this.setAttributeNS(t14.space, t14.local, r13);
  };
}
function lt(t14, e33) {
  var r13 = x(t14);
  if (arguments.length < 2) {
    var i20 = this.node();
    return r13.local ? i20.getAttributeNS(r13.space, r13.local) : i20.getAttribute(r13);
  }
  return this.each((e33 == null ? r13.local ? Gt : Kt : typeof e33 == "function" ? r13.local ? Zt : Wt : r13.local ? Qt : Jt)(r13, e33));
}
function A2(t14) {
  return t14.ownerDocument && t14.ownerDocument.defaultView || t14.document && t14 || t14.defaultView;
}
function $t(t14) {
  return function() {
    this.style.removeProperty(t14);
  };
}
function jt(t14, e33, r13) {
  return function() {
    this.style.setProperty(t14, e33, r13);
  };
}
function te(t14, e33, r13) {
  return function() {
    var i20 = e33.apply(this, arguments);
    i20 == null ? this.style.removeProperty(t14) : this.style.setProperty(t14, i20, r13);
  };
}
function ft2(t14, e33, r13) {
  return arguments.length > 1 ? this.each((e33 == null ? $t : typeof e33 == "function" ? te : jt)(t14, e33, r13 ?? "")) : ut(this.node(), t14);
}
function ut(t14, e33) {
  return t14.style.getPropertyValue(e33) || A2(t14).getComputedStyle(t14, null).getPropertyValue(e33);
}
function ee(t14) {
  return function() {
    delete this[t14];
  };
}
function re2(t14, e33) {
  return function() {
    this[t14] = e33;
  };
}
function ne(t14, e33) {
  return function() {
    var r13 = e33.apply(this, arguments);
    r13 == null ? delete this[t14] : this[t14] = r13;
  };
}
function st(t14, e33) {
  return arguments.length > 1 ? this.each((e33 == null ? ee : typeof e33 == "function" ? ne : re2)(t14, e33)) : this.node()[t14];
}
function ct(t14) {
  return t14.trim().split(/^|\s+/);
}
function B3(t14) {
  return t14.classList || new at(t14);
}
function at(t14) {
  this._node = t14, this._names = ct(t14.getAttribute("class") || "");
}
at.prototype = {
  add: function(t14) {
    var e33 = this._names.indexOf(t14);
    e33 < 0 && (this._names.push(t14), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t14) {
    var e33 = this._names.indexOf(t14);
    e33 >= 0 && (this._names.splice(e33, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t14) {
    return this._names.indexOf(t14) >= 0;
  }
};
function pt2(t14, e33) {
  for (var r13 = B3(t14), i20 = -1, n17 = e33.length; ++i20 < n17; ) r13.add(e33[i20]);
}
function ht2(t14, e33) {
  for (var r13 = B3(t14), i20 = -1, n17 = e33.length; ++i20 < n17; ) r13.remove(e33[i20]);
}
function ie(t14) {
  return function() {
    pt2(this, t14);
  };
}
function oe2(t14) {
  return function() {
    ht2(this, t14);
  };
}
function le(t14, e33) {
  return function() {
    (e33.apply(this, arguments) ? pt2 : ht2)(this, t14);
  };
}
function mt(t14, e33) {
  var r13 = ct(t14 + "");
  if (arguments.length < 2) {
    for (var i20 = B3(this.node()), n17 = -1, o26 = r13.length; ++n17 < o26; ) if (!i20.contains(r13[n17])) return false;
    return true;
  }
  return this.each((typeof e33 == "function" ? le : e33 ? ie : oe2)(r13, e33));
}
function fe2() {
  this.textContent = "";
}
function ue(t14) {
  return function() {
    this.textContent = t14;
  };
}
function se2(t14) {
  return function() {
    var e33 = t14.apply(this, arguments);
    this.textContent = e33 ?? "";
  };
}
function _t(t14) {
  return arguments.length ? this.each(t14 == null ? fe2 : (typeof t14 == "function" ? se2 : ue)(t14)) : this.node().textContent;
}
function ce2() {
  this.innerHTML = "";
}
function ae2(t14) {
  return function() {
    this.innerHTML = t14;
  };
}
function pe2(t14) {
  return function() {
    var e33 = t14.apply(this, arguments);
    this.innerHTML = e33 ?? "";
  };
}
function dt(t14) {
  return arguments.length ? this.each(t14 == null ? ce2 : (typeof t14 == "function" ? pe2 : ae2)(t14)) : this.node().innerHTML;
}
function he() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yt2() {
  return this.each(he);
}
function me2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xt2() {
  return this.each(me2);
}
function gt2(t14) {
  var e33 = typeof t14 == "function" ? t14 : d(t14);
  return this.select(function() {
    return this.appendChild(e33.apply(this, arguments));
  });
}
function _e2() {
  return null;
}
function vt(t14, e33) {
  var r13 = typeof t14 == "function" ? t14 : d(t14), i20 = e33 == null ? _e2 : typeof e33 == "function" ? e33 : g2(e33);
  return this.select(function() {
    return this.insertBefore(r13.apply(this, arguments), i20.apply(this, arguments) || null);
  });
}
function de2() {
  var t14 = this.parentNode;
  t14 && t14.removeChild(this);
}
function wt2() {
  return this.each(de2);
}
function ye2() {
  var t14 = this.cloneNode(false), e33 = this.parentNode;
  return e33 ? e33.insertBefore(t14, this.nextSibling) : t14;
}
function xe() {
  var t14 = this.cloneNode(true), e33 = this.parentNode;
  return e33 ? e33.insertBefore(t14, this.nextSibling) : t14;
}
function At2(t14) {
  return this.select(t14 ? xe : ye2);
}
function St(t14) {
  return arguments.length ? this.property("__data__", t14) : this.node().__data__;
}
function ge2(t14) {
  return function(e33) {
    t14.call(this, e33, this.__data__);
  };
}
function ve2(t14) {
  return t14.trim().split(/^|\s+/).map(function(e33) {
    var r13 = "", i20 = e33.indexOf(".");
    return i20 >= 0 && (r13 = e33.slice(i20 + 1), e33 = e33.slice(0, i20)), {
      type: e33,
      name: r13
    };
  });
}
function we(t14) {
  return function() {
    var e33 = this.__on;
    if (e33) {
      for (var r13 = 0, i20 = -1, n17 = e33.length, o26; r13 < n17; ++r13) o26 = e33[r13], (!t14.type || o26.type === t14.type) && o26.name === t14.name ? this.removeEventListener(o26.type, o26.listener, o26.options) : e33[++i20] = o26;
      ++i20 ? e33.length = i20 : delete this.__on;
    }
  };
}
function Ae2(t14, e33, r13) {
  return function() {
    var i20 = this.__on, n17, o26 = ge2(e33);
    if (i20) {
      for (var f25 = 0, l19 = i20.length; f25 < l19; ++f25) if ((n17 = i20[f25]).type === t14.type && n17.name === t14.name) {
        this.removeEventListener(n17.type, n17.listener, n17.options), this.addEventListener(n17.type, n17.listener = o26, n17.options = r13), n17.value = e33;
        return;
      }
    }
    this.addEventListener(t14.type, o26, r13), n17 = {
      type: t14.type,
      name: t14.name,
      value: e33,
      listener: o26,
      options: r13
    }, i20 ? i20.push(n17) : this.__on = [
      n17
    ];
  };
}
function Ct(t14, e33, r13) {
  var i20 = ve2(t14 + ""), n17, o26 = i20.length, f25;
  if (arguments.length < 2) {
    var l19 = this.node().__on;
    if (l19) {
      for (var u17 = 0, s24 = l19.length, c23; u17 < s24; ++u17) for (n17 = 0, c23 = l19[u17]; n17 < o26; ++n17) if ((f25 = i20[n17]).type === c23.type && f25.name === c23.name) return c23.value;
    }
    return;
  }
  for (l19 = e33 ? Ae2 : we, n17 = 0; n17 < o26; ++n17) this.each(l19(i20[n17], e33, r13));
  return this;
}
function Et(t14, e33, r13) {
  var i20 = A2(t14), n17 = i20.CustomEvent;
  typeof n17 == "function" ? n17 = new n17(e33, r13) : (n17 = i20.document.createEvent("Event"), r13 ? (n17.initEvent(e33, r13.bubbles, r13.cancelable), n17.detail = r13.detail) : n17.initEvent(e33, false, false)), t14.dispatchEvent(n17);
}
function Se2(t14, e33) {
  return function() {
    return Et(this, t14, e33);
  };
}
function Ce(t14, e33) {
  return function() {
    return Et(this, t14, e33.apply(this, arguments));
  };
}
function Nt(t14, e33) {
  return this.each((typeof e33 == "function" ? Ce : Se2)(t14, e33));
}
function* Lt() {
  for (var t14 = this._groups, e33 = 0, r13 = t14.length; e33 < r13; ++e33) for (var i20 = t14[e33], n17 = 0, o26 = i20.length, f25; n17 < o26; ++n17) (f25 = i20[n17]) && (yield f25);
}
var S2 = [
  null
];
function a2(t14, e33) {
  this._groups = t14, this._parents = e33;
}
function bt() {
  return new a2([
    [
      document.documentElement
    ]
  ], S2);
}
function Ee2() {
  return this;
}
a2.prototype = bt.prototype = {
  constructor: a2,
  select: H2,
  selectAll: U2,
  selectChild: X3,
  selectChildren: z2,
  filter: Y,
  data: J2,
  enter: K2,
  exit: Q2,
  join: W2,
  merge: Z2,
  selection: Ee2,
  order: $3,
  sort: j,
  call: tt2,
  nodes: et2,
  node: rt2,
  size: nt2,
  empty: it3,
  each: ot2,
  attr: lt,
  style: ft2,
  property: st,
  classed: mt,
  text: _t,
  html: dt,
  raise: yt2,
  lower: xt2,
  append: gt2,
  insert: vt,
  remove: wt2,
  clone: At2,
  datum: St,
  on: Ct,
  dispatch: Nt,
  [Symbol.iterator]: Lt
};
var Ne2 = bt;
function M2(t14) {
  return typeof t14 == "string" ? new a2([
    [
      document.querySelector(t14)
    ]
  ], [
    document.documentElement
  ]) : new a2([
    [
      t14
    ]
  ], S2);
}
var be2 = 0;
function P2() {
  return new T2();
}
function T2() {
  this._ = "@" + (++be2).toString(36);
}
T2.prototype = P2.prototype = {
  constructor: T2,
  get: function(t14) {
    for (var e33 = this._; !(e33 in t14); ) if (!(t14 = t14.parentNode)) return;
    return t14[e33];
  },
  set: function(t14, e33) {
    return t14[this._] = e33;
  },
  remove: function(t14) {
    return this._ in t14 && delete t14[this._];
  },
  toString: function() {
    return this._;
  }
};
function R3(t14) {
  let e33;
  for (; e33 = t14.sourceEvent; ) t14 = e33;
  return t14;
}
function q3(t14, e33) {
  if (t14 = R3(t14), e33 === void 0 && (e33 = t14.currentTarget), e33) {
    var r13 = e33.ownerSVGElement || e33;
    if (r13.createSVGPoint) {
      var i20 = r13.createSVGPoint();
      return i20.x = t14.clientX, i20.y = t14.clientY, i20 = i20.matrixTransform(e33.getScreenCTM().inverse()), [
        i20.x,
        i20.y
      ];
    }
    if (e33.getBoundingClientRect) {
      var n17 = e33.getBoundingClientRect();
      return [
        t14.clientX - n17.left - e33.clientLeft,
        t14.clientY - n17.top - e33.clientTop
      ];
    }
  }
  return [
    t14.pageX,
    t14.pageY
  ];
}

// deno:https://esm.sh/d3-drag@3.0.0/denonext/d3-drag.mjs
function w4(t14, { sourceEvent: o26, subject: i20, target: l19, identifier: f25, active: h20, x: b25, y: E29, dx: T21, dy: y21, dispatch: m22 }) {
  Object.defineProperties(this, {
    type: {
      value: t14,
      enumerable: true,
      configurable: true
    },
    sourceEvent: {
      value: o26,
      enumerable: true,
      configurable: true
    },
    subject: {
      value: i20,
      enumerable: true,
      configurable: true
    },
    target: {
      value: l19,
      enumerable: true,
      configurable: true
    },
    identifier: {
      value: f25,
      enumerable: true,
      configurable: true
    },
    active: {
      value: h20,
      enumerable: true,
      configurable: true
    },
    x: {
      value: b25,
      enumerable: true,
      configurable: true
    },
    y: {
      value: E29,
      enumerable: true,
      configurable: true
    },
    dx: {
      value: T21,
      enumerable: true,
      configurable: true
    },
    dy: {
      value: y21,
      enumerable: true,
      configurable: true
    },
    _: {
      value: m22
    }
  });
}
w4.prototype.on = function() {
  var t14 = this._.on.apply(this._, arguments);
  return t14 === this._ ? this : t14;
};

// deno:https://esm.sh/d3-color@3.1.0/denonext/d3-color.mjs
function b3(e33, t14, r13) {
  e33.prototype = t14.prototype = r13, r13.constructor = e33;
}
function g3(e33, t14) {
  var r13 = Object.create(e33.prototype);
  for (var n17 in t14) r13[n17] = t14[n17];
  return r13;
}
function u2() {
}
var p = 0.7;
var y = 1 / p;
var N4 = "\\s*([+-]?\\d+)\\s*";
var M3 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var c4 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var be3 = /^#([0-9a-f]{3,8})$/;
var de3 = new RegExp(`^rgb\\(${N4},${N4},${N4}\\)$`);
var ge3 = new RegExp(`^rgb\\(${c4},${c4},${c4}\\)$`);
var pe3 = new RegExp(`^rgba\\(${N4},${N4},${N4},${M3}\\)$`);
var me3 = new RegExp(`^rgba\\(${c4},${c4},${c4},${M3}\\)$`);
var we2 = new RegExp(`^hsl\\(${M3},${c4},${c4}\\)$`);
var ye3 = new RegExp(`^hsla\\(${M3},${c4},${c4},${M3}\\)$`);
var Y2 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
b3(u2, H3, {
  copy(e33) {
    return Object.assign(new this.constructor(), this, e33);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Z3,
  formatHex: Z3,
  formatHex8: $e,
  formatHsl: Ne3,
  formatRgb: F4,
  toString: F4
});
function Z3() {
  return this.rgb().formatHex();
}
function $e() {
  return this.rgb().formatHex8();
}
function Ne3() {
  return W3(this).formatHsl();
}
function F4() {
  return this.rgb().formatRgb();
}
function H3(e33) {
  var t14, r13;
  return e33 = (e33 + "").trim().toLowerCase(), (t14 = be3.exec(e33)) ? (r13 = t14[1].length, t14 = parseInt(t14[1], 16), r13 === 6 ? G2(t14) : r13 === 3 ? new a3(t14 >> 8 & 15 | t14 >> 4 & 240, t14 >> 4 & 15 | t14 & 240, (t14 & 15) << 4 | t14 & 15, 1) : r13 === 8 ? C2(t14 >> 24 & 255, t14 >> 16 & 255, t14 >> 8 & 255, (t14 & 255) / 255) : r13 === 4 ? C2(t14 >> 12 & 15 | t14 >> 8 & 240, t14 >> 8 & 15 | t14 >> 4 & 240, t14 >> 4 & 15 | t14 & 240, ((t14 & 15) << 4 | t14 & 15) / 255) : null) : (t14 = de3.exec(e33)) ? new a3(t14[1], t14[2], t14[3], 1) : (t14 = ge3.exec(e33)) ? new a3(t14[1] * 255 / 100, t14[2] * 255 / 100, t14[3] * 255 / 100, 1) : (t14 = pe3.exec(e33)) ? C2(t14[1], t14[2], t14[3], t14[4]) : (t14 = me3.exec(e33)) ? C2(t14[1] * 255 / 100, t14[2] * 255 / 100, t14[3] * 255 / 100, t14[4]) : (t14 = we2.exec(e33)) ? T3(t14[1], t14[2] / 100, t14[3] / 100, 1) : (t14 = ye3.exec(e33)) ? T3(t14[1], t14[2] / 100, t14[3] / 100, t14[4]) : Y2.hasOwnProperty(e33) ? G2(Y2[e33]) : e33 === "transparent" ? new a3(NaN, NaN, NaN, 0) : null;
}
function G2(e33) {
  return new a3(e33 >> 16 & 255, e33 >> 8 & 255, e33 & 255, 1);
}
function C2(e33, t14, r13, n17) {
  return n17 <= 0 && (e33 = t14 = r13 = NaN), new a3(e33, t14, r13, n17);
}
function R4(e33) {
  return e33 instanceof u2 || (e33 = H3(e33)), e33 ? (e33 = e33.rgb(), new a3(e33.r, e33.g, e33.b, e33.opacity)) : new a3();
}
function V4(e33, t14, r13, n17) {
  return arguments.length === 1 ? R4(e33) : new a3(e33, t14, r13, n17 ?? 1);
}
function a3(e33, t14, r13, n17) {
  this.r = +e33, this.g = +t14, this.b = +r13, this.opacity = +n17;
}
b3(a3, V4, g3(u2, {
  brighter(e33) {
    return e33 = e33 == null ? y : Math.pow(y, e33), new a3(this.r * e33, this.g * e33, this.b * e33, this.opacity);
  },
  darker(e33) {
    return e33 = e33 == null ? p : Math.pow(p, e33), new a3(this.r * e33, this.g * e33, this.b * e33, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new a3(w5(this.r), w5(this.g), w5(this.b), E3(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: J3,
  formatHex: J3,
  formatHex8: ve3,
  formatRgb: Q3,
  toString: Q3
}));
function J3() {
  return `#${m(this.r)}${m(this.g)}${m(this.b)}`;
}
function ve3() {
  return `#${m(this.r)}${m(this.g)}${m(this.b)}${m((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Q3() {
  let e33 = E3(this.opacity);
  return `${e33 === 1 ? "rgb(" : "rgba("}${w5(this.r)}, ${w5(this.g)}, ${w5(this.b)}${e33 === 1 ? ")" : `, ${e33})`}`;
}
function E3(e33) {
  return isNaN(e33) ? 1 : Math.max(0, Math.min(1, e33));
}
function w5(e33) {
  return Math.max(0, Math.min(255, Math.round(e33) || 0));
}
function m(e33) {
  return e33 = w5(e33), (e33 < 16 ? "0" : "") + e33.toString(16);
}
function T3(e33, t14, r13, n17) {
  return n17 <= 0 ? e33 = t14 = r13 = NaN : r13 <= 0 || r13 >= 1 ? e33 = t14 = NaN : t14 <= 0 && (e33 = NaN), new h4(e33, t14, r13, n17);
}
function W3(e33) {
  if (e33 instanceof h4) return new h4(e33.h, e33.s, e33.l, e33.opacity);
  if (e33 instanceof u2 || (e33 = H3(e33)), !e33) return new h4();
  if (e33 instanceof h4) return e33;
  e33 = e33.rgb();
  var t14 = e33.r / 255, r13 = e33.g / 255, n17 = e33.b / 255, i20 = Math.min(t14, r13, n17), f25 = Math.max(t14, r13, n17), s24 = NaN, x23 = f25 - i20, d18 = (f25 + i20) / 2;
  return x23 ? (t14 === f25 ? s24 = (r13 - n17) / x23 + (r13 < n17) * 6 : r13 === f25 ? s24 = (n17 - t14) / x23 + 2 : s24 = (t14 - r13) / x23 + 4, x23 /= d18 < 0.5 ? f25 + i20 : 2 - f25 - i20, s24 *= 60) : x23 = d18 > 0 && d18 < 1 ? 0 : s24, new h4(s24, x23, d18, e33.opacity);
}
function ee2(e33, t14, r13, n17) {
  return arguments.length === 1 ? W3(e33) : new h4(e33, t14, r13, n17 ?? 1);
}
function h4(e33, t14, r13, n17) {
  this.h = +e33, this.s = +t14, this.l = +r13, this.opacity = +n17;
}
b3(h4, ee2, g3(u2, {
  brighter(e33) {
    return e33 = e33 == null ? y : Math.pow(y, e33), new h4(this.h, this.s, this.l * e33, this.opacity);
  },
  darker(e33) {
    return e33 = e33 == null ? p : Math.pow(p, e33), new h4(this.h, this.s, this.l * e33, this.opacity);
  },
  rgb() {
    var e33 = this.h % 360 + (this.h < 0) * 360, t14 = isNaN(e33) || isNaN(this.s) ? 0 : this.s, r13 = this.l, n17 = r13 + (r13 < 0.5 ? r13 : 1 - r13) * t14, i20 = 2 * r13 - n17;
    return new a3(j2(e33 >= 240 ? e33 - 240 : e33 + 120, i20, n17), j2(e33, i20, n17), j2(e33 < 120 ? e33 + 240 : e33 - 120, i20, n17), this.opacity);
  },
  clamp() {
    return new h4(U3(this.h), q4(this.s), q4(this.l), E3(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    let e33 = E3(this.opacity);
    return `${e33 === 1 ? "hsl(" : "hsla("}${U3(this.h)}, ${q4(this.s) * 100}%, ${q4(this.l) * 100}%${e33 === 1 ? ")" : `, ${e33})`}`;
  }
}));
function U3(e33) {
  return e33 = (e33 || 0) % 360, e33 < 0 ? e33 + 360 : e33;
}
function q4(e33) {
  return Math.max(0, Math.min(1, e33 || 0));
}
function j2(e33, t14, r13) {
  return (e33 < 60 ? t14 + (r13 - t14) * e33 / 60 : e33 < 180 ? r13 : e33 < 240 ? t14 + (r13 - t14) * (240 - e33) / 60 : t14) * 255;
}
var P3 = Math.PI / 180;
var _ = 180 / Math.PI;
var I2 = 18;
var te2 = 0.96422;
var re3 = 1;
var ne2 = 0.82521;
var ie2 = 4 / 29;
var v2 = 6 / 29;
var ae3 = 3 * v2 * v2;
var Me2 = v2 * v2 * v2;
function fe3(e33) {
  if (e33 instanceof l2) return new l2(e33.l, e33.a, e33.b, e33.opacity);
  if (e33 instanceof o3) return le2(e33);
  e33 instanceof a3 || (e33 = R4(e33));
  var t14 = S3(e33.r), r13 = S3(e33.g), n17 = S3(e33.b), i20 = B4((0.2225045 * t14 + 0.7168786 * r13 + 0.0606169 * n17) / re3), f25, s24;
  return t14 === r13 && r13 === n17 ? f25 = s24 = i20 : (f25 = B4((0.4360747 * t14 + 0.3850649 * r13 + 0.1430804 * n17) / te2), s24 = B4((0.0139322 * t14 + 0.0971045 * r13 + 0.7141733 * n17) / ne2)), new l2(116 * i20 - 16, 500 * (f25 - i20), 200 * (i20 - s24), e33.opacity);
}
function A3(e33, t14, r13, n17) {
  return arguments.length === 1 ? fe3(e33) : new l2(e33, t14, r13, n17 ?? 1);
}
function l2(e33, t14, r13, n17) {
  this.l = +e33, this.a = +t14, this.b = +r13, this.opacity = +n17;
}
b3(l2, A3, g3(u2, {
  brighter(e33) {
    return new l2(this.l + I2 * (e33 ?? 1), this.a, this.b, this.opacity);
  },
  darker(e33) {
    return new l2(this.l - I2 * (e33 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var e33 = (this.l + 16) / 116, t14 = isNaN(this.a) ? e33 : e33 + this.a / 500, r13 = isNaN(this.b) ? e33 : e33 - this.b / 200;
    return t14 = te2 * D2(t14), e33 = re3 * D2(e33), r13 = ne2 * D2(r13), new a3(O3(3.1338561 * t14 - 1.6168667 * e33 - 0.4906146 * r13), O3(-0.9787684 * t14 + 1.9161415 * e33 + 0.033454 * r13), O3(0.0719453 * t14 - 0.2289914 * e33 + 1.4052427 * r13), this.opacity);
  }
}));
function B4(e33) {
  return e33 > Me2 ? Math.pow(e33, 1 / 3) : e33 / ae3 + ie2;
}
function D2(e33) {
  return e33 > v2 ? e33 * e33 * e33 : ae3 * (e33 - ie2);
}
function O3(e33) {
  return 255 * (e33 <= 31308e-7 ? 12.92 * e33 : 1.055 * Math.pow(e33, 1 / 2.4) - 0.055);
}
function S3(e33) {
  return (e33 /= 255) <= 0.04045 ? e33 / 12.92 : Math.pow((e33 + 0.055) / 1.055, 2.4);
}
function se3(e33) {
  if (e33 instanceof o3) return new o3(e33.h, e33.c, e33.l, e33.opacity);
  if (e33 instanceof l2 || (e33 = fe3(e33)), e33.a === 0 && e33.b === 0) return new o3(NaN, 0 < e33.l && e33.l < 100 ? 0 : NaN, e33.l, e33.opacity);
  var t14 = Math.atan2(e33.b, e33.a) * _;
  return new o3(t14 < 0 ? t14 + 360 : t14, Math.sqrt(e33.a * e33.a + e33.b * e33.b), e33.l, e33.opacity);
}
function he2(e33, t14, r13, n17) {
  return arguments.length === 1 ? se3(e33) : new o3(e33, t14, r13, n17 ?? 1);
}
function o3(e33, t14, r13, n17) {
  this.h = +e33, this.c = +t14, this.l = +r13, this.opacity = +n17;
}
function le2(e33) {
  if (isNaN(e33.h)) return new l2(e33.l, 0, 0, e33.opacity);
  var t14 = e33.h * P3;
  return new l2(e33.l, Math.cos(t14) * e33.c, Math.sin(t14) * e33.c, e33.opacity);
}
b3(o3, he2, g3(u2, {
  brighter(e33) {
    return new o3(this.h, this.c, this.l + I2 * (e33 ?? 1), this.opacity);
  },
  darker(e33) {
    return new o3(this.h, this.c, this.l - I2 * (e33 ?? 1), this.opacity);
  },
  rgb() {
    return le2(this).rgb();
  }
}));
var oe3 = -0.14861;
var L4 = 1.78277;
var K3 = -0.29227;
var z3 = -0.90649;
var k3 = 1.97294;
var xe2 = k3 * z3;
var ce3 = k3 * L4;
var ue2 = L4 * K3 - z3 * oe3;
function ke2(e33) {
  if (e33 instanceof $4) return new $4(e33.h, e33.s, e33.l, e33.opacity);
  e33 instanceof a3 || (e33 = R4(e33));
  var t14 = e33.r / 255, r13 = e33.g / 255, n17 = e33.b / 255, i20 = (ue2 * n17 + xe2 * t14 - ce3 * r13) / (ue2 + xe2 - ce3), f25 = n17 - i20, s24 = (k3 * (r13 - i20) - K3 * f25) / z3, x23 = Math.sqrt(s24 * s24 + f25 * f25) / (k3 * i20 * (1 - i20)), d18 = x23 ? Math.atan2(s24, f25) * _ - 120 : NaN;
  return new $4(d18 < 0 ? d18 + 360 : d18, x23, i20, e33.opacity);
}
function X4(e33, t14, r13, n17) {
  return arguments.length === 1 ? ke2(e33) : new $4(e33, t14, r13, n17 ?? 1);
}
function $4(e33, t14, r13, n17) {
  this.h = +e33, this.s = +t14, this.l = +r13, this.opacity = +n17;
}
b3($4, X4, g3(u2, {
  brighter(e33) {
    return e33 = e33 == null ? y : Math.pow(y, e33), new $4(this.h, this.s, this.l * e33, this.opacity);
  },
  darker(e33) {
    return e33 = e33 == null ? p : Math.pow(p, e33), new $4(this.h, this.s, this.l * e33, this.opacity);
  },
  rgb() {
    var e33 = isNaN(this.h) ? 0 : (this.h + 120) * P3, t14 = +this.l, r13 = isNaN(this.s) ? 0 : this.s * t14 * (1 - t14), n17 = Math.cos(e33), i20 = Math.sin(e33);
    return new a3(255 * (t14 + r13 * (oe3 * n17 + L4 * i20)), 255 * (t14 + r13 * (K3 * n17 + z3 * i20)), 255 * (t14 + r13 * (k3 * n17)), this.opacity);
  }
}));

// deno:https://esm.sh/d3-interpolate@3.0.1/denonext/d3-interpolate.mjs
function T4(e33, r13, t14, n17, o26) {
  var u17 = e33 * e33, i20 = u17 * e33;
  return ((1 - 3 * e33 + 3 * u17 - i20) * r13 + (4 - 6 * u17 + 3 * i20) * t14 + (1 + 3 * e33 + 3 * u17 - 3 * i20) * n17 + i20 * o26) / 6;
}
function D3(e33) {
  var r13 = e33.length - 1;
  return function(t14) {
    var n17 = t14 <= 0 ? t14 = 0 : t14 >= 1 ? (t14 = 1, r13 - 1) : Math.floor(t14 * r13), o26 = e33[n17], u17 = e33[n17 + 1], i20 = n17 > 0 ? e33[n17 - 1] : 2 * o26 - u17, f25 = n17 < r13 - 1 ? e33[n17 + 2] : 2 * u17 - o26;
    return T4((t14 - n17 / r13) * r13, i20, o26, u17, f25);
  };
}
function H4(e33) {
  var r13 = e33.length;
  return function(t14) {
    var n17 = Math.floor(((t14 %= 1) < 0 ? ++t14 : t14) * r13), o26 = e33[(n17 + r13 - 1) % r13], u17 = e33[n17 % r13], i20 = e33[(n17 + 1) % r13], f25 = e33[(n17 + 2) % r13];
    return T4((t14 - n17 / r13) * r13, o26, u17, i20, f25);
  };
}
var w6 = (e33) => () => e33;
function Z4(e33, r13) {
  return function(t14) {
    return e33 + t14 * r13;
  };
}
function mr(e33, r13, t14) {
  return e33 = Math.pow(e33, t14), r13 = Math.pow(r13, t14) - e33, t14 = 1 / t14, function(n17) {
    return Math.pow(e33 + n17 * r13, t14);
  };
}
function v3(e33, r13) {
  var t14 = r13 - e33;
  return t14 ? Z4(e33, t14 > 180 || t14 < -180 ? t14 - 360 * Math.round(t14 / 360) : t14) : w6(isNaN(e33) ? r13 : e33);
}
function F5(e33) {
  return (e33 = +e33) == 1 ? s3 : function(r13, t14) {
    return t14 - r13 ? mr(r13, t14, e33) : w6(isNaN(r13) ? t14 : r13);
  };
}
function s3(e33, r13) {
  var t14 = r13 - e33;
  return t14 ? Z4(e33, t14) : w6(isNaN(e33) ? r13 : e33);
}
var C3 = function e(r13) {
  var t14 = F5(r13);
  function n17(o26, u17) {
    var i20 = t14((o26 = V4(o26)).r, (u17 = V4(u17)).r), f25 = t14(o26.g, u17.g), c23 = t14(o26.b, u17.b), l19 = s3(o26.opacity, u17.opacity);
    return function(a19) {
      return o26.r = i20(a19), o26.g = f25(a19), o26.b = c23(a19), o26.opacity = l19(a19), o26 + "";
    };
  }
  return n17.gamma = e, n17;
}(1);
function J4(e33) {
  return function(r13) {
    var t14 = r13.length, n17 = new Array(t14), o26 = new Array(t14), u17 = new Array(t14), i20, f25;
    for (i20 = 0; i20 < t14; ++i20) f25 = V4(r13[i20]), n17[i20] = f25.r || 0, o26[i20] = f25.g || 0, u17[i20] = f25.b || 0;
    return n17 = e33(n17), o26 = e33(o26), u17 = e33(u17), f25.opacity = 1, function(c23) {
      return f25.r = n17(c23), f25.g = o26(c23), f25.b = u17(c23), f25 + "";
    };
  };
}
var sr = J4(D3);
var hr = J4(H4);
function S4(e33, r13) {
  r13 || (r13 = []);
  var t14 = e33 ? Math.min(r13.length, e33.length) : 0, n17 = r13.slice(), o26;
  return function(u17) {
    for (o26 = 0; o26 < t14; ++o26) n17[o26] = e33[o26] * (1 - u17) + r13[o26] * u17;
    return n17;
  };
}
function L5(e33) {
  return ArrayBuffer.isView(e33) && !(e33 instanceof DataView);
}
function I3(e33, r13) {
  var t14 = r13 ? r13.length : 0, n17 = e33 ? Math.min(t14, e33.length) : 0, o26 = new Array(n17), u17 = new Array(t14), i20;
  for (i20 = 0; i20 < n17; ++i20) o26[i20] = y2(e33[i20], r13[i20]);
  for (; i20 < t14; ++i20) u17[i20] = r13[i20];
  return function(f25) {
    for (i20 = 0; i20 < n17; ++i20) u17[i20] = o26[i20](f25);
    return u17;
  };
}
function z4(e33, r13) {
  var t14 = /* @__PURE__ */ new Date();
  return e33 = +e33, r13 = +r13, function(n17) {
    return t14.setTime(e33 * (1 - n17) + r13 * n17), t14;
  };
}
function x2(e33, r13) {
  return e33 = +e33, r13 = +r13, function(t14) {
    return e33 * (1 - t14) + r13 * t14;
  };
}
function O4(e33, r13) {
  var t14 = {}, n17 = {}, o26;
  (e33 === null || typeof e33 != "object") && (e33 = {}), (r13 === null || typeof r13 != "object") && (r13 = {});
  for (o26 in r13) o26 in e33 ? t14[o26] = y2(e33[o26], r13[o26]) : n17[o26] = r13[o26];
  return function(u17) {
    for (o26 in t14) n17[o26] = t14[o26](u17);
    return n17;
  };
}
var V5 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var E4 = new RegExp(V5.source, "g");
function gr(e33) {
  return function() {
    return e33;
  };
}
function dr(e33) {
  return function(r13) {
    return e33(r13) + "";
  };
}
function _2(e33, r13) {
  var t14 = V5.lastIndex = E4.lastIndex = 0, n17, o26, u17, i20 = -1, f25 = [], c23 = [];
  for (e33 = e33 + "", r13 = r13 + ""; (n17 = V5.exec(e33)) && (o26 = E4.exec(r13)); ) (u17 = o26.index) > t14 && (u17 = r13.slice(t14, u17), f25[i20] ? f25[i20] += u17 : f25[++i20] = u17), (n17 = n17[0]) === (o26 = o26[0]) ? f25[i20] ? f25[i20] += o26 : f25[++i20] = o26 : (f25[++i20] = null, c23.push({
    i: i20,
    x: x2(n17, o26)
  })), t14 = E4.lastIndex;
  return t14 < r13.length && (u17 = r13.slice(t14), f25[i20] ? f25[i20] += u17 : f25[++i20] = u17), f25.length < 2 ? c23[0] ? dr(c23[0].x) : gr(r13) : (r13 = c23.length, function(l19) {
    for (var a19 = 0, p21; a19 < r13; ++a19) f25[(p21 = c23[a19]).i] = p21.x(l19);
    return f25.join("");
  });
}
function y2(e33, r13) {
  var t14 = typeof r13, n17;
  return r13 == null || t14 === "boolean" ? w6(r13) : (t14 === "number" ? x2 : t14 === "string" ? (n17 = H3(r13)) ? (r13 = n17, C3) : _2 : r13 instanceof H3 ? C3 : r13 instanceof Date ? z4 : L5(r13) ? S4 : Array.isArray(r13) ? I3 : typeof r13.valueOf != "function" && typeof r13.toString != "function" || isNaN(r13) ? O4 : x2)(e33, r13);
}
function yr(e33, r13) {
  return e33 = +e33, r13 = +r13, function(t14) {
    return Math.round(e33 * (1 - t14) + r13 * t14);
  };
}
var $5 = 180 / Math.PI;
var B5 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function G3(e33, r13, t14, n17, o26, u17) {
  var i20, f25, c23;
  return (i20 = Math.sqrt(e33 * e33 + r13 * r13)) && (e33 /= i20, r13 /= i20), (c23 = e33 * t14 + r13 * n17) && (t14 -= e33 * c23, n17 -= r13 * c23), (f25 = Math.sqrt(t14 * t14 + n17 * n17)) && (t14 /= f25, n17 /= f25, c23 /= f25), e33 * n17 < r13 * t14 && (e33 = -e33, r13 = -r13, c23 = -c23, i20 = -i20), {
    translateX: o26,
    translateY: u17,
    rotate: Math.atan2(r13, e33) * $5,
    skewX: Math.atan(c23) * $5,
    scaleX: i20,
    scaleY: f25
  };
}
var k4;
function P4(e33) {
  let r13 = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e33 + "");
  return r13.isIdentity ? B5 : G3(r13.a, r13.b, r13.c, r13.d, r13.e, r13.f);
}
function b4(e33) {
  return e33 == null ? B5 : (k4 || (k4 = document.createElementNS("http://www.w3.org/2000/svg", "g")), k4.setAttribute("transform", e33), (e33 = k4.transform.baseVal.consolidate()) ? (e33 = e33.matrix, G3(e33.a, e33.b, e33.c, e33.d, e33.e, e33.f)) : B5);
}
function rr(e33, r13, t14, n17) {
  function o26(l19) {
    return l19.length ? l19.pop() + " " : "";
  }
  function u17(l19, a19, p21, m22, h20, d18) {
    if (l19 !== p21 || a19 !== m22) {
      var g18 = h20.push("translate(", null, r13, null, t14);
      d18.push({
        i: g18 - 4,
        x: x2(l19, p21)
      }, {
        i: g18 - 2,
        x: x2(a19, m22)
      });
    } else (p21 || m22) && h20.push("translate(" + p21 + r13 + m22 + t14);
  }
  function i20(l19, a19, p21, m22) {
    l19 !== a19 ? (l19 - a19 > 180 ? a19 += 360 : a19 - l19 > 180 && (l19 += 360), m22.push({
      i: p21.push(o26(p21) + "rotate(", null, n17) - 2,
      x: x2(l19, a19)
    })) : a19 && p21.push(o26(p21) + "rotate(" + a19 + n17);
  }
  function f25(l19, a19, p21, m22) {
    l19 !== a19 ? m22.push({
      i: p21.push(o26(p21) + "skewX(", null, n17) - 2,
      x: x2(l19, a19)
    }) : a19 && p21.push(o26(p21) + "skewX(" + a19 + n17);
  }
  function c23(l19, a19, p21, m22, h20, d18) {
    if (l19 !== p21 || a19 !== m22) {
      var g18 = h20.push(o26(h20) + "scale(", null, ",", null, ")");
      d18.push({
        i: g18 - 4,
        x: x2(l19, p21)
      }, {
        i: g18 - 2,
        x: x2(a19, m22)
      });
    } else (p21 !== 1 || m22 !== 1) && h20.push(o26(h20) + "scale(" + p21 + "," + m22 + ")");
  }
  return function(l19, a19) {
    var p21 = [], m22 = [];
    return l19 = e33(l19), a19 = e33(a19), u17(l19.translateX, l19.translateY, a19.translateX, a19.translateY, p21, m22), i20(l19.rotate, a19.rotate, p21, m22), f25(l19.skewX, a19.skewX, p21, m22), c23(l19.scaleX, l19.scaleY, a19.scaleX, a19.scaleY, p21, m22), l19 = a19 = null, function(h20) {
      for (var d18 = -1, g18 = m22.length, M22; ++d18 < g18; ) p21[(M22 = m22[d18]).i] = M22.x(h20);
      return p21.join("");
    };
  };
}
var wr = rr(P4, "px, ", "px)", "deg)");
var Ar = rr(b4, ", ", ")", ")");
var Xr = 1e-12;
function er(e33) {
  return ((e33 = Math.exp(e33)) + 1 / e33) / 2;
}
function Nr(e33) {
  return ((e33 = Math.exp(e33)) - 1 / e33) / 2;
}
function Sr(e33) {
  return ((e33 = Math.exp(2 * e33)) - 1) / (e33 + 1);
}
var Cr = function e2(r13, t14, n17) {
  function o26(u17, i20) {
    var f25 = u17[0], c23 = u17[1], l19 = u17[2], a19 = i20[0], p21 = i20[1], m22 = i20[2], h20 = a19 - f25, d18 = p21 - c23, g18 = h20 * h20 + d18 * d18, M22, A26;
    if (g18 < Xr) A26 = Math.log(m22 / l19) / r13, M22 = function(N20) {
      return [
        f25 + N20 * h20,
        c23 + N20 * d18,
        l19 * Math.exp(r13 * N20 * A26)
      ];
    };
    else {
      var R19 = Math.sqrt(g18), Y20 = (m22 * m22 - l19 * l19 + n17 * g18) / (2 * l19 * t14 * R19), q29 = (m22 * m22 - l19 * l19 - n17 * g18) / (2 * m22 * t14 * R19), X22 = Math.log(Math.sqrt(Y20 * Y20 + 1) - Y20), cr = Math.log(Math.sqrt(q29 * q29 + 1) - q29);
      A26 = (cr - X22) / r13, M22 = function(N20) {
        var Q24 = N20 * A26, K22 = er(X22), W23 = l19 / (t14 * R19) * (K22 * Sr(r13 * Q24 + X22) - Nr(X22));
        return [
          f25 + W23 * h20,
          c23 + W23 * d18,
          l19 * K22 / er(r13 * Q24 + X22)
        ];
      };
    }
    return M22.duration = A26 * 1e3 * r13 / Math.SQRT2, M22;
  }
  return o26.rho = function(u17) {
    var i20 = Math.max(1e-3, +u17), f25 = i20 * i20, c23 = f25 * f25;
    return e2(i20, f25, c23);
  }, o26;
}(Math.SQRT2, 2, 4);
function or(e33) {
  return function(r13, t14) {
    var n17 = e33((r13 = ee2(r13)).h, (t14 = ee2(t14)).h), o26 = s3(r13.s, t14.s), u17 = s3(r13.l, t14.l), i20 = s3(r13.opacity, t14.opacity);
    return function(f25) {
      return r13.h = n17(f25), r13.s = o26(f25), r13.l = u17(f25), r13.opacity = i20(f25), r13 + "";
    };
  };
}
var Lr = or(v3);
var Br = or(s3);
function ir(e33, r13) {
  var t14 = s3((e33 = A3(e33)).l, (r13 = A3(r13)).l), n17 = s3(e33.a, r13.a), o26 = s3(e33.b, r13.b), u17 = s3(e33.opacity, r13.opacity);
  return function(i20) {
    return e33.l = t14(i20), e33.a = n17(i20), e33.b = o26(i20), e33.opacity = u17(i20), e33 + "";
  };
}
function fr(e33) {
  return function(r13, t14) {
    var n17 = e33((r13 = he2(r13)).h, (t14 = he2(t14)).h), o26 = s3(r13.c, t14.c), u17 = s3(r13.l, t14.l), i20 = s3(r13.opacity, t14.opacity);
    return function(f25) {
      return r13.h = n17(f25), r13.c = o26(f25), r13.l = u17(f25), r13.opacity = i20(f25), r13 + "";
    };
  };
}
var kr = fr(v3);
var Rr = fr(s3);
function lr(e33) {
  return function r13(t14) {
    t14 = +t14;
    function n17(o26, u17) {
      var i20 = e33((o26 = X4(o26)).h, (u17 = X4(u17)).h), f25 = s3(o26.s, u17.s), c23 = s3(o26.l, u17.l), l19 = s3(o26.opacity, u17.opacity);
      return function(a19) {
        return o26.h = i20(a19), o26.s = f25(a19), o26.l = c23(Math.pow(a19, t14)), o26.opacity = l19(a19), o26 + "";
      };
    }
    return n17.gamma = r13, n17;
  }(1);
}
var Yr = lr(v3);
var qr = lr(s3);
function pr(e33, r13) {
  r13 === void 0 && (r13 = e33, e33 = y2);
  for (var t14 = 0, n17 = r13.length - 1, o26 = r13[0], u17 = new Array(n17 < 0 ? 0 : n17); t14 < n17; ) u17[t14] = e33(o26, o26 = r13[++t14]);
  return function(i20) {
    var f25 = Math.max(0, Math.min(n17 - 1, Math.floor(i20 *= n17)));
    return u17[f25](i20 - f25);
  };
}
function Tr(e33, r13) {
  for (var t14 = new Array(r13), n17 = 0; n17 < r13; ++n17) t14[n17] = e33(n17 / (r13 - 1));
  return t14;
}

// deno:https://esm.sh/d3-timer@3.0.1/denonext/d3-timer.mjs
var f3 = 0;
var l3 = 0;
var u3 = 0;
var F6 = 1e3;
var _3;
var s4;
var h5 = 0;
var o4 = 0;
var x3 = 0;
var c5 = typeof performance == "object" && performance.now ? performance : Date;
var I4 = typeof globalThis == "object" && globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame.bind(globalThis) : function(n17) {
  setTimeout(n17, 17);
};
function w7() {
  return o4 || (I4(q5), o4 = c5.now() + x3);
}
function q5() {
  o4 = 0;
}
function i3() {
  this._call = this._time = this._next = null;
}
i3.prototype = y3.prototype = {
  constructor: i3,
  restart: function(n17, t14, r13) {
    if (typeof n17 != "function") throw new TypeError("callback is not a function");
    r13 = (r13 == null ? w7() : +r13) + (t14 == null ? 0 : +t14), !this._next && s4 !== this && (s4 ? s4._next = this : _3 = this, s4 = this), this._call = n17, this._time = r13, v4();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, v4());
  }
};
function y3(n17, t14, r13) {
  var e33 = new i3();
  return e33.restart(n17, t14, r13), e33;
}
function b5() {
  w7(), ++f3;
  for (var n17 = _3, t14; n17; ) (t14 = o4 - n17._time) >= 0 && n17._call.call(void 0, t14), n17 = n17._next;
  --f3;
}
function T5() {
  o4 = (h5 = c5.now()) + x3, f3 = l3 = 0;
  try {
    b5();
  } finally {
    f3 = 0, D4(), o4 = 0;
  }
}
function A4() {
  var n17 = c5.now(), t14 = n17 - h5;
  t14 > F6 && (x3 -= t14, h5 = n17);
}
function D4() {
  for (var n17, t14 = _3, r13, e33 = 1 / 0; t14; ) t14._call ? (e33 > t14._time && (e33 = t14._time), n17 = t14, t14 = t14._next) : (r13 = t14._next, t14._next = null, t14 = n17 ? n17._next = r13 : _3 = r13);
  s4 = n17, v4(e33);
}
function v4(n17) {
  if (!f3) {
    l3 && (l3 = clearTimeout(l3));
    var t14 = n17 - o4;
    t14 > 24 ? (n17 < 1 / 0 && (l3 = setTimeout(T5, n17 - c5.now() - x3)), u3 && (u3 = clearInterval(u3))) : (u3 || (h5 = c5.now(), u3 = setInterval(A4, F6)), f3 = 1, I4(T5));
  }
}
function N5(n17, t14, r13) {
  var e33 = new i3();
  return t14 = t14 == null ? 0 : +t14, e33.restart((p21) => {
    e33.stop(), n17(p21 + t14);
  }, t14, r13), e33;
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/schedule.mjs
var A5 = c3("start", "end", "cancel", "interrupt");
var R5 = [];
var g4 = 0;
var l4 = 1;
var s5 = 2;
var m2 = 3;
var y4 = 4;
var E5 = 5;
var x4 = 6;
function C4(r13, e33, t14, i20, u17, c23) {
  var _19 = r13.__transition;
  if (!_19) r13.__transition = {};
  else if (t14 in _19) return;
  G4(r13, t14, {
    name: e33,
    index: i20,
    group: u17,
    on: A5,
    tween: R5,
    time: c23.time,
    delay: c23.delay,
    duration: c23.duration,
    ease: c23.ease,
    timer: null,
    state: g4
  });
}
function U4(r13, e33) {
  var t14 = D5(r13, e33);
  if (t14.state > g4) throw new Error("too late; already scheduled");
  return t14;
}
function j3(r13, e33) {
  var t14 = D5(r13, e33);
  if (t14.state > m2) throw new Error("too late; already running");
  return t14;
}
function D5(r13, e33) {
  var t14 = r13.__transition;
  if (!t14 || !(t14 = t14[e33])) throw new Error("transition not found");
  return t14;
}
function G4(r13, e33, t14) {
  var i20 = r13.__transition, u17;
  i20[e33] = t14, t14.timer = y3(c23, 0, t14.time);
  function c23(o26) {
    t14.state = l4, t14.timer.restart(_19, t14.delay, t14.time), t14.delay <= o26 && _19(o26 - t14.delay);
  }
  function _19(o26) {
    var n17, p21, d18, a19;
    if (t14.state !== l4) return v23();
    for (n17 in i20) if (a19 = i20[n17], a19.name === t14.name) {
      if (a19.state === m2) return N5(_19);
      a19.state === y4 ? (a19.state = x4, a19.timer.stop(), a19.on.call("interrupt", r13, r13.__data__, a19.index, a19.group), delete i20[n17]) : +n17 < e33 && (a19.state = x4, a19.timer.stop(), a19.on.call("cancel", r13, r13.__data__, a19.index, a19.group), delete i20[n17]);
    }
    if (N5(function() {
      t14.state === m2 && (t14.state = y4, t14.timer.restart(h20, t14.delay, t14.time), h20(o26));
    }), t14.state = s5, t14.on.call("start", r13, r13.__data__, t14.index, t14.group), t14.state === s5) {
      for (t14.state = m2, u17 = new Array(d18 = t14.tween.length), n17 = 0, p21 = -1; n17 < d18; ++n17) (a19 = t14.tween[n17].value.call(r13, r13.__data__, t14.index, t14.group)) && (u17[++p21] = a19);
      u17.length = p21 + 1;
    }
  }
  function h20(o26) {
    for (var n17 = o26 < t14.duration ? t14.ease.call(null, o26 / t14.duration) : (t14.timer.restart(v23), t14.state = E5, 1), p21 = -1, d18 = u17.length; ++p21 < d18; ) u17[p21].call(r13, n17);
    t14.state === E5 && (t14.on.call("end", r13, r13.__data__, t14.index, t14.group), v23());
  }
  function v23() {
    t14.state = x4, t14.timer.stop(), delete i20[e33];
    for (var o26 in i20) return;
    delete r13.__transition;
  }
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/tween.mjs
function s6(t14, r13) {
  var u17, n17;
  return function() {
    var e33 = j3(this, t14), a19 = e33.tween;
    if (a19 !== u17) {
      n17 = u17 = a19;
      for (var f25 = 0, o26 = n17.length; f25 < o26; ++f25) if (n17[f25].name === r13) {
        n17 = n17.slice(), n17.splice(f25, 1);
        break;
      }
    }
    e33.tween = n17;
  };
}
function v5(t14, r13, u17) {
  var n17, e33;
  if (typeof u17 != "function") throw new Error();
  return function() {
    var a19 = j3(this, t14), f25 = a19.tween;
    if (f25 !== n17) {
      e33 = (n17 = f25).slice();
      for (var o26 = {
        name: r13,
        value: u17
      }, i20 = 0, c23 = e33.length; i20 < c23; ++i20) if (e33[i20].name === r13) {
        e33[i20] = o26;
        break;
      }
      i20 === c23 && e33.push(o26);
    }
    a19.tween = e33;
  };
}
function d2(t14, r13) {
  var u17 = this._id;
  if (t14 += "", arguments.length < 2) {
    for (var n17 = D5(this.node(), u17).tween, e33 = 0, a19 = n17.length, f25; e33 < a19; ++e33) if ((f25 = n17[e33]).name === t14) return f25.value;
    return null;
  }
  return this.each((r13 == null ? s6 : v5)(u17, t14, r13));
}
function p2(t14, r13, u17) {
  var n17 = t14._id;
  return t14.each(function() {
    var e33 = j3(this, n17);
    (e33.value || (e33.value = {}))[r13] = u17.apply(this, arguments);
  }), function(e33) {
    return D5(e33, n17).value[r13];
  };
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/interpolate.mjs
function m3(n17, r13) {
  var t14;
  return (typeof r13 == "number" ? x2 : r13 instanceof H3 ? C3 : (t14 = H3(r13)) ? (r13 = t14, C3) : _2)(n17, r13);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/attr.mjs
function p3(t14) {
  return function() {
    this.removeAttribute(t14);
  };
}
function v6(t14) {
  return function() {
    this.removeAttributeNS(t14.space, t14.local);
  };
}
function h6(t14, e33, r13) {
  var i20, u17 = r13 + "", o26;
  return function() {
    var n17 = this.getAttribute(t14);
    return n17 === u17 ? null : n17 === i20 ? o26 : o26 = e33(i20 = n17, r13);
  };
}
function m4(t14, e33, r13) {
  var i20, u17 = r13 + "", o26;
  return function() {
    var n17 = this.getAttributeNS(t14.space, t14.local);
    return n17 === u17 ? null : n17 === i20 ? o26 : o26 = e33(i20 = n17, r13);
  };
}
function b6(t14, e33, r13) {
  var i20, u17, o26;
  return function() {
    var n17, a19 = r13(this), s24;
    return a19 == null ? void this.removeAttribute(t14) : (n17 = this.getAttribute(t14), s24 = a19 + "", n17 === s24 ? null : n17 === i20 && s24 === u17 ? o26 : (u17 = s24, o26 = e33(i20 = n17, a19)));
  };
}
function A6(t14, e33, r13) {
  var i20, u17, o26;
  return function() {
    var n17, a19 = r13(this), s24;
    return a19 == null ? void this.removeAttributeNS(t14.space, t14.local) : (n17 = this.getAttributeNS(t14.space, t14.local), s24 = a19 + "", n17 === s24 ? null : n17 === i20 && s24 === u17 ? o26 : (u17 = s24, o26 = e33(i20 = n17, a19)));
  };
}
function w8(t14, e33) {
  var r13 = x(t14), i20 = r13 === "transform" ? Ar : m3;
  return this.attrTween(t14, typeof e33 == "function" ? (r13.local ? A6 : b6)(r13, i20, p2(this, "attr." + t14, e33)) : e33 == null ? (r13.local ? v6 : p3)(r13) : (r13.local ? m4 : h6)(r13, i20, e33));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/attrTween.mjs
function o5(r13, n17) {
  return function(t14) {
    this.setAttribute(r13, n17.call(this, t14));
  };
}
function f4(r13, n17) {
  return function(t14) {
    this.setAttributeNS(r13.space, r13.local, n17.call(this, t14));
  };
}
function l5(r13, n17) {
  var t14, e33;
  function u17() {
    var i20 = n17.apply(this, arguments);
    return i20 !== e33 && (t14 = (e33 = i20) && f4(r13, i20)), t14;
  }
  return u17._value = n17, u17;
}
function c6(r13, n17) {
  var t14, e33;
  function u17() {
    var i20 = n17.apply(this, arguments);
    return i20 !== e33 && (t14 = (e33 = i20) && o5(r13, i20)), t14;
  }
  return u17._value = n17, u17;
}
function h7(r13, n17) {
  var t14 = "attr." + r13;
  if (arguments.length < 2) return (t14 = this.tween(t14)) && t14._value;
  if (n17 == null) return this.tween(t14, null);
  if (typeof n17 != "function") throw new Error();
  var e33 = x(r13);
  return this.tween(t14, (e33.local ? l5 : c6)(e33, n17));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/delay.mjs
function o6(n17, t14) {
  return function() {
    U4(this, n17).delay = +t14.apply(this, arguments);
  };
}
function r(n17, t14) {
  return t14 = +t14, function() {
    U4(this, n17).delay = t14;
  };
}
function a4(n17) {
  var t14 = this._id;
  return arguments.length ? this.each((typeof n17 == "function" ? o6 : r)(t14, n17)) : D5(this.node(), t14).delay;
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/duration.mjs
function r2(n17, t14) {
  return function() {
    j3(this, n17).duration = +t14.apply(this, arguments);
  };
}
function u4(n17, t14) {
  return t14 = +t14, function() {
    j3(this, n17).duration = t14;
  };
}
function s7(n17) {
  var t14 = this._id;
  return arguments.length ? this.each((typeof n17 == "function" ? r2 : u4)(t14, n17)) : D5(this.node(), t14).duration;
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/ease.mjs
function i4(e33, t14) {
  if (typeof t14 != "function") throw new Error();
  return function() {
    j3(this, e33).ease = t14;
  };
}
function s8(e33) {
  var t14 = this._id;
  return arguments.length ? this.each(i4(t14, e33)) : D5(this.node(), t14).ease;
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/easeVarying.mjs
function i5(t14, n17) {
  return function() {
    var r13 = n17.apply(this, arguments);
    if (typeof r13 != "function") throw new Error();
    j3(this, t14).ease = r13;
  };
}
function f5(t14) {
  if (typeof t14 != "function") throw new Error();
  return this.each(i5(this._id, t14));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/filter.mjs
function v7(t14) {
  typeof t14 != "function" && (t14 = F3(t14));
  for (var a19 = this._groups, e33 = a19.length, _19 = new Array(e33), r13 = 0; r13 < e33; ++r13) for (var n17 = a19[r13], h20 = n17.length, l19 = _19[r13] = [], f25, i20 = 0; i20 < h20; ++i20) (f25 = n17[i20]) && t14.call(f25, f25.__data__, i20, n17) && l19.push(f25);
  return new o7(_19, this._parents, this._name, this._id);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/merge.mjs
function A7(a19) {
  if (a19._id !== this._id) throw new Error();
  for (var n17 = this._groups, f25 = a19._groups, h20 = n17.length, w26 = f25.length, l19 = Math.min(h20, w26), i20 = new Array(h20), r13 = 0; r13 < l19; ++r13) for (var e33 = n17[r13], d18 = f25[r13], _19 = e33.length, s24 = i20[r13] = new Array(_19), o26, t14 = 0; t14 < _19; ++t14) (o26 = e33[t14] || d18[t14]) && (s24[t14] = o26);
  for (; r13 < h20; ++r13) i20[r13] = n17[r13];
  return new o7(i20, this._parents, this._name, this._id);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/on.mjs
function h8(i20) {
  return (i20 + "").trim().split(/^|\s+/).every(function(n17) {
    var t14 = n17.indexOf(".");
    return t14 >= 0 && (n17 = n17.slice(0, t14)), !n17 || n17 === "start";
  });
}
function d3(i20, n17, t14) {
  var o26, r13, u17 = h8(n17) ? U4 : j3;
  return function() {
    var e33 = u17(this, i20), s24 = e33.on;
    s24 !== o26 && (r13 = (o26 = s24).copy()).on(n17, t14), e33.on = r13;
  };
}
function v8(i20, n17) {
  var t14 = this._id;
  return arguments.length < 2 ? D5(this.node(), t14).on.on(i20) : this.each(d3(t14, i20, n17));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/remove.mjs
function r3(t14) {
  return function() {
    var n17 = this.parentNode;
    for (var i20 in this.__transition) if (+i20 !== t14) return;
    n17 && n17.removeChild(this);
  };
}
function e3() {
  return this.on("end.remove", r3(this._id));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/select.mjs
function T6(a19) {
  var m22 = this._name, f25 = this._id;
  typeof a19 != "function" && (a19 = g2(a19));
  for (var e33 = this._groups, l19 = e33.length, v23 = new Array(l19), r13 = 0; r13 < l19; ++r13) for (var i20 = e33[r13], w26 = i20.length, n17 = v23[r13] = new Array(w26), _19, h20, t14 = 0; t14 < w26; ++t14) (_19 = i20[t14]) && (h20 = a19.call(_19, _19.__data__, t14, i20)) && ("__data__" in _19 && (h20.__data__ = _19.__data__), n17[t14] = h20, C4(n17[t14], m22, f25, t14, n17, D5(_19, f25)));
  return new o7(v23, this._parents, m22, f25);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/selectAll.mjs
function B6(f25) {
  var h20 = this._name, m22 = this._id;
  typeof f25 != "function" && (f25 = V3(f25));
  for (var n17 = this._groups, u17 = n17.length, v23 = [], l19 = [], o26 = 0; o26 < u17; ++o26) for (var _19 = n17[o26], s24 = _19.length, t14, r13 = 0; r13 < s24; ++r13) if (t14 = _19[r13]) {
    for (var a19 = f25.call(t14, t14.__data__, r13, _19), p21, e33 = D5(t14, m22), i20 = 0, g18 = a19.length; i20 < g18; ++i20) (p21 = a19[i20]) && C4(p21, h20, m22, i20, a19, e33);
    v23.push(a19), l19.push(t14);
  }
  return new o7(v23, l19, h20, m22);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/selection.mjs
var o8 = Ne2.prototype.constructor;
function e4() {
  return new o8(this._groups, this._parents);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/style.mjs
function a5(t14, n17) {
  var i20, r13, s24;
  return function() {
    var o26 = ut(this, t14), e33 = (this.style.removeProperty(t14), ut(this, t14));
    return o26 === e33 ? null : o26 === i20 && e33 === r13 ? s24 : s24 = n17(i20 = o26, r13 = e33);
  };
}
function p4(t14) {
  return function() {
    this.style.removeProperty(t14);
  };
}
function T7(t14, n17, i20) {
  var r13, s24 = i20 + "", o26;
  return function() {
    var e33 = ut(this, t14);
    return e33 === s24 ? null : e33 === r13 ? o26 : o26 = n17(r13 = e33, i20);
  };
}
function w9(t14, n17, i20) {
  var r13, s24, o26;
  return function() {
    var e33 = ut(this, t14), u17 = i20(this), l19 = u17 + "";
    return u17 == null && (l19 = u17 = (this.style.removeProperty(t14), ut(this, t14))), e33 === l19 ? null : e33 === r13 && l19 === s24 ? o26 : (s24 = l19, o26 = n17(r13 = e33, u17));
  };
}
function m5(t14, n17) {
  var i20, r13, s24, o26 = "style." + n17, e33 = "end." + o26, u17;
  return function() {
    var l19 = j3(this, t14), y21 = l19.on, h20 = l19.value[o26] == null ? u17 || (u17 = p4(n17)) : void 0;
    (y21 !== i20 || s24 !== h20) && (r13 = (i20 = y21).copy()).on(e33, s24 = h20), l19.on = r13;
  };
}
function x5(t14, n17, i20) {
  var r13 = (t14 += "") == "transform" ? wr : m3;
  return n17 == null ? this.styleTween(t14, a5(t14, r13)).on("end.style." + t14, p4(t14)) : typeof n17 == "function" ? this.styleTween(t14, w9(t14, r13, p2(this, "style." + t14, n17))).each(m5(this._id, t14)) : this.styleTween(t14, T7(t14, r13, n17), i20).on("end.style." + t14, null);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/styleTween.mjs
function s9(n17, e33, r13) {
  return function(t14) {
    this.style.setProperty(n17, e33.call(this, t14), r13);
  };
}
function f6(n17, e33, r13) {
  var t14, i20;
  function l19() {
    var u17 = e33.apply(this, arguments);
    return u17 !== i20 && (t14 = (i20 = u17) && s9(n17, u17, r13)), t14;
  }
  return l19._value = e33, l19;
}
function o9(n17, e33, r13) {
  var t14 = "style." + (n17 += "");
  if (arguments.length < 2) return (t14 = this.tween(t14)) && t14._value;
  if (e33 == null) return this.tween(t14, null);
  if (typeof e33 != "function") throw new Error();
  return this.tween(t14, f6(n17, e33, r13 ?? ""));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/text.mjs
function o10(t14) {
  return function() {
    this.textContent = t14;
  };
}
function i6(t14) {
  return function() {
    var n17 = t14(this);
    this.textContent = n17 ?? "";
  };
}
function r4(t14) {
  return this.tween("text", typeof t14 == "function" ? i6(p2(this, "text", t14)) : o10(t14 == null ? "" : t14 + ""));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/textTween.mjs
function u5(n17) {
  return function(t14) {
    this.textContent = n17.call(this, t14);
  };
}
function f7(n17) {
  var t14, r13;
  function i20() {
    var e33 = n17.apply(this, arguments);
    return e33 !== r13 && (t14 = (r13 = e33) && u5(e33)), t14;
  }
  return i20._value = n17, i20;
}
function o11(n17) {
  var t14 = "text";
  if (arguments.length < 1) return (t14 = this.tween(t14)) && t14._value;
  if (n17 == null) return this.tween(t14, null);
  if (typeof n17 != "function") throw new Error();
  return this.tween(t14, f7(n17));
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/transition.mjs
function w10() {
  for (var m22 = this._name, f25 = this._id, s24 = X5(), e33 = this._groups, i20 = e33.length, r13 = 0; r13 < i20; ++r13) for (var d18 = e33[r13], o26 = d18.length, n17, t14 = 0; t14 < o26; ++t14) if (n17 = d18[t14]) {
    var a19 = D5(n17, f25);
    C4(n17, m22, s24, t14, d18, {
      time: a19.time + a19.delay + a19.duration,
      delay: 0,
      duration: a19.duration,
      ease: a19.ease
    });
  }
  return new o7(e33, this._parents, m22, s24);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/end.mjs
function d4() {
  var i20, n17, e33 = this, r13 = e33._id, t14 = e33.size();
  return new Promise(function(o26, f25) {
    var u17 = {
      value: f25
    }, s24 = {
      value: function() {
        --t14 === 0 && o26();
      }
    };
    e33.each(function() {
      var c23 = j3(this, r13), a19 = c23.on;
      a19 !== i20 && (n17 = (i20 = a19).copy(), n17._.cancel.push(u17), n17._.interrupt.push(u17), n17._.end.push(s24)), c23.on = n17;
    }), t14 === 0 && o26();
  });
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/transition/index.mjs
var V6 = 0;
function o7(r13, n17, s24, m22) {
  this._groups = r13, this._parents = n17, this._name = s24, this._id = m22;
}
function e5(r13) {
  return Ne2().transition(r13);
}
function X5() {
  return ++V6;
}
var t = Ne2.prototype;
o7.prototype = e5.prototype = {
  constructor: o7,
  select: T6,
  selectAll: B6,
  selectChild: t.selectChild,
  selectChildren: t.selectChildren,
  filter: v7,
  merge: A7,
  selection: e4,
  transition: w10,
  call: t.call,
  nodes: t.nodes,
  node: t.node,
  size: t.size,
  empty: t.empty,
  each: t.each,
  on: v8,
  attr: w8,
  attrTween: h7,
  style: x5,
  styleTween: o9,
  text: r4,
  textTween: o11,
  remove: e3,
  tween: d2,
  delay: a4,
  duration: s7,
  ease: s8,
  easeVarying: f5,
  end: d4,
  [Symbol.iterator]: t[Symbol.iterator]
};

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/interrupt.mjs
function o12(e33, i20) {
  var r13 = e33.__transition, t14, a19, n17 = true, l19;
  if (r13) {
    i20 = i20 == null ? null : i20 + "";
    for (l19 in r13) {
      if ((t14 = r13[l19]).name !== i20) {
        n17 = false;
        continue;
      }
      a19 = t14.state > s5 && t14.state < E5, t14.state = x4, t14.timer.stop(), t14.on.call(a19 ? "interrupt" : "cancel", e33, e33.__data__, t14.index, t14.group), delete r13[l19];
    }
    n17 && delete e33.__transition;
  }
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/selection/interrupt.mjs
function n2(t14) {
  return this.each(function() {
    o12(this, t14);
  });
}

// deno:https://esm.sh/d3-ease@3.0.1/denonext/d3-ease.mjs
function b7(n17) {
  return ((n17 *= 2) <= 1 ? n17 * n17 * n17 : (n17 -= 2) * n17 * n17 + 2) / 2;
}
var p5 = 3;
var Q4 = function n3(e33) {
  e33 = +e33;
  function u17(t14) {
    return Math.pow(t14, e33);
  }
  return u17.exponent = n3, u17;
}(p5);
var S5 = function n4(e33) {
  e33 = +e33;
  function u17(t14) {
    return 1 - Math.pow(1 - t14, e33);
  }
  return u17.exponent = n4, u17;
}(p5);
var m6 = function n5(e33) {
  e33 = +e33;
  function u17(t14) {
    return ((t14 *= 2) <= 1 ? Math.pow(t14, e33) : 2 - Math.pow(2 - t14, e33)) / 2;
  }
  return u17.exponent = n5, u17;
}(p5);
var h9 = Math.PI;
var M4 = h9 / 2;
function o13(n17) {
  return (Math.pow(2, -10 * n17) - 9765625e-10) * 1.0009775171065494;
}
var I5 = 0.36363636363636365;
var F7 = 6 / 11;
var G5 = 8 / 11;
var H5 = 3 / 4;
var J5 = 9 / 11;
var K4 = 10 / 11;
var N6 = 15 / 16;
var R6 = 21 / 22;
var T8 = 63 / 64;
var i7 = 1 / I5 / I5;
var O5 = 1.70158;
var W4 = function n6(e33) {
  e33 = +e33;
  function u17(t14) {
    return (t14 = +t14) * t14 * (e33 * (t14 - 1) + t14);
  }
  return u17.overshoot = n6, u17;
}(O5);
var X6 = function n7(e33) {
  e33 = +e33;
  function u17(t14) {
    return --t14 * t14 * ((t14 + 1) * e33 + t14) + 1;
  }
  return u17.overshoot = n7, u17;
}(O5);
var y5 = function n8(e33) {
  e33 = +e33;
  function u17(t14) {
    return ((t14 *= 2) < 1 ? t14 * t14 * ((e33 + 1) * t14 - e33) : (t14 -= 2) * t14 * ((e33 + 1) * t14 + e33) + 2) / 2;
  }
  return u17.overshoot = n8, u17;
}(O5);
var c7 = 2 * Math.PI;
var x6 = 1;
var f8 = 0.3;
var Y3 = function n9(e33, u17) {
  var t14 = Math.asin(1 / (e33 = Math.max(1, e33))) * (u17 /= c7);
  function a19(r13) {
    return e33 * o13(- --r13) * Math.sin((t14 - r13) / u17);
  }
  return a19.amplitude = function(r13) {
    return n9(r13, u17 * c7);
  }, a19.period = function(r13) {
    return n9(e33, r13);
  }, a19;
}(x6, f8);
var q6 = function n10(e33, u17) {
  var t14 = Math.asin(1 / (e33 = Math.max(1, e33))) * (u17 /= c7);
  function a19(r13) {
    return 1 - e33 * o13(r13 = +r13) * Math.sin((r13 + t14) / u17);
  }
  return a19.amplitude = function(r13) {
    return n10(r13, u17 * c7);
  }, a19.period = function(r13) {
    return n10(e33, r13);
  }, a19;
}(x6, f8);
var Z5 = function n11(e33, u17) {
  var t14 = Math.asin(1 / (e33 = Math.max(1, e33))) * (u17 /= c7);
  function a19(r13) {
    return ((r13 = r13 * 2 - 1) < 0 ? e33 * o13(-r13) * Math.sin((t14 - r13) / u17) : 2 - e33 * o13(r13) * Math.sin((t14 + r13) / u17)) / 2;
  }
  return a19.amplitude = function(r13) {
    return n11(r13, u17 * c7);
  }, a19.period = function(r13) {
    return n11(e33, r13);
  }, a19;
}(x6, f8);

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/selection/transition.mjs
var c8 = {
  time: null,
  delay: 0,
  duration: 250,
  ease: b7
};
function d5(t14, i20) {
  for (var r13; !(r13 = t14.__transition) || !(r13 = r13[i20]); ) if (!(t14 = t14.parentNode)) throw new Error(`transition ${i20} not found`);
  return r13;
}
function T9(t14) {
  var i20, r13;
  t14 instanceof o7 ? (i20 = t14._id, t14 = t14._name) : (i20 = X5(), (r13 = c8).time = w7(), t14 = t14 == null ? null : t14 + "");
  for (var o26 = this._groups, a19 = o26.length, e33 = 0; e33 < a19; ++e33) for (var f25 = o26[e33], s24 = f25.length, l19, n17 = 0; n17 < s24; ++n17) (l19 = f25[n17]) && C4(l19, t14, i20, n17, f25, r13 || d5(l19, i20));
  return new o7(o26, this._parents, t14, i20);
}

// deno:https://esm.sh/d3-transition@3.0.1/denonext/src/selection/index.mjs
Ne2.prototype.interrupt = n2;
Ne2.prototype.transition = T9;

// deno:https://esm.sh/d3-brush@3.0.0/denonext/d3-brush.mjs
var { abs: gt3, max: k5, min: x7 } = Math;
function wt3(t14) {
  return [
    +t14[0],
    +t14[1]
  ];
}
function ut2(t14) {
  return [
    wt3(t14[0]),
    wt3(t14[1])
  ];
}
var tt3 = {
  name: "x",
  handles: [
    "w",
    "e"
  ].map(q7),
  input: function(t14, _19) {
    return t14 == null ? null : [
      [
        +t14[0],
        _19[0][1]
      ],
      [
        +t14[1],
        _19[1][1]
      ]
    ];
  },
  output: function(t14) {
    return t14 && [
      t14[0][0],
      t14[1][0]
    ];
  }
};
var et3 = {
  name: "y",
  handles: [
    "n",
    "s"
  ].map(q7),
  input: function(t14, _19) {
    return t14 == null ? null : [
      [
        _19[0][0],
        +t14[0]
      ],
      [
        _19[1][0],
        +t14[1]
      ]
    ];
  },
  output: function(t14) {
    return t14 && [
      t14[0][1],
      t14[1][1]
    ];
  }
};
var Mt2 = {
  name: "xy",
  handles: [
    "n",
    "w",
    "e",
    "s",
    "nw",
    "ne",
    "sw",
    "se"
  ].map(q7),
  input: function(t14) {
    return t14 == null ? null : ut2(t14);
  },
  output: function(t14) {
    return t14;
  }
};
function q7(t14) {
  return {
    type: t14
  };
}

// deno:https://esm.sh/d3-path@3.1.0/denonext/d3-path.mjs
var c9 = Math.PI;
var y6 = 2 * c9;
var u6 = 1e-6;
var q8 = y6 - u6;
function A8($22) {
  this._ += $22[0];
  for (let t14 = 1, h20 = $22.length; t14 < h20; ++t14) this._ += arguments[t14] + $22[t14];
}
function C5($22) {
  let t14 = Math.floor($22);
  if (!(t14 >= 0)) throw new Error(`invalid digits: ${$22}`);
  if (t14 > 15) return A8;
  let h20 = 10 ** t14;
  return function(i20) {
    this._ += i20[0];
    for (let s24 = 1, e33 = i20.length; s24 < e33; ++s24) this._ += Math.round(arguments[s24] * h20) / h20 + i20[s24];
  };
}
var d6 = class {
  constructor(t14) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t14 == null ? A8 : C5(t14);
  }
  moveTo(t14, h20) {
    this._append`M${this._x0 = this._x1 = +t14},${this._y0 = this._y1 = +h20}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t14, h20) {
    this._append`L${this._x1 = +t14},${this._y1 = +h20}`;
  }
  quadraticCurveTo(t14, h20, i20, s24) {
    this._append`Q${+t14},${+h20},${this._x1 = +i20},${this._y1 = +s24}`;
  }
  bezierCurveTo(t14, h20, i20, s24, e33, a19) {
    this._append`C${+t14},${+h20},${+i20},${+s24},${this._x1 = +e33},${this._y1 = +a19}`;
  }
  arcTo(t14, h20, i20, s24, e33) {
    if (t14 = +t14, h20 = +h20, i20 = +i20, s24 = +s24, e33 = +e33, e33 < 0) throw new Error(`negative radius: ${e33}`);
    let a19 = this._x1, r13 = this._y1, l19 = i20 - t14, p21 = s24 - h20, _19 = a19 - t14, o26 = r13 - h20, n17 = _19 * _19 + o26 * o26;
    if (this._x1 === null) this._append`M${this._x1 = t14},${this._y1 = h20}`;
    else if (n17 > u6) if (!(Math.abs(o26 * l19 - p21 * _19) > u6) || !e33) this._append`L${this._x1 = t14},${this._y1 = h20}`;
    else {
      let f25 = i20 - a19, M22 = s24 - r13, v23 = l19 * l19 + p21 * p21, L25 = f25 * f25 + M22 * M22, b25 = Math.sqrt(v23), T21 = Math.sqrt(n17), m22 = e33 * Math.tan((c9 - Math.acos((v23 + n17 - L25) / (2 * b25 * T21))) / 2), x23 = m22 / T21, w26 = m22 / b25;
      Math.abs(x23 - 1) > u6 && this._append`L${t14 + x23 * _19},${h20 + x23 * o26}`, this._append`A${e33},${e33},0,0,${+(o26 * f25 > _19 * M22)},${this._x1 = t14 + w26 * l19},${this._y1 = h20 + w26 * p21}`;
    }
  }
  arc(t14, h20, i20, s24, e33, a19) {
    if (t14 = +t14, h20 = +h20, i20 = +i20, a19 = !!a19, i20 < 0) throw new Error(`negative radius: ${i20}`);
    let r13 = i20 * Math.cos(s24), l19 = i20 * Math.sin(s24), p21 = t14 + r13, _19 = h20 + l19, o26 = 1 ^ a19, n17 = a19 ? s24 - e33 : e33 - s24;
    this._x1 === null ? this._append`M${p21},${_19}` : (Math.abs(this._x1 - p21) > u6 || Math.abs(this._y1 - _19) > u6) && this._append`L${p21},${_19}`, i20 && (n17 < 0 && (n17 = n17 % y6 + y6), n17 > q8 ? this._append`A${i20},${i20},0,1,${o26},${t14 - r13},${h20 - l19}A${i20},${i20},0,1,${o26},${this._x1 = p21},${this._y1 = _19}` : n17 > u6 && this._append`A${i20},${i20},0,${+(n17 >= c9)},${o26},${this._x1 = t14 + i20 * Math.cos(e33)},${this._y1 = h20 + i20 * Math.sin(e33)}`);
  }
  rect(t14, h20, i20, s24) {
    this._append`M${this._x0 = this._x1 = +t14},${this._y0 = this._y1 = +h20}h${i20 = +i20}v${+s24}h${-i20}Z`;
  }
  toString() {
    return this._;
  }
};
function E6() {
  return new d6();
}
E6.prototype = d6.prototype;
function R7($22 = 3) {
  return new d6(+$22);
}

// deno:https://esm.sh/d3-chord@3.0.1/denonext/d3-chord.mjs
var k6 = Math.PI;
var C6 = k6 / 2;
var q9 = k6 * 2;
var E7 = Array.prototype.slice;

// deno:https://esm.sh/d3-contour@4.0.2/denonext/d3-contour.mjs
var Y5 = Array.prototype;
var L6 = Y5.slice;

// deno:https://esm.sh/robust-predicates@3.0.2/denonext/robust-predicates.mjs
var rt3 = 11102230246251565e-32;
var Nt2 = (3 + 8 * rt3) * rt3;
function L7(K22) {
  return new Float64Array(K22);
}
var Cc = (3 + 16 * rt3) * rt3;
var jc = (2 + 12 * rt3) * rt3;
var Ac = (9 + 64 * rt3) * rt3 * rt3;
var xt3 = L7(4);
var xn = L7(8);
var yn = L7(12);
var tc = L7(16);
var mt2 = L7(4);
var Dc = (7 + 56 * rt3) * rt3;
var Fc = (3 + 28 * rt3) * rt3;
var qc = (26 + 288 * rt3) * rt3 * rt3;
var yt3 = L7(4);
var tn = L7(4);
var nn = L7(4);
var nc = L7(4);
var cc = L7(4);
var sc = L7(4);
var oc = L7(4);
var ec = L7(4);
var rc = L7(4);
var Cn = L7(8);
var jn = L7(8);
var An = L7(8);
var Ht2 = L7(4);
var dn = L7(8);
var ic = L7(8);
var Ct2 = L7(8);
var cn = L7(12);
var on = L7(192);
var Bn = L7(192);
var Ic = (10 + 96 * rt3) * rt3;
var Jc = (4 + 48 * rt3) * rt3;
var Kc = (44 + 576 * rt3) * rt3 * rt3;
var Pt2 = L7(4);
var Rt = L7(4);
var St2 = L7(4);
var It3 = L7(4);
var Jt2 = L7(4);
var Kt2 = L7(4);
var vt2 = L7(4);
var wt4 = L7(4);
var Qn = L7(8);
var Dn = L7(8);
var Fn = L7(8);
var qn = L7(8);
var En = L7(8);
var Gn = L7(8);
var bn = L7(8);
var hn = L7(8);
var _n = L7(8);
var Vt2 = L7(4);
var Wt2 = L7(4);
var Xt2 = L7(4);
var x8 = L7(8);
var tt4 = L7(16);
var lt2 = L7(16);
var at2 = L7(16);
var it4 = L7(32);
var Tt2 = L7(32);
var ut3 = L7(48);
var jt2 = L7(64);
var en = L7(1152);
var Hn = L7(1152);
var Pc = (16 + 224 * rt3) * rt3;
var Rc = (5 + 72 * rt3) * rt3;
var Sc = (71 + 1408 * rt3) * rt3 * rt3;
var At3 = L7(4);
var Bt2 = L7(4);
var gt4 = L7(4);
var Yt2 = L7(4);
var Zt2 = L7(4);
var Qt2 = L7(4);
var Dt2 = L7(4);
var $t2 = L7(4);
var Ft2 = L7(4);
var kt2 = L7(4);
var In = L7(24);
var Jn = L7(24);
var Kn = L7(24);
var Ln = L7(24);
var Nn = L7(24);
var On = L7(24);
var Pn = L7(24);
var Rn = L7(24);
var Sn = L7(24);
var Tn = L7(24);
var ln = L7(1152);
var vn = L7(1152);
var an = L7(1152);
var wn = L7(1152);
var lc = L7(1152);
var Vn = L7(2304);
var Wn = L7(2304);
var ac = L7(3456);
var fc = L7(5760);
var uc = L7(8);
var dc = L7(8);
var bc = L7(8);
var Tc = L7(16);
var pn = L7(24);
var Ut2 = L7(48);
var Un = L7(48);
var Mn = L7(96);
var zt2 = L7(192);
var hc = L7(384);
var _c = L7(384);
var pc = L7(384);
var Uc = L7(768);
var Mc = L7(96);
var mc = L7(96);
var vc = L7(96);
var wc = L7(1152);

// deno:https://esm.sh/delaunator@5.0.1/denonext/delaunator.mjs
var C7 = Math.pow(2, -52);
var j4 = new Uint32Array(512);

// deno:https://esm.sh/d3-delaunay@6.0.4/denonext/d3-delaunay.mjs
var q10 = 2 * Math.PI;

// deno:https://esm.sh/d3-dsv@3.0.1/denonext/d3-dsv.mjs
var y7 = {};
var A9 = {};
var x9 = 34;
var w11 = 10;
var E8 = 13;
function P5(r13) {
  return new Function("d", "return {" + r13.map(function(e33, o26) {
    return JSON.stringify(e33) + ": d[" + o26 + '] || ""';
  }).join(",") + "}");
}
function Z6(r13, e33) {
  var o26 = P5(r13);
  return function(a19, s24) {
    return e33(o26(a19), s24, r13);
  };
}
function D6(r13) {
  var e33 = /* @__PURE__ */ Object.create(null), o26 = [];
  return r13.forEach(function(a19) {
    for (var s24 in a19) s24 in e33 || o26.push(e33[s24] = s24);
  }), o26;
}
function c10(r13, e33) {
  var o26 = r13 + "", a19 = o26.length;
  return a19 < e33 ? new Array(e33 - a19 + 1).join(0) + o26 : o26;
}
function H6(r13) {
  return r13 < 0 ? "-" + c10(-r13, 6) : r13 > 9999 ? "+" + c10(r13, 6) : c10(r13, 4);
}
function L8(r13) {
  var e33 = r13.getUTCHours(), o26 = r13.getUTCMinutes(), a19 = r13.getUTCSeconds(), s24 = r13.getUTCMilliseconds();
  return isNaN(r13) ? "Invalid Date" : H6(r13.getUTCFullYear(), 4) + "-" + c10(r13.getUTCMonth() + 1, 2) + "-" + c10(r13.getUTCDate(), 2) + (s24 ? "T" + c10(e33, 2) + ":" + c10(o26, 2) + ":" + c10(a19, 2) + "." + c10(s24, 3) + "Z" : a19 ? "T" + c10(e33, 2) + ":" + c10(o26, 2) + ":" + c10(a19, 2) + "Z" : o26 || e33 ? "T" + c10(e33, 2) + ":" + c10(o26, 2) + "Z" : "");
}
function F8(r13) {
  var e33 = new RegExp('["' + r13 + `
\r]`), o26 = r13.charCodeAt(0);
  function a19(t14, n17) {
    var u17, i20, f25 = s24(t14, function(l19, m22) {
      if (u17) return u17(l19, m22 - 1);
      i20 = l19, u17 = n17 ? Z6(l19, n17) : P5(l19);
    });
    return f25.columns = i20 || [], f25;
  }
  function s24(t14, n17) {
    var u17 = [], i20 = t14.length, f25 = 0, l19 = 0, m22, N20 = i20 <= 0, d18 = false;
    t14.charCodeAt(i20 - 1) === w11 && --i20, t14.charCodeAt(i20 - 1) === E8 && --i20;
    function U21() {
      if (N20) return A9;
      if (d18) return d18 = false, y7;
      var T21, g18 = f25, R19;
      if (t14.charCodeAt(g18) === x9) {
        for (; f25++ < i20 && t14.charCodeAt(f25) !== x9 || t14.charCodeAt(++f25) === x9; ) ;
        return (T21 = f25) >= i20 ? N20 = true : (R19 = t14.charCodeAt(f25++)) === w11 ? d18 = true : R19 === E8 && (d18 = true, t14.charCodeAt(f25) === w11 && ++f25), t14.slice(g18 + 1, T21 - 1).replace(/""/g, '"');
      }
      for (; f25 < i20; ) {
        if ((R19 = t14.charCodeAt(T21 = f25++)) === w11) d18 = true;
        else if (R19 === E8) d18 = true, t14.charCodeAt(f25) === w11 && ++f25;
        else if (R19 !== o26) continue;
        return t14.slice(g18, T21);
      }
      return N20 = true, t14.slice(g18, i20);
    }
    for (; (m22 = U21()) !== A9; ) {
      for (var C18 = []; m22 !== y7 && m22 !== A9; ) C18.push(m22), m22 = U21();
      n17 && (C18 = n17(C18, l19++)) == null || u17.push(C18);
    }
    return u17;
  }
  function j26(t14, n17) {
    return t14.map(function(u17) {
      return n17.map(function(i20) {
        return h20(u17[i20]);
      }).join(r13);
    });
  }
  function I21(t14, n17) {
    return n17 == null && (n17 = D6(t14)), [
      n17.map(h20).join(r13)
    ].concat(j26(t14, n17)).join(`
`);
  }
  function O15(t14, n17) {
    return n17 == null && (n17 = D6(t14)), j26(t14, n17).join(`
`);
  }
  function M22(t14) {
    return t14.map(B19).join(`
`);
  }
  function B19(t14) {
    return t14.map(h20).join(r13);
  }
  function h20(t14) {
    return t14 == null ? "" : t14 instanceof Date ? L8(t14) : e33.test(t14 += "") ? '"' + t14.replace(/"/g, '""') + '"' : t14;
  }
  return {
    parse: a19,
    parseRows: s24,
    format: I21,
    formatBody: O15,
    formatRows: M22,
    formatRow: B19,
    formatValue: h20
  };
}
var p6 = F8(",");
var S7 = p6.parse;
var Y7 = p6.parseRows;
var z6 = p6.format;
var J6 = p6.formatBody;
var Q5 = p6.formatRows;
var W5 = p6.formatRow;
var $6 = p6.formatValue;
var v9 = F8("	");
var k7 = v9.parse;
var q11 = v9.parseRows;
var G6 = v9.format;
var K5 = v9.formatBody;
var X7 = v9.formatRows;
var _4 = v9.formatRow;
var b8 = v9.formatValue;
var rr2 = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();

// deno:https://esm.sh/d3-fetch@3.0.1/denonext/d3-fetch.mjs
function d7(t14) {
  if (!t14.ok) throw new Error(t14.status + " " + t14.statusText);
  return t14.text();
}
function f9(t14, r13) {
  return fetch(t14, r13).then(d7);
}
function s10(t14) {
  return function(r13, e33, o26) {
    return arguments.length === 2 && typeof e33 == "function" && (o26 = e33, e33 = void 0), f9(r13, e33).then(function(n17) {
      return t14(n17, o26);
    });
  };
}
var g5 = s10(S7);
var w12 = s10(k7);
function a7(t14) {
  return (r13, e33) => f9(r13, e33).then((o26) => new DOMParser().parseFromString(o26, t14));
}
var E9 = a7("application/xml");
var k8 = a7("text/html");
var y8 = a7("image/svg+xml");

// deno:https://esm.sh/d3-quadtree@3.0.1/denonext/d3-quadtree.mjs
function k9(i20) {
  let t14 = +this._x.call(null, i20), e33 = +this._y.call(null, i20);
  return I6(this.cover(t14, e33), t14, e33, i20);
}
function I6(i20, t14, e33, n17) {
  if (isNaN(t14) || isNaN(e33)) return i20;
  var r13, o26 = i20._root, s24 = {
    data: n17
  }, l19 = i20._x0, h20 = i20._y0, f25 = i20._x1, a19 = i20._y1, u17, _19, p21, y21, w26, x23, d18, g18;
  if (!o26) return i20._root = s24, i20;
  for (; o26.length; ) if ((w26 = t14 >= (u17 = (l19 + f25) / 2)) ? l19 = u17 : f25 = u17, (x23 = e33 >= (_19 = (h20 + a19) / 2)) ? h20 = _19 : a19 = _19, r13 = o26, !(o26 = o26[d18 = x23 << 1 | w26])) return r13[d18] = s24, i20;
  if (p21 = +i20._x.call(null, o26.data), y21 = +i20._y.call(null, o26.data), t14 === p21 && e33 === y21) return s24.next = o26, r13 ? r13[d18] = s24 : i20._root = s24, i20;
  do
    r13 = r13 ? r13[d18] = new Array(4) : i20._root = new Array(4), (w26 = t14 >= (u17 = (l19 + f25) / 2)) ? l19 = u17 : f25 = u17, (x23 = e33 >= (_19 = (h20 + a19) / 2)) ? h20 = _19 : a19 = _19;
  while ((d18 = x23 << 1 | w26) === (g18 = (y21 >= _19) << 1 | p21 >= u17));
  return r13[g18] = o26, r13[d18] = s24, i20;
}
function Q6(i20) {
  var t14, e33, n17 = i20.length, r13, o26, s24 = new Array(n17), l19 = new Array(n17), h20 = 1 / 0, f25 = 1 / 0, a19 = -1 / 0, u17 = -1 / 0;
  for (e33 = 0; e33 < n17; ++e33) isNaN(r13 = +this._x.call(null, t14 = i20[e33])) || isNaN(o26 = +this._y.call(null, t14)) || (s24[e33] = r13, l19[e33] = o26, r13 < h20 && (h20 = r13), r13 > a19 && (a19 = r13), o26 < f25 && (f25 = o26), o26 > u17 && (u17 = o26));
  if (h20 > a19 || f25 > u17) return this;
  for (this.cover(h20, f25).cover(a19, u17), e33 = 0; e33 < n17; ++e33) I6(this, s24[e33], l19[e33], i20[e33]);
  return this;
}
function M5(i20, t14) {
  if (isNaN(i20 = +i20) || isNaN(t14 = +t14)) return this;
  var e33 = this._x0, n17 = this._y0, r13 = this._x1, o26 = this._y1;
  if (isNaN(e33)) r13 = (e33 = Math.floor(i20)) + 1, o26 = (n17 = Math.floor(t14)) + 1;
  else {
    for (var s24 = r13 - e33 || 1, l19 = this._root, h20, f25; e33 > i20 || i20 >= r13 || n17 > t14 || t14 >= o26; ) switch (f25 = (t14 < n17) << 1 | i20 < e33, h20 = new Array(4), h20[f25] = l19, l19 = h20, s24 *= 2, f25) {
      case 0:
        r13 = e33 + s24, o26 = n17 + s24;
        break;
      case 1:
        e33 = r13 - s24, o26 = n17 + s24;
        break;
      case 2:
        r13 = e33 + s24, n17 = o26 - s24;
        break;
      case 3:
        e33 = r13 - s24, n17 = o26 - s24;
        break;
    }
    this._root && this._root.length && (this._root = l19);
  }
  return this._x0 = e33, this._y0 = n17, this._x1 = r13, this._y1 = o26, this;
}
function j5() {
  var i20 = [];
  return this.visit(function(t14) {
    if (!t14.length) do
      i20.push(t14.data);
    while (t14 = t14.next);
  }), i20;
}
function X8(i20) {
  return arguments.length ? this.cover(+i20[0][0], +i20[0][1]).cover(+i20[1][0], +i20[1][1]) : isNaN(this._x0) ? void 0 : [
    [
      this._x0,
      this._y0
    ],
    [
      this._x1,
      this._y1
    ]
  ];
}
function c11(i20, t14, e33, n17, r13) {
  this.node = i20, this.x0 = t14, this.y0 = e33, this.x1 = n17, this.y1 = r13;
}
function Y8(i20, t14, e33) {
  var n17, r13 = this._x0, o26 = this._y0, s24, l19, h20, f25, a19 = this._x1, u17 = this._y1, _19 = [], p21 = this._root, y21, w26;
  for (p21 && _19.push(new c11(p21, r13, o26, a19, u17)), e33 == null ? e33 = 1 / 0 : (r13 = i20 - e33, o26 = t14 - e33, a19 = i20 + e33, u17 = t14 + e33, e33 *= e33); y21 = _19.pop(); ) if (!(!(p21 = y21.node) || (s24 = y21.x0) > a19 || (l19 = y21.y0) > u17 || (h20 = y21.x1) < r13 || (f25 = y21.y1) < o26)) if (p21.length) {
    var x23 = (s24 + h20) / 2, d18 = (l19 + f25) / 2;
    _19.push(new c11(p21[3], x23, d18, h20, f25), new c11(p21[2], s24, d18, x23, f25), new c11(p21[1], x23, l19, h20, d18), new c11(p21[0], s24, l19, x23, d18)), (w26 = (t14 >= d18) << 1 | i20 >= x23) && (y21 = _19[_19.length - 1], _19[_19.length - 1] = _19[_19.length - 1 - w26], _19[_19.length - 1 - w26] = y21);
  } else {
    var g18 = i20 - +this._x.call(null, p21.data), q29 = t14 - +this._y.call(null, p21.data), b25 = g18 * g18 + q29 * q29;
    if (b25 < e33) {
      var N20 = Math.sqrt(e33 = b25);
      r13 = i20 - N20, o26 = t14 - N20, a19 = i20 + N20, u17 = t14 + N20, n17 = p21.data;
    }
  }
  return n17;
}
function P6(i20) {
  if (isNaN(a19 = +this._x.call(null, i20)) || isNaN(u17 = +this._y.call(null, i20))) return this;
  var t14, e33 = this._root, n17, r13, o26, s24 = this._x0, l19 = this._y0, h20 = this._x1, f25 = this._y1, a19, u17, _19, p21, y21, w26, x23, d18;
  if (!e33) return this;
  if (e33.length) for (; ; ) {
    if ((y21 = a19 >= (_19 = (s24 + h20) / 2)) ? s24 = _19 : h20 = _19, (w26 = u17 >= (p21 = (l19 + f25) / 2)) ? l19 = p21 : f25 = p21, t14 = e33, !(e33 = e33[x23 = w26 << 1 | y21])) return this;
    if (!e33.length) break;
    (t14[x23 + 1 & 3] || t14[x23 + 2 & 3] || t14[x23 + 3 & 3]) && (n17 = t14, d18 = x23);
  }
  for (; e33.data !== i20; ) if (r13 = e33, !(e33 = e33.next)) return this;
  return (o26 = e33.next) && delete e33.next, r13 ? (o26 ? r13.next = o26 : delete r13.next, this) : t14 ? (o26 ? t14[x23] = o26 : delete t14[x23], (e33 = t14[0] || t14[1] || t14[2] || t14[3]) && e33 === (t14[3] || t14[2] || t14[1] || t14[0]) && !e33.length && (n17 ? n17[d18] = e33 : this._root = e33), this) : (this._root = o26, this);
}
function B7(i20) {
  for (var t14 = 0, e33 = i20.length; t14 < e33; ++t14) this.remove(i20[t14]);
  return this;
}
function C8() {
  return this._root;
}
function D7() {
  var i20 = 0;
  return this.visit(function(t14) {
    if (!t14.length) do
      ++i20;
    while (t14 = t14.next);
  }), i20;
}
function E10(i20) {
  var t14 = [], e33, n17 = this._root, r13, o26, s24, l19, h20;
  for (n17 && t14.push(new c11(n17, this._x0, this._y0, this._x1, this._y1)); e33 = t14.pop(); ) if (!i20(n17 = e33.node, o26 = e33.x0, s24 = e33.y0, l19 = e33.x1, h20 = e33.y1) && n17.length) {
    var f25 = (o26 + l19) / 2, a19 = (s24 + h20) / 2;
    (r13 = n17[3]) && t14.push(new c11(r13, f25, a19, l19, h20)), (r13 = n17[2]) && t14.push(new c11(r13, o26, a19, f25, h20)), (r13 = n17[1]) && t14.push(new c11(r13, f25, s24, l19, a19)), (r13 = n17[0]) && t14.push(new c11(r13, o26, s24, f25, a19));
  }
  return this;
}
function F9(i20) {
  var t14 = [], e33 = [], n17;
  for (this._root && t14.push(new c11(this._root, this._x0, this._y0, this._x1, this._y1)); n17 = t14.pop(); ) {
    var r13 = n17.node;
    if (r13.length) {
      var o26, s24 = n17.x0, l19 = n17.y0, h20 = n17.x1, f25 = n17.y1, a19 = (s24 + h20) / 2, u17 = (l19 + f25) / 2;
      (o26 = r13[0]) && t14.push(new c11(o26, s24, l19, a19, u17)), (o26 = r13[1]) && t14.push(new c11(o26, a19, l19, h20, u17)), (o26 = r13[2]) && t14.push(new c11(o26, s24, u17, a19, f25)), (o26 = r13[3]) && t14.push(new c11(o26, a19, u17, h20, f25));
    }
    e33.push(n17);
  }
  for (; n17 = e33.pop(); ) i20(n17.node, n17.x0, n17.y0, n17.x1, n17.y1);
  return this;
}
function G7(i20) {
  return i20[0];
}
function H7(i20) {
  return arguments.length ? (this._x = i20, this) : this._x;
}
function J7(i20) {
  return i20[1];
}
function K6(i20) {
  return arguments.length ? (this._y = i20, this) : this._y;
}
function m7(i20, t14, e33) {
  var n17 = new A10(t14 ?? G7, e33 ?? J7, NaN, NaN, NaN, NaN);
  return i20 == null ? n17 : n17.addAll(i20);
}
function A10(i20, t14, e33, n17, r13, o26) {
  this._x = i20, this._y = t14, this._x0 = e33, this._y0 = n17, this._x1 = r13, this._y1 = o26, this._root = void 0;
}
function L9(i20) {
  for (var t14 = {
    data: i20.data
  }, e33 = t14; i20 = i20.next; ) e33 = e33.next = {
    data: i20.data
  };
  return t14;
}
var v10 = m7.prototype = A10.prototype;
v10.copy = function() {
  var i20 = new A10(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t14 = this._root, e33, n17;
  if (!t14) return i20;
  if (!t14.length) return i20._root = L9(t14), i20;
  for (e33 = [
    {
      source: t14,
      target: i20._root = new Array(4)
    }
  ]; t14 = e33.pop(); ) for (var r13 = 0; r13 < 4; ++r13) (n17 = t14.source[r13]) && (n17.length ? e33.push({
    source: n17,
    target: t14.target[r13] = new Array(4)
  }) : t14.target[r13] = L9(n17));
  return i20;
};
v10.add = k9;
v10.addAll = Q6;
v10.cover = M5;
v10.data = j5;
v10.extent = X8;
v10.find = Y8;
v10.remove = P6;
v10.removeAll = B7;
v10.root = C8;
v10.size = D7;
v10.visit = E10;
v10.visitAfter = F9;
v10.x = H7;
v10.y = K6;

// deno:https://esm.sh/d3-force@3.0.0/denonext/d3-force.mjs
var U5 = Math.PI * (3 - Math.sqrt(5));

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatDecimal.mjs
function r5(e33) {
  return Math.abs(e33 = Math.round(e33)) >= 1e21 ? e33.toLocaleString("en").replace(/,/g, "") : e33.toString(10);
}
function o14(e33, i20) {
  if ((n17 = (e33 = i20 ? e33.toExponential(i20 - 1) : e33.toExponential()).indexOf("e")) < 0) return null;
  var n17, t14 = e33.slice(0, n17);
  return [
    t14.length > 1 ? t14[0] + t14.slice(2) : t14,
    +e33.slice(n17 + 1)
  ];
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/exponent.mjs
function o15(t14) {
  return t14 = o14(Math.abs(t14)), t14 ? t14[1] : NaN;
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatGroup.mjs
function s11(t14, l19) {
  return function(a19, n17) {
    for (var r13 = a19.length, h20 = [], i20 = 0, e33 = t14[0], f25 = 0; r13 > 0 && e33 > 0 && (f25 + e33 + 1 > n17 && (e33 = Math.max(1, n17 - f25)), h20.push(a19.substring(r13 -= e33, r13 + e33)), !((f25 += e33 + 1) > n17)); ) e33 = t14[i20 = (i20 + 1) % t14.length];
    return h20.reverse().join(l19);
  };
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatNumerals.mjs
function e6(n17) {
  return function(r13) {
    return r13.replace(/[0-9]/g, function(t14) {
      return n17[+t14];
    });
  };
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatSpecifier.mjs
var d8 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function o16(t14) {
  if (!(n17 = d8.exec(t14))) throw new Error("invalid format: " + t14);
  var n17;
  return new i8({
    fill: n17[1],
    align: n17[2],
    sign: n17[3],
    symbol: n17[4],
    zero: n17[5],
    width: n17[6],
    comma: n17[7],
    precision: n17[8] && n17[8].slice(1),
    trim: n17[9],
    type: n17[10]
  });
}
o16.prototype = i8.prototype;
function i8(t14) {
  this.fill = t14.fill === void 0 ? " " : t14.fill + "", this.align = t14.align === void 0 ? ">" : t14.align + "", this.sign = t14.sign === void 0 ? "-" : t14.sign + "", this.symbol = t14.symbol === void 0 ? "" : t14.symbol + "", this.zero = !!t14.zero, this.width = t14.width === void 0 ? void 0 : +t14.width, this.comma = !!t14.comma, this.precision = t14.precision === void 0 ? void 0 : +t14.precision, this.trim = !!t14.trim, this.type = t14.type === void 0 ? "" : t14.type + "";
}
i8.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatTrim.mjs
function c12(r13) {
  e: for (var t14 = r13.length, e33 = 1, a19 = -1, f25; e33 < t14; ++e33) switch (r13[e33]) {
    case ".":
      a19 = f25 = e33;
      break;
    case "0":
      a19 === 0 && (a19 = e33), f25 = e33;
      break;
    default:
      if (!+r13[e33]) break e;
      a19 > 0 && (a19 = 0);
      break;
  }
  return a19 > 0 ? r13.slice(0, a19) + r13.slice(f25 + 1) : r13;
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatPrefixAuto.mjs
var m8;
function l6(t14, i20) {
  var n17 = o14(t14, i20);
  if (!n17) return t14 + "";
  var e33 = n17[0], o26 = n17[1], r13 = o26 - (m8 = Math.max(-8, Math.min(8, Math.floor(o26 / 3))) * 3) + 1, a19 = e33.length;
  return r13 === a19 ? e33 : r13 > a19 ? e33 + new Array(r13 - a19 + 1).join("0") : r13 > 0 ? e33.slice(0, r13) + "." + e33.slice(r13) : "0." + new Array(1 - r13).join("0") + o14(t14, Math.max(0, i20 + r13 - 1))[0];
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatRounded.mjs
function f10(t14, i20) {
  var n17 = o14(t14, i20);
  if (!n17) return t14 + "";
  var e33 = n17[0], r13 = n17[1];
  return r13 < 0 ? "0." + new Array(-r13).join("0") + e33 : e33.length > r13 + 1 ? e33.slice(0, r13 + 1) + "." + e33.slice(r13 + 1) : e33 + new Array(r13 - e33.length + 2).join("0");
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/formatTypes.mjs
var m9 = {
  "%": (o26, t14) => (o26 * 100).toFixed(t14),
  b: (o26) => Math.round(o26).toString(2),
  c: (o26) => o26 + "",
  d: r5,
  e: (o26, t14) => o26.toExponential(t14),
  f: (o26, t14) => o26.toFixed(t14),
  g: (o26, t14) => o26.toPrecision(t14),
  o: (o26) => Math.round(o26).toString(8),
  p: (o26, t14) => f10(o26 * 100, t14),
  r: f10,
  s: l6,
  X: (o26) => Math.round(o26).toString(16).toUpperCase(),
  x: (o26) => Math.round(o26).toString(16)
};

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/identity.mjs
function e7(t14) {
  return t14;
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/locale.mjs
var C9 = Array.prototype.map;
var E11 = [
  "y",
  "z",
  "a",
  "f",
  "p",
  "n",
  "\xB5",
  "m",
  "",
  "k",
  "M",
  "G",
  "T",
  "P",
  "E",
  "Z",
  "Y"
];
function nn2(r13) {
  var M22 = r13.grouping === void 0 || r13.thousands === void 0 ? e7 : s11(C9.call(r13.grouping, Number), r13.thousands + ""), G19 = r13.currency === void 0 ? "" : r13.currency[0] + "", I21 = r13.currency === void 0 ? "" : r13.currency[1] + "", $22 = r13.decimal === void 0 ? "." : r13.decimal + "", j26 = r13.numerals === void 0 ? e7 : e6(C9.call(r13.numerals, String)), F28 = r13.percent === void 0 ? "%" : r13.percent + "", L25 = r13.minus === void 0 ? "\u2212" : r13.minus + "", X22 = r13.nan === void 0 ? "NaN" : r13.nan + "";
  function w26(t14) {
    t14 = o16(t14);
    var h20 = t14.fill, a19 = t14.align, m22 = t14.sign, g18 = t14.symbol, s24 = t14.zero, y21 = t14.width, c23 = t14.comma, d18 = t14.precision, k24 = t14.trim, i20 = t14.type;
    i20 === "n" ? (c23 = true, i20 = "g") : m9[i20] || (d18 === void 0 && (d18 = 12), k24 = true, i20 = "g"), (s24 || h20 === "0" && a19 === "=") && (s24 = true, h20 = "0", a19 = "=");
    var Z19 = g18 === "$" ? G19 : g18 === "#" && /[boxX]/.test(i20) ? "0" + i20.toLowerCase() : "", q29 = g18 === "$" ? I21 : /[%p]/.test(i20) ? F28 : "", S27 = m9[i20], B19 = /[defgprs%]/.test(i20);
    d18 = d18 === void 0 ? 6 : /[gprs]/.test(i20) ? Math.max(1, Math.min(21, d18)) : Math.max(0, Math.min(20, d18));
    function P20(n17) {
      var e33 = Z19, f25 = q29, p21, T21, u17;
      if (i20 === "c") f25 = S27(n17) + f25, n17 = "";
      else {
        n17 = +n17;
        var x23 = n17 < 0 || 1 / n17 < 0;
        if (n17 = isNaN(n17) ? X22 : S27(Math.abs(n17), d18), k24 && (n17 = c12(n17)), x23 && +n17 == 0 && m22 !== "+" && (x23 = false), e33 = (x23 ? m22 === "(" ? m22 : L25 : m22 === "-" || m22 === "(" ? "" : m22) + e33, f25 = (i20 === "s" ? E11[8 + m8 / 3] : "") + f25 + (x23 && m22 === "(" ? ")" : ""), B19) {
          for (p21 = -1, T21 = n17.length; ++p21 < T21; ) if (u17 = n17.charCodeAt(p21), 48 > u17 || u17 > 57) {
            f25 = (u17 === 46 ? $22 + n17.slice(p21 + 1) : n17.slice(p21)) + f25, n17 = n17.slice(0, p21);
            break;
          }
        }
      }
      c23 && !s24 && (n17 = M22(n17, 1 / 0));
      var b25 = e33.length + n17.length + f25.length, o26 = b25 < y21 ? new Array(y21 - b25 + 1).join(h20) : "";
      switch (c23 && s24 && (n17 = M22(o26 + n17, o26.length ? y21 - f25.length : 1 / 0), o26 = ""), a19) {
        case "<":
          n17 = e33 + n17 + f25 + o26;
          break;
        case "=":
          n17 = e33 + o26 + n17 + f25;
          break;
        case "^":
          n17 = o26.slice(0, b25 = o26.length >> 1) + e33 + n17 + f25 + o26.slice(b25);
          break;
        default:
          n17 = o26 + e33 + n17 + f25;
          break;
      }
      return j26(n17);
    }
    return P20.toString = function() {
      return t14 + "";
    }, P20;
  }
  function Y20(t14, h20) {
    var a19 = w26((t14 = o16(t14), t14.type = "f", t14)), m22 = Math.max(-8, Math.min(8, Math.floor(o15(h20) / 3))) * 3, g18 = Math.pow(10, -m22), s24 = E11[8 + m22 / 3];
    return function(y21) {
      return a19(g18 * y21) + s24;
    };
  }
  return {
    format: w26,
    formatPrefix: Y20
  };
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/defaultLocale.mjs
var r6;
var e8;
var f11;
o17({
  thousands: ",",
  grouping: [
    3
  ],
  currency: [
    "$",
    ""
  ]
});
function o17(a19) {
  return r6 = nn2(a19), e8 = r6.format, f11 = r6.formatPrefix, r6;
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/precisionFixed.mjs
function n12(t14) {
  return Math.max(0, -o15(Math.abs(t14)));
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/precisionPrefix.mjs
function r7(a19, o26) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(o15(o26) / 3))) * 3 - o15(Math.abs(a19)));
}

// deno:https://esm.sh/d3-format@3.1.0/denonext/src/precisionRound.mjs
function r8(t14, a19) {
  return t14 = Math.abs(t14), a19 = Math.abs(a19) - t14, Math.max(0, o15(a19) - o15(t14)) + 1;
}

// deno:https://esm.sh/d3-geo@3.1.1/denonext/d3-geo.mjs
var w13 = 1e-6;
var vn2 = 1e-12;
var N7 = Math.PI;
var F10 = N7 / 2;
var Xn = N7 / 4;
var k10 = N7 * 2;
var I7 = 180 / N7;
var R8 = N7 / 180;
var z7 = Math.abs;
var an2 = Math.atan;
var G8 = Math.atan2;
var E12 = Math.cos;
var St3 = Math.exp;
var An2 = Math.log;
var yt4 = Math.pow;
var x10 = Math.sin;
var Q7 = Math.sign || function(n17) {
  return n17 > 0 ? 1 : n17 < 0 ? -1 : 0;
};
var T10 = Math.sqrt;
var Yn = Math.tan;
function Rt2(n17) {
  return n17 > 1 ? 0 : n17 < -1 ? N7 : Math.acos(n17);
}
function W6(n17) {
  return n17 > 1 ? F10 : n17 < -1 ? -F10 : Math.asin(n17);
}
function $7() {
}
function Pt3(n17, t14) {
  n17 && Vr.hasOwnProperty(n17.type) && Vr[n17.type](n17, t14);
}
var Qr = {
  Feature: function(n17, t14) {
    Pt3(n17.geometry, t14);
  },
  FeatureCollection: function(n17, t14) {
    for (var e33 = n17.features, r13 = -1, i20 = e33.length; ++r13 < i20; ) Pt3(e33[r13].geometry, t14);
  }
};
var Vr = {
  Sphere: function(n17, t14) {
    t14.sphere();
  },
  Point: function(n17, t14) {
    n17 = n17.coordinates, t14.point(n17[0], n17[1], n17[2]);
  },
  MultiPoint: function(n17, t14) {
    for (var e33 = n17.coordinates, r13 = -1, i20 = e33.length; ++r13 < i20; ) n17 = e33[r13], t14.point(n17[0], n17[1], n17[2]);
  },
  LineString: function(n17, t14) {
    ir2(n17.coordinates, t14, 0);
  },
  MultiLineString: function(n17, t14) {
    for (var e33 = n17.coordinates, r13 = -1, i20 = e33.length; ++r13 < i20; ) ir2(e33[r13], t14, 0);
  },
  Polygon: function(n17, t14) {
    _r(n17.coordinates, t14);
  },
  MultiPolygon: function(n17, t14) {
    for (var e33 = n17.coordinates, r13 = -1, i20 = e33.length; ++r13 < i20; ) _r(e33[r13], t14);
  },
  GeometryCollection: function(n17, t14) {
    for (var e33 = n17.geometries, r13 = -1, i20 = e33.length; ++r13 < i20; ) Pt3(e33[r13], t14);
  }
};
function ir2(n17, t14, e33) {
  var r13 = -1, i20 = n17.length - e33, o26;
  for (t14.lineStart(); ++r13 < i20; ) o26 = n17[r13], t14.point(o26[0], o26[1], o26[2]);
  t14.lineEnd();
}
function _r(n17, t14) {
  var e33 = -1, r13 = n17.length;
  for (t14.polygonStart(); ++e33 < r13; ) ir2(n17[e33], t14, 1);
  t14.polygonEnd();
}
function K7(n17, t14) {
  n17 && Qr.hasOwnProperty(n17.type) ? Qr[n17.type](n17, t14) : Pt3(n17, t14);
}
var nt3 = new V();
var Mt3 = new V();
function zn(n17) {
  return [
    G8(n17[1], n17[0]),
    W6(n17[2])
  ];
}
function fn(n17) {
  var t14 = n17[0], e33 = n17[1], r13 = E12(e33);
  return [
    r13 * E12(t14),
    r13 * x10(t14),
    x10(e33)
  ];
}
function tt5(n17, t14) {
  return n17[0] * t14[0] + n17[1] * t14[1] + n17[2] * t14[2];
}
function xn2(n17, t14) {
  return [
    n17[1] * t14[2] - n17[2] * t14[1],
    n17[2] * t14[0] - n17[0] * t14[2],
    n17[0] * t14[1] - n17[1] * t14[0]
  ];
}
function At4(n17, t14) {
  n17[0] += t14[0], n17[1] += t14[1], n17[2] += t14[2];
}
function rt4(n17, t14) {
  return [
    n17[0] * t14,
    n17[1] * t14,
    n17[2] * t14
  ];
}
function Nn2(n17) {
  var t14 = T10(n17[0] * n17[0] + n17[1] * n17[1] + n17[2] * n17[2]);
  n17[0] /= t14, n17[1] /= t14, n17[2] /= t14;
}
function ut4(n17, t14) {
  function e33(r13, i20) {
    return r13 = n17(r13, i20), t14(r13[0], r13[1]);
  }
  return n17.invert && t14.invert && (e33.invert = function(r13, i20) {
    return r13 = t14.invert(r13, i20), r13 && n17.invert(r13[0], r13[1]);
  }), e33;
}
function gr2(n17, t14) {
  return z7(n17) > N7 && (n17 -= Math.round(n17 / k10) * k10), [
    n17,
    t14
  ];
}
gr2.invert = gr2;
function at3(n17, t14, e33) {
  return (n17 %= k10) ? t14 || e33 ? ut4(he3(n17), de4(t14, e33)) : he3(n17) : t14 || e33 ? de4(t14, e33) : gr2;
}
function ge4(n17) {
  return function(t14, e33) {
    return t14 += n17, z7(t14) > N7 && (t14 -= Math.round(t14 / k10) * k10), [
      t14,
      e33
    ];
  };
}
function he3(n17) {
  var t14 = ge4(n17);
  return t14.invert = ge4(-n17), t14;
}
function de4(n17, t14) {
  var e33 = E12(n17), r13 = x10(n17), i20 = E12(t14), o26 = x10(t14);
  function a19(u17, l19) {
    var s24 = E12(l19), f25 = E12(u17) * s24, p21 = x10(u17) * s24, c23 = x10(l19), m22 = c23 * e33 + f25 * r13;
    return [
      G8(p21 * i20 - m22 * o26, f25 * e33 - c23 * r13),
      W6(m22 * i20 + p21 * o26)
    ];
  }
  return a19.invert = function(u17, l19) {
    var s24 = E12(l19), f25 = E12(u17) * s24, p21 = x10(u17) * s24, c23 = x10(l19), m22 = c23 * i20 - p21 * o26;
    return [
      G8(p21 * i20 + c23 * o26, f25 * e33 + m22 * r13),
      W6(m22 * e33 - f25 * r13)
    ];
  }, a19;
}
function hr2(n17) {
  n17 = at3(n17[0] * R8, n17[1] * R8, n17.length > 2 ? n17[2] * R8 : 0);
  function t14(e33) {
    return e33 = n17(e33[0] * R8, e33[1] * R8), e33[0] *= I7, e33[1] *= I7, e33;
  }
  return t14.invert = function(e33) {
    return e33 = n17.invert(e33[0] * R8, e33[1] * R8), e33[0] *= I7, e33[1] *= I7, e33;
  }, t14;
}
function dr2(n17, t14, e33, r13, i20, o26) {
  if (e33) {
    var a19 = E12(t14), u17 = x10(t14), l19 = r13 * e33;
    i20 == null ? (i20 = t14 + r13 * k10, o26 = t14 - l19 / 2) : (i20 = ve4(a19, i20), o26 = ve4(a19, o26), (r13 > 0 ? i20 < o26 : i20 > o26) && (i20 += r13 * k10));
    for (var s24, f25 = i20; r13 > 0 ? f25 > o26 : f25 < o26; f25 -= l19) s24 = zn([
      a19,
      -u17 * E12(f25),
      -u17 * x10(f25)
    ]), n17.point(s24[0], s24[1]);
  }
}
function ve4(n17, t14) {
  t14 = fn(t14), t14[0] -= n17, Nn2(t14);
  var e33 = Rt2(-t14[1]);
  return ((-t14[2] < 0 ? -e33 : e33) + k10 - w13) % k10;
}
function Xt3() {
  var n17 = [], t14;
  return {
    point: function(e33, r13, i20) {
      t14.push([
        e33,
        r13,
        i20
      ]);
    },
    lineStart: function() {
      n17.push(t14 = []);
    },
    lineEnd: $7,
    rejoin: function() {
      n17.length > 1 && n17.push(n17.pop().concat(n17.shift()));
    },
    result: function() {
      var e33 = n17;
      return n17 = [], t14 = null, e33;
    }
  };
}
function Fn2(n17, t14) {
  return z7(n17[0] - t14[0]) < w13 && z7(n17[1] - t14[1]) < w13;
}
function Yt3(n17, t14, e33, r13) {
  this.x = n17, this.z = t14, this.o = e33, this.e = r13, this.v = false, this.n = this.p = null;
}
function Dt3(n17, t14, e33, r13, i20) {
  var o26 = [], a19 = [], u17, l19;
  if (n17.forEach(function(g18) {
    if (!((y21 = g18.length - 1) <= 0)) {
      var y21, S27 = g18[0], P20 = g18[y21], q29;
      if (Fn2(S27, P20)) {
        if (!S27[2] && !P20[2]) {
          for (i20.lineStart(), u17 = 0; u17 < y21; ++u17) i20.point((S27 = g18[u17])[0], S27[1]);
          i20.lineEnd();
          return;
        }
        P20[0] += 2 * w13;
      }
      o26.push(q29 = new Yt3(S27, g18, null, true)), a19.push(q29.o = new Yt3(S27, null, q29, false)), o26.push(q29 = new Yt3(P20, g18, null, false)), a19.push(q29.o = new Yt3(P20, null, q29, true));
    }
  }), !!o26.length) {
    for (a19.sort(t14), xe3(o26), xe3(a19), u17 = 0, l19 = a19.length; u17 < l19; ++u17) a19[u17].e = e33 = !e33;
    for (var s24 = o26[0], f25, p21; ; ) {
      for (var c23 = s24, m22 = true; c23.v; ) if ((c23 = c23.n) === s24) return;
      f25 = c23.z, i20.lineStart();
      do {
        if (c23.v = c23.o.v = true, c23.e) {
          if (m22) for (u17 = 0, l19 = f25.length; u17 < l19; ++u17) i20.point((p21 = f25[u17])[0], p21[1]);
          else r13(c23.x, c23.n.x, 1, i20);
          c23 = c23.n;
        } else {
          if (m22) for (f25 = c23.p.z, u17 = f25.length - 1; u17 >= 0; --u17) i20.point((p21 = f25[u17])[0], p21[1]);
          else r13(c23.x, c23.p.x, -1, i20);
          c23 = c23.p;
        }
        c23 = c23.o, f25 = c23.z, m22 = !m22;
      } while (!c23.v);
      i20.lineEnd();
    }
  }
}
function xe3(n17) {
  if (t14 = n17.length) {
    for (var t14, e33 = 0, r13 = n17[0], i20; ++e33 < t14; ) r13.n = i20 = n17[e33], i20.p = r13, r13 = i20;
    r13.n = i20 = n17[0], i20.p = r13;
  }
}
function vr(n17) {
  return z7(n17[0]) <= N7 ? n17[0] : Q7(n17[0]) * ((z7(n17[0]) + N7) % k10 - N7);
}
function Ft3(n17, t14) {
  var e33 = vr(t14), r13 = t14[1], i20 = x10(r13), o26 = [
    x10(e33),
    -E12(e33),
    0
  ], a19 = 0, u17 = 0, l19 = new V();
  i20 === 1 ? r13 = F10 + w13 : i20 === -1 && (r13 = -F10 - w13);
  for (var s24 = 0, f25 = n17.length; s24 < f25; ++s24) if (c23 = (p21 = n17[s24]).length) for (var p21, c23, m22 = p21[c23 - 1], g18 = vr(m22), y21 = m22[1] / 2 + Xn, S27 = x10(y21), P20 = E12(y21), q29 = 0; q29 < c23; ++q29, g18 = d18, S27 = A26, P20 = X22, m22 = h20) {
    var h20 = p21[q29], d18 = vr(h20), M22 = h20[1] / 2 + Xn, A26 = x10(M22), X22 = E12(M22), Y20 = d18 - g18, D18 = Y20 >= 0 ? 1 : -1, H23 = D18 * Y20, C18 = H23 > N7, nn7 = S27 * A26;
    if (l19.add(G8(nn7 * D18 * x10(H23), P20 * X22 + nn7 * E12(H23))), a19 += C18 ? Y20 + D18 * k10 : Y20, C18 ^ g18 >= e33 ^ d18 >= e33) {
      var Z19 = xn2(fn(m22), fn(h20));
      Nn2(Z19);
      var j26 = xn2(o26, Z19);
      Nn2(j26);
      var v23 = (C18 ^ Y20 >= 0 ? -1 : 1) * W6(j26[2]);
      (r13 > v23 || r13 === v23 && (Z19[0] || Z19[1])) && (u17 += C18 ^ Y20 >= 0 ? 1 : -1);
    }
  }
  return (a19 < -w13 || a19 < w13 && l19 < -vn2) ^ u17 & 1;
}
function jt3(n17, t14, e33, r13) {
  return function(i20) {
    var o26 = t14(i20), a19 = Xt3(), u17 = t14(a19), l19 = false, s24, f25, p21, c23 = {
      point: m22,
      lineStart: y21,
      lineEnd: S27,
      polygonStart: function() {
        c23.point = P20, c23.lineStart = q29, c23.lineEnd = h20, f25 = [], s24 = [];
      },
      polygonEnd: function() {
        c23.point = m22, c23.lineStart = y21, c23.lineEnd = S27, f25 = Ee(f25);
        var d18 = Ft3(s24, r13);
        f25.length ? (l19 || (i20.polygonStart(), l19 = true), Dt3(f25, hi, d18, e33, i20)) : d18 && (l19 || (i20.polygonStart(), l19 = true), i20.lineStart(), e33(null, null, 1, i20), i20.lineEnd()), l19 && (i20.polygonEnd(), l19 = false), f25 = s24 = null;
      },
      sphere: function() {
        i20.polygonStart(), i20.lineStart(), e33(null, null, 1, i20), i20.lineEnd(), i20.polygonEnd();
      }
    };
    function m22(d18, M22) {
      n17(d18, M22) && i20.point(d18, M22);
    }
    function g18(d18, M22) {
      o26.point(d18, M22);
    }
    function y21() {
      c23.point = g18, o26.lineStart();
    }
    function S27() {
      c23.point = m22, o26.lineEnd();
    }
    function P20(d18, M22) {
      p21.push([
        d18,
        M22
      ]), u17.point(d18, M22);
    }
    function q29() {
      u17.lineStart(), p21 = [];
    }
    function h20() {
      P20(p21[0][0], p21[0][1]), u17.lineEnd();
      var d18 = u17.clean(), M22 = a19.result(), A26, X22 = M22.length, Y20, D18, H23;
      if (p21.pop(), s24.push(p21), p21 = null, !!X22) {
        if (d18 & 1) {
          if (D18 = M22[0], (Y20 = D18.length - 1) > 0) {
            for (l19 || (i20.polygonStart(), l19 = true), i20.lineStart(), A26 = 0; A26 < Y20; ++A26) i20.point((H23 = D18[A26])[0], H23[1]);
            i20.lineEnd();
          }
          return;
        }
        X22 > 1 && d18 & 2 && M22.push(M22.pop().concat(M22.shift())), f25.push(M22.filter(gi));
      }
    }
    return c23;
  };
}
function gi(n17) {
  return n17.length > 1;
}
function hi(n17, t14) {
  return ((n17 = n17.x)[0] < 0 ? n17[1] - F10 - w13 : F10 - n17[1]) - ((t14 = t14.x)[0] < 0 ? t14[1] - F10 - w13 : F10 - t14[1]);
}
var Gt2 = jt3(function() {
  return true;
}, di, xi, [
  -N7,
  -F10
]);
function di(n17) {
  var t14 = NaN, e33 = NaN, r13 = NaN, i20;
  return {
    lineStart: function() {
      n17.lineStart(), i20 = 1;
    },
    point: function(o26, a19) {
      var u17 = o26 > 0 ? N7 : -N7, l19 = z7(o26 - t14);
      z7(l19 - N7) < w13 ? (n17.point(t14, e33 = (e33 + a19) / 2 > 0 ? F10 : -F10), n17.point(r13, e33), n17.lineEnd(), n17.lineStart(), n17.point(u17, e33), n17.point(o26, e33), i20 = 0) : r13 !== u17 && l19 >= N7 && (z7(t14 - r13) < w13 && (t14 -= r13 * w13), z7(o26 - u17) < w13 && (o26 -= u17 * w13), e33 = vi(t14, e33, o26, a19), n17.point(r13, e33), n17.lineEnd(), n17.lineStart(), n17.point(u17, e33), i20 = 0), n17.point(t14 = o26, e33 = a19), r13 = u17;
    },
    lineEnd: function() {
      n17.lineEnd(), t14 = e33 = NaN;
    },
    clean: function() {
      return 2 - i20;
    }
  };
}
function vi(n17, t14, e33, r13) {
  var i20, o26, a19 = x10(n17 - e33);
  return z7(a19) > w13 ? an2((x10(t14) * (o26 = E12(r13)) * x10(e33) - x10(r13) * (i20 = E12(t14)) * x10(n17)) / (i20 * o26 * a19)) : (t14 + r13) / 2;
}
function xi(n17, t14, e33, r13) {
  var i20;
  if (n17 == null) i20 = e33 * F10, r13.point(-N7, i20), r13.point(0, i20), r13.point(N7, i20), r13.point(N7, 0), r13.point(N7, -i20), r13.point(0, -i20), r13.point(-N7, -i20), r13.point(-N7, 0), r13.point(-N7, i20);
  else if (z7(n17[0] - t14[0]) > w13) {
    var o26 = n17[0] < t14[0] ? N7 : -N7;
    i20 = e33 * o26 / 2, r13.point(-o26, i20), r13.point(0, i20), r13.point(o26, i20);
  } else r13.point(t14[0], t14[1]);
}
function xr(n17) {
  var t14 = E12(n17), e33 = 2 * R8, r13 = t14 > 0, i20 = z7(t14) > w13;
  function o26(f25, p21, c23, m22) {
    dr2(m22, n17, e33, c23, f25, p21);
  }
  function a19(f25, p21) {
    return E12(f25) * E12(p21) > t14;
  }
  function u17(f25) {
    var p21, c23, m22, g18, y21;
    return {
      lineStart: function() {
        g18 = m22 = false, y21 = 1;
      },
      point: function(S27, P20) {
        var q29 = [
          S27,
          P20
        ], h20, d18 = a19(S27, P20), M22 = r13 ? d18 ? 0 : s24(S27, P20) : d18 ? s24(S27 + (S27 < 0 ? N7 : -N7), P20) : 0;
        if (!p21 && (g18 = m22 = d18) && f25.lineStart(), d18 !== m22 && (h20 = l19(p21, q29), (!h20 || Fn2(p21, h20) || Fn2(q29, h20)) && (q29[2] = 1)), d18 !== m22) y21 = 0, d18 ? (f25.lineStart(), h20 = l19(q29, p21), f25.point(h20[0], h20[1])) : (h20 = l19(p21, q29), f25.point(h20[0], h20[1], 2), f25.lineEnd()), p21 = h20;
        else if (i20 && p21 && r13 ^ d18) {
          var A26;
          !(M22 & c23) && (A26 = l19(q29, p21, true)) && (y21 = 0, r13 ? (f25.lineStart(), f25.point(A26[0][0], A26[0][1]), f25.point(A26[1][0], A26[1][1]), f25.lineEnd()) : (f25.point(A26[1][0], A26[1][1]), f25.lineEnd(), f25.lineStart(), f25.point(A26[0][0], A26[0][1], 3)));
        }
        d18 && (!p21 || !Fn2(p21, q29)) && f25.point(q29[0], q29[1]), p21 = q29, m22 = d18, c23 = M22;
      },
      lineEnd: function() {
        m22 && f25.lineEnd(), p21 = null;
      },
      clean: function() {
        return y21 | (g18 && m22) << 1;
      }
    };
  }
  function l19(f25, p21, c23) {
    var m22 = fn(f25), g18 = fn(p21), y21 = [
      1,
      0,
      0
    ], S27 = xn2(m22, g18), P20 = tt5(S27, S27), q29 = S27[0], h20 = P20 - q29 * q29;
    if (!h20) return !c23 && f25;
    var d18 = t14 * P20 / h20, M22 = -t14 * q29 / h20, A26 = xn2(y21, S27), X22 = rt4(y21, d18), Y20 = rt4(S27, M22);
    At4(X22, Y20);
    var D18 = A26, H23 = tt5(X22, D18), C18 = tt5(D18, D18), nn7 = H23 * H23 - C18 * (tt5(X22, X22) - 1);
    if (!(nn7 < 0)) {
      var Z19 = T10(nn7), j26 = rt4(D18, (-H23 - Z19) / C18);
      if (At4(j26, X22), j26 = zn(j26), !c23) return j26;
      var v23 = f25[0], L25 = p21[0], J21 = f25[1], tn6 = p21[1], un8;
      L25 < v23 && (un8 = v23, v23 = L25, L25 = un8);
      var _n4 = L25 - v23, hn6 = z7(_n4 - N7) < w13, qn4 = hn6 || _n4 < w13;
      if (!hn6 && tn6 < J21 && (un8 = J21, J21 = tn6, tn6 = un8), qn4 ? hn6 ? J21 + tn6 > 0 ^ j26[1] < (z7(j26[0] - v23) < w13 ? J21 : tn6) : J21 <= j26[1] && j26[1] <= tn6 : _n4 > N7 ^ (v23 <= j26[0] && j26[0] <= L25)) {
        var dn7 = rt4(D18, (-H23 + Z19) / C18);
        return At4(dn7, X22), [
          j26,
          zn(dn7)
        ];
      }
    }
  }
  function s24(f25, p21) {
    var c23 = r13 ? n17 : N7 - n17, m22 = 0;
    return f25 < -c23 ? m22 |= 1 : f25 > c23 && (m22 |= 2), p21 < -c23 ? m22 |= 4 : p21 > c23 && (m22 |= 8), m22;
  }
  return jt3(a19, u17, o26, r13 ? [
    0,
    -n17
  ] : [
    -N7,
    n17 - N7
  ]);
}
function Ee3(n17, t14, e33, r13, i20, o26) {
  var a19 = n17[0], u17 = n17[1], l19 = t14[0], s24 = t14[1], f25 = 0, p21 = 1, c23 = l19 - a19, m22 = s24 - u17, g18;
  if (g18 = e33 - a19, !(!c23 && g18 > 0)) {
    if (g18 /= c23, c23 < 0) {
      if (g18 < f25) return;
      g18 < p21 && (p21 = g18);
    } else if (c23 > 0) {
      if (g18 > p21) return;
      g18 > f25 && (f25 = g18);
    }
    if (g18 = i20 - a19, !(!c23 && g18 < 0)) {
      if (g18 /= c23, c23 < 0) {
        if (g18 > p21) return;
        g18 > f25 && (f25 = g18);
      } else if (c23 > 0) {
        if (g18 < f25) return;
        g18 < p21 && (p21 = g18);
      }
      if (g18 = r13 - u17, !(!m22 && g18 > 0)) {
        if (g18 /= m22, m22 < 0) {
          if (g18 < f25) return;
          g18 < p21 && (p21 = g18);
        } else if (m22 > 0) {
          if (g18 > p21) return;
          g18 > f25 && (f25 = g18);
        }
        if (g18 = o26 - u17, !(!m22 && g18 < 0)) {
          if (g18 /= m22, m22 < 0) {
            if (g18 > p21) return;
            g18 > f25 && (f25 = g18);
          } else if (m22 > 0) {
            if (g18 < f25) return;
            g18 < p21 && (p21 = g18);
          }
          return f25 > 0 && (n17[0] = a19 + f25 * c23, n17[1] = u17 + f25 * m22), p21 < 1 && (t14[0] = a19 + p21 * c23, t14[1] = u17 + p21 * m22), true;
        }
      }
    }
  }
}
var ft3 = 1e9;
var Wt3 = -ft3;
function yn2(n17, t14, e33, r13) {
  function i20(s24, f25) {
    return n17 <= s24 && s24 <= e33 && t14 <= f25 && f25 <= r13;
  }
  function o26(s24, f25, p21, c23) {
    var m22 = 0, g18 = 0;
    if (s24 == null || (m22 = a19(s24, p21)) !== (g18 = a19(f25, p21)) || l19(s24, f25) < 0 ^ p21 > 0) do
      c23.point(m22 === 0 || m22 === 3 ? n17 : e33, m22 > 1 ? r13 : t14);
    while ((m22 = (m22 + p21 + 4) % 4) !== g18);
    else c23.point(f25[0], f25[1]);
  }
  function a19(s24, f25) {
    return z7(s24[0] - n17) < w13 ? f25 > 0 ? 0 : 3 : z7(s24[0] - e33) < w13 ? f25 > 0 ? 2 : 1 : z7(s24[1] - t14) < w13 ? f25 > 0 ? 1 : 0 : f25 > 0 ? 3 : 2;
  }
  function u17(s24, f25) {
    return l19(s24.x, f25.x);
  }
  function l19(s24, f25) {
    var p21 = a19(s24, 1), c23 = a19(f25, 1);
    return p21 !== c23 ? p21 - c23 : p21 === 0 ? f25[1] - s24[1] : p21 === 1 ? s24[0] - f25[0] : p21 === 2 ? s24[1] - f25[1] : f25[0] - s24[0];
  }
  return function(s24) {
    var f25 = s24, p21 = Xt3(), c23, m22, g18, y21, S27, P20, q29, h20, d18, M22, A26, X22 = {
      point: Y20,
      lineStart: nn7,
      lineEnd: Z19,
      polygonStart: H23,
      polygonEnd: C18
    };
    function Y20(v23, L25) {
      i20(v23, L25) && f25.point(v23, L25);
    }
    function D18() {
      for (var v23 = 0, L25 = 0, J21 = m22.length; L25 < J21; ++L25) for (var tn6 = m22[L25], un8 = 1, _n4 = tn6.length, hn6 = tn6[0], qn4, dn7, Et2 = hn6[0], $n2 = hn6[1]; un8 < _n4; ++un8) qn4 = Et2, dn7 = $n2, hn6 = tn6[un8], Et2 = hn6[0], $n2 = hn6[1], dn7 <= r13 ? $n2 > r13 && (Et2 - qn4) * (r13 - dn7) > ($n2 - dn7) * (n17 - qn4) && ++v23 : $n2 <= r13 && (Et2 - qn4) * (r13 - dn7) < ($n2 - dn7) * (n17 - qn4) && --v23;
      return v23;
    }
    function H23() {
      f25 = p21, c23 = [], m22 = [], A26 = true;
    }
    function C18() {
      var v23 = D18(), L25 = A26 && v23, J21 = (c23 = Ee(c23)).length;
      (L25 || J21) && (s24.polygonStart(), L25 && (s24.lineStart(), o26(null, null, 1, s24), s24.lineEnd()), J21 && Dt3(c23, u17, v23, o26, s24), s24.polygonEnd()), f25 = s24, c23 = m22 = g18 = null;
    }
    function nn7() {
      X22.point = j26, m22 && m22.push(g18 = []), M22 = true, d18 = false, q29 = h20 = NaN;
    }
    function Z19() {
      c23 && (j26(y21, S27), P20 && d18 && p21.rejoin(), c23.push(p21.result())), X22.point = Y20, d18 && f25.lineEnd();
    }
    function j26(v23, L25) {
      var J21 = i20(v23, L25);
      if (m22 && g18.push([
        v23,
        L25
      ]), M22) y21 = v23, S27 = L25, P20 = J21, M22 = false, J21 && (f25.lineStart(), f25.point(v23, L25));
      else if (J21 && d18) f25.point(v23, L25);
      else {
        var tn6 = [
          q29 = Math.max(Wt3, Math.min(ft3, q29)),
          h20 = Math.max(Wt3, Math.min(ft3, h20))
        ], un8 = [
          v23 = Math.max(Wt3, Math.min(ft3, v23)),
          L25 = Math.max(Wt3, Math.min(ft3, L25))
        ];
        Ee3(tn6, un8, n17, t14, e33, r13) ? (d18 || (f25.lineStart(), f25.point(tn6[0], tn6[1])), f25.point(un8[0], un8[1]), J21 || f25.lineEnd(), A26 = false) : J21 && (f25.lineStart(), f25.point(v23, L25), A26 = false);
      }
      q29 = v23, h20 = L25, d18 = J21;
    }
    return X22;
  };
}
var Rn2 = (n17) => n17;
var Pr = new V();
var Mr = new V();
var ze;
var Ne4;
var qr2;
var Ar2;
var Pn2 = {
  point: $7,
  lineStart: $7,
  lineEnd: $7,
  polygonStart: function() {
    Pn2.lineStart = Li, Pn2.lineEnd = Ti;
  },
  polygonEnd: function() {
    Pn2.lineStart = Pn2.lineEnd = Pn2.point = $7, Pr.add(z7(Mr)), Mr = new V();
  },
  result: function() {
    var n17 = Pr / 2;
    return Pr = new V(), n17;
  }
};
function Li() {
  Pn2.point = Ii;
}
function Ii(n17, t14) {
  Pn2.point = Ce2, ze = qr2 = n17, Ne4 = Ar2 = t14;
}
function Ce2(n17, t14) {
  Mr.add(Ar2 * n17 - qr2 * t14), qr2 = n17, Ar2 = t14;
}
function Ti() {
  Ce2(ze, Ne4);
}
var zr = Pn2;
var Wn2 = 1 / 0;
var kt3 = Wn2;
var ct2 = -Wn2;
var Ut3 = ct2;
var $i = {
  point: Xi,
  lineStart: $7,
  lineEnd: $7,
  polygonStart: $7,
  polygonEnd: $7,
  result: function() {
    var n17 = [
      [
        Wn2,
        kt3
      ],
      [
        ct2,
        Ut3
      ]
    ];
    return ct2 = Ut3 = -(kt3 = Wn2 = 1 / 0), n17;
  }
};
function Xi(n17, t14) {
  n17 < Wn2 && (Wn2 = n17), n17 > ct2 && (ct2 = n17), t14 < kt3 && (kt3 = t14), t14 > Ut3 && (Ut3 = t14);
}
var Hn2 = $i;
var Nr2 = 0;
var Cr2 = 0;
var pt3 = 0;
var Jt3 = 0;
var Kt3 = 0;
var On2 = 0;
var Lr2 = 0;
var Ir = 0;
var st2 = 0;
var Te;
var $e2;
var sn;
var mn;
var pn2 = {
  point: In2,
  lineStart: Le,
  lineEnd: Ie2,
  polygonStart: function() {
    pn2.lineStart = Fi, pn2.lineEnd = ji;
  },
  polygonEnd: function() {
    pn2.point = In2, pn2.lineStart = Le, pn2.lineEnd = Ie2;
  },
  result: function() {
    var n17 = st2 ? [
      Lr2 / st2,
      Ir / st2
    ] : On2 ? [
      Jt3 / On2,
      Kt3 / On2
    ] : pt3 ? [
      Nr2 / pt3,
      Cr2 / pt3
    ] : [
      NaN,
      NaN
    ];
    return Nr2 = Cr2 = pt3 = Jt3 = Kt3 = On2 = Lr2 = Ir = st2 = 0, n17;
  }
};
function In2(n17, t14) {
  Nr2 += n17, Cr2 += t14, ++pt3;
}
function Le() {
  pn2.point = Yi;
}
function Yi(n17, t14) {
  pn2.point = Di, In2(sn = n17, mn = t14);
}
function Di(n17, t14) {
  var e33 = n17 - sn, r13 = t14 - mn, i20 = T10(e33 * e33 + r13 * r13);
  Jt3 += i20 * (sn + n17) / 2, Kt3 += i20 * (mn + t14) / 2, On2 += i20, In2(sn = n17, mn = t14);
}
function Ie2() {
  pn2.point = In2;
}
function Fi() {
  pn2.point = Gi;
}
function ji() {
  Xe2(Te, $e2);
}
function Gi(n17, t14) {
  pn2.point = Xe2, In2(Te = sn = n17, $e2 = mn = t14);
}
function Xe2(n17, t14) {
  var e33 = n17 - sn, r13 = t14 - mn, i20 = T10(e33 * e33 + r13 * r13);
  Jt3 += i20 * (sn + n17) / 2, Kt3 += i20 * (mn + t14) / 2, On2 += i20, i20 = mn * n17 - sn * t14, Lr2 += i20 * (sn + n17), Ir += i20 * (mn + t14), st2 += i20 * 3, In2(sn = n17, mn = t14);
}
var Tr2 = pn2;
function Qt3(n17) {
  this._context = n17;
}
Qt3.prototype = {
  _radius: 4.5,
  pointRadius: function(n17) {
    return this._radius = n17, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(n17, t14) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(n17, t14), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(n17, t14);
        break;
      }
      default: {
        this._context.moveTo(n17 + this._radius, t14), this._context.arc(n17, t14, this._radius, 0, k10);
        break;
      }
    }
  },
  result: $7
};
var Xr2 = new V();
var $r;
var De;
var Fe2;
var mt3;
var gt5;
var Vt3 = {
  point: $7,
  lineStart: function() {
    Vt3.point = Wi;
  },
  lineEnd: function() {
    $r && je(De, Fe2), Vt3.point = $7;
  },
  polygonStart: function() {
    $r = true;
  },
  polygonEnd: function() {
    $r = null;
  },
  result: function() {
    var n17 = +Xr2;
    return Xr2 = new V(), n17;
  }
};
function Wi(n17, t14) {
  Vt3.point = je, De = mt3 = n17, Fe2 = gt5 = t14;
}
function je(n17, t14) {
  mt3 -= n17, gt5 -= t14, Xr2.add(T10(mt3 * mt3 + gt5 * gt5)), mt3 = n17, gt5 = t14;
}
var Yr2 = Vt3;
var Ge;
var _t2;
var We;
var He;
var Bn2 = class {
  constructor(t14) {
    this._append = t14 == null ? Oe : Hi(t14), this._radius = 4.5, this._ = "";
  }
  pointRadius(t14) {
    return this._radius = +t14, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(t14, e33) {
    switch (this._point) {
      case 0: {
        this._append`M${t14},${e33}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${t14},${e33}`;
        break;
      }
      default: {
        if (this._append`M${t14},${e33}`, this._radius !== We || this._append !== _t2) {
          let r13 = this._radius, i20 = this._;
          this._ = "", this._append`m0,${r13}a${r13},${r13} 0 1,1 0,${-2 * r13}a${r13},${r13} 0 1,1 0,${2 * r13}z`, We = r13, _t2 = this._append, He = this._, this._ = i20;
        }
        this._ += He;
        break;
      }
    }
  }
  result() {
    let t14 = this._;
    return this._ = "", t14.length ? t14 : null;
  }
};
function Oe(n17) {
  let t14 = 1;
  this._ += n17[0];
  for (let e33 = n17.length; t14 < e33; ++t14) this._ += arguments[t14] + n17[t14];
}
function Hi(n17) {
  let t14 = Math.floor(n17);
  if (!(t14 >= 0)) throw new RangeError(`invalid digits: ${n17}`);
  if (t14 > 15) return Oe;
  if (t14 !== Ge) {
    let e33 = 10 ** t14;
    Ge = t14, _t2 = function(i20) {
      let o26 = 1;
      this._ += i20[0];
      for (let a19 = i20.length; o26 < a19; ++o26) this._ += Math.round(arguments[o26] * e33) / e33 + i20[o26];
    };
  }
  return _t2;
}
function Oi(n17, t14) {
  let e33 = 3, r13 = 4.5, i20, o26;
  function a19(u17) {
    return u17 && (typeof r13 == "function" && o26.pointRadius(+r13.apply(this, arguments)), K7(u17, i20(o26))), o26.result();
  }
  return a19.area = function(u17) {
    return K7(u17, i20(zr)), zr.result();
  }, a19.measure = function(u17) {
    return K7(u17, i20(Yr2)), Yr2.result();
  }, a19.bounds = function(u17) {
    return K7(u17, i20(Hn2)), Hn2.result();
  }, a19.centroid = function(u17) {
    return K7(u17, i20(Tr2)), Tr2.result();
  }, a19.projection = function(u17) {
    return arguments.length ? (i20 = u17 == null ? (n17 = null, Rn2) : (n17 = u17).stream, a19) : n17;
  }, a19.context = function(u17) {
    return arguments.length ? (o26 = u17 == null ? (t14 = null, new Bn2(e33)) : new Qt3(t14 = u17), typeof r13 != "function" && o26.pointRadius(r13), a19) : t14;
  }, a19.pointRadius = function(u17) {
    return arguments.length ? (r13 = typeof u17 == "function" ? u17 : (o26.pointRadius(+u17), +u17), a19) : r13;
  }, a19.digits = function(u17) {
    if (!arguments.length) return e33;
    if (u17 == null) e33 = null;
    else {
      let l19 = Math.floor(u17);
      if (!(l19 >= 0)) throw new RangeError(`invalid digits: ${u17}`);
      e33 = l19;
    }
    return t14 === null && (o26 = new Bn2(e33)), a19;
  }, a19.projection(n17).digits(e33).context(t14);
}
function Bi(n17) {
  return {
    stream: Mn2(n17)
  };
}
function Mn2(n17) {
  return function(t14) {
    var e33 = new Dr();
    for (var r13 in n17) e33[r13] = n17[r13];
    return e33.stream = t14, e33;
  };
}
function Dr() {
}
Dr.prototype = {
  constructor: Dr,
  point: function(n17, t14) {
    this.stream.point(n17, t14);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Fr(n17, t14, e33) {
  var r13 = n17.clipExtent && n17.clipExtent();
  return n17.scale(150).translate([
    0,
    0
  ]), r13 != null && n17.clipExtent(null), K7(e33, n17.stream(Hn2)), t14(Hn2.result()), r13 != null && n17.clipExtent(r13), n17;
}
function Tn2(n17, t14, e33) {
  return Fr(n17, function(r13) {
    var i20 = t14[1][0] - t14[0][0], o26 = t14[1][1] - t14[0][1], a19 = Math.min(i20 / (r13[1][0] - r13[0][0]), o26 / (r13[1][1] - r13[0][1])), u17 = +t14[0][0] + (i20 - a19 * (r13[1][0] + r13[0][0])) / 2, l19 = +t14[0][1] + (o26 - a19 * (r13[1][1] + r13[0][1])) / 2;
    n17.scale(150 * a19).translate([
      u17,
      l19
    ]);
  }, e33);
}
function Zn(n17, t14, e33) {
  return Tn2(n17, [
    [
      0,
      0
    ],
    t14
  ], e33);
}
function kn(n17, t14, e33) {
  return Fr(n17, function(r13) {
    var i20 = +t14, o26 = i20 / (r13[1][0] - r13[0][0]), a19 = (i20 - o26 * (r13[1][0] + r13[0][0])) / 2, u17 = -o26 * r13[0][1];
    n17.scale(150 * o26).translate([
      a19,
      u17
    ]);
  }, e33);
}
function Un2(n17, t14, e33) {
  return Fr(n17, function(r13) {
    var i20 = +t14, o26 = i20 / (r13[1][1] - r13[0][1]), a19 = -o26 * r13[0][0], u17 = (i20 - o26 * (r13[1][1] + r13[0][1])) / 2;
    n17.scale(150 * o26).translate([
      a19,
      u17
    ]);
  }, e33);
}
var Be = 16;
var Zi = E12(30 * R8);
function jr(n17, t14) {
  return +t14 ? Ui(n17, t14) : ki(n17);
}
function ki(n17) {
  return Mn2({
    point: function(t14, e33) {
      t14 = n17(t14, e33), this.stream.point(t14[0], t14[1]);
    }
  });
}
function Ui(n17, t14) {
  function e33(r13, i20, o26, a19, u17, l19, s24, f25, p21, c23, m22, g18, y21, S27) {
    var P20 = s24 - r13, q29 = f25 - i20, h20 = P20 * P20 + q29 * q29;
    if (h20 > 4 * t14 && y21--) {
      var d18 = a19 + c23, M22 = u17 + m22, A26 = l19 + g18, X22 = T10(d18 * d18 + M22 * M22 + A26 * A26), Y20 = W6(A26 /= X22), D18 = z7(z7(A26) - 1) < w13 || z7(o26 - p21) < w13 ? (o26 + p21) / 2 : G8(M22, d18), H23 = n17(D18, Y20), C18 = H23[0], nn7 = H23[1], Z19 = C18 - r13, j26 = nn7 - i20, v23 = q29 * Z19 - P20 * j26;
      (v23 * v23 / h20 > t14 || z7((P20 * Z19 + q29 * j26) / h20 - 0.5) > 0.3 || a19 * c23 + u17 * m22 + l19 * g18 < Zi) && (e33(r13, i20, o26, a19, u17, l19, C18, nn7, D18, d18 /= X22, M22 /= X22, A26, y21, S27), S27.point(C18, nn7), e33(C18, nn7, D18, d18, M22, A26, s24, f25, p21, c23, m22, g18, y21, S27));
    }
  }
  return function(r13) {
    var i20, o26, a19, u17, l19, s24, f25, p21, c23, m22, g18, y21, S27 = {
      point: P20,
      lineStart: q29,
      lineEnd: d18,
      polygonStart: function() {
        r13.polygonStart(), S27.lineStart = M22;
      },
      polygonEnd: function() {
        r13.polygonEnd(), S27.lineStart = q29;
      }
    };
    function P20(Y20, D18) {
      Y20 = n17(Y20, D18), r13.point(Y20[0], Y20[1]);
    }
    function q29() {
      p21 = NaN, S27.point = h20, r13.lineStart();
    }
    function h20(Y20, D18) {
      var H23 = fn([
        Y20,
        D18
      ]), C18 = n17(Y20, D18);
      e33(p21, c23, f25, m22, g18, y21, p21 = C18[0], c23 = C18[1], f25 = Y20, m22 = H23[0], g18 = H23[1], y21 = H23[2], Be, r13), r13.point(p21, c23);
    }
    function d18() {
      S27.point = P20, r13.lineEnd();
    }
    function M22() {
      q29(), S27.point = A26, S27.lineEnd = X22;
    }
    function A26(Y20, D18) {
      h20(i20 = Y20, D18), o26 = p21, a19 = c23, u17 = m22, l19 = g18, s24 = y21, S27.point = h20;
    }
    function X22() {
      e33(p21, c23, f25, m22, g18, y21, o26, a19, i20, u17, l19, s24, Be, r13), S27.lineEnd = d18, d18();
    }
    return S27;
  };
}
var Ji = Mn2({
  point: function(n17, t14) {
    this.stream.point(n17 * R8, t14 * R8);
  }
});
function Ki(n17) {
  return Mn2({
    point: function(t14, e33) {
      var r13 = n17(t14, e33);
      return this.stream.point(r13[0], r13[1]);
    }
  });
}
function Qi(n17, t14, e33, r13, i20) {
  function o26(a19, u17) {
    return a19 *= r13, u17 *= i20, [
      t14 + n17 * a19,
      e33 - n17 * u17
    ];
  }
  return o26.invert = function(a19, u17) {
    return [
      (a19 - t14) / n17 * r13,
      (e33 - u17) / n17 * i20
    ];
  }, o26;
}
function Ze2(n17, t14, e33, r13, i20, o26) {
  if (!o26) return Qi(n17, t14, e33, r13, i20);
  var a19 = E12(o26), u17 = x10(o26), l19 = a19 * n17, s24 = u17 * n17, f25 = a19 / n17, p21 = u17 / n17, c23 = (u17 * e33 - a19 * t14) / n17, m22 = (u17 * t14 + a19 * e33) / n17;
  function g18(y21, S27) {
    return y21 *= r13, S27 *= i20, [
      l19 * y21 - s24 * S27 + t14,
      e33 - s24 * y21 - l19 * S27
    ];
  }
  return g18.invert = function(y21, S27) {
    return [
      r13 * (f25 * y21 - p21 * S27 + c23),
      i20 * (m22 - p21 * y21 - f25 * S27)
    ];
  }, g18;
}
function U6(n17) {
  return bt2(function() {
    return n17;
  })();
}
function bt2(n17) {
  var t14, e33 = 150, r13 = 480, i20 = 250, o26 = 0, a19 = 0, u17 = 0, l19 = 0, s24 = 0, f25, p21 = 0, c23 = 1, m22 = 1, g18 = null, y21 = Gt2, S27 = null, P20, q29, h20, d18 = Rn2, M22 = 0.5, A26, X22, Y20, D18, H23;
  function C18(v23) {
    return Y20(v23[0] * R8, v23[1] * R8);
  }
  function nn7(v23) {
    return v23 = Y20.invert(v23[0], v23[1]), v23 && [
      v23[0] * I7,
      v23[1] * I7
    ];
  }
  C18.stream = function(v23) {
    return D18 && H23 === v23 ? D18 : D18 = Ji(Ki(f25)(y21(A26(d18(H23 = v23)))));
  }, C18.preclip = function(v23) {
    return arguments.length ? (y21 = v23, g18 = void 0, j26()) : y21;
  }, C18.postclip = function(v23) {
    return arguments.length ? (d18 = v23, S27 = P20 = q29 = h20 = null, j26()) : d18;
  }, C18.clipAngle = function(v23) {
    return arguments.length ? (y21 = +v23 ? xr(g18 = v23 * R8) : (g18 = null, Gt2), j26()) : g18 * I7;
  }, C18.clipExtent = function(v23) {
    return arguments.length ? (d18 = v23 == null ? (S27 = P20 = q29 = h20 = null, Rn2) : yn2(S27 = +v23[0][0], P20 = +v23[0][1], q29 = +v23[1][0], h20 = +v23[1][1]), j26()) : S27 == null ? null : [
      [
        S27,
        P20
      ],
      [
        q29,
        h20
      ]
    ];
  }, C18.scale = function(v23) {
    return arguments.length ? (e33 = +v23, Z19()) : e33;
  }, C18.translate = function(v23) {
    return arguments.length ? (r13 = +v23[0], i20 = +v23[1], Z19()) : [
      r13,
      i20
    ];
  }, C18.center = function(v23) {
    return arguments.length ? (o26 = v23[0] % 360 * R8, a19 = v23[1] % 360 * R8, Z19()) : [
      o26 * I7,
      a19 * I7
    ];
  }, C18.rotate = function(v23) {
    return arguments.length ? (u17 = v23[0] % 360 * R8, l19 = v23[1] % 360 * R8, s24 = v23.length > 2 ? v23[2] % 360 * R8 : 0, Z19()) : [
      u17 * I7,
      l19 * I7,
      s24 * I7
    ];
  }, C18.angle = function(v23) {
    return arguments.length ? (p21 = v23 % 360 * R8, Z19()) : p21 * I7;
  }, C18.reflectX = function(v23) {
    return arguments.length ? (c23 = v23 ? -1 : 1, Z19()) : c23 < 0;
  }, C18.reflectY = function(v23) {
    return arguments.length ? (m22 = v23 ? -1 : 1, Z19()) : m22 < 0;
  }, C18.precision = function(v23) {
    return arguments.length ? (A26 = jr(X22, M22 = v23 * v23), j26()) : T10(M22);
  }, C18.fitExtent = function(v23, L25) {
    return Tn2(C18, v23, L25);
  }, C18.fitSize = function(v23, L25) {
    return Zn(C18, v23, L25);
  }, C18.fitWidth = function(v23, L25) {
    return kn(C18, v23, L25);
  }, C18.fitHeight = function(v23, L25) {
    return Un2(C18, v23, L25);
  };
  function Z19() {
    var v23 = Ze2(e33, 0, 0, c23, m22, p21).apply(null, t14(o26, a19)), L25 = Ze2(e33, r13 - v23[0], i20 - v23[1], c23, m22, p21);
    return f25 = at3(u17, l19, s24), X22 = ut4(t14, L25), Y20 = ut4(f25, X22), A26 = jr(X22, M22), j26();
  }
  function j26() {
    return D18 = H23 = null, C18;
  }
  return function() {
    return t14 = n17.apply(this, arguments), C18.invert = t14.invert && nn7, Z19();
  };
}
function Jn2(n17) {
  var t14 = 0, e33 = N7 / 3, r13 = bt2(n17), i20 = r13(t14, e33);
  return i20.parallels = function(o26) {
    return arguments.length ? r13(t14 = o26[0] * R8, e33 = o26[1] * R8) : [
      t14 * I7,
      e33 * I7
    ];
  }, i20;
}
function ke3(n17) {
  var t14 = E12(n17);
  function e33(r13, i20) {
    return [
      r13 * t14,
      x10(i20) / t14
    ];
  }
  return e33.invert = function(r13, i20) {
    return [
      r13 / t14,
      W6(i20 * t14)
    ];
  }, e33;
}
function Ue(n17, t14) {
  var e33 = x10(n17), r13 = (e33 + x10(t14)) / 2;
  if (z7(r13) < w13) return ke3(n17);
  var i20 = 1 + e33 * (2 * r13 - e33), o26 = T10(i20) / r13;
  function a19(u17, l19) {
    var s24 = T10(i20 - 2 * r13 * x10(l19)) / r13;
    return [
      s24 * x10(u17 *= r13),
      o26 - s24 * E12(u17)
    ];
  }
  return a19.invert = function(u17, l19) {
    var s24 = o26 - l19, f25 = G8(u17, z7(s24)) * Q7(s24);
    return s24 * r13 < 0 && (f25 -= N7 * Q7(u17) * Q7(s24)), [
      f25 / r13,
      W6((i20 - (u17 * u17 + s24 * s24) * r13 * r13) / (2 * r13))
    ];
  }, a19;
}
function Kn2() {
  return Jn2(Ue).scale(155.424).center([
    0,
    33.6442
  ]);
}
function Gr() {
  return Kn2().parallels([
    29.5,
    45.5
  ]).scale(1070).translate([
    480,
    250
  ]).rotate([
    96,
    0
  ]).center([
    -0.6,
    38.7
  ]);
}
function Vi(n17) {
  var t14 = n17.length;
  return {
    point: function(e33, r13) {
      for (var i20 = -1; ++i20 < t14; ) n17[i20].point(e33, r13);
    },
    sphere: function() {
      for (var e33 = -1; ++e33 < t14; ) n17[e33].sphere();
    },
    lineStart: function() {
      for (var e33 = -1; ++e33 < t14; ) n17[e33].lineStart();
    },
    lineEnd: function() {
      for (var e33 = -1; ++e33 < t14; ) n17[e33].lineEnd();
    },
    polygonStart: function() {
      for (var e33 = -1; ++e33 < t14; ) n17[e33].polygonStart();
    },
    polygonEnd: function() {
      for (var e33 = -1; ++e33 < t14; ) n17[e33].polygonEnd();
    }
  };
}
function _i() {
  var n17, t14, e33 = Gr(), r13, i20 = Kn2().rotate([
    154,
    0
  ]).center([
    -2,
    58.5
  ]).parallels([
    55,
    65
  ]), o26, a19 = Kn2().rotate([
    157,
    0
  ]).center([
    -3,
    19.9
  ]).parallels([
    8,
    18
  ]), u17, l19, s24 = {
    point: function(c23, m22) {
      l19 = [
        c23,
        m22
      ];
    }
  };
  function f25(c23) {
    var m22 = c23[0], g18 = c23[1];
    return l19 = null, r13.point(m22, g18), l19 || (o26.point(m22, g18), l19) || (u17.point(m22, g18), l19);
  }
  f25.invert = function(c23) {
    var m22 = e33.scale(), g18 = e33.translate(), y21 = (c23[0] - g18[0]) / m22, S27 = (c23[1] - g18[1]) / m22;
    return (S27 >= 0.12 && S27 < 0.234 && y21 >= -0.425 && y21 < -0.214 ? i20 : S27 >= 0.166 && S27 < 0.234 && y21 >= -0.214 && y21 < -0.115 ? a19 : e33).invert(c23);
  }, f25.stream = function(c23) {
    return n17 && t14 === c23 ? n17 : n17 = Vi([
      e33.stream(t14 = c23),
      i20.stream(c23),
      a19.stream(c23)
    ]);
  }, f25.precision = function(c23) {
    return arguments.length ? (e33.precision(c23), i20.precision(c23), a19.precision(c23), p21()) : e33.precision();
  }, f25.scale = function(c23) {
    return arguments.length ? (e33.scale(c23), i20.scale(c23 * 0.35), a19.scale(c23), f25.translate(e33.translate())) : e33.scale();
  }, f25.translate = function(c23) {
    if (!arguments.length) return e33.translate();
    var m22 = e33.scale(), g18 = +c23[0], y21 = +c23[1];
    return r13 = e33.translate(c23).clipExtent([
      [
        g18 - 0.455 * m22,
        y21 - 0.238 * m22
      ],
      [
        g18 + 0.455 * m22,
        y21 + 0.238 * m22
      ]
    ]).stream(s24), o26 = i20.translate([
      g18 - 0.307 * m22,
      y21 + 0.201 * m22
    ]).clipExtent([
      [
        g18 - 0.425 * m22 + w13,
        y21 + 0.12 * m22 + w13
      ],
      [
        g18 - 0.214 * m22 - w13,
        y21 + 0.234 * m22 - w13
      ]
    ]).stream(s24), u17 = a19.translate([
      g18 - 0.205 * m22,
      y21 + 0.212 * m22
    ]).clipExtent([
      [
        g18 - 0.214 * m22 + w13,
        y21 + 0.166 * m22 + w13
      ],
      [
        g18 - 0.115 * m22 - w13,
        y21 + 0.234 * m22 - w13
      ]
    ]).stream(s24), p21();
  }, f25.fitExtent = function(c23, m22) {
    return Tn2(f25, c23, m22);
  }, f25.fitSize = function(c23, m22) {
    return Zn(f25, c23, m22);
  }, f25.fitWidth = function(c23, m22) {
    return kn(f25, c23, m22);
  }, f25.fitHeight = function(c23, m22) {
    return Un2(f25, c23, m22);
  };
  function p21() {
    return n17 = t14 = null, f25;
  }
  return f25.scale(1070);
}
function nr(n17) {
  return function(t14, e33) {
    var r13 = E12(t14), i20 = E12(e33), o26 = n17(r13 * i20);
    return o26 === 1 / 0 ? [
      2,
      0
    ] : [
      o26 * i20 * x10(t14),
      o26 * x10(e33)
    ];
  };
}
function gn(n17) {
  return function(t14, e33) {
    var r13 = T10(t14 * t14 + e33 * e33), i20 = n17(r13), o26 = x10(i20), a19 = E12(i20);
    return [
      G8(t14 * o26, r13 * a19),
      W6(r13 && e33 * o26 / r13)
    ];
  };
}
var Wr = nr(function(n17) {
  return T10(2 / (1 + n17));
});
Wr.invert = gn(function(n17) {
  return 2 * W6(n17 / 2);
});
function bi() {
  return U6(Wr).scale(124.75).clipAngle(180 - 1e-3);
}
var Hr = nr(function(n17) {
  return (n17 = Rt2(n17)) && n17 / x10(n17);
});
Hr.invert = gn(function(n17) {
  return n17;
});
function no() {
  return U6(Hr).scale(79.4188).clipAngle(180 - 1e-3);
}
function Qn2(n17, t14) {
  return [
    n17,
    An2(Yn((F10 + t14) / 2))
  ];
}
Qn2.invert = function(n17, t14) {
  return [
    n17,
    2 * an2(St3(t14)) - F10
  ];
};
function to() {
  return Or(Qn2).scale(961 / k10);
}
function Or(n17) {
  var t14 = U6(n17), e33 = t14.center, r13 = t14.scale, i20 = t14.translate, o26 = t14.clipExtent, a19 = null, u17, l19, s24;
  t14.scale = function(p21) {
    return arguments.length ? (r13(p21), f25()) : r13();
  }, t14.translate = function(p21) {
    return arguments.length ? (i20(p21), f25()) : i20();
  }, t14.center = function(p21) {
    return arguments.length ? (e33(p21), f25()) : e33();
  }, t14.clipExtent = function(p21) {
    return arguments.length ? (p21 == null ? a19 = u17 = l19 = s24 = null : (a19 = +p21[0][0], u17 = +p21[0][1], l19 = +p21[1][0], s24 = +p21[1][1]), f25()) : a19 == null ? null : [
      [
        a19,
        u17
      ],
      [
        l19,
        s24
      ]
    ];
  };
  function f25() {
    var p21 = N7 * r13(), c23 = t14(hr2(t14.rotate()).invert([
      0,
      0
    ]));
    return o26(a19 == null ? [
      [
        c23[0] - p21,
        c23[1] - p21
      ],
      [
        c23[0] + p21,
        c23[1] + p21
      ]
    ] : n17 === Qn2 ? [
      [
        Math.max(c23[0] - p21, a19),
        u17
      ],
      [
        Math.min(c23[0] + p21, l19),
        s24
      ]
    ] : [
      [
        a19,
        Math.max(c23[1] - p21, u17)
      ],
      [
        l19,
        Math.min(c23[1] + p21, s24)
      ]
    ]);
  }
  return f25();
}
function tr(n17) {
  return Yn((F10 + n17) / 2);
}
function Je(n17, t14) {
  var e33 = E12(n17), r13 = n17 === t14 ? x10(n17) : An2(e33 / E12(t14)) / An2(tr(t14) / tr(n17)), i20 = e33 * yt4(tr(n17), r13) / r13;
  if (!r13) return Qn2;
  function o26(a19, u17) {
    i20 > 0 ? u17 < -F10 + w13 && (u17 = -F10 + w13) : u17 > F10 - w13 && (u17 = F10 - w13);
    var l19 = i20 / yt4(tr(u17), r13);
    return [
      l19 * x10(r13 * a19),
      i20 - l19 * E12(r13 * a19)
    ];
  }
  return o26.invert = function(a19, u17) {
    var l19 = i20 - u17, s24 = Q7(r13) * T10(a19 * a19 + l19 * l19), f25 = G8(a19, z7(l19)) * Q7(l19);
    return l19 * r13 < 0 && (f25 -= N7 * Q7(a19) * Q7(l19)), [
      f25 / r13,
      2 * an2(yt4(i20 / s24, 1 / r13)) - F10
    ];
  }, o26;
}
function ro() {
  return Jn2(Je).scale(109.5).parallels([
    30,
    30
  ]);
}
function Vn2(n17, t14) {
  return [
    n17,
    t14
  ];
}
Vn2.invert = Vn2;
function eo() {
  return U6(Vn2).scale(152.63);
}
function Ke(n17, t14) {
  var e33 = E12(n17), r13 = n17 === t14 ? x10(n17) : (e33 - E12(t14)) / (t14 - n17), i20 = e33 / r13 + n17;
  if (z7(r13) < w13) return Vn2;
  function o26(a19, u17) {
    var l19 = i20 - u17, s24 = r13 * a19;
    return [
      l19 * x10(s24),
      i20 - l19 * E12(s24)
    ];
  }
  return o26.invert = function(a19, u17) {
    var l19 = i20 - u17, s24 = G8(a19, z7(l19)) * Q7(l19);
    return l19 * r13 < 0 && (s24 -= N7 * Q7(a19) * Q7(l19)), [
      s24 / r13,
      i20 - Q7(r13) * T10(a19 * a19 + l19 * l19)
    ];
  }, o26;
}
function io() {
  return Jn2(Ke).scale(131.154).center([
    0,
    13.9389
  ]);
}
var ht3 = 1.340264;
var dt2 = -0.081106;
var vt3 = 893e-6;
var xt4 = 3796e-6;
var rr3 = T10(3) / 2;
var oo = 12;
function Br2(n17, t14) {
  var e33 = W6(rr3 * x10(t14)), r13 = e33 * e33, i20 = r13 * r13 * r13;
  return [
    n17 * E12(e33) / (rr3 * (ht3 + 3 * dt2 * r13 + i20 * (7 * vt3 + 9 * xt4 * r13))),
    e33 * (ht3 + dt2 * r13 + i20 * (vt3 + xt4 * r13))
  ];
}
Br2.invert = function(n17, t14) {
  for (var e33 = t14, r13 = e33 * e33, i20 = r13 * r13 * r13, o26 = 0, a19, u17, l19; o26 < oo && (u17 = e33 * (ht3 + dt2 * r13 + i20 * (vt3 + xt4 * r13)) - t14, l19 = ht3 + 3 * dt2 * r13 + i20 * (7 * vt3 + 9 * xt4 * r13), e33 -= a19 = u17 / l19, r13 = e33 * e33, i20 = r13 * r13 * r13, !(z7(a19) < vn2)); ++o26) ;
  return [
    rr3 * n17 * (ht3 + 3 * dt2 * r13 + i20 * (7 * vt3 + 9 * xt4 * r13)) / E12(e33),
    W6(x10(e33) / rr3)
  ];
};
function uo() {
  return U6(Br2).scale(177.158);
}
function Zr(n17, t14) {
  var e33 = E12(t14), r13 = E12(n17) * e33;
  return [
    e33 * x10(n17) / r13,
    x10(t14) / r13
  ];
}
Zr.invert = gn(an2);
function ao() {
  return U6(Zr).scale(144.049).clipAngle(60);
}
function kr2(n17, t14) {
  var e33 = t14 * t14, r13 = e33 * e33;
  return [
    n17 * (0.8707 - 0.131979 * e33 + r13 * (-0.013791 + r13 * (3971e-6 * e33 - 1529e-6 * r13))),
    t14 * (1.007226 + e33 * (0.015085 + r13 * (-0.044475 + 0.028874 * e33 - 5916e-6 * r13)))
  ];
}
kr2.invert = function(n17, t14) {
  var e33 = t14, r13 = 25, i20;
  do {
    var o26 = e33 * e33, a19 = o26 * o26;
    e33 -= i20 = (e33 * (1.007226 + o26 * (0.015085 + a19 * (-0.044475 + 0.028874 * o26 - 5916e-6 * a19))) - t14) / (1.007226 + o26 * (0.015085 * 3 + a19 * (-0.044475 * 7 + 0.028874 * 9 * o26 - 5916e-6 * 11 * a19)));
  } while (z7(i20) > w13 && --r13 > 0);
  return [
    n17 / (0.8707 + (o26 = e33 * e33) * (-0.131979 + o26 * (-0.013791 + o26 * o26 * o26 * (3971e-6 - 1529e-6 * o26)))),
    e33
  ];
};
function Ur(n17, t14) {
  return [
    E12(t14) * x10(n17),
    x10(t14)
  ];
}
Ur.invert = gn(W6);
function co() {
  return U6(Ur).scale(249.5).clipAngle(90 + w13);
}
function Jr(n17, t14) {
  var e33 = E12(t14), r13 = 1 + E12(n17) * e33;
  return [
    e33 * x10(n17) / r13,
    x10(t14) / r13
  ];
}
Jr.invert = gn(function(n17) {
  return 2 * an2(n17);
});
function po() {
  return U6(Jr).scale(250).clipAngle(142);
}
function Kr(n17, t14) {
  return [
    An2(Yn((F10 + t14) / 2)),
    -n17
  ];
}
Kr.invert = function(n17, t14) {
  return [
    -t14,
    2 * an2(St3(n17)) - F10
  ];
};
function so() {
  var n17 = Or(Kr), t14 = n17.center, e33 = n17.rotate;
  return n17.center = function(r13) {
    return arguments.length ? t14([
      -r13[1],
      r13[0]
    ]) : (r13 = t14(), [
      r13[1],
      -r13[0]
    ]);
  }, n17.rotate = function(r13) {
    return arguments.length ? e33([
      r13[0],
      r13[1],
      r13.length > 2 ? r13[2] + 90 : 90
    ]) : (r13 = e33(), [
      r13[0],
      r13[1],
      r13[2] - 90
    ]);
  }, e33([
    0,
    0,
    90
  ]).scale(159.155);
}

// deno:https://esm.sh/d3-hierarchy@3.1.2/denonext/d3-hierarchy.mjs
function Ce3(e33) {
  var t14 = 0, r13 = e33.children, n17 = r13 && r13.length;
  if (!n17) t14 = 1;
  else for (; --n17 >= 0; ) t14 += r13[n17].value;
  e33.value = t14;
}
function re4() {
  return this.eachAfter(Ce3);
}
function ne3(e33, t14) {
  let r13 = -1;
  for (let n17 of this) e33.call(t14, n17, ++r13, this);
  return this;
}
function ie3(e33, t14) {
  for (var r13 = this, n17 = [
    r13
  ], i20, u17, o26 = -1; r13 = n17.pop(); ) if (e33.call(t14, r13, ++o26, this), i20 = r13.children) for (u17 = i20.length - 1; u17 >= 0; --u17) n17.push(i20[u17]);
  return this;
}
function ue3(e33, t14) {
  for (var r13 = this, n17 = [
    r13
  ], i20 = [], u17, o26, h20, l19 = -1; r13 = n17.pop(); ) if (i20.push(r13), u17 = r13.children) for (o26 = 0, h20 = u17.length; o26 < h20; ++o26) n17.push(u17[o26]);
  for (; r13 = i20.pop(); ) e33.call(t14, r13, ++l19, this);
  return this;
}
function ae4(e33, t14) {
  let r13 = -1;
  for (let n17 of this) if (e33.call(t14, n17, ++r13, this)) return n17;
}
function fe4(e33) {
  return this.eachAfter(function(t14) {
    for (var r13 = +e33(t14.data) || 0, n17 = t14.children, i20 = n17 && n17.length; --i20 >= 0; ) r13 += n17[i20].value;
    t14.value = r13;
  });
}
function oe4(e33) {
  return this.eachBefore(function(t14) {
    t14.children && t14.children.sort(e33);
  });
}
function le3(e33) {
  for (var t14 = this, r13 = De2(t14, e33), n17 = [
    t14
  ]; t14 !== r13; ) t14 = t14.parent, n17.push(t14);
  for (var i20 = n17.length; e33 !== r13; ) n17.splice(i20, 0, e33), e33 = e33.parent;
  return n17;
}
function De2(e33, t14) {
  if (e33 === t14) return e33;
  var r13 = e33.ancestors(), n17 = t14.ancestors(), i20 = null;
  for (e33 = r13.pop(), t14 = n17.pop(); e33 === t14; ) i20 = e33, e33 = r13.pop(), t14 = n17.pop();
  return i20;
}
function ce4() {
  for (var e33 = this, t14 = [
    e33
  ]; e33 = e33.parent; ) t14.push(e33);
  return t14;
}
function he4() {
  return Array.from(this);
}
function se4() {
  var e33 = [];
  return this.eachBefore(function(t14) {
    t14.children || e33.push(t14);
  }), e33;
}
function pe4() {
  var e33 = this, t14 = [];
  return e33.each(function(r13) {
    r13 !== e33 && t14.push({
      source: r13.parent,
      target: r13
    });
  }), t14;
}
function* de5() {
  var e33 = this, t14, r13 = [
    e33
  ], n17, i20, u17;
  do
    for (t14 = r13.reverse(), r13 = []; e33 = t14.pop(); ) if (yield e33, n17 = e33.children) for (i20 = 0, u17 = n17.length; i20 < u17; ++i20) r13.push(n17[i20]);
  while (r13.length);
}
function T11(e33, t14) {
  e33 instanceof Map ? (e33 = [
    void 0,
    e33
  ], t14 === void 0 && (t14 = Oe2)) : t14 === void 0 && (t14 = be4);
  for (var r13 = new M6(e33), n17, i20 = [
    r13
  ], u17, o26, h20, l19; n17 = i20.pop(); ) if ((o26 = t14(n17.data)) && (l19 = (o26 = Array.from(o26)).length)) for (n17.children = o26, h20 = l19 - 1; h20 >= 0; --h20) i20.push(u17 = o26[h20] = new M6(o26[h20])), u17.parent = n17, u17.depth = n17.depth + 1;
  return r13.eachBefore(Z7);
}
function Te2() {
  return T11(this).eachBefore(Ve2);
}
function be4(e33) {
  return e33.children;
}
function Oe2(e33) {
  return Array.isArray(e33) ? e33[1] : null;
}
function Ve2(e33) {
  e33.data.value !== void 0 && (e33.value = e33.data.value), e33.data = e33.data.data;
}
function Z7(e33) {
  var t14 = 0;
  do
    e33.height = t14;
  while ((e33 = e33.parent) && e33.height < ++t14);
}
function M6(e33) {
  this.data = e33, this.depth = this.height = 0, this.parent = null;
}
M6.prototype = T11.prototype = {
  constructor: M6,
  count: re4,
  each: ne3,
  eachAfter: ue3,
  eachBefore: ie3,
  find: ae4,
  sum: fe4,
  sort: oe4,
  path: le3,
  ancestors: ce4,
  descendants: he4,
  leaves: se4,
  links: pe4,
  copy: Te2,
  [Symbol.iterator]: de5
};
function S8(e33, t14, r13, n17, i20) {
  for (var u17 = e33.children, o26, h20 = -1, l19 = u17.length, f25 = e33.value && (n17 - t14) / e33.value; ++h20 < l19; ) o26 = u17[h20], o26.y0 = r13, o26.y1 = i20, o26.x0 = t14, o26.x1 = t14 += o26.value * f25;
}
function W7(e33, t14) {
  this._ = e33, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t14;
}
W7.prototype = Object.create(M6.prototype);
function E13(e33, t14, r13, n17, i20) {
  for (var u17 = e33.children, o26, h20 = -1, l19 = u17.length, f25 = e33.value && (i20 - r13) / e33.value; ++h20 < l19; ) o26 = u17[h20], o26.x0 = t14, o26.x1 = n17, o26.y0 = r13, o26.y1 = r13 += o26.value * f25;
}
var Q8 = (1 + Math.sqrt(5)) / 2;
function U7(e33, t14, r13, n17, i20, u17) {
  for (var o26 = [], h20 = t14.children, l19, f25, c23 = 0, s24 = 0, a19 = h20.length, p21, d18, m22 = t14.value, x23, g18, y21, _19, w26, v23, z29; c23 < a19; ) {
    p21 = i20 - r13, d18 = u17 - n17;
    do
      x23 = h20[s24++].value;
    while (!x23 && s24 < a19);
    for (g18 = y21 = x23, v23 = Math.max(d18 / p21, p21 / d18) / (m22 * e33), z29 = x23 * x23 * v23, w26 = Math.max(y21 / z29, z29 / g18); s24 < a19; ++s24) {
      if (x23 += f25 = h20[s24].value, f25 < g18 && (g18 = f25), f25 > y21 && (y21 = f25), z29 = x23 * x23 * v23, _19 = Math.max(y21 / z29, z29 / g18), _19 > w26) {
        x23 -= f25;
        break;
      }
      w26 = _19;
    }
    o26.push(l19 = {
      value: x23,
      dice: p21 < d18,
      children: h20.slice(c23, s24)
    }), l19.dice ? S8(l19, r13, n17, i20, m22 ? n17 += d18 * x23 / m22 : u17) : E13(l19, r13, n17, m22 ? r13 += p21 * x23 / m22 : i20, u17), m22 -= x23, c23 = s24;
  }
  return o26;
}
var ee3 = function e9(t14) {
  function r13(n17, i20, u17, o26, h20) {
    U7(t14, n17, i20, u17, o26, h20);
  }
  return r13.ratio = function(n17) {
    return e9((n17 = +n17) > 1 ? n17 : 1);
  }, r13;
}(Q8);
var ot3 = function e10(t14) {
  function r13(n17, i20, u17, o26, h20) {
    if ((l19 = n17._squarify) && l19.ratio === t14) for (var l19, f25, c23, s24, a19 = -1, p21, d18 = l19.length, m22 = n17.value; ++a19 < d18; ) {
      for (f25 = l19[a19], c23 = f25.children, s24 = f25.value = 0, p21 = c23.length; s24 < p21; ++s24) f25.value += c23[s24].value;
      f25.dice ? S8(f25, i20, u17, o26, m22 ? u17 += (h20 - u17) * f25.value / m22 : h20) : E13(f25, i20, u17, m22 ? i20 += (o26 - i20) * f25.value / m22 : o26, h20), m22 -= f25.value;
    }
    else n17._squarify = l19 = U7(t14, n17, i20, u17, o26, h20), l19.ratio = t14;
  }
  return r13.ratio = function(n17) {
    return e10((n17 = +n17) > 1 ? n17 : 1);
  }, r13;
}(Q8);

// deno:https://esm.sh/d3-random@3.0.1/denonext/d3-random.mjs
var a8 = Math.random;
var N8 = function e11(t14) {
  function n17(r13, o26) {
    return r13 = r13 == null ? 0 : +r13, o26 = o26 == null ? 1 : +o26, arguments.length === 1 ? (o26 = r13, r13 = 0) : o26 -= r13, function() {
      return t14() * o26 + r13;
    };
  }
  return n17.source = e11, n17;
}(a8);
var E14 = function e12(t14) {
  function n17(r13, o26) {
    return arguments.length < 2 && (o26 = r13, r13 = 0), r13 = Math.floor(r13), o26 = Math.floor(o26) - r13, function() {
      return Math.floor(t14() * o26 + r13);
    };
  }
  return n17.source = e12, n17;
}(a8);
var s12 = function e13(t14) {
  function n17(r13, o26) {
    var u17, f25;
    return r13 = r13 == null ? 0 : +r13, o26 = o26 == null ? 1 : +o26, function() {
      var l19;
      if (u17 != null) l19 = u17, u17 = null;
      else do
        u17 = t14() * 2 - 1, l19 = t14() * 2 - 1, f25 = u17 * u17 + l19 * l19;
      while (!f25 || f25 > 1);
      return r13 + o26 * l19 * Math.sqrt(-2 * Math.log(f25) / f25);
    };
  }
  return n17.source = e13, n17;
}(a8);
var L10 = function e14(t14) {
  var n17 = s12.source(t14);
  function r13() {
    var o26 = n17.apply(this, arguments);
    return function() {
      return Math.exp(o26());
    };
  }
  return r13.source = e14, r13;
}(a8);
var x11 = function e15(t14) {
  function n17(r13) {
    return (r13 = +r13) <= 0 ? () => 0 : function() {
      for (var o26 = 0, u17 = r13; u17 > 1; --u17) o26 += t14();
      return o26 + u17 * t14();
    };
  }
  return n17.source = e15, n17;
}(a8);
var P7 = function e16(t14) {
  var n17 = x11.source(t14);
  function r13(o26) {
    if ((o26 = +o26) == 0) return t14;
    var u17 = n17(o26);
    return function() {
      return u17() / o26;
    };
  }
  return r13.source = e16, r13;
}(a8);
var H8 = function e17(t14) {
  function n17(r13) {
    return function() {
      return -Math.log1p(-t14()) / r13;
    };
  }
  return n17.source = e17, n17;
}(a8);
var C10 = function e18(t14) {
  function n17(r13) {
    if ((r13 = +r13) < 0) throw new RangeError("invalid alpha");
    return r13 = 1 / -r13, function() {
      return Math.pow(1 - t14(), r13);
    };
  }
  return n17.source = e18, n17;
}(a8);
var F11 = function e19(t14) {
  function n17(r13) {
    if ((r13 = +r13) < 0 || r13 > 1) throw new RangeError("invalid p");
    return function() {
      return Math.floor(t14() + r13);
    };
  }
  return n17.source = e19, n17;
}(a8);
var g6 = function e20(t14) {
  function n17(r13) {
    if ((r13 = +r13) < 0 || r13 > 1) throw new RangeError("invalid p");
    return r13 === 0 ? () => 1 / 0 : r13 === 1 ? () => 1 : (r13 = Math.log1p(-r13), function() {
      return 1 + Math.floor(Math.log1p(-t14()) / r13);
    });
  }
  return n17.source = e20, n17;
}(a8);
var p7 = function e21(t14) {
  var n17 = s12.source(t14)();
  function r13(o26, u17) {
    if ((o26 = +o26) < 0) throw new RangeError("invalid k");
    if (o26 === 0) return () => 0;
    if (u17 = u17 == null ? 1 : +u17, o26 === 1) return () => -Math.log1p(-t14()) * u17;
    var f25 = (o26 < 1 ? o26 + 1 : o26) - 1 / 3, l19 = 1 / (3 * Math.sqrt(f25)), m22 = o26 < 1 ? () => Math.pow(t14(), 1 / o26) : () => 1;
    return function() {
      do {
        do
          var i20 = n17(), c23 = 1 + l19 * i20;
        while (c23 <= 0);
        c23 *= c23 * c23;
        var d18 = 1 - t14();
      } while (d18 >= 1 - 0.0331 * i20 * i20 * i20 * i20 && Math.log(d18) >= 0.5 * i20 * i20 + f25 * (1 - c23 + Math.log(c23)));
      return f25 * c23 * m22() * u17;
    };
  }
  return r13.source = e21, r13;
}(a8);
var M7 = function e22(t14) {
  var n17 = p7.source(t14);
  function r13(o26, u17) {
    var f25 = n17(o26), l19 = n17(u17);
    return function() {
      var m22 = f25();
      return m22 === 0 ? 0 : m22 / (m22 + l19());
    };
  }
  return r13.source = e22, r13;
}(a8);
var v11 = function e23(t14) {
  var n17 = g6.source(t14), r13 = M7.source(t14);
  function o26(u17, f25) {
    return u17 = +u17, (f25 = +f25) >= 1 ? () => u17 : f25 <= 0 ? () => 0 : function() {
      for (var l19 = 0, m22 = u17, i20 = f25; m22 * i20 > 16 && m22 * (1 - i20) > 16; ) {
        var c23 = Math.floor((m22 + 1) * i20), d18 = r13(c23, m22 - c23 + 1)();
        d18 <= i20 ? (l19 += c23, m22 -= c23, i20 = (i20 - d18) / (1 - d18)) : (m22 = c23 - 1, i20 /= d18);
      }
      for (var w26 = i20 < 0.5, G19 = w26 ? i20 : 1 - i20, R19 = n17(G19), S27 = R19(), h20 = 0; S27 <= m22; ++h20) S27 += R19();
      return l19 + (w26 ? h20 : m22 - h20);
    };
  }
  return o26.source = e23, o26;
}(a8);
var y9 = function e24(t14) {
  function n17(r13, o26, u17) {
    var f25;
    return (r13 = +r13) == 0 ? f25 = (l19) => -Math.log(l19) : (r13 = 1 / r13, f25 = (l19) => Math.pow(l19, r13)), o26 = o26 == null ? 0 : +o26, u17 = u17 == null ? 1 : +u17, function() {
      return o26 + u17 * f25(-Math.log1p(-t14()));
    };
  }
  return n17.source = e24, n17;
}(a8);
var U8 = function e25(t14) {
  function n17(r13, o26) {
    return r13 = r13 == null ? 0 : +r13, o26 = o26 == null ? 1 : +o26, function() {
      return r13 + o26 * Math.tan(Math.PI * t14());
    };
  }
  return n17.source = e25, n17;
}(a8);
var W8 = function e26(t14) {
  function n17(r13, o26) {
    return r13 = r13 == null ? 0 : +r13, o26 = o26 == null ? 1 : +o26, function() {
      var u17 = t14();
      return r13 + o26 * Math.log(u17 / (1 - u17));
    };
  }
  return n17.source = e26, n17;
}(a8);
var q12 = function e27(t14) {
  var n17 = p7.source(t14), r13 = v11.source(t14);
  function o26(u17) {
    return function() {
      for (var f25 = 0, l19 = u17; l19 > 16; ) {
        var m22 = Math.floor(0.875 * l19), i20 = n17(m22)();
        if (i20 > l19) return f25 + r13(m22 - 1, l19 / i20)();
        f25 += m22, l19 -= i20;
      }
      for (var c23 = -Math.log1p(-t14()), d18 = 0; c23 <= l19; ++d18) c23 -= Math.log1p(-t14());
      return f25 + d18;
    };
  }
  return o26.source = e27, o26;
}(a8);

// deno:https://esm.sh/d3-scale-chromatic@3.1.0/denonext/d3-scale-chromatic.mjs
function f12(e33) {
  for (var d18 = e33.length / 6 | 0, b25 = new Array(d18), r13 = 0; r13 < d18; ) b25[r13] = "#" + e33.slice(r13 * 6, ++r13 * 6);
  return b25;
}
var W9 = f12("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
var j6 = f12("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
var q13 = f12("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
var z8 = f12("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");
var E15 = f12("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
var F12 = f12("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
var H9 = f12("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
var J8 = f12("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
var K8 = f12("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
var N9 = f12("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
var Q9 = f12("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
var a9 = (e33) => sr(e33[e33.length - 1]);
var p8 = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(f12);
var X9 = a9(p8);
var s13 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(f12);
var Z8 = a9(s13);
var l7 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(f12);
var $8 = a9(l7);
var n13 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(f12);
var ff = a9(n13);
var i9 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(f12);
var ef = a9(i9);
var u7 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(f12);
var af = a9(u7);
var x12 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(f12);
var df = a9(x12);
var h10 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(f12);
var cf = a9(h10);
var v12 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(f12);
var bf = a9(v12);
var M8 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(f12);
var rf = a9(M8);
var w14 = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(f12);
var of = a9(w14);
var y10 = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(f12);
var tf = a9(y10);
var A11 = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(f12);
var mf = a9(A11);
var B8 = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(f12);
var pf = a9(B8);
var P8 = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(f12);
var sf = a9(P8);
var G9 = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(f12);
var lf = a9(G9);
var R9 = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(f12);
var nf = a9(R9);
var g7 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(f12);
var uf = a9(g7);
var Y9 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(f12);
var xf = a9(Y9);
var O6 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(f12);
var hf = a9(O6);
var C11 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(f12);
var vf = a9(C11);
var S9 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(f12);
var Mf = a9(S9);
var I8 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(f12);
var wf = a9(I8);
var _5 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(f12);
var yf = a9(_5);
var D8 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(f12);
var Af = a9(D8);
var L11 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(f12);
var Bf = a9(L11);
var T12 = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(f12);
var Pf = a9(T12);
function Gf(e33) {
  return e33 = Math.max(0, Math.min(1, e33)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e33 * (35.34 - e33 * (2381.73 - e33 * (6402.7 - e33 * (7024.72 - e33 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e33 * (170.73 + e33 * (52.82 - e33 * (131.46 - e33 * (176.58 - e33 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e33 * (442.36 - e33 * (2482.43 - e33 * (6167.24 - e33 * (6614.94 - e33 * 2475.67))))))) + ")";
}
var gf = qr(X4(300, 0.5, 0), X4(-240, 0.5, 1));
var Yf = qr(X4(-100, 0.75, 0.35), X4(80, 1.5, 0.8));
var Of = qr(X4(260, 0.75, 0.35), X4(80, 1.5, 0.8));
var o18 = X4();
function Cf(e33) {
  (e33 < 0 || e33 > 1) && (e33 -= Math.floor(e33));
  var d18 = Math.abs(e33 - 0.5);
  return o18.h = 360 * e33 - 100, o18.s = 1.5 - 1.5 * d18, o18.l = 0.8 - 0.9 * d18, o18 + "";
}
var t2 = V4();
var If = Math.PI / 3;
var _f = Math.PI * 2 / 3;
function Df(e33) {
  var d18;
  return e33 = (0.5 - e33) * Math.PI, t2.r = 255 * (d18 = Math.sin(e33)) * d18, t2.g = 255 * (d18 = Math.sin(e33 + If)) * d18, t2.b = 255 * (d18 = Math.sin(e33 + _f)) * d18, t2 + "";
}
function Lf(e33) {
  return e33 = Math.max(0, Math.min(1, e33)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e33 * (1172.33 - e33 * (10793.56 - e33 * (33300.12 - e33 * (38394.49 - e33 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e33 * (557.33 + e33 * (1225.33 - e33 * (3574.96 - e33 * (1073.77 + e33 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e33 * (3211.1 - e33 * (15327.97 - e33 * (27814 - e33 * (22569.18 - e33 * 6838.66))))))) + ")";
}
function m10(e33) {
  var d18 = e33.length;
  return function(b25) {
    return e33[Math.max(0, Math.min(d18 - 1, Math.floor(b25 * d18)))];
  };
}
var Tf = m10(f12("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var kf = m10(f12("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var Vf = m10(f12("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var Wf = m10(f12("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// deno:https://esm.sh/d3-time@3.1.0/denonext/d3-time.mjs
var q14 = /* @__PURE__ */ new Date();
var A12 = /* @__PURE__ */ new Date();
function o19(t14, e33, u17, C18) {
  function i20(r13) {
    return t14(r13 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r13)), r13;
  }
  return i20.floor = (r13) => (t14(r13 = /* @__PURE__ */ new Date(+r13)), r13), i20.ceil = (r13) => (t14(r13 = new Date(r13 - 1)), e33(r13, 1), t14(r13), r13), i20.round = (r13) => {
    let n17 = i20(r13), c23 = i20.ceil(r13);
    return r13 - n17 < c23 - r13 ? n17 : c23;
  }, i20.offset = (r13, n17) => (e33(r13 = /* @__PURE__ */ new Date(+r13), n17 == null ? 1 : Math.floor(n17)), r13), i20.range = (r13, n17, c23) => {
    let h20 = [];
    if (r13 = i20.ceil(r13), c23 = c23 == null ? 1 : Math.floor(c23), !(r13 < n17) || !(c23 > 0)) return h20;
    let a19;
    do
      h20.push(a19 = /* @__PURE__ */ new Date(+r13)), e33(r13, c23), t14(r13);
    while (a19 < r13 && r13 < n17);
    return h20;
  }, i20.filter = (r13) => o19((n17) => {
    if (n17 >= n17) for (; t14(n17), !r13(n17); ) n17.setTime(n17 - 1);
  }, (n17, c23) => {
    if (n17 >= n17) if (c23 < 0) for (; ++c23 <= 0; ) for (; e33(n17, -1), !r13(n17); ) ;
    else for (; --c23 >= 0; ) for (; e33(n17, 1), !r13(n17); ) ;
  }), u17 && (i20.count = (r13, n17) => (q14.setTime(+r13), A12.setTime(+n17), t14(q14), t14(A12), Math.floor(u17(q14, A12))), i20.every = (r13) => (r13 = Math.floor(r13), !isFinite(r13) || !(r13 > 0) ? null : r13 > 1 ? i20.filter(C18 ? (n17) => C18(n17) % r13 === 0 : (n17) => i20.count(0, n17) % r13 === 0) : i20)), i20;
}
var x13 = o19(() => {
}, (t14, e33) => {
  t14.setTime(+t14 + e33);
}, (t14, e33) => e33 - t14);
x13.every = (t14) => (t14 = Math.floor(t14), !isFinite(t14) || !(t14 > 0) ? null : t14 > 1 ? o19((e33) => {
  e33.setTime(Math.floor(e33 / t14) * t14);
}, (e33, u17) => {
  e33.setTime(+e33 + u17 * t14);
}, (e33, u17) => (u17 - e33) / t14) : x13);
var E16 = x13.range;
var p9 = o19((t14) => {
  t14.setTime(t14 - t14.getMilliseconds());
}, (t14, e33) => {
  t14.setTime(+t14 + e33 * 1e3);
}, (t14, e33) => (e33 - t14) / 1e3, (t14) => t14.getUTCSeconds());
var G10 = p9.range;
var H10 = o19((t14) => {
  t14.setTime(t14 - t14.getMilliseconds() - t14.getSeconds() * 1e3);
}, (t14, e33) => {
  t14.setTime(+t14 + e33 * 6e4);
}, (t14, e33) => (e33 - t14) / 6e4, (t14) => t14.getMinutes());
var ct3 = H10.range;
var W10 = o19((t14) => {
  t14.setUTCSeconds(0, 0);
}, (t14, e33) => {
  t14.setTime(+t14 + e33 * 6e4);
}, (t14, e33) => (e33 - t14) / 6e4, (t14) => t14.getUTCMinutes());
var at4 = W10.range;
var I9 = o19((t14) => {
  t14.setTime(t14 - t14.getMilliseconds() - t14.getSeconds() * 1e3 - t14.getMinutes() * 6e4);
}, (t14, e33) => {
  t14.setTime(+t14 + e33 * 36e5);
}, (t14, e33) => (e33 - t14) / 36e5, (t14) => t14.getHours());
var mt4 = I9.range;
var w15 = o19((t14) => {
  t14.setUTCMinutes(0, 0, 0);
}, (t14, e33) => {
  t14.setTime(+t14 + e33 * 36e5);
}, (t14, e33) => (e33 - t14) / 36e5, (t14) => t14.getUTCHours());
var lt3 = w15.range;
var k11 = o19((t14) => t14.setHours(0, 0, 0, 0), (t14, e33) => t14.setDate(t14.getDate() + e33), (t14, e33) => (e33 - t14 - (e33.getTimezoneOffset() - t14.getTimezoneOffset()) * 6e4) / 864e5, (t14) => t14.getDate() - 1);
var yt5 = k11.range;
var J9 = o19((t14) => {
  t14.setUTCHours(0, 0, 0, 0);
}, (t14, e33) => {
  t14.setUTCDate(t14.getUTCDate() + e33);
}, (t14, e33) => (e33 - t14) / 864e5, (t14) => t14.getUTCDate() - 1);
var gt6 = J9.range;
var z9 = o19((t14) => {
  t14.setUTCHours(0, 0, 0, 0);
}, (t14, e33) => {
  t14.setUTCDate(t14.getUTCDate() + e33);
}, (t14, e33) => (e33 - t14) / 864e5, (t14) => Math.floor(t14 / 864e5));
var Tt3 = z9.range;
function d9(t14) {
  return o19((e33) => {
    e33.setDate(e33.getDate() - (e33.getDay() + 7 - t14) % 7), e33.setHours(0, 0, 0, 0);
  }, (e33, u17) => {
    e33.setDate(e33.getDate() + u17 * 7);
  }, (e33, u17) => (u17 - e33 - (u17.getTimezoneOffset() - e33.getTimezoneOffset()) * 6e4) / 6048e5);
}
var U9 = d9(0);
var K9 = d9(1);
var L12 = d9(2);
var N10 = d9(3);
var P9 = d9(4);
var Q10 = d9(5);
var R10 = d9(6);
var V7 = U9.range;
var pt4 = K9.range;
var xt5 = L12.range;
var Mt4 = N10.range;
var dt3 = P9.range;
var ft4 = Q10.range;
var ht4 = R10.range;
function f13(t14) {
  return o19((e33) => {
    e33.setUTCDate(e33.getUTCDate() - (e33.getUTCDay() + 7 - t14) % 7), e33.setUTCHours(0, 0, 0, 0);
  }, (e33, u17) => {
    e33.setUTCDate(e33.getUTCDate() + u17 * 7);
  }, (e33, u17) => (u17 - e33) / 6048e5);
}
var S10 = f13(0);
var X10 = f13(1);
var Z9 = f13(2);
var _6 = f13(3);
var $9 = f13(4);
var tt6 = f13(5);
var et4 = f13(6);
var rt5 = S10.range;
var Dt4 = X10.range;
var Ct3 = Z9.range;
var Ut4 = _6.range;
var St4 = $9.range;
var Ft4 = tt6.range;
var Yt4 = et4.range;
var b9 = o19((t14) => {
  t14.setDate(1), t14.setHours(0, 0, 0, 0);
}, (t14, e33) => {
  t14.setMonth(t14.getMonth() + e33);
}, (t14, e33) => e33.getMonth() - t14.getMonth() + (e33.getFullYear() - t14.getFullYear()) * 12, (t14) => t14.getMonth());
var vt4 = b9.range;
var j7 = o19((t14) => {
  t14.setUTCDate(1), t14.setUTCHours(0, 0, 0, 0);
}, (t14, e33) => {
  t14.setUTCMonth(t14.getUTCMonth() + e33);
}, (t14, e33) => e33.getUTCMonth() - t14.getUTCMonth() + (e33.getUTCFullYear() - t14.getUTCFullYear()) * 12, (t14) => t14.getUTCMonth());
var Ht3 = j7.range;
var F13 = o19((t14) => {
  t14.setMonth(0, 1), t14.setHours(0, 0, 0, 0);
}, (t14, e33) => {
  t14.setFullYear(t14.getFullYear() + e33);
}, (t14, e33) => e33.getFullYear() - t14.getFullYear(), (t14) => t14.getFullYear());
F13.every = (t14) => !isFinite(t14 = Math.floor(t14)) || !(t14 > 0) ? null : o19((e33) => {
  e33.setFullYear(Math.floor(e33.getFullYear() / t14) * t14), e33.setMonth(0, 1), e33.setHours(0, 0, 0, 0);
}, (e33, u17) => {
  e33.setFullYear(e33.getFullYear() + u17 * t14);
});
var Wt4 = F13.range;
var Y10 = o19((t14) => {
  t14.setUTCMonth(0, 1), t14.setUTCHours(0, 0, 0, 0);
}, (t14, e33) => {
  t14.setUTCFullYear(t14.getUTCFullYear() + e33);
}, (t14, e33) => e33.getUTCFullYear() - t14.getUTCFullYear(), (t14) => t14.getUTCFullYear());
Y10.every = (t14) => !isFinite(t14 = Math.floor(t14)) || !(t14 > 0) ? null : o19((e33) => {
  e33.setUTCFullYear(Math.floor(e33.getUTCFullYear() / t14) * t14), e33.setUTCMonth(0, 1), e33.setUTCHours(0, 0, 0, 0);
}, (e33, u17) => {
  e33.setUTCFullYear(e33.getUTCFullYear() + u17 * t14);
});
var It4 = Y10.range;
function ut5(t14, e33, u17, C18, i20, r13) {
  let n17 = [
    [
      p9,
      1,
      1e3
    ],
    [
      p9,
      5,
      5 * 1e3
    ],
    [
      p9,
      15,
      15 * 1e3
    ],
    [
      p9,
      30,
      30 * 1e3
    ],
    [
      r13,
      1,
      6e4
    ],
    [
      r13,
      5,
      5 * 6e4
    ],
    [
      r13,
      15,
      15 * 6e4
    ],
    [
      r13,
      30,
      30 * 6e4
    ],
    [
      i20,
      1,
      36e5
    ],
    [
      i20,
      3,
      3 * 36e5
    ],
    [
      i20,
      6,
      6 * 36e5
    ],
    [
      i20,
      12,
      12 * 36e5
    ],
    [
      C18,
      1,
      864e5
    ],
    [
      C18,
      2,
      2 * 864e5
    ],
    [
      u17,
      1,
      6048e5
    ],
    [
      e33,
      1,
      2592e6
    ],
    [
      e33,
      3,
      3 * 2592e6
    ],
    [
      t14,
      1,
      31536e6
    ]
  ];
  function c23(a19, l19, T21) {
    let D18 = l19 < a19;
    D18 && ([a19, l19] = [
      l19,
      a19
    ]);
    let y21 = T21 && typeof T21.range == "function" ? T21 : h20(a19, l19, T21), v23 = y21 ? y21.range(a19, +l19 + 1) : [];
    return D18 ? v23.reverse() : v23;
  }
  function h20(a19, l19, T21) {
    let D18 = Math.abs(l19 - a19) / T21, y21 = F(([, , st6]) => st6).right(n17, D18);
    if (y21 === n17.length) return t14.every(gt(a19 / 31536e6, l19 / 31536e6, T21));
    if (y21 === 0) return x13.every(Math.max(gt(a19, l19, T21), 1));
    let [v23, it8] = n17[D18 / n17[y21 - 1][2] < n17[y21][2] / D18 ? y21 - 1 : y21];
    return v23.every(it8);
  }
  return [
    c23,
    h20
  ];
}
var [kt4, zt3] = ut5(Y10, j7, S10, z9, w15, W10);
var [Ot2, bt3] = ut5(F13, b9, U9, k11, I9, H10);

// deno:https://esm.sh/d3-time-format@4.1.0/denonext/src/locale.mjs
function H11(e33) {
  if (0 <= e33.y && e33.y < 100) {
    var n17 = new Date(-1, e33.m, e33.d, e33.H, e33.M, e33.S, e33.L);
    return n17.setFullYear(e33.y), n17;
  }
  return new Date(e33.y, e33.m, e33.d, e33.H, e33.M, e33.S, e33.L);
}
function b10(e33) {
  if (0 <= e33.y && e33.y < 100) {
    var n17 = new Date(Date.UTC(-1, e33.m, e33.d, e33.H, e33.M, e33.S, e33.L));
    return n17.setUTCFullYear(e33.y), n17;
  }
  return new Date(Date.UTC(e33.y, e33.m, e33.d, e33.H, e33.M, e33.S, e33.L));
}
function p10(e33, n17, t14) {
  return {
    y: e33,
    m: n17,
    d: t14,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
function be5(e33) {
  var n17 = e33.dateTime, t14 = e33.date, u17 = e33.time, y21 = e33.periods, T21 = e33.days, k24 = e33.shortDays, W23 = e33.months, L25 = e33.shortMonths, K22 = v13(y21), ee6 = D9(y21), ne7 = v13(T21), te6 = D9(T21), re8 = v13(k24), ue7 = D9(k24), oe9 = v13(W23), ae9 = D9(W23), ce7 = v13(L25), fe6 = D9(L25), U21 = {
    a: Ce5,
    A: Me5,
    b: pe6,
    B: ve6,
    c: null,
    d: _7,
    e: _7,
    f: nn3,
    g: mn2,
    G: yn3,
    H: Je2,
    I: Ke2,
    j: en2,
    L: z10,
    m: tn2,
    M: rn,
    p: De5,
    q: Se5,
    Q: X11,
    s: j8,
    S: un2,
    u: on2,
    U: an3,
    V: cn2,
    w: fn2,
    W: ln2,
    x: null,
    X: null,
    y: sn2,
    Y: gn2,
    Z: hn2,
    "%": P10
  }, C18 = {
    a: we5,
    A: de7,
    b: xe6,
    B: ke7,
    c: null,
    d: q15,
    e: q15,
    f: Mn3,
    g: Ln2,
    G: Hn3,
    H: Tn3,
    I: Un3,
    j: Cn2,
    L: E17,
    m: pn3,
    M: vn3,
    p: We5,
    q: Le4,
    Q: X11,
    s: j8,
    S: Dn2,
    u: Sn2,
    U: wn2,
    V: dn2,
    w: xn3,
    W: kn2,
    x: null,
    X: null,
    y: Wn3,
    Y: Yn2,
    Z: bn2,
    "%": P10
  }, ie7 = {
    a: se10,
    A: me6,
    b: ge8,
    B: ye6,
    c: he7,
    d: Q11,
    e: Q11,
    f: Ge2,
    g: R11,
    G: A13,
    H: V8,
    I: V8,
    j: Pe,
    L: Be2,
    m: qe2,
    M: Xe3,
    p: le7,
    q: _e3,
    Q: $e3,
    s: Ee4,
    S: je2,
    u: Ie3,
    U: Ae3,
    V: Re2,
    w: Ze3,
    W: Qe,
    x: Te5,
    X: Ue3,
    y: R11,
    Y: A13,
    Z: Ve3,
    "%": ze2
  };
  U21.x = h20(t14, U21), U21.X = h20(u17, U21), U21.c = h20(n17, U21), C18.x = h20(t14, C18), C18.X = h20(u17, C18), C18.c = h20(n17, C18);
  function h20(o26, a19) {
    return function(c23) {
      var r13 = [], s24 = -1, i20 = 0, m22 = o26.length, g18, M22, Z19;
      for (c23 instanceof Date || (c23 = /* @__PURE__ */ new Date(+c23)); ++s24 < m22; ) o26.charCodeAt(s24) === 37 && (r13.push(o26.slice(i20, s24)), (M22 = I10[g18 = o26.charAt(++s24)]) != null ? g18 = o26.charAt(++s24) : M22 = g18 === "e" ? " " : "0", (Z19 = a19[g18]) && (g18 = Z19(c23, M22)), r13.push(g18), i20 = s24 + 1);
      return r13.push(o26.slice(i20, s24)), r13.join("");
    };
  }
  function O15(o26, a19) {
    return function(c23) {
      var r13 = p10(1900, void 0, 1), s24 = Y20(r13, o26, c23 += "", 0), i20, m22;
      if (s24 != c23.length) return null;
      if ("Q" in r13) return new Date(r13.Q);
      if ("s" in r13) return new Date(r13.s * 1e3 + ("L" in r13 ? r13.L : 0));
      if (a19 && !("Z" in r13) && (r13.Z = 0), "p" in r13 && (r13.H = r13.H % 12 + r13.p * 12), r13.m === void 0 && (r13.m = "q" in r13 ? r13.q : 0), "V" in r13) {
        if (r13.V < 1 || r13.V > 53) return null;
        "w" in r13 || (r13.w = 1), "Z" in r13 ? (i20 = b10(p10(r13.y, 0, 1)), m22 = i20.getUTCDay(), i20 = m22 > 4 || m22 === 0 ? X10.ceil(i20) : X10(i20), i20 = J9.offset(i20, (r13.V - 1) * 7), r13.y = i20.getUTCFullYear(), r13.m = i20.getUTCMonth(), r13.d = i20.getUTCDate() + (r13.w + 6) % 7) : (i20 = H11(p10(r13.y, 0, 1)), m22 = i20.getDay(), i20 = m22 > 4 || m22 === 0 ? K9.ceil(i20) : K9(i20), i20 = k11.offset(i20, (r13.V - 1) * 7), r13.y = i20.getFullYear(), r13.m = i20.getMonth(), r13.d = i20.getDate() + (r13.w + 6) % 7);
      } else ("W" in r13 || "U" in r13) && ("w" in r13 || (r13.w = "u" in r13 ? r13.u % 7 : "W" in r13 ? 1 : 0), m22 = "Z" in r13 ? b10(p10(r13.y, 0, 1)).getUTCDay() : H11(p10(r13.y, 0, 1)).getDay(), r13.m = 0, r13.d = "W" in r13 ? (r13.w + 6) % 7 + r13.W * 7 - (m22 + 5) % 7 : r13.w + r13.U * 7 - (m22 + 6) % 7);
      return "Z" in r13 ? (r13.H += r13.Z / 100 | 0, r13.M += r13.Z % 100, b10(r13)) : H11(r13);
    };
  }
  function Y20(o26, a19, c23, r13) {
    for (var s24 = 0, i20 = a19.length, m22 = c23.length, g18, M22; s24 < i20; ) {
      if (r13 >= m22) return -1;
      if (g18 = a19.charCodeAt(s24++), g18 === 37) {
        if (g18 = a19.charAt(s24++), M22 = ie7[g18 in I10 ? a19.charAt(s24++) : g18], !M22 || (r13 = M22(o26, c23, r13)) < 0) return -1;
      } else if (g18 != c23.charCodeAt(r13++)) return -1;
    }
    return r13;
  }
  function le7(o26, a19, c23) {
    var r13 = K22.exec(a19.slice(c23));
    return r13 ? (o26.p = ee6.get(r13[0].toLowerCase()), c23 + r13[0].length) : -1;
  }
  function se10(o26, a19, c23) {
    var r13 = re8.exec(a19.slice(c23));
    return r13 ? (o26.w = ue7.get(r13[0].toLowerCase()), c23 + r13[0].length) : -1;
  }
  function me6(o26, a19, c23) {
    var r13 = ne7.exec(a19.slice(c23));
    return r13 ? (o26.w = te6.get(r13[0].toLowerCase()), c23 + r13[0].length) : -1;
  }
  function ge8(o26, a19, c23) {
    var r13 = ce7.exec(a19.slice(c23));
    return r13 ? (o26.m = fe6.get(r13[0].toLowerCase()), c23 + r13[0].length) : -1;
  }
  function ye6(o26, a19, c23) {
    var r13 = oe9.exec(a19.slice(c23));
    return r13 ? (o26.m = ae9.get(r13[0].toLowerCase()), c23 + r13[0].length) : -1;
  }
  function he7(o26, a19, c23) {
    return Y20(o26, n17, a19, c23);
  }
  function Te5(o26, a19, c23) {
    return Y20(o26, t14, a19, c23);
  }
  function Ue3(o26, a19, c23) {
    return Y20(o26, u17, a19, c23);
  }
  function Ce5(o26) {
    return k24[o26.getDay()];
  }
  function Me5(o26) {
    return T21[o26.getDay()];
  }
  function pe6(o26) {
    return L25[o26.getMonth()];
  }
  function ve6(o26) {
    return W23[o26.getMonth()];
  }
  function De5(o26) {
    return y21[+(o26.getHours() >= 12)];
  }
  function Se5(o26) {
    return 1 + ~~(o26.getMonth() / 3);
  }
  function we5(o26) {
    return k24[o26.getUTCDay()];
  }
  function de7(o26) {
    return T21[o26.getUTCDay()];
  }
  function xe6(o26) {
    return L25[o26.getUTCMonth()];
  }
  function ke7(o26) {
    return W23[o26.getUTCMonth()];
  }
  function We5(o26) {
    return y21[+(o26.getUTCHours() >= 12)];
  }
  function Le4(o26) {
    return 1 + ~~(o26.getUTCMonth() / 3);
  }
  return {
    format: function(o26) {
      var a19 = h20(o26 += "", U21);
      return a19.toString = function() {
        return o26;
      }, a19;
    },
    parse: function(o26) {
      var a19 = O15(o26 += "", false);
      return a19.toString = function() {
        return o26;
      }, a19;
    },
    utcFormat: function(o26) {
      var a19 = h20(o26 += "", C18);
      return a19.toString = function() {
        return o26;
      }, a19;
    },
    utcParse: function(o26) {
      var a19 = O15(o26 += "", true);
      return a19.toString = function() {
        return o26;
      }, a19;
    }
  };
}
var I10 = {
  "-": "",
  _: " ",
  0: "0"
};
var l8 = /^\s*\d+/;
var Fe3 = /^%/;
var Ne5 = /[\\^$*+?|[\]().{}]/g;
function f14(e33, n17, t14) {
  var u17 = e33 < 0 ? "-" : "", y21 = (u17 ? -e33 : e33) + "", T21 = y21.length;
  return u17 + (T21 < t14 ? new Array(t14 - T21 + 1).join(n17) + y21 : y21);
}
function Oe3(e33) {
  return e33.replace(Ne5, "\\$&");
}
function v13(e33) {
  return new RegExp("^(?:" + e33.map(Oe3).join("|") + ")", "i");
}
function D9(e33) {
  return new Map(e33.map((n17, t14) => [
    n17.toLowerCase(),
    t14
  ]));
}
function Ze3(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 1));
  return u17 ? (e33.w = +u17[0], t14 + u17[0].length) : -1;
}
function Ie3(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 1));
  return u17 ? (e33.u = +u17[0], t14 + u17[0].length) : -1;
}
function Ae3(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.U = +u17[0], t14 + u17[0].length) : -1;
}
function Re2(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.V = +u17[0], t14 + u17[0].length) : -1;
}
function Qe(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.W = +u17[0], t14 + u17[0].length) : -1;
}
function A13(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 4));
  return u17 ? (e33.y = +u17[0], t14 + u17[0].length) : -1;
}
function R11(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.y = +u17[0] + (+u17[0] > 68 ? 1900 : 2e3), t14 + u17[0].length) : -1;
}
function Ve3(e33, n17, t14) {
  var u17 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n17.slice(t14, t14 + 6));
  return u17 ? (e33.Z = u17[1] ? 0 : -(u17[2] + (u17[3] || "00")), t14 + u17[0].length) : -1;
}
function _e3(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 1));
  return u17 ? (e33.q = u17[0] * 3 - 3, t14 + u17[0].length) : -1;
}
function qe2(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.m = u17[0] - 1, t14 + u17[0].length) : -1;
}
function Q11(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.d = +u17[0], t14 + u17[0].length) : -1;
}
function Pe(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 3));
  return u17 ? (e33.m = 0, e33.d = +u17[0], t14 + u17[0].length) : -1;
}
function V8(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.H = +u17[0], t14 + u17[0].length) : -1;
}
function Xe3(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.M = +u17[0], t14 + u17[0].length) : -1;
}
function je2(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 2));
  return u17 ? (e33.S = +u17[0], t14 + u17[0].length) : -1;
}
function Be2(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 3));
  return u17 ? (e33.L = +u17[0], t14 + u17[0].length) : -1;
}
function Ge2(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14, t14 + 6));
  return u17 ? (e33.L = Math.floor(u17[0] / 1e3), t14 + u17[0].length) : -1;
}
function ze2(e33, n17, t14) {
  var u17 = Fe3.exec(n17.slice(t14, t14 + 1));
  return u17 ? t14 + u17[0].length : -1;
}
function $e3(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14));
  return u17 ? (e33.Q = +u17[0], t14 + u17[0].length) : -1;
}
function Ee4(e33, n17, t14) {
  var u17 = l8.exec(n17.slice(t14));
  return u17 ? (e33.s = +u17[0], t14 + u17[0].length) : -1;
}
function _7(e33, n17) {
  return f14(e33.getDate(), n17, 2);
}
function Je2(e33, n17) {
  return f14(e33.getHours(), n17, 2);
}
function Ke2(e33, n17) {
  return f14(e33.getHours() % 12 || 12, n17, 2);
}
function en2(e33, n17) {
  return f14(1 + k11.count(F13(e33), e33), n17, 3);
}
function z10(e33, n17) {
  return f14(e33.getMilliseconds(), n17, 3);
}
function nn3(e33, n17) {
  return z10(e33, n17) + "000";
}
function tn2(e33, n17) {
  return f14(e33.getMonth() + 1, n17, 2);
}
function rn(e33, n17) {
  return f14(e33.getMinutes(), n17, 2);
}
function un2(e33, n17) {
  return f14(e33.getSeconds(), n17, 2);
}
function on2(e33) {
  var n17 = e33.getDay();
  return n17 === 0 ? 7 : n17;
}
function an3(e33, n17) {
  return f14(U9.count(F13(e33) - 1, e33), n17, 2);
}
function $10(e33) {
  var n17 = e33.getDay();
  return n17 >= 4 || n17 === 0 ? P9(e33) : P9.ceil(e33);
}
function cn2(e33, n17) {
  return e33 = $10(e33), f14(P9.count(F13(e33), e33) + (F13(e33).getDay() === 4), n17, 2);
}
function fn2(e33) {
  return e33.getDay();
}
function ln2(e33, n17) {
  return f14(K9.count(F13(e33) - 1, e33), n17, 2);
}
function sn2(e33, n17) {
  return f14(e33.getFullYear() % 100, n17, 2);
}
function mn2(e33, n17) {
  return e33 = $10(e33), f14(e33.getFullYear() % 100, n17, 2);
}
function gn2(e33, n17) {
  return f14(e33.getFullYear() % 1e4, n17, 4);
}
function yn3(e33, n17) {
  var t14 = e33.getDay();
  return e33 = t14 >= 4 || t14 === 0 ? P9(e33) : P9.ceil(e33), f14(e33.getFullYear() % 1e4, n17, 4);
}
function hn2(e33) {
  var n17 = e33.getTimezoneOffset();
  return (n17 > 0 ? "-" : (n17 *= -1, "+")) + f14(n17 / 60 | 0, "0", 2) + f14(n17 % 60, "0", 2);
}
function q15(e33, n17) {
  return f14(e33.getUTCDate(), n17, 2);
}
function Tn3(e33, n17) {
  return f14(e33.getUTCHours(), n17, 2);
}
function Un3(e33, n17) {
  return f14(e33.getUTCHours() % 12 || 12, n17, 2);
}
function Cn2(e33, n17) {
  return f14(1 + J9.count(Y10(e33), e33), n17, 3);
}
function E17(e33, n17) {
  return f14(e33.getUTCMilliseconds(), n17, 3);
}
function Mn3(e33, n17) {
  return E17(e33, n17) + "000";
}
function pn3(e33, n17) {
  return f14(e33.getUTCMonth() + 1, n17, 2);
}
function vn3(e33, n17) {
  return f14(e33.getUTCMinutes(), n17, 2);
}
function Dn2(e33, n17) {
  return f14(e33.getUTCSeconds(), n17, 2);
}
function Sn2(e33) {
  var n17 = e33.getUTCDay();
  return n17 === 0 ? 7 : n17;
}
function wn2(e33, n17) {
  return f14(S10.count(Y10(e33) - 1, e33), n17, 2);
}
function J10(e33) {
  var n17 = e33.getUTCDay();
  return n17 >= 4 || n17 === 0 ? $9(e33) : $9.ceil(e33);
}
function dn2(e33, n17) {
  return e33 = J10(e33), f14($9.count(Y10(e33), e33) + (Y10(e33).getUTCDay() === 4), n17, 2);
}
function xn3(e33) {
  return e33.getUTCDay();
}
function kn2(e33, n17) {
  return f14(X10.count(Y10(e33) - 1, e33), n17, 2);
}
function Wn3(e33, n17) {
  return f14(e33.getUTCFullYear() % 100, n17, 2);
}
function Ln2(e33, n17) {
  return e33 = J10(e33), f14(e33.getUTCFullYear() % 100, n17, 2);
}
function Yn2(e33, n17) {
  return f14(e33.getUTCFullYear() % 1e4, n17, 4);
}
function Hn3(e33, n17) {
  var t14 = e33.getUTCDay();
  return e33 = t14 >= 4 || t14 === 0 ? $9(e33) : $9.ceil(e33), f14(e33.getUTCFullYear() % 1e4, n17, 4);
}
function bn2() {
  return "+0000";
}
function P10() {
  return "%";
}
function X11(e33) {
  return +e33;
}
function j8(e33) {
  return Math.floor(+e33 / 1e3);
}

// deno:https://esm.sh/d3-time-format@4.1.0/denonext/src/defaultLocale.mjs
var e28;
var o20;
var u8;
var d10;
var m11;
r9({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: [
    "AM",
    "PM"
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  shortDays: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
});
function r9(a19) {
  return e28 = be5(a19), o20 = e28.format, u8 = e28.parse, d10 = e28.utcFormat, m11 = e28.utcParse, e28;
}

// deno:https://esm.sh/d3-time-format@4.1.0/denonext/src/isoFormat.mjs
var r10 = "%Y-%m-%dT%H:%M:%S.%LZ";
function e29(t14) {
  return t14.toISOString();
}
var a10 = Date.prototype.toISOString ? e29 : d10(r10);

// deno:https://esm.sh/d3-time-format@4.1.0/denonext/src/isoParse.mjs
function o21(r13) {
  var e33 = new Date(r13);
  return isNaN(e33) ? null : e33;
}
var i10 = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? o21 : m11(r10);

// deno:https://esm.sh/d3-scale@4.0.2/denonext/d3-scale.mjs
function y11(n17, r13) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n17);
      break;
    default:
      this.range(r13).domain(n17);
      break;
  }
  return this;
}
function k12(n17, r13) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof n17 == "function" ? this.interpolator(n17) : this.range(n17);
      break;
    }
    default: {
      this.domain(n17), typeof r13 == "function" ? this.interpolator(r13) : this.range(r13);
      break;
    }
  }
  return this;
}
var W11 = Symbol("implicit");
function A14() {
  var n17 = new u(), r13 = [], o26 = [], t14 = W11;
  function u17(e33) {
    let i20 = n17.get(e33);
    if (i20 === void 0) {
      if (t14 !== W11) return t14;
      n17.set(e33, i20 = r13.push(e33) - 1);
    }
    return o26[i20 % o26.length];
  }
  return u17.domain = function(e33) {
    if (!arguments.length) return r13.slice();
    r13 = [], n17 = new u();
    for (let i20 of e33) n17.has(i20) || n17.set(i20, r13.push(i20) - 1);
    return u17;
  }, u17.range = function(e33) {
    return arguments.length ? (o26 = Array.from(e33), u17) : o26.slice();
  }, u17.unknown = function(e33) {
    return arguments.length ? (t14 = e33, u17) : t14;
  }, u17.copy = function() {
    return A14(r13, o26).unknown(t14);
  }, y11.apply(u17, arguments), u17;
}
function E18() {
  var n17 = A14().unknown(void 0), r13 = n17.domain, o26 = n17.range, t14 = 0, u17 = 1, e33, i20, f25 = false, c23 = 0, a19 = 0, s24 = 0.5;
  delete n17.unknown;
  function m22() {
    var l19 = r13().length, g18 = u17 < t14, d18 = g18 ? u17 : t14, p21 = g18 ? t14 : u17;
    e33 = (p21 - d18) / Math.max(1, l19 - c23 + a19 * 2), f25 && (e33 = Math.floor(e33)), d18 += (p21 - d18 - e33 * (l19 - c23)) * s24, i20 = e33 * (1 - c23), f25 && (d18 = Math.round(d18), i20 = Math.round(i20));
    var x23 = ke(l19).map(function(w26) {
      return d18 + e33 * w26;
    });
    return o26(g18 ? x23.reverse() : x23);
  }
  return n17.domain = function(l19) {
    return arguments.length ? (r13(l19), m22()) : r13();
  }, n17.range = function(l19) {
    return arguments.length ? ([t14, u17] = l19, t14 = +t14, u17 = +u17, m22()) : [
      t14,
      u17
    ];
  }, n17.rangeRound = function(l19) {
    return [t14, u17] = l19, t14 = +t14, u17 = +u17, f25 = true, m22();
  }, n17.bandwidth = function() {
    return i20;
  }, n17.step = function() {
    return e33;
  }, n17.round = function(l19) {
    return arguments.length ? (f25 = !!l19, m22()) : f25;
  }, n17.padding = function(l19) {
    return arguments.length ? (c23 = Math.min(1, a19 = +l19), m22()) : c23;
  }, n17.paddingInner = function(l19) {
    return arguments.length ? (c23 = Math.min(1, l19), m22()) : c23;
  }, n17.paddingOuter = function(l19) {
    return arguments.length ? (a19 = +l19, m22()) : a19;
  }, n17.align = function(l19) {
    return arguments.length ? (s24 = Math.max(0, Math.min(1, l19)), m22()) : s24;
  }, n17.copy = function() {
    return E18(r13(), [
      t14,
      u17
    ]).round(f25).paddingInner(c23).paddingOuter(a19).align(s24);
  }, y11.apply(m22(), arguments);
}
function un3(n17) {
  var r13 = n17.copy;
  return n17.padding = n17.paddingOuter, delete n17.paddingInner, delete n17.paddingOuter, n17.copy = function() {
    return un3(r13());
  }, n17;
}
function Sn3() {
  return un3(E18.apply(null, arguments).paddingInner(1));
}
function j9(n17) {
  return function() {
    return n17;
  };
}
function b11(n17) {
  return +n17;
}
var an4 = [
  0,
  1
];
function v14(n17) {
  return n17;
}
function B9(n17, r13) {
  return (r13 -= n17 = +n17) ? function(o26) {
    return (o26 - n17) / r13;
  } : j9(isNaN(r13) ? NaN : 0.5);
}
function Dn3(n17, r13) {
  var o26;
  return n17 > r13 && (o26 = n17, n17 = r13, r13 = o26), function(t14) {
    return Math.max(n17, Math.min(r13, t14));
  };
}
function Fn3(n17, r13, o26) {
  var t14 = n17[0], u17 = n17[1], e33 = r13[0], i20 = r13[1];
  return u17 < t14 ? (t14 = B9(u17, t14), e33 = o26(i20, e33)) : (t14 = B9(t14, u17), e33 = o26(e33, i20)), function(f25) {
    return e33(t14(f25));
  };
}
function Ln3(n17, r13, o26) {
  var t14 = Math.min(n17.length, r13.length) - 1, u17 = new Array(t14), e33 = new Array(t14), i20 = -1;
  for (n17[t14] < n17[0] && (n17 = n17.slice().reverse(), r13 = r13.slice().reverse()); ++i20 < t14; ) u17[i20] = B9(n17[i20], n17[i20 + 1]), e33[i20] = o26(r13[i20], r13[i20 + 1]);
  return function(f25) {
    var c23 = re(n17, f25, 1, t14) - 1;
    return e33[c23](u17[c23](f25));
  };
}
function N11(n17, r13) {
  return r13.domain(n17.domain()).range(n17.range()).interpolate(n17.interpolate()).clamp(n17.clamp()).unknown(n17.unknown());
}
function R12() {
  var n17 = an4, r13 = an4, o26 = y2, t14, u17, e33, i20 = v14, f25, c23, a19;
  function s24() {
    var l19 = Math.min(n17.length, r13.length);
    return i20 !== v14 && (i20 = Dn3(n17[0], n17[l19 - 1])), f25 = l19 > 2 ? Ln3 : Fn3, c23 = a19 = null, m22;
  }
  function m22(l19) {
    return l19 == null || isNaN(l19 = +l19) ? e33 : (c23 || (c23 = f25(n17.map(t14), r13, o26)))(t14(i20(l19)));
  }
  return m22.invert = function(l19) {
    return i20(u17((a19 || (a19 = f25(r13, n17.map(t14), x2)))(l19)));
  }, m22.domain = function(l19) {
    return arguments.length ? (n17 = Array.from(l19, b11), s24()) : n17.slice();
  }, m22.range = function(l19) {
    return arguments.length ? (r13 = Array.from(l19), s24()) : r13.slice();
  }, m22.rangeRound = function(l19) {
    return r13 = Array.from(l19), o26 = yr, s24();
  }, m22.clamp = function(l19) {
    return arguments.length ? (i20 = l19 ? true : v14, s24()) : i20 !== v14;
  }, m22.interpolate = function(l19) {
    return arguments.length ? (o26 = l19, s24()) : o26;
  }, m22.unknown = function(l19) {
    return arguments.length ? (e33 = l19, m22) : e33;
  }, function(l19, g18) {
    return t14 = l19, u17 = g18, s24();
  };
}
function I11() {
  return R12()(v14, v14);
}
function z11(n17, r13, o26, t14) {
  var u17 = gt(n17, r13, o26), e33;
  switch (t14 = o16(t14 ?? ",f"), t14.type) {
    case "s": {
      var i20 = Math.max(Math.abs(n17), Math.abs(r13));
      return t14.precision == null && !isNaN(e33 = r7(u17, i20)) && (t14.precision = e33), f11(t14, i20);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      t14.precision == null && !isNaN(e33 = r8(u17, Math.max(Math.abs(n17), Math.abs(r13)))) && (t14.precision = e33 - (t14.type === "e"));
      break;
    }
    case "f":
    case "%": {
      t14.precision == null && !isNaN(e33 = n12(u17)) && (t14.precision = e33 - (t14.type === "%") * 2);
      break;
    }
  }
  return e8(t14);
}
function M9(n17) {
  var r13 = n17.domain;
  return n17.ticks = function(o26) {
    var t14 = r13();
    return X(t14[0], t14[t14.length - 1], o26 ?? 10);
  }, n17.tickFormat = function(o26, t14) {
    var u17 = r13();
    return z11(u17[0], u17[u17.length - 1], o26 ?? 10, t14);
  }, n17.nice = function(o26) {
    o26 == null && (o26 = 10);
    var t14 = r13(), u17 = 0, e33 = t14.length - 1, i20 = t14[u17], f25 = t14[e33], c23, a19, s24 = 10;
    for (f25 < i20 && (a19 = i20, i20 = f25, f25 = a19, a19 = u17, u17 = e33, e33 = a19); s24-- > 0; ) {
      if (a19 = M(i20, f25, o26), a19 === c23) return t14[u17] = i20, t14[e33] = f25, r13(t14);
      if (a19 > 0) i20 = Math.floor(i20 / a19) * a19, f25 = Math.ceil(f25 / a19) * a19;
      else if (a19 < 0) i20 = Math.ceil(i20 * a19) / a19, f25 = Math.floor(f25 * a19) / a19;
      else break;
      c23 = a19;
    }
    return n17;
  }, n17;
}
function C12() {
  var n17 = I11();
  return n17.copy = function() {
    return N11(n17, C12());
  }, y11.apply(n17, arguments), M9(n17);
}
function V9(n17) {
  var r13;
  function o26(t14) {
    return t14 == null || isNaN(t14 = +t14) ? r13 : t14;
  }
  return o26.invert = o26, o26.domain = o26.range = function(t14) {
    return arguments.length ? (n17 = Array.from(t14, b11), o26) : n17.slice();
  }, o26.unknown = function(t14) {
    return arguments.length ? (r13 = t14, o26) : r13;
  }, o26.copy = function() {
    return V9(n17).unknown(r13);
  }, n17 = arguments.length ? Array.from(n17, b11) : [
    0,
    1
  ], M9(o26);
}
function D10(n17, r13) {
  n17 = n17.slice();
  var o26 = 0, t14 = n17.length - 1, u17 = n17[o26], e33 = n17[t14], i20;
  return e33 < u17 && (i20 = o26, o26 = t14, t14 = i20, i20 = u17, u17 = e33, e33 = i20), n17[o26] = r13.floor(u17), n17[t14] = r13.ceil(e33), n17;
}
function fn3(n17) {
  return Math.log(n17);
}
function cn3(n17) {
  return Math.exp(n17);
}
function Bn3(n17) {
  return -Math.log(-n17);
}
function Cn3(n17) {
  return -Math.exp(-n17);
}
function Vn3(n17) {
  return isFinite(n17) ? +("1e" + n17) : n17 < 0 ? 0 : n17;
}
function _n2(n17) {
  return n17 === 10 ? Vn3 : n17 === Math.E ? Math.exp : (r13) => Math.pow(n17, r13);
}
function Gn2(n17) {
  return n17 === Math.E ? Math.log : n17 === 10 && Math.log10 || n17 === 2 && Math.log2 || (n17 = Math.log(n17), (r13) => Math.log(r13) / n17);
}
function mn3(n17) {
  return (r13, o26) => -n17(-r13, o26);
}
function F14(n17) {
  let r13 = n17(fn3, cn3), o26 = r13.domain, t14 = 10, u17, e33;
  function i20() {
    return u17 = Gn2(t14), e33 = _n2(t14), o26()[0] < 0 ? (u17 = mn3(u17), e33 = mn3(e33), n17(Bn3, Cn3)) : n17(fn3, cn3), r13;
  }
  return r13.base = function(f25) {
    return arguments.length ? (t14 = +f25, i20()) : t14;
  }, r13.domain = function(f25) {
    return arguments.length ? (o26(f25), i20()) : o26();
  }, r13.ticks = (f25) => {
    let c23 = o26(), a19 = c23[0], s24 = c23[c23.length - 1], m22 = s24 < a19;
    m22 && ([a19, s24] = [
      s24,
      a19
    ]);
    let l19 = u17(a19), g18 = u17(s24), d18, p21, x23 = f25 == null ? 10 : +f25, w26 = [];
    if (!(t14 % 1) && g18 - l19 < x23) {
      if (l19 = Math.floor(l19), g18 = Math.ceil(g18), a19 > 0) {
        for (; l19 <= g18; ++l19) for (d18 = 1; d18 < t14; ++d18) if (p21 = l19 < 0 ? d18 / e33(-l19) : d18 * e33(l19), !(p21 < a19)) {
          if (p21 > s24) break;
          w26.push(p21);
        }
      } else for (; l19 <= g18; ++l19) for (d18 = t14 - 1; d18 >= 1; --d18) if (p21 = l19 > 0 ? d18 / e33(-l19) : d18 * e33(l19), !(p21 < a19)) {
        if (p21 > s24) break;
        w26.push(p21);
      }
      w26.length * 2 < x23 && (w26 = X(a19, s24, x23));
    } else w26 = X(l19, g18, Math.min(g18 - l19, x23)).map(e33);
    return m22 ? w26.reverse() : w26;
  }, r13.tickFormat = (f25, c23) => {
    if (f25 == null && (f25 = 10), c23 == null && (c23 = t14 === 10 ? "s" : ","), typeof c23 != "function" && (!(t14 % 1) && (c23 = o16(c23)).precision == null && (c23.trim = true), c23 = e8(c23)), f25 === 1 / 0) return c23;
    let a19 = Math.max(1, t14 * f25 / r13.ticks().length);
    return (s24) => {
      let m22 = s24 / e33(Math.round(u17(s24)));
      return m22 * t14 < t14 - 0.5 && (m22 *= t14), m22 <= a19 ? c23(s24) : "";
    };
  }, r13.nice = () => o26(D10(o26(), {
    floor: (f25) => e33(Math.floor(u17(f25))),
    ceil: (f25) => e33(Math.ceil(u17(f25)))
  })), r13;
}
function _8() {
  let n17 = F14(R12()).domain([
    1,
    10
  ]);
  return n17.copy = () => N11(n17, _8()).base(n17.base()), y11.apply(n17, arguments), n17;
}
function sn3(n17) {
  return function(r13) {
    return Math.sign(r13) * Math.log1p(Math.abs(r13 / n17));
  };
}
function pn4(n17) {
  return function(r13) {
    return Math.sign(r13) * Math.expm1(Math.abs(r13)) * n17;
  };
}
function L13(n17) {
  var r13 = 1, o26 = n17(sn3(r13), pn4(r13));
  return o26.constant = function(t14) {
    return arguments.length ? n17(sn3(r13 = +t14), pn4(r13)) : r13;
  }, M9(o26);
}
function G11() {
  var n17 = L13(R12());
  return n17.copy = function() {
    return N11(n17, G11()).constant(n17.constant());
  }, y11.apply(n17, arguments);
}
function gn3(n17) {
  return function(r13) {
    return r13 < 0 ? -Math.pow(-r13, n17) : Math.pow(r13, n17);
  };
}
function Jn3(n17) {
  return n17 < 0 ? -Math.sqrt(-n17) : Math.sqrt(n17);
}
function Kn3(n17) {
  return n17 < 0 ? -n17 * n17 : n17 * n17;
}
function P11(n17) {
  var r13 = n17(v14, v14), o26 = 1;
  function t14() {
    return o26 === 1 ? n17(v14, v14) : o26 === 0.5 ? n17(Jn3, Kn3) : n17(gn3(o26), gn3(1 / o26));
  }
  return r13.exponent = function(u17) {
    return arguments.length ? (o26 = +u17, t14()) : o26;
  }, M9(r13);
}
function Q12() {
  var n17 = P11(R12());
  return n17.copy = function() {
    return N11(n17, Q12()).exponent(n17.exponent());
  }, y11.apply(n17, arguments), n17;
}
function K10() {
  var n17 = [], r13 = [], o26 = [], t14;
  function u17() {
    var i20 = 0, f25 = Math.max(1, r13.length);
    for (o26 = new Array(f25 - 1); ++i20 < f25; ) o26[i20 - 1] = wt(n17, i20 / f25);
    return e33;
  }
  function e33(i20) {
    return i20 == null || isNaN(i20 = +i20) ? t14 : r13[re(o26, i20)];
  }
  return e33.invertExtent = function(i20) {
    var f25 = r13.indexOf(i20);
    return f25 < 0 ? [
      NaN,
      NaN
    ] : [
      f25 > 0 ? o26[f25 - 1] : n17[0],
      f25 < o26.length ? o26[f25] : n17[n17.length - 1]
    ];
  }, e33.domain = function(i20) {
    if (!arguments.length) return n17.slice();
    n17 = [];
    for (let f25 of i20) f25 != null && !isNaN(f25 = +f25) && n17.push(f25);
    return n17.sort(s), u17();
  }, e33.range = function(i20) {
    return arguments.length ? (r13 = Array.from(i20), u17()) : r13.slice();
  }, e33.unknown = function(i20) {
    return arguments.length ? (t14 = i20, e33) : t14;
  }, e33.quantiles = function() {
    return o26.slice();
  }, e33.copy = function() {
    return K10().domain(n17).range(r13).unknown(t14);
  }, y11.apply(e33, arguments);
}
function Z10() {
  var n17 = [
    0.5
  ], r13 = [
    0,
    1
  ], o26, t14 = 1;
  function u17(e33) {
    return e33 != null && e33 <= e33 ? r13[re(n17, e33, 0, t14)] : o26;
  }
  return u17.domain = function(e33) {
    return arguments.length ? (n17 = Array.from(e33), t14 = Math.min(n17.length, r13.length - 1), u17) : n17.slice();
  }, u17.range = function(e33) {
    return arguments.length ? (r13 = Array.from(e33), t14 = Math.min(n17.length, r13.length - 1), u17) : r13.slice();
  }, u17.invertExtent = function(e33) {
    var i20 = r13.indexOf(e33);
    return [
      n17[i20 - 1],
      n17[i20]
    ];
  }, u17.unknown = function(e33) {
    return arguments.length ? (o26 = e33, u17) : o26;
  }, u17.copy = function() {
    return Z10().domain(n17).range(r13).unknown(o26);
  }, y11.apply(u17, arguments);
}
function gt7(n17) {
  return new Date(n17);
}
function ht5(n17) {
  return n17 instanceof Date ? +n17 : +/* @__PURE__ */ new Date(+n17);
}
function Y11(n17, r13, o26, t14, u17, e33, i20, f25, c23, a19) {
  var s24 = I11(), m22 = s24.invert, l19 = s24.domain, g18 = a19(".%L"), d18 = a19(":%S"), p21 = a19("%I:%M"), x23 = a19("%I %p"), w26 = a19("%a %d"), O15 = a19("%b %d"), T21 = a19("%B"), xn7 = a19("%Y");
  function qn4(h20) {
    return (c23(h20) < h20 ? g18 : f25(h20) < h20 ? d18 : i20(h20) < h20 ? p21 : e33(h20) < h20 ? x23 : t14(h20) < h20 ? u17(h20) < h20 ? w26 : O15 : o26(h20) < h20 ? T21 : xn7)(h20);
  }
  return s24.invert = function(h20) {
    return new Date(m22(h20));
  }, s24.domain = function(h20) {
    return arguments.length ? l19(Array.from(h20, ht5)) : l19().map(gt7);
  }, s24.ticks = function(h20) {
    var q29 = l19();
    return n17(q29[0], q29[q29.length - 1], h20 ?? 10);
  }, s24.tickFormat = function(h20, q29) {
    return q29 == null ? qn4 : a19(q29);
  }, s24.nice = function(h20) {
    var q29 = l19();
    return (!h20 || typeof h20.range != "function") && (h20 = r13(q29[0], q29[q29.length - 1], h20 ?? 10)), h20 ? l19(D10(q29, h20)) : s24;
  }, s24.copy = function() {
    return N11(s24, Y11(n17, r13, o26, t14, u17, e33, i20, f25, c23, a19));
  }, s24;
}
function dn3() {
  return y11.apply(Y11(Ot2, bt3, F13, b9, U9, k11, I9, H10, p9, o20).domain([
    new Date(2e3, 0, 1),
    new Date(2e3, 0, 2)
  ]), arguments);
}
function yn4() {
  return y11.apply(Y11(kt4, zt3, Y10, j7, S10, J9, w15, W10, p9, d10).domain([
    Date.UTC(2e3, 0, 1),
    Date.UTC(2e3, 0, 2)
  ]), arguments);
}
function S11(n17, r13) {
  return r13.domain(n17.domain()).interpolator(n17.interpolator()).clamp(n17.clamp()).unknown(n17.unknown());
}
function U10() {
  var n17 = 0, r13 = 0.5, o26 = 1, t14 = 1, u17, e33, i20, f25, c23, a19 = v14, s24, m22 = false, l19;
  function g18(p21) {
    return isNaN(p21 = +p21) ? l19 : (p21 = 0.5 + ((p21 = +s24(p21)) - e33) * (t14 * p21 < t14 * e33 ? f25 : c23), a19(m22 ? Math.max(0, Math.min(1, p21)) : p21));
  }
  g18.domain = function(p21) {
    return arguments.length ? ([n17, r13, o26] = p21, u17 = s24(n17 = +n17), e33 = s24(r13 = +r13), i20 = s24(o26 = +o26), f25 = u17 === e33 ? 0 : 0.5 / (e33 - u17), c23 = e33 === i20 ? 0 : 0.5 / (i20 - e33), t14 = e33 < u17 ? -1 : 1, g18) : [
      n17,
      r13,
      o26
    ];
  }, g18.clamp = function(p21) {
    return arguments.length ? (m22 = !!p21, g18) : m22;
  }, g18.interpolator = function(p21) {
    return arguments.length ? (a19 = p21, g18) : a19;
  };
  function d18(p21) {
    return function(x23) {
      var w26, O15, T21;
      return arguments.length ? ([w26, O15, T21] = x23, a19 = pr(p21, [
        w26,
        O15,
        T21
      ]), g18) : [
        a19(0),
        a19(0.5),
        a19(1)
      ];
    };
  }
  return g18.range = d18(y2), g18.rangeRound = d18(yr), g18.unknown = function(p21) {
    return arguments.length ? (l19 = p21, g18) : l19;
  }, function(p21) {
    return s24 = p21, u17 = p21(n17), e33 = p21(r13), i20 = p21(o26), f25 = u17 === e33 ? 0 : 0.5 / (e33 - u17), c23 = e33 === i20 ? 0 : 0.5 / (i20 - e33), t14 = e33 < u17 ? -1 : 1, g18;
  };
}
function rn2() {
  var n17 = M9(U10()(v14));
  return n17.copy = function() {
    return S11(n17, rn2());
  }, k12.apply(n17, arguments);
}
function wn3() {
  var n17 = F14(U10()).domain([
    0.1,
    1,
    10
  ]);
  return n17.copy = function() {
    return S11(n17, wn3()).base(n17.base());
  }, k12.apply(n17, arguments);
}
function kn3() {
  var n17 = L13(U10());
  return n17.copy = function() {
    return S11(n17, kn3()).constant(n17.constant());
  }, k12.apply(n17, arguments);
}
function en3() {
  var n17 = P11(U10());
  return n17.copy = function() {
    return S11(n17, en3()).exponent(n17.exponent());
  }, k12.apply(n17, arguments);
}

// deno:https://esm.sh/d3-shape@3.2.0/denonext/d3-shape.mjs
function c13(t14) {
  return function() {
    return t14;
  };
}
var Y12 = Math.cos;
var z12 = Math.min;
var E19 = Math.sin;
var x14 = Math.sqrt;
var S12 = 1e-12;
var B10 = Math.PI;
var rt6 = B10 / 2;
var M10 = 2 * B10;
function I12(t14) {
  let n17 = 3;
  return t14.digits = function(i20) {
    if (!arguments.length) return n17;
    if (i20 == null) n17 = null;
    else {
      let e33 = Math.floor(i20);
      if (!(e33 >= 0)) throw new RangeError(`invalid digits: ${i20}`);
      n17 = e33;
    }
    return t14;
  }, () => new d6(n17);
}
var rn3 = Array.prototype.slice;
function G12(t14) {
  return typeof t14 == "object" && "length" in t14 ? t14 : Array.from(t14);
}
function sn4(t14) {
  this._context = t14;
}
sn4.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t14, n17) : this._context.moveTo(t14, n17);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t14, n17);
        break;
    }
  }
};
function K11(t14) {
  return new sn4(t14);
}
function Z11(t14) {
  return t14[0];
}
function j10(t14) {
  return t14[1];
}
function st3(t14, n17) {
  var i20 = c13(true), e33 = null, s24 = K11, o26 = null, a19 = I12(r13);
  t14 = typeof t14 == "function" ? t14 : t14 === void 0 ? Z11 : c13(t14), n17 = typeof n17 == "function" ? n17 : n17 === void 0 ? j10 : c13(n17);
  function r13(u17) {
    var l19, h20 = (u17 = G12(u17)).length, f25, _19 = false, m22;
    for (e33 == null && (o26 = s24(m22 = a19())), l19 = 0; l19 <= h20; ++l19) !(l19 < h20 && i20(f25 = u17[l19], l19, u17)) === _19 && ((_19 = !_19) ? o26.lineStart() : o26.lineEnd()), _19 && o26.point(+t14(f25, l19, u17), +n17(f25, l19, u17));
    if (m22) return o26 = null, m22 + "" || null;
  }
  return r13.x = function(u17) {
    return arguments.length ? (t14 = typeof u17 == "function" ? u17 : c13(+u17), r13) : t14;
  }, r13.y = function(u17) {
    return arguments.length ? (n17 = typeof u17 == "function" ? u17 : c13(+u17), r13) : n17;
  }, r13.defined = function(u17) {
    return arguments.length ? (i20 = typeof u17 == "function" ? u17 : c13(!!u17), r13) : i20;
  }, r13.curve = function(u17) {
    return arguments.length ? (s24 = u17, e33 != null && (o26 = s24(e33)), r13) : s24;
  }, r13.context = function(u17) {
    return arguments.length ? (u17 == null ? e33 = o26 = null : o26 = s24(e33 = u17), r13) : e33;
  }, r13;
}
function qt2(t14, n17, i20) {
  var e33 = null, s24 = c13(true), o26 = null, a19 = K11, r13 = null, u17 = I12(l19);
  t14 = typeof t14 == "function" ? t14 : t14 === void 0 ? Z11 : c13(+t14), n17 = typeof n17 == "function" ? n17 : n17 === void 0 ? c13(0) : c13(+n17), i20 = typeof i20 == "function" ? i20 : i20 === void 0 ? j10 : c13(+i20);
  function l19(f25) {
    var _19, m22, y21, v23 = (f25 = G12(f25)).length, k24, d18 = false, w26, b25 = new Array(v23), T21 = new Array(v23);
    for (o26 == null && (r13 = a19(w26 = u17())), _19 = 0; _19 <= v23; ++_19) {
      if (!(_19 < v23 && s24(k24 = f25[_19], _19, f25)) === d18) if (d18 = !d18) m22 = _19, r13.areaStart(), r13.lineStart();
      else {
        for (r13.lineEnd(), r13.lineStart(), y21 = _19 - 1; y21 >= m22; --y21) r13.point(b25[y21], T21[y21]);
        r13.lineEnd(), r13.areaEnd();
      }
      d18 && (b25[_19] = +t14(k24, _19, f25), T21[_19] = +n17(k24, _19, f25), r13.point(e33 ? +e33(k24, _19, f25) : b25[_19], i20 ? +i20(k24, _19, f25) : T21[_19]));
    }
    if (w26) return r13 = null, w26 + "" || null;
  }
  function h20() {
    return st3().defined(s24).curve(a19).context(o26);
  }
  return l19.x = function(f25) {
    return arguments.length ? (t14 = typeof f25 == "function" ? f25 : c13(+f25), e33 = null, l19) : t14;
  }, l19.x0 = function(f25) {
    return arguments.length ? (t14 = typeof f25 == "function" ? f25 : c13(+f25), l19) : t14;
  }, l19.x1 = function(f25) {
    return arguments.length ? (e33 = f25 == null ? null : typeof f25 == "function" ? f25 : c13(+f25), l19) : e33;
  }, l19.y = function(f25) {
    return arguments.length ? (n17 = typeof f25 == "function" ? f25 : c13(+f25), i20 = null, l19) : n17;
  }, l19.y0 = function(f25) {
    return arguments.length ? (n17 = typeof f25 == "function" ? f25 : c13(+f25), l19) : n17;
  }, l19.y1 = function(f25) {
    return arguments.length ? (i20 = f25 == null ? null : typeof f25 == "function" ? f25 : c13(+f25), l19) : i20;
  }, l19.lineX0 = l19.lineY0 = function() {
    return h20().x(t14).y(n17);
  }, l19.lineY1 = function() {
    return h20().x(t14).y(i20);
  }, l19.lineX1 = function() {
    return h20().x(e33).y(n17);
  }, l19.defined = function(f25) {
    return arguments.length ? (s24 = typeof f25 == "function" ? f25 : c13(!!f25), l19) : s24;
  }, l19.curve = function(f25) {
    return arguments.length ? (a19 = f25, o26 != null && (r13 = a19(o26)), l19) : a19;
  }, l19.context = function(f25) {
    return arguments.length ? (f25 == null ? o26 = r13 = null : r13 = a19(o26 = f25), l19) : o26;
  }, l19;
}
var xt6 = tt7(K11);
function un4(t14) {
  this._curve = t14;
}
un4.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(t14, n17) {
    this._curve.point(n17 * Math.sin(t14), n17 * -Math.cos(t14));
  }
};
function tt7(t14) {
  function n17(i20) {
    return new un4(t14(i20));
  }
  return n17._curve = t14, n17;
}
var dt4 = class {
  constructor(n17, i20) {
    this._context = n17, this._x = i20;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(n17, i20) {
    switch (n17 = +n17, i20 = +i20, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(n17, i20) : this._context.moveTo(n17, i20);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + n17) / 2, this._y0, this._x0, i20, n17, i20) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i20) / 2, n17, this._y0, n17, i20);
        break;
      }
    }
    this._x0 = n17, this._y0 = i20;
  }
};
function Xt4(t14) {
  return new dt4(t14, true);
}
function Yt5(t14) {
  return new dt4(t14, false);
}
var Wn4 = x14(3);
var Bt3 = {
  draw(t14, n17) {
    let i20 = x14(n17 + z12(n17 / 28, 0.75)) * 0.59436, e33 = i20 / 2, s24 = e33 * Wn4;
    t14.moveTo(0, i20), t14.lineTo(0, -i20), t14.moveTo(-s24, -e33), t14.lineTo(s24, e33), t14.moveTo(-s24, e33), t14.lineTo(s24, -e33);
  }
};
var at5 = {
  draw(t14, n17) {
    let i20 = x14(n17 / B10);
    t14.moveTo(i20, 0), t14.arc(0, 0, i20, 0, M10);
  }
};
var Lt2 = {
  draw(t14, n17) {
    let i20 = x14(n17 / 5) / 2;
    t14.moveTo(-3 * i20, -i20), t14.lineTo(-i20, -i20), t14.lineTo(-i20, -3 * i20), t14.lineTo(i20, -3 * i20), t14.lineTo(i20, -i20), t14.lineTo(3 * i20, -i20), t14.lineTo(3 * i20, i20), t14.lineTo(i20, i20), t14.lineTo(i20, 3 * i20), t14.lineTo(-i20, 3 * i20), t14.lineTo(-i20, i20), t14.lineTo(-3 * i20, i20), t14.closePath();
  }
};
var cn4 = x14(1 / 3);
var $n = cn4 * 2;
var zt4 = {
  draw(t14, n17) {
    let i20 = x14(n17 / $n), e33 = i20 * cn4;
    t14.moveTo(0, -i20), t14.lineTo(e33, 0), t14.lineTo(0, i20), t14.lineTo(-e33, 0), t14.closePath();
  }
};
var It5 = {
  draw(t14, n17) {
    let i20 = x14(n17) * 0.62625;
    t14.moveTo(0, -i20), t14.lineTo(i20, 0), t14.lineTo(0, i20), t14.lineTo(-i20, 0), t14.closePath();
  }
};
var Dt5 = {
  draw(t14, n17) {
    let i20 = x14(n17 - z12(n17 / 7, 2)) * 0.87559;
    t14.moveTo(-i20, 0), t14.lineTo(i20, 0), t14.moveTo(0, i20), t14.lineTo(0, -i20);
  }
};
var Vt4 = {
  draw(t14, n17) {
    let i20 = x14(n17), e33 = -i20 / 2;
    t14.rect(e33, e33, i20, i20);
  }
};
var Ft5 = {
  draw(t14, n17) {
    let i20 = x14(n17) * 0.4431;
    t14.moveTo(i20, i20), t14.lineTo(i20, -i20), t14.lineTo(-i20, -i20), t14.lineTo(-i20, i20), t14.closePath();
  }
};
var Gn3 = 0.8908130915292852;
var pn5 = E19(B10 / 10) / E19(7 * B10 / 10);
var Jn4 = E19(M10 / 10) * pn5;
var Kn4 = -Y12(M10 / 10) * pn5;
var Ht4 = {
  draw(t14, n17) {
    let i20 = x14(n17 * Gn3), e33 = Jn4 * i20, s24 = Kn4 * i20;
    t14.moveTo(0, -i20), t14.lineTo(e33, s24);
    for (let o26 = 1; o26 < 5; ++o26) {
      let a19 = M10 * o26 / 5, r13 = Y12(a19), u17 = E19(a19);
      t14.lineTo(u17 * i20, -r13 * i20), t14.lineTo(r13 * e33 - u17 * s24, u17 * e33 + r13 * s24);
    }
    t14.closePath();
  }
};
var Wt5 = x14(3);
var $t3 = {
  draw(t14, n17) {
    let i20 = -x14(n17 / (Wt5 * 3));
    t14.moveTo(0, i20 * 2), t14.lineTo(-Wt5 * i20, -i20), t14.lineTo(Wt5 * i20, -i20), t14.closePath();
  }
};
var Qn3 = x14(3);
var Gt3 = {
  draw(t14, n17) {
    let i20 = x14(n17) * 0.6824, e33 = i20 / 2, s24 = i20 * Qn3 / 2;
    t14.moveTo(0, -i20), t14.lineTo(s24, e33), t14.lineTo(-s24, e33), t14.closePath();
  }
};
var q16 = -0.5;
var O7 = x14(3) / 2;
var Jt4 = 1 / x14(12);
var Un4 = (Jt4 / 2 + 1) * 3;
var Kt4 = {
  draw(t14, n17) {
    let i20 = x14(n17 / Un4), e33 = i20 / 2, s24 = i20 * Jt4, o26 = e33, a19 = i20 * Jt4 + i20, r13 = -o26, u17 = a19;
    t14.moveTo(e33, s24), t14.lineTo(o26, a19), t14.lineTo(r13, u17), t14.lineTo(q16 * e33 - O7 * s24, O7 * e33 + q16 * s24), t14.lineTo(q16 * o26 - O7 * a19, O7 * o26 + q16 * a19), t14.lineTo(q16 * r13 - O7 * u17, O7 * r13 + q16 * u17), t14.lineTo(q16 * e33 + O7 * s24, q16 * s24 - O7 * e33), t14.lineTo(q16 * o26 + O7 * a19, q16 * a19 - O7 * o26), t14.lineTo(q16 * r13 + O7 * u17, q16 * u17 - O7 * r13), t14.closePath();
  }
};
var gt8 = {
  draw(t14, n17) {
    let i20 = x14(n17 - z12(n17 / 6, 1.7)) * 0.6189;
    t14.moveTo(-i20, -i20), t14.lineTo(i20, i20), t14.moveTo(-i20, i20), t14.lineTo(i20, -i20);
  }
};
var mn4 = [
  at5,
  Lt2,
  zt4,
  Vt4,
  Ht4,
  $t3,
  Kt4
];
var Zn2 = [
  at5,
  Dt5,
  gt8,
  Gt3,
  Bt3,
  Ft5,
  It5
];
function X12() {
}
function et5(t14, n17, i20) {
  t14._context.bezierCurveTo((2 * t14._x0 + t14._x1) / 3, (2 * t14._y0 + t14._y1) / 3, (t14._x0 + 2 * t14._x1) / 3, (t14._y0 + 2 * t14._y1) / 3, (t14._x0 + 4 * t14._x1 + n17) / 6, (t14._y0 + 4 * t14._y1 + i20) / 6);
}
function lt4(t14) {
  this._context = t14;
}
lt4.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        et5(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t14, n17) : this._context.moveTo(t14, n17);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        et5(this, t14, n17);
        break;
    }
    this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = n17;
  }
};
function jn2(t14) {
  return new lt4(t14);
}
function dn4(t14) {
  this._context = t14;
}
dn4.prototype = {
  areaStart: X12,
  areaEnd: X12,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1, this._x2 = t14, this._y2 = n17;
        break;
      case 1:
        this._point = 2, this._x3 = t14, this._y3 = n17;
        break;
      case 2:
        this._point = 3, this._x4 = t14, this._y4 = n17, this._context.moveTo((this._x0 + 4 * this._x1 + t14) / 6, (this._y0 + 4 * this._y1 + n17) / 6);
        break;
      default:
        et5(this, t14, n17);
        break;
    }
    this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = n17;
  }
};
function ti(t14) {
  return new dn4(t14);
}
function yn5(t14) {
  this._context = t14;
}
yn5.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i20 = (this._x0 + 4 * this._x1 + t14) / 6, e33 = (this._y0 + 4 * this._y1 + n17) / 6;
        this._line ? this._context.lineTo(i20, e33) : this._context.moveTo(i20, e33);
        break;
      case 3:
        this._point = 4;
      default:
        et5(this, t14, n17);
        break;
    }
    this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = n17;
  }
};
function ni(t14) {
  return new yn5(t14);
}
function gn4(t14, n17) {
  this._basis = new lt4(t14), this._beta = n17;
}
gn4.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t14 = this._x, n17 = this._y, i20 = t14.length - 1;
    if (i20 > 0) for (var e33 = t14[0], s24 = n17[0], o26 = t14[i20] - e33, a19 = n17[i20] - s24, r13 = -1, u17; ++r13 <= i20; ) u17 = r13 / i20, this._basis.point(this._beta * t14[r13] + (1 - this._beta) * (e33 + u17 * o26), this._beta * n17[r13] + (1 - this._beta) * (s24 + u17 * a19));
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t14, n17) {
    this._x.push(+t14), this._y.push(+n17);
  }
};
var ii = function t3(n17) {
  function i20(e33) {
    return n17 === 1 ? new lt4(e33) : new gn4(e33, n17);
  }
  return i20.beta = function(e33) {
    return t3(+e33);
  }, i20;
}(0.85);
function ot4(t14, n17, i20) {
  t14._context.bezierCurveTo(t14._x1 + t14._k * (t14._x2 - t14._x0), t14._y1 + t14._k * (t14._y2 - t14._y0), t14._x2 + t14._k * (t14._x1 - n17), t14._y2 + t14._k * (t14._y1 - i20), t14._x2, t14._y2);
}
function vt5(t14, n17) {
  this._context = t14, this._k = (1 - n17) / 6;
}
vt5.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        ot4(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t14, n17) : this._context.moveTo(t14, n17);
        break;
      case 1:
        this._point = 2, this._x1 = t14, this._y1 = n17;
        break;
      case 2:
        this._point = 3;
      default:
        ot4(this, t14, n17);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n17;
  }
};
var ei = function t4(n17) {
  function i20(e33) {
    return new vt5(e33, n17);
  }
  return i20.tension = function(e33) {
    return t4(+e33);
  }, i20;
}(0);
function Tt4(t14, n17) {
  this._context = t14, this._k = (1 - n17) / 6;
}
Tt4.prototype = {
  areaStart: X12,
  areaEnd: X12,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1, this._x3 = t14, this._y3 = n17;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t14, this._y4 = n17);
        break;
      case 2:
        this._point = 3, this._x5 = t14, this._y5 = n17;
        break;
      default:
        ot4(this, t14, n17);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n17;
  }
};
var oi = function t5(n17) {
  function i20(e33) {
    return new Tt4(e33, n17);
  }
  return i20.tension = function(e33) {
    return t5(+e33);
  }, i20;
}(0);
function bt4(t14, n17) {
  this._context = t14, this._k = (1 - n17) / 6;
}
bt4.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ot4(this, t14, n17);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n17;
  }
};
var ri = function t6(n17) {
  function i20(e33) {
    return new bt4(e33, n17);
  }
  return i20.tension = function(e33) {
    return t6(+e33);
  }, i20;
}(0);
function ut6(t14, n17, i20) {
  var e33 = t14._x1, s24 = t14._y1, o26 = t14._x2, a19 = t14._y2;
  if (t14._l01_a > S12) {
    var r13 = 2 * t14._l01_2a + 3 * t14._l01_a * t14._l12_a + t14._l12_2a, u17 = 3 * t14._l01_a * (t14._l01_a + t14._l12_a);
    e33 = (e33 * r13 - t14._x0 * t14._l12_2a + t14._x2 * t14._l01_2a) / u17, s24 = (s24 * r13 - t14._y0 * t14._l12_2a + t14._y2 * t14._l01_2a) / u17;
  }
  if (t14._l23_a > S12) {
    var l19 = 2 * t14._l23_2a + 3 * t14._l23_a * t14._l12_a + t14._l12_2a, h20 = 3 * t14._l23_a * (t14._l23_a + t14._l12_a);
    o26 = (o26 * l19 + t14._x1 * t14._l23_2a - n17 * t14._l12_2a) / h20, a19 = (a19 * l19 + t14._y1 * t14._l23_2a - i20 * t14._l12_2a) / h20;
  }
  t14._context.bezierCurveTo(e33, s24, o26, a19, t14._x2, t14._y2);
}
function vn4(t14, n17) {
  this._context = t14, this._alpha = n17;
}
vn4.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    if (t14 = +t14, n17 = +n17, this._point) {
      var i20 = this._x2 - t14, e33 = this._y2 - n17;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i20 * i20 + e33 * e33, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t14, n17) : this._context.moveTo(t14, n17);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        ut6(this, t14, n17);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n17;
  }
};
var si = function t7(n17) {
  function i20(e33) {
    return n17 ? new vn4(e33, n17) : new vt5(e33, 0);
  }
  return i20.alpha = function(e33) {
    return t7(+e33);
  }, i20;
}(0.5);
function Tn4(t14, n17) {
  this._context = t14, this._alpha = n17;
}
Tn4.prototype = {
  areaStart: X12,
  areaEnd: X12,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t14, n17) {
    if (t14 = +t14, n17 = +n17, this._point) {
      var i20 = this._x2 - t14, e33 = this._y2 - n17;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i20 * i20 + e33 * e33, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t14, this._y3 = n17;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t14, this._y4 = n17);
        break;
      case 2:
        this._point = 3, this._x5 = t14, this._y5 = n17;
        break;
      default:
        ut6(this, t14, n17);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n17;
  }
};
var ai = function t8(n17) {
  function i20(e33) {
    return n17 ? new Tn4(e33, n17) : new Tt4(e33, 0);
  }
  return i20.alpha = function(e33) {
    return t8(+e33);
  }, i20;
}(0.5);
function bn3(t14, n17) {
  this._context = t14, this._alpha = n17;
}
bn3.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    if (t14 = +t14, n17 = +n17, this._point) {
      var i20 = this._x2 - t14, e33 = this._y2 - n17;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i20 * i20 + e33 * e33, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ut6(this, t14, n17);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n17;
  }
};
var li = function t9(n17) {
  function i20(e33) {
    return n17 ? new bn3(e33, n17) : new bt4(e33, 0);
  }
  return i20.alpha = function(e33) {
    return t9(+e33);
  }, i20;
}(0.5);
function kn4(t14) {
  this._context = t14;
}
kn4.prototype = {
  areaStart: X12,
  areaEnd: X12,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t14, n17) {
    t14 = +t14, n17 = +n17, this._point ? this._context.lineTo(t14, n17) : (this._point = 1, this._context.moveTo(t14, n17));
  }
};
function ui(t14) {
  return new kn4(t14);
}
function wn4(t14) {
  return t14 < 0 ? -1 : 1;
}
function Sn4(t14, n17, i20) {
  var e33 = t14._x1 - t14._x0, s24 = n17 - t14._x1, o26 = (t14._y1 - t14._y0) / (e33 || s24 < 0 && -0), a19 = (i20 - t14._y1) / (s24 || e33 < 0 && -0), r13 = (o26 * s24 + a19 * e33) / (e33 + s24);
  return (wn4(o26) + wn4(a19)) * Math.min(Math.abs(o26), Math.abs(a19), 0.5 * Math.abs(r13)) || 0;
}
function Nn3(t14, n17) {
  var i20 = t14._x1 - t14._x0;
  return i20 ? (3 * (t14._y1 - t14._y0) / i20 - n17) / 2 : n17;
}
function Qt4(t14, n17, i20) {
  var e33 = t14._x0, s24 = t14._y0, o26 = t14._x1, a19 = t14._y1, r13 = (o26 - e33) / 3;
  t14._context.bezierCurveTo(e33 + r13, s24 + r13 * n17, o26 - r13, a19 - r13 * i20, o26, a19);
}
function kt5(t14) {
  this._context = t14;
}
kt5.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Qt4(this, this._t0, Nn3(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t14, n17) {
    var i20 = NaN;
    if (t14 = +t14, n17 = +n17, !(t14 === this._x1 && n17 === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t14, n17) : this._context.moveTo(t14, n17);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Qt4(this, Nn3(this, i20 = Sn4(this, t14, n17)), i20);
          break;
        default:
          Qt4(this, this._t0, i20 = Sn4(this, t14, n17));
          break;
      }
      this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = n17, this._t0 = i20;
    }
  }
};
function En2(t14) {
  this._context = new An3(t14);
}
(En2.prototype = Object.create(kt5.prototype)).point = function(t14, n17) {
  kt5.prototype.point.call(this, n17, t14);
};
function An3(t14) {
  this._context = t14;
}
An3.prototype = {
  moveTo: function(t14, n17) {
    this._context.moveTo(n17, t14);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t14, n17) {
    this._context.lineTo(n17, t14);
  },
  bezierCurveTo: function(t14, n17, i20, e33, s24, o26) {
    this._context.bezierCurveTo(n17, t14, e33, i20, o26, s24);
  }
};
function hi2(t14) {
  return new kt5(t14);
}
function fi(t14) {
  return new En2(t14);
}
function Pn3(t14) {
  this._context = t14;
}
Pn3.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t14 = this._x, n17 = this._y, i20 = t14.length;
    if (i20) if (this._line ? this._context.lineTo(t14[0], n17[0]) : this._context.moveTo(t14[0], n17[0]), i20 === 2) this._context.lineTo(t14[1], n17[1]);
    else for (var e33 = Rn3(t14), s24 = Rn3(n17), o26 = 0, a19 = 1; a19 < i20; ++o26, ++a19) this._context.bezierCurveTo(e33[0][o26], s24[0][o26], e33[1][o26], s24[1][o26], t14[a19], n17[a19]);
    (this._line || this._line !== 0 && i20 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t14, n17) {
    this._x.push(+t14), this._y.push(+n17);
  }
};
function Rn3(t14) {
  var n17, i20 = t14.length - 1, e33, s24 = new Array(i20), o26 = new Array(i20), a19 = new Array(i20);
  for (s24[0] = 0, o26[0] = 2, a19[0] = t14[0] + 2 * t14[1], n17 = 1; n17 < i20 - 1; ++n17) s24[n17] = 1, o26[n17] = 4, a19[n17] = 4 * t14[n17] + 2 * t14[n17 + 1];
  for (s24[i20 - 1] = 2, o26[i20 - 1] = 7, a19[i20 - 1] = 8 * t14[i20 - 1] + t14[i20], n17 = 1; n17 < i20; ++n17) e33 = s24[n17] / o26[n17 - 1], o26[n17] -= e33, a19[n17] -= e33 * a19[n17 - 1];
  for (s24[i20 - 1] = a19[i20 - 1] / o26[i20 - 1], n17 = i20 - 2; n17 >= 0; --n17) s24[n17] = (a19[n17] - s24[n17 + 1]) / o26[n17];
  for (o26[i20 - 1] = (t14[i20] + s24[i20 - 1]) / 2, n17 = 0; n17 < i20 - 1; ++n17) o26[n17] = 2 * t14[n17 + 1] - s24[n17 + 1];
  return [
    s24,
    o26
  ];
}
function _i2(t14) {
  return new Pn3(t14);
}
function wt5(t14, n17) {
  this._context = t14, this._t = n17;
}
wt5.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t14, n17) {
    switch (t14 = +t14, n17 = +n17, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t14, n17) : this._context.moveTo(t14, n17);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) this._context.lineTo(this._x, n17), this._context.lineTo(t14, n17);
        else {
          var i20 = this._x * (1 - this._t) + t14 * this._t;
          this._context.lineTo(i20, this._y), this._context.lineTo(i20, n17);
        }
        break;
      }
    }
    this._x = t14, this._y = n17;
  }
};
function ci(t14) {
  return new wt5(t14, 0.5);
}
function pi(t14) {
  return new wt5(t14, 0);
}
function mi(t14) {
  return new wt5(t14, 1);
}

// deno:https://esm.sh/d3-zoom@3.0.0/denonext/d3-zoom.mjs
function v15(n17, f25, m22) {
  this.k = n17, this.x = f25, this.y = m22;
}
v15.prototype = {
  constructor: v15,
  scale: function(n17) {
    return n17 === 1 ? this : new v15(this.k * n17, this.x, this.y);
  },
  translate: function(n17, f25) {
    return n17 === 0 & f25 === 0 ? this : new v15(this.k, this.x + this.k * n17, this.y + this.k * f25);
  },
  apply: function(n17) {
    return [
      n17[0] * this.k + this.x,
      n17[1] * this.k + this.y
    ];
  },
  applyX: function(n17) {
    return n17 * this.k + this.x;
  },
  applyY: function(n17) {
    return n17 * this.k + this.y;
  },
  invert: function(n17) {
    return [
      (n17[0] - this.x) / this.k,
      (n17[1] - this.y) / this.k
    ];
  },
  invertX: function(n17) {
    return (n17 - this.x) / this.k;
  },
  invertY: function(n17) {
    return (n17 - this.y) / this.k;
  },
  rescaleX: function(n17) {
    return n17.copy().domain(n17.range().map(this.invertX, this).map(n17.invert, n17));
  },
  rescaleY: function(n17) {
    return n17.copy().domain(n17.range().map(this.invertY, this).map(n17.invert, n17));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var V10 = new v15(1, 0, 0);
F15.prototype = v15.prototype;
function F15(n17) {
  for (; !n17.__zoom; ) if (!(n17 = n17.parentNode)) return V10;
  return n17.__zoom;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/defined.mjs
function i11(n17) {
  return n17 != null && !Number.isNaN(n17);
}
function u9(n17, e33) {
  return +i11(e33) - +i11(n17) || s(n17, e33);
}
function f16(n17, e33) {
  return +i11(e33) - +i11(n17) || H(n17, e33);
}
function c14(n17) {
  return n17 != null && `${n17}` != "";
}
function d11(n17) {
  return isFinite(n17) ? n17 : NaN;
}
function p12(n17) {
  return n17 > 0 && isFinite(n17) ? n17 : NaN;
}
function s14(n17) {
  return n17 < 0 && isFinite(n17) ? n17 : NaN;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/order.mjs
function i12(n17) {
  if (n17 == null) return;
  let r13 = n17[0], t14 = n17[n17.length - 1];
  return H(r13, t14);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/time.mjs
var f17 = 1e3;
var u10 = f17 * 60;
var c15 = u10 * 60;
var a11 = c15 * 24;
var i13 = a11 * 7;
var l9 = a11 * 30;
var s15 = a11 * 365;
var T13 = [
  [
    "millisecond",
    1
  ],
  [
    "2 milliseconds",
    2
  ],
  [
    "5 milliseconds",
    5
  ],
  [
    "10 milliseconds",
    10
  ],
  [
    "20 milliseconds",
    20
  ],
  [
    "50 milliseconds",
    50
  ],
  [
    "100 milliseconds",
    100
  ],
  [
    "200 milliseconds",
    200
  ],
  [
    "500 milliseconds",
    500
  ],
  [
    "second",
    f17
  ],
  [
    "5 seconds",
    5 * f17
  ],
  [
    "15 seconds",
    15 * f17
  ],
  [
    "30 seconds",
    30 * f17
  ],
  [
    "minute",
    u10
  ],
  [
    "5 minutes",
    5 * u10
  ],
  [
    "15 minutes",
    15 * u10
  ],
  [
    "30 minutes",
    30 * u10
  ],
  [
    "hour",
    c15
  ],
  [
    "3 hours",
    3 * c15
  ],
  [
    "6 hours",
    6 * c15
  ],
  [
    "12 hours",
    12 * c15
  ],
  [
    "day",
    a11
  ],
  [
    "2 days",
    2 * a11
  ],
  [
    "week",
    i13
  ],
  [
    "2 weeks",
    2 * i13
  ],
  [
    "month",
    l9
  ],
  [
    "3 months",
    3 * l9
  ],
  [
    "6 months",
    6 * l9
  ],
  [
    "year",
    s15
  ],
  [
    "2 years",
    2 * s15
  ],
  [
    "5 years",
    5 * s15
  ],
  [
    "10 years",
    10 * s15
  ],
  [
    "20 years",
    20 * s15
  ],
  [
    "50 years",
    50 * s15
  ],
  [
    "100 years",
    100 * s15
  ]
];
var k13 = /* @__PURE__ */ new Map([
  [
    "second",
    f17
  ],
  [
    "minute",
    u10
  ],
  [
    "hour",
    c15
  ],
  [
    "day",
    a11
  ],
  [
    "monday",
    i13
  ],
  [
    "tuesday",
    i13
  ],
  [
    "wednesday",
    i13
  ],
  [
    "thursday",
    i13
  ],
  [
    "friday",
    i13
  ],
  [
    "saturday",
    i13
  ],
  [
    "sunday",
    i13
  ],
  [
    "week",
    i13
  ],
  [
    "month",
    l9
  ],
  [
    "year",
    s15
  ]
]);
var q17 = /* @__PURE__ */ new Map([
  [
    "second",
    p9
  ],
  [
    "minute",
    H10
  ],
  [
    "hour",
    I9
  ],
  [
    "day",
    k11
  ],
  [
    "monday",
    K9
  ],
  [
    "tuesday",
    L12
  ],
  [
    "wednesday",
    N10
  ],
  [
    "thursday",
    P9
  ],
  [
    "friday",
    Q10
  ],
  [
    "saturday",
    R10
  ],
  [
    "sunday",
    U9
  ],
  [
    "week",
    U9
  ],
  [
    "month",
    b9
  ],
  [
    "year",
    F13
  ]
]);
var S13 = /* @__PURE__ */ new Map([
  [
    "second",
    p9
  ],
  [
    "minute",
    W10
  ],
  [
    "hour",
    w15
  ],
  [
    "day",
    z9
  ],
  [
    "monday",
    X10
  ],
  [
    "tuesday",
    Z9
  ],
  [
    "wednesday",
    _6
  ],
  [
    "thursday",
    $9
  ],
  [
    "friday",
    tt6
  ],
  [
    "saturday",
    et4
  ],
  [
    "sunday",
    S10
  ],
  [
    "week",
    S10
  ],
  [
    "month",
    j7
  ],
  [
    "year",
    Y10
  ]
]);
var M11 = Symbol("intervalDuration");
var I13 = Symbol("intervalType");
for (let [e33, t14] of q17) t14[M11] = k13.get(e33), t14[I13] = "time";
for (let [e33, t14] of S13) t14[M11] = k13.get(e33), t14[I13] = "utc";
var h11 = [
  [
    "year",
    Y10,
    "utc"
  ],
  [
    "month",
    j7,
    "utc"
  ],
  [
    "day",
    z9,
    "utc",
    6 * l9
  ],
  [
    "hour",
    w15,
    "utc",
    3 * a11
  ],
  [
    "minute",
    W10,
    "utc",
    6 * c15
  ],
  [
    "second",
    p9,
    "utc",
    30 * u10
  ]
];
var w16 = [
  [
    "year",
    F13,
    "time"
  ],
  [
    "month",
    b9,
    "time"
  ],
  [
    "day",
    k11,
    "time",
    6 * l9
  ],
  [
    "hour",
    I9,
    "time",
    3 * a11
  ],
  [
    "minute",
    H10,
    "time",
    6 * c15
  ],
  [
    "second",
    p9,
    "time",
    30 * u10
  ]
];
var ut7 = [
  h11[0],
  w16[0],
  h11[1],
  w16[1],
  h11[2],
  w16[2],
  ...h11.slice(3)
];
function z13(e33) {
  let t14 = `${e33}`.toLowerCase();
  t14.endsWith("s") && (t14 = t14.slice(0, -1));
  let r13 = 1, n17 = /^(?:(\d+)\s+)/.exec(t14);
  switch (n17 && (t14 = t14.slice(n17[0].length), r13 = +n17[1]), t14) {
    case "quarter":
      t14 = "month", r13 *= 3;
      break;
    case "half":
      t14 = "month", r13 *= 6;
      break;
  }
  let o26 = S13.get(t14);
  if (!o26) throw new Error(`unknown interval: ${e33}`);
  if (r13 > 1 && !o26.every) throw new Error(`non-periodic interval: ${t14}`);
  return [
    t14,
    r13
  ];
}
function ct4(e33) {
  return A15(z13(e33), "time");
}
function mt5(e33) {
  return A15(z13(e33), "utc");
}
function A15([e33, t14], r13) {
  let n17 = (r13 === "time" ? q17 : S13).get(e33);
  return t14 > 1 && (n17 = n17.every(t14), n17[M11] = k13.get(e33) * t14, n17[I13] = r13), n17;
}
function Mt5(e33, t14) {
  if (!(t14 > 1)) return;
  let r13 = e33[M11];
  if (!T13.some(([, o26]) => o26 === r13) || r13 % a11 === 0 && a11 < r13 && r13 < l9) return;
  let [n17] = T13[F(([, o26]) => Math.log(o26)).center(T13, Math.log(r13 * t14))];
  return (e33[I13] === "time" ? ct4 : mt5)(n17);
}
function b12(e33, t14, r13) {
  let n17 = t14 === "time" ? o20 : d10;
  if (r13 == null) return n17(e33 === "year" ? "%Y" : e33 === "month" ? "%Y-%m" : e33 === "day" ? "%Y-%m-%d" : e33 === "hour" || e33 === "minute" ? "%Y-%m-%dT%H:%M" : e33 === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
  let o26 = dt5(r13);
  switch (e33) {
    case "millisecond":
      return y12(n17(".%L"), n17(":%M:%S"), o26);
    case "second":
      return y12(n17(":%S"), n17("%-I:%M"), o26);
    case "minute":
      return y12(n17("%-I:%M"), n17("%p"), o26);
    case "hour":
      return y12(n17("%-I %p"), n17("%b %-d"), o26);
    case "day":
      return y12(n17("%-d"), n17("%b"), o26);
    case "month":
      return y12(n17("%b"), n17("%Y"), o26);
    case "year":
      return n17("%Y");
  }
  throw new Error("unable to format time ticks");
}
function dt5(e33) {
  return e33 === "left" || e33 === "right" ? (t14, r13) => `
${t14}
${r13}` : e33 === "top" ? (t14, r13) => `${r13}
${t14}` : (t14, r13) => `${t14}
${r13}`;
}
function lt5(e33) {
  return e33 === "time" ? w16 : e33 === "utc" ? h11 : ut7;
}
function It6(e33, t14, r13) {
  let n17 = U(Re(t14, (o26, m22) => Math.abs(m22 - o26)));
  if (n17 < 1e3) return b12("millisecond", "utc", r13);
  for (let [o26, m22, v23, p21] of lt5(e33)) {
    if (n17 > p21 || o26 === "hour" && !n17) break;
    if (t14.every((d18) => m22.floor(d18) >= d18)) return b12(o26, v23, r13);
  }
}
function y12(e33, t14, r13) {
  return (n17, o26, m22) => {
    let v23 = e33(n17, o26), p21 = t14(n17, o26), d18 = o26 - i12(m22);
    return o26 !== d18 && m22[d18] !== void 0 && p21 === t14(m22[d18], d18) ? v23 : r13(v23, p21);
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/options.mjs
var a12 = Object.getPrototypeOf(Uint8Array);
var B11 = Object.prototype.toString;
function s16(e33) {
  return e33 instanceof Array || e33 instanceof a12;
}
function w17(e33) {
  return e33 instanceof a12 && !P12(e33);
}
function x15(e33) {
  return e33?.prototype instanceof a12 && !_9(e33);
}
function P12(e33) {
  return e33 instanceof BigInt64Array || e33 instanceof BigUint64Array;
}
function _9(e33) {
  return e33 === BigInt64Array || e33 === BigUint64Array;
}
var L14 = Symbol("reindex");
function U11(e33, n17, r13) {
  let t14 = typeof n17;
  return t14 === "string" ? D11(e33) ? l10(e33.getChild(n17), r13) : m12(e33, G13(n17), r13) : t14 === "function" ? m12(e33, n17, r13) : t14 === "number" || n17 instanceof Date || t14 === "boolean" ? i14(e33, Z12(n17), r13) : typeof n17?.transform == "function" ? c16(n17.transform(e33), r13) : X13(c16(n17, r13), e33?.[L14]);
}
function X13(e33, n17) {
  return e33 != null && n17 ? I14(e33, n17) : e33;
}
function m12(e33, n17, r13) {
  return i14(e33, x15(r13) ? (t14, o26) => d12(n17(t14, o26)) : n17, r13);
}
function c16(e33, n17) {
  return n17 === void 0 ? A16(e33) : M12(e33) ? l10(e33, n17) : e33 instanceof n17 ? e33 : n17.from(e33, x15(n17) && !w17(e33) ? d12 : void 0);
}
function l10(e33, n17) {
  return e33 == null ? e33 : (n17 === void 0 || n17 === Array) && se5(e33.type) ? K12(y13(e33)) : c16(y13(e33), n17);
}
function y13(e33) {
  return e33.nullCount ? e33.toJSON() : e33.toArray();
}
var ye4 = [
  null
];
var G13 = (e33) => (n17) => {
  let r13 = n17[e33];
  return r13 === void 0 && n17.type === "Feature" ? n17.properties?.[e33] : r13;
};
var ge5 = {
  transform: v16
};
var R13 = {
  transform: (e33) => e33
};
var he5 = () => 1;
var we3 = () => true;
var xe4 = (e33) => e33 == null ? e33 : `${e33}`;
var ke4 = (e33) => e33 == null ? e33 : +e33;
var J11 = (e33) => e33 ? e33[0] : void 0;
var Y13 = (e33) => e33 ? e33[1] : void 0;
var Z12 = (e33) => () => e33;
function Te3(e33) {
  let n17 = +`${e33}`.slice(1) / 100;
  return (r13, t14) => A(r13, n17, t14);
}
function Ce4(e33) {
  return w17(e33) ? e33 : i14(e33, d12, Float64Array);
}
function d12(e33) {
  return e33 == null ? NaN : Number(e33);
}
function K12(e33) {
  return i14(e33, V11);
}
function V11(e33) {
  return e33 instanceof Date && !isNaN(e33) ? e33 : typeof e33 == "string" ? i(e33) : e33 == null || isNaN(e33 = Number(e33)) ? void 0 : new Date(e33);
}
function g8(e33, n17) {
  return e33 === void 0 && (e33 = n17), e33 === null ? [
    void 0,
    "none"
  ] : ue4(e33) ? [
    void 0,
    e33
  ] : [
    e33,
    void 0
  ];
}
function Ie4(e33, n17) {
  return e33 === void 0 && (e33 = n17), e33 === null || typeof e33 == "number" ? [
    void 0,
    e33
  ] : [
    e33,
    void 0
  ];
}
function H12(e33, n17, r13) {
  if (e33 != null) return k14(e33, n17, r13);
}
function k14(e33, n17, r13) {
  let t14 = `${e33}`.toLowerCase();
  if (!r13.includes(t14)) throw new Error(`invalid ${n17}: ${e33}`);
  return t14;
}
function Se3(e33) {
  return D11(e33) ? e33 : A16(e33);
}
function A16(e33) {
  if (e33 == null || s16(e33)) return e33;
  if (M12(e33)) return l10(e33);
  if (N12(e33)) switch (e33.type) {
    case "FeatureCollection":
      return e33.features;
    case "GeometryCollection":
      return e33.geometries;
    default:
      return [
        e33
      ];
  }
  return Array.from(e33);
}
function N12(e33) {
  switch (e33?.type) {
    case "FeatureCollection":
    case "GeometryCollection":
    case "Feature":
    case "LineString":
    case "MultiLineString":
    case "MultiPoint":
    case "MultiPolygon":
    case "Point":
    case "Polygon":
    case "Sphere":
      return true;
    default:
      return false;
  }
}
function i14(e33, n17, r13 = Array) {
  return e33 == null ? e33 : e33 instanceof r13 ? e33.map(n17) : r13.from(e33, n17);
}
function Oe4(e33, n17 = Array) {
  return e33 instanceof n17 ? e33.slice() : n17.from(e33);
}
function Q13({ x: e33, x1: n17, x2: r13 }) {
  return e33 !== void 0 || n17 !== void 0 || r13 !== void 0;
}
function W12({ y: e33, y1: n17, y2: r13 }) {
  return e33 !== void 0 || n17 !== void 0 || r13 !== void 0;
}
function $e4(e33) {
  return Q13(e33) || W12(e33) || e33.interval !== void 0;
}
function T14(e33) {
  return e33?.toString === B11;
}
function De3(e33) {
  return T14(e33) && (e33.type !== void 0 || e33.domain !== void 0);
}
function C13(e33) {
  return T14(e33) && typeof e33.transform != "function";
}
function Me3(e33) {
  return C13(e33) && e33.value === void 0 && e33.channel === void 0;
}
function qe3(e33, n17, r13, t14 = R13) {
  return n17 === void 0 && r13 === void 0 ? (n17 = 0, r13 = e33 === void 0 ? t14 : e33) : n17 === void 0 ? n17 = e33 === void 0 ? 0 : e33 : r13 === void 0 && (r13 = e33 === void 0 ? 0 : e33), [
    n17,
    r13
  ];
}
function Ee5(e33, n17) {
  return e33 === void 0 && n17 === void 0 ? [
    J11,
    Y13
  ] : [
    e33,
    n17
  ];
}
function je3({ z: e33, fill: n17, stroke: r13 } = {}) {
  return e33 === void 0 && ([e33] = g8(n17)), e33 === void 0 && ([e33] = g8(r13)), e33;
}
function z14(e33) {
  return s16(e33) ? e33.length : e33?.numRows;
}
function v16(e33) {
  let n17 = z14(e33), r13 = new Uint32Array(n17);
  for (let t14 = 0; t14 < n17; ++t14) r13[t14] = t14;
  return r13;
}
function I14(e33, n17) {
  return s16(e33) ? i14(n17, (r13) => e33[r13], e33.constructor) : i14(n17, (r13) => e33.at(r13));
}
function Be3(e33, n17, r13) {
  return e33.subarray ? e33.subarray(n17, r13) : e33.slice(n17, r13);
}
function Pe2(e33) {
  return e33 !== null && typeof e33 == "object" ? e33.valueOf() : e33;
}
function _e4(e33, n17) {
  if (n17[e33] !== void 0) return n17[e33];
  switch (e33) {
    case "x1":
    case "x2":
      e33 = "x";
      break;
    case "y1":
    case "y2":
      e33 = "y";
      break;
  }
  return n17[e33];
}
function ee4(e33) {
  let n17;
  return [
    {
      transform: () => n17,
      label: S14(e33)
    },
    (r13) => n17 = r13
  ];
}
function Le2(e33) {
  return e33 == null ? [
    e33
  ] : ee4(e33);
}
function S14(e33, n17) {
  return typeof e33 == "string" ? e33 : e33 && e33.label !== void 0 ? e33.label : n17;
}
function Ue2(e33, n17) {
  return {
    transform(r13) {
      let t14 = e33.transform(r13), o26 = n17.transform(r13);
      return b13(t14) || b13(o26) ? i14(t14, (f25, u17) => new Date((+t14[u17] + +o26[u17]) / 2)) : i14(t14, (f25, u17) => (+t14[u17] + +o26[u17]) / 2, Float64Array);
    },
    label: e33.label
  };
}
function Xe4(e33, n17) {
  let r13 = ne4(n17?.interval, n17?.type);
  return r13 ? i14(e33, r13) : e33;
}
function ne4(e33, n17) {
  let r13 = O8(e33, n17);
  return r13 && ((t14) => i11(t14) ? r13.floor(t14) : t14);
}
function O8(e33, n17) {
  if (e33 != null) {
    if (typeof e33 == "number") return re5(e33);
    if (typeof e33 == "string") return (n17 === "time" ? ct4 : mt5)(e33);
    if (typeof e33.floor != "function") throw new Error("invalid interval; missing floor method");
    if (typeof e33.offset != "function") throw new Error("invalid interval; missing offset method");
    return e33;
  }
}
function re5(e33) {
  e33 = +e33, 0 < e33 && e33 < 1 && Number.isInteger(1 / e33) && (e33 = -1 / e33);
  let n17 = Math.abs(e33);
  return e33 < 0 ? {
    floor: (r13) => Math.floor(r13 * n17) / n17,
    offset: (r13, t14 = 1) => (r13 * n17 + Math.floor(t14)) / n17,
    range: (r13, t14) => ke(Math.ceil(r13 * n17), t14 * n17).map((o26) => o26 / n17)
  } : {
    floor: (r13) => Math.floor(r13 / n17) * n17,
    offset: (r13, t14 = 1) => r13 + n17 * Math.floor(t14),
    range: (r13, t14) => ke(Math.ceil(r13 / n17), t14 / n17).map((o26) => o26 * n17)
  };
}
function te3(e33, n17) {
  if (e33 = O8(e33, n17), e33 && typeof e33.range != "function") throw new Error("invalid interval: missing range method");
  return e33;
}
function Ge3(e33, n17) {
  if (e33 = te3(e33, n17), e33 && typeof e33.ceil != "function") throw new Error("invalid interval: missing ceil method");
  return e33;
}
function Re3(e33) {
  return oe5(e33) && typeof e33?.floor == "function" && e33.floor() instanceof Date;
}
function oe5(e33) {
  return typeof e33?.range == "function";
}
function Je3(e33) {
  return e33 === void 0 || C13(e33) ? e33 : {
    value: e33
  };
}
function Ye2(e33) {
  return e33 == null ? null : {
    transform: (n17) => U11(n17, e33, Float64Array),
    label: S14(e33)
  };
}
function $11(e33) {
  return e33 && typeof e33[Symbol.iterator] == "function";
}
function Ke3(e33) {
  for (let n17 of e33) if (n17 != null) return typeof n17 != "object" || n17 instanceof Date;
}
function Ve4(e33) {
  for (let n17 of e33) {
    if (n17 == null) continue;
    let r13 = typeof n17;
    return r13 === "string" || r13 === "boolean";
  }
}
function b13(e33) {
  for (let n17 of e33) if (n17 != null) return n17 instanceof Date;
}
function He2(e33) {
  for (let n17 of e33) if (n17 != null) return typeof n17 == "string" && isNaN(n17) && i(n17);
}
function Qe2(e33) {
  for (let n17 of e33) if (n17 != null) {
    if (typeof n17 != "string") return false;
    if (n17.trim()) return !isNaN(n17);
  }
}
function We2(e33) {
  for (let n17 of e33) if (n17 != null) return typeof n17 == "number";
}
function ze3(e33, n17) {
  let r13;
  for (let t14 of e33) if (t14 != null) {
    if (!n17(t14)) return false;
    r13 = true;
  }
  return r13;
}
var ie4 = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function ue4(e33) {
  return typeof e33 != "string" ? false : (e33 = e33.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(e33) || /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(e33) || ie4.has(e33));
}
function ve5(e33) {
  return typeof e33 == "number" && (0 <= e33 && e33 <= 1 || isNaN(e33));
}
function en4(e33) {
  return e33 == null || fe5(e33);
}
function fe5(e33) {
  return /^\s*none\s*$/i.test(e33);
}
function nn4(e33) {
  return /^\s*round\s*$/i.test(e33);
}
function ce5(e33, n17) {
  return H12(e33, n17, [
    "middle",
    "top-left",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left"
  ]);
}
function rn4(e33 = "middle") {
  return ce5(e33, "frameAnchor");
}
function tn3(e33 = {}, ...n17) {
  let r13 = e33;
  for (let t14 of n17) for (let o26 in t14) if (r13[o26] === void 0) {
    let f25 = t14[o26];
    r13 === e33 ? r13 = {
      ...r13,
      [o26]: f25
    } : r13[o26] = f25;
  }
  return r13;
}
function ae5(e33) {
  console.warn("named iterables are deprecated; please use an object instead");
  let n17 = /* @__PURE__ */ new Set();
  return Object.fromEntries(Array.from(e33, (r13) => {
    let { name: t14 } = r13;
    if (t14 == null) throw new Error("missing name");
    let o26 = `${t14}`;
    if (o26 === "__proto__") throw new Error(`illegal name: ${o26}`);
    if (n17.has(o26)) throw new Error(`duplicate name: ${o26}`);
    return n17.add(o26), [
      t14,
      r13
    ];
  }));
}
function on3(e33) {
  return $11(e33) ? ae5(e33) : e33;
}
function un5(e33) {
  return e33 === true ? e33 = "frame" : e33 === false ? e33 = null : !N12(e33) && e33 != null && (e33 = k14(e33, "clip", [
    "frame",
    "sphere"
  ]), e33 === "sphere" && (e33 = {
    type: "Sphere"
  })), e33;
}
function D11(e33) {
  return e33 && typeof e33.getChild == "function" && typeof e33.toArray == "function" && e33.schema && Array.isArray(e33.schema.fields);
}
function M12(e33) {
  return e33 && typeof e33.toArray == "function" && e33.type;
}
function se5(e33) {
  return e33 && (e33.typeId === 8 || e33.typeId === 10) && e33.unit === 1;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/memoize.mjs
var i15 = Symbol("unset");
function h12(t14) {
  return (t14.length === 1 ? o22 : l11)(t14);
}
function o22(t14) {
  let r13, n17 = i15;
  return (e33) => (Object.is(n17, e33) || (n17 = e33, r13 = t14(e33)), r13);
}
function l11(t14) {
  let r13, n17;
  return (...e33) => ((n17?.length !== e33.length || n17.some((c23, u17) => !Object.is(c23, e33[u17]))) && (n17 = e33, r13 = t14(...e33)), r13);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/format.mjs
var f18 = h12((t14) => new Intl.NumberFormat(t14));
var u11 = h12((t14, n17) => new Intl.DateTimeFormat(t14, {
  timeZone: "UTC",
  ...n17 && {
    month: n17
  }
}));
var s17 = h12((t14, n17) => new Intl.DateTimeFormat(t14, {
  timeZone: "UTC",
  ...n17 && {
    weekday: n17
  }
}));
function i16(t14 = "en-US") {
  let n17 = f18(t14);
  return (e33) => e33 != null && !isNaN(e33) ? n17.format(e33) : void 0;
}
function c17(t14) {
  return f(t14, "Invalid Date");
}
function l12(t14 = "en-US") {
  let n17 = i16(t14);
  return (e33) => (e33 instanceof Date ? c17 : typeof e33 == "number" ? n17 : xe4)(e33);
}
var F16 = l12();

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales/index.mjs
var t10 = Symbol("position");
var p13 = Symbol("color");
var r11 = Symbol("radius");
var e30 = Symbol("length");
var n14 = Symbol("opacity");
var s18 = Symbol("symbol");
var c18 = Symbol("projection");
var l13 = /* @__PURE__ */ new Map([
  [
    "x",
    t10
  ],
  [
    "y",
    t10
  ],
  [
    "fx",
    t10
  ],
  [
    "fy",
    t10
  ],
  [
    "r",
    r11
  ],
  [
    "color",
    p13
  ],
  [
    "opacity",
    n14
  ],
  [
    "symbol",
    s18
  ],
  [
    "length",
    e30
  ],
  [
    "projection",
    c18
  ]
]);
function y14(o26) {
  return o26 === t10 || o26 === c18;
}
function i17(o26) {
  return o26 === t10 || o26 === r11 || o26 === e30 || o26 === n14;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/symbol.mjs
var T15 = Math.sqrt(3);
var q18 = 2 / T15;
var S15 = {
  draw(r13, e33) {
    let o26 = Math.sqrt(e33 / Math.PI), s24 = o26 * q18, n17 = s24 / 2;
    r13.moveTo(0, s24), r13.lineTo(o26, n17), r13.lineTo(o26, -n17), r13.lineTo(0, -s24), r13.lineTo(-o26, -n17), r13.lineTo(-o26, n17), r13.closePath();
  }
};
var t11 = /* @__PURE__ */ new Map([
  [
    "asterisk",
    Bt3
  ],
  [
    "circle",
    at5
  ],
  [
    "cross",
    Lt2
  ],
  [
    "diamond",
    zt4
  ],
  [
    "diamond2",
    It5
  ],
  [
    "hexagon",
    S15
  ],
  [
    "plus",
    Dt5
  ],
  [
    "square",
    Vt4
  ],
  [
    "square2",
    Ft5
  ],
  [
    "star",
    Ht4
  ],
  [
    "times",
    gt8
  ],
  [
    "triangle",
    $t3
  ],
  [
    "triangle2",
    Gt3
  ],
  [
    "wye",
    Kt4
  ]
]);
function i18(r13) {
  return r13 && typeof r13.draw == "function";
}
function L15(r13) {
  return i18(r13) ? true : typeof r13 != "string" ? false : t11.has(r13.toLowerCase());
}
function P13(r13) {
  if (r13 == null || i18(r13)) return r13;
  let e33 = t11.get(`${r13}`.toLowerCase());
  if (e33) return e33;
  throw new Error(`invalid symbol: ${r13}`);
}
function $12(r13) {
  if (r13 == null || i18(r13)) return [
    void 0,
    r13
  ];
  if (typeof r13 == "string") {
    let e33 = t11.get(`${r13}`.toLowerCase());
    if (e33) return [
      void 0,
      e33
    ];
  }
  return [
    r13,
    void 0
  ];
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/basic.mjs
function $13({ filter: r13, sort: n17, reverse: e33, transform: i20, initializer: t14, ...l19 } = {}, f25) {
  if (i20 === void 0 && (r13 != null && (i20 = h13(r13)), n17 != null && !Me3(n17) && (i20 = m13(i20, w18(n17))), e33 && (i20 = m13(i20, g9))), f25 != null && t14 != null) throw new Error("transforms cannot be applied after initializers");
  return {
    ...l19,
    ...(n17 === null || Me3(n17)) && {
      sort: n17
    },
    transform: m13(i20, f25)
  };
}
function D12({ filter: r13, sort: n17, reverse: e33, initializer: i20, ...t14 } = {}, l19) {
  return i20 === void 0 && (r13 != null && (i20 = h13(r13)), n17 != null && !Me3(n17) && (i20 = p14(i20, w18(n17))), e33 && (i20 = p14(i20, g9))), {
    ...t14,
    ...(n17 === null || Me3(n17)) && {
      sort: n17
    },
    initializer: p14(i20, l19)
  };
}
function m13(r13, n17) {
  return r13 == null ? n17 === null ? void 0 : n17 : n17 == null ? r13 === null ? void 0 : r13 : function(e33, i20, t14) {
    return { data: e33, facets: i20 } = r13.call(this, e33, i20, t14), n17.call(this, Se3(e33), i20, t14);
  };
}
function p14(r13, n17) {
  return r13 == null ? n17 === null ? void 0 : n17 : n17 == null ? r13 === null ? void 0 : r13 : function(e33, i20, t14, ...l19) {
    let f25, u17, s24, c23, a19, z29;
    return { data: u17 = e33, facets: s24 = i20, channels: f25 } = r13.call(this, e33, i20, t14, ...l19), { data: a19 = u17, facets: z29 = s24, channels: c23 } = n17.call(this, u17, s24, {
      ...t14,
      ...f25
    }, ...l19), {
      data: a19,
      facets: z29,
      channels: {
        ...f25,
        ...c23
      }
    };
  };
}
function d13(r13, n17) {
  return (r13.initializer != null ? D12 : $13)(r13, n17);
}
function h13(r13) {
  return (n17, e33) => {
    let i20 = U11(n17, r13);
    return {
      data: n17,
      facets: e33.map((t14) => t14.filter((l19) => i20[l19]))
    };
  };
}
function g9(r13, n17) {
  return {
    data: r13,
    facets: n17.map((e33) => e33.slice().reverse())
  };
}
function B12(r13, { sort: n17, ...e33 } = {}) {
  return {
    ...(C13(r13) && r13.channel !== void 0 ? D12 : d13)(e33, w18(r13)),
    sort: Me3(n17) ? n17 : null
  };
}
function w18(r13) {
  return (typeof r13 == "function" && r13.length !== 1 ? q19 : V12)(r13);
}
function q19(r13) {
  return (n17, e33) => {
    let i20 = s16(n17) ? (t14, l19) => r13(n17[t14], n17[l19]) : (t14, l19) => r13(n17.get(t14), n17.get(l19));
    return {
      data: n17,
      facets: e33.map((t14) => t14.slice().sort(i20))
    };
  };
}
function V12(r13) {
  let n17, e33;
  ({ channel: n17, value: r13, order: e33 } = {
    ...Je3(r13)
  });
  let i20 = n17?.startsWith("-");
  if (i20 && (n17 = n17.slice(1)), e33 === void 0 && (e33 = i20 ? f16 : u9), typeof e33 != "function") switch (`${e33}`.toLowerCase()) {
    case "ascending":
      e33 = u9;
      break;
    case "descending":
      e33 = f16;
      break;
    default:
      throw new Error(`invalid order: ${e33}`);
  }
  return (t14, l19, f25) => {
    let u17;
    if (n17 === void 0) u17 = U11(t14, r13);
    else {
      if (f25 === void 0) throw new Error("channel sort requires an initializer");
      if (u17 = f25[n17], !u17) return {};
      u17 = u17.value;
    }
    let s24 = (c23, a19) => e33(u17[c23], u17[a19]);
    return {
      data: t14,
      facets: l19.map((c23) => c23.slice().sort(s24))
    };
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/group.mjs
function gn5(e33 = {
  y: "count"
}, n17 = {}) {
  let { x: r13 = R13 } = n17;
  if (r13 == null) throw new Error("missing channel: x");
  return S16(r13, null, e33, n17);
}
function In3(e33 = {
  x: "count"
}, n17 = {}) {
  let { y: r13 = R13 } = n17;
  if (r13 == null) throw new Error("missing channel: y");
  return S16(null, r13, e33, n17);
}
function Gn4(e33 = {
  fill: "count"
}, n17 = {}) {
  let { x: r13, y: t14 } = n17;
  if ([r13, t14] = Ee5(r13, t14), r13 == null) throw new Error("missing channel: x");
  if (t14 == null) throw new Error("missing channel: y");
  return S16(r13, t14, e33, n17);
}
function S16(e33, n17, { data: r13 = re6, filter: t14, sort: o26, reverse: c23, ...u17 } = {}, s24 = {}) {
  u17 = Qe3(u17, s24), r13 = ne5(r13, R13), o26 = o26 == null ? void 0 : _10("sort", o26, s24), t14 = t14 == null ? void 0 : ee5("filter", t14, s24);
  let [i20, f25] = Le2(e33), [m22, oe9] = Le2(n17), { z: E29, fill: Y20, stroke: Z19, x1: ce7, x2: ue7, y1: ie7, y2: se10, ...fe6 } = s24, [le7, ae9] = Le2(E29), [L25] = g8(Y20), [R19] = g8(Z19), [de7, pe6] = Le2(L25), [me6, xe6] = Le2(R19);
  return {
    ..."z" in s24 && {
      z: le7 || E29
    },
    ..."fill" in s24 && {
      fill: de7 || Y20
    },
    ..."stroke" in s24 && {
      stroke: me6 || Z19
    },
    ...$13(fe6, (l19, F28, j26) => {
      let v23 = Xe4(U11(l19, e33), j26?.x), z29 = Xe4(U11(l19, n17), j26?.y), b25 = U11(l19, E29), g18 = U11(l19, L25), I21 = U11(l19, R19), G19 = _e5(u17, {
        z: b25,
        fill: g18,
        stroke: I21
      }), O15 = [], A26 = [], ye6 = v23 && f25([]), he7 = z29 && oe9([]), be7 = b25 && ae9([]), ge8 = g18 && pe6([]), Ie6 = I21 && xe6([]), Ge5 = 0;
      for (let x23 of u17) x23.initialize(l19);
      o26 && o26.initialize(l19), t14 && t14.initialize(l19);
      for (let x23 of F28) {
        let T21 = [];
        for (let y21 of u17) y21.scope("facet", x23);
        o26 && o26.scope("facet", x23), t14 && t14.scope("facet", x23);
        for (let [y21, we5] of $14(x23, G19)) for (let [D18, ve6] of $14(we5, z29)) for (let [q29, d18] of $14(ve6, v23)) {
          let p21 = {
            data: l19
          };
          if (v23 && (p21.x = q29), z29 && (p21.y = D18), G19 && (p21.z = y21), !(t14 && !t14.reduce(d18, p21))) {
            T21.push(Ge5++), A26.push(r13.reduceIndex(d18, l19, p21)), v23 && ye6.push(q29), z29 && he7.push(D18), b25 && be7.push(G19 === b25 ? y21 : b25[d18[0]]), g18 && ge8.push(G19 === g18 ? y21 : g18[d18[0]]), I21 && Ie6.push(G19 === I21 ? y21 : I21[d18[0]]);
            for (let ze7 of u17) ze7.reduce(d18, p21);
            o26 && o26.reduce(d18, p21);
          }
        }
        O15.push(T21);
      }
      return en5(O15, o26, c23), {
        data: A26,
        facets: O15
      };
    }),
    ...!P14(u17, "x") && (i20 ? {
      x: i20
    } : {
      x1: ce7,
      x2: ue7
    }),
    ...!P14(u17, "y") && (m22 ? {
      y: m22
    } : {
      y1: ie7,
      y2: se10
    }),
    ...Object.fromEntries(u17.map(({ name: l19, output: F28 }) => [
      l19,
      F28
    ]))
  };
}
function P14(e33, ...n17) {
  for (let { name: r13 } of e33) if (n17.includes(r13)) return true;
  return false;
}
function Je4(e33, n17, r13 = N13) {
  let t14 = Object.entries(e33);
  return n17.title != null && e33.title === void 0 && t14.push([
    "title",
    tn4
  ]), n17.href != null && e33.href === void 0 && t14.push([
    "href",
    te4
  ]), t14.filter(([, o26]) => o26 !== void 0).map(([o26, c23]) => c23 === null ? Ke4(o26) : r13(o26, c23, n17));
}
function N13(e33, n17, r13, t14 = Q14) {
  let o26;
  T14(n17) && "reduce" in n17 && (o26 = n17.scale, n17 = n17.reduce);
  let c23 = t14(e33, n17, r13), [u17, s24] = ee4(c23.label), i20;
  return {
    name: e33,
    output: o26 === void 0 ? u17 : {
      value: u17,
      scale: o26
    },
    initialize(f25) {
      c23.initialize(f25), i20 = s24([]);
    },
    scope(f25, m22) {
      c23.scope(f25, m22);
    },
    reduce(f25, m22) {
      i20.push(c23.reduce(f25, m22));
    }
  };
}
function Ke4(e33) {
  return {
    name: e33,
    initialize() {
    },
    scope() {
    },
    reduce() {
    }
  };
}
function Q14(e33, n17, r13, t14 = W13) {
  let o26 = _e4(e33, r13), c23 = t14(n17, o26), u17, s24;
  return {
    label: S14(c23 === X14 ? null : o26, c23.label),
    initialize(i20) {
      u17 = o26 === void 0 ? i20 : U11(i20, o26), c23.scope === "data" && (s24 = c23.reduceIndex(v16(i20), u17));
    },
    scope(i20, f25) {
      c23.scope === i20 && (s24 = c23.reduceIndex(f25, u17));
    },
    reduce(i20, f25) {
      return c23.scope == null ? c23.reduceIndex(i20, u17, f25) : c23.reduceIndex(i20, u17, s24, f25);
    }
  };
}
function $14(e33, n17) {
  return n17 ? P(e33, (r13) => n17[r13]) : [
    [
      ,
      e33
    ]
  ];
}
function W13(e33, n17, r13 = Ne6) {
  if (e33 == null) return r13(e33);
  if (typeof e33.reduceIndex == "function") return e33;
  if (typeof e33.reduce == "function" && T14(e33)) return nn5(e33);
  if (typeof e33 == "function") return rn5(e33);
  if (/^p\d{2}$/i.test(e33)) return a13(Te3(e33));
  switch (`${e33}`.toLowerCase()) {
    case "first":
      return te4;
    case "last":
      return on4;
    case "identity":
      return re6;
    case "count":
      return X14;
    case "distinct":
      return cn5;
    case "sum":
      return n17 == null ? X14 : un6;
    case "proportion":
      return H13(n17, "data");
    case "proportion-facet":
      return H13(n17, "facet");
    case "deviation":
      return a13(K);
    case "min":
      return a13(I);
    case "min-index":
      return a13(k);
    case "max":
      return a13(U);
    case "max-index":
      return a13(R);
    case "mean":
      return B13(Ne);
    case "median":
      return B13(qe);
    case "variance":
      return a13(J);
    case "mode":
      return a13(Se);
  }
  return r13(e33);
}
function Ne6(e33) {
  throw new Error(`invalid reduce: ${e33}`);
}
function Qe3(e33, n17) {
  return Je4(e33, n17, _10);
}
function _10(e33, n17, r13) {
  return N13(e33, n17, r13, ee5);
}
function ee5(e33, n17, r13) {
  return Q14(e33, n17, r13, ne5);
}
function ne5(e33, n17) {
  return W13(e33, n17, We3);
}
function We3(e33) {
  switch (`${e33}`.toLowerCase()) {
    case "x":
      return sn5;
    case "y":
      return fn4;
    case "z":
      return ln3;
  }
  throw new Error(`invalid group reduce: ${e33}`);
}
function _e5(e33, n17) {
  for (let r13 in n17) {
    let t14 = n17[r13];
    if (t14 !== void 0 && !e33.some((o26) => o26.name === r13)) return t14;
  }
}
function en5(e33, n17, r13) {
  if (n17) {
    let t14 = n17.output.transform(), o26 = (c23, u17) => u9(t14[c23], t14[u17]);
    e33.forEach((c23) => c23.sort(o26));
  }
  r13 && e33.forEach((t14) => t14.reverse());
}
function nn5(e33) {
  return console.warn("deprecated reduce interface; implement reduceIndex instead."), {
    ...e33,
    reduceIndex: e33.reduce.bind(e33)
  };
}
function rn5(e33) {
  return {
    reduceIndex(n17, r13, t14) {
      return e33(I14(r13, n17), t14);
    }
  };
}
function a13(e33) {
  return {
    reduceIndex(n17, r13) {
      return e33(n17, (t14) => r13[t14]);
    }
  };
}
function B13(e33) {
  return {
    reduceIndex(n17, r13) {
      let t14 = e33(n17, (o26) => r13[o26]);
      return b13(r13) ? new Date(t14) : t14;
    }
  };
}
var re6 = {
  reduceIndex(e33, n17) {
    return I14(n17, e33);
  }
};
var te4 = {
  reduceIndex(e33, n17) {
    return n17[e33[0]];
  }
};
var tn4 = {
  reduceIndex(e33, n17) {
    let t14 = L(fe(e33, (c23) => c23.length, (c23) => n17[c23]), Y13), o26 = t14.slice(-5).reverse();
    if (o26.length < t14.length) {
      let c23 = t14.slice(0, -4);
      o26[4] = [
        `\u2026 ${c23.length.toLocaleString("en-US")} more`,
        Ve(c23, Y13)
      ];
    }
    return o26.map(([c23, u17]) => `${c23} (${u17.toLocaleString("en-US")})`).join(`
`);
  }
};
var on4 = {
  reduceIndex(e33, n17) {
    return n17[e33[e33.length - 1]];
  }
};
var X14 = {
  label: "Frequency",
  reduceIndex(e33) {
    return e33.length;
  }
};
var cn5 = {
  label: "Distinct",
  reduceIndex(e33, n17) {
    let r13 = new o2();
    for (let t14 of e33) r13.add(n17[t14]);
    return r13.size;
  }
};
var un6 = a13(Ve);
function H13(e33, n17) {
  return e33 == null ? {
    scope: n17,
    label: "Frequency",
    reduceIndex: (r13, t14, o26 = 1) => r13.length / o26
  } : {
    scope: n17,
    reduceIndex: (r13, t14, o26 = 1) => Ve(r13, (c23) => t14[c23]) / o26
  };
}
var sn5 = {
  reduceIndex(e33, n17, { x: r13 }) {
    return r13;
  }
};
var fn4 = {
  reduceIndex(e33, n17, { y: r13 }) {
    return r13;
  }
};
var ln3 = {
  reduceIndex(e33, n17, { z: r13 }) {
    return r13;
  }
};

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/channel.mjs
function K13(t14, { scale: r13, type: e33, value: n17, filter: o26, hint: i20, label: u17 = S14(n17) }, f25) {
  return i20 === void 0 && typeof n17?.transform == "function" && (i20 = n17.hint), P15(f25, {
    scale: r13,
    type: e33,
    value: U11(t14, n17),
    label: u17,
    filter: o26,
    hint: i20
  });
}
function ne6(t14, r13) {
  return Object.fromEntries(Object.entries(t14).map(([e33, n17]) => [
    e33,
    K13(r13, n17, e33)
  ]));
}
function ie5(t14, r13) {
  let e33 = Object.fromEntries(Object.entries(t14).map(([n17, { scale: o26, value: i20 }]) => {
    let u17 = o26 == null ? null : r13[o26];
    return [
      n17,
      u17 == null ? i20 : i14(i20, u17)
    ];
  }));
  return e33.channels = t14, e33;
}
function P15(t14, r13) {
  let { scale: e33, value: n17 } = r13;
  if (e33 === true || e33 === "auto") switch (t14) {
    case "fill":
    case "stroke":
    case "color":
      r13.scale = e33 !== true && ze3(n17, ue4) ? null : "color", r13.defaultScale = "color";
      break;
    case "fillOpacity":
    case "strokeOpacity":
    case "opacity":
      r13.scale = e33 !== true && ze3(n17, ve5) ? null : "opacity", r13.defaultScale = "opacity";
      break;
    case "symbol":
      e33 !== true && ze3(n17, L15) ? (r13.scale = null, r13.value = i14(n17, P13)) : r13.scale = "symbol", r13.defaultScale = "symbol";
      break;
    default:
      r13.scale = l13.has(t14) ? t14 : null;
      break;
  }
  else if (e33 === false) r13.scale = null;
  else if (e33 != null && !l13.has(e33)) throw new Error(`unknown scale: ${e33}`);
  return r13;
}
function oe6(t14, r13, e33, n17, o26) {
  let { order: i20, reverse: u17, reduce: f25 = true, limit: $22 } = o26;
  for (let c23 in o26) {
    if (!l13.has(c23)) continue;
    let { value: l19, order: a19 = i20, reverse: C18 = u17, reduce: y21 = f25, limit: d18 = $22 } = Je3(o26[c23]), E29 = l19?.startsWith("-");
    if (E29 && (l19 = l19.slice(1)), a19 = a19 === void 0 ? E29 !== (l19 === "width" || l19 === "height") ? V13 : I16 : U12(a19), y21 == null || y21 === false) continue;
    let p21 = c23 === "fx" || c23 === "fy" ? T16(r13, n17[c23]) : Q15(e33, c23);
    if (!p21) throw new Error(`missing channel for scale: ${c23}`);
    let v23 = p21.value, [b25 = 0, g18 = 1 / 0] = $11(d18) ? d18 : d18 < 0 ? [
      d18
    ] : [
      0,
      d18
    ];
    if (l19 == null) p21.domain = () => {
      let s24 = Array.from(new o2(v23));
      return C18 && (s24 = s24.reverse()), (b25 !== 0 || g18 !== 1 / 0) && (s24 = s24.slice(b25, g18)), s24;
    };
    else {
      let s24 = l19 === "data" ? t14 : l19 === "height" ? j11(e33, "y1", "y2") : l19 === "width" ? j11(e33, "x1", "x2") : S17(e33, l19, l19 === "y" ? "y2" : l19 === "x" ? "x2" : void 0), X22 = W13(y21 === true ? "max" : y21, s24);
      p21.domain = () => {
        let m22 = ge(v16(v23), (w26) => X22.reduceIndex(w26, s24), (w26) => v23[w26]);
        return a19 && m22.sort(a19), C18 && m22.reverse(), (b25 !== 0 || g18 !== 1 / 0) && (m22 = m22.slice(b25, g18)), m22.map(J11);
      };
    }
  }
}
function Q15(t14, r13) {
  for (let e33 in t14) {
    let n17 = t14[e33];
    if (n17.scale === r13) return n17;
  }
}
function T16(t14, r13) {
  let e33 = t14.original;
  if (e33 === t14) return r13;
  let n17 = r13.value, o26 = r13.value = [];
  for (let i20 = 0; i20 < e33.length; ++i20) {
    let u17 = n17[e33[i20][0]];
    for (let f25 of t14[i20]) o26[f25] = u17;
  }
  return r13;
}
function j11(t14, r13, e33) {
  let n17 = S17(t14, r13), o26 = S17(t14, e33);
  return i14(o26, (i20, u17) => Math.abs(i20 - n17[u17]), Float64Array);
}
function S17(t14, r13, e33) {
  let n17 = t14[r13];
  if (!n17 && e33 !== void 0 && (n17 = t14[e33]), n17) return n17.value;
  throw new Error(`missing channel: ${r13}`);
}
function U12(t14) {
  if (t14 == null || typeof t14 == "function") return t14;
  switch (`${t14}`.toLowerCase()) {
    case "ascending":
      return I16;
    case "descending":
      return V13;
  }
  throw new Error(`invalid order: ${t14}`);
}
function I16([t14, r13], [e33, n17]) {
  return u9(r13, n17) || u9(t14, e33);
}
function V13([t14, r13], [e33, n17]) {
  return f16(r13, n17) || u9(t14, e33);
}
function le4(t14, r13) {
  let e33 = t14[r13];
  if (e33) {
    for (; e33.source; ) e33 = e33.source;
    return e33.source === null ? null : e33;
  }
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales/schemes.mjs
var _11 = /* @__PURE__ */ new Map([
  [
    "accent",
    j6
  ],
  [
    "category10",
    W9
  ],
  [
    "dark2",
    q13
  ],
  [
    "observable10",
    z8
  ],
  [
    "paired",
    E15
  ],
  [
    "pastel1",
    F12
  ],
  [
    "pastel2",
    H9
  ],
  [
    "set1",
    J8
  ],
  [
    "set2",
    K8
  ],
  [
    "set3",
    N9
  ],
  [
    "tableau10",
    Q9
  ]
]);
function Ve5(e33) {
  return e33 != null && _11.has(`${e33}`.toLowerCase());
}
var d14 = new Map([
  ..._11,
  [
    "brbg",
    o23(p8, X9)
  ],
  [
    "prgn",
    o23(s13, Z8)
  ],
  [
    "piyg",
    o23(l7, $8)
  ],
  [
    "puor",
    o23(n13, ff)
  ],
  [
    "rdbu",
    o23(i9, ef)
  ],
  [
    "rdgy",
    o23(u7, af)
  ],
  [
    "rdylbu",
    o23(x12, df)
  ],
  [
    "rdylgn",
    o23(h10, cf)
  ],
  [
    "spectral",
    o23(v12, bf)
  ],
  [
    "burd",
    m14(i9, ef)
  ],
  [
    "buylrd",
    m14(x12, df)
  ],
  [
    "blues",
    n15(S9, Mf)
  ],
  [
    "greens",
    n15(I8, wf)
  ],
  [
    "greys",
    n15(_5, yf)
  ],
  [
    "oranges",
    n15(T12, Pf)
  ],
  [
    "purples",
    n15(D8, Af)
  ],
  [
    "reds",
    n15(L11, Bf)
  ],
  [
    "turbo",
    a14(Lf)
  ],
  [
    "viridis",
    a14(Tf)
  ],
  [
    "magma",
    a14(kf)
  ],
  [
    "inferno",
    a14(Vf)
  ],
  [
    "plasma",
    a14(Wf)
  ],
  [
    "cividis",
    a14(Gf)
  ],
  [
    "cubehelix",
    a14(gf)
  ],
  [
    "warm",
    a14(Yf)
  ],
  [
    "cool",
    a14(Of)
  ],
  [
    "bugn",
    n15(M8, rf)
  ],
  [
    "bupu",
    n15(w14, of)
  ],
  [
    "gnbu",
    n15(y10, tf)
  ],
  [
    "orrd",
    n15(A11, mf)
  ],
  [
    "pubu",
    n15(P8, sf)
  ],
  [
    "pubugn",
    n15(B8, pf)
  ],
  [
    "purd",
    n15(G9, lf)
  ],
  [
    "rdpu",
    n15(R9, nf)
  ],
  [
    "ylgn",
    n15(Y9, xf)
  ],
  [
    "ylgnbu",
    n15(g7, uf)
  ],
  [
    "ylorbr",
    n15(O6, hf)
  ],
  [
    "ylorrd",
    n15(C11, vf)
  ],
  [
    "rainbow",
    g10(Cf)
  ],
  [
    "sinebow",
    g10(Df)
  ]
]);
function n15(e33, t14) {
  return ({ length: r13 }) => r13 === 1 ? [
    e33[3][1]
  ] : r13 === 2 ? [
    e33[3][1],
    e33[3][2]
  ] : (r13 = Math.max(3, Math.floor(r13)), r13 > 9 ? Tr(t14, r13) : e33[r13]);
}
function o23(e33, t14) {
  return ({ length: r13 }) => r13 === 2 ? [
    e33[3][0],
    e33[3][2]
  ] : (r13 = Math.max(3, Math.floor(r13)), r13 > 11 ? Tr(t14, r13) : e33[r13]);
}
function m14(e33, t14) {
  return ({ length: r13 }) => r13 === 2 ? [
    e33[3][2],
    e33[3][0]
  ] : (r13 = Math.max(3, Math.floor(r13)), r13 > 11 ? Tr((l19) => t14(1 - l19), r13) : e33[r13].slice().reverse());
}
function a14(e33) {
  return ({ length: t14 }) => Tr(e33, Math.max(2, Math.floor(t14)));
}
function g10(e33) {
  return ({ length: t14 }) => Tr(e33, Math.floor(t14) + 1).slice(0, -1);
}
function Te4(e33) {
  let t14 = `${e33}`.toLowerCase();
  if (!d14.has(t14)) throw new Error(`unknown ordinal scheme: ${t14}`);
  return d14.get(t14);
}
function ze4(e33, t14) {
  let r13 = Te4(e33), l19 = typeof r13 == "function" ? r13({
    length: t14
  }) : r13;
  return l19.length !== t14 ? l19.slice(0, t14) : l19;
}
function We4(e33, t14 = "greys") {
  let r13 = /* @__PURE__ */ new Set(), [l19, ee6] = ze4(t14, 2);
  for (let c23 of e33) if (c23 != null) if (c23 === true) r13.add(ee6);
  else if (c23 === false) r13.add(l19);
  else return;
  return [
    ...r13
  ];
}
var b14 = /* @__PURE__ */ new Map([
  [
    "brbg",
    X9
  ],
  [
    "prgn",
    Z8
  ],
  [
    "piyg",
    $8
  ],
  [
    "puor",
    ff
  ],
  [
    "rdbu",
    ef
  ],
  [
    "rdgy",
    af
  ],
  [
    "rdylbu",
    df
  ],
  [
    "rdylgn",
    cf
  ],
  [
    "spectral",
    bf
  ],
  [
    "burd",
    (e33) => ef(1 - e33)
  ],
  [
    "buylrd",
    (e33) => df(1 - e33)
  ],
  [
    "blues",
    Mf
  ],
  [
    "greens",
    wf
  ],
  [
    "greys",
    yf
  ],
  [
    "purples",
    Af
  ],
  [
    "reds",
    Bf
  ],
  [
    "oranges",
    Pf
  ],
  [
    "turbo",
    Lf
  ],
  [
    "viridis",
    Tf
  ],
  [
    "magma",
    kf
  ],
  [
    "inferno",
    Vf
  ],
  [
    "plasma",
    Wf
  ],
  [
    "cividis",
    Gf
  ],
  [
    "cubehelix",
    gf
  ],
  [
    "warm",
    Yf
  ],
  [
    "cool",
    Of
  ],
  [
    "bugn",
    rf
  ],
  [
    "bupu",
    of
  ],
  [
    "gnbu",
    tf
  ],
  [
    "orrd",
    mf
  ],
  [
    "pubugn",
    pf
  ],
  [
    "pubu",
    sf
  ],
  [
    "purd",
    lf
  ],
  [
    "rdpu",
    nf
  ],
  [
    "ylgnbu",
    uf
  ],
  [
    "ylgn",
    xf
  ],
  [
    "ylorbr",
    hf
  ],
  [
    "ylorrd",
    vf
  ],
  [
    "rainbow",
    Cf
  ],
  [
    "sinebow",
    Df
  ]
]);
function je4(e33) {
  let t14 = `${e33}`.toLowerCase();
  if (!b14.has(t14)) throw new Error(`unknown quantitative scheme: ${t14}`);
  return b14.get(t14);
}
var Ae4 = /* @__PURE__ */ new Set([
  "brbg",
  "prgn",
  "piyg",
  "puor",
  "rdbu",
  "rdgy",
  "rdylbu",
  "rdylgn",
  "spectral",
  "burd",
  "buylrd"
]);
function Fe4(e33) {
  return e33 != null && Ae4.has(`${e33}`.toLowerCase());
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales/quantitative.mjs
var le5 = (e33) => (n17) => e33(1 - n17);
var N14 = [
  0,
  1
];
var $15 = /* @__PURE__ */ new Map([
  [
    "number",
    x2
  ],
  [
    "rgb",
    C3
  ],
  [
    "hsl",
    Lr
  ],
  [
    "hcl",
    kr
  ],
  [
    "lab",
    ir
  ]
]);
function se6(e33) {
  let n17 = `${e33}`.toLowerCase();
  if (!$15.has(n17)) throw new Error(`unknown interpolator: ${n17}`);
  return $15.get(n17);
}
function y15(e33, n17, t14, { type: i20, nice: u17, clamp: f25, zero: o26, domain: r13 = j12(e33, t14), unknown: s24, round: h20, scheme: a19, interval: c23, range: d18 = l13.get(e33) === r11 ? xe5(t14, r13) : l13.get(e33) === e30 ? be6(t14, r13) : l13.get(e33) === n14 ? N14 : void 0, interpolate: l19 = l13.get(e33) === p13 ? a19 == null && d18 !== void 0 ? C3 : je4(a19 !== void 0 ? a19 : i20 === "cyclical" ? "rainbow" : "turbo") : h20 ? yr : x2, reverse: x23 }) {
  if (r13 = z15(r13), c23 = te3(c23, i20), (i20 === "cyclical" || i20 === "sequential") && (i20 = "linear"), typeof l19 != "function" && (l19 = se6(l19)), x23 = !!x23, d18 !== void 0) {
    let b25 = r13.length, w26 = (d18 = z15(d18)).length;
    if (b25 !== w26) {
      if (l19.length === 1) throw new Error("invalid piecewise interpolator");
      l19 = pr(l19, d18), d18 = void 0;
    }
  }
  if (l19.length === 1 ? (x23 && (l19 = le5(l19), x23 = false), d18 === void 0 && (d18 = Float64Array.from(r13, (b25, w26) => w26 / (r13.length - 1)), d18.length === 2 && (d18 = N14)), n17.interpolate((d18 === N14 ? Z12 : Se4)(l19))) : n17.interpolate(l19), o26) {
    let [b25, w26] = E(r13);
    (b25 > 0 || w26 < 0) && (r13 = Oe4(r13), (i12(r13) || 1) === Math.sign(b25) ? r13[0] = 0 : r13[r13.length - 1] = 0);
  }
  return x23 && (r13 = _e(r13)), n17.domain(r13).unknown(s24), u17 && (n17.nice(pe5(u17, i20)), r13 = n17.domain()), d18 !== void 0 && n17.range(d18), f25 && n17.clamp(f25), {
    type: i20,
    domain: r13,
    range: d18,
    scale: n17,
    interpolate: l19,
    interval: c23
  };
}
function z15(e33) {
  return e33 = A16(e33), e33.length >= 2 ? e33 : [
    e33[0],
    e33[0]
  ];
}
function pe5(e33, n17) {
  return e33 === true ? void 0 : typeof e33 == "number" ? e33 : Ge3(e33, n17);
}
function Qe4(e33, n17, t14) {
  return y15(e33, C12(), n17, t14);
}
function Me4(e33, n17, t14) {
  return he6(e33, n17, {
    ...t14,
    exponent: 0.5
  });
}
function he6(e33, n17, { exponent: t14 = 1, ...i20 }) {
  return y15(e33, Q12().exponent(t14), n17, {
    ...i20,
    type: "pow"
  });
}
function Ee6(e33, n17, { base: t14 = 10, domain: i20 = we4(n17), ...u17 }) {
  return y15(e33, _8().base(t14), n17, {
    ...u17,
    domain: i20
  });
}
function Pe3(e33, n17, { constant: t14 = 1, ...i20 }) {
  return y15(e33, G11().constant(t14), n17, i20);
}
function $e5(e33, n17, { range: t14, quantiles: i20 = t14 === void 0 ? 5 : (t14 = [
  ...t14
]).length, n: u17 = i20, scheme: f25 = "rdylbu", domain: o26 = me4(n17), unknown: r13, interpolate: s24, reverse: h20 }) {
  return t14 === void 0 && (t14 = s24 !== void 0 ? Tr(s24, u17) : l13.get(e33) === p13 ? ze4(f25, u17) : void 0), o26.length > 0 && (o26 = K10(o26, t14 === void 0 ? {
    length: u17
  } : t14).quantiles()), _12(e33, n17, {
    domain: o26,
    range: t14,
    reverse: h20,
    unknown: r13
  });
}
function ze5(e33, n17, { range: t14, n: i20 = t14 === void 0 ? 5 : (t14 = [
  ...t14
]).length, scheme: u17 = "rdylbu", domain: f25 = j12(e33, n17), unknown: o26, interpolate: r13, reverse: s24 }) {
  let [h20, a19] = E(f25), c23;
  return t14 === void 0 ? (c23 = X(h20, a19, i20), c23[0] <= h20 && c23.splice(0, 1), c23[c23.length - 1] >= a19 && c23.pop(), i20 = c23.length + 1, t14 = r13 !== void 0 ? Tr(r13, i20) : l13.get(e33) === p13 ? ze4(u17, i20) : void 0) : (c23 = Tr(x2(h20, a19), i20 + 1).slice(1, -1), h20 instanceof Date && (c23 = c23.map((d18) => new Date(d18)))), i12(A16(f25)) < 0 && c23.reverse(), _12(e33, n17, {
    domain: c23,
    range: t14,
    reverse: s24,
    unknown: o26
  });
}
function _12(e33, n17, { domain: t14 = [
  0
], unknown: i20, scheme: u17 = "rdylbu", interpolate: f25, range: o26 = f25 !== void 0 ? Tr(f25, t14.length + 1) : l13.get(e33) === p13 ? ze4(u17, t14.length + 1) : void 0, reverse: r13 }) {
  t14 = A16(t14);
  let s24 = i12(t14);
  if (!isNaN(s24) && !ae6(t14, s24)) throw new Error(`the ${e33} scale has a non-monotonic domain`);
  return r13 && (o26 = _e(o26)), {
    type: "threshold",
    scale: Z10(s24 < 0 ? _e(t14) : t14, o26 === void 0 ? [] : o26).unknown(i20),
    domain: t14,
    range: o26
  };
}
function ae6(e33, n17) {
  for (let t14 = 1, i20 = e33.length, u17 = e33[0]; t14 < i20; ++t14) {
    let f25 = H(u17, u17 = e33[t14]);
    if (f25 !== 0 && f25 !== n17) return false;
  }
  return true;
}
function Ae5(e33) {
  return {
    type: "identity",
    scale: i17(l13.get(e33)) ? V9() : (n17) => n17
  };
}
function L16(e33, n17 = d11) {
  return e33.length ? [
    I(e33, ({ value: t14 }) => t14 === void 0 ? t14 : I(t14, n17)),
    U(e33, ({ value: t14 }) => t14 === void 0 ? t14 : U(t14, n17))
  ] : [
    0,
    1
  ];
}
function j12(e33, n17) {
  let t14 = l13.get(e33);
  return (t14 === r11 || t14 === n14 || t14 === e30 ? ge6 : L16)(n17);
}
function ge6(e33) {
  return [
    0,
    e33.length ? U(e33, ({ value: n17 }) => n17 === void 0 ? n17 : U(n17, d11)) : 1
  ];
}
function xe5(e33, n17) {
  let t14 = e33.find(({ radius: o26 }) => o26 !== void 0);
  if (t14 !== void 0) return [
    0,
    t14.radius
  ];
  let i20 = A(e33, 0.5, ({ value: o26 }) => o26 === void 0 ? NaN : A(o26, 0.25, p12)), u17 = n17.map((o26) => 3 * Math.sqrt(o26 / i20)), f25 = 30 / U(u17);
  return f25 < 1 ? u17.map((o26) => o26 * f25) : u17;
}
function be6(e33, n17) {
  let t14 = qe(e33, ({ value: f25 }) => f25 === void 0 ? NaN : qe(f25, Math.abs)), i20 = n17.map((f25) => 12 * f25 / t14), u17 = 60 / U(i20);
  return u17 < 1 ? i20.map((f25) => f25 * u17) : i20;
}
function we4(e33) {
  for (let { value: n17 } of e33) if (n17 !== void 0) for (let t14 of n17) {
    if (t14 > 0) return L16(e33, p12);
    if (t14 < 0) return L16(e33, s14);
  }
  return [
    1,
    10
  ];
}
function me4(e33) {
  let n17 = [];
  for (let { value: t14 } of e33) if (t14 !== void 0) for (let i20 of t14) n17.push(i20);
  return n17;
}
function Se4(e33) {
  return (n17, t14) => (i20) => e33(n17 + i20 * (t14 - n17));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/warnings.mjs
var r12 = 0;
var t12;
function e31() {
  let n17 = r12;
  return r12 = 0, t12 = void 0, n17;
}
function o24(n17) {
  n17 !== t12 && (t12 = n17, console.warn(n17), ++r12);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales/diverging.mjs
function l14(r13, t14, n17, o26, { type: p21, nice: f25, clamp: d18, domain: u17 = L16(o26), unknown: S27, pivot: g18 = 0, scheme: s24, range: c23, symmetric: D18 = true, interpolate: i20 = l13.get(r13) === p13 ? s24 == null && c23 !== void 0 ? C3 : je4(s24 !== void 0 ? s24 : "rdbu") : x2, reverse: h20 }) {
  g18 = +g18, u17 = A16(u17);
  let [e33, a19] = u17;
  if (u17.length > 2 && o24(`Warning: the diverging ${r13} scale domain contains extra elements.`), H(e33, a19) < 0 && ([e33, a19] = [
    a19,
    e33
  ], h20 = !h20), e33 = Math.min(e33, g18), a19 = Math.max(a19, g18), typeof i20 != "function" && (i20 = se6(i20)), c23 !== void 0 && (i20 = i20.length === 1 ? Se4(i20)(...c23) : pr(i20, c23)), h20 && (i20 = le5(i20)), D18) {
    let m22 = n17.apply(g18), M22 = m22 - n17.apply(e33), y21 = n17.apply(a19) - m22;
    M22 < y21 ? e33 = n17.invert(m22 - y21) : M22 > y21 && (a19 = n17.invert(m22 + M22));
  }
  return t14.domain([
    e33,
    g18,
    a19
  ]).unknown(S27).interpolator(i20), d18 && t14.clamp(d18), f25 && t14.nice(f25), {
    type: p21,
    domain: [
      e33,
      a19
    ],
    pivot: g18,
    interpolate: i20,
    scale: t14
  };
}
function _13(r13, t14, n17) {
  return l14(r13, rn2(), G14, t14, n17);
}
function rr4(r13, t14, n17) {
  return F17(r13, t14, {
    ...n17,
    exponent: 0.5
  });
}
function F17(r13, t14, { exponent: n17 = 1, ...o26 }) {
  return l14(r13, en3().exponent(n17 = +n17), K14(n17), t14, {
    ...o26,
    type: "diverging-pow"
  });
}
function tr2(r13, t14, { base: n17 = 10, pivot: o26 = 1, domain: p21 = L16(t14, o26 < 0 ? s14 : p12), ...f25 }) {
  return l14(r13, wn3().base(n17 = +n17), H14, t14, {
    domain: p21,
    pivot: o26,
    ...f25
  });
}
function nr2(r13, t14, { constant: n17 = 1, ...o26 }) {
  return l14(r13, kn3().constant(n17 = +n17), O9(n17), t14, o26);
}
var G14 = {
  apply(r13) {
    return r13;
  },
  invert(r13) {
    return r13;
  }
};
var H14 = {
  apply: Math.log,
  invert: Math.exp
};
var J12 = {
  apply(r13) {
    return Math.sign(r13) * Math.sqrt(Math.abs(r13));
  },
  invert(r13) {
    return Math.sign(r13) * (r13 * r13);
  }
};
function K14(r13) {
  return r13 === 0.5 ? J12 : {
    apply(t14) {
      return Math.sign(t14) * Math.pow(Math.abs(t14), r13);
    },
    invert(t14) {
      return Math.sign(t14) * Math.pow(Math.abs(t14), 1 / r13);
    }
  };
}
function O9(r13) {
  return {
    apply(t14) {
      return Math.sign(t14) * Math.log1p(Math.abs(t14 / r13));
    },
    invert(t14) {
      return Math.sign(t14) * Math.expm1(Math.abs(t14)) * r13;
    }
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales/temporal.mjs
function c19(e33, r13, t14, a19) {
  return y15(e33, r13, t14, a19);
}
function u12(e33, r13, t14) {
  return c19(e33, dn3(), r13, t14);
}
function f19(e33, r13, t14) {
  return c19(e33, yn4(), r13, t14);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales/ordinal.mjs
var a15 = Symbol("ordinal");
function p15(i20, t14, f25, { type: e33, interval: o26, domain: n17, range: r13, reverse: d18, hint: u17 }) {
  return o26 = te3(o26, e33), n17 === void 0 && (n17 = S18(f25, o26, i20)), (e33 === "categorical" || e33 === a15) && (e33 = "ordinal"), d18 && (n17 = _e(n17)), n17 = t14.domain(n17).domain(), r13 !== void 0 && (typeof r13 == "function" && (r13 = r13(n17)), t14.range(r13)), {
    type: e33,
    domain: n17,
    range: r13,
    scale: t14,
    hint: u17,
    interval: o26
  };
}
function g11(i20, t14, { type: f25, interval: e33, domain: o26, range: n17, scheme: r13, unknown: d18, ...u17 }) {
  e33 = te3(e33, f25), o26 === void 0 && (o26 = S18(t14, e33, i20));
  let l19;
  if (l13.get(i20) === s18) l19 = T17(t14), n17 = n17 === void 0 ? U13(l19) : i14(n17, P13);
  else if (l13.get(i20) === p13 && (n17 === void 0 && (f25 === "ordinal" || f25 === a15) && (n17 = We4(o26, r13), n17 !== void 0 && (r13 = void 0)), r13 === void 0 && n17 === void 0 && (r13 = f25 === "ordinal" ? "turbo" : "observable10"), r13 !== void 0)) if (n17 !== void 0) {
    let x23 = je4(r13), w26 = n17[0], I21 = n17[1] - n17[0];
    n17 = ({ length: O15 }) => Tr((R19) => x23(w26 + I21 * R19), O15);
  } else n17 = Te4(r13);
  if (d18 === W11) throw new Error(`implicit unknown on ${i20} scale is not supported`);
  return p15(i20, A14().unknown(d18), t14, {
    ...u17,
    type: f25,
    domain: o26,
    range: n17,
    hint: l19
  });
}
function k15(i20, t14, { align: f25 = 0.5, padding: e33 = 0.5, ...o26 }) {
  return b15(Sn3().align(f25).padding(e33), t14, o26, i20);
}
function nn6(i20, t14, { align: f25 = 0.5, padding: e33 = 0.1, paddingInner: o26 = e33, paddingOuter: n17 = i20 === "fx" || i20 === "fy" ? 0 : e33, ...r13 }) {
  return b15(E18().align(f25).paddingInner(o26).paddingOuter(n17), t14, r13, i20);
}
function b15(i20, t14, f25, e33) {
  let { round: o26 } = f25;
  return o26 !== void 0 && i20.round(o26 = !!o26), i20 = p15(e33, i20, t14, f25), i20.round = o26, i20;
}
function S18(i20, t14, f25) {
  let e33 = new o2();
  for (let { value: o26, domain: n17 } of i20) {
    if (n17 !== void 0) return n17();
    if (o26 !== void 0) for (let r13 of o26) e33.add(r13);
  }
  if (t14 !== void 0) {
    let [o26, n17] = E(e33).map(t14.floor, t14);
    return t14.range(o26, t14.offset(n17));
  }
  if (e33.size > 1e4 && l13.get(f25) === t10) throw new Error(`implicit ordinal domain of ${f25} scale has more than 10,000 values`);
  return L(e33, u9);
}
function s19(i20, t14) {
  let f25;
  for (let { hint: e33 } of i20) {
    let o26 = e33?.[t14];
    if (o26 !== void 0) {
      if (f25 === void 0) f25 = o26;
      else if (f25 !== o26) return;
    }
  }
  return f25;
}
function T17(i20) {
  return {
    fill: s19(i20, "fill"),
    stroke: s19(i20, "stroke")
  };
}
function U13(i20) {
  return en4(i20.fill) ? Zn2 : mn4;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/scales.mjs
function Ge4(e33, { label: n17, inset: t14 = 0, insetTop: r13 = t14, insetRight: i20 = t14, insetBottom: a19 = t14, insetLeft: c23 = t14, round: o26, nice: u17, clamp: l19, zero: f25, align: s24, padding: U21, projection: X22, facet: { label: _19 = n17 } = {}, ...G19 } = {}) {
  let M22 = {};
  for (let [d18, D18] of e33) {
    let R19 = G19[d18], g18 = Q16(d18, D18, {
      round: l13.get(d18) === t10 ? o26 : void 0,
      nice: u17,
      clamp: l19,
      zero: f25,
      align: s24,
      padding: U21,
      projection: X22,
      ...R19
    });
    if (g18) {
      let { label: L25 = d18 === "fx" || d18 === "fy" ? _19 : n17, percent: H23, transform: w26, inset: m22, insetTop: J21 = m22 !== void 0 ? m22 : d18 === "y" ? r13 : 0, insetRight: K22 = m22 !== void 0 ? m22 : d18 === "x" ? i20 : 0, insetBottom: Z19 = m22 !== void 0 ? m22 : d18 === "y" ? a19 : 0, insetLeft: V19 = m22 !== void 0 ? m22 : d18 === "x" ? c23 : 0 } = R19 || {};
      if (w26 == null) w26 = void 0;
      else if (typeof w26 != "function") throw new Error("invalid scale transform; not a function");
      g18.percent = !!H23, g18.label = L25 === void 0 ? Oe5(D18, g18) : L25, g18.transform = w26, d18 === "x" || d18 === "fx" ? (g18.insetLeft = +V19, g18.insetRight = +K22) : (d18 === "y" || d18 === "fy") && (g18.insetTop = +J21, g18.insetBottom = +Z19), M22[d18] = g18;
    }
  }
  return M22;
}
function He3(e33) {
  let n17 = {}, t14 = {
    scales: n17
  };
  for (let [r13, i20] of Object.entries(e33)) {
    let { scale: a19, type: c23, interval: o26, label: u17 } = i20;
    n17[r13] = A17(i20), t14[r13] = a19, a19.type = c23, o26 != null && (a19.interval = o26), u17 != null && (a19.label = u17);
  }
  return t14;
}
function Je5(e33, n17) {
  let { x: t14, y: r13, fx: i20, fy: a19 } = e33, c23 = i20 || a19 ? N15(n17) : n17;
  i20 && E20(i20, c23), a19 && Y14(a19, c23);
  let o26 = i20 || a19 ? qe4(e33, n17) : n17;
  t14 && E20(t14, o26), r13 && Y14(r13, o26);
}
function Oe5(e33 = [], n17) {
  let t14;
  for (let { label: r13 } of e33) if (r13 !== void 0) {
    if (t14 === void 0) t14 = r13;
    else if (t14 !== r13) return;
  }
  if (t14 !== void 0) return !S19(n17) && n17.percent && (t14 = `${t14} (%)`), {
    inferred: true,
    toString: () => t14
  };
}
function Ke5(e33) {
  return Math.sign(i12(e33.domain())) * Math.sign(i12(e33.range()));
}
function N15(e33) {
  let { marginTop: n17, marginRight: t14, marginBottom: r13, marginLeft: i20, width: a19, height: c23, facet: { marginTop: o26, marginRight: u17, marginBottom: l19, marginLeft: f25 } } = e33;
  return {
    marginTop: Math.max(n17, o26),
    marginRight: Math.max(t14, u17),
    marginBottom: Math.max(r13, l19),
    marginLeft: Math.max(i20, f25),
    width: a19,
    height: c23
  };
}
function qe4({ fx: e33, fy: n17 }, t14) {
  let { marginTop: r13, marginRight: i20, marginBottom: a19, marginLeft: c23, width: o26, height: u17 } = N15(t14);
  return {
    marginTop: r13,
    marginRight: i20,
    marginBottom: a19,
    marginLeft: c23,
    width: e33 ? e33.scale.bandwidth() + c23 + i20 : o26,
    height: n17 ? n17.scale.bandwidth() + r13 + a19 : u17,
    facet: {
      width: o26,
      height: u17
    }
  };
}
function E20(e33, n17) {
  if (e33.range === void 0) {
    let { insetLeft: t14, insetRight: r13 } = e33, { width: i20, marginLeft: a19 = 0, marginRight: c23 = 0 } = n17, o26 = a19 + t14, u17 = i20 - c23 - r13;
    e33.range = [
      o26,
      Math.max(o26, u17)
    ], S19(e33) || (e33.range = F18(e33)), e33.scale.range(e33.range);
  }
  W14(e33);
}
function Y14(e33, n17) {
  if (e33.range === void 0) {
    let { insetTop: t14, insetBottom: r13 } = e33, { height: i20, marginTop: a19 = 0, marginBottom: c23 = 0 } = n17, o26 = a19 + t14, u17 = i20 - c23 - r13;
    e33.range = [
      Math.max(o26, u17),
      o26
    ], S19(e33) ? e33.range.reverse() : e33.range = F18(e33), e33.scale.range(e33.range);
  }
  W14(e33);
}
function W14(e33) {
  e33.round === void 0 && je5(e33) && Be4(e33) <= 30 && e33.scale.round(true);
}
function Be4({ scale: e33 }) {
  let n17 = e33.domain().length, [t14, r13] = e33.range(), i20 = e33.paddingInner ? e33.paddingInner() : 1, a19 = e33.paddingOuter ? e33.paddingOuter() : e33.padding(), c23 = n17 - i20, o26 = Math.abs(r13 - t14) / Math.max(1, c23 + a19 * 2);
  return (o26 - Math.floor(o26)) * c23;
}
function F18(e33) {
  let n17 = e33.scale.domain().length + Ye3(e33);
  if (!(n17 > 2)) return e33.range;
  let [t14, r13] = e33.range;
  return Array.from({
    length: n17
  }, (i20, a19) => t14 + a19 / (n17 - 1) * (r13 - t14));
}
function Q16(e33, n17 = [], t14 = {}) {
  let r13 = Ee7(e33, n17, t14);
  if (t14.type === void 0 && t14.domain === void 0 && t14.range === void 0 && t14.interval == null && e33 !== "fx" && e33 !== "fy" && S19({
    type: r13
  })) {
    let i20 = n17.map(({ value: a19 }) => a19).filter((a19) => a19 !== void 0);
    i20.some(b13) ? o24(`Warning: some data associated with the ${e33} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${h14(r13)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e33} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e33} scale to "${h14(r13)}".`) : i20.some(He2) ? o24(`Warning: some data associated with the ${e33} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${h14(r13)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e33} scale to "${h14(r13)}".`) : i20.some(Qe2) && o24(`Warning: some data associated with the ${e33} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${h14(r13)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e33} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e33} scale to "${h14(r13)}".`);
  }
  switch (t14.type = r13, r13) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      t14 = b16(n17, t14, Ce4);
      break;
    case "identity":
      switch (l13.get(e33)) {
        case t10:
          t14 = b16(n17, t14, Ce4);
          break;
        case s18:
          t14 = b16(n17, t14, Pe4);
          break;
      }
      break;
    case "utc":
    case "time":
      t14 = b16(n17, t14, K12);
      break;
  }
  switch (r13) {
    case "diverging":
      return _13(e33, n17, t14);
    case "diverging-sqrt":
      return rr4(e33, n17, t14);
    case "diverging-pow":
      return F17(e33, n17, t14);
    case "diverging-log":
      return tr2(e33, n17, t14);
    case "diverging-symlog":
      return nr2(e33, n17, t14);
    case "categorical":
    case "ordinal":
    case a15:
      return g11(e33, n17, t14);
    case "cyclical":
    case "sequential":
    case "linear":
      return Qe4(e33, n17, t14);
    case "sqrt":
      return Me4(e33, n17, t14);
    case "threshold":
      return _12(e33, n17, t14);
    case "quantile":
      return $e5(e33, n17, t14);
    case "quantize":
      return ze5(e33, n17, t14);
    case "pow":
      return he6(e33, n17, t14);
    case "log":
      return Ee6(e33, n17, t14);
    case "symlog":
      return Pe3(e33, n17, t14);
    case "utc":
      return f19(e33, n17, t14);
    case "time":
      return u12(e33, n17, t14);
    case "point":
      return k15(e33, n17, t14);
    case "band":
      return nn6(e33, n17, t14);
    case "identity":
      return Ae5(e33);
    case void 0:
      return;
    default:
      throw new Error(`unknown scale type: ${r13}`);
  }
}
function h14(e33) {
  return typeof e33 == "symbol" ? e33.description : e33;
}
function j13(e33) {
  return typeof e33 == "string" ? `${e33}`.toLowerCase() : e33;
}
var P16 = {
  toString: () => "projection"
};
function Ee7(e33, n17, { type: t14, domain: r13, range: i20, scheme: a19, pivot: c23, projection: o26 }) {
  if (t14 = j13(t14), e33 === "fx" || e33 === "fy") return "band";
  (e33 === "x" || e33 === "y") && o26 != null && (t14 = P16);
  for (let f25 of n17) {
    let s24 = j13(f25.type);
    if (s24 !== void 0) {
      if (t14 === void 0) t14 = s24;
      else if (t14 !== s24) throw new Error(`scale incompatible with channel: ${t14} !== ${s24}`);
    }
  }
  if (t14 === P16) return;
  if (t14 !== void 0) return t14;
  if (r13 === void 0 && !n17.some(({ value: f25 }) => f25 !== void 0)) return;
  let u17 = l13.get(e33);
  if (u17 === r11) return "sqrt";
  if (u17 === n14 || u17 === e30) return "linear";
  if (u17 === s18) return "ordinal";
  let l19 = (r13 ?? i20)?.length;
  if (l19 < 2 || l19 > 2) return x16(u17);
  if (r13 !== void 0) {
    if (Ve4(r13)) return x16(u17);
    if (b13(r13)) return "utc";
  } else {
    let f25 = n17.map(({ value: s24 }) => s24).filter((s24) => s24 !== void 0);
    if (f25.some(Ve4)) return x16(u17);
    if (f25.some(b13)) return "utc";
  }
  if (u17 === p13) {
    if (c23 != null || Fe4(a19)) return "diverging";
    if (Ve5(a19)) return "categorical";
  }
  return "linear";
}
function x16(e33) {
  switch (e33) {
    case t10:
      return "point";
    case p13:
      return a15;
    default:
      return "ordinal";
  }
}
function S19({ type: e33 }) {
  return e33 === "ordinal" || e33 === "point" || e33 === "band" || e33 === a15;
}
function Ye3({ type: e33 }) {
  return e33 === "threshold";
}
function je5({ type: e33 }) {
  return e33 === "point" || e33 === "band";
}
function ke5(e33) {
  if (e33 === void 0) return true;
  let n17 = e33.domain(), t14 = e33(n17[0]);
  for (let r13 = 1, i20 = n17.length; r13 < i20; ++r13) if (e33(n17[r13]) - t14) return false;
  return true;
}
function b16(e33, { domain: n17, ...t14 }, r13) {
  for (let i20 of e33) i20.value !== void 0 && (n17 === void 0 && (n17 = i20.value?.domain), i20.value = r13(i20.value));
  return {
    domain: n17 === void 0 ? n17 : r13(n17),
    ...t14
  };
}
function Pe4(e33) {
  return i14(e33, P13);
}
function tt8(e33) {
  return (n17) => {
    if (!l13.has(n17 = `${n17}`)) throw new Error(`unknown scale: ${n17}`);
    return e33[n17];
  };
}
function A17({ scale: e33, type: n17, domain: t14, range: r13, interpolate: i20, interval: a19, transform: c23, percent: o26, pivot: u17 }) {
  if (n17 === "identity") return {
    type: "identity",
    apply: (f25) => f25,
    invert: (f25) => f25
  };
  let l19 = e33.unknown ? e33.unknown() : void 0;
  return {
    type: n17,
    domain: Oe4(t14),
    ...r13 !== void 0 && {
      range: Oe4(r13)
    },
    ...c23 !== void 0 && {
      transform: c23
    },
    ...o26 && {
      percent: o26
    },
    ...l19 !== void 0 && {
      unknown: l19
    },
    ...a19 !== void 0 && {
      interval: a19
    },
    ...i20 !== void 0 && {
      interpolate: i20
    },
    ...e33.clamp && {
      clamp: e33.clamp()
    },
    ...u17 !== void 0 && {
      pivot: u17,
      symmetric: false
    },
    ...e33.base && {
      base: e33.base()
    },
    ...e33.exponent && {
      exponent: e33.exponent()
    },
    ...e33.constant && {
      constant: e33.constant()
    },
    ...e33.align && {
      align: e33.align(),
      round: e33.round()
    },
    ...e33.padding && (e33.paddingInner ? {
      paddingInner: e33.paddingInner(),
      paddingOuter: e33.paddingOuter()
    } : {
      padding: e33.padding()
    }),
    ...e33.bandwidth && {
      bandwidth: e33.bandwidth(),
      step: e33.step()
    },
    apply: (f25) => e33(f25),
    ...e33.invert && {
      invert: (f25) => e33.invert(f25)
    }
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/facet.mjs
function R14(n17, t14) {
  let { fx: e33, fy: r13 } = Ge4(n17, t14), o26 = e33?.scale.domain(), f25 = r13?.scale.domain();
  return o26 && f25 ? se(o26, f25).map(([c23, a19], b25) => ({
    x: c23,
    y: a19,
    i: b25
  })) : o26 ? o26.map((c23, a19) => ({
    x: c23,
    i: a19
  })) : f25 ? f25.map((c23, a19) => ({
    y: c23,
    i: a19
  })) : void 0;
}
function N16(n17, { x: t14, y: e33 }) {
  return t14 &&= x17(t14), e33 &&= x17(e33), n17.filter(t14 && e33 ? (r13) => t14.has(r13.x) && e33.has(r13.y) : t14 ? (r13) => t14.has(r13.x) : (r13) => e33.has(r13.y)).sort(t14 && e33 ? (r13, o26) => t14.get(r13.x) - t14.get(o26.x) || e33.get(r13.y) - e33.get(o26.y) : t14 ? (r13, o26) => t14.get(r13.x) - t14.get(o26.x) : (r13, o26) => e33.get(r13.y) - e33.get(o26.y));
}
function S20(n17, { fx: t14, fy: e33 }) {
  let r13 = v16(n17), o26 = t14?.value, f25 = e33?.value;
  return t14 && e33 ? fe(r13, (c23) => (c23.fx = o26[c23[0]], c23.fy = f25[c23[0]], c23), (c23) => o26[c23], (c23) => f25[c23]) : t14 ? fe(r13, (c23) => (c23.fx = o26[c23[0]], c23), (c23) => o26[c23]) : fe(r13, (c23) => (c23.fy = f25[c23[0]], c23), (c23) => f25[c23]);
}
function U14(n17, t14, { marginTop: e33, marginLeft: r13 }) {
  let o26 = n17 ? ({ x: c23 }) => n17(c23) - r13 : () => 0, f25 = t14 ? ({ y: c23 }) => t14(c23) - e33 : () => 0;
  return function(c23) {
    this.tagName === "svg" ? (this.setAttribute("x", o26(c23)), this.setAttribute("y", f25(c23))) : this.setAttribute("transform", `translate(${o26(c23)},${f25(c23)})`);
  };
}
function W15(n17) {
  let t14 = [], e33 = new Uint32Array(Ve(n17, (r13) => r13.length));
  for (let r13 of n17) {
    let o26 = 0;
    for (let f25 of n17) r13 !== f25 && (e33.set(f25, o26), o26 += f25.length);
    t14.push(e33.slice(0, o26));
  }
  return t14;
}
var $16 = /* @__PURE__ */ new Map([
  [
    "top",
    m15
  ],
  [
    "right",
    g12
  ],
  [
    "bottom",
    h15
  ],
  [
    "left",
    y16
  ],
  [
    "top-left",
    s20(m15, y16)
  ],
  [
    "top-right",
    s20(m15, g12)
  ],
  [
    "bottom-left",
    s20(h15, y16)
  ],
  [
    "bottom-right",
    s20(h15, g12)
  ],
  [
    "top-empty",
    L17
  ],
  [
    "right-empty",
    T18
  ],
  [
    "bottom-empty",
    M13
  ],
  [
    "left-empty",
    O10
  ],
  [
    "empty",
    k16
  ]
]);
function q20(n17) {
  if (n17 == null) return null;
  let t14 = $16.get(`${n17}`.toLowerCase());
  if (t14) return t14;
  throw new Error(`invalid facet anchor: ${n17}`);
}
var A18 = /* @__PURE__ */ new WeakMap();
function x17(n17) {
  let t14 = A18.get(n17);
  return t14 || A18.set(n17, t14 = new u(i14(n17, (e33, r13) => [
    e33,
    r13
  ]))), t14;
}
function i19(n17, t14) {
  return x17(n17).get(t14);
}
function j14(n17, t14, e33) {
  return t14 = Pe2(t14), e33 = Pe2(e33), n17.find((r13) => Object.is(Pe2(r13.x), t14) && Object.is(Pe2(r13.y), e33));
}
function l15(n17, t14, e33) {
  return j14(n17, t14, e33)?.empty;
}
function m15(n17, { y: t14 }, { y: e33 }) {
  return t14 ? i19(t14, e33) === 0 : true;
}
function h15(n17, { y: t14 }, { y: e33 }) {
  return t14 ? i19(t14, e33) === t14.length - 1 : true;
}
function y16(n17, { x: t14 }, { x: e33 }) {
  return t14 ? i19(t14, e33) === 0 : true;
}
function g12(n17, { x: t14 }, { x: e33 }) {
  return t14 ? i19(t14, e33) === t14.length - 1 : true;
}
function L17(n17, { y: t14 }, { x: e33, y: r13, empty: o26 }) {
  if (o26) return false;
  if (!t14) return;
  let f25 = i19(t14, r13);
  if (f25 > 0) return l15(n17, e33, t14[f25 - 1]);
}
function M13(n17, { y: t14 }, { x: e33, y: r13, empty: o26 }) {
  if (o26) return false;
  if (!t14) return;
  let f25 = i19(t14, r13);
  if (f25 < t14.length - 1) return l15(n17, e33, t14[f25 + 1]);
}
function O10(n17, { x: t14 }, { x: e33, y: r13, empty: o26 }) {
  if (o26) return false;
  if (!t14) return;
  let f25 = i19(t14, e33);
  if (f25 > 0) return l15(n17, t14[f25 - 1], r13);
}
function T18(n17, { x: t14 }, { x: e33, y: r13, empty: o26 }) {
  if (o26) return false;
  if (!t14) return;
  let f25 = i19(t14, e33);
  if (f25 < t14.length - 1) return l15(n17, t14[f25 + 1], r13);
}
function k16(n17, t14, { empty: e33 }) {
  return e33;
}
function s20(n17, t14) {
  return function() {
    return n17.apply(null, arguments) && t14.apply(null, arguments);
  };
}
function z16(n17, { channels: { fx: t14, fy: e33 }, groups: r13 }) {
  return t14 && e33 ? n17.map(({ x: o26, y: f25 }) => r13.get(o26)?.get(f25) ?? []) : t14 ? n17.map(({ x: o26 }) => r13.get(o26) ?? []) : n17.map(({ y: o26 }) => r13.get(o26) ?? []);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/projection.mjs
var G15 = Math.PI;
var m16 = 2 * G15;
var S21 = 0.618;
function ft5({ projection: t14, inset: e33 = 0, insetTop: n17 = e33, insetRight: a19 = e33, insetBottom: o26 = e33, insetLeft: r13 = e33 } = {}, u17) {
  if (t14 == null) return;
  if (typeof t14.stream == "function") return t14;
  let l19, i20, s24 = "frame";
  if (T14(t14)) {
    let c23;
    if ({ type: t14, domain: i20, inset: c23, insetTop: n17 = c23 !== void 0 ? c23 : n17, insetRight: a19 = c23 !== void 0 ? c23 : a19, insetBottom: o26 = c23 !== void 0 ? c23 : o26, insetLeft: r13 = c23 !== void 0 ? c23 : r13, clip: s24 = s24, ...l19 } = t14, t14 == null) return;
  }
  typeof t14 != "function" && ({ type: t14 } = z17(t14));
  let { width: y21, height: g18, marginLeft: h20, marginRight: N20, marginTop: A26, marginBottom: R19 } = u17, E29 = y21 - h20 - N20 - r13 - a19, P20 = g18 - A26 - R19 - n17 - o26;
  if (t14 = t14?.({
    width: E29,
    height: P20,
    clip: s24,
    ...l19
  }), t14 == null) return;
  s24 = at6(s24, h20, A26, y21 - N20, g18 - R19);
  let d18 = h20 + r13, x23 = A26 + n17, C18;
  if (i20 != null) {
    let [[c23, w26], [$22, v23]] = Oi(t14).bounds(i20), p21 = Math.min(E29 / ($22 - c23), P20 / (v23 - w26));
    p21 > 0 ? (d18 -= (p21 * (c23 + $22) - E29) / 2, x23 -= (p21 * (w26 + v23) - P20) / 2, C18 = Bi({
      point(W23, Y20) {
        this.stream.point(W23 * p21 + d18, Y20 * p21 + x23);
      }
    })) : o24("Warning: the projection could not be fit to the specified domain; using the default scale.");
  }
  return C18 ??= d18 === 0 && x23 === 0 ? U15() : Bi({
    point(c23, w26) {
      this.stream.point(c23 + d18, w26 + x23);
    }
  }), {
    stream: (c23) => t14.stream(C18.stream(s24(c23)))
  };
}
function z17(t14) {
  switch (`${t14}`.toLowerCase()) {
    case "albers-usa":
      return f20(_i, 0.7463, 0.4673);
    case "albers":
      return q21(Gr, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return f20(bi, 4, 4);
    case "azimuthal-equidistant":
      return f20(no, m16, m16);
    case "conic-conformal":
      return q21(ro, m16, m16);
    case "conic-equal-area":
      return q21(Kn2, 6.1702, 2.9781);
    case "conic-equidistant":
      return q21(io, 7.312, 3.6282);
    case "equal-earth":
      return f20(uo, 5.4133, 2.6347);
    case "equirectangular":
      return f20(eo, m16, G15);
    case "gnomonic":
      return f20(ao, 3.4641, 3.4641);
    case "identity":
      return {
        type: U15
      };
    case "reflect-y":
      return {
        type: ot5
      };
    case "mercator":
      return f20(to, m16, m16);
    case "orthographic":
      return f20(co, 2, 2);
    case "stereographic":
      return f20(po, 2, 2);
    case "transverse-mercator":
      return f20(so, m16, m16);
    default:
      throw new Error(`unknown projection type: ${t14}`);
  }
}
function at6(t14, e33, n17, a19, o26) {
  if (t14 === false || t14 == null || typeof t14 == "number") return (r13) => r13;
  switch (t14 === true && (t14 = "frame"), `${t14}`.toLowerCase()) {
    case "frame":
      return yn2(e33, n17, a19, o26);
    default:
      throw new Error(`unknown projection clip type: ${t14}`);
  }
}
function f20(t14, e33, n17) {
  return {
    type: ({ width: a19, height: o26, rotate: r13, precision: u17 = 0.15, clip: l19 }) => {
      let i20 = t14();
      return u17 != null && i20.precision?.(u17), r13 != null && i20.rotate?.(r13), typeof l19 == "number" && i20.clipAngle?.(l19), a19 != null && (i20.scale(Math.min(a19 / e33, o26 / n17)), i20.translate([
        a19 / 2,
        o26 / 2
      ])), i20;
    },
    aspectRatio: n17 / e33
  };
}
function q21(t14, e33, n17) {
  let { type: a19, aspectRatio: o26 } = f20(t14, e33, n17);
  return {
    type: (r13) => {
      let { parallels: u17, domain: l19, width: i20, height: s24 } = r13, y21 = a19(r13);
      return u17 != null && (y21.parallels(u17), l19 === void 0 && i20 != null && y21.fitSize([
        i20,
        s24
      ], {
        type: "Sphere"
      })), y21;
    },
    aspectRatio: o26
  };
}
var U15 = Z12({
  stream: (t14) => t14
});
var ot5 = Z12(Bi({
  point(t14, e33) {
    this.stream.point(t14, -e33);
  }
}));
function it5(t14, e33, n17, a19) {
  let o26 = n17[t14], r13 = n17[e33], u17 = o26.length, l19 = n17[t14] = new Float64Array(u17).fill(NaN), i20 = n17[e33] = new Float64Array(u17).fill(NaN), s24, y21 = a19.stream({
    point(g18, h20) {
      l19[s24] = g18, i20[s24] = h20;
    }
  });
  for (s24 = 0; s24 < u17; ++s24) y21.point(o26[s24], r13[s24]);
}
function mt6({ projection: t14 } = {}) {
  return t14 == null ? false : typeof t14.stream == "function" ? true : (T14(t14) && (t14 = t14.type), t14 != null);
}
function yt6(t14) {
  if (typeof t14?.stream == "function") return S21;
  if (T14(t14)) {
    let e33, n17;
    if ({ domain: e33, type: t14, ...n17 } = t14, e33 != null && t14 != null) {
      let a19 = typeof t14 == "string" ? z17(t14).type : t14, [[o26, r13], [u17, l19]] = Oi(a19({
        ...n17,
        width: 100,
        height: 100
      })).bounds(e33), i20 = (l19 - r13) / (u17 - o26);
      return i20 && isFinite(i20) ? i20 < 0.2 ? 0.2 : i20 > 5 ? 5 : i20 : S21;
    }
  }
  if (t14 != null) {
    if (typeof t14 != "function") {
      let { aspectRatio: e33 } = z17(t14);
      if (e33) return e33;
    }
    return S21;
  }
}
function pt5(t14) {
  let e33 = [], n17 = [], a19 = {
    scale: "x",
    value: e33
  }, o26 = {
    scale: "y",
    value: n17
  }, r13 = {
    point(u17, l19) {
      e33.push(u17), n17.push(l19);
    },
    lineStart() {
    },
    lineEnd() {
    },
    polygonStart() {
    },
    polygonEnd() {
    },
    sphere() {
    }
  };
  for (let u17 of t14.value) K7(u17, r13);
  return [
    a19,
    o26
  ];
}
function gt9({ x: t14, y: e33 }) {
  if (t14 || e33) return t14 ??= (n17) => n17, e33 ??= (n17) => n17, Bi({
    point(n17, a19) {
      this.stream.point(t14(n17), e33(a19));
    }
  });
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/context.mjs
function m17(e33 = {}) {
  let { document: t14 = typeof globalThis < "u" ? globalThis.document : void 0, clip: n17 } = e33;
  return {
    document: t14,
    clip: un5(n17)
  };
}
function u13(e33, { document: t14 }) {
  return M2(d(e33).call(t14.documentElement));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/style.mjs
var E21 = (typeof globalThis < "u" ? globalThis.devicePixelRatio > 1 : typeof it > "u") ? 0 : 0.5;
var gt10 = 0;
function T19() {
  return `plot-clip-${++gt10}`;
}
function Bt4(t14, { title: i20, href: e33, ariaLabel: r13, ariaDescription: o26, ariaHidden: a19, target: f25, fill: s24, fillOpacity: d18, stroke: u17, strokeWidth: l19, strokeOpacity: c23, strokeLinejoin: n17, strokeLinecap: v23, strokeMiterlimit: g18, strokeDasharray: A26, strokeDashoffset: B19, opacity: L25, mixBlendMode: S27, imageFilter: V19, paintOrder: $22, pointerEvents: Z19, shapeRendering: _19, channels: N20 }, { ariaLabel: q29, fill: b25 = "currentColor", fillOpacity: H23, stroke: y21 = "none", strokeOpacity: U21, strokeWidth: Y20, strokeLinecap: J21, strokeLinejoin: K22, strokeMiterlimit: Q24, paintOrder: X22 }) {
  b25 === null && (s24 = null, d18 = null), y21 === null && (u17 = null, c23 = null), en4(b25) ? !en4(y21) && (!en4(s24) || N20?.fill) && (y21 = "none") : en4(y21) && (!en4(u17) || N20?.stroke) && (b25 = "none");
  let [F28, z29] = g8(s24, b25), [tt10, et7] = Ie4(d18, H23), [nt5, D18] = g8(u17, y21), [rt9, ot10] = Ie4(c23, U21), [at13, pt10] = Ie4(L25);
  fe5(D18) || (l19 === void 0 && (l19 = Y20), v23 === void 0 && (v23 = J21), n17 === void 0 && (n17 = K22), g18 === void 0 && !nn4(n17) && (g18 = Q24), !fe5(z29) && $22 === void 0 && ($22 = X22));
  let [lt10, ft12] = Ie4(l19);
  return b25 !== null && (t14.fill = h16(z29, "currentColor"), t14.fillOpacity = x18(et7, 1)), y21 !== null && (t14.stroke = h16(D18, "none"), t14.strokeWidth = x18(ft12, 1), t14.strokeOpacity = x18(ot10, 1), t14.strokeLinejoin = h16(n17, "miter"), t14.strokeLinecap = h16(v23, "butt"), t14.strokeMiterlimit = x18(g18, 4), t14.strokeDasharray = h16(A26, "none"), t14.strokeDashoffset = h16(B19, "0")), t14.target = xe4(f25), t14.ariaLabel = xe4(q29), t14.ariaDescription = xe4(o26), t14.ariaHidden = xe4(a19), t14.opacity = x18(pt10, 1), t14.mixBlendMode = h16(S27, "normal"), t14.imageFilter = h16(V19, "none"), t14.paintOrder = h16($22, "normal"), t14.pointerEvents = h16(Z19, "auto"), t14.shapeRendering = h16(_19, "auto"), {
    title: {
      value: i20,
      optional: true,
      filter: null
    },
    href: {
      value: e33,
      optional: true,
      filter: null
    },
    ariaLabel: {
      value: r13,
      optional: true,
      filter: null
    },
    fill: {
      value: F28,
      scale: "auto",
      optional: true
    },
    fillOpacity: {
      value: tt10,
      scale: "auto",
      optional: true
    },
    stroke: {
      value: nt5,
      scale: "auto",
      optional: true
    },
    strokeOpacity: {
      value: rt9,
      scale: "auto",
      optional: true
    },
    strokeWidth: {
      value: lt10,
      optional: true
    },
    opacity: {
      value: at13,
      scale: "auto",
      optional: true
    }
  };
}
function wt6(t14, i20) {
  i20 && t14.filter((e33) => c14(i20[e33])).append("title").call(Ct4, i20);
}
function xt7(t14, i20) {
  i20 && t14.filter(([e33]) => c14(i20[e33])).append("title").call(vt6, i20);
}
function Ct4(t14, i20) {
  i20 && t14.text((e33) => F16(i20[e33]));
}
function vt6(t14, i20) {
  i20 && t14.text(([e33]) => F16(i20[e33]));
}
function Lt3(t14, { target: i20, tip: e33 }, { ariaLabel: r13, title: o26, fill: a19, fillOpacity: f25, stroke: s24, strokeOpacity: d18, strokeWidth: u17, opacity: l19, href: c23 }) {
  r13 && p16(t14, "aria-label", (n17) => r13[n17]), a19 && p16(t14, "fill", (n17) => a19[n17]), f25 && p16(t14, "fill-opacity", (n17) => f25[n17]), s24 && p16(t14, "stroke", (n17) => s24[n17]), d18 && p16(t14, "stroke-opacity", (n17) => d18[n17]), u17 && p16(t14, "stroke-width", (n17) => u17[n17]), l19 && p16(t14, "opacity", (n17) => l19[n17]), c23 && j15(t14, (n17) => c23[n17], i20), e33 || wt6(t14, o26);
}
function St5(t14, { target: i20, tip: e33 }, { ariaLabel: r13, title: o26, fill: a19, fillOpacity: f25, stroke: s24, strokeOpacity: d18, strokeWidth: u17, opacity: l19, href: c23 }) {
  r13 && p16(t14, "aria-label", ([n17]) => r13[n17]), a19 && p16(t14, "fill", ([n17]) => a19[n17]), f25 && p16(t14, "fill-opacity", ([n17]) => f25[n17]), s24 && p16(t14, "stroke", ([n17]) => s24[n17]), d18 && p16(t14, "stroke-opacity", ([n17]) => d18[n17]), u17 && p16(t14, "stroke-width", ([n17]) => u17[n17]), l19 && p16(t14, "opacity", ([n17]) => l19[n17]), c23 && j15(t14, ([n17]) => c23[n17], i20), e33 || xt7(t14, o26);
}
function Ot3({ ariaLabel: t14, title: i20, fill: e33, fillOpacity: r13, stroke: o26, strokeOpacity: a19, strokeWidth: f25, opacity: s24, href: d18 }, { tip: u17 }) {
  return [
    t14,
    u17 ? void 0 : i20,
    e33,
    r13,
    o26,
    a19,
    f25,
    s24,
    d18
  ].filter((l19) => l19 !== void 0);
}
function $t4(t14, i20, e33) {
  let r13 = P(t14, (o26) => i20[o26]);
  return e33 === void 0 && r13.size > 1 + t14.length >> 1 && o24("Warning: the implicit z channel has high cardinality. This may occur when the fill or stroke channel is associated with quantitative data rather than ordinal or categorical data. You can suppress this warning by setting the z option explicitly; if this data represents a single series, set z to null."), r13.values();
}
function* Vt5(t14, i20, e33, r13) {
  let { z: o26 } = e33, { z: a19 } = r13, f25 = Ot3(r13, e33), s24 = [
    ...i20,
    ...f25
  ];
  for (let d18 of a19 ? $t4(t14, a19, o26) : [
    t14
  ]) {
    let u17, l19;
    t: for (let c23 of d18) {
      for (let n17 of s24) if (!i11(n17[c23])) {
        l19 && l19.push(-1);
        continue t;
      }
      if (u17 === void 0) {
        l19 && (yield l19), u17 = f25.map((n17) => Pe2(n17[c23])), l19 = [
          c23
        ];
        continue;
      }
      l19.push(c23);
      for (let n17 = 0; n17 < f25.length; ++n17) if (Pe2(f25[n17][c23]) !== u17[n17]) {
        yield l19, u17 = f25.map((g18) => Pe2(g18[c23])), l19 = [
          c23
        ];
        continue t;
      }
    }
    l19 && (yield l19);
  }
}
function mt7(t14, i20, e33, r13) {
  let o26, { clip: a19 = r13.clip } = i20;
  a19 === "frame" ? (t14 = u13("svg:g", r13).each(function() {
    this.appendChild(t14.node()), t14.node = () => this;
  }), o26 = zt5(r13, e33)) : a19 && (o26 = Gt4(a19, r13)), p16(t14, "aria-label", i20.ariaLabel), p16(t14, "aria-description", i20.ariaDescription), p16(t14, "aria-hidden", i20.ariaHidden), p16(t14, "clip-path", o26);
}
function Nt3(t14) {
  let i20 = /* @__PURE__ */ new WeakMap();
  return (e33, r13) => {
    let o26 = i20.get(e33);
    if (!o26) {
      let a19 = T19();
      M2(e33.ownerSVGElement).append("clipPath").attr("id", a19).call(t14, e33, r13), i20.set(e33, o26 = `url(#${a19})`);
    }
    return o26;
  };
}
var zt5 = Nt3((t14, i20, e33) => {
  let { width: r13, height: o26, marginLeft: a19, marginRight: f25, marginTop: s24, marginBottom: d18 } = e33;
  t14.append("rect").attr("x", a19).attr("y", s24).attr("width", r13 - f25 - a19).attr("height", o26 - s24 - d18);
});
var M14 = /* @__PURE__ */ new WeakMap();
var Dt6 = {
  type: "Sphere"
};
function Gt4(t14, i20) {
  let e33, r13;
  if ((e33 = M14.get(i20)) || M14.set(i20, e33 = /* @__PURE__ */ new WeakMap()), t14.type === "Sphere" && (t14 = Dt6), !(r13 = e33.get(t14))) {
    let o26 = T19();
    M2(i20.ownerSVGElement).append("clipPath").attr("id", o26).append("path").attr("d", i20.path()(t14)), e33.set(t14, r13 = `url(#${o26})`);
  }
  return r13;
}
function Zt3(t14, i20, e33, r13) {
  mt7(t14, i20, e33, r13), p16(t14, "class", i20.className), p16(t14, "fill", i20.fill), p16(t14, "fill-opacity", i20.fillOpacity), p16(t14, "stroke", i20.stroke), p16(t14, "stroke-width", i20.strokeWidth), p16(t14, "stroke-opacity", i20.strokeOpacity), p16(t14, "stroke-linejoin", i20.strokeLinejoin), p16(t14, "stroke-linecap", i20.strokeLinecap), p16(t14, "stroke-miterlimit", i20.strokeMiterlimit), p16(t14, "stroke-dasharray", i20.strokeDasharray), p16(t14, "stroke-dashoffset", i20.strokeDashoffset), p16(t14, "shape-rendering", i20.shapeRendering), p16(t14, "filter", i20.imageFilter), p16(t14, "paint-order", i20.paintOrder);
  let { pointerEvents: o26 = r13.pointerSticky === false ? "none" : void 0 } = i20;
  p16(t14, "pointer-events", o26);
}
function _t3(t14, i20) {
  Wt6(t14, "mix-blend-mode", i20.mixBlendMode), p16(t14, "opacity", i20.opacity);
}
function j15(t14, i20, e33) {
  t14.each(function(r13) {
    let o26 = i20(r13);
    if (o26 != null) {
      let a19 = this.ownerDocument.createElementNS(N3.svg, "a");
      a19.setAttribute("fill", "inherit"), a19.setAttributeNS(N3.xlink, "href", o26), e33 != null && a19.setAttribute("target", e33), this.parentNode.insertBefore(a19, this).appendChild(this);
    }
  });
}
function p16(t14, i20, e33) {
  e33 != null && t14.attr(i20, e33);
}
function Wt6(t14, i20, e33) {
  e33 != null && t14.style(i20, e33);
}
function qt3(t14, i20, { x: e33, y: r13 }, o26 = E21, a19 = E21) {
  o26 += i20.dx, a19 += i20.dy, e33?.bandwidth && (o26 += e33.bandwidth() / 2), r13?.bandwidth && (a19 += r13.bandwidth() / 2), (o26 || a19) && t14.attr("transform", `translate(${o26},${a19})`);
}
function h16(t14, i20) {
  if ((t14 = xe4(t14)) !== i20) return t14;
}
function x18(t14, i20) {
  if ((t14 = ke4(t14)) !== i20) return t14;
}
var kt6 = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function Ht5(t14) {
  if (t14 === void 0) return "plot-d6a7b5";
  if (t14 = `${t14}`, !kt6.test(t14)) throw new Error(`invalid class name: ${t14}`);
  return t14;
}
function Ut5(t14, i20) {
  if (typeof i20 == "string") t14.property("style", i20);
  else if (i20 != null) for (let e33 of t14) Object.assign(e33.style, i20);
}
function Yt6({ frameAnchor: t14 }, { width: i20, height: e33, marginTop: r13, marginRight: o26, marginBottom: a19, marginLeft: f25 }) {
  return [
    /left$/.test(t14) ? f25 : /right$/.test(t14) ? i20 - o26 : (f25 + i20 - o26) / 2,
    /^top/.test(t14) ? r13 : /^bottom/.test(t14) ? e33 - a19 : (r13 + e33 - a19) / 2
  ];
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/mark.mjs
var g13 = class {
  constructor(t14, i20 = {}, n17 = {}, e33) {
    let { facet: f25 = "auto", facetAnchor: s24, fx: l19, fy: u17, sort: p21, dx: d18 = 0, dy: y21 = 0, margin: a19 = 0, marginTop: E29 = a19, marginRight: O15 = a19, marginBottom: T21 = a19, marginLeft: z29 = a19, className: $22, clip: C18 = e33?.clip, channels: x23, tip: A26, render: b25 } = n17;
    if (this.data = t14, this.sort = Me3(p21) ? p21 : null, this.initializer = D12(n17).initializer, this.transform = this.initializer ? n17.transform : $13(n17).transform, f25 === null || f25 === false ? this.facet = null : (this.facet = k14(f25 === true ? "include" : f25, "facet", [
      "auto",
      "include",
      "exclude",
      "super"
    ]), this.fx = t14 === ye4 && typeof l19 == "string" ? [
      l19
    ] : l19, this.fy = t14 === ye4 && typeof u17 == "string" ? [
      u17
    ] : u17), this.facetAnchor = q20(s24), i20 = on3(i20), x23 !== void 0 && (i20 = {
      ...X15(x23),
      ...i20
    }), e33 !== void 0 && (i20 = {
      ...Bt4(this, n17, e33),
      ...i20
    }), this.channels = Object.fromEntries(Object.entries(i20).map(([m22, o26]) => {
      if (C13(o26.value)) {
        let { value: c23, label: N20 = o26.label, scale: R19 = o26.scale } = o26.value;
        o26 = {
          ...o26,
          label: N20,
          scale: R19,
          value: c23
        };
      }
      if (t14 === ye4 && typeof o26.value == "string") {
        let { value: c23 } = o26;
        o26 = {
          ...o26,
          value: [
            c23
          ]
        };
      }
      return [
        m22,
        o26
      ];
    }).filter(([m22, { value: o26, optional: c23 }]) => {
      if (o26 != null) return true;
      if (c23) return false;
      throw new Error(`missing channel value: ${m22}`);
    })), this.dx = +d18, this.dy = +y21, this.marginTop = +E29, this.marginRight = +O15, this.marginBottom = +T21, this.marginLeft = +z29, this.clip = un5(C18), this.tip = Y15(A26), this.className = xe4($22), this.facet === "super") {
      if (l19 || u17) throw new Error("super-faceting cannot use fx or fy");
      for (let m22 in this.channels) {
        let { scale: o26 } = i20[m22];
        if (!(o26 !== "x" && o26 !== "y")) throw new Error("super-faceting cannot use x or y");
      }
    }
    b25 != null && (this.render = W16(b25, this.render));
  }
  initialize(t14, i20, n17) {
    let e33 = Se3(this.data);
    t14 === void 0 && e33 != null && (t14 = [
      v16(e33)
    ]);
    let f25 = t14;
    this.transform != null && ({ facets: t14, data: e33 } = this.transform(e33, t14, n17), e33 = Se3(e33)), t14 !== void 0 && (t14.original = f25);
    let s24 = ne6(this.channels, e33);
    return this.sort != null && oe6(e33, t14, s24, i20, this.sort), {
      data: e33,
      facets: t14,
      channels: s24
    };
  }
  filter(t14, i20, n17) {
    for (let e33 in i20) {
      let { filter: f25 = i11 } = i20[e33];
      if (f25 !== null) {
        let s24 = n17[e33];
        t14 = t14.filter((l19) => f25(s24[l19]));
      }
    }
    return t14;
  }
  project(t14, i20, n17) {
    for (let e33 in t14) if (t14[e33].scale === "x" && /^x|x$/.test(e33)) {
      let f25 = e33.replace(/^x|x$/, "y");
      f25 in t14 && t14[f25].scale === "y" && it5(e33, f25, i20, n17.projection);
    }
  }
  scale(t14, i20, n17) {
    let e33 = ie5(t14, i20);
    return n17.projection && this.project(t14, e33, n17), e33;
  }
};
function ot6(...r13) {
  return r13.plot = g13.prototype.plot, r13;
}
function W16(r13, t14) {
  if (r13 == null) return t14 === null ? void 0 : t14;
  if (t14 == null) return r13 === null ? void 0 : r13;
  if (typeof r13 != "function") throw new TypeError(`invalid render transform: ${r13}`);
  if (typeof t14 != "function") throw new TypeError(`invalid render transform: ${t14}`);
  return function(i20, n17, e33, f25, s24, l19) {
    return r13.call(this, i20, n17, e33, f25, s24, (u17, p21, d18, y21, a19) => t14.call(this, u17, p21, d18, y21, a19, l19));
  };
}
function X15(r13) {
  return Object.fromEntries(Object.entries(on3(r13)).map(([t14, i20]) => (i20 = typeof i20 == "string" ? {
    value: i20,
    label: t14
  } : Je3(i20), i20.filter === void 0 && i20.scale == null && (i20 = {
    ...i20,
    filter: null
  }), [
    t14,
    i20
  ])));
}
function Y15(r13) {
  return r13 === true ? "xy" : r13 === false || r13 == null ? null : typeof r13 == "string" ? k14(r13, "tip", [
    "x",
    "y",
    "xy"
  ]) : r13;
}
function ft6(r13, t14) {
  return r13?.tip === true ? {
    ...r13,
    tip: t14
  } : T14(r13?.tip) && r13.tip.pointer === void 0 ? {
    ...r13,
    tip: {
      ...r13.tip,
      pointer: t14
    }
  } : r13;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/interactions/pointer.mjs
var U16 = /* @__PURE__ */ new WeakMap();
function F19(n17, s24, { x: c23, y: d18, px: i20, py: I21, maxRadius: S27 = 40, channels: h20, render: Z19, ..._19 } = {}) {
  return S27 = +S27, i20 != null && (c23 ??= null, h20 = {
    ...h20,
    px: {
      value: i20,
      scale: "x"
    }
  }), I21 != null && (d18 ??= null, h20 = {
    ...h20,
    py: {
      value: I21,
      scale: "y"
    }
  }), {
    x: c23,
    y: d18,
    channels: h20,
    ..._19,
    render: W16(function(f25, P20, E29, a19, y21, $22) {
      y21 = {
        ...y21,
        pointerSticky: false
      };
      let g18 = y21.ownerSVGElement, { data: x23 } = y21.getMarkState(this), o26 = U16.get(g18);
      o26 || U16.set(g18, o26 = {
        sticky: false,
        roots: [],
        renders: []
      });
      let R19 = o26.renders.push(w26) - 1, { x: j26, y: V19, fx: W23, fy: q29 } = P20, z29 = W23 ? W23(f25.fx) - a19.marginLeft : 0, B19 = q29 ? q29(f25.fy) - a19.marginTop : 0;
      j26?.bandwidth && (z29 += j26.bandwidth() / 2), V19?.bandwidth && (B19 += V19.bandwidth() / 2);
      let L25 = f25.fi != null, m22;
      if (L25) {
        let t14 = o26.facetStates;
        t14 || (o26.facetStates = t14 = /* @__PURE__ */ new Map()), m22 = t14.get(this), m22 || t14.set(this, m22 = /* @__PURE__ */ new Map());
      }
      let [X22, Y20] = Yt6(this, a19), { px: G19, py: K22 } = E29, N20 = G19 ? (t14) => G19[t14] : ft7(E29, X22), C18 = K22 ? (t14) => K22[t14] : at7(E29, Y20), l19, k24, D18, A26;
      function H23(t14, e33) {
        if (L25) if (A26 && (A26 = cancelAnimationFrame(A26)), t14 == null) m22.delete(f25.fi);
        else {
          m22.set(f25.fi, e33), A26 = requestAnimationFrame(() => {
            A26 = null;
            for (let [r13, u17] of m22) if (u17 < e33 || u17 === e33 && r13 < f25.fi) {
              t14 = null;
              break;
            }
            w26(t14);
          });
          return;
        }
        w26(t14);
      }
      function w26(t14) {
        if (l19 === t14 && D18 === o26.sticky) return;
        l19 = t14, D18 = y21.pointerSticky = o26.sticky;
        let e33 = l19 == null ? [] : [
          l19
        ];
        L25 && (e33.fx = f25.fx, e33.fy = f25.fy, e33.fi = f25.fi);
        let r13 = $22(e33, P20, E29, a19, y21);
        if (k24) {
          if (L25) {
            let u17 = k24.parentNode, T21 = k24.getAttribute("transform"), p21 = r13.getAttribute("transform");
            T21 ? r13.setAttribute("transform", T21) : r13.removeAttribute("transform"), p21 ? u17.setAttribute("transform", p21) : u17.removeAttribute("transform"), r13.removeAttribute("aria-label"), r13.removeAttribute("aria-description"), r13.removeAttribute("aria-hidden");
          }
          k24.replaceWith(r13);
        }
        if (o26.roots[R19] = k24 = r13, !(l19 == null && m22?.size > 1)) {
          let u17 = l19 == null ? null : s16(x23) ? x23[l19] : x23.get(l19);
          y21.dispatchValue(u17);
        }
        return r13;
      }
      function J21(t14) {
        if (o26.sticky || t14.pointerType === "mouse" && t14.buttons === 1) return;
        let [e33, r13] = q3(t14);
        e33 -= z29, r13 -= B19;
        let u17 = e33 < a19.marginLeft || e33 > a19.width - a19.marginRight ? 1 : n17, T21 = r13 < a19.marginTop || r13 > a19.height - a19.marginBottom ? 1 : s24, p21 = null, M22 = S27 * S27;
        for (let b25 of f25) {
          let v23 = u17 * (N20(b25) - e33), O15 = T21 * (C18(b25) - r13), Q24 = v23 * v23 + O15 * O15;
          Q24 <= M22 && (p21 = b25, M22 = Q24);
        }
        if (p21 != null && (n17 !== 1 || s24 !== 1)) {
          let b25 = N20(p21) - e33, v23 = C18(p21) - r13;
          M22 = b25 * b25 + v23 * v23;
        }
        H23(p21, M22);
      }
      function tt10(t14) {
        t14.pointerType === "mouse" && l19 != null && (o26.sticky && o26.roots.some((e33) => e33?.contains(t14.target)) || (o26.sticky ? (o26.sticky = false, o26.renders.forEach((e33) => e33(null))) : (o26.sticky = true, w26(l19)), t14.stopImmediatePropagation()));
      }
      function et7(t14) {
        t14.pointerType === "mouse" && (o26.sticky || H23(null));
      }
      return g18.addEventListener("pointerenter", J21), g18.addEventListener("pointermove", J21), g18.addEventListener("pointerdown", tt10), g18.addEventListener("pointerleave", et7), w26(null);
    }, Z19)
  };
}
function pt6(n17) {
  return F19(1, 1, n17);
}
function yt7(n17) {
  return F19(1, 0.01, n17);
}
function mt8(n17) {
  return F19(0.01, 1, n17);
}
function ft7({ x1: n17, x2: s24, x: c23 = n17 }, d18) {
  return n17 && s24 ? (i20) => (n17[i20] + s24[i20]) / 2 : c23 ? (i20) => c23[i20] : () => d18;
}
function at7({ y1: n17, y2: s24, y: c23 = n17 }, d18) {
  return n17 && s24 ? (i20) => (n17[i20] + s24[i20]) / 2 : c23 ? (i20) => c23[i20] : () => d18;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/axes.mjs
function e32(n17) {
  return S19(n17) && n17.interval === void 0 ? void 0 : "tabular-nums";
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/legends/ramp.mjs
function at8(k24, A26) {
  let { label: R19 = k24.label, tickSize: v23 = 6, width: o26 = 240, height: s24 = 44 + v23, marginTop: l19 = 18, marginRight: m22 = 0, marginBottom: f25 = 16 + v23, marginLeft: c23 = 0, style: S27, ticks: h20 = (o26 - c23 - m22) / 64, tickFormat: a19, fontVariant: B19 = e32(k24), round: F28 = true, opacity: g18, className: y21 } = A26, $22 = m17(A26);
  y21 = Ht5(y21), g18 = Ie4(g18)[1], a19 === null && (a19 = () => null);
  let d18 = u13("svg", $22).attr("class", `${y21}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", o26).attr("height", s24).attr("viewBox", `0 0 ${o26} ${s24}`).call((t14) => t14.append("style").text(`:where(.${y21}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${y21}-ramp text) {
  white-space: pre;
}`)).call(Ut5, S27), z29 = (t14) => t14.selectAll(".tick line").attr("y1", l19 + f25 - s24), n17, b25 = F28 ? (t14, r13) => t14.rangeRound(r13) : (t14, r13) => t14.range(r13), { type: N20, domain: x23, range: p21, interpolate: u17, scale: C18, pivot: L25 } = k24;
  if (u17) {
    let t14 = p21 === void 0 ? u17 : pr(u17.length === 1 ? Se4(u17) : u17, p21);
    n17 = b25(C18.copy(), Tr(x2(c23, o26 - m22), Math.min(x23.length + (L25 !== void 0), p21 === void 0 ? 1 / 0 : p21.length)));
    let r13 = 256, e33 = $22.document.createElement("canvas");
    e33.width = r13, e33.height = 1;
    let i20 = e33.getContext("2d");
    for (let w26 = 0, V19 = r13 - 1; w26 < r13; ++w26) i20.fillStyle = t14(w26 / V19), i20.fillRect(w26, 0, 1, 1);
    d18.append("image").attr("opacity", g18).attr("x", c23).attr("y", l19).attr("width", o26 - c23 - m22).attr("height", s24 - l19 - f25).attr("preserveAspectRatio", "none").attr("xlink:href", e33.toDataURL());
  } else if (N20 === "threshold") {
    let t14 = x23, r13 = a19 === void 0 ? (e33) => e33 : typeof a19 == "string" ? e8(a19) : a19;
    n17 = b25(C12().domain([
      -1,
      p21.length - 1
    ]), [
      c23,
      o26 - m22
    ]), d18.append("g").attr("fill-opacity", g18).selectAll().data(p21).enter().append("rect").attr("x", (e33, i20) => n17(i20 - 1)).attr("y", l19).attr("width", (e33, i20) => n17(i20) - n17(i20 - 1)).attr("height", s24 - l19 - f25).attr("fill", (e33) => e33), h20 = i14(t14, (e33, i20) => i20), a19 = (e33) => r13(t14[e33], e33);
  } else n17 = b25(E18().domain(x23), [
    c23,
    o26 - m22
  ]), d18.append("g").attr("fill-opacity", g18).selectAll().data(x23).enter().append("rect").attr("x", n17).attr("y", l19).attr("width", Math.max(0, n17.bandwidth() - 1)).attr("height", s24 - l19 - f25).attr("fill", C18), z29 = () => {
  };
  return d18.append("g").attr("transform", `translate(0,${s24 - f25})`).call(q2(n17).ticks(Array.isArray(h20) ? null : h20, typeof a19 == "string" ? a19 : void 0).tickFormat(typeof a19 == "function" ? a19 : void 0).tickSize(v23).tickValues(Array.isArray(h20) ? h20 : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", h16(B19, "normal")).call(z29).call((t14) => t14.select(".domain").remove()), R19 !== void 0 && d18.append("text").attr("x", c23).attr("y", l19 - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(R19), d18.node();
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/math.mjs
var a16 = Math.PI / 180;

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marker.mjs
function j16(t14, { marker: e33, markerStart: r13 = e33, markerMid: n17 = e33, markerEnd: a19 = e33 } = {}) {
  t14.markerStart = m18(r13), t14.markerMid = m18(n17), t14.markerEnd = m18(a19);
}
function m18(t14) {
  if (t14 == null || t14 === false) return null;
  if (t14 === true) return A19;
  if (typeof t14 == "function") return t14;
  switch (`${t14}`.toLowerCase()) {
    case "none":
      return null;
    case "arrow":
      return b17("auto");
    case "arrow-reverse":
      return b17("auto-start-reverse");
    case "dot":
      return z18;
    case "circle":
    case "circle-fill":
      return A19;
    case "circle-stroke":
      return D13;
    case "tick":
      return w19("auto");
    case "tick-x":
      return w19(90);
    case "tick-y":
      return w19(0);
  }
  throw new Error(`invalid marker: ${t14}`);
}
function b17(t14) {
  return (e33, r13) => u13("svg:marker", r13).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", t14).attr("fill", "none").attr("stroke", e33).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((n17) => n17.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function z18(t14, e33) {
  return u13("svg:marker", e33).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", t14).attr("stroke", "none").call((r13) => r13.append("circle").attr("r", 2.5)).node();
}
function A19(t14, e33) {
  return u13("svg:marker", e33).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", t14).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((r13) => r13.append("circle").attr("r", 3)).node();
}
function D13(t14, e33) {
  return u13("svg:marker", e33).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", t14).attr("stroke-width", 1.5).call((r13) => r13.append("circle").attr("r", 3)).node();
}
function w19(t14) {
  return (e33, r13) => u13("svg:marker", r13).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", t14).attr("stroke", e33).call((n17) => n17.append("path").attr("d", "M0,-3v6")).node();
}
var I17 = 0;
function E22(t14, e33, { stroke: r13 }, n17) {
  return W17(t14, e33, r13 && ((a19) => r13[a19]), null, n17);
}
function F20(t14, e33, { stroke: r13, z: n17 }, a19) {
  return W17(t14, e33, r13 && (([o26]) => r13[o26]), n17, a19);
}
var v17 = 1;
var H15 = 2;
function T20(t14, e33) {
  let r13 = new Uint8Array(e33.length), n17 = t14.data().filter((o26) => o26.length > 1), a19 = n17.length;
  for (let o26 = 0, i20 = i15; o26 < a19; ++o26) {
    let l19 = n17[o26];
    if (l19.length > 1) {
      let c23 = l19[0];
      i20 !== (i20 = Pe2(e33[c23])) && (r13[c23] |= v17);
    }
  }
  for (let o26 = a19 - 1, i20 = i15; o26 >= 0; --o26) {
    let l19 = n17[o26];
    if (l19.length > 1) {
      let c23 = l19[0];
      i20 !== (i20 = Pe2(e33[c23])) && (r13[c23] |= H15);
    }
  }
  return ([o26]) => r13[o26];
}
function W17(t14, { markerStart: e33, markerMid: r13, markerEnd: n17, stroke: a19 }, o26 = () => a19, i20, l19) {
  if (!e33 && !r13 && !n17) return;
  let c23 = /* @__PURE__ */ new Map(), u17 = i20 && T20(t14, i20);
  function k24(s24, p21, y21) {
    return function(x23) {
      if (y21 && !y21(x23)) return;
      let h20 = o26(x23), d18 = c23.get(p21);
      d18 || c23.set(p21, d18 = /* @__PURE__ */ new Map());
      let g18 = d18.get(h20);
      if (!g18) {
        let $22 = this.parentNode.insertBefore(p21(h20, l19), this), B19 = `plot-marker-${++I17}`;
        $22.setAttribute("id", B19), d18.set(h20, g18 = `url(#${B19})`);
      }
      this.setAttribute(s24, g18);
    };
  }
  e33 && t14.each(k24("marker-start", e33, u17 && ((s24) => u17(s24) & v17))), r13 && u17 && t14.each(k24("marker-start", r13, (s24) => !(u17(s24) & v17))), r13 && t14.each(k24("marker-mid", r13)), n17 && t14.each(k24("marker-end", n17, u17 && ((s24) => u17(s24) & H15)));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/inset.mjs
function b18({ inset: f25, insetLeft: r13, insetRight: u17, ...d18 } = {}) {
  return [r13, u17] = n16(f25, r13, u17), {
    inset: f25,
    insetLeft: r13,
    insetRight: u17,
    ...d18
  };
}
function c20({ inset: f25, insetTop: r13, insetBottom: u17, ...d18 } = {}) {
  return [r13, u17] = n16(f25, r13, u17), {
    inset: f25,
    insetTop: r13,
    insetBottom: u17,
    ...d18
  };
}
function n16(f25, r13, u17) {
  return f25 === void 0 && r13 === void 0 && u17 === void 0 ? E21 ? [
    1,
    0
  ] : [
    0.5,
    0.5
  ] : [
    r13,
    u17
  ];
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/interval.mjs
function V14(n17, { interval: m22 }) {
  return n17 = {
    ...Je3(n17)
  }, n17.interval = O8(n17.interval === void 0 ? m22 : n17.interval), n17;
}
function b19(n17, m22, t14, d18) {
  let { [n17]: c23, [`${n17}1`]: l19, [`${n17}2`]: u17 } = t14, { value: a19, interval: f25 } = V14(c23, t14);
  if (a19 == null || f25 == null && !d18) return t14;
  let e33 = S14(c23);
  if (f25 == null) {
    let i20, o26 = {
      transform: (X22) => i20 || (i20 = U11(X22, a19)),
      label: e33
    };
    return {
      ...t14,
      [n17]: void 0,
      [`${n17}1`]: l19 === void 0 ? o26 : l19,
      [`${n17}2`]: u17 === void 0 && !(l19 === u17 && d18) ? o26 : u17
    };
  }
  let r13, y21;
  function v23(i20) {
    return y21 !== void 0 && i20 === r13 ? y21 : y21 = i14(U11(r13 = i20, a19), (o26) => f25.floor(o26));
  }
  return m22({
    ...t14,
    [n17]: void 0,
    [`${n17}1`]: l19 === void 0 ? {
      transform: v23,
      label: e33
    } : l19,
    [`${n17}2`]: u17 === void 0 ? {
      transform: (i20) => v23(i20).map((o26) => f25.offset(o26)),
      label: e33
    } : u17
  });
}
function $17(n17, m22, t14) {
  let { [n17]: d18 } = t14, { value: c23, interval: l19 } = V14(d18, t14);
  return c23 == null || l19 == null ? t14 : m22({
    ...t14,
    [n17]: {
      label: S14(d18),
      transform: (u17) => {
        let a19 = i14(U11(u17, c23), (e33) => l19.floor(e33)), f25 = a19.map((e33) => l19.offset(e33));
        return a19.map(b13(a19) ? (e33, r13) => e33 == null || isNaN(e33 = +e33) || (r13 = f25[r13], r13 == null) || isNaN(r13 = +r13) ? void 0 : new Date((e33 + r13) / 2) : (e33, r13) => e33 == null || (r13 = f25[r13], r13 == null) ? NaN : (+e33 + +r13) / 2);
      }
    }
  });
}
function w20(n17 = {}) {
  return b19("x", b18, n17, true);
}
function g14(n17 = {}) {
  return b19("y", c20, n17, true);
}
function h17(n17 = {}) {
  return b19("x", b18, n17);
}
function j17(n17 = {}) {
  return b19("y", c20, n17);
}
function q22(n17 = {}) {
  return $17("x", b18, n17);
}
function z19(n17 = {}) {
  return $17("y", c20, n17);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/rule.mjs
var Z13 = {
  ariaLabel: "rule",
  fill: null,
  stroke: "currentColor"
};
var L18 = class extends g13 {
  constructor(i20, t14 = {}) {
    let { x: a19, y1: n17, y2: e33, inset: l19 = 0, insetTop: u17 = l19, insetBottom: s24 = l19 } = t14;
    super(i20, {
      x: {
        value: a19,
        scale: "x",
        optional: true
      },
      y1: {
        value: n17,
        scale: "y",
        optional: true
      },
      y2: {
        value: e33,
        scale: "y",
        optional: true
      }
    }, ft6(t14, "x"), Z13), this.insetTop = ke4(u17), this.insetBottom = ke4(s24), j16(this, t14);
  }
  render(i20, t14, a19, n17, e33) {
    let { x: l19, y: u17 } = t14, { x: s24, y1: y21, y2: p21 } = a19, { width: f25, height: h20, marginTop: m22, marginRight: g18, marginLeft: x23, marginBottom: v23 } = n17, { insetTop: d18, insetBottom: c23 } = this;
    return u13("svg:g", e33).call(Zt3, this, n17, e33).call(qt3, this, {
      x: s24 && l19
    }, E21, 0).call((T21) => T21.selectAll().data(i20).enter().append("line").call(_t3, this).attr("x1", s24 ? (r13) => s24[r13] : (x23 + f25 - g18) / 2).attr("x2", s24 ? (r13) => s24[r13] : (x23 + f25 - g18) / 2).attr("y1", y21 && !ke5(u17) ? (r13) => y21[r13] + d18 : m22 + d18).attr("y2", p21 && !ke5(u17) ? u17.bandwidth ? (r13) => p21[r13] + u17.bandwidth() - c23 : (r13) => p21[r13] - c23 : h20 - v23 - c23).call(Lt3, this, a19).call(E22, this, a19, e33)).node();
  }
};
var B14 = class extends g13 {
  constructor(i20, t14 = {}) {
    let { x1: a19, x2: n17, y: e33, inset: l19 = 0, insetRight: u17 = l19, insetLeft: s24 = l19 } = t14;
    super(i20, {
      y: {
        value: e33,
        scale: "y",
        optional: true
      },
      x1: {
        value: a19,
        scale: "x",
        optional: true
      },
      x2: {
        value: n17,
        scale: "x",
        optional: true
      }
    }, ft6(t14, "y"), Z13), this.insetRight = ke4(u17), this.insetLeft = ke4(s24), j16(this, t14);
  }
  render(i20, t14, a19, n17, e33) {
    let { x: l19, y: u17 } = t14, { y: s24, x1: y21, x2: p21 } = a19, { width: f25, height: h20, marginTop: m22, marginRight: g18, marginLeft: x23, marginBottom: v23 } = n17, { insetLeft: d18, insetRight: c23 } = this;
    return u13("svg:g", e33).call(Zt3, this, n17, e33).call(qt3, this, {
      y: s24 && u17
    }, 0, E21).call((T21) => T21.selectAll().data(i20).enter().append("line").call(_t3, this).attr("x1", y21 && !ke5(l19) ? (r13) => y21[r13] + d18 : x23 + d18).attr("x2", p21 && !ke5(l19) ? l19.bandwidth ? (r13) => p21[r13] + l19.bandwidth() - c23 : (r13) => p21[r13] - c23 : f25 - g18 - c23).attr("y1", s24 ? (r13) => s24[r13] : (m22 + h20 - v23) / 2).attr("y2", s24 ? (r13) => s24[r13] : (m22 + h20 - v23) / 2).call(Lt3, this, a19).call(E22, this, a19, e33)).node();
  }
};
function P17(o26, i20) {
  let { x: t14 = R13, y: a19, y1: n17, y2: e33, ...l19 } = j17(i20);
  return [n17, e33] = j18(a19, n17, e33), new L18(o26, {
    ...l19,
    x: t14,
    y1: n17,
    y2: e33
  });
}
function Q17(o26, i20) {
  let { y: t14 = R13, x: a19, x1: n17, x2: e33, ...l19 } = h17(i20);
  return [n17, e33] = j18(a19, n17, e33), new B14(o26, {
    ...l19,
    y: t14,
    x1: n17,
    x2: e33
  });
}
function j18(o26, i20, t14) {
  if (o26 == null) {
    if (i20 === void 0) {
      if (t14 !== void 0) return [
        0,
        t14
      ];
    } else if (t14 === void 0) return [
      0,
      i20
    ];
  } else {
    if (i20 === void 0) return t14 === void 0 ? [
      0,
      o26
    ] : [
      o26,
      t14
    ];
    if (t14 === void 0) return [
      o26,
      i20
    ];
  }
  return [
    i20,
    t14
  ];
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/template.mjs
function t13(l19, ...f25) {
  let u17 = f25.length;
  for (let e33 = 0, o26 = true; e33 < u17; ++e33) typeof f25[e33] != "function" && (o26 && (l19 = l19.slice(), o26 = false), l19.splice(e33, 2, l19[e33] + f25[e33] + l19[e33 + 1]), f25.splice(e33, 1), --e33, --u17);
  return (e33) => {
    let o26 = l19[0];
    for (let c23 = 0; c23 < u17; ++c23) o26 += f25[c23](e33) + l19[c23 + 1];
    return o26;
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/text.mjs
var ut8 = {
  ariaLabel: "text",
  strokeLinejoin: "round",
  strokeWidth: 3,
  paintOrder: "stroke"
};
var k17 = "\xAD";
var b20 = class extends g13 {
  constructor(e33, n17 = {}) {
    let { x: o26, y: r13, text: i20 = $11(e33) && Ke3(e33) ? R13 : ge5, frameAnchor: l19, textAnchor: s24 = /right$/i.test(l19) ? "end" : /left$/i.test(l19) ? "start" : "middle", lineAnchor: a19 = /^top/i.test(l19) ? "top" : /^bottom/i.test(l19) ? "bottom" : "middle", lineHeight: c23 = 1, lineWidth: f25 = 1 / 0, textOverflow: d18, monospace: y21, fontFamily: u17 = y21 ? "ui-monospace, monospace" : void 0, fontSize: p21, fontStyle: m22, fontVariant: C18, fontWeight: S27, rotate: h20 } = n17, [N20, P20] = Ie4(h20, 0), [T21, X22] = yt8(p21);
    if (super(e33, {
      x: {
        value: o26,
        scale: "x",
        optional: true
      },
      y: {
        value: r13,
        scale: "y",
        optional: true
      },
      fontSize: {
        value: T21,
        optional: true
      },
      rotate: {
        value: Ye2(N20),
        optional: true
      },
      text: {
        value: i20,
        filter: c14,
        optional: true
      }
    }, n17, ut8), this.rotate = P20, this.textAnchor = h16(s24, "middle"), this.lineAnchor = k14(a19, "lineAnchor", [
      "top",
      "middle",
      "bottom"
    ]), this.lineHeight = +c23, this.lineWidth = +f25, this.textOverflow = ft8(d18), this.monospace = !!y21, this.fontFamily = xe4(u17), this.fontSize = X22, this.fontStyle = xe4(m22), this.fontVariant = xe4(C18), this.fontWeight = xe4(S27), this.frameAnchor = rn4(l19), !(this.lineWidth >= 0)) throw new Error(`invalid lineWidth: ${f25}`);
    this.splitLines = bt5(this), this.clipLine = At5(this);
  }
  render(e33, n17, o26, r13, i20) {
    let { x: l19, y: s24 } = n17, { x: a19, y: c23, rotate: f25, text: d18, title: y21, fontSize: u17 } = o26, { rotate: p21 } = this, [m22, C18] = Yt6(this, r13);
    return u13("svg:g", i20).call(Zt3, this, r13, i20).call(dt6, this, d18, r13).call(qt3, this, {
      x: a19 && l19,
      y: c23 && s24
    }).call((S27) => S27.selectAll().data(e33).enter().append("text").call(_t3, this).call(pt7, this, d18, y21).attr("transform", t13`translate(${a19 ? (h20) => a19[h20] : m22},${c23 ? (h20) => c23[h20] : C18})${f25 ? (h20) => ` rotate(${f25[h20]})` : p21 ? ` rotate(${p21})` : ""}`).call(p16, "font-size", u17 && ((h20) => u17[h20])).call(Lt3, this, o26)).node();
  }
};
function ft8(t14) {
  return t14 == null ? null : k14(t14, "textOverflow", [
    "clip",
    "ellipsis",
    "clip-start",
    "clip-end",
    "ellipsis-start",
    "ellipsis-middle",
    "ellipsis-end"
  ]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function pt7(t14, e33, n17, o26) {
  if (!n17) return;
  let { lineAnchor: r13, lineHeight: i20, textOverflow: l19, splitLines: s24, clipLine: a19 } = e33;
  t14.each(function(c23) {
    let f25 = s24(F16(n17[c23]) ?? "").map(a19), d18 = f25.length, y21 = r13 === "top" ? 0.71 : r13 === "bottom" ? 1 - d18 : (164 - d18 * 100) / 200;
    if (d18 > 1) {
      let u17 = 0;
      for (let p21 = 0; p21 < d18; ++p21) {
        if (++u17, !f25[p21]) continue;
        let m22 = this.ownerDocument.createElementNS(N3.svg, "tspan");
        m22.setAttribute("x", 0), p21 === u17 - 1 ? m22.setAttribute("y", `${(y21 + p21) * i20}em`) : m22.setAttribute("dy", `${u17 * i20}em`), m22.textContent = f25[p21], this.appendChild(m22), u17 = 0;
      }
    } else y21 && this.setAttribute("y", `${y21 * i20}em`), this.textContent = f25[0];
    if (l19 && !o26 && f25[0] !== n17[c23]) {
      let u17 = this.ownerDocument.createElementNS(N3.svg, "title");
      u17.textContent = n17[c23], this.appendChild(u17);
    }
  });
}
function Ot4(t14, { x: e33, y: n17, ...o26 } = {}) {
  return o26.frameAnchor === void 0 && ([e33, n17] = Ee5(e33, n17)), new b20(t14, {
    ...o26,
    x: e33,
    y: n17
  });
}
function Vt6(t14, { x: e33 = R13, ...n17 } = {}) {
  return new b20(t14, z19({
    ...n17,
    x: e33
  }));
}
function Dt7(t14, { y: e33 = R13, ...n17 } = {}) {
  return new b20(t14, q22({
    ...n17,
    y: e33
  }));
}
function dt6(t14, e33, n17) {
  p16(t14, "text-anchor", e33.textAnchor), p16(t14, "font-family", e33.fontFamily), p16(t14, "font-size", e33.fontSize), p16(t14, "font-style", e33.fontStyle), p16(t14, "font-variant", e33.fontVariant === void 0 ? mt9(n17) : e33.fontVariant), p16(t14, "font-weight", e33.fontWeight);
}
function mt9(t14) {
  return t14 && (We2(t14) || b13(t14)) ? "tabular-nums" : void 0;
}
var ht6 = /* @__PURE__ */ new Set([
  "inherit",
  "initial",
  "revert",
  "unset",
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
  "larger",
  "smaller"
]);
function yt8(t14) {
  return t14 == null || typeof t14 == "number" ? [
    void 0,
    t14
  ] : typeof t14 != "string" ? [
    t14,
    void 0
  ] : (t14 = t14.trim().toLowerCase(), ht6.has(t14) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(t14) ? [
    void 0,
    t14
  ] : [
    t14,
    void 0
  ]);
}
function xt8(t14, e33, n17) {
  let o26 = [], r13, i20 = 0;
  for (let [l19, s24, a19] of gt11(t14)) {
    if (r13 === void 0 && (r13 = l19), i20 > r13 && n17(t14, r13, s24) > e33 && (o26.push(t14.slice(r13, i20) + (t14[i20 - 1] === k17 ? "-" : "")), r13 = l19), a19) {
      o26.push(t14.slice(r13, s24)), r13 = void 0;
      continue;
    }
    i20 = s24;
  }
  return o26;
}
function* gt11(t14) {
  let e33 = 0, n17 = 0, o26 = t14.length;
  for (; n17 < o26; ) {
    let r13 = 1;
    switch (t14[n17]) {
      case k17:
      case "-":
        ++n17, yield [
          e33,
          n17,
          false
        ], e33 = n17;
        break;
      case " ":
        for (yield [
          e33,
          n17,
          false
        ]; t14[++n17] === " "; ) ;
        e33 = n17;
        break;
      case "\r":
        t14[n17 + 1] === `
` && ++r13;
      case `
`:
        yield [
          e33,
          n17,
          true
        ], n17 += r13, e33 = n17;
        break;
      default:
        ++n17;
        break;
    }
  }
  yield [
    e33,
    n17,
    true
  ];
}
var E23 = {
  a: 56,
  b: 63,
  c: 57,
  d: 63,
  e: 58,
  f: 37,
  g: 62,
  h: 60,
  i: 26,
  j: 26,
  k: 55,
  l: 26,
  m: 88,
  n: 60,
  o: 60,
  p: 62,
  q: 62,
  r: 39,
  s: 54,
  t: 38,
  u: 60,
  v: 55,
  w: 79,
  x: 54,
  y: 55,
  z: 55,
  A: 69,
  B: 67,
  C: 73,
  D: 74,
  E: 61,
  F: 58,
  G: 76,
  H: 75,
  I: 28,
  J: 55,
  K: 67,
  L: 58,
  M: 89,
  N: 75,
  O: 78,
  P: 65,
  Q: 78,
  R: 67,
  S: 65,
  T: 65,
  U: 75,
  V: 69,
  W: 98,
  X: 69,
  Y: 67,
  Z: 67,
  0: 64,
  1: 48,
  2: 62,
  3: 64,
  4: 66,
  5: 63,
  6: 65,
  7: 58,
  8: 65,
  9: 65,
  " ": 29,
  "!": 32,
  '"': 49,
  "'": 31,
  "(": 39,
  ")": 39,
  ",": 31,
  "-": 48,
  ".": 31,
  "/": 32,
  ":": 31,
  ";": 31,
  "?": 52,
  "\u2018": 31,
  "\u2019": 31,
  "\u201C": 47,
  "\u201D": 47,
  "\u2026": 82
};
function O11(t14, e33 = 0, n17 = t14.length) {
  let o26 = 0;
  for (let r13 = e33; r13 < n17; r13 = g15(t14, r13)) o26 += E23[t14[r13]] ?? (H16(t14, r13) ? 120 : E23.e);
  return o26;
}
function V15(t14, e33 = 0, n17 = t14.length) {
  let o26 = 0;
  for (let r13 = e33; r13 < n17; r13 = g15(t14, r13)) o26 += H16(t14, r13) ? 126 : 63;
  return o26;
}
function bt5({ monospace: t14, lineWidth: e33, textOverflow: n17 }) {
  if (n17 != null || e33 == 1 / 0) return (i20) => i20.split(/\r\n?|\n/g);
  let o26 = t14 ? V15 : O11, r13 = e33 * 100;
  return (i20) => xt8(i20, r13, o26);
}
function At5({ monospace: t14, lineWidth: e33, textOverflow: n17 }) {
  if (n17 == null || e33 == 1 / 0) return (i20) => i20;
  let o26 = t14 ? V15 : O11, r13 = e33 * 100;
  switch (n17) {
    case "clip-start":
      return (i20) => L19(i20, r13, o26, "");
    case "clip-end":
      return (i20) => F21(i20, r13, o26, "");
    case "ellipsis-start":
      return (i20) => L19(i20, r13, o26, w21);
    case "ellipsis-middle":
      return (i20) => vt7(i20, r13, o26, w21);
    case "ellipsis-end":
      return (i20) => F21(i20, r13, o26, w21);
  }
}
var w21 = "\u2026";
function v18(t14, e33, n17, o26) {
  let r13 = [], i20 = 0;
  for (let l19 = 0, s24 = 0, a19 = t14.length; l19 < a19; l19 = s24) {
    s24 = g15(t14, l19);
    let c23 = n17(t14, l19, s24);
    if (i20 + c23 > e33) {
      for (i20 += o26; i20 > e33 && l19 > 0; ) s24 = l19, l19 = r13.pop(), i20 -= n17(t14, l19, s24);
      return [
        l19,
        e33 - i20
      ];
    }
    i20 += c23, r13.push(l19);
  }
  return [
    -1,
    0
  ];
}
function F21(t14, e33, n17, o26) {
  t14 = t14.trim();
  let r13 = n17(o26), [i20] = v18(t14, e33, n17, r13);
  return i20 < 0 ? t14 : t14.slice(0, i20).trimEnd() + o26;
}
function vt7(t14, e33, n17, o26) {
  t14 = t14.trim();
  let r13 = n17(t14);
  if (r13 <= e33) return t14;
  let i20 = n17(o26) / 2, [l19, s24] = v18(t14, e33 / 2, n17, i20), [a19] = v18(t14, r13 - e33 / 2 - s24 + i20, n17, -i20);
  return a19 < 0 ? o26 : t14.slice(0, l19).trimEnd() + o26 + t14.slice(g15(t14, a19)).trimStart();
}
function L19(t14, e33, n17, o26) {
  t14 = t14.trim();
  let r13 = n17(t14);
  if (r13 <= e33) return t14;
  let i20 = n17(o26), [l19] = v18(t14, r13 - e33 + i20, n17, -i20);
  return l19 < 0 ? o26 : o26 + t14.slice(g15(t14, l19)).trimStart();
}
var W18 = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy;
var M15 = /\p{Extended_Pictographic}/uy;
function g15(t14, e33) {
  return e33 += Ct5(t14, e33) ? 2 : 1, wt7(t14, e33) && (e33 = W18.lastIndex), St6(t14, e33) ? g15(t14, e33 + 1) : e33;
}
function D14(t14, e33) {
  return t14.charCodeAt(e33) < 128;
}
function Ct5(t14, e33) {
  let n17 = t14.charCodeAt(e33);
  if (n17 >= 55296 && n17 < 56320) {
    let o26 = t14.charCodeAt(e33 + 1);
    return o26 >= 56320 && o26 < 57344;
  }
  return false;
}
function St6(t14, e33) {
  return t14.charCodeAt(e33) === 8205;
}
function wt7(t14, e33) {
  return D14(t14, e33) ? false : (W18.lastIndex = e33, W18.test(t14));
}
function H16(t14, e33) {
  return D14(t14, e33) ? false : (M15.lastIndex = e33, M15.test(t14));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/vector.mjs
var x19 = {
  ariaLabel: "vector",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinejoin: "round",
  strokeLinecap: "round"
};
var A20 = 3.5;
var q23 = A20 * 5;
var b21 = {
  draw(t14, r13, o26) {
    let e33 = r13 * o26 / q23;
    t14.moveTo(0, 0), t14.lineTo(0, -r13), t14.moveTo(-e33, e33 - r13), t14.lineTo(0, -r13), t14.lineTo(e33, e33 - r13);
  }
};
var S22 = {
  draw(t14, r13, o26) {
    t14.moveTo(-o26, 0), t14.lineTo(0, -r13), t14.lineTo(o26, 0);
  }
};
var z20 = /* @__PURE__ */ new Map([
  [
    "arrow",
    b21
  ],
  [
    "spike",
    S22
  ]
]);
function B15(t14) {
  return t14 && typeof t14.draw == "function";
}
function G16(t14) {
  if (B15(t14)) return t14;
  let r13 = z20.get(`${t14}`.toLowerCase());
  if (r13) return r13;
  throw new Error(`invalid shape: ${t14}`);
}
var d15 = class extends g13 {
  constructor(r13, o26 = {}) {
    let { x: e33, y: n17, r: i20 = A20, length: c23, rotate: p21, shape: l19 = b21, anchor: h20 = "middle", frameAnchor: s24 } = o26, [m22, u17] = Ie4(c23, 12), [f25, y21] = Ie4(p21, 0);
    super(r13, {
      x: {
        value: e33,
        scale: "x",
        optional: true
      },
      y: {
        value: n17,
        scale: "y",
        optional: true
      },
      length: {
        value: m22,
        scale: "length",
        optional: true
      },
      rotate: {
        value: f25,
        optional: true
      }
    }, o26, x19), this.r = +i20, this.length = u17, this.rotate = y21, this.shape = G16(l19), this.anchor = k14(h20, "anchor", [
      "start",
      "middle",
      "end"
    ]), this.frameAnchor = rn4(s24);
  }
  render(r13, o26, e33, n17, i20) {
    let { x: c23, y: p21 } = o26, { x: l19, y: h20, length: s24, rotate: m22 } = e33, { length: u17, rotate: f25, anchor: y21, shape: w26, r: v23 } = this, [L25, C18] = Yt6(this, n17);
    return u13("svg:g", i20).call(Zt3, this, n17, i20).call(qt3, this, {
      x: l19 && c23,
      y: h20 && p21
    }).call((R19) => R19.selectAll().data(r13).enter().append("path").call(_t3, this).attr("transform", t13`translate(${l19 ? (a19) => l19[a19] : L25},${h20 ? (a19) => h20[a19] : C18})${m22 ? (a19) => ` rotate(${m22[a19]})` : f25 ? ` rotate(${f25})` : ""}${y21 === "start" ? "" : y21 === "end" ? s24 ? (a19) => ` translate(0,${s24[a19]})` : ` translate(0,${u17})` : s24 ? (a19) => ` translate(0,${s24[a19] / 2})` : ` translate(0,${u17 / 2})`}`).attr("d", s24 ? (a19) => {
      let k24 = R7();
      return w26.draw(k24, s24[a19], v23), k24;
    } : (() => {
      let a19 = R7();
      return w26.draw(a19, u17, v23), a19;
    })()).call(Lt3, this, e33)).node();
  }
};
function _14(t14, r13 = {}) {
  let { x: o26 = R13, ...e33 } = r13;
  return new d15(t14, {
    ...e33,
    x: o26
  });
}
function V16(t14, r13 = {}) {
  let { y: o26 = R13, ...e33 } = r13;
  return new d15(t14, {
    ...e33,
    y: o26
  });
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/axis.mjs
function I18(t14, n17) {
  return arguments.length < 2 && !$11(t14) && (n17 = t14, t14 = null), n17 === void 0 && (n17 = {}), [
    t14,
    n17
  ];
}
function A21({ anchor: t14 } = {}, n17) {
  return t14 === void 0 ? n17[0] : k14(t14, "anchor", n17);
}
function tn5(t14) {
  return A21(t14, [
    "left",
    "right"
  ]);
}
function en6(t14) {
  return A21(t14, [
    "right",
    "left"
  ]);
}
function rn6(t14) {
  return A21(t14, [
    "bottom",
    "top"
  ]);
}
function un7(t14) {
  return A21(t14, [
    "top",
    "bottom"
  ]);
}
function pt8() {
  let [t14, n17] = I18(...arguments);
  return on5("y", tn5(n17), t14, n17);
}
function ct5() {
  let [t14, n17] = I18(...arguments);
  return on5("fy", en6(n17), t14, n17);
}
function xt9() {
  let [t14, n17] = I18(...arguments);
  return fn5("x", rn6(n17), t14, n17);
}
function at9() {
  let [t14, n17] = I18(...arguments);
  return fn5("fx", un7(n17), t14, n17);
}
function on5(t14, n17, u17, { color: e33 = "currentColor", opacity: f25 = 1, stroke: o26 = e33, strokeOpacity: r13 = f25, strokeWidth: c23 = 1, fill: s24 = e33, fillOpacity: l19 = f25, textAnchor: i20, textStroke: y21, textStrokeOpacity: T21, textStrokeWidth: v23, tickSize: a19 = t14 === "y" ? 6 : 0, tickPadding: x23, tickRotate: $22, x: h20, margin: m22, marginTop: M22 = m22 === void 0 ? 20 : m22, marginRight: p21 = m22 === void 0 ? n17 === "right" ? 40 : 0 : m22, marginBottom: w26 = m22 === void 0 ? 20 : m22, marginLeft: K22 = m22 === void 0 ? n17 === "left" ? 40 : 0 : m22, label: C18, labelAnchor: d18, labelArrow: g18, labelOffset: L25, ariaLabel: F28 = `${t14}-axis`, ...X22 }) {
  return a19 = ke4(a19), x23 = ke4(x23), $22 = ke4($22), d18 !== void 0 && (d18 = k14(d18, "labelAnchor", [
    "center",
    "top",
    "bottom"
  ])), g18 = xn4(g18), ot6(a19 && !en4(o26) ? _n3(t14, n17, u17, {
    stroke: o26,
    strokeOpacity: r13,
    strokeWidth: c23,
    tickSize: a19,
    tickPadding: x23,
    tickRotate: $22,
    x: h20,
    ariaLabel: F28,
    ...X22
  }) : null, en4(s24) ? null : Gn5(t14, n17, u17, {
    fill: s24,
    fillOpacity: l19,
    stroke: y21,
    strokeOpacity: T21,
    strokeWidth: v23,
    textAnchor: i20,
    tickSize: a19,
    tickPadding: x23,
    tickRotate: $22,
    x: h20,
    marginTop: M22,
    marginRight: p21,
    marginBottom: w26,
    marginLeft: K22,
    ariaLabel: F28,
    ...X22
  }), !en4(s24) && C18 !== null ? Ot4([], dn5({
    fill: s24,
    fillOpacity: l19,
    ...X22
  }, function(gn7, yn6, Tn6, V19, B19) {
    let O15 = V19[t14], { marginTop: _19, marginRight: q29, marginBottom: G19, marginLeft: J21 } = t14 === "y" && B19.inset || B19, b25 = d18 ?? (O15.bandwidth ? "center" : "top"), W23 = L25 ?? (n17 === "right" ? q29 : J21) - 3;
    return b25 === "center" ? (this.textAnchor = void 0, this.lineAnchor = n17 === "right" ? "bottom" : "top", this.frameAnchor = n17, this.rotate = -90) : (this.textAnchor = n17 === "right" ? "end" : "start", this.lineAnchor = b25, this.frameAnchor = `${b25}-${n17}`, this.rotate = 0), this.dy = b25 === "top" ? 3 - _19 : b25 === "bottom" ? G19 - 3 : 0, this.dx = n17 === "right" ? W23 : -W23, this.ariaLabel = `${F28} label`, {
      facets: [
        [
          0
        ]
      ],
      channels: {
        text: {
          value: [
            cn6(t14, O15, {
              anchor: n17,
              label: C18,
              labelAnchor: b25,
              labelArrow: g18
            })
          ]
        }
      }
    };
  })) : null);
}
function fn5(t14, n17, u17, { color: e33 = "currentColor", opacity: f25 = 1, stroke: o26 = e33, strokeOpacity: r13 = f25, strokeWidth: c23 = 1, fill: s24 = e33, fillOpacity: l19 = f25, textAnchor: i20, textStroke: y21, textStrokeOpacity: T21, textStrokeWidth: v23, tickSize: a19 = t14 === "x" ? 6 : 0, tickPadding: x23, tickRotate: $22, y: h20, margin: m22, marginTop: M22 = m22 === void 0 ? n17 === "top" ? 30 : 0 : m22, marginRight: p21 = m22 === void 0 ? 20 : m22, marginBottom: w26 = m22 === void 0 ? n17 === "bottom" ? 30 : 0 : m22, marginLeft: K22 = m22 === void 0 ? 20 : m22, label: C18, labelAnchor: d18, labelArrow: g18, labelOffset: L25, ariaLabel: F28 = `${t14}-axis`, ...X22 }) {
  return a19 = ke4(a19), x23 = ke4(x23), $22 = ke4($22), d18 !== void 0 && (d18 = k14(d18, "labelAnchor", [
    "center",
    "left",
    "right"
  ])), g18 = xn4(g18), ot6(a19 && !en4(o26) ? qn2(t14, n17, u17, {
    stroke: o26,
    strokeOpacity: r13,
    strokeWidth: c23,
    tickSize: a19,
    tickPadding: x23,
    tickRotate: $22,
    y: h20,
    ariaLabel: F28,
    ...X22
  }) : null, en4(s24) ? null : Jn5(t14, n17, u17, {
    fill: s24,
    fillOpacity: l19,
    stroke: y21,
    strokeOpacity: T21,
    strokeWidth: v23,
    textAnchor: i20,
    tickSize: a19,
    tickPadding: x23,
    tickRotate: $22,
    y: h20,
    marginTop: M22,
    marginRight: p21,
    marginBottom: w26,
    marginLeft: K22,
    ariaLabel: F28,
    ...X22
  }), !en4(s24) && C18 !== null ? Ot4([], dn5({
    fill: s24,
    fillOpacity: l19,
    ...X22
  }, function(gn7, yn6, Tn6, V19, B19) {
    let O15 = V19[t14], { marginTop: _19, marginRight: q29, marginBottom: G19, marginLeft: J21 } = t14 === "x" && B19.inset || B19, b25 = d18 ?? (O15.bandwidth ? "center" : "right"), W23 = L25 ?? (n17 === "top" ? _19 : G19) - 3;
    return b25 === "center" ? (this.frameAnchor = n17, this.textAnchor = void 0) : (this.frameAnchor = `${n17}-${b25}`, this.textAnchor = b25 === "right" ? "end" : "start"), this.lineAnchor = n17, this.dy = n17 === "top" ? -W23 : W23, this.dx = b25 === "right" ? q29 - 3 : b25 === "left" ? 3 - J21 : 0, this.ariaLabel = `${F28} label`, {
      facets: [
        [
          0
        ]
      ],
      channels: {
        text: {
          value: [
            cn6(t14, O15, {
              anchor: n17,
              label: C18,
              labelAnchor: b25,
              labelArrow: g18
            })
          ]
        }
      }
    };
  })) : null);
}
function _n3(t14, n17, u17, { strokeWidth: e33 = 1, strokeLinecap: f25 = null, strokeLinejoin: o26 = null, facetAnchor: r13 = n17 + (t14 === "y" ? "-empty" : ""), frameAnchor: c23 = n17, tickSize: s24, inset: l19 = 0, insetLeft: i20 = l19, insetRight: y21 = l19, dx: T21 = 0, y: v23 = t14 === "y" ? void 0 : null, ariaLabel: a19, ...x23 }) {
  return j19(V16, t14, u17, {
    ariaLabel: `${a19} tick`,
    ariaHidden: true
  }, {
    strokeWidth: e33,
    strokeLinecap: f25,
    strokeLinejoin: o26,
    facetAnchor: r13,
    frameAnchor: c23,
    y: v23,
    ...x23,
    dx: n17 === "left" ? +T21 - E21 + +i20 : +T21 + E21 - y21,
    anchor: "start",
    length: s24,
    shape: n17 === "left" ? Sn5 : Pn4
  });
}
function qn2(t14, n17, u17, { strokeWidth: e33 = 1, strokeLinecap: f25 = null, strokeLinejoin: o26 = null, facetAnchor: r13 = n17 + (t14 === "x" ? "-empty" : ""), frameAnchor: c23 = n17, tickSize: s24, inset: l19 = 0, insetTop: i20 = l19, insetBottom: y21 = l19, dy: T21 = 0, x: v23 = t14 === "x" ? void 0 : null, ariaLabel: a19, ...x23 }) {
  return j19(_14, t14, u17, {
    ariaLabel: `${a19} tick`,
    ariaHidden: true
  }, {
    strokeWidth: e33,
    strokeLinejoin: o26,
    strokeLinecap: f25,
    facetAnchor: r13,
    frameAnchor: c23,
    x: v23,
    ...x23,
    dy: n17 === "bottom" ? +T21 - E21 - y21 : +T21 + E21 + +i20,
    anchor: "start",
    length: s24,
    shape: n17 === "bottom" ? Zn3 : zn2
  });
}
function Gn5(t14, n17, u17, { facetAnchor: e33 = n17 + (t14 === "y" ? "-empty" : ""), frameAnchor: f25 = n17, tickSize: o26, tickRotate: r13 = 0, tickPadding: c23 = Math.max(3, 9 - o26) + (Math.abs(r13) > 60 ? 4 * Math.cos(r13 * a16) : 0), text: s24, textAnchor: l19 = Math.abs(r13) > 60 ? "middle" : n17 === "left" ? "end" : "start", lineAnchor: i20 = r13 > 60 ? "top" : r13 < -60 ? "bottom" : "middle", fontVariant: y21, inset: T21 = 0, insetLeft: v23 = T21, insetRight: a19 = T21, dx: x23 = 0, ariaLabel: $22, y: h20 = t14 === "y" ? void 0 : null, ...m22 }) {
  return j19(Dt7, t14, u17, {
    ariaLabel: `${$22} tick label`
  }, {
    facetAnchor: e33,
    frameAnchor: f25,
    text: s24,
    textAnchor: l19,
    lineAnchor: i20,
    fontVariant: y21,
    rotate: r13,
    y: h20,
    ...m22,
    dx: n17 === "left" ? +x23 - o26 - c23 + +v23 : +x23 + +o26 + +c23 - a19
  }, function(M22, p21, w26, K22, C18) {
    y21 === void 0 && (this.fontVariant = pn6(M22)), s24 === void 0 && (C18.text = hn3(M22, p21, w26, K22, n17));
  });
}
function Jn5(t14, n17, u17, { facetAnchor: e33 = n17 + (t14 === "x" ? "-empty" : ""), frameAnchor: f25 = n17, tickSize: o26, tickRotate: r13 = 0, tickPadding: c23 = Math.max(3, 9 - o26) + (Math.abs(r13) >= 10 ? 4 * Math.cos(r13 * a16) : 0), text: s24, textAnchor: l19 = Math.abs(r13) >= 10 ? r13 < 0 ^ n17 === "bottom" ? "start" : "end" : "middle", lineAnchor: i20 = Math.abs(r13) >= 10 ? "middle" : n17 === "bottom" ? "top" : "bottom", fontVariant: y21, inset: T21 = 0, insetTop: v23 = T21, insetBottom: a19 = T21, dy: x23 = 0, x: $22 = t14 === "x" ? void 0 : null, ariaLabel: h20, ...m22 }) {
  return j19(Vt6, t14, u17, {
    ariaLabel: `${h20} tick label`
  }, {
    facetAnchor: e33,
    frameAnchor: f25,
    text: s24 === void 0 ? null : s24,
    textAnchor: l19,
    lineAnchor: i20,
    fontVariant: y21,
    rotate: r13,
    x: $22,
    ...m22,
    dy: n17 === "bottom" ? +x23 + +o26 + +c23 - a19 : +x23 - o26 - c23 + +v23
  }, function(M22, p21, w26, K22, C18) {
    y21 === void 0 && (this.fontVariant = pn6(M22)), s24 === void 0 && (C18.text = hn3(M22, p21, w26, K22, n17));
  });
}
function gt12() {
  let [t14, n17] = I18(...arguments);
  return sn6("y", tn5(n17), t14, n17);
}
function yt9() {
  let [t14, n17] = I18(...arguments);
  return sn6("fy", en6(n17), t14, n17);
}
function Tt5() {
  let [t14, n17] = I18(...arguments);
  return ln4("x", rn6(n17), t14, n17);
}
function $t5() {
  let [t14, n17] = I18(...arguments);
  return ln4("fx", un7(n17), t14, n17);
}
function sn6(t14, n17, u17, { y: e33 = t14 === "y" ? void 0 : null, x: f25 = null, x1: o26 = n17 === "left" ? f25 : null, x2: r13 = n17 === "right" ? f25 : null, ariaLabel: c23 = `${t14}-grid`, ariaHidden: s24 = true, ...l19 }) {
  return j19(Q17, t14, u17, {
    ariaLabel: c23,
    ariaHidden: s24
  }, {
    y: e33,
    x1: o26,
    x2: r13,
    ...mn5(l19)
  });
}
function ln4(t14, n17, u17, { x: e33 = t14 === "x" ? void 0 : null, y: f25 = null, y1: o26 = n17 === "top" ? f25 : null, y2: r13 = n17 === "bottom" ? f25 : null, ariaLabel: c23 = `${t14}-grid`, ariaHidden: s24 = true, ...l19 }) {
  return j19(P17, t14, u17, {
    ariaLabel: c23,
    ariaHidden: s24
  }, {
    x: e33,
    y1: o26,
    y2: r13,
    ...mn5(l19)
  });
}
function mn5({ color: t14 = "currentColor", opacity: n17 = 0.1, stroke: u17 = t14, strokeOpacity: e33 = n17, strokeWidth: f25 = 1, ...o26 }) {
  return {
    stroke: u17,
    strokeOpacity: e33,
    strokeWidth: f25,
    ...o26
  };
}
function dn5({ fill: t14, fillOpacity: n17, fontFamily: u17, fontSize: e33, fontStyle: f25, fontVariant: o26, fontWeight: r13, monospace: c23, pointerEvents: s24, shapeRendering: l19, clip: i20 = false }, y21) {
  return [, t14] = g8(t14), [, n17] = Ie4(n17), {
    facet: "super",
    x: null,
    y: null,
    fill: t14,
    fillOpacity: n17,
    fontFamily: u17,
    fontSize: e33,
    fontStyle: f25,
    fontVariant: o26,
    fontWeight: r13,
    monospace: c23,
    pointerEvents: s24,
    shapeRendering: l19,
    clip: i20,
    initializer: y21
  };
}
function j19(t14, n17, u17, e33, f25, o26) {
  let r13;
  function c23(i20, y21, T21, v23, a19, x23) {
    let $22 = i20 == null && (n17 === "fx" || n17 === "fy"), { [n17]: h20 } = v23;
    if (!h20) throw new Error(`missing scale: ${n17}`);
    let m22 = h20.domain(), { interval: M22, ticks: p21, tickFormat: w26, tickSpacing: K22 = n17 === "x" ? 80 : 35 } = f25;
    if (typeof p21 == "string" && an5(h20) && (M22 = p21, p21 = void 0), p21 === void 0 && (p21 = te3(M22, h20.type) ?? Qn4(h20, K22)), i20 == null) {
      if ($11(p21)) i20 = A16(p21);
      else if (oe5(p21)) i20 = Q18(p21, ...E(m22));
      else if (h20.interval) {
        let d18 = h20.interval;
        if (h20.ticks) {
          let [g18, L25] = E(m22), F28 = (L25 - g18) / d18[M11];
          d18 = Mt5(d18, F28 / p21) ?? d18, i20 = Q18(d18, g18, L25);
        } else {
          i20 = m22;
          let g18 = i20.length;
          d18 = Mt5(d18, g18 / p21) ?? d18, d18 !== h20.interval && (i20 = Q18(d18, ...E(i20)));
        }
        if (d18 === h20.interval) {
          let g18 = Math.round(i20.length / p21);
          g18 > 1 && (i20 = i20.filter((L25, F28) => F28 % g18 === 0));
        }
      } else h20.ticks ? i20 = h20.ticks(p21) : i20 = m22;
      if (!h20.ticks && i20.length && i20 !== m22) {
        let d18 = new o2(m22);
        i20 = i20.filter((g18) => d18.has(g18)), i20.length || o24(`Warning: the ${n17}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
      }
      n17 === "y" || n17 === "x" ? y21 = [
        v16(i20)
      ] : r13[n17] = {
        scale: n17,
        value: R13
      };
    }
    o26?.call(this, h20, i20, p21, w26, r13);
    let C18 = Object.fromEntries(Object.entries(r13).map(([d18, g18]) => [
      d18,
      {
        ...g18,
        value: U11(i20, g18.value)
      }
    ]));
    return $22 && (y21 = x23.filterFacets(i20, C18)), {
      data: i20,
      facets: y21,
      channels: C18
    };
  }
  let s24 = D12(f25).initializer, l19 = t14(u17, D12({
    ...f25,
    initializer: c23
  }, s24));
  return u17 == null ? (r13 = l19.channels, l19.channels = {}) : r13 = {}, e33 !== void 0 && Object.assign(l19, e33), l19.clip === void 0 && (l19.clip = false), l19;
}
function Qn4(t14, n17) {
  let [u17, e33] = E(t14.range());
  return (e33 - u17) / n17;
}
function hn3(t14, n17, u17, e33, f25) {
  return {
    value: Un5(t14, n17, u17, e33, f25)
  };
}
function Un5(t14, n17, u17, e33, f25) {
  return typeof e33 == "function" && !(t14.type === "log" && t14.tickFormat) ? e33 : e33 === void 0 && n17 && b13(n17) ? It6(t14.type, n17, f25) ?? F16 : t14.tickFormat ? t14.tickFormat(typeof u17 == "number" ? u17 : null, e33) : typeof e33 == "string" && t14.domain().length > 0 ? (b13(t14.domain()) ? d10 : e8)(e33) : e33 === void 0 ? F16 : Z12(e33);
}
function Q18(t14, n17, u17) {
  return t14.range(n17, t14.offset(t14.floor(u17)));
}
var Zn3 = {
  draw(t14, n17) {
    t14.moveTo(0, 0), t14.lineTo(0, n17);
  }
};
var zn2 = {
  draw(t14, n17) {
    t14.moveTo(0, 0), t14.lineTo(0, -n17);
  }
};
var Sn5 = {
  draw(t14, n17) {
    t14.moveTo(0, 0), t14.lineTo(-n17, 0);
  }
};
var Pn4 = {
  draw(t14, n17) {
    t14.moveTo(0, 0), t14.lineTo(n17, 0);
  }
};
function pn6(t14) {
  return t14.bandwidth && !t14.interval ? void 0 : "tabular-nums";
}
function cn6(t14, n17, { anchor: u17, label: e33 = n17.label, labelAnchor: f25, labelArrow: o26 } = {}) {
  if (!(e33 == null || e33.inferred && an5(n17) && /^(date|time|year)$/i.test(e33))) {
    if (e33 = String(e33), o26 === "auto" && (o26 = (!n17.bandwidth || n17.interval) && !/[↑↓→←]/.test(e33)), !o26) return e33;
    if (o26 === true) {
      let r13 = Ke5(n17);
      r13 && (o26 = /x$/.test(t14) || f25 === "center" ? /x$/.test(t14) === r13 < 0 ? "left" : "right" : r13 < 0 ? "up" : "down");
    }
    switch (o26) {
      case "left":
        return `\u2190 ${e33}`;
      case "right":
        return `${e33} \u2192`;
      case "up":
        return u17 === "right" ? `${e33} \u2191` : `\u2191 ${e33}`;
      case "down":
        return u17 === "right" ? `${e33} \u2193` : `\u2193 ${e33}`;
    }
    return e33;
  }
}
function xn4(t14 = "auto") {
  return en4(t14) ? false : typeof t14 == "boolean" ? t14 : k14(t14, "labelArrow", [
    "auto",
    "up",
    "right",
    "down",
    "left"
  ]);
}
function an5(t14) {
  return b13(t14.domain());
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/legends/swatches.mjs
function y17(t14, a19) {
  if (a19 == null) return a19;
  let n17 = t14(a19);
  if (!n17) throw new Error(`scale not found: ${a19}`);
  return n17;
}
function J13(t14, { opacity: a19, ...n17 } = {}) {
  if (!S19(t14) && !Ye3(t14)) throw new Error(`swatches legend requires ordinal or threshold color scale (not ${t14.type})`);
  return S23(t14, n17, (s24, r13, i20, l19) => s24.append("svg").attr("width", i20).attr("height", l19).attr("fill", r13.scale).attr("fill-opacity", Ie4(a19)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function K15(t14, { fill: a19 = t14.hint?.fill !== void 0 ? t14.hint.fill : "none", fillOpacity: n17 = 1, stroke: s24 = t14.hint?.stroke !== void 0 ? t14.hint.stroke : en4(a19) ? "currentColor" : "none", strokeOpacity: r13 = 1, strokeWidth: i20 = 1.5, r: l19 = 4.5, ...m22 } = {}, o26) {
  let [c23, e33] = g8(a19), [f25, u17] = g8(s24), $22 = y17(o26, c23), h20 = y17(o26, f25), d18 = l19 * l19 * Math.PI;
  return n17 = Ie4(n17)[1], r13 = Ie4(r13)[1], i20 = Ie4(i20)[1], S23(t14, m22, (p21, D18, b25, C18) => p21.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", b25).attr("height", C18).attr("fill", c23 === "color" ? (w26) => $22.scale(w26) : e33).attr("fill-opacity", n17).attr("stroke", f25 === "color" ? (w26) => h20.scale(w26) : u17).attr("stroke-opacity", r13).attr("stroke-width", i20).append("path").attr("d", (w26) => {
    let x23 = R7();
    return t14.scale(w26).draw(x23, d18), x23;
  }));
}
function S23(t14, a19 = {}, n17) {
  let { columns: s24, tickFormat: r13, fontVariant: i20 = e32(t14), swatchSize: l19 = 15, swatchWidth: m22 = l19, swatchHeight: o26 = l19, marginLeft: c23 = 0, className: e33, style: f25, width: u17 } = a19, $22 = m17(a19);
  e33 = Ht5(e33), r13 = Un5(t14.scale, t14.domain, void 0, r13);
  let h20 = u13("div", $22).attr("class", `${e33}-swatches ${e33}-swatches-${s24 != null ? "columns" : "wrap"}`), d18;
  return s24 != null ? (d18 = `:where(.${e33}-swatches-columns .${e33}-swatch) {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
:where(.${e33}-swatches-columns .${e33}-swatch::before) {
  flex-shrink: 0;
}
:where(.${e33}-swatches-columns .${e33}-swatch-label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, h20.style("columns", s24).selectAll().data(t14.domain).enter().append("div").attr("class", `${e33}-swatch`).call(n17, t14, m22, o26).call((p21) => p21.append("div").attr("class", `${e33}-swatch-label`).attr("title", r13).text(r13))) : (d18 = `:where(.${e33}-swatches-wrap) {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
:where(.${e33}-swatches-wrap .${e33}-swatch) {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`, h20.selectAll().data(t14.domain).enter().append("span").attr("class", `${e33}-swatch`).call(n17, t14, m22, o26).append(function() {
    return this.ownerDocument.createTextNode(r13.apply(this, arguments));
  })), h20.call((p21) => p21.insert("style", "*").text(`:where(.${e33}-swatches) {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
:where(.${e33}-swatch > svg) {
  margin-right: 0.5em;
  overflow: visible;
}
${d18}`)).style("margin-left", c23 ? `${+c23}px` : null).style("width", u17 === void 0 ? null : `${+u17}px`).style("font-variant", h16(i20, "normal")).call(Ut5, f25).node();
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/legends.mjs
var a17 = /* @__PURE__ */ new Map([
  [
    "symbol",
    K15
  ],
  [
    "color",
    d16
  ],
  [
    "opacity",
    b22
  ]
]);
function z21(r13, n17, t14 = {}) {
  return (e33, o26) => {
    if (!a17.has(e33)) throw new Error(`unknown legend type: ${e33}`);
    if (e33 in r13) return a17.get(e33)(r13[e33], p17(n17, t14[e33], o26), (i20) => r13[i20]);
  };
}
function p17({ className: r13, ...n17 }, { label: t14, ticks: e33, tickFormat: o26 } = {}, i20) {
  return tn3(i20, {
    className: r13,
    ...n17
  }, {
    label: t14,
    ticks: e33,
    tickFormat: o26
  });
}
function d16(r13, { legend: n17 = true, ...t14 }) {
  if (n17 === true && (n17 = r13.type === "ordinal" ? "swatches" : "ramp"), r13.domain !== void 0) switch (`${n17}`.toLowerCase()) {
    case "swatches":
      return J13(r13, t14);
    case "ramp":
      return at8(r13, t14);
    default:
      throw new Error(`unknown legend type: ${n17}`);
  }
}
function b22({ type: r13, interpolate: n17, ...t14 }, { legend: e33 = true, color: o26 = V4(0, 0, 0), ...i20 }) {
  if (!n17) throw new Error(`${r13} opacity scales are not supported`);
  if (e33 === true && (e33 = "ramp"), `${e33}`.toLowerCase() !== "ramp") throw new Error(`${e33} opacity legends are not supported`);
  return d16({
    type: r13,
    ...t14,
    interpolate: x20(o26)
  }, {
    legend: e33,
    ...i20
  });
}
function x20(r13) {
  let { r: n17, g: t14, b: e33 } = V4(r13) || V4(0, 0, 0);
  return (o26) => `rgba(${n17},${t14},${e33},${o26})`;
}
function M16(r13, n17, t14) {
  let e33 = [];
  for (let [o26, i20] of a17) {
    let u17 = t14[o26];
    if (u17?.legend && o26 in r13) {
      let f25 = i20(r13[o26], p17(n17, r13[o26], u17), (m22) => r13[m22]);
      f25 != null && e33.push(f25);
    }
  }
  return e33;
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/curve.mjs
var A22 = /* @__PURE__ */ new Map([
  [
    "basis",
    jn2
  ],
  [
    "basis-closed",
    ti
  ],
  [
    "basis-open",
    ni
  ],
  [
    "bundle",
    ii
  ],
  [
    "bump-x",
    Xt4
  ],
  [
    "bump-y",
    Yt5
  ],
  [
    "cardinal",
    ei
  ],
  [
    "cardinal-closed",
    oi
  ],
  [
    "cardinal-open",
    ri
  ],
  [
    "catmull-rom",
    si
  ],
  [
    "catmull-rom-closed",
    ai
  ],
  [
    "catmull-rom-open",
    li
  ],
  [
    "linear",
    K11
  ],
  [
    "linear-closed",
    ui
  ],
  [
    "monotone-x",
    hi2
  ],
  [
    "monotone-y",
    fi
  ],
  [
    "natural",
    _i2
  ],
  [
    "step",
    ci
  ],
  [
    "step-after",
    mi
  ],
  [
    "step-before",
    pi
  ]
]);
function M17(e33 = K11, n17) {
  if (typeof e33 == "function") return e33;
  let r13 = A22.get(`${e33}`.toLowerCase());
  if (!r13) throw new Error(`unknown curve: ${e33}`);
  if (n17 !== void 0) {
    if ("beta" in r13) return r13.beta(n17);
    if ("tension" in r13) return r13.tension(n17);
    if ("alpha" in r13) return r13.alpha(n17);
  }
  return r13;
}
function R15(e33 = u14, n17) {
  return typeof e33 != "function" && `${e33}`.toLowerCase() === "auto" ? u14 : M17(e33, n17);
}
function u14(e33) {
  return K11(e33);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/bin.mjs
function hn4(e33 = {
  y: "count"
}, n17 = {}) {
  [e33, n17] = K16(e33, n17);
  let { x: t14, y: r13 } = n17;
  return Z14(E24(t14, n17, R13), null, null, r13, e33, b18(n17));
}
function bn4(e33 = {
  x: "count"
}, n17 = {}) {
  [e33, n17] = K16(e33, n17);
  let { x: t14, y: r13 } = n17;
  return Z14(null, E24(r13, n17, R13), t14, null, e33, c20(n17));
}
function Vn4(e33 = {
  fill: "count"
}, n17 = {}) {
  [e33, n17] = K16(e33, n17);
  let { x: t14, y: r13 } = xn5(n17);
  return Z14(t14, r13, null, null, e33, b18(c20(n17)));
}
function se7(e33, n17, t14 = {}) {
  if (t14?.interval == null) return t14;
  let { reduce: r13 = te4 } = t14, o26 = {
    filter: null
  };
  return t14[n17] != null && (o26[n17] = r13), t14[`${n17}1`] != null && (o26[`${n17}1`] = r13), t14[`${n17}2`] != null && (o26[`${n17}2`] = r13), e33(o26, t14);
}
function jn3(e33 = {}) {
  return se7(hn4, "y", ft6(e33, "x"));
}
function Ln4(e33 = {}) {
  return se7(bn4, "x", ft6(e33, "y"));
}
function Z14(e33, n17, t14, r13, { data: o26 = re6, filter: c23 = X14, sort: l19, reverse: a19, ...u17 } = {}, s24 = {}) {
  e33 = te5(e33), n17 = te5(n17), u17 = Bn4(u17, s24), o26 = de6(o26, R13), l19 = l19 == null ? void 0 : ae7("sort", l19, s24), c23 = c23 == null ? void 0 : me5("filter", c23, s24), t14 != null && P14(u17, "x", "x1", "x2") && (t14 = null), r13 != null && P14(u17, "y", "y1", "y2") && (r13 = null);
  let [f25, m22] = Le2(e33), [i20, d18] = Le2(e33), [y21, I21] = Le2(n17), [p21, h20] = Le2(n17), [V19, j26] = t14 != null ? [
    t14,
    "x"
  ] : r13 != null ? [
    r13,
    "y"
  ] : [], [L25, he7] = Le2(V19), { x: be7, y: xe6, z: O15, fill: N20, stroke: q29, x1: Ie6, x2: Be5, y1: pe6, y2: Xe5, domain: Tn6, cumulative: kn6, thresholds: En4, interval: On3, ...ge8 } = s24, [ve6, Ye4] = Le2(O15), [H23] = g8(N20), [J21] = g8(q29), [Ge5, Fe6] = Le2(H23), [we5, ze7] = Le2(J21);
  return {
    ..."z" in s24 && {
      z: ve6 || O15
    },
    ..."fill" in s24 && {
      fill: Ge5 || N20
    },
    ..."stroke" in s24 && {
      stroke: we5 || q29
    },
    ...$13(ge8, (b25, D18, Ce5) => {
      let $22 = Xe4(U11(b25, V19), Ce5?.[j26]), Y20 = U11(b25, O15), G19 = U11(b25, H23), F28 = U11(b25, J21), w26 = _e5(u17, {
        z: Y20,
        fill: G19,
        stroke: F28
      }), A26 = [], P20 = [], Se5 = $22 && he7([]), Te5 = Y20 && Ye4([]), ke7 = G19 && Fe6([]), Ee8 = F28 && ze7([]), Q24 = e33 && m22([]), Oe6 = e33 && d18([]), U21 = n17 && I21([]), De5 = n17 && h20([]), $e8 = gn6(e33, n17, b25), Ae6 = 0;
      for (let g18 of u17) g18.initialize(b25);
      l19 && l19.initialize(b25), c23 && c23.initialize(b25);
      for (let g18 of D18) {
        let W23 = [];
        for (let v23 of u17) v23.scope("facet", g18);
        l19 && l19.scope("facet", g18), c23 && c23.scope("facet", g18);
        for (let [v23, Me5] of $14(g18, w26)) for (let [Ze5, C18] of $14(Me5, $22)) for (let [x23, B19] of $e8(C18)) if (w26 && (B19.z = v23), !(c23 && !c23.reduce(x23, B19))) {
          W23.push(Ae6++), P20.push(o26.reduceIndex(x23, b25, B19)), $22 && Se5.push(Ze5), Y20 && Te5.push(w26 === Y20 ? v23 : Y20[(x23.length > 0 ? x23 : C18)[0]]), G19 && ke7.push(w26 === G19 ? v23 : G19[(x23.length > 0 ? x23 : C18)[0]]), F28 && Ee8.push(w26 === F28 ? v23 : F28[(x23.length > 0 ? x23 : C18)[0]]), Q24 && (Q24.push(B19.x1), Oe6.push(B19.x2)), U21 && (U21.push(B19.y1), De5.push(B19.y2));
          for (let Ke6 of u17) Ke6.reduce(x23, B19);
          l19 && l19.reduce(x23, B19);
        }
        A26.push(W23);
      }
      return en5(A26, l19, a19), {
        data: P20,
        facets: A26
      };
    }),
    ...!P14(u17, "x") && (f25 ? {
      x1: f25,
      x2: i20,
      x: Ue2(f25, i20)
    } : {
      x: be7,
      x1: Ie6,
      x2: Be5
    }),
    ...!P14(u17, "y") && (y21 ? {
      y1: y21,
      y2: p21,
      y: Ue2(y21, p21)
    } : {
      y: xe6,
      y1: pe6,
      y2: Xe5
    }),
    ...L25 && {
      [j26]: L25
    },
    ...Object.fromEntries(u17.map(({ name: b25, output: D18 }) => [
      b25,
      D18
    ]))
  };
}
function K16({ cumulative: e33, domain: n17, thresholds: t14, interval: r13, ...o26 }, c23) {
  return [
    o26,
    {
      cumulative: e33,
      domain: n17,
      thresholds: t14,
      interval: r13,
      ...c23
    }
  ];
}
function E24(e33, { cumulative: n17, domain: t14, thresholds: r13, interval: o26 }, c23) {
  return e33 = {
    ...Je3(e33)
  }, e33.domain === void 0 && (e33.domain = t14), e33.cumulative === void 0 && (e33.cumulative = n17), e33.thresholds === void 0 && (e33.thresholds = r13), e33.interval === void 0 && (e33.interval = o26), e33.value === void 0 && (e33.value = c23), e33.thresholds = In4(e33.thresholds, e33.interval), e33;
}
function xn5(e33) {
  let { x: n17, y: t14 } = e33;
  return n17 = E24(n17, e33), t14 = E24(t14, e33), [n17.value, t14.value] = Ee5(n17.value, t14.value), {
    x: n17,
    y: t14
  };
}
function te5(e33) {
  if (e33 == null) return;
  let { value: n17, cumulative: t14, domain: r13 = E, thresholds: o26 } = e33, c23 = (l19) => {
    let a19 = U11(l19, n17), u17;
    if (b13(a19) || Xn2(o26)) {
      a19 = i14(a19, V11, Float64Array);
      let [f25, m22] = typeof r13 == "function" ? r13(a19) : r13, i20 = typeof o26 == "function" && !oe5(o26) ? o26(a19, f25, m22) : o26;
      typeof i20 == "number" && (i20 = zt3(f25, m22, i20)), oe5(i20) && (r13 === E && (f25 = i20.floor(f25), m22 = i20.offset(i20.floor(m22))), i20 = i20.range(f25, i20.offset(m22))), u17 = i20;
    } else {
      a19 = Ce4(a19);
      let [f25, m22] = typeof r13 == "function" ? r13(a19) : r13, i20 = typeof o26 == "function" && !oe5(o26) ? o26(a19, f25, m22) : o26;
      if (typeof i20 == "number") if (r13 === E) {
        let d18 = M(f25, m22, i20);
        if (isFinite(d18)) if (d18 > 0) {
          let y21 = Math.round(f25 / d18), I21 = Math.round(m22 / d18);
          y21 * d18 <= f25 || --y21, I21 * d18 > m22 || ++I21;
          let p21 = I21 - y21 + 1;
          i20 = new Float64Array(p21);
          for (let h20 = 0; h20 < p21; ++h20) i20[h20] = (y21 + h20) * d18;
        } else if (d18 < 0) {
          d18 = -d18;
          let y21 = Math.round(f25 * d18), I21 = Math.round(m22 * d18);
          y21 / d18 <= f25 || --y21, I21 / d18 > m22 || ++I21;
          let p21 = I21 - y21 + 1;
          i20 = new Float64Array(p21);
          for (let h20 = 0; h20 < p21; ++h20) i20[h20] = (y21 + h20) / d18;
        } else i20 = [
          f25
        ];
        else i20 = [
          f25
        ];
      } else i20 = X(f25, m22, i20);
      else oe5(i20) && (r13 === E && (f25 = i20.floor(f25), m22 = i20.offset(i20.floor(m22))), i20 = i20.range(f25, i20.offset(m22)));
      u17 = i20;
    }
    let s24 = [];
    if (u17.length === 1) s24.push([
      u17[0],
      u17[0]
    ]);
    else for (let f25 = 1; f25 < u17.length; ++f25) s24.push([
      u17[f25 - 1],
      u17[f25]
    ]);
    return s24.bin = (t14 < 0 ? Yn3 : t14 > 0 ? vn5 : R16)(s24, u17, a19), s24;
  };
  return c23.label = S14(n17), c23;
}
function In4(e33, n17, t14 = re7) {
  if (e33 === void 0) return n17 === void 0 ? t14 : te3(n17);
  if (typeof e33 == "string") {
    switch (e33.toLowerCase()) {
      case "freedman-diaconis":
        return Ie;
      case "scott":
        return Ae;
      case "sturges":
        return Z;
      case "auto":
        return re7;
    }
    return mt5(e33);
  }
  return e33;
}
function Bn4(e33, n17) {
  return Je4(e33, n17, ae7);
}
function ae7(e33, n17, t14) {
  return N13(e33, n17, t14, me5);
}
function me5(e33, n17, t14) {
  return Q14(e33, n17, t14, de6);
}
function de6(e33, n17) {
  return W13(e33, n17, pn7);
}
function pn7(e33) {
  switch (`${e33}`.toLowerCase()) {
    case "x":
      return Gn6;
    case "x1":
      return wn5;
    case "x2":
      return zn3;
    case "y":
      return Fn4;
    case "y1":
      return Cn4;
    case "y2":
      return Sn6;
    case "z":
      return ln3;
  }
  throw new Error(`invalid bin reduce: ${e33}`);
}
function re7(e33, n17, t14) {
  return Math.min(200, Ae(e33, n17, t14));
}
function Xn2(e33) {
  return Re3(e33) || $11(e33) && b13(e33);
}
function gn6(e33, n17, t14) {
  let r13 = e33?.(t14), o26 = n17?.(t14);
  return r13 && o26 ? function* (c23) {
    let l19 = r13.bin(c23);
    for (let [a19, [u17, s24]] of r13.entries()) {
      let f25 = o26.bin(l19[a19]);
      for (let [m22, [i20, d18]] of o26.entries()) yield [
        f25[m22],
        {
          data: t14,
          x1: u17,
          y1: i20,
          x2: s24,
          y2: d18
        }
      ];
    }
  } : r13 ? function* (c23) {
    let l19 = r13.bin(c23);
    for (let [a19, [u17, s24]] of r13.entries()) yield [
      l19[a19],
      {
        data: t14,
        x1: u17,
        x2: s24
      }
    ];
  } : function* (c23) {
    let l19 = o26.bin(c23);
    for (let [a19, [u17, s24]] of o26.entries()) yield [
      l19[a19],
      {
        data: t14,
        y1: u17,
        y2: s24
      }
    ];
  };
}
function R16(e33, n17, t14) {
  return n17 = Ce4(n17), (r13) => {
    let o26 = e33.map(() => []);
    for (let c23 of r13) o26[re(n17, t14[c23]) - 1]?.push(c23);
    return o26;
  };
}
function vn5(e33, n17, t14) {
  let r13 = R16(e33, n17, t14);
  return (o26) => {
    let c23 = r13(o26);
    for (let l19 = 1, a19 = c23.length; l19 < a19; ++l19) {
      let u17 = c23[l19 - 1], s24 = c23[l19];
      for (let f25 of u17) s24.push(f25);
    }
    return c23;
  };
}
function Yn3(e33, n17, t14) {
  let r13 = R16(e33, n17, t14);
  return (o26) => {
    let c23 = r13(o26);
    for (let l19 = c23.length - 2; l19 >= 0; --l19) {
      let a19 = c23[l19 + 1], u17 = c23[l19];
      for (let s24 of a19) u17.push(s24);
    }
    return c23;
  };
}
function ye5(e33, n17) {
  let t14 = (+e33 + +n17) / 2;
  return e33 instanceof Date ? new Date(t14) : t14;
}
var Gn6 = {
  reduceIndex(e33, n17, { x1: t14, x2: r13 }) {
    return ye5(t14, r13);
  }
};
var Fn4 = {
  reduceIndex(e33, n17, { y1: t14, y2: r13 }) {
    return ye5(t14, r13);
  }
};
var wn5 = {
  reduceIndex(e33, n17, { x1: t14 }) {
    return t14;
  }
};
var zn3 = {
  reduceIndex(e33, n17, { x2: t14 }) {
    return t14;
  }
};
var Cn4 = {
  reduceIndex(e33, n17, { y1: t14 }) {
    return t14;
  }
};
var Sn6 = {
  reduceIndex(e33, n17, { y2: t14 }) {
    return t14;
  }
};

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/identity.mjs
function m19(e33 = {}, t14 = "x") {
  return Q13(e33) ? e33 : {
    ...e33,
    [t14]: R13
  };
}
function u15(e33 = {}, t14 = "y") {
  return W12(e33) ? e33 : {
    ...e33,
    [t14]: R13
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/exclusiveFacets.mjs
function x21(n17, r13) {
  if (r13.length === 1) return {
    data: n17,
    facets: r13
  };
  let t14 = z14(n17), l19 = new Uint8Array(t14), c23 = 0;
  for (let o26 of r13) for (let e33 of o26) l19[e33] && ++c23, l19[e33] = 1;
  if (c23 === 0) return {
    data: n17,
    facets: r13
  };
  n17 = Oe4(n17);
  let s24 = n17[L14] = new Uint32Array(t14 + c23);
  r13 = r13.map((o26) => Oe4(o26, Uint32Array));
  let f25 = t14;
  l19.fill(0);
  for (let o26 of r13) for (let e33 = 0, m22 = o26.length; e33 < m22; ++e33) {
    let i20 = o26[e33];
    l19[i20] ? (o26[e33] = f25, n17[f25] = n17[i20], s24[f25] = i20, ++f25) : s24[i20] = i20, l19[i20] = 1;
  }
  return {
    data: n17,
    facets: r13
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/stack.mjs
function xn6(n17 = {}, t14 = {}) {
  arguments.length === 1 && ([n17, t14] = w22(n17));
  let { y1: r13, y: e33 = r13, x: o26, ...c23 } = t14, [s24, f25, u17, a19] = X16(e33, o26, "y", "x", n17, c23);
  return {
    ...s24,
    y1: r13,
    y: f25,
    x1: u17,
    x2: a19,
    x: Ue2(u17, a19)
  };
}
function hn5(n17 = {}, t14 = {}) {
  arguments.length === 1 && ([n17, t14] = w22(n17));
  let { x1: r13, x: e33 = r13, y: o26, ...c23 } = t14, [s24, f25, u17, a19] = X16(e33, o26, "x", "y", n17, c23);
  return {
    ...s24,
    x1: r13,
    x: f25,
    y1: u17,
    y2: a19,
    y: Ue2(u17, a19)
  };
}
function Gn7({ x: n17, x1: t14, x2: r13, ...e33 } = {}) {
  return e33 = ft6(e33, "y"), t14 === void 0 && r13 === void 0 ? xn6({
    x: n17,
    ...e33
  }) : ([t14, r13] = qe3(n17, t14, r13), {
    ...e33,
    x1: t14,
    x2: r13
  });
}
function Tn5({ y: n17, y1: t14, y2: r13, ...e33 } = {}) {
  return e33 = ft6(e33, "x"), t14 === void 0 && r13 === void 0 ? hn5({
    y: n17,
    ...e33
  }) : ([t14, r13] = qe3(n17, t14, r13), {
    ...e33,
    y1: t14,
    y2: r13
  });
}
function w22(n17) {
  let { offset: t14, order: r13, reverse: e33, ...o26 } = n17;
  return [
    {
      offset: t14,
      order: r13,
      reverse: e33
    },
    o26
  ];
}
var pn8 = {
  length: true
};
function X16(n17, t14 = he5, r13, e33, { offset: o26, order: c23, reverse: s24 }, f25) {
  if (t14 === null) throw new Error(`stack requires ${e33}`);
  let u17 = je3(f25), [a19, y21] = Le2(n17), [i20, g18] = ee4(t14), [m22, x23] = ee4(t14);
  return i20.hint = m22.hint = pn8, o26 = wn6(o26), c23 = vn6(c23, o26, e33), [
    $13(f25, (l19, d18, nn7) => {
      ({ data: l19, facets: d18 } = x21(l19, d18));
      let D18 = n17 == null ? void 0 : y21(Xe4(U11(l19, n17), nn7?.[r13])), j26 = U11(l19, t14, Float64Array), L25 = U11(l19, u17), M22 = c23 && c23(l19, D18, j26, L25), W23 = z14(l19), v23 = g18(new Float64Array(W23)), b25 = x23(new Float64Array(W23)), q29 = [];
      for (let G19 of d18) {
        let S27 = D18 ? Array.from(P(G19, (p21) => D18[p21]).values()) : [
          G19
        ];
        if (M22) for (let p21 of S27) p21.sort(M22);
        for (let p21 of S27) {
          let T21 = 0, $22 = 0;
          s24 && p21.reverse();
          for (let h20 of p21) {
            let A26 = j26[h20];
            A26 < 0 ? T21 = b25[h20] = (v23[h20] = T21) + A26 : A26 > 0 ? $22 = b25[h20] = (v23[h20] = $22) + A26 : b25[h20] = v23[h20] = $22;
          }
        }
        q29.push(S27);
      }
      return o26 && o26(q29, v23, b25, L25), {
        data: l19,
        facets: d18
      };
    }),
    a19,
    i20,
    m22
  ];
}
function wn6(n17) {
  if (n17 != null) {
    if (typeof n17 == "function") return n17;
    switch (`${n17}`.toLowerCase()) {
      case "expand":
      case "normalize":
        return Xn3;
      case "center":
      case "silhouette":
        return dn6;
      case "wiggle":
        return _15;
    }
    throw new Error(`unknown offset: ${n17}`);
  }
}
function Z15(n17, t14) {
  let r13 = 0, e33 = 0;
  for (let o26 of n17) {
    let c23 = t14[o26];
    c23 < r13 && (r13 = c23), c23 > e33 && (e33 = c23);
  }
  return [
    r13,
    e33
  ];
}
function Xn3(n17, t14, r13) {
  for (let e33 of n17) for (let o26 of e33) {
    let [c23, s24] = Z15(o26, r13);
    for (let f25 of o26) {
      let u17 = 1 / (s24 - c23 || 1);
      t14[f25] = u17 * (t14[f25] - c23), r13[f25] = u17 * (r13[f25] - c23);
    }
  }
}
function dn6(n17, t14, r13) {
  for (let e33 of n17) {
    for (let o26 of e33) {
      let [c23, s24] = Z15(o26, r13);
      for (let f25 of o26) {
        let u17 = (s24 + c23) / 2;
        t14[f25] -= u17, r13[f25] -= u17;
      }
    }
    Y16(e33, t14, r13);
  }
  O12(n17, t14, r13);
}
function _15(n17, t14, r13, e33) {
  for (let o26 of n17) {
    let c23 = new u(), s24 = 0;
    for (let f25 of o26) {
      let u17 = -1, a19 = f25.map((m22) => Math.abs(r13[m22] - t14[m22])), y21 = f25.map((m22) => {
        u17 = e33 ? e33[m22] : ++u17;
        let x23 = r13[m22] - t14[m22], l19 = c23.has(u17) ? x23 - c23.get(u17) : 0;
        return c23.set(u17, x23), l19;
      }), i20 = [
        0,
        ...pe(y21)
      ];
      for (let m22 of f25) t14[m22] += s24, r13[m22] += s24;
      let g18 = Ve(a19);
      g18 && (s24 -= Ve(a19, (m22, x23) => (y21[x23] / 2 + i20[x23]) * m22) / g18);
    }
    Y16(o26, t14, r13);
  }
  O12(n17, t14, r13);
}
function Y16(n17, t14, r13) {
  let e33 = I(n17, (o26) => I(o26, (c23) => t14[c23]));
  for (let o26 of n17) for (let c23 of o26) t14[c23] -= e33, r13[c23] -= e33;
}
function O12(n17, t14, r13) {
  let e33 = n17.length;
  if (e33 === 1) return;
  let o26 = n17.map((f25) => f25.flat()), c23 = o26.map((f25) => (I(f25, (u17) => t14[u17]) + U(f25, (u17) => r13[u17])) / 2), s24 = I(c23);
  for (let f25 = 0; f25 < e33; f25++) {
    let u17 = s24 - c23[f25];
    for (let a19 of o26[f25]) t14[a19] += u17, r13[a19] += u17;
  }
}
function vn6(n17, t14, r13) {
  if (n17 === void 0 && t14 === _15) return H17(u9);
  if (n17 != null) {
    if (typeof n17 == "string") {
      let e33 = n17.startsWith("-"), o26 = e33 ? f16 : u9;
      switch ((e33 ? n17.slice(1) : n17).toLowerCase()) {
        case "value":
        case r13:
          return bn5(o26);
        case "z":
          return An4(o26);
        case "sum":
          return Cn5(o26);
        case "appearance":
          return kn5(o26);
        case "inside-out":
          return H17(o26);
      }
      return J14(G13(n17));
    }
    if (typeof n17 == "function") return (n17.length === 1 ? J14 : Fn5)(n17);
    if (s16(n17)) return En3(n17);
    throw new Error(`invalid order: ${n17}`);
  }
}
function bn5(n17) {
  return (t14, r13, e33) => (o26, c23) => n17(e33[o26], e33[c23]);
}
function An4(n17) {
  return (t14, r13, e33, o26) => (c23, s24) => n17(o26[c23], o26[s24]);
}
function Cn5(n17) {
  return z22(n17, (t14, r13, e33, o26) => Me(v16(t14), (c23) => Ve(c23, (s24) => e33[s24]), (c23) => o26[c23]));
}
function kn5(n17) {
  return z22(n17, (t14, r13, e33, o26) => Me(v16(t14), (c23) => r13[$2(c23, (s24) => e33[s24])], (c23) => o26[c23]));
}
function H17(n17) {
  return z22(n17, (t14, r13, e33, o26) => {
    let c23 = v16(t14), s24 = Me(c23, (i20) => r13[$2(i20, (g18) => e33[g18])], (i20) => o26[i20]), f25 = fe(c23, (i20) => Ve(i20, (g18) => e33[g18]), (i20) => o26[i20]), u17 = [], a19 = [], y21 = 0;
    for (let i20 of s24) y21 < 0 ? (y21 += f25.get(i20), u17.push(i20)) : (y21 -= f25.get(i20), a19.push(i20));
    return a19.reverse().concat(u17);
  });
}
function J14(n17) {
  return (t14) => {
    let r13 = U11(t14, n17);
    return (e33, o26) => u9(r13[e33], r13[o26]);
  };
}
function Fn5(n17) {
  return (t14) => s16(t14) ? (r13, e33) => n17(t14[r13], t14[e33]) : (r13, e33) => n17(t14.get(r13), t14.get(e33));
}
function En3(n17) {
  return z22(u9, () => n17);
}
function z22(n17, t14) {
  return (r13, e33, o26, c23) => {
    if (!c23) throw new Error("missing channel: z");
    let s24 = new u(t14(r13, e33, o26, c23).map((f25, u17) => [
      f25,
      u17
    ]));
    return (f25, u17) => n17(s24.get(c23[f25]), s24.get(c23[u17]));
  };
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/area.mjs
var j20 = {
  ariaLabel: "area",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1
};
var l16 = class extends g13 {
  constructor(e33, r13 = {}) {
    let { x1: t14, y1: p21, x2: s24, y2: o26, z: i20, curve: y21, tension: u17 } = r13;
    super(e33, {
      x1: {
        value: t14,
        scale: "x"
      },
      y1: {
        value: p21,
        scale: "y"
      },
      x2: {
        value: s24,
        scale: "x",
        optional: true
      },
      y2: {
        value: o26,
        scale: "y",
        optional: true
      },
      z: {
        value: je3(r13),
        optional: true
      }
    }, r13, j20), this.z = i20, this.curve = M17(y21, u17);
  }
  filter(e33) {
    return e33;
  }
  render(e33, r13, t14, p21, s24) {
    let { x1: o26, y1: i20, x2: y21 = o26, y2: u17 = i20 } = t14;
    return u13("svg:g", s24).call(Zt3, this, p21, s24).call(qt3, this, r13, 0, 0).call((m22) => m22.selectAll().data(Vt5(e33, [
      o26,
      i20,
      y21,
      u17
    ], this, t14)).enter().append("path").call(_t3, this).call(St5, this, t14).attr("d", qt2().curve(this.curve).defined((a19) => a19 >= 0).x0((a19) => o26[a19]).y0((a19) => i20[a19]).x1((a19) => y21[a19]).y1((a19) => u17[a19]))).node();
  }
};
function J15(n17, e33) {
  let { y: r13 = ge5, ...t14 } = Ln4(e33);
  return new l16(n17, Gn7(m19({
    ...t14,
    y1: r13,
    y2: void 0
  }, r13 === ge5 ? "x2" : "x")));
}
function A23(n17, e33) {
  let { x: r13 = ge5, ...t14 } = jn3(e33);
  return new l16(n17, Tn5(u15({
    ...t14,
    x1: r13,
    x2: void 0
  }, r13 === ge5 ? "y2" : "y")));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/rect.mjs
var at10 = {
  ariaLabel: "rect"
};
var L20 = class extends g13 {
  constructor(n17, f25 = {}) {
    let { x1: u17, y1: o26, x2: d18, y2: i20 } = f25;
    super(n17, {
      x1: {
        value: u17,
        scale: "x",
        type: u17 != null && d18 == null ? "band" : void 0,
        optional: true
      },
      y1: {
        value: o26,
        scale: "y",
        type: o26 != null && i20 == null ? "band" : void 0,
        optional: true
      },
      x2: {
        value: d18,
        scale: "x",
        optional: true
      },
      y2: {
        value: i20,
        scale: "y",
        optional: true
      }
    }, f25, at10), rt7(this, f25), it6(this, f25);
  }
  render(n17, f25, u17, o26, d18) {
    let { x: i20, y: y21 } = f25, { x1: a19, y1: r13, x2: l19, y2: c23 } = u17, { marginTop: w26, marginRight: I21, marginBottom: S27, marginLeft: A26, width: T21, height: b25 } = o26, { projection: h20 } = d18, { insetTop: s24, insetRight: x23, insetBottom: m22, insetLeft: p21 } = this, { rx: R19, ry: $22, rx1y1: M22, rx1y2: g18, rx2y1: v23, rx2y2: N20 } = this;
    (a19 || l19) && !h20 && ke5(i20) && (a19 = l19 = null), (r13 || c23) && !h20 && ke5(y21) && (r13 = c23 = null);
    let Y20 = i20?.bandwidth ? i20.bandwidth() : 0, j26 = y21?.bandwidth ? y21.bandwidth() : 0;
    return u13("svg:g", d18).call(Zt3, this, o26, d18).call(qt3, this, {}, 0, 0).call((P20) => P20.selectAll().data(n17).enter().call(M22 || g18 || v23 || N20 ? (D18) => D18.append("path").call(_t3, this).call(ot7, a19 && l19 ? (t14) => a19[t14] + (l19[t14] < a19[t14] ? -x23 : p21) : a19 ? (t14) => a19[t14] + p21 : A26 + p21, r13 && c23 ? (t14) => r13[t14] + (c23[t14] < r13[t14] ? -m22 : s24) : r13 ? (t14) => r13[t14] + s24 : w26 + s24, a19 && l19 ? (t14) => l19[t14] - (l19[t14] < a19[t14] ? -p21 : x23) : a19 ? (t14) => a19[t14] + Y20 - x23 : T21 - I21 - x23, r13 && c23 ? (t14) => c23[t14] - (c23[t14] < r13[t14] ? -s24 : m22) : r13 ? (t14) => r13[t14] + j26 - m22 : b25 - S27 - m22, this).call(Lt3, this, u17) : (D18) => D18.append("rect").call(_t3, this).attr("x", a19 ? l19 ? (t14) => Math.min(a19[t14], l19[t14]) + p21 : (t14) => a19[t14] + p21 : A26 + p21).attr("y", r13 ? c23 ? (t14) => Math.min(r13[t14], c23[t14]) + s24 : (t14) => r13[t14] + s24 : w26 + s24).attr("width", a19 ? l19 ? (t14) => Math.max(0, Math.abs(l19[t14] - a19[t14]) + Y20 - p21 - x23) : Y20 - p21 - x23 : T21 - I21 - A26 - x23 - p21).attr("height", r13 ? c23 ? (t14) => Math.max(0, Math.abs(r13[t14] - c23[t14]) + j26 - s24 - m22) : j26 - s24 - m22 : b25 - w26 - S27 - s24 - m22).call(p16, "rx", R19).call(p16, "ry", $22).call(Lt3, this, u17))).node();
  }
};
function rt7(e33, { inset: n17 = 0, insetTop: f25 = n17, insetRight: u17 = n17, insetBottom: o26 = n17, insetLeft: d18 = n17 } = {}) {
  e33.insetTop = ke4(f25), e33.insetRight = ke4(u17), e33.insetBottom = ke4(o26), e33.insetLeft = ke4(d18);
}
function it6(e33, { r: n17, rx: f25, ry: u17, rx1: o26 = n17, ry1: d18 = n17, rx2: i20 = n17, ry2: y21 = n17, rx1y1: a19 = o26 !== void 0 ? +o26 : d18 !== void 0 ? +d18 : 0, rx1y2: r13 = o26 !== void 0 ? +o26 : y21 !== void 0 ? +y21 : 0, rx2y1: l19 = i20 !== void 0 ? +i20 : d18 !== void 0 ? +d18 : 0, rx2y2: c23 = i20 !== void 0 ? +i20 : y21 !== void 0 ? +y21 : 0 } = {}) {
  a19 || r13 || l19 || c23 ? (e33.rx1y1 = a19, e33.rx1y2 = r13, e33.rx2y1 = l19, e33.rx2y2 = c23) : (e33.rx = h16(f25, "auto"), e33.ry = h16(u17, "auto"));
}
function ot7(e33, n17, f25, u17, o26, d18) {
  let { rx1y1: i20, rx1y2: y21, rx2y1: a19, rx2y2: r13 } = d18;
  typeof n17 != "function" && (n17 = Z12(n17)), typeof f25 != "function" && (f25 = Z12(f25)), typeof u17 != "function" && (u17 = Z12(u17)), typeof o26 != "function" && (o26 = Z12(o26));
  let l19 = Math.max(Math.abs(i20 + a19), Math.abs(y21 + r13)), c23 = Math.max(Math.abs(i20 + y21), Math.abs(a19 + r13));
  e33.attr("d", (w26) => {
    let I21 = n17(w26), S27 = f25(w26), A26 = u17(w26), T21 = o26(w26), b25 = I21 > A26, h20 = S27 > T21, s24 = b25 ? A26 : I21, x23 = b25 ? I21 : A26, m22 = h20 ? T21 : S27, p21 = h20 ? S27 : T21, R19 = Math.min(1, (x23 - s24) / l19, (p21 - m22) / c23), $22 = R19 * (b25 ? h20 ? r13 : a19 : h20 ? y21 : i20), M22 = R19 * (b25 ? h20 ? y21 : i20 : h20 ? r13 : a19), g18 = R19 * (b25 ? h20 ? i20 : y21 : h20 ? a19 : r13), v23 = R19 * (b25 ? h20 ? a19 : r13 : h20 ? i20 : y21);
    return `M${s24},${m22 + X17($22, v23)}A${$22},${$22} 0 0 ${$22 < 0 ? 0 : 1} ${s24 + H18($22, v23)},${m22}H${x23 - H18(M22, g18)}A${M22},${M22} 0 0 ${M22 < 0 ? 0 : 1} ${x23},${m22 + X17(M22, g18)}V${p21 - X17(g18, M22)}A${g18},${g18} 0 0 ${g18 < 0 ? 0 : 1} ${x23 - H18(g18, M22)},${p21}H${s24 + H18(v23, $22)}A${v23},${v23} 0 0 ${v23 < 0 ? 0 : 1} ${s24},${p21 - X17(v23, $22)}Z`;
  });
}
function H18(e33, n17) {
  return n17 < 0 ? e33 : Math.abs(e33);
}
function X17(e33, n17) {
  return n17 < 0 ? Math.abs(e33) : e33;
}
function xt10(e33, n17) {
  return new L20(e33, w20(g14(n17)));
}
function mt10(e33, n17 = {}) {
  return $e4(n17) || (n17 = {
    ...n17,
    y: ge5,
    x2: R13,
    interval: 1
  }), new L20(e33, Gn7(g14(m19(n17))));
}
function bt6(e33, n17 = {}) {
  return $e4(n17) || (n17 = {
    ...n17,
    x: ge5,
    y2: R13,
    interval: 1
  }), new L20(e33, Tn5(w20(u15(n17))));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/bar.mjs
var H19 = {
  ariaLabel: "bar"
};
var h18 = class extends g13 {
  constructor(t14, e33, r13 = {}, a19 = H19) {
    super(t14, e33, r13, a19), rt7(this, r13), it6(this, r13);
  }
  render(t14, e33, r13, a19, n17) {
    let { rx: s24, ry: l19, rx1y1: c23, rx1y2: o26, rx2y1: S27, rx2y2: T21 } = this, x23 = this._x(e33, r13, a19), p21 = this._y(e33, r13, a19), d18 = this._width(e33, r13, a19), _19 = this._height(e33, r13, a19);
    return u13("svg:g", n17).call(Zt3, this, a19, n17).call(this._transform, this, e33).call((k24) => k24.selectAll().data(t14).enter().call(c23 || o26 || S27 || T21 ? (u17) => u17.append("path").call(_t3, this).call(ot7, x23, p21, M18(x23, d18), M18(p21, _19), this).call(Lt3, this, r13) : (u17) => u17.append("rect").call(_t3, this).attr("x", x23).attr("width", d18).attr("y", p21).attr("height", _19).call(p16, "rx", s24).call(p16, "ry", l19).call(Lt3, this, r13))).node();
  }
  _x(t14, { x: e33 }, { marginLeft: r13 }) {
    let { insetLeft: a19 } = this;
    return e33 ? (n17) => e33[n17] + a19 : r13 + a19;
  }
  _y(t14, { y: e33 }, { marginTop: r13 }) {
    let { insetTop: a19 } = this;
    return e33 ? (n17) => e33[n17] + a19 : r13 + a19;
  }
  _width({ x: t14 }, { x: e33 }, { marginRight: r13, marginLeft: a19, width: n17 }) {
    let { insetLeft: s24, insetRight: l19 } = this, c23 = e33 && t14 ? t14.bandwidth() : n17 - r13 - a19;
    return Math.max(0, c23 - s24 - l19);
  }
  _height({ y: t14 }, { y: e33 }, { marginTop: r13, marginBottom: a19, height: n17 }) {
    let { insetTop: s24, insetBottom: l19 } = this, c23 = e33 && t14 ? t14.bandwidth() : n17 - r13 - a19;
    return Math.max(0, c23 - s24 - l19);
  }
};
function M18(i20, t14) {
  return typeof i20 == "function" && typeof t14 == "function" ? (e33) => i20(e33) + t14(e33) : typeof i20 == "function" ? (e33) => i20(e33) + t14 : typeof t14 == "function" ? (e33) => i20 + t14(e33) : i20 + t14;
}
var f21 = class extends h18 {
  constructor(t14, e33 = {}, r13) {
    let { x1: a19, x2: n17, y: s24 } = e33;
    super(t14, {
      x1: {
        value: a19,
        scale: "x"
      },
      x2: {
        value: n17,
        scale: "x"
      },
      y: {
        value: s24,
        scale: "y",
        type: "band",
        optional: true
      }
    }, e33, r13);
  }
  _transform(t14, e33, { x: r13 }) {
    t14.call(qt3, e33, {
      x: r13
    }, 0, 0);
  }
  _x({ x: t14 }, { x1: e33, x2: r13 }, { marginLeft: a19 }) {
    let { insetLeft: n17 } = this;
    return ke5(t14) ? a19 + n17 : (s24) => Math.min(e33[s24], r13[s24]) + n17;
  }
  _width({ x: t14 }, { x1: e33, x2: r13 }, { marginRight: a19, marginLeft: n17, width: s24 }) {
    let { insetLeft: l19, insetRight: c23 } = this;
    return ke5(t14) ? s24 - a19 - n17 - l19 - c23 : (o26) => Math.max(0, Math.abs(r13[o26] - e33[o26]) - l19 - c23);
  }
};
var m20 = class extends h18 {
  constructor(t14, e33 = {}, r13) {
    let { x: a19, y1: n17, y2: s24 } = e33;
    super(t14, {
      y1: {
        value: n17,
        scale: "y"
      },
      y2: {
        value: s24,
        scale: "y"
      },
      x: {
        value: a19,
        scale: "x",
        type: "band",
        optional: true
      }
    }, e33, r13);
  }
  _transform(t14, e33, { y: r13 }) {
    t14.call(qt3, e33, {
      y: r13
    }, 0, 0);
  }
  _y({ y: t14 }, { y1: e33, y2: r13 }, { marginTop: a19 }) {
    let { insetTop: n17 } = this;
    return ke5(t14) ? a19 + n17 : (s24) => Math.min(e33[s24], r13[s24]) + n17;
  }
  _height({ y: t14 }, { y1: e33, y2: r13 }, { marginTop: a19, marginBottom: n17, height: s24 }) {
    let { insetTop: l19, insetBottom: c23 } = this;
    return ke5(t14) ? s24 - a19 - n17 - l19 - c23 : (o26) => Math.max(0, Math.abs(r13[o26] - e33[o26]) - l19 - c23);
  }
};
function $18(i20, t14 = {}) {
  return $e4(t14) || (t14 = {
    ...t14,
    y: ge5,
    x2: R13
  }), new f21(i20, Gn7(h17(m19(t14))));
}
function B16(i20, t14 = {}) {
  return $e4(t14) || (t14 = {
    ...t14,
    x: ge5,
    y2: R13
  }), new m20(i20, Tn5(j17(u15(t14))));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/cell.mjs
var f22 = {
  ariaLabel: "cell"
};
var o25 = class extends h18 {
  constructor(n17, { x: e33, y: r13, ...a19 } = {}) {
    super(n17, {
      x: {
        value: e33,
        scale: "x",
        type: "band",
        optional: true
      },
      y: {
        value: r13,
        scale: "y",
        type: "band",
        optional: true
      }
    }, a19, f22);
  }
  _transform(n17, e33) {
    n17.call(qt3, e33, {}, 0, 0);
  }
};
function x22(t14, { x: n17, y: e33, ...r13 } = {}) {
  return [n17, e33] = Ee5(n17, e33), new o25(t14, {
    ...r13,
    x: n17,
    y: e33
  });
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/dot.mjs
var J16 = {
  ariaLabel: "dot",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5
};
function K17(e33) {
  return e33.sort === void 0 && e33.reverse === void 0 ? B12({
    channel: "-r"
  }, e33) : e33;
}
var d17 = class extends g13 {
  constructor(r13, o26 = {}) {
    let { x: n17, y: b25, r: v23, rotate: w26, symbol: k24 = at5, frameAnchor: c23 } = o26, [s24, a19] = Ie4(w26, 0), [f25, u17] = $12(k24), [m22, x23] = Ie4(v23, f25 == null ? 3 : 4.5);
    super(r13, {
      x: {
        value: n17,
        scale: "x",
        optional: true
      },
      y: {
        value: b25,
        scale: "y",
        optional: true
      },
      r: {
        value: m22,
        scale: "r",
        filter: p12,
        optional: true
      },
      rotate: {
        value: s24,
        optional: true
      },
      symbol: {
        value: f25,
        scale: "auto",
        optional: true
      }
    }, K17(o26), J16), this.r = x23, this.rotate = a19, this.symbol = u17, this.frameAnchor = rn4(c23);
    let { channels: p21 } = this, { symbol: i20 } = p21;
    if (i20) {
      let { fill: h20, stroke: y21 } = p21;
      i20.hint = {
        fill: h20 ? h20.value === i20.value ? "color" : "currentColor" : this.fill ?? "currentColor",
        stroke: y21 ? y21.value === i20.value ? "color" : "currentColor" : this.stroke ?? "none"
      };
    }
  }
  render(r13, o26, n17, b25, v23) {
    let { x: w26, y: k24 } = o26, { x: c23, y: s24, r: a19, rotate: f25, symbol: u17 } = n17, { r: m22, rotate: x23, symbol: p21 } = this, [i20, h20] = Yt6(this, b25), y21 = p21 === at5, I21 = a19 ? void 0 : m22 * m22 * Math.PI;
    return s14(m22) && (r13 = []), u13("svg:g", v23).call(Zt3, this, b25, v23).call(qt3, this, {
      x: c23 && w26,
      y: s24 && k24
    }).call((P20) => P20.selectAll().data(r13).enter().append(y21 ? "circle" : "path").call(_t3, this).call(y21 ? (A26) => {
      A26.attr("cx", c23 ? (t14) => c23[t14] : i20).attr("cy", s24 ? (t14) => s24[t14] : h20).attr("r", a19 ? (t14) => a19[t14] : m22);
    } : (A26) => {
      A26.attr("transform", t13`translate(${c23 ? (t14) => c23[t14] : i20},${s24 ? (t14) => s24[t14] : h20})${f25 ? (t14) => ` rotate(${f25[t14]})` : x23 ? ` rotate(${x23})` : ""}`).attr("d", a19 && u17 ? (t14) => {
        let l19 = R7();
        return u17[t14].draw(l19, a19[t14] * a19[t14] * Math.PI), l19;
      } : a19 ? (t14) => {
        let l19 = R7();
        return p21.draw(l19, a19[t14] * a19[t14] * Math.PI), l19;
      } : u17 ? (t14) => {
        let l19 = R7();
        return u17[t14].draw(l19, I21), l19;
      } : (() => {
        let t14 = R7();
        return p21.draw(t14, I21), t14;
      })());
    }).call(Lt3, this, n17)).node();
  }
};
function $19(e33, { x: r13, y: o26, ...n17 } = {}) {
  return n17.frameAnchor === void 0 && ([r13, o26] = Ee5(r13, o26)), new d17(e33, {
    ...n17,
    x: r13,
    y: o26
  });
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/frame.mjs
var J17 = {
  ariaLabel: "frame",
  fill: "none",
  stroke: "currentColor",
  clip: false
};
var N17 = {
  ariaLabel: "frame",
  fill: null,
  stroke: "currentColor",
  strokeLinecap: "square",
  clip: false
};
var s21 = class extends g13 {
  constructor(n17 = {}) {
    let { anchor: i20 = null } = n17;
    super(ye4, void 0, n17, i20 == null ? J17 : N17), this.anchor = H12(i20, "anchor", [
      "top",
      "right",
      "bottom",
      "left"
    ]), rt7(this, n17), i20 || it6(this, n17);
  }
  render(n17, i20, u17, y21, h20) {
    let { marginTop: d18, marginRight: g18, marginBottom: b25, marginLeft: L25, width: R19, height: k24 } = y21, { anchor: o26, insetTop: w26, insetRight: v23, insetBottom: C18, insetLeft: S27 } = this, { rx: T21, ry: B19, rx1y1: p21, rx1y2: f25, rx2y1: m22, rx2y2: x23 } = this, r13 = L25 + S27, e33 = R19 - g18 - v23, a19 = d18 + w26, l19 = k24 - b25 - C18;
    return u13(o26 ? "svg:line" : p21 || f25 || m22 || x23 ? "svg:path" : "svg:rect", h20).datum(0).call(Zt3, this, y21, h20).call(_t3, this).call(Lt3, this, u17).call(qt3, this, {}).call(o26 === "left" ? (t14) => t14.attr("x1", r13).attr("x2", r13).attr("y1", a19).attr("y2", l19) : o26 === "right" ? (t14) => t14.attr("x1", e33).attr("x2", e33).attr("y1", a19).attr("y2", l19) : o26 === "top" ? (t14) => t14.attr("x1", r13).attr("x2", e33).attr("y1", a19).attr("y2", a19) : o26 === "bottom" ? (t14) => t14.attr("x1", r13).attr("x2", e33).attr("y1", l19).attr("y2", l19) : p21 || f25 || m22 || x23 ? (t14) => t14.call(ot7, r13, a19, e33, l19, this) : (t14) => t14.attr("x", r13).attr("y", a19).attr("width", e33 - r13).attr("height", l19 - a19).attr("rx", T21).attr("ry", B19)).node();
  }
};
function W19(c23) {
  return new s21(c23);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/line.mjs
var D15 = {
  ariaLabel: "line",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1
};
var p18 = class extends g13 {
  constructor(r13, e33 = {}) {
    let { x: t14, y: l19, z: i20, curve: n17, tension: s24 } = e33;
    super(r13, {
      x: {
        value: t14,
        scale: "x"
      },
      y: {
        value: l19,
        scale: "y"
      },
      z: {
        value: je3(e33),
        optional: true
      }
    }, e33, D15), this.z = i20, this.curve = R15(n17, s24), j16(this, e33);
  }
  filter(r13) {
    return r13;
  }
  project(r13, e33, t14) {
    this.curve !== u14 && super.project(r13, e33, t14);
  }
  render(r13, e33, t14, l19, i20) {
    let { x: n17, y: s24 } = t14, { curve: u17 } = this;
    return u13("svg:g", i20).call(Zt3, this, l19, i20).call(qt3, this, e33).call((y21) => y21.selectAll().data(Vt5(r13, [
      n17,
      s24
    ], this, t14)).enter().append("path").call(_t3, this).call(St5, this, t14).call(F20, this, t14, i20).attr("d", u17 === u14 && i20.projection ? G17(i20.path(), n17, s24) : st3().curve(u17).defined((a19) => a19 >= 0).x((a19) => n17[a19]).y((a19) => s24[a19]))).node();
  }
};
function G17(o26, r13, e33) {
  return r13 = Ce4(r13), e33 = Ce4(e33), (t14) => {
    let l19 = [], i20 = [
      l19
    ];
    for (let n17 of t14) n17 === -1 ? (l19 = [], i20.push(l19)) : l19.push([
      r13[n17],
      e33[n17]
    ]);
    return o26({
      type: "MultiLineString",
      coordinates: i20
    });
  };
}
function B17(o26, { x: r13, y: e33, ...t14 } = {}) {
  return [r13, e33] = Ee5(r13, e33), new p18(o26, {
    ...t14,
    x: r13,
    y: e33
  });
}
function E25(o26, { x: r13 = R13, y: e33 = ge5, ...t14 } = {}) {
  return new p18(o26, Ln4({
    ...t14,
    x: r13,
    y: e33
  }));
}
function F22(o26, { x: r13 = ge5, y: e33 = R13, ...t14 } = {}) {
  return new p18(o26, jn3({
    ...t14,
    x: r13,
    y: e33
  }));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/auto.mjs
var W20 = {
  dot: $19,
  line: B17,
  lineX: E25,
  lineY: F22,
  areaX: J15,
  areaY: A23,
  ruleX: P17,
  ruleY: Q17,
  barX: $18,
  barY: B16,
  rect: xt10,
  rectX: mt10,
  rectY: bt6,
  cell: x22,
  bin: Vn4,
  binX: hn4,
  binY: bn4,
  group: Gn4,
  groupX: gn5,
  groupY: In3
};
var ue5 = Object.fromEntries(Object.entries(W20).map(([e33, r13]) => [
  r13,
  e33
]));

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/marks/tip.mjs
var K18 = {
  ariaLabel: "tip",
  fill: "var(--plot-background)",
  stroke: "currentColor"
};
var Nt4 = /* @__PURE__ */ new Set([
  "geometry",
  "href",
  "src",
  "ariaLabel",
  "scales"
]);
var Q21 = class extends g13 {
  constructor(e33, t14 = {}) {
    t14.tip && (t14 = {
      ...t14,
      tip: false
    }), t14.title === void 0 && $11(e33) && Ke3(e33) && (t14 = {
      ...t14,
      title: R13
    });
    let { x: i20, y: o26, x1: n17, x2: l19, y1: u17, y2: p21, anchor: F28, preferredAnchor: M22 = "bottom", monospace: L25, fontFamily: k24 = L25 ? "ui-monospace, monospace" : void 0, fontSize: E29, fontStyle: I21, fontVariant: T21, fontWeight: X22, lineHeight: $22 = 1, lineWidth: m22 = 20, frameAnchor: Y20, format: b25, textAnchor: j26 = "start", textOverflow: B19, textPadding: H23 = 8, title: N20, pointerSize: q29 = 12, pathFilter: D18 = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))" } = t14;
    super(e33, {
      x: {
        value: n17 != null && l19 != null ? null : i20,
        scale: "x",
        optional: true
      },
      y: {
        value: u17 != null && p21 != null ? null : o26,
        scale: "y",
        optional: true
      },
      x1: {
        value: n17,
        scale: "x",
        optional: l19 == null
      },
      y1: {
        value: u17,
        scale: "y",
        optional: p21 == null
      },
      x2: {
        value: l19,
        scale: "x",
        optional: n17 == null
      },
      y2: {
        value: p21,
        scale: "y",
        optional: u17 == null
      },
      title: {
        value: N20,
        optional: true
      }
    }, t14, K18), this.anchor = ce5(F28, "anchor"), this.preferredAnchor = ce5(M22, "preferredAnchor"), this.frameAnchor = rn4(Y20), this.textAnchor = h16(j26, "middle"), this.textPadding = +H23, this.pointerSize = +q29, this.pathFilter = xe4(D18), this.lineHeight = +$22, this.lineWidth = +m22, this.textOverflow = ft8(B19), this.monospace = !!L25, this.fontFamily = xe4(k24), this.fontSize = ke4(E29), this.fontStyle = xe4(I21), this.fontVariant = xe4(T21), this.fontWeight = xe4(X22);
    for (let v23 in K18) v23 in this.channels && (this[v23] = K18[v23]);
    this.splitLines = bt5(this), this.clipLine = At5(this), this.format = typeof b25 == "string" || typeof b25 == "function" ? {
      title: b25
    } : {
      ...b25
    };
  }
  render(e33, t14, i20, o26, n17) {
    let l19 = this, { x: u17, y: p21, fx: F28, fy: M22 } = t14, { ownerSVGElement: L25, document: k24 } = n17, { anchor: E29, monospace: I21, lineHeight: T21, lineWidth: X22 } = this, { textPadding: $22, pointerSize: m22, pathFilter: Y20 } = this, { marginTop: b25, marginLeft: j26 } = o26, { x1: B19, y1: H23, x2: N20, y2: q29, x: D18 = B19 ?? N20, y: v23 = H23 ?? q29 } = i20, ct8 = F28 ? F28(e33.fx) - j26 : 0, ht9 = M22 ? M22(e33.fy) - b25 : 0, [ut10, pt10] = Yt6(this, o26), U21 = ft7(i20, ut10), Z19 = at7(i20, pt10), C18 = I21 ? V15 : O11, _19 = C18(w21), G19, R19;
    "title" in i20 ? (G19 = lt6.call(this, {
      title: i20.channels.title
    }, t14), R19 = Rt3) : (G19 = lt6.call(this, i20.channels, t14), R19 = Vt7);
    let P20 = u13("svg:g", n17).call(Zt3, this, o26, n17).call(dt6, this).call(qt3, this, {
      x: D18 && u17,
      y: v23 && p21
    }).call((A26) => A26.selectAll().data(e33).enter().append("g").attr("transform", (s24) => `translate(${Math.round(U21(s24))},${Math.round(Z19(s24))})`).call(_t3, this).call((s24) => s24.append("path").attr("filter", Y20)).call((s24) => s24.append("text").each(function(f25) {
      let y21 = M2(this);
      this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
      let c23 = R19.call(l19, f25, e33, G19, t14, i20);
      if (typeof c23 == "string") for (let a19 of l19.splitLines(c23)) tt10(y21, {
        value: l19.clipLine(a19)
      });
      else {
        let a19 = /* @__PURE__ */ new Set();
        for (let h20 of c23) {
          let { label: x23 = "" } = h20;
          x23 && a19.has(x23) || (a19.add(x23), tt10(y21, h20));
        }
      }
    })));
    function tt10(A26, { label: s24, value: f25, color: y21, opacity: c23 }) {
      s24 ??= "", f25 ??= "";
      let a19 = y21 != null || c23 != null, h20, x23 = X22 * 100, [g18] = v18(s24, x23, C18, _19);
      if (g18 >= 0) s24 = s24.slice(0, g18).trimEnd() + w21, h20 = f25.trim(), f25 = "";
      else {
        (s24 || !f25 && !a19) && (f25 = " " + f25);
        let [S27] = v18(f25, x23 - C18(s24), C18, _19);
        S27 >= 0 && (h20 = f25.trim(), f25 = f25.slice(0, S27).trimEnd() + w21);
      }
      let d18 = A26.append("tspan").attr("x", 0).attr("dy", `${T21}em`).text("\u200B");
      s24 && d18.append("tspan").attr("font-weight", "bold").text(s24), f25 && d18.append(() => k24.createTextNode(f25)), a19 && d18.append("tspan").text(" \u25A0").attr("fill", y21).attr("fill-opacity", c23).style("user-select", "none"), h20 && d18.append("title").text(h20);
    }
    function et7() {
      let { width: A26, height: s24 } = o26.facet ?? o26;
      P20.selectChildren().each(function(f25) {
        let { x: y21, width: c23, height: a19 } = this.getBBox();
        c23 = Math.round(c23), a19 = Math.round(a19);
        let h20 = E29;
        if (h20 === void 0) {
          let d18 = U21(f25) + ct8, S27 = Z19(f25) + ht9, W23 = d18 + c23 + m22 + $22 * 2 < A26, nt5 = d18 - c23 - m22 - $22 * 2 > 0, V19 = S27 + a19 + m22 + $22 * 2 < s24, w26 = S27 - a19 - m22 - $22 * 2 > 0;
          h20 = W23 && nt5 ? V19 && w26 ? l19.preferredAnchor : w26 ? "bottom" : "top" : V19 && w26 ? W23 ? "left" : "right" : (W23 || nt5) && (V19 || w26) ? `${w26 ? "bottom" : "top"}-${W23 ? "left" : "right"}` : l19.preferredAnchor;
        }
        let x23 = this.firstChild, g18 = this.lastChild;
        if (x23.setAttribute("d", Gt5(h20, m22, $22, c23, a19)), y21) for (let d18 of g18.childNodes) d18.setAttribute("x", -y21);
        g18.setAttribute("y", `${+qt4(h20, g18.childNodes.length, T21).toFixed(6)}em`), g18.setAttribute("transform", `translate(${Dt8(h20, m22, $22, c23, a19)})`);
      }), P20.attr("visibility", null);
    }
    return e33.length && (P20.attr("visibility", "hidden"), L25.isConnected ? Promise.resolve().then(et7) : typeof requestAnimationFrame < "u" && requestAnimationFrame(et7)), P20.node();
  }
};
function se8(r13, { x: e33, y: t14, ...i20 } = {}) {
  return i20.frameAnchor === void 0 && ([e33, t14] = Ee5(e33, t14)), new Q21(r13, {
    ...i20,
    x: e33,
    y: t14
  });
}
function qt4(r13, e33, t14) {
  return /^top(?:-|$)/.test(r13) ? 0.94 - t14 : -0.29 - e33 * t14;
}
function Dt8(r13, e33, t14, i20, o26) {
  switch (r13) {
    case "middle":
      return [
        -i20 / 2,
        o26 / 2
      ];
    case "top-left":
      return [
        t14,
        e33 + t14
      ];
    case "top":
      return [
        -i20 / 2,
        e33 / 2 + t14
      ];
    case "top-right":
      return [
        -i20 - t14,
        e33 + t14
      ];
    case "right":
      return [
        -e33 / 2 - i20 - t14,
        o26 / 2
      ];
    case "bottom-left":
      return [
        t14,
        -e33 - t14
      ];
    case "bottom":
      return [
        -i20 / 2,
        -e33 / 2 - t14
      ];
    case "bottom-right":
      return [
        -i20 - t14,
        -e33 - t14
      ];
    case "left":
      return [
        t14 + e33 / 2,
        o26 / 2
      ];
  }
}
function Gt5(r13, e33, t14, i20, o26) {
  let n17 = i20 + t14 * 2, l19 = o26 + t14 * 2;
  switch (r13) {
    case "middle":
      return `M${-n17 / 2},${-l19 / 2}h${n17}v${l19}h${-n17}z`;
    case "top-left":
      return `M0,0l${e33},${e33}h${n17 - e33}v${l19}h${-n17}z`;
    case "top":
      return `M0,0l${e33 / 2},${e33 / 2}h${(n17 - e33) / 2}v${l19}h${-n17}v${-l19}h${(n17 - e33) / 2}z`;
    case "top-right":
      return `M0,0l${-e33},${e33}h${e33 - n17}v${l19}h${n17}z`;
    case "right":
      return `M0,0l${-e33 / 2},${-e33 / 2}v${e33 / 2 - l19 / 2}h${-n17}v${l19}h${n17}v${e33 / 2 - l19 / 2}z`;
    case "bottom-left":
      return `M0,0l${e33},${-e33}h${n17 - e33}v${-l19}h${-n17}z`;
    case "bottom":
      return `M0,0l${e33 / 2},${-e33 / 2}h${(n17 - e33) / 2}v${-l19}h${-n17}v${l19}h${(n17 - e33) / 2}z`;
    case "bottom-right":
      return `M0,0l${-e33},${-e33}h${e33 - n17}v${-l19}h${n17}z`;
    case "left":
      return `M0,0l${e33 / 2},${-e33 / 2}v${e33 / 2 - l19 / 2}h${n17}v${l19}h${-n17}v${e33 / 2 - l19 / 2}z`;
  }
}
function lt6(r13, e33) {
  let t14 = {}, i20 = this.format;
  i20 = st4(i20, r13, "x"), i20 = st4(i20, r13, "y"), this.format = i20;
  for (let o26 in i20) {
    let n17 = i20[o26];
    if (!(n17 === null || n17 === false)) if (o26 === "fx" || o26 === "fy") t14[o26] = true;
    else {
      let l19 = le4(r13, o26);
      l19 && (t14[o26] = l19);
    }
  }
  for (let o26 in r13) {
    if (o26 in t14 || o26 in i20 || Nt4.has(o26) || (o26 === "x" || o26 === "y") && r13.geometry) continue;
    let n17 = le4(r13, o26);
    if (n17) {
      if (n17.scale == null && n17.defaultScale === "color") continue;
      t14[o26] = n17;
    }
  }
  this.facet && (e33.fx && !("fx" in i20) && (t14.fx = true), e33.fy && !("fy" in i20) && (t14.fy = true));
  for (let o26 in t14) {
    let n17 = this.format[o26];
    if (typeof n17 == "string") {
      let l19 = t14[o26]?.value ?? e33[o26]?.domain() ?? [];
      this.format[o26] = (b13(l19) ? d10 : e8)(n17);
    } else if (n17 === void 0 || n17 === true) {
      let l19 = e33[o26];
      this.format[o26] = l19?.bandwidth ? Un5(l19, l19.domain()) : F16;
    }
  }
  return t14;
}
function st4(r13, e33, t14) {
  if (!(t14 in r13)) return r13;
  let i20 = `${t14}1`, o26 = `${t14}2`;
  if ((i20 in r13 || !(i20 in e33)) && (o26 in r13 || !(o26 in e33))) return r13;
  let n17 = Object.entries(r13), l19 = r13[t14];
  return n17.splice(n17.findIndex(([u17]) => u17 === t14) + 1, 0, [
    i20,
    l19
  ], [
    o26,
    l19
  ]), Object.fromEntries(n17);
}
function Rt3(r13, e33, { title: t14 }) {
  return this.format.title(t14.value[r13], r13);
}
function* Vt7(r13, e33, t14, i20, o26) {
  for (let n17 in t14) {
    if (n17 === "fx" || n17 === "fy") {
      yield {
        label: O13(i20, t14, n17),
        value: this.format[n17](e33[n17], r13)
      };
      continue;
    }
    if (n17 === "x1" && "x2" in t14 || n17 === "y1" && "y2" in t14) continue;
    let l19 = t14[n17];
    if (n17 === "x2" && "x1" in t14) yield {
      label: at11(i20, t14, "x"),
      value: ft9(this.format.x2, t14.x1, l19, r13)
    };
    else if (n17 === "y2" && "y1" in t14) yield {
      label: at11(i20, t14, "y"),
      value: ft9(this.format.y2, t14.y1, l19, r13)
    };
    else {
      let u17 = l19.value[r13], p21 = l19.scale;
      if (!i11(u17) && p21 == null) continue;
      yield {
        label: O13(i20, t14, n17),
        value: this.format[n17](u17, r13),
        color: p21 === "color" ? o26[n17][r13] : null,
        opacity: p21 === "opacity" ? o26[n17][r13] : null
      };
    }
  }
}
function ft9(r13, e33, t14, i20) {
  return t14.hint?.length ? `${r13(t14.value[i20] - e33.value[i20], i20)}` : `${r13(e33.value[i20], i20)}\u2013${r13(t14.value[i20], i20)}`;
}
function at11(r13, e33, t14) {
  let i20 = O13(r13, e33, `${t14}1`, t14), o26 = O13(r13, e33, `${t14}2`, t14);
  return i20 === o26 ? i20 : `${i20}\u2013${o26}`;
}
function O13(r13, e33, t14, i20 = t14) {
  let o26 = e33[t14], n17 = r13[o26?.scale ?? t14];
  return String(n17?.label ?? o26?.label ?? i20);
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/dimensions.mjs
function v20(m22, i20, a19 = {}) {
  let e33 = 0.5 - E21, o26 = 0.5 + E21, n17 = 0.5 + E21, g18 = 0.5 - E21;
  for (let { marginTop: t14, marginRight: c23, marginBottom: h20, marginLeft: M22 } of i20) t14 > e33 && (e33 = t14), c23 > o26 && (o26 = c23), h20 > n17 && (n17 = h20), M22 > g18 && (g18 = M22);
  let { margin: r13, marginTop: f25 = r13 !== void 0 ? r13 : e33, marginRight: u17 = r13 !== void 0 ? r13 : o26, marginBottom: s24 = r13 !== void 0 ? r13 : n17, marginLeft: d18 = r13 !== void 0 ? r13 : g18 } = a19;
  f25 = +f25, u17 = +u17, s24 = +s24, d18 = +d18;
  let { width: l19 = 640, height: w26 = $20(m22, a19, {
    width: l19,
    marginTopDefault: e33,
    marginRightDefault: o26,
    marginBottomDefault: n17,
    marginLeftDefault: g18
  }) + Math.max(0, f25 - e33 + s24 - n17) } = a19;
  l19 = +l19, w26 = +w26;
  let p21 = {
    width: l19,
    height: w26,
    marginTop: f25,
    marginRight: u17,
    marginBottom: s24,
    marginLeft: d18
  };
  if (m22.fx || m22.fy) {
    let { margin: t14, marginTop: c23 = t14 !== void 0 ? t14 : f25, marginRight: h20 = t14 !== void 0 ? t14 : u17, marginBottom: M22 = t14 !== void 0 ? t14 : s24, marginLeft: x23 = t14 !== void 0 ? t14 : d18 } = a19.facet ?? {};
    c23 = +c23, h20 = +h20, M22 = +M22, x23 = +x23, p21.facet = {
      marginTop: c23,
      marginRight: h20,
      marginBottom: M22,
      marginLeft: x23
    };
  }
  return p21;
}
function $20({ x: m22, y: i20, fy: a19, fx: e33 }, { projection: o26, aspectRatio: n17 }, { width: g18, marginTopDefault: r13, marginRightDefault: f25, marginBottomDefault: u17, marginLeftDefault: s24 }) {
  let d18 = a19 && a19.scale.domain().length || 1, l19 = yt6(o26);
  if (l19) {
    let p21 = e33 ? e33.scale.domain().length : 1, t14 = (1.1 * d18 - 0.1) / (1.1 * p21 - 0.1) * l19, c23 = Math.max(0.1, Math.min(10, t14));
    return Math.round((g18 - s24 - f25) * c23 + r13 + u17);
  }
  let w26 = i20 ? S19(i20) ? i20.scale.domain().length || 1 : Math.max(7, 17 / d18) : 1;
  if (n17 != null) {
    if (n17 = +n17, !(isFinite(n17) && n17 > 0)) throw new Error(`invalid aspectRatio: ${n17}`);
    let p21 = L21("y", i20) / (L21("x", m22) * n17), t14 = e33 ? e33.scale.bandwidth() : 1, c23 = a19 ? a19.scale.bandwidth() : 1, h20 = t14 * (g18 - s24 - f25) - m22.insetLeft - m22.insetRight;
    return (p21 * h20 + i20.insetTop + i20.insetBottom) / c23 + r13 + u17;
  }
  return !!(i20 || a19) * Math.max(1, Math.min(60, w26 * d18)) * 20 + !!e33 * 30 + 60;
}
function L21(m22, i20) {
  if (!i20) throw new Error(`aspectRatio requires ${m22} scale`);
  let { type: a19, domain: e33 } = i20, o26;
  switch (a19) {
    case "linear":
    case "utc":
    case "time":
      o26 = Number;
      break;
    case "pow": {
      let r13 = i20.scale.exponent();
      o26 = (f25) => Math.pow(f25, r13);
      break;
    }
    case "log":
      o26 = Math.log;
      break;
    case "point":
    case "band":
      return e33.length;
    default:
      throw new Error(`unsupported ${m22} scale for aspectRatio: ${a19}`);
  }
  let [n17, g18] = E(e33);
  return Math.abs(o26(g18) - o26(n17));
}

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/plot.mjs
function Pt4(e33 = {}) {
  let { facet: t14, style: n17, title: a19, subtitle: r13, caption: o26, ariaLabel: f25, ariaDescription: u17 } = e33, c23 = Ht5(e33.className), d18 = e33.marks === void 0 ? [] : oe8(e33.marks);
  d18.push(...lt7(d18));
  let g18 = ot9(t14, e33), x23 = /* @__PURE__ */ new Map();
  for (let i20 of d18) {
    let s24 = ce6(i20, g18, e33);
    s24 && x23.set(i20, s24);
  }
  let $22 = /* @__PURE__ */ new Map();
  g18 && G18($22, [
    g18
  ], e33), G18($22, x23, e33);
  let k24 = oe8(ut9(d18, $22, e33));
  for (let i20 of k24) {
    let s24 = ce6(i20, g18, e33);
    s24 && x23.set(i20, s24);
  }
  d18.unshift(...k24);
  let y21 = R14($22, e33);
  if (y21 !== void 0) {
    let i20 = g18 ? z16(y21, g18) : void 0;
    for (let m22 of d18) {
      if (m22.facet === null || m22.facet === "super") continue;
      let l19 = x23.get(m22);
      l19 !== void 0 && (l19.facetsIndex = m22.fx != null || m22.fy != null ? z16(y21, l19) : i20);
    }
    let s24 = /* @__PURE__ */ new Set();
    for (let { facetsIndex: m22 } of x23.values()) m22?.forEach((l19, p21) => {
      l19?.length > 0 && s24.add(p21);
    });
    y21.forEach(0 < s24.size && s24.size < y21.length ? (m22, l19) => m22.empty = !s24.has(l19) : (m22) => m22.empty = false);
    for (let m22 of d18) if (m22.facet === "exclude") {
      let l19 = x23.get(m22);
      l19 !== void 0 && (l19.facetsIndex = W15(l19.facetsIndex));
    }
  }
  for (let i20 of l13.keys()) De3(e33[i20]) && i20 !== "fx" && i20 !== "fy" && $22.set(i20, []);
  let h20 = /* @__PURE__ */ new Map();
  for (let i20 of d18) {
    if (h20.has(i20)) throw new Error("duplicate mark; each mark must be unique");
    let { facetsIndex: s24, channels: m22 } = x23.get(i20) ?? {}, { data: l19, facets: p21, channels: v23 } = i20.initialize(s24, m22, e33);
    Q22(v23, e33), h20.set(i20, {
      data: l19,
      facets: p21,
      channels: v23
    });
  }
  let F28 = Ge4(G18($22, h20, e33), e33), b25 = v20(F28, d18, e33);
  Je5(F28, b25);
  let E29 = He3(F28), { fx: j26, fy: I21 } = E29, C18 = j26 || I21 ? qe4(F28, b25) : b25, Z19 = j26 || I21 ? yt10(E29, b25) : b25, w26 = m17(e33), M22 = w26.document, T21 = d("svg").call(M22.documentElement), A26 = T21;
  w26.ownerSVGElement = T21, w26.className = c23, w26.projection = ft5(e33, C18), w26.path = function() {
    return Oi(this.projection ?? gt9(E29));
  }, w26.filterFacets = (i20, s24) => z16(y21, {
    channels: s24,
    groups: S20(i20, s24)
  }), w26.getMarkState = (i20) => {
    let s24 = h20.get(i20), m22 = x23.get(i20);
    return {
      ...s24,
      channels: {
        ...s24.channels,
        ...m22?.channels
      }
    };
  }, w26.dispatchValue = (i20) => {
    A26.value !== i20 && (A26.value = i20, A26.dispatchEvent(new w26.document.defaultView.Event("input", {
      bubbles: true
    })));
  };
  let O15 = /* @__PURE__ */ new Set();
  for (let [i20, s24] of h20) if (i20.initializer != null) {
    let m22 = i20.facet === "super" ? Z19 : C18, l19 = i20.initializer(s24.data, s24.facets, s24.channels, E29, m22, w26);
    if (l19.data !== void 0 && (s24.data = l19.data), l19.facets !== void 0 && (s24.facets = l19.facets), l19.channels !== void 0) {
      let { fx: p21, fy: v23, ...S27 } = l19.channels;
      st5(S27), Object.assign(s24.channels, S27);
      for (let z29 of Object.values(S27)) {
        let { scale: L25 } = z29;
        L25 != null && !y14(l13.get(L25)) && (ge7(z29, e33), O15.add(L25));
      }
      (p21 != null || v23 != null) && x23.set(i20, true);
    }
  }
  if (O15.size) {
    let i20 = /* @__PURE__ */ new Map();
    G18(i20, h20, e33, (p21) => O15.has(p21)), G18($22, h20, e33, (p21) => O15.has(p21));
    let s24 = xt11(Ge4(i20, e33), F28), { scales: m22, ...l19 } = He3(s24);
    Object.assign(F28, s24), Object.assign(E29, l19), Object.assign(E29.scales, m22);
  }
  let R19, _19;
  y21 !== void 0 && (R19 = {
    x: j26?.domain(),
    y: I21?.domain()
  }, y21 = N16(y21, R19), _19 = U14(j26, I21, b25));
  for (let [i20, s24] of h20) s24.values = i20.scale(s24.channels, E29, w26);
  let { width: W23, height: ee6 } = b25;
  M2(T21).attr("class", c23).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", W23).attr("height", ee6).attr("viewBox", `0 0 ${W23} ${ee6}`).attr("aria-label", f25).attr("aria-description", u17).call((i20) => i20.append("style").text(`:where(.${c23}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${c23} text),
:where(.${c23} tspan) {
  white-space: pre;
}`)).call(Ut5, n17);
  for (let i20 of d18) {
    let { channels: s24, values: m22, facets: l19 } = h20.get(i20);
    if (y21 === void 0 || i20.facet === "super") {
      let p21 = null;
      if (l19 && (p21 = l19[0], p21 = i20.filter(p21, s24, m22), p21.length === 0)) continue;
      let v23 = i20.render(p21, E29, m22, Z19, w26);
      if (v23 == null) continue;
      T21.appendChild(v23);
    } else {
      let p21;
      for (let v23 of y21) {
        if (!(i20.facetAnchor?.(y21, R19, v23) ?? !v23.empty)) continue;
        let S27 = null;
        if (l19) {
          let L25 = x23.has(i20);
          if (S27 = l19[L25 ? v23.i : 0], S27 = i20.filter(S27, s24, m22), S27.length === 0) continue;
          !L25 && S27 === l19[0] && (S27 = Be3(S27)), S27.fx = v23.x, S27.fy = v23.y, S27.fi = v23.i;
        }
        let z29 = i20.render(S27, E29, m22, C18, w26);
        if (z29 != null) {
          (p21 ??= M2(T21).append("g")).append(() => z29).datum(v23);
          for (let L25 of [
            "aria-label",
            "aria-description",
            "aria-hidden",
            "transform"
          ]) z29.hasAttribute(L25) && (p21.attr(L25, z29.getAttribute(L25)), z29.removeAttribute(L25));
        }
      }
      p21?.selectChildren().each(_19);
    }
  }
  let te6 = M16(F28, w26, e33), { figure: xe6 = a19 != null || r13 != null || o26 != null || te6.length > 0 } = e33;
  xe6 && (A26 = M22.createElement("figure"), A26.className = `${c23}-figure`, A26.style.maxWidth = "initial", a19 != null && A26.append(se9(M22, a19, "h2")), r13 != null && A26.append(se9(M22, r13, "h3")), A26.append(...te6, T21), o26 != null && A26.append(rt8(M22, o26)), "value" in T21 && (A26.value = T21.value, delete T21.value)), A26.scale = tt8(E29.scales), A26.legend = z21(F28, w26, e33);
  let V19 = e31();
  return V19 > 0 && M2(T21).append("text").attr("x", W23).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("\u26A0\uFE0F").append("title").text(`${V19.toLocaleString("en-US")} warning${V19 === 1 ? "" : "s"}. Please check the console.`), A26;
}
function se9(e33, t14, n17) {
  if (t14.ownerDocument) return t14;
  let a19 = e33.createElement(n17);
  return a19.append(t14), a19;
}
function rt8(e33, t14) {
  let n17 = e33.createElement("figcaption");
  return n17.append(t14), n17;
}
function oe8(e33) {
  return e33.flat(1 / 0).filter((t14) => t14 != null).map(ft10);
}
function ft10(e33) {
  return typeof e33.render == "function" ? e33 : new J18(e33);
}
var J18 = class extends g13 {
  constructor(t14) {
    if (typeof t14 != "function") throw new TypeError("invalid mark; missing render function");
    super(), this.render = t14;
  }
  render() {
  }
};
function Q22(e33, t14) {
  for (let n17 in e33) ge7(e33[n17], t14);
  return e33;
}
function ge7(e33, t14) {
  let { scale: n17, transform: a19 = true } = e33;
  if (n17 == null || !a19) return;
  let { type: r13, percent: o26, interval: f25, transform: u17 = o26 ? (c23) => c23 == null ? NaN : c23 * 100 : ne4(f25, r13) } = t14[n17] ?? {};
  u17 != null && (e33.value = i14(e33.value, u17), e33.transform = false);
}
function st5(e33) {
  for (let t14 in e33) P15(t14, e33[t14]);
}
function G18(e33, t14, n17, a19 = we3) {
  for (let { channels: r13 } of t14.values()) for (let o26 in r13) {
    let f25 = r13[o26], { scale: u17 } = f25;
    if (u17 != null && a19(u17)) if (u17 === "projection") {
      if (!mt6(n17)) {
        let c23 = n17.x?.domain === void 0, d18 = n17.y?.domain === void 0;
        if (c23 || d18) {
          let [g18, x23] = pt5(f25);
          c23 && q24(e33, "x", g18), d18 && q24(e33, "y", x23);
        }
      }
    } else q24(e33, u17, f25);
  }
  return e33;
}
function q24(e33, t14, n17) {
  let a19 = e33.get(t14);
  a19 !== void 0 ? a19.push(n17) : e33.set(t14, [
    n17
  ]);
}
function ot9(e33, t14) {
  if (e33 == null) return;
  let { x: n17, y: a19 } = e33;
  if (n17 == null && a19 == null) return;
  let r13 = Se3(e33.data);
  if (r13 == null) throw new Error("missing facet data");
  let o26 = {};
  n17 != null && (o26.fx = K13(r13, {
    value: n17,
    scale: "fx"
  })), a19 != null && (o26.fy = K13(r13, {
    value: a19,
    scale: "fy"
  })), Q22(o26, t14);
  let f25 = S20(r13, o26);
  return {
    channels: o26,
    groups: f25,
    data: e33.data
  };
}
function ce6(e33, t14, n17) {
  if (e33.facet === null || e33.facet === "super") return;
  let { fx: a19, fy: r13 } = e33;
  if (a19 != null || r13 != null) {
    let c23 = Se3(e33.data ?? a19 ?? r13);
    if (c23 === void 0) throw new Error(`missing facet data in ${e33.ariaLabel}`);
    if (c23 === null) return;
    let d18 = {};
    return a19 != null && (d18.fx = K13(c23, {
      value: a19,
      scale: "fx"
    })), r13 != null && (d18.fy = K13(c23, {
      value: r13,
      scale: "fy"
    })), Q22(d18, n17), {
      channels: d18,
      groups: S20(c23, d18)
    };
  }
  if (t14 === void 0) return;
  let { channels: o26, groups: f25, data: u17 } = t14;
  if (e33.facet !== "auto" || e33.data === u17) return {
    channels: o26,
    groups: f25
  };
  u17.length > 0 && (f25.size > 1 || f25.size === 1 && o26.fx && o26.fy && [
    ...f25
  ][0][1].size > 1) && z14(Se3(e33.data)) === z14(u17) && o24(`Warning: the ${e33.ariaLabel} mark appears to use faceted data, but isn\u2019t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
}
function ct6(e33, t14 = {}) {
  return D12({
    ...t14,
    x: null,
    y: null
  }, (n17, a19, r13, o26, f25, u17) => u17.getMarkState(e33));
}
function lt7(e33) {
  let t14 = [];
  for (let n17 of e33) {
    let a19 = n17.tip;
    if (a19) {
      a19 === true ? a19 = {} : typeof a19 == "string" && (a19 = {
        pointer: a19
      });
      let { pointer: r13, preferredAnchor: o26 } = a19;
      r13 = /^x$/i.test(r13) ? yt7 : /^y$/i.test(r13) ? mt8 : pt6, a19 = r13(ct6(n17, a19)), a19.title = null, o26 === void 0 && (a19.preferredAnchor = r13 === mt8 ? "left" : "bottom");
      let f25 = se8(n17.data, a19);
      f25.facet = n17.facet, f25.facetAnchor = n17.facetAnchor, t14.push(f25);
    }
  }
  return t14;
}
function ut9(e33, t14, n17) {
  let { projection: a19, x: r13 = {}, y: o26 = {}, fx: f25 = {}, fy: u17 = {}, axis: c23, grid: d18, facet: g18 = {}, facet: { axis: x23 = c23, grid: $22 } = g18, x: { axis: k24 = c23, grid: y21 = k24 === null ? null : d18 } = r13, y: { axis: h20 = c23, grid: F28 = h20 === null ? null : d18 } = o26, fx: { axis: b25 = x23, grid: E29 = b25 === null ? null : $22 } = f25, fy: { axis: j26 = x23, grid: I21 = j26 === null ? null : $22 } = u17 } = n17;
  (a19 || !De3(r13) && !le6("x", e33)) && (k24 = y21 = null), (a19 || !De3(o26) && !le6("y", e33)) && (h20 = F28 = null), t14.has("fx") || (b25 = E29 = null), t14.has("fy") || (j26 = I21 = null), k24 === void 0 && (k24 = !P19(e33, "x")), h20 === void 0 && (h20 = !P19(e33, "y")), b25 === void 0 && (b25 = !P19(e33, "fx")), j26 === void 0 && (j26 = !P19(e33, "fy")), k24 === true && (k24 = "bottom"), h20 === true && (h20 = "left"), b25 === true && (b25 = k24 === "top" || k24 === null ? "bottom" : "top"), j26 === true && (j26 = h20 === "right" || h20 === null ? "left" : "right");
  let C18 = [];
  return N18(C18, I21, yt9, u17), D16(C18, j26, ct5, "right", "left", g18, u17), N18(C18, E29, $t5, f25), D16(C18, b25, at9, "top", "bottom", g18, f25), N18(C18, F28, gt12, o26), D16(C18, h20, pt8, "left", "right", n17, o26), N18(C18, y21, Tt5, r13), D16(C18, k24, xt9, "bottom", "top", n17, r13), C18;
}
function D16(e33, t14, n17, a19, r13, o26, f25) {
  if (!t14) return;
  let u17 = dt7(t14);
  f25 = mt11(u17 ? a19 : t14, o26, f25);
  let { line: c23 } = f25;
  (n17 === pt8 || n17 === xt9) && c23 && !fe5(c23) && e33.push(W19(ht8(f25))), e33.push(n17(f25)), u17 && e33.push(n17({
    ...f25,
    anchor: r13,
    label: null
  }));
}
function N18(e33, t14, n17, a19) {
  !t14 || fe5(t14) || e33.push(n17(pt9(t14, a19)));
}
function dt7(e33) {
  return /^\s*both\s*$/i.test(e33);
}
function mt11(e33, t14, { line: n17 = t14.line, ticks: a19, tickSize: r13, tickSpacing: o26, tickPadding: f25, tickFormat: u17, tickRotate: c23, fontVariant: d18, ariaLabel: g18, ariaDescription: x23, label: $22 = t14.label, labelAnchor: k24, labelArrow: y21 = t14.labelArrow, labelOffset: h20 }) {
  return {
    anchor: e33,
    line: n17,
    ticks: a19,
    tickSize: r13,
    tickSpacing: o26,
    tickPadding: f25,
    tickFormat: u17,
    tickRotate: c23,
    fontVariant: d18,
    ariaLabel: g18,
    ariaDescription: x23,
    label: $22,
    labelAnchor: k24,
    labelArrow: y21,
    labelOffset: h20
  };
}
function ht8(e33) {
  let { anchor: t14, line: n17 } = e33;
  return {
    anchor: t14,
    facetAnchor: t14 + "-empty",
    stroke: n17 === true ? void 0 : n17
  };
}
function pt9(e33, { stroke: t14 = ue4(e33) ? e33 : void 0, ticks: n17 = gt14(e33) ? e33 : void 0, tickSpacing: a19, ariaLabel: r13, ariaDescription: o26 }) {
  return {
    stroke: t14,
    ticks: n17,
    tickSpacing: a19,
    ariaLabel: r13,
    ariaDescription: o26
  };
}
function gt14(e33) {
  switch (typeof e33) {
    case "number":
      return true;
    case "string":
      return !ue4(e33);
  }
  return $11(e33) || typeof e33?.range == "function";
}
function P19(e33, t14) {
  let n17 = `${t14}-axis `;
  return e33.some((a19) => a19.ariaLabel?.startsWith(n17));
}
function le6(e33, t14) {
  for (let n17 of t14) for (let a19 in n17.channels) {
    let { scale: r13 } = n17.channels[a19];
    if (r13 === e33 || r13 === "projection") return true;
  }
  return false;
}
function xt11(e33, t14) {
  for (let n17 in e33) {
    let a19 = e33[n17], r13 = t14[n17];
    a19.label === void 0 && r13 && (a19.label = r13.label);
  }
  return e33;
}
function yt10({ fx: e33, fy: t14 }, n17) {
  let { marginTop: a19, marginRight: r13, marginBottom: o26, marginLeft: f25, width: u17, height: c23 } = N15(n17), d18 = e33 && ue6(e33), g18 = t14 && ue6(t14);
  return {
    marginTop: t14 ? g18[0] : a19,
    marginRight: e33 ? u17 - d18[1] : r13,
    marginBottom: t14 ? c23 - g18[1] : o26,
    marginLeft: e33 ? d18[0] : f25,
    inset: {
      marginTop: n17.marginTop,
      marginRight: n17.marginRight,
      marginBottom: n17.marginBottom,
      marginLeft: n17.marginLeft
    },
    width: u17,
    height: c23
  };
}
function ue6(e33) {
  let t14 = e33.domain();
  if (t14.length === 0) return [
    0,
    e33.bandwidth()
  ];
  let n17 = e33(t14[0]), a19 = e33(t14[t14.length - 1]);
  return a19 < n17 && ([n17, a19] = [
    a19,
    n17
  ]), [
    n17,
    a19 + e33.bandwidth()
  ];
}

// deno:https://esm.sh/binary-search-bounds@2.0.5?target=denonext
var binary_search_bounds_2_0_exports = {};
__export(binary_search_bounds_2_0_exports, {
  default: () => M20,
  eq: () => L22,
  ge: () => H21,
  gt: () => I19,
  le: () => K19,
  lt: () => J19
});

// deno:https://esm.sh/binary-search-bounds@2.0.5/denonext/binary-search-bounds.mjs
var l17 = Object.create;
var s22 = Object.defineProperty;
var w24 = Object.getOwnPropertyDescriptor;
var p19 = Object.getOwnPropertyNames;
var q25 = Object.getPrototypeOf;
var j21 = Object.prototype.hasOwnProperty;
var b23 = (t14, e33) => () => (e33 || t14((e33 = {
  exports: {}
}).exports, e33), e33.exports);
var k19 = (t14, e33, i20, r13) => {
  if (e33 && typeof e33 == "object" || typeof e33 == "function") for (let n17 of p19(e33)) !j21.call(t14, n17) && n17 !== i20 && s22(t14, n17, {
    get: () => e33[n17],
    enumerable: !(r13 = w24(e33, n17)) || r13.enumerable
  });
  return t14;
};
var z24 = (t14, e33, i20) => (i20 = t14 != null ? l17(q25(t14)) : {}, k19(e33 || !t14 || !t14.__esModule ? s22(i20, "default", {
  value: t14,
  enumerable: true
}) : i20, t14));
var g17 = b23((G19, c23) => {
  "use strict";
  function A26(t14, e33, i20, r13, n17) {
    for (var f25 = n17 + 1; r13 <= n17; ) {
      var u17 = r13 + n17 >>> 1, d18 = t14[u17], o26 = i20 !== void 0 ? i20(d18, e33) : d18 - e33;
      o26 >= 0 ? (f25 = u17, n17 = u17 - 1) : r13 = u17 + 1;
    }
    return f25;
  }
  function B19(t14, e33, i20, r13, n17) {
    for (var f25 = n17 + 1; r13 <= n17; ) {
      var u17 = r13 + n17 >>> 1, d18 = t14[u17], o26 = i20 !== void 0 ? i20(d18, e33) : d18 - e33;
      o26 > 0 ? (f25 = u17, n17 = u17 - 1) : r13 = u17 + 1;
    }
    return f25;
  }
  function C18(t14, e33, i20, r13, n17) {
    for (var f25 = r13 - 1; r13 <= n17; ) {
      var u17 = r13 + n17 >>> 1, d18 = t14[u17], o26 = i20 !== void 0 ? i20(d18, e33) : d18 - e33;
      o26 < 0 ? (f25 = u17, r13 = u17 + 1) : n17 = u17 - 1;
    }
    return f25;
  }
  function D18(t14, e33, i20, r13, n17) {
    for (var f25 = r13 - 1; r13 <= n17; ) {
      var u17 = r13 + n17 >>> 1, d18 = t14[u17], o26 = i20 !== void 0 ? i20(d18, e33) : d18 - e33;
      o26 <= 0 ? (f25 = u17, r13 = u17 + 1) : n17 = u17 - 1;
    }
    return f25;
  }
  function E29(t14, e33, i20, r13, n17) {
    for (; r13 <= n17; ) {
      var f25 = r13 + n17 >>> 1, u17 = t14[f25], d18 = i20 !== void 0 ? i20(u17, e33) : u17 - e33;
      if (d18 === 0) return f25;
      d18 <= 0 ? r13 = f25 + 1 : n17 = f25 - 1;
    }
    return -1;
  }
  function a19(t14, e33, i20, r13, n17, f25) {
    return typeof i20 == "function" ? f25(t14, e33, i20, r13 === void 0 ? 0 : r13 | 0, n17 === void 0 ? t14.length - 1 : n17 | 0) : f25(t14, e33, void 0, i20 === void 0 ? 0 : i20 | 0, r13 === void 0 ? t14.length - 1 : r13 | 0);
  }
  c23.exports = {
    ge: function(t14, e33, i20, r13, n17) {
      return a19(t14, e33, i20, r13, n17, A26);
    },
    gt: function(t14, e33, i20, r13, n17) {
      return a19(t14, e33, i20, r13, n17, B19);
    },
    lt: function(t14, e33, i20, r13, n17) {
      return a19(t14, e33, i20, r13, n17, C18);
    },
    le: function(t14, e33, i20, r13, n17) {
      return a19(t14, e33, i20, r13, n17, D18);
    },
    eq: function(t14, e33, i20, r13, n17) {
      return a19(t14, e33, i20, r13, n17, E29);
    }
  };
});
var v21 = z24(g17());
var { ge: H21, gt: I19, lt: J19, le: K19, eq: L22 } = v21;
var M20 = v21.default ?? v21;

// deno:https://esm.sh/interval-tree-1d@1.0.4/denonext/interval-tree-1d.mjs
var require2 = (n17) => {
  const e33 = (m22) => typeof m22.default < "u" ? m22.default : m22, c23 = (m22) => Object.assign({
    __esModule: true
  }, m22);
  switch (n17) {
    case "binary-search-bounds":
      return e33(binary_search_bounds_2_0_exports);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var C15 = Object.create;
var O14 = Object.defineProperty;
var U17 = Object.getOwnPropertyDescriptor;
var B18 = Object.getOwnPropertyNames;
var D17 = Object.getPrototypeOf;
var F25 = Object.prototype.hasOwnProperty;
var L23 = ((t14) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(t14, {
  get: (i20, r13) => (typeof require2 < "u" ? require2 : i20)[r13]
}) : t14)(function(t14) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + t14 + '" is not supported');
});
var M21 = (t14, i20) => () => (i20 || t14((i20 = {
  exports: {}
}).exports, i20), i20.exports);
var Y17 = (t14, i20, r13, e33) => {
  if (i20 && typeof i20 == "object" || typeof i20 == "function") for (let s24 of B18(i20)) !F25.call(t14, s24) && s24 !== r13 && O14(t14, s24, {
    get: () => i20[s24],
    enumerable: !(e33 = U17(i20, s24)) || e33.enumerable
  });
  return t14;
};
var _16 = (t14, i20, r13) => (r13 = t14 != null ? C15(D17(t14)) : {}, Y17(i20 || !t14 || !t14.__esModule ? O14(r13, "default", {
  value: t14,
  enumerable: true
}) : r13, t14));
var k20 = M21((H23, W23) => {
  "use strict";
  var v23 = L23("binary-search-bounds"), u17 = 0, f25 = 1, P20 = 2;
  W23.exports = A26;
  function m22(t14, i20, r13, e33, s24) {
    this.mid = t14, this.left = i20, this.right = r13, this.leftPoints = e33, this.rightPoints = s24, this.count = (i20 ? i20.count : 0) + (r13 ? r13.count : 0) + e33.length;
  }
  var c23 = m22.prototype;
  function a19(t14, i20) {
    t14.mid = i20.mid, t14.left = i20.left, t14.right = i20.right, t14.leftPoints = i20.leftPoints, t14.rightPoints = i20.rightPoints, t14.count = i20.count;
  }
  function N20(t14, i20) {
    var r13 = l19(i20);
    t14.mid = r13.mid, t14.left = r13.left, t14.right = r13.right, t14.leftPoints = r13.leftPoints, t14.rightPoints = r13.rightPoints, t14.count = r13.count;
  }
  function T21(t14, i20) {
    var r13 = t14.intervals([]);
    r13.push(i20), N20(t14, r13);
  }
  function j26(t14, i20) {
    var r13 = t14.intervals([]), e33 = r13.indexOf(i20);
    return e33 < 0 ? u17 : (r13.splice(e33, 1), N20(t14, r13), f25);
  }
  c23.intervals = function(t14) {
    return t14.push.apply(t14, this.leftPoints), this.left && this.left.intervals(t14), this.right && this.right.intervals(t14), t14;
  };
  c23.insert = function(t14) {
    var i20 = this.count - this.leftPoints.length;
    if (this.count += 1, t14[1] < this.mid) this.left ? 4 * (this.left.count + 1) > 3 * (i20 + 1) ? T21(this, t14) : this.left.insert(t14) : this.left = l19([
      t14
    ]);
    else if (t14[0] > this.mid) this.right ? 4 * (this.right.count + 1) > 3 * (i20 + 1) ? T21(this, t14) : this.right.insert(t14) : this.right = l19([
      t14
    ]);
    else {
      var r13 = v23.ge(this.leftPoints, t14, d18), e33 = v23.ge(this.rightPoints, t14, y21);
      this.leftPoints.splice(r13, 0, t14), this.rightPoints.splice(e33, 0, t14);
    }
  };
  c23.remove = function(t14) {
    var i20 = this.count - this.leftPoints;
    if (t14[1] < this.mid) {
      if (!this.left) return u17;
      var r13 = this.right ? this.right.count : 0;
      if (4 * r13 > 3 * (i20 - 1)) return j26(this, t14);
      var e33 = this.left.remove(t14);
      return e33 === P20 ? (this.left = null, this.count -= 1, f25) : (e33 === f25 && (this.count -= 1), e33);
    } else if (t14[0] > this.mid) {
      if (!this.right) return u17;
      var s24 = this.left ? this.left.count : 0;
      if (4 * s24 > 3 * (i20 - 1)) return j26(this, t14);
      var e33 = this.right.remove(t14);
      return e33 === P20 ? (this.right = null, this.count -= 1, f25) : (e33 === f25 && (this.count -= 1), e33);
    } else {
      if (this.count === 1) return this.leftPoints[0] === t14 ? P20 : u17;
      if (this.leftPoints.length === 1 && this.leftPoints[0] === t14) {
        if (this.left && this.right) {
          for (var o26 = this, h20 = this.left; h20.right; ) o26 = h20, h20 = h20.right;
          if (o26 === this) h20.right = this.right;
          else {
            var n17 = this.left, e33 = this.right;
            o26.count -= h20.count, o26.right = h20.left, h20.left = n17, h20.right = e33;
          }
          a19(this, h20), this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
        } else this.left ? a19(this, this.left) : a19(this, this.right);
        return f25;
      }
      for (var n17 = v23.ge(this.leftPoints, t14, d18); n17 < this.leftPoints.length && this.leftPoints[n17][0] === t14[0]; ++n17) if (this.leftPoints[n17] === t14) {
        this.count -= 1, this.leftPoints.splice(n17, 1);
        for (var e33 = v23.ge(this.rightPoints, t14, y21); e33 < this.rightPoints.length && this.rightPoints[e33][1] === t14[1]; ++e33) if (this.rightPoints[e33] === t14) return this.rightPoints.splice(e33, 1), f25;
      }
      return u17;
    }
  };
  function R19(t14, i20, r13) {
    for (var e33 = 0; e33 < t14.length && t14[e33][0] <= i20; ++e33) {
      var s24 = r13(t14[e33]);
      if (s24) return s24;
    }
  }
  function E29(t14, i20, r13) {
    for (var e33 = t14.length - 1; e33 >= 0 && t14[e33][1] >= i20; --e33) {
      var s24 = r13(t14[e33]);
      if (s24) return s24;
    }
  }
  function S27(t14, i20) {
    for (var r13 = 0; r13 < t14.length; ++r13) {
      var e33 = i20(t14[r13]);
      if (e33) return e33;
    }
  }
  c23.queryPoint = function(t14, i20) {
    if (t14 < this.mid) {
      if (this.left) {
        var r13 = this.left.queryPoint(t14, i20);
        if (r13) return r13;
      }
      return R19(this.leftPoints, t14, i20);
    } else if (t14 > this.mid) {
      if (this.right) {
        var r13 = this.right.queryPoint(t14, i20);
        if (r13) return r13;
      }
      return E29(this.rightPoints, t14, i20);
    } else return S27(this.leftPoints, i20);
  };
  c23.queryInterval = function(t14, i20, r13) {
    if (t14 < this.mid && this.left) {
      var e33 = this.left.queryInterval(t14, i20, r13);
      if (e33) return e33;
    }
    if (i20 > this.mid && this.right) {
      var e33 = this.right.queryInterval(t14, i20, r13);
      if (e33) return e33;
    }
    return i20 < this.mid ? R19(this.leftPoints, i20, r13) : t14 > this.mid ? E29(this.rightPoints, t14, r13) : S27(this.leftPoints, r13);
  };
  function z29(t14, i20) {
    return t14 - i20;
  }
  function d18(t14, i20) {
    var r13 = t14[0] - i20[0];
    return r13 || t14[1] - i20[1];
  }
  function y21(t14, i20) {
    var r13 = t14[1] - i20[1];
    return r13 || t14[0] - i20[0];
  }
  function l19(t14) {
    if (t14.length === 0) return null;
    for (var i20 = [], r13 = 0; r13 < t14.length; ++r13) i20.push(t14[r13][0], t14[r13][1]);
    i20.sort(z29);
    for (var e33 = i20[i20.length >> 1], s24 = [], o26 = [], h20 = [], r13 = 0; r13 < t14.length; ++r13) {
      var n17 = t14[r13];
      n17[1] < e33 ? s24.push(n17) : e33 < n17[0] ? o26.push(n17) : h20.push(n17);
    }
    var q29 = h20, w26 = h20.slice();
    return q29.sort(d18), w26.sort(y21), new m22(e33, l19(s24), l19(o26), q29, w26);
  }
  function p21(t14) {
    this.root = t14;
  }
  var g18 = p21.prototype;
  g18.insert = function(t14) {
    this.root ? this.root.insert(t14) : this.root = new m22(t14[0], null, null, [
      t14
    ], [
      t14
    ]);
  };
  g18.remove = function(t14) {
    if (this.root) {
      var i20 = this.root.remove(t14);
      return i20 === P20 && (this.root = null), i20 !== u17;
    }
    return false;
  };
  g18.queryPoint = function(t14, i20) {
    if (this.root) return this.root.queryPoint(t14, i20);
  };
  g18.queryInterval = function(t14, i20, r13) {
    if (t14 <= i20 && this.root) return this.root.queryInterval(t14, i20, r13);
  };
  Object.defineProperty(g18, "count", {
    get: function() {
      return this.root ? this.root.count : 0;
    }
  });
  Object.defineProperty(g18, "intervals", {
    get: function() {
      return this.root ? this.root.intervals([]) : [];
    }
  });
  function A26(t14) {
    return !t14 || t14.length === 0 ? new p21(null) : new p21(l19(t14));
  }
});
var I20 = _16(k20());
var J20 = I20.default ?? I20;

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/src/transforms/normalize.mjs
function c21(n17) {
  return {
    mapIndex(e33, r13, t14) {
      let i20 = +n17(e33, r13);
      for (let o26 of e33) t14[o26] = r13[o26] === null ? NaN : r13[o26] / i20;
    }
  };
}
function a18(n17) {
  return c21((e33, r13) => n17(e33, (t14) => r13[t14]));
}
var u16 = c21((n17, e33) => {
  for (let r13 = 0; r13 < n17.length; ++r13) {
    let t14 = e33[n17[r13]];
    if (i11(t14)) return t14;
  }
});
var E26 = c21((n17, e33) => {
  for (let r13 = n17.length - 1; r13 >= 0; --r13) {
    let t14 = e33[n17[r13]];
    if (i11(t14)) return t14;
  }
});
var X19 = a18(U);
var Y18 = a18(Ne);
var k21 = a18(qe);
var y18 = a18(I);
var A25 = a18(Ve);

// deno:https://esm.sh/@observablehq/plot@0.6.17/denonext/plot.mjs
g13.prototype.plot = function({ marks: r13 = [], ...e33 } = {}) {
  return Pt4({
    ...e33,
    marks: [
      ...r13,
      this
    ]
  });
};

// plot.ts
var data = [
  {
    category: "ABC",
    value: 10
  },
  {
    category: "B",
    value: 20
  },
  {
    category: "C",
    value: 15
  },
  {
    category: "D",
    value: 25
  },
  {
    category: "E",
    value: 30
  }
];
var timeData = Array.from({
  length: 50
}, (_19, i20) => ({
  time: i20,
  value: Math.sin(i20 * 0.1) * 10 + Math.random() * 5
}));
var scatterData = Array.from({
  length: 100
}, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 20 + 5
}));
var barChart = Pt4({
  marks: [
    B16(data, {
      x: "category",
      y: "value",
      fill: "steelblue"
    })
  ],
  width: 600,
  height: 300,
  margin: 40
});
var lineChart = Pt4({
  marks: [
    B17(timeData, {
      x: "time",
      y: "value",
      stroke: "red",
      strokeWidth: 2
    })
  ],
  width: 600,
  height: 300,
  margin: 40
});
var scatterPlot = Pt4({
  marks: [
    $19(scatterData, {
      x: "x",
      y: "y",
      r: "size",
      fill: "green",
      opacity: 0.6
    })
  ],
  width: 600,
  height: 300,
  margin: 40
});
function renderPlots() {
  const barChartElement = document.getElementById("bar-chart");
  const lineChartElement = document.getElementById("line-chart");
  const scatterPlotElement = document.getElementById("scatter-plot");
  if (barChartElement) barChartElement.appendChild(barChart);
  if (lineChartElement) lineChartElement.appendChild(lineChart);
  if (scatterPlotElement) scatterPlotElement.appendChild(scatterPlot);
}
export {
  barChart,
  data,
  lineChart,
  renderPlots,
  scatterData,
  scatterPlot,
  timeData
};
