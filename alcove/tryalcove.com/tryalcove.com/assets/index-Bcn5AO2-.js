import {
    q as b,
    s as y,
    u as $,
    x as h,
    y as p,
    z as g,
    A as x,
    C as M
} from "./app-ljqbCed6.js";

function E(n) {
    return b() ? (y(n), !0) : !1
}

function w(n) {
    return typeof n == "function" ? n() : $(n)
}
const O = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;

function S(n, i) {
    var t;
    if (typeof n == "number") return n + i;
    const o = ((t = n.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : t[0]) || "",
        u = n.slice(o.length),
        a = Number.parseFloat(o) + i;
    return Number.isNaN(a) ? n : a + u
}
const v = O ? window : void 0;

function L() {
    const n = p(!1),
        i = M();
    return i && x(() => {
        n.value = !0
    }, i), n
}

function q(n) {
    const i = L();
    return h(() => (i.value, !!n()))
}

function l(n, i = {}) {
    const {
        window: t = v
    } = i, o = q(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
    let u;
    const a = p(!1),
        s = f => {
            a.value = f.matches
        },
        d = () => {
            u && ("removeEventListener" in u ? u.removeEventListener("change", s) : u.removeListener(s))
        },
        m = g(() => {
            o.value && (d(), u = t.matchMedia(w(n)), "addEventListener" in u ? u.addEventListener("change", s) : u.addListener(s), a.value = u.matches)
        });
    return E(() => {
        m(), d(), u = void 0
    }), a
}
const j = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
};

function C(n, i = {}) {
    function t(e, r) {
        let c = w(n[w(e)]);
        return r != null && (c = S(c, r)), typeof c == "number" && (c = `${c}px`), c
    }
    const {
        window: o = v,
        strategy: u = "min-width"
    } = i;

    function a(e) {
        return o ? o.matchMedia(e).matches : !1
    }
    const s = e => l(() => `(min-width: ${t(e)})`, i),
        d = e => l(() => `(max-width: ${t(e)})`, i),
        m = Object.keys(n).reduce((e, r) => (Object.defineProperty(e, r, {
            get: () => u === "min-width" ? s(r) : d(r),
            enumerable: !0,
            configurable: !0
        }), e), {});

    function f() {
        const e = Object.keys(n).map(r => [r, s(r)]);
        return h(() => e.filter(([, r]) => r.value).map(([r]) => r))
    }
    return Object.assign(m, {
        greaterOrEqual: s,
        smallerOrEqual: d,
        greater(e) {
            return l(() => `(min-width: ${t(e,.1)})`, i)
        },
        smaller(e) {
            return l(() => `(max-width: ${t(e,-.1)})`, i)
        },
        between(e, r) {
            return l(() => `(min-width: ${t(e)}) and (max-width: ${t(r,-.1)})`, i)
        },
        isGreater(e) {
            return a(`(min-width: ${t(e,.1)})`)
        },
        isGreaterOrEqual(e) {
            return a(`(min-width: ${t(e)})`)
        },
        isSmaller(e) {
            return a(`(max-width: ${t(e,-.1)})`)
        },
        isSmallerOrEqual(e) {
            return a(`(max-width: ${t(e)})`)
        },
        isInBetween(e, r) {
            return a(`(min-width: ${t(e)}) and (max-width: ${t(r,-.1)})`)
        },
        current: f,
        active() {
            const e = f();
            return h(() => e.value.length === 0 ? "" : e.value.at(-1))
        }
    })
}
export {
    j as b, C as u
};