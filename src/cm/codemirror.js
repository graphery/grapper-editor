let ws = [], zh = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++)
    (e % 2 ? zh : ws).push(t = t + n[e]);
})();
function wd(n) {
  if (n < 768) return !1;
  for (let e = 0, t = ws.length; ; ) {
    let i = e + t >> 1;
    if (n < ws[i]) t = i;
    else if (n >= zh[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function mo(n) {
  return n >= 127462 && n <= 127487;
}
const go = 8205;
function Pd(n, e, t = !0, i = !0) {
  return (t ? Vh : $d)(n, e, i);
}
function Vh(n, e, t) {
  if (e == n.length) return e;
  e && Yh(n.charCodeAt(e)) && Eh(n.charCodeAt(e - 1)) && e--;
  let i = Wr(n, e);
  for (e += yo(i); e < n.length; ) {
    let r = Wr(n, e);
    if (i == go || r == go || t && wd(r))
      e += yo(r), i = r;
    else if (mo(r)) {
      let s = 0, l = e - 2;
      for (; l >= 0 && mo(Wr(n, l)); )
        s++, l -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function $d(n, e, t) {
  for (; e > 0; ) {
    let i = Vh(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Wr(n, e) {
  let t = n.charCodeAt(e);
  if (!Eh(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Yh(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Yh(n) {
  return n >= 56320 && n < 57344;
}
function Eh(n) {
  return n >= 55296 && n < 56320;
}
function yo(n) {
  return n < 65536 ? 1 : 2;
}
class Y {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = li(this, e, t);
    let r = [];
    return this.decompose(
      0,
      e,
      r,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      r,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      r,
      1
      /* Open.From */
    ), Je.from(r, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = li(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Je.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), r = new qi(this), s = new qi(e);
    for (let l = t, o = t; ; ) {
      if (r.next(l), s.next(l), l = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
        return !1;
      if (o += r.value.length, r.done || o >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new qi(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Dh(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      i = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new _h(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? Y.empty : e.length <= 32 ? new ee(e) : Je.from(ee.split(e, []));
  }
}
class ee extends Y {
  constructor(e, t = Cd(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, r) {
    for (let s = 0; ; s++) {
      let l = this.text[s], o = r + l.length;
      if ((t ? i : o) >= e)
        return new Td(r, o, i, l);
      r = o + 1, i++;
    }
  }
  decompose(e, t, i, r) {
    let s = e <= 0 && t >= this.length ? this : new ee(Qo(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let l = i.pop(), o = Dn(s.text, l.text.slice(), 0, s.length);
      if (o.length <= 32)
        i.push(new ee(o, l.length + s.length));
      else {
        let a = o.length >> 1;
        i.push(new ee(o.slice(0, a)), new ee(o.slice(a)));
      }
    } else
      i.push(s);
  }
  replace(e, t, i) {
    if (!(i instanceof ee))
      return super.replace(e, t, i);
    [e, t] = li(this, e, t);
    let r = Dn(this.text, Dn(i.text, Qo(this.text, 0, e)), t), s = this.length + i.length - (t - e);
    return r.length <= 32 ? new ee(r, s) : Je.from(ee.split(r, []), s);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = li(this, e, t);
    let r = "";
    for (let s = 0, l = 0; s <= t && l < this.text.length; l++) {
      let o = this.text[l], a = s + o.length;
      s > e && l && (r += i), e < a && t > s && (r += o.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], r = -1;
    for (let s of e)
      i.push(s), r += s.length + 1, i.length == 32 && (t.push(new ee(i, r)), i = [], r = -1);
    return r > -1 && t.push(new ee(i, r)), t;
  }
}
class Je extends Y {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, r) {
    for (let s = 0; ; s++) {
      let l = this.children[s], o = r + l.length, a = i + l.lines - 1;
      if ((t ? a : o) >= e)
        return l.lineInner(e, t, i, r);
      r = o + 1, i = a + 1;
    }
  }
  decompose(e, t, i, r) {
    for (let s = 0, l = 0; l <= t && s < this.children.length; s++) {
      let o = this.children[s], a = l + o.length;
      if (e <= a && t >= l) {
        let h = r & ((l <= e ? 1 : 0) | (a >= t ? 2 : 0));
        l >= e && a <= t && !h ? i.push(o) : o.decompose(e - l, t - l, i, h);
      }
      l = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = li(this, e, t), i.lines < this.lines)
      for (let r = 0, s = 0; r < this.children.length; r++) {
        let l = this.children[r], o = s + l.length;
        if (e >= s && t <= o) {
          let a = l.replace(e - s, t - s, i), h = this.lines - l.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[r] = a, new Je(c, this.length - (t - e) + i.length);
          }
          return super.replace(s, o, a);
        }
        s = o + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = li(this, e, t);
    let r = "";
    for (let s = 0, l = 0; s < this.children.length && l <= t; s++) {
      let o = this.children[s], a = l + o.length;
      l > e && s && (r += i), e < a && t > l && (r += o.sliceString(e - l, t - l, i)), l = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Je))
      return 0;
    let i = 0, [r, s, l, o] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, s += t) {
      if (r == l || s == o)
        return i;
      let a = this.children[r], h = e.children[s];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let O of e)
        O.flatten(d);
      return new ee(d, t);
    }
    let r = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), s = r << 1, l = r >> 1, o = [], a = 0, h = -1, c = [];
    function u(d) {
      let O;
      if (d.lines > s && d instanceof Je)
        for (let m of d.children)
          u(m);
      else d.lines > l && (a > l || !a) ? (f(), o.push(d)) : d instanceof ee && a && (O = c[c.length - 1]) instanceof ee && d.lines + O.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new ee(O.text.concat(d.text), O.length + 1 + d.length)) : (a + d.lines > r && f(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function f() {
      a != 0 && (o.push(c.length == 1 ? c[0] : Je.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      u(d);
    return f(), o.length == 1 ? o[0] : new Je(o, t);
  }
}
Y.empty = /* @__PURE__ */ new ee([""], 0);
function Cd(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function Dn(n, e, t = 0, i = 1e9) {
  for (let r = 0, s = 0, l = !0; s < n.length && r <= i; s++) {
    let o = n[s], a = r + o.length;
    a >= t && (a > i && (o = o.slice(0, i - r)), r < t && (o = o.slice(t - r)), l ? (e[e.length - 1] += o, l = !1) : e.push(o)), r = a + 1;
  }
  return e;
}
function Qo(n, e, t) {
  return Dn(n, [""], e, t);
}
class qi {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof ee ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, r = this.nodes[i], s = this.offsets[i], l = s >> 1, o = r instanceof ee ? r.text.length : r.children.length;
      if (l == (t > 0 ? o : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof ee) {
        let a = r.text[l + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[l + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof ee ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Dh {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new qi(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class _h {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: r } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol != "undefined" && (Y.prototype[Symbol.iterator] = function() {
  return this.iter();
}, qi.prototype[Symbol.iterator] = Dh.prototype[Symbol.iterator] = _h.prototype[Symbol.iterator] = function() {
  return this;
});
class Td {
  /**
  @internal
  */
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.number = i, this.text = r;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function li(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function ue(n, e, t = !0, i = !0) {
  return Pd(n, e, t, i);
}
function Ad(n) {
  return n >= 56320 && n < 57344;
}
function Rd(n) {
  return n >= 55296 && n < 56320;
}
function xe(n, e) {
  let t = n.charCodeAt(e);
  if (!Rd(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return Ad(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function kl(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function et(n) {
  return n < 65536 ? 1 : 2;
}
const Ps = /\r\n?|\n/;
var ce = /* @__PURE__ */ function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(ce || (ce = {}));
class st {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
      let s = this.sections[t++], l = this.sections[t++];
      l < 0 ? (e(i, r, s), r += s) : r += l, i += s;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    $s(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(i, r) : e.push(r, i);
    }
    return new st(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Lh(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Cs(this, e, t);
  }
  mapPos(e, t = -1, i = ce.Simple) {
    let r = 0, s = 0;
    for (let l = 0; l < this.sections.length; ) {
      let o = this.sections[l++], a = this.sections[l++], h = r + o;
      if (a < 0) {
        if (h > e)
          return s + (e - r);
        s += o;
      } else {
        if (i != ce.Simple && h >= e && (i == ce.TrackDel && r < e && h > e || i == ce.TrackBefore && r < e || i == ce.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !o)
          return e == r || t < 0 ? s : s + a;
        s += a;
      }
      r = h;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
      let s = this.sections[i++], l = this.sections[i++], o = r + s;
      if (l >= 0 && r <= t && o >= e)
        return r < e && o > t ? "cover" : !0;
      r = o;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + i + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new st(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new st(e);
  }
}
class re extends st {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return $s(this, (t, i, r, s, l) => e = e.replace(r, r + (i - t), l), !1), e;
  }
  mapDesc(e, t = !1) {
    return Cs(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let r = 0, s = 0; r < t.length; r += 2) {
      let l = t[r], o = t[r + 1];
      if (o >= 0) {
        t[r] = o, t[r + 1] = l;
        let a = r >> 1;
        for (; i.length < a; )
          i.push(Y.empty);
        i.push(l ? e.slice(s, s + l) : Y.empty);
      }
      s += l;
    }
    return new re(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Lh(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : Cs(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    $s(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return st.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], r = [], s = new _i(this);
    e: for (let l = 0, o = 0; ; ) {
      let a = l == e.length ? 1e9 : e[l++];
      for (; o < a || o == a && s.len == 0; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, a - o);
        fe(r, c, -1);
        let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        fe(t, c, u), u > 0 && kt(i, t, s.text), s.forward(c), o += c;
      }
      let h = e[l++];
      for (; o < h; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, h - o);
        fe(t, c, -1), fe(r, c, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(c), o += c;
      }
    }
    return {
      changes: new re(t, i),
      filtered: st.create(r)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let r = [], s = [], l = 0, o = null;
    function a(c = !1) {
      if (!c && !r.length)
        return;
      l < t && fe(r, t - l, -1);
      let u = new re(r, s);
      o = o ? o.compose(u.map(o)) : u, r = [], s = [], l = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let u of c)
          h(u);
      else if (c instanceof re) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), o = o ? o.compose(c.map(o)) : c;
      } else {
        let { from: u, to: f = u, insert: d } = c;
        if (u > f || u < 0 || f > t)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`);
        let O = d ? typeof d == "string" ? Y.of(d.split(i || Ps)) : d : Y.empty, m = O.length;
        if (u == f && m == 0)
          return;
        u < l && a(), u > l && fe(r, u - l, -1), fe(r, f - u, m), kt(s, r, O), l = f;
      }
    }
    return h(e), a(!o), o;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new re(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((l, o) => o && typeof l != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; i.length < r; )
            i.push(Y.empty);
          i[r] = Y.of(s.slice(1)), t.push(s[0], i[r].length);
        }
      }
    }
    return new re(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new re(e, t);
  }
}
function fe(n, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let r = n.length - 2;
  r >= 0 && t <= 0 && t == n[r + 1] ? n[r] += e : r >= 0 && e == 0 && n[r] == 0 ? n[r + 1] += t : i ? (n[r] += e, n[r + 1] += t) : n.push(e, t);
}
function kt(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(Y.empty);
    n.push(t);
  }
}
function $s(n, e, t) {
  let i = n.inserted;
  for (let r = 0, s = 0, l = 0; l < n.sections.length; ) {
    let o = n.sections[l++], a = n.sections[l++];
    if (a < 0)
      r += o, s += o;
    else {
      let h = r, c = s, u = Y.empty;
      for (; h += o, c += a, a && i && (u = u.append(i[l - 2 >> 1])), !(t || l == n.sections.length || n.sections[l + 1] < 0); )
        o = n.sections[l++], a = n.sections[l++];
      e(r, h, s, c, u), r = h, s = c;
    }
  }
}
function Cs(n, e, t, i = !1) {
  let r = [], s = i ? [] : null, l = new _i(n), o = new _i(e);
  for (let a = -1; ; ) {
    if (l.done && o.len || o.done && l.len)
      throw new Error("Mismatched change set lengths");
    if (l.ins == -1 && o.ins == -1) {
      let h = Math.min(l.len, o.len);
      fe(r, h, -1), l.forward(h), o.forward(h);
    } else if (o.ins >= 0 && (l.ins < 0 || a == l.i || l.off == 0 && (o.len < l.len || o.len == l.len && !t))) {
      let h = o.len;
      for (fe(r, o.ins, -1); h; ) {
        let c = Math.min(l.len, h);
        l.ins >= 0 && a < l.i && l.len <= c && (fe(r, 0, l.ins), s && kt(s, r, l.text), a = l.i), l.forward(c), h -= c;
      }
      o.next();
    } else if (l.ins >= 0) {
      let h = 0, c = l.len;
      for (; c; )
        if (o.ins == -1) {
          let u = Math.min(c, o.len);
          h += u, c -= u, o.forward(u);
        } else if (o.ins == 0 && o.len < c)
          c -= o.len, o.next();
        else
          break;
      fe(r, h, a < l.i ? l.ins : 0), s && a < l.i && kt(s, r, l.text), a = l.i, l.forward(l.len - c);
    } else {
      if (l.done && o.done)
        return s ? re.createSet(r, s) : st.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Lh(n, e, t = !1) {
  let i = [], r = t ? [] : null, s = new _i(n), l = new _i(e);
  for (let o = !1; ; ) {
    if (s.done && l.done)
      return r ? re.createSet(i, r) : st.create(i);
    if (s.ins == 0)
      fe(i, s.len, 0, o), s.next();
    else if (l.len == 0 && !l.done)
      fe(i, 0, l.ins, o), r && kt(r, i, l.text), l.next();
    else {
      if (s.done || l.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, l.len), h = i.length;
        if (s.ins == -1) {
          let c = l.ins == -1 ? -1 : l.off ? 0 : l.ins;
          fe(i, a, c, o), r && c && kt(r, i, l.text);
        } else l.ins == -1 ? (fe(i, s.off ? 0 : s.len, a, o), r && kt(r, i, s.textBit(a))) : (fe(i, s.off ? 0 : s.len, l.off ? 0 : l.ins, o), r && !l.off && kt(r, i, l.text));
        o = (s.ins > a || l.ins >= 0 && l.len > a) && (o || i.length > h), s.forward2(a), l.forward(a);
      }
    }
  }
}
class _i {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? Y.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? Y.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Yt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, r;
    return this.empty ? i = r = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), i == this.from && r == this.to ? this : new Yt(i, r, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return Q.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return Q.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return Q.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Yt(e, t, i);
  }
}
class Q {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : Q.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new Q([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return Q.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, Q.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new Q(e.ranges.map((t) => Yt.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new Q([Q.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= i : s.from < i)
        return Q.normalized(e.slice(), t);
      i = s.to;
    }
    return new Q(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, r) {
    return Yt.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (r != null ? r : 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, r) {
    let s = (i != null ? i : 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return t < e ? Yt.create(t, e, 48 | s) : Yt.create(e, t, (t > e ? 8 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((r, s) => r.from - s.from), t = e.indexOf(i);
    for (let r = 1; r < e.length; r++) {
      let s = e[r], l = e[r - 1];
      if (s.empty ? s.from <= l.to : s.from < l.to) {
        let o = l.from, a = Math.max(s.to, l.to);
        r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? Q.range(a, o) : Q.range(o, a));
      }
    }
    return new Q(e, t);
  }
}
function Bh(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let vl = 0;
class T {
  constructor(e, t, i, r, s) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = r, this.id = vl++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new T(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : wl), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new _n([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new _n(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new _n(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function wl(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class _n {
  constructor(e, t, i, r) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = r, this.id = vl++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, r = this.facet.compareInput, s = this.id, l = e[s] >> 1, o = this.type == 2, a = !1, h = !1, c = [];
    for (let u of this.dependencies)
      u == "doc" ? a = !0 : u == "selection" ? h = !0 : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[u.id]);
    return {
      create(u) {
        return u.values[l] = i(u), 1;
      },
      update(u, f) {
        if (a && f.docChanged || h && (f.docChanged || f.selection) || Ts(u, c)) {
          let d = i(u);
          if (o ? !bo(d, u.values[l], r) : !r(d, u.values[l]))
            return u.values[l] = d, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let d, O = f.config.address[s];
        if (O != null) {
          let m = tr(f, O);
          if (this.dependencies.every((g) => g instanceof T ? f.facet(g) === u.facet(g) : g instanceof se ? f.field(g, !1) == u.field(g, !1) : !0) || (o ? bo(d = i(u), m, r) : r(d = i(u), m)))
            return u.values[l] = m, 0;
        } else
          d = i(u);
        return u.values[l] = d, 1;
      }
    };
  }
}
function bo(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function Ts(n, e) {
  let t = !1;
  for (let i of e)
    zi(n, i) & 1 && (t = !0);
  return t;
}
function Xd(n, e, t) {
  let i = t.map((a) => n[a.id]), r = t.map((a) => a.type), s = i.filter((a) => !(a & 1)), l = n[e.id] >> 1;
  function o(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let u = tr(a, i[c]);
      if (r[c] == 2)
        for (let f of u)
          h.push(f);
      else
        h.push(u);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        zi(a, h);
      return a.values[l] = o(a), 1;
    },
    update(a, h) {
      if (!Ts(a, s))
        return 0;
      let c = o(a);
      return e.compare(c, a.values[l]) ? 0 : (a.values[l] = c, 1);
    },
    reconfigure(a, h) {
      let c = Ts(a, i), u = h.config.facets[e.id], f = h.facet(e);
      if (u && !c && wl(t, u))
        return a.values[l] = f, 0;
      let d = o(a);
      return e.compare(d, f) ? (a.values[l] = f, 0) : (a.values[l] = d, 1);
    }
  };
}
const gn = /* @__PURE__ */ T.define({ static: !0 });
class se {
  constructor(e, t, i, r, s) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new se(vl++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(gn).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, r) => {
        let s = i.values[t], l = this.updateF(s, r);
        return this.compareF(s, l) ? 0 : (i.values[t] = l, 1);
      },
      reconfigure: (i, r) => {
        let s = i.facet(gn), l = r.facet(gn), o;
        return (o = s.find((a) => a.field == this)) && o != l.find((a) => a.field == this) ? (i.values[t] = o.create(i), 1) : r.config.address[this.id] != null ? (i.values[t] = r.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, gn.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const zt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Si(n) {
  return (e) => new jh(e, n);
}
const Xt = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Si(zt.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Si(zt.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Si(zt.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Si(zt.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Si(zt.lowest)
};
class jh {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class gi {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new As(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return gi.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class As {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class er {
  constructor(e, t, i, r, s, l) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = r, this.staticValues = s, this.facets = l, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let r = [], s = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ new Map();
    for (let f of Zd(e, t, l))
      f instanceof se ? r.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let o = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let f of r)
      o[f.id] = h.length << 1, h.push((d) => f.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let f in s) {
      let d = s[f], O = d[0].facet, m = c && c[f] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (o[O.id] = a.length << 1 | 1, wl(m, d))
          a.push(i.facet(O));
        else {
          let g = O.combine(d.map((y) => y.value));
          a.push(i && O.compare(g, i.facet(O)) ? i.facet(O) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (o[g.id] = a.length << 1 | 1, a.push(g.value)) : (o[g.id] = h.length << 1, h.push((y) => g.dynamicSlot(y)));
        o[O.id] = h.length << 1, h.push((g) => Xd(g, O, d));
      }
    }
    let u = h.map((f) => f(o));
    return new er(e, l, u, o, a, s);
  }
}
function Zd(n, e, t) {
  let i = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(l, o) {
    let a = r.get(l);
    if (a != null) {
      if (a <= o)
        return;
      let h = i[a].indexOf(l);
      h > -1 && i[a].splice(h, 1), l instanceof As && t.delete(l.compartment);
    }
    if (r.set(l, o), Array.isArray(l))
      for (let h of l)
        s(h, o);
    else if (l instanceof As) {
      if (t.has(l.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(l.compartment) || l.inner;
      t.set(l.compartment, h), s(h, o);
    } else if (l instanceof jh)
      s(l.inner, l.prec);
    else if (l instanceof se)
      i[o].push(l), l.provides && s(l.provides, o);
    else if (l instanceof _n)
      i[o].push(l), l.facet.extensions && s(l.facet.extensions, zt.default);
    else {
      let h = l.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${l}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(h, o);
    }
  }
  return s(n, zt.default), i.reduce((l, o) => l.concat(o));
}
function zi(n, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[t] = 4;
  let r = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | r;
}
function tr(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Wh = /* @__PURE__ */ T.define(), Rs = /* @__PURE__ */ T.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), Gh = /* @__PURE__ */ T.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), Ih = /* @__PURE__ */ T.define(), Nh = /* @__PURE__ */ T.define(), Uh = /* @__PURE__ */ T.define(), Fh = /* @__PURE__ */ T.define({
  combine: (n) => n.length ? n[0] : !1
});
class yt {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new Md();
  }
}
class Md {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new yt(this, e);
  }
}
class qd {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new Z(this, e);
  }
}
class Z {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new Z(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new qd(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let r of e) {
      let s = r.map(t);
      s && i.push(s);
    }
    return i;
  }
}
Z.reconfigure = /* @__PURE__ */ Z.define();
Z.appendConfig = /* @__PURE__ */ Z.define();
class ie {
  constructor(e, t, i, r, s, l) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = r, this.annotations = s, this.scrollIntoView = l, this._doc = null, this._state = null, i && Bh(i, t.newLength), s.some((o) => o.type == ie.time) || (this.annotations = s.concat(ie.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, r, s, l) {
    return new ie(e, t, i, r, s, l);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(ie.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
ie.time = /* @__PURE__ */ yt.define();
ie.userEvent = /* @__PURE__ */ yt.define();
ie.addToHistory = /* @__PURE__ */ yt.define();
ie.remote = /* @__PURE__ */ yt.define();
function zd(n, e) {
  let t = [];
  for (let i = 0, r = 0; ; ) {
    let s, l;
    if (i < n.length && (r == e.length || e[r] >= n[i]))
      s = n[i++], l = n[i++];
    else if (r < e.length)
      s = e[r++], l = e[r++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, l) : t[t.length - 1] < l && (t[t.length - 1] = l);
  }
}
function Hh(n, e, t) {
  var i;
  let r, s, l;
  return t ? (r = e.changes, s = re.empty(e.changes.length), l = n.changes.compose(e.changes)) : (r = e.changes.map(n.changes), s = n.changes.mapDesc(e.changes, !0), l = n.changes.compose(r)), {
    changes: l,
    selection: e.selection ? e.selection.map(s) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(r),
    effects: Z.mapEffects(n.effects, r).concat(Z.mapEffects(e.effects, s)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function Xs(n, e, t) {
  let i = e.selection, r = ei(e.annotations);
  return e.userEvent && (r = r.concat(ie.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof re ? e.changes : re.of(e.changes || [], t, n.facet(Gh)),
    selection: i && (i instanceof Q ? i : Q.single(i.anchor, i.head)),
    effects: ei(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Kh(n, e, t) {
  let i = Xs(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let l = !!e[s].sequential;
    i = Hh(i, Xs(n, e[s], l ? i.changes.newLength : n.doc.length), l);
  }
  let r = ie.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Yd(t ? Vd(r) : r);
}
function Vd(n) {
  let e = n.startState, t = !0;
  for (let r of e.facet(Ih)) {
    let s = r(n);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : zd(t, s));
  }
  if (t !== !0) {
    let r, s;
    if (t === !1)
      s = n.changes.invertedDesc, r = re.empty(e.doc.length);
    else {
      let l = n.changes.filter(t);
      r = l.changes, s = l.filtered.mapDesc(l.changes).invertedDesc;
    }
    n = ie.create(e, r, n.selection && n.selection.map(s), Z.mapEffects(n.effects, s), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Nh);
  for (let r = i.length - 1; r >= 0; r--) {
    let s = i[r](n);
    s instanceof ie ? n = s : Array.isArray(s) && s.length == 1 && s[0] instanceof ie ? n = s[0] : n = Kh(e, ei(s), !1);
  }
  return n;
}
function Yd(n) {
  let e = n.startState, t = e.facet(Uh), i = n;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](n);
    s && Object.keys(s).length && (i = Hh(i, Xs(e, s, n.changes.newLength), !0));
  }
  return i == n ? n : ie.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Ed = [];
function ei(n) {
  return n == null ? Ed : Array.isArray(n) ? n : [n];
}
var H = /* @__PURE__ */ function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(H || (H = {}));
const Dd = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Zs;
try {
  Zs = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function _d(n) {
  if (Zs)
    return Zs.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Dd.test(t)))
      return !0;
  }
  return !1;
}
function Ld(n) {
  return (e) => {
    if (!/\S/.test(e))
      return H.Space;
    if (_d(e))
      return H.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return H.Word;
    return H.Other;
  };
}
class E {
  constructor(e, t, i, r, s, l) {
    this.config = e, this.doc = t, this.selection = i, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, l && (l._state = this);
    for (let o = 0; o < this.config.dynamicSlots.length; o++)
      zi(this, o << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return zi(this, i), tr(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Kh(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: r } = t;
    for (let o of e.effects)
      o.is(gi.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => r.set(h, a)), t = null), r.set(o.value.compartment, o.value.extension)) : o.is(Z.reconfigure) ? (t = null, i = o.value) : o.is(Z.appendConfig) && (t = null, i = ei(i).concat(o.value));
    let s;
    t ? s = e.startState.values.slice() : (t = er.resolve(i, r, this), s = new E(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let l = e.startState.facet(Rs) ? e.newSelection : e.newSelection.asSingle();
    new E(t, e.newDoc, l, s, (o, a) => a.update(o, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: Q.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), r = this.changes(i.changes), s = [i.range], l = ei(i.effects);
    for (let o = 1; o < t.ranges.length; o++) {
      let a = e(t.ranges[o]), h = this.changes(a.changes), c = h.map(r);
      for (let f = 0; f < o; f++)
        s[f] = s[f].map(c);
      let u = r.mapDesc(h, !0);
      s.push(a.range.map(u)), r = r.compose(c), l = Z.mapEffects(l, c).concat(Z.mapEffects(ei(a.effects), u));
    }
    return {
      changes: r,
      selection: Q.create(s, t.mainIndex),
      effects: l
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof re ? e : re.of(e, this.doc.length, this.facet(E.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return Y.of(e.split(this.facet(E.lineSeparator) || Ps));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (zi(this, t), tr(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let r = e[i];
        r instanceof se && this.config.address[r.id] != null && (t[i] = r.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (i) {
      for (let s in i)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let l = i[s], o = e[s];
          r.push(l.init((a) => l.spec.fromJSON(o, a)));
        }
    }
    return E.create({
      doc: e.doc,
      selection: Q.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = er.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Y ? e.doc : Y.of((e.doc || "").split(t.staticFacet(E.lineSeparator) || Ps)), r = e.selection ? e.selection instanceof Q ? e.selection : Q.single(e.selection.anchor, e.selection.head) : Q.single(0);
    return Bh(r, i.length), t.staticFacet(Rs) || (r = r.asSingle()), new E(t, i, r, t.dynamicSlots.map(() => null), (s, l) => l.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(E.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(E.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Fh);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(E.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, r) => {
      if (r == "$")
        return "$";
      let s = +(r || 1);
      return !s || s > t.length ? i : t[s - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let r = [];
    for (let s of this.facet(Wh))
      for (let l of s(this, t, i))
        Object.prototype.hasOwnProperty.call(l, e) && r.push(l[e]);
    return r;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return Ld(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), l = e - i, o = e - i;
    for (; l > 0; ) {
      let a = ue(t, l, !1);
      if (s(t.slice(a, l)) != H.Word)
        break;
      l = a;
    }
    for (; o < r; ) {
      let a = ue(t, o);
      if (s(t.slice(o, a)) != H.Word)
        break;
      o = a;
    }
    return l == o ? null : Q.range(l + i, o + i);
  }
}
E.allowMultipleSelections = Rs;
E.tabSize = /* @__PURE__ */ T.define({
  combine: (n) => n.length ? n[0] : 4
});
E.lineSeparator = Gh;
E.readOnly = Fh;
E.phrases = /* @__PURE__ */ T.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((r) => n[r] == e[r]);
  }
});
E.languageData = Wh;
E.changeFilter = Ih;
E.transactionFilter = Nh;
E.transactionExtender = Uh;
gi.reconfigure = /* @__PURE__ */ Z.define();
function ot(n, e, t = {}) {
  let i = {};
  for (let r of n)
    for (let s of Object.keys(r)) {
      let l = r[s], o = i[s];
      if (o === void 0)
        i[s] = l;
      else if (!(o === l || l === void 0)) if (Object.hasOwnProperty.call(t, s))
        i[s] = t[s](o, l);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let r in e)
    i[r] === void 0 && (i[r] = e[r]);
  return i;
}
class _t {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Ms.create(e, t, this);
  }
}
_t.prototype.startSide = _t.prototype.endSide = 0;
_t.prototype.point = !1;
_t.prototype.mapMode = ce.TrackDel;
let Ms = class Jh {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Jh(e, t, i);
  }
};
function qs(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Pl {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, r = 0) {
    let s = i ? this.to : this.from;
    for (let l = r, o = s.length; ; ) {
      if (l == o)
        return l;
      let a = l + o >> 1, h = s[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == l)
        return h >= 0 ? l : o;
      h >= 0 ? o = a : l = a + 1;
    }
  }
  between(e, t, i, r) {
    for (let s = this.findIndex(t, -1e9, !0), l = this.findIndex(i, 1e9, !1, s); s < l; s++)
      if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], r = [], s = [], l = -1, o = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, u = this.to[a] + e, f, d;
      if (c == u) {
        let O = t.mapPos(c, h.startSide, h.mapMode);
        if (O == null || (f = d = O, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < f)))
          continue;
      } else if (f = t.mapPos(c, h.startSide), d = t.mapPos(u, h.endSide), f > d || f == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - f || h.endSide - h.startSide) < 0 || (l < 0 && (l = f), h.point && (o = Math.max(o, d - f)), i.push(h), r.push(f - l), s.push(d - l));
    }
    return { mapped: i.length ? new Pl(r, s, i, o) : null, pos: l };
  }
}
class D {
  constructor(e, t, i, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = r;
  }
  /**
  @internal
  */
  static create(e, t, i, r) {
    return new D(e, t, i, r);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: r = 0, filterTo: s = this.length } = e, l = e.filter;
    if (t.length == 0 && !l)
      return this;
    if (i && (t = t.slice().sort(qs)), this.isEmpty)
      return t.length ? D.of(t) : this;
    let o = new ec(this, null, -1).goto(0), a = 0, h = [], c = new pt();
    for (; o.value || a < t.length; )
      if (a < t.length && (o.from - t[a].from || o.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        c.addInner(u.from, u.to, u.value) || h.push(u);
      } else o.rangeIndex == 1 && o.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(o.chunkIndex) < t[a].from) && (!l || r > this.chunkEnd(o.chunkIndex) || s < this.chunkPos[o.chunkIndex]) && c.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex]) ? o.nextChunk() : ((!l || r > o.to || s < o.from || l(o.from, o.to, o.value)) && (c.addInner(o.from, o.to, o.value) || h.push(Ms.create(o.from, o.to, o.value))), o.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? D.empty : this.nextLayer.update({ add: h, filter: l, filterFrom: r, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], r = -1;
    for (let l = 0; l < this.chunk.length; l++) {
      let o = this.chunkPos[l], a = this.chunk[l], h = e.touchesRange(o, o + a.length);
      if (h === !1)
        r = Math.max(r, a.maxPoint), t.push(a), i.push(e.mapPos(o));
      else if (h === !0) {
        let { mapped: c, pos: u } = a.map(o, e);
        c && (r = Math.max(r, c.maxPoint), t.push(c), i.push(u));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new D(i, t, s || D.empty, r);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r], l = this.chunk[r];
        if (t >= s && e <= s + l.length && l.between(s, e - s, t - s, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Li.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return Li.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, r, s = -1) {
    let l = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), o = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), a = xo(l, o, i), h = new ki(l, a, s), c = new ki(o, a, s);
    i.iterGaps((u, f, d) => So(h, u, c, f, d, r)), i.empty && i.length == 0 && So(h, 0, c, 0, 0, r);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, r) {
    r == null && (r = 999999999);
    let s = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), l = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (s.length != l.length)
      return !1;
    if (!s.length)
      return !0;
    let o = xo(s, l), a = new ki(s, o, 0).goto(i), h = new ki(l, o, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !zs(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > r)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, r, s = -1) {
    let l = new ki(e, null, s).goto(t), o = t, a = l.openStart;
    for (; ; ) {
      let h = Math.min(l.to, i);
      if (l.point) {
        let c = l.activeForPoint(l.to), u = l.pointFrom < t ? c.length + 1 : l.point.startSide < 0 ? c.length : Math.min(c.length, a);
        r.point(o, h, l.point, c, u, l.pointRank), a = Math.min(l.openEnd(h), c.length);
      } else h > o && (r.span(o, h, l.active, a), a = l.openEnd(h));
      if (l.to > i)
        return a + (l.point && l.to > i ? 1 : 0);
      o = l.to, l.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new pt();
    for (let r of e instanceof Ms ? [e] : t ? Bd(e) : e)
      i.add(r.from, r.to, r.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return D.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let r = e[i]; r != D.empty; r = r.nextLayer)
        t = new D(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
D.empty = /* @__PURE__ */ new D([], [], null, -1);
function Bd(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (qs(e, i) > 0)
        return n.slice().sort(qs);
      e = i;
    }
  return n;
}
D.empty.nextLayer = D.empty;
class pt {
  finishChunk(e) {
    this.chunks.push(new Pl(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new pt())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(D.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = D.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function xo(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let s of n)
    for (let l = 0; l < s.chunk.length; l++)
      s.chunk[l].maxPoint <= 0 && i.set(s.chunk[l], s.chunkPos[l]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let l = 0; l < s.chunk.length; l++) {
      let o = i.get(s.chunk[l]);
      o != null && (t ? t.mapPos(o) : o) == s.chunkPos[l] && !(t != null && t.touchesRange(o, o + s.chunk[l].length)) && r.add(s.chunk[l]);
    }
  return r;
}
class ec {
  constructor(e, t, i, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Li {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      for (let l = e[s]; !l.isEmpty; l = l.nextLayer)
        l.maxPoint >= i && r.push(new ec(l, t, i, s));
    return r.length == 1 ? r[0] : new Li(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Gr(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Gr(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Gr(this.heap, 0);
    }
  }
}
function Gr(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length)
      break;
    let r = n[i];
    if (i + 1 < n.length && r.compare(n[i + 1]) >= 0 && (r = n[i + 1], i++), t.compare(r) < 0)
      break;
    n[i] = t, n[e] = r, e = i;
  }
}
class ki {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Li.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    yn(this.active, e), yn(this.activeTo, e), yn(this.activeRank, e), this.minActive = ko(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; )
      t++;
    Qn(this.active, t, i), Qn(this.activeTo, t, r), Qn(this.activeRank, t, s), e && Qn(e, t, this.cursor.from), this.minActive = ko(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), i && yn(i, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let r = i.length - 1; r >= 0 && i[r] < e; r--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function So(n, e, t, i, r, s) {
  n.goto(e), t.goto(i);
  let l = i + r, o = i, a = i - e;
  for (; ; ) {
    let h = n.to + a - t.to, c = h || n.endSide - t.endSide, u = c < 0 ? n.to + a : t.to, f = Math.min(u, l);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && zs(n.activeForPoint(n.to), t.activeForPoint(t.to)) || s.comparePoint(o, f, n.point, t.point) : f > o && !zs(n.active, t.active) && s.compareRange(o, f, n.active, t.active), u > l)
      break;
    (h || n.openEnd != t.openEnd) && s.boundChange && s.boundChange(u), o = u, c <= 0 && n.next(), c >= 0 && t.next();
  }
}
function zs(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !n[t].eq(e[t]))
      return !1;
  return !0;
}
function yn(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function Qn(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function ko(n, e) {
  let t = -1, i = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - i || n[r].endSide - n[t].endSide) < 0 && (t = r, i = e[r]);
  return t;
}
function yi(n, e, t = n.length) {
  let i = 0;
  for (let r = 0; r < t && r < n.length; )
    n.charCodeAt(r) == 9 ? (i += e - i % e, r++) : (i++, r = ue(n, r));
  return i;
}
function Vs(n, e, t, i) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e)
      return r;
    if (r == n.length)
      break;
    s += n.charCodeAt(r) == 9 ? t - s % t : 1, r = ue(n, r);
  }
  return i === !0 ? -1 : n.length;
}
const Ys = "ͼ", vo = typeof Symbol == "undefined" ? "__" + Ys : Symbol.for(Ys), Es = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), wo = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};
class $t {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function r(l) {
      return /^@/.test(l) ? [l] : l.split(/,\s*/);
    }
    function s(l, o, a, h) {
      let c = [], u = /^@(\w+)\b/.exec(l[0]), f = u && u[1] == "keyframes";
      if (u && o == null) return a.push(l[0] + ";");
      for (let d in o) {
        let O = o[d];
        if (/&/.test(d))
          s(
            d.split(/,\s*/).map((m) => l.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            O,
            a
          );
        else if (O && typeof O == "object") {
          if (!u) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          s(r(d), O, c, f);
        } else O != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + O + ";");
      }
      (c.length || f) && a.push((i && !u && !h ? l.map(i) : l).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let l in e) s(r(l), e[l], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = wo[vo] || 1;
    return wo[vo] = e + 1, Ys + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let r = e[Es], s = i && i.nonce;
    r ? s && r.setNonce(s) : r = new jd(e, s), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Po = /* @__PURE__ */ new Map();
class jd {
  constructor(e, t) {
    let i = e.ownerDocument || e, r = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = Po.get(i);
      if (s) return e[Es] = s;
      this.sheet = new r.CSSStyleSheet(), Po.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Es] = this;
  }
  mount(e, t) {
    let i = this.sheet, r = 0, s = 0;
    for (let l = 0; l < e.length; l++) {
      let o = e[l], a = this.modules.indexOf(o);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, o), i) for (let h = 0; h < o.rules.length; h++)
          i.insertRule(o.rules[h], r++);
      } else {
        for (; s < a; ) r += this.modules[s++].rules.length;
        r += o.rules.length, s++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let l = "";
      for (let a = 0; a < this.modules.length; a++)
        l += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = l;
      let o = t.head || t;
      this.styleTag.parentNode != o && o.insertBefore(this.styleTag, o.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Ct = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Bi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Wd = typeof navigator != "undefined" && /Mac/.test(navigator.platform), Gd = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var he = 0; he < 10; he++) Ct[48 + he] = Ct[96 + he] = String(he);
for (var he = 1; he <= 24; he++) Ct[he + 111] = "F" + he;
for (var he = 65; he <= 90; he++)
  Ct[he] = String.fromCharCode(he + 32), Bi[he] = String.fromCharCode(he);
for (var Ir in Ct) Bi.hasOwnProperty(Ir) || (Bi[Ir] = Ct[Ir]);
function Id(n) {
  var e = Wd && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Gd && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Bi : Ct)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function j() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
      var r = t[i];
      typeof r == "string" ? n.setAttribute(i, r) : r != null && (n[i] = r);
    }
    e++;
  }
  for (; e < arguments.length; e++) tc(n, arguments[e]);
  return n;
}
function tc(n, e) {
  if (typeof e == "string")
    n.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    n.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) tc(n, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
function ji(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function Ds(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Ln(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Ds(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Wi(n) {
  return n.nodeType == 3 ? Bt(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Vi(n, e, t, i) {
  return t ? $o(n, e, t, i, -1) || $o(n, e, t, i, 1) : !1;
}
function Lt(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function ir(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function $o(n, e, t, i, r) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (r < 0 ? 0 : lt(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let s = n.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = Lt(n) + (r < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (r < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return !1;
      e = r < 0 ? lt(n) : 0;
    } else
      return !1;
  }
}
function lt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Ar(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Nd(n) {
  let e = n.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function ic(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function Ud(n, e, t, i, r, s, l, o) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, u = !1; c && !u; )
    if (c.nodeType == 1) {
      let f, d = c == a.body, O = 1, m = 1;
      if (d)
        f = Nd(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (u = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let b = c.getBoundingClientRect();
        ({ scaleX: O, scaleY: m } = ic(c, b)), f = {
          left: b.left,
          right: b.left + c.clientWidth * O,
          top: b.top,
          bottom: b.top + c.clientHeight * m
        };
      }
      let g = 0, y = 0;
      if (r == "nearest")
        e.top < f.top ? (y = e.top - (f.top + l), t > 0 && e.bottom > f.bottom + y && (y = e.bottom - f.bottom + l)) : e.bottom > f.bottom && (y = e.bottom - f.bottom + l, t < 0 && e.top - y < f.top && (y = e.top - (f.top + l)));
      else {
        let b = e.bottom - e.top, S = f.bottom - f.top;
        y = (r == "center" && b <= S ? e.top + b / 2 - S / 2 : r == "start" || r == "center" && t < 0 ? e.top - l : e.bottom - S + l) - f.top;
      }
      if (i == "nearest" ? e.left < f.left ? (g = e.left - (f.left + s), t > 0 && e.right > f.right + g && (g = e.right - f.right + s)) : e.right > f.right && (g = e.right - f.right + s, t < 0 && e.left < f.left + g && (g = e.left - (f.left + s))) : g = (i == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : i == "start" == o ? e.left - s : e.right - (f.right - f.left) + s) - f.left, g || y)
        if (d)
          h.scrollBy(g, y);
        else {
          let b = 0, S = 0;
          if (y) {
            let v = c.scrollTop;
            c.scrollTop += y / m, S = (c.scrollTop - v) * m;
          }
          if (g) {
            let v = c.scrollLeft;
            c.scrollLeft += g / O, b = (c.scrollLeft - v) * O;
          }
          e = {
            left: e.left - b,
            top: e.top - S,
            right: e.right - b,
            bottom: e.bottom - S
          }, b && Math.abs(b - g) < 1 && (i = "nearest"), S && Math.abs(S - y) < 1 && (r = "nearest");
        }
      if (d)
        break;
      (e.top < f.top || e.bottom > f.bottom || e.left < f.left || e.right > f.right) && (e = {
        left: Math.max(e.left, f.left),
        right: Math.min(e.right, f.right),
        top: Math.max(e.top, f.top),
        bottom: Math.min(e.bottom, f.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Fd(n) {
  let e = n.ownerDocument, t, i;
  for (let r = n.parentNode; r && !(r == e.body || t && i); )
    if (r.nodeType == 1)
      !i && r.scrollHeight > r.clientHeight && (i = r), !t && r.scrollWidth > r.clientWidth && (t = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: t, y: i };
}
class Hd {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? lt(t) : 0), i, Math.min(e.focusOffset, i ? lt(i) : 0));
  }
  set(e, t, i, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = r;
  }
}
let It = null;
function nc(n) {
  if (n.setActive)
    return n.setActive();
  if (It)
    return n.focus(It);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(It == null ? {
    get preventScroll() {
      return It = { preventScroll: !0 }, !0;
    }
  } : void 0), !It) {
    It = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], r = e[t++], s = e[t++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
let Co;
function Bt(n, e, t = e) {
  let i = Co || (Co = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function ti(n, e, t, i) {
  let r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i);
  let s = new KeyboardEvent("keydown", r);
  s.synthetic = !0, n.dispatchEvent(s);
  let l = new KeyboardEvent("keyup", r);
  return l.synthetic = !0, n.dispatchEvent(l), s.defaultPrevented || l.defaultPrevented;
}
function Kd(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function rc(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function Jd(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, lt(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let r = t.childNodes[i - 1];
      r.contentEditable == "false" ? i-- : (t = r, i = lt(t));
    } else {
      if (t == n)
        return !0;
      i = Lt(t), t = t.parentNode;
    }
}
function sc(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function lc(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = lt(t);
    } else if (t.parentNode && !ir(t))
      i = Lt(t), t = t.parentNode;
    else
      return null;
  }
}
function oc(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !ir(t))
      i = Lt(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class de {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new de(e.parentNode, Lt(e), t);
  }
  static after(e, t) {
    return new de(e.parentNode, Lt(e) + 1, t);
  }
}
const $l = [];
class G {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, r = null, s;
      for (let l of this.children) {
        if (l.flags & 7) {
          if (!l.dom && (s = r ? r.nextSibling : i.firstChild)) {
            let o = G.get(s);
            (!o || !o.parent && o.canReuseDOM(l)) && l.reuseDOM(s);
          }
          l.sync(e, t), l.flags &= -8;
        }
        if (s = r ? r.nextSibling : i.firstChild, t && !t.written && t.node == i && s != l.dom && (t.written = !0), l.dom.parentNode == i)
          for (; s && s != l.dom; )
            s = To(s);
        else
          i.insertBefore(l.dom, s);
        r = l.dom;
      }
      for (s = r ? r.nextSibling : i.firstChild, s && t && t.node == i && (t.written = !0); s; )
        s = To(s);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let r = lt(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom)
          break;
        r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? r = -1 : r = 1), e = s;
      }
      r < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !G.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let r = 0, s = 0; ; r++) {
      let l = this.children[r];
      if (l.dom == i)
        return s;
      s += l.length + l.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let r = -1, s = -1, l = -1, o = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let u = this.children[a], f = h + u.length;
      if (h < e && f > t)
        return u.domBoundsAround(e, t, h);
      if (f >= e && r == -1 && (r = a, s = h), h > t && u.dom.parentNode == this.dom) {
        l = a, o = c;
        break;
      }
      c = f, h = f + u.breakAfter;
    }
    return {
      from: s,
      to: o < 0 ? i + this.length : o,
      startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: l < this.children.length && l >= 0 ? this.children[l].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = $l) {
    this.markDirty();
    for (let r = e; r < t; r++) {
      let s = this.children[r];
      s.parent == this && i.indexOf(s) < 0 && s.destroy();
    }
    i.length < 250 ? this.children.splice(e, t - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t));
    for (let r = 0; r < i.length; r++)
      i[r].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new ac(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, r, s, l) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
G.prototype.breakAfter = 0;
function To(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class ac {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function hc(n, e, t, i, r, s, l, o, a) {
  let { children: h } = n, c = h.length ? h[e] : null, u = s.length ? s[s.length - 1] : null, f = u ? u.breakAfter : l;
  if (!(e == i && c && !l && !f && s.length < 2 && c.merge(t, r, s.length ? u : null, t == 0, o, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (r < d.length || d.breakAfter && (u != null && u.breakAfter)) ? (e == i && (d = d.split(r), r = 0), !f && u && d.merge(0, r, u, !0, 0, a) ? s[s.length - 1] = d : ((r || d.children.length && !d.children[0].length) && d.merge(0, r, null, !1, 0, a), s.push(d))) : d != null && d.breakAfter && (u ? u.breakAfter = 1 : l = 1), i++;
    }
    for (c && (c.breakAfter = l, t > 0 && (!l && s.length && c.merge(t, c.length, s[0], !1, o, 0) ? c.breakAfter = s.shift().breakAfter : (t < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(t, c.length, null, !1, o, 0), e++)); e < i && s.length; )
      if (h[i - 1].become(s[s.length - 1]))
        i--, s.pop(), a = s.length ? 0 : o;
      else if (h[e].become(s[0]))
        e++, s.shift(), o = s.length ? 0 : a;
      else
        break;
    !s.length && e && i < h.length && !h[e - 1].breakAfter && h[i].merge(0, 0, h[e - 1], !1, o, a) && e--, (e < i || s.length) && n.replaceChildren(e, i, s);
  }
}
function cc(n, e, t, i, r, s) {
  let l = n.childCursor(), { i: o, off: a } = l.findPos(t, 1), { i: h, off: c } = l.findPos(e, -1), u = e - t;
  for (let f of i)
    u += f.length;
  n.length += u, hc(n, h, c, o, a, i, 0, r, s);
}
let Se = typeof navigator != "undefined" ? navigator : { userAgent: "", vendor: "", platform: "" }, _s = typeof document != "undefined" ? document : { documentElement: { style: {} } };
const Ls = /* @__PURE__ */ /Edge\/(\d+)/.exec(Se.userAgent), uc = /* @__PURE__ */ /MSIE \d/.test(Se.userAgent), Bs = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Se.userAgent), Rr = !!(uc || Bs || Ls), Ao = !Rr && /* @__PURE__ */ /gecko\/(\d+)/i.test(Se.userAgent), Nr = !Rr && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Se.userAgent), eO = "webkitFontSmoothing" in _s.documentElement.style, fc = !Rr && /* @__PURE__ */ /Apple Computer/.test(Se.vendor), Ro = fc && (/* @__PURE__ */ /Mobile\/\w+/.test(Se.userAgent) || Se.maxTouchPoints > 2);
var C = {
  mac: Ro || /* @__PURE__ */ /Mac/.test(Se.platform),
  windows: /* @__PURE__ */ /Win/.test(Se.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Se.platform),
  ie: Rr,
  ie_version: uc ? _s.documentMode || 6 : Bs ? +Bs[1] : Ls ? +Ls[1] : 0,
  gecko: Ao,
  gecko_version: Ao ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Se.userAgent) || [0, 0])[1] : 0,
  chrome: !!Nr,
  chrome_version: Nr ? +Nr[1] : 0,
  ios: Ro,
  android: /* @__PURE__ */ /Android\b/.test(Se.userAgent),
  safari: fc,
  webkit_version: eO ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(Se.userAgent) || [0, 0])[1] : 0,
  tabSize: _s.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const tO = 256;
class je extends G {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof je) || this.length - (t - e) + i.length > tO || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new je(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new de(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return iO(this.dom, e, t);
  }
}
class mt extends G {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let r of t)
      r.setParent(this);
  }
  setAttrs(e) {
    if (rc(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, r, s, l) {
    return i && (!(i instanceof mt && i.mark.eq(this.mark)) || e && s <= 0 || t < this.length && l <= 0) ? !1 : (cc(this, e, t, i ? i.children.slice() : [], s - 1, l - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, r = -1, s = 0;
    for (let o of this.children) {
      let a = i + o.length;
      a > e && t.push(i < e ? o.split(e - i) : o), r < 0 && i >= e && (r = s), i = a, s++;
    }
    let l = this.length - e;
    return this.length = e, r > -1 && (this.children.length = r, this.markDirty()), new mt(this.mark, t, l);
  }
  domAtPos(e) {
    return dc(this, e);
  }
  coordsAt(e, t) {
    return pc(this, e, t);
  }
}
function iO(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let r = e, s = e, l = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? C.chrome || C.gecko || (e ? (r--, l = 1) : s < i && (s++, l = -1)) : t < 0 ? r-- : s < i && s++;
  let o = Bt(n, r, s).getClientRects();
  if (!o.length)
    return null;
  let a = o[(l ? l < 0 : t >= 0) ? 0 : o.length - 1];
  return C.safari && !l && a.width == 0 && (a = Array.prototype.find.call(o, (h) => h.width) || a), l ? Ar(a, l < 0) : a || null;
}
class vt extends G {
  static create(e, t, i) {
    return new vt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = vt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, r, s, l) {
    return i && (!(i instanceof vt) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && l <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof vt && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return Y.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, r = this.posAtStart;
    return i ? i.slice(r, r + this.length) : Y.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? de.before(this.dom) : de.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let r = this.dom.getClientRects(), s = null;
    if (!r.length)
      return null;
    let l = this.side ? this.side < 0 : e > 0;
    for (let o = l ? r.length - 1 : 0; s = r[o], !(e > 0 ? o == 0 : o == r.length - 1 || s.top < s.bottom); o += l ? -1 : 1)
      ;
    return Ar(s, !l);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class oi extends G {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof oi && e.side == this.side;
  }
  split() {
    return new oi(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? de.before(this.dom) : de.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return Y.empty;
  }
  get isHidden() {
    return !0;
  }
}
je.prototype.children = vt.prototype.children = oi.prototype.children = $l;
function dc(n, e) {
  let t = n.dom, { children: i } = n, r = 0;
  for (let s = 0; r < i.length; r++) {
    let l = i[r], o = s + l.length;
    if (!(o == s && l.getSide() <= 0)) {
      if (e > s && e < o && l.dom.parentNode == t)
        return l.domAtPos(e - s);
      if (e <= s)
        break;
      s = o;
    }
  }
  for (let s = r; s > 0; s--) {
    let l = i[s - 1];
    if (l.dom.parentNode == t)
      return l.domAtPos(l.length);
  }
  for (let s = r; s < i.length; s++) {
    let l = i[s];
    if (l.dom.parentNode == t)
      return l.domAtPos(0);
  }
  return new de(t, 0);
}
function Oc(n, e, t) {
  let i, { children: r } = n;
  t > 0 && e instanceof mt && r.length && (i = r[r.length - 1]) instanceof mt && i.mark.eq(e.mark) ? Oc(i, e.children[0], t - 1) : (r.push(e), e.setParent(n)), n.length += e.length;
}
function pc(n, e, t) {
  let i = null, r = -1, s = null, l = -1;
  function o(h, c) {
    for (let u = 0, f = 0; u < h.children.length && f <= c; u++) {
      let d = h.children[u], O = f + d.length;
      O >= c && (d.children.length ? o(d, c - f) : (!s || s.isHidden && (t > 0 || rO(s, d))) && (O > c || f == O && d.getSide() > 0) ? (s = d, l = c - f) : (f < c || f == O && d.getSide() < 0 && !d.isHidden) && (i = d, r = c - f)), f = O;
    }
  }
  o(n, e);
  let a = (t < 0 ? i : s) || i || s;
  return a ? a.coordsAt(Math.max(0, a == i ? r : l), t) : nO(n);
}
function nO(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = Wi(e);
  return t[t.length - 1] || null;
}
function rO(n, e) {
  let t = n.coordsAt(0, 1), i = e.coordsAt(0, 1);
  return t && i && i.top < t.bottom;
}
function js(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const Xo = /* @__PURE__ */ Object.create(null);
function nr(n, e, t) {
  if (n == e)
    return !0;
  n || (n = Xo), e || (e = Xo);
  let i = Object.keys(n), r = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != r.length - (t && r.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let s of i)
    if (s != t && (r.indexOf(s) == -1 || n[s] !== e[s]))
      return !1;
  return !0;
}
function Ws(n, e, t) {
  let i = !1;
  if (e)
    for (let r in e)
      t && r in t || (i = !0, r == "style" ? n.style.cssText = "" : n.removeAttribute(r));
  if (t)
    for (let r in t)
      e && e[r] == t[r] || (i = !0, r == "style" ? n.style.cssText = t[r] : n.setAttribute(r, t[r]));
  return i;
}
function sO(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class Qt {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var ge = /* @__PURE__ */ function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(ge || (ge = {}));
class R extends _t {
  constructor(e, t, i, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = r;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new on(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Tt(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, r;
    if (e.isBlockGap)
      i = -5e8, r = 4e8;
    else {
      let { start: s, end: l } = mc(e, t);
      i = (s ? t ? -3e8 : -1 : 5e8) - 1, r = (l ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Tt(e, i, r, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new an(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return D.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
R.none = D.empty;
class on extends R {
  constructor(e) {
    let { start: t, end: i } = mc(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof on && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && nr(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
on.prototype.point = !1;
class an extends R {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof an && this.spec.class == e.spec.class && nr(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
an.prototype.mapMode = ce.TrackBefore;
an.prototype.point = !0;
class Tt extends R {
  constructor(e, t, i, r, s, l) {
    super(t, i, s, e), this.block = r, this.isReplace = l, this.mapMode = r ? t <= 0 ? ce.TrackBefore : ce.TrackAfter : ce.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? ge.WidgetRange : this.startSide <= 0 ? ge.WidgetBefore : ge.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Tt && lO(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Tt.prototype.point = !0;
function mc(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t != null ? t : e, end: i != null ? i : e };
}
function lO(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function Bn(n, e, t, i = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + i >= n ? t[r] = Math.max(t[r], e) : t.push(n, e);
}
class te extends G {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, i, r, s, l) {
    if (i) {
      if (!(i instanceof te))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return r && this.setDeco(i ? i.attrs : null), cc(this, e, t, i ? i.children.slice() : [], s, l), !0;
  }
  split(e) {
    let t = new te();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: r } = this.childPos(e);
    r && (t.append(this.children[i].split(r), 0), this.children[i].merge(r, this.children[i].length, null, !1, 0, 0), i++);
    for (let s = i; s < this.children.length; s++)
      t.append(this.children[s], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    nr(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    Oc(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = js(t, this.attrs || {})), i && (this.attrs = js({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return dc(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (rc(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Ws(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let r = this.dom.lastChild;
    for (; r && G.get(r) instanceof mt; )
      r = r.lastChild;
    if (!r || !this.length || r.nodeName != "BR" && ((i = G.get(r)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!C.ios || !this.children.some((s) => s instanceof je))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof je) || /[^ -~]/.test(i.text))
        return null;
      let r = Wi(i.dom);
      if (r.length != 1)
        return null;
      e += r[0].width, t = r[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let i = pc(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState, s = i.bottom - i.top;
      if (Math.abs(s - r.lineHeight) < 2 && r.textHeight < s) {
        let l = (s - r.textHeight) / 2;
        return { top: i.top + l, bottom: i.bottom - l, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof te && this.children.length == 0 && e.children.length == 0 && nr(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, r = 0; i < e.children.length; i++) {
      let s = e.children[i], l = r + s.length;
      if (l >= t) {
        if (s instanceof te)
          return s;
        if (l > t)
          break;
      }
      r = l + s.breakAfter;
    }
    return null;
  }
}
class dt extends G {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, r, s, l) {
    return i && (!(i instanceof dt) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && l <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? de.before(this.dom) : de.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new dt(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return $l;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Y.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof dt && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return i || (this.widget instanceof Gs ? null : Ar(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
}
class Gs extends Qt {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class Yi {
  constructor(e, t, i, r) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof dt && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new te()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(bn(new oi(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof dt) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: s, lineBreak: l, done: o } = this.cursor.next(this.skip);
        if (this.skip = 0, o)
          throw new Error("Ran out of text content when drawing inline views");
        if (l) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = s, this.textOff = 0;
      }
      let r = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(bn(new je(this.text.slice(this.textOff, this.textOff + r)), t), i), this.atCursorPos = !0, this.textOff += r, e -= r, i = 0;
    }
  }
  span(e, t, i, r) {
    this.buildText(t - e, i, r), this.pos = t, this.openStart < 0 && (this.openStart = r);
  }
  point(e, t, i, r, s, l) {
    if (this.disallowBlockEffectsFor[l] && i instanceof Tt) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let o = t - e;
    if (i instanceof Tt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new dt(i.widget || ai.block, o, i));
      else {
        let a = vt.create(i.widget || ai.inline, o, o ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && s <= r.length && (e < t || i.startSide > 0), c = !a.isEditable && (e < t || s > r.length || i.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), h && (u.append(bn(new oi(1), r), s), s = r.length + Math.max(0, s - r.length)), u.append(bn(a, r), s), this.atCursorPos = c, this.pendingBuffer = c ? e < t || s > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    o && (this.textOff + o <= this.text.length ? this.textOff += o : (this.skip += o - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, i, r, s) {
    let l = new Yi(e, t, i, s);
    return l.openEnd = D.spans(r, t, i, l), l.openStart < 0 && (l.openStart = l.openEnd), l.finish(l.openEnd), l;
  }
}
function bn(n, e) {
  for (let t of e)
    n = new mt(t, [n], n.length);
  return n;
}
class ai extends Qt {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
ai.inline = /* @__PURE__ */ new ai("span");
ai.block = /* @__PURE__ */ new ai("div");
var F = /* @__PURE__ */ function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(F || (F = {}));
const jt = F.LTR, Cl = F.RTL;
function gc(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const oO = /* @__PURE__ */ gc("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), aO = /* @__PURE__ */ gc("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Is = /* @__PURE__ */ Object.create(null), Ue = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  Is[e] = t, Is[t] = -e;
}
function yc(n) {
  return n <= 247 ? oO[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? aO[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const hO = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class wt {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Cl : jt;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, r) {
    let s = -1;
    for (let l = 0; l < e.length; l++) {
      let o = e[l];
      if (o.from <= t && o.to >= t) {
        if (o.level == i)
          return l;
        (s < 0 || (r != 0 ? r < 0 ? o.from < t : o.to > t : e[s].level > o.level)) && (s = l);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
function Qc(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], r = e[t];
    if (i.from != r.from || i.to != r.to || i.direction != r.direction || !Qc(i.inner, r.inner))
      return !1;
  }
  return !0;
}
const W = [];
function cO(n, e, t, i, r) {
  for (let s = 0; s <= i.length; s++) {
    let l = s ? i[s - 1].to : e, o = s < i.length ? i[s].from : t, a = s ? 256 : r;
    for (let h = l, c = a, u = a; h < o; h++) {
      let f = yc(n.charCodeAt(h));
      f == 512 ? f = c : f == 8 && u == 4 && (f = 16), W[h] = f == 4 ? 2 : f, f & 7 && (u = f), c = f;
    }
    for (let h = l, c = a, u = a; h < o; h++) {
      let f = W[h];
      if (f == 128)
        h < o - 1 && c == W[h + 1] && c & 24 ? f = W[h] = c : W[h] = 256;
      else if (f == 64) {
        let d = h + 1;
        for (; d < o && W[d] == 64; )
          d++;
        let O = h && c == 8 || d < t && W[d] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++)
          W[m] = O;
        h = d - 1;
      } else f == 8 && u == 1 && (W[h] = 1);
      c = f, f & 7 && (u = f);
    }
  }
}
function uO(n, e, t, i, r) {
  let s = r == 1 ? 2 : 1;
  for (let l = 0, o = 0, a = 0; l <= i.length; l++) {
    let h = l ? i[l - 1].to : e, c = l < i.length ? i[l].from : t;
    for (let u = h, f, d, O; u < c; u++)
      if (d = Is[f = n.charCodeAt(u)])
        if (d < 0) {
          for (let m = o - 3; m >= 0; m -= 3)
            if (Ue[m + 1] == -d) {
              let g = Ue[m + 2], y = g & 2 ? r : g & 4 ? g & 1 ? s : r : 0;
              y && (W[u] = W[Ue[m]] = y), o = m;
              break;
            }
        } else {
          if (Ue.length == 189)
            break;
          Ue[o++] = u, Ue[o++] = f, Ue[o++] = a;
        }
      else if ((O = W[u]) == 2 || O == 1) {
        let m = O == r;
        a = m ? 0 : 1;
        for (let g = o - 3; g >= 0; g -= 3) {
          let y = Ue[g + 2];
          if (y & 2)
            break;
          if (m)
            Ue[g + 2] |= 2;
          else {
            if (y & 4)
              break;
            Ue[g + 2] |= 4;
          }
        }
      }
  }
}
function fO(n, e, t, i) {
  for (let r = 0, s = i; r <= t.length; r++) {
    let l = r ? t[r - 1].to : n, o = r < t.length ? t[r].from : e;
    for (let a = l; a < o; ) {
      let h = W[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == o) {
            if (r == t.length)
              break;
            c = t[r++].to, o = r < t.length ? t[r].from : e;
          } else if (W[c] == 256)
            c++;
          else
            break;
        let u = s == 1, f = (c < e ? W[c] : i) == 1, d = u == f ? u ? 1 : 2 : i;
        for (let O = c, m = r, g = m ? t[m - 1].to : n; O > a; )
          O == g && (O = t[--m].from, g = m ? t[m - 1].to : n), W[--O] = d;
        a = c;
      } else
        s = h, a++;
    }
  }
}
function Ns(n, e, t, i, r, s, l) {
  let o = i % 2 ? 2 : 1;
  if (i % 2 == r % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, u = !1;
      if (h == s.length || a < s[h].from) {
        let m = W[a];
        m != o && (c = !1, u = m == 16);
      }
      let f = !c && o == 1 ? [] : null, d = c ? i : i + 1, O = a;
      e: for (; ; )
        if (h < s.length && O == s[h].from) {
          if (u)
            break e;
          let m = s[h];
          if (!c)
            for (let g = m.to, y = h + 1; ; ) {
              if (g == t)
                break e;
              if (y < s.length && s[y].from == g)
                g = s[y++].to;
              else {
                if (W[g] == o)
                  break e;
                break;
              }
            }
          if (h++, f)
            f.push(m);
          else {
            m.from > a && l.push(new wt(a, m.from, d));
            let g = m.direction == jt != !(d % 2);
            Us(n, g ? i + 1 : i, r, m.inner, m.from, m.to, l), a = m.to;
          }
          O = m.to;
        } else {
          if (O == t || (c ? W[O] != o : W[O] == o))
            break;
          O++;
        }
      f ? Ns(n, a, O, i + 1, r, f, l) : a < O && l.push(new wt(a, O, d)), a = O;
    }
  else
    for (let a = t, h = s.length; a > e; ) {
      let c = !0, u = !1;
      if (!h || a > s[h - 1].to) {
        let m = W[a - 1];
        m != o && (c = !1, u = m == 16);
      }
      let f = !c && o == 1 ? [] : null, d = c ? i : i + 1, O = a;
      e: for (; ; )
        if (h && O == s[h - 1].to) {
          if (u)
            break e;
          let m = s[--h];
          if (!c)
            for (let g = m.from, y = h; ; ) {
              if (g == e)
                break e;
              if (y && s[y - 1].to == g)
                g = s[--y].from;
              else {
                if (W[g - 1] == o)
                  break e;
                break;
              }
            }
          if (f)
            f.push(m);
          else {
            m.to < a && l.push(new wt(m.to, a, d));
            let g = m.direction == jt != !(d % 2);
            Us(n, g ? i + 1 : i, r, m.inner, m.from, m.to, l), a = m.from;
          }
          O = m.from;
        } else {
          if (O == e || (c ? W[O - 1] != o : W[O - 1] == o))
            break;
          O--;
        }
      f ? Ns(n, O, a, i + 1, r, f, l) : O < a && l.push(new wt(O, a, d)), a = O;
    }
}
function Us(n, e, t, i, r, s, l) {
  let o = e % 2 ? 2 : 1;
  cO(n, r, s, i, o), uO(n, r, s, i, o), fO(r, s, i, o), Ns(n, r, s, e, t, i, l);
}
function dO(n, e, t) {
  if (!n)
    return [new wt(0, 0, e == Cl ? 1 : 0)];
  if (e == jt && !t.length && !hO.test(n))
    return bc(n.length);
  if (t.length)
    for (; n.length > W.length; )
      W[W.length] = 256;
  let i = [], r = e == jt ? 0 : 1;
  return Us(n, r, r, t, 0, n.length, i), i;
}
function bc(n) {
  return [new wt(0, n, 0)];
}
let xc = "";
function OO(n, e, t, i, r) {
  var s;
  let l = i.head - n.from, o = wt.find(e, l, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc), a = e[o], h = a.side(r, t);
  if (l == h) {
    let f = o += r ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    a = e[o = f], l = a.side(!r, t), h = a.side(r, t);
  }
  let c = ue(n.text, l, a.forward(r, t));
  (c < a.from || c > a.to) && (c = h), xc = n.text.slice(Math.min(l, c), Math.max(l, c));
  let u = o == (r ? e.length - 1 : 0) ? null : e[o + (r ? 1 : -1)];
  return u && c == h && u.level + (r ? 0 : 1) < a.level ? Q.cursor(u.side(!r, t) + n.from, u.forward(r, t) ? 1 : -1, u.level) : Q.cursor(c + n.from, a.forward(r, t) ? -1 : 1, a.level);
}
function pO(n, e, t) {
  for (let i = e; i < t; i++) {
    let r = yc(n.charCodeAt(i));
    if (r == 1)
      return jt;
    if (r == 2 || r == 4)
      return Cl;
  }
  return jt;
}
const Sc = /* @__PURE__ */ T.define(), kc = /* @__PURE__ */ T.define(), vc = /* @__PURE__ */ T.define(), wc = /* @__PURE__ */ T.define(), Fs = /* @__PURE__ */ T.define(), Pc = /* @__PURE__ */ T.define(), $c = /* @__PURE__ */ T.define(), Tl = /* @__PURE__ */ T.define(), Al = /* @__PURE__ */ T.define(), Cc = /* @__PURE__ */ T.define({
  combine: (n) => n.some((e) => e)
}), Tc = /* @__PURE__ */ T.define({
  combine: (n) => n.some((e) => e)
}), Ac = /* @__PURE__ */ T.define();
class ii {
  constructor(e, t = "nearest", i = "nearest", r = 5, s = 5, l = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = r, this.xMargin = s, this.isSnapshot = l;
  }
  map(e) {
    return e.empty ? this : new ii(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new ii(Q.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const xn = /* @__PURE__ */ Z.define({ map: (n, e) => n.map(e) }), Rc = /* @__PURE__ */ Z.define();
function ve(n, e, t) {
  let i = n.facet(wc);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const ft = /* @__PURE__ */ T.define({ combine: (n) => n.length ? n[0] : !0 });
let mO = 0;
const Ft = /* @__PURE__ */ T.define({
  combine(n) {
    return n.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (n[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class ne {
  constructor(e, t, i, r, s) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = r, this.baseExtensions = s(this), this.extension = this.baseExtensions.concat(Ft.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(Ft.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: r, provide: s, decorations: l } = t || {};
    return new ne(mO++, e, i, r, (o) => {
      let a = [];
      return l && a.push(Gi.of((h) => {
        let c = h.plugin(o);
        return c ? l(c) : R.none;
      })), s && a.push(s(o)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return ne.define((i, r) => new e(i, r), t);
  }
}
class Ur {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (ve(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        ve(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        ve(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Xc = /* @__PURE__ */ T.define(), Rl = /* @__PURE__ */ T.define(), Gi = /* @__PURE__ */ T.define(), Zc = /* @__PURE__ */ T.define(), Xl = /* @__PURE__ */ T.define(), Mc = /* @__PURE__ */ T.define();
function Zo(n, e) {
  let t = n.state.facet(Mc);
  if (!t.length)
    return t;
  let i = t.map((s) => s instanceof Function ? s(n) : s), r = [];
  return D.spans(i, e.from, e.to, {
    point() {
    },
    span(s, l, o, a) {
      let h = s - e.from, c = l - e.from, u = r;
      for (let f = o.length - 1; f >= 0; f--, a--) {
        let d = o[f].spec.bidiIsolate, O;
        if (d == null && (d = pO(e.text, h, c)), a > 0 && u.length && (O = u[u.length - 1]).to == h && O.direction == d)
          O.to = c, u = O.inner;
        else {
          let m = { from: h, to: c, direction: d, inner: [] };
          u.push(m), u = m.inner;
        }
      }
    }
  }), r;
}
const qc = /* @__PURE__ */ T.define();
function Zl(n) {
  let e = 0, t = 0, i = 0, r = 0;
  for (let s of n.state.facet(qc)) {
    let l = s(n);
    l && (l.left != null && (e = Math.max(e, l.left)), l.right != null && (t = Math.max(t, l.right)), l.top != null && (i = Math.max(i, l.top)), l.bottom != null && (r = Math.max(r, l.bottom)));
  }
  return { left: e, right: t, top: i, bottom: r };
}
const Ai = /* @__PURE__ */ T.define();
class De {
  constructor(e, t, i, r) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = r;
  }
  join(e) {
    return new De(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > i.toA)) {
        if (r.toA < i.fromA)
          break;
        i = i.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let r = 0, s = 0, l = 0, o = 0; ; r++) {
      let a = r == e.length ? null : e[r], h = l - o, c = a ? a.fromB : 1e9;
      for (; s < t.length && t[s] < c; ) {
        let u = t[s], f = t[s + 1], d = Math.max(o, u), O = Math.min(c, f);
        if (d <= O && new De(d + h, O + h, d, O).addToSet(i), f > c)
          break;
        s += 2;
      }
      if (!a)
        return i;
      new De(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), l = a.toA, o = a.toB;
    }
  }
}
class rr {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = re.empty(this.startState.doc.length);
    for (let s of i)
      this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, l, o, a) => r.push(new De(s, l, o, a))), this.changedRanges = r;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new rr(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Mo extends G {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = R.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new te()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new De(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? r = this.domChanged.newSel.head : !kO(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let s = r > -1 ? yO(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new De(h, c, e.changes.mapPos(h, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (C.ie || C.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let l = this.decorations, o = this.updateDeco(), a = xO(l, o, e.changes);
    return i = De.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: r } = this.view;
    r.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let l = C.chrome || C.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, l), this.flags &= -8, l && (l.written || r.selectionRange.focusNode != l.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (l) => l.flags &= -9
      /* ViewFlag.Composition */
    );
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let l of this.children)
        l instanceof dt && l.widget instanceof Gs && s.push(l.dom);
    r.updateGaps(s);
  }
  updateChildren(e, t, i) {
    let r = i ? i.range.addToSet(e.slice()) : e, s = this.childCursor(t);
    for (let l = r.length - 1; ; l--) {
      let o = l >= 0 ? r[l] : null;
      if (!o)
        break;
      let { fromA: a, toA: h, fromB: c, toB: u } = o, f, d, O, m;
      if (i && i.range.fromB < u && i.range.toB > c) {
        let v = Yi.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), x = Yi.build(this.view.state.doc, i.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = v.breakAtStart, O = v.openStart, m = x.openEnd;
        let k = this.compositionView(i);
        x.breakAtStart ? k.breakAfter = 1 : x.content.length && k.merge(k.length, k.length, x.content[0], !1, x.openStart, 0) && (k.breakAfter = x.content[0].breakAfter, x.content.shift()), v.content.length && k.merge(0, 0, v.content[v.content.length - 1], !0, 0, v.openEnd) && v.content.pop(), f = v.content.concat(k).concat(x.content);
      } else
        ({ content: f, breakAtStart: d, openStart: O, openEnd: m } = Yi.build(this.view.state.doc, c, u, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: y } = s.findPos(h, 1), { i: b, off: S } = s.findPos(a, -1);
      hc(this, b, S, g, y, f, d, O, m);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Rc) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new je(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: r } of e.marks)
      t = new mt(r, [t], t.length);
    let i = new te();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (s, l) => {
      l.flags |= 8 | (l.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(l);
      let o = G.get(s);
      o && o != l && (o.dom = null), l.setDOM(s);
    }, i = this.childPos(e.range.fromB, 1), r = this.children[i.i];
    t(e.line, r);
    for (let s = e.marks.length - 1; s >= -1; s--)
      i = r.childPos(i.off, 1), r = r.children[i.i], t(s >= 0 ? e.marks[s].node : e.text, r);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, r = i == this.dom, s = !r && !(this.view.state.facet(ft) || this.dom.tabIndex > -1) && Ln(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(r || t || s))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let o = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(o.anchor)), h = o.empty ? a : this.moveToLine(this.domAtPos(o.head));
    if (C.gecko && o.empty && !this.hasComposition && gO(a)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = h = new de(u, 0), l = !0;
    }
    let c = this.view.observer.selectionRange;
    (l || !c.focusNode || (!Vi(a.node, a.offset, c.anchorNode, c.anchorOffset) || !Vi(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, o)) && (this.view.observer.ignore(() => {
      C.android && C.chrome && this.dom.contains(c.focusNode) && SO(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = ji(this.view.root);
      if (u) if (o.empty) {
        if (C.gecko) {
          let f = QO(a.node, a.offset);
          if (f && f != 3) {
            let d = (f == 1 ? lc : oc)(a.node, a.offset);
            d && (a = new de(d.node, d.offset));
          }
        }
        u.collapse(a.node, a.offset), o.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = o.bidiLevel);
      } else if (u.extend) {
        u.collapse(a.node, a.offset);
        try {
          u.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let f = document.createRange();
        o.anchor > o.head && ([a, h] = [h, a]), f.setEnd(h.node, h.offset), f.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(f);
      }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new de(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new de(c.focusNode, c.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Vi(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = ji(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let l = te.find(this, t.head);
    if (!l)
      return;
    let o = l.posAtStart;
    if (t.head == o || t.head == o + l.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && i.collapse(r, s);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t)
      return e;
    for (let r = e.offset; !i && r < t.childNodes.length; r++) {
      let s = G.get(t.childNodes[r]);
      s instanceof te && (i = s.domAtPos(0));
    }
    for (let r = e.offset - 1; !i && r >= 0; r--) {
      let s = G.get(t.childNodes[r]);
      s instanceof te && (i = s.domAtPos(s.length));
    }
    return i ? new de(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = G.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let r = this.children[t];
      if (i < r.length || r instanceof te)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, r = 0;
    for (let s = this.length, l = this.children.length - 1; l >= 0; l--) {
      let o = this.children[l], a = s - o.breakAfter, h = a - o.length;
      if (a < e)
        break;
      if (h <= e && (h < e || o.covers(-1)) && (a > e || o.covers(1)) && (!i || o instanceof te && !(i instanceof te && t >= 0)))
        i = o, r = h;
      else if (i && h == e && a == e && o instanceof dt && Math.abs(t) < 2) {
        if (o.deco.startSide < 0)
          break;
        l && (i = null);
      }
      s = h;
    }
    return i ? i.coordsAt(e - r, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), r = this.children[t];
    if (!(r instanceof te))
      return null;
    for (; r.children.length; ) {
      let { i: o, off: a } = r.childPos(i, 1);
      for (; ; o++) {
        if (o == r.children.length)
          return null;
        if ((r = r.children[o]).length)
          break;
      }
      i = a;
    }
    if (!(r instanceof je))
      return null;
    let s = ue(r.text, i);
    if (s == i)
      return null;
    let l = Bt(r.dom, i, s).getClientRects();
    for (let o = 0; o < l.length; o++) {
      let a = l[o];
      if (o == l.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: r } = e, s = this.view.contentDOM.clientWidth, l = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o = -1, a = this.view.textDirection == F.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let u = this.children[c], f = h + u.length;
      if (f > r)
        break;
      if (h >= i) {
        let d = u.dom.getBoundingClientRect();
        if (t.push(d.height), l) {
          let O = u.dom.lastChild, m = O ? Wi(O) : [];
          if (m.length) {
            let g = m[m.length - 1], y = a ? g.right - d.left : d.right - g.left;
            y > o && (o = y, this.minWidth = s, this.minWidthFrom = h, this.minWidthTo = f);
          }
        }
      }
      h = f + u.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? F.RTL : F.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof te) {
        let l = s.measureTextSize();
        if (l)
          return l;
      }
    let e = document.createElement("div"), t, i, r;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = Wi(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = s ? s.width / 27 : 7, r = s ? s.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: r };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new ac(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r], l = s ? s.from - 1 : this.length;
      if (l > i) {
        let o = (t.lineBlockAt(l).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(R.replace({
          widget: new Gs(o),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, l));
      }
      if (!s)
        break;
      i = s.to + 1;
    }
    return R.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(Gi).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), i = !1, r = this.view.state.facet(Zc).map((s, l) => {
      let o = typeof s == "function";
      return o && (i = !0), o ? s(this.view) : s;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = i, t.push(D.join(r))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Ac))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (c) {
        ve(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!i)
      return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, r.left),
      top: Math.min(i.top, r.top),
      right: Math.max(i.right, r.right),
      bottom: Math.max(i.bottom, r.bottom)
    });
    let s = Zl(this.view), l = {
      left: i.left - s.left,
      top: i.top - s.top,
      right: i.right + s.right,
      bottom: i.bottom + s.bottom
    }, { offsetWidth: o, offsetHeight: a } = this.view.scrollDOM;
    Ud(this.view.scrollDOM, l, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, o), -o), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == F.LTR);
  }
}
function gO(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function zc(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = lc(t.focusNode, t.focusOffset), r = oc(t.focusNode, t.focusOffset), s = i || r;
  if (r && i && r.node != i.node) {
    let o = G.get(r.node);
    if (!o || o instanceof je && o.text != r.node.nodeValue)
      s = r;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = G.get(i.node);
      !a || a instanceof je && a.text != i.node.nodeValue || (s = r);
    }
  }
  if (n.docView.lastCompositionAfterCursor = s != i, !s)
    return null;
  let l = e - s.offset;
  return { from: l, to: l + s.node.nodeValue.length, node: s.node };
}
function yO(n, e, t) {
  let i = zc(n, t);
  if (!i)
    return null;
  let { node: r, from: s, to: l } = i, o = r.nodeValue;
  if (/[\n\r]/.test(o) || n.state.doc.sliceString(i.from, i.to) != o)
    return null;
  let a = e.invertedDesc, h = new De(a.mapPos(s), a.mapPos(l), s, l), c = [];
  for (let u = r.parentNode; ; u = u.parentNode) {
    let f = G.get(u);
    if (f instanceof mt)
      c.push({ node: u, deco: f.mark });
    else {
      if (f instanceof te || u.nodeName == "DIV" && u.parentNode == n.contentDOM)
        return { range: h, text: r, marks: c, line: u };
      if (u != n.contentDOM)
        c.push({ node: u, deco: new on({
          inclusive: !0,
          attributes: sO(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function QO(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let bO = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Bn(e, t, this.changes);
  }
  comparePoint(e, t) {
    Bn(e, t, this.changes);
  }
  boundChange(e) {
    Bn(e, e, this.changes);
  }
};
function xO(n, e, t) {
  let i = new bO();
  return D.compare(n, e, t, i), i.changes;
}
function SO(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function kO(n, e) {
  let t = !1;
  return e && n.iterChangedRanges((i, r) => {
    i < e.to && r > e.from && (t = !0);
  }), t;
}
function vO(n, e, t = 1) {
  let i = n.charCategorizer(e), r = n.doc.lineAt(e), s = e - r.from;
  if (r.length == 0)
    return Q.cursor(e);
  s == 0 ? t = 1 : s == r.length && (t = -1);
  let l = s, o = s;
  t < 0 ? l = ue(r.text, s, !1) : o = ue(r.text, s);
  let a = i(r.text.slice(l, o));
  for (; l > 0; ) {
    let h = ue(r.text, l, !1);
    if (i(r.text.slice(h, l)) != a)
      break;
    l = h;
  }
  for (; o < r.length; ) {
    let h = ue(r.text, o);
    if (i(r.text.slice(o, h)) != a)
      break;
    o = h;
  }
  return Q.range(l + r.from, o + r.from);
}
function wO(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function PO(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function Fr(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function qo(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function zo(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function Hs(n, e, t) {
  let i, r, s, l, o = !1, a, h, c, u;
  for (let O = n.firstChild; O; O = O.nextSibling) {
    let m = Wi(O);
    for (let g = 0; g < m.length; g++) {
      let y = m[g];
      r && Fr(r, y) && (y = qo(zo(y, r.bottom), r.top));
      let b = wO(e, y), S = PO(t, y);
      if (b == 0 && S == 0)
        return O.nodeType == 3 ? Vo(O, e, t) : Hs(O, e, t);
      (!i || l > S || l == S && s > b) && (i = O, r = y, s = b, l = S, o = b ? e < y.left ? g > 0 : g < m.length - 1 : !0), b == 0 ? t > y.bottom && (!c || c.bottom < y.bottom) ? (a = O, c = y) : t < y.top && (!u || u.top > y.top) && (h = O, u = y) : c && Fr(c, y) ? c = zo(c, y.bottom) : u && Fr(u, y) && (u = qo(u, y.top));
    }
  }
  if (c && c.bottom >= t ? (i = a, r = c) : u && u.top <= t && (i = h, r = u), !i)
    return { node: n, offset: 0 };
  let f = Math.max(r.left, Math.min(r.right, e));
  if (i.nodeType == 3)
    return Vo(i, f, t);
  if (o && i.contentEditable != "false")
    return Hs(i, f, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function Vo(n, e, t) {
  let i = n.nodeValue.length, r = -1, s = 1e9, l = 0;
  for (let o = 0; o < i; o++) {
    let a = Bt(n, o, o + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      l || (l = e - c.left);
      let u = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && u < s) {
        let f = e >= (c.left + c.right) / 2, d = f;
        if ((C.chrome || C.gecko) && Bt(n, o).getBoundingClientRect().left == c.right && (d = !f), u <= 0)
          return { node: n, offset: o + (d ? 1 : 0) };
        r = o + (d ? 1 : 0), s = u;
      }
    }
  }
  return { node: n, offset: r > -1 ? r : l > 0 ? n.nodeValue.length : 0 };
}
function Vc(n, e, t, i = -1) {
  var r, s;
  let l = n.contentDOM.getBoundingClientRect(), o = l.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: u } = e, f = u - o;
  if (f < 0)
    return 0;
  if (f > h)
    return n.state.doc.length;
  for (let v = n.viewState.heightOracle.textHeight / 2, x = !1; a = n.elementAtHeight(f), a.type != ge.Text; )
    for (; f = i > 0 ? a.bottom + v : a.top - v, !(f >= 0 && f <= h); ) {
      if (x)
        return t ? null : 0;
      x = !0, i = -i;
    }
  u = o + f;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : t ? null : Yo(n, l, a, c, u);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Yo(n, l, a, c, u);
  let O = n.dom.ownerDocument, m = n.root.elementFromPoint ? n.root : O, g = m.elementFromPoint(c, u);
  g && !n.contentDOM.contains(g) && (g = null), g || (c = Math.max(l.left + 1, Math.min(l.right - 1, c)), g = m.elementFromPoint(c, u), g && !n.contentDOM.contains(g) && (g = null));
  let y, b = -1;
  if (g && ((r = n.docView.nearest(g)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
    if (O.caretPositionFromPoint) {
      let v = O.caretPositionFromPoint(c, u);
      v && ({ offsetNode: y, offset: b } = v);
    } else if (O.caretRangeFromPoint) {
      let v = O.caretRangeFromPoint(c, u);
      v && ({ startContainer: y, startOffset: b } = v, (!n.contentDOM.contains(y) || C.safari && $O(y, b, c) || C.chrome && CO(y, b, c)) && (y = void 0));
    }
    y && (b = Math.min(lt(y), b));
  }
  if (!y || !n.docView.dom.contains(y)) {
    let v = te.find(n.docView, d);
    if (!v)
      return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: b } = Hs(v.dom, c, u));
  }
  let S = n.docView.nearest(y);
  if (!S)
    return null;
  if (S.isWidget && ((s = S.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let v = S.dom.getBoundingClientRect();
    return e.y < v.top || e.y <= v.bottom && e.x <= (v.left + v.right) / 2 ? S.posAtStart : S.posAtEnd;
  } else
    return S.localPosFromDOM(y, b) + S.posAtStart;
}
function Yo(n, e, t, i, r) {
  let s = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let o = n.viewState.heightOracle.textHeight, a = Math.floor((r - t.top - (n.defaultLineHeight - o) * 0.5) / o);
    s += a * n.viewState.heightOracle.lineLength;
  }
  let l = n.state.sliceDoc(t.from, t.to);
  return t.from + Vs(l, s, n.state.tabSize);
}
function $O(n, e, t) {
  let i, r = n;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length))
    return !1;
  for (; ; ) {
    let s = r.nextSibling;
    if (s) {
      if (s.nodeName == "BR")
        break;
      return !1;
    } else {
      let l = r.parentNode;
      if (!l || l.nodeName == "DIV")
        break;
      r = l;
    }
  }
  return Bt(n, i - 1, i).getBoundingClientRect().right > t;
}
function CO(n, e, t) {
  if (e != 0)
    return !1;
  for (let r = n; ; ) {
    let s = r.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != r)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    r = s;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : Bt(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function Ks(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let r;
    for (let s of i.type) {
      if (s.from > e)
        break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e)
          return s;
        (!r || s.type == ge.Text && (r.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (r = s);
      }
    }
    return r || i;
  }
  return i;
}
function TO(n, e, t, i) {
  let r = Ks(n, e.head, e.assoc || -1), s = !i || r.type != ge.Text || !(n.lineWrapping || r.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let l = n.dom.getBoundingClientRect(), o = n.textDirectionAt(r.from), a = n.posAtCoords({
      x: t == (o == F.LTR) ? l.right - 1 : l.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return Q.cursor(a, t ? -1 : 1);
  }
  return Q.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function Eo(n, e, t, i) {
  let r = n.state.doc.lineAt(e.head), s = n.bidiSpans(r), l = n.textDirectionAt(r.from);
  for (let o = e, a = null; ; ) {
    let h = OO(r, s, l, o, t), c = xc;
    if (!h) {
      if (r.number == (t ? n.state.doc.lines : 1))
        return o;
      c = `
`, r = n.state.doc.line(r.number + (t ? 1 : -1)), s = n.bidiSpans(r), h = n.visualLineSide(r, !t);
    }
    if (a) {
      if (!a(c))
        return o;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    o = h;
  }
}
function AO(n, e, t) {
  let i = n.state.charCategorizer(e), r = i(t);
  return (s) => {
    let l = i(s);
    return r == H.Space && (r = l), r == l;
  };
}
function RO(n, e, t, i) {
  let r = e.head, s = t ? 1 : -1;
  if (r == (t ? n.state.doc.length : 0))
    return Q.cursor(r, e.assoc);
  let l = e.goalColumn, o, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(r, e.assoc || -1), c = n.documentTop;
  if (h)
    l == null && (l = h.left - a.left), o = s < 0 ? h.top : h.bottom;
  else {
    let d = n.viewState.lineBlockAt(r);
    l == null && (l = Math.min(a.right - a.left, n.defaultCharacterWidth * (r - d.from))), o = (s < 0 ? d.top : d.bottom) + c;
  }
  let u = a.left + l, f = i != null ? i : n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let O = o + (f + d) * s, m = Vc(n, { x: u, y: O }, !1, s);
    if (O < a.top || O > a.bottom || (s < 0 ? m < r : m > r)) {
      let g = n.docView.coordsForChar(m), y = !g || O < g.top ? -1 : 1;
      return Q.cursor(m, y, void 0, l);
    }
  }
}
function jn(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let r of n)
      r.between(e - 1, e + 1, (s, l, o) => {
        if (e > s && e < l) {
          let a = i || t || (e - s < l - e ? -1 : 1);
          e = a < 0 ? s : l, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function Hr(n, e, t) {
  let i = jn(n.state.facet(Xl).map((r) => r(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : Q.cursor(i, i < t.from ? 1 : -1);
}
const Ri = "￿";
class XO {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(E.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Ri;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let s = this.text.length;
      this.readNode(r);
      let l = r.nextSibling;
      if (l == t)
        break;
      let o = G.get(r), a = G.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : ir(r)) || ir(l) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > s) && this.lineBreak(), r = l;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, l = 1, o;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, i), l = this.lineSeparator.length) : (o = r.exec(t)) && (s = o.index, l = o[0].length), this.append(t.slice(i, s < 0 ? t.length : s)), s < 0)
        break;
      if (this.lineBreak(), l > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= l - 1);
      i = s + l;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = G.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (ZO(e, i.node, i.offset) ? t : 0));
  }
}
function ZO(n, e, t) {
  for (; ; ) {
    if (!e || t < lt(e))
      return !1;
    if (e == n)
      return !0;
    t = Lt(e) + 1, e = e.parentNode;
  }
}
class Do {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class MO {
  constructor(e, t, i, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: l } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let o = s || l ? [] : VO(e), a = new XO(o, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = YO(o, this.bounds.from);
    } else {
      let o = e.observer.selectionRange, a = s && s.node == o.focusNode && s.offset == o.focusOffset || !Ds(e.contentDOM, o.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(o.focusNode, o.focusOffset), h = l && l.node == o.anchorNode && l.offset == o.anchorOffset || !Ds(e.contentDOM, o.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(o.anchorNode, o.anchorOffset), c = e.viewport;
      if ((C.ios || C.chrome) && e.state.selection.main.empty && a != h && (c.from > 0 || c.to < e.state.doc.length)) {
        let u = Math.min(a, h), f = Math.max(a, h), d = c.from - u, O = c.to - f;
        (d == 0 || d == 1 || u == 0) && (O == 0 || O == -1 || f == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      this.newSel = Q.single(h, a);
    }
  }
}
function Yc(n, e) {
  let t, { newSel: i } = e, r = n.state.selection.main, s = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: l, to: o } = e.bounds, a = r.from, h = null;
    (s === 8 || C.android && e.text.length < o - l) && (a = r.to, h = "end");
    let c = zO(n.state.doc.sliceString(l, o, Ri), e.text, a - l, h);
    c && (C.chrome && s == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == Ri + Ri && c.toB--, t = {
      from: l + c.from,
      to: l + c.toA,
      insert: Y.of(e.text.slice(c.from, c.toB).split(Ri))
    });
  } else i && (!n.hasFocus && n.state.facet(ft) || i.main.eq(r)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !r.empty && i && i.main.empty ? t = { from: r.from, to: r.to, insert: n.state.doc.slice(r.from, r.to) } : (C.mac || C.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = Q.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: Y.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = {
    from: r.from,
    to: r.to,
    insert: n.state.doc.slice(r.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, r.to))
  } : C.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = Q.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: Y.of([" "]) }), t)
    return Ml(n, t, i, s);
  if (i && !i.main.eq(r)) {
    let l = !1, o = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (l = !0), o = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: l, userEvent: o }), !0;
  } else
    return !1;
}
function Ml(n, e, t, i = -1) {
  if (C.ios && n.inputState.flushIOSKey(e))
    return !0;
  let r = n.state.selection.main;
  if (C.android && (e.to == r.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == r.from || e.from == r.from - 1 && n.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && ti(n.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > r.head) && ti(n.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && ti(n.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let l, o = () => l || (l = qO(n, e, t));
  return n.state.facet(Pc).some((a) => a(n, e.from, e.to, s, o)) || n.dispatch(o()), !0;
}
function qO(n, e, t) {
  let i, r = n.state, s = r.selection.main;
  if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let o = s.from < e.from ? r.sliceDoc(s.from, e.from) : "", a = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    i = r.replaceSelection(n.state.toText(o + e.insert.sliceString(0, void 0, n.state.lineBreak) + a));
  } else {
    let o = r.changes(e), a = t && t.main.to <= o.newLength ? t.main : void 0;
    if (r.selection.ranges.length > 1 && n.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), c, u = t && zc(n, t.main.head);
      if (u) {
        let O = e.insert.length - (e.to - e.from);
        c = { from: u.from, to: u.to - O };
      } else
        c = n.state.doc.lineAt(s.head);
      let f = s.to - e.to, d = s.to - s.from;
      i = r.changeByRange((O) => {
        if (O.from == s.from && O.to == s.to)
          return { changes: o, range: a || O.map(o) };
        let m = O.to - f, g = m - h.length;
        if (O.to - O.from != d || n.state.sliceDoc(g, m) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        O.to >= c.from && O.from <= c.to)
          return { range: O };
        let y = r.changes({ from: g, to: m, insert: e.insert }), b = O.to - s.to;
        return {
          changes: y,
          range: a ? Q.range(Math.max(0, a.anchor + b), Math.max(0, a.head + b)) : O.map(y)
        };
      });
    } else
      i = {
        changes: o,
        selection: a && r.selection.replaceRange(a)
      };
  }
  let l = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, l += ".compose", n.inputState.compositionFirstChange && (l += ".start", n.inputState.compositionFirstChange = !1)), r.update(i, { userEvent: l, scrollIntoView: !0 });
}
function zO(n, e, t, i) {
  let r = Math.min(n.length, e.length), s = 0;
  for (; s < r && n.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == r && n.length == e.length)
    return null;
  let l = n.length, o = e.length;
  for (; l > 0 && o > 0 && n.charCodeAt(l - 1) == e.charCodeAt(o - 1); )
    l--, o--;
  if (i == "end") {
    let a = Math.max(0, s - Math.min(l, o));
    t -= l + a - s;
  }
  if (l < s && n.length < e.length) {
    let a = t <= s && t >= l ? s - t : 0;
    s -= a, o = s + (o - l), l = s;
  } else if (o < s) {
    let a = t <= s && t >= o ? s - t : 0;
    s -= a, l = s + (l - o), o = s;
  }
  return { from: s, toA: l, toB: o };
}
function VO(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s } = n.observer.selectionRange;
  return t && (e.push(new Do(t, i)), (r != t || s != i) && e.push(new Do(r, s))), e;
}
function YO(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? Q.single(t + e, i + e) : null;
}
class EO {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, C.safari && e.contentDOM.addEventListener("input", () => null), C.gecko && tp(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !IO(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let r of i.observers)
        r(this.view, t);
      for (let r of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (r(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = DO(e), i = this.handlers, r = this.view.contentDOM;
    for (let s in t)
      if (s != "scroll") {
        let l = !t[s].handlers.length, o = i[s];
        o && l != !o.handlers.length && (r.removeEventListener(s, this.handleEvent), o = null), o || r.addEventListener(s, this.handleEvent, { passive: l });
      }
    for (let s in i)
      s != "scroll" && !t[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Dc.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), C.android && C.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return C.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Ec.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || _O.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, ti(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : C.safari && !C.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function _o(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (r) {
      ve(t.state, r);
    }
  };
}
function DO(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let r = i.spec, s = r && r.plugin.domEventHandlers, l = r && r.plugin.domEventObservers;
    if (s)
      for (let o in s) {
        let a = s[o];
        a && t(o).handlers.push(_o(i.value, a));
      }
    if (l)
      for (let o in l) {
        let a = l[o];
        a && t(o).observers.push(_o(i.value, a));
      }
  }
  for (let i in We)
    t(i).handlers.push(We[i]);
  for (let i in _e)
    t(i).observers.push(_e[i]);
  return e;
}
const Ec = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], _O = "dthko", Dc = [16, 17, 18, 20, 91, 92, 224, 225], Sn = 6;
function kn(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function LO(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class BO {
  constructor(e, t, i, r) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Fd(e.contentDOM), this.atoms = e.state.facet(Xl).map((l) => l(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(E.allowMultipleSelections) && jO(e, t), this.dragging = GO(e, t) && Bc(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && LO(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, r = 0, s = 0, l = this.view.win.innerWidth, o = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: l } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: o } = this.scrollParents.y.getBoundingClientRect());
    let a = Zl(this.view);
    e.clientX - a.left <= r + Sn ? t = -kn(r - e.clientX) : e.clientX + a.right >= l - Sn && (t = kn(e.clientX - l)), e.clientY - a.top <= s + Sn ? i = -kn(s - e.clientY) : e.clientY + a.bottom >= o - Sn && (i = kn(e.clientY - o)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let r = e.ranges[i], s = null;
      if (r.empty) {
        let l = jn(this.atoms, r.from, 0);
        l != r.from && (s = Q.cursor(l, -1));
      } else {
        let l = jn(this.atoms, r.from, -1), o = jn(this.atoms, r.to, 1);
        (l != r.from || o != r.to) && (s = Q.range(r.from == r.anchor ? l : o, r.from == r.head ? l : o));
      }
      s && (t || (t = e.ranges.slice()), t[i] = s);
    }
    return t ? Q.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function jO(n, e) {
  let t = n.state.facet(Sc);
  return t.length ? t[0](e) : C.mac ? e.metaKey : e.ctrlKey;
}
function WO(n, e) {
  let t = n.state.facet(kc);
  return t.length ? t[0](e) : C.mac ? !e.altKey : !e.ctrlKey;
}
function GO(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = ji(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let r = i.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let l = r[s];
    if (l.left <= e.clientX && l.right >= e.clientX && l.top <= e.clientY && l.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function IO(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = G.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const We = /* @__PURE__ */ Object.create(null), _e = /* @__PURE__ */ Object.create(null), _c = C.ie && C.ie_version < 15 || C.ios && C.webkit_version < 604;
function NO(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), Lc(n, t.value);
  }, 50);
}
function Xr(n, e, t) {
  for (let i of n.facet(e))
    t = i(t, n);
  return t;
}
function Lc(n, e) {
  e = Xr(n.state, Tl, e);
  let { state: t } = n, i, r = 1, s = t.toText(e), l = s.lines == t.selection.ranges.length;
  if (Js != null && t.selection.ranges.every((a) => a.empty) && Js == s.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let u = t.toText((l ? s.line(r++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: u },
        range: Q.cursor(h.from + u.length)
      };
    });
  } else l ? i = t.changeByRange((a) => {
    let h = s.line(r++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: Q.cursor(a.from + h.length)
    };
  }) : i = t.replaceSelection(s);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
_e.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
We.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), !1);
_e.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
_e.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
We.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of n.state.facet(vc))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = HO(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new BO(n, e, t, i)), i && n.observer.ignore(() => {
      nc(n.contentDOM);
      let s = n.root.activeElement;
      s && !s.contains(n.contentDOM) && s.blur();
    });
    let r = n.inputState.mouseSelection;
    if (r)
      return r.start(e), r.dragging === !1;
  }
  return !1;
};
function Lo(n, e, t, i) {
  if (i == 1)
    return Q.cursor(e, t);
  if (i == 2)
    return vO(n.state, e, t);
  {
    let r = te.find(n.docView, e), s = n.state.doc.lineAt(r ? r.posAtEnd : e), l = r ? r.posAtStart : s.from, o = r ? r.posAtEnd : s.to;
    return o < n.state.doc.length && o == s.to && o++, Q.range(l, o);
  }
}
let Bo = (n, e, t) => e >= t.top && e <= t.bottom && n >= t.left && n <= t.right;
function UO(n, e, t, i) {
  let r = te.find(n.docView, e);
  if (!r)
    return 1;
  let s = e - r.posAtStart;
  if (s == 0)
    return 1;
  if (s == r.length)
    return -1;
  let l = r.coordsAt(s, -1);
  if (l && Bo(t, i, l))
    return -1;
  let o = r.coordsAt(s, 1);
  return o && Bo(t, i, o) ? 1 : l && l.bottom >= i ? -1 : 1;
}
function jo(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: UO(n, t, e.clientX, e.clientY) };
}
const FO = C.ie && C.ie_version <= 11;
let Wo = null, Go = 0, Io = 0;
function Bc(n) {
  if (!FO)
    return n.detail;
  let e = Wo, t = Io;
  return Wo = n, Io = Date.now(), Go = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (Go + 1) % 3 : 1;
}
function HO(n, e) {
  let t = jo(n, e), i = Bc(e), r = n.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), r = r.map(s.changes));
    },
    get(s, l, o) {
      let a = jo(n, s), h, c = Lo(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !l) {
        let u = Lo(n, t.pos, t.bias, i), f = Math.min(u.from, c.from), d = Math.max(u.to, c.to);
        c = f < c.from ? Q.range(f, d) : Q.range(d, f);
      }
      return l ? r.replaceRange(r.main.extend(c.from, c.to)) : o && i == 1 && r.ranges.length > 1 && (h = KO(r, a.pos)) ? h : o ? r.addRange(c) : Q.create([c]);
    }
  };
}
function KO(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: r } = n.ranges[t];
    if (i <= e && r >= e)
      return Q.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
We.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let r = n.docView.nearest(e.target);
    if (r && r.isWidget) {
      let s = r.posAtStart, l = s + r.length;
      (s >= t.to || l <= t.from) && (t = Q.range(s, l));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", Xr(n.state, Al, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
We.dragend = (n) => (n.inputState.draggedContent = null, !1);
function No(n, e, t, i) {
  if (t = Xr(n.state, Tl, t), !t)
    return;
  let r = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = n.inputState, l = i && s && WO(n, e) ? { from: s.from, to: s.to } : null, o = { from: r, insert: t }, a = n.state.changes(l ? [l, o] : o);
  n.focus(), n.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
    userEvent: l ? "move.drop" : "input.drop"
  }), n.inputState.draggedContent = null;
}
We.drop = (n, e) => {
  if (!e.dataTransfer)
    return !1;
  if (n.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), r = 0, s = () => {
      ++r == t.length && No(n, e, i.filter((l) => l != null).join(n.state.lineBreak), !1);
    };
    for (let l = 0; l < t.length; l++) {
      let o = new FileReader();
      o.onerror = s, o.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(o.result) || (i[l] = o.result), s();
      }, o.readAsText(t[l]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return No(n, e, i, !0), !0;
  }
  return !1;
};
We.paste = (n, e) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let t = _c ? null : e.clipboardData;
  return t ? (Lc(n, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (NO(n), !1);
};
function JO(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function ep(n) {
  let e = [], t = [], i = !1;
  for (let r of n.selection.ranges)
    r.empty || (e.push(n.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of n.selection.ranges) {
      let l = n.doc.lineAt(s);
      l.number > r && (e.push(l.text), t.push({ from: l.from, to: Math.min(n.doc.length, l.to + 1) })), r = l.number;
    }
    i = !0;
  }
  return { text: Xr(n, Al, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let Js = null;
We.copy = We.cut = (n, e) => {
  let { text: t, ranges: i, linewise: r } = ep(n.state);
  if (!t && !r)
    return !1;
  Js = r ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = _c ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (JO(n, t), !1);
};
const jc = /* @__PURE__ */ yt.define();
function Wc(n, e) {
  let t = [];
  for (let i of n.facet($c)) {
    let r = i(n, e);
    r && t.push(r);
  }
  return t.length ? n.update({ effects: t, annotations: jc.of(!0) }) : null;
}
function Gc(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Wc(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
_e.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Gc(n);
};
_e.blur = (n) => {
  n.observer.clearSelectionRange(), Gc(n);
};
_e.compositionstart = _e.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
_e.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, C.chrome && C.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
_e.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
We.beforeinput = (n, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && n.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), l = e.getTargetRanges();
    if (s && l.length) {
      let o = l[0], a = n.posAtDOM(o.startContainer, o.startOffset), h = n.posAtDOM(o.endContainer, o.endOffset);
      return Ml(n, { from: a, to: h, insert: n.state.toText(s) }, null), !0;
    }
  }
  let r;
  if (C.chrome && C.android && (r = Ec.find((s) => s.inputType == e.inputType)) && (n.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var l;
      (((l = window.visualViewport) === null || l === void 0 ? void 0 : l.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return C.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), C.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => _e.compositionend(n, e), 20), !1;
};
const Uo = /* @__PURE__ */ new Set();
function tp(n) {
  Uo.has(n) || (Uo.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Fo = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let hi = !1;
function Ho() {
  hi = !1;
}
class ip {
  constructor(e) {
    this.lineWrapping = e, this.doc = Y.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Fo.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      r < 0 ? i++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, r, s, l) {
    let o = Fo.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != o;
    if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = i, this.textHeight = r, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let h = 0; h < l.length; h++) {
        let c = l[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class np {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class tt {
  /**
  @internal
  */
  constructor(e, t, i, r, s) {
    this.from = e, this.length = t, this.top = i, this.height = r, this._content = s;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? ge.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof Tt ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new tt(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var U = /* @__PURE__ */ function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(U || (U = {}));
const Wn = 1e-3;
class ye {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Wn && (hi = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return ye.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, r) {
    let s = this, l = i.doc;
    for (let o = r.length - 1; o >= 0; o--) {
      let { fromA: a, toA: h, fromB: c, toB: u } = r[o], f = s.lineAt(a, U.ByPosNoHeight, i.setDoc(t), 0, 0), d = f.to >= h ? f : s.lineAt(h, U.ByPosNoHeight, i, 0, 0);
      for (u += d.to - h, h = d.to; o > 0 && f.from <= r[o - 1].toA; )
        a = r[o - 1].fromA, c = r[o - 1].fromB, o--, a < f.from && (f = s.lineAt(a, U.ByPosNoHeight, i, 0, 0));
      c += f.from - a, a = f.from;
      let O = ql.build(i.setDoc(l), e, c, u);
      s = sr(s, s.replace(a, h, O));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new Ae(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, r = 0, s = 0;
    for (; ; )
      if (t == i)
        if (r > s * 2) {
          let o = e[t - 1];
          o.break ? e.splice(--t, 1, o.left, null, o.right) : e.splice(--t, 1, o.left, o.right), i += 1 + o.break, r -= o.size;
        } else if (s > r * 2) {
          let o = e[i];
          o.break ? e.splice(i, 1, o.left, null, o.right) : e.splice(i, 1, o.left, o.right), i += 2 + o.break, s -= o.size;
        } else
          break;
      else if (r < s) {
        let o = e[t++];
        o && (r += o.size);
      } else {
        let o = e[--i];
        o && (s += o.size);
      }
    let l = 0;
    return e[t - 1] == null ? (l = 1, t--) : e[t] == null && (l = 1, i++), new rp(ye.of(e.slice(0, t)), l, ye.of(e.slice(i)));
  }
}
function sr(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (hi = !0), e);
}
ye.prototype.size = 1;
class Ic extends ye {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, r) {
    return new tt(r, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, r, s) {
    return this.blockAt(0, i, r, s);
  }
  forEachLine(e, t, i, r, s, l) {
    e <= s + this.length && t >= s && l(this.blockAt(0, i, r, s));
  }
  updateHeight(e, t = 0, i = !1, r) {
    return r && r.from <= t && r.more && this.setHeight(r.heights[r.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Ae extends Ic {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, r) {
    return new tt(r, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let r = i[0];
    return i.length == 1 && (r instanceof Ae || r instanceof ae && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof ae ? r = new Ae(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = !1), r) : ye.of(i);
  }
  updateHeight(e, t = 0, i = !1, r) {
    return r && r.from <= t && r.more ? this.setHeight(r.heights[r.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ae extends ye {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, s = r - i + 1, l, o = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      l = a / s, this.length > s + 1 && (o = (this.height - a) / (this.length - s - 1));
    } else
      l = this.height / s;
    return { firstLine: i, lastLine: r, perLine: l, perChar: o };
  }
  blockAt(e, t, i, r) {
    let { firstLine: s, lastLine: l, perLine: o, perChar: a } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let h = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), u = o + c.length * a, f = Math.max(i, e - u / 2);
      return new tt(c.from, c.length, f, u, 0);
    } else {
      let h = Math.max(0, Math.min(l - s, Math.floor((e - i) / o))), { from: c, length: u } = t.doc.line(s + h);
      return new tt(c, u, i + o * h, o, 0);
    }
  }
  lineAt(e, t, i, r, s) {
    if (t == U.ByHeight)
      return this.blockAt(e, i, r, s);
    if (t == U.ByPosNoHeight) {
      let { from: d, to: O } = i.doc.lineAt(e);
      return new tt(d, O - d, 0, 0, 0);
    }
    let { firstLine: l, perLine: o, perChar: a } = this.heightMetrics(i, s), h = i.doc.lineAt(e), c = o + h.length * a, u = h.number - l, f = r + o * u + a * (h.from - s - u);
    return new tt(h.from, h.length, Math.max(r, Math.min(f, r + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, r, s, l) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: o, perLine: a, perChar: h } = this.heightMetrics(i, s);
    for (let c = e, u = r; c <= t; ) {
      let f = i.doc.lineAt(c);
      if (c == e) {
        let O = f.number - o;
        u += a * O + h * (e - s - O);
      }
      let d = a + h * f.length;
      l(new tt(f.from, f.length, u, d, 0)), u += d, c = f.to + 1;
    }
  }
  replace(e, t, i) {
    let r = this.length - t;
    if (r > 0) {
      let s = i[i.length - 1];
      s instanceof ae ? i[i.length - 1] = new ae(s.length + r) : i.push(null, new ae(r - 1));
    }
    if (e > 0) {
      let s = i[0];
      s instanceof ae ? i[0] = new ae(e + s.length) : i.unshift(new ae(e - 1), null);
    }
    return ye.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ae(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ae(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let l = [], o = Math.max(t, r.from), a = -1;
      for (r.from > t && l.push(new ae(r.from - t - 1).updateHeight(e, t)); o <= s && r.more; ) {
        let c = e.doc.lineAt(o).length;
        l.length && l.push(null);
        let u = r.heights[r.index++];
        a == -1 ? a = u : Math.abs(u - a) >= Wn && (a = -2);
        let f = new Ae(c, u);
        f.outdated = !1, l.push(f), o += c + 1;
      }
      o <= s && l.push(null, new ae(s - o).updateHeight(e, o));
      let h = ye.of(l);
      return (a < 0 || Math.abs(h.height - this.height) >= Wn || Math.abs(a - this.heightMetrics(e, t).perLine) >= Wn) && (hi = !0), sr(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class rp extends ye {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, r) {
    let s = i + this.left.height;
    return e < s ? this.left.blockAt(e, t, i, r) : this.right.blockAt(e, t, s, r + this.left.length + this.break);
  }
  lineAt(e, t, i, r, s) {
    let l = r + this.left.height, o = s + this.left.length + this.break, a = t == U.ByHeight ? e < l : e < o, h = a ? this.left.lineAt(e, t, i, r, s) : this.right.lineAt(e, t, i, l, o);
    if (this.break || (a ? h.to < o : h.from > o))
      return h;
    let c = t == U.ByPosNoHeight ? U.ByPosNoHeight : U.ByPos;
    return a ? h.join(this.right.lineAt(o, c, i, l, o)) : this.left.lineAt(o, c, i, r, s).join(h);
  }
  forEachLine(e, t, i, r, s, l) {
    let o = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, r, s, l), t >= a && this.right.forEachLine(e, t, i, o, a, l);
    else {
      let h = this.lineAt(a, U.ByPos, i, r, s);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, r, s, l), h.to >= e && h.from <= t && l(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, o, a, l);
    }
  }
  replace(e, t, i) {
    let r = this.left.length + this.break;
    if (t < r)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, t - r, i));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let l = s.length;
    for (let o of i)
      s.push(o);
    if (e > 0 && Ko(s, l - 1), t < this.length) {
      let o = s.length;
      this.decomposeRight(t, s), Ko(s, o);
    }
    return ye.of(s);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, r = i + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? ye.of(this.break ? [e, null, t] : [e, t]) : (this.left = sr(this.left, e), this.right = sr(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, r) {
    let { left: s, right: l } = this, o = t + s.length + this.break, a = null;
    return r && r.from <= t + s.length && r.more ? a = s = s.updateHeight(e, t, i, r) : s.updateHeight(e, t, i), r && r.from <= o + l.length && r.more ? a = l = l.updateHeight(e, o, i, r) : l.updateHeight(e, o, i), a ? this.balanced(s, l) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ko(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof ae && (i = n[e + 1]) instanceof ae && n.splice(e - 1, 3, new ae(t.length + 1 + i.length));
}
const sp = 5;
class ql {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof Ae ? r.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Ae(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0, s = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let l = t - e;
      i.block ? this.addBlock(new Ic(l, r, i)) : (l || s || r >= sp) && this.addLineDeco(r, s, l);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Ae(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ae(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Ae)
      return e;
    let t = new Ae(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let r = this.ensureLine();
    r.length += i, r.collapsed += i, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Ae) && !this.isCovered ? this.nodes.push(new Ae(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes)
      r instanceof Ae && r.updateHeight(this.oracle, i), i += r ? r.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, r) {
    let s = new ql(i, e);
    return D.spans(t, i, r, s, 0), s.finish(i);
  }
}
function lp(n, e, t) {
  let i = new op();
  return D.compare(n, e, t, i, 0), i.changes;
}
class op {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, r) {
    (e < t || i && i.heightRelevant || r && r.heightRelevant) && Bn(e, t, this.changes, 5);
  }
}
function ap(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, r = i.defaultView || window, s = Math.max(0, t.left), l = Math.min(r.innerWidth, t.right), o = Math.max(0, t.top), a = Math.min(r.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, u = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && u.overflow != "visible") {
        let f = c.getBoundingClientRect();
        s = Math.max(s, f.left), l = Math.min(l, f.right), o = Math.max(o, f.top), a = Math.min(h == n.parentNode ? r.innerHeight : a, f.bottom);
      }
      h = u.position == "absolute" || u.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: s - t.left,
    right: Math.max(s, l) - t.left,
    top: o - (t.top + e),
    bottom: Math.max(o, a) - (t.top + e)
  };
}
function hp(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function cp(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Kr {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.size = i, this.displaySize = r;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i], s = t[i];
      if (r.from != s.from || r.to != s.to || r.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return R.replace({
      widget: new up(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class up extends Qt {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Jo {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ea, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = F.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Rl).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new ip(t), this.stateDeco = e.facet(Gi).filter((i) => typeof i != "function"), this.heightMap = ye.empty().applyChanges(this.stateDeco, Y.empty, this.heightOracle.setDoc(e.doc), [new De(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = R.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? t.head : t.anchor;
      if (!e.some(({ from: s, to: l }) => r >= s && r <= l)) {
        let { from: s, to: l } = this.lineBlockAt(r);
        e.push(new vn(s, l));
      }
    }
    return this.viewports = e.sort((i, r) => i.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? ea : new zl(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Xi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Gi).filter((c) => typeof c != "function");
    let r = e.changedRanges, s = De.extendWithRanges(r, lp(i, this.stateDeco, e ? e.changes : re.empty(this.state.doc.length))), l = this.heightMap.height, o = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Ho(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != l || hi) && (e.flags |= 2), o ? (this.scrollAnchorPos = e.changes.mapPos(o.from, -1), this.scrollAnchorHeight = o.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = l);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Tc) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), r = this.heightOracle, s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? F.RTL : F.LTR;
    let l = this.heightOracle.mustRefreshForWrapping(s), o = t.getBoundingClientRect(), a = l || this.mustMeasureContent || this.contentDOMHeight != o.height;
    this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (o.width && o.height) {
      let { scaleX: v, scaleY: x } = ic(t, o);
      (v > 5e-3 && Math.abs(this.scaleX - v) > 5e-3 || x > 5e-3 && Math.abs(this.scaleY - x) > 5e-3) && (this.scaleX = v, this.scaleY = x, h |= 16, l = a = !0);
    }
    let u = (parseInt(i.paddingTop) || 0) * this.scaleY, f = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = sc(e.scrollDOM);
    let O = (this.printing ? cp : ap)(t, this.paddingTop), m = O.top - this.pixelViewport.top, g = O.bottom - this.pixelViewport.bottom;
    this.pixelViewport = O;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget && !hp(e.dom))
      return 0;
    let b = o.width;
    if ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = o.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let v = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(v) && (l = !0), l || r.lineWrapping && Math.abs(b - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: x, charWidth: k, textHeight: P } = e.docView.measureTextSize();
        l = x > 0 && r.refresh(s, x, k, P, Math.max(5, b / k), v), l && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && g > 0 ? c = Math.max(m, g) : m < 0 && g < 0 && (c = Math.min(m, g)), Ho();
      for (let x of this.viewports) {
        let k = x.from == this.viewport.from ? v : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (l ? ye.empty().applyChanges(this.stateDeco, Y.empty, this.heightOracle, [new De(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, l, new np(x.from, k));
      }
      hi && (h |= 2);
    }
    let S = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return S && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || S) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(l ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.heightOracle, { visibleTop: l, visibleBottom: o } = this, a = new vn(r.lineAt(l - i * 1e3, U.ByHeight, s, 0, 0).from, r.lineAt(o + (1 - i) * 1e3, U.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = r.lineAt(h, U.ByPos, s, 0, 0), f;
        t.y == "center" ? f = (u.top + u.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? f = u.top : f = u.bottom - c, a = new vn(r.lineAt(f - 1e3 / 2, U.ByHeight, s, 0, 0).from, r.lineAt(f + c + 1e3 / 2, U.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new vn(this.heightMap.lineAt(i, U.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, U.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, U.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, U.ByPos, this.heightOracle, 0, 0), { visibleTop: l, visibleBottom: o } = this;
    return (e == 0 || r <= l - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || s >= o + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && r > l - 2 * 1e3 && s < o + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) || i.push(new Kr(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, r = i ? 1e4 : 2e3, s = r >> 1, l = r << 1;
    if (this.defaultTextDirection != F.LTR && !i)
      return [];
    let o = [], a = (c, u, f, d) => {
      if (u - c < s)
        return;
      let O = this.state.selection.main, m = [O.from];
      O.empty || m.push(O.to);
      for (let y of m)
        if (y > c && y < u) {
          a(c, y - 10, f, d), a(y + 10, u, f, d);
          return;
        }
      let g = dp(e, (y) => y.from >= f.from && y.to <= f.to && Math.abs(y.from - c) < s && Math.abs(y.to - u) < s && !m.some((b) => y.from < b && y.to > b));
      if (!g) {
        if (u < f.to && t && i && t.visibleRanges.some((S) => S.from <= u && S.to >= u)) {
          let S = t.moveToLineBoundary(Q.cursor(u), !1, !0).head;
          S > c && (u = S);
        }
        let y = this.gapSize(f, c, u, d), b = i || y < 2e6 ? y : 2e6;
        g = new Kr(c, u, y, b);
      }
      o.push(g);
    }, h = (c) => {
      if (c.length < l || c.type != ge.Text)
        return;
      let u = fp(c.from, c.to, this.stateDeco);
      if (u.total < l)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, d, O;
      if (i) {
        let m = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, y;
        if (f != null) {
          let b = Pn(u, f), S = ((this.visibleBottom - this.visibleTop) / 2 + m) / c.height;
          g = b - S, y = b + S;
        } else
          g = (this.visibleTop - c.top - m) / c.height, y = (this.visibleBottom - c.top + m) / c.height;
        d = wn(u, g), O = wn(u, y);
      } else {
        let m = u.total * this.heightOracle.charWidth, g = r * this.heightOracle.charWidth, y = 0;
        if (m > 2e6)
          for (let k of e)
            k.from >= c.from && k.from < c.to && k.size != k.displaySize && k.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = k.size - k.displaySize);
        let b = this.pixelViewport.left + y, S = this.pixelViewport.right + y, v, x;
        if (f != null) {
          let k = Pn(u, f), P = ((S - b) / 2 + g) / m;
          v = k - P, x = k + P;
        } else
          v = (b - g) / m, x = (S + g) / m;
        d = wn(u, v), O = wn(u, x);
      }
      d > c.from && a(c.from, d, c, u), O < c.to && a(O, c.to, c, u);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return o;
  }
  gapSize(e, t, i, r) {
    let s = Pn(r, i) - Pn(r, t);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    Kr.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = R.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    D.spans(t, this.viewport.from, this.viewport.to, {
      span(s, l) {
        i.push({ from: s, to: l });
      },
      point() {
      }
    }, 20);
    let r = 0;
    if (i.length != this.visibleRanges.length)
      r = 12;
    else
      for (let s = 0; s < i.length && !(r & 8); s++) {
        let l = this.visibleRanges[s], o = i[s];
        (l.from != o.from || l.to != o.to) && (r |= 4, e && e.mapPos(l.from, -1) == o.from && e.mapPos(l.to, 1) == o.to || (r |= 8));
      }
    return this.visibleRanges = i, r;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Xi(this.heightMap.lineAt(e, U.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Xi(this.heightMap.lineAt(this.scaler.fromDOM(e), U.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Xi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class vn {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function fp(n, e, t) {
  let i = [], r = n, s = 0;
  return D.spans(t, n, e, {
    span() {
    },
    point(l, o) {
      l > r && (i.push({ from: r, to: l }), s += l - r), r = o;
    }
  }, 20), r < e && (i.push({ from: r, to: e }), s += e - r), { total: s, ranges: i };
}
function wn({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let r = 0; ; r++) {
    let { from: s, to: l } = e[r], o = l - s;
    if (i <= o)
      return s + i;
    i -= o;
  }
}
function Pn(n, e) {
  let t = 0;
  for (let { from: i, to: r } of n.ranges) {
    if (e <= r) {
      t += e - i;
      break;
    }
    t += r - i;
  }
  return t / n.total;
}
function dp(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const ea = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  }
};
class zl {
  constructor(e, t, i) {
    let r = 0, s = 0, l = 0;
    this.viewports = i.map(({ from: o, to: a }) => {
      let h = t.lineAt(o, U.ByPos, e, 0, 0).top, c = t.lineAt(a, U.ByPos, e, 0, 0).bottom;
      return r += c - h, { from: o, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let o of this.viewports)
      o.domTop = l + (o.top - s) * this.scale, l = o.domBottom = o.domTop + (o.bottom - o.top), s = o.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top)
        return r + (e - i) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      i = s.bottom, r = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop)
        return i + (e - r) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      i = s.bottom, r = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof zl ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function Xi(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new tt(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((r) => Xi(r, e)) : n._content);
}
const $n = /* @__PURE__ */ T.define({ combine: (n) => n.join(" ") }), el = /* @__PURE__ */ T.define({ combine: (n) => n.indexOf(!0) > -1 }), tl = /* @__PURE__ */ $t.newName(), Nc = /* @__PURE__ */ $t.newName(), Uc = /* @__PURE__ */ $t.newName(), Fc = { "&light": "." + Nc, "&dark": "." + Uc };
function il(n, e, t) {
  return new $t(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (r) => {
        if (r == "&")
          return n;
        if (!t || !t[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return t[r];
      }) : n + " " + i;
    }
  });
}
const Op = /* @__PURE__ */ il("." + tl, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Fc), pp = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Jr = C.ie && C.ie_version <= 11;
class mp {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new Hd(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (C.ie && C.ie_version <= 11 || C.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && C.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(C.chrome && C.chrome_version < 126) && (this.editContext = new yp(e), e.state.facet(ft) && (e.contentDOM.editContext = this.editContext.editContext)), Jr && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, r = this.selectionRange;
    if (i.state.facet(ft) ? i.root.activeElement != this.dom : !Ln(this.dom, r))
      return;
    let s = r.anchorNode && i.docView.nearest(r.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (C.ie && C.ie_version <= 11 || C.android && C.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    r.focusNode && Vi(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ji(e.root);
    if (!t)
      return !1;
    let i = C.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && gp(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let r = Ln(this.dom, i);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Jd(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), r && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, pp), Jr && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Jr && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && ti(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, r = !1;
    for (let s of e) {
      let l = this.readMutation(s);
      l && (l.typeOver && (r = !0), t == -1 ? { from: t, to: i } = l : (t = Math.min(l.from, t), i = Math.max(l.to, i)));
    }
    return { from: t, to: i, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), r = this.selectionChanged && Ln(this.dom, this.selectionRange);
    if (e < 0 && !r)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new MO(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, r = Yc(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = ta(t, e.previousSibling || e.target.previousSibling, -1), r = ta(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(ft) != e.state.facet(ft) && (e.view.contentDOM.editContext = e.state.facet(ft) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function ta(n, e, t) {
  for (; e; ) {
    let i = G.get(e);
    if (i && i.parent == n)
      return i;
    let r = e.parentNode;
    e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function ia(n, e) {
  let t = e.startContainer, i = e.startOffset, r = e.endContainer, s = e.endOffset, l = n.docView.domAtPos(n.state.selection.main.anchor);
  return Vi(l.node, l.offset, r, s) && ([t, i, r, s] = [r, s, t, i]), { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s };
}
function gp(n, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(n.root)[0];
    if (r)
      return ia(n, r);
  }
  let t = null;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, !0), t ? ia(n, t) : null;
}
class yp {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let r = e.state.selection.main, { anchor: s, head: l } = r, o = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: o, drifted: !1 });
      let h = { from: o, to: a, insert: Y.of(i.text.split(`
`)) };
      if (h.from == this.from && s < this.from ? h.from = s : h.to == this.to && s > this.to && (h.to = s), h.from == h.to && !h.insert.length) {
        let c = Q.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        c.main.eq(r) || e.dispatch({ selection: c, userEvent: "select" });
        return;
      }
      if ((C.mac || C.android) && h.from == l - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (h = { from: o, to: a, insert: Y.of([i.text.replace(".", " ")]) }), this.pendingContextChange = h, !e.state.readOnly) {
        let c = this.to - this.from + (h.to - h.from + h.insert.length);
        Ml(e, h, Q.single(this.toEditorPos(i.selectionStart, c), this.toEditorPos(i.selectionEnd, c)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }, this.handlers.characterboundsupdate = (i) => {
      let r = [], s = null;
      for (let l = this.toEditorPos(i.rangeStart), o = this.toEditorPos(i.rangeEnd); l < o; l++) {
        let a = e.coordsForChar(l);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), r.push(s);
      }
      t.updateCharacterBounds(i.rangeStart, r);
    }, this.handlers.textformatupdate = (i) => {
      let r = [];
      for (let s of i.getTextFormats()) {
        let l = s.underlineStyle, o = s.underlineThickness;
        if (l != "None" && o != "None") {
          let a = this.toEditorPos(s.rangeStart), h = this.toEditorPos(s.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${l == "Dashed" ? "dashed " : l == "Squiggle" ? "wavy " : ""}${o == "Thin" ? 1 : 2}px`;
            r.push(R.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: Rc.of(R.set(r)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let r = ji(i.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, r = this.pendingContextChange;
    return e.changes.iterChanges((s, l, o, a, h) => {
      if (i)
        return;
      let c = h.length - (l - s);
      if (r && l >= r.to)
        if (r.from == s && r.to == l && r.insert.eq(h)) {
          r = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          r = null, this.revertPending(e.state);
      if (s += t, l += t, l <= this.from)
        this.from += c, this.to += c;
      else if (s < this.to) {
        if (s < this.from || l > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(l), h.toString()), this.to += c;
      }
      t += c;
    }), r && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((r) => !r.isUserEvent("input.type") && r.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != r) && this.editContext.updateSelection(i, r);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class $ {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((r) => r.forEach((s) => i(s, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Kd(e.parent) || document, this.viewState = new Jo(e.state || E.create(e)), e.scrollTo && e.scrollTo.is(xn) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ft).map((r) => new Ur(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new mp(this), this.inputState = new EO(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Mo(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof ie ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, r, s = this.state;
    for (let f of e) {
      if (f.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let l = this.hasFocus, o = 0, a = null;
    e.some((f) => f.annotation(jc)) ? (this.inputState.notifiedFocused = l, o = 1) : l != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = l, a = Wc(s, l), a || (o = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (c = null)) : this.observer.clear(), s.facet(E.phrases) != this.state.facet(E.phrases))
      return this.setState(s);
    r = rr.create(this, s, e), r.flags |= o;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          u = new ii(d.empty ? d : Q.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(xn) && (u = d.value.clip(this.state));
      }
      this.viewState.update(r, u), this.bidiCache = lr.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(Ai) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet($n) != r.state.facet($n) && (this.viewState.mustMeasureContent = !0), (t || i || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !r.empty)
      for (let f of this.state.facet(Fs))
        try {
          f(r);
        } catch (d) {
          ve(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !Yc(this, c) && h.force && ti(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Jo(e), this.plugins = e.facet(Ft).map((i) => new Ur(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Mo(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Ft), i = e.state.facet(Ft);
    if (t != i) {
      let r = [];
      for (let s of i) {
        let l = t.indexOf(s);
        if (l < 0)
          r.push(new Ur(s));
        else {
          let o = this.plugins[l];
          o.mustUpdate = e, r.push(o);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          ve(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, r = i.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: l } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (l = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let o = 0; ; o++) {
        if (l < 0)
          if (sc(i))
            s = -1, l = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(r);
            s = d.from, l = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (o > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (O) {
            return ve(this.state, O), na;
          }
        }), u = rr.create(this, this.state, []), f = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u), f && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != na)
            try {
              let O = h[d];
              O.write && O.write(c[d], this);
            } catch (O) {
              ve(this.state, O);
            }
        if (f && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, l = -1;
              continue;
            } else {
              let O = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - l;
              if (O > 1 || O < -1) {
                r = r + O, i.scrollTop = r / this.scaleY, l = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let o of this.state.facet(Fs))
        o(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return tl + " " + (this.state.facet(el) ? Uc : Nc) + " " + this.state.facet($n);
  }
  updateAttrs() {
    let e = ra(this, Xc, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(ft) ? "true" : "false",
      class: "cm-content",
      style: `${C.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), ra(this, Rl, t);
    let i = this.observer.ignore(() => {
      let r = Ws(this.contentDOM, this.contentAttrs, t), s = Ws(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let r of i.effects)
        if (r.is($.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Ai);
    let e = this.state.facet($.cspNonce);
    $t.mount(this.root, this.styleModules.concat(Op).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return Hr(this, e, Eo(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Hr(this, e, Eo(this, e, t, (i) => AO(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), r = this.textDirectionAt(e.from), s = i[t ? i.length - 1 : 0];
    return Q.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return TO(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return Hr(this, e, RO(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Vc(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), l = s[wt.find(s, e - r.from, -1, t)];
    return Ar(i, l.dir == F.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(Cc) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > Qp)
      return bc(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || Qc(s.isolates, i = Zo(this, e))))
        return s.order;
    i || (i = Zo(this, e));
    let r = dO(e.text, t, i);
    return this.bidiCache.push(new lr(e.from, e.to, t, i, !0, r)), r;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || C.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      nc(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return xn.of(new ii(typeof e == "number" ? Q.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return xn.of(new ii(Q.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return ne.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return ne.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = $t.newName(), r = [$n.of(i), Ai.of(il(`.${i}`, e))];
    return t && t.dark && r.push(el.of(!0)), r;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Xt.lowest(Ai.of(il("." + tl, e, Fc)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), r = i && G.get(i) || G.get(e);
    return ((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
$.styleModule = Ai;
$.inputHandler = Pc;
$.clipboardInputFilter = Tl;
$.clipboardOutputFilter = Al;
$.scrollHandler = Ac;
$.focusChangeEffect = $c;
$.perLineTextDirection = Cc;
$.exceptionSink = wc;
$.updateListener = Fs;
$.editable = ft;
$.mouseSelectionStyle = vc;
$.dragMovesSelection = kc;
$.clickAddsSelectionRange = Sc;
$.decorations = Gi;
$.outerDecorations = Zc;
$.atomicRanges = Xl;
$.bidiIsolatedRanges = Mc;
$.scrollMargins = qc;
$.darkTheme = el;
$.cspNonce = /* @__PURE__ */ T.define({ combine: (n) => n.length ? n[0] : "" });
$.contentAttributes = Rl;
$.editorAttributes = Xc;
$.lineWrapping = /* @__PURE__ */ $.contentAttributes.of({ class: "cm-lineWrapping" });
$.announce = /* @__PURE__ */ Z.define();
const Qp = 4096, na = {};
class lr {
  constructor(e, t, i, r, s, l) {
    this.from = e, this.to = t, this.dir = i, this.isolates = r, this.fresh = s, this.order = l;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh))
      return e;
    let i = [], r = e.length ? e[e.length - 1].dir : F.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let l = e[s];
      l.dir == r && !t.touchesRange(l.from, l.to) && i.push(new lr(t.mapPos(l.from, 1), t.mapPos(l.to, -1), l.dir, l.isolates, !1, l.order));
    }
    return i;
  }
}
function ra(n, e, t) {
  for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let s = i[r], l = typeof s == "function" ? s(n) : s;
    l && js(l, t);
  }
  return t;
}
const bp = C.mac ? "mac" : C.windows ? "win" : C.linux ? "linux" : "key";
function xp(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let r, s, l, o;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      o = !0;
    else if (/^a(lt)?$/i.test(h))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      s = !0;
    else if (/^s(hift)?$/i.test(h))
      l = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? o = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return r && (i = "Alt-" + i), s && (i = "Ctrl-" + i), o && (i = "Meta-" + i), l && (i = "Shift-" + i), i;
}
function Cn(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const Sp = /* @__PURE__ */ Xt.default(/* @__PURE__ */ $.domEventHandlers({
  keydown(n, e) {
    return Kc(Hc(e.state), n, e, "editor");
  }
})), hn = /* @__PURE__ */ T.define({ enables: Sp }), sa = /* @__PURE__ */ new WeakMap();
function Hc(n) {
  let e = n.facet(hn), t = sa.get(e);
  return t || sa.set(e, t = wp(e.reduce((i, r) => i.concat(r), []))), t;
}
function kp(n, e, t) {
  return Kc(Hc(n.state), e, n, t);
}
let St = null;
const vp = 4e3;
function wp(n, e = bp) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = (l, o) => {
    let a = i[l];
    if (a == null)
      i[l] = o;
    else if (a != o)
      throw new Error("Key binding " + l + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (l, o, a, h, c) => {
    var u, f;
    let d = t[l] || (t[l] = /* @__PURE__ */ Object.create(null)), O = o.split(/ (?!$)/).map((y) => xp(y, e));
    for (let y = 1; y < O.length; y++) {
      let b = O.slice(0, y).join(" ");
      r(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(S) => {
          let v = St = { view: S, prefix: b, scope: l };
          return setTimeout(() => {
            St == v && (St = null);
          }, vp), !0;
        }]
      });
    }
    let m = O.join(" ");
    r(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (u = d._any) === null || u === void 0 ? void 0 : u.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
  };
  for (let l of n) {
    let o = l.scope ? l.scope.split(" ") : ["editor"];
    if (l.any)
      for (let h of o) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: u } = l;
        for (let f in c)
          c[f].run.push((d) => u(d, nl));
      }
    let a = l[e] || l.key;
    if (a)
      for (let h of o)
        s(h, a, l.run, l.preventDefault, l.stopPropagation), l.shift && s(h, "Shift-" + a, l.shift, l.preventDefault, l.stopPropagation);
  }
  return t;
}
let nl = null;
function Kc(n, e, t, i) {
  nl = e;
  let r = Id(e), s = xe(r, 0), l = et(s) == r.length && r != " ", o = "", a = !1, h = !1, c = !1;
  St && St.view == t && St.scope == i && (o = St.prefix + " ", Dc.indexOf(e.keyCode) < 0 && (h = !0, St = null));
  let u = /* @__PURE__ */ new Set(), f = (g) => {
    if (g) {
      for (let y of g.run)
        if (!u.has(y) && (u.add(y), y(t)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = n[i], O, m;
  return d && (f(d[o + Cn(r, e, !l)]) ? a = !0 : l && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(C.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(C.mac && e.altKey && !e.ctrlKey) && (O = Ct[e.keyCode]) && O != r ? (f(d[o + Cn(O, e, !0)]) || e.shiftKey && (m = Bi[e.keyCode]) != r && m != O && f(d[o + Cn(m, e, !1)])) && (a = !0) : l && e.shiftKey && f(d[o + Cn(r, e, !0)]) && (a = !0), !a && f(d._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), nl = null, a;
}
class cn {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, r, s) {
    this.className = e, this.left = t, this.top = i, this.width = r, this.height = s;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, i) {
    if (i.empty) {
      let r = e.coordsAtPos(i.head, i.assoc || 1);
      if (!r)
        return [];
      let s = Jc(e);
      return [new cn(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
    } else
      return Pp(e, t, i);
  }
}
function Jc(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == F.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function la(n, e, t, i) {
  let r = n.coordsAtPos(e, t * 2);
  if (!r)
    return i;
  let s = n.dom.getBoundingClientRect(), l = (r.top + r.bottom) / 2, o = n.posAtCoords({ x: s.left + 1, y: l }), a = n.posAtCoords({ x: s.right - 1, y: l });
  return o == null || a == null ? i : { from: Math.max(i.from, Math.min(o, a)), to: Math.min(i.to, Math.max(o, a)) };
}
function Pp(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), r = Math.min(t.to, n.viewport.to), s = n.textDirection == F.LTR, l = n.contentDOM, o = l.getBoundingClientRect(), a = Jc(n), h = l.querySelector(".cm-line"), c = h && window.getComputedStyle(h), u = o.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), f = o.right - (c ? parseInt(c.paddingRight) : 0), d = Ks(n, i, 1), O = Ks(n, r, -1), m = d.type == ge.Text ? d : null, g = O.type == ge.Text ? O : null;
  if (m && (n.lineWrapping || d.widgetLineBreaks) && (m = la(n, i, 1, m)), g && (n.lineWrapping || O.widgetLineBreaks) && (g = la(n, r, -1, g)), m && g && m.from == g.from && m.to == g.to)
    return b(S(t.from, t.to, m));
  {
    let x = m ? S(t.from, null, m) : v(d, !1), k = g ? S(null, t.to, g) : v(O, !0), P = [];
    return (m || d).to < (g || O).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + n.defaultLineHeight / 2 < k.top ? P.push(y(u, x.bottom, f, k.top)) : x.bottom < k.top && n.elementAtHeight((x.bottom + k.top) / 2).type == ge.Text && (x.bottom = k.top = (x.bottom + k.top) / 2), b(x).concat(P).concat(b(k));
  }
  function y(x, k, P, M) {
    return new cn(e, x - a.left, k - a.top, P - x, M - k);
  }
  function b({ top: x, bottom: k, horizontal: P }) {
    let M = [];
    for (let V = 0; V < P.length; V += 2)
      M.push(y(P[V], x, P[V + 1], k));
    return M;
  }
  function S(x, k, P) {
    let M = 1e9, V = -1e9, B = [];
    function z(_, I, me, Pe, Ie) {
      let oe = n.coordsAtPos(_, _ == P.to ? -2 : 2), Me = n.coordsAtPos(me, me == P.from ? 2 : -2);
      !oe || !Me || (M = Math.min(oe.top, Me.top, M), V = Math.max(oe.bottom, Me.bottom, V), Ie == F.LTR ? B.push(s && I ? u : oe.left, s && Pe ? f : Me.right) : B.push(!s && Pe ? u : Me.left, !s && I ? f : oe.right));
    }
    let X = x != null ? x : P.from, L = k != null ? k : P.to;
    for (let _ of n.visibleRanges)
      if (_.to > X && _.from < L)
        for (let I = Math.max(_.from, X), me = Math.min(_.to, L); ; ) {
          let Pe = n.state.doc.lineAt(I);
          for (let Ie of n.bidiSpans(Pe)) {
            let oe = Ie.from + Pe.from, Me = Ie.to + Pe.from;
            if (oe >= me)
              break;
            Me > I && z(Math.max(oe, I), x == null && oe <= X, Math.min(Me, me), k == null && Me >= L, Ie.dir);
          }
          if (I = Pe.to + 1, I >= me)
            break;
        }
    return B.length == 0 && z(X, x == null, L, k == null, n.textDirection), { top: M, bottom: V, horizontal: B };
  }
  function v(x, k) {
    let P = o.top + (k ? x.top : x.bottom);
    return { top: P, bottom: P, horizontal: [] };
  }
}
function $p(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class Cp {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Gn) != e.state.facet(Gn) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Gn);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !$p(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let r of e)
        r.update && t && r.constructor && this.drawn[i].constructor && r.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), t = r;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Gn = /* @__PURE__ */ T.define();
function eu(n) {
  return [
    ne.define((e) => new Cp(e, n)),
    Gn.of(n)
  ];
}
const Ii = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Tp(n = {}) {
  return [
    Ii.of(n),
    Ap,
    Rp,
    Xp,
    Tc.of(!0)
  ];
}
function tu(n) {
  return n.startState.facet(Ii) != n.state.facet(Ii);
}
const Ap = /* @__PURE__ */ eu({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(Ii), i = [];
    for (let r of e.selection.ranges) {
      let s = r == e.selection.main;
      if (r.empty || t.drawRangeCursor) {
        let l = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", o = r.empty ? r : Q.cursor(r.head, r.head > r.anchor ? -1 : 1);
        for (let a of cn.forRange(n, l, o))
          i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = tu(n);
    return t && oa(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    oa(e.state, n);
  },
  class: "cm-cursorLayer"
});
function oa(n, e) {
  e.style.animationDuration = n.facet(Ii).cursorBlinkRate + "ms";
}
const Rp = /* @__PURE__ */ eu({
  above: !1,
  markers(n) {
    return n.state.selection.ranges.map((e) => e.empty ? [] : cn.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || tu(n);
  },
  class: "cm-selectionLayer"
}), Xp = /* @__PURE__ */ Xt.highest(/* @__PURE__ */ $.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
})), iu = /* @__PURE__ */ Z.define({
  map(n, e) {
    return n == null ? null : e.mapPos(n);
  }
}), Zi = /* @__PURE__ */ se.define({
  create() {
    return null;
  },
  update(n, e) {
    return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(iu) ? i.value : t, n);
  }
}), Zp = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(Zi);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Zi) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(Zi), t = e != null && n.coordsAtPos(e);
    if (!t)
      return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
      top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      n ? (this.cursor.style.left = n.left / e + "px", this.cursor.style.top = n.top / t + "px", this.cursor.style.height = n.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(Zi) != n && this.view.dispatch({ effects: iu.of(n) });
  }
}, {
  eventObservers: {
    dragover(n) {
      this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
    },
    dragleave(n) {
      (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Mp() {
  return [Zi, Zp];
}
function aa(n, e, t, i, r) {
  e.lastIndex = 0;
  for (let s = n.iterRange(t, i), l = t, o; !s.next().done; l += s.value.length)
    if (!s.lineBreak)
      for (; o = e.exec(s.value); )
        r(l + o.index, o);
}
function qp(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
    return t;
  let i = [];
  for (let { from: r, to: s } of t)
    r = Math.max(n.state.doc.lineAt(r).from, r - e), s = Math.min(n.state.doc.lineAt(s).to, s + e), i.length && i[i.length - 1].to >= r ? i[i.length - 1].to = s : i.push({ from: r, to: s });
  return i;
}
class zp {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: i, decorate: r, boundary: s, maxLength: l = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, r)
      this.addMatch = (o, a, h, c) => r(c, h, h + o[0].length, o, a);
    else if (typeof i == "function")
      this.addMatch = (o, a, h, c) => {
        let u = i(o, a, h);
        u && c(h, h + o[0].length, u);
      };
    else if (i)
      this.addMatch = (o, a, h, c) => c(h, h + o[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s, this.maxLength = l;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new pt(), i = t.add.bind(t);
    for (let { from: r, to: s } of qp(e, this.maxLength))
      aa(e.state.doc, this.regexp, r, s, (l, o) => this.addMatch(o, e, l, i));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let i = 1e9, r = -1;
    return e.docChanged && e.changes.iterChanges((s, l, o, a) => {
      a >= e.view.viewport.from && o <= e.view.viewport.to && (i = Math.min(o, i), r = Math.max(a, r));
    }), e.viewportMoved || r - i > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), i, r) : t;
  }
  updateRange(e, t, i, r) {
    for (let s of e.visibleRanges) {
      let l = Math.max(s.from, i), o = Math.min(s.to, r);
      if (o >= l) {
        let a = e.state.doc.lineAt(l), h = a.to < o ? e.state.doc.lineAt(o) : a, c = Math.max(s.from, a.from), u = Math.min(s.to, h.to);
        if (this.boundary) {
          for (; l > a.from; l--)
            if (this.boundary.test(a.text[l - 1 - a.from])) {
              c = l;
              break;
            }
          for (; o < h.to; o++)
            if (this.boundary.test(h.text[o - h.from])) {
              u = o;
              break;
            }
        }
        let f = [], d, O = (m, g, y) => f.push(y.range(m, g));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < u - a.from; )
            this.addMatch(d, e, d.index + a.from, O);
        else
          aa(e.state.doc, this.regexp, c, u, (m, g) => this.addMatch(g, e, m, O));
        t = t.update({ filterFrom: c, filterTo: u, filter: (m, g) => m < c || g > u, add: f });
      }
    }
    return t;
  }
}
const rl = /x/.unicode != null ? "gu" : "g", Vp = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, rl), Yp = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let es = null;
function Ep() {
  var n;
  if (es == null && typeof document != "undefined" && document.body) {
    let e = document.body.style;
    es = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return es || !1;
}
const In = /* @__PURE__ */ T.define({
  combine(n) {
    let e = ot(n, {
      render: null,
      specialChars: Vp,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Ep()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, rl)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, rl)), e;
  }
});
function Dp(n = {}) {
  return [In.of(n), _p()];
}
let ha = null;
function _p() {
  return ha || (ha = ne.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = R.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(In)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new zp({
        regexp: n.specialChars,
        decoration: (e, t, i) => {
          let { doc: r } = t.state, s = xe(e[0], 0);
          if (s == 9) {
            let l = r.lineAt(i), o = t.state.tabSize, a = yi(l.text, o, i - l.from);
            return R.replace({
              widget: new Wp((o - a % o) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[s] || (this.decorationCache[s] = R.replace({ widget: new jp(n, s) }));
        },
        boundary: n.replaceTabs ? void 0 : /[^]/
      });
    }
    update(n) {
      let e = n.state.facet(In);
      n.startState.facet(In) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, {
    decorations: (n) => n.decorations
  }));
}
const Lp = "•";
function Bp(n) {
  return n >= 32 ? Lp : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class jp extends Qt {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Bp(this.code), i = e.state.phrase("Control character") + " " + (Yp[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, i, t);
    if (r)
      return r;
    let s = document.createElement("span");
    return s.textContent = t, s.title = i, s.setAttribute("aria-label", i), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return !1;
  }
}
class Wp extends Qt {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function Gp() {
  return Np;
}
const Ip = /* @__PURE__ */ R.line({ class: "cm-activeLine" }), Np = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let r = n.lineBlockAt(i.head);
      r.from > e && (t.push(Ip.range(r.from)), e = r.from);
    }
    return R.set(t);
  }
}, {
  decorations: (n) => n.decorations
}), sl = 2e3;
function Up(n, e, t) {
  let i = Math.min(e.line, t.line), r = Math.max(e.line, t.line), s = [];
  if (e.off > sl || t.off > sl || e.col < 0 || t.col < 0) {
    let l = Math.min(e.off, t.off), o = Math.max(e.off, t.off);
    for (let a = i; a <= r; a++) {
      let h = n.doc.line(a);
      h.length <= o && s.push(Q.range(h.from + l, h.to + o));
    }
  } else {
    let l = Math.min(e.col, t.col), o = Math.max(e.col, t.col);
    for (let a = i; a <= r; a++) {
      let h = n.doc.line(a), c = Vs(h.text, l, n.tabSize, !0);
      if (c < 0)
        s.push(Q.cursor(h.to));
      else {
        let u = Vs(h.text, o, n.tabSize);
        s.push(Q.range(h.from + c, h.from + u));
      }
    }
  }
  return s;
}
function Fp(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function ca(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), i = n.state.doc.lineAt(t), r = t - i.from, s = r > sl ? -1 : r == i.length ? Fp(n, e.clientX) : yi(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: s, off: r };
}
function Hp(n, e) {
  let t = ca(n, e), i = n.state.selection;
  return t ? {
    update(r) {
      if (r.docChanged) {
        let s = r.changes.mapPos(r.startState.doc.line(t.line).from), l = r.state.doc.lineAt(s);
        t = { line: l.number, col: t.col, off: Math.min(t.off, l.length) }, i = i.map(r.changes);
      }
    },
    get(r, s, l) {
      let o = ca(n, r);
      if (!o)
        return i;
      let a = Up(n.state, t, o);
      return a.length ? l ? Q.create(a.concat(i.ranges)) : Q.create(a) : i;
    }
  } : null;
}
function Kp(n) {
  let e = (t) => t.altKey && t.button == 0;
  return $.mouseSelectionStyle.of((t, i) => e(i) ? Hp(t, i) : null);
}
const Jp = {
  Alt: [18, (n) => !!n.altKey],
  Control: [17, (n) => !!n.ctrlKey],
  Shift: [16, (n) => !!n.shiftKey],
  Meta: [91, (n) => !!n.metaKey]
}, em = { style: "cursor: crosshair" };
function tm(n = {}) {
  let [e, t] = Jp[n.key || "Alt"], i = ne.fromClass(class {
    constructor(r) {
      this.view = r, this.isDown = !1;
    }
    set(r) {
      this.isDown != r && (this.isDown = r, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(r) {
        this.set(r.keyCode == e || t(r));
      },
      keyup(r) {
        (r.keyCode == e || !t(r)) && this.set(!1);
      },
      mousemove(r) {
        this.set(t(r));
      }
    }
  });
  return [
    i,
    $.contentAttributes.of((r) => {
      var s;
      return !((s = r.plugin(i)) === null || s === void 0) && s.isDown ? em : null;
    })
  ];
}
const vi = "-10000px";
class nu {
  constructor(e, t, i, r) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter((l) => l);
    let s = null;
    this.tooltipViews = this.tooltips.map((l) => s = i(l, s));
  }
  update(e, t) {
    var i;
    let r = e.state.facet(this.facet), s = r.filter((a) => a);
    if (r === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let l = [], o = t ? [] : null;
    for (let a = 0; a < s.length; a++) {
      let h = s[a], c = -1;
      if (h) {
        for (let u = 0; u < this.tooltips.length; u++) {
          let f = this.tooltips[u];
          f && f.create == h.create && (c = u);
        }
        if (c < 0)
          l[a] = this.createTooltipView(h, a ? l[a - 1] : null), o && (o[a] = !!h.above);
        else {
          let u = l[a] = this.tooltipViews[c];
          o && (o[a] = t[c]), u.update && u.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      l.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (o.forEach((a, h) => t[h] = a), t.length = o.length), this.input = r, this.tooltips = s, this.tooltipViews = l, !0;
  }
}
function im(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const ts = /* @__PURE__ */ T.define({
  combine: (n) => {
    var e, t, i;
    return {
      position: C.ios ? "absolute" : ((e = n.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = n.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = n.find((r) => r.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || im
    };
  }
}), ua = /* @__PURE__ */ new WeakMap(), Vl = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(ts);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new nu(n, Yl, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n, this.above);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(ts);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let r of this.manager.tooltipViews)
        r.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let r of this.manager.tooltipViews)
        this.container.appendChild(r.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n, e) {
    let t = n.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let r = document.createElement("div");
      r.className = "cm-tooltip-arrow", t.dom.appendChild(r);
    }
    return t.dom.style.position = this.position, t.dom.style.top = vi, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var n, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: s } = this.manager.tooltipViews[0];
      if (C.gecko)
        t = s.offsetParent != this.container.ownerDocument.body;
      else if (s.style.top == vi && s.style.left == "0px") {
        let l = s.getBoundingClientRect();
        t = Math.abs(l.top + 1e4) > 1 || Math.abs(l.left) > 1;
      }
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let s = this.parent.getBoundingClientRect();
        s.width && s.height && (n = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight);
      } else
        ({ scaleX: n, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), r = Zl(this.view);
    return {
      visible: {
        left: i.left + r.left,
        top: i.top + r.top,
        right: i.right - r.right,
        bottom: i.bottom - r.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((s, l) => {
        let o = this.manager.tooltipViews[l];
        return o.getCoords ? o.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()),
      space: this.view.state.facet(ts).tooltipSpace(this.view),
      scaleX: n,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(n) {
    var e;
    if (n.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let o of this.manager.tooltipViews)
        o.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: r, scaleY: s } = n, l = [];
    for (let o = 0; o < this.manager.tooltips.length; o++) {
      let a = this.manager.tooltips[o], h = this.manager.tooltipViews[o], { dom: c } = h, u = n.pos[o], f = n.size[o];
      if (!u || a.clip !== !1 && (u.bottom <= Math.max(t.top, i.top) || u.top >= Math.min(t.bottom, i.bottom) || u.right < Math.max(t.left, i.left) - 0.1 || u.left > Math.min(t.right, i.right) + 0.1)) {
        c.style.top = vi;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, O = d ? 7 : 0, m = f.right - f.left, g = (e = ua.get(h)) !== null && e !== void 0 ? e : f.bottom - f.top, y = h.offset || rm, b = this.view.textDirection == F.LTR, S = f.width > i.right - i.left ? b ? i.left : i.right - f.width : b ? Math.max(i.left, Math.min(u.left - (d ? 14 : 0) + y.x, i.right - m)) : Math.min(Math.max(i.left, u.left - m + (d ? 14 : 0) - y.x), i.right - m), v = this.above[o];
      !a.strictSide && (v ? u.top - g - O - y.y < i.top : u.bottom + g + O + y.y > i.bottom) && v == i.bottom - u.bottom > u.top - i.top && (v = this.above[o] = !v);
      let x = (v ? u.top - i.top : i.bottom - u.bottom) - O;
      if (x < g && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = vi;
          continue;
        }
        ua.set(h, g), c.style.height = (g = x) / s + "px";
      } else c.style.height && (c.style.height = "");
      let k = v ? u.top - g - O - y.y : u.bottom + O + y.y, P = S + m;
      if (h.overlap !== !0)
        for (let M of l)
          M.left < P && M.right > S && M.top < k + g && M.bottom > k && (k = v ? M.top - g - 2 - O : M.bottom + O + 2);
      if (this.position == "absolute" ? (c.style.top = (k - n.parent.top) / s + "px", fa(c, (S - n.parent.left) / r)) : (c.style.top = k / s + "px", fa(c, S / r)), d) {
        let M = u.left + (b ? y.x : -y.x) - (S + 14 - 7);
        d.style.left = M / r + "px";
      }
      h.overlap !== !0 && l.push({ left: S, top: k, right: P, bottom: k + g }), c.classList.toggle("cm-tooltip-above", v), c.classList.toggle("cm-tooltip-below", !v), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = vi;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function fa(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + "px");
}
const nm = /* @__PURE__ */ $.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), rm = { x: 0, y: 0 }, Yl = /* @__PURE__ */ T.define({
  enables: [Vl, nm]
}), or = /* @__PURE__ */ T.define({
  combine: (n) => n.reduce((e, t) => e.concat(t), [])
});
class Zr {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new Zr(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new nu(e, or, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let r = i[e];
      if (r !== void 0) {
        if (t === void 0)
          t = r;
        else if (t !== r)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const sm = /* @__PURE__ */ Yl.compute([or], (n) => {
  let e = n.facet(or);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var i;
      return (i = t.end) !== null && i !== void 0 ? i : t.pos;
    })),
    create: Zr.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class lm {
  constructor(e, t, i, r, s) {
    this.view = e, this.source = t, this.field = i, this.setHover = r, this.hoverTime = s, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.nearest(t.target);
    if (!i)
      return;
    let r, s = 1;
    if (i instanceof vt)
      r = i.posAtStart;
    else {
      if (r = e.posAtCoords(t), r == null)
        return;
      let o = e.coordsAtPos(r);
      if (!o || t.y < o.top || t.y > o.bottom || t.x < o.left - e.defaultCharacterWidth || t.x > o.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(r)).find((c) => c.from <= r && c.to >= r), h = a && a.dir == F.RTL ? -1 : 1;
      s = t.x < o.left ? -h : h;
    }
    let l = this.source(e, r, s);
    if (l != null && l.then) {
      let o = this.pending = { pos: r };
      l.then((a) => {
        this.pending == o && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => ve(e.state, a, "hover tooltip"));
    } else l && !(Array.isArray(l) && !l.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(l) ? l : [l]) });
  }
  get tooltip() {
    let e = this.view.plugin(Vl), t = e ? e.manager.tooltips.findIndex((i) => i.create == Zr.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: r, tooltip: s } = this;
    if (r.length && s && !om(s.dom, e) || this.pending) {
      let { pos: l } = r[0] || this.pending, o = (i = (t = r[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : l;
      (l == o ? this.view.posAtCoords(this.lastMove) != l : !am(this.view, l, o, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Tn = 4;
function om(n, e) {
  let { left: t, right: i, top: r, bottom: s } = n.getBoundingClientRect(), l;
  if (l = n.querySelector(".cm-tooltip-arrow")) {
    let o = l.getBoundingClientRect();
    r = Math.min(o.top, r), s = Math.max(o.bottom, s);
  }
  return e.clientX >= t - Tn && e.clientX <= i + Tn && e.clientY >= r - Tn && e.clientY <= s + Tn;
}
function am(n, e, t, i, r, s) {
  let l = n.scrollDOM.getBoundingClientRect(), o = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (l.left > i || l.right < i || l.top > r || Math.min(l.bottom, o) < r)
    return !1;
  let a = n.posAtCoords({ x: i, y: r }, !1);
  return a >= e && a <= t;
}
function hm(n, e = {}) {
  let t = Z.define(), i = se.define({
    create() {
      return [];
    },
    update(r, s) {
      if (r.length && (e.hideOnChange && (s.docChanged || s.selection) ? r = [] : e.hideOn && (r = r.filter((l) => !e.hideOn(s, l))), s.docChanged)) {
        let l = [];
        for (let o of r) {
          let a = s.changes.mapPos(o.pos, -1, ce.TrackDel);
          if (a != null) {
            let h = Object.assign(/* @__PURE__ */ Object.create(null), o);
            h.pos = a, h.end != null && (h.end = s.changes.mapPos(h.end)), l.push(h);
          }
        }
        r = l;
      }
      for (let l of s.effects)
        l.is(t) && (r = l.value), l.is(cm) && (r = []);
      return r;
    },
    provide: (r) => or.from(r)
  });
  return {
    active: i,
    extension: [
      i,
      ne.define((r) => new lm(
        r,
        n,
        i,
        t,
        e.hoverTime || 300
        /* Hover.Time */
      )),
      sm
    ]
  };
}
function ru(n, e) {
  let t = n.plugin(Vl);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const cm = /* @__PURE__ */ Z.define(), da = /* @__PURE__ */ T.define({
  combine(n) {
    let e, t;
    for (let i of n)
      e = e || i.topContainer, t = t || i.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function Ni(n, e) {
  let t = n.plugin(su), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const su = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Ui), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(da);
    this.top = new An(n, !0, e.topContainer), this.bottom = new An(n, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(da);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new An(n.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new An(n.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(Ui);
    if (t != this.input) {
      let i = t.filter((a) => a), r = [], s = [], l = [], o = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), o.push(c)) : (c = this.panels[h], c.update && c.update(n)), r.push(c), (c.top ? s : l).push(c);
      }
      this.specs = i, this.panels = r, this.top.sync(s), this.bottom.sync(l);
      for (let a of o)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (n) => $.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class An {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = Oa(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = Oa(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function Oa(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Ui = /* @__PURE__ */ T.define({
  enables: su
});
class gt extends _t {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
gt.prototype.elementClass = "";
gt.prototype.toDOM = void 0;
gt.prototype.mapMode = ce.TrackBefore;
gt.prototype.startSide = gt.prototype.endSide = -1;
gt.prototype.point = !0;
const Nn = /* @__PURE__ */ T.define(), um = /* @__PURE__ */ T.define(), fm = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => D.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {},
  side: "before"
}, Ei = /* @__PURE__ */ T.define();
function dm(n) {
  return [lu(), Ei.of({ ...fm, ...n })];
}
const pa = /* @__PURE__ */ T.define({
  combine: (n) => n.some((e) => e)
});
function lu(n) {
  return [
    Om
  ];
}
const Om = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Ei).map((e) => new ga(n, e)), this.fixed = !n.state.facet(pa);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (n.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(pa) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = D.iter(this.view.state.facet(Nn), this.view.viewport.from), i = [], r = this.gutters.map((s) => new pm(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(s.type)) {
        let l = !0;
        for (let o of s.type)
          if (o.type == ge.Text && l) {
            ll(t, i, o.from);
            for (let a of r)
              a.line(this.view, o, i);
            l = !1;
          } else if (o.widget)
            for (let a of r)
              a.widget(this.view, o);
      } else if (s.type == ge.Text) {
        ll(t, i, s.from);
        for (let l of r)
          l.line(this.view, s, i);
      } else if (s.widget)
        for (let l of r)
          l.widget(this.view, s);
    for (let s of r)
      s.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let e = n.startState.facet(Ei), t = n.state.facet(Ei), i = n.docChanged || n.heightChanged || n.viewportChanged || !D.eq(n.startState.facet(Nn), n.state.facet(Nn), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let r of this.gutters)
        r.update(n) && (i = !0);
    else {
      i = !0;
      let r = [];
      for (let s of t) {
        let l = e.indexOf(s);
        l < 0 ? r.push(new ga(this.view, s)) : (this.gutters[l].update(n), r.push(this.gutters[l]));
      }
      for (let s of this.gutters)
        s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
      for (let s of r)
        s.config.side == "after" ? this.getDOMAfter().appendChild(s.dom) : this.dom.appendChild(s.dom);
      this.gutters = r;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (n) => $.scrollMargins.of((e) => {
    let t = e.plugin(n);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let i = t.dom.offsetWidth * e.scaleX, r = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == F.LTR ? { left: i, right: r } : { right: i, left: r };
  })
});
function ma(n) {
  return Array.isArray(n) ? n : [n];
}
function ll(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class pm {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = D.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: r } = this, s = (t.top - this.height) / e.scaleY, l = t.height / e.scaleY;
    if (this.i == r.elements.length) {
      let o = new ou(e, l, s, i);
      r.elements.push(o), r.dom.appendChild(o.dom);
    } else
      r.elements[this.i].update(e, l, s, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let r = [];
    ll(this.cursor, r, t.from), i.length && (r = r.concat(i));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let l = this.gutter;
    r.length == 0 && !l.config.renderEmptyElements || this.addElement(e, t, r);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), r = i ? [i] : null;
    for (let s of e.state.facet(um)) {
      let l = s(e, t.widget, t);
      l && (r || (r = [])).push(l);
    }
    r && this.addElement(e, t, r);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class ga {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (r) => {
        let s = r.target, l;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let a = s.getBoundingClientRect();
          l = (a.top + a.bottom) / 2;
        } else
          l = r.clientY;
        let o = e.lineBlockAtHeight(l - e.documentTop);
        t.domEventHandlers[i](e, o, r) && r.preventDefault();
      });
    this.markers = ma(t.markers(e)), t.initialSpacer && (this.spacer = new ou(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = ma(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let i = e.view.viewport;
    return !D.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class ou {
  constructor(e, t, i, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, r);
  }
  update(e, t, i, r) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), mm(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", r = this.dom.firstChild;
    for (let s = 0, l = 0; ; ) {
      let o = l, a = s < t.length ? t[s++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let u = l; u < this.markers.length; u++)
          if (this.markers[u].compare(a)) {
            o = u, h = !0;
            break;
          }
      } else
        o = this.markers.length;
      for (; l < o; ) {
        let c = this.markers[l++];
        if (c.toDOM) {
          c.destroy(r);
          let u = r.nextSibling;
          r.remove(), r = u;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), h && l++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function mm(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return !1;
  return !0;
}
const gm = /* @__PURE__ */ T.define(), ym = /* @__PURE__ */ T.define(), Ht = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let r in t) {
          let s = i[r], l = t[r];
          i[r] = s ? (o, a, h) => s(o, a, h) || l(o, a, h) : l;
        }
        return i;
      }
    });
  }
});
class is extends gt {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ns(n, e) {
  return n.state.facet(Ht).formatNumber(e, n.state);
}
const Qm = /* @__PURE__ */ Ei.compute([Ht], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(gm);
  },
  lineMarker(e, t, i) {
    return i.some((r) => r.toDOM) ? null : new is(ns(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let r of e.state.facet(ym)) {
      let s = r(e, t, i);
      if (s)
        return s;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ht) != e.state.facet(Ht),
  initialSpacer(e) {
    return new is(ns(e, ya(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = ns(t.view, ya(t.view.state.doc.lines));
    return i == e.number ? e : new is(i);
  },
  domEventHandlers: n.facet(Ht).domEventHandlers,
  side: "before"
}));
function bm(n = {}) {
  return [
    Ht.of(n),
    lu(),
    Qm
  ];
}
function ya(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const xm = /* @__PURE__ */ new class extends gt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Sm = /* @__PURE__ */ Nn.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.head).from;
    r > t && (t = r, e.push(xm.range(r)));
  }
  return D.of(e);
});
function km() {
  return Sm;
}
const au = 1024;
let vm = 0;
class Ve {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class q {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = vm++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Qe.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
q.closedBy = new q({ deserialize: (n) => n.split(" ") });
q.openedBy = new q({ deserialize: (n) => n.split(" ") });
q.group = new q({ deserialize: (n) => n.split(" ") });
q.isolate = new q({ deserialize: (n) => {
  if (n && n != "rtl" && n != "ltr" && n != "auto")
    throw new RangeError("Invalid value for isolate: " + n);
  return n || "auto";
} });
q.contextHash = new q({ perNode: !0 });
q.lookAhead = new q({ perNode: !0 });
q.mounted = new q({ perNode: !0 });
class Fi {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[q.mounted.id];
  }
}
const wm = /* @__PURE__ */ Object.create(null);
class Qe {
  /**
  @internal
  */
  constructor(e, t, i, r = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = r;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : wm, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new Qe(e.name || "", t, e.id, i);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(r)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return r;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(q.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let r of i.split(" "))
        t[r] = e[i];
    return (i) => {
      for (let r = i.prop(q.group), s = -1; s < (r ? r.length : 0); s++) {
        let l = t[s < 0 ? i.name : r[s]];
        if (l)
          return l;
      }
    };
  }
}
Qe.none = new Qe(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class El {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let r = null;
      for (let s of e) {
        let l = s(i);
        l && (r || (r = Object.assign({}, i.props)), r[l[0].id] = l[1]);
      }
      t.push(r ? new Qe(i.name, r, i.id, i.flags) : i);
    }
    return new El(t);
  }
}
const Rn = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ new WeakMap();
var N;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(N || (N = {}));
class K {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, i, r, s) {
    if (this.type = e, this.children = t, this.positions = i, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [l, o] of s)
        this.props[typeof l == "number" ? l : l.id] = o;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = Fi.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new ar(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let r = Rn.get(this) || this.topNode, s = new ar(r);
    return s.moveTo(e, t), Rn.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new Oe(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let i = Hi(Rn.get(this) || this.topNode, e, t, !1);
    return Rn.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = Hi(Qa.get(this) || this.topNode, e, t, !0);
    return Qa.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Cm(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: r = 0, to: s = this.length } = e, l = e.mode || 0, o = (l & N.IncludeAnonymous) > 0;
    for (let a = this.cursor(l | N.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= s && a.to >= r && (!o && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (o || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : Ll(Qe.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, r) => new K(this.type, t, i, r, this.propValues), e.makeTree || ((t, i, r) => new K(Qe.none, t, i, r)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return Tm(e);
  }
}
K.empty = new K(Qe.none, [], [], 0);
class Dl {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Dl(this.buffer, this.index);
  }
}
class At {
  /**
  Create a tree buffer.
  */
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return Qe.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], r = this.set.types[t], s = r.name;
    if (/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), e += 4, i == e)
      return s;
    let l = [];
    for (; e < i; )
      l.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + l.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, i, r, s) {
    let { buffer: l } = this, o = -1;
    for (let a = e; a != t && !(hu(s, r, l[a + 1], l[a + 2]) && (o = a, i > 0)); a = l[a + 3])
      ;
    return o;
  }
  /**
  @internal
  */
  slice(e, t, i) {
    let r = this.buffer, s = new Uint16Array(t - e), l = 0;
    for (let o = e, a = 0; o < t; ) {
      s[a++] = r[o++], s[a++] = r[o++] - i;
      let h = s[a++] = r[o++] - i;
      s[a++] = r[o++] - e, l = Math.max(l, h);
    }
    return new At(s, l, this.set);
  }
}
function hu(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function Hi(n, e, t, i) {
  for (var r; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let l = !i && n instanceof Oe && n.index < 0 ? null : n.parent;
    if (!l)
      return n;
    n = l;
  }
  let s = i ? 0 : N.IgnoreOverlays;
  if (i)
    for (let l = n, o = l.parent; o; l = o, o = l.parent)
      l instanceof Oe && l.index < 0 && ((r = o.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != l.from && (n = o);
  for (; ; ) {
    let l = n.enter(e, t, s);
    if (!l)
      return n;
    n = l;
  }
}
class cu {
  cursor(e = 0) {
    return new ar(this, e);
  }
  getChild(e, t = null, i = null) {
    let r = ba(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return ba(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Hi(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Hi(this, e, t, !0);
  }
  matchContext(e) {
    return ol(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let r = t.lastChild;
      if (!r || r.to != t.to)
        break;
      r.type.isError && r.from == r.to ? (i = t, t = r.prevSibling) : t = r;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Oe extends cu {
  constructor(e, t, i, r) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = r;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, r, s = 0) {
    for (let l = this; ; ) {
      for (let { children: o, positions: a } = l._tree, h = t > 0 ? o.length : -1; e != h; e += t) {
        let c = o[e], u = a[e] + l.from;
        if (hu(r, i, u, u + c.length)) {
          if (c instanceof At) {
            if (s & N.ExcludeBuffers)
              continue;
            let f = c.findChild(0, c.buffer.length, t, i - u, r);
            if (f > -1)
              return new it(new Pm(l, c, e, u), null, f);
          } else if (s & N.IncludeAnonymous || !c.type.isAnonymous || _l(c)) {
            let f;
            if (!(s & N.IgnoreMounts) && (f = Fi.get(c)) && !f.overlay)
              return new Oe(f.tree, u, e, l);
            let d = new Oe(c, u, e, l);
            return s & N.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, r);
          }
        }
      }
      if (s & N.IncludeAnonymous || !l.type.isAnonymous || (l.index >= 0 ? e = l.index + t : e = t < 0 ? -1 : l._parent._tree.children.length, l = l._parent, !l))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    let r;
    if (!(i & N.IgnoreOverlays) && (r = Fi.get(this._tree)) && r.overlay) {
      let s = e - this.from;
      for (let { from: l, to: o } of r.overlay)
        if ((t > 0 ? l <= s : l < s) && (t < 0 ? o >= s : o > s))
          return new Oe(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function ba(n, e, t, i) {
  let r = n.cursor(), s = [];
  if (!r.firstChild())
    return s;
  if (t != null) {
    for (let l = !1; !l; )
      if (l = r.type.is(t), !r.nextSibling())
        return s;
  }
  for (; ; ) {
    if (i != null && r.type.is(i))
      return s;
    if (r.type.is(e) && s.push(r.node), !r.nextSibling())
      return i == null ? s : [];
  }
}
function ol(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class Pm {
  constructor(e, t, i, r) {
    this.parent = e, this.buffer = t, this.index = i, this.start = r;
  }
}
class it extends cu {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i);
    return s < 0 ? null : new it(this.context, this, s);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    if (i & N.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new it(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new it(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new it(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, r = this.index + 4, s = i.buffer[this.index + 3];
    if (s > r) {
      let l = i.buffer[this.index + 1];
      e.push(i.slice(r, s, l)), t.push(0);
    }
    return new K(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function uu(n) {
  if (!n.length)
    return null;
  let e = 0, t = n[0];
  for (let s = 1; s < n.length; s++) {
    let l = n[s];
    (l.from > t.from || l.to < t.to) && (t = l, e = s);
  }
  let i = t instanceof Oe && t.index < 0 ? null : t.parent, r = n.slice();
  return i ? r[e] = i : r.splice(e, 1), new $m(r, t);
}
class $m {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return uu(this.heads);
  }
}
function Cm(n, e, t) {
  let i = n.resolveInner(e, t), r = null;
  for (let s = i instanceof Oe ? i : i.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let l = s.parent;
      (r || (r = [i])).push(l.resolve(e, t)), s = l;
    } else {
      let l = Fi.get(s.tree);
      if (l && l.overlay && l.overlay[0].from <= e && l.overlay[l.overlay.length - 1].to >= e) {
        let o = new Oe(l.tree, l.overlay[0].from + s.from, -1, s);
        (r || (r = [i])).push(Hi(o, e, t, !1));
      }
    }
  return r ? uu(r) : i;
}
class ar {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Oe)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = i + r.buffer[e + 1], this.to = i + r.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof Oe ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: r } = this.buffer, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, i = this.mode) {
    return this.buffer ? i & N.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & N.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & N.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let r = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != r)
        return this.yieldBuf(t.findChild(
          r,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(r);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (r.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = r);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let s = t + e, l = e < 0 ? -1 : i._tree.children.length; s != l; s += e) {
          let o = i._tree.children[s];
          if (this.mode & N.IncludeAnonymous || o instanceof At || !o.type.isAnonymous || _l(o))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
        for (let l = e; l; l = l._parent)
          if (l.index == r) {
            if (r == this.index)
              return l;
            t = l, i = s + 1;
            break e;
          }
        r = this.stack[--s];
      }
    for (let r = i; r < this.stack.length; r++)
      t = new it(this.buffer, t, this.stack[r]);
    return this.bufferNode = new it(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let i = 0; ; ) {
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; ; ) {
        if (r && t && t(this), r = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, r = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return ol(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0)
        return ol(this._tree, e, r);
      let l = i[t.buffer[this.stack[s]]];
      if (!l.isAnonymous) {
        if (e[r] && e[r] != l.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function _l(n) {
  return n.children.some((e) => e instanceof At || !e.type.isAnonymous || _l(e));
}
function Tm(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: r = au, reused: s = [], minRepeatType: l = i.types.length } = n, o = Array.isArray(t) ? new Dl(t, t.length) : t, a = i.types, h = 0, c = 0;
  function u(x, k, P, M, V, B) {
    let { id: z, start: X, end: L, size: _ } = o, I = c, me = h;
    for (; _ < 0; )
      if (o.next(), _ == -1) {
        let ht = s[z];
        P.push(ht), M.push(X - x);
        return;
      } else if (_ == -3) {
        h = z;
        return;
      } else if (_ == -4) {
        c = z;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${_}`);
    let Pe = a[z], Ie, oe, Me = X - x;
    if (L - X <= r && (oe = g(o.pos - k, V))) {
      let ht = new Uint16Array(oe.size - oe.skip), qe = o.pos - oe.size, Ne = ht.length;
      for (; o.pos > qe; )
        Ne = y(oe.start, ht, Ne);
      Ie = new At(ht, L - oe.start, i), Me = oe.start - x;
    } else {
      let ht = o.pos - _;
      o.next();
      let qe = [], Ne = [], Mt = z >= l ? z : -1, Gt = 0, mn = L;
      for (; o.pos > ht; )
        Mt >= 0 && o.id == Mt && o.size >= 0 ? (o.end <= mn - r && (O(qe, Ne, X, Gt, o.end, mn, Mt, I, me), Gt = qe.length, mn = o.end), o.next()) : B > 2500 ? f(X, ht, qe, Ne) : u(X, ht, qe, Ne, Mt, B + 1);
      if (Mt >= 0 && Gt > 0 && Gt < qe.length && O(qe, Ne, X, Gt, X, mn, Mt, I, me), qe.reverse(), Ne.reverse(), Mt > -1 && Gt > 0) {
        let po = d(Pe, me);
        Ie = Ll(Pe, qe, Ne, 0, qe.length, 0, L - X, po, po);
      } else
        Ie = m(Pe, qe, Ne, L - X, I - L, me);
    }
    P.push(Ie), M.push(Me);
  }
  function f(x, k, P, M) {
    let V = [], B = 0, z = -1;
    for (; o.pos > k; ) {
      let { id: X, start: L, end: _, size: I } = o;
      if (I > 4)
        o.next();
      else {
        if (z > -1 && L < z)
          break;
        z < 0 && (z = _ - r), V.push(X, L, _), B++, o.next();
      }
    }
    if (B) {
      let X = new Uint16Array(B * 4), L = V[V.length - 2];
      for (let _ = V.length - 3, I = 0; _ >= 0; _ -= 3)
        X[I++] = V[_], X[I++] = V[_ + 1] - L, X[I++] = V[_ + 2] - L, X[I++] = I;
      P.push(new At(X, V[2] - L, i)), M.push(L - x);
    }
  }
  function d(x, k) {
    return (P, M, V) => {
      let B = 0, z = P.length - 1, X, L;
      if (z >= 0 && (X = P[z]) instanceof K) {
        if (!z && X.type == x && X.length == V)
          return X;
        (L = X.prop(q.lookAhead)) && (B = M[z] + X.length + L);
      }
      return m(x, P, M, V, B, k);
    };
  }
  function O(x, k, P, M, V, B, z, X, L) {
    let _ = [], I = [];
    for (; x.length > M; )
      _.push(x.pop()), I.push(k.pop() + P - V);
    x.push(m(i.types[z], _, I, B - V, X - B, L)), k.push(V - P);
  }
  function m(x, k, P, M, V, B, z) {
    if (B) {
      let X = [q.contextHash, B];
      z = z ? [X].concat(z) : [X];
    }
    if (V > 25) {
      let X = [q.lookAhead, V];
      z = z ? [X].concat(z) : [X];
    }
    return new K(x, k, P, M, z);
  }
  function g(x, k) {
    let P = o.fork(), M = 0, V = 0, B = 0, z = P.end - r, X = { size: 0, start: 0, skip: 0 };
    e: for (let L = P.pos - x; P.pos > L; ) {
      let _ = P.size;
      if (P.id == k && _ >= 0) {
        X.size = M, X.start = V, X.skip = B, B += 4, M += 4, P.next();
        continue;
      }
      let I = P.pos - _;
      if (_ < 0 || I < L || P.start < z)
        break;
      let me = P.id >= l ? 4 : 0, Pe = P.start;
      for (P.next(); P.pos > I; ) {
        if (P.size < 0)
          if (P.size == -3)
            me += 4;
          else
            break e;
        else P.id >= l && (me += 4);
        P.next();
      }
      V = Pe, M += _, B += me;
    }
    return (k < 0 || M == x) && (X.size = M, X.start = V, X.skip = B), X.size > 4 ? X : void 0;
  }
  function y(x, k, P) {
    let { id: M, start: V, end: B, size: z } = o;
    if (o.next(), z >= 0 && M < l) {
      let X = P;
      if (z > 4) {
        let L = o.pos - (z - 4);
        for (; o.pos > L; )
          P = y(x, k, P);
      }
      k[--P] = X, k[--P] = B - x, k[--P] = V - x, k[--P] = M;
    } else z == -3 ? h = M : z == -4 && (c = M);
    return P;
  }
  let b = [], S = [];
  for (; o.pos > 0; )
    u(n.start || 0, n.bufferStart || 0, b, S, -1, 0);
  let v = (e = n.length) !== null && e !== void 0 ? e : b.length ? S[0] + b[0].length : 0;
  return new K(a[n.topID], b.reverse(), S.reverse(), v);
}
const xa = /* @__PURE__ */ new WeakMap();
function Un(n, e) {
  if (!n.isAnonymous || e instanceof At || e.type != n)
    return 1;
  let t = xa.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof K)) {
        t = 1;
        break;
      }
      t += Un(n, i);
    }
    xa.set(e, t);
  }
  return t;
}
function Ll(n, e, t, i, r, s, l, o, a) {
  let h = 0;
  for (let O = i; O < r; O++)
    h += Un(n, e[O]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], f = [];
  function d(O, m, g, y, b) {
    for (let S = g; S < y; ) {
      let v = S, x = m[S], k = Un(n, O[S]);
      for (S++; S < y; S++) {
        let P = Un(n, O[S]);
        if (k + P >= c)
          break;
        k += P;
      }
      if (S == v + 1) {
        if (k > c) {
          let P = O[v];
          d(P.children, P.positions, 0, P.children.length, m[v] + b);
          continue;
        }
        u.push(O[v]);
      } else {
        let P = m[S - 1] + O[S - 1].length - x;
        u.push(Ll(n, O, m, v, S, x, P, null, a));
      }
      f.push(x + b - s);
    }
  }
  return d(e, t, i, r, 0), (o || a)(u, f, l);
}
class fu {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, i) {
    let r = this.map.get(e);
    r || this.map.set(e, r = /* @__PURE__ */ new Map()), r.set(t, i);
  }
  getBuffer(e, t) {
    let i = this.map.get(e);
    return i && i.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof it ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof Oe && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof it ? this.getBuffer(e.context.buffer, e.index) : e instanceof Oe ? this.map.get(e.tree) : void 0;
  }
  /**
  Set the value for the node that a cursor currently points to.
  */
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /**
  Retrieve the value for the node that a cursor currently points
  to.
  */
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class Ot {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, i, r, s = !1, l = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = r, this.open = (s ? 1 : 0) | (l ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], i = !1) {
    let r = [new Ot(0, e.length, e, 0, !1, i)];
    for (let s of t)
      s.to > e.length && r.push(s);
    return r;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let r = [], s = 1, l = e.length ? e[0] : null;
    for (let o = 0, a = 0, h = 0; ; o++) {
      let c = o < t.length ? t[o] : null, u = c ? c.fromA : 1e9;
      if (u - a >= i)
        for (; l && l.from < u; ) {
          let f = l;
          if (a >= f.from || u <= f.to || h) {
            let d = Math.max(f.from, a) - h, O = Math.min(f.to, u) - h;
            f = d >= O ? null : new Ot(d, O, f.tree, f.offset + h, o > 0, !!c);
          }
          if (f && r.push(f), l.to > u)
            break;
          l = s < e.length ? e[s++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return r;
  }
}
class du {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, i) {
    return typeof e == "string" && (e = new Am(e)), i = i ? i.length ? i.map((r) => new Ve(r.from, r.to)) : [new Ve(0, 0)] : [new Ve(0, e.length)], this.createParse(e, t || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, i) {
    let r = this.startParse(e, t, i);
    for (; ; ) {
      let s = r.advance();
      if (s)
        return s;
    }
  }
}
class Am {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
function Rm(n) {
  return (e, t, i, r) => new Zm(e, n, t, i, r);
}
class Sa {
  constructor(e, t, i, r, s) {
    this.parser = e, this.parse = t, this.overlay = i, this.target = r, this.from = s;
  }
}
function ka(n) {
  if (!n.length || n.some((e) => e.from >= e.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(n));
}
class Xm {
  constructor(e, t, i, r, s, l, o) {
    this.parser = e, this.predicate = t, this.mounts = i, this.index = r, this.start = s, this.target = l, this.prev = o, this.depth = 0, this.ranges = [];
  }
}
const al = new q({ perNode: !0 });
class Zm {
  constructor(e, t, i, r, s) {
    this.nest = t, this.input = i, this.fragments = r, this.ranges = s, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let i = this.baseParse.advance();
      if (!i)
        return null;
      if (this.baseParse = null, this.baseTree = i, this.startInner(), this.stoppedAt != null)
        for (let r of this.inner)
          r.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let i = this.baseTree;
      return this.stoppedAt != null && (i = new K(i.type, i.children, i.positions, i.length, i.propValues.concat([[al, this.stoppedAt]]))), i;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let i = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      i[q.mounted.id] = new Fi(t, e.overlay, e.parser), e.target.props = i;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let e = this.input.length;
    for (let t = this.innerDone; t < this.inner.length; t++)
      this.inner[t].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (this.stoppedAt = e, this.baseParse)
      this.baseParse.stopAt(e);
    else
      for (let t = this.innerDone; t < this.inner.length; t++)
        this.inner[t].parse.stopAt(e);
  }
  startInner() {
    let e = new zm(this.fragments), t = null, i = null, r = new ar(new Oe(this.baseTree, this.ranges[0].from, 0, null), N.IncludeAnonymous | N.IgnoreMounts);
    e: for (let s, l; ; ) {
      let o = !0, a;
      if (this.stoppedAt != null && r.from >= this.stoppedAt)
        o = !1;
      else if (e.hasNode(r)) {
        if (t) {
          let h = t.mounts.find((c) => c.frag.from <= r.from && c.frag.to >= r.to && c.mount.overlay);
          if (h)
            for (let c of h.mount.overlay) {
              let u = c.from + h.pos, f = c.to + h.pos;
              u >= r.from && f <= r.to && !t.ranges.some((d) => d.from < f && d.to > u) && t.ranges.push({ from: u, to: f });
            }
        }
        o = !1;
      } else if (i && (l = Mm(i.ranges, r.from, r.to)))
        o = l != 2;
      else if (!r.type.isAnonymous && (s = this.nest(r, this.input)) && (r.from < r.to || !s.overlay)) {
        r.tree || qm(r);
        let h = e.findMounts(r.from, s.parser);
        if (typeof s.overlay == "function")
          t = new Xm(s.parser, s.overlay, h, this.inner.length, r.from, r.tree, t);
        else {
          let c = Pa(this.ranges, s.overlay || (r.from < r.to ? [new Ve(r.from, r.to)] : []));
          c.length && ka(c), (c.length || !s.overlay) && this.inner.push(new Sa(s.parser, c.length ? s.parser.startParse(this.input, $a(h, c), c) : s.parser.startParse(""), s.overlay ? s.overlay.map((u) => new Ve(u.from - r.from, u.to - r.from)) : null, r.tree, c.length ? c[0].from : r.from)), s.overlay ? c.length && (i = { ranges: c, depth: 0, prev: i }) : o = !1;
        }
      } else if (t && (a = t.predicate(r)) && (a === !0 && (a = new Ve(r.from, r.to)), a.from < a.to)) {
        let h = t.ranges.length - 1;
        h >= 0 && t.ranges[h].to == a.from ? t.ranges[h] = { from: t.ranges[h].from, to: a.to } : t.ranges.push(a);
      }
      if (o && r.firstChild())
        t && t.depth++, i && i.depth++;
      else
        for (; !r.nextSibling(); ) {
          if (!r.parent())
            break e;
          if (t && !--t.depth) {
            let h = Pa(this.ranges, t.ranges);
            h.length && (ka(h), this.inner.splice(t.index, 0, new Sa(t.parser, t.parser.startParse(this.input, $a(t.mounts, h), h), t.ranges.map((c) => new Ve(c.from - t.start, c.to - t.start)), t.target, h[0].from))), t = t.prev;
          }
          i && !--i.depth && (i = i.prev);
        }
    }
  }
}
function Mm(n, e, t) {
  for (let i of n) {
    if (i.from >= t)
      break;
    if (i.to > e)
      return i.from <= e && i.to >= t ? 2 : 1;
  }
  return 0;
}
function va(n, e, t, i, r, s) {
  if (e < t) {
    let l = n.buffer[e + 1];
    i.push(n.slice(e, t, l)), r.push(l - s);
  }
}
function qm(n) {
  let { node: e } = n, t = [], i = e.context.buffer;
  do
    t.push(n.index), n.parent();
  while (!n.tree);
  let r = n.tree, s = r.children.indexOf(i), l = r.children[s], o = l.buffer, a = [s];
  function h(c, u, f, d, O, m) {
    let g = t[m], y = [], b = [];
    va(l, c, g, y, b, d);
    let S = o[g + 1], v = o[g + 2];
    a.push(y.length);
    let x = m ? h(g + 4, o[g + 3], l.set.types[o[g]], S, v - S, m - 1) : e.toTree();
    return y.push(x), b.push(S - d), va(l, o[g + 3], u, y, b, d), new K(f, y, b, O);
  }
  r.children[s] = h(0, o.length, Qe.none, 0, l.length, t.length - 1);
  for (let c of a) {
    let u = n.tree.children[c], f = n.tree.positions[c];
    n.yield(new Oe(u, f + n.from, c, n._tree));
  }
}
class wa {
  constructor(e, t) {
    this.offset = t, this.done = !1, this.cursor = e.cursor(N.IncludeAnonymous | N.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(e) {
    let { cursor: t } = this, i = e - this.offset;
    for (; !this.done && t.from < i; )
      t.to >= e && t.enter(i, 1, N.IgnoreOverlays | N.ExcludeBuffers) || t.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree)
      for (let t = this.cursor.tree; ; ) {
        if (t == e.tree)
          return !0;
        if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof K)
          t = t.children[0];
        else
          break;
      }
    return !1;
  }
}
let zm = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let i = this.curFrag = e[0];
      this.curTo = (t = i.tree.prop(al)) !== null && t !== void 0 ? t : i.to, this.inner = new wa(i.tree, -i.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
  }
  nextFrag() {
    var e;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let t = this.curFrag = this.fragments[this.fragI];
      this.curTo = (e = t.tree.prop(al)) !== null && e !== void 0 ? e : t.to, this.inner = new wa(t.tree, -t.offset);
    }
  }
  findMounts(e, t) {
    var i;
    let r = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let s = this.inner.cursor.node; s; s = s.parent) {
        let l = (i = s.tree) === null || i === void 0 ? void 0 : i.prop(q.mounted);
        if (l && l.parser == t)
          for (let o = this.fragI; o < this.fragments.length; o++) {
            let a = this.fragments[o];
            if (a.from >= s.to)
              break;
            a.tree == this.curFrag.tree && r.push({
              frag: a,
              pos: s.from - a.offset,
              mount: l
            });
          }
      }
    }
    return r;
  }
};
function Pa(n, e) {
  let t = null, i = e;
  for (let r = 1, s = 0; r < n.length; r++) {
    let l = n[r - 1].to, o = n[r].from;
    for (; s < i.length; s++) {
      let a = i[s];
      if (a.from >= o)
        break;
      a.to <= l || (t || (i = t = e.slice()), a.from < l ? (t[s] = new Ve(a.from, l), a.to > o && t.splice(s + 1, 0, new Ve(o, a.to))) : a.to > o ? t[s--] = new Ve(o, a.to) : t.splice(s--, 1));
    }
  }
  return i;
}
function Vm(n, e, t, i) {
  let r = 0, s = 0, l = !1, o = !1, a = -1e9, h = [];
  for (; ; ) {
    let c = r == n.length ? 1e9 : l ? n[r].to : n[r].from, u = s == e.length ? 1e9 : o ? e[s].to : e[s].from;
    if (l != o) {
      let f = Math.max(a, t), d = Math.min(c, u, i);
      f < d && h.push(new Ve(f, d));
    }
    if (a = Math.min(c, u), a == 1e9)
      break;
    c == a && (l ? (l = !1, r++) : l = !0), u == a && (o ? (o = !1, s++) : o = !0);
  }
  return h;
}
function $a(n, e) {
  let t = [];
  for (let { pos: i, mount: r, frag: s } of n) {
    let l = i + (r.overlay ? r.overlay[0].from : 0), o = l + r.tree.length, a = Math.max(s.from, l), h = Math.min(s.to, o);
    if (r.overlay) {
      let c = r.overlay.map((f) => new Ve(f.from + i, f.to + i)), u = Vm(e, c, a, h);
      for (let f = 0, d = a; ; f++) {
        let O = f == u.length, m = O ? h : u[f].from;
        if (m > d && t.push(new Ot(d, m, r.tree, -l, s.from >= d || s.openStart, s.to <= m || s.openEnd)), O)
          break;
        d = u[f].to;
      }
    } else
      t.push(new Ot(a, h, r.tree, -l, s.from >= l || s.openStart, s.to <= o || s.openEnd));
  }
  return t;
}
let Ym = 0;
class ze {
  /**
  @internal
  */
  constructor(e, t, i, r) {
    this.name = e, this.set = t, this.base = i, this.modified = r, this.id = Ym++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof ze && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let r = new ze(i, [], null, []);
    if (r.set.push(r), t)
      for (let s of t.set)
        r.set.push(s);
    return r;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new hr(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : hr.get(i.base || i, i.modified.concat(t).sort((r, s) => r.id - s.id));
  }
}
let Em = 0;
class hr {
  constructor(e) {
    this.name = e, this.instances = [], this.id = Em++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((o) => o.base == e && Dm(t, o.modified));
    if (i)
      return i;
    let r = [], s = new ze(e.name, r, e, t);
    for (let o of t)
      o.instances.push(s);
    let l = _m(t);
    for (let o of e.set)
      if (!o.modified.length)
        for (let a of l)
          r.push(hr.get(o, a));
    return s;
  }
}
function Dm(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function _m(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, r = e.length; i < r; i++)
      e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function Mr(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let r of t.split(" "))
      if (r) {
        let s = [], l = 2, o = r;
        for (let u = 0; ; ) {
          if (o == "..." && u > 0 && u + 3 == r.length) {
            l = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);
          if (!f)
            throw new RangeError("Invalid path: " + r);
          if (s.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == r.length)
            break;
          let d = r[u++];
          if (u == r.length && d == "!") {
            l = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + r);
          o = r.slice(u);
        }
        let a = s.length - 1, h = s[a];
        if (!h)
          throw new RangeError("Invalid path: " + r);
        let c = new cr(i, l, a > 0 ? s.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Ou.add(e);
}
const Ou = new q();
class cr {
  constructor(e, t, i, r) {
    this.tags = e, this.mode = t, this.context = i, this.next = r;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
cr.empty = new cr([], 2, null);
function pu(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of n)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let l of s.tag)
        t[l.id] = s.class;
  let { scope: i, all: r = null } = e || {};
  return {
    style: (s) => {
      let l = r;
      for (let o of s)
        for (let a of o.set) {
          let h = t[a.id];
          if (h) {
            l = l ? l + " " + h : h;
            break;
          }
        }
      return l;
    },
    scope: i
  };
}
function Lm(n, e) {
  let t = null;
  for (let i of n) {
    let r = i.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function Bm(n, e, t, i = 0, r = n.length) {
  let s = new jm(i, Array.isArray(e) ? e : [e], t);
  s.highlightRange(n.cursor(), i, r, "", s.highlighters), s.flush(r);
}
class jm {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, r, s) {
    let { type: l, from: o, to: a } = e;
    if (o >= i || a <= t)
      return;
    l.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(l)));
    let h = r, c = Wm(e) || cr.empty, u = Lm(s, c.tags);
    if (u && (h && (h += " "), h += u, c.mode == 1 && (r += (r ? " " : "") + u)), this.startSpan(Math.max(t, o), h), c.opaque)
      return;
    let f = e.tree && e.tree.prop(q.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + o, 1), O = this.highlighters.filter((g) => !g.scope || g.scope(f.tree.type)), m = e.firstChild();
      for (let g = 0, y = o; ; g++) {
        let b = g < f.overlay.length ? f.overlay[g] : null, S = b ? b.from + o : a, v = Math.max(t, y), x = Math.min(i, S);
        if (v < x && m)
          for (; e.from < x && (this.highlightRange(e, v, x, r, s), this.startSpan(Math.min(x, e.to), h), !(e.to >= S || !e.nextSibling())); )
            ;
        if (!b || S > i)
          break;
        y = b.to + o, y > t && (this.highlightRange(d.cursor(), Math.max(t, b.from + o), Math.min(i, y), "", O), this.startSpan(Math.min(i, y), h));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      f && (r = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, r, s), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Wm(n) {
  let e = n.type.prop(Ou);
  for (; e && e.context && !n.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const w = ze.define, Xn = w(), bt = w(), Ca = w(bt), Ta = w(bt), xt = w(), Zn = w(xt), rs = w(xt), Ke = w(), qt = w(Ke), Fe = w(), He = w(), hl = w(), wi = w(hl), Mn = w(), p = {
  /**
  A comment.
  */
  comment: Xn,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: w(Xn),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: w(Xn),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: w(Xn),
  /**
  Any kind of identifier.
  */
  name: bt,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: w(bt),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Ca,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: w(Ca),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Ta,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: w(Ta),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: w(bt),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: w(bt),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: w(bt),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: w(bt),
  /**
  A literal value.
  */
  literal: xt,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Zn,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: w(Zn),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: w(Zn),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: w(Zn),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: rs,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: w(rs),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: w(rs),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: w(xt),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: w(xt),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: w(xt),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: w(xt),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: w(xt),
  /**
  A language keyword.
  */
  keyword: Fe,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: w(Fe),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: w(Fe),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: w(Fe),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: w(Fe),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: w(Fe),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: w(Fe),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: w(Fe),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: w(Fe),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: w(Fe),
  /**
  An operator.
  */
  operator: He,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: w(He),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: w(He),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: w(He),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: w(He),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: w(He),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: w(He),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: w(He),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: w(He),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: w(He),
  /**
  Program or markup punctuation.
  */
  punctuation: hl,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: w(hl),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: wi,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: w(wi),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: w(wi),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: w(wi),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: w(wi),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Ke,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: qt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: w(qt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: w(qt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: w(qt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: w(qt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: w(qt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: w(qt),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: w(Ke),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: w(Ke),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: w(Ke),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: w(Ke),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: w(Ke),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: w(Ke),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: w(Ke),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: w(Ke),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: w(),
  /**
  Deleted text.
  */
  deleted: w(),
  /**
  Changed text.
  */
  changed: w(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: w(),
  /**
  Metadata or meta-instruction.
  */
  meta: Mn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: w(Mn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: w(Mn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: w(Mn),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: ze.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: ze.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: ze.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: ze.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: ze.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: ze.defineModifier("special")
};
for (let n in p) {
  let e = p[n];
  e instanceof ze && (e.name = n);
}
pu([
  { tag: p.link, class: "tok-link" },
  { tag: p.heading, class: "tok-heading" },
  { tag: p.emphasis, class: "tok-emphasis" },
  { tag: p.strong, class: "tok-strong" },
  { tag: p.keyword, class: "tok-keyword" },
  { tag: p.atom, class: "tok-atom" },
  { tag: p.bool, class: "tok-bool" },
  { tag: p.url, class: "tok-url" },
  { tag: p.labelName, class: "tok-labelName" },
  { tag: p.inserted, class: "tok-inserted" },
  { tag: p.deleted, class: "tok-deleted" },
  { tag: p.literal, class: "tok-literal" },
  { tag: p.string, class: "tok-string" },
  { tag: p.number, class: "tok-number" },
  { tag: [p.regexp, p.escape, p.special(p.string)], class: "tok-string2" },
  { tag: p.variableName, class: "tok-variableName" },
  { tag: p.local(p.variableName), class: "tok-variableName tok-local" },
  { tag: p.definition(p.variableName), class: "tok-variableName tok-definition" },
  { tag: p.special(p.variableName), class: "tok-variableName2" },
  { tag: p.definition(p.propertyName), class: "tok-propertyName tok-definition" },
  { tag: p.typeName, class: "tok-typeName" },
  { tag: p.namespace, class: "tok-namespace" },
  { tag: p.className, class: "tok-className" },
  { tag: p.macroName, class: "tok-macroName" },
  { tag: p.propertyName, class: "tok-propertyName" },
  { tag: p.operator, class: "tok-operator" },
  { tag: p.comment, class: "tok-comment" },
  { tag: p.meta, class: "tok-meta" },
  { tag: p.invalid, class: "tok-invalid" },
  { tag: p.punctuation, class: "tok-punctuation" }
]);
var ss;
const Kt = /* @__PURE__ */ new q();
function mu(n) {
  return T.define({
    combine: n ? (e) => e.concat(n) : void 0
  });
}
const Bl = /* @__PURE__ */ new q();
class Be {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], r = "") {
    this.data = e, this.name = r, E.prototype.hasOwnProperty("tree") || Object.defineProperty(E.prototype, "tree", { get() {
      return J(this);
    } }), this.parser = t, this.extension = [
      Rt.of(this),
      E.languageData.of((s, l, o) => {
        let a = Aa(s, l, o), h = a.type.prop(Kt);
        if (!h)
          return [];
        let c = s.facet(h), u = a.type.prop(Bl);
        if (u) {
          let f = a.resolve(l - a.from, o);
          for (let d of u)
            if (d.test(f, s)) {
              let O = s.facet(d.facet);
              return d.type == "replace" ? O : O.concat(c);
            }
        }
        return c;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, i = -1) {
    return Aa(e, t, i).type.prop(Kt) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(Rt);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], r = (s, l) => {
      if (s.prop(Kt) == this.data) {
        i.push({ from: l, to: l + s.length });
        return;
      }
      let o = s.prop(q.mounted);
      if (o) {
        if (o.tree.prop(Kt) == this.data) {
          if (o.overlay)
            for (let a of o.overlay)
              i.push({ from: a.from + l, to: a.to + l });
          else
            i.push({ from: l, to: l + s.length });
          return;
        } else if (o.overlay) {
          let a = i.length;
          if (r(o.tree, o.overlay[0].from + l), i.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let h = s.children[a];
        h instanceof K && r(h, s.positions[a] + l);
      }
    };
    return r(J(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Be.setState = /* @__PURE__ */ Z.define();
function Aa(n, e, t) {
  let i = n.facet(Rt), r = J(n).topNode;
  if (!i || i.allowsNesting)
    for (let s = r; s; s = s.enter(e, t, N.ExcludeBuffers))
      s.type.isTop && (r = s);
  return r;
}
class ci extends Be {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = mu(e.languageData);
    return new ci(t, e.parser.configure({
      props: [Kt.add((i) => i.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new ci(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function J(n) {
  let e = n.field(Be.state, !1);
  return e ? e.tree : K.empty;
}
class Gm {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let Pi = null;
class ur {
  constructor(e, t, i = [], r, s, l, o, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = r, this.treeLen = s, this.viewport = l, this.skipped = o, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ur(e, t, [], K.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Gm(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != K.empty && this.isDone(t != null ? t : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(Ot.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t != null ? t : this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Ot.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Pi;
    Pi = this;
    try {
      return e();
    } finally {
      Pi = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Ra(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: r, treeLen: s, viewport: l, skipped: o } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, u, f) => a.push({ fromA: h, toA: c, fromB: u, toB: f })), i = Ot.applyChanges(i, a), r = K.empty, s = 0, l = { from: e.mapPos(l.from, -1), to: e.mapPos(l.to, 1) }, this.skipped.length) {
        o = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), u = e.mapPos(h.to, -1);
          c < u && o.push({ from: c, to: u });
        }
      }
    }
    return new ur(this.parser, t, i, r, s, l, o, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: r, to: s } = this.skipped[i];
      r < e.to && s > e.from && (this.fragments = Ra(this.fragments, r, s), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends du {
      createParse(t, i, r) {
        let s = r[0].from, l = r[r.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = Pi;
            if (a) {
              for (let h of r)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = l, new K(Qe.none, [], [], l - s);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Pi;
  }
}
function Ra(n, e, t) {
  return Ot.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ui {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new ui(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = ur.create(e.facet(Rt).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new ui(i);
  }
}
Be.state = /* @__PURE__ */ se.define({
  create: ui.init,
  update(n, e) {
    for (let t of e.effects)
      if (t.is(Be.setState))
        return t.value;
    return e.startState.facet(Rt) != e.state.facet(Rt) ? ui.init(e.state) : n.apply(e);
  }
});
let gu = (n) => {
  let e = setTimeout(
    () => n(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback != "undefined" && (gu = (n) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(n, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const ls = typeof navigator != "undefined" && (!((ss = navigator.scheduling) === null || ss === void 0) && ss.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Im = /* @__PURE__ */ ne.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Be.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Be.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = gu(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: r } } = this.view, s = i.field(Be.state);
    if (s.tree == s.context.tree && s.context.isDone(
      r + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let l = Date.now() + Math.min(this.chunkBudget, 100, e && !ls ? Math.max(25, e.timeRemaining() - 5) : 1e9), o = s.context.treeLen < r && i.doc.length > r + 1e3, a = s.context.work(() => ls && ls() || Date.now() > l, r + (o ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: Be.setState.of(new ui(s.context)) })), this.chunkBudget > 0 && !(a && !o) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => ve(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), Rt = /* @__PURE__ */ T.define({
  combine(n) {
    return n.length ? n[0] : null;
  },
  enables: (n) => [
    Be.state,
    Im,
    $.contentAttributes.compute([n], (e) => {
      let t = e.facet(n);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class jl {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Nm = /* @__PURE__ */ T.define(), qr = /* @__PURE__ */ T.define({
  combine: (n) => {
    if (!n.length)
      return "  ";
    let e = n[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    return e;
  }
});
function fr(n) {
  let e = n.facet(qr);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Ki(n, e) {
  let t = "", i = n.tabSize, r = n.facet(qr)[0];
  if (r == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    r = " ";
  }
  for (let s = 0; s < e; s++)
    t += r;
  return t;
}
function Wl(n, e) {
  n instanceof E && (n = new zr(n));
  for (let i of n.state.facet(Nm)) {
    let r = i(n, e);
    if (r !== void 0)
      return r;
  }
  let t = J(n.state);
  return t.length >= e ? Um(n, t, e) : null;
}
class zr {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = fr(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= i.from && r <= i.to ? s && r == e ? { text: "", from: e } : (t < 0 ? r < e : r <= e) ? { text: i.text.slice(r - i.from), from: r } : { text: i.text.slice(0, r - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: r } = this.lineAt(e, t);
    return i.slice(e - r, Math.min(i.length, e + 100 - r));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t), s = this.countColumn(i, e - r), l = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return l > -1 && (s += l - this.countColumn(i, i.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return yi(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let l = s(r);
      if (l > -1)
        return l;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Vr = /* @__PURE__ */ new q();
function Um(n, e, t) {
  let i = e.resolveStack(t), r = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (r != i.node) {
    let s = [];
    for (let l = r; l && !(l.from < i.node.from || l.to > i.node.to || l.from == i.node.from && l.type == i.node.type); l = l.parent)
      s.push(l);
    for (let l = s.length - 1; l >= 0; l--)
      i = { node: s[l], next: i };
  }
  return yu(i, n, t);
}
function yu(n, e, t) {
  for (let i = n; i; i = i.next) {
    let r = Hm(i.node);
    if (r)
      return r(Gl.create(e, t, i));
  }
  return 0;
}
function Fm(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Hm(n) {
  let e = n.type.prop(Vr);
  if (e)
    return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(q.closedBy))) {
    let r = n.lastChild, s = r && i.indexOf(r.name) > -1;
    return (l) => Qu(l, !0, 1, void 0, s && !Fm(l) ? r.from : void 0);
  }
  return n.parent == null ? Km : null;
}
function Km() {
  return 0;
}
class Gl extends zr {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Gl(e, t, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Jm(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return yu(this.context.next, this.base, this.pos);
  }
}
function Jm(n, e) {
  for (let t = e; t; t = t.parent)
    if (n == t)
      return !0;
  return !1;
}
function eg(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let r = n.options.simulateBreak, s = n.state.doc.lineAt(t.from), l = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let o = t.to; ; ) {
    let a = e.childAfter(o);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= l)
        return null;
      let h = /^ */.exec(s.text.slice(t.to - s.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    o = a.to;
  }
}
function tg({ closing: n, align: e = !0, units: t = 1 }) {
  return (i) => Qu(i, e, t, n);
}
function Qu(n, e, t, i, r) {
  let s = n.textAfter, l = s.match(/^\s*/)[0].length, o = i && s.slice(l, l + i.length) == i || r == n.pos + l, a = e ? eg(n) : null;
  return a ? o ? n.column(a.from) : n.column(a.to) : n.baseIndent + (o ? 0 : n.unit * t);
}
const ig = (n) => n.baseIndent;
function Fn({ except: n, units: e = 1 } = {}) {
  return (t) => {
    let i = n && n.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
const ng = 200;
function rg() {
  return E.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length)
      return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, r = t.lineAt(i);
    if (i > r.from + ng)
      return n;
    let s = t.sliceString(r.from, i);
    if (!e.some((h) => h.test(s)))
      return n;
    let { state: l } = n, o = -1, a = [];
    for (let { head: h } of l.selection.ranges) {
      let c = l.doc.lineAt(h);
      if (c.from == o)
        continue;
      o = c.from;
      let u = Wl(l, c.from);
      if (u == null)
        continue;
      let f = /^\s*/.exec(c.text)[0], d = Ki(l, u);
      f != d && a.push({ from: c.from, to: c.from + f.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const sg = /* @__PURE__ */ T.define(), Yr = /* @__PURE__ */ new q();
function bu(n) {
  let e = n.firstChild, t = n.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? n.to : t.from } : null;
}
function lg(n, e, t) {
  let i = J(n);
  if (i.length < t)
    return null;
  let r = i.resolveStack(t, 1), s = null;
  for (let l = r; l; l = l.next) {
    let o = l.node;
    if (o.to <= t || o.from > t)
      continue;
    if (s && o.from < e)
      break;
    let a = o.type.prop(Yr);
    if (a && (o.to < i.length - 50 || i.length == n.doc.length || !og(o))) {
      let h = a(o, n);
      h && h.from <= t && h.from >= e && h.to > t && (s = h);
    }
  }
  return s;
}
function og(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function dr(n, e, t) {
  for (let i of n.facet(sg)) {
    let r = i(n, e, t);
    if (r)
      return r;
  }
  return lg(n, e, t);
}
function xu(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const Er = /* @__PURE__ */ Z.define({ map: xu }), un = /* @__PURE__ */ Z.define({ map: xu });
function Su(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const Wt = /* @__PURE__ */ se.define({
  create() {
    return R.none;
  },
  update(n, e) {
    e.isUserEvent("delete") && e.changes.iterChangedRanges((t, i) => n = Xa(n, t, i)), n = n.map(e.changes);
    for (let t of e.effects)
      if (t.is(Er) && !ag(n, t.value.from, t.value.to)) {
        let { preparePlaceholder: i } = e.state.facet(wu), r = i ? R.replace({ widget: new pg(i(e.state, t.value)) }) : Za;
        n = n.update({ add: [r.range(t.value.from, t.value.to)] });
      } else t.is(un) && (n = n.update({
        filter: (i, r) => t.value.from != i || t.value.to != r,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    return e.selection && (n = Xa(n, e.selection.main.head)), n;
  },
  provide: (n) => $.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    return n.between(0, e.doc.length, (i, r) => {
      t.push(i, r);
    }), t;
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < n.length; ) {
      let i = n[t++], r = n[t++];
      if (typeof i != "number" || typeof r != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Za.range(i, r));
    }
    return R.set(e, !0);
  }
});
function Xa(n, e, t = e) {
  let i = !1;
  return n.between(e, t, (r, s) => {
    r < t && s > e && (i = !0);
  }), i ? n.update({
    filterFrom: e,
    filterTo: t,
    filter: (r, s) => r >= t || s <= e
  }) : n;
}
function Or(n, e, t) {
  var i;
  let r = null;
  return (i = n.field(Wt, !1)) === null || i === void 0 || i.between(e, t, (s, l) => {
    (!r || r.from > s) && (r = { from: s, to: l });
  }), r;
}
function ag(n, e, t) {
  let i = !1;
  return n.between(e, e, (r, s) => {
    r == e && s == t && (i = !0);
  }), i;
}
function ku(n, e) {
  return n.field(Wt, !1) ? e : e.concat(Z.appendConfig.of(Pu()));
}
const hg = (n) => {
  for (let e of Su(n)) {
    let t = dr(n.state, e.from, e.to);
    if (t)
      return n.dispatch({ effects: ku(n.state, [Er.of(t), vu(n, t)]) }), !0;
  }
  return !1;
}, cg = (n) => {
  if (!n.state.field(Wt, !1))
    return !1;
  let e = [];
  for (let t of Su(n)) {
    let i = Or(n.state, t.from, t.to);
    i && e.push(un.of(i), vu(n, i, !1));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function vu(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number, r = n.state.doc.lineAt(e.to).number;
  return $.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${r}.`);
}
const ug = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let r = n.lineBlockAt(i), s = dr(e, r.from, r.to);
    s && t.push(Er.of(s)), i = (s ? n.lineBlockAt(s.to) : r).to + 1;
  }
  return t.length && n.dispatch({ effects: ku(n.state, t) }), !!t.length;
}, fg = (n) => {
  let e = n.state.field(Wt, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, n.state.doc.length, (i, r) => {
    t.push(un.of({ from: i, to: r }));
  }), n.dispatch({ effects: t }), !0;
}, dg = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: hg },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: cg },
  { key: "Ctrl-Alt-[", run: ug },
  { key: "Ctrl-Alt-]", run: fg }
], Og = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, wu = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, Og);
  }
});
function Pu(n) {
  return [Wt, yg];
}
function $u(n, e) {
  let { state: t } = n, i = t.facet(wu), r = (l) => {
    let o = n.lineBlockAt(n.posAtDOM(l.target)), a = Or(n.state, o.from, o.to);
    a && n.dispatch({ effects: un.of(a) }), l.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(n, r, e);
  let s = document.createElement("span");
  return s.textContent = i.placeholderText, s.setAttribute("aria-label", t.phrase("folded code")), s.title = t.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = r, s;
}
const Za = /* @__PURE__ */ R.replace({ widget: /* @__PURE__ */ new class extends Qt {
  toDOM(n) {
    return $u(n, null);
  }
}() });
class pg extends Qt {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return $u(e, this.value);
  }
}
const mg = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class os extends gt {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function gg(n = {}) {
  let e = { ...mg, ...n }, t = new os(e, !0), i = new os(e, !1), r = ne.fromClass(class {
    constructor(l) {
      this.from = l.viewport.from, this.markers = this.buildMarkers(l);
    }
    update(l) {
      (l.docChanged || l.viewportChanged || l.startState.facet(Rt) != l.state.facet(Rt) || l.startState.field(Wt, !1) != l.state.field(Wt, !1) || J(l.startState) != J(l.state) || e.foldingChanged(l)) && (this.markers = this.buildMarkers(l.view));
    }
    buildMarkers(l) {
      let o = new pt();
      for (let a of l.viewportLineBlocks) {
        let h = Or(l.state, a.from, a.to) ? i : dr(l.state, a.from, a.to) ? t : null;
        h && o.add(a.from, a.from, h);
      }
      return o.finish();
    }
  }), { domEventHandlers: s } = e;
  return [
    r,
    dm({
      class: "cm-foldGutter",
      markers(l) {
        var o;
        return ((o = l.plugin(r)) === null || o === void 0 ? void 0 : o.markers) || D.empty;
      },
      initialSpacer() {
        return new os(e, !1);
      },
      domEventHandlers: {
        ...s,
        click: (l, o, a) => {
          if (s.click && s.click(l, o, a))
            return !0;
          let h = Or(l.state, o.from, o.to);
          if (h)
            return l.dispatch({ effects: un.of(h) }), !0;
          let c = dr(l.state, o.from, o.to);
          return c ? (l.dispatch({ effects: Er.of(c) }), !0) : !1;
        }
      }
    }),
    Pu()
  ];
}
const yg = /* @__PURE__ */ $.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class fn {
  constructor(e, t) {
    this.specs = e;
    let i;
    function r(o) {
      let a = $t.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = o, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, l = t.scope;
    this.scope = l instanceof Be ? (o) => o.prop(Kt) == l.data : l ? (o) => o == l : void 0, this.style = pu(e.map((o) => ({
      tag: o.tag,
      class: o.class || r(Object.assign({}, o, { tag: null }))
    })), {
      all: s
    }).style, this.module = i ? new $t(i) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new fn(e, t || {});
  }
}
const cl = /* @__PURE__ */ T.define(), Cu = /* @__PURE__ */ T.define({
  combine(n) {
    return n.length ? [n[0]] : null;
  }
});
function as(n) {
  let e = n.facet(cl);
  return e.length ? e : n.facet(Cu);
}
function Tu(n, e) {
  let t = [bg], i;
  return n instanceof fn && (n.module && t.push($.styleModule.of(n.module)), i = n.themeType), e != null && e.fallback ? t.push(Cu.of(n)) : i ? t.push(cl.computeN([$.darkTheme], (r) => r.facet($.darkTheme) == (i == "dark") ? [n] : [])) : t.push(cl.of(n)), t;
}
class Qg {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = J(e.state), this.decorations = this.buildDeco(e, as(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = J(e.state), i = as(e.state), r = i != as(e.startState), { viewport: s } = e.view, l = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !r && t.type == this.tree.type && l >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = l) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return R.none;
    let i = new pt();
    for (let { from: r, to: s } of e.visibleRanges)
      Bm(this.tree, t, (l, o, a) => {
        i.add(l, o, this.markCache[a] || (this.markCache[a] = R.mark({ class: a })));
      }, r, s);
    return i.finish();
  }
}
const bg = /* @__PURE__ */ Xt.high(/* @__PURE__ */ ne.fromClass(Qg, {
  decorations: (n) => n.decorations
})), xg = /* @__PURE__ */ fn.define([
  {
    tag: p.meta,
    color: "#404740"
  },
  {
    tag: p.link,
    textDecoration: "underline"
  },
  {
    tag: p.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: p.emphasis,
    fontStyle: "italic"
  },
  {
    tag: p.strong,
    fontWeight: "bold"
  },
  {
    tag: p.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: p.keyword,
    color: "#708"
  },
  {
    tag: [p.atom, p.bool, p.url, p.contentSeparator, p.labelName],
    color: "#219"
  },
  {
    tag: [p.literal, p.inserted],
    color: "#164"
  },
  {
    tag: [p.string, p.deleted],
    color: "#a11"
  },
  {
    tag: [p.regexp, p.escape, /* @__PURE__ */ p.special(p.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ p.definition(p.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ p.local(p.variableName),
    color: "#30a"
  },
  {
    tag: [p.typeName, p.namespace],
    color: "#085"
  },
  {
    tag: p.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ p.special(p.variableName), p.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ p.definition(p.propertyName),
    color: "#00c"
  },
  {
    tag: p.comment,
    color: "#940"
  },
  {
    tag: p.invalid,
    color: "#f00"
  }
]), Sg = /* @__PURE__ */ $.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Au = 1e4, Ru = "()[]{}", Xu = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, {
      afterCursor: !0,
      brackets: Ru,
      maxScanDistance: Au,
      renderMatch: wg
    });
  }
}), kg = /* @__PURE__ */ R.mark({ class: "cm-matchingBracket" }), vg = /* @__PURE__ */ R.mark({ class: "cm-nonmatchingBracket" });
function wg(n) {
  let e = [], t = n.matched ? kg : vg;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const Pg = /* @__PURE__ */ se.define({
  create() {
    return R.none;
  },
  update(n, e) {
    if (!e.docChanged && !e.selection)
      return n;
    let t = [], i = e.state.facet(Xu);
    for (let r of e.state.selection.ranges) {
      if (!r.empty)
        continue;
      let s = nt(e.state, r.head, -1, i) || r.head > 0 && nt(e.state, r.head - 1, 1, i) || i.afterCursor && (nt(e.state, r.head, 1, i) || r.head < e.state.doc.length && nt(e.state, r.head + 1, -1, i));
      s && (t = t.concat(i.renderMatch(s, e.state)));
    }
    return R.set(t, !0);
  },
  provide: (n) => $.decorations.from(n)
}), $g = [
  Pg,
  Sg
];
function Cg(n = {}) {
  return [Xu.of(n), $g];
}
const Zu = /* @__PURE__ */ new q();
function ul(n, e, t) {
  let i = n.prop(e < 0 ? q.openedBy : q.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let r = t.indexOf(n.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0))
      return [t[r + e]];
  }
  return null;
}
function fl(n) {
  let e = n.type.prop(Zu);
  return e ? e(n.node) : n;
}
function nt(n, e, t, i = {}) {
  let r = i.maxScanDistance || Au, s = i.brackets || Ru, l = J(n), o = l.resolveInner(e, t);
  for (let a = o; a; a = a.parent) {
    let h = ul(a.type, t, s);
    if (h && a.from < a.to) {
      let c = fl(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return Tg(n, e, t, a, c, h, s);
    }
  }
  return Ag(n, e, t, l, o.type, r, s);
}
function Tg(n, e, t, i, r, s, l) {
  let o = i.parent, a = { from: r.from, to: r.to }, h = 0, c = o == null ? void 0 : o.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && s.indexOf(c.type.name) > -1 && c.from < c.to) {
          let u = fl(c);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (ul(c.type, t, l))
          h++;
        else if (ul(c.type, -t, l)) {
          if (h == 0) {
            let u = fl(c);
            return {
              start: a,
              end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function Ag(n, e, t, i, r, s, l) {
  let o = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = l.indexOf(o);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), u = 0;
  for (let f = 0; !c.next().done && f <= s; ) {
    let d = c.value;
    t < 0 && (f += d.length);
    let O = e + f * t;
    for (let m = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; m != g; m += t) {
      let y = l.indexOf(d[m]);
      if (!(y < 0 || i.resolveInner(O + m, 1).type != r))
        if (y % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: h, end: { from: O + m, to: O + m + 1 }, matched: y >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (f += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const Rg = /* @__PURE__ */ Object.create(null), Ma = [Qe.none], qa = [], za = /* @__PURE__ */ Object.create(null), Xg = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  Xg[n] = /* @__PURE__ */ Zg(Rg, e);
function hs(n, e) {
  qa.indexOf(n) > -1 || (qa.push(n), console.warn(e));
}
function Zg(n, e) {
  let t = [];
  for (let o of e.split(" ")) {
    let a = [];
    for (let h of o.split(".")) {
      let c = n[h] || p[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : hs(h, `Modifier ${h} used at start of tag`) : a.length ? hs(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : hs(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), r = i + " " + t.map((o) => o.id), s = za[r];
  if (s)
    return s.id;
  let l = za[r] = Qe.define({
    id: Ma.length,
    name: i,
    props: [Mr({ [i]: t })]
  });
  return Ma.push(l), l.id;
}
F.RTL, F.LTR;
const Mg = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = Nl(n.state, t.from);
  return i.line ? qg(n) : i.block ? Vg(n) : !1;
};
function Il(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let r = n(e, t);
    return r ? (i(t.update(r)), !0) : !1;
  };
}
const qg = /* @__PURE__ */ Il(
  Dg,
  0
  /* CommentOption.Toggle */
), zg = /* @__PURE__ */ Il(
  Mu,
  0
  /* CommentOption.Toggle */
), Vg = /* @__PURE__ */ Il(
  (n, e) => Mu(n, e, Eg(e)),
  0
  /* CommentOption.Toggle */
);
function Nl(n, e) {
  let t = n.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const $i = 50;
function Yg(n, { open: e, close: t }, i, r) {
  let s = n.sliceDoc(i - $i, i), l = n.sliceDoc(r, r + $i), o = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(l)[0].length, h = s.length - o;
  if (s.slice(h - e.length, h) == e && l.slice(a, a + t.length) == t)
    return {
      open: { pos: i - o, margin: o && 1 },
      close: { pos: r + a, margin: a && 1 }
    };
  let c, u;
  r - i <= 2 * $i ? c = u = n.sliceDoc(i, r) : (c = n.sliceDoc(i, i + $i), u = n.sliceDoc(r - $i, r));
  let f = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(u)[0].length, O = u.length - d - t.length;
  return c.slice(f, f + e.length) == e && u.slice(O, O + t.length) == t ? {
    open: {
      pos: i + f + e.length,
      margin: /\s/.test(c.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: r - d - t.length,
      margin: /\s/.test(u.charAt(O - 1)) ? 1 : 0
    }
  } : null;
}
function Eg(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), r = t.to <= i.to ? i : n.doc.lineAt(t.to);
    r.from > i.from && r.from == t.to && (r = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from ? e[s].to = r.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
  }
  return e;
}
function Mu(n, e, t = e.selection.ranges) {
  let i = t.map((s) => Nl(e, s.from).block);
  if (!i.every((s) => s))
    return null;
  let r = t.map((s, l) => Yg(e, i[l], s.from, s.to));
  if (n != 2 && !r.every((s) => s))
    return { changes: e.changes(t.map((s, l) => r[l] ? [] : [{ from: s.from, insert: i[l].open + " " }, { from: s.to, insert: " " + i[l].close }])) };
  if (n != 1 && r.some((s) => s)) {
    let s = [];
    for (let l = 0, o; l < r.length; l++)
      if (o = r[l]) {
        let a = i[l], { open: h, close: c } = o;
        s.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
function Dg(n, e, t = e.selection.ranges) {
  let i = [], r = -1;
  for (let { from: s, to: l } of t) {
    let o = i.length, a = 1e9, h = Nl(e, s).line;
    if (h) {
      for (let c = s; c <= l; ) {
        let u = e.doc.lineAt(c);
        if (u.from > r && (s == l || l > u.from)) {
          r = u.from;
          let f = /^\s*/.exec(u.text)[0].length, d = f == u.length, O = u.text.slice(f, f + h.length) == h ? f : -1;
          f < u.text.length && f < a && (a = f), i.push({ line: u, comment: O, token: h, indent: f, empty: d, single: !1 });
        }
        c = u.to + 1;
      }
      if (a < 1e9)
        for (let c = o; c < i.length; c++)
          i[c].indent < i[c].line.text.length && (i[c].indent = a);
      i.length == o + 1 && (i[o].single = !0);
    }
  }
  if (n != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: o, token: a, indent: h, empty: c, single: u } of i)
      (u || !c) && s.push({ from: o.from + h, insert: a + " " });
    let l = e.changes(s);
    return { changes: l, selection: e.selection.map(l, 1) };
  } else if (n != 1 && i.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: l, comment: o, token: a } of i)
      if (o >= 0) {
        let h = l.from + o, c = h + a.length;
        l.text[c - l.from] == " " && c++, s.push({ from: h, to: c });
      }
    return { changes: s };
  }
  return null;
}
const dl = /* @__PURE__ */ yt.define(), _g = /* @__PURE__ */ yt.define(), Lg = /* @__PURE__ */ T.define(), qu = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r)
    });
  }
}), zu = /* @__PURE__ */ se.define({
  create() {
    return rt.empty;
  },
  update(n, e) {
    let t = e.state.facet(qu), i = e.annotation(dl);
    if (i) {
      let a = we.fromTransaction(e, i.selection), h = i.side, c = h == 0 ? n.undone : n.done;
      return a ? c = pr(c, c.length, t.minDepth, a) : c = Eu(c, e.startState.selection), new rt(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
    }
    let r = e.annotation(_g);
    if ((r == "full" || r == "before") && (n = n.isolate()), e.annotation(ie.addToHistory) === !1)
      return e.changes.empty ? n : n.addMapping(e.changes.desc);
    let s = we.fromTransaction(e), l = e.annotation(ie.time), o = e.annotation(ie.userEvent);
    return s ? n = n.addChanges(s, l, o, t, e) : e.selection && (n = n.addSelection(e.startState.selection, l, o, t.newGroupDelay)), (r == "full" || r == "after") && (n = n.isolate()), n;
  },
  toJSON(n) {
    return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
  },
  fromJSON(n) {
    return new rt(n.done.map(we.fromJSON), n.undone.map(we.fromJSON));
  }
});
function Bg(n = {}) {
  return [
    zu,
    qu.of(n),
    $.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Vu : e.inputType == "historyRedo" ? Ol : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function Dr(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let r = t.field(zu, !1);
    if (!r)
      return !1;
    let s = r.pop(n, t, e);
    return s ? (i(s), !0) : !1;
  };
}
const Vu = /* @__PURE__ */ Dr(0, !1), Ol = /* @__PURE__ */ Dr(1, !1), jg = /* @__PURE__ */ Dr(0, !0), Wg = /* @__PURE__ */ Dr(1, !0);
class we {
  constructor(e, t, i, r, s) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = r, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new we(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
    };
  }
  static fromJSON(e) {
    return new we(e.changes && re.fromJSON(e.changes), [], e.mapped && st.fromJSON(e.mapped), e.startSelection && Q.fromJSON(e.startSelection), e.selectionsAfter.map(Q.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = Ye;
    for (let r of e.startState.facet(Lg)) {
      let s = r(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty ? null : new we(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Ye);
  }
  static selection(e) {
    return new we(void 0, Ye, void 0, void 0, e);
  }
}
function pr(n, e, t, i) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, s = n.slice(r, e);
  return s.push(i), s;
}
function Gg(n, e) {
  let t = [], i = !1;
  return n.iterChangedRanges((r, s) => t.push(r, s)), e.iterChangedRanges((r, s, l, o) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      o >= h && l <= c && (i = !0);
    }
  }), i;
}
function Ig(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Yu(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const Ye = [], Ng = 200;
function Eu(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Ng));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), pr(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [we.selection([e])];
}
function Ug(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function cs(n, e) {
  if (!n.length)
    return n;
  let t = n.length, i = Ye;
  for (; t; ) {
    let r = Fg(n[t - 1], e, i);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = n.slice(0, t);
      return s[t - 1] = r, s;
    } else
      e = r.mapped, t--, i = r.selectionsAfter;
  }
  return i.length ? [we.selection(i)] : Ye;
}
function Fg(n, e, t) {
  let i = Yu(n.selectionsAfter.length ? n.selectionsAfter.map((o) => o.map(e)) : Ye, t);
  if (!n.changes)
    return we.selection(i);
  let r = n.changes.map(e), s = e.mapDesc(n.changes, !0), l = n.mapped ? n.mapped.composeDesc(s) : s;
  return new we(r, Z.mapEffects(n.effects, e), l, n.startSelection.map(s), i);
}
const Hg = /^(input\.type|delete)($|\.)/;
class rt {
  constructor(e, t, i = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new rt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, r, s) {
    let l = this.done, o = l[l.length - 1];
    return o && o.changes && !o.changes.empty && e.changes && (!i || Hg.test(i)) && (!o.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(s, Gg(o.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? l = pr(l, l.length - 1, r.minDepth, new we(e.changes.compose(o.changes), Yu(Z.mapEffects(e.effects, o.changes), o.effects), o.mapped, o.startSelection, Ye)) : l = pr(l, l.length, r.minDepth, e), new rt(l, Ye, t, i);
  }
  addSelection(e, t, i, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ye;
    return s.length > 0 && t - this.prevTime < r && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Ig(s[s.length - 1], e) ? this : new rt(Eu(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new rt(cs(this.done, e), cs(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0)
      return null;
    let s = r[r.length - 1], l = s.selectionsAfter[0] || t.selection;
    if (i && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: dl.of({ side: e, rest: Ug(r), selection: l }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let o = r.length == 1 ? Ye : r.slice(0, r.length - 1);
      return s.mapped && (o = cs(o, s.mapped)), t.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: dl.of({ side: e, rest: o, selection: l }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
rt.empty = /* @__PURE__ */ new rt(Ye, Ye);
const Kg = [
  { key: "Mod-z", run: Vu, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ol, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ol, preventDefault: !0 },
  { key: "Mod-u", run: jg, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Wg, preventDefault: !0 }
];
function Qi(n, e) {
  return Q.create(n.ranges.map(e), n.mainIndex);
}
function at(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Ge({ state: n, dispatch: e }, t) {
  let i = Qi(n.selection, t);
  return i.eq(n.selection, !0) ? !1 : (e(at(n, i)), !0);
}
function _r(n, e) {
  return Q.cursor(e ? n.to : n.from);
}
function Du(n, e) {
  return Ge(n, (t) => t.empty ? n.moveByChar(t, e) : _r(t, e));
}
function pe(n) {
  return n.textDirectionAt(n.state.selection.main.head) == F.LTR;
}
const _u = (n) => Du(n, !pe(n)), Lu = (n) => Du(n, pe(n));
function Bu(n, e) {
  return Ge(n, (t) => t.empty ? n.moveByGroup(t, e) : _r(t, e));
}
const Jg = (n) => Bu(n, !pe(n)), e0 = (n) => Bu(n, pe(n));
function t0(n, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Lr(n, e, t) {
  let i = J(n).resolveInner(e.head), r = t ? q.closedBy : q.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    t0(n, h, r) ? i = h : a = t ? h.to : h.from;
  }
  let s = i.type.prop(r), l, o;
  return s && (l = t ? nt(n, i.from, 1) : nt(n, i.to, -1)) && l.matched ? o = t ? l.end.to : l.end.from : o = t ? i.to : i.from, Q.cursor(o, t ? -1 : 1);
}
const i0 = (n) => Ge(n, (e) => Lr(n.state, e, !pe(n))), n0 = (n) => Ge(n, (e) => Lr(n.state, e, pe(n)));
function ju(n, e) {
  return Ge(n, (t) => {
    if (!t.empty)
      return _r(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const Wu = (n) => ju(n, !1), Gu = (n) => ju(n, !0);
function Iu(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, r;
  if (e) {
    for (let s of n.state.facet($.scrollMargins)) {
      let l = s(n);
      l != null && l.top && (t = Math.max(l == null ? void 0 : l.top, t)), l != null && l.bottom && (i = Math.max(l == null ? void 0 : l.bottom, i));
    }
    r = n.scrollDOM.clientHeight - t - i;
  } else
    r = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, r - 5)
  };
}
function Nu(n, e) {
  let t = Iu(n), { state: i } = n, r = Qi(i.selection, (l) => l.empty ? n.moveVertically(l, e, t.height) : _r(l, e));
  if (r.eq(i.selection))
    return !1;
  let s;
  if (t.selfScroll) {
    let l = n.coordsAtPos(i.selection.main.head), o = n.scrollDOM.getBoundingClientRect(), a = o.top + t.marginTop, h = o.bottom - t.marginBottom;
    l && l.top > a && l.bottom < h && (s = $.scrollIntoView(r.main.head, { y: "start", yMargin: l.top - a }));
  }
  return n.dispatch(at(i, r), { effects: s }), !0;
}
const Va = (n) => Nu(n, !1), pl = (n) => Nu(n, !0);
function Zt(n, e, t) {
  let i = n.lineBlockAt(e.head), r = n.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, !1)), !t && r.head == i.from && i.length) {
    let s = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (r = Q.cursor(i.from + s));
  }
  return r;
}
const r0 = (n) => Ge(n, (e) => Zt(n, e, !0)), s0 = (n) => Ge(n, (e) => Zt(n, e, !1)), l0 = (n) => Ge(n, (e) => Zt(n, e, !pe(n))), o0 = (n) => Ge(n, (e) => Zt(n, e, pe(n))), a0 = (n) => Ge(n, (e) => Q.cursor(n.lineBlockAt(e.head).from, 1)), h0 = (n) => Ge(n, (e) => Q.cursor(n.lineBlockAt(e.head).to, -1));
function c0(n, e, t) {
  let i = !1, r = Qi(n.selection, (s) => {
    let l = nt(n, s.head, -1) || nt(n, s.head, 1) || s.head > 0 && nt(n, s.head - 1, 1) || s.head < n.doc.length && nt(n, s.head + 1, -1);
    if (!l || !l.end)
      return s;
    i = !0;
    let o = l.start.from == s.head ? l.end.to : l.end.from;
    return Q.cursor(o);
  });
  return i ? (e(at(n, r)), !0) : !1;
}
const u0 = ({ state: n, dispatch: e }) => c0(n, e);
function Le(n, e) {
  let t = Qi(n.state.selection, (i) => {
    let r = e(i);
    return Q.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(at(n.state, t)), !0);
}
function Uu(n, e) {
  return Le(n, (t) => n.moveByChar(t, e));
}
const Fu = (n) => Uu(n, !pe(n)), Hu = (n) => Uu(n, pe(n));
function Ku(n, e) {
  return Le(n, (t) => n.moveByGroup(t, e));
}
const f0 = (n) => Ku(n, !pe(n)), d0 = (n) => Ku(n, pe(n)), O0 = (n) => Le(n, (e) => Lr(n.state, e, !pe(n))), p0 = (n) => Le(n, (e) => Lr(n.state, e, pe(n)));
function Ju(n, e) {
  return Le(n, (t) => n.moveVertically(t, e));
}
const ef = (n) => Ju(n, !1), tf = (n) => Ju(n, !0);
function nf(n, e) {
  return Le(n, (t) => n.moveVertically(t, e, Iu(n).height));
}
const Ya = (n) => nf(n, !1), Ea = (n) => nf(n, !0), m0 = (n) => Le(n, (e) => Zt(n, e, !0)), g0 = (n) => Le(n, (e) => Zt(n, e, !1)), y0 = (n) => Le(n, (e) => Zt(n, e, !pe(n))), Q0 = (n) => Le(n, (e) => Zt(n, e, pe(n))), b0 = (n) => Le(n, (e) => Q.cursor(n.lineBlockAt(e.head).from)), x0 = (n) => Le(n, (e) => Q.cursor(n.lineBlockAt(e.head).to)), Da = ({ state: n, dispatch: e }) => (e(at(n, { anchor: 0 })), !0), _a = ({ state: n, dispatch: e }) => (e(at(n, { anchor: n.doc.length })), !0), La = ({ state: n, dispatch: e }) => (e(at(n, { anchor: n.selection.main.anchor, head: 0 })), !0), Ba = ({ state: n, dispatch: e }) => (e(at(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0), S0 = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), !0), k0 = ({ state: n, dispatch: e }) => {
  let t = Br(n).map(({ from: i, to: r }) => Q.range(i, Math.min(r + 1, n.doc.length)));
  return e(n.update({ selection: Q.create(t), userEvent: "select" })), !0;
}, v0 = ({ state: n, dispatch: e }) => {
  let t = Qi(n.selection, (i) => {
    let r = J(n), s = r.resolveStack(i.from, 1);
    if (i.empty) {
      let l = r.resolveStack(i.from, -1);
      l.node.from >= s.node.from && l.node.to <= s.node.to && (s = l);
    }
    for (let l = s; l; l = l.next) {
      let { node: o } = l;
      if ((o.from < i.from && o.to >= i.to || o.to > i.to && o.from <= i.from) && l.next)
        return Q.range(o.to, o.from);
    }
    return i;
  });
  return t.eq(n.selection) ? !1 : (e(at(n, t)), !0);
}, w0 = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = Q.create([t.main]) : t.main.empty || (i = Q.create([Q.cursor(t.main.head)])), i ? (e(at(n, i)), !0) : !1;
};
function dn(n, e) {
  if (n.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = n, r = i.changeByRange((s) => {
    let { from: l, to: o } = s;
    if (l == o) {
      let a = e(s);
      a < l ? (t = "delete.backward", a = qn(n, a, !1)) : a > l && (t = "delete.forward", a = qn(n, a, !0)), l = Math.min(l, a), o = Math.max(o, a);
    } else
      l = qn(n, l, !1), o = qn(n, o, !0);
    return l == o ? { range: s } : { changes: { from: l, to: o }, range: Q.cursor(l, l < s.head ? -1 : 1) };
  });
  return r.changes.empty ? !1 : (n.dispatch(i.update(r, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? $.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function qn(n, e, t) {
  if (n instanceof $)
    for (let i of n.state.facet($.atomicRanges).map((r) => r(n)))
      i.between(e, e, (r, s) => {
        r < e && s > e && (e = t ? s : r);
      });
  return e;
}
const rf = (n, e, t) => dn(n, (i) => {
  let r = i.from, { state: s } = n, l = s.doc.lineAt(r), o, a;
  if (t && !e && r > l.from && r < l.from + 200 && !/[^ \t]/.test(o = l.text.slice(0, r - l.from))) {
    if (o[o.length - 1] == "	")
      return r - 1;
    let h = yi(o, s.tabSize), c = h % fr(s) || fr(s);
    for (let u = 0; u < c && o[o.length - 1 - u] == " "; u++)
      r--;
    a = r;
  } else
    a = ue(l.text, r - l.from, e, e) + l.from, a == r && l.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(l.text.slice(a - l.from, r - l.from)) && (a = ue(l.text, a - l.from, !1, !1) + l.from);
  return a;
}), ml = (n) => rf(n, !1, !0), sf = (n) => rf(n, !0, !1), lf = (n, e) => dn(n, (t) => {
  let i = t.head, { state: r } = n, s = r.doc.lineAt(i), l = r.charCategorizer(i);
  for (let o = null; ; ) {
    if (i == (e ? s.to : s.from)) {
      i == t.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = ue(s.text, i - s.from, e) + s.from, h = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from), c = l(h);
    if (o != null && c != o)
      break;
    (h != " " || i != t.head) && (o = c), i = a;
  }
  return i;
}), of = (n) => lf(n, !1), P0 = (n) => lf(n, !0), $0 = (n) => dn(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), C0 = (n) => dn(n, (e) => {
  let t = n.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), T0 = (n) => dn(n, (e) => {
  let t = n.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), A0 = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: Y.of(["", ""]) },
    range: Q.cursor(i.from)
  }));
  return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, R0 = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let r = i.from, s = n.doc.lineAt(r), l = r == s.from ? r - 1 : ue(s.text, r - s.from, !1) + s.from, o = r == s.to ? r + 1 : ue(s.text, r - s.from, !0) + s.from;
    return {
      changes: { from: l, to: o, insert: n.doc.slice(r, o).append(n.doc.slice(l, r)) },
      range: Q.cursor(o)
    };
  });
  return t.changes.empty ? !1 : (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Br(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.from), s = n.doc.lineAt(i.to);
    if (!i.empty && i.to == s.from && (s = n.doc.lineAt(i.to - 1)), t >= r.number) {
      let l = e[e.length - 1];
      l.to = s.to, l.ranges.push(i);
    } else
      e.push({ from: r.from, to: s.to, ranges: [i] });
    t = s.number + 1;
  }
  return e;
}
function af(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [], r = [];
  for (let s of Br(n)) {
    if (t ? s.to == n.doc.length : s.from == 0)
      continue;
    let l = n.doc.lineAt(t ? s.to + 1 : s.from - 1), o = l.length + 1;
    if (t) {
      i.push({ from: s.to, to: l.to }, { from: s.from, insert: l.text + n.lineBreak });
      for (let a of s.ranges)
        r.push(Q.range(Math.min(n.doc.length, a.anchor + o), Math.min(n.doc.length, a.head + o)));
    } else {
      i.push({ from: l.from, to: s.from }, { from: s.to, insert: n.lineBreak + l.text });
      for (let a of s.ranges)
        r.push(Q.range(a.anchor - o, a.head - o));
    }
  }
  return i.length ? (e(n.update({
    changes: i,
    scrollIntoView: !0,
    selection: Q.create(r, n.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const X0 = ({ state: n, dispatch: e }) => af(n, e, !1), Z0 = ({ state: n, dispatch: e }) => af(n, e, !0);
function hf(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [];
  for (let r of Br(n))
    t ? i.push({ from: r.from, insert: n.doc.slice(r.from, r.to) + n.lineBreak }) : i.push({ from: r.to, insert: n.lineBreak + n.doc.slice(r.from, r.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const M0 = ({ state: n, dispatch: e }) => hf(n, e, !1), q0 = ({ state: n, dispatch: e }) => hf(n, e, !0), z0 = (n) => {
  if (n.state.readOnly)
    return !1;
  let { state: e } = n, t = e.changes(Br(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), i = Qi(e.selection, (r) => {
    let s;
    if (n.lineWrapping) {
      let l = n.lineBlockAt(r.head), o = n.coordsAtPos(r.head, r.assoc || 1);
      o && (s = l.bottom + n.documentTop - o.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(r, !0, s);
  }).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function V0(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = J(n).resolveInner(e), i = t.childBefore(e), r = t.childAfter(e), s;
  return i && r && i.to <= e && r.from >= e && (s = i.type.prop(q.closedBy)) && s.indexOf(r.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from && !/\S/.test(n.sliceDoc(i.to, r.from)) ? { from: i.to, to: r.from } : null;
}
const ja = /* @__PURE__ */ cf(!1), Y0 = /* @__PURE__ */ cf(!0);
function cf(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((r) => {
      let { from: s, to: l } = r, o = e.doc.lineAt(s), a = !n && s == l && V0(e, s);
      n && (s = l = (l <= o.to ? o : e.doc.lineAt(l)).to);
      let h = new zr(e, { simulateBreak: s, simulateDoubleBreak: !!a }), c = Wl(h, s);
      for (c == null && (c = yi(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); l < o.to && /\s/.test(o.text[l - o.from]); )
        l++;
      a ? { from: s, to: l } = a : s > o.from && s < o.from + 100 && !/\S/.test(o.text.slice(0, s)) && (s = o.from);
      let u = ["", Ki(e, c)];
      return a && u.push(Ki(e, h.lineIndent(o.from, -1))), {
        changes: { from: s, to: l, insert: Y.of(u) },
        range: Q.cursor(s + 1 + u[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Ul(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let r = [];
    for (let l = i.from; l <= i.to; ) {
      let o = n.doc.lineAt(l);
      o.number > t && (i.empty || i.to > o.from) && (e(o, r, i), t = o.number), l = o.to + 1;
    }
    let s = n.changes(r);
    return {
      changes: r,
      range: Q.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1))
    };
  });
}
const E0 = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new zr(n, { overrideIndentation: (s) => {
    let l = t[s];
    return l == null ? -1 : l;
  } }), r = Ul(n, (s, l, o) => {
    let a = Wl(i, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let h = /^\s*/.exec(s.text)[0], c = Ki(n, a);
    (h != c || o.from < s.from + h.length) && (t[s.from] = a, l.push({ from: s.from, to: s.from + h.length, insert: c }));
  });
  return r.changes.empty || e(n.update(r, { userEvent: "indent" })), !0;
}, uf = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(Ul(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(qr) });
}), { userEvent: "input.indent" })), !0), ff = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(Ul(n, (t, i) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r)
    return;
  let s = yi(r, n.tabSize), l = 0, o = Ki(n, Math.max(0, s - fr(n)));
  for (; l < r.length && l < o.length && r.charCodeAt(l) == o.charCodeAt(l); )
    l++;
  i.push({ from: t.from + l, to: t.from + r.length, insert: o.slice(l) });
}), { userEvent: "delete.dedent" })), !0), D0 = (n) => (n.setTabFocusMode(), !0), _0 = [
  { key: "Ctrl-b", run: _u, shift: Fu, preventDefault: !0 },
  { key: "Ctrl-f", run: Lu, shift: Hu },
  { key: "Ctrl-p", run: Wu, shift: ef },
  { key: "Ctrl-n", run: Gu, shift: tf },
  { key: "Ctrl-a", run: a0, shift: b0 },
  { key: "Ctrl-e", run: h0, shift: x0 },
  { key: "Ctrl-d", run: sf },
  { key: "Ctrl-h", run: ml },
  { key: "Ctrl-k", run: $0 },
  { key: "Ctrl-Alt-h", run: of },
  { key: "Ctrl-o", run: A0 },
  { key: "Ctrl-t", run: R0 },
  { key: "Ctrl-v", run: pl }
], L0 = /* @__PURE__ */ [
  { key: "ArrowLeft", run: _u, shift: Fu, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Jg, shift: f0, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: l0, shift: y0, preventDefault: !0 },
  { key: "ArrowRight", run: Lu, shift: Hu, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: e0, shift: d0, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: o0, shift: Q0, preventDefault: !0 },
  { key: "ArrowUp", run: Wu, shift: ef, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Da, shift: La },
  { mac: "Ctrl-ArrowUp", run: Va, shift: Ya },
  { key: "ArrowDown", run: Gu, shift: tf, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: _a, shift: Ba },
  { mac: "Ctrl-ArrowDown", run: pl, shift: Ea },
  { key: "PageUp", run: Va, shift: Ya },
  { key: "PageDown", run: pl, shift: Ea },
  { key: "Home", run: s0, shift: g0, preventDefault: !0 },
  { key: "Mod-Home", run: Da, shift: La },
  { key: "End", run: r0, shift: m0, preventDefault: !0 },
  { key: "Mod-End", run: _a, shift: Ba },
  { key: "Enter", run: ja, shift: ja },
  { key: "Mod-a", run: S0 },
  { key: "Backspace", run: ml, shift: ml },
  { key: "Delete", run: sf },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: of },
  { key: "Mod-Delete", mac: "Alt-Delete", run: P0 },
  { mac: "Mod-Backspace", run: C0 },
  { mac: "Mod-Delete", run: T0 }
].concat(/* @__PURE__ */ _0.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), B0 = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: i0, shift: O0 },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: n0, shift: p0 },
  { key: "Alt-ArrowUp", run: X0 },
  { key: "Shift-Alt-ArrowUp", run: M0 },
  { key: "Alt-ArrowDown", run: Z0 },
  { key: "Shift-Alt-ArrowDown", run: q0 },
  { key: "Escape", run: w0 },
  { key: "Mod-Enter", run: Y0 },
  { key: "Alt-l", mac: "Ctrl-l", run: k0 },
  { key: "Mod-i", run: v0, preventDefault: !0 },
  { key: "Mod-[", run: ff },
  { key: "Mod-]", run: uf },
  { key: "Mod-Alt-\\", run: E0 },
  { key: "Shift-Mod-k", run: z0 },
  { key: "Shift-Mod-\\", run: u0 },
  { key: "Mod-/", run: Mg },
  { key: "Alt-A", run: zg },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: D0 }
].concat(L0), j0 = { key: "Tab", run: uf, shift: ff }, Wa = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class fi {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, i = 0, r = e.length, s, l) {
    this.test = l, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, r), this.bufferStart = i, this.normalize = s ? (o) => s(Wa(o)) : Wa, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return xe(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = kl(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += et(e);
      let r = this.normalize(t);
      if (r.length)
        for (let s = 0, l = i; ; s++) {
          let o = r.charCodeAt(s), a = this.match(o, l, this.bufferPos + this.bufferStart);
          if (s == r.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          l == i && s < t.length && t.charCodeAt(s) == o && l++;
        }
    }
  }
  match(e, t, i) {
    let r = null;
    for (let s = 0; s < this.matches.length; s += 2) {
      let l = this.matches[s], o = !1;
      this.query.charCodeAt(l) == e && (l == this.query.length - 1 ? r = { from: this.matches[s + 1], to: i } : (this.matches[s]++, o = !0)), o || (this.matches.splice(s, 2), s -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? r = { from: t, to: i } : this.matches.push(1, t)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null), r;
  }
}
typeof Symbol != "undefined" && (fi.prototype[Symbol.iterator] = function() {
  return this;
});
const df = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, Fl = "gm" + (/x/.unicode == null ? "" : "u");
class Of {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, i, r = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = !1, this.value = df, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new pf(e, t, i, r, s);
    this.re = new RegExp(t, Fl + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let l = e.lineAt(r);
    this.curLineStart = l.from, this.matchPos = mr(e, r), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, r = i + t[0].length;
        if (this.matchPos = mr(this.text, r + (i == r ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < r || i > this.value.to) && (!this.test || this.test(i, r, t)))
          return this.value = { from: i, to: r, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const us = /* @__PURE__ */ new WeakMap();
class ni {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let r = us.get(e);
    if (!r || r.from >= i || r.to <= t) {
      let o = new ni(t, e.sliceString(t, i));
      return us.set(e, o), o;
    }
    if (r.from == t && r.to == i)
      return r;
    let { text: s, from: l } = r;
    return l > t && (s = e.sliceString(t, l) + s, l = t), r.to < i && (s += e.sliceString(r.to, i)), us.set(e, new ni(l, s)), new ni(t, s.slice(t - l, i - l));
  }
}
class pf {
  constructor(e, t, i, r, s) {
    this.text = e, this.to = s, this.done = !1, this.value = df, this.matchPos = mr(e, r), this.re = new RegExp(t, Fl + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = ni.get(e, r, this.chunkEnd(
      r + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, r = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, r, t)))
          return this.value = { from: i, to: r, match: t }, this.matchPos = mr(this.text, r + (i == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = ni.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol != "undefined" && (Of.prototype[Symbol.iterator] = pf.prototype[Symbol.iterator] = function() {
  return this;
});
function W0(n) {
  try {
    return new RegExp(n, Fl), !0;
  } catch {
    return !1;
  }
}
function mr(n, e) {
  if (e >= n.length)
    return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; )
    e++;
  return e;
}
function gl(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number), t = j("input", { class: "cm-textfield", name: "line", value: e }), i = j("form", {
    class: "cm-gotoLine",
    onkeydown: (s) => {
      s.keyCode == 27 ? (s.preventDefault(), n.dispatch({ effects: Di.of(!1) }), n.focus()) : s.keyCode == 13 && (s.preventDefault(), r());
    },
    onsubmit: (s) => {
      s.preventDefault(), r();
    }
  }, j("label", n.state.phrase("Go to line"), ": ", t), " ", j("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")), j("button", {
    name: "close",
    onclick: () => {
      n.dispatch({ effects: Di.of(!1) }), n.focus();
    },
    "aria-label": n.state.phrase("close"),
    type: "button"
  }, ["×"]));
  function r() {
    let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!s)
      return;
    let { state: l } = n, o = l.doc.lineAt(l.selection.main.head), [, a, h, c, u] = s, f = c ? +c.slice(1) : 0, d = h ? +h : o.number;
    if (h && u) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + o.number / l.doc.lines), d = Math.round(l.doc.lines * g);
    } else h && a && (d = d * (a == "-" ? -1 : 1) + o.number);
    let O = l.doc.line(Math.max(1, Math.min(l.doc.lines, d))), m = Q.cursor(O.from + Math.max(0, Math.min(f, O.length)));
    n.dispatch({
      effects: [Di.of(!1), $.scrollIntoView(m.from, { y: "center" })],
      selection: m
    }), n.focus();
  }
  return { dom: i };
}
const Di = /* @__PURE__ */ Z.define(), Ga = /* @__PURE__ */ se.define({
  create() {
    return !0;
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Di) && (n = t.value);
    return n;
  },
  provide: (n) => Ui.from(n, (e) => e ? gl : null)
}), G0 = (n) => {
  let e = Ni(n, gl);
  if (!e) {
    let t = [Di.of(!0)];
    n.state.field(Ga, !1) == null && t.push(Z.appendConfig.of([Ga, I0])), n.dispatch({ effects: t }), e = Ni(n, gl);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, I0 = /* @__PURE__ */ $.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    position: "relative",
    "& label": { fontSize: "80%" },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: "0"
    }
  }
}), N0 = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, U0 = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, N0, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function F0(n) {
  return [ty, ey];
}
const H0 = /* @__PURE__ */ R.mark({ class: "cm-selectionMatch" }), K0 = /* @__PURE__ */ R.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Ia(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != H.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != H.Word);
}
function J0(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == H.Word && n(e.sliceDoc(i - 1, i)) == H.Word;
}
const ey = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(U0), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1)
      return R.none;
    let r = i.main, s, l = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor)
        return R.none;
      let a = t.wordAt(r.head);
      if (!a)
        return R.none;
      l = t.charCategorizer(r.head), s = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200)
        return R.none;
      if (e.wholeWords) {
        if (s = t.sliceDoc(r.from, r.to), l = t.charCategorizer(r.head), !(Ia(l, t, r.from, r.to) && J0(l, t, r.from, r.to)))
          return R.none;
      } else if (s = t.sliceDoc(r.from, r.to), !s)
        return R.none;
    }
    let o = [];
    for (let a of n.visibleRanges) {
      let h = new fi(t.doc, s, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: u } = h.value;
        if ((!l || Ia(l, t, c, u)) && (r.empty && c <= r.from && u >= r.to ? o.push(K0.range(c, u)) : (c >= r.to || u <= r.from) && o.push(H0.range(c, u)), o.length > e.maxMatches))
          return R.none;
      }
    }
    return R.set(o);
  }
}, {
  decorations: (n) => n.decorations
}), ty = /* @__PURE__ */ $.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), iy = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = Q.create(t.ranges.map((r) => n.wordAt(r.head) || Q.cursor(r.head)), t.mainIndex);
  return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
};
function ny(n, e) {
  let { main: t, ranges: i } = n.selection, r = n.wordAt(t.head), s = r && r.from == t.from && r.to == t.to;
  for (let l = !1, o = new fi(n.doc, e, i[i.length - 1].to); ; )
    if (o.next(), o.done) {
      if (l)
        return null;
      o = new fi(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), l = !0;
    } else {
      if (l && i.some((a) => a.from == o.value.from))
        continue;
      if (s) {
        let a = n.wordAt(o.value.from);
        if (!a || a.from != o.value.from || a.to != o.value.to)
          continue;
      }
      return o.value;
    }
}
const ry = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((s) => s.from === s.to))
    return iy({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((s) => n.sliceDoc(s.from, s.to) != i))
    return !1;
  let r = ny(n, i);
  return r ? (e(n.update({
    selection: n.selection.addRange(Q.range(r.from, r.to), !1),
    effects: $.scrollIntoView(r.to)
  })), !0) : !1;
}, bi = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new my(e),
      scrollToMatch: (e) => $.scrollIntoView(e)
    });
  }
});
class mf {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || W0(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new ay(this) : new ly(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, i) {
    let r = e.doc ? e : E.create({ doc: e });
    return i == null && (i = r.doc.length), this.regexp ? Ut(this, r, t, i) : Nt(this, r, t, i);
  }
}
class gf {
  constructor(e) {
    this.spec = e;
  }
}
function Nt(n, e, t, i) {
  return new fi(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (r) => r.toLowerCase(), n.wholeWord ? sy(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function sy(n, e) {
  return (t, i, r, s) => ((s > t || s + r.length < i) && (s = Math.max(0, t - 2), r = n.sliceString(s, Math.min(n.length, i + 2))), (e(gr(r, t - s)) != H.Word || e(yr(r, t - s)) != H.Word) && (e(yr(r, i - s)) != H.Word || e(gr(r, i - s)) != H.Word));
}
class ly extends gf {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let r = Nt(this.spec, e, i, e.doc.length).nextOverlapping();
    if (r.done) {
      let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
      r = Nt(this.spec, e, 0, s).nextOverlapping();
    }
    return r.done || r.value.from == t && r.value.to == i ? null : r.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, i) {
    for (let r = i; ; ) {
      let s = Math.max(t, r - 1e4 - this.spec.unquoted.length), l = Nt(this.spec, e, s, r), o = null;
      for (; !l.nextOverlapping().done; )
        o = l.value;
      if (o)
        return o;
      if (s == t)
        return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let r = this.prevMatchInRange(e, 0, t);
    return r || (r = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)), r && (r.from != t || r.to != i) ? r : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = Nt(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = Nt(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; )
      r(s.value.from, s.value.to);
  }
}
function Ut(n, e, t, i) {
  return new Of(e.doc, n.search, {
    ignoreCase: !n.caseSensitive,
    test: n.wholeWord ? oy(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, i);
}
function gr(n, e) {
  return n.slice(ue(n, e, !1), e);
}
function yr(n, e) {
  return n.slice(e, ue(n, e));
}
function oy(n) {
  return (e, t, i) => !i[0].length || (n(gr(i.input, i.index)) != H.Word || n(yr(i.input, i.index)) != H.Word) && (n(yr(i.input, i.index + i[0].length)) != H.Word || n(gr(i.input, i.index + i[0].length)) != H.Word);
}
class ay extends gf {
  nextMatch(e, t, i) {
    let r = Ut(this.spec, e, i, e.doc.length).next();
    return r.done && (r = Ut(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = 1; ; r++) {
      let s = Math.max(
        t,
        i - r * 1e4
        /* FindPrev.ChunkSize */
      ), l = Ut(this.spec, e, s, i), o = null;
      for (; !l.next().done; )
        o = l.value;
      if (o && (s == t || o.from > s + 10))
        return o;
      if (s == t)
        return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == "&")
        return e.match[0];
      if (i == "$")
        return "$";
      for (let r = i.length; r > 0; r--) {
        let s = +i.slice(0, r);
        if (s > 0 && s < e.match.length)
          return e.match[s] + i.slice(r);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = Ut(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = Ut(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, e.doc.length));
    for (; !s.next().done; )
      r(s.value.from, s.value.to);
  }
}
const Ji = /* @__PURE__ */ Z.define(), Hl = /* @__PURE__ */ Z.define(), Pt = /* @__PURE__ */ se.define({
  create(n) {
    return new fs(yl(n).create(), null);
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Ji) ? n = new fs(t.value.create(), n.panel) : t.is(Hl) && (n = new fs(n.query, t.value ? Kl : null));
    return n;
  },
  provide: (n) => Ui.from(n, (e) => e.panel)
});
class fs {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const hy = /* @__PURE__ */ R.mark({ class: "cm-searchMatch" }), cy = /* @__PURE__ */ R.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), uy = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(Pt));
  }
  update(n) {
    let e = n.state.field(Pt);
    (e != n.startState.field(Pt) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid)
      return R.none;
    let { view: t } = this, i = new pt();
    for (let r = 0, s = t.visibleRanges, l = s.length; r < l; r++) {
      let { from: o, to: a } = s[r];
      for (; r < l - 1 && a > s[r + 1].from - 500; )
        a = s[++r].to;
      n.highlight(t.state, o, a, (h, c) => {
        let u = t.state.selection.ranges.some((f) => f.from == h && f.to == c);
        i.add(h, c, u ? cy : hy);
      });
    }
    return i.finish();
  }
}, {
  decorations: (n) => n.decorations
});
function On(n) {
  return (e) => {
    let t = e.state.field(Pt, !1);
    return t && t.query.spec.valid ? n(e, t) : bf(e);
  };
}
const Qr = /* @__PURE__ */ On((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i)
    return !1;
  let r = Q.single(i.from, i.to), s = n.state.facet(bi);
  return n.dispatch({
    selection: r,
    effects: [Jl(n, i), s.scrollToMatch(r.main, n)],
    userEvent: "select.search"
  }), Qf(n), !0;
}), br = /* @__PURE__ */ On((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, r = e.prevMatch(t, i, i);
  if (!r)
    return !1;
  let s = Q.single(r.from, r.to), l = n.state.facet(bi);
  return n.dispatch({
    selection: s,
    effects: [Jl(n, r), l.scrollToMatch(s.main, n)],
    userEvent: "select.search"
  }), Qf(n), !0;
}), fy = /* @__PURE__ */ On((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? !1 : (n.dispatch({
    selection: Q.create(t.map((i) => Q.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), dy = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: i, to: r } = t.main, s = [], l = 0;
  for (let o = new fi(n.doc, n.sliceDoc(i, r)); !o.next().done; ) {
    if (s.length > 1e3)
      return !1;
    o.value.from == i && (l = s.length), s.push(Q.range(o.value.from, o.value.to));
  }
  return e(n.update({
    selection: Q.create(s, l),
    userEvent: "select.search.matches"
  })), !0;
}, Na = /* @__PURE__ */ On((n, { query: e }) => {
  let { state: t } = n, { from: i, to: r } = t.selection.main;
  if (t.readOnly)
    return !1;
  let s = e.nextMatch(t, i, i);
  if (!s)
    return !1;
  let l = s, o = [], a, h, c = [];
  l.from == i && l.to == r && (h = t.toText(e.getReplacement(l)), o.push({ from: l.from, to: l.to, insert: h }), l = e.nextMatch(t, l.from, l.to), c.push($.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + ".")));
  let u = n.state.changes(o);
  return l && (a = Q.single(l.from, l.to).map(u), c.push(Jl(n, l)), c.push(t.facet(bi).scrollToMatch(a.main, n))), n.dispatch({
    changes: u,
    selection: a,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), Oy = /* @__PURE__ */ On((n, { query: e }) => {
  if (n.state.readOnly)
    return !1;
  let t = e.matchAll(n.state, 1e9).map((r) => {
    let { from: s, to: l } = r;
    return { from: s, to: l, insert: e.getReplacement(r) };
  });
  if (!t.length)
    return !1;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({
    changes: t,
    effects: $.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function Kl(n) {
  return n.state.facet(bi).createPanel(n);
}
function yl(n, e) {
  var t, i, r, s, l;
  let o = n.selection.main, a = o.empty || o.to > o.from + 100 ? "" : n.sliceDoc(o.from, o.to);
  if (e && !a)
    return e;
  let h = n.facet(bi);
  return new mf({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : h.literal,
    regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : h.regexp,
    wholeWord: (l = e == null ? void 0 : e.wholeWord) !== null && l !== void 0 ? l : h.wholeWord
  });
}
function yf(n) {
  let e = Ni(n, Kl);
  return e && e.dom.querySelector("[main-field]");
}
function Qf(n) {
  let e = yf(n);
  e && e == n.root.activeElement && e.select();
}
const bf = (n) => {
  let e = n.state.field(Pt, !1);
  if (e && e.panel) {
    let t = yf(n);
    if (t && t != n.root.activeElement) {
      let i = yl(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: Ji.of(i) }), t.focus(), t.select();
    }
  } else
    n.dispatch({ effects: [
      Hl.of(!0),
      e ? Ji.of(yl(n.state, e.query.spec)) : Z.appendConfig.of(yy)
    ] });
  return !0;
}, xf = (n) => {
  let e = n.state.field(Pt, !1);
  if (!e || !e.panel)
    return !1;
  let t = Ni(n, Kl);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: Hl.of(!1) }), !0;
}, py = [
  { key: "Mod-f", run: bf, scope: "editor search-panel" },
  { key: "F3", run: Qr, shift: br, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Qr, shift: br, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: xf, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: dy },
  { key: "Mod-Alt-g", run: G0 },
  { key: "Mod-d", run: ry, preventDefault: !0 }
];
class my {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(Pt).query.spec;
    this.commit = this.commit.bind(this), this.searchField = j("input", {
      value: t.search,
      placeholder: $e(e, "Find"),
      "aria-label": $e(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = j("input", {
      value: t.replace,
      placeholder: $e(e, "Replace"),
      "aria-label": $e(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = j("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = j("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = j("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function i(r, s, l) {
      return j("button", { class: "cm-button", name: r, onclick: s, type: "button" }, l);
    }
    this.dom = j("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [
      this.searchField,
      i("next", () => Qr(e), [$e(e, "next")]),
      i("prev", () => br(e), [$e(e, "previous")]),
      i("select", () => fy(e), [$e(e, "all")]),
      j("label", null, [this.caseField, $e(e, "match case")]),
      j("label", null, [this.reField, $e(e, "regexp")]),
      j("label", null, [this.wordField, $e(e, "by word")]),
      ...e.state.readOnly ? [] : [
        j("br"),
        this.replaceField,
        i("replace", () => Na(e), [$e(e, "replace")]),
        i("replaceAll", () => Oy(e), [$e(e, "replace all")])
      ],
      j("button", {
        name: "close",
        onclick: () => xf(e),
        "aria-label": $e(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new mf({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: Ji.of(e) }));
  }
  keydown(e) {
    kp(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? br : Qr)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Na(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Ji) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(bi).top;
  }
}
function $e(n, e) {
  return n.state.phrase(e);
}
const zn = 30, Vn = /[\s\.,:;?!]/;
function Jl(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), r = n.state.doc.lineAt(t).to, s = Math.max(i.from, e - zn), l = Math.min(r, t + zn), o = n.state.sliceDoc(s, l);
  if (s != i.from) {
    for (let a = 0; a < zn; a++)
      if (!Vn.test(o[a + 1]) && Vn.test(o[a])) {
        o = o.slice(a);
        break;
      }
  }
  if (l != r) {
    for (let a = o.length - 1; a > o.length - zn; a--)
      if (!Vn.test(o[a - 1]) && Vn.test(o[a])) {
        o = o.slice(0, a);
        break;
      }
  }
  return $.announce.of(`${n.state.phrase("current match")}. ${o} ${n.state.phrase("on line")} ${i.number}.`);
}
const gy = /* @__PURE__ */ $.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), yy = [
  Pt,
  /* @__PURE__ */ Xt.low(uy),
  gy
];
class Sf {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, i, r) {
    this.state = e, this.pos = t, this.explicit = i, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = J(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), r = t.text.slice(i - t.from, this.pos - t.from), s = r.search(vf(e, !1));
    return s < 0 ? null : { from: i + s, to: this.pos, text: r.slice(s) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function Ua(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Qy(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of n) {
    e[r[0]] = !0;
    for (let s = 1; s < r.length; s++)
      t[r[s]] = !0;
  }
  let i = Ua(e) + Ua(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function kf(n) {
  let e = n.map((r) => typeof r == "string" ? { label: r } : r), [t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : Qy(e);
  return (r) => {
    let s = r.matchBefore(i);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
function by(n, e) {
  return (t) => {
    for (let i = J(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (n.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
class Fa {
  constructor(e, t, i, r) {
    this.completion = e, this.source = t, this.match = i, this.score = r;
  }
}
function Dt(n) {
  return n.selection.main.from;
}
function vf(n, e) {
  var t;
  let { source: i } = n, r = e && i[0] != "^", s = i[i.length - 1] != "$";
  return !r && !s ? n : new RegExp(`${r ? "^" : ""}(?:${i})${s ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const eo = /* @__PURE__ */ yt.define();
function xy(n, e, t, i) {
  let { main: r } = n.selection, s = t - r.from, l = i - r.from;
  return Object.assign(Object.assign({}, n.changeByRange((o) => {
    if (o != r && t != i && n.sliceDoc(o.from + s, o.from + l) != n.sliceDoc(t, i))
      return { range: o };
    let a = n.toText(e);
    return {
      changes: { from: o.from + s, to: i == r.from ? o.to : o.from + l, insert: a },
      range: Q.cursor(o.from + s + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const Ha = /* @__PURE__ */ new WeakMap();
function Sy(n) {
  if (!Array.isArray(n))
    return n;
  let e = Ha.get(n);
  return e || Ha.set(n, e = kf(n)), e;
}
const xr = /* @__PURE__ */ Z.define(), en = /* @__PURE__ */ Z.define();
class ky {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = xe(e, t), r = et(i);
      this.chars.push(i);
      let s = e.slice(t, t + r), l = s.toUpperCase();
      this.folded.push(xe(l == s ? s.toLowerCase() : l, 0)), t += r;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: i, any: r, precise: s, byWord: l } = this;
    if (t.length == 1) {
      let b = xe(e, 0), S = et(b), v = S == e.length ? 0 : -100;
      if (b != t[0]) if (b == i[0])
        v += -200;
      else
        return null;
      return this.ret(v, [0, S]);
    }
    let o = e.indexOf(this.pattern);
    if (o == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (o < 0) {
      for (let b = 0, S = Math.min(e.length, 200); b < S && h < a; ) {
        let v = xe(e, b);
        (v == t[h] || v == i[h]) && (r[h++] = b), b += et(v);
      }
      if (h < a)
        return null;
    }
    let c = 0, u = 0, f = !1, d = 0, O = -1, m = -1, g = /[a-z]/.test(e), y = !0;
    for (let b = 0, S = Math.min(e.length, 200), v = 0; b < S && u < a; ) {
      let x = xe(e, b);
      o < 0 && (c < a && x == t[c] && (s[c++] = b), d < a && (x == t[d] || x == i[d] ? (d == 0 && (O = b), m = b + 1, d++) : d = 0));
      let k, P = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (k = kl(x)) != k.toLowerCase() ? 1 : k != k.toUpperCase() ? 2 : 0;
      (!b || P == 1 && g || v == 0 && P != 0) && (t[u] == x || i[u] == x && (f = !0) ? l[u++] = b : l.length && (y = !1)), v = P, b += et(x);
    }
    return u == a && l[0] == 0 && y ? this.result(-100 + (f ? -200 : 0), l, e) : d == a && O == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : o > -1 ? this.ret(-700 - e.length, [o, o + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [O, m]) : u == a ? this.result(-100 + (f ? -200 : 0) + -700 + (y ? 0 : -1100), l, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, i) {
    let r = [], s = 0;
    for (let l of t) {
      let o = l + (this.astral ? et(xe(i, l)) : 1);
      s && r[s - 1] == l ? r[s - 1] = o : (r[s++] = l, r[s++] = o);
    }
    return this.ret(e - i.length, r);
  }
}
class vy {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const le = /* @__PURE__ */ T.define({
  combine(n) {
    return ot(n, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: wy,
      filterStrict: !1,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (i) => Ka(e(i), t(i)),
      optionClass: (e, t) => (i) => Ka(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function Ka(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function wy(n, e, t, i, r, s) {
  let l = n.textDirection == F.RTL, o = l, a = !1, h = "top", c, u, f = e.left - r.left, d = r.right - e.right, O = i.right - i.left, m = i.bottom - i.top;
  if (o && f < Math.min(O, d) ? o = !1 : !o && d < Math.min(O, f) && (o = !0), O <= (o ? f : d))
    c = Math.max(r.top, Math.min(t.top, r.bottom - m)) - e.top, u = Math.min(400, o ? f : d);
  else {
    a = !0, u = Math.min(
      400,
      (l ? e.right : r.right - e.left) - 30
      /* Info.Margin */
    );
    let b = r.bottom - e.bottom;
    b >= m || b > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / s.offsetHeight, y = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${u / y}px`,
    class: "cm-completionInfo-" + (a ? l ? "left-narrow" : "right-narrow" : o ? "left" : "right")
  };
}
function Py(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({
    render(t) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), e.push({
    render(t, i, r, s) {
      let l = document.createElement("span");
      l.className = "cm-completionLabel";
      let o = t.displayLabel || t.label, a = 0;
      for (let h = 0; h < s.length; ) {
        let c = s[h++], u = s[h++];
        c > a && l.appendChild(document.createTextNode(o.slice(a, c)));
        let f = l.appendChild(document.createElement("span"));
        f.appendChild(document.createTextNode(o.slice(c, u))), f.className = "cm-completionMatchedText", a = u;
      }
      return a < o.length && l.appendChild(document.createTextNode(o.slice(a))), l;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = t.detail, i;
    },
    position: 80
  }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function ds(n, e, t) {
  if (n <= t)
    return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class $y {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let r = e.state.field(t), { options: s, selected: l } = r.open, o = e.state.facet(le);
    this.optionContent = Py(o), this.optionClass = o.optionClass, this.tooltipClass = o.tooltipClass, this.range = ds(s.length, l, o.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, u; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (u = /-(\d+)$/.exec(c.id)) && +u[1] < h.length) {
          this.applyCompletion(e, h[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(le).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: en.of(null) });
    }), this.showOptions(s, r.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), r = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != r) {
      let { options: s, selected: l, disabled: o } = i.open;
      (!r.open || r.open.options != s) && (this.range = ds(s.length, l, e.state.facet(le).maxRenderedOptions), this.showOptions(s, i.id)), this.updateSel(), o != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!o);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = ds(t.options.length, t.selected, this.view.state.facet(le).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: r } = i;
      if (!r)
        return;
      let s = typeof r == "string" ? document.createTextNode(r) : r(i);
      if (!s)
        return;
      "then" in s ? s.then((l) => {
        l && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(l, i);
      }).catch((l) => ve(this.view.state, l, "completion info")) : this.addInfoPane(s, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: r, destroy: s } = e;
      i.appendChild(r), this.infoDestroy = s || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, r = this.range.from; i; i = i.nextSibling, r++)
      i.nodeName != "LI" || !i.id ? r-- : r == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && Ty(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let l = this.dom.ownerDocument.documentElement;
      s = { left: 0, top: 0, right: l.clientWidth, bottom: l.clientHeight };
    }
    return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(le).positionInfo(this.view, t, r, i, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const r = document.createElement("ul");
    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (l) => {
      l.target == r && l.preventDefault();
    });
    let s = null;
    for (let l = i.from; l < i.to; l++) {
      let { completion: o, match: a } = e[l], { section: h } = o;
      if (h) {
        let f = typeof h == "string" ? h : h.name;
        if (f != s && (l > i.from || i.from == 0))
          if (s = f, typeof h != "string" && h.header)
            r.appendChild(h.header(h));
          else {
            let d = r.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const c = r.appendChild(document.createElement("li"));
      c.id = t + "-" + l, c.setAttribute("role", "option");
      let u = this.optionClass(o);
      u && (c.className = u);
      for (let f of this.optionContent) {
        let d = f(o, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && r.classList.add("cm-completionListIncompleteTop"), i.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Cy(n, e) {
  return (t) => new $y(t, n, e);
}
function Ty(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), r = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / r : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / r);
}
function Ja(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function Ay(n, e) {
  let t = [], i = null, r = (h) => {
    t.push(h);
    let { section: c } = h.completion;
    if (c) {
      i || (i = []);
      let u = typeof c == "string" ? c : c.name;
      i.some((f) => f.name == u) || i.push(typeof c == "string" ? { name: u } : c);
    }
  }, s = e.facet(le);
  for (let h of n)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === !1)
        for (let u of h.result.options)
          r(new Fa(u, h.source, c ? c(u) : [], 1e9 - t.length));
      else {
        let u = e.sliceDoc(h.from, h.to), f, d = s.filterStrict ? new vy(u) : new ky(u);
        for (let O of h.result.options)
          if (f = d.match(O.label)) {
            let m = O.displayLabel ? c ? c(O, f.matched) : [] : f.matched;
            r(new Fa(O, h.source, m, f.score + (O.boost || 0)));
          }
      }
    }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), c = 0, u = (f, d) => {
      var O, m;
      return ((O = f.rank) !== null && O !== void 0 ? O : 1e9) - ((m = d.rank) !== null && m !== void 0 ? m : 1e9) || (f.name < d.name ? -1 : 1);
    };
    for (let f of i.sort(u))
      c -= 1e5, h[f.name] = c;
    for (let f of t) {
      let { section: d } = f.completion;
      d && (f.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let l = [], o = null, a = s.compareCompletions;
  for (let h of t.sort((c, u) => u.score - c.score || a(c.completion, u.completion))) {
    let c = h.completion;
    !o || o.label != c.label || o.detail != c.detail || o.type != null && c.type != null && o.type != c.type || o.apply != c.apply || o.boost != c.boost ? l.push(h) : Ja(h.completion) > Ja(o) && (l[l.length - 1] = h), o = h.completion;
  }
  return l;
}
class Jt {
  constructor(e, t, i, r, s, l) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = r, this.selected = s, this.disabled = l;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Jt(this.options, eh(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, r, s, l) {
    if (r && !l && e.some((h) => h.isPending))
      return r.setDisabled();
    let o = Ay(e, t);
    if (!o.length)
      return r && e.some((h) => h.isPending) ? r.setDisabled() : null;
    let a = t.facet(le).selectOnOpen ? 0 : -1;
    if (r && r.selected != a && r.selected != -1) {
      let h = r.options[r.selected].completion;
      for (let c = 0; c < o.length; c++)
        if (o[c].completion == h) {
          a = c;
          break;
        }
    }
    return new Jt(o, eh(i, a), {
      pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
      create: zy,
      above: s.aboveCursor
    }, r ? r.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Jt(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Jt(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Sr {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Sr(My, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(le), s = (i.override || t.languageDataAt("autocomplete", Dt(t)).map(Sy)).map((a) => (this.active.find((c) => c.source == a) || new Ee(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, i));
    s.length == this.active.length && s.every((a, h) => a == this.active[h]) && (s = this.active);
    let l = this.open, o = e.effects.some((a) => a.is(to));
    l && e.docChanged && (l = l.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Ry(s, this.active) || o ? l = Jt.build(s, t, this.id, l, i, o) : l && l.disabled && !s.some((a) => a.isPending) && (l = null), !l && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new Ee(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(Pf) && (l = l && l.setSelected(a.value, this.id));
    return s == this.active && l == this.open ? this : new Sr(s, this.id, l);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Xy : Zy;
  }
}
function Ry(n, e) {
  if (n == e)
    return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); )
      t++;
    for (; i < e.length && !e[i].hasResult(); )
      i++;
    let r = t == n.length, s = i == e.length;
    if (r || s)
      return r == s;
    if (n[t++].result != e[i++].result)
      return !1;
  }
}
const Xy = {
  "aria-autocomplete": "list"
}, Zy = {};
function eh(n, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": n
  };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const My = [];
function wf(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(eo);
    if (i && e.activateOnCompletion(i))
      return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class Ee {
  constructor(e, t, i = !1) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = wf(e, t), r = this;
    (i & 8 || i & 16 && this.touches(e)) && (r = new Ee(
      r.source,
      0
      /* State.Inactive */
    )), i & 4 && r.state == 0 && (r = new Ee(
      this.source,
      1
      /* State.Pending */
    )), r = r.updateFor(e, i);
    for (let s of e.effects)
      if (s.is(xr))
        r = new Ee(r.source, 1, s.value);
      else if (s.is(en))
        r = new Ee(
          r.source,
          0
          /* State.Inactive */
        );
      else if (s.is(to))
        for (let l of s.value)
          l.source == r.source && (r = l);
    return r;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(Dt(e.state));
  }
}
class ri extends Ee {
  constructor(e, t, i, r, s, l) {
    super(e, 3, t), this.limit = i, this.result = r, this.from = s, this.to = l;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3))
      return this.map(e.changes);
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let s = e.changes.mapPos(this.from), l = e.changes.mapPos(this.to, 1), o = Dt(e.state);
    if (o > l || !r || t & 2 && (Dt(e.startState) == this.from || o < this.limit))
      return new Ee(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return qy(r.validFor, e.state, s, l) ? new ri(this.source, this.explicit, a, r, s, l) : r.update && (r = r.update(r, s, l, new Sf(e.state, o, !1))) ? new ri(this.source, this.explicit, a, r, r.from, (i = r.to) !== null && i !== void 0 ? i : Dt(e.state)) : new Ee(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new ri(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Ee(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function qy(n, e, t, i) {
  if (!n)
    return !1;
  let r = e.sliceDoc(t, i);
  return typeof n == "function" ? n(r, t, i, e) : vf(n, !0).test(r);
}
const to = /* @__PURE__ */ Z.define({
  map(n, e) {
    return n.map((t) => t.map(e));
  }
}), Pf = /* @__PURE__ */ Z.define(), ke = /* @__PURE__ */ se.define({
  create() {
    return Sr.start();
  },
  update(n, e) {
    return n.update(e);
  },
  provide: (n) => [
    Yl.from(n, (e) => e.tooltip),
    $.contentAttributes.from(n, (e) => e.attrs)
  ]
});
function io(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(ke).active.find((r) => r.source == e.source);
  return i instanceof ri ? (typeof t == "string" ? n.dispatch(Object.assign(Object.assign({}, xy(n.state, t, i.from, i.to)), { annotations: eo.of(e.completion) })) : t(n, e.completion, i.from, i.to), !0) : !1;
}
const zy = /* @__PURE__ */ Cy(ke, io);
function Yn(n, e = "option") {
  return (t) => {
    let i = t.state.field(ke, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(le).interactionDelay)
      return !1;
    let r = 1, s;
    e == "page" && (s = ru(t, i.open.tooltip)) && (r = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: l } = i.open.options, o = i.open.selected > -1 ? i.open.selected + r * (n ? 1 : -1) : n ? 0 : l - 1;
    return o < 0 ? o = e == "page" ? 0 : l - 1 : o >= l && (o = e == "page" ? l - 1 : 0), t.dispatch({ effects: Pf.of(o) }), !0;
  };
}
const Vy = (n) => {
  let e = n.state.field(ke, !1);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(le).interactionDelay ? !1 : io(n, e.open.options[e.open.selected]);
}, th = (n) => n.state.field(ke, !1) ? (n.dispatch({ effects: xr.of(!0) }), !0) : !1, Yy = (n) => {
  let e = n.state.field(ke, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (n.dispatch({ effects: en.of(null) }), !0);
};
class Ey {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Dy = 50, _y = 1e3, Ly = /* @__PURE__ */ ne.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of n.state.field(ke).active)
      e.isPending && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(ke), t = n.state.facet(le);
    if (!n.selectionSet && !n.docChanged && n.startState.field(ke) == e)
      return;
    let i = n.transactions.some((s) => {
      let l = wf(s, t);
      return l & 8 || (s.selection || s.docChanged) && !(l & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let l = this.running[s];
      if (i || l.context.abortOnDocChange && n.docChanged || l.updates.length + n.transactions.length > Dy && Date.now() - l.time > _y) {
        for (let o of l.context.abortListeners)
          try {
            o();
          } catch (a) {
            ve(this.view.state, a);
          }
        l.context.abortListeners = null, this.running.splice(s--, 1);
      } else
        l.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((s) => s.effects.some((l) => l.is(xr))) && (this.pendingStart = !0);
    let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((l) => l.active.source == s.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0)
      for (let s of n.transactions)
        s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: n } = this.view, e = n.field(ke);
    for (let t of e.active)
      t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(le).updateSyncTime));
  }
  startQuery(n) {
    let { state: e } = this.view, t = Dt(e), i = new Sf(e, t, n.explicit, this.view), r = new Ey(n, i);
    this.running.push(r), Promise.resolve(n.source(i)).then((s) => {
      r.context.aborted || (r.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: en.of(null) }), ve(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(le).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(le), i = this.view.state.field(ke);
    for (let r = 0; r < this.running.length; r++) {
      let s = this.running[r];
      if (s.done === void 0)
        continue;
      if (this.running.splice(r--, 1), s.done) {
        let o = Dt(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(o, s.done.from + (s.active.explicit ? 0 : 1)), h = new ri(s.active.source, s.active.explicit, a, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : o);
        for (let c of s.updates)
          h = h.update(c, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let l = i.active.find((o) => o.source == s.active.source);
      if (l && l.isPending)
        if (s.done == null) {
          let o = new Ee(
            s.active.source,
            0
            /* State.Inactive */
          );
          for (let a of s.updates)
            o = o.update(a, t);
          o.isPending || e.push(o);
        } else
          this.startQuery(l);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: to.of(e) });
  }
}, {
  eventHandlers: {
    blur(n) {
      let e = this.view.state.field(ke, !1);
      if (e && e.tooltip && this.view.state.facet(le).closeOnBlur) {
        let t = e.open && ru(this.view, e.open.tooltip);
        (!t || !t.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: en.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: xr.of(!1) }), 20), this.composing = 0;
    }
  }
}), By = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), jy = /* @__PURE__ */ Xt.highest(/* @__PURE__ */ $.domEventHandlers({
  keydown(n, e) {
    let t = e.state.field(ke, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(By && n.altKey) || n.metaKey)
      return !1;
    let i = t.open.options[t.open.selected], r = t.active.find((l) => l.source == i.source), s = i.completion.commitCharacters || r.result.commitCharacters;
    return s && s.indexOf(n.key) > -1 && io(e, i), !1;
  }
})), $f = /* @__PURE__ */ $.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class Wy {
  constructor(e, t, i, r) {
    this.field = e, this.line = t, this.from = i, this.to = r;
  }
}
class no {
  constructor(e, t, i) {
    this.field = e, this.from = t, this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, ce.TrackDel), i = e.mapPos(this.to, 1, ce.TrackDel);
    return t == null || i == null ? null : new no(this.field, t, i);
  }
}
class ro {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [], r = [t], s = e.doc.lineAt(t), l = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = l, c = /^\t*/.exec(a)[0].length;
        for (let u = 0; u < c; u++)
          h += e.facet(qr);
        r.push(t + h.length - c), a = h + a.slice(c);
      }
      i.push(a), t += a.length + 1;
    }
    let o = this.fieldPositions.map((a) => new no(a.field, r[a.line] + a.from, r[a.line] + a.to));
    return { text: i, ranges: o };
  }
  static parse(e) {
    let t = [], i = [], r = [], s;
    for (let l of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(l); ) {
        let o = s[1] ? +s[1] : null, a = s[2] || s[3] || "", h = -1, c = a.replace(/\\[{}]/g, (u) => u[1]);
        for (let u = 0; u < t.length; u++)
          (o != null ? t[u].seq == o : c && t[u].name == c) && (h = u);
        if (h < 0) {
          let u = 0;
          for (; u < t.length && (o == null || t[u].seq != null && t[u].seq < o); )
            u++;
          t.splice(u, 0, { seq: o, name: c }), h = u;
          for (let f of r)
            f.field >= h && f.field++;
        }
        r.push(new Wy(h, i.length, s.index, s.index + c.length)), l = l.slice(0, s.index) + a + l.slice(s.index + s[0].length);
      }
      l = l.replace(/\\([{}])/g, (o, a, h) => {
        for (let c of r)
          c.line == i.length && c.from > h && (c.from--, c.to--);
        return a;
      }), i.push(l);
    }
    return new ro(i, r);
  }
}
let Gy = /* @__PURE__ */ R.widget({ widget: /* @__PURE__ */ new class extends Qt {
  toDOM() {
    let n = document.createElement("span");
    return n.className = "cm-snippetFieldPosition", n;
  }
  ignoreEvent() {
    return !1;
  }
}() }), Iy = /* @__PURE__ */ R.mark({ class: "cm-snippetField" });
class xi {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = R.set(e.map((i) => (i.from == i.to ? Gy : Iy).range(i.from, i.to)));
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let r = i.map(e);
      if (!r)
        return null;
      t.push(r);
    }
    return new xi(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
}
const pn = /* @__PURE__ */ Z.define({
  map(n, e) {
    return n && n.map(e);
  }
}), Ny = /* @__PURE__ */ Z.define(), tn = /* @__PURE__ */ se.define({
  create() {
    return null;
  },
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(pn))
        return t.value;
      if (t.is(Ny) && n)
        return new xi(n.ranges, t.value);
    }
    return n && e.docChanged && (n = n.map(e.changes)), n && e.selection && !n.selectionInsideField(e.selection) && (n = null), n;
  },
  provide: (n) => $.decorations.from(n, (e) => e ? e.deco : R.none)
});
function so(n, e) {
  return Q.create(n.filter((t) => t.field == e).map((t) => Q.range(t.from, t.to)));
}
function Uy(n) {
  let e = ro.parse(n);
  return (t, i, r, s) => {
    let { text: l, ranges: o } = e.instantiate(t.state, r), { main: a } = t.state.selection, h = {
      changes: { from: r, to: s == a.from ? a.to : s, insert: Y.of(l) },
      scrollIntoView: !0,
      annotations: i ? [eo.of(i), ie.userEvent.of("input.complete")] : void 0
    };
    if (o.length && (h.selection = so(o, 0)), o.some((c) => c.field > 0)) {
      let c = new xi(o, 0), u = h.effects = [pn.of(c)];
      t.state.field(tn, !1) === void 0 && u.push(Z.appendConfig.of([tn, eQ, tQ, $f]));
    }
    t.dispatch(t.state.update(h));
  };
}
function Cf(n) {
  return ({ state: e, dispatch: t }) => {
    let i = e.field(tn, !1);
    if (!i || n < 0 && i.active == 0)
      return !1;
    let r = i.active + n, s = n > 0 && !i.ranges.some((l) => l.field == r + n);
    return t(e.update({
      selection: so(i.ranges, r),
      effects: pn.of(s ? null : new xi(i.ranges, r)),
      scrollIntoView: !0
    })), !0;
  };
}
const Fy = ({ state: n, dispatch: e }) => n.field(tn, !1) ? (e(n.update({ effects: pn.of(null) })), !0) : !1, Hy = /* @__PURE__ */ Cf(1), Ky = /* @__PURE__ */ Cf(-1), Jy = [
  { key: "Tab", run: Hy, shift: Ky },
  { key: "Escape", run: Fy }
], ih = /* @__PURE__ */ T.define({
  combine(n) {
    return n.length ? n[0] : Jy;
  }
}), eQ = /* @__PURE__ */ Xt.highest(/* @__PURE__ */ hn.compute([ih], (n) => n.facet(ih)));
function be(n, e) {
  return Object.assign(Object.assign({}, e), { apply: Uy(n) });
}
const tQ = /* @__PURE__ */ $.domEventHandlers({
  mousedown(n, e) {
    let t = e.state.field(tn, !1), i;
    if (!t || (i = e.posAtCoords({ x: n.clientX, y: n.clientY })) == null)
      return !1;
    let r = t.ranges.find((s) => s.from <= i && s.to >= i);
    return !r || r.field == t.active ? !1 : (e.dispatch({
      selection: so(t.ranges, r.field),
      effects: pn.of(t.ranges.some((s) => s.field > r.field) ? new xi(t.ranges, r.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), nn = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Et = /* @__PURE__ */ Z.define({
  map(n, e) {
    let t = e.mapPos(n, -1, ce.TrackAfter);
    return t == null ? void 0 : t;
  }
}), lo = /* @__PURE__ */ new class extends _t {
}();
lo.startSide = 1;
lo.endSide = -1;
const Tf = /* @__PURE__ */ se.define({
  create() {
    return D.empty;
  },
  update(n, e) {
    if (n = n.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      n = n.update({ filter: (i) => i >= t.from && i <= t.to });
    }
    for (let t of e.effects)
      t.is(Et) && (n = n.update({ add: [lo.range(t.value, t.value + 1)] }));
    return n;
  }
});
function iQ() {
  return [rQ, Tf];
}
const Os = "()[]{}<>«»»«［］｛｝";
function Af(n) {
  for (let e = 0; e < Os.length; e += 2)
    if (Os.charCodeAt(e) == n)
      return Os.charAt(e + 1);
  return kl(n < 128 ? n : n + 1);
}
function Rf(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || nn;
}
const nQ = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), rQ = /* @__PURE__ */ $.inputHandler.of((n, e, t, i) => {
  if ((nQ ? n.composing : n.compositionStarted) || n.state.readOnly)
    return !1;
  let r = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && et(xe(i, 0)) == 1 || e != r.from || t != r.to)
    return !1;
  let s = oQ(n.state, i);
  return s ? (n.dispatch(s), !0) : !1;
}), sQ = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let i = Rf(n, n.selection.main.head).brackets || nn.brackets, r = null, s = n.changeByRange((l) => {
    if (l.empty) {
      let o = aQ(n.doc, l.head);
      for (let a of i)
        if (a == o && jr(n.doc, l.head) == Af(xe(a, 0)))
          return {
            changes: { from: l.head - a.length, to: l.head + a.length },
            range: Q.cursor(l.head - a.length)
          };
    }
    return { range: r = l };
  });
  return r || e(n.update(s, { scrollIntoView: !0, userEvent: "delete.backward" })), !r;
}, lQ = [
  { key: "Backspace", run: sQ }
];
function oQ(n, e) {
  let t = Rf(n, n.selection.main.head), i = t.brackets || nn.brackets;
  for (let r of i) {
    let s = Af(xe(r, 0));
    if (e == r)
      return s == r ? uQ(n, r, i.indexOf(r + r + r) > -1, t) : hQ(n, r, s, t.before || nn.before);
    if (e == s && Xf(n, n.selection.main.from))
      return cQ(n, r, s);
  }
  return null;
}
function Xf(n, e) {
  let t = !1;
  return n.field(Tf).between(0, n.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function jr(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, et(xe(t, 0)));
}
function aQ(n, e) {
  let t = n.sliceString(e - 2, e);
  return et(xe(t, 0)) == t.length ? t : t.slice(1);
}
function hQ(n, e, t, i) {
  let r = null, s = n.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: t, from: l.to }],
        effects: Et.of(l.to + e.length),
        range: Q.range(l.anchor + e.length, l.head + e.length)
      };
    let o = jr(n.doc, l.head);
    return !o || /\s/.test(o) || i.indexOf(o) > -1 ? {
      changes: { insert: e + t, from: l.head },
      effects: Et.of(l.head + e.length),
      range: Q.cursor(l.head + e.length)
    } : { range: r = l };
  });
  return r ? null : n.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function cQ(n, e, t) {
  let i = null, r = n.changeByRange((s) => s.empty && jr(n.doc, s.head) == t ? {
    changes: { from: s.head, to: s.head + t.length, insert: t },
    range: Q.cursor(s.head + t.length)
  } : i = { range: s });
  return i ? null : n.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function uQ(n, e, t, i) {
  let r = i.stringPrefixes || nn.stringPrefixes, s = null, l = n.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: e, from: o.to }],
        effects: Et.of(o.to + e.length),
        range: Q.range(o.anchor + e.length, o.head + e.length)
      };
    let a = o.head, h = jr(n.doc, a), c;
    if (h == e) {
      if (nh(n, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Et.of(a + e.length),
          range: Q.cursor(a + e.length)
        };
      if (Xf(n, a)) {
        let f = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: Q.cursor(a + f.length)
        };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (c = rh(n, a - 2 * e.length, r)) > -1 && nh(n, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Et.of(a + e.length),
          range: Q.cursor(a + e.length)
        };
      if (n.charCategorizer(a)(h) != H.Word && rh(n, a, r) > -1 && !fQ(n, a, e, r))
        return {
          changes: { insert: e + e, from: a },
          effects: Et.of(a + e.length),
          range: Q.cursor(a + e.length)
        };
    }
    return { range: s = o };
  });
  return s ? null : n.update(l, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function nh(n, e) {
  let t = J(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function fQ(n, e, t, i) {
  let r = J(n).resolveInner(e, -1), s = i.reduce((l, o) => Math.max(l, o.length), 0);
  for (let l = 0; l < 5; l++) {
    let o = n.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)), a = o.indexOf(t);
    if (!a || a > -1 && i.indexOf(o.slice(0, a)) > -1) {
      let c = r.firstChild;
      for (; c && c.from == r.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = r.to == e && r.parent;
    if (!h)
      break;
    r = h;
  }
  return !1;
}
function rh(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != H.Word)
    return e;
  for (let r of t) {
    let s = e - r.length;
    if (n.sliceDoc(s, e) == r && i(n.sliceDoc(s - 1, s)) != H.Word)
      return s;
  }
  return -1;
}
function dQ(n = {}) {
  return [
    jy,
    ke,
    le.of(n),
    Ly,
    OQ,
    $f
  ];
}
const Zf = [
  { key: "Ctrl-Space", run: th },
  { mac: "Alt-`", run: th },
  { key: "Escape", run: Yy },
  { key: "ArrowDown", run: /* @__PURE__ */ Yn(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Yn(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Yn(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Yn(!1, "page") },
  { key: "Enter", run: Vy }
], OQ = /* @__PURE__ */ Xt.highest(/* @__PURE__ */ hn.computeN([le], (n) => n.facet(le).defaultKeymap ? [Zf] : []));
class sh {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Vt {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let r = i.facet(rn).markerFilter;
    r && (e = r(e, i));
    let s = e.slice().sort((c, u) => c.from - u.from || c.to - u.to), l = new pt(), o = [], a = 0;
    for (let c = 0; ; ) {
      let u = c == s.length ? null : s[c];
      if (!u && !o.length)
        break;
      let f, d;
      for (o.length ? (f = a, d = o.reduce((m, g) => Math.min(m, g.to), u && u.from > f ? u.from : 1e8)) : (f = u.from, d = u.to, o.push(u), c++); c < s.length; ) {
        let m = s[c];
        if (m.from == f && (m.to > m.from || m.to == f))
          o.push(m), c++, d = Math.min(m.to, d);
        else {
          d = Math.min(m.from, d);
          break;
        }
      }
      let O = $Q(o);
      if (o.some((m) => m.from == m.to || m.from == m.to - 1 && i.doc.lineAt(m.from).to == m.from))
        l.add(f, f, R.widget({
          widget: new kQ(O),
          diagnostics: o.slice()
        }));
      else {
        let m = o.reduce((g, y) => y.markClass ? g + " " + y.markClass : g, "");
        l.add(f, d, R.mark({
          class: "cm-lintRange cm-lintRange-" + O + m,
          diagnostics: o.slice(),
          inclusiveEnd: o.some((g) => g.to > d)
        }));
      }
      a = d;
      for (let m = 0; m < o.length; m++)
        o[m].to <= a && o.splice(m--, 1);
    }
    let h = l.finish();
    return new Vt(h, t, di(h));
  }
}
function di(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (r, s, { spec: l }) => {
    if (!(e && l.diagnostics.indexOf(e) < 0))
      if (!i)
        i = new sh(r, s, e || l.diagnostics[0]);
      else {
        if (l.diagnostics.indexOf(i.diagnostic) < 0)
          return !1;
        i = new sh(i.from, s, i.diagnostic);
      }
  }), i;
}
function pQ(n, e) {
  let t = e.pos, i = e.end || t, r = n.state.facet(rn).hideOn(n, t, i);
  if (r != null)
    return r;
  let s = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((l) => l.is(oo)) || n.changes.touchesRange(s.from, Math.max(s.to, i)));
}
function Mf(n, e) {
  return n.field(Re, !1) ? e : e.concat(Z.appendConfig.of(CQ));
}
function mQ(n, e) {
  return {
    effects: Mf(n, [oo.of(e)])
  };
}
const oo = /* @__PURE__ */ Z.define(), ao = /* @__PURE__ */ Z.define(), qf = /* @__PURE__ */ Z.define(), Re = /* @__PURE__ */ se.define({
  create() {
    return new Vt(R.none, null, null);
  },
  update(n, e) {
    if (e.docChanged && n.diagnostics.size) {
      let t = n.diagnostics.map(e.changes), i = null, r = n.panel;
      if (n.selected) {
        let s = e.changes.mapPos(n.selected.from, 1);
        i = di(t, n.selected.diagnostic, s) || di(t, null, s);
      }
      !t.size && r && e.state.facet(rn).autoPanel && (r = null), n = new Vt(t, r, i);
    }
    for (let t of e.effects)
      if (t.is(oo)) {
        let i = e.state.facet(rn).autoPanel ? t.value.length ? sn.open : null : n.panel;
        n = Vt.init(t.value, i, e.state);
      } else t.is(ao) ? n = new Vt(n.diagnostics, t.value ? sn.open : null, n.selected) : t.is(qf) && (n = new Vt(n.diagnostics, n.panel, t.value));
    return n;
  },
  provide: (n) => [
    Ui.from(n, (e) => e.panel),
    $.decorations.from(n, (e) => e.diagnostics)
  ]
}), gQ = /* @__PURE__ */ R.mark({ class: "cm-lintRange cm-lintRange-active" });
function yQ(n, e, t) {
  let { diagnostics: i } = n.state.field(Re), r, s = -1, l = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)))
      return r = c.diagnostics, s = a, l = h, !1;
  });
  let o = n.state.facet(rn).tooltipFilter;
  return r && o && (r = o(r, n.state)), r ? {
    pos: s,
    end: l,
    above: n.state.doc.lineAt(s).to < l,
    create() {
      return { dom: QQ(n, r) };
    }
  } : null;
}
function QQ(n, e) {
  return j("ul", { class: "cm-tooltip-lint" }, e.map((t) => Vf(n, t, !1)));
}
const bQ = (n) => {
  let e = n.state.field(Re, !1);
  (!e || !e.panel) && n.dispatch({ effects: Mf(n.state, [ao.of(!0)]) });
  let t = Ni(n, sn.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, lh = (n) => {
  let e = n.state.field(Re, !1);
  return !e || !e.panel ? !1 : (n.dispatch({ effects: ao.of(!1) }), !0);
}, xQ = (n) => {
  let e = n.state.field(Re, !1);
  if (!e)
    return !1;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? !1 : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, SQ = [
  { key: "Mod-Shift-m", run: bQ, preventDefault: !0 },
  { key: "F8", run: xQ }
], rn = /* @__PURE__ */ T.define({
  combine(n) {
    return Object.assign({ sources: n.map((e) => e.source).filter((e) => e != null) }, ot(n.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null,
      hideOn: () => null
    }, {
      needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t
    }));
  }
});
function zf(n) {
  let e = [];
  if (n)
    e: for (let { name: t } of n) {
      for (let i = 0; i < t.length; i++) {
        let r = t[i];
        if (/[a-zA-Z]/.test(r) && !e.some((s) => s.toLowerCase() == r.toLowerCase())) {
          e.push(r);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function Vf(n, e, t) {
  var i;
  let r = t ? zf(e.actions) : [];
  return j("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, j("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((s, l) => {
    let o = !1, a = (f) => {
      if (f.preventDefault(), o)
        return;
      o = !0;
      let d = di(n.state.field(Re).diagnostics, e);
      d && s.apply(n, d.from, d.to);
    }, { name: h } = s, c = r[l] ? h.indexOf(r[l]) : -1, u = c < 0 ? h : [
      h.slice(0, c),
      j("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ];
    return j("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${r[l]})"`}.`
    }, u);
  }), e.source && j("div", { class: "cm-diagnosticSource" }, e.source));
}
class kQ extends Qt {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return j("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class oh {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Vf(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class sn {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (r) => {
      if (r.keyCode == 27)
        lh(this.view), this.view.focus();
      else if (r.keyCode == 38 || r.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (r.keyCode == 40 || r.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (r.keyCode == 36)
        this.moveSelection(0);
      else if (r.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (r.keyCode == 13)
        this.view.focus();
      else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: s } = this.items[this.selectedIndex], l = zf(s.actions);
        for (let o = 0; o < l.length; o++)
          if (l[o].toUpperCase().charCodeAt(0) == r.keyCode) {
            let a = di(this.view.state.field(Re).diagnostics, s);
            a && s.actions[o].apply(e, a.from, a.to);
          }
      } else
        return;
      r.preventDefault();
    }, i = (r) => {
      for (let s = 0; s < this.items.length; s++)
        this.items[s].dom.contains(r.target) && this.moveSelection(s);
    };
    this.list = j("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    }), this.dom = j("div", { class: "cm-panel-lint" }, this.list, j("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => lh(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Re).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Re), i = 0, r = !1, s = null, l = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (o, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (l.has(c))
          continue;
        l.add(c);
        let u = -1, f;
        for (let d = i; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            u = d;
            break;
          }
        u < 0 ? (f = new oh(this.view, c), this.items.splice(i, 0, f), r = !0) : (f = this.items[u], u > i && (this.items.splice(i, u - i), r = !0)), t && f.diagnostic == t.diagnostic ? f.dom.hasAttribute("aria-selected") || (f.dom.setAttribute("aria-selected", "true"), s = f) : f.dom.hasAttribute("aria-selected") && f.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      r = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new oh(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), r = !0), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: s.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: o, panel: a }) => {
        let h = a.height / this.list.offsetHeight;
        o.top < a.top ? this.list.scrollTop -= (a.top - o.top) / h : o.bottom > a.bottom && (this.list.scrollTop += (o.bottom - a.bottom) / h);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; )
          t();
        e = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(Re), i = di(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: qf.of(i)
    });
  }
  static open(e) {
    return new sn(e);
  }
}
function vQ(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function En(n) {
  return vQ(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const wQ = /* @__PURE__ */ $.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ En("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ En("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ En("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ En("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
});
function PQ(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function $Q(n) {
  let e = "hint", t = 1;
  for (let i of n) {
    let r = PQ(i.severity);
    r > t && (t = r, e = i.severity);
  }
  return e;
}
const CQ = [
  Re,
  /* @__PURE__ */ $.decorations.compute([Re], (n) => {
    let { selected: e, panel: t } = n.field(Re);
    return !e || !t || e.from == e.to ? R.none : R.set([
      gQ.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ hm(yQ, { hideOn: pQ }),
  wQ
], TQ = [
  bm(),
  km(),
  Dp(),
  Bg(),
  gg(),
  Tp(),
  Mp(),
  E.allowMultipleSelections.of(!0),
  rg(),
  Tu(xg, { fallback: !0 }),
  Cg(),
  iQ(),
  dQ(),
  Kp(),
  tm(),
  Gp(),
  F0(),
  hn.of([
    ...lQ,
    ...B0,
    ...py,
    ...Kg,
    ...dg,
    ...Zf,
    ...SQ
  ])
];
class kr {
  /**
  @internal
  */
  constructor(e, t, i, r, s, l, o, a, h, c = 0, u) {
    this.p = e, this.stack = t, this.state = i, this.reducePos = r, this.pos = s, this.score = l, this.buffer = o, this.bufferBase = a, this.curContext = h, this.lookAhead = c, this.parent = u;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, i = 0) {
    let r = e.parser.context;
    return new kr(e, [], t, i, i, 0, [], 0, r ? new ah(r, r.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let i = e >> 19, r = e & 65535, { parser: s } = this.p, l = this.reducePos < this.pos - 25;
    l && this.setLookAhead(this.pos);
    let o = s.dynamicPrecedence(r);
    if (o && (this.score += o), i == 0) {
      this.pushState(s.getGoto(this.state, r, !0), this.reducePos), r < s.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, l ? 8 : 4, !0), this.reduceContext(r, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0), h = a ? this.stack[a - 2] : this.p.ranges[0].from, c = this.reducePos - h;
    c >= 2e3 && !(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = c));
    let u = a ? this.stack[a - 1] : 0, f = this.bufferBase + this.buffer.length - u;
    if (r < s.minRepeatTerm || e & 131072) {
      let d = s.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(r, h, d, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = s.getGoto(d, r, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(r, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, i, r = 4, s = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let l = this, o = this.buffer.length;
      if (o == 0 && l.parent && (o = l.bufferBase - l.parent.bufferBase, l = l.parent), o > 0 && l.buffer[o - 4] == 0 && l.buffer[o - 1] > -1) {
        if (t == i)
          return;
        if (l.buffer[o - 2] >= t) {
          l.buffer[o - 2] = i;
          return;
        }
      }
    }
    if (!s || this.pos == i)
      this.buffer.push(e, t, i, r);
    else {
      let l = this.buffer.length;
      if (l > 0 && this.buffer[l - 4] != 0) {
        let o = !1;
        for (let a = l; a > 0 && this.buffer[a - 2] > i; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            o = !0;
            break;
          }
        if (o)
          for (; l > 0 && this.buffer[l - 2] > i; )
            this.buffer[l] = this.buffer[l - 4], this.buffer[l + 1] = this.buffer[l - 3], this.buffer[l + 2] = this.buffer[l - 2], this.buffer[l + 3] = this.buffer[l - 1], l -= 4, r > 4 && (r -= 4);
      }
      this.buffer[l] = e, this.buffer[l + 1] = t, this.buffer[l + 2] = i, this.buffer[l + 3] = r;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, i, r) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if ((e & 262144) == 0) {
      let s = e, { parser: l } = this.p;
      (r > this.pos || t <= l.maxNode) && (this.pos = r, l.stateFlag(
        s,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = r)), this.pushState(s, i), this.shiftContext(t, i), t <= l.maxNode && this.buffer.push(t, i, r, 4);
    } else
      this.pos = r, this.shiftContext(t, i), t <= this.p.parser.maxNode && this.buffer.push(t, i, r, 4);
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, i, r) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, i, r);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
    let r = this.pos;
    this.reducePos = this.pos = r + e.length, this.pushState(t, r), this.buffer.push(
      i,
      r,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let i = e.buffer.slice(t), r = e.bufferBase + t;
    for (; e && r == e.bufferBase; )
      e = e.parent;
    return new kr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, r, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    i && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, i ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new AQ(this); ; ) {
      let i = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (i == 0)
        return !1;
      if ((i & 65536) == 0)
        return !0;
      t.reduce(i);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let r = [];
      for (let s = 0, l; s < t.length; s += 2)
        (l = t[s + 1]) != this.state && this.p.parser.hasAction(l, e) && r.push(t[s], l);
      if (this.stack.length < 120)
        for (let s = 0; r.length < 8 && s < t.length; s += 2) {
          let l = t[s + 1];
          r.some((o, a) => a & 1 && o == l) || r.push(t[s], l);
        }
      t = r;
    }
    let i = [];
    for (let r = 0; r < t.length && i.length < 4; r += 2) {
      let s = t[r + 1];
      if (s == this.state)
        continue;
      let l = this.split();
      l.pushState(s, this.pos), l.storeNode(0, l.pos, l.pos, 4, !0), l.shiftContext(t[r], this.pos), l.reducePos = this.pos, l.score -= 200, i.push(l);
    }
    return i;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if ((t & 65536) == 0)
      return !1;
    if (!e.validAction(this.state, t)) {
      let i = t >> 19, r = t & 65535, s = this.stack.length - i * 3;
      if (s < 0 || e.getGoto(this.stack[s], r, !1) < 0) {
        let l = this.findForcedReduction();
        if (l == null)
          return !1;
        t = l;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], i = (r, s) => {
      if (!t.includes(r))
        return t.push(r), e.allActions(r, (l) => {
          if (!(l & 393216)) if (l & 65536) {
            let o = (l >> 19) - s;
            if (o > 1) {
              let a = l & 65535, h = this.stack.length - o * 3;
              if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                return o << 19 | 65536 | a;
            }
          } else {
            let o = i(l, s + 1);
            if (o != null)
              return o;
          }
        });
    };
    return i(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new ah(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ah {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class AQ {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, i = e >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = r;
  }
}
class vr {
  constructor(e, t, i) {
    this.stack = e, this.pos = t, this.index = i, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new vr(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new vr(this.stack, this.pos, this.index);
  }
}
function Mi(n, e = Uint16Array) {
  if (typeof n != "string")
    return n;
  let t = null;
  for (let i = 0, r = 0; i < n.length; ) {
    let s = 0;
    for (; ; ) {
      let l = n.charCodeAt(i++), o = !1;
      if (l == 126) {
        s = 65535;
        break;
      }
      l >= 92 && l--, l >= 34 && l--;
      let a = l - 32;
      if (a >= 46 && (a -= 46, o = !0), s += a, o)
        break;
      s *= 46;
    }
    t ? t[r++] = s : t = new e(s);
  }
  return t;
}
class Hn {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const hh = new Hn();
class RQ {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = hh, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let i = this.range, r = this.rangeIndex, s = this.pos + e;
    for (; s < i.from; ) {
      if (!r)
        return null;
      let l = this.ranges[--r];
      s -= i.from - l.to, i = l;
    }
    for (; t < 0 ? s > i.to : s >= i.to; ) {
      if (r == this.ranges.length - 1)
        return null;
      let l = this.ranges[++r];
      s += l.from - i.to, i = l;
    }
    return s;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, i, r;
    if (t >= 0 && t < this.chunk.length)
      i = this.pos + e, r = this.chunk.charCodeAt(t);
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null)
        return -1;
      if (i = s, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        r = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let l = this.rangeIndex, o = this.range;
        for (; o.to <= i; )
          o = this.ranges[++l];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > o.to && (this.chunk2 = this.chunk2.slice(0, o.to - i)), r = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), r;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = i;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = hh, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let i = "";
    for (let r of this.ranges) {
      if (r.from >= t)
        break;
      r.to > e && (i += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
    }
    return i;
  }
}
class si {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: i } = t.p;
    Yf(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
}
si.prototype.contextual = si.prototype.fallback = si.prototype.extend = !1;
class wr {
  constructor(e, t, i) {
    this.precTable = t, this.elseToken = i, this.data = typeof e == "string" ? Mi(e) : e;
  }
  token(e, t) {
    let i = e.pos, r = 0;
    for (; ; ) {
      let s = e.next < 0, l = e.resolveOffset(1, 1);
      if (Yf(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (s || r++, l == null)
        break;
      e.reset(l, e.token);
    }
    r && (e.reset(i, e.token), e.acceptToken(this.elseToken, r));
  }
}
wr.prototype.contextual = si.prototype.fallback = si.prototype.extend = !1;
class Ze {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function Yf(n, e, t, i, r, s) {
  let l = 0, o = 1 << i, { dialect: a } = t.p.parser;
  e: for (; (o & n[l]) != 0; ) {
    let h = n[l + 1];
    for (let d = l + 3; d < h; d += 2)
      if ((n[d + 1] & o) > 0) {
        let O = n[d];
        if (a.allows(O) && (e.token.value == -1 || e.token.value == O || XQ(O, e.token.value, r, s))) {
          e.acceptToken(O);
          break;
        }
      }
    let c = e.next, u = 0, f = n[l + 2];
    if (e.next < 0 && f > u && n[h + f * 3 - 3] == 65535) {
      l = n[h + f * 3 - 1];
      continue e;
    }
    for (; u < f; ) {
      let d = u + f >> 1, O = h + d + (d << 1), m = n[O], g = n[O + 1] || 65536;
      if (c < m)
        f = d;
      else if (c >= g)
        u = d + 1;
      else {
        l = n[O + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
function ch(n, e, t) {
  for (let i = e, r; (r = n[i]) != 65535; i++)
    if (r == t)
      return i - e;
  return -1;
}
function XQ(n, e, t, i) {
  let r = ch(t, i, e);
  return r < 0 || ch(t, i, n) < r;
}
const Ce = typeof process != "undefined" && process.env && /\bparse\b/.test(process.env.LOG);
let ps = null;
function uh(n, e, t) {
  let i = n.cursor(N.IncludeAnonymous);
  for (i.moveTo(e); ; )
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            i.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(n.length, Math.max(
            i.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return t < 0 ? 0 : n.length;
      }
}
class ZQ {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? uh(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? uh(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let i = this.trees[t], r = this.index[t];
      if (r == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = i.children[r], l = this.start[t] + i.positions[r];
      if (l > e)
        return this.nextStart = l, null;
      if (s instanceof K) {
        if (l == e) {
          if (l < this.safeFrom)
            return null;
          let o = l + s.length;
          if (o <= this.safeTo) {
            let a = s.prop(q.lookAhead);
            if (!a || o + a < this.fragment.to)
              return s;
          }
        }
        this.index[t]++, l + s.length >= Math.max(this.safeFrom, e) && (this.trees.push(s), this.start.push(l), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = l + s.length;
    }
  }
}
class MQ {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((i) => new Hn());
  }
  getActions(e) {
    let t = 0, i = null, { parser: r } = e.p, { tokenizers: s } = r, l = r.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), o = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let h = 0; h < s.length; h++) {
      if ((1 << h & l) == 0)
        continue;
      let c = s[h], u = this.tokens[h];
      if (!(i && !c.fallback) && ((c.contextual || u.start != e.pos || u.mask != l || u.context != o) && (this.updateCachedToken(u, c, e), u.mask = l, u.context = o), u.lookAhead > u.end + 25 && (a = Math.max(u.lookAhead, a)), u.value != 0)) {
        let f = t;
        if (u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)), t = this.addActions(e, u.value, u.end, t), !c.extend && (i = u, t > f))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !i && e.pos == this.stream.end && (i = new Hn(), i.value = e.p.parser.eofTerm, i.start = i.end = e.pos, t = this.addActions(e, i.value, i.end, t)), this.mainToken = i, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new Hn(), { pos: i, p: r } = e;
    return t.start = i, t.end = Math.min(i + 1, r.stream.end), t.value = i == r.stream.end ? r.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, i) {
    let r = this.stream.clipPos(i.pos);
    if (t.token(this.stream.reset(r, e), i), e.value > -1) {
      let { parser: s } = i.p;
      for (let l = 0; l < s.specialized.length; l++)
        if (s.specialized[l] == e.value) {
          let o = s.specializers[l](this.stream.read(e.start, e.end), i);
          if (o >= 0 && i.p.parser.dialect.allows(o >> 1)) {
            (o & 1) == 0 ? e.value = o >> 1 : e.extended = o >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(r + 1);
  }
  putAction(e, t, i, r) {
    for (let s = 0; s < r; s += 3)
      if (this.actions[s] == e)
        return r;
    return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = i, r;
  }
  addActions(e, t, i, r) {
    let { state: s } = e, { parser: l } = e.p, { data: o } = l;
    for (let a = 0; a < 2; a++)
      for (let h = l.stateSlot(
        s,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (o[h] == 65535)
          if (o[h + 1] == 1)
            h = ut(o, h + 2);
          else {
            r == 0 && o[h + 1] == 2 && (r = this.putAction(ut(o, h + 2), t, i, r));
            break;
          }
        o[h] == t && (r = this.putAction(ut(o, h + 1), t, i, r));
      }
    return r;
  }
}
class qQ {
  constructor(e, t, i, r) {
    this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new RQ(t, r), this.tokens = new MQ(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = r[0];
    this.stacks = [kr.start(this, e.top[0], s)], this.fragments = i.length && this.stream.end - s > e.bufferLength * 4 ? new ZQ(i, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, i = this.stacks = [], r, s;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [l] = e;
      for (; l.forceReduce() && l.stack.length && l.stack[l.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let l = 0; l < e.length; l++) {
      let o = e[l];
      for (; ; ) {
        if (this.tokens.mainToken = null, o.pos > t)
          i.push(o);
        else {
          if (this.advanceStack(o, i, e))
            continue;
          {
            r || (r = [], s = []), r.push(o);
            let a = this.tokens.getMainToken(o);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let l = r && VQ(r);
      if (l)
        return Ce && console.log("Finish with " + this.stackID(l)), this.stackToTree(l);
      if (this.parser.strict)
        throw Ce && r && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r) {
      let l = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, i);
      if (l)
        return Ce && console.log("Force-finish " + this.stackID(l)), this.stackToTree(l.forceAll());
    }
    if (this.recovering) {
      let l = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > l)
        for (i.sort((o, a) => a.score - o.score); i.length > l; )
          i.pop();
      i.some((o) => o.reducePos > t) && this.recovering--;
    } else if (i.length > 1) {
      e: for (let l = 0; l < i.length - 1; l++) {
        let o = i[l];
        for (let a = l + 1; a < i.length; a++) {
          let h = i[a];
          if (o.sameState(h) || o.buffer.length > 500 && h.buffer.length > 500)
            if ((o.score - h.score || o.buffer.length - h.buffer.length) > 0)
              i.splice(a--, 1);
            else {
              i.splice(l--, 1);
              continue e;
            }
        }
      }
      i.length > 12 && i.splice(
        12,
        i.length - 12
        /* Rec.MaxStackCount */
      );
    }
    this.minStackPos = i[0].pos;
    for (let l = 1; l < i.length; l++)
      i[l].pos < this.minStackPos && (this.minStackPos = i[l].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, i) {
    let r = e.pos, { parser: s } = this, l = Ce ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && r > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict, c = h ? e.curContext.hash : 0;
      for (let u = this.fragments.nodeAt(r); u; ) {
        let f = this.parser.nodeSet.types[u.type.id] == u.type ? s.getGoto(e.state, u.type.id) : -1;
        if (f > -1 && u.length && (!h || (u.prop(q.contextHash) || 0) == c))
          return e.useNode(u, f), Ce && console.log(l + this.stackID(e) + ` (via reuse of ${s.getName(u.type.id)})`), !0;
        if (!(u instanceof K) || u.children.length == 0 || u.positions[0] > 0)
          break;
        let d = u.children[0];
        if (d instanceof K && u.positions[0] == 0)
          u = d;
        else
          break;
      }
    }
    let o = s.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (o > 0)
      return e.reduce(o), Ce && console.log(l + this.stackID(e) + ` (via always-reduce ${s.getName(
        o & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let c = a[h++], u = a[h++], f = a[h++], d = h == a.length || !i, O = d ? e : e.split(), m = this.tokens.mainToken;
      if (O.apply(c, u, m ? m.start : O.pos, f), Ce && console.log(l + this.stackID(O) + ` (via ${(c & 65536) == 0 ? "shift" : `reduce of ${s.getName(
        c & 65535
        /* Action.ValueMask */
      )}`} for ${s.getName(u)} @ ${r}${O == e ? "" : ", split"})`), d)
        return !0;
      O.pos > r ? t.push(O) : i.push(O);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let i = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > i)
        return fh(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let r = null, s = !1;
    for (let l = 0; l < e.length; l++) {
      let o = e[l], a = t[l << 1], h = t[(l << 1) + 1], c = Ce ? this.stackID(o) + " -> " : "";
      if (o.deadEnd && (s || (s = !0, o.restart(), Ce && console.log(c + this.stackID(o) + " (restarted)"), this.advanceFully(o, i))))
        continue;
      let u = o.split(), f = c;
      for (let d = 0; u.forceReduce() && d < 10 && (Ce && console.log(f + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, i)); d++)
        Ce && (f = this.stackID(u) + " -> ");
      for (let d of o.recoverByInsert(a))
        Ce && console.log(c + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > o.pos ? (h == o.pos && (h++, a = 0), o.recoverByDelete(a, h), Ce && console.log(c + this.stackID(o) + ` (via recover-delete ${this.parser.getName(a)})`), fh(o, i)) : (!r || r.score < o.score) && (r = o);
    }
    return r;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), K.build({
      buffer: vr.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (ps || (ps = /* @__PURE__ */ new WeakMap())).get(e);
    return t || ps.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function fh(n, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == n.pos && i.sameState(n)) {
      e[t].score < n.score && (e[t] = n);
      return;
    }
  }
  e.push(n);
}
class zQ {
  constructor(e, t, i) {
    this.source = e, this.flags = t, this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const ms = (n) => n;
class Ef {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || ms, this.reduce = e.reduce || ms, this.reuse = e.reuse || ms, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class Oi extends du {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let o = 0; o < e.repeatNodeCount; o++)
      t.push("");
    let i = Object.keys(e.topRules).map((o) => e.topRules[o][1]), r = [];
    for (let o = 0; o < t.length; o++)
      r.push([]);
    function s(o, a, h) {
      r[o].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let o of e.nodeProps) {
        let a = o[0];
        typeof a == "string" && (a = q[a]);
        for (let h = 1; h < o.length; ) {
          let c = o[h++];
          if (c >= 0)
            s(c, a, o[h++]);
          else {
            let u = o[h + -c];
            for (let f = -c; f > 0; f--)
              s(o[h++], a, u);
            h++;
          }
        }
      }
    this.nodeSet = new El(t.map((o, a) => Qe.define({
      name: a >= this.minRepeatTerm ? void 0 : o,
      id: a,
      props: r[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = au;
    let l = Mi(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let o = 0; o < this.specializerSpecs.length; o++)
      this.specialized[o] = this.specializerSpecs[o].term;
    this.specializers = this.specializerSpecs.map(dh), this.states = Mi(e.states, Uint32Array), this.data = Mi(e.stateData), this.goto = Mi(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((o) => typeof o == "number" ? new si(l, o) : o), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let r = new qQ(this, e, t, i);
    for (let s of this.wrappers)
      r = s(r, e, t, i);
    return r;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, i = !1) {
    let r = this.goto;
    if (t >= r[0])
      return -1;
    for (let s = r[t + 1]; ; ) {
      let l = r[s++], o = l & 1, a = r[s++];
      if (o && i)
        return a;
      for (let h = s + (l >> 1); s < h; s++)
        if (r[s] == e)
          return a;
      if (o)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let i = this.data;
    for (let r = 0; r < 2; r++)
      for (let s = this.stateSlot(
        e,
        r ? 2 : 1
        /* ParseState.Actions */
      ), l; ; s += 3) {
        if ((l = i[s]) == 65535)
          if (i[s + 1] == 1)
            l = i[s = ut(i, s + 2)];
          else {
            if (i[s + 1] == 2)
              return ut(i, s + 2);
            break;
          }
        if (l == t || l == 0)
          return ut(i, s + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (i) => i == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let i = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), r = i ? t(i) : void 0;
    for (let s = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); r == null; s += 3) {
      if (this.data[s] == 65535)
        if (this.data[s + 1] == 1)
          s = ut(this.data, s + 2);
        else
          break;
      r = t(ut(this.data, s + 1));
    }
    return r;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = ut(this.data, i + 2);
        else
          break;
      if ((this.data[i + 2] & 1) == 0) {
        let r = this.data[i + 1];
        t.some((s, l) => l & 1 && s == r) || t.push(this.data[i], r);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(Oi.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let i = this.topRules[e.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = i;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((i) => {
      let r = e.tokenizers.find((s) => s.from == i);
      return r ? r.to : i;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((i, r) => {
      let s = e.specializers.find((o) => o.from == i.external);
      if (!s)
        return i;
      let l = Object.assign(Object.assign({}, i), { external: s.to });
      return t.specializers[r] = dh(l), l;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), i = t.map(() => !1);
    if (e)
      for (let s of e.split(" ")) {
        let l = t.indexOf(s);
        l >= 0 && (i[l] = !0);
      }
    let r = null;
    for (let s = 0; s < t.length; s++)
      if (!i[s])
        for (let l = this.dialects[t[s]], o; (o = this.data[l++]) != 65535; )
          (r || (r = new Uint8Array(this.maxTerm + 1)))[o] = 1;
    return new zQ(e, i, r);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new Oi(e);
  }
}
function ut(n, e) {
  return n[e] | n[e + 1] << 16;
}
function VQ(n) {
  let e = null;
  for (let t of n) {
    let i = t.p.stoppedAt;
    (t.pos == t.p.stream.end || i != null && t.pos > i) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function dh(n) {
  if (n.external) {
    let e = n.extend ? 1 : 0;
    return (t, i) => n.external(t, i) << 1 | e;
  }
  return n.get;
}
const YQ = 315, EQ = 316, Oh = 1, DQ = 2, _Q = 3, LQ = 4, BQ = 317, jQ = 319, WQ = 320, GQ = 5, IQ = 6, NQ = 0, Ql = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], Df = 125, UQ = 59, bl = 47, FQ = 42, HQ = 43, KQ = 45, JQ = 60, eb = 44, tb = 63, ib = 46, nb = 91, rb = new Ef({
  start: !1,
  shift(n, e) {
    return e == GQ || e == IQ || e == jQ ? n : e == WQ;
  },
  strict: !1
}), sb = new Ze((n, e) => {
  let { next: t } = n;
  (t == Df || t == -1 || e.context) && n.acceptToken(BQ);
}, { contextual: !0, fallback: !0 }), lb = new Ze((n, e) => {
  let { next: t } = n, i;
  Ql.indexOf(t) > -1 || t == bl && ((i = n.peek(1)) == bl || i == FQ) || t != Df && t != UQ && t != -1 && !e.context && n.acceptToken(YQ);
}, { contextual: !0 }), ob = new Ze((n, e) => {
  n.next == nb && !e.context && n.acceptToken(EQ);
}, { contextual: !0 }), ab = new Ze((n, e) => {
  let { next: t } = n;
  if (t == HQ || t == KQ) {
    if (n.advance(), t == n.next) {
      n.advance();
      let i = !e.context && e.canShift(Oh);
      n.acceptToken(i ? Oh : DQ);
    }
  } else t == tb && n.peek(1) == ib && (n.advance(), n.advance(), (n.next < 48 || n.next > 57) && n.acceptToken(_Q));
}, { contextual: !0 });
function gs(n, e) {
  return n >= 65 && n <= 90 || n >= 97 && n <= 122 || n == 95 || n >= 192 || !e && n >= 48 && n <= 57;
}
const hb = new Ze((n, e) => {
  if (n.next != JQ || !e.dialectEnabled(NQ) || (n.advance(), n.next == bl)) return;
  let t = 0;
  for (; Ql.indexOf(n.next) > -1; )
    n.advance(), t++;
  if (gs(n.next, !0)) {
    for (n.advance(), t++; gs(n.next, !1); )
      n.advance(), t++;
    for (; Ql.indexOf(n.next) > -1; )
      n.advance(), t++;
    if (n.next == eb) return;
    for (let i = 0; ; i++) {
      if (i == 7) {
        if (!gs(n.next, !0)) return;
        break;
      }
      if (n.next != "extends".charCodeAt(i)) break;
      n.advance(), t++;
    }
  }
  n.acceptToken(LQ, -t);
}), cb = Mr({
  "get set async static": p.modifier,
  "for while do if else switch try catch finally return throw break continue default case": p.controlKeyword,
  "in of await yield void typeof delete instanceof as satisfies": p.operatorKeyword,
  "let var const using function class extends": p.definitionKeyword,
  "import export from": p.moduleKeyword,
  "with debugger new": p.keyword,
  TemplateString: p.special(p.string),
  super: p.atom,
  BooleanLiteral: p.bool,
  this: p.self,
  null: p.null,
  Star: p.modifier,
  VariableName: p.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": p.function(p.variableName),
  VariableDefinition: p.definition(p.variableName),
  Label: p.labelName,
  PropertyName: p.propertyName,
  PrivatePropertyName: p.special(p.propertyName),
  "CallExpression/MemberExpression/PropertyName": p.function(p.propertyName),
  "FunctionDeclaration/VariableDefinition": p.function(p.definition(p.variableName)),
  "ClassDeclaration/VariableDefinition": p.definition(p.className),
  "NewExpression/VariableName": p.className,
  PropertyDefinition: p.definition(p.propertyName),
  PrivatePropertyDefinition: p.definition(p.special(p.propertyName)),
  UpdateOp: p.updateOperator,
  "LineComment Hashbang": p.lineComment,
  BlockComment: p.blockComment,
  Number: p.number,
  String: p.string,
  Escape: p.escape,
  ArithOp: p.arithmeticOperator,
  LogicOp: p.logicOperator,
  BitOp: p.bitwiseOperator,
  CompareOp: p.compareOperator,
  RegExp: p.regexp,
  Equals: p.definitionOperator,
  Arrow: p.function(p.punctuation),
  ": Spread": p.punctuation,
  "( )": p.paren,
  "[ ]": p.squareBracket,
  "{ }": p.brace,
  "InterpolationStart InterpolationEnd": p.special(p.brace),
  ".": p.derefOperator,
  ", ;": p.separator,
  "@": p.meta,
  TypeName: p.typeName,
  TypeDefinition: p.definition(p.typeName),
  "type enum interface implements namespace module declare": p.definitionKeyword,
  "abstract global Privacy readonly override": p.modifier,
  "is keyof unique infer asserts": p.operatorKeyword,
  JSXAttributeValue: p.attributeValue,
  JSXText: p.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": p.angleBracket,
  "JSXIdentifier JSXNameSpacedName": p.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": p.attributeName,
  "JSXBuiltin/JSXIdentifier": p.standard(p.tagName)
}), ub = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, in: 52, out: 55, const: 56, extends: 60, this: 64, true: 72, false: 72, null: 84, void: 88, typeof: 92, super: 108, new: 142, delete: 154, yield: 163, await: 167, class: 172, public: 235, private: 235, protected: 235, readonly: 237, instanceof: 256, satisfies: 259, import: 292, keyof: 349, unique: 353, infer: 359, asserts: 395, is: 397, abstract: 417, implements: 419, type: 421, let: 424, var: 426, using: 429, interface: 435, enum: 439, namespace: 445, module: 447, declare: 451, global: 455, for: 474, of: 483, while: 486, with: 490, do: 494, if: 498, else: 500, switch: 504, case: 510, try: 516, catch: 520, finally: 524, return: 528, throw: 532, break: 536, continue: 540, debugger: 544 }, fb = { __proto__: null, async: 129, get: 131, set: 133, declare: 195, public: 197, private: 197, protected: 197, static: 199, abstract: 201, override: 203, readonly: 209, accessor: 211, new: 401 }, db = { __proto__: null, "<": 193 }, Ob = Oi.deserialize({
  version: 14,
  states: "$EOQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Ik'#IkO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JqO6[Q!0MxO'#JrO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO7eQMhO'#F|O9[Q`O'#F{OOQ!0Lf'#Jr'#JrOOQ!0Lb'#Jq'#JqO9aQ`O'#GwOOQ['#K^'#K^O9lQ`O'#IXO9qQ!0LrO'#IYOOQ['#J_'#J_OOQ['#I^'#I^Q`QlOOQ`QlOOO9yQ!L^O'#DvO:QQlO'#EOO:XQlO'#EQO9gQ`O'#GsO:`QMhO'#CoO:nQ`O'#EnO:yQ`O'#EyO;OQMhO'#FeO;mQ`O'#GsOOQO'#K_'#K_O;rQ`O'#K_O<QQ`O'#G{O<QQ`O'#G|O<QQ`O'#HOO9gQ`O'#HRO<wQ`O'#HUO>`Q`O'#CeO>pQ`O'#HbO>xQ`O'#HhO>xQ`O'#HjO`QlO'#HlO>xQ`O'#HnO>xQ`O'#HqO>}Q`O'#HwO?SQ!0LsO'#H}O%[QlO'#IPO?_Q!0LsO'#IRO?jQ!0LsO'#ITO9qQ!0LrO'#IVO?uQ!0MxO'#CiO@wQpO'#DlQOQ`OOO%[QlO'#EQOA_Q`O'#ETO:`QMhO'#EnOAjQ`O'#EnOAuQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Ju'#JuO%[QlO'#JuOOQO'#Jx'#JxOOQO'#Ig'#IgOBuQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J|'#J|OCqQ!0MSO'#EgOC{QpO'#EWOOQO'#Jw'#JwODaQpO'#JxOEnQpO'#EWOC{QpO'#EgPE{O&2DjO'#CbPOOO)CD|)CD|OOOO'#I_'#I_OFWO#tO,59UOOQ!0Lh,59U,59UOOOO'#I`'#I`OFfO&jO,59UOFtQ!L^O'#DcOOOO'#Ib'#IbOF{O#@ItO,59{OOQ!0Lf,59{,59{OGZQlO'#IcOGnQ`O'#JsOImQ!fO'#JsO+}QlO'#JsOItQ`O,5:ROJ[Q`O'#EpOJiQ`O'#KSOJtQ`O'#KROJtQ`O'#KROJ|Q`O,5;^OKRQ`O'#KQOOQ!0Ln,5:^,5:^OKYQlO,5:^OMWQ!0MxO,5:fOMwQ`O,5:nONbQ!0LrO'#KPONiQ`O'#KOO9aQ`O'#KOON}Q`O'#KOO! VQ`O,5;]O! [Q`O'#KOO!#aQ!fO'#JrOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$PQ!fO,5:sOOQS'#Jy'#JyOOQO-E<i-E<iO9gQ`O,5=_O!$gQ`O,5=_O!$lQlO,5;ZO!&oQMhO'#EkO!(YQ`O,5;ZO!(_QlO'#DyO!(iQpO,5;dO!(qQpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)PQlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IoO!+SQ!0LrO,5<iO%[QlO,5;eO!&oQMhO,5;eO!+qQMhO,5;eO!-cQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-jQ,UO'#FjO!.gQ,UO'#KWO!.RQ,UO'#KWO!.nQ,UO'#KWOOQO'#KW'#KWO!/SQ,UO,5<SOOOW,5<`,5<`O!/eQlO'#FvOOOW'#In'#InO7VO7dO,5<QO!/lQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0]Q$IUO'#CyOOQ!0Lh'#C}'#C}O!0pO#@ItO'#DRO!1^QMjO,5<eO!1eQ`O,5<hO!3QQ(CWO'#GXO!3_Q`O'#GYO!3dQ`O'#GYO!5SQ(CWO'#G^O!6XQpO'#GbOOQO'#Gn'#GnO!+xQMhO'#GmOOQO'#Gp'#GpO!+xQMhO'#GoO!6zQ$IUO'#JkOOQ!0Lh'#Jk'#JkO!7UQ`O'#JjO!7dQ`O'#JiO!7lQ`O'#CuOOQ!0Lh'#C{'#C{O!7}Q`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO1SQ`O'#DZO!+xQMhO'#GPO!+xQMhO'#GRO!8SQ`O'#GTO!8XQ`O'#GUO!3dQ`O'#G[O!+xQMhO'#GaO<QQ`O'#JjO!8^Q`O'#EqO!8{Q`O,5<gOOQ!0Lb'#Cr'#CrO!9TQ`O'#ErO!9}QpO'#EsOOQ!0Lb'#KQ'#KQO!:UQ!0LrO'#K`O9qQ!0LrO,5=cO`QlO,5>sOOQ['#Jg'#JgOOQ[,5>t,5>tOOQ[-E<[-E<[O!<TQ!0MxO,5:bO!9xQpO,5:`O!>nQ!0MxO,5:jO%[QlO,5:jO!AUQ!0MxO,5:lOOQO,5@y,5@yO!AuQMhO,5=_O!BTQ!0LrO'#JhO9[Q`O'#JhO!BfQ!0LrO,59ZO!BqQpO,59ZO!ByQMhO,59ZO:`QMhO,59ZO!CUQ`O,5;ZO!C^Q`O'#HaO!CrQ`O'#KcO%[QlO,5;}O!9xQpO,5<PO!CzQ`O,5=zO!DPQ`O,5=zO!DUQ`O,5=zO9qQ!0LrO,5=zO<QQ`O,5=jOOQO'#Cy'#CyO!DdQpO,5=gO!DlQMhO,5=hO!DwQ`O,5=jO!D|Q!bO,5=mO!EUQ`O'#K_O>}Q`O'#HWO9gQ`O'#HYO!EZQ`O'#HYO:`QMhO'#H[O!E`Q`O'#H[OOQ[,5=p,5=pO!EeQ`O'#H]O!EvQ`O'#CoO!E{Q`O,59PO!FVQ`O,59PO!H[QlO,59POOQ[,59P,59PO!HlQ!0LrO,59PO%[QlO,59PO!JwQlO'#HdOOQ['#He'#HeOOQ['#Hf'#HfO`QlO,5=|O!K_Q`O,5=|O`QlO,5>SO`QlO,5>UO!KdQ`O,5>WO`QlO,5>YO!KiQ`O,5>]O!KnQlO,5>cOOQ[,5>i,5>iO%[QlO,5>iO9qQ!0LrO,5>kOOQ[,5>m,5>mO# xQ`O,5>mOOQ[,5>o,5>oO# xQ`O,5>oOOQ[,5>q,5>qO#!fQpO'#D_O%[QlO'#JuO##XQpO'#JuO##cQpO'#DmO##tQpO'#DmO#&VQlO'#DmO#&^Q`O'#JtO#&fQ`O,5:WO#&kQ`O'#EtO#&yQ`O'#KTO#'RQ`O,5;_O#'WQpO'#DmO#'eQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#'lQ`O,5:oO>}Q`O,5;YO!BqQpO,5;YO!ByQMhO,5;YO:`QMhO,5;YO#'tQ`O,5@aO#'yQ07dO,5:sOOQO-E<e-E<eO#)PQ!0MSO,5;ROC{QpO,5:rO#)ZQpO,5:rOC{QpO,5;RO!BfQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#)hQ!0LrO,5;RO#)sQ!0LrO,5;RO!BqQpO,5:rOOQO,5;X,5;XO#*RQ!0LrO,5;RPOOO'#I]'#I]P#*gO&2DjO,58|POOO,58|,58|OOOO-E<]-E<]OOQ!0Lh1G.p1G.pOOOO-E<^-E<^OOOO,59},59}O#*rQ!bO,59}OOOO-E<`-E<`OOQ!0Lf1G/g1G/gO#*wQ!fO,5>}O+}QlO,5>}OOQO,5?T,5?TO#+RQlO'#IcOOQO-E<a-E<aO#+`Q`O,5@_O#+hQ!fO,5@_O#+oQ`O,5@mOOQ!0Lf1G/m1G/mO%[QlO,5@nO#+wQ`O'#IiOOQO-E<g-E<gO#+oQ`O,5@mOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@kO#,]Q!0LrO,5@kO#,nQ!0LrO,5@kO#,uQ`O,5@jO9aQ`O,5@jO#,}Q`O,5@jO#-]Q`O'#IlO#,uQ`O,5@jOOQ!0Lb1G0w1G0wO!(iQpO,5:uO!(tQpO,5:uOOQS,5:w,5:wO#-}QdO,5:wO#.VQMhO1G2yO9gQ`O1G2yOOQ!0Lf1G0u1G0uO#.eQ!0MxO1G0uO#/jQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0WQ!0MzO'#JkO!$lQlO1G0uO#2cQ!fO'#JvO%[QlO'#JvO#2mQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#2rQ`O1G1OO#5WQ!0MxO1G1PO#5_Q!0MxO1G1PO#7uQ!0MxO1G1PO#7|Q!0MxO1G1PO#:dQ!0MxO1G1PO#<zQ!0MxO1G1PO#=RQ!0MxO1G1PO#=YQ!0MxO1G1PO#?pQ!0MxO1G1PO#?wQ!0MxO1G1PO#BUQ?MtO'#CiO#DPQ?MtO1G1`O#DWQ?MtO'#JrO#DkQ!0MxO,5?ZOOQ!0Lb-E<m-E<mO#FxQ!0MxO1G1PO#GuQ!0MzO1G1POOQ!0Lf1G1P1G1PO#HxQMjO'#J{O#ISQ`O,5:xO#IXQ!0MxO1G1cO#I{Q,UO,5<WO#JTQ,UO,5<XO#J]Q,UO'#FoO#JtQ`O'#FnOOQO'#KX'#KXOOQO'#Im'#ImO#JyQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#K[Q?MtO'#JqO#KfQ`O,5<bO!)PQlO,5<bOOOW-E<l-E<lOOQ!0Lf1G1l1G1lO#KkQpO'#KWOOQ!0Lf,5<d,5<dO#KsQpO,5<dO#KxQMhO'#DTOOOO'#Ia'#IaO#LPO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8XQ`O'#IqO#L[Q`O,5<zOOQ!0Lh,5<w,5<wO!+xQMhO'#ItO#LxQMjO,5=XO!+xQMhO'#IvO#MkQMjO,5=ZO!&oQMhO,5=]OOQO1G2S1G2SO#MuQ!dO'#CrO#NYQ(CWO'#ErO$ _QpO'#GbO$ uQ!dO,5<sO$ |Q`O'#KZO9aQ`O'#KZO$![Q`O,5<uO!+xQMhO,5<tO$!aQ`O'#GZO$!rQ`O,5<tO$!wQ!dO'#GWO$#UQ!dO'#K[O$#`Q`O'#K[O!&oQMhO'#K[O$#eQ`O,5<xO$#jQlO'#JuO$#tQpO'#GcO##tQpO'#GcO$$VQ`O'#GgO!3dQ`O'#GkO$$[Q!0LrO'#IsO$$gQpO,5<|OOQ!0Lp,5<|,5<|O$$nQpO'#GcO$${QpO'#GdO$%^QpO'#GdO$%cQMjO,5=XO$%sQMjO,5=ZOOQ!0Lh,5=^,5=^O!+xQMhO,5@UO!+xQMhO,5@UO$&TQ`O'#IxO$&iQ`O,5@TO$&qQ`O,59aOOQ!0Lh,59i,59iO$'hQ$IYO,59uOOQ!0Lh'#Jo'#JoO$(ZQMjO,5<kO$(|QMjO,5<mO@oQ`O,5<oOOQ!0Lh,5<p,5<pO$)WQ`O,5<vO$)]QMjO,5<{O$)mQ`O,5@UO$){Q`O'#KOO!$lQlO1G2RO$*QQ`O1G2RO9aQ`O'#KRO9aQ`O'#EtO%[QlO'#EtO9aQ`O'#IzO$*VQ!0LrO,5@zOOQ[1G2}1G2}OOQ[1G4_1G4_OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$,XQ!0MxO1G0UOOQ[1G2y1G2yO!&oQMhO1G2yO%[QlO1G2yO#.YQ`O1G2yO$.]QMhO'#EkOOQ!0Lb,5@S,5@SO$.jQ!0LrO,5@SOOQ[1G.u1G.uO!BfQ!0LrO1G.uO!BqQpO1G.uO!ByQMhO1G.uO$.{Q`O1G0uO$/QQ`O'#CiO$/]Q`O'#KdO$/eQ`O,5={O$/jQ`O'#KdO$/oQ`O'#KdO$/}Q`O'#JQO$0]Q`O,5@}O$0eQ!fO1G1iOOQ!0Lf1G1k1G1kO9gQ`O1G3fO@oQ`O1G3fO$0lQ`O1G3fO$0qQ`O1G3fOOQ[1G3f1G3fO!DwQ`O1G3UO!&oQMhO1G3RO$0vQ`O1G3ROOQ[1G3S1G3SO!&oQMhO1G3SO$0{Q`O1G3SO$1TQpO'#HQOOQ[1G3U1G3UO!6SQpO'#I|O!D|Q!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$1]QMhO,5=tO9gQ`O,5=tO$$VQ`O,5=vO9[Q`O,5=vO!BqQpO,5=vO!ByQMhO,5=vO:`QMhO,5=vO$1kQ`O'#KbO$1vQ`O,5=wOOQ[1G.k1G.kO$1{Q!0LrO1G.kO@oQ`O1G.kO$2WQ`O1G.kO9qQ!0LrO1G.kO$4`Q!fO,5APO$4mQ`O,5APO9aQ`O,5APO$4xQlO,5>OO$5PQ`O,5>OOOQ[1G3h1G3hO`QlO1G3hOOQ[1G3n1G3nOOQ[1G3p1G3pO>xQ`O1G3rO$5UQlO1G3tO$9YQlO'#HsOOQ[1G3w1G3wO$9gQ`O'#HyO>}Q`O'#H{OOQ[1G3}1G3}O$9oQlO1G3}O9qQ!0LrO1G4TOOQ[1G4V1G4VOOQ!0Lb'#G_'#G_O9qQ!0LrO1G4XO9qQ!0LrO1G4ZO$=vQ`O,5@aO!)PQlO,5;`O9aQ`O,5;`O>}Q`O,5:XO!)PQlO,5:XO!BqQpO,5:XO$={Q?MtO,5:XOOQO,5;`,5;`O$>VQpO'#IdO$>mQ`O,5@`OOQ!0Lf1G/r1G/rO$>uQpO'#IjO$?PQ`O,5@oOOQ!0Lb1G0y1G0yO##tQpO,5:XOOQO'#If'#IfO$?XQpO,5:qOOQ!0Ln,5:q,5:qO#'oQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO>}Q`O1G0tO!BqQpO1G0tO!ByQMhO1G0tOOQ!0Lb1G5{1G5{O!BfQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$?`Q!0LrO1G0mO$?kQ!0LrO1G0mO!BqQpO1G0^OC{QpO1G0^O$?yQ!0LrO1G0mOOQO1G0^1G0^O$@_Q!0MxO1G0mPOOO-E<Z-E<ZPOOO1G.h1G.hOOOO1G/i1G/iO$@iQ!bO,5<iO$@qQ!fO1G4iOOQO1G4o1G4oO%[QlO,5>}O$@{Q`O1G5yO$ATQ`O1G6XO$A]Q!fO1G6YO9aQ`O,5?TO$AgQ!0MxO1G6VO%[QlO1G6VO$AwQ!0LrO1G6VO$BYQ`O1G6UO$BYQ`O1G6UO9aQ`O1G6UO$BbQ`O,5?WO9aQ`O,5?WOOQO,5?W,5?WO$BvQ`O,5?WO$){Q`O,5?WOOQO-E<j-E<jOOQS1G0a1G0aOOQS1G0c1G0cO#.QQ`O1G0cOOQ[7+(e7+(eO!&oQMhO7+(eO%[QlO7+(eO$CUQ`O7+(eO$CaQMhO7+(eO$CoQ!0MzO,5=XO$EzQ!0MzO,5=ZO$HVQ!0MzO,5=XO$JhQ!0MzO,5=ZO$LyQ!0MzO,59uO% OQ!0MzO,5<kO%#ZQ!0MzO,5<mO%%fQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%'wQ!0MxO7+&aO%(kQlO'#IeO%(xQ`O,5@bO%)QQ!fO,5@bOOQ!0Lf1G0P1G0PO%)[Q`O7+&jOOQ!0Lf7+&j7+&jO%)aQ?MtO,5:fO%[QlO7+&zO%)kQ?MtO,5:bO%)xQ?MtO,5:jO%*SQ?MtO,5:lO%*^QMhO'#IhO%*hQ`O,5@gOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%*pQ!jO,5<ZO!)PQlO,5<YOOQO-E<k-E<kOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%*{Q`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%+QQ!dO,59oOOOO-E<_-E<_OOQ!0Lh1G/X1G/XO%+XQ!0MxO7+'kOOQ!0Lh,5?],5?]O%+{QMhO1G2fP%,SQ`O'#IqPOQ!0Lh-E<o-E<oO%,pQMjO,5?`OOQ!0Lh-E<r-E<rO%-cQMjO,5?bOOQ!0Lh-E<t-E<tO%-mQ!dO1G2wO%-tQ!dO'#CrO%.[QMhO'#KRO$#jQlO'#JuOOQ!0Lh1G2_1G2_O%.cQ`O'#IpO%.wQ`O,5@uO%.wQ`O,5@uO%/PQ`O,5@uO%/[Q`O,5@uOOQO1G2a1G2aO%/jQMjO1G2`O!+xQMhO1G2`O%/zQ(CWO'#IrO%0XQ`O,5@vO!&oQMhO,5@vO%0aQ!dO,5@vOOQ!0Lh1G2d1G2dO%2qQ!fO'#CiO%2{Q`O,5=POOQ!0Lb,5<},5<}O%3TQpO,5<}OOQ!0Lb,5=O,5=OOClQ`O,5<}O%3`QpO,5<}OOQ!0Lb,5=R,5=RO$){Q`O,5=VOOQO,5?_,5?_OOQO-E<q-E<qOOQ!0Lp1G2h1G2hO##tQpO,5<}O$#jQlO,5=PO%3nQ`O,5=OO%3yQpO,5=OO!+xQMhO'#ItO%4sQMjO1G2sO!+xQMhO'#IvO%5fQMjO1G2uO%5pQMjO1G5pO%5zQMjO1G5pOOQO,5?d,5?dOOQO-E<v-E<vOOQO1G.{1G.{O!9xQpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%6XQ`O1G2ZO!+xQMhO1G2bO!+xQMhO1G5pO!+xQMhO1G5pO%6^Q!0MxO7+'mOOQ!0Lf7+'m7+'mO!$lQlO7+'mO%7QQ`O,5;`OOQ!0Lb,5?f,5?fOOQ!0Lb-E<x-E<xO%7VQ!dO'#K]O#'oQ`O7+(eO4UQ!fO7+(eO$CXQ`O7+(eO%7aQ!0MvO'#CiO%7tQ!0MvO,5=SO%8fQ`O,5=SO%8nQ`O,5=SOOQ!0Lb1G5n1G5nOOQ[7+$a7+$aO!BfQ!0LrO7+$aO!BqQpO7+$aO!$lQlO7+&aO%8sQ`O'#JPO%9[Q`O,5AOOOQO1G3g1G3gO9gQ`O,5AOO%9[Q`O,5AOO%9dQ`O,5AOOOQO,5?l,5?lOOQO-E=O-E=OOOQ!0Lf7+'T7+'TO%9iQ`O7+)QO9qQ!0LrO7+)QO9gQ`O7+)QO@oQ`O7+)QOOQ[7+(p7+(pO%9nQ!0MvO7+(mO!&oQMhO7+(mO!DrQ`O7+(nOOQ[7+(n7+(nO!&oQMhO7+(nO%9xQ`O'#KaO%:TQ`O,5=lOOQO,5?h,5?hOOQO-E<z-E<zOOQ[7+(s7+(sO%;gQpO'#HZOOQ[1G3`1G3`O!&oQMhO1G3`O%[QlO1G3`O%;nQ`O1G3`O%;yQMhO1G3`O9qQ!0LrO1G3bO$$VQ`O1G3bO9[Q`O1G3bO!BqQpO1G3bO!ByQMhO1G3bO%<XQ`O'#JOO%<mQ`O,5@|O%<uQpO,5@|OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@oQ`O7+$VO9qQ!0LrO7+$VO%=QQ`O7+$VO%[QlO1G6kO%[QlO1G6lO%=VQ!0LrO1G6kO%=aQlO1G3jO%=hQ`O1G3jO%=mQlO1G3jOOQ[7+)S7+)SO9qQ!0LrO7+)^O`QlO7+)`OOQ['#Kg'#KgOOQ['#JR'#JRO%=tQlO,5>_OOQ[,5>_,5>_O%[QlO'#HtO%>RQ`O'#HvOOQ[,5>e,5>eO9aQ`O,5>eOOQ[,5>g,5>gOOQ[7+)i7+)iOOQ[7+)o7+)oOOQ[7+)s7+)sOOQ[7+)u7+)uO%>WQpO1G5{O%>rQ?MtO1G0zO%>|Q`O1G0zOOQO1G/s1G/sO%?XQ?MtO1G/sO>}Q`O1G/sO!)PQlO'#DmOOQO,5?O,5?OOOQO-E<b-E<bOOQO,5?U,5?UOOQO-E<h-E<hO!BqQpO1G/sOOQO-E<d-E<dOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#'oQ`O7+%uOOQ!0Lf7+&`7+&`O>}Q`O7+&`O!BqQpO7+&`OOQO7+%x7+%xO$@_Q!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%?cQ!0LrO7+&XO!BfQ!0LrO7+%xO!BqQpO7+%xO%?nQ!0LrO7+&XO%?|Q!0MxO7++qO%[QlO7++qO%@^Q`O7++pO%@^Q`O7++pOOQO1G4r1G4rO9aQ`O1G4rO%@fQ`O1G4rOOQS7+%}7+%}O#'oQ`O<<LPO4UQ!fO<<LPO%@tQ`O<<LPOOQ[<<LP<<LPO!&oQMhO<<LPO%[QlO<<LPO%@|Q`O<<LPO%AXQ!0MzO,5?`O%CdQ!0MzO,5?bO%EoQ!0MzO1G2`O%HQQ!0MzO1G2sO%J]Q!0MzO1G2uO%LhQ!fO,5?PO%[QlO,5?POOQO-E<c-E<cO%LrQ`O1G5|OOQ!0Lf<<JU<<JUO%LzQ?MtO1G0uO& RQ?MtO1G1PO& YQ?MtO1G1PO&#ZQ?MtO1G1PO&#bQ?MtO1G1PO&%cQ?MtO1G1PO&'dQ?MtO1G1PO&'kQ?MtO1G1PO&'rQ?MtO1G1PO&)sQ?MtO1G1PO&)zQ?MtO1G1PO&*RQ!0MxO<<JfO&+yQ?MtO1G1PO&,vQ?MvO1G1PO&-yQ?MvO'#JkO&0PQ?MtO1G1cO&0^Q?MtO1G0UO&0hQMjO,5?SOOQO-E<f-E<fO!)PQlO'#FqOOQO'#KY'#KYOOQO1G1u1G1uO&0rQ`O1G1tO&0wQ?MtO,5?ZOOOW7+'h7+'hOOOO1G/Z1G/ZO&1RQ!dO1G4wOOQ!0Lh7+(Q7+(QP!&oQMhO,5?]O!+xQMhO7+(cO&1YQ`O,5?[O9aQ`O,5?[OOQO-E<n-E<nO&1hQ`O1G6aO&1hQ`O1G6aO&1pQ`O1G6aO&1{QMjO7+'zO&2]Q!dO,5?^O&2gQ`O,5?^O!&oQMhO,5?^OOQO-E<p-E<pO&2lQ!dO1G6bO&2vQ`O1G6bO&3OQ`O1G2kO!&oQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%3TQpO1G2iO!BqQpO1G2iOClQ`O1G2iOOQ!0Lb1G2q1G2qO&3TQpO1G2iO&3cQ`O1G2kO$){Q`O1G2jOClQ`O1G2jO$#jQlO1G2kO&3kQ`O1G2jO&4_QMjO,5?`OOQ!0Lh-E<s-E<sO&5QQMjO,5?bOOQ!0Lh-E<u-E<uO!+xQMhO7++[OOQ!0Lh1G/c1G/cO&5[Q`O1G/cOOQ!0Lh7+'u7+'uO&5aQMjO7+'|O&5qQMjO7++[O&5{QMjO7++[O&6YQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&6|Q`O1G0zO!&oQMhO'#IyO&7RQ`O,5@wO&9TQ!fO<<LPO!&oQMhO1G2nO&9[Q!0LrO1G2nOOQ[<<G{<<G{O!BfQ!0LrO<<G{O&9mQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?k,5?kO&:aQ`O,5?kO&:fQ`O,5?kOOQO-E<}-E<}O&:tQ`O1G6jO&:tQ`O1G6jO9gQ`O1G6jO@oQ`O<<LlOOQ[<<Ll<<LlO&:|Q`O<<LlO9qQ!0LrO<<LlOOQ[<<LX<<LXO%9nQ!0MvO<<LXOOQ[<<LY<<LYO!DrQ`O<<LYO&;RQpO'#I{O&;^Q`O,5@{O!)PQlO,5@{OOQ[1G3W1G3WOOQO'#I}'#I}O9qQ!0LrO'#I}O&;fQpO,5=uOOQ[,5=u,5=uO&;mQpO'#EgO&;tQpO'#GeO&;yQ`O7+(zO&<OQ`O7+(zOOQ[7+(z7+(zO!&oQMhO7+(zO%[QlO7+(zO&<WQ`O7+(zOOQ[7+(|7+(|O9qQ!0LrO7+(|O$$VQ`O7+(|O9[Q`O7+(|O!BqQpO7+(|O&<cQ`O,5?jOOQO-E<|-E<|OOQO'#H^'#H^O&<nQ`O1G6hO9qQ!0LrO<<GqOOQ[<<Gq<<GqO@oQ`O<<GqO&<vQ`O7+,VO&<{Q`O7+,WO%[QlO7+,VO%[QlO7+,WOOQ[7+)U7+)UO&=QQ`O7+)UO&=VQlO7+)UO&=^Q`O7+)UOOQ[<<Lx<<LxOOQ[<<Lz<<LzOOQ[-E=P-E=POOQ[1G3y1G3yO&=cQ`O,5>`OOQ[,5>b,5>bO&=hQ`O1G4PO9aQ`O7+&fO!)PQlO7+&fOOQO7+%_7+%_O&=mQ?MtO1G6YO>}Q`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO>}Q`O<<IzOOQO<<Is<<IsO$@_Q!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!BfQ!0LrO<<IdO&=wQ!0LrO<<IsO&>SQ!0MxO<= ]O&>dQ`O<= [OOQO7+*^7+*^O9aQ`O7+*^OOQ[ANAkANAkO&>lQ!fOANAkO!&oQMhOANAkO#'oQ`OANAkO4UQ!fOANAkO&>sQ`OANAkO%[QlOANAkO&>{Q!0MzO7+'zO&A^Q!0MzO,5?`O&CiQ!0MzO,5?bO&EtQ!0MzO7+'|O&HVQ!fO1G4kO&HaQ?MtO7+&aO&JeQ?MvO,5=XO&LlQ?MvO,5=ZO&L|Q?MvO,5=XO&M^Q?MvO,5=ZO&MnQ?MvO,59uO' tQ?MvO,5<kO'#wQ?MvO,5<mO'&]Q?MvO,5<{O'(RQ?MtO7+'kO'(`Q?MtO7+'mO'(mQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*c7+*cO'(rQMjO<<K}OOQO1G4v1G4vO'(yQ`O1G4vO')UQ`O1G4vO')dQ`O7++{O')dQ`O7++{O!&oQMhO1G4xO')lQ!dO1G4xO')vQ`O7++|O'*OQ`O7+(VO'*ZQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!BqQpO7+(TOClQ`O7+(TO'*eQ`O7+(VO!&oQMhO7+(VO$){Q`O7+(UO'*jQ`O7+(VOClQ`O7+(UO'*rQMjO<<NvOOQ!0Lh7+$}7+$}O!+xQMhO<<NvO'*|Q!dO,5?eOOQO-E<w-E<wO'+WQ!0MvO7+(YO!&oQMhO7+(YOOQ[AN=gAN=gO9gQ`O1G5VOOQO1G5V1G5VO'+hQ`O1G5VO'+mQ`O7+,UO'+mQ`O7+,UO9qQ!0LrOANBWO@oQ`OANBWOOQ[ANBWANBWOOQ[ANAsANAsOOQ[ANAtANAtO'+uQ`O,5?gOOQO-E<y-E<yO',QQ?MtO1G6gOOQO,5?i,5?iOOQO-E<{-E<{OOQ[1G3a1G3aO',[Q`O,5=POOQ[<<Lf<<LfO!&oQMhO<<LfO&;yQ`O<<LfO',aQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9qQ!0LrO<<LhO$$VQ`O<<LhO9[Q`O<<LhO',iQpO1G5UO',tQ`O7+,SOOQ[AN=]AN=]O9qQ!0LrOAN=]OOQ[<= q<= qOOQ[<= r<= rO',|Q`O<= qO'-RQ`O<= rOOQ[<<Lp<<LpO'-WQ`O<<LpO'-]QlO<<LpOOQ[1G3z1G3zO>}Q`O7+)kO'-dQ`O<<JQO'-oQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$@_Q!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<Mx<<MxOOQ[G27VG27VO!&oQMhOG27VO#'oQ`OG27VO'-yQ!fOG27VO4UQ!fOG27VO'.QQ`OG27VO'.YQ?MtO<<JfO'.gQ?MvO1G2`O'0]Q?MvO,5?`O'2`Q?MvO,5?bO'4cQ?MvO1G2sO'6fQ?MvO1G2uO'8iQ?MtO<<KXO'8vQ?MtO<<I{OOQO1G1w1G1wO!+xQMhOANAiOOQO7+*b7+*bO'9TQ`O7+*bO'9`Q`O<= gO'9hQ!dO7+*dOOQ!0Lb<<Kq<<KqO$){Q`O<<KqOClQ`O<<KqO'9rQ`O<<KqO!&oQMhO<<KqOOQ!0Lb<<Ko<<KoO!BqQpO<<KoO'9}Q!dO<<KqOOQ!0Lb<<Kp<<KpO':XQ`O<<KqO!&oQMhO<<KqO$){Q`O<<KpO':^QMjOANDbO':hQ!0MvO<<KtOOQO7+*q7+*qO9gQ`O7+*qO':xQ`O<= pOOQ[G27rG27rO9qQ!0LrOG27rO!)PQlO1G5RO';QQ`O7+,RO';YQ`O1G2kO&;yQ`OANBQOOQ[ANBQANBQO!&oQMhOANBQO';_Q`OANBQOOQ[ANBSANBSO9qQ!0LrOANBSO$$VQ`OANBSOOQO'#H_'#H_OOQO7+*p7+*pOOQ[G22wG22wOOQ[ANE]ANE]OOQ[ANE^ANE^OOQ[ANB[ANB[O';gQ`OANB[OOQ[<<MV<<MVO!)PQlOAN?lOOQOG24yG24yO$@_Q!0MxOG24yO#'oQ`OLD,qOOQ[LD,qLD,qO!&oQMhOLD,qO';lQ!fOLD,qO';sQ?MvO7+'zO'=iQ?MvO,5?`O'?lQ?MvO,5?bO'AoQ?MvO7+'|O'CeQMjOG27TOOQO<<M|<<M|OOQ!0LbANA]ANA]O$){Q`OANA]OClQ`OANA]O'CuQ!dOANA]OOQ!0LbANAZANAZO'C|Q`OANA]O!&oQMhOANA]O'DXQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N]<<N]OOQ[LD-^LD-^O'DcQ?MtO7+*mOOQO'#Gf'#GfOOQ[G27lG27lO&;yQ`OG27lO!&oQMhOG27lOOQ[G27nG27nO9qQ!0LrOG27nOOQ[G27vG27vO'DmQ?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#'oQ`O!$(!]O!&oQMhO!$(!]O'DwQ!0MzOG27TOOQ!0LbG26wG26wO$){Q`OG26wO'GYQ`OG26wOClQ`OG26wO'GeQ!dOG26wO!&oQMhOG26wOOQ[LD-WLD-WO&;yQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#'oQ`O!)9EwOOQ!0LbLD,cLD,cO$){Q`OLD,cOClQ`OLD,cO'GlQ`OLD,cO'GwQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'HOQ?MvOG27TOOQ!0Lb!$( }!$( }O$){Q`O!$( }OClQ`O!$( }O'ItQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$){Q`O!)9EiOClQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$){Q`O!.K;TOOQ!0Lb!4/0o!4/0oO!)PQlO'#DzO1PQ`O'#EXO'JPQ!fO'#JqO'JWQ!L^O'#DvO'J_QlO'#EOO'JfQ!fO'#CiO'L|Q!fO'#CiO!)PQlO'#EQO'M^QlO,5;ZO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO,5;eO!)PQlO'#IoO( aQ`O,5<iO!)PQlO,5;eO( iQMhO,5;eO(#SQMhO,5;eO!)PQlO,5;wO!&oQMhO'#GmO( iQMhO'#GmO!&oQMhO'#GoO( iQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&oQMhO'#GPO( iQMhO'#GPO!&oQMhO'#GRO( iQMhO'#GRO!&oQMhO'#GaO( iQMhO'#GaO!)PQlO,5:jO(#ZQpO'#D_O(#eQpO'#JuO!)PQlO,5@nO'M^QlO1G0uO(#oQ?MtO'#CiO!)PQlO1G2PO!&oQMhO'#ItO( iQMhO'#ItO!&oQMhO'#IvO( iQMhO'#IvO(#yQ!dO'#CrO!&oQMhO,5<tO( iQMhO,5<tO'M^QlO1G2RO!)PQlO7+&zO!&oQMhO1G2`O( iQMhO1G2`O!&oQMhO'#ItO( iQMhO'#ItO!&oQMhO'#IvO( iQMhO'#IvO!&oQMhO1G2bO( iQMhO1G2bO'M^QlO7+'mO'M^QlO7+&aO!&oQMhOANAiO( iQMhOANAiO($^Q`O'#EoO($cQ`O'#EoO($kQ`O'#F]O($pQ`O'#EyO($uQ`O'#KSO(%QQ`O'#KQO(%]Q`O,5;ZO(%bQMjO,5<eO(%iQ`O'#GYO(%nQ`O'#GYO(%sQ`O,5<gO(%{Q`O,5;ZO(&TQ?MtO1G1`O(&[Q`O,5<tO(&aQ`O,5<tO(&fQ`O,5<vO(&kQ`O,5<vO(&pQ`O1G2RO(&uQ`O1G0uO(&zQMjO<<K}O('RQMjO<<K}O7eQMhO'#F|O9[Q`O'#F{OAjQ`O'#EnO!)PQlO,5;tO!3dQ`O'#GYO!3dQ`O'#GYO!3dQ`O'#G[O!3dQ`O'#G[O!+xQMhO7+(cO!+xQMhO7+(cO%-mQ!dO1G2wO%-mQ!dO1G2wO!&oQMhO,5=]O!&oQMhO,5=]",
  stateData: "((X~O'{OS'|OSTOS'}RQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&V!WO&]!XO&_!YO&a!ZO&c![O&f!]O&l!^O&r!_O&t!`O&v!aO&x!bO&z!cO(SSO(UTO(XUO(`VO(n[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(S!dO(UTO(XUO(`VO(n[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|;wO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(T!lO(UTO(XUO(d!mO(n!sO~O'}!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'y]X(`]X(q]X(x]X(y]X~O!g%RX~P(qO_!}O(U#PO(V!}O(W#PO~O_#QO(W#PO(X#PO(Y#QO~Ox#SO!U#TO(a#TO(b#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(S;{O(UTO(XUO(`VO(n[O~O![#ZO!]#WO!Y(gP!Y(uP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(UTO(XUO(`VO(n[O~Op#mO![#iO!|]O#i#lO#j#iO(S;|O!k(rP~P.iO!l#oO(S#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(`VO(q$YO(x#|O(y#}O~Oa(eX'y(eX'v(eX!k(eX!Y(eX!_(eX%i(eX!g(eX~P1qO#S$dO#`$eO$Q$eOP(fXR(fX[(fXj(fXr(fX!Q(fX!S(fX!](fX!l(fX!p(fX#R(fX#n(fX#o(fX#p(fX#q(fX#r(fX#s(fX#t(fX#u(fX#v(fX#x(fX#z(fX#{(fX(`(fX(q(fX(x(fX(y(fX!_(fX%i(fX~Oa(fX'y(fX'v(fX!Y(fX!k(fXv(fX!g(fX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%cOk%cOl%cOp%WOr%XOs$tOt$tOz%YO|%ZO!O%[O!S${O!_$|O!i%aO!l$xO#j%bO$W%_O$t%]O$v%^O$y%`O(S$sO(UTO(XUO(`$uO(x$}O(y%POg(]P~O!l%dO~O!S%gO!_%hO(S%fO~O!g%lO~Oa%mO'y%mO~O!Q%qO~P%[O(T!lO~P%[O%n%uO~P%[Oh%VO!l%dO(S%fO(T!lO~Oe%|O!l%dO(S%fO~Oj$RO~O!Q&RO!_&OO!l&QO%j&UO(S%fO(T!lO(UTO(XUO`)VP~O!x#sO~O%s&WO!S)RX!_)RX(S)RX~O(S&XO~Ol!PO!u&^O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&cOe&bO!x&`O%h&aO%{&_O~P<VOd&fOeyOl!PO!_&eO!u&^O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&iO#`&lO%j&gO(T!lO~P=[O!l&mO!u&qO~O!l#oO~O!_XO~Oa%mO'w&yO'y%mO~Oa%mO'w&|O'y%mO~Oa%mO'w'OO'y%mO~O'v]X!Y]Xv]X!k]X&Z]X!_]X%i]X!g]X~P(qO!b']O!c'UO!d'UO(T!lO(UTO(XUO~Os'SO!S'RO!['VO(d'QO!^(hP!^(wP~P@cOn'`O!_'^O(S%fO~Oe'eO!l%dO(S%fO~O!Q&RO!l&QO~Os!nO!S!oO!|;wO#T!pO#U!pO#W!pO#X!pO(T!lO(UTO(XUO(d!mO(n!sO~O!b'kO!c'jO!d'jO#V!pO#['lO#]'lO~PA}Oa%mOh%VO!g#vO!l%dO'y%mO(q'nO~O!p'rO#`'pO~PC]Os!nO!S!oO(UTO(XUO(d!mO(n!sO~O!_XOs(lX!S(lX!b(lX!c(lX!d(lX!|(lX#T(lX#U(lX#V(lX#W(lX#X(lX#[(lX#](lX(T(lX(U(lX(X(lX(d(lX(n(lX~O!c'jO!d'jO(T!lO~PC{O(O'vO(P'vO(Q'xO~O_!}O(U'zO(V!}O(W'zO~O_#QO(W'zO(X'zO(Y#QO~Ov'|O~P%[Ox#SO!U#TO(a#TO(b(PO~O![(RO!Y'VX!Y']X!]'VX!]']X~P+}O!](TO!Y(gX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](TO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(`VO(q$YO(x#|O(y#}O~O!Y(gX~PGvO!Y(YO~O!Y(tX!](tX!g(tX!k(tX(q(tX~O#`(tX#k#dX!^(tX~PIyO#`(ZO!Y(vX!](vX~O!]([O!Y(uX~O!Y(_O~O#`$eO~PIyO!^(`O~P`OR#zO!Q#yO!S#{O!l#xO(`VOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(q!na(x!na(y!na~Oa!na'y!na'v!na!Y!na!k!nav!na!_!na%i!na!g!na~PKaO!k(aO~O!g#vO#`(bO(q'nO!](sXa(sX'y(sX~O!k(sX~PM|O!S%gO!_%hO!|]O#i(gO#j(fO(S%fO~O!](hO!k(rX~O!k(jO~O!S%gO!_%hO#j(fO(S%fO~OP(fXR(fX[(fXj(fXr(fX!Q(fX!S(fX!](fX!l(fX!p(fX#R(fX#n(fX#o(fX#p(fX#q(fX#r(fX#s(fX#t(fX#u(fX#v(fX#x(fX#z(fX#{(fX(`(fX(q(fX(x(fX(y(fX~O!g#vO!k(fX~P! jOR(lO!Q(kO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(S!{a~P!#kO!x(pO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(S!dO(UTO(XUO(`VO(n[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<eO!S${O!_$|O!i=vO!l$xO#j<kO$W%_O$t<gO$v<iO$y%`O(S(tO(UTO(XUO(`$uO(x$}O(y%PO~O#k(vO~O![(xO!k(jP~P%[O(d(zO(n[O~O!S(|O!l#xO(d(zO(n[O~OP;vOQ;vOSfOd=rOe!iOpkOr;vOskOtkOzkO|;vO!O;vO!SWO!WkO!XkO!_!eO!i;yO!lZO!o;vO!p;vO!q;vO!s;zO!u;}O!x!hO$W!kO$n=pO(S)ZO(UTO(XUO(`VO(n[O~O!]$_Oa$qa'y$qa'v$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)bO~P!&oOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%[O!S${O!_$|O!i%aO!l$xO#j%bO$W%_O$t%]O$v%^O$y%`O(S(tO(UTO(XUO(`$uO(x$}O(y%PO~Og(oP~P!+xO!Q)gO!g)fO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)fO!_(zX$Z(zX$](zX$_(zX$f(zX~O!Q)gO~P!.RO!Q)gO!_(zX$Z(zX$](zX$_(zX$f(zX~O!_)iO$Z)mO$])hO$_)hO$f)nO~O![)qO~P!)PO$]$hO$_$gO$f)uO~On$zX!Q$zX#S$zX'x$zX(x$zX(y$zX~OgmXg$zXnmX!]mX#`mX~P!/wOx)wO(a)xO(b)zO~On*TO!Q)|O'x)}O(x$}O(y%PO~Og){O~P!0{Og*UO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<eO!S*WO!_*XO!i=vO!l$xO#j<kO$W%_O$t<gO$v<iO$y%`O(UTO(XUO(`$uO(x$}O(y%PO~O![*[O(S*VO!k(}P~P!1jO#k*^O~O!l*_O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<eO!S${O!_$|O!i=vO!l$xO#j<kO$W%_O$t<gO$v<iO$y%`O(S*aO(UTO(XUO(`$uO(x$}O(y%PO~O![*dO!Y)OP~P!3iOr*pOs!nO!S*fO!b*nO!c*hO!d*hO!l*_O#[*oO%`*jO(T!lO(UTO(XUO(d!mO~O!^*mO~P!5^O#S$dOn(_X!Q(_X'x(_X(x(_X(y(_X!](_X#`(_X~Og(_X$O(_X~P!6`On*uO#`*tOg(^X!](^X~O!]*vOg(]X~Oj%cOk%cOl%cO(S&XOg(]P~Os*yO~O!l+OO~O(S(tO~Op+TO!S%gO![#iO!_%hO!|]O#i#lO#j#iO(S%fO!k(rP~O!g#vO#k+UO~O!S%gO![+WO!]([O!_%hO(S%fO!Y(uP~Os'YO!S+YO![+XO(UTO(XUO(d(zO~O!^(wP~P!9iO!]+ZOa)SX'y)SX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(`VO(q$YO(x#|O(y#}O~Oa!ja!]!ja'y!ja'v!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:aOR#zO!Q#yO!S#{O!l#xO(`VOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(q!ra(x!ra(y!ra~Oa!ra'y!ra'v!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!<wOR#zO!Q#yO!S#{O!l#xO(`VOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(q!ta(x!ta(y!ta~Oa!ta'y!ta'v!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?_Oh%VOn+dO!_'^O%i+cO~O!g+fOa([X!_([X'y([X!]([X~Oa%mO!_XO'y%mO~Oh%VO!l%dO~Oh%VO!l%dO(S%fO~O!g#vO#k(vO~Ob+qO%j+rO(S+nO(UTO(XUO!^)WP~O!]+sO`)VX~O[+wO~O`+xO~O!_&OO(S%fO(T!lO`)VP~Oh%VO#`+}O~Oh%VOn,QO!_$|O~O!_,SO~O!Q,UO!_XO~O%n%uO~O!x,ZO~Oe,`O~Ob,aO(S#nO(UTO(XUO!^)UP~Oe%|O~O%j!QO(S&XO~P=[O[,fO`,eO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(UTO(XUO(`VO(n[O~O!_!eO!u!gO$W!kO(S!dO~P!F_O`,eOa%mO'y%mO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(S!dO(UTO(XUO(`VO(n[O~Oa,kOl!OO!uwO%l!OO%m!OO%n!OO~P!HwO!l&mO~O&],qO~O!_,sO~O&n,uO&p,vOP&kaQ&kaS&kaY&kaa&kad&kae&kal&kap&kar&kas&kat&kaz&ka|&ka!O&ka!S&ka!W&ka!X&ka!_&ka!i&ka!l&ka!o&ka!p&ka!q&ka!s&ka!u&ka!x&ka!|&ka$W&ka$n&ka%h&ka%j&ka%l&ka%m&ka%n&ka%q&ka%s&ka%v&ka%w&ka%y&ka&V&ka&]&ka&_&ka&a&ka&c&ka&f&ka&l&ka&r&ka&t&ka&v&ka&x&ka&z&ka'v&ka(S&ka(U&ka(X&ka(`&ka(n&ka!^&ka&d&kab&ka&i&ka~O(S,{O~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P# }O!g-QO#`-POh(iX!]#hX!^#hX!g(iX!l(iX~O!](iX!^(iX~P#!pOh%VO!g-SO!l%dO!]!aX!^!aX~Os!nO!S!oO(UTO(XUO(d!mO~OP;vOQ;vOSfOd=rOe!iOpkOr;vOskOtkOzkO|;vO!O;vO!SWO!WkO!XkO!_!eO!i;yO!lZO!o;vO!p;vO!q;vO!s;zO!u;}O!x!hO$W!kO$n=pO(UTO(XUO(`VO(n[O~O(S<rO~P#$VO!]-WO!^(hX~O!^-YO~O!g-QO#`-PO!]#hX!^#hX~O!]-ZO!^(wX~O!^-]O~O!c-^O!d-^O(T!lO~P##tO!^-aO~P'_On-dO!_'^O~O!Y-iO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(T!{a(U!{a(X!{a(d!{a(n!{a~P!#kO!p-nO#`-lO~PC]O!c-pO!d-pO(T!lO~PC{Oa%mO#`-lO'y%mO~Oa%mO!g#vO#`-lO'y%mO~Oa%mO!g#vO!p-nO#`-lO'y%mO(q'nO~O(O'vO(P'vO(Q-uO~Ov-vO~O!Y'Va!]'Va~P!:aO![-zO!Y'VX!]'VX~P%[O!](TO!Y(ga~O!Y(ga~PGvO!]([O!Y(ua~O!S%gO![.OO!_%hO(S%fO!Y']X!]']X~O#`.QO!](sa!k(saa(sa'y(sa~O!g#vO~P#,]O!](hO!k(ra~O!S%gO!_%hO#j.UO(S%fO~Op.ZO!S%gO![.WO!_%hO!|]O#i.YO#j.WO(S%fO!]'`X!k'`X~OR._O!l#xO~Oh%VOn.bO!_'^O%i.aO~Oa#ci!]#ci'y#ci'v#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:aOn=|O!Q)|O'x)}O(x$}O(y%PO~O#k#_aa#_a#`#_a'y#_a!]#_a!k#_a!_#_a!Y#_a~P#/XO#k(_XP(_XR(_X[(_Xa(_Xj(_Xr(_X!S(_X!l(_X!p(_X#R(_X#n(_X#o(_X#p(_X#q(_X#r(_X#s(_X#t(_X#u(_X#v(_X#x(_X#z(_X#{(_X'y(_X(`(_X(q(_X!k(_X!Y(_X'v(_Xv(_X!_(_X%i(_X!g(_X~P!6`O!].oO!k(jX~P!:aO!k.rO~O!Y.tO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(`VO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'y#mi(q#mi(x#mi(y#mi'v#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#2wO#n$OO~P#2wOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(`VO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'y#mi(q#mi(x#mi(y#mi'v#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#5fO#r$QO~P#5fOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(`VOa#mi!]#mi#x#mi#z#mi#{#mi'y#mi(q#mi(x#mi(y#mi'v#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8TOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(`VO(y#}Oa#mi!]#mi#z#mi#{#mi'y#mi(q#mi(x#mi'v#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#:kO#x#mi~P#:kO#v$SO~P#8TOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(`VO(x#|O(y#}Oa#mi!]#mi#{#mi'y#mi(q#mi'v#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#=aO#z$WO~P#=aOP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(`]X(q]X(x]X(y]X!]]X!^]X~O$O]X~P#@OOP$[OR#zO[<_Oj<SOr<]O!Q#yO!S#{O!l#xO!p$[O#R<SO#n<PO#o<QO#p<QO#q<QO#r<RO#s<SO#t<SO#u<^O#v<TO#x<VO#z<XO#{<YO(`VO(q$YO(x#|O(y#}O~O$O.vO~P#B]O#S$dO#`<`O$Q<`O$O(fX!^(fX~P! jOa'ca!]'ca'y'ca'v'ca!k'ca!Y'cav'ca!_'ca%i'ca!g'ca~P!:aO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'y#mi(q#mi'v#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(`VO(x#mi(y#mi~P#E_On=|O!Q)|O'x)}O(x$}O(y%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(`#mi~P#E_O!].zOg(oX~P!0{Og.|O~Oa$Pi!]$Pi'y$Pi'v$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:aO$].}O$_.}O~O$]/OO$_/OO~O!g)fO#`/PO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/QO~O!_)iO$Z/SO$])hO$_)hO$f/TO~O!]<ZO!^(eX~P#B]O!^/UO~O!g)fO$f(zX~O$f/WO~Ov/XO~P!&oOx)wO(a)xO(b/[O~O!S/_O~O(x$}On%aa!Q%aa'x%aa(y%aa!]%aa#`%aa~Og%aa$O%aa~P#LaO(y%POn%ca!Q%ca'x%ca(x%ca!]%ca#`%ca~Og%ca$O%ca~P#MSO!]fX!gfX!kfX!k$zX(qfX~P!/wO![/hO!]([O(S/gO!Y(uP!Y)OP~P!1jOr*pO!b*nO!c*hO!d*hO!l*_O#[*oO%`*jO(T!lO(UTO(XUO~Os<oO!S/iO![+XO!^*mO(d<nO!^(wP~P#NmO!k/jO~P#/XO!]/kO!g#vO(q'nO!k(}X~O!k/pO~O!S%gO![*[O!_%hO(S%fO!k(}P~O#k/rO~O!Y$zX!]$zX!g%RX~P!/wO!]/sO!Y)OX~P#/XO!g/uO~O!Y/wO~OpkO(S/xO~P.iOh%VOr/}O!g#vO!l%dO(q'nO~O!g+fO~Oa%mO!]0RO'y%mO~O!^0TO~P!5^O!c0UO!d0UO(T!lO~P##tOs!nO!S0VO(UTO(XUO(d!mO~O#[0XO~Og%aa!]%aa#`%aa$O%aa~P!0{Og%ca!]%ca#`%ca$O%ca~P!0{Oj%cOk%cOl%cO(S&XOg'lX!]'lX~O!]*vOg(]a~Og0bO~OR0cO!Q0cO!S0dO#S$dOn}a'x}a(x}a(y}a!]}a#`}a~Og}a$O}a~P$&vO!Q)|O'x)}On$sa(x$sa(y$sa!]$sa#`$sa~Og$sa$O$sa~P$'rO!Q)|O'x)}On$ua(x$ua(y$ua!]$ua#`$ua~Og$ua$O$ua~P$(eO#k0gO~Og%Ta!]%Ta#`%Ta$O%Ta~P!0{On0iO#`0hOg(^a!](^a~O!g#vO~O#k0lO~O!]+ZOa)Sa'y)Sa~OR#zO!Q#yO!S#{O!l#xO(`VOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(q!ri(x!ri(y!ri~Oa!ri'y!ri'v!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$*bOh%VOr%XOs$tOt$tOz%YO|%ZO!O<eO!S${O!_$|O!i=vO!l$xO#j<kO$W%_O$t<gO$v<iO$y%`O(UTO(XUO(`$uO(x$}O(y%PO~Op0uO%]0vO(S0tO~P$,xO!g+fOa([a!_([a'y([a!]([a~O#k0|O~O[]X!]fX!^fX~O!]0}O!^)WX~O!^1PO~O[1QO~Ob1SO(S+nO(UTO(XUO~O!_&OO(S%fO`'tX!]'tX~O!]+sO`)Va~O!k1VO~P!:aO[1YO~O`1ZO~O#`1^O~On1aO!_$|O~O(d(zO!^)TP~Oh%VOn1jO!_1gO%i1iO~O[1tO!]1rO!^)UX~O!^1uO~O`1wOa%mO'y%mO~O(S#nO(UTO(XUO~O#S$dO#`$eO$Q$eOP(fXR(fX[(fXr(fX!Q(fX!S(fX!](fX!l(fX!p(fX#R(fX#n(fX#o(fX#p(fX#q(fX#r(fX#s(fX#t(fX#u(fX#v(fX#x(fX#z(fX#{(fX(`(fX(q(fX(x(fX(y(fX~Oj1zO&Z1{Oa(fX~P$2cOj1zO#`$eO&Z1{O~Oa1}O~P%[Oa2PO~O&d2SOP&biQ&biS&biY&bia&bid&bie&bil&bip&bir&bis&bit&biz&bi|&bi!O&bi!S&bi!W&bi!X&bi!_&bi!i&bi!l&bi!o&bi!p&bi!q&bi!s&bi!u&bi!x&bi!|&bi$W&bi$n&bi%h&bi%j&bi%l&bi%m&bi%n&bi%q&bi%s&bi%v&bi%w&bi%y&bi&V&bi&]&bi&_&bi&a&bi&c&bi&f&bi&l&bi&r&bi&t&bi&v&bi&x&bi&z&bi'v&bi(S&bi(U&bi(X&bi(`&bi(n&bi!^&bib&bi&i&bi~Ob2YO!^2WO&i2XO~P`O!_XO!l2[O~O&p,vOP&kiQ&kiS&kiY&kia&kid&kie&kil&kip&kir&kis&kit&kiz&ki|&ki!O&ki!S&ki!W&ki!X&ki!_&ki!i&ki!l&ki!o&ki!p&ki!q&ki!s&ki!u&ki!x&ki!|&ki$W&ki$n&ki%h&ki%j&ki%l&ki%m&ki%n&ki%q&ki%s&ki%v&ki%w&ki%y&ki&V&ki&]&ki&_&ki&a&ki&c&ki&f&ki&l&ki&r&ki&t&ki&v&ki&x&ki&z&ki'v&ki(S&ki(U&ki(X&ki(`&ki(n&ki!^&ki&d&kib&ki&i&ki~O!Y2bO~O!]!aa!^!aa~P#B]Os!nO!S!oO![2hO(d!mO!]'WX!^'WX~P@cO!]-WO!^(ha~O!]'^X!^'^X~P!9iO!]-ZO!^(wa~O!^2oO~P'_Oa%mO#`2xO'y%mO~Oa%mO!g#vO#`2xO'y%mO~Oa%mO!g#vO!p2|O#`2xO'y%mO(q'nO~Oa%mO'y%mO~P!:aO!]$_Ov$qa~O!Y'Vi!]'Vi~P!:aO!](TO!Y(gi~O!]([O!Y(ui~O!Y(vi!](vi~P!:aO!](si!k(sia(si'y(si~P!:aO#`3OO!](si!k(sia(si'y(si~O!](hO!k(ri~O!S%gO!_%hO!|]O#i3TO#j3SO(S%fO~O!S%gO!_%hO#j3SO(S%fO~On3[O!_'^O%i3ZO~Oh%VOn3[O!_'^O%i3ZO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'y%aa(`%aa(q%aa!k%aa!Y%aa'v%aav%aa!_%aa%i%aa!g%aa~P#LaO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'y%ca(`%ca(q%ca!k%ca!Y%ca'v%cav%ca!_%ca%i%ca!g%ca~P#MSO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'y%aa(`%aa(q%aa!k%aa!Y%aa'v%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/XO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'y%ca(`%ca(q%ca!k%ca!Y%ca'v%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/XO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'y}a(`}a(q}a!k}a!Y}a'v}av}a!_}a%i}a!g}a~P$&vO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'y$sa(`$sa(q$sa!k$sa!Y$sa'v$sav$sa!_$sa%i$sa!g$sa~P$'rO#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'y$ua(`$ua(q$ua!k$ua!Y$ua'v$uav$ua!_$ua%i$ua!g$ua~P$(eO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'y%Ta(`%Ta(q%Ta!k%Ta!Y%Ta'v%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/XOa#cq!]#cq'y#cq'v#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:aO![3dO!]'XX!k'XX~P%[O!].oO!k(ja~O!].oO!k(ja~P!:aO!Y3gO~O$O!na!^!na~PKaO$O!ja!]!ja!^!ja~P#B]O$O!ra!^!ra~P!<wO$O!ta!^!ta~P!?_Og'[X!]'[X~P!+xO!].zOg(oa~OSfO!_3{O$d3|O~O!^4QO~Ov4RO~P#/XOa$mq!]$mq'y$mq'v$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:aO!Y4TO~P!&oO!S4UO~O!Q)|O'x)}O(y%POn'ha(x'ha!]'ha#`'ha~Og'ha$O'ha~P%,XO!Q)|O'x)}On'ja(x'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P%,zO(q$YO~P#/XO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!/wO(S<xO~P!1jO!S%gO![4XO!_%hO(S%fO!]'dX!k'dX~O!]/kO!k(}a~O!]/kO!g#vO!k(}a~O!]/kO!g#vO(q'nO!k(}a~Og$|i!]$|i#`$|i$O$|i~P!0{O![4aO!Y'fX!]'fX~P!3iO!]/sO!Y)Oa~O!]/sO!Y)Oa~P#/XOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(`]X(q]X(x]X(y]X~Oj%YX!g%YX~P%0kOj4fO!g#vO~Oh%VO!g#vO!l%dO~Oh%VOr4kO!l%dO(q'nO~Or4pO!g#vO(q'nO~Os!nO!S4qO(UTO(XUO(d!mO~O(x$}On%ai!Q%ai'x%ai(y%ai!]%ai#`%ai~Og%ai$O%ai~P%4[O(y%POn%ci!Q%ci'x%ci(x%ci!]%ci#`%ci~Og%ci$O%ci~P%4}Og(^i!](^i~P!0{O#`4wOg(^i!](^i~P!0{O!k4zO~Oa$oq!]$oq'y$oq'v$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:aO!Y5QO~O!]5RO!_)PX~P#/XOa$zX!_$zX%^]X'y$zX!]$zX~P!/wO%^5UOaoXnoX!QoX!_oX'xoX'yoX(xoX(yoX!]oX~Op5VO(S#nO~O%^5UO~Ob5]O%j5^O(S+nO(UTO(XUO!]'sX!^'sX~O!]0}O!^)Wa~O[5bO~O`5cO~Oa%mO'y%mO~P#/XO!]5kO#`5mO!^)TX~O!^5nO~Or5tOs!nO!S*fO!b!yO!c!vO!d!vO!|;wO#T!pO#U!pO#V!pO#W!pO#X!pO#[5sO#]!zO(T!lO(UTO(XUO(d!mO(n!sO~O!^5rO~P%:YOn5yO!_1gO%i5xO~Oh%VOn5yO!_1gO%i5xO~Ob6QO(S#nO(UTO(XUO!]'rX!^'rX~O!]1rO!^)Ua~O(UTO(XUO(d6SO~O`6WO~Oj6ZO&Z6[O~PM|O!k6]O~P%[Oa6_O~Oa6_O~P%[Ob2YO!^6dO&i2XO~P`O!g6fO~O!g6hOh(ii!](ii!^(ii!g(ii!l(iir(ii(q(ii~O!]#hi!^#hi~P#B]O#`6iO!]#hi!^#hi~O!]!ai!^!ai~P#B]Oa%mO#`6rO'y%mO~Oa%mO!g#vO#`6rO'y%mO~O!](sq!k(sqa(sq'y(sq~P!:aO!](hO!k(rq~O!S%gO!_%hO#j6yO(S%fO~O!_'^O%i6|O~On7QO!_'^O%i6|O~O#k'haP'haR'ha['haa'haj'har'ha!S'ha!l'ha!p'ha#R'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#t'ha#u'ha#v'ha#x'ha#z'ha#{'ha'y'ha(`'ha(q'ha!k'ha!Y'ha'v'hav'ha!_'ha%i'ha!g'ha~P%,XO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'y'ja(`'ja(q'ja!k'ja!Y'ja'v'jav'ja!_'ja%i'ja!g'ja~P%,zO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'y$|i(`$|i(q$|i!k$|i!Y$|i'v$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/XO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'y%ai(`%ai(q%ai!k%ai!Y%ai'v%aiv%ai!_%ai%i%ai!g%ai~P%4[O#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'y%ci(`%ci(q%ci!k%ci!Y%ci'v%civ%ci!_%ci%i%ci!g%ci~P%4}O!]'Xa!k'Xa~P!:aO!].oO!k(ji~O$O#ci!]#ci!^#ci~P#B]OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(`VO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(q#mi(x#mi(y#mi!]#mi!^#mi~O#n#mi~P%MXO#n<PO~P%MXOP$[OR#zOr<]O!Q#yO!S#{O!l#xO!p$[O#n<PO#o<QO#p<QO#q<QO(`VO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(q#mi(x#mi(y#mi!]#mi!^#mi~O#r#mi~P& aO#r<RO~P& aOP$[OR#zO[<_Oj<SOr<]O!Q#yO!S#{O!l#xO!p$[O#R<SO#n<PO#o<QO#p<QO#q<QO#r<RO#s<SO#t<SO#u<^O(`VO#x#mi#z#mi#{#mi$O#mi(q#mi(x#mi(y#mi!]#mi!^#mi~O#v#mi~P&#iOP$[OR#zO[<_Oj<SOr<]O!Q#yO!S#{O!l#xO!p$[O#R<SO#n<PO#o<QO#p<QO#q<QO#r<RO#s<SO#t<SO#u<^O#v<TO(`VO(y#}O#z#mi#{#mi$O#mi(q#mi(x#mi!]#mi!^#mi~O#x<VO~P&%jO#x#mi~P&%jO#v<TO~P&#iOP$[OR#zO[<_Oj<SOr<]O!Q#yO!S#{O!l#xO!p$[O#R<SO#n<PO#o<QO#p<QO#q<QO#r<RO#s<SO#t<SO#u<^O#v<TO#x<VO(`VO(x#|O(y#}O#{#mi$O#mi(q#mi!]#mi!^#mi~O#z#mi~P&'yO#z<XO~P&'yOa#|y!]#|y'y#|y'v#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:aO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(q#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<PO#o<QO#p<QO#q<QO(`VO(x#mi(y#mi~P&*uOn=}O!Q)|O'x)}O(x$}O(y%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(`#mi~P&*uO#S$dOP(_XR(_X[(_Xj(_Xn(_Xr(_X!Q(_X!S(_X!l(_X!p(_X#R(_X#n(_X#o(_X#p(_X#q(_X#r(_X#s(_X#t(_X#u(_X#v(_X#x(_X#z(_X#{(_X$O(_X'x(_X(`(_X(q(_X(x(_X(y(_X!](_X!^(_X~O$O$Pi!]$Pi!^$Pi~P#B]O$O!ri!^!ri~P$*bOg'[a!]'[a~P!0{O!^7dO~O!]'ca!^'ca~P#B]O!Y7eO~P#/XO!g#vO(q'nO!]'da!k'da~O!]/kO!k(}i~O!]/kO!g#vO!k(}i~Og$|q!]$|q#`$|q$O$|q~P!0{O!Y'fa!]'fa~P#/XO!g7lO~O!]/sO!Y)Oi~P#/XO!]/sO!Y)Oi~O!Y7oO~Oh%VOr7tO!l%dO(q'nO~Oj7vO!g#vO~Or7yO!g#vO(q'nO~O!Q)|O'x)}O(y%POn'ia(x'ia!]'ia#`'ia~Og'ia$O'ia~P&3vO!Q)|O'x)}On'ka(x'ka(y'ka!]'ka#`'ka~Og'ka$O'ka~P&4iO!Y7{O~Og%Oq!]%Oq#`%Oq$O%Oq~P!0{Og(^q!](^q~P!0{O#`7|Og(^q!](^q~P!0{Oa$oy!]$oy'y$oy'v$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:aO!g6hO~O!]5RO!_)Pa~O!_'^OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(`$Ta(q$Ta(x$Ta(y$Ta~O%i6|O~P&7ZO%^8QOa%[i!_%[i'y%[i!]%[i~Oa#cy!]#cy'y#cy'v#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:aO[8SO~Ob8UO(S+nO(UTO(XUO~O!]0}O!^)Wi~O`8YO~O(d(zO!]'oX!^'oX~O!]5kO!^)Ta~O!^8cO~P%:YO(n!sO~P$${O#[8dO~O!_1gO~O!_1gO%i8fO~On8iO!_1gO%i8fO~O[8nO!]'ra!^'ra~O!]1rO!^)Ui~O!k8rO~O!k8sO~O!k8vO~O!k8vO~P%[Oa8xO~O!g8yO~O!k8zO~O!](vi!^(vi~P#B]Oa%mO#`9SO'y%mO~O!](sy!k(sya(sy'y(sy~P!:aO!](hO!k(ry~O%i9VO~P&7ZO!_'^O%i9VO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'y$|q(`$|q(q$|q!k$|q!Y$|q'v$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/XO#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'y'ia(`'ia(q'ia!k'ia!Y'ia'v'iav'ia!_'ia%i'ia!g'ia~P&3vO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'y'ka(`'ka(q'ka!k'ka!Y'ka'v'kav'ka!_'ka%i'ka!g'ka~P&4iO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'y%Oq(`%Oq(q%Oq!k%Oq!Y%Oq'v%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/XO!]'Xi!k'Xi~P!:aO$O#cq!]#cq!^#cq~P#B]O(x$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(`%aa(q%aa!]%aa!^%aa~On%aa!Q%aa'x%aa(y%aa~P&HnO(y%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(`%ca(q%ca!]%ca!^%ca~On%ca!Q%ca'x%ca(x%ca~P&JuOn=}O!Q)|O'x)}O(y%PO~P&HnOn=}O!Q)|O'x)}O(x$}O~P&JuOR0cO!Q0cO!S0dO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'x}a(`}a(q}a(x}a(y}a!]}a!^}a~O!Q)|O'x)}OP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(`$sa(q$sa(x$sa(y$sa!]$sa!^$sa~O!Q)|O'x)}OP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(`$ua(q$ua(x$ua(y$ua!]$ua!^$ua~On=}O!Q)|O'x)}O(x$}O(y%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(`%Ta(q%Ta!]%Ta!^%Ta~P'%zO$O$mq!]$mq!^$mq~P#B]O$O$oq!]$oq!^$oq~P#B]O!^9dO~O$O9eO~P!0{O!g#vO!]'di!k'di~O!g#vO(q'nO!]'di!k'di~O!]/kO!k(}q~O!Y'fi!]'fi~P#/XO!]/sO!Y)Oq~Or9lO!g#vO(q'nO~O[9nO!Y9mO~P#/XO!Y9mO~Oj9tO!g#vO~Og(^y!](^y~P!0{O!]'ma!_'ma~P#/XOa%[q!_%[q'y%[q!]%[q~P#/XO[9yO~O!]0}O!^)Wq~O#`9}O!]'oa!^'oa~O!]5kO!^)Ti~P#B]O!S:PO~O!_1gO%i:SO~O(UTO(XUO(d:XO~O!]1rO!^)Uq~O!k:[O~O!k:]O~O!k:^O~O!k:^O~P%[O#`:aO!]#hy!^#hy~O!]#hy!^#hy~P#B]O%i:fO~P&7ZO!_'^O%i:fO~O$O#|y!]#|y!^#|y~P#B]OP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(`$|i(q$|i!]$|i!^$|i~P'%zO!Q)|O'x)}O(y%POP'haR'ha['haj'han'har'ha!S'ha!l'ha!p'ha#R'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#t'ha#u'ha#v'ha#x'ha#z'ha#{'ha$O'ha(`'ha(q'ha(x'ha!]'ha!^'ha~O!Q)|O'x)}OP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(`'ja(q'ja(x'ja(y'ja!]'ja!^'ja~O(x$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'x%ai(`%ai(q%ai(y%ai!]%ai!^%ai~O(y%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'x%ci(`%ci(q%ci(x%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#B]O$O#cy!]#cy!^#cy~P#B]O!g#vO!]'dq!k'dq~O!]/kO!k(}y~O!Y'fq!]'fq~P#/XOr:pO!g#vO(q'nO~O[:tO!Y:sO~P#/XO!Y:sO~Og(^!R!](^!R~P!0{Oa%[y!_%[y'y%[y!]%[y~P#/XO!]0}O!^)Wy~O!]5kO!^)Tq~O(S:zO~O!_1gO%i:}O~O!k;QO~O%i;VO~P&7ZOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(`$|q(q$|q!]$|q!^$|q~P'%zO!Q)|O'x)}O(y%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(`'ia(q'ia(x'ia!]'ia!^'ia~O!Q)|O'x)}OP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(`'ka(q'ka(x'ka(y'ka!]'ka!^'ka~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(`%Oq(q%Oq!]%Oq!^%Oq~P'%zOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!0{O!Y;ZO~P#/XOr;[O!g#vO(q'nO~O[;^O!Y;ZO~P#/XO!]'oq!^'oq~P#B]O!]#h!Z!^#h!Z~P#B]O#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'y%e!Z(`%e!Z(q%e!Z!k%e!Z!Y%e!Z'v%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/XOr;fO!g#vO(q'nO~O!Y;gO~P#/XOr;nO!g#vO(q'nO~O!Y;oO~P#/XOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(`%e!Z(q%e!Z!]%e!Z!^%e!Z~P'%zOr;rO!g#vO(q'nO~Ov(eX~P1qO!Q%qO~P!)PO(T!lO~P!)PO!YfX!]fX#`fX~P%0kOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(`]X(q]X(x]X(y]X~O!gfX!k]X!kfX(qfX~P'JsOP;vOQ;vOSfOd=rOe!iOpkOr;vOskOtkOzkO|;vO!O;vO!SWO!WkO!XkO!_XO!i;yO!lZO!o;vO!p;vO!q;vO!s;zO!u;}O!x!hO$W!kO$n=pO(S)ZO(UTO(XUO(`VO(n[O~O!]<ZO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<fO!S${O!_$|O!i=wO!l$xO#j<lO$W%_O$t<hO$v<jO$y%`O(S(tO(UTO(XUO(`$uO(x$}O(y%PO~Ol)bO~P( iOr!eX(q!eX~P# }Or(iX(q(iX~P#!pO!^]X!^fX~P'JsO!YfX!Y$zX!]fX!]$zX#`fX~P!/wO#k<OO~O!g#vO#k<OO~O#`<`O~Oj<SO~O#`<pO!](vX!^(vX~O#`<`O!](tX!^(tX~O#k<qO~Og<sO~P!0{O#k<yO~O#k<zO~O!g#vO#k<{O~O!g#vO#k<qO~O$O<|O~P#B]O#k<}O~O#k=OO~O#k=TO~O#k=UO~O#k=VO~O#k=WO~O$O=XO~P!0{O$O=YO~P!0{Ok#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~'}T#o!X'{(T#ps#n#qr!Q'|$]'|(S$_(d~",
  goto: "$8g)[PPPPPP)]PP)`P)qP+R/WPPPP6bPP6xPP<pPPP@dP@zP@zPPP@zPCSP@zP@zP@zPCWPC]PCzPHtPPPHxPPPPHxK{PPPLRLsPHxPHxPP! RHxPPPHxPHxP!#YHxP!&p!'u!(OP!(r!(v!(r!,TPPPPPPP!,t!'uPP!-U!.vP!2SHxHx!2X!5e!:R!:R!>QPPP!>YHxPPPPPPPPP!AiP!BvPPHx!DXPHxPHxHxHxHxHxPHx!EkP!HuP!K{P!LP!LZ!L_!L_P!HrP!Lc!LcP# iP# mHxPHx# s#$xCW@zP@zP@z@zP#&V@z@z#(i@z#+a@z#-m@z@z#.]#0q#0q#0v#1P#0q#1[PP#0qP@z#1t@z#5s@z@z6bPPP#9xPPP#:c#:cP#:cP#:y#:cPP#;PP#:vP#:v#;d#:v#<O#<U#<X)`#<[)`P#<c#<c#<cP)`P)`P)`P)`PP)`P#<i#<lP#<l)`P#<pP#<sP)`P)`P)`P)`P)`P)`)`PP#<y#=P#=[#=b#=h#=n#=t#>S#>Y#>d#>j#>t#>z#?[#?b#@S#@f#@l#@r#AQ#Ag#C[#Cj#Cq#E]#Ek#G]#Gk#Gq#Gw#G}#HX#H_#He#Ho#IR#IXPPPPPPPPPPP#I_PPPPPPP#JS#MZ#Ns#Nz$ SPPP$&nP$&w$)p$0Z$0^$0a$1`$1c$1j$1rP$1x$1{P$2i$2m$3e$4s$4x$5`PP$5e$5k$5o$5r$5v$5z$6v$7_$7v$7z$7}$8Q$8W$8Z$8_$8cR!|RoqOXst!Z#d%l&p&r&s&u,n,s2S2VY!vQ'^-`1g5qQ%svQ%{yQ&S|Q&h!VS'U!e-WQ'd!iS'j!r!yU*h$|*X*lQ+l%|Q+y&UQ,_&bQ-^']Q-h'eQ-p'kQ0U*nQ1q,`R<m;z%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y,k,n,s-d-l-z.Q.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3d4q5y6Z6[6_6r8i8x9SS#q];w!r)]$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sU*{%[<e<fQ+q&OQ,a&eQ,h&mQ0r+dQ0w+fQ1S+rQ1y,fQ3W.bQ5V0vQ5]0}Q6Q1rQ7O3[Q8U5^R9Y7Q'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s!S!nQ!r!v!y!z$|'U']'^'j'k'l*h*l*n*o-W-^-`-p0U0X1g5q5s%[$ti#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}Q&V|Q'S!eS'Y%h-ZQ+q&OQ,a&eQ0f+OQ1S+rQ1X+xQ1x,eQ1y,fQ5]0}Q5f1ZQ6Q1rQ6T1tQ6U1wQ8U5^Q8X5cQ8q6WQ9|8YQ:Y8nR<o*XrnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VR,c&i&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=r=s[#]WZ#W#Z'V(R!b%im#h#i#l$x%d%g([(f(g(h*W*[*_+W+X+Z,j-Q.O.U.V.W.Y/h/k2[3S3T4X6h6yQ%vxQ%zyS&P|&UQ&]!TQ'a!hQ'c!iQ(o#sS+k%{%|Q+o&OQ,Y&`Q,^&bS-g'd'eQ.d(pQ0{+lQ1R+rQ1T+sQ1W+wQ1l,ZS1p,_,`Q2t-hQ5[0}Q5`1QQ5e1YQ6P1qQ8T5^Q8W5bQ9x8SR:w9y!U$zi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y!^%xy!i!u%z%{%|'T'c'd'e'i's*g+k+l-T-g-h-o/{0O0{2m2t2{4i4j4m7s9pQ+e%vQ,O&YQ,R&ZQ,]&bQ.c(oQ1k,YU1o,^,_,`Q3].dQ5z1lS6O1p1qQ8m6P#f=t#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}o=u<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YW%Ti%V*v=pS&Y!Q&gQ&Z!RQ&[!SQ+S%cR+|&W%]%Si#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}T)x$u)yV*{%[<e<fW'Y!e%h*X-ZS({#y#zQ+`%qQ+v&RS.](k(lQ1b,SQ4x0cR8^5k'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s$i$^c#Y#e%p%r%t(Q(W(r(w)P)Q)R)S)T)U)V)W)X)Y)[)^)`)e)o+a+u-U-s-x-}.P.n.q.u.w.x.y/]0j2c2f2v2}3c3h3i3j3k3l3m3n3o3p3q3r3s3t3w3x4P5O5Y6k6q6v7V7W7a7b8`8|9Q9[9b9c:c:y;R;x=gT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ'W!eR2i-W!W!nQ!e!r!v!y!z$|'U']'^'j'k'l*X*h*l*n*o-W-^-`-p0U0X1g5q5sR1d,UnqOXst!Z#d%l&p&r&s&u,n,s2S2VQ&w!^Q't!xS(q#u<OQ+i%yQ,W&]Q,X&_Q-e'bQ-r'mS.m(v<qS0k+U<{Q0y+jQ1f,VQ2Z,uQ2],vQ2e-RQ2r-fQ2u-jS5P0l=VQ5W0zS5Z0|=WQ6j2gQ6n2sQ6s2zQ8R5XQ8}6lQ9O6oQ9R6tR:`8z$d$]c#Y#e%r%t(Q(W(r(w)P)Q)R)S)T)U)V)W)X)Y)[)^)`)e)o+a+u-U-s-x-}.P.n.q.u.x.y/]0j2c2f2v2}3c3h3i3j3k3l3m3n3o3p3q3r3s3t3w3x4P5O5Y6k6q6v7V7W7a7b8`8|9Q9[9b9c:c:y;R;x=gS(m#p'gQ(}#zS+_%p.wS.^(l(nR3U._'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sS#q];wQ&r!XQ&s!YQ&u![Q&v!]R2R,qQ'_!hQ+b%vQ-c'aS.`(o+eQ2p-bW3Y.c.d0q0sQ6m2qW6z3V3X3]5TU9U6{6}7PU:e9W9X9ZS;T:d:gQ;b;UR;j;cU!wQ'^-`T5o1g5q!Q_OXZ`st!V!Z#d#h%d%l&g&i&p&r&s&u(h,n,s.V2S2V]!pQ!r'^-`1g5qT#q];w%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SS({#y#zS.](k(l!s=^$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sU$fd)],hS(n#p'gU*s%R(u3vU0e*z.i7]Q5T0rQ6{3WQ9X7OR:g9Ym!tQ!r!v!y!z'^'j'k'l-`-p1g5q5sQ'r!uS(d#g1|S-n'i'uQ/n*ZQ/{*gQ2|-qQ4]/oQ4i/}Q4j0OQ4o0WQ7h4WS7s4k4mS7w4p4rQ9g7iQ9k7oQ9p7tQ9u7yS:o9l9mS;Y:p:sS;e;Z;[S;m;f;gS;q;n;oR;t;rQ#wbQ'q!uS(c#g1|S(e#m+TQ+V%eQ+g%wQ+m%}U-m'i'r'uQ.R(dQ/m*ZQ/|*gQ0P*iQ0x+hQ1m,[S2y-n-qQ3R.ZS4[/n/oQ4e/yS4h/{0WQ4l0QQ5|1nQ6u2|Q7g4WQ7k4]U7r4i4o4rQ7u4nQ8k5}S9f7h7iQ9j7oQ9r7wQ9s7xQ:V8lQ:m9gS:n9k9mQ:v9uQ;P:WS;X:o:sS;d;Y;ZS;l;e;gS;p;m;oQ;s;qQ;u;tQ=a=[Q=l=eR=m=fV!wQ'^-`%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SS#wz!j!r=Z$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sR=a=r%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SQ%ej!^%wy!i!u%z%{%|'T'c'd'e'i's*g+k+l-T-g-h-o/{0O0{2m2t2{4i4j4m7s9pS%}z!jQ+h%xQ,[&bW1n,],^,_,`U5}1o1p1qS8l6O6PQ:W8m!r=[$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ=e=qR=f=r%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SY#bWZ#W#Z(R!b%im#h#i#l$x%d%g([(f(g(h*W*[*_+W+X+Z,j-Q.O.U.V.W.Y/h/k2[3S3T4X6h6yQ,i&m!p=]$Z$n)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sR=`'VU'Z!e%h*XR2k-Z%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y,k,n,s-d-l-z.Q.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3d4q5y6Z6[6_6r8i8x9S!r)]$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ,h&mQ0r+dQ3W.bQ7O3[R9Y7Q!b$Tc#Y%p(Q(W(r(w)X)Y)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;x!P<U)[)o-U.w2c2f3h3q3r3w4P6k7W7a7b8`8|9[9b9c:y;R=g!f$Vc#Y%p(Q(W(r(w)U)V)X)Y)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;x!T<W)[)o-U.w2c2f3h3n3o3q3r3w4P6k7W7a7b8`8|9[9b9c:y;R=g!^$Zc#Y%p(Q(W(r(w)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;xQ4V/fz=s)[)o-U.w2c2f3h3w4P6k7W7a7b8`8|9[9b9c:y;R=gQ=x=zR=y={'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sS$oh$pR3|/P'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/P/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sT$kf$qQ$ifS)h$l)lR)t$qT$jf$qT)j$l)l'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/P/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sT$oh$pQ$rhR)s$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9S!s=q$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s#glOPXZst!Z!`!o#S#d#o#{$n%l&i&l&m&p&r&s&u&y'R'`(|)q*f+Y+d,k,n,s-d.b/Q/i0V0d1j1z1{1}2P2S2V2X3[3{4q5y6Z6[6_7Q8i8x!U%Ri$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y#f(u#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}Q+P%`Q/^)|o3v<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!U$yi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=yQ*`$zU*i$|*X*lQ+Q%aQ0Q*j#f=c#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n=d<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YQ=h=tQ=i=uQ=j=vR=k=w!U%Ri$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y#f(u#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}o3v<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YnoOXst!Z#d%l&p&r&s&u,n,s2S2VS*c${*WQ,|&|Q,}'OR4`/s%[%Si#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}Q,P&ZQ1`,RQ5i1_R8]5jV*k$|*X*lU*k$|*X*lT5p1g5qS/y*f/iQ4n0VT7x4q:PQ+g%wQ0P*iQ0x+hQ1m,[Q5|1nQ8k5}Q:V8lR;P:W!U%Oi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=yx*P$v)c*Q*r+R/q0^0_3y4^4{4|4}7f7z9v:l=b=n=oS0Y*q0Z#f<a#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n<b<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!d<t(s)a*Y*b.e.h.l/Y/f/v0p1]3`4S4_4c5h7R7U7m7p7}8P9i9q9w:q:u;W;];h=z={`<u3u7X7[7`9]:h:k;kS=P.g3aT=Q7Z9`!U%Qi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y|*R$v)c*S*q+R/b/q0^0_3y4^4s4{4|4}7f7z9v:l=b=n=oS0[*r0]#f<c#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n<d<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!h<v(s)a*Y*b.f.g.l/Y/f/v0p1]3^3`4S4_4c5h7R7S7U7m7p7}8P9i9q9w:q:u;W;];h=z={d<w3u7Y7Z7`9]9^:h:i:k;kS=R.h3bT=S7[9arnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VQ&d!UR,k&mrnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VR&d!UQ,T&[R1[+|snOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VQ1h,YS5w1k1lU8e5u5v5zS:R8g8hS:{:Q:TQ;_:|R;i;`Q&k!VR,d&gR6T1tR:Y8nS&P|&UR1T+sQ&p!WR,n&qR,t&vT2T,s2VR,x&wQ,w&wR2^,xQ'w!{R-t'wSsOtQ#dXT%os#dQ#OTR'y#OQ#RUR'{#RQ)y$uR/Z)yQ#UVR(O#UQ#XWU(U#X(V-{Q(V#YR-{(WQ-X'WR2j-XQ.p(wS3e.p3fR3f.qQ-`'^R2n-`Y!rQ'^-`1g5qR'h!rQ.{)cR3z.{U#_W%g*WU(]#_(^-|Q(^#`R-|(XQ-['ZR2l-[t`OXst!V!Z#d%l&g&i&p&r&s&u,n,s2S2VS#hZ%dU#r`#h.VR.V(hQ(i#jQ.S(eW.[(i.S3P6wQ3P.TR6w3QQ)l$lR/R)lQ$phR)r$pQ$`cU)_$`-w<[Q-w;xR<[)oQ/l*ZW4Y/l4Z7j9hU4Z/m/n/oS7j4[4]R9h7k$e*O$v(s)a)c*Y*b*q*r*|*}+R.g.h.j.k.l/Y/b/d/f/q/v0^0_0p1]3^3_3`3u3y4S4^4_4c4s4u4{4|4}5h7R7S7T7U7Z7[7^7_7`7f7m7p7z7}8P9]9^9_9i9q9v9w:h:i:j:k:l:q:u;W;];h;k=b=n=o=z={Q/t*bU4b/t4d7nQ4d/vR7n4cS*l$|*XR0S*lx*Q$v)c*q*r+R/q0^0_3y4^4{4|4}7f7z9v:l=b=n=o!d.e(s)a*Y*b.g.h.l/Y/f/v0p1]3`4S4_4c5h7R7U7m7p7}8P9i9q9w:q:u;W;];h=z={U/c*Q.e7Xa7X3u7Z7[7`9]:h:k;kQ0Z*qQ3a.gU4t0Z3a9`R9`7Z|*S$v)c*q*r+R/b/q0^0_3y4^4s4{4|4}7f7z9v:l=b=n=o!h.f(s)a*Y*b.g.h.l/Y/f/v0p1]3^3`4S4_4c5h7R7S7U7m7p7}8P9i9q9w:q:u;W;];h=z={U/e*S.f7Ye7Y3u7Z7[7`9]9^:h:i:k;kQ0]*rQ3b.hU4v0]3b9aR9a7[Q*w%UR0a*wQ5S0pR8O5SQ+[%jR0o+[Q5l1bS8_5l:OR:O8`Q,V&]R1e,VQ5q1gR8b5qQ1s,aS6R1s8oR8o6TQ1O+oW5_1O5a8V9zQ5a1RQ8V5`R9z8WQ+t&PR1U+tQ2V,sR6c2VYrOXst#dQ&t!ZQ+^%lQ,m&pQ,o&rQ,p&sQ,r&uQ2Q,nS2T,s2VR6b2SQ%npQ&x!_Q&{!aQ&}!bQ'P!cQ'o!uQ+]%kQ+i%yQ+{&VQ,c&kQ,z&zW-k'i'q'r'uQ-r'mQ0R*kQ0y+jS1v,d,gQ2_,yQ2`,|Q2a,}Q2u-jW2w-m-n-q-sQ5W0zQ5d1XQ5g1]Q5{1mQ6V1xQ6a2RU6p2v2y2|Q6s2zQ8R5XQ8Z5fQ8[5hQ8a5pQ8j5|Q8p6US9P6q6uQ9R6tQ9{8XQ:U8kQ:Z8qQ:b9QQ:x9|Q;O:VQ;S:cR;a;PQ%yyQ'b!iQ'm!uU+j%z%{%|Q-R'TU-f'c'd'eS-j'i'sQ/z*gS0z+k+lQ2g-TS2s-g-hQ2z-oS4g/{0OQ5X0{Q6l2mQ6o2tQ6t2{U7q4i4j4mQ9o7sR:r9pS$wi=pR*x%VU%Ui%V=pR0`*vQ$viS(s#v+fS)a$b$cQ)c$dQ*Y$xS*b${*WQ*q%OQ*r%QQ*|%]Q*}%^Q+R%bQ.g<aQ.h<cQ.j<gQ.k<iQ.l<kQ/Y)wQ/b*PQ/d*RQ/f*TQ/q*^S/v*d/hQ0^*tQ0_*ul0p+c,Q.a1a1i3Z5x6|8f9V:S:f:};VQ1]+}Q3^<tQ3_<vQ3`<yS3u<^<_Q3y.zS4S/_4UQ4^/rQ4_/sQ4c/uQ4s0YQ4u0[Q4{0gQ4|0hQ4}0iQ5h1^Q7R<}Q7S=PQ7T=RQ7U=TQ7Z<bQ7[<dQ7^<hQ7_<jQ7`<lQ7f4VQ7m4aQ7p4fQ7z4wQ7}5RQ8P5UQ9]<zQ9^<uQ9_<wQ9i7lQ9q7vQ9v7|Q9w8QQ:h=OQ:i=QQ:j=SQ:k=UQ:l9eQ:q9nQ:u9tQ;W=XQ;]:tQ;h;^Q;k=YQ=b=pQ=n=xQ=o=yQ=z=|R={=}Q*z%[Q.i<eR7]<fnpOXst!Z#d%l&p&r&s&u,n,s2S2VQ!fPS#fZ#oQ&z!`W'f!o*f0V4qQ'}#SQ)O#{Q)p$nS,g&i&lQ,l&mQ,y&yS-O'R/iQ-b'`Q.s(|Q/V)qQ0m+YQ0s+dQ2O,kQ2q-dQ3X.bQ4O/QQ4y0dQ5v1jQ6X1zQ6Y1{Q6^1}Q6`2PQ6e2XQ7P3[Q7c3{Q8h5yQ8t6ZQ8u6[Q8w6_Q9Z7QQ:T8iR:_8x#[cOPXZst!Z!`!o#d#o#{%l&i&l&m&p&r&s&u&y'R'`(|*f+Y+d,k,n,s-d.b/i0V0d1j1z1{1}2P2S2V2X3[4q5y6Z6[6_7Q8i8xQ#YWQ#eYQ%puQ%rvS%tw!gS(Q#W(TQ(W#ZQ(r#uQ(w#xQ)P$OQ)Q$PQ)R$QQ)S$RQ)T$SQ)U$TQ)V$UQ)W$VQ)X$WQ)Y$XQ)[$ZQ)^$_Q)`$aQ)e$eW)o$n)q/Q3{Q+a%sQ+u&QS-U'V2hQ-s'pS-x(R-zQ-}(ZQ.P(bQ.n(vQ.q(xQ.u;vQ.w;yQ.x;zQ.y;}Q/]){Q0j+UQ2c-PQ2f-SQ2v-lQ2}.QQ3c.oQ3h<OQ3i<PQ3j<QQ3k<RQ3l<SQ3m<TQ3n<UQ3o<VQ3p<WQ3q<XQ3r<YQ3s.vQ3t<]Q3w<`Q3x<mQ4P<ZQ5O0lQ5Y0|Q6k<pQ6q2xQ6v3OQ7V3dQ7W<qQ7a<sQ7b<{Q8`5mQ8|6iQ9Q6rQ9[<|Q9b=VQ9c=WQ:c9SQ:y9}Q;R:aQ;x#SR=g=sR#[WR'X!el!tQ!r!v!y!z'^'j'k'l-`-p1g5q5sS'T!e-WU*g$|*X*lS-T'U']S0O*h*nQ0W*oQ2m-^Q4m0UR4r0XR(y#xQ!fQT-_'^-`]!qQ!r'^-`1g5qQ#p]R'g;wR)d$dY!uQ'^-`1g5qQ'i!rS's!v!yS'u!z5sS-o'j'kQ-q'lR2{-pT#kZ%dS#jZ%dS%jm,jU(e#h#i#lS.T(f(gQ.X(hQ0n+ZQ3Q.UU3R.V.W.YS6x3S3TR9T6yd#^W#W#Z%g(R([*W+W.O/hr#gZm#h#i#l%d(f(g(h+Z.U.V.W.Y3S3T6yS*Z$x*_Q/o*[Q1|,jQ2d-QQ4W/kQ6g2[Q7i4XQ8{6hT=_'V+XV#aW%g*WU#`W%g*WS(S#W([U(X#Z+W/hS-V'V+XT-y(R.OV'[!e%h*XQ$lfR)v$qT)k$l)lR3}/PT*]$x*_T*e${*WQ0q+cQ1_,QQ3V.aQ5j1aQ5u1iQ6}3ZQ8g5xQ9W6|Q:Q8fQ:d9VQ:|:SQ;U:fQ;`:}R;c;VnqOXst!Z#d%l&p&r&s&u,n,s2S2VQ&j!VR,c&gtmOXst!U!V!Z#d%l&g&p&r&s&u,n,s2S2VR,j&mT%km,jR1c,SR,b&eQ&T|R+z&UR+p&OT&n!W&qT&o!W&qT2U,s2V",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 379,
  context: rb,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
    ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 236, 242, 244, 246, 248, 251, 257, 263, 265, 267, 269, 271, 273, 274, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
    ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
  ],
  propSources: [cb],
  skippedNodes: [0, 5, 6, 277],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(VpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(VpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Vp(Y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Vp(Y!b'{0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(W#S$i&j'|0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Vp(Y!b'|0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(U':f$i&j(Y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Y!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Vp(Y!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Vp(Y!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Y!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Y!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(VpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(VpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Vp(Y!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(n%1l(Vp(Y!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Vp(Y!b$]#t(S,2j(d$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Vp(Y!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Vp(Y!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(y+JY$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(X';W$i&j(VpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(VpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(VpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(VpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(VpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Vp(Y!b(T%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Vp(Y!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Vp(Y!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Vp(Y!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Vp(Y!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Vp(Y!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Y!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Y!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Y!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Y!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Y!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Y!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Vp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Vp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Vp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Vp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(VpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(VpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Vp(Y!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Vp(Y!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Vp(Y!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Vp(Y!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Vp(Y!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Vp(Y!b'}0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Vp(Y!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Y!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Y!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(VpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(VpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Vp(Y!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Vp(Y!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Vp(Y!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Vp(Y!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Vp(Y!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Vp(Y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Vp(Y!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Vp(Y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Vp(Y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(q(Ct$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Vp(Y!b(`+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Vp(Y!b(S,2j$_#t(d$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Vp(Y!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Vp(Y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(x+JY$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Vp(Y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Vp(Y!b'{0/l$]#t(S,2j(d$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Vp(Y!b'|0/l$]#t(S,2j(d$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [lb, ob, ab, hb, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, sb, new wr("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(b~~", 141, 339), new wr("j~RQYZXz{^~^O(P~~aP!P!Qd~iO(Q~~", 25, 322)],
  topRules: { Script: [0, 7], SingleExpression: [1, 275], SingleClassItem: [2, 276] },
  dialects: { jsx: 0, ts: 15098 },
  dynamicPrecedences: { 80: 1, 82: 1, 94: 1, 169: 1, 199: 1 },
  specialized: [{ term: 326, get: (n) => ub[n] || -1 }, { term: 342, get: (n) => fb[n] || -1 }, { term: 95, get: (n) => db[n] || -1 }],
  tokenPrec: 15124
}), _f = [
  /* @__PURE__ */ be("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ be("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ be("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ be("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ be("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ be(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ be("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ be(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ be(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ be('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ be('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], pb = /* @__PURE__ */ _f.concat([
  /* @__PURE__ */ be("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ be("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ be("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), ph = /* @__PURE__ */ new fu(), Lf = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Ci(n) {
  return (e, t) => {
    let i = e.node.getChild("VariableDefinition");
    return i && t(i, n), !0;
  };
}
const mb = ["FunctionDeclaration"], gb = {
  FunctionDeclaration: /* @__PURE__ */ Ci("function"),
  ClassDeclaration: /* @__PURE__ */ Ci("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Ci("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Ci("type"),
  NamespaceDeclaration: /* @__PURE__ */ Ci("namespace"),
  VariableDefinition(n, e) {
    n.matchContext(mb) || e(n, "variable");
  },
  TypeDefinition(n, e) {
    e(n, "type");
  },
  __proto__: null
};
function Bf(n, e) {
  let t = ph.get(e);
  if (t)
    return t;
  let i = [], r = !0;
  function s(l, o) {
    let a = n.sliceString(l.from, l.to);
    i.push({ label: a, type: o });
  }
  return e.cursor(N.IncludeAnonymous).iterate((l) => {
    if (r)
      r = !1;
    else if (l.name) {
      let o = gb[l.name];
      if (o && o(l, s) || Lf.has(l.name))
        return !1;
    } else if (l.to - l.from > 8192) {
      for (let o of Bf(n, l.node))
        i.push(o);
      return !1;
    }
  }), ph.set(e, i), i;
}
const mh = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, jf = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName",
  "JSXText",
  "JSXAttributeValue",
  "JSXOpenTag",
  "JSXCloseTag",
  "JSXSelfClosingTag",
  ".",
  "?."
];
function yb(n) {
  let e = J(n.state).resolveInner(n.pos, -1);
  if (jf.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && mh.test(n.state.sliceDoc(e.from, e.to));
  if (!t && !n.explicit)
    return null;
  let i = [];
  for (let r = e; r; r = r.parent)
    Lf.has(r.name) && (i = i.concat(Bf(n.state.doc, r)));
  return {
    options: i,
    from: t ? e.from : n.pos,
    validFor: mh
  };
}
const Xe = /* @__PURE__ */ ci.define({
  name: "javascript",
  parser: /* @__PURE__ */ Ob.configure({
    props: [
      /* @__PURE__ */ Vr.add({
        IfStatement: /* @__PURE__ */ Fn({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Fn({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: ig,
        SwitchBody: (n) => {
          let e = n.textAfter, t = /^\s*\}/.test(e), i = /^\s*(case|default)\b/.test(e);
          return n.baseIndent + (t ? 0 : i ? 1 : 2) * n.unit;
        },
        Block: /* @__PURE__ */ tg({ closing: "}" }),
        ArrowFunction: (n) => n.baseIndent + n.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Fn({ except: /^\s*{/ }),
        JSXElement(n) {
          let e = /^\s*<\//.test(n.textAfter);
          return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
        },
        JSXEscape(n) {
          let e = /\s*\}/.test(n.textAfter);
          return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(n) {
          return n.column(n.node.from) + n.unit;
        }
      }),
      /* @__PURE__ */ Yr.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": bu,
        BlockComment(n) {
          return { from: n.from + 2, to: n.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), Wf = {
  test: (n) => /^JSX/.test(n.name),
  facet: /* @__PURE__ */ mu({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, Gf = /* @__PURE__ */ Xe.configure({ dialect: "ts" }, "typescript"), If = /* @__PURE__ */ Xe.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ Bl.add((n) => n.isTop ? [Wf] : void 0)]
}), Nf = /* @__PURE__ */ Xe.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ Bl.add((n) => n.isTop ? [Wf] : void 0)]
}, "typescript");
let Uf = (n) => ({ label: n, type: "keyword" });
const Ff = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Uf), Qb = /* @__PURE__ */ Ff.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(Uf));
function bb(n = {}) {
  let e = n.jsx ? n.typescript ? Nf : If : n.typescript ? Gf : Xe, t = n.typescript ? pb.concat(Qb) : _f.concat(Ff);
  return new jl(e, [
    Xe.data.of({
      autocomplete: by(jf, kf(t))
    }),
    Xe.data.of({
      autocomplete: yb
    }),
    n.jsx ? kb : []
  ]);
}
function xb(n) {
  for (; ; ) {
    if (n.name == "JSXOpenTag" || n.name == "JSXSelfClosingTag" || n.name == "JSXFragmentTag")
      return n;
    if (n.name == "JSXEscape" || !n.parent)
      return null;
    n = n.parent;
  }
}
function gh(n, e, t = n.length) {
  for (let i = e == null ? void 0 : e.firstChild; i; i = i.nextSibling)
    if (i.name == "JSXIdentifier" || i.name == "JSXBuiltin" || i.name == "JSXNamespacedName" || i.name == "JSXMemberExpression")
      return n.sliceString(i.from, Math.min(i.to, t));
  return "";
}
const Sb = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), kb = /* @__PURE__ */ $.inputHandler.of((n, e, t, i, r) => {
  if ((Sb ? n.composing : n.compositionStarted) || n.state.readOnly || e != t || i != ">" && i != "/" || !Xe.isActiveAt(n.state, e, -1))
    return !1;
  let s = r(), { state: l } = s, o = l.changeByRange((a) => {
    var h;
    let { head: c } = a, u = J(l).resolveInner(c - 1, -1), f;
    if (u.name == "JSXStartTag" && (u = u.parent), !(l.doc.sliceString(c - 1, c) != i || u.name == "JSXAttributeValue" && u.to > c)) {
      if (i == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: c, insert: "</>" } };
      if (i == "/" && u.name == "JSXStartCloseTag") {
        let d = u.parent, O = d.parent;
        if (O && d.from == c - 2 && ((f = gh(l.doc, O.firstChild, c)) || ((h = O.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let m = `${f}>`;
          return { range: Q.cursor(c + m.length, -1), changes: { from: c, insert: m } };
        }
      } else if (i == ">") {
        let d = xb(u);
        if (d && d.name == "JSXOpenTag" && !/^\/?>|^<\//.test(l.doc.sliceString(c, c + 2)) && (f = gh(l.doc, d, c)))
          return { range: a, changes: { from: c, insert: `</${f}>` } };
      }
    }
    return { range: a };
  });
  return o.changes.empty ? !1 : (n.dispatch([
    s,
    l.update(o, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), vb = 54, wb = 1, Pb = 55, $b = 2, Cb = 56, Tb = 3, yh = 4, Ab = 5, Pr = 6, Hf = 7, Kf = 8, Jf = 9, ed = 10, Rb = 11, Xb = 12, Zb = 13, ys = 57, Mb = 14, Qh = 58, td = 20, qb = 22, id = 23, zb = 24, xl = 26, nd = 27, Vb = 28, Yb = 31, Eb = 34, Db = 36, _b = 37, Lb = 0, Bb = 1, jb = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  frame: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
}, Wb = {
  dd: !0,
  li: !0,
  optgroup: !0,
  option: !0,
  p: !0,
  rp: !0,
  rt: !0,
  tbody: !0,
  td: !0,
  tfoot: !0,
  th: !0,
  tr: !0
}, bh = {
  dd: { dd: !0, dt: !0 },
  dt: { dd: !0, dt: !0 },
  li: { li: !0 },
  option: { option: !0, optgroup: !0 },
  optgroup: { optgroup: !0 },
  p: {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    dir: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    menu: !0,
    nav: !0,
    ol: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    ul: !0
  },
  rp: { rp: !0, rt: !0 },
  rt: { rp: !0, rt: !0 },
  tbody: { tbody: !0, tfoot: !0 },
  td: { td: !0, th: !0 },
  tfoot: { tbody: !0 },
  th: { td: !0, th: !0 },
  thead: { tbody: !0, tfoot: !0 },
  tr: { tr: !0 }
};
function Gb(n) {
  return n == 45 || n == 46 || n == 58 || n >= 65 && n <= 90 || n == 95 || n >= 97 && n <= 122 || n >= 161;
}
function rd(n) {
  return n == 9 || n == 10 || n == 13 || n == 32;
}
let xh = null, Sh = null, kh = 0;
function Sl(n, e) {
  let t = n.pos + e;
  if (kh == t && Sh == n) return xh;
  let i = n.peek(e);
  for (; rd(i); ) i = n.peek(++e);
  let r = "";
  for (; Gb(i); )
    r += String.fromCharCode(i), i = n.peek(++e);
  return Sh = n, kh = t, xh = r ? r.toLowerCase() : i == Ib || i == Nb ? void 0 : null;
}
const sd = 60, $r = 62, ho = 47, Ib = 63, Nb = 33, Ub = 45;
function vh(n, e) {
  this.name = n, this.parent = e;
}
const Fb = [Pr, ed, Hf, Kf, Jf], Hb = new Ef({
  start: null,
  shift(n, e, t, i) {
    return Fb.indexOf(e) > -1 ? new vh(Sl(i, 1) || "", n) : n;
  },
  reduce(n, e) {
    return e == td && n ? n.parent : n;
  },
  reuse(n, e, t, i) {
    let r = e.type.id;
    return r == Pr || r == Db ? new vh(Sl(i, 1) || "", n) : n;
  },
  strict: !1
}), Kb = new Ze((n, e) => {
  if (n.next != sd) {
    n.next < 0 && e.context && n.acceptToken(ys);
    return;
  }
  n.advance();
  let t = n.next == ho;
  t && n.advance();
  let i = Sl(n, 0);
  if (i === void 0) return;
  if (!i) return n.acceptToken(t ? Mb : Pr);
  let r = e.context ? e.context.name : null;
  if (t) {
    if (i == r) return n.acceptToken(Rb);
    if (r && Wb[r]) return n.acceptToken(ys, -2);
    if (e.dialectEnabled(Lb)) return n.acceptToken(Xb);
    for (let s = e.context; s; s = s.parent) if (s.name == i) return;
    n.acceptToken(Zb);
  } else {
    if (i == "script") return n.acceptToken(Hf);
    if (i == "style") return n.acceptToken(Kf);
    if (i == "textarea") return n.acceptToken(Jf);
    if (jb.hasOwnProperty(i)) return n.acceptToken(ed);
    r && bh[r] && bh[r][i] ? n.acceptToken(ys, -1) : n.acceptToken(Pr);
  }
}, { contextual: !0 }), Jb = new Ze((n) => {
  for (let e = 0, t = 0; ; t++) {
    if (n.next < 0) {
      t && n.acceptToken(Qh);
      break;
    }
    if (n.next == Ub)
      e++;
    else if (n.next == $r && e >= 2) {
      t >= 3 && n.acceptToken(Qh, -2);
      break;
    } else
      e = 0;
    n.advance();
  }
});
function ex(n) {
  for (; n; n = n.parent)
    if (n.name == "svg" || n.name == "math") return !0;
  return !1;
}
const tx = new Ze((n, e) => {
  if (n.next == ho && n.peek(1) == $r) {
    let t = e.dialectEnabled(Bb) || ex(e.context);
    n.acceptToken(t ? Ab : yh, 2);
  } else n.next == $r && n.acceptToken(yh, 1);
});
function co(n, e, t) {
  let i = 2 + n.length;
  return new Ze((r) => {
    for (let s = 0, l = 0, o = 0; ; o++) {
      if (r.next < 0) {
        o && r.acceptToken(e);
        break;
      }
      if (s == 0 && r.next == sd || s == 1 && r.next == ho || s >= 2 && s < i && r.next == n.charCodeAt(s - 2))
        s++, l++;
      else if ((s == 2 || s == i) && rd(r.next))
        l++;
      else if (s == i && r.next == $r) {
        o > l ? r.acceptToken(e, -l) : r.acceptToken(t, -(l - 2));
        break;
      } else if ((r.next == 10 || r.next == 13) && o) {
        r.acceptToken(e, 1);
        break;
      } else
        s = l = 0;
      r.advance();
    }
  });
}
const ix = co("script", vb, wb), nx = co("style", Pb, $b), rx = co("textarea", Cb, Tb), sx = Mr({
  "Text RawText": p.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": p.angleBracket,
  TagName: p.tagName,
  "MismatchedCloseTag/TagName": [p.tagName, p.invalid],
  AttributeName: p.attributeName,
  "AttributeValue UnquotedAttributeValue": p.attributeValue,
  Is: p.definitionOperator,
  "EntityReference CharacterReference": p.character,
  Comment: p.blockComment,
  ProcessingInst: p.processingInstruction,
  DoctypeDecl: p.documentMeta
}), lx = Oi.deserialize({
  version: 14,
  states: ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
  stateData: ",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
  goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 67,
  context: Hb,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 21, 30, 33, 36, "CloseTag"],
    ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 29, 32, 35, 37, "OpenTag"],
    ["group", -9, 14, 17, 18, 19, 20, 39, 40, 41, 42, "Entity", 16, "Entity TextContent", -3, 28, 31, 34, "TextContent Entity"],
    ["isolate", -11, 21, 29, 30, 32, 33, 35, 36, 37, 38, 41, 42, "ltr", -3, 26, 27, 39, ""]
  ],
  propSources: [sx],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [ix, nx, rx, tx, Kb, Jb, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 15] },
  dialects: { noMatch: 0, selfClosing: 509 },
  tokenPrec: 511
});
function ld(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let i of n.getChildren(id)) {
    let r = i.getChild(zb), s = i.getChild(xl) || i.getChild(nd);
    r && (t[e.read(r.from, r.to)] = s ? s.type.id == xl ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to) : "");
  }
  return t;
}
function wh(n, e) {
  let t = n.getChild(qb);
  return t ? e.read(t.from, t.to) : " ";
}
function Qs(n, e, t) {
  let i;
  for (let r of t)
    if (!r.attrs || r.attrs(i || (i = ld(n.node.parent.firstChild, e))))
      return { parser: r.parser };
  return null;
}
function od(n = [], e = []) {
  let t = [], i = [], r = [], s = [];
  for (let o of n)
    (o.tag == "script" ? t : o.tag == "style" ? i : o.tag == "textarea" ? r : s).push(o);
  let l = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let o of e) (l[o.name] || (l[o.name] = [])).push(o);
  return Rm((o, a) => {
    let h = o.type.id;
    if (h == Vb) return Qs(o, a, t);
    if (h == Yb) return Qs(o, a, i);
    if (h == Eb) return Qs(o, a, r);
    if (h == td && s.length) {
      let c = o.node, u = c.firstChild, f = u && wh(u, a), d;
      if (f) {
        for (let O of s)
          if (O.tag == f && (!O.attrs || O.attrs(d || (d = ld(u, a))))) {
            let m = c.lastChild, g = m.type.id == _b ? m.from : c.to;
            if (g > u.to)
              return { parser: O.parser, overlay: [{ from: u.to, to: g }] };
          }
      }
    }
    if (l && h == id) {
      let c = o.node, u;
      if (u = c.firstChild) {
        let f = l[a.read(u.from, u.to)];
        if (f) for (let d of f) {
          if (d.tagName && d.tagName != wh(c.parent, a)) continue;
          let O = c.lastChild;
          if (O.type.id == xl) {
            let m = O.from + 1, g = O.lastChild, y = O.to - (g && g.isError ? 0 : 1);
            if (y > m) return { parser: d.parser, overlay: [{ from: m, to: y }] };
          } else if (O.type.id == nd)
            return { parser: d.parser, overlay: [{ from: O.from, to: O.to }] };
        }
      }
    }
    return null;
  });
}
const ox = 122, Ph = 1, ax = 123, hx = 124, ad = 2, cx = 125, ux = 3, fx = 4, hd = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], dx = 58, Ox = 40, cd = 95, px = 91, Kn = 45, mx = 46, gx = 35, yx = 37, Qx = 38, bx = 92, xx = 10, Sx = 42;
function ln(n) {
  return n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 161;
}
function uo(n) {
  return n >= 48 && n <= 57;
}
function $h(n) {
  return uo(n) || n >= 97 && n <= 102 || n >= 65 && n <= 70;
}
const ud = (n, e, t) => (i, r) => {
  for (let s = !1, l = 0, o = 0; ; o++) {
    let { next: a } = i;
    if (ln(a) || a == Kn || a == cd || s && uo(a))
      !s && (a != Kn || o > 0) && (s = !0), l === o && a == Kn && l++, i.advance();
    else if (a == bx && i.peek(1) != xx) {
      if (i.advance(), $h(i.next)) {
        do
          i.advance();
        while ($h(i.next));
        i.next == 32 && i.advance();
      } else i.next > -1 && i.advance();
      s = !0;
    } else {
      s && i.acceptToken(
        l == 2 && r.canShift(ad) ? e : a == Ox ? t : n
      );
      break;
    }
  }
}, kx = new Ze(
  ud(ax, ad, hx)
), vx = new Ze(
  ud(cx, ux, fx)
), wx = new Ze((n) => {
  if (hd.includes(n.peek(-1))) {
    let { next: e } = n;
    (ln(e) || e == cd || e == gx || e == mx || e == Sx || e == px || e == dx && ln(n.peek(1)) || e == Kn || e == Qx) && n.acceptToken(ox);
  }
}), Px = new Ze((n) => {
  if (!hd.includes(n.peek(-1))) {
    let { next: e } = n;
    if (e == yx && (n.advance(), n.acceptToken(Ph)), ln(e)) {
      do
        n.advance();
      while (ln(n.next) || uo(n.next));
      n.acceptToken(Ph);
    }
  }
}), $x = Mr({
  "AtKeyword import charset namespace keyframes media supports": p.definitionKeyword,
  "from to selector": p.keyword,
  NamespaceName: p.namespace,
  KeyframeName: p.labelName,
  KeyframeRangeName: p.operatorKeyword,
  TagName: p.tagName,
  ClassName: p.className,
  PseudoClassName: p.constant(p.className),
  IdName: p.labelName,
  "FeatureName PropertyName": p.propertyName,
  AttributeName: p.attributeName,
  NumberLiteral: p.number,
  KeywordQuery: p.keyword,
  UnaryQueryOp: p.operatorKeyword,
  "CallTag ValueName": p.atom,
  VariableName: p.variableName,
  Callee: p.operatorKeyword,
  Unit: p.unit,
  "UniversalSelector NestingSelector": p.definitionOperator,
  "MatchOp CompareOp": p.compareOperator,
  "ChildOp SiblingOp, LogicOp": p.logicOperator,
  BinOp: p.arithmeticOperator,
  Important: p.modifier,
  Comment: p.blockComment,
  ColorLiteral: p.color,
  "ParenthesizedContent StringLiteral": p.string,
  ":": p.punctuation,
  "PseudoOp #": p.derefOperator,
  "; ,": p.separator,
  "( )": p.paren,
  "[ ]": p.squareBracket,
  "{ }": p.brace
}), Cx = { __proto__: null, lang: 38, "nth-child": 38, "nth-last-child": 38, "nth-of-type": 38, "nth-last-of-type": 38, dir: 38, "host-context": 38, if: 84, url: 124, "url-prefix": 124, domain: 124, regexp: 124 }, Tx = { __proto__: null, or: 98, and: 98, not: 106, only: 106, layer: 170 }, Ax = { __proto__: null, selector: 112, layer: 166 }, Rx = { __proto__: null, "@import": 162, "@media": 174, "@charset": 178, "@namespace": 182, "@keyframes": 188, "@supports": 200, "@scope": 204 }, Xx = { __proto__: null, to: 207 }, Zx = Oi.deserialize({
  version: 14,
  states: "EbQYQdOOO#qQdOOP#xO`OOOOQP'#Cf'#CfOOQP'#Ce'#CeO#}QdO'#ChO$nQaO'#CcO$xQdO'#CkO%TQdO'#DpO%YQdO'#DrO%_QdO'#DuO%_QdO'#DxOOQP'#FV'#FVO&eQhO'#EhOOQS'#FU'#FUOOQS'#Ek'#EkQYQdOOO&lQdO'#EOO&PQhO'#EUO&lQdO'#EWO'aQdO'#EYO'lQdO'#E]O'tQhO'#EcO(VQdO'#EeO(bQaO'#CfO)VQ`O'#D{O)[Q`O'#F`O)gQdO'#F`QOQ`OOP)qO&jO'#CaPOOO)C@t)C@tOOQP'#Cj'#CjOOQP,59S,59SO#}QdO,59SO)|QdO,59VO%TQdO,5:[O%YQdO,5:^O%_QdO,5:aO%_QdO,5:cO%_QdO,5:dO%_QdO'#ErO*XQ`O,58}O*aQdO'#DzOOQS,58},58}OOQP'#Cn'#CnOOQO'#Dn'#DnOOQP,59V,59VO*hQ`O,59VO*mQ`O,59VOOQP'#Dq'#DqOOQP,5:[,5:[OOQO'#Ds'#DsO*rQpO,5:^O+]QaO,5:aO+sQaO,5:dOOQW'#DZ'#DZO,ZQhO'#DdO,xQhO'#FaO'tQhO'#DbO-WQ`O'#DhOOQW'#F['#F[O-]Q`O,5;SO-eQ`O'#DeOOQS-E8i-E8iOOQ['#Cs'#CsO-jQdO'#CtO.QQdO'#CzO.hQdO'#C}O/OQ!pO'#DPO1RQ!jO,5:jOOQO'#DU'#DUO*mQ`O'#DTO1cQ!nO'#FXO3`Q`O'#DVO3eQ`O'#DkOOQ['#FX'#FXO-`Q`O,5:pO3jQ!bO,5:rOOQS'#E['#E[O3rQ`O,5:tO3wQdO,5:tOOQO'#E_'#E_O4PQ`O,5:wO4UQhO,5:}O%_QdO'#DgOOQS,5;P,5;PO-eQ`O,5;PO4^QdO,5;PO4fQdO,5:gO4vQdO'#EtO5TQ`O,5;zO5TQ`O,5;zPOOO'#Ej'#EjP5`O&jO,58{POOO,58{,58{OOQP1G.n1G.nOOQP1G.q1G.qO*hQ`O1G.qO*mQ`O1G.qOOQP1G/v1G/vO5kQpO1G/xO5sQaO1G/{O6ZQaO1G/}O6qQaO1G0OO7XQaO,5;^OOQO-E8p-E8pOOQS1G.i1G.iO7cQ`O,5:fO7hQdO'#DoO7oQdO'#CrOOQP1G/x1G/xO&lQdO1G/xO7vQ!jO'#DZO8UQ!bO,59vO8^QhO,5:OOOQO'#F]'#F]O8XQ!bO,59zO'tQhO,59xO8fQhO'#EvO8sQ`O,5;{O9OQhO,59|O9uQhO'#DiOOQW,5:S,5:SOOQS1G0n1G0nOOQW,5:P,5:PO9|Q!fO'#FYOOQS'#FY'#FYOOQS'#Em'#EmO;^QdO,59`OOQ[,59`,59`O;tQdO,59fOOQ[,59f,59fO<[QdO,59iOOQ[,59i,59iOOQ[,59k,59kO&lQdO,59mO<rQhO'#EQOOQW'#EQ'#EQO=WQ`O1G0UO1[QhO1G0UOOQ[,59o,59oO'tQhO'#DXOOQ[,59q,59qO=]Q#tO,5:VOOQS1G0[1G0[OOQS1G0^1G0^OOQS1G0`1G0`O=hQ`O1G0`O=mQdO'#E`OOQS1G0c1G0cOOQS1G0i1G0iO=xQaO,5:RO-`Q`O1G0kOOQS1G0k1G0kO-eQ`O1G0kO>PQ!fO1G0ROOQO1G0R1G0ROOQO,5;`,5;`O>gQdO,5;`OOQO-E8r-E8rO>tQ`O1G1fPOOO-E8h-E8hPOOO1G.g1G.gOOQP7+$]7+$]OOQP7+%d7+%dO&lQdO7+%dOOQS1G0Q1G0QO?PQaO'#F_O?ZQ`O,5:ZO?`Q!fO'#ElO@^QdO'#FWO@hQ`O,59^O@mQ!bO7+%dO&lQdO1G/bO@uQhO1G/fOOQW1G/j1G/jOOQW1G/d1G/dOAWQhO,5;bOOQO-E8t-E8tOAfQhO'#DZOAtQhO'#F^OBPQ`O'#F^OBUQ`O,5:TOOQS-E8k-E8kOOQ[1G.z1G.zOOQ[1G/Q1G/QOOQ[1G/T1G/TOOQ[1G/X1G/XOBZQdO,5:lOOQS7+%p7+%pOB`Q`O7+%pOBeQhO'#DYOBmQ`O,59sO'tQhO,59sOOQ[1G/q1G/qOBuQ`O1G/qOOQS7+%z7+%zOBzQbO'#DPOOQO'#Eb'#EbOCYQ`O'#EaOOQO'#Ea'#EaOCeQ`O'#EwOCmQdO,5:zOOQS,5:z,5:zOOQ[1G/m1G/mOOQS7+&V7+&VO-`Q`O7+&VOCxQ!fO'#EsO&lQdO'#EsOEPQdO7+%mOOQO7+%m7+%mOOQO1G0z1G0zOEdQ!bO<<IOOElQdO'#EqOEvQ`O,5;yOOQP1G/u1G/uOOQS-E8j-E8jOFOQdO'#EpOFYQ`O,5;rOOQ]1G.x1G.xOOQP<<IO<<IOOFbQdO7+$|OOQO'#D]'#D]OFiQ!bO7+%QOFqQhO'#EoOF{Q`O,5;xO&lQdO,5;xOOQW1G/o1G/oOOQO'#ES'#ESOGTQ`O1G0WOOQS<<I[<<I[O&lQdO,59tOGnQhO1G/_OOQ[1G/_1G/_OGuQ`O1G/_OOQW-E8l-E8lOOQ[7+%]7+%]OOQO,5:{,5:{O=pQdO'#ExOCeQ`O,5;cOOQS,5;c,5;cOOQS-E8u-E8uOOQS1G0f1G0fOOQS<<Iq<<IqOG}Q!fO,5;_OOQS-E8q-E8qOOQO<<IX<<IXOOQPAN>jAN>jOIUQaO,5;]OOQO-E8o-E8oOI`QdO,5;[OOQO-E8n-E8nOOQW<<Hh<<HhOOQW<<Hl<<HlOIjQhO<<HlOI{QhO,5;ZOJWQ`O,5;ZOOQO-E8m-E8mOJ]QdO1G1dOBZQdO'#EuOJgQ`O7+%rOOQW7+%r7+%rOJoQ!bO1G/`OOQ[7+$y7+$yOJzQhO7+$yPKRQ`O'#EnOOQO,5;d,5;dOOQO-E8v-E8vOOQS1G0}1G0}OKWQ`OAN>WO&lQdO1G0uOK]Q`O7+'OOOQO,5;a,5;aOOQO-E8s-E8sOOQW<<I^<<I^OOQ[<<He<<HePOQW,5;Y,5;YOOQWG23rG23rOKeQdO7+&a",
  stateData: "Kx~O#sOS#tQQ~OW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#oRO~OQiOW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#ohO~O#m$SP~P!dO#tmO~O#ooO~O]qO`rOarOjsOmtO!juO!mwO#nvO~OpzO!^xO~P$SOc!QO#o|O#p}O~O#o!RO~O#o!TO~OW[OZ[O]TO`VOaVOjWOmXO!jYO!mZO#oRO~OS!]Oe!YO!V![O!Y!`O#q!XOp$TP~Ok$TP~P&POQ!jOe!cOm!dOp!eOr!mOt!mOz!kO!`!lO#o!bO#p!hO#}!fO~Ot!qO!`!lO#o!pO~Ot!sO#o!sO~OS!]Oe!YO!V![O!Y!`O#q!XO~Oe!vOpzO#Z!xO~O]YX`YX`!pXaYXjYXmYXpYX!^YX!jYX!mYX#nYX~O`!zO~Ok!{O#m$SXo$SX~O#m$SXo$SX~P!dO#u#OO#v#OO#w#QO~Oc#UO#o|O#p}O~OpzO!^xO~Oo$SP~P!dOe#`O~Oe#aO~Ol#bO!h#cO~O]qO`rOarOjsOmtO~Op!ia!^!ia!j!ia!m!ia#n!iad!ia~P*zOp!la!^!la!j!la!m!la#n!lad!la~P*zOR#gOS!]Oe!YOr#gOt#gO!V![O!Y!`O#q#dO#}!fO~O!R#iO!^#jOk$TXp$TX~Oe#mO~Ok#oOpzO~Oe!vO~O]#rO`#rOd#uOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl#wO~P&lO]#rO`#rOi#rOj#rOk#rOo#yO~P&lOP#zOSsXesXksXvsX!VsX!YsX!usX!wsX#qsX!TsXQsX]sX`sXdsXisXjsXmsXpsXrsXtsXzsX!`sX#osX#psX#}sXlsXosX!^sX!qsX#msX~Ov#{O!u#|O!w#}Ok$TP~P'tOe#aOS#{Xk#{Xv#{X!V#{X!Y#{X!u#{X!w#{X#q#{XQ#{X]#{X`#{Xd#{Xi#{Xj#{Xm#{Xp#{Xr#{Xt#{Xz#{X!`#{X#o#{X#p#{X#}#{Xl#{Xo#{X!^#{X!q#{X#m#{X~Oe$RO~Oe$TO~Ok$VOv#{O~Ok$WO~Ot$XO!`!lO~Op$YO~OpzO!R#iO~OpzO#Z$`O~O!q$bOk!oa#m!oao!oa~P&lOk#hX#m#hXo#hX~P!dOk!{O#m$Sao$Sa~O#u#OO#v#OO#w$hO~Ol$jO!h$kO~Op!ii!^!ii!j!ii!m!ii#n!iid!ii~P*zOp!ki!^!ki!j!ki!m!ki#n!kid!ki~P*zOp!li!^!li!j!li!m!li#n!lid!li~P*zOp#fa!^#fa~P$SOo$lO~Od$RP~P%_Od#zP~P&lO`!PXd}X!R}X!T!PX~O`$sO!T$tO~Od$uO!R#iO~Ok#jXp#jX!^#jX~P'tO!^#jOk$Tap$Ta~O!R#iOk!Uap!Ua!^!Uad!Ua`!Ua~OS!]Oe!YO!V![O!Y!`O#q$yO~Od$QP~P9dOv#{OQ#|X]#|X`#|Xd#|Xe#|Xi#|Xj#|Xk#|Xm#|Xp#|Xr#|Xt#|Xz#|X!`#|X#o#|X#p#|X#}#|Xl#|Xo#|X~O]#rO`#rOd%OOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl%PO~P&lO]#rO`#rOi#rOj#rOk#rOo%QO~P&lOe%SOS!tXk!tX!V!tX!Y!tX#q!tX~Ok%TO~Od%YOt%ZO!a%ZO~Ok%[O~Oo%cO#o%^O#}%]O~Od%dO~P$SOv#{O!^%hO!q%jOk!oi#m!oio!oi~P&lOk#ha#m#hao#ha~P!dOk!{O#m$Sio$Si~O!^%mOd$RX~P$SOd%oO~Ov#{OQ#`Xd#`Xe#`Xm#`Xp#`Xr#`Xt#`Xz#`X!^#`X!`#`X#o#`X#p#`X#}#`X~O!^%qOd#zX~P&lOd%sO~Ol%tOv#{O~OR#gOr#gOt#gO#q%vO#}!fO~O!R#iOk#jap#ja!^#ja~O`!PXd}X!R}X!^}X~O!R#iO!^%xOd$QX~O`%zO~Od%{O~O#o%|O~Ok&OO~O`&PO!R#iO~Od&ROk&QO~Od&UO~OP#zOpsX!^sXdsX~O#}%]Op#TX!^#TX~OpzO!^&WO~Oo&[O#o%^O#}%]O~Ov#{OQ#gXe#gXk#gXm#gXp#gXr#gXt#gXz#gX!^#gX!`#gX!q#gX#m#gX#o#gX#p#gX#}#gXo#gX~O!^%hO!q&`Ok!oq#m!oqo!oq~P&lOl&aOv#{O~Od#eX!^#eX~P%_O!^%mOd$Ra~Od#dX!^#dX~P&lO!^%qOd#za~Od&fO~P&lOd&gO!T&hO~Od#cX!^#cX~P9dO!^%xOd$Qa~O]&mOd&oO~OS#bae#ba!V#ba!Y#ba#q#ba~Od&qO~PG]Od&qOk&rO~Ov#{OQ#gae#gak#gam#gap#gar#gat#gaz#ga!^#ga!`#ga!q#ga#m#ga#o#ga#p#ga#}#gao#ga~Od#ea!^#ea~P$SOd#da!^#da~P&lOR#gOr#gOt#gO#q%vO#}%]O~O!R#iOd#ca!^#ca~O`&xO~O!^%xOd$Qi~P&lO]&mOd&|O~Ov#{Od|ik|i~Od&}O~PG]Ok'OO~Od'PO~O!^%xOd$Qq~Od#cq!^#cq~P&lO#s!a#t#}]#}v!m~",
  goto: "2h$UPPPPP$VP$YP$c$uP$cP%X$cPP%_PPP%e%o%oPPPPP%oPP%oP&]P%oP%o'W%oP't'w'}'}(^'}P'}P'}P'}'}P(m'}(yP(|PP)p)v$c)|$c*SP$cP$c$cP*Y*{+YP$YP+aP+dP$YP$YP$YP+j$YP+m+p+s+z$YP$YPP$YP,P,V,f,|-[-b-l-r-x.O.U.`.f.l.rPPPPPPPPPPP.x/R/w/z0|P1U1u2O2R2U2[RnQ_^OP`kz!{$dq[OPYZ`kuvwxz!v!{#`$d%mqSOPYZ`kuvwxz!v!{#`$d%mQpTR#RqQ!OVR#SrQ#S!QS$Q!i!jR$i#U!V!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'Q!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QU#g!Y$t&hU%`$Y%b&WR&V%_!V!iac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QR$S!kQ%W$RR&S%Xk!^]bf!Y![!g#i#j#m$P$R%X%xQ#e!YQ${#mQ%w$tQ&j%xR&w&hQ!ygQ#p!`Q$^!xR%f$`R#n!]!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QQ!qdR$X!rQ!PVR#TrQ#S!PR$i#TQ!SWR#VsQ!UXR#WtQ{UQ!wgQ#^yQ#o!_Q$U!nQ$[!uQ$_!yQ%e$^Q&Y%aQ&]%fR&v&XSjPzQ!}kQ$c!{R%k$dZiPkz!{$dR$P!gQ%}%SR&z&mR!rdR!teR$Z!tS%a$Y%bR&t&WV%_$Y%b&WQ#PmR$g#PQ`OSkPzU!a`k$dR$d!{Q$p#aY%p$p%u&d&l'QQ%u$sQ&d%qQ&l%zR'Q&xQ#t!cQ#v!dQ#x!eV$}#t#v#xQ%X$RR&T%XQ%y$zS&k%y&yR&y&lQ%r$pR&e%rQ%n$mR&c%nQyUR#]yQ%i$aR&_%iQ!|jS$e!|$fR$f!}Q&n%}R&{&nQ#k!ZR$x#kQ%b$YR&Z%bQ&X%aR&u&X__OP`kz!{$d^UOP`kz!{$dQ!VYQ!WZQ#XuQ#YvQ#ZwQ#[xQ$]!vQ$m#`R&b%mR$q#aQ!gaQ!oc[#q!c!d!e#t#v#xQ$a!zd$o#a$p$s%q%u%z&d&l&x'QQ$r#cQ%R#{S%g$a%iQ%l$kQ&^%hR&p&P]#s!c!d!e#t#v#xW!Z]b!g$PQ!ufQ#f!YQ#l![Q$v#iQ$w#jQ$z#mS%V$R%XR&i%xQ#h!YQ%w$tR&w&hR$|#mR$n#`QlPR#_zQ!_]Q!nbQ$O!gR%U$P",
  nodeNames: "⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector CallQuery ArgList , CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to AtRule Styles",
  maxTerm: 143,
  nodeProps: [
    ["isolate", -2, 5, 36, ""],
    ["openedBy", 20, "(", 28, "[", 31, "{"],
    ["closedBy", 21, ")", 29, "]", 32, "}"]
  ],
  propSources: [$x],
  skippedNodes: [0, 5, 106],
  repeatNodeCount: 15,
  tokenData: "JQ~R!YOX$qX^%i^p$qpq%iqr({rs-ust/itu6Wuv$qvw7Qwx7cxy9Qyz9cz{9h{|:R|}>t}!O?V!O!P?t!P!Q@]!Q![AU![!]BP!]!^B{!^!_C^!_!`DY!`!aDm!a!b$q!b!cEn!c!}$q!}#OG{#O#P$q#P#QH^#Q#R6W#R#o$q#o#pHo#p#q6W#q#rIQ#r#sIc#s#y$q#y#z%i#z$f$q$f$g%i$g#BY$q#BY#BZ%i#BZ$IS$q$IS$I_%i$I_$I|$q$I|$JO%i$JO$JT$q$JT$JU%i$JU$KV$q$KV$KW%i$KW&FU$q&FU&FV%i&FV;'S$q;'S;=`Iz<%lO$q`$tSOy%Qz;'S%Q;'S;=`%c<%lO%Q`%VS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q`%fP;=`<%l%Q~%nh#s~OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Q~'ah#s~!a`OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Qj)OUOy%Qz#]%Q#]#^)b#^;'S%Q;'S;=`%c<%lO%Qj)gU!a`Oy%Qz#a%Q#a#b)y#b;'S%Q;'S;=`%c<%lO%Qj*OU!a`Oy%Qz#d%Q#d#e*b#e;'S%Q;'S;=`%c<%lO%Qj*gU!a`Oy%Qz#c%Q#c#d*y#d;'S%Q;'S;=`%c<%lO%Qj+OU!a`Oy%Qz#f%Q#f#g+b#g;'S%Q;'S;=`%c<%lO%Qj+gU!a`Oy%Qz#h%Q#h#i+y#i;'S%Q;'S;=`%c<%lO%Qj,OU!a`Oy%Qz#T%Q#T#U,b#U;'S%Q;'S;=`%c<%lO%Qj,gU!a`Oy%Qz#b%Q#b#c,y#c;'S%Q;'S;=`%c<%lO%Qj-OU!a`Oy%Qz#h%Q#h#i-b#i;'S%Q;'S;=`%c<%lO%Qj-iS!qY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q~-xWOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c<%lO-u~.gOt~~.jRO;'S-u;'S;=`.s;=`O-u~.vXOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c;=`<%l-u<%lO-u~/fP;=`<%l-uj/nYjYOy%Qz!Q%Q!Q![0^![!c%Q!c!i0^!i#T%Q#T#Z0^#Z;'S%Q;'S;=`%c<%lO%Qj0cY!a`Oy%Qz!Q%Q!Q![1R![!c%Q!c!i1R!i#T%Q#T#Z1R#Z;'S%Q;'S;=`%c<%lO%Qj1WY!a`Oy%Qz!Q%Q!Q![1v![!c%Q!c!i1v!i#T%Q#T#Z1v#Z;'S%Q;'S;=`%c<%lO%Qj1}YrY!a`Oy%Qz!Q%Q!Q![2m![!c%Q!c!i2m!i#T%Q#T#Z2m#Z;'S%Q;'S;=`%c<%lO%Qj2tYrY!a`Oy%Qz!Q%Q!Q![3d![!c%Q!c!i3d!i#T%Q#T#Z3d#Z;'S%Q;'S;=`%c<%lO%Qj3iY!a`Oy%Qz!Q%Q!Q![4X![!c%Q!c!i4X!i#T%Q#T#Z4X#Z;'S%Q;'S;=`%c<%lO%Qj4`YrY!a`Oy%Qz!Q%Q!Q![5O![!c%Q!c!i5O!i#T%Q#T#Z5O#Z;'S%Q;'S;=`%c<%lO%Qj5TY!a`Oy%Qz!Q%Q!Q![5s![!c%Q!c!i5s!i#T%Q#T#Z5s#Z;'S%Q;'S;=`%c<%lO%Qj5zSrY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qd6ZUOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qd6tS!hS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qb7VSZQOy%Qz;'S%Q;'S;=`%c<%lO%Q~7fWOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z<%lO7c~8RRO;'S7c;'S;=`8[;=`O7c~8_XOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z;=`<%l7c<%lO7c~8}P;=`<%l7cj9VSeYOy%Qz;'S%Q;'S;=`%c<%lO%Q~9hOd~n9oUWQvWOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qj:YWvW!mQOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj:wU!a`Oy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Qj;bY!a`#}YOy%Qz!Q%Q!Q![;Z![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj<VY!a`Oy%Qz{%Q{|<u|}%Q}!O<u!O!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj<zU!a`Oy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj=eU!a`#}YOy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj>O[!a`#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj>yS!^YOy%Qz;'S%Q;'S;=`%c<%lO%Qj?[WvWOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj?yU]YOy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Q~@bTvWOy%Qz{@q{;'S%Q;'S;=`%c<%lO%Q~@xS!a`#t~Oy%Qz;'S%Q;'S;=`%c<%lO%QjAZ[#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%QjBUU`YOy%Qz![%Q![!]Bh!];'S%Q;'S;=`%c<%lO%QbBoSaQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjCQSkYOy%Qz;'S%Q;'S;=`%c<%lO%QhCcU!TWOy%Qz!_%Q!_!`Cu!`;'S%Q;'S;=`%c<%lO%QhC|S!TW!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QlDaS!TW!hSOy%Qz;'S%Q;'S;=`%c<%lO%QjDtV!jQ!TWOy%Qz!_%Q!_!`Cu!`!aEZ!a;'S%Q;'S;=`%c<%lO%QbEbS!jQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjEqYOy%Qz}%Q}!OFa!O!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjFfW!a`Oy%Qz!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjGV[iY!a`Oy%Qz}%Q}!OGO!O!Q%Q!Q![GO![!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjHQSmYOy%Qz;'S%Q;'S;=`%c<%lO%QnHcSl^Oy%Qz;'S%Q;'S;=`%c<%lO%QjHtSpYOy%Qz;'S%Q;'S;=`%c<%lO%QjIVSoYOy%Qz;'S%Q;'S;=`%c<%lO%QfIhU!mQOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Q`I}P;=`<%l$q",
  tokenizers: [wx, Px, kx, vx, 1, 2, 3, 4, new wr("m~RRYZ[z{a~~g~aO#v~~dP!P!Qg~lO#w~~", 28, 129)],
  topRules: { StyleSheet: [0, 6], Styles: [1, 105] },
  specialized: [{ term: 124, get: (n) => Cx[n] || -1 }, { term: 125, get: (n) => Tx[n] || -1 }, { term: 4, get: (n) => Ax[n] || -1 }, { term: 25, get: (n) => Rx[n] || -1 }, { term: 123, get: (n) => Xx[n] || -1 }],
  tokenPrec: 1963
});
let bs = null;
function xs() {
  if (!bs && typeof document == "object" && document.body) {
    let { style: n } = document.body, e = [], t = /* @__PURE__ */ new Set();
    for (let i in n)
      i != "cssText" && i != "cssFloat" && typeof n[i] == "string" && (/[A-Z]/.test(i) && (i = i.replace(/[A-Z]/g, (r) => "-" + r.toLowerCase())), t.has(i) || (e.push(i), t.add(i)));
    bs = e.sort().map((i) => ({ type: "property", label: i, apply: i + ": " }));
  }
  return bs || [];
}
const Ch = /* @__PURE__ */ [
  "active",
  "after",
  "any-link",
  "autofill",
  "backdrop",
  "before",
  "checked",
  "cue",
  "default",
  "defined",
  "disabled",
  "empty",
  "enabled",
  "file-selector-button",
  "first",
  "first-child",
  "first-letter",
  "first-line",
  "first-of-type",
  "focus",
  "focus-visible",
  "focus-within",
  "fullscreen",
  "has",
  "host",
  "host-context",
  "hover",
  "in-range",
  "indeterminate",
  "invalid",
  "is",
  "lang",
  "last-child",
  "last-of-type",
  "left",
  "link",
  "marker",
  "modal",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "part",
  "placeholder",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "selection",
  "slotted",
  "target",
  "target-text",
  "valid",
  "visited",
  "where"
].map((n) => ({ type: "class", label: n })), Th = /* @__PURE__ */ [
  "above",
  "absolute",
  "activeborder",
  "additive",
  "activecaption",
  "after-white-space",
  "ahead",
  "alias",
  "all",
  "all-scroll",
  "alphabetic",
  "alternate",
  "always",
  "antialiased",
  "appworkspace",
  "asterisks",
  "attr",
  "auto",
  "auto-flow",
  "avoid",
  "avoid-column",
  "avoid-page",
  "avoid-region",
  "axis-pan",
  "background",
  "backwards",
  "baseline",
  "below",
  "bidi-override",
  "blink",
  "block",
  "block-axis",
  "bold",
  "bolder",
  "border",
  "border-box",
  "both",
  "bottom",
  "break",
  "break-all",
  "break-word",
  "bullets",
  "button",
  "button-bevel",
  "buttonface",
  "buttonhighlight",
  "buttonshadow",
  "buttontext",
  "calc",
  "capitalize",
  "caps-lock-indicator",
  "caption",
  "captiontext",
  "caret",
  "cell",
  "center",
  "checkbox",
  "circle",
  "cjk-decimal",
  "clear",
  "clip",
  "close-quote",
  "col-resize",
  "collapse",
  "color",
  "color-burn",
  "color-dodge",
  "column",
  "column-reverse",
  "compact",
  "condensed",
  "contain",
  "content",
  "contents",
  "content-box",
  "context-menu",
  "continuous",
  "copy",
  "counter",
  "counters",
  "cover",
  "crop",
  "cross",
  "crosshair",
  "currentcolor",
  "cursive",
  "cyclic",
  "darken",
  "dashed",
  "decimal",
  "decimal-leading-zero",
  "default",
  "default-button",
  "dense",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "disc",
  "discard",
  "disclosure-closed",
  "disclosure-open",
  "document",
  "dot-dash",
  "dot-dot-dash",
  "dotted",
  "double",
  "down",
  "e-resize",
  "ease",
  "ease-in",
  "ease-in-out",
  "ease-out",
  "element",
  "ellipse",
  "ellipsis",
  "embed",
  "end",
  "ethiopic-abegede-gez",
  "ethiopic-halehame-aa-er",
  "ethiopic-halehame-gez",
  "ew-resize",
  "exclusion",
  "expanded",
  "extends",
  "extra-condensed",
  "extra-expanded",
  "fantasy",
  "fast",
  "fill",
  "fill-box",
  "fixed",
  "flat",
  "flex",
  "flex-end",
  "flex-start",
  "footnotes",
  "forwards",
  "from",
  "geometricPrecision",
  "graytext",
  "grid",
  "groove",
  "hand",
  "hard-light",
  "help",
  "hidden",
  "hide",
  "higher",
  "highlight",
  "highlighttext",
  "horizontal",
  "hsl",
  "hsla",
  "hue",
  "icon",
  "ignore",
  "inactiveborder",
  "inactivecaption",
  "inactivecaptiontext",
  "infinite",
  "infobackground",
  "infotext",
  "inherit",
  "initial",
  "inline",
  "inline-axis",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "inset",
  "inside",
  "intrinsic",
  "invert",
  "italic",
  "justify",
  "keep-all",
  "landscape",
  "large",
  "larger",
  "left",
  "level",
  "lighter",
  "lighten",
  "line-through",
  "linear",
  "linear-gradient",
  "lines",
  "list-item",
  "listbox",
  "listitem",
  "local",
  "logical",
  "loud",
  "lower",
  "lower-hexadecimal",
  "lower-latin",
  "lower-norwegian",
  "lowercase",
  "ltr",
  "luminosity",
  "manipulation",
  "match",
  "matrix",
  "matrix3d",
  "medium",
  "menu",
  "menutext",
  "message-box",
  "middle",
  "min-intrinsic",
  "mix",
  "monospace",
  "move",
  "multiple",
  "multiple_mask_images",
  "multiply",
  "n-resize",
  "narrower",
  "ne-resize",
  "nesw-resize",
  "no-close-quote",
  "no-drop",
  "no-open-quote",
  "no-repeat",
  "none",
  "normal",
  "not-allowed",
  "nowrap",
  "ns-resize",
  "numbers",
  "numeric",
  "nw-resize",
  "nwse-resize",
  "oblique",
  "opacity",
  "open-quote",
  "optimizeLegibility",
  "optimizeSpeed",
  "outset",
  "outside",
  "outside-shape",
  "overlay",
  "overline",
  "padding",
  "padding-box",
  "painted",
  "page",
  "paused",
  "perspective",
  "pinch-zoom",
  "plus-darker",
  "plus-lighter",
  "pointer",
  "polygon",
  "portrait",
  "pre",
  "pre-line",
  "pre-wrap",
  "preserve-3d",
  "progress",
  "push-button",
  "radial-gradient",
  "radio",
  "read-only",
  "read-write",
  "read-write-plaintext-only",
  "rectangle",
  "region",
  "relative",
  "repeat",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "repeat-x",
  "repeat-y",
  "reset",
  "reverse",
  "rgb",
  "rgba",
  "ridge",
  "right",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "round",
  "row",
  "row-resize",
  "row-reverse",
  "rtl",
  "run-in",
  "running",
  "s-resize",
  "sans-serif",
  "saturation",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "screen",
  "scroll",
  "scrollbar",
  "scroll-position",
  "se-resize",
  "self-start",
  "self-end",
  "semi-condensed",
  "semi-expanded",
  "separate",
  "serif",
  "show",
  "single",
  "skew",
  "skewX",
  "skewY",
  "skip-white-space",
  "slide",
  "slider-horizontal",
  "slider-vertical",
  "sliderthumb-horizontal",
  "sliderthumb-vertical",
  "slow",
  "small",
  "small-caps",
  "small-caption",
  "smaller",
  "soft-light",
  "solid",
  "source-atop",
  "source-in",
  "source-out",
  "source-over",
  "space",
  "space-around",
  "space-between",
  "space-evenly",
  "spell-out",
  "square",
  "start",
  "static",
  "status-bar",
  "stretch",
  "stroke",
  "stroke-box",
  "sub",
  "subpixel-antialiased",
  "svg_masks",
  "super",
  "sw-resize",
  "symbolic",
  "symbols",
  "system-ui",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "text",
  "text-bottom",
  "text-top",
  "textarea",
  "textfield",
  "thick",
  "thin",
  "threeddarkshadow",
  "threedface",
  "threedhighlight",
  "threedlightshadow",
  "threedshadow",
  "to",
  "top",
  "transform",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ",
  "transparent",
  "ultra-condensed",
  "ultra-expanded",
  "underline",
  "unidirectional-pan",
  "unset",
  "up",
  "upper-latin",
  "uppercase",
  "url",
  "var",
  "vertical",
  "vertical-text",
  "view-box",
  "visible",
  "visibleFill",
  "visiblePainted",
  "visibleStroke",
  "visual",
  "w-resize",
  "wait",
  "wave",
  "wider",
  "window",
  "windowframe",
  "windowtext",
  "words",
  "wrap",
  "wrap-reverse",
  "x-large",
  "x-small",
  "xor",
  "xx-large",
  "xx-small"
].map((n) => ({ type: "keyword", label: n })).concat(/* @__PURE__ */ [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
].map((n) => ({ type: "constant", label: n }))), Mx = /* @__PURE__ */ [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "footer",
  "form",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "meter",
  "nav",
  "ol",
  "output",
  "p",
  "pre",
  "ruby",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul"
].map((n) => ({ type: "type", label: n })), qx = /* @__PURE__ */ [
  "@charset",
  "@color-profile",
  "@container",
  "@counter-style",
  "@font-face",
  "@font-feature-values",
  "@font-palette-values",
  "@import",
  "@keyframes",
  "@layer",
  "@media",
  "@namespace",
  "@page",
  "@position-try",
  "@property",
  "@scope",
  "@starting-style",
  "@supports",
  "@view-transition"
].map((n) => ({ type: "keyword", label: n })), ct = /^(\w[\w-]*|-\w[\w-]*|)$/, zx = /^-(-[\w-]*)?$/;
function Vx(n, e) {
  var t;
  if ((n.name == "(" || n.type.isError) && (n = n.parent || n), n.name != "ArgList")
    return !1;
  let i = (t = n.parent) === null || t === void 0 ? void 0 : t.firstChild;
  return (i == null ? void 0 : i.name) != "Callee" ? !1 : e.sliceString(i.from, i.to) == "var";
}
const Ah = /* @__PURE__ */ new fu(), Yx = ["Declaration"];
function Ex(n) {
  for (let e = n; ; ) {
    if (e.type.isTop)
      return e;
    if (!(e = e.parent))
      return n;
  }
}
function fd(n, e, t) {
  if (e.to - e.from > 4096) {
    let i = Ah.get(e);
    if (i)
      return i;
    let r = [], s = /* @__PURE__ */ new Set(), l = e.cursor(N.IncludeAnonymous);
    if (l.firstChild())
      do
        for (let o of fd(n, l.node, t))
          s.has(o.label) || (s.add(o.label), r.push(o));
      while (l.nextSibling());
    return Ah.set(e, r), r;
  } else {
    let i = [], r = /* @__PURE__ */ new Set();
    return e.cursor().iterate((s) => {
      var l;
      if (t(s) && s.matchContext(Yx) && ((l = s.node.nextSibling) === null || l === void 0 ? void 0 : l.name) == ":") {
        let o = n.sliceString(s.from, s.to);
        r.has(o) || (r.add(o), i.push({ label: o, type: "variable" }));
      }
    }), i;
  }
}
const Dx = (n) => (e) => {
  let { state: t, pos: i } = e, r = J(t).resolveInner(i, -1), s = r.type.isError && r.from == r.to - 1 && t.doc.sliceString(r.from, r.to) == "-";
  if (r.name == "PropertyName" || (s || r.name == "TagName") && /^(Block|Styles)$/.test(r.resolve(r.to).name))
    return { from: r.from, options: xs(), validFor: ct };
  if (r.name == "ValueName")
    return { from: r.from, options: Th, validFor: ct };
  if (r.name == "PseudoClassName")
    return { from: r.from, options: Ch, validFor: ct };
  if (n(r) || (e.explicit || s) && Vx(r, t.doc))
    return {
      from: n(r) || s ? r.from : i,
      options: fd(t.doc, Ex(r), n),
      validFor: zx
    };
  if (r.name == "TagName") {
    for (let { parent: a } = r; a; a = a.parent)
      if (a.name == "Block")
        return { from: r.from, options: xs(), validFor: ct };
    return { from: r.from, options: Mx, validFor: ct };
  }
  if (r.name == "AtKeyword")
    return { from: r.from, options: qx, validFor: ct };
  if (!e.explicit)
    return null;
  let l = r.resolve(i), o = l.childBefore(i);
  return o && o.name == ":" && l.name == "PseudoClassSelector" ? { from: i, options: Ch, validFor: ct } : o && o.name == ":" && l.name == "Declaration" || l.name == "ArgList" ? { from: i, options: Th, validFor: ct } : l.name == "Block" || l.name == "Styles" ? { from: i, options: xs(), validFor: ct } : null;
}, _x = /* @__PURE__ */ Dx((n) => n.name == "VariableName"), Cr = /* @__PURE__ */ ci.define({
  name: "css",
  parser: /* @__PURE__ */ Zx.configure({
    props: [
      /* @__PURE__ */ Vr.add({
        Declaration: /* @__PURE__ */ Fn()
      }),
      /* @__PURE__ */ Yr.add({
        "Block KeyframeList": bu
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*\}$/,
    wordChars: "-"
  }
});
function Lx() {
  return new jl(Cr, Cr.data.of({ autocomplete: _x }));
}
const Ti = ["_blank", "_self", "_top", "_parent"], Ss = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], ks = ["get", "post", "put", "delete"], vs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], Te = ["true", "false"], A = {}, Bx = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: Ti,
      hreflang: null
    }
  },
  abbr: A,
  address: A,
  area: {
    attrs: {
      alt: null,
      coords: null,
      href: null,
      target: null,
      ping: null,
      media: null,
      hreflang: null,
      type: null,
      shape: ["default", "rect", "circle", "poly"]
    }
  },
  article: A,
  aside: A,
  audio: {
    attrs: {
      src: null,
      mediagroup: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["none", "metadata", "auto"],
      autoplay: ["autoplay"],
      loop: ["loop"],
      controls: ["controls"]
    }
  },
  b: A,
  base: { attrs: { href: null, target: Ti } },
  bdi: A,
  bdo: A,
  blockquote: { attrs: { cite: null } },
  body: A,
  br: A,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: vs,
      formmethod: ks,
      formnovalidate: ["novalidate"],
      formtarget: Ti,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: { attrs: { width: null, height: null } },
  caption: A,
  center: A,
  cite: A,
  code: A,
  col: { attrs: { span: null } },
  colgroup: { attrs: { span: null } },
  command: {
    attrs: {
      type: ["command", "checkbox", "radio"],
      label: null,
      icon: null,
      radiogroup: null,
      command: null,
      title: null,
      disabled: ["disabled"],
      checked: ["checked"]
    }
  },
  data: { attrs: { value: null } },
  datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
  datalist: { attrs: { data: null } },
  dd: A,
  del: { attrs: { cite: null, datetime: null } },
  details: { attrs: { open: ["open"] } },
  dfn: A,
  div: A,
  dl: A,
  dt: A,
  em: A,
  embed: { attrs: { src: null, type: null, width: null, height: null } },
  eventsource: { attrs: { src: null } },
  fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
  figcaption: A,
  figure: A,
  footer: A,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": Ss,
      autocomplete: ["on", "off"],
      enctype: vs,
      method: ks,
      novalidate: ["novalidate"],
      target: Ti
    }
  },
  h1: A,
  h2: A,
  h3: A,
  h4: A,
  h5: A,
  h6: A,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: A,
  hgroup: A,
  hr: A,
  html: {
    attrs: { manifest: null }
  },
  i: A,
  iframe: {
    attrs: {
      src: null,
      srcdoc: null,
      name: null,
      width: null,
      height: null,
      sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
      seamless: ["seamless"]
    }
  },
  img: {
    attrs: {
      alt: null,
      src: null,
      ismap: null,
      usemap: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"]
    }
  },
  input: {
    attrs: {
      alt: null,
      dirname: null,
      form: null,
      formaction: null,
      height: null,
      list: null,
      max: null,
      maxlength: null,
      min: null,
      name: null,
      pattern: null,
      placeholder: null,
      size: null,
      src: null,
      step: null,
      value: null,
      width: null,
      accept: ["audio/*", "video/*", "image/*"],
      autocomplete: ["on", "off"],
      autofocus: ["autofocus"],
      checked: ["checked"],
      disabled: ["disabled"],
      formenctype: vs,
      formmethod: ks,
      formnovalidate: ["novalidate"],
      formtarget: Ti,
      multiple: ["multiple"],
      readonly: ["readonly"],
      required: ["required"],
      type: [
        "hidden",
        "text",
        "search",
        "tel",
        "url",
        "email",
        "password",
        "datetime",
        "date",
        "month",
        "week",
        "time",
        "datetime-local",
        "number",
        "range",
        "color",
        "checkbox",
        "radio",
        "file",
        "submit",
        "image",
        "reset",
        "button"
      ]
    }
  },
  ins: { attrs: { cite: null, datetime: null } },
  kbd: A,
  keygen: {
    attrs: {
      challenge: null,
      form: null,
      name: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      keytype: ["RSA"]
    }
  },
  label: { attrs: { for: null, form: null } },
  legend: A,
  li: { attrs: { value: null } },
  link: {
    attrs: {
      href: null,
      type: null,
      hreflang: null,
      media: null,
      sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
    }
  },
  map: { attrs: { name: null } },
  mark: A,
  menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
  meta: {
    attrs: {
      content: null,
      charset: Ss,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
  nav: A,
  noscript: A,
  object: {
    attrs: {
      data: null,
      type: null,
      name: null,
      usemap: null,
      form: null,
      width: null,
      height: null,
      typemustmatch: ["typemustmatch"]
    }
  },
  ol: {
    attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] },
    children: ["li", "script", "template", "ul", "ol"]
  },
  optgroup: { attrs: { disabled: ["disabled"], label: null } },
  option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
  output: { attrs: { for: null, form: null, name: null } },
  p: A,
  param: { attrs: { name: null, value: null } },
  pre: A,
  progress: { attrs: { value: null, max: null } },
  q: { attrs: { cite: null } },
  rp: A,
  rt: A,
  ruby: A,
  samp: A,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: Ss
    }
  },
  section: A,
  select: {
    attrs: {
      form: null,
      name: null,
      size: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  slot: { attrs: { name: null } },
  small: A,
  source: { attrs: { src: null, type: null, media: null } },
  span: A,
  strong: A,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: A,
  summary: A,
  sup: A,
  table: A,
  tbody: A,
  td: { attrs: { colspan: null, rowspan: null, headers: null } },
  template: A,
  textarea: {
    attrs: {
      dirname: null,
      form: null,
      maxlength: null,
      name: null,
      placeholder: null,
      rows: null,
      cols: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      readonly: ["readonly"],
      required: ["required"],
      wrap: ["soft", "hard"]
    }
  },
  tfoot: A,
  th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
  thead: A,
  time: { attrs: { datetime: null } },
  title: A,
  tr: A,
  track: {
    attrs: {
      src: null,
      label: null,
      default: null,
      kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
      srclang: null
    }
  },
  ul: { children: ["li", "script", "template", "ul", "ol"] },
  var: A,
  video: {
    attrs: {
      src: null,
      poster: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["auto", "metadata", "none"],
      autoplay: ["autoplay"],
      mediagroup: ["movie"],
      muted: ["muted"],
      controls: ["controls"]
    }
  },
  wbr: A
}, dd = {
  accesskey: null,
  class: null,
  contenteditable: Te,
  contextmenu: null,
  dir: ["ltr", "rtl", "auto"],
  draggable: ["true", "false", "auto"],
  dropzone: ["copy", "move", "link", "string:", "file:"],
  hidden: ["hidden"],
  id: null,
  inert: ["inert"],
  itemid: null,
  itemprop: null,
  itemref: null,
  itemscope: ["itemscope"],
  itemtype: null,
  lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
  spellcheck: Te,
  autocorrect: Te,
  autocapitalize: Te,
  style: null,
  tabindex: null,
  title: null,
  translate: ["yes", "no"],
  rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
  role: /* @__PURE__ */ "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
  "aria-activedescendant": null,
  "aria-atomic": Te,
  "aria-autocomplete": ["inline", "list", "both", "none"],
  "aria-busy": Te,
  "aria-checked": ["true", "false", "mixed", "undefined"],
  "aria-controls": null,
  "aria-describedby": null,
  "aria-disabled": Te,
  "aria-dropeffect": null,
  "aria-expanded": ["true", "false", "undefined"],
  "aria-flowto": null,
  "aria-grabbed": ["true", "false", "undefined"],
  "aria-haspopup": Te,
  "aria-hidden": Te,
  "aria-invalid": ["true", "false", "grammar", "spelling"],
  "aria-label": null,
  "aria-labelledby": null,
  "aria-level": null,
  "aria-live": ["off", "polite", "assertive"],
  "aria-multiline": Te,
  "aria-multiselectable": Te,
  "aria-owns": null,
  "aria-posinset": null,
  "aria-pressed": ["true", "false", "mixed", "undefined"],
  "aria-readonly": Te,
  "aria-relevant": null,
  "aria-required": Te,
  "aria-selected": ["true", "false", "undefined"],
  "aria-setsize": null,
  "aria-sort": ["ascending", "descending", "none", "other"],
  "aria-valuemax": null,
  "aria-valuemin": null,
  "aria-valuenow": null,
  "aria-valuetext": null
}, Od = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((n) => "on" + n);
for (let n of Od)
  dd[n] = null;
class Tr {
  constructor(e, t) {
    this.tags = Object.assign(Object.assign({}, Bx), e), this.globalAttrs = Object.assign(Object.assign({}, dd), t), this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
}
Tr.default = /* @__PURE__ */ new Tr();
function pi(n, e, t = n.length) {
  if (!e)
    return "";
  let i = e.firstChild, r = i && i.getChild("TagName");
  return r ? n.sliceString(r.from, Math.min(r.to, t)) : "";
}
function mi(n, e = !1) {
  for (; n; n = n.parent)
    if (n.name == "Element")
      if (e)
        e = !1;
      else
        return n;
  return null;
}
function pd(n, e, t) {
  let i = t.tags[pi(n, mi(e))];
  return (i == null ? void 0 : i.children) || t.allTags;
}
function fo(n, e) {
  let t = [];
  for (let i = mi(e); i && !i.type.isTop; i = mi(i.parent)) {
    let r = pi(n, i);
    if (r && i.lastChild.name == "CloseTag")
      break;
    r && t.indexOf(r) < 0 && (e.name == "EndTag" || e.from >= i.firstChild.to) && t.push(r);
  }
  return t;
}
const md = /^[:\-\.\w\u00b7-\uffff]*$/;
function Rh(n, e, t, i, r) {
  let s = /\s*>/.test(n.sliceDoc(r, r + 5)) ? "" : ">", l = mi(t, !0);
  return {
    from: i,
    to: r,
    options: pd(n.doc, l, e).map((o) => ({ label: o, type: "type" })).concat(fo(n.doc, t).map((o, a) => ({
      label: "/" + o,
      apply: "/" + o + s,
      type: "type",
      boost: 99 - a
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function Xh(n, e, t, i) {
  let r = /\s*>/.test(n.sliceDoc(i, i + 5)) ? "" : ">";
  return {
    from: t,
    to: i,
    options: fo(n.doc, e).map((s, l) => ({ label: s, apply: s + r, type: "type", boost: 99 - l })),
    validFor: md
  };
}
function jx(n, e, t, i) {
  let r = [], s = 0;
  for (let l of pd(n.doc, t, e))
    r.push({ label: "<" + l, type: "type" });
  for (let l of fo(n.doc, t))
    r.push({ label: "</" + l + ">", type: "type", boost: 99 - s++ });
  return { from: i, to: i, options: r, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function Wx(n, e, t, i, r) {
  let s = mi(t), l = s ? e.tags[pi(n.doc, s)] : null, o = l && l.attrs ? Object.keys(l.attrs) : [], a = l && l.globalAttrs === !1 ? o : o.length ? o.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: i,
    to: r,
    options: a.map((h) => ({ label: h, type: "property" })),
    validFor: md
  };
}
function Gx(n, e, t, i, r) {
  var s;
  let l = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild("AttributeName"), o = [], a;
  if (l) {
    let h = n.sliceDoc(l.from, l.to), c = e.globalAttrs[h];
    if (!c) {
      let u = mi(t), f = u ? e.tags[pi(n.doc, u)] : null;
      c = (f == null ? void 0 : f.attrs) && f.attrs[h];
    }
    if (c) {
      let u = n.sliceDoc(i, r).toLowerCase(), f = '"', d = '"';
      /^['"]/.test(u) ? (a = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/, f = "", d = n.sliceDoc(r, r + 1) == u[0] ? "" : u[0], u = u.slice(1), i++) : a = /^[^\s<>='"]*$/;
      for (let O of c)
        o.push({ label: O, apply: f + O + d, type: "constant" });
    }
  }
  return { from: i, to: r, options: o, validFor: a };
}
function Ix(n, e) {
  let { state: t, pos: i } = e, r = J(t).resolveInner(i, -1), s = r.resolve(i);
  for (let l = i, o; s == r && (o = r.childBefore(l)); ) {
    let a = o.lastChild;
    if (!a || !a.type.isError || a.from < a.to)
      break;
    s = r = o, l = a.from;
  }
  return r.name == "TagName" ? r.parent && /CloseTag$/.test(r.parent.name) ? Xh(t, r, r.from, i) : Rh(t, n, r, r.from, i) : r.name == "StartTag" ? Rh(t, n, r, i, i) : r.name == "StartCloseTag" || r.name == "IncompleteCloseTag" ? Xh(t, r, i, i) : r.name == "OpenTag" || r.name == "SelfClosingTag" || r.name == "AttributeName" ? Wx(t, n, r, r.name == "AttributeName" ? r.from : i, i) : r.name == "Is" || r.name == "AttributeValue" || r.name == "UnquotedAttributeValue" ? Gx(t, n, r, r.name == "Is" ? i : r.from, i) : e.explicit && (s.name == "Element" || s.name == "Text" || s.name == "Document") ? jx(t, n, r, i) : null;
}
function Nx(n) {
  let { extraTags: e, extraGlobalAttributes: t } = n, i = t || e ? new Tr(e, t) : Tr.default;
  return (r) => Ix(i, r);
}
const Ux = /* @__PURE__ */ Xe.parser.configure({ top: "SingleExpression" }), gd = [
  {
    tag: "script",
    attrs: (n) => n.type == "text/typescript" || n.lang == "ts",
    parser: Gf.parser
  },
  {
    tag: "script",
    attrs: (n) => n.type == "text/babel" || n.type == "text/jsx",
    parser: If.parser
  },
  {
    tag: "script",
    attrs: (n) => n.type == "text/typescript-jsx",
    parser: Nf.parser
  },
  {
    tag: "script",
    attrs(n) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(n.type);
    },
    parser: Ux
  },
  {
    tag: "script",
    attrs(n) {
      return !n.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(n.type);
    },
    parser: Xe.parser
  },
  {
    tag: "style",
    attrs(n) {
      return (!n.lang || n.lang == "css") && (!n.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(n.type));
    },
    parser: Cr.parser
  }
], yd = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ Cr.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ Od.map((n) => ({ name: n, parser: Xe.parser }))), Qd = /* @__PURE__ */ ci.define({
  name: "html",
  parser: /* @__PURE__ */ lx.configure({
    props: [
      /* @__PURE__ */ Vr.add({
        Element(n) {
          let e = /^(\s*)(<\/)?/.exec(n.textAfter);
          return n.node.to <= n.pos + e[0].length ? n.continue() : n.lineIndent(n.node.from) + (e[2] ? 0 : n.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(n) {
          return n.column(n.node.from) + n.unit;
        },
        Document(n) {
          if (n.pos + /\s*/.exec(n.textAfter)[0].length < n.node.to)
            return n.continue();
          let e = null, t;
          for (let i = n.node; ; ) {
            let r = i.lastChild;
            if (!r || r.name != "Element" || r.to != i.to)
              break;
            e = i = r;
          }
          return e && !((t = e.lastChild) && (t.name == "CloseTag" || t.name == "SelfClosingTag")) ? n.lineIndent(e.from) + n.unit : null;
        }
      }),
      /* @__PURE__ */ Yr.add({
        Element(n) {
          let e = n.firstChild, t = n.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : n.to };
        }
      }),
      /* @__PURE__ */ Zu.add({
        "OpenTag CloseTag": (n) => n.getChild("TagName")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-._"
  }
}), Jn = /* @__PURE__ */ Qd.configure({
  wrap: /* @__PURE__ */ od(gd, yd)
});
function Fx(n = {}) {
  let e = "", t;
  n.matchClosingTags === !1 && (e = "noMatch"), n.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (n.nestedLanguages && n.nestedLanguages.length || n.nestedAttributes && n.nestedAttributes.length) && (t = od((n.nestedLanguages || []).concat(gd), (n.nestedAttributes || []).concat(yd)));
  let i = t ? Qd.configure({ wrap: t, dialect: e }) : e ? Jn.configure({ dialect: e }) : Jn;
  return new jl(i, [
    Jn.data.of({ autocomplete: Nx(n) }),
    n.autoCloseTags !== !1 ? Hx : [],
    bb().support,
    Lx().support
  ]);
}
const Zh = /* @__PURE__ */ new Set(/* @__PURE__ */ "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), Hx = /* @__PURE__ */ $.inputHandler.of((n, e, t, i, r) => {
  if (n.composing || n.state.readOnly || e != t || i != ">" && i != "/" || !Jn.isActiveAt(n.state, e, -1))
    return !1;
  let s = r(), { state: l } = s, o = l.changeByRange((a) => {
    var h, c, u;
    let f = l.doc.sliceString(a.from - 1, a.to) == i, { head: d } = a, O = J(l).resolveInner(d, -1), m;
    if (f && i == ">" && O.name == "EndTag") {
      let g = O.parent;
      if (((c = (h = g.parent) === null || h === void 0 ? void 0 : h.lastChild) === null || c === void 0 ? void 0 : c.name) != "CloseTag" && (m = pi(l.doc, g.parent, d)) && !Zh.has(m)) {
        let y = d + (l.doc.sliceString(d, d + 1) === ">" ? 1 : 0), b = `</${m}>`;
        return { range: a, changes: { from: d, to: y, insert: b } };
      }
    } else if (f && i == "/" && O.name == "IncompleteCloseTag") {
      let g = O.parent;
      if (O.from == d - 2 && ((u = g.lastChild) === null || u === void 0 ? void 0 : u.name) != "CloseTag" && (m = pi(l.doc, g, d)) && !Zh.has(m)) {
        let y = d + (l.doc.sliceString(d, d + 1) === ">" ? 1 : 0), b = `${m}>`;
        return {
          range: Q.cursor(d + b.length, -1),
          changes: { from: d, to: y, insert: b }
        };
      }
    }
    return { range: a };
  });
  return o.changes.empty ? !1 : (n.dispatch([
    s,
    l.update(o, {
      userEvent: "input.complete",
      scrollIntoView: !0
    })
  ]), !0);
}), Kx = {
  svg: {
    info: "svg element",
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "script",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      onunload: null,
      onabort: null,
      onerror: null,
      onresize: null,
      onscroll: null,
      onzoom: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      viewBox: null,
      preserveAspectRatio: null,
      zoomAndPan: null,
      x: null,
      y: null,
      width: null,
      height: null,
      contentScriptType: null,
      contentStyleType: null,
      version: null
    }
  },
  g: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "script",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null
    }
  },
  defs: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "script",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null
    }
  },
  desc: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      class: null,
      style: null,
      content: null
    }
  },
  title: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      class: null,
      style: null,
      content: null
    }
  },
  symbol: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      viewBox: null,
      preserveAspectRatio: null
    }
  },
  use: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      x: null,
      y: null,
      width: null,
      height: null
    }
  },
  image: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      clip: [
        "auto",
        "inherit"
      ],
      overflow: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      x: null,
      y: null,
      width: null,
      height: null
    }
  },
  switch: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "switch",
      "a",
      "foreignObject",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null
    }
  },
  style: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      type: null,
      media: null,
      title: null
    }
  },
  path: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "marker-start": [
        "none",
        "inherit"
      ],
      "marker-mid": [
        "none",
        "inherit"
      ],
      "marker-end": [
        "none",
        "inherit"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      d: null,
      pathLength: null
    }
  },
  rect: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      x: null,
      y: null,
      width: null,
      height: null,
      rx: null,
      ry: null
    }
  },
  circle: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      cx: null,
      cy: null,
      r: null
    }
  },
  ellipse: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      cx: null,
      cy: null,
      rx: null,
      ry: null
    }
  },
  line: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "marker-start": [
        "none",
        "inherit"
      ],
      "marker-mid": [
        "none",
        "inherit"
      ],
      "marker-end": [
        "none",
        "inherit"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      x1: null,
      y1: null,
      x2: null,
      y2: null
    }
  },
  polyline: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "marker-start": [
        "none",
        "inherit"
      ],
      "marker-mid": [
        "none",
        "inherit"
      ],
      "marker-end": [
        "none",
        "inherit"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      points: null
    }
  },
  polygon: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "marker-start": [
        "none",
        "inherit"
      ],
      "marker-mid": [
        "none",
        "inherit"
      ],
      "marker-end": [
        "none",
        "inherit"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      points: null
    }
  },
  text: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "tspan",
      "tref",
      "textPath",
      "altGlyph",
      "a",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "alignment-baseline": null,
      "baseline-shift": [
        "baseline",
        "sub",
        "super",
        "inherit"
      ],
      direction: null,
      "dominant-baseline": null,
      "glyph-orientation-horizontal": [
        "inherit"
      ],
      "glyph-orientation-vertical": [
        "inherit",
        "auto"
      ],
      "letter-spacing": [
        "auto",
        "exact"
      ],
      "text-anchor": null,
      "text-decoration": [
        "none",
        "underline",
        "overline",
        "line-through"
      ],
      "unicode-bidi": null,
      "word-spacing": [
        "auto",
        "exact"
      ],
      "writing-mode": null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      x: null,
      y: null,
      textLength: null,
      lengthAdjust: null
    }
  },
  tspan: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "tspan",
      "tref",
      "altGlyph",
      "a",
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "alignment-baseline": null,
      "baseline-shift": [
        "baseline",
        "sub",
        "super",
        "inherit"
      ],
      direction: null,
      "dominant-baseline": null,
      "glyph-orientation-horizontal": [
        "inherit"
      ],
      "glyph-orientation-vertical": [
        "inherit",
        "auto"
      ],
      "letter-spacing": [
        "auto",
        "exact"
      ],
      "text-anchor": null,
      "text-decoration": [
        "none",
        "underline",
        "overline",
        "line-through"
      ],
      "unicode-bidi": null,
      "word-spacing": [
        "auto",
        "exact"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      x: null,
      y: null,
      dx: null,
      dy: null,
      rotate: null,
      textLength: null,
      lengthAdjust: null
    }
  },
  tref: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "alignment-baseline": null,
      "baseline-shift": [
        "baseline",
        "sub",
        "super",
        "inherit"
      ],
      direction: null,
      "dominant-baseline": null,
      "glyph-orientation-horizontal": [
        "inherit"
      ],
      "glyph-orientation-vertical": [
        "inherit",
        "auto"
      ],
      "letter-spacing": [
        "auto",
        "exact"
      ],
      "text-anchor": null,
      "text-decoration": [
        "none",
        "underline",
        "overline",
        "line-through"
      ],
      "unicode-bidi": null,
      "word-spacing": [
        "auto",
        "exact"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      x: null,
      y: null,
      dx: null,
      dy: null,
      rotate: null,
      textLength: null,
      lengthAdjust: null
    }
  },
  textPath: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "tspan",
      "tref",
      "altGlyph",
      "a",
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "alignment-baseline": null,
      "baseline-shift": [
        "baseline",
        "sub",
        "super",
        "inherit"
      ],
      direction: null,
      "dominant-baseline": null,
      "glyph-orientation-horizontal": [
        "inherit"
      ],
      "glyph-orientation-vertical": [
        "inherit",
        "auto"
      ],
      "letter-spacing": [
        "auto",
        "exact"
      ],
      "text-anchor": null,
      "text-decoration": [
        "none",
        "underline",
        "overline",
        "line-through"
      ],
      "unicode-bidi": null,
      "word-spacing": [
        "auto",
        "exact"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      startOffset: null,
      textLength: null,
      lengthAdjust: null,
      method: null,
      spacing: null
    }
  },
  altGlyph: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      color: [
        "inherit",
        "white",
        "silver",
        "gray",
        "black",
        "navy",
        "blue",
        "aqua",
        "teal",
        "green",
        "olive"
      ],
      "color-interpolation": null,
      "color-rendering": null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "alignment-baseline": null,
      "baseline-shift": [
        "baseline",
        "sub",
        "super",
        "inherit"
      ],
      direction: null,
      "dominant-baseline": null,
      "glyph-orientation-horizontal": [
        "inherit"
      ],
      "glyph-orientation-vertical": [
        "inherit",
        "auto"
      ],
      "letter-spacing": [
        "auto",
        "exact"
      ],
      "text-anchor": null,
      "text-decoration": [
        "none",
        "underline",
        "overline",
        "line-through"
      ],
      "unicode-bidi": null,
      "word-spacing": [
        "auto",
        "exact"
      ],
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      glyphRef: null,
      format: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      x: null,
      y: null,
      dx: null,
      dy: null,
      rotate: null
    }
  },
  altGlyphDef: {
    globalAttrs: !1,
    children: [
      "altGlyphItem",
      "glyphRef"
    ],
    attrs: {
      id: null
    }
  },
  altGlyphItem: {
    globalAttrs: !1,
    children: [
      "glyphRef"
    ],
    attrs: {
      id: null
    }
  },
  glyphRef: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      class: null,
      style: null,
      glyphRef: null,
      format: null,
      x: null,
      y: null,
      dx: null,
      dy: null
    }
  },
  marker: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      viewBox: null,
      preserveAspectRatio: null,
      refX: null,
      refY: null,
      markerUnits: null,
      markerWidth: null,
      markerHeight: null,
      orient: null
    }
  },
  "color-profile": {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      local: null,
      name: null,
      "rendering-intent": null
    }
  },
  linearGradient: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "stop",
      "animate",
      "set",
      "animateTransform"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      gradientUnits: null,
      gradientTransform: null,
      x1: null,
      y1: null,
      x2: null,
      y2: null,
      spreadMethod: null
    }
  },
  radialGradient: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "stop",
      "animate",
      "set",
      "animateTransform"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null,
      gradientUnits: null,
      gradientTransform: null,
      cx: null,
      cy: null,
      r: null,
      fx: null,
      fy: null,
      spreadMethod: null
    }
  },
  stop: {
    globalAttrs: !1,
    children: [
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      "stop-color": null,
      "stop-opacity": null,
      class: null,
      style: null,
      offset: null
    }
  },
  pattern: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      viewBox: null,
      preserveAspectRatio: null,
      patternUnits: null,
      patternTransform: null,
      x: null,
      y: null,
      width: null,
      height: null
    }
  },
  clipPath: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      "font-family": null,
      "font-size": [
        "inherit"
      ],
      "font-size-adjust": [
        "none",
        "inherit"
      ],
      "font-stretch": [
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
      ],
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "clip-path": [
        "auto",
        "inherit",
        "none"
      ],
      "clip-rule": [
        "evenodd",
        "nonzero",
        "inherit"
      ],
      cursor: [
        "auto",
        "crosshair",
        "default",
        "pointer",
        "move",
        "e-resize",
        "ne-resize",
        "nw-resize",
        "n-resize",
        "se-resize",
        "sw-resize",
        "s-resize",
        "w-resize",
        "text",
        "wait",
        "help",
        "inherit"
      ],
      display: null,
      filter: [
        "none",
        "inherit"
      ],
      "image-rendering": null,
      mask: [
        "none",
        "inherit"
      ],
      opacity: null,
      "pointer-events": null,
      "shape-rendering": null,
      "text-rendering": null,
      visibility: null,
      "alignment-baseline": null,
      "baseline-shift": [
        "baseline",
        "sub",
        "super",
        "inherit"
      ],
      direction: null,
      "dominant-baseline": null,
      "glyph-orientation-horizontal": [
        "inherit"
      ],
      "glyph-orientation-vertical": [
        "inherit",
        "auto"
      ],
      "letter-spacing": [
        "auto",
        "exact"
      ],
      "text-anchor": null,
      "text-decoration": [
        "none",
        "underline",
        "overline",
        "line-through"
      ],
      "unicode-bidi": null,
      "word-spacing": [
        "auto",
        "exact"
      ],
      "writing-mode": null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      clipPathUnits: null
    }
  },
  mask: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      maskUnits: null,
      x: null,
      y: null,
      width: null,
      height: null
    }
  },
  filter: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "feBlend",
      "feFlood",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMorphology",
      "feOffset",
      "feSpecularLighting",
      "feTile",
      "feTurbulence",
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      filterUnits: null,
      primitiveUnits: null,
      x: null,
      y: null,
      width: null,
      height: null,
      filterRes: null
    }
  },
  feDistantLight: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      azimuth: null,
      elevation: null
    }
  },
  fePointLight: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      x: null,
      y: null,
      z: null
    }
  },
  feSpotLight: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      x: null,
      y: null,
      z: null,
      pointsAtX: null,
      pointsAtY: null,
      pointsAtZ: null,
      specularExponent: null,
      limitingConeAngle: null
    }
  },
  feBlend: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      in2: null,
      mode: null
    }
  },
  feColorMatrix: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      type: null,
      values: null
    }
  },
  feComponentTransfer: {
    globalAttrs: !1,
    children: [
      "feFuncR",
      "feFuncG",
      "feFuncB",
      "feFuncA"
    ],
    attrs: {
      id: null,
      in: null
    }
  },
  feFuncR: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      type: null,
      tableValues: null,
      slope: null,
      intercept: null,
      amplitude: null,
      exponent: null,
      offset: null,
      type2: null
    }
  },
  feFuncG: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      type: null,
      tableValues: null,
      slope: null,
      intercept: null,
      amplitude: null,
      exponent: null,
      offset: null,
      type2: null
    }
  },
  feFuncB: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      type: null,
      tableValues: null,
      slope: null,
      intercept: null,
      amplitude: null,
      exponent: null,
      offset: null,
      type2: null
    }
  },
  feFuncA: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      type: null,
      tableValues: null,
      slope: null,
      intercept: null,
      amplitude: null,
      exponent: null,
      offset: null,
      type3: null
    }
  },
  feComposite: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      in2: null,
      operator: null,
      k1: null,
      k2: null,
      k3: null,
      k4: null
    }
  },
  feConvolveMatrix: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      in: null,
      order: null,
      kernelMatrix: null,
      divisor: null,
      bias: null,
      targetX: null,
      targetY: null,
      edgeMode: null,
      kernelUnitLength: null,
      preserveAlpha: null
    }
  },
  feDiffuseLighting: {
    globalAttrs: !1,
    children: [
      "feDistantLight",
      "fePointLight",
      "feSpotLight",
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      "lighting-color": null,
      in: null,
      class: null,
      style: null,
      surfaceScale: null,
      diffuseConstant: null
    }
  },
  feDisplacementMap: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      in2: null,
      scale: null,
      xChannelSelector: null,
      yChannelSelector: null
    }
  },
  feFlood: {
    globalAttrs: !1,
    children: [
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      "flood-color": null,
      "flood-opacity": null,
      in: null,
      class: null,
      style: null
    }
  },
  feGaussianBlur: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      stdDeviation: null
    }
  },
  feImage: {
    globalAttrs: !1,
    children: [
      "animate",
      "set",
      "animateTransform"
    ],
    attrs: {
      id: null,
      x: null,
      y: null,
      width: null,
      height: null,
      result: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null
    }
  },
  feMerge: {
    globalAttrs: !1,
    children: [
      "feMergeNode"
    ],
    attrs: {
      id: null,
      x: null,
      y: null,
      width: null,
      height: null,
      result: null
    }
  },
  feMergeNode: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null
    }
  },
  feMorphology: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      operator: null,
      radius: null
    }
  },
  feOffset: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null,
      dx: null,
      dy: null
    }
  },
  feSpecularLighting: {
    globalAttrs: !1,
    children: [
      "feDistantLight",
      "fePointLight",
      "feSpotLight",
      "animate",
      "set",
      "animateColor"
    ],
    attrs: {
      id: null,
      "lighting-color": null,
      in: null,
      class: null,
      style: null,
      surfaceScale: null,
      specularConstant: null,
      specularExponent: null
    }
  },
  feTile: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      in: null
    }
  },
  feTurbulence: {
    globalAttrs: !1,
    children: [
      "animate",
      "set"
    ],
    attrs: {
      id: null,
      x: null,
      y: null,
      width: null,
      height: null,
      result: null,
      baseFrequency: null,
      numOctaves: null,
      seed: null,
      stitchTiles: null,
      type: null
    }
  },
  cursor: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      externalResourcesRequired: null,
      x: null,
      y: null
    }
  },
  a: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      target: null
    }
  },
  view: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null,
      viewBox: null,
      preserveAspectRatio: null,
      zoomAndPan: null,
      viewTarget: null
    }
  },
  animate: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onbegin: null,
      onend: null,
      onrepeat: null,
      begin: null,
      dur: null,
      end: null,
      min: null,
      max: null,
      restart: null,
      repeatCount: null,
      repeatDur: null,
      fill: null,
      calcMode: null,
      values: null,
      keyTimes: null,
      keySplines: null,
      from: null,
      to: null,
      by: null,
      additive: null,
      accumulate: null,
      externalResourcesRequired: null
    }
  },
  set: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onbegin: null,
      onend: null,
      onrepeat: null,
      begin: null,
      dur: null,
      end: null,
      min: null,
      max: null,
      restart: null,
      repeatCount: null,
      repeatDur: null,
      fill: null,
      externalResourcesRequired: null,
      to: null
    }
  },
  animateMotion: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "mpath"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onbegin: null,
      onend: null,
      onrepeat: null,
      begin: null,
      dur: null,
      end: null,
      min: null,
      max: null,
      restart: null,
      repeatCount: null,
      repeatDur: null,
      fill: null,
      calcMode: null,
      values: null,
      keyTimes: null,
      keySplines: null,
      from: null,
      to: null,
      by: null,
      additive: null,
      accumulate: null,
      externalResourcesRequired: null,
      path: null,
      keyPoints: null,
      rotate: null,
      origin: null
    }
  },
  mpath: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null
    }
  },
  animateColor: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onbegin: null,
      onend: null,
      onrepeat: null,
      begin: null,
      dur: null,
      end: null,
      min: null,
      max: null,
      restart: null,
      repeatCount: null,
      repeatDur: null,
      fill: null,
      calcMode: null,
      values: null,
      keyTimes: null,
      keySplines: null,
      from: null,
      to: null,
      by: null,
      additive: null,
      accumulate: null,
      externalResourcesRequired: null
    }
  },
  animateTransform: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata"
    ],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onbegin: null,
      onend: null,
      onrepeat: null,
      begin: null,
      dur: null,
      end: null,
      min: null,
      max: null,
      restart: null,
      repeatCount: null,
      repeatDur: null,
      fill: null,
      calcMode: null,
      values: null,
      keyTimes: null,
      keySplines: null,
      from: null,
      to: null,
      by: null,
      additive: null,
      accumulate: null,
      externalResourcesRequired: null,
      type: null
    }
  },
  font: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "font-face",
      "missing-glyph",
      "glyph",
      "hkern",
      "vkern"
    ],
    attrs: {
      id: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      "horiz-origin-x": null,
      "horiz-origin-y": null,
      "horiz-adv-x": null,
      "vert-origin-x": null,
      "vert-origin-y": null,
      "vert-adv-y": null
    }
  },
  glyph: {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "script",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      class: null,
      style: null,
      unicode: null,
      "glyph-name": null,
      d: null,
      "vert-text-orient": null,
      arabic: null,
      han: null,
      "horiz-adv-x": null,
      "vert-adv-y": null
    }
  },
  "missing-glyph": {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "defs",
      "path",
      "text",
      "rect",
      "circle",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "use",
      "image",
      "svg",
      "g",
      "view",
      "switch",
      "a",
      "altGlyphDef",
      "script",
      "style",
      "symbol",
      "marker",
      "clipPath",
      "mask",
      "linearGradient",
      "radialGradient",
      "pattern",
      "filter",
      "cursor",
      "font",
      "animate",
      "set",
      "animateMotion",
      "animateColor",
      "animateTransform",
      "color-profile",
      "font-face"
    ],
    attrs: {
      id: null,
      class: null,
      style: null,
      d: null,
      "horiz-adv-x": null,
      "vert-adv-y": null
    }
  },
  hkern: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      u1: null,
      g1: null,
      u2: null,
      g2: null,
      k: null
    }
  },
  vkern: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      u1: null,
      g1: null,
      u2: null,
      g2: null,
      k: null
    }
  },
  "font-face": {
    globalAttrs: !1,
    children: [
      "desc",
      "title",
      "metadata",
      "font-face-src",
      "definition-src"
    ],
    attrs: {
      id: null,
      "font-family": null,
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      "font-stretch": null,
      "font-size": [
        "inherit"
      ],
      "unicode-range": null,
      "units-per-em": null,
      "panose-1": null,
      stemv: null,
      stemh: null,
      slope: null,
      "cap-height": null,
      "x-height": null,
      "accent-height": null,
      ascent: null,
      descent: null,
      widths: null,
      bbox: null,
      ideographic: null,
      baseline: null,
      centerline: null,
      mathline: null,
      hanging: null,
      topline: null,
      "underline-position": null,
      "underline-thickness": null,
      "strikethrough-position": null,
      "strikethrough-thickness": null,
      "overline-position": null,
      "overline-thickness": null
    }
  },
  "font-face-src": {
    globalAttrs: !1,
    children: [
      "font-face-uri",
      "font-face-name"
    ],
    attrs: {
      id: null
    }
  },
  "font-face-uri": {
    globalAttrs: !1,
    children: [
      "font-face-format"
    ],
    attrs: {
      id: null
    }
  },
  "font-face-format": {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      string: null
    }
  },
  "font-face-name": {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      name: null
    }
  },
  "definition-src": {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null
    }
  },
  metadata: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null
    }
  },
  foreignObject: {
    globalAttrs: !1,
    children: [],
    attrs: {
      id: null,
      requiredFeatures: null,
      requiredExtensions: null,
      systemLanguage: null,
      onfocusin: null,
      onfocusout: null,
      onactivate: null,
      onclick: null,
      onmousedown: null,
      onmouseup: null,
      onmouseover: null,
      onmousemove: null,
      onmouseout: null,
      onload: null,
      externalResourcesRequired: null,
      class: null,
      style: null,
      transform: null,
      x: null,
      y: null,
      width: null,
      height: null,
      content: null
    }
  }
};
function Jx(n) {
  for (let e in n) {
    const t = Object.assign({}, n[e].attrs || {});
    for (let i in t)
      if (i.substring(0, 2) === "on") {
        const r = i.substring(2);
        t[`g-on:${r}`] = t[i], t[`@${r}`] = t[i];
      } else
        t[`g-bind:${i}`] = t[i], t[`:${i}`] = t[i];
    e === "svg" && (t["g-on:init"] = "", t["@init"] = ""), e === "defs" && (t["g-for"] = ""), t["g-if"] = "", n[e].attrs = t;
  }
  return n;
}
const Oo = ({ variant: n, settings: e, styles: t }) => {
  const i = $.theme(
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "&": {
        backgroundColor: e.background,
        color: e.foreground
      },
      ".cm-content": {
        caretColor: e.caret
      },
      ".cm-cursor, .cm-dropCursor": {
        borderLeftColor: e.caret
      },
      "&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection": {
        backgroundColor: e.selection
      },
      ".cm-activeLine": {
        backgroundColor: e.lineHighlight
      },
      ".cm-gutters": {
        backgroundColor: e.gutterBackground,
        color: e.gutterForeground
      },
      ".cm-activeLineGutter": {
        backgroundColor: e.lineHighlight
      }
    },
    {
      dark: n === "dark"
    }
  ), r = fn.define(t);
  return [i, Tu(r)];
}, eS = Oo({
  variant: "dark",
  settings: {
    background: "transparent",
    foreground: "#e0e0e0",
    caret: "#ffffffa6",
    selection: "#122bbb",
    gutterBackground: "var(--background-color, transparent)",
    gutterForeground: "#e0e0e090",
    lineHighlight: "#ffffff0f"
  },
  styles: [
    {
      tag: p.comment,
      color: "#6272a4"
    },
    {
      tag: [p.string, p.special(p.brace)],
      color: "#f8c555"
    },
    {
      tag: [p.number, p.self, p.bool, p.null],
      color: "#bd93f9"
    },
    {
      tag: [p.keyword, p.operator],
      color: "#ff79c6"
    },
    {
      tag: [p.definitionKeyword, p.typeName],
      color: "#e2777a"
    },
    {
      tag: p.definition(p.typeName),
      color: "#f8f8f2"
    },
    {
      tag: [
        p.className,
        p.definition(p.propertyName),
        p.function(p.variableName),
        p.attributeName
      ],
      color: "#7ec699"
    }
  ]
}), tS = Oo({
  variant: "light",
  settings: {
    background: "transparent",
    foreground: "#4d4d4c",
    caret: "#000000",
    selection: "#036dd626",
    gutterBackground: "var(--background-color, transparent)",
    gutterForeground: "#4d4d4c80",
    lineHighlight: "#8a91991a"
  },
  styles: [
    {
      tag: p.comment,
      color: "#8e908c"
    },
    {
      tag: [p.variableName, p.self, p.propertyName, p.attributeName, p.regexp],
      color: "#c82829"
    },
    {
      tag: [p.number, p.bool, p.null],
      color: "#f5871f"
    },
    {
      tag: [p.className, p.typeName, p.definition(p.typeName)],
      color: "#c99e00"
    },
    {
      tag: [p.string, p.special(p.brace)],
      color: "#718c00"
    },
    {
      tag: p.operator,
      color: "#3e999f"
    },
    {
      tag: [p.definition(p.propertyName), p.function(p.variableName)],
      color: "#4271ae"
    },
    {
      tag: p.keyword,
      color: "#8959a8"
    },
    {
      tag: p.derefOperator,
      color: "#4d4d4c"
    }
  ]
});
Oo({
  variant: "dark",
  settings: {
    background: "#2d2f3f",
    foreground: "#f8f8f2",
    caret: "#f8f8f0",
    selection: "#44475a",
    gutterBackground: "#282a36",
    gutterForeground: "rgb(144, 145, 148)",
    lineHighlight: "#44475a"
  },
  styles: [
    {
      tag: p.comment,
      color: "#6272a4"
    },
    {
      tag: [p.string, p.special(p.brace)],
      color: "#f1fa8c"
    },
    {
      tag: [p.number, p.self, p.bool, p.null],
      color: "#bd93f9"
    },
    {
      tag: [p.keyword, p.operator],
      color: "#ff79c6"
    },
    {
      tag: [p.definitionKeyword, p.typeName],
      color: "#8be9fd"
    },
    {
      tag: p.definition(p.typeName),
      color: "#f8f8f2"
    },
    {
      tag: [
        p.className,
        p.definition(p.propertyName),
        p.function(p.variableName),
        p.attributeName
      ],
      color: "#50fa7b"
    }
  ]
});
const Mh = {
  dark: eS,
  light: tS
}, qh = Xe.parser.configure({ top: "SingleExpression" }), iS = [
  {
    tag: "script",
    attrs: (n) => n.type === "methods",
    parser: Xe.parser
  },
  {
    tag: "g-script",
    attrs: (n) => n.type === "methods",
    parser: Xe.parser
  },
  {
    tag: "script",
    attrs: (n) => n.type === "data" || n.type === "config",
    parser: qh
  },
  {
    tag: "g-script",
    attrs: (n) => n.type === "data" || n.type === "config",
    parser: qh
  }
], nS = Jx(Kx), rS = Fx({
  extraTags: nS,
  nestedLanguages: iS
}), bd = new gi(), xd = new gi(), Sd = Z.define();
function sS(n, e, t) {
  const i = [
    TQ,
    hn.of([j0]),
    rS,
    lS,
    $.updateListener.of(
      (r) => {
        r.docChanged && typeof t == "function" && t(r);
      }
    ),
    bd.of(kd(e)),
    xd.of(vd(!1))
  ];
  return E.create({
    doc: n,
    extensions: i
  });
}
function kd(n) {
  return Mh[n] || Mh.light;
}
function vd(n) {
  return $.editable.of(n);
}
const lS = se.define({
  create() {
    return R.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      t.is(Sd) ? n = n.update({ add: [oS.range(t.value)] }) : n = R.none;
    return n;
  },
  provide: (n) => $.decorations.from(n)
}), oS = R.line({
  attributes: { style: "background-color: #C0C0C040" }
});
function aS(n = "", e = document.body, t = void 0, i = "light") {
  const r = sS(n, i, t);
  let s = !1;
  const l = new $({ state: r, parent: e, editable: !1 });
  return e.addEventListener("keydown", (o) => {
    o.key === "/" && o.stopPropagation();
  }), Object.defineProperties(
    l,
    {
      theme: {
        set(o) {
          i = o, l.dispatch({
            effects: bd.reconfigure(kd(o))
          });
        },
        get() {
          return i;
        }
      },
      editable: {
        set(o) {
          s = o, l.dispatch({
            effects: xd.reconfigure(vd(s))
          });
        },
        get() {
          return s;
        }
      },
      linesHighlight: {
        get() {
          return (o) => {
            o.forEach((a) => {
              l.dispatch({
                effects: Sd.of(l.state.doc.line(a).from)
              });
            });
          };
        }
      },
      diagnostic: {
        get() {
          return (o) => {
            l.dispatch(mQ(l.state, o));
          };
        }
      }
    }
  ), l;
}
const fS = { Editor: aS };
export {
  aS as Editor,
  fS as default
};
//# sourceMappingURL=codemirror.js.map
