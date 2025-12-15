import {
    _ as N,
    o as h,
    c as f,
    F as E,
    r as ge,
    a as G,
    w as y,
    t as O,
    T,
    b as r,
    n as S,
    d as Pe,
    e as b,
    f as C,
    g as L,
    h as ne,
    i as $e,
    v as Le,
    j as v,
    B as Te,
    k as ae,
    l as F
} from "./app-ljqbCed6.js";
import {
    r as He,
    g as Oe,
    a as Ae,
    b as De,
    w as pe,
    A as ve,
    t as Ee,
    n as we,
    c as Se,
    d as We,
    e as Be,
    i as je,
    f as ze,
    h as Fe
} from "./stagger.es-BtPQt3Eg.js";
import {
    u as Ze,
    b as Ye
} from "./index-Bcn5AO2-.js";

function Ne(e, t) {
    return t ? e * (1e3 / t) : 0
}

function Ve(e) {
    return function(n, s, a = {}) {
        n = He(n);
        const i = n.length,
            o = [];
        for (let l = 0; l < i; l++) {
            const c = n[l];
            for (const u in s) {
                const d = Oe(a, u);
                d.delay = Ae(d.delay, l, i);
                const g = De(c, u, s[u], d, e);
                o.push(g)
            }
        }
        return pe(o, a, a.duration)
    }
}
const qe = Ve(ve),
    Ie = 5;

function xe(e, t, n) {
    const s = Math.max(t - Ie, 0);
    return Ne(n - e(s), t - s)
}
const Y = {
        stiffness: 100,
        damping: 10,
        mass: 1
    },
    Re = (e = Y.stiffness, t = Y.damping, n = Y.mass) => t / (2 * Math.sqrt(e * n));

function Ue(e, t, n) {
    return e < t && n >= t || e > t && n <= t
}
const Qe = ({
        stiffness: e = Y.stiffness,
        damping: t = Y.damping,
        mass: n = Y.mass,
        from: s = 0,
        to: a = 1,
        velocity: i = 0,
        restSpeed: o,
        restDistance: l
    } = {}) => {
        i = i ? Ee.s(i) : 0;
        const c = {
                done: !1,
                hasReachedTarget: !1,
                current: s,
                target: a
            },
            u = a - s,
            d = Math.sqrt(e / n) / 1e3,
            g = Re(e, t, n),
            m = Math.abs(u) < 5;
        o || (o = m ? .01 : 2), l || (l = m ? .005 : .5);
        let x;
        if (g < 1) {
            const w = d * Math.sqrt(1 - g * g);
            x = k => a - Math.exp(-g * d * k) * ((-i + g * d * u) / w * Math.sin(w * k) + u * Math.cos(w * k))
        } else x = w => a - Math.exp(-d * w) * (u + (-i + d * u) * w);
        return w => {
            c.current = x(w);
            const k = w === 0 ? i : xe(x, w, c.current),
                H = Math.abs(k) <= o,
                D = Math.abs(a - c.current) <= l;
            return c.done = H && D, c.hasReachedTarget = Ue(s, a, c.current), c
        }
    },
    K = 10,
    Ge = 1e4;

function Xe(e, t = we) {
    let n, s = K,
        a = e(0);
    const i = [t(a.current)];
    for (; !a.done && s < Ge;) a = e(s), i.push(t(a.done ? a.target : a.current)), n === void 0 && a.hasReachedTarget && (n = s), s += K;
    const o = s - K;
    return i.length === 1 && i.push(a.current), {
        keyframes: i,
        duration: o / 1e3,
        overshootDuration: (n ? ? o) / 1e3
    }
}

function ie(e) {
    return je(e) && !isNaN(e)
}

function ee(e) {
    return ze(e) ? parseFloat(e) : e
}

function Je(e) {
    const t = new WeakMap;
    return (n = {}) => {
        const s = new Map,
            a = (o = 0, l = 100, c = 0, u = !1) => {
                const d = `${o}-${l}-${c}-${u}`;
                return s.has(d) || s.set(d, e(Object.assign({
                    from: o,
                    to: l,
                    velocity: c
                }, n))), s.get(d)
            },
            i = (o, l) => (t.has(o) || t.set(o, Xe(o, l)), t.get(o));
        return {
            createAnimation: (o, l = !0, c, u, d) => {
                let g, m, x, w = 0,
                    k = we;
                const H = o.length;
                if (l) {
                    k = Se(o, u ? We.get(Be(u)) : void 0);
                    const D = o[H - 1];
                    if (x = ee(D), H > 1 && o[0] !== null) m = ee(o[0]);
                    else {
                        const P = d == null ? void 0 : d.generator;
                        if (P) {
                            const {
                                animation: _,
                                generatorStartTime: V
                            } = d, Me = (_ == null ? void 0 : _.startTime) || V || 0, se = (_ == null ? void 0 : _.currentTime) || performance.now() - Me, re = P(se).current;
                            m = re, w = xe(Ce => P(Ce).current, se, re)
                        } else c && (m = ee(c()))
                    }
                }
                if (ie(m) && ie(x)) {
                    const D = a(m, x, w, u == null ? void 0 : u.includes("scale"));
                    g = Object.assign(Object.assign({}, i(D, k)), {
                        easing: "linear"
                    }), d && (d.generator = D, d.generatorStartTime = performance.now())
                }
                return g || (g = {
                    easing: "ease",
                    duration: i(a(0, 100)).overshootDuration
                }), g
            }
        }
    }
}
const $ = Je(Qe);

function Ke(e, t = {}) {
    return pe([() => {
        const n = new ve(e, [0, 1], t);
        return n.finished.catch(() => {}), n
    }], t, t.duration)
}

function M(e, t, n) {
    return (Fe(e) ? Ke : qe)(e, t, n)
}
const et = {
        props: {
            count: {
                type: [String, Number],
                default: 0
            }
        },
        data() {
            return {
                init: !0,
                isIncrease: null
            }
        },
        computed: {
            numbers() {
                return [...this.count.toString()]
            }
        },
        watch: {
            count(e, t) {
                this.isIncrease = e > t, this.init && (this.init = !1)
            }
        },
        methods: {
            handleEnter(e, t) {
                if (this.init) t();
                else {
                    const n = this.$refs.counter,
                        s = n.getBoundingClientRect(),
                        a = Object.values(n.children).reduce((i, o) => i + o.offsetWidth, 0);
                    s.width !== a && M(n, {
                        width: [null, a + "px"],
                        height: [s.height + "px", null]
                    }, {
                        duration: .25
                    }), M(e, {
                        scale: [.8, 1],
                        y: [this.isIncrease ? `${e.offsetHeight/3}px` : `-${e.offsetHeight/3}px`, "0"],
                        opacity: [0, 1],
                        filter: [`blur(${e.offsetHeight/6}px)`, "blur(0)"]
                    }, {
                        easing: $({
                            stiffness: 150,
                            damping: 14
                        })
                    }).finished.then(() => {
                        e.removeAttribute("style"), t()
                    })
                }
            },
            handleLeave(e, t) {
                if (this.init) t();
                else {
                    const n = e.getBoundingClientRect();
                    M(e, {
                        position: ["absolute", null],
                        top: [0, null],
                        left: [n.width * e.dataset.index + "px", null],
                        scale: [1, .6],
                        y: [0, this.isIncrease ? `-${e.offsetHeight/2}px` : `${e.offsetHeight/2}px`],
                        opacity: [1, 0],
                        filter: ["blur(0)", `blur(${e.offsetHeight/6}px)`]
                    }, {
                        duration: .4
                    }).finished.then(() => {
                        e.removeAttribute("style"), t()
                    })
                }
            }
        }
    },
    tt = {
        ref: "counter",
        class: "relative inline-flex tabular-nums"
    },
    nt = ["data-index"];

function st(e, t, n, s, a, i) {
    return h(), f("div", tt, [(h(!0), f(E, null, ge(i.numbers, (o, l) => (h(), G(T, {
        key: o,
        css: !1,
        appear: "",
        onEnter: i.handleEnter,
        onLeave: i.handleLeave
    }, {
        default: y(() => [(h(), f("span", {
            key: o,
            "data-index": l
        }, O(o), 9, nt))]),
        _: 2
    }, 1032, ["onEnter", "onLeave"]))), 128))], 512)
}
const rt = N(et, [
        ["render", st]
    ]),
    at = {
        props: {
            track: {
                type: Object,
                default: null
            }
        }
    },
    it = {
        class: "flex h-[10.875rem] w-[20.5rem] flex-col justify-center rounded-[1.75rem] border border-orange-25/10 bg-stone-900/15 p-[1.0625rem] outline outline-1 outline-stone-950/25 backdrop-blur-2xl backdrop-saturate-115"
    },
    ot = {
        class: "flex items-center justify-between"
    },
    lt = {
        key: 1,
        class: "size-14 shrink-0 rounded-xl bg-purple-300/10 saturate-150"
    },
    ct = {
        class: "ml-4 flex-grow"
    },
    ut = {
        class: "text-[13.5px] font-semibold leading-4 text-orange-25"
    },
    dt = {
        class: "leading text-[13px] font-medium leading-4 text-purple-300/75 saturate-150"
    },
    ht = {
        key: 1,
        class: "mb-4 text-[13.5px] font-semibold leading-4 text-purple-300/50 saturate-150"
    },
    ft = {
        class: "mr-1 flex w-5 items-center justify-center space-x-0.5 brightness-110 saturate-150"
    },
    mt = Pe('<div class="mt-4 flex items-center justify-between space-x-2 whitespace-nowrap text-[10px] font-bold leading-none text-purple-300/75 saturate-150"><div>-:--</div><div class="saturate-15 h-1.5 w-full rounded-full bg-purple-300/25"></div><div>-:--</div></div><div class="flex grow items-end justify-center space-x-2"><div class="flex h-[46px] w-12 items-center justify-center rounded-2xl text-purple-300/75 saturate-150 hover:bg-purple-300/15"><svg class="size-[22px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" aria-hidden="true"><path d="M1 19.64c0 .587.434.973 1.078.973H4.75c1.945 0 3.059-.55 4.477-2.191l7.101-8.285c1.008-1.172 1.852-1.606 3.14-1.606h2.391v2.649c0 .468.27.738.75.738a.98.98 0 0 0 .61-.223l4.43-3.668c.374-.304.374-.785 0-1.113l-4.43-3.68a.96.96 0 0 0-.61-.21c-.48 0-.75.257-.75.726v2.824H19.41c-1.957 0-3.082.551-4.488 2.192l-7.09 8.285c-1.02 1.183-1.828 1.617-3.023 1.617h-2.73c-.634 0-1.079.387-1.079.973M1 7.56c0 .574.445.972 1.078.972h2.73c1.208 0 2.016.434 3.024 1.617l7.09 8.286c1.406 1.628 2.531 2.18 4.488 2.18h2.45v2.906c0 .468.269.726.75.726.222 0 .433-.07.609-.21l4.43-3.669c.374-.316.374-.785 0-1.113l-4.43-3.68a.98.98 0 0 0-.61-.222c-.48 0-.75.27-.75.738v2.578h-2.39c-1.29 0-2.133-.434-3.14-1.617L9.226 8.766c-1.418-1.63-2.532-2.18-4.477-2.18H2.078c-.644 0-1.078.387-1.078.973"></path></svg></div><div class="flex h-[46px] w-12 items-center justify-center rounded-2xl text-orange-25 hover:bg-purple-300/15"><svg class="size-[26px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 28" aria-hidden="true"><path d="M14.473 23.434c.914 0 1.687-.704 1.687-2.004V7.027c0-1.3-.773-2.004-1.687-2.004-.48 0-.868.153-1.348.434L1.184 12.488C.352 12.98 0 13.555 0 14.223c0 .68.352 1.254 1.184 1.746L13.125 23c.469.281.867.434 1.348.434m16.101 0c.914 0 1.688-.704 1.688-2.004V7.027c0-1.3-.774-2.004-1.688-2.004-.48 0-.867.153-1.347.434l-11.942 7.031c-.832.492-1.183 1.067-1.183 1.735 0 .68.351 1.254 1.183 1.746L29.227 23c.468.281.867.434 1.347.434"></path></svg></div><div class="flex h-[46px] w-12 items-center justify-center rounded-2xl text-orange-25 hover:bg-purple-300/15"><svg class="size-[34px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" aria-hidden="true"><path d="M6.406 23.863c.469 0 .867-.187 1.336-.457l13.664-7.898c.973-.574 1.313-.95 1.313-1.57 0-.622-.34-.997-1.313-1.56L7.742 4.469c-.469-.269-.867-.445-1.336-.445C5.54 4.023 5 4.68 5 5.7v16.477c0 1.02.54 1.687 1.406 1.687"></path></svg></div><div class="flex h-[46px] w-12 items-center justify-center rounded-2xl text-orange-25 hover:bg-purple-300/15"><svg class="size-[26px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 28" aria-hidden="true"><path d="M1.688 23.434c.48 0 .878-.153 1.347-.434l11.942-7.031c.832-.492 1.195-1.067 1.195-1.746 0-.668-.363-1.243-1.195-1.735L3.035 5.457c-.48-.281-.867-.434-1.348-.434C.774 5.023 0 5.727 0 7.027V21.43c0 1.3.773 2.004 1.688 2.004m16.101 0c.48 0 .879-.153 1.348-.434l11.953-7.031c.82-.492 1.183-1.067 1.183-1.746 0-.668-.363-1.243-1.183-1.735L19.137 5.457c-.469-.281-.867-.434-1.348-.434-.914 0-1.687.704-1.687 2.004V21.43c0 1.3.773 2.004 1.687 2.004"></path></svg></div><div class="flex h-[46px] w-12 items-center justify-center rounded-2xl text-purple-300/75 saturate-150"><svg class="size-[26px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 28" aria-hidden="true"><path fill-opacity="0.3" d="M5.777 20.418V7.035q0-1.125 1.125-1.125h19.993q1.125 0 1.125 1.125v13.383z"></path><path d="M13.36 5.907h.294c.175 0 .27.082.27.281v.13c0 .491.327.82.82.82h4.336c.48 0 .785-.329.785-.82v-.13c0-.2.094-.281.293-.281h.293v-.973h-7.09zM0 21.752c0 .738.598 1.336 1.324 1.336h31.152c.726 0 1.324-.598 1.324-1.336s-.598-1.336-1.324-1.336h-2.567V6.505c0-1.641-.879-2.485-2.508-2.485H6.399c-1.547 0-2.508.844-2.508 2.485v13.911H1.324c-.726 0-1.324.598-1.324 1.336m5.778-1.336V7.032q0-1.125 1.125-1.125h19.994q1.125 0 1.125 1.125v13.384z"></path></svg></div></div>', 2);

function gt(e, t, n, s, a, i) {
    return h(), f("div", it, [r("div", ot, [n.track ? (h(), f("div", {
        key: 0,
        class: "size-14 shrink-0 scale-95 rounded-xl !bg-cover opacity-95",
        style: S(`background: url(${n.track.album_art})`)
    }, null, 4)) : (h(), f("div", lt)), r("div", ct, [n.track ? (h(), f(E, {
        key: 0
    }, [r("div", ut, O(n.track.name), 1), r("div", dt, O(n.track.artist), 1)], 64)) : (h(), f("div", ht, " Not Playing "))]), r("div", ft, [(h(), f(E, null, ge(5, o => r("div", {
        key: o,
        class: "size-0.5 rounded-[1px] bg-purple-300/25"
    })), 64))])]), mt])
}
const pt = N(at, [
        ["render", gt]
    ]),
    vt = {
        props: {
            notchWidth: {
                type: Number,
                default: 136
            },
            notchHeight: {
                type: Number,
                default: 40
            },
            isLocked: {
                type: Boolean,
                default: !1
            }
        },
        setup() {
            return {
                cdnUrl: "https://cdn.tryalcove.com"
            }
        },
        data() {
            return {
                isElevated: !1,
                isPressed: !1,
                hasNotification: !1,
                hasLiveActivity: !1,
                hasQuickPeek: !1,
                isUnlocked: !1,
                liveActivityType: null,
                liveActivityTimer: null,
                notificationType: null,
                notificationTimer: null
            }
        },
        watch: {
            isLocked: {
                handler(e) {
                    this.toggleLiveActivity(e, "isLocked")
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.toggleLiveActivity(!0, "isLocked")
            }), this.$emitter.on("toggle-notification", ({
                state: e,
                type: t,
                duration: n
            }) => {
                this.toggleNotification(e, t, n)
            }), this.$emitter.on("toggle-live-activity", ({
                state: e,
                type: t
            }) => {
                this.toggleLiveActivity(e, t)
            }), this.$emitter.on("toggle-quick-peek", ({
                state: e,
                duration: t
            }) => {
                this.toggleQuickPeek(e, t)
            })
        },
        methods: {
            updateMarqueeSpeed() {
                const e = this.$refs.marquee;
                if (!e) return;
                const t = e.children[0];
                if (!t) return;
                const a = t.scrollWidth / 30;
                e.style.setProperty("--marquee-duration", `${a}s`)
            },
            toggleNotification(e, t, n = 0) {
                e && t == this.notificationType || (this.hasNotification = e, this.notificationType = t, M(this.$refs.notch, {
                    width: `${this.notchWidth+74}px`
                }, {
                    easing: $({
                        stiffness: 150,
                        damping: 20,
                        mass: 1
                    })
                }), clearTimeout(this.notificationTimer), n > 0 && (this.notificationTimer = setTimeout(() => {
                    this.hasNotification = !1, this.notificationType = null, M(this.$refs.notch, {
                        width: `${this.notchWidth}px`
                    }, {
                        easing: $({
                            stiffness: 150,
                            damping: 16,
                            mass: 1
                        })
                    }), this.handleMouseUp()
                }, n)))
            },
            toggleLiveActivity(e, t) {
                if (!(e && t == this.liveActivityType))
                    if (clearTimeout(this.liveActivityTimer), e) this.hasLiveActivity = e, this.liveActivityType = t, M(this.$refs.notch, {
                        width: `${this.notchWidth+74}px`
                    }, {
                        easing: $({
                            stiffness: 150,
                            damping: 20,
                            mass: 1
                        })
                    });
                    else {
                        let n = 0;
                        t === "isLocked" && (this.isUnlocked = !0, n = 475), this.liveActivityTimer = setTimeout(() => {
                            this.hasLiveActivity = !1, this.liveActivityType = null, M(this.$refs.notch, {
                                width: `${this.notchWidth}px`
                            }, {
                                easing: $({
                                    stiffness: 175,
                                    damping: 17.5,
                                    mass: 1
                                })
                            })
                        }, n)
                    }
            },
            toggleQuickPeek(e, t = 0) {
                e && this.hasQuickPeek || (this.hasQuickPeek = e, e ? (M(this.$refs.notch, {
                    height: `${this.notchHeight+32}px`,
                    borderTopLeftRadius: "13px",
                    borderTopRightRadius: "13px",
                    borderBottomLeftRadius: "19px",
                    borderBottomRightRadius: "19px"
                }, {
                    easing: $({
                        stiffness: 250,
                        damping: 21,
                        mass: 1
                    })
                }), M(this.$refs.peek, {
                    opacity: 1,
                    filter: "blur(0)",
                    scaleX: 1
                }, {
                    easing: $({
                        stiffness: 250,
                        damping: 21,
                        mass: 1
                    }),
                    delay: .05
                }), this.$nextTick(() => this.updateMarqueeSpeed()), t > 0 && setTimeout(() => {
                    this.toggleQuickPeek(!1)
                }, t)) : (M(this.$refs.notch, {
                    height: `${this.notchHeight}px`,
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px"
                }, {
                    easing: $({
                        stiffness: 250,
                        damping: 25,
                        mass: 1
                    })
                }), M(this.$refs.peek, {
                    opacity: 0,
                    filter: "blur(10px)",
                    scaleX: .75
                }, {
                    easing: $({
                        stiffness: 250,
                        damping: 25,
                        mass: 1
                    })
                })))
            },
            handleMouseEnter() {
                this.hasQuickPeek || (this.isElevated = !0, M(this.$refs.notch, {
                    scale: 1.075
                }, {
                    easing: $({
                        stiffness: 250,
                        damping: 14,
                        mass: 1
                    })
                }), M(this.$refs.inner, {
                    borderRadius: "13px"
                }, {
                    easing: $({
                        stiffness: 250,
                        damping: 14,
                        mass: 1
                    })
                }))
            },
            handleMouseLeave() {
                this.hasQuickPeek || (this.isElevated = !1, M(this.$refs.notch, {
                    scale: 1
                }, {
                    easing: $({
                        stiffness: 200,
                        damping: 20,
                        mass: 1
                    })
                }), M(this.$refs.inner, {
                    borderRadius: "12px"
                }, {
                    easing: $({
                        stiffness: 200,
                        damping: 20,
                        mass: 1
                    })
                }), this.handleMouseUp())
            },
            handleMouseAlbumPress() {
                const e = this.$playlist.track.url;
                e && window.open(e, "_blank")
            },
            handleMouseDown() {
                this.isPressed = !0, M(this.$refs.wrapper, {
                    scale: .94
                }, {
                    easing: $({
                        stiffness: 160,
                        damping: 18,
                        mass: 1
                    })
                })
            },
            handleMouseUp() {
                this.isPressed = !1, M(this.$refs.wrapper, {
                    scale: 1
                }, {
                    easing: $({
                        stiffness: 160,
                        damping: 18,
                        mass: 1
                    })
                })
            },
            handleMouseAlbumEnter() {
                this.toggleQuickPeek(!0)
            },
            handleMouseAlbumLeave() {
                this.toggleQuickPeek(!1)
            }
        }
    },
    wt = {
        ref: "inner",
        class: "h-full w-full rounded-xl bg-stone-950"
    },
    xt = {
        ref: "left",
        class: "absolute left-0 top-0 flex h-10 items-center"
    },
    bt = {
        key: 0,
        class: "flex h-full items-center pb-0.5 pl-1.5"
    },
    yt = {
        class: "size-8",
        autoplay: "",
        loop: "",
        muted: "",
        playsinline: ""
    },
    _t = ["src"],
    kt = {
        key: 1,
        class: "pl-2.5"
    },
    Mt = {
        class: "size-[18px] fill-current",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    },
    Ct = {
        ref: "right",
        class: "absolute right-0 top-0 flex h-10 items-center"
    },
    Pt = {
        key: 0,
        class: "pr-2.5"
    },
    $t = r("svg", {
        class: "size-5 -rotate-90",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("circle", {
        class: "fill-transparent stroke-current stroke-2 text-green-300/30",
        r: "6",
        cx: "8",
        cy: "8",
        "stroke-dasharray": "38px",
        "stroke-dashoffset": "0"
    }), r("circle", {
        class: "fill-transparent stroke-current stroke-2 text-green-300",
        r: "6",
        cx: "8",
        cy: "8",
        "stroke-dasharray": "38px",
        "stroke-dashoffset": "14px",
        "stroke-linecap": "round"
    })], -1),
    Lt = [$t],
    Tt = {
        key: 1,
        class: "group pr-[9px]"
    },
    Ht = r("svg", {
        class: "size-4 fill-current text-orange-25/85",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M8.55859 23.0898H11.2305C12.25 23.0898 12.7891 22.5508 12.7891 21.5195V5.55859C12.7891 4.49219 12.25 4 11.2305 4H8.55859C7.53906 4 7 4.53906 7 5.55859V21.5195C7 22.5508 7.53906 23.0898 8.55859 23.0898ZM17.0781 23.0898H19.7383C20.7695 23.0898 21.2969 22.5508 21.2969 21.5195V5.55859C21.2969 4.49219 20.7695 4 19.7383 4H17.0781C16.0469 4 15.5078 4.53906 15.5078 5.55859V21.5195C15.5078 22.5508 16.0469 23.0898 17.0781 23.0898Z"
    })], -1),
    Ot = [Ht],
    At = r("svg", {
        class: "size-4 fill-current text-orange-25/85",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M6.40625 23.8633C6.875 23.8633 7.27344 23.6758 7.74219 23.4062L21.4062 15.5078C22.3789 14.9336 22.7188 14.5586 22.7188 13.9375C22.7188 13.3164 22.3789 12.9414 21.4062 12.3789L7.74219 4.46875C7.27344 4.19922 6.875 4.02344 6.40625 4.02344C5.53906 4.02344 5 4.67969 5 5.69922V22.1758C5 23.1953 5.53906 23.8633 6.40625 23.8633Z"
    })], -1),
    Dt = [At],
    Et = {
        class: "flex w-5 items-center justify-center space-x-[1.5px] brightness-110 group-hover:scale-125 group-hover:blur-[3.5px] group-hover:brightness-125 group-hover:saturate-150"
    },
    St = {
        ref: "peek",
        class: "pointer-events-none absolute bottom-0 left-0 right-0 flex origin-top justify-center pb-[11px] text-xs font-semibold text-stone-300/85 opacity-0 [mask-image:linear-gradient(to_left,rgba(0,0,0,0)_7%,rgba(0,0,0,1)_11%,rgba(0,0,0,1)_89%,rgba(0,0,0,0)_93%)]"
    },
    Wt = {
        key: 0,
        ref: "marquee",
        class: "relative flex"
    },
    Bt = {
        class: "inline-flex shrink-0 items-center whitespace-nowrap px-1.5 [animation:marquee-first_var(--marquee-duration)_linear_infinite]"
    },
    jt = r("svg", {
        class: "mr-0.5 size-[15px] fill-current text-stone-600",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M20.797 7.166V2.914c0-.6-.486-.984-1.063-.871L13.92 3.309c-.724.159-1.12.555-1.12 1.188l.023 12.576c.057.554-.203.915-.701 1.017l-1.798.373C8.063 18.939 7 20.093 7 21.8c0 1.73 1.334 2.94 3.212 2.94 1.662 0 4.15-1.221 4.15-4.512V9.88c0-.6.113-.724.645-.837l5.168-1.13c.384-.08.622-.374.622-.747Z"
    })], -1),
    zt = r("span", {
        class: "mx-0.5 text-stone-600"
    }, "∙", -1),
    Ft = {
        class: "absolute top-0 inline-flex shrink-0 items-center whitespace-nowrap px-1.5 [animation:marquee-second_var(--marquee-duration)_linear_infinite]"
    },
    Zt = r("svg", {
        class: "mr-0.5 size-[15px] fill-current text-stone-600",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M20.797 7.166V2.914c0-.6-.486-.984-1.063-.871L13.92 3.309c-.724.159-1.12.555-1.12 1.188l.023 12.576c.057.554-.203.915-.701 1.017l-1.798.373C8.063 18.939 7 20.093 7 21.8c0 1.73 1.334 2.94 3.212 2.94 1.662 0 4.15-1.221 4.15-4.512V9.88c0-.6.113-.724.645-.837l5.168-1.13c.384-.08.622-.374.622-.747Z"
    })], -1),
    Yt = r("span", {
        class: "mx-0.5 text-stone-600"
    }, "∙", -1);

function Nt(e, t, n, s, a, i) {
    return h(), f("div", {
        ref: "wrapper",
        class: "select-none",
        onMouseenter: t[4] || (t[4] = (...o) => i.handleMouseEnter && i.handleMouseEnter(...o)),
        onMouseleave: t[5] || (t[5] = (...o) => i.handleMouseLeave && i.handleMouseLeave(...o)),
        onMousedown: t[6] || (t[6] = (...o) => i.handleMouseDown && i.handleMouseDown(...o)),
        onMouseup: t[7] || (t[7] = (...o) => i.handleMouseUp && i.handleMouseUp(...o))
    }, [r("div", {
        ref: "notch",
        class: C(["relative flex h-10 origin-top overflow-hidden rounded-xl text-orange-25 transition-shadow duration-300", {
            "shadow-[0_2px_16px_0_rgba(12,10,9,0.25)]": a.isElevated
        }])
    }, [r("div", wt, [r("div", xt, [b(T, {
        "enter-from-class": "opacity-0 blur-[10px] scale-x-0",
        "enter-active-class": "transition duration-300",
        "leave-active-class": "transition duration-250",
        "leave-to-class": "opacity-0 blur-sm scale-x-[0.25]"
    }, {
        default: y(() => [a.notificationType === "didConnectAirPods" ? (h(), f("div", bt, [r("video", yt, [r("source", {
            src: `${s.cdnUrl}/videos/airpods-pro.mp4`,
            type: "video/mp4"
        }, null, 8, _t)])])) : a.liveActivityType === "isLocked" ? (h(), f("div", kt, [(h(), f("svg", Mt, [r("path", {
            class: C(["origin-[56%_50%] transition duration-300", {
                "-scale-x-100": a.isUnlocked
            }]),
            d: "M4.21913,6.85699 L5.46719,6.85699 L5.46719,4.60904 C5.46719,3.04945 6.46827,2.19354 7.66062,2.19354 C8.85055,2.19354 9.86619,3.04945 9.86619,4.60904 L9.86619,6.85699 L11.10875,6.85699 L11.10875,4.73287 C11.10875,2.27366 9.48122,1 7.66062,1 C5.8455,1 4.21913,2.27366 4.21913,4.73287 L4.21913,6.85699 Z"
        }, null, 2), r("path", {
            class: C(["origin-center transition duration-300", {
                "-translate-x-px": a.isUnlocked
            }]),
            d: "M4.54279,14.2793 L10.78394,14.2793 C11.79607,14.2793 12.3267,13.7365 12.3267,12.6438 L12.3267,7.92337 C12.3267,6.83432 11.79607,6.29701 10.78394,6.29701 L4.54279,6.29701 C3.529458,6.29701 3,6.83432 3,7.92337 L3,12.6438 C3,13.7365 3.529458,14.2793 4.54279,14.2793 Z"
        }, null, 2)]))])) : a.liveActivityType === "isPlaying" ? (h(), f("div", {
            key: 2,
            class: C(["origin-[20%_0%] pl-[9px] transition duration-300", {
                "scale-[1.20]": a.hasQuickPeek
            }])
        }, [r("div", {
            class: C(["ease transition duration-500", {
                "-scale-x-100": e.$playlist.isFlipped
            }])
        }, [r("div", {
            class: C(["ease transition duration-500", {
                "-scale-x-100": e.$playlist.isFlipped
            }])
        }, [r("div", {
            class: C(["ease transition duration-500", {
                "scale-[0.85] opacity-60": !e.$playlist.isPlaying
            }])
        }, [r("div", {
            class: "size-[22px] rounded-md !bg-cover transition-all duration-150",
            style: S(`background: url(${e.$playlist.track.album_art})`),
            onMouseenter: t[0] || (t[0] = (...o) => i.handleMouseAlbumEnter && i.handleMouseAlbumEnter(...o)),
            onMouseleave: t[1] || (t[1] = (...o) => i.handleMouseAlbumLeave && i.handleMouseAlbumLeave(...o)),
            onMouseup: t[2] || (t[2] = (...o) => i.handleMouseAlbumPress && i.handleMouseAlbumPress(...o))
        }, null, 36)], 2)], 2)], 2)], 2)) : L("", !0)]),
        _: 1
    })], 512), r("div", Ct, [b(T, {
        "enter-from-class": "opacity-0 blur-[10px] scale-x-0",
        "enter-active-class": "transition duration-300",
        "leave-active-class": "transition duration-250",
        "leave-to-class": "opacity-0 blur-sm scale-x-[0.25]"
    }, {
        default: y(() => [a.notificationType === "didConnectAirPods" ? (h(), f("div", Pt, Lt)) : a.liveActivityType === "isPlaying" ? (h(), f("div", Tt, [r("div", {
            class: "absolute inset-0 z-10 opacity-0 group-hover:opacity-100",
            onClick: t[3] || (t[3] = o => e.$playlist.toggle())
        }, [r("div", {
            class: C(["absolute inset-0 flex items-center justify-center pr-[9px] transition duration-400", {
                "scale-0 opacity-0 blur-sm": !e.$playlist.isPlaying
            }])
        }, Ot, 2), r("div", {
            class: C(["absolute inset-0 flex items-center justify-center pr-[9px] transition duration-400", {
                "scale-0 opacity-0 blur-sm": e.$playlist.isPlaying
            }])
        }, Dt, 2)]), r("div", Et, [r("div", {
            class: C(["ease size-0.5 max-h-5 animate-[playing_0.95s_ease_infinite] rounded-[1px] transition-all duration-500", {
                "pause !max-h-0.5": !e.$playlist.isPlaying
            }]),
            style: S(`background-image: linear-gradient(
                                   to bottom,
                                   ${e.$playlist.track.colors[0]},
                                   ${e.$playlist.track.colors[1]}
                               );
                           `)
        }, null, 6), r("div", {
            class: C(["ease size-0.5 max-h-5 animate-[playing_1.46s_ease_infinite] rounded-[1px] transition-all duration-500", {
                "pause !max-h-0.5": !e.$playlist.isPlaying
            }]),
            style: S(`background-image: linear-gradient(
                                   to bottom,
                                   ${e.$playlist.track.colors[0]},
                                   ${e.$playlist.track.colors[1]}
                               );
                           `)
        }, null, 6), r("div", {
            class: C(["ease size-0.5 max-h-5 animate-[playing_0.82s_ease_infinite] rounded-[1px] transition-all duration-500", {
                "pause !max-h-0.5": !e.$playlist.isPlaying
            }]),
            style: S(`background-image: linear-gradient(
                                   to bottom,
                                   ${e.$playlist.track.colors[0]},
                                   ${e.$playlist.track.colors[1]}
                               );
                           `)
        }, null, 6), r("div", {
            class: C(["ease size-0.5 max-h-5 animate-[playing_1.24s_ease_infinite] rounded-[1px] transition-all duration-500", {
                "pause !max-h-0.5": !e.$playlist.isPlaying
            }]),
            style: S(`background-image: linear-gradient(
                                   to bottom,
                                   ${e.$playlist.track.colors[0]},
                                   ${e.$playlist.track.colors[1]}
                               );
                           `)
        }, null, 6)])])) : L("", !0)]),
        _: 1
    })], 512), r("div", St, [e.$playlist.tracks ? (h(), f("div", Wt, [r("div", Bt, [jt, r("span", null, O(e.$playlist.track.name), 1), zt, r("span", null, O(e.$playlist.track.artist), 1)]), r("div", Ft, [Zt, r("span", null, O(e.$playlist.track.name), 1), Yt, r("span", null, O(e.$playlist.track.artist), 1)])], 512)) : L("", !0)], 512)], 512)], 2)], 544)
}
const Vt = N(vt, [
        ["render", Nt]
    ]),
    qt = {
        props: {
            margin: {
                type: String,
                default: "0px 0px 0px 0px"
            },
            threshold: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                observer: null,
                isIntersecting: !1
            }
        },
        mounted() {
            const e = {
                root: null,
                rootMargin: this.margin,
                threshold: this.threshold
            };
            this.observer = new IntersectionObserver(this.handleObserve, e), this.observer.observe(this.$refs.observer)
        },
        beforeUnmount() {
            this.observer.unobserve(this.$refs.observer)
        },
        methods: {
            handleObserve(e) {
                e.forEach(t => {
                    t.isIntersecting ? this.isIntersecting = !0 : this.isIntersecting = !1
                })
            }
        }
    },
    It = {
        ref: "observer"
    };

function Rt(e, t, n, s, a, i) {
    return h(), f("div", It, [ne(e.$slots, "default", {
        isIntersecting: a.isIntersecting
    })], 512)
}
const Ut = N(qt, [
        ["render", Rt]
    ]),
    Qt = {
        props: {
            label: {
                type: String,
                default: "Label"
            },
            placement: {
                type: String,
                default: "bottom",
                validator(e) {
                    return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"].includes(e)
                }
            },
            offset: {
                type: Number,
                default: 8
            },
            hideDelay: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                visible: !1,
                position: {
                    left: 0,
                    top: 0
                },
                triggerElm: null,
                contentElm: null,
                hideTimer: null
            }
        },
        computed: {
            style() {
                return { ...this.position
                }
            },
            origin() {
                return this.getOrigin(this.placement)
            }
        },
        mounted() {
            this.initEvent()
        },
        methods: {
            getPlacement(e) {
                return e.split("-")[0]
            },
            getVariation(e) {
                return e.split("-")[1]
            },
            getMainAxis(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "left" : "top"
            },
            getOrigin(e) {
                return {
                    top: "origin-bottom",
                    "top-left": "origin-bottom-left",
                    "top-right": "origin-bottom-right",
                    bottom: "origin-top",
                    "bottom-left": "origin-top-left",
                    "bottom-right": "origin-top-right",
                    left: "origin-right",
                    "left-top": "origin-top-right",
                    "left-bottom": "origin-bottom-right",
                    right: "origin-left",
                    "right-top": "origin-top-left",
                    "right-bottom": "origin-bottom-left"
                }[e]
            },
            getPosition(e, t, n) {
                const s = this.getPlacement(n),
                    a = this.getVariation(n),
                    i = .5 * (e.offsetWidth - t.offsetWidth),
                    o = .5 * (e.offsetHeight - t.offsetHeight);
                let l;
                switch (s) {
                    case "top":
                        l = {
                            left: i,
                            top: -t.offsetHeight - this.offset
                        };
                        break;
                    case "bottom":
                        l = {
                            left: i,
                            top: this.offset + e.offsetHeight
                        };
                        break;
                    case "left":
                        l = {
                            left: -t.offsetWidth - this.offset,
                            top: o
                        };
                        break;
                    case "right":
                        l = {
                            left: this.offset + e.offsetWidth,
                            top: o
                        };
                        break
                }
                const c = this.getMainAxis(s),
                    u = c === "top" ? "offsetHeight" : "offsetWidth";
                switch (a) {
                    case "left":
                        l[c] = Math.floor(l[c]) - Math.floor(.5 * (e[u] - t[u]));
                        break;
                    case "right":
                        l[c] = Math.floor(l[c]) + Math.ceil(.5 * (e[u] - t[u]));
                        break
                }
                return l
            },
            show() {
                this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null), this.visible = !0, document.fonts.ready.then(() => {
                    this.$nextTick(() => {
                        const e = this.getPosition(this.triggerElm, this.contentElm, this.placement);
                        this.position = {
                            left: `${e.left}px`,
                            top: `${e.top}px`
                        }
                    })
                })
            },
            hide() {
                clearTimeout(this.hideTimer), this.hideTimer = setTimeout(() => {
                    this.visible = !1
                }, this.hideDelay)
            },
            initEvent() {
                this.triggerElm = this.$refs.trigger, this.contentElm = this.$refs.content, this.triggerElm.addEventListener("mouseenter", this.show), this.triggerElm.addEventListener("mouseleave", this.hide)
            }
        }
    },
    Gt = {
        class: "relative inline-flex select-none items-center"
    },
    Xt = {
        ref: "trigger",
        class: "flex w-full items-center justify-center"
    };

function Jt(e, t, n, s, a, i) {
    return h(), f("div", Gt, [r("span", Xt, [ne(e.$slots, "trigger")], 512), b(T, {
        "enter-from-class": "scale-90 opacity-0",
        "enter-active-class": "transition duration-200",
        "leave-active-class": "transition duration-200",
        "leave-to-class": "scale-90 opacity-0"
    }, {
        default: y(() => [$e(r("div", {
            ref: "content",
            class: C(["absolute z-50 flex min-w-min flex-col whitespace-nowrap rounded-xl bg-stone-950/65 px-3 py-1 text-sm font-medium text-orange-50 shadow-lg shadow-stone-950/20 backdrop-blur-sm", i.origin]),
            style: S(i.style)
        }, [ne(e.$slots, "content", {}, () => [v(O(n.label), 1)])], 6), [
            [Le, a.visible]
        ])]),
        _: 3
    })])
}
const Kt = N(Qt, [
        ["render", Jt]
    ]),
    be = 6048e5,
    en = 864e5,
    oe = Symbol.for("constructDateFrom");

function B(e, t) {
    return typeof e == "function" ? e(t) : e && typeof e == "object" && oe in e ? e[oe](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
}

function A(e, t) {
    return B(t || e, e)
}
let tn = {};

function J() {
    return tn
}

function U(e, t) {
    var l, c, u, d;
    const n = J(),
        s = (t == null ? void 0 : t.weekStartsOn) ? ? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ? ? n.weekStartsOn ? ? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ? ? 0,
        a = A(e, t == null ? void 0 : t.in),
        i = a.getDay(),
        o = (i < s ? 7 : 0) + i - s;
    return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
}

function X(e, t) {
    return U(e, { ...t,
        weekStartsOn: 1
    })
}

function ye(e, t) {
    const n = A(e, t == null ? void 0 : t.in),
        s = n.getFullYear(),
        a = B(n, 0);
    a.setFullYear(s + 1, 0, 4), a.setHours(0, 0, 0, 0);
    const i = X(a),
        o = B(n, 0);
    o.setFullYear(s, 0, 4), o.setHours(0, 0, 0, 0);
    const l = X(o);
    return n.getTime() >= i.getTime() ? s + 1 : n.getTime() >= l.getTime() ? s : s - 1
}

function le(e) {
    const t = A(e),
        n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()), +e - +n
}

function nn(e, ...t) {
    const n = B.bind(null, t.find(s => typeof s == "object"));
    return t.map(n)
}

function ce(e, t) {
    const n = A(e, t == null ? void 0 : t.in);
    return n.setHours(0, 0, 0, 0), n
}

function sn(e, t, n) {
    const [s, a] = nn(n == null ? void 0 : n.in, e, t), i = ce(s), o = ce(a), l = +i - le(i), c = +o - le(o);
    return Math.round((l - c) / en)
}

function rn(e, t) {
    const n = ye(e, t),
        s = B(e, 0);
    return s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0), X(s)
}

function an(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}

function on(e) {
    return !(!an(e) && typeof e != "number" || isNaN(+A(e)))
}

function ln(e, t) {
    const n = A(e, t == null ? void 0 : t.in);
    return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
}
const cn = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    un = (e, t, n) => {
        let s;
        const a = cn[e];
        return typeof a == "string" ? s = a : t === 1 ? s = a.one : s = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + s : s + " ago" : s
    };

function te(e) {
    return (t = {}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth]
    }
}
const dn = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    hn = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    fn = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    mn = {
        date: te({
            formats: dn,
            defaultWidth: "full"
        }),
        time: te({
            formats: hn,
            defaultWidth: "full"
        }),
        dateTime: te({
            formats: fn,
            defaultWidth: "full"
        })
    },
    gn = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    pn = (e, t, n, s) => gn[e];

function q(e) {
    return (t, n) => {
        const s = n != null && n.context ? String(n.context) : "standalone";
        let a;
        if (s === "formatting" && e.formattingValues) {
            const o = e.defaultFormattingWidth || e.defaultWidth,
                l = n != null && n.width ? String(n.width) : o;
            a = e.formattingValues[l] || e.formattingValues[o]
        } else {
            const o = e.defaultWidth,
                l = n != null && n.width ? String(n.width) : e.defaultWidth;
            a = e.values[l] || e.values[o]
        }
        const i = e.argumentCallback ? e.argumentCallback(t) : t;
        return a[i]
    }
}
const vn = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    wn = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    xn = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    bn = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    yn = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    _n = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    kn = (e, t) => {
        const n = Number(e),
            s = n % 100;
        if (s > 20 || s < 10) switch (s % 10) {
            case 1:
                return n + "st";
            case 2:
                return n + "nd";
            case 3:
                return n + "rd"
        }
        return n + "th"
    },
    Mn = {
        ordinalNumber: kn,
        era: q({
            values: vn,
            defaultWidth: "wide"
        }),
        quarter: q({
            values: wn,
            defaultWidth: "wide",
            argumentCallback: e => e - 1
        }),
        month: q({
            values: xn,
            defaultWidth: "wide"
        }),
        day: q({
            values: bn,
            defaultWidth: "wide"
        }),
        dayPeriod: q({
            values: yn,
            defaultWidth: "wide",
            formattingValues: _n,
            defaultFormattingWidth: "wide"
        })
    };

function I(e) {
    return (t, n = {}) => {
        const s = n.width,
            a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth],
            i = t.match(a);
        if (!i) return null;
        const o = i[0],
            l = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth],
            c = Array.isArray(l) ? Pn(l, g => g.test(o)) : Cn(l, g => g.test(o));
        let u;
        u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? n.valueCallback(u) : u;
        const d = t.slice(o.length);
        return {
            value: u,
            rest: d
        }
    }
}

function Cn(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n
}

function Pn(e, t) {
    for (let n = 0; n < e.length; n++)
        if (t(e[n])) return n
}

function $n(e) {
    return (t, n = {}) => {
        const s = t.match(e.matchPattern);
        if (!s) return null;
        const a = s[0],
            i = t.match(e.parsePattern);
        if (!i) return null;
        let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
        o = n.valueCallback ? n.valueCallback(o) : o;
        const l = t.slice(a.length);
        return {
            value: o,
            rest: l
        }
    }
}
const Ln = /^(\d+)(th|st|nd|rd)?/i,
    Tn = /\d+/i,
    Hn = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    On = {
        any: [/^b/i, /^(a|c)/i]
    },
    An = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    Dn = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    En = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    Sn = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    Wn = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    Bn = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    jn = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    zn = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    Fn = {
        ordinalNumber: $n({
            matchPattern: Ln,
            parsePattern: Tn,
            valueCallback: e => parseInt(e, 10)
        }),
        era: I({
            matchPatterns: Hn,
            defaultMatchWidth: "wide",
            parsePatterns: On,
            defaultParseWidth: "any"
        }),
        quarter: I({
            matchPatterns: An,
            defaultMatchWidth: "wide",
            parsePatterns: Dn,
            defaultParseWidth: "any",
            valueCallback: e => e + 1
        }),
        month: I({
            matchPatterns: En,
            defaultMatchWidth: "wide",
            parsePatterns: Sn,
            defaultParseWidth: "any"
        }),
        day: I({
            matchPatterns: Wn,
            defaultMatchWidth: "wide",
            parsePatterns: Bn,
            defaultParseWidth: "any"
        }),
        dayPeriod: I({
            matchPatterns: jn,
            defaultMatchWidth: "any",
            parsePatterns: zn,
            defaultParseWidth: "any"
        })
    },
    Zn = {
        code: "en-US",
        formatDistance: un,
        formatLong: mn,
        formatRelative: pn,
        localize: Mn,
        match: Fn,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };

function Yn(e, t) {
    const n = A(e, t == null ? void 0 : t.in);
    return sn(n, ln(n)) + 1
}

function Nn(e, t) {
    const n = A(e, t == null ? void 0 : t.in),
        s = +X(n) - +rn(n);
    return Math.round(s / be) + 1
}

function _e(e, t) {
    var d, g, m, x;
    const n = A(e, t == null ? void 0 : t.in),
        s = n.getFullYear(),
        a = J(),
        i = (t == null ? void 0 : t.firstWeekContainsDate) ? ? ((g = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : g.firstWeekContainsDate) ? ? a.firstWeekContainsDate ? ? ((x = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : x.firstWeekContainsDate) ? ? 1,
        o = B((t == null ? void 0 : t.in) || e, 0);
    o.setFullYear(s + 1, 0, i), o.setHours(0, 0, 0, 0);
    const l = U(o, t),
        c = B((t == null ? void 0 : t.in) || e, 0);
    c.setFullYear(s, 0, i), c.setHours(0, 0, 0, 0);
    const u = U(c, t);
    return +n >= +l ? s + 1 : +n >= +u ? s : s - 1
}

function Vn(e, t) {
    var l, c, u, d;
    const n = J(),
        s = (t == null ? void 0 : t.firstWeekContainsDate) ? ? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ? ? n.firstWeekContainsDate ? ? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ? ? 1,
        a = _e(e, t),
        i = B((t == null ? void 0 : t.in) || e, 0);
    return i.setFullYear(a, 0, s), i.setHours(0, 0, 0, 0), U(i, t)
}

function qn(e, t) {
    const n = A(e, t == null ? void 0 : t.in),
        s = +U(n, t) - +Vn(n, t);
    return Math.round(s / be) + 1
}

function p(e, t) {
    const n = e < 0 ? "-" : "",
        s = Math.abs(e).toString().padStart(t, "0");
    return n + s
}
const W = {
        y(e, t) {
            const n = e.getFullYear(),
                s = n > 0 ? n : 1 - n;
            return p(t === "yy" ? s % 100 : s, t.length)
        },
        M(e, t) {
            const n = e.getMonth();
            return t === "M" ? String(n + 1) : p(n + 1, 2)
        },
        d(e, t) {
            return p(e.getDate(), t.length)
        },
        a(e, t) {
            const n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.toUpperCase();
                case "aaa":
                    return n;
                case "aaaaa":
                    return n[0];
                case "aaaa":
                default:
                    return n === "am" ? "a.m." : "p.m."
            }
        },
        h(e, t) {
            return p(e.getHours() % 12 || 12, t.length)
        },
        H(e, t) {
            return p(e.getHours(), t.length)
        },
        m(e, t) {
            return p(e.getMinutes(), t.length)
        },
        s(e, t) {
            return p(e.getSeconds(), t.length)
        },
        S(e, t) {
            const n = t.length,
                s = e.getMilliseconds(),
                a = Math.trunc(s * Math.pow(10, n - 3));
            return p(a, t.length)
        }
    },
    Z = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    ue = {
        G: function(e, t, n) {
            const s = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    return n.era(s, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return n.era(s, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return n.era(s, {
                        width: "wide"
                    })
            }
        },
        y: function(e, t, n) {
            if (t === "yo") {
                const s = e.getFullYear(),
                    a = s > 0 ? s : 1 - s;
                return n.ordinalNumber(a, {
                    unit: "year"
                })
            }
            return W.y(e, t)
        },
        Y: function(e, t, n, s) {
            const a = _e(e, s),
                i = a > 0 ? a : 1 - a;
            if (t === "YY") {
                const o = i % 100;
                return p(o, 2)
            }
            return t === "Yo" ? n.ordinalNumber(i, {
                unit: "year"
            }) : p(i, t.length)
        },
        R: function(e, t) {
            const n = ye(e);
            return p(n, t.length)
        },
        u: function(e, t) {
            const n = e.getFullYear();
            return p(n, t.length)
        },
        Q: function(e, t, n) {
            const s = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
                case "Q":
                    return String(s);
                case "QQ":
                    return p(s, 2);
                case "Qo":
                    return n.ordinalNumber(s, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return n.quarter(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return n.quarter(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return n.quarter(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(e, t, n) {
            const s = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
                case "q":
                    return String(s);
                case "qq":
                    return p(s, 2);
                case "qo":
                    return n.ordinalNumber(s, {
                        unit: "quarter"
                    });
                case "qqq":
                    return n.quarter(s, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return n.quarter(s, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return n.quarter(s, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(e, t, n) {
            const s = e.getMonth();
            switch (t) {
                case "M":
                case "MM":
                    return W.M(e, t);
                case "Mo":
                    return n.ordinalNumber(s + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return n.month(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return n.month(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return n.month(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(e, t, n) {
            const s = e.getMonth();
            switch (t) {
                case "L":
                    return String(s + 1);
                case "LL":
                    return p(s + 1, 2);
                case "Lo":
                    return n.ordinalNumber(s + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return n.month(s, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return n.month(s, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return n.month(s, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(e, t, n, s) {
            const a = qn(e, s);
            return t === "wo" ? n.ordinalNumber(a, {
                unit: "week"
            }) : p(a, t.length)
        },
        I: function(e, t, n) {
            const s = Nn(e);
            return t === "Io" ? n.ordinalNumber(s, {
                unit: "week"
            }) : p(s, t.length)
        },
        d: function(e, t, n) {
            return t === "do" ? n.ordinalNumber(e.getDate(), {
                unit: "date"
            }) : W.d(e, t)
        },
        D: function(e, t, n) {
            const s = Yn(e);
            return t === "Do" ? n.ordinalNumber(s, {
                unit: "dayOfYear"
            }) : p(s, t.length)
        },
        E: function(e, t, n) {
            const s = e.getDay();
            switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return n.day(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return n.day(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return n.day(s, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return n.day(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(e, t, n, s) {
            const a = e.getDay(),
                i = (a - s.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "e":
                    return String(i);
                case "ee":
                    return p(i, 2);
                case "eo":
                    return n.ordinalNumber(i, {
                        unit: "day"
                    });
                case "eee":
                    return n.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return n.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return n.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return n.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(e, t, n, s) {
            const a = e.getDay(),
                i = (a - s.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "c":
                    return String(i);
                case "cc":
                    return p(i, t.length);
                case "co":
                    return n.ordinalNumber(i, {
                        unit: "day"
                    });
                case "ccc":
                    return n.day(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return n.day(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return n.day(a, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return n.day(a, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(e, t, n) {
            const s = e.getDay(),
                a = s === 0 ? 7 : s;
            switch (t) {
                case "i":
                    return String(a);
                case "ii":
                    return p(a, t.length);
                case "io":
                    return n.ordinalNumber(a, {
                        unit: "day"
                    });
                case "iii":
                    return n.day(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return n.day(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return n.day(s, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return n.day(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(e, t, n) {
            const a = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return n.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return n.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(e, t, n) {
            const s = e.getHours();
            let a;
            switch (s === 12 ? a = Z.noon : s === 0 ? a = Z.midnight : a = s / 12 >= 1 ? "pm" : "am", t) {
                case "b":
                case "bb":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return n.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return n.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(e, t, n) {
            const s = e.getHours();
            let a;
            switch (s >= 17 ? a = Z.evening : s >= 12 ? a = Z.afternoon : s >= 4 ? a = Z.morning : a = Z.night, t) {
                case "B":
                case "BB":
                case "BBB":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return n.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return n.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(e, t, n) {
            if (t === "ho") {
                let s = e.getHours() % 12;
                return s === 0 && (s = 12), n.ordinalNumber(s, {
                    unit: "hour"
                })
            }
            return W.h(e, t)
        },
        H: function(e, t, n) {
            return t === "Ho" ? n.ordinalNumber(e.getHours(), {
                unit: "hour"
            }) : W.H(e, t)
        },
        K: function(e, t, n) {
            const s = e.getHours() % 12;
            return t === "Ko" ? n.ordinalNumber(s, {
                unit: "hour"
            }) : p(s, t.length)
        },
        k: function(e, t, n) {
            let s = e.getHours();
            return s === 0 && (s = 24), t === "ko" ? n.ordinalNumber(s, {
                unit: "hour"
            }) : p(s, t.length)
        },
        m: function(e, t, n) {
            return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
                unit: "minute"
            }) : W.m(e, t)
        },
        s: function(e, t, n) {
            return t === "so" ? n.ordinalNumber(e.getSeconds(), {
                unit: "second"
            }) : W.s(e, t)
        },
        S: function(e, t) {
            return W.S(e, t)
        },
        X: function(e, t, n) {
            const s = e.getTimezoneOffset();
            if (s === 0) return "Z";
            switch (t) {
                case "X":
                    return he(s);
                case "XXXX":
                case "XX":
                    return z(s);
                case "XXXXX":
                case "XXX":
                default:
                    return z(s, ":")
            }
        },
        x: function(e, t, n) {
            const s = e.getTimezoneOffset();
            switch (t) {
                case "x":
                    return he(s);
                case "xxxx":
                case "xx":
                    return z(s);
                case "xxxxx":
                case "xxx":
                default:
                    return z(s, ":")
            }
        },
        O: function(e, t, n) {
            const s = e.getTimezoneOffset();
            switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + de(s, ":");
                case "OOOO":
                default:
                    return "GMT" + z(s, ":")
            }
        },
        z: function(e, t, n) {
            const s = e.getTimezoneOffset();
            switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + de(s, ":");
                case "zzzz":
                default:
                    return "GMT" + z(s, ":")
            }
        },
        t: function(e, t, n) {
            const s = Math.trunc(+e / 1e3);
            return p(s, t.length)
        },
        T: function(e, t, n) {
            return p(+e, t.length)
        }
    };

function de(e, t = "") {
    const n = e > 0 ? "-" : "+",
        s = Math.abs(e),
        a = Math.trunc(s / 60),
        i = s % 60;
    return i === 0 ? n + String(a) : n + String(a) + t + p(i, 2)
}

function he(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + p(Math.abs(e) / 60, 2) : z(e, t)
}

function z(e, t = "") {
    const n = e > 0 ? "-" : "+",
        s = Math.abs(e),
        a = p(Math.trunc(s / 60), 2),
        i = p(s % 60, 2);
    return n + a + t + i
}
const fe = (e, t) => {
        switch (e) {
            case "P":
                return t.date({
                    width: "short"
                });
            case "PP":
                return t.date({
                    width: "medium"
                });
            case "PPP":
                return t.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return t.date({
                    width: "full"
                })
        }
    },
    ke = (e, t) => {
        switch (e) {
            case "p":
                return t.time({
                    width: "short"
                });
            case "pp":
                return t.time({
                    width: "medium"
                });
            case "ppp":
                return t.time({
                    width: "long"
                });
            case "pppp":
            default:
                return t.time({
                    width: "full"
                })
        }
    },
    In = (e, t) => {
        const n = e.match(/(P+)(p+)?/) || [],
            s = n[1],
            a = n[2];
        if (!a) return fe(e, t);
        let i;
        switch (s) {
            case "P":
                i = t.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                i = t.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                i = t.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                i = t.dateTime({
                    width: "full"
                });
                break
        }
        return i.replace("{{date}}", fe(s, t)).replace("{{time}}", ke(a, t))
    },
    Rn = {
        p: ke,
        P: In
    },
    Un = /^D+$/,
    Qn = /^Y+$/,
    Gn = ["D", "DD", "YY", "YYYY"];

function Xn(e) {
    return Un.test(e)
}

function Jn(e) {
    return Qn.test(e)
}

function Kn(e, t, n) {
    const s = es(e, t, n);
    if (console.warn(s), Gn.includes(e)) throw new RangeError(s)
}

function es(e, t, n) {
    const s = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${s} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const ts = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    ns = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    ss = /^'([^]*?)'?$/,
    rs = /''/g,
    as = /[a-zA-Z]/;

function is(e, t, n) {
    var d, g, m, x, w, k, H, D;
    const s = J(),
        a = (n == null ? void 0 : n.locale) ? ? s.locale ? ? Zn,
        i = (n == null ? void 0 : n.firstWeekContainsDate) ? ? ((g = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : g.firstWeekContainsDate) ? ? s.firstWeekContainsDate ? ? ((x = (m = s.locale) == null ? void 0 : m.options) == null ? void 0 : x.firstWeekContainsDate) ? ? 1,
        o = (n == null ? void 0 : n.weekStartsOn) ? ? ((k = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : k.weekStartsOn) ? ? s.weekStartsOn ? ? ((D = (H = s.locale) == null ? void 0 : H.options) == null ? void 0 : D.weekStartsOn) ? ? 0,
        l = A(e, n == null ? void 0 : n.in);
    if (!on(l)) throw new RangeError("Invalid time value");
    let c = t.match(ns).map(P => {
        const _ = P[0];
        if (_ === "p" || _ === "P") {
            const V = Rn[_];
            return V(P, a.formatLong)
        }
        return P
    }).join("").match(ts).map(P => {
        if (P === "''") return {
            isToken: !1,
            value: "'"
        };
        const _ = P[0];
        if (_ === "'") return {
            isToken: !1,
            value: os(P)
        };
        if (ue[_]) return {
            isToken: !0,
            value: P
        };
        if (_.match(as)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + _ + "`");
        return {
            isToken: !1,
            value: P
        }
    });
    a.localize.preprocessor && (c = a.localize.preprocessor(l, c));
    const u = {
        firstWeekContainsDate: i,
        weekStartsOn: o,
        locale: a
    };
    return c.map(P => {
        if (!P.isToken) return P.value;
        const _ = P.value;
        (!(n != null && n.useAdditionalWeekYearTokens) && Jn(_) || !(n != null && n.useAdditionalDayOfYearTokens) && Xn(_)) && Kn(_, t, String(e));
        const V = ue[_[0]];
        return V(l, _, a.localize, u)
    }).join("")
}

function os(e) {
    const t = e.match(ss);
    return t ? t[1].replace(rs, "'") : e
}

function ls({
    topLeftCornerRadius: e,
    topRightCornerRadius: t,
    bottomRightCornerRadius: n,
    bottomLeftCornerRadius: s,
    width: a,
    height: i
}) {
    const o = {
            topLeft: -1,
            topRight: -1,
            bottomLeft: -1,
            bottomRight: -1
        },
        l = {
            topLeft: e,
            topRight: t,
            bottomLeft: s,
            bottomRight: n
        };
    return Object.entries(l).sort(([, c], [, u]) => u - c).forEach(([c, u]) => {
        const d = c,
            g = cs[d],
            m = Math.min(...g.map(x => {
                const w = l[x.corner];
                if (u === 0 && w === 0) return 0;
                const k = o[x.corner],
                    H = x.side === "top" || x.side === "bottom" ? a : i;
                return k >= 0 ? H - o[x.corner] : u / (u + w) * H
            }));
        o[d] = m, l[d] = Math.min(u, m)
    }), {
        topLeft: {
            radius: l.topLeft,
            roundingAndSmoothingBudget: o.topLeft
        },
        topRight: {
            radius: l.topRight,
            roundingAndSmoothingBudget: o.topRight
        },
        bottomLeft: {
            radius: l.bottomLeft,
            roundingAndSmoothingBudget: o.bottomLeft
        },
        bottomRight: {
            radius: l.bottomRight,
            roundingAndSmoothingBudget: o.bottomRight
        }
    }
}
var cs = {
    topLeft: [{
        corner: "topRight",
        side: "top"
    }, {
        corner: "bottomLeft",
        side: "left"
    }],
    topRight: [{
        corner: "topLeft",
        side: "top"
    }, {
        corner: "bottomRight",
        side: "right"
    }],
    bottomLeft: [{
        corner: "bottomRight",
        side: "bottom"
    }, {
        corner: "topLeft",
        side: "left"
    }],
    bottomRight: [{
        corner: "bottomLeft",
        side: "bottom"
    }, {
        corner: "topRight",
        side: "right"
    }]
};

function R({
    cornerRadius: e,
    cornerSmoothing: t,
    preserveSmoothing: n,
    roundingAndSmoothingBudget: s
}) {
    let a = (1 + t) * e;
    if (!n) {
        const w = s / e - 1;
        t = Math.min(t, w), a = Math.min(a, s)
    }
    const i = 90 * (1 - t),
        o = Math.sin(Q(i / 2)) * e * Math.sqrt(2),
        l = (90 - i) / 2,
        c = e * Math.tan(Q(l / 2)),
        u = 45 * t,
        d = c * Math.cos(Q(u)),
        g = d * Math.tan(Q(u));
    let m = (a - o - d - g) / 3,
        x = 2 * m;
    if (n && a > s) {
        const w = s - g - o - d,
            k = w / 6,
            H = w - k;
        m = Math.min(m, H), x = w - m, a = Math.min(a, s)
    }
    return {
        a: x,
        b: m,
        c: d,
        d: g,
        p: a,
        arcSectionLength: o,
        cornerRadius: e
    }
}

function me({
    width: e,
    height: t,
    topLeftPathParams: n,
    topRightPathParams: s,
    bottomLeftPathParams: a,
    bottomRightPathParams: i
}) {
    return `
    M ${e-s.p} 0
    ${us(s)}
    L ${e} ${t-i.p}
    ${ds(i)}
    L ${a.p} ${t}
    ${hs(a)}
    L 0 ${n.p}
    ${fs(n)}
    Z
  `.replace(/[\t\s\n]+/g, " ").trim()
}

function us({
    cornerRadius: e,
    a: t,
    b: n,
    c: s,
    d: a,
    p: i,
    arcSectionLength: o
}) {
    return e ? j `
    c ${t} 0 ${t+n} 0 ${t+n+s} ${a}
    a ${e} ${e} 0 0 1 ${o} ${o}
    c ${a} ${s}
        ${a} ${n+s}
        ${a} ${t+n+s}` : j `l ${i} 0`
}

function ds({
    cornerRadius: e,
    a: t,
    b: n,
    c: s,
    d: a,
    p: i,
    arcSectionLength: o
}) {
    return e ? j `
    c 0 ${t}
      0 ${t+n}
      ${-a} ${t+n+s}
    a ${e} ${e} 0 0 1 -${o} ${o}
    c ${-s} ${a}
      ${-(n+s)} ${a}
      ${-(t+n+s)} ${a}` : j `l 0 ${i}`
}

function hs({
    cornerRadius: e,
    a: t,
    b: n,
    c: s,
    d: a,
    p: i,
    arcSectionLength: o
}) {
    return e ? j `
    c ${-t} 0
      ${-(t+n)} 0
      ${-(t+n+s)} ${-a}
    a ${e} ${e} 0 0 1 -${o} -${o}
    c ${-a} ${-s}
      ${-a} ${-(n+s)}
      ${-a} ${-(t+n+s)}` : j `l ${-i} 0`
}

function fs({
    cornerRadius: e,
    a: t,
    b: n,
    c: s,
    d: a,
    p: i,
    arcSectionLength: o
}) {
    return e ? j `
    c 0 ${-t}
      0 ${-(t+n)}
      ${a} ${-(t+n+s)}
    a ${e} ${e} 0 0 1 ${o} -${o}
    c ${s} ${-a}
      ${n+s} ${-a}
      ${t+n+s} ${-a}` : j `l 0 ${-i}`
}

function Q(e) {
    return e * Math.PI / 180
}

function j(e, ...t) {
    return e.reduce((n, s, a) => {
        const i = t[a];
        return typeof i == "number" ? n + s + i.toFixed(4) : n + s + (i ? ? "")
    }, "")
}

function ms({
    cornerRadius: e = 0,
    topLeftCornerRadius: t,
    topRightCornerRadius: n,
    bottomRightCornerRadius: s,
    bottomLeftCornerRadius: a,
    cornerSmoothing: i,
    width: o,
    height: l,
    preserveSmoothing: c = !1
}) {
    if (t = t ? ? e, n = n ? ? e, a = a ? ? e, s = s ? ? e, t === n && n === s && s === a && a === t) {
        const x = Math.min(o, l) / 2,
            w = Math.min(t, x),
            k = R({
                cornerRadius: w,
                cornerSmoothing: i,
                preserveSmoothing: c,
                roundingAndSmoothingBudget: x
            });
        return me({
            width: o,
            height: l,
            topLeftPathParams: k,
            topRightPathParams: k,
            bottomLeftPathParams: k,
            bottomRightPathParams: k
        })
    }
    const {
        topLeft: u,
        topRight: d,
        bottomLeft: g,
        bottomRight: m
    } = ls({
        topLeftCornerRadius: t,
        topRightCornerRadius: n,
        bottomRightCornerRadius: s,
        bottomLeftCornerRadius: a,
        width: o,
        height: l
    });
    return me({
        width: o,
        height: l,
        topLeftPathParams: R({
            cornerSmoothing: i,
            preserveSmoothing: c,
            cornerRadius: u.radius,
            roundingAndSmoothingBudget: u.roundingAndSmoothingBudget
        }),
        topRightPathParams: R({
            cornerSmoothing: i,
            preserveSmoothing: c,
            cornerRadius: d.radius,
            roundingAndSmoothingBudget: d.roundingAndSmoothingBudget
        }),
        bottomRightPathParams: R({
            cornerSmoothing: i,
            preserveSmoothing: c,
            cornerRadius: m.radius,
            roundingAndSmoothingBudget: m.roundingAndSmoothingBudget
        }),
        bottomLeftPathParams: R({
            cornerSmoothing: i,
            preserveSmoothing: c,
            cornerRadius: g.radius,
            roundingAndSmoothingBudget: g.roundingAndSmoothingBudget
        })
    })
}
const gs = {
        components: {
            ButtonComponent: Te,
            CounterComponent: rt,
            MusicComponent: pt,
            NotchComponent: Vt,
            ObserverComponent: Ut,
            TooltipComponent: Kt
        },
        setup() {
            const e = "https://cdn.tryalcove.com",
                t = "https://buy.tryalcove.com/b/aEUaF94fr7D9dK8144",
                n = "14.99",
                s = Ze(Ye),
                a = s.greaterOrEqual("lg"),
                i = s.greaterOrEqual("md"),
                o = s.smallerOrEqual("sm");
            return {
                cdnUrl: e,
                stripeUrl: t,
                appPrice: n,
                lgAndLarger: a,
                mdAndLarger: i,
                smAndSmaller: o
            }
        },
        data() {
            return {
                format: is,
                scrollProgress: 0,
                heightDifference: 0,
                heroClipPath: null,
                hintHovered: !1,
                hintActive: !1,
                hintLeaving: !1,
                hintInterval: null,
                hintTimeout: null,
                purchaseTimeout: null,
                purchaseHasEntered: !1,
                badgeIsAnimating: !1,
                appIconFocused: !1,
                klackAppIconFocused: !1,
                isLocked: !0
            }
        },
        computed: {
            currentTemperature() {
                return this.$time.isNight ? 16 : 24
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), window.addEventListener("mouseup", this.handleMouseup), this.initHint(), this.$nextTick(() => {
                this.handleResize()
            }), this.$time.start(), this.$playlist.getTracks()
        },
        beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), window.removeEventListener("mouseup", this.handleMouseup), this.clearHint(), this.$time.stop()
        },
        methods: {
            handleScroll() {
                let e = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
                this.scrollProgress = e
            },
            handleResize() {
                this.heightDifference = this.$refs.image.offsetHeight - this.$refs.imageContainer.offsetHeight, this.calculateHeroClipPath()
            },
            initHint() {
                this.hintInterval = setInterval(() => {
                    this.hintActive = !0, this.hintTimeout = setTimeout(() => {
                        this.hintActive = !1, this.hintLeaving = !0
                    }, 1e3)
                }, 7e3)
            },
            clearHint() {
                this.hintActive = !1, clearInterval(this.hintInterval), clearInterval(this.hintTimeout)
            },
            handleHintEnter() {
                this.hintHovered = !0, this.clearHint()
            },
            handleHintLeave() {
                this.hintLeaving = !1, this.hintHovered = !1, this.initHint()
            },
            handlePurchaseEnter() {
                this.purchaseTimeout = setTimeout(() => {
                    this.purchaseHasEntered = !0
                }, 100)
            },
            handlePurchaseLeave() {
                clearTimeout(this.purchaseTimeout), this.purchaseHasEntered && !this.badgeIsAnimating && (this.purchaseHasEntered = !1, this.badgeIsAnimating = !0, M(this.$refs.badge, {
                    transform: ["rotate(0)", "rotate(45deg)"]
                }, {
                    duration: .5,
                    easing: "ease-out"
                }).finished.then(() => {
                    this.badgeIsAnimating = !1
                }))
            },
            handleDotEnter(e) {
                M(e, {
                    y: [10, 0]
                }, {
                    easing: $({
                        stiffness: 60,
                        damping: 6
                    }),
                    delay: .65
                })
            },
            handleMouseup() {
                this.appIconFocused = !1, this.klackAppIconFocused = !1
            },
            handleUnlockClick() {
                if (!this.isLocked) return;
                this.isLocked = !1, new ae.Howl({
                    src: [this.cdnUrl + "/sounds/unlock.wav"]
                }).play(), setTimeout(() => {
                    this.$emitter.emit("toggle-notification", {
                        state: !0,
                        type: "didConnectAirPods",
                        duration: 3500
                    }), new ae.Howl({
                        src: [this.cdnUrl + "/sounds/connect.wav"],
                        volume: .5
                    }).play(), setTimeout(() => {
                        this.$playlist.play()
                    }, 3750)
                }, 2e3)
            },
            calculateHeroClipPath() {
                this.heroClipPath = ms({
                    width: this.$refs.imageContainer.offsetWidth,
                    height: this.$refs.imageContainer.offsetHeight,
                    cornerRadius: 40,
                    cornerSmoothing: .65
                })
            }
        }
    },
    ps = {
        class: "flex w-full max-w-screen-xl flex-col items-center"
    },
    vs = {
        class: "mb-14 w-full sm:mb-20 xl:w-4/5 xl:max-w-screen-lg"
    },
    ws = {
        class: "relative text-center text-5xl font-bold leading-[1.05] tracking-tight opacity-0 delay-50 sm:text-8xl sm:leading-none"
    },
    xs = r("br", null, null, -1),
    bs = {
        class: "relative"
    },
    ys = {
        class: "absolute -bottom-0.5 -left-0.5 size-[3.25rem] overflow-visible fill-current sm:-bottom-1.5 sm:-left-2 sm:size-[6.25rem]",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    },
    _s = r("path", {
        d: "M14.806 4.108C15.413 3.389 15.842 2.39 15.842 1.392C15.842 1.254 15.83 1.113 15.805 1C14.818 1.037 13.644 1.657 12.935 2.478C12.38 3.11 11.861 4.108 11.861 5.121C11.861 5.273 11.887 5.425 11.898 5.474C11.961 5.485 12.062 5.499 12.164 5.499C13.049 5.499 14.162 4.906 14.806 4.109V4.108Z"
    }, null, -1),
    ks = r("path", {
        d: "M19.37 7.648C19.256 7.736 17.26 8.861 17.26 11.363C17.26 14.257 19.8 15.281 19.876 15.307C19.865 15.369 19.473 16.709 18.536 18.074C17.702 19.275 16.83 20.474 15.504 20.474C14.178 20.474 13.837 19.704 12.306 19.704C10.814 19.704 10.284 20.5 9.071 20.5C7.857 20.5 7.011 19.388 6.038 18.023C4.911 16.42 4 13.93 4 11.566C4 7.775 6.465 5.764 8.891 5.764C10.181 5.764 11.255 6.611 12.064 6.611C12.834 6.611 14.036 5.714 15.502 5.714C16.058 5.714 18.055 5.764 19.369 7.648H19.37Z"
    }, null, -1),
    Ms = r("span", {
        class: "pl-[46px] sm:pl-[5.25rem]"
    }, "Mac", -1),
    Cs = {
        class: "mt-14 flex flex-col items-center justify-center space-y-6 opacity-0 delay-700 sm:mt-12 sm:flex-row sm:space-x-7 sm:space-y-0"
    },
    Ps = r("div", {
        class: "ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm"
    }, [r("svg", {
        class: "h-6 w-6 fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"
    })])], -1),
    $s = {
        class: "ease translate-x-0 transition duration-300 group-hover:-translate-x-8"
    },
    Ls = r("span", null, "for Mac", -1),
    Ts = r("div", {
        class: "ease absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
    }, [r("svg", {
        class: "h-6 w-6 fill-transparent stroke-current stroke-2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    })])], -1),
    Hs = {
        class: "mr-2.5 h-[22px] w-[22px] fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    },
    Os = {
        ref: "badge",
        class: "origin-center fill-current"
    },
    As = r("path", {
        class: "group-hover:running pause ease origin-center animate-rotate text-orange-950/25 transition duration-300 group-hover:text-rose-400/75",
        d: "M7.21 24.471h2.542c.235 0 .41.07.586.246l1.805 1.793c1.477 1.488 2.848 1.477 4.324 0l1.805-1.793c.188-.175.352-.246.598-.246h2.53c2.099 0 3.071-.96 3.071-3.07V18.87c0-.247.07-.41.246-.598l1.793-1.805c1.488-1.476 1.477-2.847 0-4.324l-1.793-1.805a.763.763 0 0 1-.246-.586V7.21c0-2.085-.96-3.07-3.07-3.07H18.87a.777.777 0 0 1-.598-.234l-1.805-1.793c-1.476-1.488-2.847-1.477-4.324 0l-1.805 1.793a.752.752 0 0 1-.586.234H7.21c-2.097 0-3.07.961-3.07 3.07v2.543c0 .235-.058.41-.234.586l-1.793 1.805c-1.488 1.477-1.477 2.848 0 4.324l1.793 1.805a.777.777 0 0 1 .234.598v2.53c0 2.099.973 3.071 3.07 3.071Z"
    }, null, -1),
    Ds = [As],
    Es = r("path", {
        class: "text-[#f5e5d5]",
        d: "M12.998 20.03c-.398 0-.726-.153-1.03-.563l-2.942-3.61c-.176-.233-.281-.503-.281-.76 0-.54.41-.973.949-.973.328 0 .586.117.879.503l2.379 3.07 5.004-8.038c.222-.364.527-.54.843-.54.504 0 .985.352.985.891 0 .27-.153.54-.293.774l-5.508 8.683c-.246.375-.586.563-.985.563Z"
    }, null, -1),
    Ss = r("span", null, "Purchase", -1),
    Ws = {
        class: "ml-3.5 rounded-lg bg-stone-800 px-2 py-1 text-sm tracking-wide text-orange-75"
    },
    Bs = {
        key: 1,
        class: "group flex select-none flex-col items-center justify-center outline-none"
    },
    js = r("p", {
        class: "text-sm font-bold text-orange-950/40"
    }, "Trial available", -1),
    zs = r("div", {
        class: "-ml-2 mt-0.5 flex items-center justify-center"
    }, [r("svg", {
        class: "ease mr-1 size-[22px] fill-current text-orange-950/30",
        viewBox: "0 0 29 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M7.82422 15.2188C7.35547 15.2188 7.00391 14.8672 7.00391 14.3984C7.00391 13.9414 7.35547 13.5898 7.82422 13.5898H13.1328V6.5C13.1328 6.04297 13.4844 5.69141 13.9414 5.69141C14.3984 5.69141 14.7617 6.04297 14.7617 6.5V14.3984C14.7617 14.8672 14.3984 15.2188 13.9414 15.2188H7.82422ZM13.9531 25.9062C20.4922 25.9062 25.9062 20.4805 25.9062 13.9531C25.9062 7.41406 20.4805 2 13.9414 2C7.41406 2 2 7.41406 2 13.9531C2 20.4805 7.42578 25.9062 13.9531 25.9062Z"
    })]), r("p", {
        class: "text-lg font-bold leading-tight text-orange-950/60"
    }, " 72h duration ")], -1),
    Fs = [js, zs],
    Zs = {
        class: "isolate flex w-full select-none flex-col items-center px-0 opacity-0 delay-[900ms] lg:px-8"
    },
    Ys = {
        class: "absolute left-0 right-0 top-0 z-20 flex justify-center sm:grid sm:grid-cols-3"
    },
    Ns = {
        key: 0,
        class: "flex p-5"
    },
    Vs = {
        key: 0,
        class: "flex h-10 items-center rounded-[0.625rem] rounded-tl-[1.25rem] bg-orange-50/10 backdrop-blur-xl backdrop-saturate-115"
    },
    qs = r("a", {
        href: "/privacy",
        class: "group relative flex h-full w-[62px] items-center justify-center text-orange-50 outline-none",
        tabindex: "-1",
        "aria-label": "Privacy policy"
    }, [r("div", {
        class: "absolute size-[22px] opacity-100 transition delay-150 duration-200 group-hover:scale-75 group-hover:opacity-0 group-hover:blur-xs group-hover:delay-[0ms]"
    }, [r("svg", {
        class: "size-full fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"
    })])]), r("div", {
        class: "absolute size-[22px] scale-75 opacity-0 blur-xs transition delay-[0ms] duration-200 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-none group-hover:delay-150"
    }, [r("svg", {
        class: "size-full fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M19.374 7.995c-.114.088-2.11 1.213-2.11 3.716 0 2.894 2.54 3.919 2.616 3.945-.011.062-.403 1.402-1.34 2.768-.834 1.2-1.707 2.4-3.033 2.4s-1.668-.77-3.199-.77c-1.492 0-2.022.796-3.236.796s-2.06-1.112-3.033-2.478C4.91 16.77 4 14.278 4 11.914 4 8.122 6.466 6.11 8.892 6.11c1.29 0 2.365.848 3.174.848.77 0 1.973-.898 3.439-.898.556 0 2.553.05 3.868 1.935M8.07 5.213h1.586v-.98c0-1.987 1.272-2.706 2.41-2.706s2.42.72 2.42 2.706v.98h1.584v-.807C16.07 1.442 14.13 0 12.066 0 10.009 0 8.07 1.442 8.07 4.406z"
    })])])], -1),
    Is = [qs],
    Rs = {
        class: "flex justify-center p-5"
    },
    Us = {
        key: 1,
        class: "flex justify-end p-5"
    },
    Qs = {
        key: 0,
        class: "flex h-10 items-center justify-center space-x-5 rounded-[0.625rem] rounded-tr-[1.25rem] bg-orange-50/10 px-5 text-orange-50 backdrop-blur-xl backdrop-saturate-115"
    },
    Gs = r("svg", {
        class: "h-5 w-5",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true"
    }, [r("defs", null, [r("linearGradient", {
        id: "gradient",
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
    }, [r("stop", {
        offset: "0%",
        "stop-color": "#fff7ed",
        "stop-opacity": ".15"
    }), r("stop", {
        offset: "100%",
        "stop-color": "#fff7ed"
    })])]), r("g", {
        fill: "none",
        "fill-rule": "evenodd"
    }, [r("path", {
        class: "fill-current text-orange-50/75",
        d: "M5.128 0h5.744c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v5.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H5.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 0 1-1.512-1.512C.186 13.302 0 12.655 0 10.872V5.128c0-1.783.186-2.43.534-3.082A3.635 3.635 0 0 1 2.046.534C2.698.186 3.345 0 5.128 0Zm-.14 1.143h6.023c1.338 0 1.823.14 2.311.4.49.262.873.646 1.134 1.135.262.488.401.973.401 2.31v6.023c0 1.338-.14 1.823-.4 2.311a2.726 2.726 0 0 1-1.135 1.134c-.488.262-.973.401-2.31.401H4.988c-1.338 0-1.823-.14-2.311-.4a2.726 2.726 0 0 1-1.134-1.135c-.262-.488-.401-.973-.401-2.31V4.988c0-1.338.14-1.823.4-2.311a2.726 2.726 0 0 1 1.135-1.134c.488-.262.973-.401 2.31-.401Z"
    }), r("path", {
        fill: "url(#gradient)",
        d: "M5.064 2.5h5.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v5.873c0 .892-.093 1.215-.267 1.54-.174.327-.43.583-.756.757-.326.174-.65.267-1.54.267H5.063c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V5.063c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267Z"
    })])], -1),
    Xs = r("svg", {
        class: "hidden h-5 w-5 fill-current text-orange-50 lg:block",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M14.4901 23.4883C14.7479 23.4883 14.9705 23.3711 15.4276 22.9258L18.2869 20.1836C18.4627 20.0078 18.5096 19.75 18.3455 19.5391C17.5838 18.5547 16.1424 17.6992 14.4901 17.6992C12.7908 17.6992 11.3494 18.5898 10.5877 19.6094C10.4705 19.7969 10.5174 20.0078 10.7049 20.1836L13.5526 22.9258C14.0096 23.3594 14.2323 23.4883 14.4901 23.4883ZM7.6346 17.1133C7.89241 17.3594 8.20882 17.3242 8.44319 17.0664C9.84944 15.5078 12.1463 14.3711 14.4901 14.3828C16.8573 14.3711 19.1541 15.543 20.5838 17.1016C20.7948 17.3477 21.0877 17.3359 21.3455 17.1016L23.1619 15.2969C23.3494 15.1094 23.3729 14.8516 23.1971 14.6406C21.4276 12.4727 18.1463 10.8438 14.4901 10.8438C10.8338 10.8438 7.55257 12.4727 5.78303 14.6406C5.60725 14.8516 5.61897 15.0859 5.81819 15.2969L7.6346 17.1133ZM2.77132 12.2148C3.00569 12.4375 3.33382 12.4375 3.55647 12.2031C6.43928 9.14453 10.2362 7.52734 14.4901 7.52734C18.7674 7.52734 22.5877 9.15625 25.4471 12.2148C25.658 12.4258 25.9744 12.4141 26.2088 12.1914L27.826 10.5742C28.0369 10.3633 28.0252 10.1055 27.8612 9.90625C25.1073 6.50781 19.9276 4.01172 14.4901 4.01172C9.06428 4.01172 3.86116 6.50781 1.11897 9.90625C0.954909 10.1055 0.954909 10.3633 1.15413 10.5742L2.77132 12.2148Z"
    })], -1),
    Js = r("svg", {
        class: "hidden h-5 w-5 fill-current text-orange-50 lg:block",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M7.496 13.688h12.961c3.023 0 5.484-2.157 5.484-5.344 0-3.188-2.46-5.344-5.484-5.344H7.497C4.472 3 2 5.156 2 8.344c0 3.187 2.473 5.344 5.496 5.344Zm0-1.77c-1.969 0-3.726-1.441-3.726-3.574S5.527 4.77 7.496 4.77h12.961c1.957 0 3.715 1.44 3.715 3.574 0 2.133-1.758 3.574-3.715 3.574H7.497Zm0-.797c1.547.012 2.777-1.254 2.79-2.8.01-1.536-1.243-2.766-2.79-2.766A2.768 2.768 0 0 0 4.72 8.332a2.778 2.778 0 0 0 2.777 2.79Zm-.48 14.004h13.921c2.778 0 5.004-1.945 5.004-4.816 0-2.872-2.226-4.817-5.003-4.817H7.015C4.238 15.492 2 17.437 2 20.31c0 2.87 2.238 4.816 5.016 4.816Zm14.214-1.77a3.048 3.048 0 0 1-3.035-3.058 3.028 3.028 0 0 1 3.035-3.035c1.688 0 3.06 1.347 3.047 3.023-.011 1.7-1.359 3.082-3.047 3.07Z"
    })], -1),
    Ks = {
        class: "whitespace-nowrap text-[15px] font-medium"
    },
    er = {
        class: "hidden md:inline"
    },
    tr = r("span", null, ":", -1),
    nr = {
        class: "absolute inset-0"
    },
    sr = {
        class: "absolute bottom-24 z-20 hidden w-full items-center justify-center 2xl:flex"
    },
    rr = {
        key: 0,
        class: "absolute inset-0 z-10 mb-6 mt-[5.5rem] flex flex-col items-center justify-end md:justify-between lg:mt-[5.75rem]"
    },
    ar = {
        class: "flex flex-col items-center"
    },
    ir = {
        key: 0,
        class: "flex flex-col items-center text-center"
    },
    or = {
        class: "text-3xl font-semibold text-purple-300/85 saturate-150"
    },
    lr = {
        class: "font-numeric text-8xl font-bold text-purple-300/90 saturate-150"
    },
    cr = r("span", null, ":", -1),
    ur = {
        class: "mt-3.5 hidden items-center space-x-5 font-semibold text-purple-300/90 saturate-150 lg:flex"
    },
    dr = {
        class: "relative flex w-[4.5rem] items-center"
    },
    hr = {
        key: 0,
        class: "absolute flex w-[4.5rem] items-center"
    },
    fr = r("div", {
        class: "ml-0.5 mr-2 size-[18px]"
    }, [r("svg", {
        class: "size-[18px] fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 30 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M0 22.773c0 .61.387.997.996.997H1.7c.598 0 .996-.387.996-.997V21.04c.13.035.516.059.797.059h22.711c.281 0 .668-.024.797-.059v1.734c0 .61.398.997.996.997h.703c.61 0 .996-.387.996-.997V15.79c0-2.238-1.242-3.469-3.48-3.469H3.48C1.242 12.32 0 13.55 0 15.79zm2.813-12.128h2.976V8.957c0-1.09.61-1.687 1.723-1.687h4.37c1.102 0 1.712.597 1.712 1.687v1.688h2.66V8.957c0-1.09.61-1.687 1.781-1.687h4.102c1.172 0 1.781.597 1.781 1.687v1.688h2.988V7.28C26.906 5.113 25.734 4 23.625 4H6.082c-2.11 0-3.27 1.113-3.27 3.281z"
    })])], -1),
    mr = r("div", null, "Sleep", -1),
    gr = [fr, mr],
    pr = {
        key: 1,
        class: "absolute flex w-[4.5rem] items-center"
    },
    vr = r("div", {
        class: "ml-0.5 mr-1.5 size-[18px]"
    }, [r("svg", {
        class: "absolute size-[18px] fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M19.222 1C21.74 1 23 2.285 23 4.808v18.396C23 25.74 21.74 27 19.222 27H7.79C5.26 27 4 25.739 4 23.204V4.808C4 2.285 5.26 1 7.79 1zm-5.71 17.972c-4.254 0-6.247 3.42-6.247 4.717 0 .45.22.764.709.764h11.065c.501 0 .72-.315.72-.764 0-1.297-1.992-4.717-6.246-4.717m0-7.652c-1.723 0-3.106 1.492-3.106 3.287 0 1.928 1.383 3.37 3.107 3.382 1.723.012 3.105-1.455 3.105-3.383 0-1.794-1.382-3.285-3.105-3.286M10.37 3.571a.826.826 0 0 0-.83.813c0 .448.378.812.83.812h6.26c.464 0 .83-.364.83-.812a.82.82 0 0 0-.83-.813z"
    })])], -1),
    wr = r("div", null, "Work", -1),
    xr = [vr, wr],
    br = {
        class: "flex items-center"
    },
    yr = {
        class: "relative ml-0.5 mr-[5px] size-[18px]"
    },
    _r = {
        key: 0,
        class: "absolute size-[18px] fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    },
    kr = r("path", {
        d: "M12.125 25.34c4.23 0 7.676-2.11 9.234-5.766.176-.41.153-.773-.058-.984-.164-.176-.492-.2-.844-.07-.973.386-2.074.574-3.352.574-5.308 0-8.73-3.328-8.73-8.532 0-1.324.246-2.812.645-3.62.199-.41.199-.774.011-.985-.199-.234-.562-.27-1.02-.094C4.415 7.293 2 11.066 2 15.356c0 5.695 4.207 9.984 10.125 9.984m8.813-10.711c.222 0 .375-.152.398-.387.387-3.129.539-3.21 3.715-3.726.246-.036.398-.164.398-.387s-.152-.363-.351-.399c-3.2-.609-3.375-.597-3.762-3.726-.023-.234-.176-.387-.398-.387-.211 0-.364.153-.399.375-.398 3.176-.516 3.281-3.762 3.738a.387.387 0 0 0-.351.399c0 .21.152.351.351.387 3.246.62 3.352.62 3.762 3.75.035.21.188.363.398.363m-5.602-7.934c.14 0 .21-.082.234-.21.364-1.958.352-2.005 2.39-2.391.13-.024.224-.106.224-.246s-.094-.223-.223-.246c-2.04-.41-1.969-.457-2.39-2.391-.024-.129-.094-.211-.235-.211s-.223.082-.246.21c-.41 1.935-.34 1.981-2.38 2.392-.14.023-.222.105-.222.246 0 .14.082.222.223.246 2.039.41 2.016.433 2.379 2.39.023.13.105.211.246.211"
    }, null, -1),
    Mr = [kr],
    Cr = {
        key: 1,
        class: "absolute size-[18px] fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28",
        "aria-hidden": "true"
    },
    Pr = r("path", {
        d: "M13.668 19.691c3.258 0 5.965-2.707 5.965-5.976 0-3.281-2.707-5.988-5.965-5.988s-5.965 2.707-5.965 5.988c0 3.27 2.707 5.976 5.965 5.976M13.68 5.56c.55 0 1.008-.457 1.008-1.02V2.02C14.688 1.458 14.23 1 13.68 1a1.02 1.02 0 0 0-1.02 1.02v2.52c0 .562.457 1.019 1.02 1.019m5.742 2.402a1.03 1.03 0 0 0 1.441 0l1.793-1.793a1.04 1.04 0 0 0 0-1.441 1.026 1.026 0 0 0-1.43 0L19.423 6.53a1.026 1.026 0 0 0 0 1.43m2.379 5.754c0 .55.469 1.008 1.02 1.008h2.519c.55 0 1.008-.457 1.008-1.008s-.457-1.02-1.008-1.02h-2.52c-.55 0-1.02.47-1.02 1.02m-2.38 5.754a1.026 1.026 0 0 0 0 1.43l1.806 1.816a1.05 1.05 0 0 0 1.43-.012 1.026 1.026 0 0 0 0-1.43l-1.805-1.804a1.05 1.05 0 0 0-1.43 0M13.68 21.87c-.563 0-1.02.457-1.02 1.008v2.531c0 .55.457 1.008 1.02 1.008.55 0 1.008-.457 1.008-1.008V22.88c0-.55-.458-1.008-1.008-1.008M7.926 19.47c-.399-.375-1.055-.375-1.442 0l-1.793 1.793a1.037 1.037 0 0 0-.011 1.43 1.064 1.064 0 0 0 1.441.011l1.793-1.805a1.037 1.037 0 0 0 .012-1.43m-2.38-5.754c0-.55-.468-1.02-1.019-1.02h-2.52c-.55 0-1.007.47-1.007 1.02s.457 1.008 1.008 1.008h2.52c.55 0 1.019-.457 1.019-1.008M7.915 7.96c.387-.375.387-1.043.012-1.43L6.133 4.727c-.387-.375-1.043-.387-1.43 0-.387.398-.387 1.054-.012 1.43L6.484 7.96a1.026 1.026 0 0 0 1.43 0"
    }, null, -1),
    $r = [Pr],
    Lr = r("div", {
        class: "px-px"
    }, "°", -1),
    Tr = r("div", {
        class: "shimmer animate-shine cursor-pointer !bg-clip-text p-6 text-2xl font-bold text-transparent saturate-150 sm:text-lg sm:font-semibold lg:p-4"
    }, " Press to unlock ", -1),
    Hr = {
        key: 0,
        class: "absolute bottom-7 left-0 right-0 z-10 flex items-center justify-center"
    },
    Or = {
        class: "relative flex items-center justify-center rounded-3xl bg-orange-50/15 pb-3 pl-2.5 pr-3 pt-[11px] before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:border-t before:border-orange-50/15 before:backdrop-blur-xl before:backdrop-saturate-115"
    },
    Ar = {
        class: "size-16"
    },
    Dr = ["srcset"],
    Er = ["src"],
    Sr = {
        class: "ml-2 size-[3.75rem] outline-none",
        href: "https://tryklack.com",
        target: "_blank",
        tabindex: "-1",
        "aria-label": "Klack Mac App"
    },
    Wr = {
        class: "size-[62px]"
    },
    Br = ["srcset"],
    jr = ["src"],
    zr = r("div", {
        class: "ml-3 size-[58px] rounded-[13px] bg-orange-50 bg-opacity-15"
    }, null, -1),
    Fr = r("div", {
        class: "ml-3 size-[58px] rounded-[13px] bg-orange-50 bg-opacity-15"
    }, null, -1),
    Zr = ["srcset"],
    Yr = ["srcset"],
    Nr = ["src"],
    Vr = r("path", {
        d: "M5.06 3.024C4.804 1.238 6.858.052 8.276 1.168l17.117 13.466c1.47 1.159.688 3.522-1.182 3.574l-7.03.19a1.998 1.998 0 0 0-1.65.953l-3.68 5.993c-.98 1.594-3.418 1.089-3.685-.764L5.06 3.024Z"
    }, null, -1),
    qr = [Vr],
    Ir = {
        class: "isolate mt-16 w-full opacity-0 delay-[1100ms] sm:mt-12"
    },
    Rr = {
        class: "mx-auto grid w-full gap-x-3 gap-y-10 tracking-tight sm:max-w-screen-lg sm:grid-cols-4 sm:gap-y-14"
    },
    Ur = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("div", {
        class: "mb-5 h-[4.5rem]"
    }, [r("div", {
        class: "gooey flex h-full items-center justify-center space-x-2.5"
    }, [r("div", {
        class: "h-11 w-11 rounded-full bg-stone-800 transition duration-700 group-hover:translate-x-11"
    }), r("div", {
        class: "h-7 w-7 rounded-full bg-stone-800 transition duration-700 group-hover:-translate-x-12"
    })]), r("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("defs", null, [r("filter", {
        id: "gooey"
    }, [r("feGaussianBlur", { in: "SourceGraphic",
        stdDeviation: "6",
        result: "blur"
    }), r("feColorMatrix", { in: "blur",
        mode: "matrix",
        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10",
        result: "gooey"
    }), r("feComposite", { in: "SourceGraphic",
        in2: "gooey",
        operator: "atop"
    })])])])]), r("h2", {
        class: "text-3xl font-bold"
    }, [v("Fluid"), r("br"), v("transitions")])], -1),
    Qr = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        class: "origin-top transition duration-300 group-hover:rotate-12",
        d: "M14.063 2.082c1.722 0 2.988 1.207 3.374 2.742 3.118 1.125 4.313 4.102 4.395 8.719l.042.518c.113 1.232.36 2.595 1.036 3.302l.69.698c.797.82 1.513 1.66 1.513 2.572 0 .855-.656 1.418-1.77 1.418H4.77c-1.114 0-1.77-.563-1.77-1.418 0-.912.716-1.752 1.514-2.572l.69-.698c.773-.808.984-2.472 1.077-3.82.082-4.617 1.278-7.594 4.395-8.719.371-1.474 1.552-2.645 3.17-2.736l.216-.006Zm.05 1.723H14c-.134.004-.262.02-.384.05l-.065.02-.063.023c-.756.24-1.225.99-1.254 1.98-.01.272-.14.413-.376.49l-.092.027c-2.004.55-3.528 2.18-3.621 7.3-.106 2.285-.504 3.797-1.348 4.735l-.43.468c-.43.46-.84.887-1.036 1.158l-.033.048a.08.08 0 0 1-.013.037v.14h17.543v-.14c-.21-.34-.902-1.032-1.523-1.711-.832-.938-1.23-2.45-1.336-4.735-.092-5.007-1.55-6.676-3.488-7.262l-.133-.038c-.293-.07-.457-.211-.47-.516-.028-.99-.497-1.74-1.25-1.987l-.132-.038-.136-.026a1.887 1.887 0 0 0-.247-.023Z"
    }), r("path", {
        class: "stroke-orange-75 stroke-[1.5px]",
        d: "M19.828 1.25c1.315 0 2.523.542 3.4 1.42a4.798 4.798 0 0 1 1.416 3.396 4.782 4.782 0 0 1-1.418 3.39 4.814 4.814 0 0 1-3.398 1.415 4.807 4.807 0 0 1-3.4-1.41 4.786 4.786 0 0 1-1.416-3.395c0-1.325.54-2.53 1.413-3.402a4.802 4.802 0 0 1 3.403-1.414Z"
    }), r("path", {
        class: "origin-center transition delay-25 duration-350 group-hover:-translate-x-1 group-hover:-translate-y-px group-hover:rotate-12",
        d: "M9.715 22.05c.094 2.262 1.863 4.243 4.336 4.243 2.484 0 4.254-1.98 4.347-4.242V21.5H9.715v.55Zm1.828 0v-.55h5.027v.55c-.093 1.595-1.101 2.59-2.52 2.59-1.405 0-2.425-.995-2.507-2.59Z"
    })]), r("h2", {
        class: "text-3xl font-bold"
    }, [v("Instant "), r("br"), v("Notifications")])], -1),
    Gr = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] fill-current",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M12.953 26.14c6.54 0 11.953-5.425 11.953-11.953 0-1.042-.14-2.05-.422-3.011a5.082 5.082 0 0 1-1.922.457c.223.808.352 1.676.352 2.555a9.915 9.915 0 0 1-9.96 9.96 9.913 9.913 0 0 1-9.95-9.96c0-5.532 4.406-9.961 9.937-9.961 1.29 0 2.508.234 3.633.68.117-.669.363-1.29.703-1.84-1.336-.54-2.8-.833-4.336-.833C6.414 2.234 1 7.648 1 14.188 1 20.715 6.426 26.14 12.953 26.14Zm9.129-16.019c2.215 0 4.066-1.828 4.066-4.055C26.148 3.828 24.297 2 22.082 2c-2.227 0-4.066 1.828-4.066 4.066 0 2.227 1.84 4.055 4.066 4.055Z"
    }), r("path", {
        class: "origin-[47%_53%] transition duration-350 group-hover:rotate-180",
        d: "M13.762 14.633c0 .469-.364.82-.82.82a.8.8 0 0 1-.81-.823V6.734c0-.457.352-.808.81-.808.456 0 .82.351.82.808v7.899Z"
    }), r("path", {
        class: "origin-[47%_53%] transition duration-300 group-hover:rotate-45",
        d: "M12.941 15.453H6.824a.801.801 0 0 1-.82-.82c0-.457.351-.809.82-.809h6.116c.46 0 .822.34.822.809 0 .469-.364.82-.82.82Z"
    })]), r("h2", {
        class: "text-3xl font-bold"
    }, [v("Live"), r("br"), v("Activities")])], -1),
    Xr = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        class: "origin-[75%_75%] transition duration-350 group-hover:-rotate-[40deg]",
        d: "M21.695 25.288c4.653-1.687 6.633-5.953 4.758-11.109l-.867-2.402c-.926-2.543-2.672-3.586-4.723-2.871-.55-.715-1.394-.961-2.308-.633-.34.129-.633.305-.914.515-.598-.773-1.524-1.054-2.485-.714a3.225 3.225 0 0 0-.738.398l-1.336-3.656c-.504-1.395-1.77-1.98-3.07-1.512-1.313.48-1.899 1.734-1.395 3.129l3.34 9.188c.023.058.012.105-.047.128-.035.024-.082 0-.117-.035l-1.371-1.5c-.68-.726-1.5-.949-2.285-.668-1.067.399-1.758 1.418-1.313 2.625.106.34.34.75.61 1.09l3.925 4.746c2.977 3.586 6.446 4.7 10.336 3.281Zm-.504-1.535c-3.07 1.125-5.941.551-8.66-2.718l-3.926-4.723c-.117-.14-.199-.27-.269-.469-.14-.375.023-.809.469-.973.375-.128.68.012.972.329l2.72 2.8c.444.47.843.516 1.241.375.457-.164.645-.656.457-1.16L10.047 5.8c-.176-.469.035-.914.492-1.078.445-.164.879.059 1.043.527l2.965 8.145c.14.387.574.562.96.422.376-.14.587-.551.446-.926l-1.066-2.941c.152-.153.386-.305.597-.387.551-.2 1.008.047 1.22.621l.937 2.566c.14.399.586.551.96.41a.713.713 0 0 0 .434-.925l-.762-2.086c.165-.153.387-.305.61-.387.55-.2 1.008.047 1.219.621l.62 1.711c.153.41.587.563.962.422a.723.723 0 0 0 .445-.926l-.457-1.265c.973-.352 1.898.445 2.531 2.203l.738 2.004c1.606 4.43.153 7.804-3.75 9.222Z"
    }), r("g", {
        class: "transition duration-200 group-hover:opacity-0 group-hover:delay-50"
    }, [r("path", {
        class: "fill-transparent stroke-current stroke-[1.5px] transition-all duration-350 group-hover:duration-250 group-hover:[stroke-dashoffset:12]",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-dasharray": "12",
        "stroke-dashoffset": "0",
        d: "M1.75 16.719s-.084-3.054 1.281-5.688C4.35 8.488 6.391 6.906 7 6.687"
    })])]), r("h2", {
        class: "text-3xl font-bold"
    }, [v("Swipe"), r("br"), v("gestures")])], -1),
    Jr = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current transition duration-300 group-hover:-translate-y-px group-hover:-rotate-2",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M8.11 25.563h12.316c2.203 0 3.422-1.16 3.422-3.375v-8.883H4.676v8.883c0 2.214 1.219 3.375 3.433 3.375Zm5.109-1.758H8.086c-.973 0-1.524-.551-1.524-1.524V14.99h6.657v8.815Zm2.086 0V14.99h6.656v7.291c0 .973-.55 1.524-1.523 1.524h-5.133Z"
    }), r("path", {
        class: "origin-[85%_45%] transition duration-300 group-hover:rotate-[18deg]",
        d: "M23.848 14.992h.082c1.03-.223 1.605-1.055 1.605-2.25V9.66c0-1.43-.797-2.332-2.226-2.332H20.94c.622-.621.985-1.465.985-2.437C21.926 2.617 20.133 1 17.859 1c-1.64 0-3 .902-3.597 2.473C13.664 1.903 12.316 1 10.664 1 8.402 1 6.598 2.617 6.598 4.89c0 .973.363 1.817.996 2.438H5.227C3.855 7.328 3 8.23 3 9.66v3.082c0 1.195.563 2.027 1.594 2.25h19.254Zm-10.63-1.687H5.708c-.586 0-.82-.246-.82-.832V9.918c0-.586.234-.82.82-.82h7.512v4.207Zm2.087 0V9.098h7.535c.586 0 .808.234.808.82v2.555c0 .586-.222.832-.808.832h-7.535ZM13.3 7.328h-1.828c-1.84 0-2.918-1.043-2.918-2.332s.937-2.039 2.226-2.039c1.395 0 2.52 1.055 2.52 2.79v1.581Zm1.922 0V5.746c0-1.734 1.125-2.789 2.52-2.789 1.288 0 2.226.75 2.226 2.04 0 1.288-1.067 2.331-2.918 2.331h-1.828Z"
    })]), r("h2", {
        class: "w-full text-3xl font-bold"
    }, [v(" Packed with"), r("br"), v(" surprises ")])], -1),
    Kr = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] fill-current",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M3.67969,19.12496 L6.64453,19.12496 L6.64453,17.23826 L3.70312,17.23826 C2.53125,17.23826 1.88672,16.60546 1.88672,15.38676 L1.88672,3.73828 C1.88672,2.51953 2.53125,1.88672 3.70312,1.88672 L15.4102,1.88672 C16.5703,1.88672 17.2266,2.51953 17.2266,3.73828 L17.2266,6.30468 L19.1133,6.30468 L19.1133,3.63281 C19.1133,1.21875 17.8828,0 15.4453,0 L3.67969,0 C1.21875,0 0,1.21875 0,3.63281 L0,15.49216 C0,17.90626 1.21875,19.12496 3.67969,19.12496 Z M9.3398,18.15236 C9.3398,17.73046 9.6797,17.39066 10.0781,17.39066 L20.3672,17.39066 C20.8125,17.39066 21.1523,17.73046 21.1523,18.15236 C21.1523,18.59766 20.8125,18.93746 20.3672,18.93746 L10.0781,18.93746 C9.6797,18.93746 9.3398,18.59766 9.3398,18.15236 Z M9.3398,11.88276 C9.3398,11.46096 9.6797,11.12106 10.125,11.12106 L20.4141,11.12106 C20.8125,11.12106 21.1523,11.46096 21.1523,11.88276 C21.1523,12.31636 20.8125,12.66796 20.4141,12.66796 L10.125,12.66796 C9.6797,12.66796 9.3398,12.31636 9.3398,11.88276 Z M9.3633,24.55076 L21.1289,24.55076 C23.5664,24.55076 24.7969,23.33206 24.7969,20.91796 L24.7969,9.05856 C24.7969,6.64453 23.5664,5.42578 21.1289,5.42578 L9.3633,5.42578 C6.90234,5.42578 5.68359,6.63281 5.68359,9.05856 L5.68359,20.91796 C5.68359,23.33206 6.90234,24.55076 9.3633,24.55076 Z M9.3867,22.66406 C8.2266,22.66406 7.57031,22.03126 7.57031,20.81246 L7.57031,9.16406 C7.57031,7.94531 8.2266,7.3125 9.3867,7.3125 L21.0938,7.3125 C22.2539,7.3125 22.9102,7.94531 22.9102,9.16406 L22.9102,20.81246 C22.9102,22.03126 22.2539,22.66406 21.0938,22.66406 L9.3867,22.66406 Z"
    }), r("path", {
        class: "origin-center transition duration-300 group-hover:-translate-x-[3.75px]",
        d: "M17.0859,14.26176 C18.3867,14.26176 19.4531,13.19536 19.4531,11.88276 C19.4531,10.58206 18.3867,9.51566 17.0859,9.51566 C15.7734,9.51566 14.707,10.58206 14.707,11.88276 C14.707,13.19536 15.7734,14.26176 17.0859,14.26176 Z"
    }), r("path", {
        class: "origin-center transition duration-300 group-hover:translate-x-[3.75px]",
        d: "M13.4062,20.53126 C14.7305,20.53126 15.7969,19.46486 15.7969,18.15236 C15.7969,16.85156 14.7305,15.78516 13.4062,15.78516 C12.1055,15.78516 11.0391,16.85156 11.0391,18.15236 C11.0391,19.46486 12.1055,20.53126 13.4062,20.53126 Z"
    })]), r("h2", {
        class: "text-3xl font-bold"
    }, [v("Customizable"), r("br"), v("HUDs")])], -1),
    e1 = r("div", {
        class: "group flex flex-col items-center justify-center text-center"
    }, [r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] fill-current",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M3.68 24.574h20.273c2.461 0 3.68-1.207 3.68-3.62V6.632c0-2.414-1.219-3.633-3.68-3.633H3.68C1.23 3 0 4.219 0 6.633v14.32c0 2.414 1.23 3.621 3.68 3.621Zm.023-1.887c-1.172 0-1.816-.62-1.816-1.84V6.739c0-1.218.644-1.851 1.816-1.851H23.93c1.16 0 1.816.633 1.816 1.851v14.11c0 1.218-.656 1.84-1.816 1.84H3.703Z"
    }), r("path", {
        class: "origin-[55%_50%] transition duration-300 group-hover:-scale-x-100",
        d: "M17.027 11.074v1.395c0 .378-.227.601-.609.601-.388 0-.61-.232-.61-.613v-1.512c0-1.37-.796-2.285-1.98-2.285-1.195 0-1.98.914-1.98 2.285v1.512c0 .381-.218.613-.61.613-.386 0-.61-.223-.61-.601v-1.395c0-2.156 1.29-3.597 3.2-3.597 1.91 0 3.2 1.441 3.2 3.597Z"
    }), r("path", {
        class: "origin-center transition duration-300 group-hover:-translate-x-px",
        d: "M10.793 19.688c-.82 0-1.207-.41-1.207-1.29v-4.664c0-.82.34-1.218 1.043-1.265h6.398c.692.047 1.032.445 1.032 1.265v4.664c0 .88-.387 1.29-1.196 1.29h-6.07Z"
    })]), r("h2", {
        class: "text-3xl font-bold"
    }, [v(" Lock Screen"), r("br"), v(" Widgets ")])], -1),
    t1 = {
        class: "group relative flex flex-col items-center justify-center text-center"
    },
    n1 = r("svg", {
        class: "mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current",
        viewBox: "0 0 28 28",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
    }, [r("path", {
        class: "origin-[50%_40%] scale-[0.25] opacity-0 blur-sm transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-2 group-hover:scale-50 group-hover:opacity-100 group-hover:blur-none",
        d: "M6 15.5402C6 15.9972 6.35156 16.3371 6.84375 16.3371H13.4648L9.97266 25.8293C9.51562 27.0363 10.7695 27.6808 11.5547 26.6965L22.207 13.384C22.4062 13.1379 22.5117 12.9035 22.5117 12.634C22.5117 12.1887 22.1602 11.8371 21.668 11.8371H15.0469L18.5391 2.34491C18.9961 1.13787 17.7422 0.493343 16.957 1.48944L6.30469 14.7902C6.10547 15.048 6 15.2824 6 15.5402Z"
    }), r("path", {
        class: "origin-center transition duration-300 group-hover:translate-x-1 group-hover:delay-100",
        d: "M6 15.5402C6 15.9972 6.35156 16.3371 6.84375 16.3371H13.4648L9.97266 25.8293C9.51562 27.0363 10.7695 27.6808 11.5547 26.6965L22.207 13.384C22.4062 13.1379 22.5117 12.9035 22.5117 12.634C22.5117 12.1887 22.1602 11.8371 21.668 11.8371H15.0469L18.5391 2.34491C18.9961 1.13787 17.7422 0.493343 16.957 1.48944L6.30469 14.7902C6.10547 15.048 6 15.2824 6 15.5402Z"
    })], -1),
    s1 = r("h2", {
        class: "relative z-10 text-3xl font-bold"
    }, [v(" Blazing fast"), r("br"), v(" native app ")], -1),
    r1 = {
        class: "absolute -bottom-3.5 left-0 right-0 flex items-center justify-center"
    },
    a1 = r("path", {
        d: "M28.0001 9.50003C34 6.00006 75.5 1.18613e-05 107 1.99997C138.5 3.99993 167 7.00013 172.5 23.5001C178 40 127 49 83.0001 52C39.0002 55.0001 -2.49983 51.0001 4.50007 31.5001C11.5 12 93.5 1.60145 123 7.00001"
    }, null, -1),
    i1 = [a1],
    o1 = {
        class: "mt-24 flex items-center justify-center"
    },
    l1 = r("div", {
        class: "ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm"
    }, [r("svg", {
        class: "h-6 w-6 fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"
    })])], -1),
    c1 = {
        class: "ease translate-x-0 transition duration-300 group-hover:-translate-x-8"
    },
    u1 = r("span", null, "for Mac", -1),
    d1 = r("div", {
        class: "ease absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
    }, [r("svg", {
        class: "h-6 w-6 fill-transparent stroke-current stroke-2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
    }, [r("path", {
        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    })])], -1);

function h1(e, t, n, s, a, i) {
    const o = F("ButtonComponent"),
        l = F("NotchComponent"),
        c = F("CounterComponent"),
        u = F("MusicComponent"),
        d = F("TooltipComponent"),
        g = F("ObserverComponent");
    return h(), f("section", ps, [r("section", vs, [b(T, {
        "enter-from-class": "rotate-2 translate-y-8 opacity-0",
        "enter-active-class": "transition duration-500 ease",
        appear: ""
    }, {
        default: y(() => [r("h1", ws, [v(" Dynamic Island"), xs, s.lgAndLarger ? (h(), f(E, {
            key: 0
        }, [v("now")], 64)) : L("", !0), v(" for "), s.mdAndLarger ? (h(), f(E, {
            key: 1
        }, [v("your ")], 64)) : L("", !0), r("mark", bs, [(h(), f("svg", ys, [b(T, {
            css: !1,
            appear: "",
            onEnter: i.handleDotEnter
        }, {
            default: y(() => [_s]),
            _: 1
        }, 8, ["onEnter"]), ks])), Ms])])]),
        _: 1
    }), b(T, {
        "enter-from-class": "translate-y-5 opacity-0",
        "enter-active-class": "transition duration-500 ease",
        appear: ""
    }, {
        default: y(() => [r("div", Cs, [b(o, {
            class: "pl-[3.25rem]",
            href: s.smAndSmaller ? s.stripeUrl : "/download",
            "aria-label": s.smAndSmaller ? "Purchase for Mac" : "Download for Mac"
        }, {
            default: y(() => [Ps, r("div", $s, [s.smAndSmaller ? (h(), f(E, {
                key: 0
            }, [v("Purchase ")], 64)) : (h(), f(E, {
                key: 1
            }, [v("Download ")], 64)), Ls]), Ts]),
            _: 1
        }, 8, ["href", "aria-label"]), s.smAndSmaller ? L("", !0) : (h(), G(o, {
            key: 0,
            class: "pl-6",
            href: s.stripeUrl,
            type: "info",
            "aria-label": "Purchase",
            onMouseenter: i.handlePurchaseEnter,
            onMouseleave: i.handlePurchaseLeave
        }, {
            default: y(() => [(h(), f("svg", Hs, [r("g", Os, Ds, 512), Es])), Ss, r("span", Ws, " $" + O(s.appPrice), 1)]),
            _: 1
        }, 8, ["href", "onMouseenter", "onMouseleave"])), s.smAndSmaller ? (h(), f("div", Bs, Fs)) : L("", !0)])]),
        _: 1
    })]), b(T, {
        "enter-from-class": "translate-y-5 opacity-0",
        "enter-active-class": "transition duration-500 ease",
        appear: ""
    }, {
        default: y(() => [r("section", Zs, [r("div", {
            class: "relative h-48 w-full overflow-visible sm:aspect-[2/1] sm:h-full sm:overflow-hidden",
            onClick: t[2] || (t[2] = (...m) => i.handleUnlockClick && i.handleUnlockClick(...m))
        }, [r("div", Ys, [s.smAndSmaller ? L("", !0) : (h(), f("div", Ns, [b(T, {
            "enter-from-class": "-translate-y-5 opacity-0",
            "enter-active-class": "transition duration-400 ease-out delay-100"
        }, {
            default: y(() => [a.isLocked ? L("", !0) : (h(), f("div", Vs, Is))]),
            _: 1
        })])), r("div", Rs, [b(l, {
            "is-locked": a.isLocked
        }, null, 8, ["is-locked"])]), s.smAndSmaller ? L("", !0) : (h(), f("div", Us, [b(T, {
            "enter-from-class": "-translate-y-5 opacity-0",
            "enter-active-class": "transition duration-400 ease-out delay-100"
        }, {
            default: y(() => [a.isLocked ? L("", !0) : (h(), f("div", Qs, [Gs, Xs, Js, r("time", Ks, [r("span", er, O(a.format(e.$time.now, "eee ")), 1), b(c, {
                count: a.format(e.$time.now, "HH")
            }, null, 8, ["count"]), tr, b(c, {
                count: a.format(e.$time.now, "mm")
            }, null, 8, ["count"])])]))]),
            _: 1
        })]))]), r("div", nr, [r("div", sr, [e.$playlist.tracks ? (h(), G(u, {
            key: 0,
            class: C(["transition duration-400", {
                "opacity-0": !a.isLocked
            }]),
            track: e.$playlist.track
        }, null, 8, ["class", "track"])) : L("", !0)]), b(T, {
            "leave-to-class": "opacity-0",
            "leave-active-class": "transition duration-400"
        }, {
            default: y(() => [a.isLocked ? (h(), f("div", rr, [r("div", ar, [s.mdAndLarger ? (h(), f("div", ir, [r("time", or, [r("span", null, O(a.format(e.$time.now, "EEE, ")), 1), b(c, {
                count: a.format(e.$time.now, "d")
            }, null, 8, ["count"]), r("span", null, O(a.format(e.$time.now, " LLL")), 1)]), r("time", lr, [b(c, {
                count: a.format(e.$time.now, "HH")
            }, null, 8, ["count"]), cr, b(c, {
                count: a.format(e.$time.now, "mm")
            }, null, 8, ["count"])])])) : L("", !0), r("div", ur, [r("div", dr, [b(T, {
                "enter-from-class": "opacity-0 scale-50 blur-xs -rotate-60",
                "enter-active-class": "transition duration-500",
                "leave-active-class": "transition duration-500",
                "leave-to-class": "opacity-0 scale-50 blur-xs -rotate-60"
            }, {
                default: y(() => [e.$time.isNight ? (h(), f("div", hr, gr)) : (h(), f("div", pr, xr))]),
                _: 1
            })]), r("div", br, [r("div", yr, [b(T, {
                "enter-from-class": "opacity-0 scale-50 blur-xs -rotate-60",
                "enter-active-class": "transition duration-500",
                "leave-active-class": "transition duration-500",
                "leave-to-class": "opacity-0 scale-50 blur-xs -rotate-60"
            }, {
                default: y(() => [e.$time.isNight ? (h(), f("svg", _r, Mr)) : (h(), f("svg", Cr, $r))]),
                _: 1
            })]), b(c, {
                count: i.currentTemperature
            }, null, 8, ["count"]), Lr])])]), Tr])) : L("", !0)]),
            _: 1
        })]), s.mdAndLarger ? (h(), G(T, {
            key: 0,
            "enter-from-class": "translate-y-[318px]",
            "enter-active-class": "transition duration-400 ease-out"
        }, {
            default: y(() => [a.isLocked ? L("", !0) : (h(), f("div", Hr, [r("div", Or, [b(d, {
                placement: "top",
                offset: 18
            }, {
                trigger: y(() => [r("div", Ar, [r("picture", null, [r("source", {
                    srcset: `${s.cdnUrl}/images/app-icon.webp`,
                    type: "image/webp"
                }, null, 8, Dr), r("img", {
                    class: C(["object-fit size-full cursor-pointer transition-all duration-100", {
                        "brightness-75": a.appIconFocused
                    }]),
                    src: `${s.cdnUrl}/images/app-icon.png`,
                    alt: "Alcove App Icon",
                    draggable: "false",
                    onMousedown: t[0] || (t[0] = m => a.appIconFocused = !0)
                }, null, 42, Er)])])]),
                content: y(() => [v("Alcove")]),
                _: 1
            }), r("a", Sr, [b(d, {
                placement: "top",
                offset: 18
            }, {
                trigger: y(() => [r("div", Wr, [r("picture", null, [r("source", {
                    srcset: `${s.cdnUrl}/images/klack-app-icon.webp`,
                    type: "image/webp"
                }, null, 8, Br), r("img", {
                    class: C(["object-fit size-full transition-all duration-100", {
                        "brightness-75": a.klackAppIconFocused
                    }]),
                    src: `${s.cdnUrl}/images/klack-app-icon.png`,
                    alt: "Klack App Icon",
                    draggable: "false",
                    onMousedown: t[1] || (t[1] = m => a.klackAppIconFocused = !0)
                }, null, 42, jr)])])]),
                content: y(() => [v("Klack")]),
                _: 1
            })]), zr, Fr])]))]),
            _: 1
        })) : L("", !0), r("div", {
            ref: "imageContainer",
            class: "absolute left-0 right-0 top-0 h-48 w-full overflow-hidden rounded-5xl bg-stone-900 sm:h-full",
            style: S({
                clipPath: `path('${a.heroClipPath}')`
            })
        }, [r("picture", null, [r("source", {
            media: "(min-width: 640px)",
            srcset: `${s.cdnUrl}/images/wallpaper.webp`,
            type: "image/webp"
        }, null, 8, Zr), r("source", {
            media: "(max-width: 640px)",
            srcset: `${s.cdnUrl}/images/wallpaper-alt.webp`,
            type: "image/webp"
        }, null, 8, Yr), r("img", {
            ref: "image",
            class: "aspect-video h-96 w-full object-cover blur sm:h-auto sm:blur-none",
            src: `${s.cdnUrl}/images/wallpaper.jpg`,
            alt: "Wallpaper",
            style: S({
                transform: `translateY(${-a.scrollProgress*a.heightDifference}px)`
            })
        }, null, 12, Nr)])], 4)]), r("div", {
            class: "mt-4 hidden cursor-default select-none items-center p-4 text-sm font-bold text-orange-950/40 sm:flex",
            onMouseenter: t[3] || (t[3] = (...m) => i.handleHintEnter && i.handleHintEnter(...m)),
            onMouseleave: t[4] || (t[4] = (...m) => i.handleHintLeave && i.handleHintLeave(...m))
        }, [(h(), f("svg", {
            class: C(["mr-2 h-3.5 w-3.5 fill-current transition duration-500", {
                "-translate-x-1.5 -translate-y-1.5 duration-700": a.hintHovered,
                "-translate-x-1 -translate-y-1 duration-1000": a.hintActive,
                "duration-700": a.hintLeaving
            }]),
            viewBox: "0 0 28 28",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true"
        }, qr, 2)), v(" Psst… it's interactive! ")], 32)])]),
        _: 1
    }), b(T, {
        "enter-from-class": "translate-y-5 opacity-0",
        "enter-active-class": "transition duration-500 ease",
        appear: ""
    }, {
        default: y(() => [r("section", Ir, [r("div", Rr, [Ur, Qr, Gr, Xr, Jr, Kr, e1, r("div", t1, [n1, s1, r("div", r1, [b(g, null, {
            default: y(({
                isIntersecting: m
            }) => [(h(), f("svg", {
                class: C(["w-44 fill-transparent stroke-current stroke-[0.1875rem] text-purple-400/95", {
                    "animate-draw delay-500": m
                }]),
                viewBox: "0 0 176 55",
                xmlns: "http://www.w3.org/2000/svg",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-dasharray": "500",
                "stroke-dashoffset": "500",
                "aria-hidden": "true"
            }, i1, 2))]),
            _: 1
        })])])]), r("div", o1, [b(o, {
            class: "pl-[3.25rem]",
            href: s.lgAndLarger ? "/download" : s.stripeUrl,
            "aria-label": s.lgAndLarger ? "Download for Mac" : "Purchase"
        }, {
            default: y(() => [l1, r("div", c1, [s.lgAndLarger ? (h(), f(E, {
                key: 0
            }, [v("Download ")], 64)) : (h(), f(E, {
                key: 1
            }, [v("Purchase ")], 64)), u1]), d1]),
            _: 1
        }, 8, ["href", "aria-label"])])])]),
        _: 1
    })])
}
const p1 = N(gs, [
    ["render", h1]
]);
export {
    p1 as
    default
};