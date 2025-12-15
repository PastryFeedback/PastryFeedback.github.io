function ft(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function Wt(t, e) {
    const s = t.indexOf(e);
    s > -1 && t.splice(s, 1)
}
const et = (t, e, s) => Math.min(Math.max(s, t), e),
    h = {
        duration: .3,
        delay: 0,
        endDelay: 0,
        repeat: 0,
        easing: "ease"
    },
    U = t => typeof t == "number",
    E = t => Array.isArray(t) && !U(t[0]),
    ht = (t, e, s) => {
        const i = e - t;
        return ((s - t) % i + i) % i + t
    };

function dt(t, e) {
    return E(t) ? t[ht(0, t.length, e)] : t
}
const st = (t, e, s) => -s * t + s * e + t,
    it = () => {},
    y = t => t,
    Z = (t, e, s) => e - t === 0 ? 1 : (s - t) / (e - t);

function nt(t, e) {
    const s = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const n = Z(0, e, i);
        t.push(st(s, 1, n))
    }
}

function pt(t) {
    const e = [0];
    return nt(e, t - 1), e
}

function mt(t, e = pt(t.length), s = y) {
    const i = t.length,
        n = i - e.length;
    return n > 0 && nt(e, n), a => {
        let r = 0;
        for (; r < i - 2 && !(a < e[r + 1]); r++);
        let o = et(0, 1, Z(e[r], e[r + 1], a));
        return o = dt(s, r)(o), st(t[r], t[r + 1], o)
    }
}
const at = t => Array.isArray(t) && U(t[0]),
    K = t => typeof t == "object" && !!t.createAnimation,
    P = t => typeof t == "function",
    gt = t => typeof t == "string",
    M = {
        ms: t => t * 1e3,
        s: t => t / 1e3
    },
    rt = (t, e, s) => (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t,
    yt = 1e-7,
    vt = 12;

function Tt(t, e, s, i, n) {
    let a, r, o = 0;
    do r = e + (s - e) / 2, a = rt(r, i, n) - t, a > 0 ? s = r : e = r; while (Math.abs(a) > yt && ++o < vt);
    return r
}

function D(t, e, s, i) {
    if (t === e && s === i) return y;
    const n = a => Tt(a, 0, 1, t, s);
    return a => a === 0 || a === 1 ? a : rt(n(a), e, i)
}
const bt = (t, e = "end") => s => {
        s = e === "end" ? Math.min(s, .999) : Math.max(s, .001);
        const i = s * t,
            n = e === "end" ? Math.floor(i) : Math.ceil(i);
        return et(0, 1, n / t)
    },
    At = {
        ease: D(.25, .1, .25, 1),
        "ease-in": D(.42, 0, 1, 1),
        "ease-in-out": D(.42, 0, .58, 1),
        "ease-out": D(0, 0, .58, 1)
    },
    St = /\((.*?)\)/;

function J(t) {
    if (P(t)) return t;
    if (at(t)) return D(...t);
    const e = At[t];
    if (e) return e;
    if (t.startsWith("steps")) {
        const s = St.exec(t);
        if (s) {
            const i = s[1].split(",");
            return bt(parseFloat(i[0]), i[1].trim())
        }
    }
    return y
}
class Xt {
    constructor(e, s = [0, 1], {
        easing: i,
        duration: n = h.duration,
        delay: a = h.delay,
        endDelay: r = h.endDelay,
        repeat: o = h.repeat,
        offset: p,
        direction: b = "normal",
        autoplay: C = !0
    } = {}) {
        if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = y, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((c, v) => {
                this.resolve = c, this.reject = v
            }), i = i || h.easing, K(i)) {
            const c = i.createAnimation(s);
            i = c.easing, s = c.keyframes || s, n = c.duration || n
        }
        this.repeat = o, this.easing = E(i) ? y : J(i), this.updateDuration(n);
        const F = mt(s, p, E(i) ? i.map(J) : y);
        this.tick = c => {
            var v;
            a = a;
            let f = 0;
            this.pauseTime !== void 0 ? f = this.pauseTime : f = (c - this.startTime) * this.rate, this.t = f, f /= 1e3, f = Math.max(f - a, 0), this.playState === "finished" && this.pauseTime === void 0 && (f = this.totalDuration);
            const A = f / this.duration;
            let I = Math.floor(A),
                m = A % 1;
            !m && A >= 1 && (m = 1), m === 1 && I--;
            const V = I % 2;
            (b === "reverse" || b === "alternate" && V || b === "alternate-reverse" && !V) && (m = 1 - m);
            const O = f >= this.totalDuration ? 1 : Math.min(m, 1),
                S = F(this.easing(O));
            e(S), this.pauseTime === void 0 && (this.playState === "finished" || f >= this.totalDuration + r) ? (this.playState = "finished", (v = this.resolve) === null || v === void 0 || v.call(this, S)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick))
        }, C && this.play()
    }
    play() {
        const e = performance.now();
        this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
    }
    pause() {
        this.playState = "paused", this.pauseTime = this.t
    }
    finish() {
        this.playState = "finished", this.tick(0)
    }
    stop() {
        var e;
        this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, !1)
    }
    cancel() {
        this.stop(), this.tick(this.cancelTimestamp)
    }
    reverse() {
        this.rate *= -1
    }
    commitStyles() {}
    updateDuration(e) {
        this.duration = e, this.totalDuration = e * (this.repeat + 1)
    }
    get currentTime() {
        return this.t
    }
    set currentTime(e) {
        this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
    }
    get playbackRate() {
        return this.rate
    }
    set playbackRate(e) {
        this.rate = e
    }
}
class wt {
    setAnimation(e) {
        this.animation = e, e == null || e.finished.then(() => this.clearAnimation()).catch(() => {})
    }
    clearAnimation() {
        this.animation = this.generator = void 0
    }
}
const L = new WeakMap;

function ot(t) {
    return L.has(t) || L.set(t, {
        transforms: [],
        values: new Map
    }), L.get(t)
}

function Et(t, e) {
    return t.has(e) || t.set(e, new wt), t.get(e)
}
const Ot = ["", "X", "Y", "Z"],
    xt = ["translate", "scale", "rotate", "skew"],
    $ = {
        x: "translateX",
        y: "translateY",
        z: "translateZ"
    },
    Q = {
        syntax: "<angle>",
        initialValue: "0deg",
        toDefaultUnit: t => t + "deg"
    },
    Dt = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: t => t + "px"
        },
        rotate: Q,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: y
        },
        skew: Q
    },
    R = new Map,
    G = t => `--motion-${t}`,
    z = ["x", "y", "z"];
xt.forEach(t => {
    Ot.forEach(e => {
        z.push(t + e), R.set(G(t + e), Dt[t])
    })
});
const Mt = (t, e) => z.indexOf(t) - z.indexOf(e),
    Pt = new Set(z),
    ct = t => Pt.has(t),
    Rt = (t, e) => {
        $[e] && (e = $[e]);
        const {
            transforms: s
        } = ot(t);
        ft(s, e), t.style.transform = Ft(s)
    },
    Ft = t => t.sort(Mt).reduce(It, "").trim(),
    It = (t, e) => `${t} ${e}(var(${G(e)}))`,
    W = t => t.startsWith("--"),
    Y = new Set;

function Vt(t) {
    if (!Y.has(t)) {
        Y.add(t);
        try {
            const {
                syntax: e,
                initialValue: s
            } = R.has(t) ? R.get(t) : {};
            CSS.registerProperty({
                name: t,
                inherits: !1,
                syntax: e,
                initialValue: s
            })
        } catch {}
    }
}
const N = (t, e) => document.createElement("div").animate(t, e),
    k = {
        cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                N({
                    opacity: [1]
                })
            } catch {
                return !1
            }
            return !0
        },
        finished: () => !!N({
            opacity: [0, 1]
        }, {
            duration: .001
        }).finished,
        linearEasing: () => {
            try {
                N({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch {
                return !1
            }
            return !0
        }
    },
    B = {},
    w = {};
for (const t in k) w[t] = () => (B[t] === void 0 && (B[t] = k[t]()), B[t]);
const jt = .015,
    _t = (t, e) => {
        let s = "";
        const i = Math.round(e / jt);
        for (let n = 0; n < i; n++) s += t(Z(0, i - 1, n)) + ", ";
        return s.substring(0, s.length - 2)
    },
    tt = (t, e) => P(t) ? w.linearEasing() ? `linear(${_t(t,e)})` : h.easing : at(t) ? qt(t) : t,
    qt = ([t, e, s, i]) => `cubic-bezier(${t}, ${e}, ${s}, ${i})`;

function Ut(t, e) {
    for (let s = 0; s < t.length; s++) t[s] === null && (t[s] = s ? t[s - 1] : e());
    return t
}
const $t = t => Array.isArray(t) ? t : [t];

function X(t) {
    return $[t] && (t = $[t]), ct(t) ? G(t) : t
}
const q = {
    get: (t, e) => {
        e = X(e);
        let s = W(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
        if (!s && s !== 0) {
            const i = R.get(e);
            i && (s = i.initialValue)
        }
        return s
    },
    set: (t, e, s) => {
        e = X(e), W(e) ? t.style.setProperty(e, s) : t.style[e] = s
    }
};

function lt(t, e = !0) {
    if (!(!t || t.playState === "finished")) try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
    } catch {}
}

function zt(t, e) {
    var s;
    let i = (e == null ? void 0 : e.toDefaultUnit) || y;
    const n = t[t.length - 1];
    if (gt(n)) {
        const a = ((s = n.match(/(-?[\d.]+)([a-z%]*)/)) === null || s === void 0 ? void 0 : s[2]) || "";
        a && (i = r => r + a)
    }
    return i
}

function Ct() {
    return window.__MOTION_DEV_TOOLS_RECORD
}

function Zt(t, e, s, i = {}, n) {
    const a = Ct(),
        r = i.record !== !1 && a;
    let o, {
        duration: p = h.duration,
        delay: b = h.delay,
        endDelay: C = h.endDelay,
        repeat: F = h.repeat,
        easing: c = h.easing,
        persist: v = !1,
        direction: f,
        offset: A,
        allowWebkitAcceleration: I = !1,
        autoplay: m = !0
    } = i;
    const V = ot(t),
        O = ct(e);
    let S = w.waapi();
    O && Rt(t, e);
    const d = X(e),
        j = Et(V.values, d),
        g = R.get(d);
    return lt(j.animation, !(K(c) && j.generator) && i.record !== !1), () => {
        const _ = () => {
            var l, x;
            return (x = (l = q.get(t, d)) !== null && l !== void 0 ? l : g == null ? void 0 : g.initialValue) !== null && x !== void 0 ? x : 0
        };
        let u = Ut($t(s), _);
        const H = zt(u, g);
        if (K(c)) {
            const l = c.createAnimation(u, e !== "opacity", _, d, j);
            c = l.easing, u = l.keyframes || u, p = l.duration || p
        }
        if (W(d) && (w.cssRegisterProperty() ? Vt(d) : S = !1), O && !w.linearEasing() && (P(c) || E(c) && c.some(P)) && (S = !1), S) {
            g && (u = u.map(T => U(T) ? g.toDefaultUnit(T) : T)), u.length === 1 && (!w.partialKeyframes() || r) && u.unshift(_());
            const l = {
                delay: M.ms(b),
                duration: M.ms(p),
                endDelay: M.ms(C),
                easing: E(c) ? void 0 : tt(c, p),
                direction: f,
                iterations: F + 1,
                fill: "both"
            };
            o = t.animate({
                [d]: u,
                offset: A,
                easing: E(c) ? c.map(T => tt(T, p)) : void 0
            }, l), o.finished || (o.finished = new Promise((T, ut) => {
                o.onfinish = T, o.oncancel = ut
            }));
            const x = u[u.length - 1];
            o.finished.then(() => {
                v || (q.set(t, d, x), o.cancel())
            }).catch(it), I || (o.playbackRate = 1.000001)
        } else if (n && O) u = u.map(l => typeof l == "string" ? parseFloat(l) : l), u.length === 1 && u.unshift(parseFloat(_())), o = new n(l => {
            q.set(t, d, H ? H(l) : l)
        }, u, Object.assign(Object.assign({}, i), {
            duration: p,
            easing: c
        }));
        else {
            const l = u[u.length - 1];
            q.set(t, d, g && U(l) ? g.toDefaultUnit(l) : l)
        }
        return r && a(t, e, u, {
            duration: p,
            delay: b,
            easing: c,
            repeat: F,
            offset: A
        }, "motion-one"), j.setAnimation(o), o && !m && o.pause(), o
    }
}
const Gt = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

function Ht(t, e) {
    var s;
    return typeof t == "string" ? e ? ((s = e[t]) !== null && s !== void 0 || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
}
const Lt = t => t(),
    Jt = (t, e, s = h.duration) => new Proxy({
        animations: t.map(Lt).filter(Boolean),
        duration: s,
        options: e
    }, Bt),
    Nt = t => t.animations[0],
    Bt = {
        get: (t, e) => {
            const s = Nt(t);
            switch (e) {
                case "duration":
                    return t.duration;
                case "currentTime":
                    return M.s((s == null ? void 0 : s[e]) || 0);
                case "playbackRate":
                case "playState":
                    return s == null ? void 0 : s[e];
                case "finished":
                    return t.finished || (t.finished = Promise.all(t.animations.map(Kt)).catch(it)), t.finished;
                case "stop":
                    return () => {
                        t.animations.forEach(i => lt(i))
                    };
                case "forEachNative":
                    return i => {
                        t.animations.forEach(n => i(n, t))
                    };
                default:
                    return typeof(s == null ? void 0 : s[e]) > "u" ? void 0 : () => t.animations.forEach(i => i[e]())
            }
        },
        set: (t, e, s) => {
            switch (e) {
                case "currentTime":
                    s = M.ms(s);
                case "playbackRate":
                    for (let i = 0; i < t.animations.length; i++) t.animations[i][e] = s;
                    return !0
            }
            return !1
        }
    },
    Kt = t => t.finished;

function Qt(t, e, s) {
    return P(t) ? t(e, s) : t
}
export {
    Xt as A, Qt as a, Zt as b, zt as c, R as d, X as e, gt as f, Gt as g, P as h, U as i, dt as j, Wt as k, $t as l, st as m, y as n, h as o, K as p, pt as q, Ht as r, nt as s, M as t, Z as u, Jt as w
};