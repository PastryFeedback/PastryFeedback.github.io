const __vite__fileDeps = ["assets/HomePage-CY6A3wVf.js", "assets/stagger.es-BtPQt3Eg.js", "assets/index-Bcn5AO2-.js", "assets/HomePage-B3fiaPBv.css", "assets/DownloadPage-CBNdupOg.js", "assets/vue.f36acd1f-DY2OdW-e.js", "assets/PurchasedPage-C-E6mZHq.js", "assets/RecoverPage-80hkP5Dp.js", "assets/QuestionsPage-Bq3Czad8.js", "assets/PrivacyPage-B-LTo7DQ.js"],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
})();

function Lr(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let s = 0; s < r.length; s++) n[r[s]] = !0;
    return s => !!n[s]
}

function Fr(e) {
    if (W(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                s = ge(r) ? Qi(r) : Fr(r);
            if (s)
                for (const i in s) t[i] = s[i]
        }
        return t
    } else {
        if (ge(e)) return e;
        if (de(e)) return e
    }
}
const Gi = /;(?![^(]*\))/g,
    Xi = /:([^]+)/,
    Zi = /\/\*.*?\*\//gs;

function Qi(e) {
    const t = {};
    return e.replace(Zi, "").split(Gi).forEach(n => {
        if (n) {
            const r = n.split(Xi);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function ft(e) {
    let t = "";
    if (ge(e)) t = e;
    else if (W(e))
        for (let n = 0; n < e.length; n++) {
            const r = ft(e[n]);
            r && (t += r + " ")
        } else if (de(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Yi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    zi = Lr(Yi);

function ms(e) {
    return !!e || e === ""
}
const co = e => ge(e) ? e : e == null ? "" : W(e) || de(e) && (e.toString === bs || !Q(e.toString)) ? JSON.stringify(e, gs, 2) : String(e),
    gs = (e, t) => t && t.__v_isRef ? gs(e, t.value) : Mt(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
    } : vs(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : de(t) && !W(t) && !ws(t) ? String(t) : t,
    fe = {},
    It = [],
    We = () => {},
    Ji = () => !1,
    ea = /^on[^a-z]/,
    mn = e => ea.test(e),
    $r = e => e.startsWith("onUpdate:"),
    ye = Object.assign,
    Br = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    ta = Object.prototype.hasOwnProperty,
    re = (e, t) => ta.call(e, t),
    W = Array.isArray,
    Mt = e => Vn(e) === "[object Map]",
    vs = e => Vn(e) === "[object Set]",
    Q = e => typeof e == "function",
    ge = e => typeof e == "string",
    Dr = e => typeof e == "symbol",
    de = e => e !== null && typeof e == "object",
    ys = e => de(e) && Q(e.then) && Q(e.catch),
    bs = Object.prototype.toString,
    Vn = e => bs.call(e),
    na = e => Vn(e).slice(8, -1),
    ws = e => Vn(e) === "[object Object]",
    jr = e => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    tn = Lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Kn = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    ra = /-(\w)/g,
    Ge = Kn(e => e.replace(ra, (t, n) => n ? n.toUpperCase() : "")),
    oa = /\B([A-Z])/g,
    kt = Kn(e => e.replace(oa, "-$1").toLowerCase()),
    qn = Kn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    or = Kn(e => e ? `on${qn(e)}` : ""),
    un = (e, t) => !Object.is(e, t),
    sr = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    },
    On = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    sa = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    ia = e => {
        const t = ge(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let uo;
const aa = () => uo || (uo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Se;
class xs {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Se;
            try {
                return Se = this, t()
            } finally {
                Se = n
            }
        }
    }
    on() {
        Se = this
    }
    off() {
        Se = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function As(e) {
    return new xs(e)
}

function la(e, t = Se) {
    t && t.active && t.effects.push(e)
}

function Ts() {
    return Se
}

function ca(e) {
    Se && Se.cleanups.push(e)
}
const Nr = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    },
    Es = e => (e.w & dt) > 0,
    ks = e => (e.n & dt) > 0,
    ua = ({
        deps: e
    }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= dt
    },
    fa = e => {
        const {
            deps: t
        } = e;
        if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
                const s = t[r];
                Es(s) && !ks(s) ? s.delete(e) : t[n++] = s, s.w &= ~dt, s.n &= ~dt
            }
            t.length = n
        }
    },
    Rn = new WeakMap;
let en = 0,
    dt = 1;
const gr = 30;
let Be;
const At = Symbol(""),
    vr = Symbol("");
class Vr {
    constructor(t, n = null, r) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, la(this, r)
    }
    run() {
        if (!this.active) return this.fn();
        let t = Be,
            n = at;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = Be, Be = this, at = !0, dt = 1 << ++en, en <= gr ? ua(this) : fo(this), this.fn()
        } finally {
            en <= gr && fa(this), dt = 1 << --en, Be = this.parent, at = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        Be === this ? this.deferStop = !0 : this.active && (fo(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function fo(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let at = !0;
const Ss = [];

function Ut() {
    Ss.push(at), at = !1
}

function Wt() {
    const e = Ss.pop();
    at = e === void 0 ? !0 : e
}

function Ee(e, t, n) {
    if (at && Be) {
        let r = Rn.get(e);
        r || Rn.set(e, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = Nr()), Ps(s)
    }
}

function Ps(e, t) {
    let n = !1;
    en <= gr ? ks(e) || (e.n |= dt, n = !Es(e)) : n = !e.has(Be), n && (e.add(Be), Be.deps.push(e))
}

function Qe(e, t, n, r, s, i) {
    const l = Rn.get(e);
    if (!l) return;
    let f = [];
    if (t === "clear") f = [...l.values()];
    else if (n === "length" && W(e)) {
        const u = Number(r);
        l.forEach((d, p) => {
            (p === "length" || p >= u) && f.push(d)
        })
    } else switch (n !== void 0 && f.push(l.get(n)), t) {
        case "add":
            W(e) ? jr(n) && f.push(l.get("length")) : (f.push(l.get(At)), Mt(e) && f.push(l.get(vr)));
            break;
        case "delete":
            W(e) || (f.push(l.get(At)), Mt(e) && f.push(l.get(vr)));
            break;
        case "set":
            Mt(e) && f.push(l.get(At));
            break
    }
    if (f.length === 1) f[0] && yr(f[0]);
    else {
        const u = [];
        for (const d of f) d && u.push(...d);
        yr(Nr(u))
    }
}

function yr(e, t) {
    const n = W(e) ? e : [...e];
    for (const r of n) r.computed && po(r);
    for (const r of n) r.computed || po(r)
}

function po(e, t) {
    (e !== Be || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function da(e, t) {
    var n;
    return (n = Rn.get(e)) === null || n === void 0 ? void 0 : n.get(t)
}
const pa = Lr("__proto__,__v_isRef,__isVue"),
    Cs = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Dr)),
    ha = Kr(),
    _a = Kr(!1, !0),
    ma = Kr(!0),
    ho = ga();

function ga() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = ee(this);
            for (let i = 0, l = this.length; i < l; i++) Ee(r, "get", i + "");
            const s = r[t](...n);
            return s === -1 || s === !1 ? r[t](...n.map(ee)) : s
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Ut();
            const r = ee(this)[t].apply(this, n);
            return Wt(), r
        }
    }), e
}

function va(e) {
    const t = ee(this);
    return Ee(t, "has", e), t.hasOwnProperty(e)
}

function Kr(e = !1, t = !1) {
    return function(r, s, i) {
        if (s === "__v_isReactive") return !e;
        if (s === "__v_isReadonly") return e;
        if (s === "__v_isShallow") return t;
        if (s === "__v_raw" && i === (e ? t ? Ma : Ms : t ? Is : Hs).get(r)) return r;
        const l = W(r);
        if (!e) {
            if (l && re(ho, s)) return Reflect.get(ho, s, i);
            if (s === "hasOwnProperty") return va
        }
        const f = Reflect.get(r, s, i);
        return (Dr(s) ? Cs.has(s) : pa(s)) || (e || Ee(r, "get", s), t) ? f : _e(f) ? l && jr(s) ? f : f.value : de(f) ? e ? Ls(f) : Gt(f) : f
    }
}
const ya = Os(),
    ba = Os(!0);

function Os(e = !1) {
    return function(n, r, s, i) {
        let l = n[r];
        if (Bt(l) && _e(l) && !_e(s)) return !1;
        if (!e && (!Hn(s) && !Bt(s) && (l = ee(l), s = ee(s)), !W(n) && _e(l) && !_e(s))) return l.value = s, !0;
        const f = W(n) && jr(r) ? Number(r) < n.length : re(n, r),
            u = Reflect.set(n, r, s, i);
        return n === ee(i) && (f ? un(s, l) && Qe(n, "set", r, s) : Qe(n, "add", r, s)), u
    }
}

function wa(e, t) {
    const n = re(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && Qe(e, "delete", t, void 0), r
}

function xa(e, t) {
    const n = Reflect.has(e, t);
    return (!Dr(t) || !Cs.has(t)) && Ee(e, "has", t), n
}

function Aa(e) {
    return Ee(e, "iterate", W(e) ? "length" : At), Reflect.ownKeys(e)
}
const Rs = {
        get: ha,
        set: ya,
        deleteProperty: wa,
        has: xa,
        ownKeys: Aa
    },
    Ta = {
        get: ma,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        }
    },
    Ea = ye({}, Rs, {
        get: _a,
        set: ba
    }),
    qr = e => e,
    Un = e => Reflect.getPrototypeOf(e);

function vn(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = ee(e),
        i = ee(t);
    n || (t !== i && Ee(s, "get", t), Ee(s, "get", i));
    const {
        has: l
    } = Un(s), f = r ? qr : n ? Gr : fn;
    if (l.call(s, t)) return f(e.get(t));
    if (l.call(s, i)) return f(e.get(i));
    e !== s && e.get(t)
}

function yn(e, t = !1) {
    const n = this.__v_raw,
        r = ee(n),
        s = ee(e);
    return t || (e !== s && Ee(r, "has", e), Ee(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function bn(e, t = !1) {
    return e = e.__v_raw, !t && Ee(ee(e), "iterate", At), Reflect.get(e, "size", e)
}

function _o(e) {
    e = ee(e);
    const t = ee(this);
    return Un(t).has.call(t, e) || (t.add(e), Qe(t, "add", e, e)), this
}

function mo(e, t) {
    t = ee(t);
    const n = ee(this),
        {
            has: r,
            get: s
        } = Un(n);
    let i = r.call(n, e);
    i || (e = ee(e), i = r.call(n, e));
    const l = s.call(n, e);
    return n.set(e, t), i ? un(t, l) && Qe(n, "set", e, t) : Qe(n, "add", e, t), this
}

function go(e) {
    const t = ee(this),
        {
            has: n,
            get: r
        } = Un(t);
    let s = n.call(t, e);
    s || (e = ee(e), s = n.call(t, e)), r && r.call(t, e);
    const i = t.delete(e);
    return s && Qe(t, "delete", e, void 0), i
}

function vo() {
    const e = ee(this),
        t = e.size !== 0,
        n = e.clear();
    return t && Qe(e, "clear", void 0, void 0), n
}

function wn(e, t) {
    return function(r, s) {
        const i = this,
            l = i.__v_raw,
            f = ee(l),
            u = t ? qr : e ? Gr : fn;
        return !e && Ee(f, "iterate", At), l.forEach((d, p) => r.call(s, u(d), u(p), i))
    }
}

function xn(e, t, n) {
    return function(...r) {
        const s = this.__v_raw,
            i = ee(s),
            l = Mt(i),
            f = e === "entries" || e === Symbol.iterator && l,
            u = e === "keys" && l,
            d = s[e](...r),
            p = n ? qr : t ? Gr : fn;
        return !t && Ee(i, "iterate", u ? vr : At), {
            next() {
                const {
                    value: o,
                    done: a
                } = d.next();
                return a ? {
                    value: o,
                    done: a
                } : {
                    value: f ? [p(o[0]), p(o[1])] : p(o),
                    done: a
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function ze(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}

function ka() {
    const e = {
            get(i) {
                return vn(this, i)
            },
            get size() {
                return bn(this)
            },
            has: yn,
            add: _o,
            set: mo,
            delete: go,
            clear: vo,
            forEach: wn(!1, !1)
        },
        t = {
            get(i) {
                return vn(this, i, !1, !0)
            },
            get size() {
                return bn(this)
            },
            has: yn,
            add: _o,
            set: mo,
            delete: go,
            clear: vo,
            forEach: wn(!1, !0)
        },
        n = {
            get(i) {
                return vn(this, i, !0)
            },
            get size() {
                return bn(this, !0)
            },
            has(i) {
                return yn.call(this, i, !0)
            },
            add: ze("add"),
            set: ze("set"),
            delete: ze("delete"),
            clear: ze("clear"),
            forEach: wn(!0, !1)
        },
        r = {
            get(i) {
                return vn(this, i, !0, !0)
            },
            get size() {
                return bn(this, !0)
            },
            has(i) {
                return yn.call(this, i, !0)
            },
            add: ze("add"),
            set: ze("set"),
            delete: ze("delete"),
            clear: ze("clear"),
            forEach: wn(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        e[i] = xn(i, !1, !1), n[i] = xn(i, !0, !1), t[i] = xn(i, !1, !0), r[i] = xn(i, !0, !0)
    }), [e, n, t, r]
}
const [Sa, Pa, Ca, Oa] = ka();

function Ur(e, t) {
    const n = t ? e ? Oa : Ca : e ? Pa : Sa;
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(re(n, s) && s in r ? n : r, s, i)
}
const Ra = {
        get: Ur(!1, !1)
    },
    Ha = {
        get: Ur(!1, !0)
    },
    Ia = {
        get: Ur(!0, !1)
    },
    Hs = new WeakMap,
    Is = new WeakMap,
    Ms = new WeakMap,
    Ma = new WeakMap;

function La(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Fa(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : La(na(e))
}

function Gt(e) {
    return Bt(e) ? e : Wr(e, !1, Rs, Ra, Hs)
}

function $a(e) {
    return Wr(e, !1, Ea, Ha, Is)
}

function Ls(e) {
    return Wr(e, !0, Ta, Ia, Ms)
}

function Wr(e, t, n, r, s) {
    if (!de(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = s.get(e);
    if (i) return i;
    const l = Fa(e);
    if (l === 0) return e;
    const f = new Proxy(e, l === 2 ? r : n);
    return s.set(e, f), f
}

function lt(e) {
    return Bt(e) ? lt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Bt(e) {
    return !!(e && e.__v_isReadonly)
}

function Hn(e) {
    return !!(e && e.__v_isShallow)
}

function Fs(e) {
    return lt(e) || Bt(e)
}

function ee(e) {
    const t = e && e.__v_raw;
    return t ? ee(t) : e
}

function Dt(e) {
    return On(e, "__v_skip", !0), e
}
const fn = e => de(e) ? Gt(e) : e,
    Gr = e => de(e) ? Ls(e) : e;

function $s(e) {
    at && Be && (e = ee(e), Ps(e.dep || (e.dep = Nr())))
}

function Bs(e, t) {
    e = ee(e);
    const n = e.dep;
    n && yr(n)
}

function _e(e) {
    return !!(e && e.__v_isRef === !0)
}

function Wn(e) {
    return Ds(e, !1)
}

function Ba(e) {
    return Ds(e, !0)
}

function Ds(e, t) {
    return _e(e) ? e : new Da(e, t)
}
class Da {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ee(t), this._value = n ? t : fn(t)
    }
    get value() {
        return $s(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Hn(t) || Bt(t);
        t = n ? t : ee(t), un(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : fn(t), Bs(this))
    }
}

function ct(e) {
    return _e(e) ? e.value : e
}
const ja = {
    get: (e, t, n) => ct(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return _e(s) && !_e(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function js(e) {
    return lt(e) ? e : new Proxy(e, ja)
}

function Na(e) {
    const t = W(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Ka(e, n);
    return t
}
class Va {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return da(ee(this._object), this._key)
    }
}

function Ka(e, t, n) {
    const r = e[t];
    return _e(r) ? r : new Va(e, t, n)
}
var Ns;
class qa {
    constructor(t, n, r, s) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ns] = !1, this._dirty = !0, this.effect = new Vr(t, () => {
            this._dirty || (this._dirty = !0, Bs(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
    }
    get value() {
        const t = ee(this);
        return $s(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}
Ns = "__v_isReadonly";

function Ua(e, t, n = !1) {
    let r, s;
    const i = Q(e);
    return i ? (r = e, s = We) : (r = e.get, s = e.set), new qa(r, s, i || !s, n)
}

function ut(e, t, n, r) {
    let s;
    try {
        s = r ? e(...r) : e()
    } catch (i) {
        Gn(i, t, n)
    }
    return s
}

function He(e, t, n, r) {
    if (Q(e)) {
        const i = ut(e, t, n, r);
        return i && ys(i) && i.catch(l => {
            Gn(l, t, n)
        }), i
    }
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(He(e[i], t, n, r));
    return s
}

function Gn(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const l = t.proxy,
            f = n;
        for (; i;) {
            const d = i.ec;
            if (d) {
                for (let p = 0; p < d.length; p++)
                    if (d[p](e, l, f) === !1) return
            }
            i = i.parent
        }
        const u = t.appContext.config.errorHandler;
        if (u) {
            ut(u, null, 10, [e, l, f]);
            return
        }
    }
    Wa(e, n, s, r)
}

function Wa(e, t, n, r = !0) {
    console.error(e)
}
let dn = !1,
    br = !1;
const be = [];
let qe = 0;
const Lt = [];
let Ze = null,
    yt = 0;
const Vs = Promise.resolve();
let Xr = null;

function Xn(e) {
    const t = Xr || Vs;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Ga(e) {
    let t = qe + 1,
        n = be.length;
    for (; t < n;) {
        const r = t + n >>> 1;
        pn(be[r]) < e ? t = r + 1 : n = r
    }
    return t
}

function Zr(e) {
    (!be.length || !be.includes(e, dn && e.allowRecurse ? qe + 1 : qe)) && (e.id == null ? be.push(e) : be.splice(Ga(e.id), 0, e), Ks())
}

function Ks() {
    !dn && !br && (br = !0, Xr = Vs.then(qs))
}

function Xa(e) {
    const t = be.indexOf(e);
    t > qe && be.splice(t, 1)
}

function Za(e) {
    W(e) ? Lt.push(...e) : (!Ze || !Ze.includes(e, e.allowRecurse ? yt + 1 : yt)) && Lt.push(e), Ks()
}

function yo(e, t = dn ? qe + 1 : 0) {
    for (; t < be.length; t++) {
        const n = be[t];
        n && n.pre && (be.splice(t, 1), t--, n())
    }
}

function In(e) {
    if (Lt.length) {
        const t = [...new Set(Lt)];
        if (Lt.length = 0, Ze) {
            Ze.push(...t);
            return
        }
        for (Ze = t, Ze.sort((n, r) => pn(n) - pn(r)), yt = 0; yt < Ze.length; yt++) Ze[yt]();
        Ze = null, yt = 0
    }
}
const pn = e => e.id == null ? 1 / 0 : e.id,
    Qa = (e, t) => {
        const n = pn(e) - pn(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function qs(e) {
    br = !1, dn = !0, be.sort(Qa);
    try {
        for (qe = 0; qe < be.length; qe++) {
            const t = be[qe];
            t && t.active !== !1 && ut(t, null, 14)
        }
    } finally {
        qe = 0, be.length = 0, In(), dn = !1, Xr = null, (be.length || Lt.length) && qs()
    }
}

function Ya(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || fe;
    let s = n;
    const i = t.startsWith("update:"),
        l = i && t.slice(7);
    if (l && l in r) {
        const p = `${l==="modelValue"?"model":l}Modifiers`,
            {
                number: o,
                trim: a
            } = r[p] || fe;
        a && (s = n.map(c => ge(c) ? c.trim() : c)), o && (s = n.map(sa))
    }
    let f, u = r[f = or(t)] || r[f = or(Ge(t))];
    !u && i && (u = r[f = or(kt(t))]), u && He(u, e, 6, s);
    const d = r[f + "Once"];
    if (d) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[f]) return;
        e.emitted[f] = !0, He(d, e, 6, s)
    }
}

function Us(e, t, n = !1) {
    const r = t.emitsCache,
        s = r.get(e);
    if (s !== void 0) return s;
    const i = e.emits;
    let l = {},
        f = !1;
    if (!Q(e)) {
        const u = d => {
            const p = Us(d, t, !0);
            p && (f = !0, ye(l, p))
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    return !i && !f ? (de(e) && r.set(e, null), null) : (W(i) ? i.forEach(u => l[u] = null) : ye(l, i), de(e) && r.set(e, l), l)
}

function Zn(e, t) {
    return !e || !mn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, kt(t)) || re(e, t))
}
let ve = null,
    Ws = null;

function Mn(e) {
    const t = ve;
    return ve = e, Ws = e && e.type.__scopeId || null, t
}

function Fe(e, t = ve, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && Co(-1);
        const i = Mn(t);
        let l;
        try {
            l = e(...s)
        } finally {
            Mn(i), r._d && Co(1)
        }
        return l
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function ir(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        props: i,
        propsOptions: [l],
        slots: f,
        attrs: u,
        emit: d,
        render: p,
        renderCache: o,
        data: a,
        setupState: c,
        ctx: _,
        inheritAttrs: g
    } = e;
    let b, h;
    const y = Mn(e);
    try {
        if (n.shapeFlag & 4) {
            const C = s || r;
            b = $e(p.call(C, C, o, i, c, a, _)), h = u
        } else {
            const C = t;
            b = $e(C.length > 1 ? C(i, {
                attrs: u,
                slots: f,
                emit: d
            }) : C(i, null)), h = t.props ? u : za(u)
        }
    } catch (C) {
        sn.length = 0, Gn(C, e, 1), b = ue(Ce)
    }
    let w = b;
    if (h && g !== !1) {
        const C = Object.keys(h),
            {
                shapeFlag: F
            } = w;
        C.length && F & 7 && (l && C.some($r) && (h = Ja(h, l)), w = pt(w, h))
    }
    return n.dirs && (w = pt(w), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (w.transition = n.transition), b = w, Mn(y), b
}
const za = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || mn(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    Ja = (e, t) => {
        const n = {};
        for (const r in e)(!$r(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function el(e, t, n) {
    const {
        props: r,
        children: s,
        component: i
    } = e, {
        props: l,
        children: f,
        patchFlag: u
    } = t, d = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && u >= 0) {
        if (u & 1024) return !0;
        if (u & 16) return r ? bo(r, l, d) : !!l;
        if (u & 8) {
            const p = t.dynamicProps;
            for (let o = 0; o < p.length; o++) {
                const a = p[o];
                if (l[a] !== r[a] && !Zn(d, a)) return !0
            }
        }
    } else return (s || f) && (!f || !f.$stable) ? !0 : r === l ? !1 : r ? l ? bo(r, l, d) : !0 : !!l;
    return !1
}

function bo(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (t[i] !== e[i] && !Zn(n, i)) return !0
    }
    return !1
}

function tl({
    vnode: e,
    parent: t
}, n) {
    for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const nl = e => e.__isSuspense;

function Gs(e, t) {
    t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : Za(e)
}

function kn(e, t) {
    if (he) {
        let n = he.provides;
        const r = he.parent && he.parent.provides;
        r === n && (n = he.provides = Object.create(r)), n[e] = t
    }
}

function je(e, t, n = !1) {
    const r = he || ve;
    if (r) {
        const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && Q(t) ? t.call(r.proxy) : t
    }
}

function bd(e, t) {
    return Qr(e, null, t)
}
const An = {};

function nn(e, t, n) {
    return Qr(e, t, n)
}

function Qr(e, t, {
    immediate: n,
    deep: r,
    flush: s,
    onTrack: i,
    onTrigger: l
} = fe) {
    const f = Ts() === (he == null ? void 0 : he.scope) ? he : null;
    let u, d = !1,
        p = !1;
    if (_e(e) ? (u = () => e.value, d = Hn(e)) : lt(e) ? (u = () => e, r = !0) : W(e) ? (p = !0, d = e.some(w => lt(w) || Hn(w)), u = () => e.map(w => {
            if (_e(w)) return w.value;
            if (lt(w)) return xt(w);
            if (Q(w)) return ut(w, f, 2)
        })) : Q(e) ? t ? u = () => ut(e, f, 2) : u = () => {
            if (!(f && f.isUnmounted)) return o && o(), He(e, f, 3, [a])
        } : u = We, t && r) {
        const w = u;
        u = () => xt(w())
    }
    let o, a = w => {
            o = h.onStop = () => {
                ut(w, f, 4)
            }
        },
        c;
    if (_n)
        if (a = We, t ? n && He(t, f, 3, [u(), p ? [] : void 0, a]) : u(), s === "sync") {
            const w = Yl();
            c = w.__watcherHandles || (w.__watcherHandles = [])
        } else return We;
    let _ = p ? new Array(e.length).fill(An) : An;
    const g = () => {
        if (h.active)
            if (t) {
                const w = h.run();
                (r || d || (p ? w.some((C, F) => un(C, _[F])) : un(w, _))) && (o && o(), He(t, f, 3, [w, _ === An ? void 0 : p && _[0] === An ? [] : _, a]), _ = w)
            } else h.run()
    };
    g.allowRecurse = !!t;
    let b;
    s === "sync" ? b = g : s === "post" ? b = () => Ae(g, f && f.suspense) : (g.pre = !0, f && (g.id = f.uid), b = () => Zr(g));
    const h = new Vr(u, b);
    t ? n ? g() : _ = h.run() : s === "post" ? Ae(h.run.bind(h), f && f.suspense) : h.run();
    const y = () => {
        h.stop(), f && f.scope && Br(f.scope.effects, h)
    };
    return c && c.push(y), y
}

function rl(e, t, n) {
    const r = this.proxy,
        s = ge(e) ? e.includes(".") ? Xs(r, e) : () => r[e] : e.bind(r, r);
    let i;
    Q(t) ? i = t : (i = t.handler, n = t);
    const l = he;
    Nt(this);
    const f = Qr(s, i.bind(r), n);
    return l ? Nt(l) : Tt(), f
}

function Xs(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}

function xt(e, t) {
    if (!de(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), _e(e)) xt(e.value, t);
    else if (W(e))
        for (let n = 0; n < e.length; n++) xt(e[n], t);
    else if (vs(e) || Mt(e)) e.forEach(n => {
        xt(n, t)
    });
    else if (ws(e))
        for (const n in e) xt(e[n], t);
    return e
}

function ol() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return zr(() => {
        e.isMounted = !0
    }), Js(() => {
        e.isUnmounting = !0
    }), e
}
const Oe = [Function, Array],
    sl = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Oe,
            onEnter: Oe,
            onAfterEnter: Oe,
            onEnterCancelled: Oe,
            onBeforeLeave: Oe,
            onLeave: Oe,
            onAfterLeave: Oe,
            onLeaveCancelled: Oe,
            onBeforeAppear: Oe,
            onAppear: Oe,
            onAfterAppear: Oe,
            onAppearCancelled: Oe
        },
        setup(e, {
            slots: t
        }) {
            const n = _i(),
                r = ol();
            let s;
            return () => {
                const i = t.default && Ys(t.default(), !0);
                if (!i || !i.length) return;
                let l = i[0];
                if (i.length > 1) {
                    for (const g of i)
                        if (g.type !== Ce) {
                            l = g;
                            break
                        }
                }
                const f = ee(e),
                    {
                        mode: u
                    } = f;
                if (r.isLeaving) return ar(l);
                const d = wo(l);
                if (!d) return ar(l);
                const p = wr(d, f, r, n);
                xr(d, p);
                const o = n.subTree,
                    a = o && wo(o);
                let c = !1;
                const {
                    getTransitionKey: _
                } = d.type;
                if (_) {
                    const g = _();
                    s === void 0 ? s = g : g !== s && (s = g, c = !0)
                }
                if (a && a.type !== Ce && (!bt(d, a) || c)) {
                    const g = wr(a, f, r, n);
                    if (xr(a, g), u === "out-in") return r.isLeaving = !0, g.afterLeave = () => {
                        r.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, ar(l);
                    u === "in-out" && d.type !== Ce && (g.delayLeave = (b, h, y) => {
                        const w = Qs(r, a);
                        w[String(a.key)] = a, b._leaveCb = () => {
                            h(), b._leaveCb = void 0, delete p.delayedLeave
                        }, p.delayedLeave = y
                    })
                }
                return l
            }
        }
    },
    Zs = sl;

function Qs(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function wr(e, t, n, r) {
    const {
        appear: s,
        mode: i,
        persisted: l = !1,
        onBeforeEnter: f,
        onEnter: u,
        onAfterEnter: d,
        onEnterCancelled: p,
        onBeforeLeave: o,
        onLeave: a,
        onAfterLeave: c,
        onLeaveCancelled: _,
        onBeforeAppear: g,
        onAppear: b,
        onAfterAppear: h,
        onAppearCancelled: y
    } = t, w = String(e.key), C = Qs(n, e), F = (E, R) => {
        E && He(E, r, 9, R)
    }, U = (E, R) => {
        const N = R[1];
        F(E, R), W(E) ? E.every(G => G.length <= 1) && N() : E.length <= 1 && N()
    }, H = {
        mode: i,
        persisted: l,
        beforeEnter(E) {
            let R = f;
            if (!n.isMounted)
                if (s) R = g || f;
                else return;
            E._leaveCb && E._leaveCb(!0);
            const N = C[w];
            N && bt(e, N) && N.el._leaveCb && N.el._leaveCb(), F(R, [E])
        },
        enter(E) {
            let R = u,
                N = d,
                G = p;
            if (!n.isMounted)
                if (s) R = b || u, N = h || d, G = y || p;
                else return;
            let $ = !1;
            const X = E._enterCb = M => {
                $ || ($ = !0, M ? F(G, [E]) : F(N, [E]), H.delayedLeave && H.delayedLeave(), E._enterCb = void 0)
            };
            R ? U(R, [E, X]) : X()
        },
        leave(E, R) {
            const N = String(e.key);
            if (E._enterCb && E._enterCb(!0), n.isUnmounting) return R();
            F(o, [E]);
            let G = !1;
            const $ = E._leaveCb = X => {
                G || (G = !0, R(), X ? F(_, [E]) : F(c, [E]), E._leaveCb = void 0, C[N] === e && delete C[N])
            };
            C[N] = e, a ? U(a, [E, $]) : $()
        },
        clone(E) {
            return wr(E, t, n, r)
        }
    };
    return H
}

function ar(e) {
    if (Qn(e)) return e = pt(e), e.children = null, e
}

function wo(e) {
    return Qn(e) ? e.children ? e.children[0] : void 0 : e
}

function xr(e, t) {
    e.shapeFlag & 6 && e.component ? xr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Ys(e, t = !1, n) {
    let r = [],
        s = 0;
    for (let i = 0; i < e.length; i++) {
        let l = e[i];
        const f = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
        l.type === Te ? (l.patchFlag & 128 && s++, r = r.concat(Ys(l.children, t, f))) : (t || l.type !== Ce) && r.push(f != null ? pt(l, {
            key: f
        }) : l)
    }
    if (s > 1)
        for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r
}

function Yr(e) {
    return Q(e) ? {
        setup: e,
        name: e.name
    } : e
}
const Ft = e => !!e.type.__asyncLoader,
    Qn = e => e.type.__isKeepAlive;

function il(e, t) {
    zs(e, "a", t)
}

function al(e, t) {
    zs(e, "da", t)
}

function zs(e, t, n = he) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (Yn(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) Qn(s.parent.vnode) && ll(r, t, n, s), s = s.parent
    }
}

function ll(e, t, n, r) {
    const s = Yn(t, e, r, !0);
    ei(() => {
        Br(r[t], s)
    }, n)
}

function Yn(e, t, n = he, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...l) => {
                if (n.isUnmounted) return;
                Ut(), Nt(n);
                const f = He(t, n, e, l);
                return Tt(), Wt(), f
            });
        return r ? s.unshift(i) : s.push(i), i
    }
}
const Ye = e => (t, n = he) => (!_n || e === "sp") && Yn(e, (...r) => t(...r), n),
    cl = Ye("bm"),
    zr = Ye("m"),
    ul = Ye("bu"),
    fl = Ye("u"),
    Js = Ye("bum"),
    ei = Ye("um"),
    dl = Ye("sp"),
    pl = Ye("rtg"),
    hl = Ye("rtc");

function _l(e, t = he) {
    Yn("ec", e, t)
}

function wd(e, t) {
    const n = ve;
    if (n === null) return e;
    const r = er(n) || n.proxy,
        s = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [l, f, u, d = fe] = t[i];
        l && (Q(l) && (l = {
            mounted: l,
            updated: l
        }), l.deep && xt(f), s.push({
            dir: l,
            instance: r,
            value: f,
            oldValue: void 0,
            arg: u,
            modifiers: d
        }))
    }
    return e
}

function Ke(e, t, n, r) {
    const s = e.dirs,
        i = t && t.dirs;
    for (let l = 0; l < s.length; l++) {
        const f = s[l];
        i && (f.oldValue = i[l].value);
        let u = f.dir[r];
        u && (Ut(), He(u, n, 8, [e.el, f, e, t]), Wt())
    }
}
const ti = "components";

function Ln(e, t) {
    return gl(ti, e, !0, t) || e
}
const ml = Symbol();

function gl(e, t, n = !0, r = !1) {
    const s = ve || he;
    if (s) {
        const i = s.type;
        if (e === ti) {
            const f = Xl(i, !1);
            if (f && (f === t || f === Ge(t) || f === qn(Ge(t)))) return i
        }
        const l = xo(s[e] || i[e], t) || xo(s.appContext[e], t);
        return !l && r ? i : l
    }
}

function xo(e, t) {
    return e && (e[t] || e[Ge(t)] || e[qn(Ge(t))])
}

function xd(e, t, n, r) {
    let s;
    const i = n;
    if (W(e) || ge(e)) {
        s = new Array(e.length);
        for (let l = 0, f = e.length; l < f; l++) s[l] = t(e[l], l, void 0, i)
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, i)
    } else if (de(e))
        if (e[Symbol.iterator]) s = Array.from(e, (l, f) => t(l, f, void 0, i));
        else {
            const l = Object.keys(e);
            s = new Array(l.length);
            for (let f = 0, u = l.length; f < u; f++) {
                const d = l[f];
                s[f] = t(e[d], d, f, i)
            }
        }
    else s = [];
    return s
}

function Fn(e, t, n = {}, r, s) {
    if (ve.isCE || ve.parent && Ft(ve.parent) && ve.parent.isCE) return t !== "default" && (n.name = t), ue("slot", n, r && r());
    let i = e[t];
    i && i._c && (i._d = !1), Ue();
    const l = i && ni(i(n)),
        f = zn(Te, {
            key: n.key || l && l.key || `_${t}`
        }, l || (r ? r() : []), l && e._ === 1 ? 64 : -2);
    return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f
}

function ni(e) {
    return e.some(t => Dn(t) ? !(t.type === Ce || t.type === Te && !ni(t.children)) : !0) ? e : null
}
const Ar = e => e ? mi(e) ? er(e) || e.proxy : Ar(e.parent) : null,
    rn = ye(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Ar(e.parent),
        $root: e => Ar(e.root),
        $emit: e => e.emit,
        $options: e => Jr(e),
        $forceUpdate: e => e.f || (e.f = () => Zr(e.update)),
        $nextTick: e => e.n || (e.n = Xn.bind(e.proxy)),
        $watch: e => rl.bind(e)
    }),
    lr = (e, t) => e !== fe && !e.__isScriptSetup && re(e, t),
    vl = {
        get({
            _: e
        }, t) {
            const {
                ctx: n,
                setupState: r,
                data: s,
                props: i,
                accessCache: l,
                type: f,
                appContext: u
            } = e;
            let d;
            if (t[0] !== "$") {
                const c = l[t];
                if (c !== void 0) switch (c) {
                    case 1:
                        return r[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (lr(r, t)) return l[t] = 1, r[t];
                    if (s !== fe && re(s, t)) return l[t] = 2, s[t];
                    if ((d = e.propsOptions[0]) && re(d, t)) return l[t] = 3, i[t];
                    if (n !== fe && re(n, t)) return l[t] = 4, n[t];
                    Tr && (l[t] = 0)
                }
            }
            const p = rn[t];
            let o, a;
            if (p) return t === "$attrs" && Ee(e, "get", t), p(e);
            if ((o = f.__cssModules) && (o = o[t])) return o;
            if (n !== fe && re(n, t)) return l[t] = 4, n[t];
            if (a = u.config.globalProperties, re(a, t)) return a[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: s,
                ctx: i
            } = e;
            return lr(s, t) ? (s[t] = n, !0) : r !== fe && re(r, t) ? (r[t] = n, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: s,
                propsOptions: i
            }
        }, l) {
            let f;
            return !!n[l] || e !== fe && re(e, l) || lr(t, l) || (f = i[0]) && re(f, l) || re(r, l) || re(rn, l) || re(s.config.globalProperties, l)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : re(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };
let Tr = !0;

function yl(e) {
    const t = Jr(e),
        n = e.proxy,
        r = e.ctx;
    Tr = !1, t.beforeCreate && Ao(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: i,
        methods: l,
        watch: f,
        provide: u,
        inject: d,
        created: p,
        beforeMount: o,
        mounted: a,
        beforeUpdate: c,
        updated: _,
        activated: g,
        deactivated: b,
        beforeDestroy: h,
        beforeUnmount: y,
        destroyed: w,
        unmounted: C,
        render: F,
        renderTracked: U,
        renderTriggered: H,
        errorCaptured: E,
        serverPrefetch: R,
        expose: N,
        inheritAttrs: G,
        components: $,
        directives: X,
        filters: M
    } = t;
    if (d && bl(d, r, null, e.appContext.config.unwrapInjectedRef), l)
        for (const le in l) {
            const ie = l[le];
            Q(ie) && (r[le] = ie.bind(n))
        }
    if (s) {
        const le = s.call(n, n);
        de(le) && (e.data = Gt(le))
    }
    if (Tr = !0, i)
        for (const le in i) {
            const ie = i[le],
                Ie = Q(ie) ? ie.bind(n, n) : Q(ie.get) ? ie.get.bind(n, n) : We,
                ht = !Q(ie) && Q(ie.set) ? ie.set.bind(n) : We,
                Me = Pe({
                    get: Ie,
                    set: ht
                });
            Object.defineProperty(r, le, {
                enumerable: !0,
                configurable: !0,
                get: () => Me.value,
                set: xe => Me.value = xe
            })
        }
    if (f)
        for (const le in f) ri(f[le], r, n, le);
    if (u) {
        const le = Q(u) ? u.call(n) : u;
        Reflect.ownKeys(le).forEach(ie => {
            kn(ie, le[ie])
        })
    }
    p && Ao(p, e, "c");

    function te(le, ie) {
        W(ie) ? ie.forEach(Ie => le(Ie.bind(n))) : ie && le(ie.bind(n))
    }
    if (te(cl, o), te(zr, a), te(ul, c), te(fl, _), te(il, g), te(al, b), te(_l, E), te(hl, U), te(pl, H), te(Js, y), te(ei, C), te(dl, R), W(N))
        if (N.length) {
            const le = e.exposed || (e.exposed = {});
            N.forEach(ie => {
                Object.defineProperty(le, ie, {
                    get: () => n[ie],
                    set: Ie => n[ie] = Ie
                })
            })
        } else e.exposed || (e.exposed = {});
    F && e.render === We && (e.render = F), G != null && (e.inheritAttrs = G), $ && (e.components = $), X && (e.directives = X)
}

function bl(e, t, n = We, r = !1) {
    W(e) && (e = Er(e));
    for (const s in e) {
        const i = e[s];
        let l;
        de(i) ? "default" in i ? l = je(i.from || s, i.default, !0) : l = je(i.from || s) : l = je(i), _e(l) && r ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: f => l.value = f
        }) : t[s] = l
    }
}

function Ao(e, t, n) {
    He(W(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function ri(e, t, n, r) {
    const s = r.includes(".") ? Xs(n, r) : () => n[r];
    if (ge(e)) {
        const i = t[e];
        Q(i) && nn(s, i)
    } else if (Q(e)) nn(s, e.bind(n));
    else if (de(e))
        if (W(e)) e.forEach(i => ri(i, t, n, r));
        else {
            const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
            Q(i) && nn(s, i, e)
        }
}

function Jr(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: s,
            optionsCache: i,
            config: {
                optionMergeStrategies: l
            }
        } = e.appContext,
        f = i.get(t);
    let u;
    return f ? u = f : !s.length && !n && !r ? u = t : (u = {}, s.length && s.forEach(d => $n(u, d, l, !0)), $n(u, t, l)), de(t) && i.set(t, u), u
}

function $n(e, t, n, r = !1) {
    const {
        mixins: s,
        extends: i
    } = t;
    i && $n(e, i, n, !0), s && s.forEach(l => $n(e, l, n, !0));
    for (const l in t)
        if (!(r && l === "expose")) {
            const f = wl[l] || n && n[l];
            e[l] = f ? f(e[l], t[l]) : t[l]
        }
    return e
}
const wl = {
    data: To,
    props: vt,
    emits: vt,
    methods: vt,
    computed: vt,
    beforeCreate: we,
    created: we,
    beforeMount: we,
    mounted: we,
    beforeUpdate: we,
    updated: we,
    beforeDestroy: we,
    beforeUnmount: we,
    destroyed: we,
    unmounted: we,
    activated: we,
    deactivated: we,
    errorCaptured: we,
    serverPrefetch: we,
    components: vt,
    directives: vt,
    watch: Al,
    provide: To,
    inject: xl
};

function To(e, t) {
    return t ? e ? function() {
        return ye(Q(e) ? e.call(this, this) : e, Q(t) ? t.call(this, this) : t)
    } : t : e
}

function xl(e, t) {
    return vt(Er(e), Er(t))
}

function Er(e) {
    if (W(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function we(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function vt(e, t) {
    return e ? ye(ye(Object.create(null), e), t) : t
}

function Al(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ye(Object.create(null), e);
    for (const r in t) n[r] = we(e[r], t[r]);
    return n
}

function Tl(e, t, n, r = !1) {
    const s = {},
        i = {};
    On(i, Jn, 1), e.propsDefaults = Object.create(null), oi(e, t, s, i);
    for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
    n ? e.props = r ? s : $a(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
}

function El(e, t, n, r) {
    const {
        props: s,
        attrs: i,
        vnode: {
            patchFlag: l
        }
    } = e, f = ee(s), [u] = e.propsOptions;
    let d = !1;
    if ((r || l > 0) && !(l & 16)) {
        if (l & 8) {
            const p = e.vnode.dynamicProps;
            for (let o = 0; o < p.length; o++) {
                let a = p[o];
                if (Zn(e.emitsOptions, a)) continue;
                const c = t[a];
                if (u)
                    if (re(i, a)) c !== i[a] && (i[a] = c, d = !0);
                    else {
                        const _ = Ge(a);
                        s[_] = kr(u, f, _, c, e, !1)
                    }
                else c !== i[a] && (i[a] = c, d = !0)
            }
        }
    } else {
        oi(e, t, s, i) && (d = !0);
        let p;
        for (const o in f)(!t || !re(t, o) && ((p = kt(o)) === o || !re(t, p))) && (u ? n && (n[o] !== void 0 || n[p] !== void 0) && (s[o] = kr(u, f, o, void 0, e, !0)) : delete s[o]);
        if (i !== f)
            for (const o in i)(!t || !re(t, o)) && (delete i[o], d = !0)
    }
    d && Qe(e, "set", "$attrs")
}

function oi(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let l = !1,
        f;
    if (t)
        for (let u in t) {
            if (tn(u)) continue;
            const d = t[u];
            let p;
            s && re(s, p = Ge(u)) ? !i || !i.includes(p) ? n[p] = d : (f || (f = {}))[p] = d : Zn(e.emitsOptions, u) || (!(u in r) || d !== r[u]) && (r[u] = d, l = !0)
        }
    if (i) {
        const u = ee(n),
            d = f || fe;
        for (let p = 0; p < i.length; p++) {
            const o = i[p];
            n[o] = kr(s, u, o, d[o], e, !re(d, o))
        }
    }
    return l
}

function kr(e, t, n, r, s, i) {
    const l = e[n];
    if (l != null) {
        const f = re(l, "default");
        if (f && r === void 0) {
            const u = l.default;
            if (l.type !== Function && Q(u)) {
                const {
                    propsDefaults: d
                } = s;
                n in d ? r = d[n] : (Nt(s), r = d[n] = u.call(null, t), Tt())
            } else r = u
        }
        l[0] && (i && !f ? r = !1 : l[1] && (r === "" || r === kt(n)) && (r = !0))
    }
    return r
}

function si(e, t, n = !1) {
    const r = t.propsCache,
        s = r.get(e);
    if (s) return s;
    const i = e.props,
        l = {},
        f = [];
    let u = !1;
    if (!Q(e)) {
        const p = o => {
            u = !0;
            const [a, c] = si(o, t, !0);
            ye(l, a), c && f.push(...c)
        };
        !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p)
    }
    if (!i && !u) return de(e) && r.set(e, It), It;
    if (W(i))
        for (let p = 0; p < i.length; p++) {
            const o = Ge(i[p]);
            Eo(o) && (l[o] = fe)
        } else if (i)
            for (const p in i) {
                const o = Ge(p);
                if (Eo(o)) {
                    const a = i[p],
                        c = l[o] = W(a) || Q(a) ? {
                            type: a
                        } : Object.assign({}, a);
                    if (c) {
                        const _ = Po(Boolean, c.type),
                            g = Po(String, c.type);
                        c[0] = _ > -1, c[1] = g < 0 || _ < g, (_ > -1 || re(c, "default")) && f.push(o)
                    }
                }
            }
    const d = [l, f];
    return de(e) && r.set(e, d), d
}

function Eo(e) {
    return e[0] !== "$"
}

function ko(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function So(e, t) {
    return ko(e) === ko(t)
}

function Po(e, t) {
    return W(t) ? t.findIndex(n => So(n, e)) : Q(t) && So(t, e) ? 0 : -1
}
const ii = e => e[0] === "_" || e === "$stable",
    eo = e => W(e) ? e.map($e) : [$e(e)],
    kl = (e, t, n) => {
        if (t._n) return t;
        const r = Fe((...s) => eo(t(...s)), n);
        return r._c = !1, r
    },
    ai = (e, t, n) => {
        const r = e._ctx;
        for (const s in e) {
            if (ii(s)) continue;
            const i = e[s];
            if (Q(i)) t[s] = kl(s, i, r);
            else if (i != null) {
                const l = eo(i);
                t[s] = () => l
            }
        }
    },
    li = (e, t) => {
        const n = eo(t);
        e.slots.default = () => n
    },
    Sl = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = ee(t), On(t, "_", n)) : ai(t, e.slots = {})
        } else e.slots = {}, t && li(e, t);
        On(e.slots, Jn, 1)
    },
    Pl = (e, t, n) => {
        const {
            vnode: r,
            slots: s
        } = e;
        let i = !0,
            l = fe;
        if (r.shapeFlag & 32) {
            const f = t._;
            f ? n && f === 1 ? i = !1 : (ye(s, t), !n && f === 1 && delete s._) : (i = !t.$stable, ai(t, s)), l = t
        } else t && (li(e, t), l = {
            default: 1
        });
        if (i)
            for (const f in s) !ii(f) && !(f in l) && delete s[f]
    };

function ci() {
    return {
        app: null,
        config: {
            isNativeTag: Ji,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Cl = 0;

function Ol(e, t) {
    return function(r, s = null) {
        Q(r) || (r = Object.assign({}, r)), s != null && !de(s) && (s = null);
        const i = ci(),
            l = new Set;
        let f = !1;
        const u = i.app = {
            _uid: Cl++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: vi,
            get config() {
                return i.config
            },
            set config(d) {},
            use(d, ...p) {
                return l.has(d) || (d && Q(d.install) ? (l.add(d), d.install(u, ...p)) : Q(d) && (l.add(d), d(u, ...p))), u
            },
            mixin(d) {
                return i.mixins.includes(d) || i.mixins.push(d), u
            },
            component(d, p) {
                return p ? (i.components[d] = p, u) : i.components[d]
            },
            directive(d, p) {
                return p ? (i.directives[d] = p, u) : i.directives[d]
            },
            mount(d, p, o) {
                if (!f) {
                    const a = ue(r, s);
                    return a.appContext = i, p && t ? t(a, d) : e(a, d, o), f = !0, u._container = d, d.__vue_app__ = u, er(a.component) || a.component.proxy
                }
            },
            unmount() {
                f && (e(null, u._container), delete u._container.__vue_app__)
            },
            provide(d, p) {
                return i.provides[d] = p, u
            }
        };
        return u
    }
}

function Bn(e, t, n, r, s = !1) {
    if (W(e)) {
        e.forEach((a, c) => Bn(a, t && (W(t) ? t[c] : t), n, r, s));
        return
    }
    if (Ft(r) && !s) return;
    const i = r.shapeFlag & 4 ? er(r.component) || r.component.proxy : r.el,
        l = s ? null : i,
        {
            i: f,
            r: u
        } = e,
        d = t && t.r,
        p = f.refs === fe ? f.refs = {} : f.refs,
        o = f.setupState;
    if (d != null && d !== u && (ge(d) ? (p[d] = null, re(o, d) && (o[d] = null)) : _e(d) && (d.value = null)), Q(u)) ut(u, f, 12, [l, p]);
    else {
        const a = ge(u),
            c = _e(u);
        if (a || c) {
            const _ = () => {
                if (e.f) {
                    const g = a ? re(o, u) ? o[u] : p[u] : u.value;
                    s ? W(g) && Br(g, i) : W(g) ? g.includes(i) || g.push(i) : a ? (p[u] = [i], re(o, u) && (o[u] = p[u])) : (u.value = [i], e.k && (p[e.k] = u.value))
                } else a ? (p[u] = l, re(o, u) && (o[u] = l)) : c && (u.value = l, e.k && (p[e.k] = l))
            };
            l ? (_.id = -1, Ae(_, n)) : _()
        }
    }
}
let Je = !1;
const Tn = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
    En = e => e.nodeType === 8;

function Rl(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: s,
            nextSibling: i,
            parentNode: l,
            remove: f,
            insert: u,
            createComment: d
        }
    } = e, p = (h, y) => {
        if (!y.hasChildNodes()) {
            n(null, h, y), In(), y._vnode = h;
            return
        }
        Je = !1, o(y.firstChild, h, null, null, null), In(), y._vnode = h, Je && console.error("Hydration completed but contains mismatches.")
    }, o = (h, y, w, C, F, U = !1) => {
        const H = En(h) && h.data === "[",
            E = () => g(h, y, w, C, F, H),
            {
                type: R,
                ref: N,
                shapeFlag: G,
                patchFlag: $
            } = y;
        let X = h.nodeType;
        y.el = h, $ === -2 && (U = !1, y.dynamicChildren = null);
        let M = null;
        switch (R) {
            case jt:
                X !== 3 ? y.children === "" ? (u(y.el = s(""), l(h), h), M = h) : M = E() : (h.data !== y.children && (Je = !0, h.data = y.children), M = i(h));
                break;
            case Ce:
                X !== 8 || H ? M = E() : M = i(h);
                break;
            case on:
                if (H && (h = i(h), X = h.nodeType), X === 1 || X === 3) {
                    M = h;
                    const oe = !y.children.length;
                    for (let te = 0; te < y.staticCount; te++) oe && (y.children += M.nodeType === 1 ? M.outerHTML : M.data), te === y.staticCount - 1 && (y.anchor = M), M = i(M);
                    return H ? i(M) : M
                } else E();
                break;
            case Te:
                H ? M = _(h, y, w, C, F, U) : M = E();
                break;
            default:
                if (G & 1) X !== 1 || y.type.toLowerCase() !== h.tagName.toLowerCase() ? M = E() : M = a(h, y, w, C, F, U);
                else if (G & 6) {
                    y.slotScopeIds = F;
                    const oe = l(h);
                    if (t(y, oe, null, w, C, Tn(oe), U), M = H ? b(h) : i(h), M && En(M) && M.data === "teleport end" && (M = i(M)), Ft(y)) {
                        let te;
                        H ? (te = ue(Te), te.anchor = M ? M.previousSibling : oe.lastChild) : te = h.nodeType === 3 ? hi("") : ue("div"), te.el = h, y.component.subTree = te
                    }
                } else G & 64 ? X !== 8 ? M = E() : M = y.type.hydrate(h, y, w, C, F, U, e, c) : G & 128 && (M = y.type.hydrate(h, y, w, C, Tn(l(h)), F, U, e, o))
        }
        return N != null && Bn(N, null, C, y), M
    }, a = (h, y, w, C, F, U) => {
        U = U || !!y.dynamicChildren;
        const {
            type: H,
            props: E,
            patchFlag: R,
            shapeFlag: N,
            dirs: G
        } = y, $ = H === "input" && G || H === "option";
        if ($ || R !== -1) {
            if (G && Ke(y, null, w, "created"), E)
                if ($ || !U || R & 48)
                    for (const M in E)($ && M.endsWith("value") || mn(M) && !tn(M)) && r(h, M, null, E[M], !1, void 0, w);
                else E.onClick && r(h, "onClick", null, E.onClick, !1, void 0, w);
            let X;
            if ((X = E && E.onVnodeBeforeMount) && Re(X, w, y), G && Ke(y, null, w, "beforeMount"), ((X = E && E.onVnodeMounted) || G) && Gs(() => {
                    X && Re(X, w, y), G && Ke(y, null, w, "mounted")
                }, C), N & 16 && !(E && (E.innerHTML || E.textContent))) {
                let M = c(h.firstChild, y, h, w, C, F, U);
                for (; M;) {
                    Je = !0;
                    const oe = M;
                    M = M.nextSibling, f(oe)
                }
            } else N & 8 && h.textContent !== y.children && (Je = !0, h.textContent = y.children)
        }
        return h.nextSibling
    }, c = (h, y, w, C, F, U, H) => {
        H = H || !!y.dynamicChildren;
        const E = y.children,
            R = E.length;
        for (let N = 0; N < R; N++) {
            const G = H ? E[N] : E[N] = $e(E[N]);
            if (h) h = o(h, G, C, F, U, H);
            else {
                if (G.type === jt && !G.children) continue;
                Je = !0, n(null, G, w, null, C, F, Tn(w), U)
            }
        }
        return h
    }, _ = (h, y, w, C, F, U) => {
        const {
            slotScopeIds: H
        } = y;
        H && (F = F ? F.concat(H) : H);
        const E = l(h),
            R = c(i(h), y, E, w, C, F, U);
        return R && En(R) && R.data === "]" ? i(y.anchor = R) : (Je = !0, u(y.anchor = d("]"), E, R), R)
    }, g = (h, y, w, C, F, U) => {
        if (Je = !0, y.el = null, U) {
            const R = b(h);
            for (;;) {
                const N = i(h);
                if (N && N !== R) f(N);
                else break
            }
        }
        const H = i(h),
            E = l(h);
        return f(h), n(null, y, E, H, w, C, Tn(E), F), H
    }, b = h => {
        let y = 0;
        for (; h;)
            if (h = i(h), h && En(h) && (h.data === "[" && y++, h.data === "]")) {
                if (y === 0) return i(h);
                y--
            }
        return h
    };
    return [p, o]
}
const Ae = Gs;

function Hl(e) {
    return ui(e)
}

function Il(e) {
    return ui(e, Rl)
}

function ui(e, t) {
    const n = aa();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: i,
        createElement: l,
        createText: f,
        createComment: u,
        setText: d,
        setElementText: p,
        parentNode: o,
        nextSibling: a,
        setScopeId: c = We,
        insertStaticContent: _
    } = e, g = (m, v, x, A = null, k = null, O = null, B = !1, P = null, I = !!v.dynamicChildren) => {
        if (m === v) return;
        m && !bt(m, v) && (A = L(m), xe(m, k, O, !0), m = null), v.patchFlag === -2 && (I = !1, v.dynamicChildren = null);
        const {
            type: S,
            ref: K,
            shapeFlag: j
        } = v;
        switch (S) {
            case jt:
                b(m, v, x, A);
                break;
            case Ce:
                h(m, v, x, A);
                break;
            case on:
                m == null && y(v, x, A, B);
                break;
            case Te:
                $(m, v, x, A, k, O, B, P, I);
                break;
            default:
                j & 1 ? F(m, v, x, A, k, O, B, P, I) : j & 6 ? X(m, v, x, A, k, O, B, P, I) : (j & 64 || j & 128) && S.process(m, v, x, A, k, O, B, P, I, ne)
        }
        K != null && k && Bn(K, m && m.ref, O, v || m, !v)
    }, b = (m, v, x, A) => {
        if (m == null) r(v.el = f(v.children), x, A);
        else {
            const k = v.el = m.el;
            v.children !== m.children && d(k, v.children)
        }
    }, h = (m, v, x, A) => {
        m == null ? r(v.el = u(v.children || ""), x, A) : v.el = m.el
    }, y = (m, v, x, A) => {
        [m.el, m.anchor] = _(m.children, v, x, A, m.el, m.anchor)
    }, w = ({
        el: m,
        anchor: v
    }, x, A) => {
        let k;
        for (; m && m !== v;) k = a(m), r(m, x, A), m = k;
        r(v, x, A)
    }, C = ({
        el: m,
        anchor: v
    }) => {
        let x;
        for (; m && m !== v;) x = a(m), s(m), m = x;
        s(v)
    }, F = (m, v, x, A, k, O, B, P, I) => {
        B = B || v.type === "svg", m == null ? U(v, x, A, k, O, B, P, I) : R(m, v, k, O, B, P, I)
    }, U = (m, v, x, A, k, O, B, P) => {
        let I, S;
        const {
            type: K,
            props: j,
            shapeFlag: q,
            transition: Z,
            dirs: J
        } = m;
        if (I = m.el = l(m.type, O, j && j.is, j), q & 8 ? p(I, m.children) : q & 16 && E(m.children, I, null, A, k, O && K !== "foreignObject", B, P), J && Ke(m, null, A, "created"), H(I, m, m.scopeId, B, A), j) {
            for (const ae in j) ae !== "value" && !tn(ae) && i(I, ae, null, j[ae], O, m.children, A, k, D);
            "value" in j && i(I, "value", null, j.value), (S = j.onVnodeBeforeMount) && Re(S, A, m)
        }
        J && Ke(m, null, A, "beforeMount");
        const ce = (!k || k && !k.pendingBranch) && Z && !Z.persisted;
        ce && Z.beforeEnter(I), r(I, v, x), ((S = j && j.onVnodeMounted) || ce || J) && Ae(() => {
            S && Re(S, A, m), ce && Z.enter(I), J && Ke(m, null, A, "mounted")
        }, k)
    }, H = (m, v, x, A, k) => {
        if (x && c(m, x), A)
            for (let O = 0; O < A.length; O++) c(m, A[O]);
        if (k) {
            let O = k.subTree;
            if (v === O) {
                const B = k.vnode;
                H(m, B, B.scopeId, B.slotScopeIds, k.parent)
            }
        }
    }, E = (m, v, x, A, k, O, B, P, I = 0) => {
        for (let S = I; S < m.length; S++) {
            const K = m[S] = P ? st(m[S]) : $e(m[S]);
            g(null, K, v, x, A, k, O, B, P)
        }
    }, R = (m, v, x, A, k, O, B) => {
        const P = v.el = m.el;
        let {
            patchFlag: I,
            dynamicChildren: S,
            dirs: K
        } = v;
        I |= m.patchFlag & 16;
        const j = m.props || fe,
            q = v.props || fe;
        let Z;
        x && _t(x, !1), (Z = q.onVnodeBeforeUpdate) && Re(Z, x, v, m), K && Ke(v, m, x, "beforeUpdate"), x && _t(x, !0);
        const J = k && v.type !== "foreignObject";
        if (S ? N(m.dynamicChildren, S, P, x, A, J, O) : B || ie(m, v, P, null, x, A, J, O, !1), I > 0) {
            if (I & 16) G(P, v, j, q, x, A, k);
            else if (I & 2 && j.class !== q.class && i(P, "class", null, q.class, k), I & 4 && i(P, "style", j.style, q.style, k), I & 8) {
                const ce = v.dynamicProps;
                for (let ae = 0; ae < ce.length; ae++) {
                    const me = ce[ae],
                        Le = j[me],
                        Pt = q[me];
                    (Pt !== Le || me === "value") && i(P, me, Le, Pt, k, m.children, x, A, D)
                }
            }
            I & 1 && m.children !== v.children && p(P, v.children)
        } else !B && S == null && G(P, v, j, q, x, A, k);
        ((Z = q.onVnodeUpdated) || K) && Ae(() => {
            Z && Re(Z, x, v, m), K && Ke(v, m, x, "updated")
        }, A)
    }, N = (m, v, x, A, k, O, B) => {
        for (let P = 0; P < v.length; P++) {
            const I = m[P],
                S = v[P],
                K = I.el && (I.type === Te || !bt(I, S) || I.shapeFlag & 70) ? o(I.el) : x;
            g(I, S, K, null, A, k, O, B, !0)
        }
    }, G = (m, v, x, A, k, O, B) => {
        if (x !== A) {
            if (x !== fe)
                for (const P in x) !tn(P) && !(P in A) && i(m, P, x[P], null, B, v.children, k, O, D);
            for (const P in A) {
                if (tn(P)) continue;
                const I = A[P],
                    S = x[P];
                I !== S && P !== "value" && i(m, P, S, I, B, v.children, k, O, D)
            }
            "value" in A && i(m, "value", x.value, A.value)
        }
    }, $ = (m, v, x, A, k, O, B, P, I) => {
        const S = v.el = m ? m.el : f(""),
            K = v.anchor = m ? m.anchor : f("");
        let {
            patchFlag: j,
            dynamicChildren: q,
            slotScopeIds: Z
        } = v;
        Z && (P = P ? P.concat(Z) : Z), m == null ? (r(S, x, A), r(K, x, A), E(v.children, x, K, k, O, B, P, I)) : j > 0 && j & 64 && q && m.dynamicChildren ? (N(m.dynamicChildren, q, x, k, O, B, P), (v.key != null || k && v === k.subTree) && fi(m, v, !0)) : ie(m, v, x, K, k, O, B, P, I)
    }, X = (m, v, x, A, k, O, B, P, I) => {
        v.slotScopeIds = P, m == null ? v.shapeFlag & 512 ? k.ctx.activate(v, x, A, B, I) : M(v, x, A, k, O, B, I) : oe(m, v, I)
    }, M = (m, v, x, A, k, O, B) => {
        const P = m.component = Kl(m, A, k);
        if (Qn(m) && (P.ctx.renderer = ne), ql(P), P.asyncDep) {
            if (k && k.registerDep(P, te), !m.el) {
                const I = P.subTree = ue(Ce);
                h(null, I, v, x)
            }
            return
        }
        te(P, m, v, x, k, O, B)
    }, oe = (m, v, x) => {
        const A = v.component = m.component;
        if (el(m, v, x))
            if (A.asyncDep && !A.asyncResolved) {
                le(A, v, x);
                return
            } else A.next = v, Xa(A.update), A.update();
        else v.el = m.el, A.vnode = v
    }, te = (m, v, x, A, k, O, B) => {
        const P = () => {
                if (m.isMounted) {
                    let {
                        next: K,
                        bu: j,
                        u: q,
                        parent: Z,
                        vnode: J
                    } = m, ce = K, ae;
                    _t(m, !1), K ? (K.el = J.el, le(m, K, B)) : K = J, j && sr(j), (ae = K.props && K.props.onVnodeBeforeUpdate) && Re(ae, Z, K, J), _t(m, !0);
                    const me = ir(m),
                        Le = m.subTree;
                    m.subTree = me, g(Le, me, o(Le.el), L(Le), m, k, O), K.el = me.el, ce === null && tl(m, me.el), q && Ae(q, k), (ae = K.props && K.props.onVnodeUpdated) && Ae(() => Re(ae, Z, K, J), k)
                } else {
                    let K;
                    const {
                        el: j,
                        props: q
                    } = v, {
                        bm: Z,
                        m: J,
                        parent: ce
                    } = m, ae = Ft(v);
                    if (_t(m, !1), Z && sr(Z), !ae && (K = q && q.onVnodeBeforeMount) && Re(K, ce, v), _t(m, !0), j && Y) {
                        const me = () => {
                            m.subTree = ir(m), Y(j, m.subTree, m, k, null)
                        };
                        ae ? v.type.__asyncLoader().then(() => !m.isUnmounted && me()) : me()
                    } else {
                        const me = m.subTree = ir(m);
                        g(null, me, x, A, m, k, O), v.el = me.el
                    }
                    if (J && Ae(J, k), !ae && (K = q && q.onVnodeMounted)) {
                        const me = v;
                        Ae(() => Re(K, ce, me), k)
                    }(v.shapeFlag & 256 || ce && Ft(ce.vnode) && ce.vnode.shapeFlag & 256) && m.a && Ae(m.a, k), m.isMounted = !0, v = x = A = null
                }
            },
            I = m.effect = new Vr(P, () => Zr(S), m.scope),
            S = m.update = () => I.run();
        S.id = m.uid, _t(m, !0), S()
    }, le = (m, v, x) => {
        v.component = m;
        const A = m.vnode.props;
        m.vnode = v, m.next = null, El(m, v.props, A, x), Pl(m, v.children, x), Ut(), yo(), Wt()
    }, ie = (m, v, x, A, k, O, B, P, I = !1) => {
        const S = m && m.children,
            K = m ? m.shapeFlag : 0,
            j = v.children,
            {
                patchFlag: q,
                shapeFlag: Z
            } = v;
        if (q > 0) {
            if (q & 128) {
                ht(S, j, x, A, k, O, B, P, I);
                return
            } else if (q & 256) {
                Ie(S, j, x, A, k, O, B, P, I);
                return
            }
        }
        Z & 8 ? (K & 16 && D(S, k, O), j !== S && p(x, j)) : K & 16 ? Z & 16 ? ht(S, j, x, A, k, O, B, P, I) : D(S, k, O, !0) : (K & 8 && p(x, ""), Z & 16 && E(j, x, A, k, O, B, P, I))
    }, Ie = (m, v, x, A, k, O, B, P, I) => {
        m = m || It, v = v || It;
        const S = m.length,
            K = v.length,
            j = Math.min(S, K);
        let q;
        for (q = 0; q < j; q++) {
            const Z = v[q] = I ? st(v[q]) : $e(v[q]);
            g(m[q], Z, x, null, k, O, B, P, I)
        }
        S > K ? D(m, k, O, !0, !1, j) : E(v, x, A, k, O, B, P, I, j)
    }, ht = (m, v, x, A, k, O, B, P, I) => {
        let S = 0;
        const K = v.length;
        let j = m.length - 1,
            q = K - 1;
        for (; S <= j && S <= q;) {
            const Z = m[S],
                J = v[S] = I ? st(v[S]) : $e(v[S]);
            if (bt(Z, J)) g(Z, J, x, null, k, O, B, P, I);
            else break;
            S++
        }
        for (; S <= j && S <= q;) {
            const Z = m[j],
                J = v[q] = I ? st(v[q]) : $e(v[q]);
            if (bt(Z, J)) g(Z, J, x, null, k, O, B, P, I);
            else break;
            j--, q--
        }
        if (S > j) {
            if (S <= q) {
                const Z = q + 1,
                    J = Z < K ? v[Z].el : A;
                for (; S <= q;) g(null, v[S] = I ? st(v[S]) : $e(v[S]), x, J, k, O, B, P, I), S++
            }
        } else if (S > q)
            for (; S <= j;) xe(m[S], k, O, !0), S++;
        else {
            const Z = S,
                J = S,
                ce = new Map;
            for (S = J; S <= q; S++) {
                const ke = v[S] = I ? st(v[S]) : $e(v[S]);
                ke.key != null && ce.set(ke.key, S)
            }
            let ae, me = 0;
            const Le = q - J + 1;
            let Pt = !1,
                io = 0;
            const Zt = new Array(Le);
            for (S = 0; S < Le; S++) Zt[S] = 0;
            for (S = Z; S <= j; S++) {
                const ke = m[S];
                if (me >= Le) {
                    xe(ke, k, O, !0);
                    continue
                }
                let Ve;
                if (ke.key != null) Ve = ce.get(ke.key);
                else
                    for (ae = J; ae <= q; ae++)
                        if (Zt[ae - J] === 0 && bt(ke, v[ae])) {
                            Ve = ae;
                            break
                        }
                Ve === void 0 ? xe(ke, k, O, !0) : (Zt[Ve - J] = S + 1, Ve >= io ? io = Ve : Pt = !0, g(ke, v[Ve], x, null, k, O, B, P, I), me++)
            }
            const ao = Pt ? Ml(Zt) : It;
            for (ae = ao.length - 1, S = Le - 1; S >= 0; S--) {
                const ke = J + S,
                    Ve = v[ke],
                    lo = ke + 1 < K ? v[ke + 1].el : A;
                Zt[S] === 0 ? g(null, Ve, x, lo, k, O, B, P, I) : Pt && (ae < 0 || S !== ao[ae] ? Me(Ve, x, lo, 2) : ae--)
            }
        }
    }, Me = (m, v, x, A, k = null) => {
        const {
            el: O,
            type: B,
            transition: P,
            children: I,
            shapeFlag: S
        } = m;
        if (S & 6) {
            Me(m.component.subTree, v, x, A);
            return
        }
        if (S & 128) {
            m.suspense.move(v, x, A);
            return
        }
        if (S & 64) {
            B.move(m, v, x, ne);
            return
        }
        if (B === Te) {
            r(O, v, x);
            for (let j = 0; j < I.length; j++) Me(I[j], v, x, A);
            r(m.anchor, v, x);
            return
        }
        if (B === on) {
            w(m, v, x);
            return
        }
        if (A !== 2 && S & 1 && P)
            if (A === 0) P.beforeEnter(O), r(O, v, x), Ae(() => P.enter(O), k);
            else {
                const {
                    leave: j,
                    delayLeave: q,
                    afterLeave: Z
                } = P, J = () => r(O, v, x), ce = () => {
                    j(O, () => {
                        J(), Z && Z()
                    })
                };
                q ? q(O, J, ce) : ce()
            }
        else r(O, v, x)
    }, xe = (m, v, x, A = !1, k = !1) => {
        const {
            type: O,
            props: B,
            ref: P,
            children: I,
            dynamicChildren: S,
            shapeFlag: K,
            patchFlag: j,
            dirs: q
        } = m;
        if (P != null && Bn(P, null, x, m, !0), K & 256) {
            v.ctx.deactivate(m);
            return
        }
        const Z = K & 1 && q,
            J = !Ft(m);
        let ce;
        if (J && (ce = B && B.onVnodeBeforeUnmount) && Re(ce, v, m), K & 6) T(m.component, x, A);
        else {
            if (K & 128) {
                m.suspense.unmount(x, A);
                return
            }
            Z && Ke(m, null, v, "beforeUnmount"), K & 64 ? m.type.remove(m, v, x, k, ne, A) : S && (O !== Te || j > 0 && j & 64) ? D(S, v, x, !1, !0) : (O === Te && j & 384 || !k && K & 16) && D(I, v, x), A && St(m)
        }(J && (ce = B && B.onVnodeUnmounted) || Z) && Ae(() => {
            ce && Re(ce, v, m), Z && Ke(m, null, v, "unmounted")
        }, x)
    }, St = m => {
        const {
            type: v,
            el: x,
            anchor: A,
            transition: k
        } = m;
        if (v === Te) {
            gn(x, A);
            return
        }
        if (v === on) {
            C(m);
            return
        }
        const O = () => {
            s(x), k && !k.persisted && k.afterLeave && k.afterLeave()
        };
        if (m.shapeFlag & 1 && k && !k.persisted) {
            const {
                leave: B,
                delayLeave: P
            } = k, I = () => B(x, O);
            P ? P(m.el, O, I) : I()
        } else O()
    }, gn = (m, v) => {
        let x;
        for (; m !== v;) x = a(m), s(m), m = x;
        s(v)
    }, T = (m, v, x) => {
        const {
            bum: A,
            scope: k,
            update: O,
            subTree: B,
            um: P
        } = m;
        A && sr(A), k.stop(), O && (O.active = !1, xe(B, m, v, x)), P && Ae(P, v), Ae(() => {
            m.isUnmounted = !0
        }, v), v && v.pendingBranch && !v.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === v.pendingId && (v.deps--, v.deps === 0 && v.resolve())
    }, D = (m, v, x, A = !1, k = !1, O = 0) => {
        for (let B = O; B < m.length; B++) xe(m[B], v, x, A, k)
    }, L = m => m.shapeFlag & 6 ? L(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : a(m.anchor || m.el), V = (m, v, x) => {
        m == null ? v._vnode && xe(v._vnode, null, null, !0) : g(v._vnode || null, m, v, null, null, null, x), yo(), In(), v._vnode = m
    }, ne = {
        p: g,
        um: xe,
        m: Me,
        r: St,
        mt: M,
        mc: E,
        pc: ie,
        pbc: N,
        n: L,
        o: e
    };
    let pe, Y;
    return t && ([pe, Y] = t(ne)), {
        render: V,
        hydrate: pe,
        createApp: Ol(V, pe)
    }
}

function _t({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function fi(e, t, n = !1) {
    const r = e.children,
        s = t.children;
    if (W(r) && W(s))
        for (let i = 0; i < r.length; i++) {
            const l = r[i];
            let f = s[i];
            f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = s[i] = st(s[i]), f.el = l.el), n || fi(l, f)), f.type === jt && (f.el = l.el)
        }
}

function Ml(e) {
    const t = e.slice(),
        n = [0];
    let r, s, i, l, f;
    const u = e.length;
    for (r = 0; r < u; r++) {
        const d = e[r];
        if (d !== 0) {
            if (s = n[n.length - 1], e[s] < d) {
                t[r] = s, n.push(r);
                continue
            }
            for (i = 0, l = n.length - 1; i < l;) f = i + l >> 1, e[n[f]] < d ? i = f + 1 : l = f;
            d < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
        }
    }
    for (i = n.length, l = n[i - 1]; i-- > 0;) n[i] = l, l = t[l];
    return n
}
const Ll = e => e.__isTeleport,
    Te = Symbol(void 0),
    jt = Symbol(void 0),
    Ce = Symbol(void 0),
    on = Symbol(void 0),
    sn = [];
let De = null;

function Ue(e = !1) {
    sn.push(De = e ? null : [])
}

function Fl() {
    sn.pop(), De = sn[sn.length - 1] || null
}
let hn = 1;

function Co(e) {
    hn += e
}

function di(e) {
    return e.dynamicChildren = hn > 0 ? De || It : null, Fl(), hn > 0 && De && De.push(e), e
}

function Ht(e, t, n, r, s, i) {
    return di(z(e, t, n, r, s, i, !0))
}

function zn(e, t, n, r, s) {
    return di(ue(e, t, n, r, s, !0))
}

function Dn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function bt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Jn = "__vInternal",
    pi = ({
        key: e
    }) => e ? ? null,
    Sn = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => e != null ? ge(e) || _e(e) || Q(e) ? {
        i: ve,
        r: e,
        k: t,
        f: !!n
    } : e : null;

function z(e, t = null, n = null, r = 0, s = null, i = e === Te ? 0 : 1, l = !1, f = !1) {
    const u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && pi(t),
        ref: t && Sn(t),
        scopeId: Ws,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: ve
    };
    return f ? (to(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= ge(n) ? 8 : 16), hn > 0 && !l && De && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && De.push(u), u
}
const ue = $l;

function $l(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === ml) && (e = Ce), Dn(e)) {
        const f = pt(e, t, !0);
        return n && to(f, n), hn > 0 && !i && De && (f.shapeFlag & 6 ? De[De.indexOf(e)] = f : De.push(f)), f.patchFlag |= -2, f
    }
    if (Zl(e) && (e = e.__vccOpts), t) {
        t = Bl(t);
        let {
            class: f,
            style: u
        } = t;
        f && !ge(f) && (t.class = ft(f)), de(u) && (Fs(u) && !W(u) && (u = ye({}, u)), t.style = Fr(u))
    }
    const l = ge(e) ? 1 : nl(e) ? 128 : Ll(e) ? 64 : de(e) ? 4 : Q(e) ? 2 : 0;
    return z(e, t, n, r, s, l, i, !0)
}

function Bl(e) {
    return e ? Fs(e) || Jn in e ? ye({}, e) : e : null
}

function pt(e, t, n = !1) {
    const {
        props: r,
        ref: s,
        patchFlag: i,
        children: l
    } = e, f = t ? jl(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: f,
        key: f && pi(f),
        ref: t && t.ref ? n && s ? W(s) ? s.concat(Sn(t)) : [s, Sn(t)] : Sn(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Te ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && pt(e.ssContent),
        ssFallback: e.ssFallback && pt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function hi(e = " ", t = 0) {
    return ue(jt, null, e, t)
}

function Ad(e, t) {
    const n = ue(on, null, e);
    return n.staticCount = t, n
}

function Dl(e = "", t = !1) {
    return t ? (Ue(), zn(Ce, null, e)) : ue(Ce, null, e)
}

function $e(e) {
    return e == null || typeof e == "boolean" ? ue(Ce) : W(e) ? ue(Te, null, e.slice()) : typeof e == "object" ? st(e) : ue(jt, null, String(e))
}

function st(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : pt(e)
}

function to(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (W(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), to(e, s()), s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !(Jn in t) ? t._ctx = ve : s === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else Q(t) ? (t = {
        default: t,
        _ctx: ve
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [hi(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function jl(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class") t.class !== r.class && (t.class = ft([t.class, r.class]));
            else if (s === "style") t.style = Fr([t.style, r.style]);
        else if (mn(s)) {
            const i = t[s],
                l = r[s];
            l && i !== l && !(W(i) && i.includes(l)) && (t[s] = i ? [].concat(i, l) : l)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function Re(e, t, n, r = null) {
    He(e, t, 7, [n, r])
}
const Nl = ci();
let Vl = 0;

function Kl(e, t, n) {
    const r = e.type,
        s = (t ? t.appContext : e.appContext) || Nl,
        i = {
            uid: Vl++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new xs(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: si(r, s),
            emitsOptions: Us(r, s),
            emit: null,
            emitted: null,
            propsDefaults: fe,
            inheritAttrs: r.inheritAttrs,
            ctx: fe,
            data: fe,
            props: fe,
            attrs: fe,
            slots: fe,
            refs: fe,
            setupState: fe,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = Ya.bind(null, i), e.ce && e.ce(i), i
}
let he = null;
const _i = () => he || ve,
    Nt = e => {
        he = e, e.scope.on()
    },
    Tt = () => {
        he && he.scope.off(), he = null
    };

function mi(e) {
    return e.vnode.shapeFlag & 4
}
let _n = !1;

function ql(e, t = !1) {
    _n = t;
    const {
        props: n,
        children: r
    } = e.vnode, s = mi(e);
    Tl(e, n, s, t), Sl(e, r);
    const i = s ? Ul(e, t) : void 0;
    return _n = !1, i
}

function Ul(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Dt(new Proxy(e.ctx, vl));
    const {
        setup: r
    } = n;
    if (r) {
        const s = e.setupContext = r.length > 1 ? Gl(e) : null;
        Nt(e), Ut();
        const i = ut(r, e, 0, [e.props, s]);
        if (Wt(), Tt(), ys(i)) {
            if (i.then(Tt, Tt), t) return i.then(l => {
                Oo(e, l, t)
            }).catch(l => {
                Gn(l, e, 0)
            });
            e.asyncDep = i
        } else Oo(e, i, t)
    } else gi(e, t)
}

function Oo(e, t, n) {
    Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = js(t)), gi(e, n)
}
let Ro;

function gi(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Ro && !r.render) {
            const s = r.template || Jr(e).template;
            if (s) {
                const {
                    isCustomElement: i,
                    compilerOptions: l
                } = e.appContext.config, {
                    delimiters: f,
                    compilerOptions: u
                } = r, d = ye(ye({
                    isCustomElement: i,
                    delimiters: f
                }, l), u);
                r.render = Ro(s, d)
            }
        }
        e.render = r.render || We
    }
    Nt(e), Ut(), yl(e), Wt(), Tt()
}

function Wl(e) {
    return new Proxy(e.attrs, {
        get(t, n) {
            return Ee(e, "get", "$attrs"), t[n]
        }
    })
}

function Gl(e) {
    const t = r => {
        e.exposed = r || {}
    };
    let n;
    return {
        get attrs() {
            return n || (n = Wl(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function er(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(js(Dt(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in rn) return rn[n](e)
        },
        has(t, n) {
            return n in t || n in rn
        }
    }))
}

function Xl(e, t = !0) {
    return Q(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Zl(e) {
    return Q(e) && "__vccOpts" in e
}
const Pe = (e, t) => Ua(e, t, _n);

function no(e, t, n) {
    const r = arguments.length;
    return r === 2 ? de(t) && !W(t) ? Dn(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Dn(n) && (n = [n]), ue(e, t, n))
}
const Ql = Symbol(""),
    Yl = () => je(Ql),
    vi = "3.2.47",
    zl = "http://www.w3.org/2000/svg",
    wt = typeof document < "u" ? document : null,
    Ho = wt && wt.createElement("template"),
    Jl = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t ? wt.createElementNS(zl, e) : wt.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => wt.createTextNode(e),
        createComment: e => wt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => wt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, i) {
            const l = n ? n.previousSibling : t.lastChild;
            if (s && (s === i || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)););
            else {
                Ho.innerHTML = r ? `<svg>${e}</svg>` : e;
                const f = Ho.content;
                if (r) {
                    const u = f.firstChild;
                    for (; u.firstChild;) f.appendChild(u.firstChild);
                    f.removeChild(u)
                }
                t.insertBefore(f, n)
            }
            return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };

function ec(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function tc(e, t, n) {
    const r = e.style,
        s = ge(n);
    if (n && !s) {
        if (t && !ge(t))
            for (const i in t) n[i] == null && Sr(r, i, "");
        for (const i in n) Sr(r, i, n[i])
    } else {
        const i = r.display;
        s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i)
    }
}
const Io = /\s*!important$/;

function Sr(e, t, n) {
    if (W(n)) n.forEach(r => Sr(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = nc(e, t);
        Io.test(n) ? e.setProperty(kt(r), n.replace(Io, ""), "important") : e[r] = n
    }
}
const Mo = ["Webkit", "Moz", "ms"],
    cr = {};

function nc(e, t) {
    const n = cr[t];
    if (n) return n;
    let r = Ge(t);
    if (r !== "filter" && r in e) return cr[t] = r;
    r = qn(r);
    for (let s = 0; s < Mo.length; s++) {
        const i = Mo[s] + r;
        if (i in e) return cr[t] = i
    }
    return t
}
const Lo = "http://www.w3.org/1999/xlink";

function rc(e, t, n, r, s) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Lo, t.slice(6, t.length)) : e.setAttributeNS(Lo, t, n);
    else {
        const i = zi(t);
        n == null || i && !ms(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n)
    }
}

function oc(e, t, n, r, s, i, l) {
    if (t === "innerHTML" || t === "textContent") {
        r && l(r, s, i), e[t] = n ? ? "";
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = n;
        const u = n ? ? "";
        (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
        return
    }
    let f = !1;
    if (n === "" || n == null) {
        const u = typeof e[t];
        u === "boolean" ? n = ms(n) : n == null && u === "string" ? (n = "", f = !0) : u === "number" && (n = 0, f = !0)
    }
    try {
        e[t] = n
    } catch {}
    f && e.removeAttribute(t)
}

function sc(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function ic(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

function ac(e, t, n, r, s = null) {
    const i = e._vei || (e._vei = {}),
        l = i[t];
    if (r && l) l.value = r;
    else {
        const [f, u] = lc(t);
        if (r) {
            const d = i[t] = fc(r, s);
            sc(e, f, d, u)
        } else l && (ic(e, f, l, u), i[t] = void 0)
    }
}
const Fo = /(?:Once|Passive|Capture)$/;

function lc(e) {
    let t;
    if (Fo.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Fo);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : kt(e.slice(2)), t]
}
let ur = 0;
const cc = Promise.resolve(),
    uc = () => ur || (cc.then(() => ur = 0), ur = Date.now());

function fc(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        He(dc(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = uc(), n
}

function dc(e, t) {
    if (W(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}
const $o = /^on[a-z]/,
    pc = (e, t, n, r, s = !1, i, l, f, u) => {
        t === "class" ? ec(e, r, s) : t === "style" ? tc(e, n, r) : mn(t) ? $r(t) || ac(e, t, n, r, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hc(e, t, r, s)) ? oc(e, t, r, i, l, f, u) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), rc(e, t, r, s))
    };

function hc(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && $o.test(t) && Q(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || $o.test(t) && ge(n) ? !1 : t in e
}
const et = "transition",
    Qt = "animation",
    $t = (e, {
        slots: t
    }) => no(Zs, _c(e), t);
$t.displayName = "Transition";
const yi = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
$t.props = ye({}, Zs.props, yi);
const mt = (e, t = []) => {
        W(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Bo = e => e ? W(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function _c(e) {
    const t = {};
    for (const $ in e) $ in yi || (t[$] = e[$]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: l = `${n}-enter-active`,
        enterToClass: f = `${n}-enter-to`,
        appearFromClass: u = i,
        appearActiveClass: d = l,
        appearToClass: p = f,
        leaveFromClass: o = `${n}-leave-from`,
        leaveActiveClass: a = `${n}-leave-active`,
        leaveToClass: c = `${n}-leave-to`
    } = e, _ = mc(s), g = _ && _[0], b = _ && _[1], {
        onBeforeEnter: h,
        onEnter: y,
        onEnterCancelled: w,
        onLeave: C,
        onLeaveCancelled: F,
        onBeforeAppear: U = h,
        onAppear: H = y,
        onAppearCancelled: E = w
    } = t, R = ($, X, M) => {
        gt($, X ? p : f), gt($, X ? d : l), M && M()
    }, N = ($, X) => {
        $._isLeaving = !1, gt($, o), gt($, c), gt($, a), X && X()
    }, G = $ => (X, M) => {
        const oe = $ ? H : y,
            te = () => R(X, $, M);
        mt(oe, [X, te]), Do(() => {
            gt(X, $ ? u : i), tt(X, $ ? p : f), Bo(oe) || jo(X, r, g, te)
        })
    };
    return ye(t, {
        onBeforeEnter($) {
            mt(h, [$]), tt($, i), tt($, l)
        },
        onBeforeAppear($) {
            mt(U, [$]), tt($, u), tt($, d)
        },
        onEnter: G(!1),
        onAppear: G(!0),
        onLeave($, X) {
            $._isLeaving = !0;
            const M = () => N($, X);
            tt($, o), yc(), tt($, a), Do(() => {
                $._isLeaving && (gt($, o), tt($, c), Bo(C) || jo($, r, b, M))
            }), mt(C, [$, M])
        },
        onEnterCancelled($) {
            R($, !1), mt(w, [$])
        },
        onAppearCancelled($) {
            R($, !0), mt(E, [$])
        },
        onLeaveCancelled($) {
            N($), mt(F, [$])
        }
    })
}

function mc(e) {
    if (e == null) return null;
    if (de(e)) return [fr(e.enter), fr(e.leave)]; {
        const t = fr(e);
        return [t, t]
    }
}

function fr(e) {
    return ia(e)
}

function tt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function gt(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const {
        _vtc: n
    } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0))
}

function Do(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let gc = 0;

function jo(e, t, n, r) {
    const s = e._endId = ++gc,
        i = () => {
            s === e._endId && r()
        };
    if (n) return setTimeout(i, n);
    const {
        type: l,
        timeout: f,
        propCount: u
    } = vc(e, t);
    if (!l) return r();
    const d = l + "end";
    let p = 0;
    const o = () => {
            e.removeEventListener(d, a), i()
        },
        a = c => {
            c.target === e && ++p >= u && o()
        };
    setTimeout(() => {
        p < u && o()
    }, f + 1), e.addEventListener(d, a)
}

function vc(e, t) {
    const n = window.getComputedStyle(e),
        r = _ => (n[_] || "").split(", "),
        s = r(`${et}Delay`),
        i = r(`${et}Duration`),
        l = No(s, i),
        f = r(`${Qt}Delay`),
        u = r(`${Qt}Duration`),
        d = No(f, u);
    let p = null,
        o = 0,
        a = 0;
    t === et ? l > 0 && (p = et, o = l, a = i.length) : t === Qt ? d > 0 && (p = Qt, o = d, a = u.length) : (o = Math.max(l, d), p = o > 0 ? l > d ? et : Qt : null, a = p ? p === et ? i.length : u.length : 0);
    const c = p === et && /\b(transform|all)(,|$)/.test(r(`${et}Property`).toString());
    return {
        type: p,
        timeout: o,
        propCount: a,
        hasTransform: c
    }
}

function No(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => Vo(n) + Vo(e[r])))
}

function Vo(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function yc() {
    return document.body.offsetHeight
}
const bc = ["ctrl", "shift", "alt", "meta"],
    wc = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => bc.some(n => e[`${n}Key`] && !t.includes(n))
    },
    Td = (e, t) => (n, ...r) => {
        for (let s = 0; s < t.length; s++) {
            const i = wc[t[s]];
            if (i && i(n, t)) return
        }
        return e(n, ...r)
    },
    xc = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    Ed = (e, t) => n => {
        if (!("key" in n)) return;
        const r = kt(n.key);
        if (t.some(s => s === r || xc[s] === r)) return e(n)
    },
    kd = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yt(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), Yt(e, !0), r.enter(e)) : r.leave(e, () => {
                Yt(e, !1)
            }) : Yt(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            Yt(e, t)
        }
    };

function Yt(e, t) {
    e.style.display = t ? e._vod : "none"
}
const bi = ye({
    patchProp: pc
}, Jl);
let an, Ko = !1;

function Ac() {
    return an || (an = Hl(bi))
}

function Tc() {
    return an = Ko ? an : Il(bi), Ko = !0, an
}
const Ec = (...e) => {
        const t = Ac().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = wi(r);
            if (!s) return;
            const i = t._component;
            !Q(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = "";
            const l = n(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    },
    kc = (...e) => {
        const t = Tc().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = wi(r);
            if (s) return n(s, !0, s instanceof SVGElement)
        }, t
    };

function wi(e) {
    return ge(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const Rt = typeof window < "u";

function Sc(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const se = Object.assign;

function dr(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = Ne(s) ? s.map(e) : e(s)
    }
    return n
}
const ln = () => {},
    Ne = Array.isArray,
    Pc = /\/$/,
    Cc = e => e.replace(Pc, "");

function pr(e, t, n = "/") {
    let r, s = {},
        i = "",
        l = "";
    const f = t.indexOf("#");
    let u = t.indexOf("?");
    return f < u && f >= 0 && (u = -1), u > -1 && (r = t.slice(0, u), i = t.slice(u + 1, f > -1 ? f : t.length), s = e(i)), f > -1 && (r = r || t.slice(0, f), l = t.slice(f, t.length)), r = Ic(r ? ? t, n), {
        fullPath: r + (i && "?") + i + l,
        path: r,
        query: s,
        hash: l
    }
}

function Oc(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function qo(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Rc(e, t, n) {
    const r = t.matched.length - 1,
        s = n.matched.length - 1;
    return r > -1 && r === s && Vt(t.matched[r], n.matched[s]) && xi(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Vt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function xi(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!Hc(e[n], t[n])) return !1;
    return !0
}

function Hc(e, t) {
    return Ne(e) ? Uo(e, t) : Ne(t) ? Uo(t, e) : e === t
}

function Uo(e, t) {
    return Ne(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Ic(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/");
    let s = n.length - 1,
        i, l;
    for (i = 0; i < r.length; i++)
        if (l = r[i], l !== ".")
            if (l === "..") s > 1 && s--;
            else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/")
}
var Kt;
(function(e) {
    e.pop = "pop", e.push = "push"
})(Kt || (Kt = {}));
var Et;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Et || (Et = {}));
const hr = "";

function Ai(e) {
    if (!e)
        if (Rt) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cc(e)
}
const Mc = /^[^#]+#/;

function Ti(e, t) {
    return e.replace(Mc, "#") + t
}

function Lc(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const tr = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function Fc(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s) return;
        t = Lc(s, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function Wo(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Pr = new Map;

function $c(e, t) {
    Pr.set(e, t)
}

function Bc(e) {
    const t = Pr.get(e);
    return Pr.delete(e), t
}
let Dc = () => location.protocol + "//" + location.host;

function Ei(e, t) {
    const {
        pathname: n,
        search: r,
        hash: s
    } = t, i = e.indexOf("#");
    if (i > -1) {
        let f = s.includes(e.slice(i)) ? e.slice(i).length : 1,
            u = s.slice(f);
        return u[0] !== "/" && (u = "/" + u), qo(u, "")
    }
    return qo(n, e) + r + s
}

function jc(e, t, n, r) {
    let s = [],
        i = [],
        l = null;
    const f = ({
        state: a
    }) => {
        const c = Ei(e, location),
            _ = n.value,
            g = t.value;
        let b = 0;
        if (a) {
            if (n.value = c, t.value = a, l && l === _) {
                l = null;
                return
            }
            b = g ? a.position - g.position : 0
        } else r(c);
        s.forEach(h => {
            h(n.value, _, {
                delta: b,
                type: Kt.pop,
                direction: b ? b > 0 ? Et.forward : Et.back : Et.unknown
            })
        })
    };

    function u() {
        l = n.value
    }

    function d(a) {
        s.push(a);
        const c = () => {
            const _ = s.indexOf(a);
            _ > -1 && s.splice(_, 1)
        };
        return i.push(c), c
    }

    function p() {
        const {
            history: a
        } = window;
        a.state && a.replaceState(se({}, a.state, {
            scroll: tr()
        }), "")
    }

    function o() {
        for (const a of i) a();
        i = [], window.removeEventListener("popstate", f), window.removeEventListener("beforeunload", p)
    }
    return window.addEventListener("popstate", f), window.addEventListener("beforeunload", p), {
        pauseListeners: u,
        listen: d,
        destroy: o
    }
}

function Go(e, t, n, r = !1, s = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? tr() : null
    }
}

function Nc(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: Ei(e, n)
    }, s = {
        value: t.state
    };
    s.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(u, d, p) {
        const o = e.indexOf("#"),
            a = o > -1 ? (n.host && document.querySelector("base") ? e : e.slice(o)) + u : Dc() + e + u;
        try {
            t[p ? "replaceState" : "pushState"](d, "", a), s.value = d
        } catch (c) {
            console.error(c), n[p ? "replace" : "assign"](a)
        }
    }

    function l(u, d) {
        const p = se({}, t.state, Go(s.value.back, u, s.value.forward, !0), d, {
            position: s.value.position
        });
        i(u, p, !0), r.value = u
    }

    function f(u, d) {
        const p = se({}, s.value, t.state, {
            forward: u,
            scroll: tr()
        });
        i(p.current, p, !0);
        const o = se({}, Go(r.value, u, null), {
            position: p.position + 1
        }, d);
        i(u, o, !1), r.value = u
    }
    return {
        location: r,
        state: s,
        push: f,
        replace: l
    }
}

function Vc(e) {
    e = Ai(e);
    const t = Nc(e),
        n = jc(e, t.state, t.location, t.replace);

    function r(i, l = !0) {
        l || n.pauseListeners(), history.go(i)
    }
    const s = se({
        location: "",
        base: e,
        go: r,
        createHref: Ti.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), s
}

function Kc(e = "") {
    let t = [],
        n = [hr],
        r = 0;
    e = Ai(e);

    function s(f) {
        r++, r === n.length || n.splice(r), n.push(f)
    }

    function i(f, u, {
        direction: d,
        delta: p
    }) {
        const o = {
            direction: d,
            delta: p,
            type: Kt.pop
        };
        for (const a of t) a(f, u, o)
    }
    const l = {
        location: hr,
        state: {},
        base: e,
        createHref: Ti.bind(null, e),
        replace(f) {
            n.splice(r--, 1), s(f)
        },
        push(f, u) {
            s(f)
        },
        listen(f) {
            return t.push(f), () => {
                const u = t.indexOf(f);
                u > -1 && t.splice(u, 1)
            }
        },
        destroy() {
            t = [], n = [hr], r = 0
        },
        go(f, u = !0) {
            const d = this.location,
                p = f < 0 ? Et.back : Et.forward;
            r = Math.max(0, Math.min(r + f, n.length - 1)), u && i(this.location, d, {
                direction: p,
                delta: f
            })
        }
    };
    return Object.defineProperty(l, "location", {
        enumerable: !0,
        get: () => n[r]
    }), l
}

function qc(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function ki(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const nt = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    Si = Symbol("");
var Xo;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Xo || (Xo = {}));

function qt(e, t) {
    return se(new Error, {
        type: e,
        [Si]: !0
    }, t)
}

function Xe(e, t) {
    return e instanceof Error && Si in e && (t == null || !!(e.type & t))
}
const Zo = "[^/]+?",
    Uc = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    Wc = /[.+*?^${}()[\]/\\]/g;

function Gc(e, t) {
    const n = se({}, Uc, t),
        r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const d of e) {
        const p = d.length ? [] : [90];
        n.strict && !d.length && (s += "/");
        for (let o = 0; o < d.length; o++) {
            const a = d[o];
            let c = 40 + (n.sensitive ? .25 : 0);
            if (a.type === 0) o || (s += "/"), s += a.value.replace(Wc, "\\$&"), c += 40;
            else if (a.type === 1) {
                const {
                    value: _,
                    repeatable: g,
                    optional: b,
                    regexp: h
                } = a;
                i.push({
                    name: _,
                    repeatable: g,
                    optional: b
                });
                const y = h || Zo;
                if (y !== Zo) {
                    c += 10;
                    try {
                        new RegExp(`(${y})`)
                    } catch (C) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${y}): ` + C.message)
                    }
                }
                let w = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
                o || (w = b && d.length < 2 ? `(?:/${w})` : "/" + w), b && (w += "?"), s += w, c += 20, b && (c += -8), g && (c += -20), y === ".*" && (c += -50)
            }
            p.push(c)
        }
        r.push(p)
    }
    if (n.strict && n.end) {
        const d = r.length - 1;
        r[d][r[d].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const l = new RegExp(s, n.sensitive ? "" : "i");

    function f(d) {
        const p = d.match(l),
            o = {};
        if (!p) return null;
        for (let a = 1; a < p.length; a++) {
            const c = p[a] || "",
                _ = i[a - 1];
            o[_.name] = c && _.repeatable ? c.split("/") : c
        }
        return o
    }

    function u(d) {
        let p = "",
            o = !1;
        for (const a of e) {
            (!o || !p.endsWith("/")) && (p += "/"), o = !1;
            for (const c of a)
                if (c.type === 0) p += c.value;
                else if (c.type === 1) {
                const {
                    value: _,
                    repeatable: g,
                    optional: b
                } = c, h = _ in d ? d[_] : "";
                if (Ne(h) && !g) throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                const y = Ne(h) ? h.join("/") : h;
                if (!y)
                    if (b) a.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : o = !0);
                    else throw new Error(`Missing required param "${_}"`);
                p += y
            }
        }
        return p || "/"
    }
    return {
        re: l,
        score: r,
        keys: i,
        parse: f,
        stringify: u
    }
}

function Xc(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Zc(e, t) {
    let n = 0;
    const r = e.score,
        s = t.score;
    for (; n < r.length && n < s.length;) {
        const i = Xc(r[n], s[n]);
        if (i) return i;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (Qo(r)) return 1;
        if (Qo(s)) return -1
    }
    return s.length - r.length
}

function Qo(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Qc = {
        type: 0,
        value: ""
    },
    Yc = /[a-zA-Z0-9_]/;

function zc(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Qc]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(c) {
        throw new Error(`ERR (${n})/"${d}": ${c}`)
    }
    let n = 0,
        r = n;
    const s = [];
    let i;

    function l() {
        i && s.push(i), i = []
    }
    let f = 0,
        u, d = "",
        p = "";

    function o() {
        d && (n === 0 ? i.push({
            type: 0,
            value: d
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: 1,
            value: d,
            regexp: p,
            repeatable: u === "*" || u === "+",
            optional: u === "*" || u === "?"
        })) : t("Invalid state to consume buffer"), d = "")
    }

    function a() {
        d += u
    }
    for (; f < e.length;) {
        if (u = e[f++], u === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                u === "/" ? (d && o(), l()) : u === ":" ? (o(), n = 1) : a();
                break;
            case 4:
                a(), n = r;
                break;
            case 1:
                u === "(" ? n = 2 : Yc.test(u) ? a() : (o(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--);
                break;
            case 2:
                u === ")" ? p[p.length - 1] == "\\" ? p = p.slice(0, -1) + u : n = 3 : p += u;
                break;
            case 3:
                o(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--, p = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), o(), l(), s
}

function Jc(e, t, n) {
    const r = Gc(zc(e.path), n),
        s = se(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function eu(e, t) {
    const n = [],
        r = new Map;
    t = Jo({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function s(p) {
        return r.get(p)
    }

    function i(p, o, a) {
        const c = !a,
            _ = tu(p);
        _.aliasOf = a && a.record;
        const g = Jo(t, p),
            b = [_];
        if ("alias" in p) {
            const w = typeof p.alias == "string" ? [p.alias] : p.alias;
            for (const C of w) b.push(se({}, _, {
                components: a ? a.record.components : _.components,
                path: C,
                aliasOf: a ? a.record : _
            }))
        }
        let h, y;
        for (const w of b) {
            const {
                path: C
            } = w;
            if (o && C[0] !== "/") {
                const F = o.record.path,
                    U = F[F.length - 1] === "/" ? "" : "/";
                w.path = o.record.path + (C && U + C)
            }
            if (h = Jc(w, o, g), a ? a.alias.push(h) : (y = y || h, y !== h && y.alias.push(h), c && p.name && !zo(h) && l(p.name)), _.children) {
                const F = _.children;
                for (let U = 0; U < F.length; U++) i(F[U], h, a && a.children[U])
            }
            a = a || h, (h.record.components && Object.keys(h.record.components).length || h.record.name || h.record.redirect) && u(h)
        }
        return y ? () => {
            l(y)
        } : ln
    }

    function l(p) {
        if (ki(p)) {
            const o = r.get(p);
            o && (r.delete(p), n.splice(n.indexOf(o), 1), o.children.forEach(l), o.alias.forEach(l))
        } else {
            const o = n.indexOf(p);
            o > -1 && (n.splice(o, 1), p.record.name && r.delete(p.record.name), p.children.forEach(l), p.alias.forEach(l))
        }
    }

    function f() {
        return n
    }

    function u(p) {
        let o = 0;
        for (; o < n.length && Zc(p, n[o]) >= 0 && (p.record.path !== n[o].record.path || !Pi(p, n[o]));) o++;
        n.splice(o, 0, p), p.record.name && !zo(p) && r.set(p.record.name, p)
    }

    function d(p, o) {
        let a, c = {},
            _, g;
        if ("name" in p && p.name) {
            if (a = r.get(p.name), !a) throw qt(1, {
                location: p
            });
            g = a.record.name, c = se(Yo(o.params, a.keys.filter(y => !y.optional).map(y => y.name)), p.params && Yo(p.params, a.keys.map(y => y.name))), _ = a.stringify(c)
        } else if ("path" in p) _ = p.path, a = n.find(y => y.re.test(_)), a && (c = a.parse(_), g = a.record.name);
        else {
            if (a = o.name ? r.get(o.name) : n.find(y => y.re.test(o.path)), !a) throw qt(1, {
                location: p,
                currentLocation: o
            });
            g = a.record.name, c = se({}, o.params, p.params), _ = a.stringify(c)
        }
        const b = [];
        let h = a;
        for (; h;) b.unshift(h.record), h = h.parent;
        return {
            name: g,
            path: _,
            params: c,
            matched: b,
            meta: ru(b)
        }
    }
    return e.forEach(p => i(p)), {
        addRoute: i,
        resolve: d,
        removeRoute: l,
        getRoutes: f,
        getRecordMatcher: s
    }
}

function Yo(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function tu(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: nu(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function nu(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
    return t
}

function zo(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function ru(e) {
    return e.reduce((t, n) => se(t, n.meta), {})
}

function Jo(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function Pi(e, t) {
    return t.children.some(n => n === e || Pi(e, n))
}
const Ci = /#/g,
    ou = /&/g,
    su = /\//g,
    iu = /=/g,
    au = /\?/g,
    Oi = /\+/g,
    lu = /%5B/g,
    cu = /%5D/g,
    Ri = /%5E/g,
    uu = /%60/g,
    Hi = /%7B/g,
    fu = /%7C/g,
    Ii = /%7D/g,
    du = /%20/g;

function ro(e) {
    return encodeURI("" + e).replace(fu, "|").replace(lu, "[").replace(cu, "]")
}

function pu(e) {
    return ro(e).replace(Hi, "{").replace(Ii, "}").replace(Ri, "^")
}

function Cr(e) {
    return ro(e).replace(Oi, "%2B").replace(du, "+").replace(Ci, "%23").replace(ou, "%26").replace(uu, "`").replace(Hi, "{").replace(Ii, "}").replace(Ri, "^")
}

function hu(e) {
    return Cr(e).replace(iu, "%3D")
}

function _u(e) {
    return ro(e).replace(Ci, "%23").replace(au, "%3F")
}

function mu(e) {
    return e == null ? "" : _u(e).replace(su, "%2F")
}

function jn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function gu(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const i = r[s].replace(Oi, " "),
            l = i.indexOf("="),
            f = jn(l < 0 ? i : i.slice(0, l)),
            u = l < 0 ? null : jn(i.slice(l + 1));
        if (f in t) {
            let d = t[f];
            Ne(d) || (d = t[f] = [d]), d.push(u)
        } else t[f] = u
    }
    return t
}

function es(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = hu(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(Ne(r) ? r.map(i => i && Cr(i)) : [r && Cr(r)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i))
        })
    }
    return t
}

function vu(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Ne(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const yu = Symbol(""),
    ts = Symbol(""),
    oo = Symbol(""),
    Mi = Symbol(""),
    Or = Symbol("");

function zt() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e,
        reset: n
    }
}

function it(e, t, n, r, s) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((l, f) => {
        const u = o => {
                o === !1 ? f(qt(4, {
                    from: n,
                    to: t
                })) : o instanceof Error ? f(o) : qc(o) ? f(qt(2, {
                    from: t,
                    to: o
                })) : (i && r.enterCallbacks[s] === i && typeof o == "function" && i.push(o), l())
            },
            d = e.call(r && r.instances[s], t, n, u);
        let p = Promise.resolve(d);
        e.length < 3 && (p = p.then(u)), p.catch(o => f(o))
    })
}

function _r(e, t, n, r) {
    const s = [];
    for (const i of e)
        for (const l in i.components) {
            let f = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (bu(f)) {
                    const d = (f.__vccOpts || f)[t];
                    d && s.push(it(d, n, r, i, l))
                } else {
                    let u = f();
                    s.push(() => u.then(d => {
                        if (!d) return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));
                        const p = Sc(d) ? d.default : d;
                        i.components[l] = p;
                        const a = (p.__vccOpts || p)[t];
                        return a && it(a, n, r, i, l)()
                    }))
                }
        }
    return s
}

function bu(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function ns(e) {
    const t = je(oo),
        n = je(Mi),
        r = Pe(() => t.resolve(ct(e.to))),
        s = Pe(() => {
            const {
                matched: u
            } = r.value, {
                length: d
            } = u, p = u[d - 1], o = n.matched;
            if (!p || !o.length) return -1;
            const a = o.findIndex(Vt.bind(null, p));
            if (a > -1) return a;
            const c = rs(u[d - 2]);
            return d > 1 && rs(p) === c && o[o.length - 1].path !== c ? o.findIndex(Vt.bind(null, u[d - 2])) : a
        }),
        i = Pe(() => s.value > -1 && Tu(n.params, r.value.params)),
        l = Pe(() => s.value > -1 && s.value === n.matched.length - 1 && xi(n.params, r.value.params));

    function f(u = {}) {
        return Au(u) ? t[ct(e.replace) ? "replace" : "push"](ct(e.to)).catch(ln) : Promise.resolve()
    }
    return {
        route: r,
        href: Pe(() => r.value.href),
        isActive: i,
        isExactActive: l,
        navigate: f
    }
}
const wu = Yr({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: ns,
        setup(e, {
            slots: t
        }) {
            const n = Gt(ns(e)),
                {
                    options: r
                } = je(oo),
                s = Pe(() => ({
                    [os(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [os(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const i = t.default && t.default(n);
                return e.custom ? i : no("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: s.value
                }, i)
            }
        }
    }),
    xu = wu;

function Au(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Tu(e, t) {
    for (const n in t) {
        const r = t[n],
            s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1
        } else if (!Ne(s) || s.length !== r.length || r.some((i, l) => i !== s[l])) return !1
    }
    return !0
}

function rs(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const os = (e, t, n) => e ? ? t ? ? n,
    Eu = Yr({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = je(Or),
                s = Pe(() => e.route || r.value),
                i = je(ts, 0),
                l = Pe(() => {
                    let d = ct(i);
                    const {
                        matched: p
                    } = s.value;
                    let o;
                    for (;
                        (o = p[d]) && !o.components;) d++;
                    return d
                }),
                f = Pe(() => s.value.matched[l.value]);
            kn(ts, Pe(() => l.value + 1)), kn(yu, f), kn(Or, s);
            const u = Wn();
            return nn(() => [u.value, f.value, e.name], ([d, p, o], [a, c, _]) => {
                p && (p.instances[o] = d, c && c !== p && d && d === a && (p.leaveGuards.size || (p.leaveGuards = c.leaveGuards), p.updateGuards.size || (p.updateGuards = c.updateGuards))), d && p && (!c || !Vt(p, c) || !a) && (p.enterCallbacks[o] || []).forEach(g => g(d))
            }, {
                flush: "post"
            }), () => {
                const d = s.value,
                    p = e.name,
                    o = f.value,
                    a = o && o.components[p];
                if (!a) return ss(n.default, {
                    Component: a,
                    route: d
                });
                const c = o.props[p],
                    _ = c ? c === !0 ? d.params : typeof c == "function" ? c(d) : c : null,
                    b = no(a, se({}, _, t, {
                        onVnodeUnmounted: h => {
                            h.component.isUnmounted && (o.instances[p] = null)
                        },
                        ref: u
                    }));
                return ss(n.default, {
                    Component: b,
                    route: d
                }) || b
            }
        }
    });

function ss(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const ku = Eu;

function Su(e) {
    const t = eu(e.routes, e),
        n = e.parseQuery || gu,
        r = e.stringifyQuery || es,
        s = e.history,
        i = zt(),
        l = zt(),
        f = zt(),
        u = Ba(nt);
    let d = nt;
    Rt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const p = dr.bind(null, T => "" + T),
        o = dr.bind(null, mu),
        a = dr.bind(null, jn);

    function c(T, D) {
        let L, V;
        return ki(T) ? (L = t.getRecordMatcher(T), V = D) : V = T, t.addRoute(V, L)
    }

    function _(T) {
        const D = t.getRecordMatcher(T);
        D && t.removeRoute(D)
    }

    function g() {
        return t.getRoutes().map(T => T.record)
    }

    function b(T) {
        return !!t.getRecordMatcher(T)
    }

    function h(T, D) {
        if (D = se({}, D || u.value), typeof T == "string") {
            const m = pr(n, T, D.path),
                v = t.resolve({
                    path: m.path
                }, D),
                x = s.createHref(m.fullPath);
            return se(m, v, {
                params: a(v.params),
                hash: jn(m.hash),
                redirectedFrom: void 0,
                href: x
            })
        }
        let L;
        if ("path" in T) L = se({}, T, {
            path: pr(n, T.path, D.path).path
        });
        else {
            const m = se({}, T.params);
            for (const v in m) m[v] == null && delete m[v];
            L = se({}, T, {
                params: o(T.params)
            }), D.params = o(D.params)
        }
        const V = t.resolve(L, D),
            ne = T.hash || "";
        V.params = p(a(V.params));
        const pe = Oc(r, se({}, T, {
                hash: pu(ne),
                path: V.path
            })),
            Y = s.createHref(pe);
        return se({
            fullPath: pe,
            hash: ne,
            query: r === es ? vu(T.query) : T.query || {}
        }, V, {
            redirectedFrom: void 0,
            href: Y
        })
    }

    function y(T) {
        return typeof T == "string" ? pr(n, T, u.value.path) : se({}, T)
    }

    function w(T, D) {
        if (d !== T) return qt(8, {
            from: D,
            to: T
        })
    }

    function C(T) {
        return H(T)
    }

    function F(T) {
        return C(se(y(T), {
            replace: !0
        }))
    }

    function U(T) {
        const D = T.matched[T.matched.length - 1];
        if (D && D.redirect) {
            const {
                redirect: L
            } = D;
            let V = typeof L == "function" ? L(T) : L;
            return typeof V == "string" && (V = V.includes("?") || V.includes("#") ? V = y(V) : {
                path: V
            }, V.params = {}), se({
                query: T.query,
                hash: T.hash,
                params: "path" in V ? {} : T.params
            }, V)
        }
    }

    function H(T, D) {
        const L = d = h(T),
            V = u.value,
            ne = T.state,
            pe = T.force,
            Y = T.replace === !0,
            m = U(L);
        if (m) return H(se(y(m), {
            state: typeof m == "object" ? se({}, ne, m.state) : ne,
            force: pe,
            replace: Y
        }), D || L);
        const v = L;
        v.redirectedFrom = D;
        let x;
        return !pe && Rc(r, V, L) && (x = qt(16, {
            to: v,
            from: V
        }), ht(V, V, !0, !1)), (x ? Promise.resolve(x) : R(v, V)).catch(A => Xe(A) ? Xe(A, 2) ? A : Ie(A) : le(A, v, V)).then(A => {
            if (A) {
                if (Xe(A, 2)) return H(se({
                    replace: Y
                }, y(A.to), {
                    state: typeof A.to == "object" ? se({}, ne, A.to.state) : ne,
                    force: pe
                }), D || v)
            } else A = G(v, V, !0, Y, ne);
            return N(v, V, A), A
        })
    }

    function E(T, D) {
        const L = w(T, D);
        return L ? Promise.reject(L) : Promise.resolve()
    }

    function R(T, D) {
        let L;
        const [V, ne, pe] = Pu(T, D);
        L = _r(V.reverse(), "beforeRouteLeave", T, D);
        for (const m of V) m.leaveGuards.forEach(v => {
            L.push(it(v, T, D))
        });
        const Y = E.bind(null, T, D);
        return L.push(Y), Ct(L).then(() => {
            L = [];
            for (const m of i.list()) L.push(it(m, T, D));
            return L.push(Y), Ct(L)
        }).then(() => {
            L = _r(ne, "beforeRouteUpdate", T, D);
            for (const m of ne) m.updateGuards.forEach(v => {
                L.push(it(v, T, D))
            });
            return L.push(Y), Ct(L)
        }).then(() => {
            L = [];
            for (const m of T.matched)
                if (m.beforeEnter && !D.matched.includes(m))
                    if (Ne(m.beforeEnter))
                        for (const v of m.beforeEnter) L.push(it(v, T, D));
                    else L.push(it(m.beforeEnter, T, D));
            return L.push(Y), Ct(L)
        }).then(() => (T.matched.forEach(m => m.enterCallbacks = {}), L = _r(pe, "beforeRouteEnter", T, D), L.push(Y), Ct(L))).then(() => {
            L = [];
            for (const m of l.list()) L.push(it(m, T, D));
            return L.push(Y), Ct(L)
        }).catch(m => Xe(m, 8) ? m : Promise.reject(m))
    }

    function N(T, D, L) {
        for (const V of f.list()) V(T, D, L)
    }

    function G(T, D, L, V, ne) {
        const pe = w(T, D);
        if (pe) return pe;
        const Y = D === nt,
            m = Rt ? history.state : {};
        L && (V || Y ? s.replace(T.fullPath, se({
            scroll: Y && m && m.scroll
        }, ne)) : s.push(T.fullPath, ne)), u.value = T, ht(T, D, L, Y), Ie()
    }
    let $;

    function X() {
        $ || ($ = s.listen((T, D, L) => {
            if (!gn.listening) return;
            const V = h(T),
                ne = U(V);
            if (ne) {
                H(se(ne, {
                    replace: !0
                }), V).catch(ln);
                return
            }
            d = V;
            const pe = u.value;
            Rt && $c(Wo(pe.fullPath, L.delta), tr()), R(V, pe).catch(Y => Xe(Y, 12) ? Y : Xe(Y, 2) ? (H(Y.to, V).then(m => {
                Xe(m, 20) && !L.delta && L.type === Kt.pop && s.go(-1, !1)
            }).catch(ln), Promise.reject()) : (L.delta && s.go(-L.delta, !1), le(Y, V, pe))).then(Y => {
                Y = Y || G(V, pe, !1), Y && (L.delta && !Xe(Y, 8) ? s.go(-L.delta, !1) : L.type === Kt.pop && Xe(Y, 20) && s.go(-1, !1)), N(V, pe, Y)
            }).catch(ln)
        }))
    }
    let M = zt(),
        oe = zt(),
        te;

    function le(T, D, L) {
        Ie(T);
        const V = oe.list();
        return V.length ? V.forEach(ne => ne(T, D, L)) : console.error(T), Promise.reject(T)
    }

    function ie() {
        return te && u.value !== nt ? Promise.resolve() : new Promise((T, D) => {
            M.add([T, D])
        })
    }

    function Ie(T) {
        return te || (te = !T, X(), M.list().forEach(([D, L]) => T ? L(T) : D()), M.reset()), T
    }

    function ht(T, D, L, V) {
        const {
            scrollBehavior: ne
        } = e;
        if (!Rt || !ne) return Promise.resolve();
        const pe = !L && Bc(Wo(T.fullPath, 0)) || (V || !L) && history.state && history.state.scroll || null;
        return Xn().then(() => ne(T, D, pe)).then(Y => Y && Fc(Y)).catch(Y => le(Y, T, D))
    }
    const Me = T => s.go(T);
    let xe;
    const St = new Set,
        gn = {
            currentRoute: u,
            listening: !0,
            addRoute: c,
            removeRoute: _,
            hasRoute: b,
            getRoutes: g,
            resolve: h,
            options: e,
            push: C,
            replace: F,
            go: Me,
            back: () => Me(-1),
            forward: () => Me(1),
            beforeEach: i.add,
            beforeResolve: l.add,
            afterEach: f.add,
            onError: oe.add,
            isReady: ie,
            install(T) {
                const D = this;
                T.component("RouterLink", xu), T.component("RouterView", ku), T.config.globalProperties.$router = D, Object.defineProperty(T.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => ct(u)
                }), Rt && !xe && u.value === nt && (xe = !0, C(s.location).catch(ne => {}));
                const L = {};
                for (const ne in nt) L[ne] = Pe(() => u.value[ne]);
                T.provide(oo, D), T.provide(Mi, Gt(L)), T.provide(Or, u);
                const V = T.unmount;
                St.add(T), T.unmount = function() {
                    St.delete(T), St.size < 1 && (d = nt, $ && $(), $ = null, u.value = nt, xe = !1, te = !1), V()
                }
            }
        };
    return gn
}

function Ct(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}

function Pu(e, t) {
    const n = [],
        r = [],
        s = [],
        i = Math.max(t.matched.length, e.matched.length);
    for (let l = 0; l < i; l++) {
        const f = t.matched[l];
        f && (e.matched.find(d => Vt(d, f)) ? r.push(f) : n.push(f));
        const u = e.matched[l];
        u && (t.matched.find(d => Vt(d, u)) || s.push(u))
    }
    return [n, r, s]
}

function Rr(e, t = {}, n) {
    for (const r in e) {
        const s = e[r],
            i = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? Rr(s, t, i) : typeof s == "function" && (t[i] = s)
    }
    return t
}
const Cu = {
        run: e => e()
    },
    Ou = () => Cu,
    Li = typeof console.createTask < "u" ? console.createTask : Ou;

function Ru(e, t) {
    const n = t.shift(),
        r = Li(n);
    return e.reduce((s, i) => s.then(() => r.run(() => i(...t))), Promise.resolve())
}

function Hu(e, t) {
    const n = t.shift(),
        r = Li(n);
    return Promise.all(e.map(s => r.run(() => s(...t))))
}

function mr(e, t) {
    for (const n of [...e]) n(t)
}
class Iu {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const s = t;
        let i;
        for (; this._deprecatedHooks[t];) i = this._deprecatedHooks[t], t = i.to;
        if (i && !r.allowDeprecated) {
            let l = i.message;
            l || (l = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(l) || (console.warn(l), this._deprecatedMessages.add(l))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...i) => (typeof r == "function" && r(), r = void 0, s = void 0, n(...i));
        return r = this.hook(t, s), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const s of r) this.hook(t, s)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Rr(t),
            r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length)) s()
        }
    }
    removeHooks(t) {
        const n = Rr(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(Ru, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(Hu, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && mr(this._before, s);
        const i = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return i instanceof Promise ? i.finally(() => {
            this._after && s && mr(this._after, s)
        }) : (this._after && s && mr(this._after, s), i)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function Mu() {
    return new Iu
}

function Lu(e) {
    return Array.isArray(e) ? e : [e]
}
const Fu = ["title", "titleTemplate", "script", "style", "noscript"],
    Pn = ["base", "meta", "link", "style", "script", "noscript"],
    $u = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    Bu = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
    Fi = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"],
    Du = typeof window < "u";

function so(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function is(e) {
    return e._h || so(e._d ? e._d : `${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}

function $i(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (Bu.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const s = ["id"];
    r === "meta" && s.push("name", "property", "http-equiv");
    for (const i of s)
        if (typeof n[i] < "u") {
            const l = String(n[i]);
            return `${r}:${i}:${l}`
        }
    return !1
}

function as(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function ju(e, t, n) {
    const r = {
        tag: e,
        props: await Bi(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? { ...t
        } : {
            [
                ["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"
            ]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Fi.forEach(s => {
        const i = typeof r.props[s] < "u" ? r.props[s] : n[s];
        typeof i < "u" && ((!["innerHTML", "textContent", "children"].includes(s) || Fu.includes(r.tag)) && (r[s === "children" ? "innerHTML" : s] = i), delete r.props[s])
    }), r.props.body && (r.tagPosition = "bodyClose", delete r.props.body), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map(s => ({ ...r,
        props: { ...r.props,
            content: s
        }
    })) : r
}

function Nu(e, t) {
    var r;
    const n = e === "class" ? " " : ";";
    return typeof t == "object" && !Array.isArray(t) && (t = Object.entries(t).filter(([, s]) => s).map(([s, i]) => e === "style" ? `${s}:${i}` : s)), (r = Array.isArray(t) ? t.join(n) : t) == null ? void 0 : r.split(n).filter(s => s.trim()).filter(Boolean).join(n)
}
async function Bi(e, t) {
    for (const n of Object.keys(e)) {
        if (["class", "style"].includes(n)) {
            e[n] = Nu(n, e[n]);
            continue
        }
        if (e[n] instanceof Promise && (e[n] = await e[n]), !t && !Fi.includes(n)) {
            const r = String(e[n]),
                s = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = s ? "true" : !0 : e[n] || (s && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const Vu = 10;
async function Ku(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n, r]) => typeof r < "u" && $u.includes(n)).forEach(([n, r]) => {
        const s = Lu(r);
        t.push(...s.map(i => ju(n, i, e)).flat())
    }), (await Promise.all(t)).flat().filter(Boolean).map((n, r) => (n._e = e._i, e.mode && (n._m = e.mode), n._p = (e._i << Vu) + r, n))
}
const ls = {
        base: -10,
        title: 10
    },
    cs = {
        critical: -80,
        high: -10,
        low: 20
    };

function Nn(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30), e.props.charset && (t = -20), e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in ls && (t = ls[e.tag]), typeof n == "string" && n in cs ? t + cs[n] : t)
}
const qu = [{
        prefix: "before:",
        offset: -1
    }, {
        prefix: "after:",
        offset: 1
    }],
    us = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
    rt = "%separator";

function Cn(e, t, n) {
    if (typeof e != "string" || !e.includes("%")) return e;

    function r(l) {
        let f;
        return ["s", "pageTitle"].includes(l) ? f = t.pageTitle : l.includes(".") ? f = l.split(".").reduce((u, d) => u && u[d] || void 0, t) : f = t[l], typeof f < "u" ? (f || "").replace(/"/g, '\\"') : !1
    }
    let s = e;
    try {
        s = decodeURI(e)
    } catch {}
    return (s.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(l => {
        const f = r(l.slice(1));
        typeof f == "string" && (e = e.replace(new RegExp(`\\${l}(\\W|$)`, "g"), (u, d) => `${f}${d}`).trim())
    }), e.includes(rt) && (e.endsWith(rt) && (e = e.slice(0, -rt.length).trim()), e.startsWith(rt) && (e = e.slice(rt.length).trim()), e = e.replace(new RegExp(`\\${rt}\\s*\\${rt}`, "g"), rt), e = Cn(e, {
        separator: n
    }, n)), e
}
async function Uu(e, t = {}) {
    var p;
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !r.shouldRender) return;
    const s = (await e.resolveTags()).map(o => ({
        tag: o,
        id: Pn.includes(o.tag) ? is(o) : o.tag,
        shouldRender: !0
    }));
    let i = e._dom;
    if (!i) {
        i = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const o of ["body", "head"]) {
            const a = (p = n[o]) == null ? void 0 : p.children,
                c = [];
            for (const _ of [...a].filter(g => Pn.includes(g.tagName.toLowerCase()))) {
                const g = {
                    tag: _.tagName.toLowerCase(),
                    props: await Bi(_.getAttributeNames().reduce((y, w) => ({ ...y,
                        [w]: _.getAttribute(w)
                    }), {})),
                    innerHTML: _.innerHTML
                };
                let b = 1,
                    h = $i(g);
                for (; h && c.find(y => y._d === h);) h = `${h}:${b++}`;
                g._d = h || void 0, c.push(g), i.elMap[_.getAttribute("data-hid") || is(g)] = _
            }
        }
    }
    i.pendingSideEffects = { ...i.sideEffects || {}
    }, i.sideEffects = {};

    function l(o, a, c) {
        const _ = `${o}:${a}`;
        i.sideEffects[_] = c, delete i.pendingSideEffects[_]
    }

    function f({
        id: o,
        $el: a,
        tag: c
    }) {
        const _ = c.tag.endsWith("Attrs");
        i.elMap[o] = a, _ || (["textContent", "innerHTML"].forEach(g => {
            c[g] && c[g] !== a[g] && (a[g] = c[g])
        }), l(o, "el", () => {
            var g;
            (g = i.elMap[o]) == null || g.remove(), delete i.elMap[o]
        }));
        for (const [g, b] of Object.entries(c._eventHandlers || {})) a.getAttribute(`data-${g}`) !== "" && ((c.tag === "bodyAttrs" ? n.defaultView : a).addEventListener(g.replace("on", ""), b.bind(a)), a.setAttribute(`data-${g}`, ""));
        Object.entries(c.props).forEach(([g, b]) => {
            const h = `attr:${g}`;
            if (g === "class")
                for (const y of (b || "").split(" ").filter(Boolean)) _ && l(o, `${h}:${y}`, () => a.classList.remove(y)), !a.classList.contains(y) && a.classList.add(y);
            else if (g === "style")
                for (const y of (b || "").split(";").filter(Boolean)) {
                    const [w, ...C] = y.split(":").map(F => F.trim());
                    l(o, `${h}:${y}:${w}`, () => {
                        a.style.removeProperty(w)
                    }), a.style.setProperty(w, C.join(":"))
                } else a.getAttribute(g) !== b && a.setAttribute(g, b === !0 ? "" : String(b)), _ && l(o, h, () => a.removeAttribute(g))
        })
    }
    const u = [],
        d = {
            bodyClose: void 0,
            bodyOpen: void 0,
            head: void 0
        };
    for (const o of s) {
        const {
            tag: a,
            shouldRender: c,
            id: _
        } = o;
        if (c) {
            if (a.tag === "title") {
                n.title = a.textContent;
                continue
            }
            o.$el = o.$el || i.elMap[_], o.$el ? f(o) : Pn.includes(a.tag) && u.push(o)
        }
    }
    for (const o of u) {
        const a = o.tag.tagPosition || "head";
        o.$el = n.createElement(o.tag.tag), f(o), d[a] = d[a] || n.createDocumentFragment(), d[a].appendChild(o.$el)
    }
    for (const o of s) await e.hooks.callHook("dom:renderTag", o, n, l);
    d.head && n.head.appendChild(d.head), d.bodyOpen && n.body.insertBefore(d.bodyOpen, n.body.firstChild), d.bodyClose && n.body.appendChild(d.bodyClose), Object.values(i.pendingSideEffects).forEach(o => o()), e._dom = i, e.dirty = !1, await e.hooks.callHook("dom:rendered", {
        renders: s
    })
}
async function Wu(e, t = {}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r => n(async () => {
        await Uu(e, t), delete e._domUpdatePromise, r()
    }))
}

function Gu(e) {
    return t => {
        var r, s;
        const n = ((s = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
        return n && t.push(JSON.parse(n)), {
            mode: "client",
            hooks: {
                "entries:updated": function(i) {
                    Wu(i, e)
                }
            }
        }
    }
}
const Xu = ["templateParams", "htmlAttrs", "bodyAttrs"],
    Zu = {
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                ["hid", "vmid", "key"].forEach(r => {
                    e.props[r] && (e.key = e.props[r], delete e.props[r])
                });
                const n = $i(e) || (e.key ? `${e.tag}:${e.key}` : !1);
                n && (e._d = n)
            },
            "tags:resolve": function(e) {
                const t = {};
                e.tags.forEach(r => {
                    const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
                        i = t[s];
                    if (i) {
                        let f = r == null ? void 0 : r.tagDuplicateStrategy;
                        if (!f && Xu.includes(r.tag) && (f = "merge"), f === "merge") {
                            const u = i.props;
                            ["class", "style"].forEach(d => {
                                u[d] && (r.props[d] ? (d === "style" && !u[d].endsWith(";") && (u[d] += ";"), r.props[d] = `${u[d]} ${r.props[d]}`) : r.props[d] = u[d])
                            }), t[s].props = { ...u,
                                ...r.props
                            };
                            return
                        } else if (r._e === i._e) {
                            i._duped = i._duped || [], r._d = `${i._d}:${i._duped.length+1}`, i._duped.push(r);
                            return
                        } else if (Nn(r) > Nn(i)) return
                    }
                    const l = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                    if (Pn.includes(r.tag) && l === 0) {
                        delete t[s];
                        return
                    }
                    t[s] = r
                });
                const n = [];
                Object.values(t).forEach(r => {
                    const s = r._duped;
                    delete r._duped, n.push(r), s && n.push(...s)
                }), e.tags = n, e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
            }
        }
    },
    Qu = {
        mode: "server",
        hooks: {
            "tags:resolve": function(e) {
                const t = {};
                e.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
                    t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
                }), Object.keys(t).length && e.tags.push({
                    tag: "script",
                    innerHTML: JSON.stringify(t),
                    props: {
                        id: "unhead:payload",
                        type: "application/json"
                    }
                })
            }
        }
    },
    Yu = ["script", "link", "bodyAttrs"],
    zu = e => ({
        hooks: {
            "tags:resolve": function(t) {
                for (const n of t.tags.filter(r => Yu.includes(r.tag))) Object.entries(n.props).forEach(([r, s]) => {
                    r.startsWith("on") && typeof s == "function" && (e.ssr && us.includes(r) ? n.props[r] = `this.dataset.${r}fired = true` : delete n.props[r], n._eventHandlers = n._eventHandlers || {}, n._eventHandlers[r] = s)
                }), e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || so(n.props.src || n.props.href))
            },
            "dom:renderTag": function({
                $el: t,
                tag: n
            }) {
                var r, s;
                for (const i of Object.keys((t == null ? void 0 : t.dataset) || {}).filter(l => us.some(f => `${f}fired` === l))) {
                    const l = i.replace("fired", "");
                    (s = (r = n._eventHandlers) == null ? void 0 : r[l]) == null || s.call(t, new Event(l.replace("on", "")))
                }
            }
        }
    }),
    Ju = ["link", "style", "script", "noscript"],
    ef = {
        hooks: {
            "tag:normalise": ({
                tag: e
            }) => {
                e.key && Ju.includes(e.tag) && (e.props["data-hid"] = e._h = so(e.key))
            }
        }
    },
    tf = {
        hooks: {
            "tags:resolve": e => {
                const t = n => {
                    var r;
                    return (r = e.tags.find(s => s._d === n)) == null ? void 0 : r._p
                };
                for (const {
                        prefix: n,
                        offset: r
                    } of qu)
                    for (const s of e.tags.filter(i => typeof i.tagPriority == "string" && i.tagPriority.startsWith(n))) {
                        const i = t(s.tagPriority.replace(n, ""));
                        typeof i < "u" && (s._p = i + r)
                    }
                e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Nn(n) - Nn(r))
            }
        }
    },
    nf = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    rf = e => ({
        hooks: {
            "tags:resolve": t => {
                var f;
                const {
                    tags: n
                } = t, r = (f = n.find(u => u.tag === "title")) == null ? void 0 : f.textContent, s = n.findIndex(u => u.tag === "templateParams"), i = s !== -1 ? n[s].props : {}, l = i.separator || "|";
                delete i.separator, i.pageTitle = Cn(i.pageTitle || r || "", i, l);
                for (const u of n.filter(d => d.processTemplateParams !== !1)) {
                    const d = nf[u.tag];
                    d && typeof u.props[d] == "string" ? u.props[d] = Cn(u.props[d], i, l) : (u.processTemplateParams === !0 || ["titleTemplate", "title"].includes(u.tag)) && ["innerHTML", "textContent"].forEach(p => {
                        typeof u[p] == "string" && (u[p] = Cn(u[p], i, l))
                    })
                }
                e._templateParams = i, e._separator = l, t.tags = n.filter(u => u.tag !== "templateParams")
            }
        }
    }),
    of = {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e;
                let n = t.findIndex(s => s.tag === "titleTemplate");
                const r = t.findIndex(s => s.tag === "title");
                if (r !== -1 && n !== -1) {
                    const s = as(t[n].textContent, t[r].textContent);
                    s !== null ? t[r].textContent = s || t[r].textContent : delete t[r]
                } else if (n !== -1) {
                    const s = as(t[n].textContent);
                    s !== null && (t[n].textContent = s, t[n].tag = "title", n = -1)
                }
                n !== -1 && delete t[n], e.tags = t.filter(Boolean)
            }
        }
    },
    sf = {
        hooks: {
            "tags:afterResolve": function(e) {
                for (const t of e.tags) typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`, "g"), `<\\/${t.tag}`))
            }
        }
    };
let Di;

function af(e = {}) {
    const t = lf(e);
    return t.use(Gu()), Di = t
}

function fs(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}

function lf(e = {}) {
    const t = Mu();
    t.addHooks(e.hooks || {}), e.document = e.document || (Du ? document : void 0);
    const n = !e.document,
        r = () => {
            f.dirty = !0, t.callHook("entries:updated", f)
        };
    let s = 0,
        i = [];
    const l = [],
        f = {
            plugins: l,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            headEntries() {
                return i
            },
            use(u) {
                const d = typeof u == "function" ? u(f) : u;
                (!d.key || !l.some(p => p.key === d.key)) && (l.push(d), fs(d.mode, n) && t.addHooks(d.hooks || {}))
            },
            push(u, d) {
                d == null || delete d.head;
                const p = {
                    _i: s++,
                    input: u,
                    ...d
                };
                return fs(p.mode, n) && (i.push(p), r()), {
                    dispose() {
                        i = i.filter(o => o._i !== p._i), t.callHook("entries:updated", f), r()
                    },
                    patch(o) {
                        i = i.map(a => (a._i === p._i && (a.input = p.input = o), a)), r()
                    }
                }
            },
            async resolveTags() {
                const u = {
                    tags: [],
                    entries: [...i]
                };
                await t.callHook("entries:resolve", u);
                for (const d of u.entries) {
                    const p = d.resolvedInput || d.input;
                    if (d.resolvedInput = await (d.transform ? d.transform(p) : p), d.resolvedInput)
                        for (const o of await Ku(d)) {
                            const a = {
                                tag: o,
                                entry: d,
                                resolvedOptions: f.resolvedOptions
                            };
                            await t.callHook("tag:normalise", a), u.tags.push(a.tag)
                        }
                }
                return await t.callHook("tags:beforeResolve", u), await t.callHook("tags:resolve", u), await t.callHook("tags:afterResolve", u), u.tags
            },
            ssr: n
        };
    return [Zu, Qu, zu, ef, tf, rf, of , sf, ...(e == null ? void 0 : e.plugins) || []].forEach(u => f.use(u)), f.hooks.callHook("init", f), f
}

function cf() {
    return Di
}
const uf = vi.startsWith("3");

function ff(e) {
    return typeof e == "function" ? e() : ct(e)
}

function Hr(e, t = "") {
    if (e instanceof Promise) return e;
    const n = ff(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => Hr(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, s]) => r === "titleTemplate" || r.startsWith("on") ? [r, ct(s)] : [r, Hr(s, r)])) : n
}
const df = {
        hooks: {
            "entries:resolve": function(e) {
                for (const t of e.entries) t.resolvedInput = Hr(t.input)
            }
        }
    },
    ji = "usehead";

function pf(e) {
    return {
        install(n) {
            uf && (n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(ji, e))
        }
    }.install
}

function hf(e = {}) {
    e.domDelayFn = e.domDelayFn || (n => Xn(() => setTimeout(() => n(), 0)));
    const t = af(e);
    return t.use(df), t.install = pf(t), t
}
const ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    ps = "__unhead_injection_handler__";

function Sd() {
    if (ps in ds) return ds[ps]();
    const e = je(ji);
    return e || cf()
}

function _f(e) {
    try {
        return JSON.parse(e || "{}")
    } catch (t) {
        return console.error("[SSG] On state deserialization -", t, e), {}
    }
}

function mf(e) {
    return document.readyState === "loading" ? new Promise(t => {
        document.addEventListener("DOMContentLoaded", () => t(e))
    }) : Promise.resolve(e)
}
const gf = Yr({
    setup(e, {
        slots: t
    }) {
        const n = Wn(!1);
        return zr(() => n.value = !0), () => n.value ? t.default && t.default({}) : t.placeholder && t.placeholder({})
    }
});

function vf(e, t, n, r = {}) {
    const {
        transformState: s,
        registerComponents: i = !0,
        useHead: l = !0,
        rootContainer: f = "#app"
    } = r, u = typeof window < "u";
    async function d(p = !1, o) {
        const a = p ? Ec(e) : kc(e);
        let c;
        l && (c = hf(), a.use(c));
        const _ = Su({
                history: p ? Vc(t.base) : Kc(t.base),
                ...t
            }),
            {
                routes: g
            } = t;
        i && a.component("ClientOnly", gf);
        const b = [],
            w = {
                app: a,
                head: c,
                isClient: u,
                router: _,
                routes: g,
                onSSRAppRendered: p ? () => {} : H => b.push(H),
                triggerOnSSRAppRendered: () => Promise.all(b.map(H => H())),
                initialState: {},
                transformState: s,
                routePath: o
            };
        p && (await mf(), w.initialState = (s == null ? void 0 : s(window.__INITIAL_STATE__ || {})) || _f(window.__INITIAL_STATE__)), await (n == null ? void 0 : n(w)), a.use(_);
        let C, F = !0;
        if (_.beforeEach((H, E, R) => {
                (F || C && C === H.path) && (F = !1, C = H.path, H.meta.state = w.initialState), R()
            }), !p) {
            const H = w.routePath ? ? "/";
            _.push(H), await _.isReady(), w.initialState = _.currentRoute.value.meta.state || {}
        }
        const U = w.initialState;
        return { ...w,
            initialState: U
        }
    }
    return u && (async () => {
        const {
            app: p,
            router: o
        } = await d(!0);
        await o.isReady(), p.mount(f, !0)
    })(), d
}
const nr = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, s] of t) n[r] = s;
        return n
    },
    yf = {
        props: {
            href: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: null,
                validator(e) {
                    return ["info"].includes(e)
                }
            },
            loading: {
                type: Boolean,
                default: !1
            }
        }
    },
    bf = ["disabled"],
    wf = {
        key: 0,
        class: "size-[22px]",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    },
    xf = z("g", {
        class: "origin-center animate-spin"
    }, [z("circle", {
        class: "animate-spinner stroke-current",
        cx: "12",
        cy: "12",
        r: "9.5",
        fill: "none",
        "stroke-width": "3",
        "stroke-linecap": "round"
    })], -1),
    Af = [xf],
    Tf = {
        key: 1
    },
    Ef = ["href"];

function kf(e, t, n, r, s, i) {
    return n.href ? (Ue(), Ht("a", {
        key: 1,
        class: ft(["group relative inline-flex max-h-[3.75rem] items-center justify-center rounded-2xl px-5 py-4 text-lg font-bold outline-none transition duration-300 focus:ring-2 focus:ring-rose-300/90", {
            "bg-stone-800 text-orange-75 shadow-xl shadow-orange-950/20 after:absolute after:inset-0 after:hidden after:rounded-2xl after:shadow-2xl after:shadow-orange-950/25 after:content-[''] sm:shadow-orange-950/25 sm:after:block": !n.type,
            "bg-orange-950/5": n.type === "info"
        }]),
        href: n.href
    }, [Fn(e.$slots, "default")], 10, Ef)) : (Ue(), Ht("button", {
        key: 0,
        class: "group relative ml-2.5 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-stone-800 text-lg font-bold text-orange-75 outline-none transition duration-300 focus:ring-2 focus:ring-purple-300/85",
        disabled: n.loading
    }, [ue($t, {
        "enter-from-class": "opacity-0",
        "enter-active-class": "transition duration-200",
        "leave-active-class": "transition duration-150",
        "leave-to-class": "opacity-0",
        mode: "out-in"
    }, {
        default: Fe(() => [n.loading ? (Ue(), Ht("svg", wf, Af)) : (Ue(), Ht("div", Tf, [Fn(e.$slots, "default")]))]),
        _: 3
    })], 8, bf))
}
const Sf = nr(yf, [
        ["render", kf]
    ]),
    Pf = {
        props: {
            href: {
                type: String,
                default: ""
            },
            squircle: {
                type: Boolean,
                default: !1
            }
        }
    },
    Cf = ["href"];

function Of(e, t, n, r, s, i) {
    return Ue(), Ht("a", {
        class: ft(["group inline-flex items-center justify-center outline-none transition duration-300 hover:bg-orange-950/5 focus:ring-2 focus:ring-rose-300/90 dark:bg-orange-75/5 dark:hover:bg-orange-75/5", {
            "rounded-2xl px-5 py-4 text-lg font-bold": !n.squircle,
            "rounded-xl bg-orange-950/5 p-2 text-orange-950/50 hover:text-orange-950/75 dark:text-orange-75 dark:hover:text-orange-75": n.squircle
        }]),
        href: n.href
    }, [Fn(e.$slots, "default")], 10, Cf)
}
const Rf = nr(Pf, [
        ["render", Of]
    ]),
    Hf = {
        components: {
            ButtonComponent: Sf,
            LinkComponent: Rf
        },
        setup() {
            return {
                appVersion: "1.4.1",
                discordUrl: "https://discord.tryalcove.com"
            }
        },
        data() {
            return {
                hasScrolled: !1,
                observer: null,
                swiftVisible: !1
            }
        },
        computed: {
            shortAppVersion() {
                return this.appVersion.split(".").slice(0, 2).join(".")
            },
            shouldShowContact() {
                return this.$route.path !== "/"
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
            const e = {
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: 0
            };
            this.$refs.swift && (this.observer = new IntersectionObserver(this.handleObserve, e), this.observer.observe(this.$refs.swift))
        },
        beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll), this.$refs.swift && this.observer.unobserve(this.$refs.swift)
        },
        methods: {
            handleScroll() {
                this.hasScrolled = window.scrollY > 32
            },
            handleObserve(e) {
                e.forEach(t => {
                    t.isIntersecting ? this.swiftVisible = !0 : this.swiftVisible = !1
                })
            }
        }
    },
    If = {
        class: "flex min-h-svh flex-col text-stone-800 dark:text-orange-75"
    },
    Mf = {
        class: "flex w-full max-w-screen-3xl justify-between"
    },
    Lf = {
        class: "flex items-center opacity-0 delay-75"
    },
    Ff = z("a", {
        href: "/",
        class: "group flex items-center outline-none",
        tabindex: "-1",
        "aria-label": "Go home"
    }, [z("div", {
        class: "relative mr-3 h-10 w-10 overflow-hidden rounded-xl border-[2.5px] border-stone-800 dark:border-orange-100"
    }, [z("div", {
        class: "absolute inset-0.5 origin-center rounded-lg bg-gradient-to-t from-stone-950/20 to-stone-950 to-95% transition delay-50 duration-300 ease-out group-hover:-translate-x-full group-hover:scale-x-50 group-hover:scale-y-75 group-hover:opacity-25 group-hover:delay-0 dark:from-orange-75 dark:to-orange-75/5 dark:to-100%"
    }), z("svg", {
        class: "absolute -left-1 -top-1 h-11 w-11 fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        "aria-hidden": "true"
    }, [z("path", {
        class: "ease absolute origin-right translate-x-0.5 scale-50 opacity-0 blur-xs transition duration-300 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-none group-hover:delay-50",
        d: "M18.032 11.218a1 1 0 0 0-1.414 0l-6.075 6.075a1 1 0 0 0 0 1.414l6.075 6.075a1 1 0 0 0 1.414-1.414L13.664 19H24.75a1 1 0 1 0 0-2H13.664l4.368-4.368a1 1 0 0 0 0-1.414Z"
    })])]), z("div", {
        class: "text-2xl font-bold"
    }, "Alcove")], -1),
    $f = {
        href: "https://github.com/henrikruscon/alcove-releases/releases",
        class: "group ml-[6.5px] mt-2.5 flex items-center justify-center self-start whitespace-nowrap rounded-lg border-[1.5px] border-orange-950/15 bg-orange-950/[0.03] px-1 py-px text-center text-xs font-bold text-orange-950/60 outline-none dark:border-orange-75/10 dark:bg-orange-75/[0.04] dark:text-orange-75/50",
        rel: "noopener noreferrer",
        target: "_blank",
        tabindex: "-1",
        "aria-label": "GitHub Releases"
    },
    Bf = {
        class: "flex items-center space-x-7 opacity-0 delay-75"
    },
    Df = z("svg", {
        class: "size-[22px] origin-bottom fill-current transition duration-300 group-hover:-rotate-12 sm:mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [z("path", {
        d: "M13.8906 26.9805C14.418 26.9805 14.9102 26.7578 15.3789 25.9492L17.5469 22.3281H21.4609C24.9531 22.3281 26.8281 20.3945 26.8281 16.9609V7.98438C26.8281 4.55078 24.9531 2.61719 21.4609 2.61719H6.36719C2.875 2.61719 1 4.53906 1 7.98438V16.9609C1 20.4062 2.875 22.3281 6.36719 22.3281H10.2344L12.4023 25.9492C12.8711 26.7578 13.3633 26.9805 13.8906 26.9805Z"
    }), z("path", {
        class: "origin-top-left stroke-current stroke-2 text-orange-75 transition duration-250 group-hover:-rotate-3 group-hover:text-[#f6e5d5] group-hover:delay-50 dark:text-stone-900 dark:group-hover:text-stone-900",
        d: "M8 14H16M8 10H20.25",
        "stroke-linecap": "round"
    })], -1),
    jf = {
        class: "hidden sm:block"
    },
    Nf = z("div", {
        class: "ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm"
    }, [z("svg", {
        class: "h-6 w-6 fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [z("path", {
        d: "M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"
    })])], -1),
    Vf = z("div", {
        class: "ease translate-x-0 transition duration-300 group-hover:-translate-x-8"
    }, " Download for Mac ", -1),
    Kf = z("div", {
        class: "ease absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
    }, [z("svg", {
        class: "h-6 w-6 fill-transparent stroke-current stroke-2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
    }, [z("path", {
        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    })])], -1),
    qf = {
        class: "flex flex-1 justify-center px-8 pb-16 pt-32 sm:pb-28 sm:pt-48 xl:px-36"
    },
    Uf = {
        class: "relative flex flex-col items-center justify-center px-8 pb-20 opacity-0 delay-[1300ms] sm:pb-0 dark:delay-[800ms]"
    },
    Wf = {
        class: "flex items-center justify-center space-x-3"
    },
    Gf = z("svg", {
        class: "size-[22px] fill-current transition duration-300 ease-out group-hover:scale-105 dark:opacity-50 dark:group-hover:opacity-100",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [z("path", {
        d: "M21.2391 3H18.6854L12.9921 9.61784L14.1261 11.2682L21.2391 3Z"
    }), z("path", {
        d: "M11.2104 14.6575L10.0764 13.0071L3.2002 21H5.75403L11.2104 14.6575Z"
    }), z("path", {
        d: "M8.44486 3H3.2002L15.5685 21H20.8131L8.44486 3ZM5.31391 4.16971H7.70053L18.6861 19.8835H16.2995L5.31391 4.16971Z"
    })], -1),
    Xf = z("svg", {
        class: "size-6 fill-current transition duration-300 ease-out group-hover:scale-105 dark:opacity-50 dark:group-hover:opacity-100",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [z("path", {
        "fill-rule": "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        "clip-rule": "evenodd"
    })], -1),
    Zf = z("svg", {
        class: "size-6 fill-current transition duration-300 ease-out group-hover:scale-105 dark:opacity-50 dark:group-hover:opacity-100",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [z("path", {
        d: "M19.304 4.894c2.372 3.487 3.543 7.42 3.106 11.949a.068.068 0 0 1-.028.048 17.357 17.357 0 0 1-5.252 2.65.067.067 0 0 1-.074-.025 14.014 14.014 0 0 1-1.072-1.744.067.067 0 0 1 .036-.093 10.726 10.726 0 0 0 1.64-.78.067.067 0 0 0 .005-.111 8.321 8.321 0 0 1-.326-.256.064.064 0 0 0-.069-.008c-3.396 1.568-7.117 1.568-10.554 0a.065.065 0 0 0-.068.009 8.917 8.917 0 0 1-.325.255.067.067 0 0 0 .007.111c.523.3 1.067.565 1.638.781a.066.066 0 0 1 .036.093 12.472 12.472 0 0 1-1.072 1.744.068.068 0 0 1-.074.024 17.414 17.414 0 0 1-5.244-2.65.071.071 0 0 1-.027-.049c-.366-3.917.38-7.883 3.102-11.948a.061.061 0 0 1 .028-.025 17.28 17.28 0 0 1 4.275-1.325.068.068 0 0 1 .068.033c.186.328.398.748.54 1.092a15.997 15.997 0 0 1 4.802 0c.143-.336.348-.764.532-1.092a.065.065 0 0 1 .069-.033c1.5.26 2.936.711 4.274 1.325a.052.052 0 0 1 .027.025Zm-8.9 7.447c.017-1.157-.827-2.116-1.887-2.116-1.05 0-1.887.95-1.887 2.116 0 1.166.853 2.116 1.887 2.116 1.052 0 1.888-.95 1.888-2.116Zm6.978 0c.017-1.157-.827-2.116-1.887-2.116-1.05 0-1.887.95-1.887 2.116 0 1.166.853 2.116 1.887 2.116 1.06 0 1.887-.95 1.887-2.116Z"
    })], -1),
    Qf = z("div", {
        class: "pointer-events-none -mt-6 hidden select-none overflow-hidden bg-gradient-to-b from-orange-950/10 from-25% to-orange-950/0 bg-clip-text text-[14rem] font-black leading-none text-transparent sm:block sm:h-36 md:h-48 md:text-[18rem] lg:h-56 lg:text-[20rem] dark:from-orange-75/[0.035] dark:to-orange-75/0"
    }, " Alcove ", -1);

function Yf(e, t, n, r, s, i) {
    const l = Ln("LinkComponent"),
        f = Ln("ButtonComponent");
    return Ue(), Ht("section", If, [z("header", {
        class: ft(["transition-shadows fixed top-0 z-40 flex w-full justify-center bg-orange-75 px-8 py-5 outline outline-1 outline-orange-400/0 duration-300 sm:py-7 dark:bg-stone-900", {
            "shadow-2xl shadow-orange-800/15 outline-orange-400/5 sm:bg-orange-75/80 sm:backdrop-blur-xl dark:shadow-none dark:outline-none sm:dark:bg-stone-900/80": s.hasScrolled
        }])
    }, [z("div", Mf, [ue($t, {
        "enter-from-class": "rotate-6 scale-75 translate-y-4 opacity-0",
        "enter-active-class": "transition duration-500 ease will-change-transform",
        appear: ""
    }, {
        default: Fe(() => [z("div", Lf, [Ff, z("a", $f, " v" + co(i.shortAppVersion), 1)])]),
        _: 1
    }), ue($t, {
        "enter-from-class": "opacity-0",
        "enter-active-class": "transition duration-700 ease-in",
        appear: ""
    }, {
        default: Fe(() => [z("div", Bf, [ue(l, {
            class: ft(["bg-stone-800 bg-opacity-5 sm:bg-opacity-0", {
                "!bg-orange-950/5 dark:!bg-orange-75/5": e.$route.path !== "/"
            }]),
            href: i.shouldShowContact ? "mailto:hello@tryalcove.com" : "/faqs",
            "aria-label": i.shouldShowContact ? "Contact us" : "Frequently asked questions"
        }, {
            default: Fe(() => [Df, z("span", jf, co(i.shouldShowContact ? "Contact" : "FAQs"), 1)]),
            _: 1
        }, 8, ["class", "href", "aria-label"]), e.$route.path == "/" ? (Ue(), zn(f, {
            key: 0,
            class: "hidden pl-[3.25rem] sm:flex",
            type: "info",
            href: "/download",
            "aria-label": "Download for Mac"
        }, {
            default: Fe(() => [Nf, Vf, Kf]),
            _: 1
        })) : Dl("", !0)])]),
        _: 1
    })])], 2), z("main", qf, [Fn(e.$slots, "default")]), ue($t, {
        "enter-from-class": "translate-y-5 opacity-0",
        "enter-active-class": "transition duration-500 ease",
        appear: ""
    }, {
        default: Fe(() => [z("footer", Uf, [z("div", Wf, [ue(l, {
            class: "size-10",
            href: "https://twitter.com/henrikruscon",
            rel: "noopener noreferrer",
            target: "_blank",
            "aria-label": "X (Twitter)",
            squircle: ""
        }, {
            default: Fe(() => [Gf]),
            _: 1
        }), ue(l, {
            class: "size-10",
            href: "https://github.com/henrikruscon",
            rel: "noopener noreferrer",
            target: "_blank",
            "aria-label": "GitHub",
            squircle: ""
        }, {
            default: Fe(() => [Xf]),
            _: 1
        }), ue(l, {
            class: "size-10",
            href: r.discordUrl,
            rel: "noopener noreferrer",
            target: "_blank",
            "aria-label": "Discord",
            squircle: ""
        }, {
            default: Fe(() => [Zf]),
            _: 1
        }, 8, ["href"])]), Qf])]),
        _: 1
    })])
}
const zf = nr(Hf, [
        ["render", Yf]
    ]),
    Jf = {
        components: {
            AppLayout: zf
        },
        data() {
            return {
                isDark: !1
            }
        },
        watch: {
            "$route.path": {
                immediate: !0,
                handler(e) {
                    (e === "/faqs" || e === "/privacy") && (this.isDark = !0, typeof document < "u" && document.documentElement.classList.add("dark"))
                }
            }
        }
    };

function ed(e, t, n, r, s, i) {
    const l = Ln("RouterView"),
        f = Ln("AppLayout");
    return Ue(), zn(f, {
        class: ft({
            dark: s.isDark
        })
    }, {
        default: Fe(() => [ue(l)]),
        _: 1
    }, 8, ["class"])
}
const td = nr(Jf, [
        ["render", ed]
    ]),
    nd = "modulepreload",
    rd = function(e) {
        return "/" + e
    },
    hs = {},
    Xt = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"),
                l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
            s = Promise.all(n.map(f => {
                if (f = rd(f), f in hs) return;
                hs[f] = !0;
                const u = f.endsWith(".css"),
                    d = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${f}"]${d}`)) return;
                const p = document.createElement("link");
                if (p.rel = u ? "stylesheet" : nd, u || (p.as = "script", p.crossOrigin = ""), p.href = f, l && p.setAttribute("nonce", l), document.head.appendChild(p), u) return new Promise((o, a) => {
                    p.addEventListener("load", o), p.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${f}`)))
                })
            }))
        }
        return s.then(() => t()).catch(i => {
            const l = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (l.payload = i, window.dispatchEvent(l), !l.defaultPrevented) throw i
        })
    },
    od = () => Xt(() =>
        import ("./HomePage-CY6A3wVf.js"), __vite__mapDeps([0, 1, 2, 3])),
    sd = () => Xt(() =>
        import ("./DownloadPage-CBNdupOg.js"), __vite__mapDeps([4, 2, 5])),
    id = () => Xt(() =>
        import ("./PurchasedPage-C-E6mZHq.js"), __vite__mapDeps([6, 2, 5, 1])),
    ad = () => Xt(() =>
        import ("./RecoverPage-80hkP5Dp.js"), __vite__mapDeps([7, 2, 5])),
    ld = () => Xt(() =>
        import ("./QuestionsPage-Bq3Czad8.js"), __vite__mapDeps([8, 5])),
    cd = () => Xt(() =>
        import ("./PrivacyPage-B-LTo7DQ.js"), __vite__mapDeps([9, 5])),
    ud = [{
        path: "/:catchAll(.*)",
        redirect: "/"
    }, {
        path: "/",
        component: od
    }, {
        path: "/download",
        component: sd
    }, {
        path: "/purchased",
        component: id
    }, {
        path: "/recover",
        component: ad
    }, {
        path: "/faqs",
        component: ld
    }, {
        path: "/privacy",
        component: cd
    }];

function fd(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            var r = e.get(t);
            r ? r.push(n) : e.set(t, [n])
        },
        off: function(t, n) {
            var r = e.get(t);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, n) {
            var r = e.get(t);
            r && r.slice().map(function(s) {
                s(n)
            }), (r = e.get("*")) && r.slice().map(function(s) {
                s(t, n)
            })
        }
    }
}
var dd = !1;
/*!
 * pinia v2.0.33
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Ni;
const rr = e => Ni = e,
    Vi = Symbol();

function Ir(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var cn;
(function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(cn || (cn = {}));

function pd() {
    const e = As(!0),
        t = e.run(() => Wn({}));
    let n = [],
        r = [];
    const s = Dt({
        install(i) {
            rr(s), s._a = i, i.provide(Vi, s), i.config.globalProperties.$pinia = s, r.forEach(l => n.push(l)), r = []
        },
        use(i) {
            return !this._a && !dd ? r.push(i) : n.push(i), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return s
}
const Ki = () => {};

function _s(e, t, n, r = Ki) {
    e.push(t);
    const s = () => {
        const i = e.indexOf(t);
        i > -1 && (e.splice(i, 1), r())
    };
    return !n && Ts() && ca(s), s
}

function Ot(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}

function Mr(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const r = t[n],
            s = e[n];
        Ir(s) && Ir(r) && e.hasOwnProperty(n) && !_e(r) && !lt(r) ? e[n] = Mr(s, r) : e[n] = r
    }
    return e
}
const hd = Symbol();

function _d(e) {
    return !Ir(e) || !e.hasOwnProperty(hd)
}
const {
    assign: ot
} = Object;

function md(e) {
    return !!(_e(e) && e.effect)
}

function gd(e, t, n, r) {
    const {
        state: s,
        actions: i,
        getters: l
    } = t, f = n.state.value[e];
    let u;

    function d() {
        f || (n.state.value[e] = s ? s() : {});
        const p = Na(n.state.value[e]);
        return ot(p, i, Object.keys(l || {}).reduce((o, a) => (o[a] = Dt(Pe(() => {
            rr(n);
            const c = n._s.get(e);
            return l[a].call(c, c)
        })), o), {}))
    }
    return u = qi(e, d, t, n, r, !0), u
}

function qi(e, t, n = {}, r, s, i) {
    let l;
    const f = ot({
            actions: {}
        }, n),
        u = {
            deep: !0
        };
    let d, p, o = Dt([]),
        a = Dt([]),
        c;
    const _ = r.state.value[e];
    !i && !_ && (r.state.value[e] = {}), Wn({});
    let g;

    function b(H) {
        let E;
        d = p = !1, typeof H == "function" ? (H(r.state.value[e]), E = {
            type: cn.patchFunction,
            storeId: e,
            events: c
        }) : (Mr(r.state.value[e], H), E = {
            type: cn.patchObject,
            payload: H,
            storeId: e,
            events: c
        });
        const R = g = Symbol();
        Xn().then(() => {
            g === R && (d = !0)
        }), p = !0, Ot(o, E, r.state.value[e])
    }
    const h = i ? function() {
        const {
            state: E
        } = n, R = E ? E() : {};
        this.$patch(N => {
            ot(N, R)
        })
    } : Ki;

    function y() {
        l.stop(), o = [], a = [], r._s.delete(e)
    }

    function w(H, E) {
        return function() {
            rr(r);
            const R = Array.from(arguments),
                N = [],
                G = [];

            function $(oe) {
                N.push(oe)
            }

            function X(oe) {
                G.push(oe)
            }
            Ot(a, {
                args: R,
                name: H,
                store: F,
                after: $,
                onError: X
            });
            let M;
            try {
                M = E.apply(this && this.$id === e ? this : F, R)
            } catch (oe) {
                throw Ot(G, oe), oe
            }
            return M instanceof Promise ? M.then(oe => (Ot(N, oe), oe)).catch(oe => (Ot(G, oe), Promise.reject(oe))) : (Ot(N, M), M)
        }
    }
    const C = {
            _p: r,
            $id: e,
            $onAction: _s.bind(null, a),
            $patch: b,
            $reset: h,
            $subscribe(H, E = {}) {
                const R = _s(o, H, E.detached, () => N()),
                    N = l.run(() => nn(() => r.state.value[e], G => {
                        (E.flush === "sync" ? p : d) && H({
                            storeId: e,
                            type: cn.direct,
                            events: c
                        }, G)
                    }, ot({}, u, E)));
                return R
            },
            $dispose: y
        },
        F = Gt(C);
    r._s.set(e, F);
    const U = r._e.run(() => (l = As(), l.run(() => t())));
    for (const H in U) {
        const E = U[H];
        if (_e(E) && !md(E) || lt(E)) i || (_ && _d(E) && (_e(E) ? E.value = _[H] : Mr(E, _[H])), r.state.value[e][H] = E);
        else if (typeof E == "function") {
            const R = w(H, E);
            U[H] = R, f.actions[H] = E
        }
    }
    return ot(F, U), ot(ee(F), U), Object.defineProperty(F, "$state", {
        get: () => r.state.value[e],
        set: H => {
            b(E => {
                ot(E, H)
            })
        }
    }), r._p.forEach(H => {
        ot(F, l.run(() => H({
            store: F,
            app: r._a,
            pinia: r,
            options: f
        })))
    }), _ && i && n.hydrate && n.hydrate(F.$state, _), d = !0, p = !0, F
}

function Ui(e, t, n) {
    let r, s;
    const i = typeof t == "function";
    typeof e == "string" ? (r = e, s = i ? n : t) : (s = e, r = e.id);

    function l(f, u) {
        const d = _i();
        return f = f || d && je(Vi, null), f && rr(f), f = Ni, f._s.has(r) || (i ? qi(r, t, s, f) : gd(r, s, f)), f._s.get(r)
    }
    return l.$id = r, l
}
const vd = Ui("time", {
    state: () => ({
        now: new Date,
        count: 0,
        interval: null
    }),
    getters: {
        isNight(e) {
            const n = (e.now instanceof Date ? e.now : new Date(e.now)).getHours();
            return n < 6 || n >= 18
        }
    },
    actions: {
        start() {
            this.interval = setInterval(() => {
                this.now = new Date, this.count++
            }, 1e3)
        },
        stop() {
            clearInterval(this.interval)
        }
    }
});
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Wi = {};
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function(e) {
    (function() {
        var t = function() {
            this.init()
        };
        t.prototype = {
            init: function() {
                var o = this || n;
                return o._counter = 1e3, o._html5AudioPool = [], o.html5PoolSize = 10, o._codecs = {}, o._howls = [], o._muted = !1, o._volume = 1, o._canPlayEvent = "canplaythrough", o._navigator = typeof window < "u" && window.navigator ? window.navigator : null, o.masterGain = null, o.noAudio = !1, o.usingWebAudio = !0, o.autoSuspend = !0, o.ctx = null, o.autoUnlock = !0, o._setup(), o
            },
            volume: function(o) {
                var a = this || n;
                if (o = parseFloat(o), a.ctx || p(), typeof o < "u" && o >= 0 && o <= 1) {
                    if (a._volume = o, a._muted) return a;
                    a.usingWebAudio && a.masterGain.gain.setValueAtTime(o, n.ctx.currentTime);
                    for (var c = 0; c < a._howls.length; c++)
                        if (!a._howls[c]._webAudio)
                            for (var _ = a._howls[c]._getSoundIds(), g = 0; g < _.length; g++) {
                                var b = a._howls[c]._soundById(_[g]);
                                b && b._node && (b._node.volume = b._volume * o)
                            }
                    return a
                }
                return a._volume
            },
            mute: function(o) {
                var a = this || n;
                a.ctx || p(), a._muted = o, a.usingWebAudio && a.masterGain.gain.setValueAtTime(o ? 0 : a._volume, n.ctx.currentTime);
                for (var c = 0; c < a._howls.length; c++)
                    if (!a._howls[c]._webAudio)
                        for (var _ = a._howls[c]._getSoundIds(), g = 0; g < _.length; g++) {
                            var b = a._howls[c]._soundById(_[g]);
                            b && b._node && (b._node.muted = o ? !0 : b._muted)
                        }
                return a
            },
            stop: function() {
                for (var o = this || n, a = 0; a < o._howls.length; a++) o._howls[a].stop();
                return o
            },
            unload: function() {
                for (var o = this || n, a = o._howls.length - 1; a >= 0; a--) o._howls[a].unload();
                return o.usingWebAudio && o.ctx && typeof o.ctx.close < "u" && (o.ctx.close(), o.ctx = null, p()), o
            },
            codecs: function(o) {
                return (this || n)._codecs[o.replace(/^x-/, "")]
            },
            _setup: function() {
                var o = this || n;
                if (o.state = o.ctx && o.ctx.state || "suspended", o._autoSuspend(), !o.usingWebAudio)
                    if (typeof Audio < "u") try {
                        var a = new Audio;
                        typeof a.oncanplaythrough > "u" && (o._canPlayEvent = "canplay")
                    } catch {
                        o.noAudio = !0
                    } else o.noAudio = !0;
                try {
                    var a = new Audio;
                    a.muted && (o.noAudio = !0)
                } catch {}
                return o.noAudio || o._setupCodecs(), o
            },
            _setupCodecs: function() {
                var o = this || n,
                    a = null;
                try {
                    a = typeof Audio < "u" ? new Audio : null
                } catch {
                    return o
                }
                if (!a || typeof a.canPlayType != "function") return o;
                var c = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    _ = o._navigator ? o._navigator.userAgent : "",
                    g = _.match(/OPR\/(\d+)/g),
                    b = g && parseInt(g[0].split("/")[1], 10) < 33,
                    h = _.indexOf("Safari") !== -1 && _.indexOf("Chrome") === -1,
                    y = _.match(/Version\/(.*?) /),
                    w = h && y && parseInt(y[1], 10) < 15;
                return o._codecs = {
                    mp3: !!(!b && (c || a.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!c,
                    opus: !!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(a.canPlayType('audio/wav; codecs="1"') || a.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!a.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!a.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(a.canPlayType("audio/x-m4b;") || a.canPlayType("audio/m4b;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(a.canPlayType("audio/x-mp4;") || a.canPlayType("audio/mp4;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!w && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!w && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!a.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(a.canPlayType("audio/x-flac;") || a.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, o
            },
            _unlockAudio: function() {
                var o = this || n;
                if (!(o._audioUnlocked || !o.ctx)) {
                    o._audioUnlocked = !1, o.autoUnlock = !1, !o._mobileUnloaded && o.ctx.sampleRate !== 44100 && (o._mobileUnloaded = !0, o.unload()), o._scratchBuffer = o.ctx.createBuffer(1, 1, 22050);
                    var a = function(c) {
                        for (; o._html5AudioPool.length < o.html5PoolSize;) try {
                            var _ = new Audio;
                            _._unlocked = !0, o._releaseHtml5Audio(_)
                        } catch {
                            o.noAudio = !0;
                            break
                        }
                        for (var g = 0; g < o._howls.length; g++)
                            if (!o._howls[g]._webAudio)
                                for (var b = o._howls[g]._getSoundIds(), h = 0; h < b.length; h++) {
                                    var y = o._howls[g]._soundById(b[h]);
                                    y && y._node && !y._node._unlocked && (y._node._unlocked = !0, y._node.load())
                                }
                        o._autoResume();
                        var w = o.ctx.createBufferSource();
                        w.buffer = o._scratchBuffer, w.connect(o.ctx.destination), typeof w.start > "u" ? w.noteOn(0) : w.start(0), typeof o.ctx.resume == "function" && o.ctx.resume(), w.onended = function() {
                            w.disconnect(0), o._audioUnlocked = !0, document.removeEventListener("touchstart", a, !0), document.removeEventListener("touchend", a, !0), document.removeEventListener("click", a, !0), document.removeEventListener("keydown", a, !0);
                            for (var C = 0; C < o._howls.length; C++) o._howls[C]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", a, !0), document.addEventListener("touchend", a, !0), document.addEventListener("click", a, !0), document.addEventListener("keydown", a, !0), o
                }
            },
            _obtainHtml5Audio: function() {
                var o = this || n;
                if (o._html5AudioPool.length) return o._html5AudioPool.pop();
                var a = new Audio().play();
                return a && typeof Promise < "u" && (a instanceof Promise || typeof a.then == "function") && a.catch(function() {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                }), new Audio
            },
            _releaseHtml5Audio: function(o) {
                var a = this || n;
                return o._unlocked && a._html5AudioPool.push(o), a
            },
            _autoSuspend: function() {
                var o = this;
                if (!(!o.autoSuspend || !o.ctx || typeof o.ctx.suspend > "u" || !n.usingWebAudio)) {
                    for (var a = 0; a < o._howls.length; a++)
                        if (o._howls[a]._webAudio) {
                            for (var c = 0; c < o._howls[a]._sounds.length; c++)
                                if (!o._howls[a]._sounds[c]._paused) return o
                        }
                    return o._suspendTimer && clearTimeout(o._suspendTimer), o._suspendTimer = setTimeout(function() {
                        if (o.autoSuspend) {
                            o._suspendTimer = null, o.state = "suspending";
                            var _ = function() {
                                o.state = "suspended", o._resumeAfterSuspend && (delete o._resumeAfterSuspend, o._autoResume())
                            };
                            o.ctx.suspend().then(_, _)
                        }
                    }, 3e4), o
                }
            },
            _autoResume: function() {
                var o = this;
                if (!(!o.ctx || typeof o.ctx.resume > "u" || !n.usingWebAudio)) return o.state === "running" && o.ctx.state !== "interrupted" && o._suspendTimer ? (clearTimeout(o._suspendTimer), o._suspendTimer = null) : o.state === "suspended" || o.state === "running" && o.ctx.state === "interrupted" ? (o.ctx.resume().then(function() {
                    o.state = "running";
                    for (var a = 0; a < o._howls.length; a++) o._howls[a]._emit("resume")
                }), o._suspendTimer && (clearTimeout(o._suspendTimer), o._suspendTimer = null)) : o.state === "suspending" && (o._resumeAfterSuspend = !0), o
            }
        };
        var n = new t,
            r = function(o) {
                var a = this;
                if (!o.src || o.src.length === 0) {
                    console.error("An array of source files must be passed with any new Howl.");
                    return
                }
                a.init(o)
            };
        r.prototype = {
            init: function(o) {
                var a = this;
                return n.ctx || p(), a._autoplay = o.autoplay || !1, a._format = typeof o.format != "string" ? o.format : [o.format], a._html5 = o.html5 || !1, a._muted = o.mute || !1, a._loop = o.loop || !1, a._pool = o.pool || 5, a._preload = typeof o.preload == "boolean" || o.preload === "metadata" ? o.preload : !0, a._rate = o.rate || 1, a._sprite = o.sprite || {}, a._src = typeof o.src != "string" ? o.src : [o.src], a._volume = o.volume !== void 0 ? o.volume : 1, a._xhr = {
                    method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
                    headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
                    withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : !1
                }, a._duration = 0, a._state = "unloaded", a._sounds = [], a._endTimers = {}, a._queue = [], a._playLock = !1, a._onend = o.onend ? [{
                    fn: o.onend
                }] : [], a._onfade = o.onfade ? [{
                    fn: o.onfade
                }] : [], a._onload = o.onload ? [{
                    fn: o.onload
                }] : [], a._onloaderror = o.onloaderror ? [{
                    fn: o.onloaderror
                }] : [], a._onplayerror = o.onplayerror ? [{
                    fn: o.onplayerror
                }] : [], a._onpause = o.onpause ? [{
                    fn: o.onpause
                }] : [], a._onplay = o.onplay ? [{
                    fn: o.onplay
                }] : [], a._onstop = o.onstop ? [{
                    fn: o.onstop
                }] : [], a._onmute = o.onmute ? [{
                    fn: o.onmute
                }] : [], a._onvolume = o.onvolume ? [{
                    fn: o.onvolume
                }] : [], a._onrate = o.onrate ? [{
                    fn: o.onrate
                }] : [], a._onseek = o.onseek ? [{
                    fn: o.onseek
                }] : [], a._onunlock = o.onunlock ? [{
                    fn: o.onunlock
                }] : [], a._onresume = [], a._webAudio = n.usingWebAudio && !a._html5, typeof n.ctx < "u" && n.ctx && n.autoUnlock && n._unlockAudio(), n._howls.push(a), a._autoplay && a._queue.push({
                    event: "play",
                    action: function() {
                        a.play()
                    }
                }), a._preload && a._preload !== "none" && a.load(), a
            },
            load: function() {
                var o = this,
                    a = null;
                if (n.noAudio) {
                    o._emit("loaderror", null, "No audio support.");
                    return
                }
                typeof o._src == "string" && (o._src = [o._src]);
                for (var c = 0; c < o._src.length; c++) {
                    var _, g;
                    if (o._format && o._format[c]) _ = o._format[c];
                    else {
                        if (g = o._src[c], typeof g != "string") {
                            o._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        _ = /^data:audio\/([^;,]+);/i.exec(g), _ || (_ = /\.([^.]+)$/.exec(g.split("?", 1)[0])), _ && (_ = _[1].toLowerCase())
                    }
                    if (_ || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), _ && n.codecs(_)) {
                        a = o._src[c];
                        break
                    }
                }
                if (!a) {
                    o._emit("loaderror", null, "No codec support for selected audio sources.");
                    return
                }
                return o._src = a, o._state = "loading", window.location.protocol === "https:" && a.slice(0, 5) === "http:" && (o._html5 = !0, o._webAudio = !1), new s(o), o._webAudio && l(o), o
            },
            play: function(o, a) {
                var c = this,
                    _ = null;
                if (typeof o == "number") _ = o, o = null;
                else {
                    if (typeof o == "string" && c._state === "loaded" && !c._sprite[o]) return null;
                    if (typeof o > "u" && (o = "__default", !c._playLock)) {
                        for (var g = 0, b = 0; b < c._sounds.length; b++) c._sounds[b]._paused && !c._sounds[b]._ended && (g++, _ = c._sounds[b]._id);
                        g === 1 ? o = null : _ = null
                    }
                }
                var h = _ ? c._soundById(_) : c._inactiveSound();
                if (!h) return null;
                if (_ && !o && (o = h._sprite || "__default"), c._state !== "loaded") {
                    h._sprite = o, h._ended = !1;
                    var y = h._id;
                    return c._queue.push({
                        event: "play",
                        action: function() {
                            c.play(y)
                        }
                    }), y
                }
                if (_ && !h._paused) return a || c._loadQueue("play"), h._id;
                c._webAudio && n._autoResume();
                var w = Math.max(0, h._seek > 0 ? h._seek : c._sprite[o][0] / 1e3),
                    C = Math.max(0, (c._sprite[o][0] + c._sprite[o][1]) / 1e3 - w),
                    F = C * 1e3 / Math.abs(h._rate),
                    U = c._sprite[o][0] / 1e3,
                    H = (c._sprite[o][0] + c._sprite[o][1]) / 1e3;
                h._sprite = o, h._ended = !1;
                var E = function() {
                    h._paused = !1, h._seek = w, h._start = U, h._stop = H, h._loop = !!(h._loop || c._sprite[o][2])
                };
                if (w >= H) {
                    c._ended(h);
                    return
                }
                var R = h._node;
                if (c._webAudio) {
                    var N = function() {
                        c._playLock = !1, E(), c._refreshBuffer(h);
                        var M = h._muted || c._muted ? 0 : h._volume;
                        R.gain.setValueAtTime(M, n.ctx.currentTime), h._playStart = n.ctx.currentTime, typeof R.bufferSource.start > "u" ? h._loop ? R.bufferSource.noteGrainOn(0, w, 86400) : R.bufferSource.noteGrainOn(0, w, C) : h._loop ? R.bufferSource.start(0, w, 86400) : R.bufferSource.start(0, w, C), F !== 1 / 0 && (c._endTimers[h._id] = setTimeout(c._ended.bind(c, h), F)), a || setTimeout(function() {
                            c._emit("play", h._id), c._loadQueue()
                        }, 0)
                    };
                    n.state === "running" && n.ctx.state !== "interrupted" ? N() : (c._playLock = !0, c.once("resume", N), c._clearTimer(h._id))
                } else {
                    var G = function() {
                        R.currentTime = w, R.muted = h._muted || c._muted || n._muted || R.muted, R.volume = h._volume * n.volume(), R.playbackRate = h._rate;
                        try {
                            var M = R.play();
                            if (M && typeof Promise < "u" && (M instanceof Promise || typeof M.then == "function") ? (c._playLock = !0, E(), M.then(function() {
                                    c._playLock = !1, R._unlocked = !0, a ? c._loadQueue() : c._emit("play", h._id)
                                }).catch(function() {
                                    c._playLock = !1, c._emit("playerror", h._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), h._ended = !0, h._paused = !0
                                })) : a || (c._playLock = !1, E(), c._emit("play", h._id)), R.playbackRate = h._rate, R.paused) {
                                c._emit("playerror", h._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            o !== "__default" || h._loop ? c._endTimers[h._id] = setTimeout(c._ended.bind(c, h), F) : (c._endTimers[h._id] = function() {
                                c._ended(h), R.removeEventListener("ended", c._endTimers[h._id], !1)
                            }, R.addEventListener("ended", c._endTimers[h._id], !1))
                        } catch (oe) {
                            c._emit("playerror", h._id, oe)
                        }
                    };
                    R.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (R.src = c._src, R.load());
                    var $ = window && window.ejecta || !R.readyState && n._navigator.isCocoonJS;
                    if (R.readyState >= 3 || $) G();
                    else {
                        c._playLock = !0, c._state = "loading";
                        var X = function() {
                            c._state = "loaded", G(), R.removeEventListener(n._canPlayEvent, X, !1)
                        };
                        R.addEventListener(n._canPlayEvent, X, !1), c._clearTimer(h._id)
                    }
                }
                return h._id
            },
            pause: function(o) {
                var a = this;
                if (a._state !== "loaded" || a._playLock) return a._queue.push({
                    event: "pause",
                    action: function() {
                        a.pause(o)
                    }
                }), a;
                for (var c = a._getSoundIds(o), _ = 0; _ < c.length; _++) {
                    a._clearTimer(c[_]);
                    var g = a._soundById(c[_]);
                    if (g && !g._paused && (g._seek = a.seek(c[_]), g._rateSeek = 0, g._paused = !0, a._stopFade(c[_]), g._node))
                        if (a._webAudio) {
                            if (!g._node.bufferSource) continue;
                            typeof g._node.bufferSource.stop > "u" ? g._node.bufferSource.noteOff(0) : g._node.bufferSource.stop(0), a._cleanBuffer(g._node)
                        } else(!isNaN(g._node.duration) || g._node.duration === 1 / 0) && g._node.pause();
                    arguments[1] || a._emit("pause", g ? g._id : null)
                }
                return a
            },
            stop: function(o, a) {
                var c = this;
                if (c._state !== "loaded" || c._playLock) return c._queue.push({
                    event: "stop",
                    action: function() {
                        c.stop(o)
                    }
                }), c;
                for (var _ = c._getSoundIds(o), g = 0; g < _.length; g++) {
                    c._clearTimer(_[g]);
                    var b = c._soundById(_[g]);
                    b && (b._seek = b._start || 0, b._rateSeek = 0, b._paused = !0, b._ended = !0, c._stopFade(_[g]), b._node && (c._webAudio ? b._node.bufferSource && (typeof b._node.bufferSource.stop > "u" ? b._node.bufferSource.noteOff(0) : b._node.bufferSource.stop(0), c._cleanBuffer(b._node)) : (!isNaN(b._node.duration) || b._node.duration === 1 / 0) && (b._node.currentTime = b._start || 0, b._node.pause(), b._node.duration === 1 / 0 && c._clearSound(b._node))), a || c._emit("stop", b._id))
                }
                return c
            },
            mute: function(o, a) {
                var c = this;
                if (c._state !== "loaded" || c._playLock) return c._queue.push({
                    event: "mute",
                    action: function() {
                        c.mute(o, a)
                    }
                }), c;
                if (typeof a > "u")
                    if (typeof o == "boolean") c._muted = o;
                    else return c._muted;
                for (var _ = c._getSoundIds(a), g = 0; g < _.length; g++) {
                    var b = c._soundById(_[g]);
                    b && (b._muted = o, b._interval && c._stopFade(b._id), c._webAudio && b._node ? b._node.gain.setValueAtTime(o ? 0 : b._volume, n.ctx.currentTime) : b._node && (b._node.muted = n._muted ? !0 : o), c._emit("mute", b._id))
                }
                return c
            },
            volume: function() {
                var o = this,
                    a = arguments,
                    c, _;
                if (a.length === 0) return o._volume;
                if (a.length === 1 || a.length === 2 && typeof a[1] > "u") {
                    var g = o._getSoundIds(),
                        b = g.indexOf(a[0]);
                    b >= 0 ? _ = parseInt(a[0], 10) : c = parseFloat(a[0])
                } else a.length >= 2 && (c = parseFloat(a[0]), _ = parseInt(a[1], 10));
                var h;
                if (typeof c < "u" && c >= 0 && c <= 1) {
                    if (o._state !== "loaded" || o._playLock) return o._queue.push({
                        event: "volume",
                        action: function() {
                            o.volume.apply(o, a)
                        }
                    }), o;
                    typeof _ > "u" && (o._volume = c), _ = o._getSoundIds(_);
                    for (var y = 0; y < _.length; y++) h = o._soundById(_[y]), h && (h._volume = c, a[2] || o._stopFade(_[y]), o._webAudio && h._node && !h._muted ? h._node.gain.setValueAtTime(c, n.ctx.currentTime) : h._node && !h._muted && (h._node.volume = c * n.volume()), o._emit("volume", h._id))
                } else return h = _ ? o._soundById(_) : o._sounds[0], h ? h._volume : 0;
                return o
            },
            fade: function(o, a, c, _) {
                var g = this;
                if (g._state !== "loaded" || g._playLock) return g._queue.push({
                    event: "fade",
                    action: function() {
                        g.fade(o, a, c, _)
                    }
                }), g;
                o = Math.min(Math.max(0, parseFloat(o)), 1), a = Math.min(Math.max(0, parseFloat(a)), 1), c = parseFloat(c), g.volume(o, _);
                for (var b = g._getSoundIds(_), h = 0; h < b.length; h++) {
                    var y = g._soundById(b[h]);
                    if (y) {
                        if (_ || g._stopFade(b[h]), g._webAudio && !y._muted) {
                            var w = n.ctx.currentTime,
                                C = w + c / 1e3;
                            y._volume = o, y._node.gain.setValueAtTime(o, w), y._node.gain.linearRampToValueAtTime(a, C)
                        }
                        g._startFadeInterval(y, o, a, c, b[h], typeof _ > "u")
                    }
                }
                return g
            },
            _startFadeInterval: function(o, a, c, _, g, b) {
                var h = this,
                    y = a,
                    w = c - a,
                    C = Math.abs(w / .01),
                    F = Math.max(4, C > 0 ? _ / C : _),
                    U = Date.now();
                o._fadeTo = c, o._interval = setInterval(function() {
                    var H = (Date.now() - U) / _;
                    U = Date.now(), y += w * H, y = Math.round(y * 100) / 100, w < 0 ? y = Math.max(c, y) : y = Math.min(c, y), h._webAudio ? o._volume = y : h.volume(y, o._id, !0), b && (h._volume = y), (c < a && y <= c || c > a && y >= c) && (clearInterval(o._interval), o._interval = null, o._fadeTo = null, h.volume(c, o._id), h._emit("fade", o._id))
                }, F)
            },
            _stopFade: function(o) {
                var a = this,
                    c = a._soundById(o);
                return c && c._interval && (a._webAudio && c._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(c._interval), c._interval = null, a.volume(c._fadeTo, o), c._fadeTo = null, a._emit("fade", o)), a
            },
            loop: function() {
                var o = this,
                    a = arguments,
                    c, _, g;
                if (a.length === 0) return o._loop;
                if (a.length === 1)
                    if (typeof a[0] == "boolean") c = a[0], o._loop = c;
                    else return g = o._soundById(parseInt(a[0], 10)), g ? g._loop : !1;
                else a.length === 2 && (c = a[0], _ = parseInt(a[1], 10));
                for (var b = o._getSoundIds(_), h = 0; h < b.length; h++) g = o._soundById(b[h]), g && (g._loop = c, o._webAudio && g._node && g._node.bufferSource && (g._node.bufferSource.loop = c, c && (g._node.bufferSource.loopStart = g._start || 0, g._node.bufferSource.loopEnd = g._stop, o.playing(b[h]) && (o.pause(b[h], !0), o.play(b[h], !0)))));
                return o
            },
            rate: function() {
                var o = this,
                    a = arguments,
                    c, _;
                if (a.length === 0) _ = o._sounds[0]._id;
                else if (a.length === 1) {
                    var g = o._getSoundIds(),
                        b = g.indexOf(a[0]);
                    b >= 0 ? _ = parseInt(a[0], 10) : c = parseFloat(a[0])
                } else a.length === 2 && (c = parseFloat(a[0]), _ = parseInt(a[1], 10));
                var h;
                if (typeof c == "number") {
                    if (o._state !== "loaded" || o._playLock) return o._queue.push({
                        event: "rate",
                        action: function() {
                            o.rate.apply(o, a)
                        }
                    }), o;
                    typeof _ > "u" && (o._rate = c), _ = o._getSoundIds(_);
                    for (var y = 0; y < _.length; y++)
                        if (h = o._soundById(_[y]), h) {
                            o.playing(_[y]) && (h._rateSeek = o.seek(_[y]), h._playStart = o._webAudio ? n.ctx.currentTime : h._playStart), h._rate = c, o._webAudio && h._node && h._node.bufferSource ? h._node.bufferSource.playbackRate.setValueAtTime(c, n.ctx.currentTime) : h._node && (h._node.playbackRate = c);
                            var w = o.seek(_[y]),
                                C = (o._sprite[h._sprite][0] + o._sprite[h._sprite][1]) / 1e3 - w,
                                F = C * 1e3 / Math.abs(h._rate);
                            (o._endTimers[_[y]] || !h._paused) && (o._clearTimer(_[y]), o._endTimers[_[y]] = setTimeout(o._ended.bind(o, h), F)), o._emit("rate", h._id)
                        }
                } else return h = o._soundById(_), h ? h._rate : o._rate;
                return o
            },
            seek: function() {
                var o = this,
                    a = arguments,
                    c, _;
                if (a.length === 0) o._sounds.length && (_ = o._sounds[0]._id);
                else if (a.length === 1) {
                    var g = o._getSoundIds(),
                        b = g.indexOf(a[0]);
                    b >= 0 ? _ = parseInt(a[0], 10) : o._sounds.length && (_ = o._sounds[0]._id, c = parseFloat(a[0]))
                } else a.length === 2 && (c = parseFloat(a[0]), _ = parseInt(a[1], 10));
                if (typeof _ > "u") return 0;
                if (typeof c == "number" && (o._state !== "loaded" || o._playLock)) return o._queue.push({
                    event: "seek",
                    action: function() {
                        o.seek.apply(o, a)
                    }
                }), o;
                var h = o._soundById(_);
                if (h)
                    if (typeof c == "number" && c >= 0) {
                        var y = o.playing(_);
                        y && o.pause(_, !0), h._seek = c, h._ended = !1, o._clearTimer(_), !o._webAudio && h._node && !isNaN(h._node.duration) && (h._node.currentTime = c);
                        var w = function() {
                            y && o.play(_, !0), o._emit("seek", _)
                        };
                        if (y && !o._webAudio) {
                            var C = function() {
                                o._playLock ? setTimeout(C, 0) : w()
                            };
                            setTimeout(C, 0)
                        } else w()
                    } else if (o._webAudio) {
                    var F = o.playing(_) ? n.ctx.currentTime - h._playStart : 0,
                        U = h._rateSeek ? h._rateSeek - h._seek : 0;
                    return h._seek + (U + F * Math.abs(h._rate))
                } else return h._node.currentTime;
                return o
            },
            playing: function(o) {
                var a = this;
                if (typeof o == "number") {
                    var c = a._soundById(o);
                    return c ? !c._paused : !1
                }
                for (var _ = 0; _ < a._sounds.length; _++)
                    if (!a._sounds[_]._paused) return !0;
                return !1
            },
            duration: function(o) {
                var a = this,
                    c = a._duration,
                    _ = a._soundById(o);
                return _ && (c = a._sprite[_._sprite][1] / 1e3), c
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var o = this, a = o._sounds, c = 0; c < a.length; c++) a[c]._paused || o.stop(a[c]._id), o._webAudio || (o._clearSound(a[c]._node), a[c]._node.removeEventListener("error", a[c]._errorFn, !1), a[c]._node.removeEventListener(n._canPlayEvent, a[c]._loadFn, !1), a[c]._node.removeEventListener("ended", a[c]._endFn, !1), n._releaseHtml5Audio(a[c]._node)), delete a[c]._node, o._clearTimer(a[c]._id);
                var _ = n._howls.indexOf(o);
                _ >= 0 && n._howls.splice(_, 1);
                var g = !0;
                for (c = 0; c < n._howls.length; c++)
                    if (n._howls[c]._src === o._src || o._src.indexOf(n._howls[c]._src) >= 0) {
                        g = !1;
                        break
                    }
                return i && g && delete i[o._src], n.noAudio = !1, o._state = "unloaded", o._sounds = [], o = null, null
            },
            on: function(o, a, c, _) {
                var g = this,
                    b = g["_on" + o];
                return typeof a == "function" && b.push(_ ? {
                    id: c,
                    fn: a,
                    once: _
                } : {
                    id: c,
                    fn: a
                }), g
            },
            off: function(o, a, c) {
                var _ = this,
                    g = _["_on" + o],
                    b = 0;
                if (typeof a == "number" && (c = a, a = null), a || c)
                    for (b = 0; b < g.length; b++) {
                        var h = c === g[b].id;
                        if (a === g[b].fn && h || !a && h) {
                            g.splice(b, 1);
                            break
                        }
                    } else if (o) _["_on" + o] = [];
                    else {
                        var y = Object.keys(_);
                        for (b = 0; b < y.length; b++) y[b].indexOf("_on") === 0 && Array.isArray(_[y[b]]) && (_[y[b]] = [])
                    }
                return _
            },
            once: function(o, a, c) {
                var _ = this;
                return _.on(o, a, c, 1), _
            },
            _emit: function(o, a, c) {
                for (var _ = this, g = _["_on" + o], b = g.length - 1; b >= 0; b--)(!g[b].id || g[b].id === a || o === "load") && (setTimeout((function(h) {
                    h.call(this, a, c)
                }).bind(_, g[b].fn), 0), g[b].once && _.off(o, g[b].fn, g[b].id));
                return _._loadQueue(o), _
            },
            _loadQueue: function(o) {
                var a = this;
                if (a._queue.length > 0) {
                    var c = a._queue[0];
                    c.event === o && (a._queue.shift(), a._loadQueue()), o || c.action()
                }
                return a
            },
            _ended: function(o) {
                var a = this,
                    c = o._sprite;
                if (!a._webAudio && o._node && !o._node.paused && !o._node.ended && o._node.currentTime < o._stop) return setTimeout(a._ended.bind(a, o), 100), a;
                var _ = !!(o._loop || a._sprite[c][2]);
                if (a._emit("end", o._id), !a._webAudio && _ && a.stop(o._id, !0).play(o._id), a._webAudio && _) {
                    a._emit("play", o._id), o._seek = o._start || 0, o._rateSeek = 0, o._playStart = n.ctx.currentTime;
                    var g = (o._stop - o._start) * 1e3 / Math.abs(o._rate);
                    a._endTimers[o._id] = setTimeout(a._ended.bind(a, o), g)
                }
                return a._webAudio && !_ && (o._paused = !0, o._ended = !0, o._seek = o._start || 0, o._rateSeek = 0, a._clearTimer(o._id), a._cleanBuffer(o._node), n._autoSuspend()), !a._webAudio && !_ && a.stop(o._id, !0), a
            },
            _clearTimer: function(o) {
                var a = this;
                if (a._endTimers[o]) {
                    if (typeof a._endTimers[o] != "function") clearTimeout(a._endTimers[o]);
                    else {
                        var c = a._soundById(o);
                        c && c._node && c._node.removeEventListener("ended", a._endTimers[o], !1)
                    }
                    delete a._endTimers[o]
                }
                return a
            },
            _soundById: function(o) {
                for (var a = this, c = 0; c < a._sounds.length; c++)
                    if (o === a._sounds[c]._id) return a._sounds[c];
                return null
            },
            _inactiveSound: function() {
                var o = this;
                o._drain();
                for (var a = 0; a < o._sounds.length; a++)
                    if (o._sounds[a]._ended) return o._sounds[a].reset();
                return new s(o)
            },
            _drain: function() {
                var o = this,
                    a = o._pool,
                    c = 0,
                    _ = 0;
                if (!(o._sounds.length < a)) {
                    for (_ = 0; _ < o._sounds.length; _++) o._sounds[_]._ended && c++;
                    for (_ = o._sounds.length - 1; _ >= 0; _--) {
                        if (c <= a) return;
                        o._sounds[_]._ended && (o._webAudio && o._sounds[_]._node && o._sounds[_]._node.disconnect(0), o._sounds.splice(_, 1), c--)
                    }
                }
            },
            _getSoundIds: function(o) {
                var a = this;
                if (typeof o > "u") {
                    for (var c = [], _ = 0; _ < a._sounds.length; _++) c.push(a._sounds[_]._id);
                    return c
                } else return [o]
            },
            _refreshBuffer: function(o) {
                var a = this;
                return o._node.bufferSource = n.ctx.createBufferSource(), o._node.bufferSource.buffer = i[a._src], o._panner ? o._node.bufferSource.connect(o._panner) : o._node.bufferSource.connect(o._node), o._node.bufferSource.loop = o._loop, o._loop && (o._node.bufferSource.loopStart = o._start || 0, o._node.bufferSource.loopEnd = o._stop || 0), o._node.bufferSource.playbackRate.setValueAtTime(o._rate, n.ctx.currentTime), a
            },
            _cleanBuffer: function(o) {
                var a = this,
                    c = n._navigator && n._navigator.vendor.indexOf("Apple") >= 0;
                if (!o.bufferSource) return a;
                if (n._scratchBuffer && o.bufferSource && (o.bufferSource.onended = null, o.bufferSource.disconnect(0), c)) try {
                    o.bufferSource.buffer = n._scratchBuffer
                } catch {}
                return o.bufferSource = null, a
            },
            _clearSound: function(o) {
                var a = /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent);
                a || (o.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        };
        var s = function(o) {
            this._parent = o, this.init()
        };
        s.prototype = {
            init: function() {
                var o = this,
                    a = o._parent;
                return o._muted = a._muted, o._loop = a._loop, o._volume = a._volume, o._rate = a._rate, o._seek = 0, o._paused = !0, o._ended = !0, o._sprite = "__default", o._id = ++n._counter, a._sounds.push(o), o.create(), o
            },
            create: function() {
                var o = this,
                    a = o._parent,
                    c = n._muted || o._muted || o._parent._muted ? 0 : o._volume;
                return a._webAudio ? (o._node = typeof n.ctx.createGain > "u" ? n.ctx.createGainNode() : n.ctx.createGain(), o._node.gain.setValueAtTime(c, n.ctx.currentTime), o._node.paused = !0, o._node.connect(n.masterGain)) : n.noAudio || (o._node = n._obtainHtml5Audio(), o._errorFn = o._errorListener.bind(o), o._node.addEventListener("error", o._errorFn, !1), o._loadFn = o._loadListener.bind(o), o._node.addEventListener(n._canPlayEvent, o._loadFn, !1), o._endFn = o._endListener.bind(o), o._node.addEventListener("ended", o._endFn, !1), o._node.src = a._src, o._node.preload = a._preload === !0 ? "auto" : a._preload, o._node.volume = c * n.volume(), o._node.load()), o
            },
            reset: function() {
                var o = this,
                    a = o._parent;
                return o._muted = a._muted, o._loop = a._loop, o._volume = a._volume, o._rate = a._rate, o._seek = 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, o._sprite = "__default", o._id = ++n._counter, o
            },
            _errorListener: function() {
                var o = this;
                o._parent._emit("loaderror", o._id, o._node.error ? o._node.error.code : 0), o._node.removeEventListener("error", o._errorFn, !1)
            },
            _loadListener: function() {
                var o = this,
                    a = o._parent;
                a._duration = Math.ceil(o._node.duration * 10) / 10, Object.keys(a._sprite).length === 0 && (a._sprite = {
                    __default: [0, a._duration * 1e3]
                }), a._state !== "loaded" && (a._state = "loaded", a._emit("load"), a._loadQueue()), o._node.removeEventListener(n._canPlayEvent, o._loadFn, !1)
            },
            _endListener: function() {
                var o = this,
                    a = o._parent;
                a._duration === 1 / 0 && (a._duration = Math.ceil(o._node.duration * 10) / 10, a._sprite.__default[1] === 1 / 0 && (a._sprite.__default[1] = a._duration * 1e3), a._ended(o)), o._node.removeEventListener("ended", o._endFn, !1)
            }
        };
        var i = {},
            l = function(o) {
                var a = o._src;
                if (i[a]) {
                    o._duration = i[a].duration, d(o);
                    return
                }
                if (/^data:[^;]+;base64,/.test(a)) {
                    for (var c = atob(a.split(",")[1]), _ = new Uint8Array(c.length), g = 0; g < c.length; ++g) _[g] = c.charCodeAt(g);
                    u(_.buffer, o)
                } else {
                    var b = new XMLHttpRequest;
                    b.open(o._xhr.method, a, !0), b.withCredentials = o._xhr.withCredentials, b.responseType = "arraybuffer", o._xhr.headers && Object.keys(o._xhr.headers).forEach(function(h) {
                        b.setRequestHeader(h, o._xhr.headers[h])
                    }), b.onload = function() {
                        var h = (b.status + "")[0];
                        if (h !== "0" && h !== "2" && h !== "3") {
                            o._emit("loaderror", null, "Failed loading audio file with status: " + b.status + ".");
                            return
                        }
                        u(b.response, o)
                    }, b.onerror = function() {
                        o._webAudio && (o._html5 = !0, o._webAudio = !1, o._sounds = [], delete i[a], o.load())
                    }, f(b)
                }
            },
            f = function(o) {
                try {
                    o.send()
                } catch {
                    o.onerror()
                }
            },
            u = function(o, a) {
                var c = function() {
                        a._emit("loaderror", null, "Decoding audio data failed.")
                    },
                    _ = function(g) {
                        g && a._sounds.length > 0 ? (i[a._src] = g, d(a, g)) : c()
                    };
                typeof Promise < "u" && n.ctx.decodeAudioData.length === 1 ? n.ctx.decodeAudioData(o).then(_).catch(c) : n.ctx.decodeAudioData(o, _, c)
            },
            d = function(o, a) {
                a && !o._duration && (o._duration = a.duration), Object.keys(o._sprite).length === 0 && (o._sprite = {
                    __default: [0, o._duration * 1e3]
                }), o._state !== "loaded" && (o._state = "loaded", o._emit("load"), o._loadQueue())
            },
            p = function() {
                if (n.usingWebAudio) {
                    try {
                        typeof AudioContext < "u" ? n.ctx = new AudioContext : typeof webkitAudioContext < "u" ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
                    } catch {
                        n.usingWebAudio = !1
                    }
                    n.ctx || (n.usingWebAudio = !1);
                    var o = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
                        a = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                        c = a ? parseInt(a[1], 10) : null;
                    if (o && c && c < 9) {
                        var _ = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
                        n._navigator && !_ && (n.usingWebAudio = !1)
                    }
                    n.usingWebAudio && (n.masterGain = typeof n.ctx.createGain > "u" ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.setValueAtTime(n._muted ? 0 : n._volume, n.ctx.currentTime), n.masterGain.connect(n.ctx.destination)), n._setup()
                }
            };
        e.Howler = n, e.Howl = r, typeof Jt < "u" ? (Jt.HowlerGlobal = t, Jt.Howler = n, Jt.Howl = r, Jt.Sound = s) : typeof window < "u" && (window.HowlerGlobal = t, window.Howler = n, window.Howl = r, window.Sound = s)
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.4
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    (function() {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(n) {
            var r = this;
            if (!r.ctx || !r.ctx.listener) return r;
            for (var s = r._howls.length - 1; s >= 0; s--) r._howls[s].stereo(n);
            return r
        }, HowlerGlobal.prototype.pos = function(n, r, s) {
            var i = this;
            if (!i.ctx || !i.ctx.listener) return i;
            if (r = typeof r != "number" ? i._pos[1] : r, s = typeof s != "number" ? i._pos[2] : s, typeof n == "number") i._pos = [n, r, s], typeof i.ctx.listener.positionX < "u" ? (i.ctx.listener.positionX.setTargetAtTime(i._pos[0], Howler.ctx.currentTime, .1), i.ctx.listener.positionY.setTargetAtTime(i._pos[1], Howler.ctx.currentTime, .1), i.ctx.listener.positionZ.setTargetAtTime(i._pos[2], Howler.ctx.currentTime, .1)) : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]);
            else return i._pos;
            return i
        }, HowlerGlobal.prototype.orientation = function(n, r, s, i, l, f) {
            var u = this;
            if (!u.ctx || !u.ctx.listener) return u;
            var d = u._orientation;
            if (r = typeof r != "number" ? d[1] : r, s = typeof s != "number" ? d[2] : s, i = typeof i != "number" ? d[3] : i, l = typeof l != "number" ? d[4] : l, f = typeof f != "number" ? d[5] : f, typeof n == "number") u._orientation = [n, r, s, i, l, f], typeof u.ctx.listener.forwardX < "u" ? (u.ctx.listener.forwardX.setTargetAtTime(n, Howler.ctx.currentTime, .1), u.ctx.listener.forwardY.setTargetAtTime(r, Howler.ctx.currentTime, .1), u.ctx.listener.forwardZ.setTargetAtTime(s, Howler.ctx.currentTime, .1), u.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, .1), u.ctx.listener.upY.setTargetAtTime(l, Howler.ctx.currentTime, .1), u.ctx.listener.upZ.setTargetAtTime(f, Howler.ctx.currentTime, .1)) : u.ctx.listener.setOrientation(n, r, s, i, l, f);
            else return d;
            return u
        }, Howl.prototype.init = function(n) {
            return function(r) {
                var s = this;
                return s._orientation = r.orientation || [1, 0, 0], s._stereo = r.stereo || null, s._pos = r.pos || null, s._pannerAttr = {
                    coneInnerAngle: typeof r.coneInnerAngle < "u" ? r.coneInnerAngle : 360,
                    coneOuterAngle: typeof r.coneOuterAngle < "u" ? r.coneOuterAngle : 360,
                    coneOuterGain: typeof r.coneOuterGain < "u" ? r.coneOuterGain : 0,
                    distanceModel: typeof r.distanceModel < "u" ? r.distanceModel : "inverse",
                    maxDistance: typeof r.maxDistance < "u" ? r.maxDistance : 1e4,
                    panningModel: typeof r.panningModel < "u" ? r.panningModel : "HRTF",
                    refDistance: typeof r.refDistance < "u" ? r.refDistance : 1,
                    rolloffFactor: typeof r.rolloffFactor < "u" ? r.rolloffFactor : 1
                }, s._onstereo = r.onstereo ? [{
                    fn: r.onstereo
                }] : [], s._onpos = r.onpos ? [{
                    fn: r.onpos
                }] : [], s._onorientation = r.onorientation ? [{
                    fn: r.onorientation
                }] : [], n.call(this, r)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function(n, r) {
            var s = this;
            if (!s._webAudio) return s;
            if (s._state !== "loaded") return s._queue.push({
                event: "stereo",
                action: function() {
                    s.stereo(n, r)
                }
            }), s;
            var i = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
            if (typeof r > "u")
                if (typeof n == "number") s._stereo = n, s._pos = [n, 0, 0];
                else return s._stereo;
            for (var l = s._getSoundIds(r), f = 0; f < l.length; f++) {
                var u = s._soundById(l[f]);
                if (u)
                    if (typeof n == "number") u._stereo = n, u._pos = [n, 0, 0], u._node && (u._pannerAttr.panningModel = "equalpower", (!u._panner || !u._panner.pan) && t(u, i), i === "spatial" ? typeof u._panner.positionX < "u" ? (u._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), u._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), u._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : u._panner.setPosition(n, 0, 0) : u._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)), s._emit("stereo", u._id);
                    else return u._stereo
            }
            return s
        }, Howl.prototype.pos = function(n, r, s, i) {
            var l = this;
            if (!l._webAudio) return l;
            if (l._state !== "loaded") return l._queue.push({
                event: "pos",
                action: function() {
                    l.pos(n, r, s, i)
                }
            }), l;
            if (r = typeof r != "number" ? 0 : r, s = typeof s != "number" ? -.5 : s, typeof i > "u")
                if (typeof n == "number") l._pos = [n, r, s];
                else return l._pos;
            for (var f = l._getSoundIds(i), u = 0; u < f.length; u++) {
                var d = l._soundById(f[u]);
                if (d)
                    if (typeof n == "number") d._pos = [n, r, s], d._node && ((!d._panner || d._panner.pan) && t(d, "spatial"), typeof d._panner.positionX < "u" ? (d._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), d._panner.positionY.setValueAtTime(r, Howler.ctx.currentTime), d._panner.positionZ.setValueAtTime(s, Howler.ctx.currentTime)) : d._panner.setPosition(n, r, s)), l._emit("pos", d._id);
                    else return d._pos
            }
            return l
        }, Howl.prototype.orientation = function(n, r, s, i) {
            var l = this;
            if (!l._webAudio) return l;
            if (l._state !== "loaded") return l._queue.push({
                event: "orientation",
                action: function() {
                    l.orientation(n, r, s, i)
                }
            }), l;
            if (r = typeof r != "number" ? l._orientation[1] : r, s = typeof s != "number" ? l._orientation[2] : s, typeof i > "u")
                if (typeof n == "number") l._orientation = [n, r, s];
                else return l._orientation;
            for (var f = l._getSoundIds(i), u = 0; u < f.length; u++) {
                var d = l._soundById(f[u]);
                if (d)
                    if (typeof n == "number") d._orientation = [n, r, s], d._node && (d._panner || (d._pos || (d._pos = l._pos || [0, 0, -.5]), t(d, "spatial")), typeof d._panner.orientationX < "u" ? (d._panner.orientationX.setValueAtTime(n, Howler.ctx.currentTime), d._panner.orientationY.setValueAtTime(r, Howler.ctx.currentTime), d._panner.orientationZ.setValueAtTime(s, Howler.ctx.currentTime)) : d._panner.setOrientation(n, r, s)), l._emit("orientation", d._id);
                    else return d._orientation
            }
            return l
        }, Howl.prototype.pannerAttr = function() {
            var n = this,
                r = arguments,
                s, i, l;
            if (!n._webAudio) return n;
            if (r.length === 0) return n._pannerAttr;
            if (r.length === 1)
                if (typeof r[0] == "object") s = r[0], typeof i > "u" && (s.pannerAttr || (s.pannerAttr = {
                    coneInnerAngle: s.coneInnerAngle,
                    coneOuterAngle: s.coneOuterAngle,
                    coneOuterGain: s.coneOuterGain,
                    distanceModel: s.distanceModel,
                    maxDistance: s.maxDistance,
                    refDistance: s.refDistance,
                    rolloffFactor: s.rolloffFactor,
                    panningModel: s.panningModel
                }), n._pannerAttr = {
                    coneInnerAngle: typeof s.pannerAttr.coneInnerAngle < "u" ? s.pannerAttr.coneInnerAngle : n._coneInnerAngle,
                    coneOuterAngle: typeof s.pannerAttr.coneOuterAngle < "u" ? s.pannerAttr.coneOuterAngle : n._coneOuterAngle,
                    coneOuterGain: typeof s.pannerAttr.coneOuterGain < "u" ? s.pannerAttr.coneOuterGain : n._coneOuterGain,
                    distanceModel: typeof s.pannerAttr.distanceModel < "u" ? s.pannerAttr.distanceModel : n._distanceModel,
                    maxDistance: typeof s.pannerAttr.maxDistance < "u" ? s.pannerAttr.maxDistance : n._maxDistance,
                    refDistance: typeof s.pannerAttr.refDistance < "u" ? s.pannerAttr.refDistance : n._refDistance,
                    rolloffFactor: typeof s.pannerAttr.rolloffFactor < "u" ? s.pannerAttr.rolloffFactor : n._rolloffFactor,
                    panningModel: typeof s.pannerAttr.panningModel < "u" ? s.pannerAttr.panningModel : n._panningModel
                });
                else return l = n._soundById(parseInt(r[0], 10)), l ? l._pannerAttr : n._pannerAttr;
            else r.length === 2 && (s = r[0], i = parseInt(r[1], 10));
            for (var f = n._getSoundIds(i), u = 0; u < f.length; u++)
                if (l = n._soundById(f[u]), l) {
                    var d = l._pannerAttr;
                    d = {
                        coneInnerAngle: typeof s.coneInnerAngle < "u" ? s.coneInnerAngle : d.coneInnerAngle,
                        coneOuterAngle: typeof s.coneOuterAngle < "u" ? s.coneOuterAngle : d.coneOuterAngle,
                        coneOuterGain: typeof s.coneOuterGain < "u" ? s.coneOuterGain : d.coneOuterGain,
                        distanceModel: typeof s.distanceModel < "u" ? s.distanceModel : d.distanceModel,
                        maxDistance: typeof s.maxDistance < "u" ? s.maxDistance : d.maxDistance,
                        refDistance: typeof s.refDistance < "u" ? s.refDistance : d.refDistance,
                        rolloffFactor: typeof s.rolloffFactor < "u" ? s.rolloffFactor : d.rolloffFactor,
                        panningModel: typeof s.panningModel < "u" ? s.panningModel : d.panningModel
                    };
                    var p = l._panner;
                    p || (l._pos || (l._pos = n._pos || [0, 0, -.5]), t(l, "spatial"), p = l._panner), p.coneInnerAngle = d.coneInnerAngle, p.coneOuterAngle = d.coneOuterAngle, p.coneOuterGain = d.coneOuterGain, p.distanceModel = d.distanceModel, p.maxDistance = d.maxDistance, p.refDistance = d.refDistance, p.rolloffFactor = d.rolloffFactor, p.panningModel = d.panningModel
                }
            return n
        }, Sound.prototype.init = function(n) {
            return function() {
                var r = this,
                    s = r._parent;
                r._orientation = s._orientation, r._stereo = s._stereo, r._pos = s._pos, r._pannerAttr = s._pannerAttr, n.call(this), r._stereo ? s.stereo(r._stereo) : r._pos && s.pos(r._pos[0], r._pos[1], r._pos[2], r._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function(n) {
            return function() {
                var r = this,
                    s = r._parent;
                return r._orientation = s._orientation, r._stereo = s._stereo, r._pos = s._pos, r._pannerAttr = s._pannerAttr, r._stereo ? s.stereo(r._stereo) : r._pos ? s.pos(r._pos[0], r._pos[1], r._pos[2], r._id) : r._panner && (r._panner.disconnect(0), r._panner = void 0, s._refreshBuffer(r)), n.call(this)
            }
        }(Sound.prototype.reset);
        var t = function(n, r) {
            r = r || "spatial", r === "spatial" ? (n._panner = Howler.ctx.createPanner(), n._panner.coneInnerAngle = n._pannerAttr.coneInnerAngle, n._panner.coneOuterAngle = n._pannerAttr.coneOuterAngle, n._panner.coneOuterGain = n._pannerAttr.coneOuterGain, n._panner.distanceModel = n._pannerAttr.distanceModel, n._panner.maxDistance = n._pannerAttr.maxDistance, n._panner.refDistance = n._pannerAttr.refDistance, n._panner.rolloffFactor = n._pannerAttr.rolloffFactor, n._panner.panningModel = n._pannerAttr.panningModel, typeof n._panner.positionX < "u" ? (n._panner.positionX.setValueAtTime(n._pos[0], Howler.ctx.currentTime), n._panner.positionY.setValueAtTime(n._pos[1], Howler.ctx.currentTime), n._panner.positionZ.setValueAtTime(n._pos[2], Howler.ctx.currentTime)) : n._panner.setPosition(n._pos[0], n._pos[1], n._pos[2]), typeof n._panner.orientationX < "u" ? (n._panner.orientationX.setValueAtTime(n._orientation[0], Howler.ctx.currentTime), n._panner.orientationY.setValueAtTime(n._orientation[1], Howler.ctx.currentTime), n._panner.orientationZ.setValueAtTime(n._orientation[2], Howler.ctx.currentTime)) : n._panner.setOrientation(n._orientation[0], n._orientation[1], n._orientation[2])) : (n._panner = Howler.ctx.createStereoPanner(), n._panner.pan.setValueAtTime(n._stereo, Howler.ctx.currentTime)), n._panner.connect(n._node), n._paused || n._parent.pause(n._id, !0).play(n._id, !0)
        }
    })()
})(Wi);
const yd = Ui("playlist", {
    state: () => ({
        sound: null,
        index: 0,
        tracks: null,
        isFlipped: !1,
        timer: null
    }),
    getters: {
        track: e => e.tracks[e.index],
        isPlaying: e => e.sound.playing()
    },
    actions: {
        async getTracks() {
            this.tracks = [{
                name: "Emagination (B - Side)",
                artist: "Miami Horror",
                album_art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ee/5e/9b/ee5e9b85-e222-e5a0-15e5-880f5b165932/067003168366.png/168x168bb.jpg",
                preview_url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/9e/4c/1d9e4cc0-c3ce-2660-d116-86fb386d5920/mzaf_18139705836037492329.plus.aac.p.m4a",
                url: "https://music.apple.com/us/album/emagination-b-side/1615142779?i=1615143055",
                colors: ["#d39da0", "#6b596a"]
            }, {
                name: "Shiny Tune",
                artist: "Patrick Holland",
                album_art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d7/c5/60/d7c560ee-b05d-75e1-b4ae-039f8deb0f32/69499.jpg/168x168bb.jpg",
                preview_url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/98/b6/a3/98b6a34d-0d07-6d81-99e5-97383bded724/mzaf_17962729563231555672.plus.aac.p.m4a",
                url: "https://music.apple.com/us/album/shiny-tune/1693032577?i=1693032727",
                colors: ["#7273d6", "#1a203b"]
            }, {
                name: "Ocean City",
                artist: "Pacific Coliseum",
                album_art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3b/ff/18/3bff180a-3204-9657-9bd8-fdcb79a4b9eb/5054526057630_cover.jpg/168x168bb.jpg",
                preview_url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0f/8f/10/0f8f106e-ca35-34eb-f38e-5336242eedca/mzaf_9043965348750221227.plus.aac.p.m4a",
                url: "https://music.apple.com/us/album/ocean-city/1819148323?i=1819148325",
                colors: ["#e27f93", "#4b215c"]
            }];
            const e = new Image;
            e.src = this.tracks[this.index].album_art
        },
        play() {
            this.sound = new Wi.Howl({
                src: [this.track.preview_url],
                format: ["mp3"],
                volume: 0
            }), this.sound.play(), this.sound.fade(0, .3, 1e3), this.sound.once("load", () => {
                setTimeout(() => {
                    this.$emitter.emit("toggle-live-activity", {
                        state: !0,
                        type: "isPlaying"
                    })
                }, 50)
            }), this.sound.on("play", () => {
                let e = 1e3;
                clearTimeout(this.timer), this.timer = setTimeout(() => {
                    this.sound.fade(.3, 0, e)
                }, (this.sound.duration() - this.sound.seek()) * 1e3 - e)
            }), this.sound.on("end", () => {
                this.next(), this.$emitter.emit("toggle-quick-peek", {
                    state: !0,
                    duration: 2e3
                }), this.isFlipped = !this.isFlipped
            })
        },
        next() {
            this.tracks.length > this.index + 1 ? this.index++ : this.index = 0, this.play()
        },
        toggle() {
            clearTimeout(this.timer), this.isPlaying ? this.sound.pause() : (this.sound.play(), this.$emitter.emit("toggle-quick-peek", {
                state: !0,
                duration: 2e3
            }))
        }
    }
});
vf(td, {
    routes: ud
}, ({
    app: e,
    initialState: t
}) => {
    const n = fd(),
        r = pd();
    e.config.globalProperties.$emitter = n, r.use(({
        store: l
    }) => {
        l.$emitter = e.config.globalProperties.$emitter
    }), e.use(r), r.state.value = t.pinia || {};
    const s = vd(r),
        i = yd(r);
    e.config.globalProperties.$time = s, e.config.globalProperties.$playlist = i
});
export {
    zr as A, Sf as B, _i as C, fd as D, Td as E, Te as F, Sd as G, nn as H, Hr as I, Js as J, al as K, il as L, $t as T, nr as _, zn as a, z as b, Ht as c, Ad as d, ue as e, ft as f, Dl as g, Fn as h, wd as i, hi as j, Wi as k, Ln as l, jl as m, Fr as n, Ue as o, Ed as p, Ts as q, xd as r, ca as s, co as t, ct as u, kd as v, Fe as w, Pe as x, Wn as y, bd as z
};