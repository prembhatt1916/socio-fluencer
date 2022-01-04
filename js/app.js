/*!
  * Bootstrap v5.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/**
 * @license countdown.js v2.6.0 http://countdownjs.org
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */
var module;
!function (t, e) {
  "object" == typeof exports && void 0 !== module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
  "use strict";
  const t = t => {
    let e = t.getAttribute("data-bs-target");
    if (!e || "#" === e) {
      let n = t.getAttribute("href");
      if (!n || !n.includes("#") && !n.startsWith("."))
        return null;
      n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]),
        e = n && "#" !== n ? n.trim() : null
    }
    return e
  }
    , e = e => {
      const n = t(e);
      return n && document.querySelector(n) ? n : null
    }
    , n = e => {
      const n = t(e);
      return n ? document.querySelector(n) : null
    }
    , r = t => {
      t.dispatchEvent(new Event("transitionend"))
    }
    , s = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
      void 0 !== t.nodeType)
    , i = t => s(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
    , a = (t, e, n) => {
      Object.keys(n).forEach(r => {
        const i = n[r]
          , a = e[r]
          , o = a && s(a) ? "element" : null == (l = a) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
        var l;
        if (!new RegExp(i).test(o))
          throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)
      }
      )
    }
    , o = t => !(!s(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
    , l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
    , c = t => {
      if (!document.documentElement.attachShadow)
        return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
    }
    , u = () => { }
    , p = t => {
      t.offsetHeight
    }
    , d = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
    , h = []
    , f = () => "rtl" === document.documentElement.dir
    , m = t => {
      var e;
      e = () => {
        const e = d();
        if (e) {
          const n = t.NAME
            , r = e.fn[n];
          e.fn[n] = t.jQueryInterface,
            e.fn[n].Constructor = t,
            e.fn[n].noConflict = () => (e.fn[n] = r,
              t.jQueryInterface)
        }
      }
        ,
        "loading" === document.readyState ? (h.length || document.addEventListener("DOMContentLoaded", () => {
          h.forEach(t => t())
        }
        ),
          h.push(e)) : e()
    }
    , g = t => {
      "function" == typeof t && t()
    }
    , v = (t, e, n = !0) => {
      if (!n)
        return void g(t);
      const s = (t => {
        if (!t)
          return 0;
        let { transitionDuration: e, transitionDelay: n } = window.getComputedStyle(t);
        const r = Number.parseFloat(e)
          , s = Number.parseFloat(n);
        return r || s ? (e = e.split(",")[0],
          n = n.split(",")[0],
          1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
      }
      )(e) + 5;
      let i = !1;
      const a = ({ target: n }) => {
        n === e && (i = !0,
          e.removeEventListener("transitionend", a),
          g(t))
      }
        ;
      e.addEventListener("transitionend", a),
        setTimeout(() => {
          i || r(e)
        }
          , s)
    }
    , y = (t, e, n, r) => {
      let s = t.indexOf(e);
      if (-1 === s)
        return t[!n && r ? t.length - 1 : 0];
      const i = t.length;
      return s += n ? 1 : -1,
        r && (s = (s + i) % i),
        t[Math.max(0, Math.min(s, i - 1))]
    }
    , b = /[^.]*(?=\..*)\.|.*/
    , _ = /\..*/
    , w = /::\d+$/
    , S = {};
  let C = 1;
  const x = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }
    , E = /^(mouseenter|mouseleave)/i
    , k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function T(t, e) {
    return e && `${e}::${C++}` || t.uidEvent || C++
  }
  function P(t) {
    const e = T(t);
    return t.uidEvent = e,
      S[e] = S[e] || {},
      S[e]
  }
  function O(t, e, n = null) {
    const r = Object.keys(t);
    for (let s = 0, i = r.length; s < i; s++) {
      const i = t[r[s]];
      if (i.originalHandler === e && i.delegationSelector === n)
        return i
    }
    return null
  }
  function M(t, e, n) {
    const r = "string" == typeof e
      , s = r ? n : e;
    let i = I(t);
    return k.has(i) || (i = t),
      [r, s, i]
  }
  function A(t, e, n, r, s) {
    if ("string" != typeof e || !t)
      return;
    if (n || (n = r,
      r = null),
      E.test(e)) {
      const t = t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
          return t.call(this, e)
      }
        ;
      r ? r = t(r) : n = t(n)
    }
    const [i, a, o] = M(e, n, r)
      , l = P(t)
      , c = l[o] || (l[o] = {})
      , u = O(c, a, i ? n : null);
    if (u)
      return void (u.oneOff = u.oneOff && s);
    const p = T(a, e.replace(b, ""))
      , d = i ? function (t, e, n) {
        return function r(s) {
          const i = t.querySelectorAll(e);
          for (let { target: a } = s; a && a !== this; a = a.parentNode)
            for (let o = i.length; o--;)
              if (i[o] === a)
                return s.delegateTarget = a,
                  r.oneOff && D.off(t, s.type, e, n),
                  n.apply(a, [s]);
          return null
        }
      }(t, n, r) : function (t, e) {
        return function n(r) {
          return r.delegateTarget = t,
            n.oneOff && D.off(t, r.type, e),
            e.apply(t, [r])
        }
      }(t, n);
    d.delegationSelector = i ? n : null,
      d.originalHandler = a,
      d.oneOff = s,
      d.uidEvent = p,
      c[p] = d,
      t.addEventListener(o, d, i)
  }
  function j(t, e, n, r, s) {
    const i = O(e[n], r, s);
    i && (t.removeEventListener(n, i, Boolean(s)),
      delete e[n][i.uidEvent])
  }
  function I(t) {
    return t = t.replace(_, ""),
      x[t] || t
  }
  const D = {
    on(t, e, n, r) {
      A(t, e, n, r, !1)
    },
    one(t, e, n, r) {
      A(t, e, n, r, !0)
    },
    off(t, e, n, r) {
      if ("string" != typeof e || !t)
        return;
      const [s, i, a] = M(e, n, r)
        , o = a !== e
        , l = P(t)
        , c = e.startsWith(".");
      if (void 0 !== i) {
        if (!l || !l[a])
          return;
        return void j(t, l, a, i, s ? n : null)
      }
      c && Object.keys(l).forEach(n => {
        !function (t, e, n, r) {
          const s = e[n] || {};
          Object.keys(s).forEach(i => {
            if (i.includes(r)) {
              const r = s[i];
              j(t, e, n, r.originalHandler, r.delegationSelector)
            }
          }
          )
        }(t, l, n, e.slice(1))
      }
      );
      const u = l[a] || {};
      Object.keys(u).forEach(n => {
        const r = n.replace(w, "");
        if (!o || e.includes(r)) {
          const e = u[n];
          j(t, l, a, e.originalHandler, e.delegationSelector)
        }
      }
      )
    },
    trigger(t, e, n) {
      if ("string" != typeof e || !t)
        return null;
      const r = d()
        , s = I(e)
        , i = e !== s
        , a = k.has(s);
      let o, l = !0, c = !0, u = !1, p = null;
      return i && r && (o = r.Event(e, n),
        r(t).trigger(o),
        l = !o.isPropagationStopped(),
        c = !o.isImmediatePropagationStopped(),
        u = o.isDefaultPrevented()),
        a ? (p = document.createEvent("HTMLEvents"),
          p.initEvent(s, l, !0)) : p = new CustomEvent(e, {
            bubbles: l,
            cancelable: !0
          }),
        void 0 !== n && Object.keys(n).forEach(t => {
          Object.defineProperty(p, t, {
            get: () => n[t]
          })
        }
        ),
        u && p.preventDefault(),
        c && t.dispatchEvent(p),
        p.defaultPrevented && void 0 !== o && o.preventDefault(),
        p
    }
  }
    , L = new Map;
  var V = {
    set(t, e, n) {
      L.has(t) || L.set(t, new Map);
      const r = L.get(t);
      r.has(e) || 0 === r.size ? r.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)
    },
    get: (t, e) => L.has(t) && L.get(t).get(e) || null,
    remove(t, e) {
      if (!L.has(t))
        return;
      const n = L.get(t);
      n.delete(e),
        0 === n.size && L.delete(t)
    }
  };
  class $ {
    constructor(t) {
      (t = i(t)) && (this._element = t,
        V.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      V.remove(this._element, this.constructor.DATA_KEY),
        D.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach(t => {
          this[t] = null
        }
        )
    }
    _queueCallback(t, e, n = !0) {
      v(t, e, n)
    }
    static getInstance(t) {
      return V.get(i(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
    }
    static get VERSION() {
      return "5.1.0"
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!')
    }
    static get DATA_KEY() {
      return "bs." + this.NAME
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY
    }
  }
  const N = (t, e = "hide") => {
    const r = "click.dismiss" + t.EVENT_KEY
      , s = t.NAME;
    D.on(document, r, `[data-bs-dismiss="${s}"]`, (function (r) {
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(),
        l(this))
        return;
      const i = n(this) || this.closest("." + s);
      t.getOrCreateInstance(i)[e]()
    }
    ))
  }
    ;
  class H extends $ {
    static get NAME() {
      return "alert"
    }
    close() {
      if (D.trigger(this._element, "close.bs.alert").defaultPrevented)
        return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t)
    }
    _destroyElement() {
      this._element.remove(),
        D.trigger(this._element, "closed.bs.alert"),
        this.dispose()
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = H.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }
      ))
    }
  }
  N(H, "close"),
    m(H);
  class R extends $ {
    static get NAME() {
      return "button"
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = R.getOrCreateInstance(this);
        "toggle" === t && e[t]()
      }
      ))
    }
  }
  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
  }
  function q(t) {
    return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
  }
  D.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
    t.preventDefault();
    const e = t.target.closest('[data-bs-toggle="button"]');
    R.getOrCreateInstance(e).toggle()
  }
  ),
    m(R);
  const B = {
    setDataAttribute(t, e, n) {
      t.setAttribute("data-bs-" + q(e), n)
    },
    removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + q(e))
    },
    getDataAttributes(t) {
      if (!t)
        return {};
      const e = {};
      return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(n => {
        let r = n.replace(/^bs/, "");
        r = r.charAt(0).toLowerCase() + r.slice(1, r.length),
          e[r] = z(t.dataset[n])
      }
      ),
        e
    },
    getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + q(e))),
    offset(t) {
      const e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      }
    },
    position: t => ({
      top: t.offsetTop,
      left: t.offsetLeft
    })
  }
    , F = {
      find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
      parents(t, e) {
        const n = [];
        let r = t.parentNode;
        for (; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType;)
          r.matches(e) && n.push(r),
            r = r.parentNode;
        return n
      },
      prev(t, e) {
        let n = t.previousElementSibling;
        for (; n;) {
          if (n.matches(e))
            return [n];
          n = n.previousElementSibling
        }
        return []
      },
      next(t, e) {
        let n = t.nextElementSibling;
        for (; n;) {
          if (n.matches(e))
            return [n];
          n = n.nextElementSibling
        }
        return []
      },
      focusableChildren(t) {
        const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => t + ':not([tabindex^="-"])').join(", ");
        return this.find(e, t).filter(t => !l(t) && o(t))
      }
    }
    , W = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    }
    , U = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    }
    , G = "next"
    , Y = "prev"
    , X = "left"
    , K = "right"
    , Q = {
      ArrowLeft: K,
      ArrowRight: X
    };
  class J extends $ {
    constructor(t, e) {
      super(t),
        this._items = null,
        this._interval = null,
        this._activeElement = null,
        this._isPaused = !1,
        this._isSliding = !1,
        this.touchTimeout = null,
        this.touchStartX = 0,
        this.touchDeltaX = 0,
        this._config = this._getConfig(e),
        this._indicatorsElement = F.findOne(".carousel-indicators", this._element),
        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0,
        this._pointerEvent = Boolean(window.PointerEvent),
        this._addEventListeners()
    }
    static get Default() {
      return W
    }
    static get NAME() {
      return "carousel"
    }
    next() {
      this._slide(G)
    }
    nextWhenVisible() {
      !document.hidden && o(this._element) && this.next()
    }
    prev() {
      this._slide(Y)
    }
    pause(t) {
      t || (this._isPaused = !0),
        F.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element),
          this.cycle(!0)),
        clearInterval(this._interval),
        this._interval = null
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval),
          this._interval = null),
        this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }
    to(t) {
      this._activeElement = F.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0)
        return;
      if (this._isSliding)
        return void D.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t)
        return this.pause(),
          void this.cycle();
      const n = t > e ? G : Y;
      this._slide(n, this._items[t])
    }
    _getConfig(t) {
      return t = {
        ...W,
        ...B.getDataAttributes(this._element),
        ..."object" == typeof t ? t : {}
      },
        a("carousel", t, U),
        t
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40)
        return;
      const e = t / this.touchDeltaX;
      this.touchDeltaX = 0,
        e && this._slide(e > 0 ? K : X)
    }
    _addEventListeners() {
      this._config.keyboard && D.on(this._element, "keydown.bs.carousel", t => this._keydown(t)),
        "hover" === this._config.pause && (D.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)),
          D.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))),
        this._config.touch && this._touchSupported && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      const t = t => {
        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
      }
        , e = t => {
          this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
        }
        , n = t => {
          !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause && (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
        }
        ;
      F.find(".carousel-item img", this._element).forEach(t => {
        D.on(t, "dragstart.bs.carousel", t => t.preventDefault())
      }
      ),
        this._pointerEvent ? (D.on(this._element, "pointerdown.bs.carousel", e => t(e)),
          D.on(this._element, "pointerup.bs.carousel", t => n(t)),
          this._element.classList.add("pointer-event")) : (D.on(this._element, "touchstart.bs.carousel", e => t(e)),
            D.on(this._element, "touchmove.bs.carousel", t => e(t)),
            D.on(this._element, "touchend.bs.carousel", t => n(t)))
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName))
        return;
      const e = Q[t.key];
      e && (t.preventDefault(),
        this._slide(e))
    }
    _getItemIndex(t) {
      return this._items = t && t.parentNode ? F.find(".carousel-item", t.parentNode) : [],
        this._items.indexOf(t)
    }
    _getItemByOrder(t, e) {
      const n = t === G;
      return y(this._items, e, n, this._config.wrap)
    }
    _triggerSlideEvent(t, e) {
      const n = this._getItemIndex(t)
        , r = this._getItemIndex(F.findOne(".active.carousel-item", this._element));
      return D.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: r,
        to: n
      })
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = F.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"),
          e.removeAttribute("aria-current");
        const n = F.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < n.length; e++)
          if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
            n[e].classList.add("active"),
              n[e].setAttribute("aria-current", "true");
            break
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || F.findOne(".active.carousel-item", this._element);
      if (!t)
        return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
        this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
    }
    _slide(t, e) {
      const n = this._directionToOrder(t)
        , r = F.findOne(".active.carousel-item", this._element)
        , s = this._getItemIndex(r)
        , i = e || this._getItemByOrder(n, r)
        , a = this._getItemIndex(i)
        , o = Boolean(this._interval)
        , l = n === G
        , c = l ? "carousel-item-start" : "carousel-item-end"
        , u = l ? "carousel-item-next" : "carousel-item-prev"
        , d = this._orderToDirection(n);
      if (i && i.classList.contains("active"))
        return void (this._isSliding = !1);
      if (this._isSliding)
        return;
      if (this._triggerSlideEvent(i, d).defaultPrevented)
        return;
      if (!r || !i)
        return;
      this._isSliding = !0,
        o && this.pause(),
        this._setActiveIndicatorElement(i),
        this._activeElement = i;
      const h = () => {
        D.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: i,
          direction: d,
          from: s,
          to: a
        })
      }
        ;
      if (this._element.classList.contains("slide")) {
        i.classList.add(u),
          p(i),
          r.classList.add(c),
          i.classList.add(c);
        const t = () => {
          i.classList.remove(c, u),
            i.classList.add("active"),
            r.classList.remove("active", u, c),
            this._isSliding = !1,
            setTimeout(h, 0)
        }
          ;
        this._queueCallback(t, r, !0)
      } else
        r.classList.remove("active"),
          i.classList.add("active"),
          this._isSliding = !1,
          h();
      o && this.cycle()
    }
    _directionToOrder(t) {
      return [K, X].includes(t) ? f() ? t === X ? Y : G : t === X ? G : Y : t
    }
    _orderToDirection(t) {
      return [G, Y].includes(t) ? f() ? t === Y ? X : K : t === Y ? K : X : t
    }
    static carouselInterface(t, e) {
      const n = J.getOrCreateInstance(t, e);
      let { _config: r } = n;
      "object" == typeof e && (r = {
        ...r,
        ...e
      });
      const s = "string" == typeof e ? e : r.slide;
      if ("number" == typeof e)
        n.to(e);
      else if ("string" == typeof s) {
        if (void 0 === n[s])
          throw new TypeError(`No method named "${s}"`);
        n[s]()
      } else
        r.interval && r.ride && (n.pause(),
          n.cycle())
    }
    static jQueryInterface(t) {
      return this.each((function () {
        J.carouselInterface(this, t)
      }
      ))
    }
    static dataApiClickHandler(t) {
      const e = n(this);
      if (!e || !e.classList.contains("carousel"))
        return;
      const r = {
        ...B.getDataAttributes(e),
        ...B.getDataAttributes(this)
      }
        , s = this.getAttribute("data-bs-slide-to");
      s && (r.interval = !1),
        J.carouselInterface(e, r),
        s && J.getInstance(e).to(s),
        t.preventDefault()
    }
  }
  D.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler),
    D.on(window, "load.bs.carousel.data-api", () => {
      const t = F.find('[data-bs-ride="carousel"]');
      for (let e = 0, n = t.length; e < n; e++)
        J.carouselInterface(t[e], J.getInstance(t[e]))
    }
    ),
    m(J);
  const Z = {
    toggle: !0,
    parent: null
  }
    , tt = {
      toggle: "boolean",
      parent: "(null|element)"
    };
  class et extends $ {
    constructor(t, n) {
      super(t),
        this._isTransitioning = !1,
        this._config = this._getConfig(n),
        this._triggerArray = [];
      const r = F.find('[data-bs-toggle="collapse"]');
      for (let t = 0, n = r.length; t < n; t++) {
        const n = r[t]
          , s = e(n)
          , i = F.find(s).filter(t => t === this._element);
        null !== s && i.length && (this._selector = s,
          this._triggerArray.push(n))
      }
      this._initializeChildren(),
        this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle()
    }
    static get Default() {
      return Z
    }
    static get NAME() {
      return "collapse"
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let t, e = [];
      if (this._config.parent) {
        const t = F.find(".collapse .collapse", this._config.parent);
        e = F.find(".show, .collapsing", this._config.parent).filter(e => !t.includes(e))
      }
      const n = F.findOne(this._selector);
      if (e.length) {
        const r = e.find(t => n !== t);
        if (t = r ? et.getInstance(r) : null,
          t && t._isTransitioning)
          return
      }
      if (D.trigger(this._element, "show.bs.collapse").defaultPrevented)
        return;
      e.forEach(e => {
        n !== e && et.getOrCreateInstance(e, {
          toggle: !1
        }).hide(),
          t || V.set(e, "bs.collapse", null)
      }
      );
      const r = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        this._element.style[r] = 0,
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        this._isTransitioning = !0;
      const s = "scroll" + (r[0].toUpperCase() + r.slice(1));
      this._queueCallback(() => {
        this._isTransitioning = !1,
          this._element.classList.remove("collapsing"),
          this._element.classList.add("collapse", "show"),
          this._element.style[r] = "",
          D.trigger(this._element, "shown.bs.collapse")
      }
        , this._element, !0),
        this._element.style[r] = this._element[s] + "px"
    }
    hide() {
      if (this._isTransitioning || !this._isShown())
        return;
      if (D.trigger(this._element, "hide.bs.collapse").defaultPrevented)
        return;
      const t = this._getDimension();
      this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
        p(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t]
          , r = n(e);
        r && !this._isShown(r) && this._addAriaAndCollapsedClass([e], !1)
      }
      this._isTransitioning = !0,
        this._element.style[t] = "",
        this._queueCallback(() => {
          this._isTransitioning = !1,
            this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse"),
            D.trigger(this._element, "hidden.bs.collapse")
        }
          , this._element, !0)
    }
    _isShown(t = this._element) {
      return t.classList.contains("show")
    }
    _getConfig(t) {
      return (t = {
        ...Z,
        ...B.getDataAttributes(this._element),
        ...t
      }).toggle = Boolean(t.toggle),
        t.parent = i(t.parent),
        a("collapse", t, tt),
        t
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const t = F.find(".collapse .collapse", this._config.parent);
      F.find('[data-bs-toggle="collapse"]', this._config.parent).filter(e => !t.includes(e)).forEach(t => {
        const e = n(t);
        e && this._addAriaAndCollapsedClass([t], this._isShown(e))
      }
      )
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length && t.forEach(t => {
        e ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
          t.setAttribute("aria-expanded", e)
      }
      )
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const n = et.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === n[t])
            throw new TypeError(`No method named "${t}"`);
          n[t]()
        }
      }
      ))
    }
  }
  D.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    const n = e(this);
    F.find(n).forEach(t => {
      et.getOrCreateInstance(t, {
        toggle: !1
      }).toggle()
    }
    )
  }
  )),
    m(et);
  var nt = "top"
    , rt = "bottom"
    , st = "right"
    , it = "left"
    , at = [nt, rt, st, it]
    , ot = at.reduce((function (t, e) {
      return t.concat([e + "-start", e + "-end"])
    }
    ), [])
    , lt = [].concat(at, ["auto"]).reduce((function (t, e) {
      return t.concat([e, e + "-start", e + "-end"])
    }
    ), [])
    , ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  function ut(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }
  function pt(t) {
    if (null == t)
      return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window
    }
    return t
  }
  function dt(t) {
    return t instanceof pt(t).Element || t instanceof Element
  }
  function ht(t) {
    return t instanceof pt(t).HTMLElement || t instanceof HTMLElement
  }
  function ft(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof pt(t).ShadowRoot || t instanceof ShadowRoot)
  }
  var mt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach((function (t) {
        var n = e.styles[t] || {}
          , r = e.attributes[t] || {}
          , s = e.elements[t];
        ht(s) && ut(s) && (Object.assign(s.style, n),
          Object.keys(r).forEach((function (t) {
            var e = r[t];
            !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
          }
          )))
      }
      ))
    },
    effect: function (t) {
      var e = t.state
        , n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, n.popper),
        e.styles = n,
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
          Object.keys(e.elements).forEach((function (t) {
            var r = e.elements[t]
              , s = e.attributes[t] || {}
              , i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function (t, e) {
                return t[e] = "",
                  t
              }
              ), {});
            ht(r) && ut(r) && (Object.assign(r.style, i),
              Object.keys(s).forEach((function (t) {
                r.removeAttribute(t)
              }
              )))
          }
          ))
        }
    },
    requires: ["computeStyles"]
  };
  function gt(t) {
    return t.split("-")[0]
  }
  var vt = Math.round;
  function yt(t, e) {
    void 0 === e && (e = !1);
    var n = t.getBoundingClientRect()
      , r = 1
      , s = 1;
    return ht(t) && e && (r = n.width / t.offsetWidth || 1,
      s = n.height / t.offsetHeight || 1),
    {
      width: vt(n.width / r),
      height: vt(n.height / s),
      top: vt(n.top / s),
      right: vt(n.right / r),
      bottom: vt(n.bottom / s),
      left: vt(n.left / r),
      x: vt(n.left / r),
      y: vt(n.top / s)
    }
  }
  function bt(t) {
    var e = yt(t)
      , n = t.offsetWidth
      , r = t.offsetHeight;
    return Math.abs(e.width - n) <= 1 && (n = e.width),
      Math.abs(e.height - r) <= 1 && (r = e.height),
    {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: n,
      height: r
    }
  }
  function _t(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e))
      return !0;
    if (n && ft(n)) {
      var r = e;
      do {
        if (r && t.isSameNode(r))
          return !0;
        r = r.parentNode || r.host
      } while (r)
    }
    return !1
  }
  function wt(t) {
    return pt(t).getComputedStyle(t)
  }
  function St(t) {
    return ["table", "td", "th"].indexOf(ut(t)) >= 0
  }
  function Ct(t) {
    return ((dt(t) ? t.ownerDocument : t.document) || window.document).documentElement
  }
  function xt(t) {
    return "html" === ut(t) ? t : t.assignedSlot || t.parentNode || (ft(t) ? t.host : null) || Ct(t)
  }
  function Et(t) {
    return ht(t) && "fixed" !== wt(t).position ? t.offsetParent : null
  }
  function kt(t) {
    for (var e = pt(t), n = Et(t); n && St(n) && "static" === wt(n).position;)
      n = Et(n);
    return n && ("html" === ut(n) || "body" === ut(n) && "static" === wt(n).position) ? e : n || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && ht(t) && "fixed" === wt(t).position)
        return null;
      for (var n = xt(t); ht(n) && ["html", "body"].indexOf(ut(n)) < 0;) {
        var r = wt(n);
        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || e && "filter" === r.willChange || e && r.filter && "none" !== r.filter)
          return n;
        n = n.parentNode
      }
      return null
    }(t) || e
  }
  function Tt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
  }
  var Pt = Math.max
    , Ot = Math.min
    , Mt = Math.round;
  function At(t, e, n) {
    return Pt(t, Ot(e, n))
  }
  function jt(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t)
  }
  function It(t, e) {
    return e.reduce((function (e, n) {
      return e[n] = t,
        e
    }
    ), {})
  }
  var Dt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e, n = t.state, r = t.name, s = t.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, o = gt(n.placement), l = Tt(o), c = [it, st].indexOf(o) >= 0 ? "height" : "width";
      if (i && a) {
        var u = function (t, e) {
          return jt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : It(t, at))
        }(s.padding, n)
          , p = bt(i)
          , d = "y" === l ? nt : it
          , h = "y" === l ? rt : st
          , f = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c]
          , m = a[l] - n.rects.reference[l]
          , g = kt(i)
          , v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0
          , y = f / 2 - m / 2
          , b = u[d]
          , _ = v - p[c] - u[h]
          , w = v / 2 - p[c] / 2 + y
          , S = At(b, w, _)
          , C = l;
        n.modifiersData[r] = ((e = {})[C] = S,
          e.centerOffset = S - w,
          e)
      }
    },
    effect: function (t) {
      var e = t.state
        , n = t.options.element
        , r = void 0 === n ? "[data-popper-arrow]" : n;
      null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && _t(e.elements.popper, r) && (e.elements.arrow = r)
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  }
    , Lt = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
  function Vt(t) {
    var e, n = t.popper, r = t.popperRect, s = t.placement, i = t.offsets, a = t.position, o = t.gpuAcceleration, l = t.adaptive, c = t.roundOffsets, u = !0 === c ? function (t) {
      var e = t.x
        , n = t.y
        , r = window.devicePixelRatio || 1;
      return {
        x: Mt(Mt(e * r) / r) || 0,
        y: Mt(Mt(n * r) / r) || 0
      }
    }(i) : "function" == typeof c ? c(i) : i, p = u.x, d = void 0 === p ? 0 : p, h = u.y, f = void 0 === h ? 0 : h, m = i.hasOwnProperty("x"), g = i.hasOwnProperty("y"), v = it, y = nt, b = window;
    if (l) {
      var _ = kt(n)
        , w = "clientHeight"
        , S = "clientWidth";
      _ === pt(n) && "static" !== wt(_ = Ct(n)).position && (w = "scrollHeight",
        S = "scrollWidth"),
        _ = _,
        s === nt && (y = rt,
          f -= _[w] - r.height,
          f *= o ? 1 : -1),
        s === it && (v = st,
          d -= _[S] - r.width,
          d *= o ? 1 : -1)
    }
    var C, x = Object.assign({
      position: a
    }, l && Lt);
    return o ? Object.assign({}, x, ((C = {})[y] = g ? "0" : "",
      C[v] = m ? "0" : "",
      C.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)",
      C)) : Object.assign({}, x, ((e = {})[y] = g ? f + "px" : "",
        e[v] = m ? d + "px" : "",
        e.transform = "",
        e))
  }
  var $t = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state
        , n = t.options
        , r = n.gpuAcceleration
        , s = void 0 === r || r
        , i = n.adaptive
        , a = void 0 === i || i
        , o = n.roundOffsets
        , l = void 0 === o || o
        , c = {
          placement: gt(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s
        };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Vt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: a,
        roundOffsets: l
      })))),
        null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Vt(Object.assign({}, c, {
          offsets: e.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: l
        })))),
        e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement
        })
    },
    data: {}
  }
    , Nt = {
      passive: !0
    }
    , Ht = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () { },
      effect: function (t) {
        var e = t.state
          , n = t.instance
          , r = t.options
          , s = r.scroll
          , i = void 0 === s || s
          , a = r.resize
          , o = void 0 === a || a
          , l = pt(e.elements.popper)
          , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return i && c.forEach((function (t) {
          t.addEventListener("scroll", n.update, Nt)
        }
        )),
          o && l.addEventListener("resize", n.update, Nt),
          function () {
            i && c.forEach((function (t) {
              t.removeEventListener("scroll", n.update, Nt)
            }
            )),
              o && l.removeEventListener("resize", n.update, Nt)
          }
      },
      data: {}
    }
    , Rt = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
  function zt(t) {
    return t.replace(/left|right|bottom|top/g, (function (t) {
      return Rt[t]
    }
    ))
  }
  var qt = {
    start: "end",
    end: "start"
  };
  function Bt(t) {
    return t.replace(/start|end/g, (function (t) {
      return qt[t]
    }
    ))
  }
  function Ft(t) {
    var e = pt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    }
  }
  function Wt(t) {
    return yt(Ct(t)).left + Ft(t).scrollLeft
  }
  function Ut(t) {
    var e = wt(t)
      , n = e.overflow
      , r = e.overflowX
      , s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + r)
  }
  function Gt(t, e) {
    var n;
    void 0 === e && (e = []);
    var r = function t(e) {
      return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : ht(e) && Ut(e) ? e : t(xt(e))
    }(t)
      , s = r === (null == (n = t.ownerDocument) ? void 0 : n.body)
      , i = pt(r)
      , a = s ? [i].concat(i.visualViewport || [], Ut(r) ? r : []) : r
      , o = e.concat(a);
    return s ? o : o.concat(Gt(xt(a)))
  }
  function Yt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    })
  }
  function Xt(t, e) {
    return "viewport" === e ? Yt(function (t) {
      var e = pt(t)
        , n = Ct(t)
        , r = e.visualViewport
        , s = n.clientWidth
        , i = n.clientHeight
        , a = 0
        , o = 0;
      return r && (s = r.width,
        i = r.height,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft,
          o = r.offsetTop)),
      {
        width: s,
        height: i,
        x: a + Wt(t),
        y: o
      }
    }(t)) : ht(e) ? function (t) {
      var e = yt(t);
      return e.top = e.top + t.clientTop,
        e.left = e.left + t.clientLeft,
        e.bottom = e.top + t.clientHeight,
        e.right = e.left + t.clientWidth,
        e.width = t.clientWidth,
        e.height = t.clientHeight,
        e.x = e.left,
        e.y = e.top,
        e
    }(e) : Yt(function (t) {
      var e, n = Ct(t), r = Ft(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, i = Pt(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Pt(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), o = -r.scrollLeft + Wt(t), l = -r.scrollTop;
      return "rtl" === wt(s || n).direction && (o += Pt(n.clientWidth, s ? s.clientWidth : 0) - i),
      {
        width: i,
        height: a,
        x: o,
        y: l
      }
    }(Ct(t)))
  }
  function Kt(t) {
    return t.split("-")[1]
  }
  function Qt(t) {
    var e, n = t.reference, r = t.element, s = t.placement, i = s ? gt(s) : null, a = s ? Kt(s) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2;
    switch (i) {
      case nt:
        e = {
          x: o,
          y: n.y - r.height
        };
        break;
      case rt:
        e = {
          x: o,
          y: n.y + n.height
        };
        break;
      case st:
        e = {
          x: n.x + n.width,
          y: l
        };
        break;
      case it:
        e = {
          x: n.x - r.width,
          y: l
        };
        break;
      default:
        e = {
          x: n.x,
          y: n.y
        }
    }
    var c = i ? Tt(i) : null;
    if (null != c) {
      var u = "y" === c ? "height" : "width";
      switch (a) {
        case "start":
          e[c] = e[c] - (n[u] / 2 - r[u] / 2);
          break;
        case "end":
          e[c] = e[c] + (n[u] / 2 - r[u] / 2)
      }
    }
    return e
  }
  function Jt(t, e) {
    void 0 === e && (e = {});
    var n = e
      , r = n.placement
      , s = void 0 === r ? t.placement : r
      , i = n.boundary
      , a = void 0 === i ? "clippingParents" : i
      , o = n.rootBoundary
      , l = void 0 === o ? "viewport" : o
      , c = n.elementContext
      , u = void 0 === c ? "popper" : c
      , p = n.altBoundary
      , d = void 0 !== p && p
      , h = n.padding
      , f = void 0 === h ? 0 : h
      , m = jt("number" != typeof f ? f : It(f, at))
      , g = "popper" === u ? "reference" : "popper"
      , v = t.elements.reference
      , y = t.rects.popper
      , b = t.elements[d ? g : u]
      , _ = function (t, e, n) {
        var r = "clippingParents" === e ? function (t) {
          var e = Gt(xt(t))
            , n = ["absolute", "fixed"].indexOf(wt(t).position) >= 0 && ht(t) ? kt(t) : t;
          return dt(n) ? e.filter((function (t) {
            return dt(t) && _t(t, n) && "body" !== ut(t)
          }
          )) : []
        }(t) : [].concat(e)
          , s = [].concat(r, [n])
          , i = s[0]
          , a = s.reduce((function (e, n) {
            var r = Xt(t, n);
            return e.top = Pt(r.top, e.top),
              e.right = Ot(r.right, e.right),
              e.bottom = Ot(r.bottom, e.bottom),
              e.left = Pt(r.left, e.left),
              e
          }
          ), Xt(t, i));
        return a.width = a.right - a.left,
          a.height = a.bottom - a.top,
          a.x = a.left,
          a.y = a.top,
          a
      }(dt(b) ? b : b.contextElement || Ct(t.elements.popper), a, l)
      , w = yt(v)
      , S = Qt({
        reference: w,
        element: y,
        strategy: "absolute",
        placement: s
      })
      , C = Yt(Object.assign({}, y, S))
      , x = "popper" === u ? C : w
      , E = {
        top: _.top - x.top + m.top,
        bottom: x.bottom - _.bottom + m.bottom,
        left: _.left - x.left + m.left,
        right: x.right - _.right + m.right
      }
      , k = t.modifiersData.offset;
    if ("popper" === u && k) {
      var T = k[s];
      Object.keys(E).forEach((function (t) {
        var e = [st, rt].indexOf(t) >= 0 ? 1 : -1
          , n = [nt, rt].indexOf(t) >= 0 ? "y" : "x";
        E[t] += T[n] * e
      }
      ))
    }
    return E
  }
  var Zt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state
        , n = t.options
        , r = t.name;
      if (!e.modifiersData[r]._skip) {
        for (var s = n.mainAxis, i = void 0 === s || s, a = n.altAxis, o = void 0 === a || a, l = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, f = void 0 === h || h, m = n.allowedAutoPlacements, g = e.options.placement, v = gt(g), y = l || (v !== g && f ? function (t) {
          if ("auto" === gt(t))
            return [];
          var e = zt(t);
          return [Bt(t), e, Bt(e)]
        }(g) : [zt(g)]), b = [g].concat(y).reduce((function (t, n) {
          return t.concat("auto" === gt(n) ? function (t, e) {
            void 0 === e && (e = {});
            var n = e
              , r = n.placement
              , s = n.boundary
              , i = n.rootBoundary
              , a = n.padding
              , o = n.flipVariations
              , l = n.allowedAutoPlacements
              , c = void 0 === l ? lt : l
              , u = Kt(r)
              , p = u ? o ? ot : ot.filter((function (t) {
                return Kt(t) === u
              }
              )) : at
              , d = p.filter((function (t) {
                return c.indexOf(t) >= 0
              }
              ));
            0 === d.length && (d = p);
            var h = d.reduce((function (e, n) {
              return e[n] = Jt(t, {
                placement: n,
                boundary: s,
                rootBoundary: i,
                padding: a
              })[gt(n)],
                e
            }
            ), {});
            return Object.keys(h).sort((function (t, e) {
              return h[t] - h[e]
            }
            ))
          }(e, {
            placement: n,
            boundary: u,
            rootBoundary: p,
            padding: c,
            flipVariations: f,
            allowedAutoPlacements: m
          }) : n)
        }
        ), []), _ = e.rects.reference, w = e.rects.popper, S = new Map, C = !0, x = b[0], E = 0; E < b.length; E++) {
          var k = b[E]
            , T = gt(k)
            , P = "start" === Kt(k)
            , O = [nt, rt].indexOf(T) >= 0
            , M = O ? "width" : "height"
            , A = Jt(e, {
              placement: k,
              boundary: u,
              rootBoundary: p,
              altBoundary: d,
              padding: c
            })
            , j = O ? P ? st : it : P ? rt : nt;
          _[M] > w[M] && (j = zt(j));
          var I = zt(j)
            , D = [];
          if (i && D.push(A[T] <= 0),
            o && D.push(A[j] <= 0, A[I] <= 0),
            D.every((function (t) {
              return t
            }
            ))) {
            x = k,
              C = !1;
            break
          }
          S.set(k, D)
        }
        if (C)
          for (var L = function (t) {
            var e = b.find((function (e) {
              var n = S.get(e);
              if (n)
                return n.slice(0, t).every((function (t) {
                  return t
                }
                ))
            }
            ));
            if (e)
              return x = e,
                "break"
          }, V = f ? 3 : 1; V > 0 && "break" !== L(V); V--)
            ;
        e.placement !== x && (e.modifiersData[r]._skip = !0,
          e.placement = x,
          e.reset = !0)
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function te(t, e, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x
    }
  }
  function ee(t) {
    return [nt, st, rt, it].some((function (e) {
      return t[e] >= 0
    }
    ))
  }
  var ne = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state
        , n = t.name
        , r = e.rects.reference
        , s = e.rects.popper
        , i = e.modifiersData.preventOverflow
        , a = Jt(e, {
          elementContext: "reference"
        })
        , o = Jt(e, {
          altBoundary: !0
        })
        , l = te(a, r)
        , c = te(o, s, i)
        , u = ee(l)
        , p = ee(c);
      e.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: u,
        hasPopperEscaped: p
      },
        e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": u,
          "data-popper-escaped": p
        })
    }
  }
    , re = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state
          , n = t.options
          , r = t.name
          , s = n.offset
          , i = void 0 === s ? [0, 0] : s
          , a = lt.reduce((function (t, n) {
            return t[n] = function (t, e, n) {
              var r = gt(t)
                , s = [it, nt].indexOf(r) >= 0 ? -1 : 1
                , i = "function" == typeof n ? n(Object.assign({}, e, {
                  placement: t
                })) : n
                , a = i[0]
                , o = i[1];
              return a = a || 0,
                o = (o || 0) * s,
                [it, st].indexOf(r) >= 0 ? {
                  x: o,
                  y: a
                } : {
                  x: a,
                  y: o
                }
            }(n, e.rects, i),
              t
          }
          ), {})
          , o = a[e.placement]
          , l = o.x
          , c = o.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
          e.modifiersData.popperOffsets.y += c),
          e.modifiersData[r] = a
      }
    }
    , se = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state
          , n = t.name;
        e.modifiersData[n] = Qt({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        })
      },
      data: {}
    }
    , ie = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state
          , n = t.options
          , r = t.name
          , s = n.mainAxis
          , i = void 0 === s || s
          , a = n.altAxis
          , o = void 0 !== a && a
          , l = n.boundary
          , c = n.rootBoundary
          , u = n.altBoundary
          , p = n.padding
          , d = n.tether
          , h = void 0 === d || d
          , f = n.tetherOffset
          , m = void 0 === f ? 0 : f
          , g = Jt(e, {
            boundary: l,
            rootBoundary: c,
            padding: p,
            altBoundary: u
          })
          , v = gt(e.placement)
          , y = Kt(e.placement)
          , b = !y
          , _ = Tt(v)
          , w = "x" === _ ? "y" : "x"
          , S = e.modifiersData.popperOffsets
          , C = e.rects.reference
          , x = e.rects.popper
          , E = "function" == typeof m ? m(Object.assign({}, e.rects, {
            placement: e.placement
          })) : m
          , k = {
            x: 0,
            y: 0
          };
        if (S) {
          if (i || o) {
            var T = "y" === _ ? nt : it
              , P = "y" === _ ? rt : st
              , O = "y" === _ ? "height" : "width"
              , M = S[_]
              , A = S[_] + g[T]
              , j = S[_] - g[P]
              , I = h ? -x[O] / 2 : 0
              , D = "start" === y ? C[O] : x[O]
              , L = "start" === y ? -x[O] : -C[O]
              , V = e.elements.arrow
              , $ = h && V ? bt(V) : {
                width: 0,
                height: 0
              }
              , N = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
              , H = N[T]
              , R = N[P]
              , z = At(0, C[O], $[O])
              , q = b ? C[O] / 2 - I - z - H - E : D - z - H - E
              , B = b ? -C[O] / 2 + I + z + R + E : L + z + R + E
              , F = e.elements.arrow && kt(e.elements.arrow)
              , W = F ? "y" === _ ? F.clientTop || 0 : F.clientLeft || 0 : 0
              , U = e.modifiersData.offset ? e.modifiersData.offset[e.placement][_] : 0
              , G = S[_] + q - U - W
              , Y = S[_] + B - U;
            if (i) {
              var X = At(h ? Ot(A, G) : A, M, h ? Pt(j, Y) : j);
              S[_] = X,
                k[_] = X - M
            }
            if (o) {
              var K = "x" === _ ? nt : it
                , Q = "x" === _ ? rt : st
                , J = S[w]
                , Z = J + g[K]
                , tt = J - g[Q]
                , et = At(h ? Ot(Z, G) : Z, J, h ? Pt(tt, Y) : tt);
              S[w] = et,
                k[w] = et - J
            }
          }
          e.modifiersData[r] = k
        }
      },
      requiresIfExists: ["offset"]
    };
  function ae(t, e, n) {
    void 0 === n && (n = !1);
    var r, s, i = ht(e), a = ht(e) && function (t) {
      var e = t.getBoundingClientRect()
        , n = e.width / t.offsetWidth || 1
        , r = e.height / t.offsetHeight || 1;
      return 1 !== n || 1 !== r
    }(e), o = Ct(e), l = yt(t, a), c = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = {
      x: 0,
      y: 0
    };
    return (i || !i && !n) && (("body" !== ut(e) || Ut(o)) && (c = (r = e) !== pt(r) && ht(r) ? {
      scrollLeft: (s = r).scrollLeft,
      scrollTop: s.scrollTop
    } : Ft(r)),
      ht(e) ? ((u = yt(e, !0)).x += e.clientLeft,
        u.y += e.clientTop) : o && (u.x = Wt(o))),
    {
      x: l.left + c.scrollLeft - u.x,
      y: l.top + c.scrollTop - u.y,
      width: l.width,
      height: l.height
    }
  }
  var oe = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function le() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return !e.some((function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    }
    ))
  }
  function ce(t) {
    void 0 === t && (t = {});
    var e = t
      , n = e.defaultModifiers
      , r = void 0 === n ? [] : n
      , s = e.defaultOptions
      , i = void 0 === s ? oe : s;
    return function (t, e, n) {
      void 0 === n && (n = i);
      var s, a, o = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, oe, i),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      }, l = [], c = !1, u = {
        state: o,
        setOptions: function (n) {
          p(),
            o.options = Object.assign({}, i, o.options, n),
            o.scrollParents = {
              reference: dt(t) ? Gt(t) : t.contextElement ? Gt(t.contextElement) : [],
              popper: Gt(e)
            };
          var s, a, c = function (t) {
            var e = function (t) {
              var e = new Map
                , n = new Set
                , r = [];
              return t.forEach((function (t) {
                e.set(t.name, t)
              }
              )),
                t.forEach((function (t) {
                  n.has(t.name) || function t(s) {
                    n.add(s.name),
                      [].concat(s.requires || [], s.requiresIfExists || []).forEach((function (r) {
                        if (!n.has(r)) {
                          var s = e.get(r);
                          s && t(s)
                        }
                      }
                      )),
                      r.push(s)
                  }(t)
                }
                )),
                r
            }(t);
            return ct.reduce((function (t, n) {
              return t.concat(e.filter((function (t) {
                return t.phase === n
              }
              )))
            }
            ), [])
          }((s = [].concat(r, o.options.modifiers),
            a = s.reduce((function (t, e) {
              var n = t[e.name];
              return t[e.name] = n ? Object.assign({}, n, e, {
                options: Object.assign({}, n.options, e.options),
                data: Object.assign({}, n.data, e.data)
              }) : e,
                t
            }
            ), {}),
            Object.keys(a).map((function (t) {
              return a[t]
            }
            ))));
          return o.orderedModifiers = c.filter((function (t) {
            return t.enabled
          }
          )),
            o.orderedModifiers.forEach((function (t) {
              var e = t.name
                , n = t.options
                , r = void 0 === n ? {} : n
                , s = t.effect;
              if ("function" == typeof s) {
                var i = s({
                  state: o,
                  name: e,
                  instance: u,
                  options: r
                });
                l.push(i || function () { }
                )
              }
            }
            )),
            u.update()
        },
        forceUpdate: function () {
          if (!c) {
            var t = o.elements
              , e = t.reference
              , n = t.popper;
            if (le(e, n)) {
              o.rects = {
                reference: ae(e, kt(n), "fixed" === o.options.strategy),
                popper: bt(n)
              },
                o.reset = !1,
                o.placement = o.options.placement,
                o.orderedModifiers.forEach((function (t) {
                  return o.modifiersData[t.name] = Object.assign({}, t.data)
                }
                ));
              for (var r = 0; r < o.orderedModifiers.length; r++)
                if (!0 !== o.reset) {
                  var s = o.orderedModifiers[r]
                    , i = s.fn
                    , a = s.options
                    , l = void 0 === a ? {} : a
                    , p = s.name;
                  "function" == typeof i && (o = i({
                    state: o,
                    options: l,
                    name: p,
                    instance: u
                  }) || o)
                } else
                  o.reset = !1,
                    r = -1
            }
          }
        },
        update: (s = function () {
          return new Promise((function (t) {
            u.forceUpdate(),
              t(o)
          }
          ))
        }
          ,
          function () {
            return a || (a = new Promise((function (t) {
              Promise.resolve().then((function () {
                a = void 0,
                  t(s())
              }
              ))
            }
            ))),
              a
          }
        ),
        destroy: function () {
          p(),
            c = !0
        }
      };
      if (!le(t, e))
        return u;
      function p() {
        l.forEach((function (t) {
          return t()
        }
        )),
          l = []
      }
      return u.setOptions(n).then((function (t) {
        !c && n.onFirstUpdate && n.onFirstUpdate(t)
      }
      )),
        u
    }
  }
  var ue = ce()
    , pe = ce({
      defaultModifiers: [Ht, se, $t, mt]
    })
    , de = ce({
      defaultModifiers: [Ht, se, $t, mt, re, Zt, ie, Dt, ne]
    })
    , he = Object.freeze({
      __proto__: null,
      popperGenerator: ce,
      detectOverflow: Jt,
      createPopperBase: ue,
      createPopper: de,
      createPopperLite: pe,
      top: nt,
      bottom: rt,
      right: st,
      left: it,
      auto: "auto",
      basePlacements: at,
      start: "start",
      end: "end",
      clippingParents: "clippingParents",
      viewport: "viewport",
      popper: "popper",
      reference: "reference",
      variationPlacements: ot,
      placements: lt,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: ct,
      applyStyles: mt,
      arrow: Dt,
      computeStyles: $t,
      eventListeners: Ht,
      flip: Zt,
      hide: ne,
      offset: re,
      popperOffsets: se,
      preventOverflow: ie
    });
  const fe = new RegExp("ArrowUp|ArrowDown|Escape")
    , me = f() ? "top-end" : "top-start"
    , ge = f() ? "top-start" : "top-end"
    , ve = f() ? "bottom-end" : "bottom-start"
    , ye = f() ? "bottom-start" : "bottom-end"
    , be = f() ? "left-start" : "right-start"
    , _e = f() ? "right-start" : "left-start"
    , we = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0
    }
    , Se = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)"
    };
  class Ce extends $ {
    constructor(t, e) {
      super(t),
        this._popper = null,
        this._config = this._getConfig(e),
        this._menu = this._getMenuElement(),
        this._inNavbar = this._detectNavbar()
    }
    static get Default() {
      return we
    }
    static get DefaultType() {
      return Se
    }
    static get NAME() {
      return "dropdown"
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (l(this._element) || this._isShown(this._menu))
        return;
      const t = {
        relatedTarget: this._element
      };
      if (D.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
        return;
      const e = Ce.getParentFromElement(this._element);
      this._inNavbar ? B.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
        "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => D.on(t, "mouseover", u)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add("show"),
        this._element.classList.add("show"),
        D.trigger(this._element, "shown.bs.dropdown", t)
    }
    hide() {
      if (l(this._element) || !this._isShown(this._menu))
        return;
      const t = {
        relatedTarget: this._element
      };
      this._completeHide(t)
    }
    dispose() {
      this._popper && this._popper.destroy(),
        super.dispose()
    }
    update() {
      this._inNavbar = this._detectNavbar(),
        this._popper && this._popper.update()
    }
    _completeHide(t) {
      D.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => D.off(t, "mouseover", u)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        B.removeDataAttribute(this._menu, "popper"),
        D.trigger(this._element, "hidden.bs.dropdown", t))
    }
    _getConfig(t) {
      if (t = {
        ...this.constructor.Default,
        ...B.getDataAttributes(this._element),
        ...t
      },
        a("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference && !s(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
        throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t
    }
    _createPopper(t) {
      if (void 0 === he)
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let e = this._element;
      "parent" === this._config.reference ? e = t : s(this._config.reference) ? e = i(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
      const n = this._getPopperConfig()
        , r = n.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
      this._popper = de(e, this._menu, n),
        r && B.setDataAttribute(this._menu, "popper", "static")
    }
    _isShown(t = this._element) {
      return t.classList.contains("show")
    }
    _getMenuElement() {
      return F.next(this._element, ".dropdown-menu")[0]
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend"))
        return be;
      if (t.classList.contains("dropstart"))
        return _e;
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? ge : me : e ? ye : ve
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]),
      {
        ...t,
        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
      }
    }
    _selectMenuItem({ key: t, target: e }) {
      const n = F.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(o);
      n.length && y(n, e, "ArrowDown" === t, !n.includes(e)).focus()
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = Ce.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }
      ))
    }
    static clearMenus(t) {
      if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
        return;
      const e = F.find('[data-bs-toggle="dropdown"]');
      for (let n = 0, r = e.length; n < r; n++) {
        const r = Ce.getInstance(e[n]);
        if (!r || !1 === r._config.autoClose)
          continue;
        if (!r._isShown())
          continue;
        const s = {
          relatedTarget: r._element
        };
        if (t) {
          const e = t.composedPath()
            , n = e.includes(r._menu);
          if (e.includes(r._element) || "inside" === r._config.autoClose && !n || "outside" === r._config.autoClose && n)
            continue;
          if (r._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
            continue;
          "click" === t.type && (s.clickEvent = t)
        }
        r._completeHide(s)
      }
    }
    static getParentFromElement(t) {
      return n(t) || t.parentNode
    }
    static dataApiKeydownHandler(t) {
      if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !fe.test(t.key))
        return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key)
        return;
      if (t.preventDefault(),
        t.stopPropagation(),
        l(this))
        return;
      const n = this.matches('[data-bs-toggle="dropdown"]') ? this : F.prev(this, '[data-bs-toggle="dropdown"]')[0]
        , r = Ce.getOrCreateInstance(n);
      if ("Escape" !== t.key)
        return "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || r.show(),
          void r._selectMenuItem(t)) : void (e && "Space" !== t.key || Ce.clearMenus());
      r.hide()
    }
  }
  D.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ce.dataApiKeydownHandler),
    D.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ce.dataApiKeydownHandler),
    D.on(document, "click.bs.dropdown.data-api", Ce.clearMenus),
    D.on(document, "keyup.bs.dropdown.data-api", Ce.clearMenus),
    D.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
      t.preventDefault(),
        Ce.getOrCreateInstance(this).toggle()
    }
    )),
    m(Ce);
  class xe {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t)
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", e => e + t),
        this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t),
        this._setElementAttributes(".sticky-top", "marginRight", e => e - t)
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        this._element.style.overflow = "hidden"
    }
    _setElementAttributes(t, e, n) {
      const r = this.getWidth();
      this._applyManipulationCallback(t, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + r)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = n(Number.parseFloat(s)) + "px"
      }
      )
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
        this._resetElementAttributes(".sticky-top", "marginRight")
    }
    _saveInitialAttribute(t, e) {
      const n = t.style[e];
      n && B.setDataAttribute(t, e, n)
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, t => {
        const n = B.getDataAttribute(t, e);
        void 0 === n ? t.style.removeProperty(e) : (B.removeDataAttribute(t, e),
          t.style[e] = n)
      }
      )
    }
    _applyManipulationCallback(t, e) {
      s(t) ? e(t) : F.find(t, this._element).forEach(e)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
  }
  const Ee = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  }
    , ke = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)"
    };
  class Te {
    constructor(t) {
      this._config = this._getConfig(t),
        this._isAppended = !1,
        this._element = null
    }
    show(t) {
      this._config.isVisible ? (this._append(),
        this._config.isAnimated && p(this._getElement()),
        this._getElement().classList.add("show"),
        this._emulateAnimation(() => {
          g(t)
        }
        )) : g(t)
    }
    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove("show"),
        this._emulateAnimation(() => {
          this.dispose(),
            g(t)
        }
        )) : g(t)
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className,
          this._config.isAnimated && t.classList.add("fade"),
          this._element = t
      }
      return this._element
    }
    _getConfig(t) {
      return (t = {
        ...Ee,
        ..."object" == typeof t ? t : {}
      }).rootElement = i(t.rootElement),
        a("backdrop", t, ke),
        t
    }
    _append() {
      this._isAppended || (this._config.rootElement.append(this._getElement()),
        D.on(this._getElement(), "mousedown.bs.backdrop", () => {
          g(this._config.clickCallback)
        }
        ),
        this._isAppended = !0)
    }
    dispose() {
      this._isAppended && (D.off(this._element, "mousedown.bs.backdrop"),
        this._element.remove(),
        this._isAppended = !1)
    }
    _emulateAnimation(t) {
      v(t, this._getElement(), this._config.isAnimated)
    }
  }
  const Pe = {
    trapElement: null,
    autofocus: !0
  }
    , Oe = {
      trapElement: "element",
      autofocus: "boolean"
    };
  class Me {
    constructor(t) {
      this._config = this._getConfig(t),
        this._isActive = !1,
        this._lastTabNavDirection = null
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive || (e && t.focus(),
        D.off(document, ".bs.focustrap"),
        D.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)),
        D.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)),
        this._isActive = !0)
    }
    deactivate() {
      this._isActive && (this._isActive = !1,
        D.off(document, ".bs.focustrap"))
    }
    _handleFocusin(t) {
      const { target: e } = t
        , { trapElement: n } = this._config;
      if (e === document || e === n || n.contains(e))
        return;
      const r = F.focusableChildren(n);
      0 === r.length ? n.focus() : "backward" === this._lastTabNavDirection ? r[r.length - 1].focus() : r[0].focus()
    }
    _handleKeydown(t) {
      "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward")
    }
    _getConfig(t) {
      return t = {
        ...Pe,
        ..."object" == typeof t ? t : {}
      },
        a("focustrap", t, Oe),
        t
    }
  }
  const Ae = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  }
    , je = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    };
  class Ie extends $ {
    constructor(t, e) {
      super(t),
        this._config = this._getConfig(e),
        this._dialog = F.findOne(".modal-dialog", this._element),
        this._backdrop = this._initializeBackDrop(),
        this._focustrap = this._initializeFocusTrap(),
        this._isShown = !1,
        this._ignoreBackdropClick = !1,
        this._isTransitioning = !1,
        this._scrollBar = new xe
    }
    static get Default() {
      return Ae
    }
    static get NAME() {
      return "modal"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown || this._isTransitioning || D.trigger(this._element, "show.bs.modal", {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0,
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        D.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          D.one(this._element, "mouseup.dismiss.bs.modal", t => {
            t.target === this._element && (this._ignoreBackdropClick = !0)
          }
          )
        }
        ),
        this._showBackdrop(() => this._showElement(t)))
    }
    hide() {
      if (!this._isShown || this._isTransitioning)
        return;
      if (D.trigger(this._element, "hide.bs.modal").defaultPrevented)
        return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove("show"),
        D.off(this._element, "click.dismiss.bs.modal"),
        D.off(this._dialog, "mousedown.dismiss.bs.modal"),
        this._queueCallback(() => this._hideModal(), this._element, t)
    }
    dispose() {
      [window, this._dialog].forEach(t => D.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new Te({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      })
    }
    _initializeFocusTrap() {
      return new Me({
        trapElement: this._element
      })
    }
    _getConfig(t) {
      return t = {
        ...Ae,
        ...B.getDataAttributes(this._element),
        ..."object" == typeof t ? t : {}
      },
        a("modal", t, je),
        t
    }
    _showElement(t) {
      const e = this._isAnimated()
        , n = F.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
        this._element.style.display = "block",
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.scrollTop = 0,
        n && (n.scrollTop = 0),
        e && p(this._element),
        this._element.classList.add("show"),
        this._queueCallback(() => {
          this._config.focus && this._focustrap.activate(),
            this._isTransitioning = !1,
            D.trigger(this._element, "shown.bs.modal", {
              relatedTarget: t
            })
        }
          , this._dialog, e)
    }
    _setEscapeEvent() {
      this._isShown ? D.on(this._element, "keydown.dismiss.bs.modal", t => {
        this._config.keyboard && "Escape" === t.key ? (t.preventDefault(),
          this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
      }
      ) : D.off(this._element, "keydown.dismiss.bs.modal")
    }
    _setResizeEvent() {
      this._isShown ? D.on(window, "resize.bs.modal", () => this._adjustDialog()) : D.off(window, "resize.bs.modal")
    }
    _hideModal() {
      this._element.style.display = "none",
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._isTransitioning = !1,
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            D.trigger(this._element, "hidden.bs.modal")
        }
        )
    }
    _showBackdrop(t) {
      D.on(this._element, "click.dismiss.bs.modal", t => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
      }
      ),
        this._backdrop.show(t)
    }
    _isAnimated() {
      return this._element.classList.contains("fade")
    }
    _triggerBackdropTransition() {
      if (D.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: n } = this._element
        , r = e > document.documentElement.clientHeight;
      !r && "hidden" === n.overflowY || t.contains("modal-static") || (r || (n.overflowY = "hidden"),
        t.add("modal-static"),
        this._queueCallback(() => {
          t.remove("modal-static"),
            r || this._queueCallback(() => {
              n.overflowY = ""
            }
              , this._dialog)
        }
          , this._dialog),
        this._element.focus())
    }
    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight
        , e = this._scrollBar.getWidth()
        , n = e > 0;
      (!n && t && !f() || n && !t && f()) && (this._element.style.paddingLeft = e + "px"),
        (n && !t && !f() || !n && t && f()) && (this._element.style.paddingRight = e + "px")
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "",
        this._element.style.paddingRight = ""
    }
    static jQueryInterface(t, e) {
      return this.each((function () {
        const n = Ie.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === n[t])
            throw new TypeError(`No method named "${t}"`);
          n[t](e)
        }
      }
      ))
    }
  }
  D.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
    const e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      D.one(e, "show.bs.modal", t => {
        t.defaultPrevented || D.one(e, "hidden.bs.modal", () => {
          o(this) && this.focus()
        }
        )
      }
      ),
      Ie.getOrCreateInstance(e).toggle(this)
  }
  )),
    N(Ie),
    m(Ie);
  const De = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  }
    , Le = {
      backdrop: "boolean",
      keyboard: "boolean",
      scroll: "boolean"
    };
  class Ve extends $ {
    constructor(t, e) {
      super(t),
        this._config = this._getConfig(e),
        this._isShown = !1,
        this._backdrop = this._initializeBackDrop(),
        this._focustrap = this._initializeFocusTrap(),
        this._addEventListeners()
    }
    static get NAME() {
      return "offcanvas"
    }
    static get Default() {
      return De
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown || D.trigger(this._element, "show.bs.offcanvas", {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0,
        this._element.style.visibility = "visible",
        this._backdrop.show(),
        this._config.scroll || (new xe).hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        this._queueCallback(() => {
          this._config.scroll || this._focustrap.activate(),
            D.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t
            })
        }
          , this._element, !0))
    }
    hide() {
      this._isShown && (D.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
        this._element.blur(),
        this._isShown = !1,
        this._element.classList.remove("show"),
        this._backdrop.hide(),
        this._queueCallback(() => {
          this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._element.style.visibility = "hidden",
            this._config.scroll || (new xe).reset(),
            D.trigger(this._element, "hidden.bs.offcanvas")
        }
          , this._element, !0)))
    }
    dispose() {
      this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose()
    }
    _getConfig(t) {
      return t = {
        ...De,
        ...B.getDataAttributes(this._element),
        ..."object" == typeof t ? t : {}
      },
        a("offcanvas", t, Le),
        t
    }
    _initializeBackDrop() {
      return new Te({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      })
    }
    _initializeFocusTrap() {
      return new Me({
        trapElement: this._element
      })
    }
    _addEventListeners() {
      D.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        this._config.keyboard && "Escape" === t.key && this.hide()
      }
      )
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = Ve.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }
      ))
    }
  }
  D.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) {
    const e = n(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      l(this))
      return;
    D.one(e, "hidden.bs.offcanvas", () => {
      o(this) && this.focus()
    }
    );
    const r = F.findOne(".offcanvas.show");
    r && r !== e && Ve.getInstance(r).hide(),
      Ve.getOrCreateInstance(e).toggle(this)
  }
  )),
    D.on(window, "load.bs.offcanvas.data-api", () => F.find(".offcanvas.show").forEach(t => Ve.getOrCreateInstance(t).show())),
    N(Ve),
    m(Ve);
  const $e = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
    , Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
    , He = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
    , Re = (t, e) => {
      const n = t.nodeName.toLowerCase();
      if (e.includes(n))
        return !$e.has(n) || Boolean(Ne.test(t.nodeValue) || He.test(t.nodeValue));
      const r = e.filter(t => t instanceof RegExp);
      for (let t = 0, e = r.length; t < e; t++)
        if (r[t].test(n))
          return !0;
      return !1
    }
    ;
  function ze(t, e, n) {
    if (!t.length)
      return t;
    if (n && "function" == typeof n)
      return n(t);
    const r = (new window.DOMParser).parseFromString(t, "text/html")
      , s = Object.keys(e)
      , i = [].concat(...r.body.querySelectorAll("*"));
    for (let t = 0, n = i.length; t < n; t++) {
      const n = i[t]
        , r = n.nodeName.toLowerCase();
      if (!s.includes(r)) {
        n.remove();
        continue
      }
      const a = [].concat(...n.attributes)
        , o = [].concat(e["*"] || [], e[r] || []);
      a.forEach(t => {
        Re(t, o) || n.removeAttribute(t.nodeName)
      }
      )
    }
    return r.body.innerHTML
  }
  const qe = new Set(["sanitize", "allowList", "sanitizeFn"])
    , Be = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    }
    , Fe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: f() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: f() ? "right" : "left"
    }
    , We = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    }
    , Ue = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    };
  class Ge extends $ {
    constructor(t, e) {
      if (void 0 === he)
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t),
        this._isEnabled = !0,
        this._timeout = 0,
        this._hoverState = "",
        this._activeTrigger = {},
        this._popper = null,
        this._config = this._getConfig(e),
        this.tip = null,
        this._setListeners()
    }
    static get Default() {
      return We
    }
    static get NAME() {
      return "tooltip"
    }
    static get Event() {
      return Ue
    }
    static get DefaultType() {
      return Be
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          e._activeTrigger.click = !e._activeTrigger.click,
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this)
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        D.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._popper && this._popper.destroy(),
        super.dispose()
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled)
        return;
      const t = D.trigger(this._element, this.constructor.Event.SHOW)
        , e = c(this._element)
        , n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
      if (t.defaultPrevented || !n)
        return;
      const r = this.getTipElement()
        , s = (t => {
          do {
            t += Math.floor(1e6 * Math.random())
          } while (document.getElementById(t));
          return t
        }
        )(this.constructor.NAME);
      r.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this._config.animation && r.classList.add("fade");
      const i = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement
        , a = this._getAttachment(i);
      this._addAttachmentClass(a);
      const { container: o } = this._config;
      V.set(r, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) || (o.append(r),
          D.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper ? this._popper.update() : this._popper = de(this._element, r, this._getPopperConfig(a)),
        r.classList.add("show");
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && r.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
          D.on(t, "mouseover", u)
        }
        );
      const p = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        const t = this._hoverState;
        this._hoverState = null,
          D.trigger(this._element, this.constructor.Event.SHOWN),
          "out" === t && this._leave(null, this)
      }
        , this.tip, p)
    }
    hide() {
      if (!this._popper)
        return;
      const t = this.getTipElement();
      if (D.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
        return;
      t.classList.remove("show"),
        "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => D.off(t, "mouseover", u)),
        this._activeTrigger.click = !1,
        this._activeTrigger.focus = !1,
        this._activeTrigger.hover = !1;
      const e = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(),
          this._cleanTipClass(),
          this._element.removeAttribute("aria-describedby"),
          D.trigger(this._element, this.constructor.Event.HIDDEN),
          this._popper && (this._popper.destroy(),
            this._popper = null))
      }
        , this.tip, e),
        this._hoverState = ""
    }
    update() {
      null !== this._popper && this._popper.update()
    }
    isWithContent() {
      return Boolean(this.getTitle())
    }
    getTipElement() {
      if (this.tip)
        return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return this.setContent(e),
        e.classList.remove("fade", "show"),
        this.tip = e,
        this.tip
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner")
    }
    _sanitizeAndSetContent(t, e, n) {
      const r = F.findOne(n, t);
      e || !r ? this.setElementContent(r, e) : r.remove()
    }
    setElementContent(t, e) {
      if (null !== t)
        return s(e) ? (e = i(e),
          void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
            t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = ze(e, this._config.allowList, this._config.sanitizeFn)),
              t.innerHTML = e) : t.textContent = e)
    }
    getTitle() {
      const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
      return this._resolvePossibleFunction(t)
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t
    }
    _initializeOnDelegatedTarget(t, e) {
      return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: t => this._handlePopperPlacementChange(t)
        }],
        onFirstUpdate: t => {
          t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
        }
      };
      return {
        ...e,
        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
      }
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
    }
    _getAttachment(t) {
      return Fe[t.toUpperCase()]
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach(t => {
        if ("click" === t)
          D.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
        else if ("manual" !== t) {
          const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
            , n = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          D.on(this._element, e, this._config.selector, t => this._enter(t)),
            D.on(this._element, n, this._config.selector, t => this._leave(t))
        }
      }
      ),
        this._hideModalHandler = () => {
          this._element && this.hide()
        }
        ,
        D.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
        this._config.selector ? this._config = {
          ...this._config,
          trigger: "manual",
          selector: ""
        } : this._fixTitle()
    }
    _fixTitle() {
      const t = this._element.getAttribute("title")
        , e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
        !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""))
    }
    _enter(t, e) {
      e = this._initializeOnDelegatedTarget(t, e),
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
          e._hoverState = "show",
          e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
            "show" === e._hoverState && e.show()
          }
            , e._config.delay.show) : e.show())
    }
    _leave(t, e) {
      e = this._initializeOnDelegatedTarget(t, e),
        t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() || (clearTimeout(e._timeout),
          e._hoverState = "out",
          e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
            "out" === e._hoverState && e.hide()
          }
            , e._config.delay.hide) : e.hide())
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t])
          return !0;
      return !1
    }
    _getConfig(t) {
      const e = B.getDataAttributes(this._element);
      return Object.keys(e).forEach(t => {
        qe.has(t) && delete e[t]
      }
      ),
        (t = {
          ...this.constructor.Default,
          ...e,
          ..."object" == typeof t && t ? t : {}
        }).container = !1 === t.container ? document.body : i(t.container),
        "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        a("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = ze(t.template, t.allowList, t.sanitizeFn)),
        t
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
      return t
    }
    _cleanTipClass() {
      const t = this.getTipElement()
        , e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g")
        , n = t.getAttribute("class").match(e);
      null !== n && n.length > 0 && n.map(t => t.trim()).forEach(e => t.classList.remove(e))
    }
    _getBasicClassPrefix() {
      return "bs-tooltip"
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e && (this.tip = e.elements.popper,
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)))
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = Ge.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }
      ))
    }
  }
  m(Ge);
  const Ye = {
    ...Ge.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }
    , Xe = {
      ...Ge.DefaultType,
      content: "(string|element|function)"
    }
    , Ke = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    };
  class Qe extends Ge {
    static get Default() {
      return Ye
    }
    static get NAME() {
      return "popover"
    }
    static get Event() {
      return Ke
    }
    static get DefaultType() {
      return Xe
    }
    isWithContent() {
      return this.getTitle() || this._getContent()
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    _getBasicClassPrefix() {
      return "bs-popover"
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = Qe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }
      ))
    }
  }
  m(Qe);
  const Je = {
    offset: 10,
    method: "auto",
    target: ""
  }
    , Ze = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    }
    , tn = ".nav-link, .list-group-item, .dropdown-item";
  class en extends $ {
    constructor(t, e) {
      super(t),
        this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
        this._config = this._getConfig(e),
        this._offsets = [],
        this._targets = [],
        this._activeTarget = null,
        this._scrollHeight = 0,
        D.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process()
    }
    static get Default() {
      return Je
    }
    static get NAME() {
      return "scrollspy"
    }
    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? "offset" : "position"
        , n = "auto" === this._config.method ? t : this._config.method
        , r = "position" === n ? this._getScrollTop() : 0;
      this._offsets = [],
        this._targets = [],
        this._scrollHeight = this._getScrollHeight(),
        F.find(tn, this._config.target).map(t => {
          const s = e(t)
            , i = s ? F.findOne(s) : null;
          if (i) {
            const t = i.getBoundingClientRect();
            if (t.width || t.height)
              return [B[n](i).top + r, s]
          }
          return null
        }
        ).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
          this._offsets.push(t[0]),
            this._targets.push(t[1])
        }
        )
    }
    dispose() {
      D.off(this._scrollElement, ".bs.scrollspy"),
        super.dispose()
    }
    _getConfig(t) {
      return (t = {
        ...Je,
        ...B.getDataAttributes(this._element),
        ..."object" == typeof t && t ? t : {}
      }).target = i(t.target) || document.documentElement,
        a("scrollspy", t, Ze),
        t
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset
        , e = this._getScrollHeight()
        , n = this._config.offset + e - this._getOffsetHeight();
      if (this._scrollHeight !== e && this.refresh(),
        t >= n) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t)
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return this._activeTarget = null,
            void this._clear();
        for (let e = this._offsets.length; e--;)
          this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
      }
    }
    _activate(t) {
      this._activeTarget = t,
        this._clear();
      const e = tn.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)
        , n = F.findOne(e.join(","), this._config.target);
      n.classList.add("active"),
        n.classList.contains("dropdown-item") ? F.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active") : F.parents(n, ".nav, .list-group").forEach(t => {
          F.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")),
            F.prev(t, ".nav-item").forEach(t => {
              F.children(t, ".nav-link").forEach(t => t.classList.add("active"))
            }
            )
        }
        ),
        D.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        })
    }
    _clear() {
      F.find(tn, this._config.target).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = en.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }
      ))
    }
  }
  D.on(window, "load.bs.scrollspy.data-api", () => {
    F.find('[data-bs-spy="scroll"]').forEach(t => new en(t))
  }
  ),
    m(en);
  class nn extends $ {
    static get NAME() {
      return "tab"
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active"))
        return;
      let t;
      const e = n(this._element)
        , r = this._element.closest(".nav, .list-group");
      if (r) {
        const e = "UL" === r.nodeName || "OL" === r.nodeName ? ":scope > li > .active" : ".active";
        t = F.find(e, r),
          t = t[t.length - 1]
      }
      const s = t ? D.trigger(t, "hide.bs.tab", {
        relatedTarget: this._element
      }) : null;
      if (D.trigger(this._element, "show.bs.tab", {
        relatedTarget: t
      }).defaultPrevented || null !== s && s.defaultPrevented)
        return;
      this._activate(this._element, r);
      const i = () => {
        D.trigger(t, "hidden.bs.tab", {
          relatedTarget: this._element
        }),
          D.trigger(this._element, "shown.bs.tab", {
            relatedTarget: t
          })
      }
        ;
      e ? this._activate(e, e.parentNode, i) : i()
    }
    _activate(t, e, n) {
      const r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? F.children(e, ".active") : F.find(":scope > li > .active", e))[0]
        , s = n && r && r.classList.contains("fade")
        , i = () => this._transitionComplete(t, r, n);
      r && s ? (r.classList.remove("show"),
        this._queueCallback(i, t, !0)) : i()
    }
    _transitionComplete(t, e, n) {
      if (e) {
        e.classList.remove("active");
        const t = F.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"),
          "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
      }
      t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        p(t),
        t.classList.contains("fade") && t.classList.add("show");
      let r = t.parentNode;
      if (r && "LI" === r.nodeName && (r = r.parentNode),
        r && r.classList.contains("dropdown-menu")) {
        const e = t.closest(".dropdown");
        e && F.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")),
          t.setAttribute("aria-expanded", !0)
      }
      n && n()
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = nn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }
      ))
    }
  }
  D.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      l(this) || nn.getOrCreateInstance(this).show()
  }
  )),
    m(nn);
  const rn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  }
    , sn = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  class an extends $ {
    constructor(t, e) {
      super(t),
        this._config = this._getConfig(e),
        this._timeout = null,
        this._hasMouseInteraction = !1,
        this._hasKeyboardInteraction = !1,
        this._setListeners()
    }
    static get DefaultType() {
      return rn
    }
    static get Default() {
      return sn
    }
    static get NAME() {
      return "toast"
    }
    show() {
      D.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        p(this._element),
        this._element.classList.add("show"),
        this._element.classList.add("showing"),
        this._queueCallback(() => {
          this._element.classList.remove("showing"),
            D.trigger(this._element, "shown.bs.toast"),
            this._maybeScheduleHide()
        }
          , this._element, this._config.animation))
    }
    hide() {
      this._element.classList.contains("show") && (D.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"),
        this._queueCallback(() => {
          this._element.classList.add("hide"),
            this._element.classList.remove("showing"),
            this._element.classList.remove("show"),
            D.trigger(this._element, "hidden.bs.toast")
        }
          , this._element, this._config.animation)))
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") && this._element.classList.remove("show"),
        super.dispose()
    }
    _getConfig(t) {
      return t = {
        ...sn,
        ...B.getDataAttributes(this._element),
        ..."object" == typeof t && t ? t : {}
      },
        a("toast", t, this.constructor.DefaultType),
        t
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide()
      }
        , this._config.delay)))
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e
      }
      if (e)
        return void this._clearTimeout();
      const n = t.relatedTarget;
      this._element === n || this._element.contains(n) || this._maybeScheduleHide()
    }
    _setListeners() {
      D.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)),
        D.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)),
        D.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)),
        D.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
    }
    _clearTimeout() {
      clearTimeout(this._timeout),
        this._timeout = null
    }
    static jQueryInterface(t) {
      return this.each((function () {
        const e = an.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }
      ))
    }
  }
  return N(an),
    m(an),
  {
    Alert: H,
    Button: R,
    Carousel: J,
    Collapse: et,
    Dropdown: Ce,
    Modal: Ie,
    Offcanvas: Ve,
    Popover: Qe,
    ScrollSpy: en,
    Tab: nn,
    Toast: an,
    Tooltip: Ge
  }
}
)),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSMegaMenu = e() : t.HSMegaMenu = e()
  }(window, (function () {
    return d = {
      "./src/js/hs-mega-menu.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSMegaMenu; });\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/object-assign-deep */ "./src/js/methods/object-assign-deep.js");\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _methods_get_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/desktop-css-animation-enable */ "./src/js/methods/desktop-css-animation-enable.js");\n/* harmony import */ var _methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/desktop-mouseenter-event-listener */ "./src/js/methods/desktop-mouseenter-event-listener.js");\n/* harmony import */ var _methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/desktop-mouseleave-event-listener */ "./src/js/methods/desktop-mouseleave-event-listener.js");\n/* harmony import */ var _methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/desktop-click-event-listener */ "./src/js/methods/desktop-click-event-listener.js");\n/* harmony import */ var _methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/mobile-click-event-listener */ "./src/js/methods/mobile-click-event-listener.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSMegaMenu Plugin\n* @version: 2.0.1 (Sun, 1 Nov 2021)\n* @author: HtmlStream\n* @event-namespace: .HSMegaMenu\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\n\n\n\n\n\n\n\n\nvar dataAttributeName = \'data-hs-mega-menu-options\';\nvar defaults = {\n  eventType: \'hover\',\n  direction: \'horizontal\',\n  breakpoint: \'lg\',\n  rtl: false,\n  isMenuOpened: false,\n  sideBarRatio: 1 / 4,\n  pageContainer: document.getElementsByTagName(\'body\'),\n  mobileSpeed: 400,\n  duration: 300,\n  delay: 0,\n  itemOptions: {\n    megaMenuTimeOut: null,\n    desktop: {\n      animation: \'animated\',\n      animationIn: \'slideInUp\',\n      animationOut: false,\n      position: null,\n      maxWidth: null\n    }\n  },\n  classMap: {\n    rtl: \'.hs-rtl\',\n    reversed: \'.hs-reversed\',\n    initialized: \'.hs-menu-initialized\',\n    mobileState: \'.hs-mobile-state\',\n    invoker: \'.hs-mega-menu-invoker\',\n    subMenu: \'.hs-sub-menu\',\n    hasSubMenu: \'.hs-has-sub-menu\',\n    hasSubMenuActive: \'.hs-sub-menu-opened\',\n    megaMenu: \'.hs-mega-menu\',\n    hasMegaMenu: \'.hs-has-mega-menu\',\n    hasMegaMenuActive: \'.hs-mega-menu-opened\'\n  }\n};\n\nvar HSMegaMenu = /*#__PURE__*/function () {\n  function HSMegaMenu(el, options, id) {\n    _classCallCheck(this, HSMegaMenu);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSMegaMenu, [{\n    key: "_init",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          return "continue";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.state = null; // Resolution list\n\n        resolutionsList = {\n          xs: 0,\n          sm: 576,\n          md: 768,\n          lg: 992,\n          xl: 1200\n        }; // Keycodes\n\n        ESC_KEYCODE = 27;\n        TAB_KEYCODE = 9;\n        ENTER_KEYCODE = 13;\n        SPACE_KEYCODE = 32;\n        ARROW_UP_KEYCODE = 38;\n        ARROW_DOWN_KEYCODE = 40;\n        ARROW_RIGHT_KEYCODE = 39;\n        ARROW_LEFT_KEYCODE = 37; // Prevent scroll\n\n        var preventScroll = function preventScroll(keycode) {\n          return function (e) {\n            if (e.which === keycode) {\n              e.preventDefault();\n            }\n          };\n        }; // Get Item Settings\n\n\n        var getItemSettings = function getItemSettings($el) {\n          if (!$el) return false;\n          var dataSettings = $el.hasAttribute(\'data-hs-mega-menu-item-options\') ? JSON.parse($el.getAttribute(\'data-hs-mega-menu-item-options\')) : {},\n              itemSettings = _options.itemOptions;\n          itemSettings = Object.assign({}, itemSettings, dataSettings);\n\n          itemSettings.activeItemClass = function () {\n            return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($el, _options) === \'mega-menu\' ? _options.classMap.hasMegaMenuActive : _options.classMap.hasSubMenuActive;\n          };\n\n          return itemSettings;\n        };\n\n        var stateDetection = function stateDetection() {\n          if (window.innerWidth < resolutionsList[_options.breakpoint]) {\n            _this.state = \'mobile\';\n          } else {\n            _this.state = \'desktop\';\n          }\n        };\n\n        stateDetection(); // State Detection\n\n        window.addEventListener(\'resize\', function () {\n          stateDetection();\n        }); // Set RTL\n\n        if (_options.rtl) {\n          _$el.addClass(_options.classMap.rtl.slice(1));\n        } // Init Menu Items\n\n\n        _$el.querySelectorAll("".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)).forEach(function (el) {\n          _this.MegaMenuItem(el, el.querySelector(_options.classMap[Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])(el, _options) === \'mega-menu\' ? \'megaMenu\' : \'subMenu\']), _options);\n        }); // Add Initialized Classes\n\n\n        _$el.classList.add("".concat(_options.classMap.initialized.slice(1)), "hs-menu-".concat(_options.direction)); // *****\n        // Start: ACCESSIBILITY\n        // *****\n\n\n        myPreventScrollSpace = preventScroll(SPACE_KEYCODE);\n        myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE);\n        myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);\n        var $items = void 0,\n            index = void 0,\n            state = null;\n        document.addEventListener(\'keyup\', function () {\n          window.removeEventListener(\'keydown\', myPreventScrollSpace, false);\n          window.removeEventListener(\'keydown\', myPreventScrollUp, false);\n          window.removeEventListener(\'keydown\', myPreventScrollDown, false);\n        });\n        document.addEventListener(\'keyup\', function (e) {\n          if (!e.target.closest("".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu))) return false; //\n          // Start: PREVENT SCROLL\n          //\n\n          e.preventDefault();\n          e.stopPropagation();\n          window.addEventListener(\'keydown\', myPreventScrollSpace, false);\n          window.addEventListener(\'keydown\', myPreventScrollUp, false);\n          window.addEventListener(\'keydown\', myPreventScrollDown, false); //\n          // End: PREVENT SCROLL\n          //\n          //\n          // Start: ELEMENT DETECTION\n          //\n\n          if (e.target.classList.contains(_options.classMap.invoker.slice(1)) && !e.target.closest(["".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu)])) {\n            // console.log(\'Top level\');\n            if (state !== \'topLevel\') {\n              state = \'topLevel\';\n            }\n\n            $items = [].slice.call(e.target.parentNode.parentNode.querySelectorAll(_options.classMap.invoker)).filter(function (item) {\n              if (!item.closest(["".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu)])) {\n                return item.offsetParent !== null;\n              }\n            });\n          } else if (e.target.closest(["".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu)]) && e.target.parentNode.querySelector("".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu))) {\n            // console.log(\'Has submenu and not top level\');\n            if (state !== \'hasSubmenu\') {\n              state = \'hasSubmenu\';\n            }\n\n            $items = [].slice.call(e.target.parentNode.parentNode.querySelectorAll(_options.classMap.invoker)).filter(function (item) {\n              return item.offsetParent !== null;\n            });\n          } else {\n            // console.log(\'Just element\');\n            if (state !== \'simple\') {\n              state = \'simple\';\n            }\n\n            $items = [].slice.call(e.target.closest(["".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu)]).querySelectorAll(\'a, button\')).filter(function (item) {\n              return item.offsetParent !== null;\n            });\n          } //\n          // End: ELEMENT DETECTION\n          //\n\n\n          index = $items.indexOf(e.target); //\n          // Start: TOP LEVEL\n          //\n          // Left\n\n          if (state === \'topLevel\' && e.which === ARROW_LEFT_KEYCODE && index > 0) {\n            index--;\n          } // Right\n\n\n          if (state === \'topLevel\' && e.which === ARROW_RIGHT_KEYCODE && index < $items.length - 1) {\n            index++;\n          } // Open Sub\n\n\n          if (state === \'topLevel\' && (e.which === ARROW_DOWN_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n            if (!e.target.parentNode.querySelector(["".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)])) {\n              Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target.parentNode, e.target.parentNode.querySelector(["".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu)]), _options, getItemSettings(e.target.parentNode))();\n            } else if (e.target.parentNode.querySelector(["".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)])) {\n              e.target.parentNode.querySelector(["".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)]).querySelectorAll(\'a\')[0].focus();\n              return;\n            }\n          } // Close Siblings\n\n\n          if (state === \'topLevel\' && (e.which === TAB_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && e.target.closest("".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)).parentNode.querySelector("".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn))) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.closest("".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)), e.target.closest("".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)).parentNode.querySelector("".concat(_options.classMap.hasMegaMenuActive, " > ").concat(_options.classMap.megaMenu, ", ").concat(_options.classMap.hasSubMenuActive, " > ").concat(_options.classMap.subMenu)), _options, getItemSettings(e.target.closest("".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu))))();\n          } //\n          // End: TOP LEVEL\n          //\n          //\n          // Start: HAS SUB-MENU BUT NOT TOP LEVEL\n          //\n          // Up\n\n\n          if (state === \'hasSubmenu\' && e.which === ARROW_UP_KEYCODE && index > 0) {\n            index--;\n          } // Down\n\n\n          if (state === \'hasSubmenu\' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n            index++;\n          } // Open Sub\n\n\n          if (state === \'hasSubmenu\' && (e.which === ARROW_LEFT_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n            if (!e.target.parentNode.querySelector(["".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)])) {\n              Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target.parentNode, e.target.parentNode.querySelector(["".concat(_options.classMap.subMenu, ", ").concat(_options.classMap.megaMenu)]), _options, getItemSettings(e.target.parentNode))();\n            } else if (e.target.parentNode.querySelector(["".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)])) {\n              e.target.parentNode.querySelector(["".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)]).querySelectorAll(\'a\')[0].focus();\n              return;\n            }\n          } // Close Siblings\n\n\n          if (state === \'hasSubmenu\' && (e.which === TAB_KEYCODE || e.which === ARROW_DOWN_KEYCODE || e.which === ARROW_UP_KEYCODE) && e.target.closest(["".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)]).parentNode.querySelectorAll("".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)).length) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.closest(["".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)]), e.target.closest(["".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)]).parentNode.querySelector("".concat(_options.classMap.hasMegaMenuActive, " > ").concat(_options.classMap.megaMenu, ", ").concat(_options.classMap.hasSubMenuActive, " > ").concat(_options.classMap.subMenu)), _options, getItemSettings(e.target.closest(["".concat(_options.classMap.hasMegaMenu, ", ").concat(_options.classMap.hasSubMenu)])))();\n          } //\n          // End: HAS SUB-MENU BUT NOT TOP LEVEL\n          //\n          //\n          // Start: SIMPLE\n          //\n          // Left, Up\n\n\n          if (state === \'simple\' && e.which === ARROW_UP_KEYCODE && index > 0) {\n            index--;\n          } // Right, Down\n\n\n          if (state === \'simple\' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n            index++;\n          } // Close Siblings\n\n\n          if (state === \'simple\' && (e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && e.target.closest(_options.classMap.hasSubMenu).parentNode.querySelector(_options.classMap.subMenu)) {\n            e.target.closest(_options.classMap.hasSubMenu).querySelector(_options.classMap.invoker).focus();\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.closest(_options.classMap.hasSubMenu), e.target.closest(_options.classMap.hasSubMenu).parentNode.querySelector("".concat(_options.classMap.hasSubMenuActive, " > ").concat(_options.classMap.subMenu)), _options, getItemSettings(e.target.closest(_options.classMap.hasSubMenu)))();\n            return;\n          } //\n          // End: SIMPLE\n          //\n          // Close Self\n\n\n          if (e.which === ESC_KEYCODE && _this.state === \'desktop\' && document.querySelector("".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn))) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])(document.querySelector("".concat(_options.classMap.hasMegaMenuActive, ", ").concat(_options.classMap.hasSubMenuActive)), document.querySelector("".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)), _options, getItemSettings(document.querySelector("".concat(_options.classMap.hasMegaMenuActive, ", ").concat(_options.classMap.hasSubMenuActive))))();\n            return;\n          } // Reset index\n\n\n          if (index < 0) {\n            index = 0;\n          }\n\n          $items[index].focus();\n        });\n        document.addEventListener(\'keyup\', function (e) {\n          // Close All\n          if (e.which === TAB_KEYCODE && document.querySelector("".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn))) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])(document.querySelector("".concat(_options.classMap.hasMegaMenuActive, ", ").concat(_options.classMap.hasSubMenuActive)), document.querySelector("".concat(_options.classMap.megaMenu, ".").concat(_options.itemOptions.desktop.animationIn, ", ").concat(_options.classMap.subMenu, ".").concat(_options.itemOptions.desktop.animationIn)), _options, getItemSettings(document.querySelector("".concat(_options.classMap.hasMegaMenuActive, ", ").concat(_options.classMap.hasSubMenuActive))))();\n          }\n        }); // *****\n        // End: ACCESSIBILITY\n        // *****\n\n        that.collection[i].$initializedEl = _options;\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var resolutionsList;\n        var ESC_KEYCODE, TAB_KEYCODE, ENTER_KEYCODE, SPACE_KEYCODE, ARROW_UP_KEYCODE, ARROW_DOWN_KEYCODE, ARROW_RIGHT_KEYCODE, ARROW_LEFT_KEYCODE;\n        var myPreventScrollSpace, myPreventScrollDown, myPreventScrollUp;\n\n        var _ret = _loop(i);\n\n        if (_ret === "continue") continue;\n      }\n    }\n  }, {\n    key: "MegaMenuItem",\n    value: function MegaMenuItem(el, menu, params) {\n      var context = this,\n          settings = params,\n          itemDataSettings = el.hasAttribute(\'data-hs-mega-menu-item-options\') ? JSON.parse(el.getAttribute(\'data-hs-mega-menu-item-options\')) : {},\n          $el = el,\n          $menu = menu;\n      var itemSettings = {\n        eventType: itemDataSettings.eventType ? itemDataSettings.eventType : settings.eventType,\n        megaMenuTimeOut: null,\n        desktop: {\n          animation: \'animated\',\n          animationIn: \'slideInUp\',\n          animationOut: false,\n          position: null,\n          maxWidth: null\n        }\n      };\n      itemSettings = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, settings, itemSettings, itemDataSettings);\n\n      itemSettings.activeItemClass = function () {\n        return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($el, itemSettings) === \'mega-menu\' ? itemSettings.classMap.hasMegaMenuActive : itemSettings.classMap.hasSubMenuActive;\n      }; // Set Menu Breakpoint Class\n\n\n      $menu.classList.add(Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($el, itemSettings) === \'mega-menu\' ? "hs-mega-menu-desktop-".concat(itemSettings.breakpoint) : "hs-sub-menu-desktop-".concat(itemSettings.breakpoint)); // Listeners\n\n      var myDesktopCSSAnimationEnable = Object(_methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__["default"])($menu, itemSettings),\n          myDesktopMouseEnterEventListener = Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__["default"])($el, $menu, settings, itemSettings),\n          myDesktopMouseLeaveEventListener = Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($el, $menu, settings, itemSettings),\n          myDesktopClickEventListener = Object(_methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__["default"])($el, $menu, settings, itemSettings),\n          myMobileClickEventListener = Object(_methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__["default"])($el, $menu, settings, itemSettings);\n\n      var mobileListeners = function mobileListeners() {\n        // Remove Desktop Listeners\n        $menu.removeEventListener(\'animationend\', myDesktopCSSAnimationEnable, false);\n        $menu.removeEventListener(\'webkitAnimationEnd\', myDesktopCSSAnimationEnable, false);\n        $el.removeEventListener(\'mouseenter\', myDesktopMouseEnterEventListener, false);\n        $el.removeEventListener(\'mouseleave\', myDesktopMouseLeaveEventListener, false); // $el.children(settings.classMap.invoker)[0].removeEventListener(\'focus\', myDesktopMouseEnterEventListener, false);\n\n        $el.querySelector(itemSettings.classMap.invoker).removeEventListener(\'click\', myDesktopClickEventListener, false); // Add Mobile Listeners\n\n        $el.querySelector(itemSettings.classMap.invoker).addEventListener(\'click\', myMobileClickEventListener, false);\n      },\n          desktopListeners = function desktopListeners() {\n        // Remove Mobile Listeners\n        $el.querySelector(itemSettings.classMap.invoker).removeEventListener(\'click\', myMobileClickEventListener, false); // Add Desktop Listeners\n\n        $menu.addEventListener(\'animationend\', myDesktopCSSAnimationEnable, false);\n        $menu.addEventListener(\'webkitAnimationEnd\', myDesktopCSSAnimationEnable, false);\n\n        if (itemSettings.eventType === \'hover\') {\n          $el.addEventListener(\'mouseenter\', myDesktopMouseEnterEventListener, false);\n          $el.addEventListener(\'mouseleave\', myDesktopMouseLeaveEventListener, false);\n        }\n\n        if (itemSettings.eventType === \'click\') {\n          $el.querySelector(itemSettings.classMap.invoker).addEventListener(\'click\', myDesktopClickEventListener, false);\n        }\n      };\n\n      if (itemSettings.desktop.maxWidth) {\n        $menu.style.maxWidth = itemSettings.desktop.maxWidth;\n      }\n\n      if (itemSettings.desktop.position) {\n        $menu.classList.add("hs-position-".concat(itemSettings.desktop.position));\n      } // Document Events\n\n\n      document.addEventListener(\'click\', function (e) {\n        if (!e.target.closest([itemSettings.classMap.subMenu, itemSettings.classMap.megaMenu, itemSettings.classMap.invoker]) && context.state === \'desktop\') {\n          $el.classList.remove(itemSettings.activeItemClass().slice(1));\n          $menu.classList.remove(itemSettings.desktop.animationIn);\n\n          if (itemSettings.animationOut) {\n            $menu.classList.add(itemSettings.desktop.animationOut);\n          } else {\n            $menu.style.display = \'none\';\n          }\n        }\n      }); // Resize and Scroll Events\n\n      window.addEventListener(\'resize\', function () {\n        if (context.state === \'desktop\') {\n          Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_2__["default"])($menu, itemSettings);\n        }\n      });\n\n      var resizeDetection = function resizeDetection() {\n        if (context.state === \'mobile\') {\n          $menu.classList.remove(itemSettings.desktop.animation);\n          $menu.style.animationDuration = \'\';\n          mobileListeners();\n        } else if (context.state === \'desktop\') {\n          $menu.classList.add(itemSettings.desktop.animation);\n          $menu.style.animationDuration = "".concat(itemSettings.duration, "ms");\n          desktopListeners();\n        }\n      };\n\n      resizeDetection(); // State Detection\n\n      window.addEventListener(\'resize\', function () {\n        resizeDetection();\n      });\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItems",\n    value: function getItems() {\n      var that = this;\n      var newCollection = [];\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        newCollection.push(that.collection[i].$initializedEl);\n      }\n\n      return newCollection;\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(ind) {\n      return this.collection[ind].$initializedEl;\n    }\n  }]);\n\n  return HSMegaMenu;\n}();\n\n\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/hs-mega-menu.js?')
      },
      "./src/js/methods/desktop-click-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop-show */ "./src/js/methods/desktop-show.js");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ "./src/js/methods/desktop-hide.js");\n\n\n\n\nfunction desktopClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.closest("".concat(params.classMap.hasMegaMenu, ", ").concat(params.classMap.hasSubMenu)).parentNode.querySelectorAll("".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, ", ").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.forEach(function ($el) {\n        var $menu = $el.querySelector("".concat(params.classMap.megaMenu, ", ").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.hasAttribute(\'data-hs-mega-menu-item-options\') ? JSON.parse($el.getAttribute(\'data-hs-mega-menu-item-options\')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: \'animated\',\n            animationIn: \'slideInUp\',\n            animationOut: \'fadeOut\',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["default"])($el, params) === \'mega-menu\' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.classList.remove(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__["default"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.previousElementSibling.classList.contains(\'show\')) {\n      el.classList.add(itemParams.activeItemClass().slice(1));\n      Object(_desktop_show__WEBPACK_IMPORTED_MODULE_2__["default"])(el, menu, params, itemParams);\n      Object(_smart_position__WEBPACK_IMPORTED_MODULE_1__["default"])(menu, params);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-click-event-listener.js?')
      },
      "./src/js/methods/desktop-css-animation-enable.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopCSSAnimationEnable; });\nfunction desktopCSSAnimationEnable(menu, itemParams) {\n  return function (e) {\n    if (menu.classList.contains(itemParams.desktop.animationOut)) {\n      menu.classList.remove(itemParams.desktop.animationOut);\n      menu.style.display = 'none';\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-css-animation-enable.js?")
      },
      "./src/js/methods/desktop-hide.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopHide; });\nfunction desktopHide(el, menu, params, itemParams) {\n  if (!menu) {\n    return this;\n  }\n\n  if (itemParams.desktop.animationOut) {\n    menu.classList.remove(itemParams.desktop.animationIn);\n    menu.classList.add(itemParams.desktop.animationOut);\n    menu.style.display = 'none';\n  } else {\n    menu.classList.remove(itemParams.desktop.animationIn);\n    menu.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-hide.js?")
      },
      "./src/js/methods/desktop-mouseenter-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopMouseEnterEventListener; });\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-show */ "./src/js/methods/desktop-show.js");\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ "./src/js/methods/desktop-hide.js");\n\n\n\n\nfunction desktopMouseEnterEventListener(el, menu, params, itemParams) {\n  return function () {\n    if (itemParams.megaMenuTimeOut) {\n      clearTimeout(itemParams.megaMenuTimeOut);\n    }\n\n    var $siblingInvokers = menu.closest("".concat(params.classMap.hasMegaMenu, ", ").concat(params.classMap.hasSubMenu)).parentNode.querySelectorAll("".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, ", ").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.forEach(function ($el) {\n        var $menu = $el.querySelector("".concat(params.classMap.megaMenu, ", ").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.hasAttribute(\'data-hs-mega-menu-item-options\') ? JSON.parse($el.getAttribute(\'data-hs-mega-menu-item-options\')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: \'animated\',\n            animationIn: \'slideInUp\',\n            animationOut: \'fadeOut\',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_2__["default"])($el, params) === \'mega-menu\' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.classList.remove(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__["default"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    el.classList.add(itemParams.activeItemClass().slice(1));\n    Object(_desktop_show__WEBPACK_IMPORTED_MODULE_1__["default"])(el, menu, params, itemParams);\n    Object(_smart_position__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, params);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseenter-event-listener.js?')
      },
      "./src/js/methods/desktop-mouseleave-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopMouseLeaveEventListener; });\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-hide */ "./src/js/methods/desktop-hide.js");\n\nfunction desktopMouseLeaveEventListener(el, menu, params, itemParams) {\n  return function () {\n    itemParams.megaMenuTimeOut = setTimeout(function () {\n      el.classList.remove(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_0__["default"])(el, menu, params, itemParams);\n    }, params.delay);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseleave-event-listener.js?')
      },
      "./src/js/methods/desktop-show.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopShow; });\nfunction desktopShow(el, menu, params, itemParams) {\n  menu.classList.remove(itemParams.desktop.animationOut);\n  menu.style.display = 'block';\n  menu.classList.add(itemParams.desktop.animationIn);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-show.js?")
      },
      "./src/js/methods/get-type.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getType; });\nfunction getType(el, params) {\n  if (!el) {\n    return false;\n  }\n\n  return el.classList.contains(params.classMap.hasSubMenu.slice(1)) ? 'sub-menu' : el.classList.contains(params.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null;\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/get-type.js?")
      },
      "./src/js/methods/mobile-click-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _mobile_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-show */ "./src/js/methods/mobile-show.js");\n/* harmony import */ var _mobile_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-hide */ "./src/js/methods/mobile-hide.js");\n\n\n\nfunction mobileClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.closest("".concat(params.classMap.hasMegaMenu, ", ").concat(params.classMap.hasSubMenu)).parentNode.querySelectorAll("".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, ", ").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.forEach(function ($el) {\n        var $menu = $el.querySelector("".concat(params.classMap.megaMenu, ", ").concat(params.classMap.subMenu)),\n            itemSettings = {};\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["default"])($el, params) === \'mega-menu\' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__["default"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.offsetParent === null) {\n      Object(_mobile_show__WEBPACK_IMPORTED_MODULE_1__["default"])(el, menu, params, itemParams);\n    } else {\n      Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__["default"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-click-event-listener.js?')
      },
      "./src/js/methods/mobile-hide.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileHide; });\n/* harmony import */ var _slideUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideUp */ "./src/js/methods/slideUp.js");\n\nfunction mobileHide(el, menu, params, itemParams) {\n  if (!menu) {\n    return this;\n  }\n\n  el.classList.remove(itemParams.activeItemClass().slice(1));\n  Object(_slideUp__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-hide.js?')
      },
      "./src/js/methods/mobile-show.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileShow; });\n/* harmony import */ var _slideDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideDown */ "./src/js/methods/slideDown.js");\n\nfunction mobileShow(el, menu, params, itemParams) {\n  if (!menu) {\n    return this;\n  }\n\n  el.classList.add(itemParams.activeItemClass().slice(1));\n  Object(_slideDown__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-show.js?')
      },
      "./src/js/methods/object-assign-deep.js": function (module, exports, __webpack_require__) {
        "use strict";
        eval("\n/*\n * OBJECT ASSIGN DEEP\n * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.\n */\n\n/*\n * A unified way of returning a string that describes the type of the given variable.\n */\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction getTypeOf(input) {\n  if (input === null) {\n    return 'null';\n  } else if (typeof input === 'undefined') {\n    return 'undefined';\n  } else if (_typeof(input) === 'object') {\n    return Array.isArray(input) ? 'array' : 'object';\n  }\n\n  return _typeof(input);\n}\n/*\n * Branching logic which calls the correct function to clone the given value base on its type.\n */\n\n\nfunction cloneValue(value) {\n  // The value is an object so lets clone it.\n  if (getTypeOf(value) === 'object') {\n    return quickCloneObject(value);\n  } // The value is an array so lets clone it.\n  else if (getTypeOf(value) === 'array') {\n    return quickCloneArray(value);\n  } // Any other value can just be copied.\n\n\n  return value;\n}\n/*\n * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneArray(input) {\n  return input.map(cloneValue);\n}\n/*\n * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of\n * its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneObject(input) {\n  var output = {};\n\n  for (var key in input) {\n    if (!Object.prototype.hasOwnProperty.call(input, key)) {\n      continue;\n    }\n\n    output[key] = cloneValue(input[key]);\n  }\n\n  return output;\n}\n/*\n * Does the actual deep merging.\n */\n\n\nfunction executeDeepMerge(target) {\n  var _objects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = {\n    arrayBehaviour: _options.arrayBehaviour || 'replace' // Can be \"merge\" or \"replace\".\n\n  }; // Ensure we have actual objects for each.\n\n  var objects = _objects.map(function (object) {\n    return object || {};\n  });\n\n  var output = target || {}; // Enumerate the objects and their keys.\n\n  for (var oindex = 0; oindex < objects.length; oindex++) {\n    var object = objects[oindex];\n    var keys = Object.keys(object);\n\n    for (var kindex = 0; kindex < keys.length; kindex++) {\n      var key = keys[kindex];\n      var value = object[key];\n      var type = getTypeOf(value);\n      var existingValueType = getTypeOf(output[key]);\n\n      if (type === 'object') {\n        if (existingValueType !== 'undefined') {\n          var existingValue = existingValueType === 'object' ? output[key] : {};\n          output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);\n        } else {\n          output[key] = quickCloneObject(value);\n        }\n      } else if (type === 'array') {\n        if (existingValueType === 'array') {\n          var newValue = quickCloneArray(value);\n          output[key] = options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue;\n        } else {\n          output[key] = quickCloneArray(value);\n        }\n      } else {\n        output[key] = value;\n      }\n    }\n  }\n\n  return output;\n}\n/*\n * Merge all the supplied objects into the target object, breaking all references, including those of nested objects\n * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().\n * Properties in later objects will always overwrite.\n */\n\n\nmodule.exports = function objectAssignDeep(target) {\n  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objects[_key - 1] = arguments[_key];\n  }\n\n  return executeDeepMerge(target, objects);\n};\n/*\n * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.\n */\n\n\nmodule.exports.noMutate = function objectAssignDeepInto() {\n  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    objects[_key2] = arguments[_key2];\n  }\n\n  return executeDeepMerge({}, objects);\n};\n/*\n * Allows an options object to be passed in to customise the behaviour of the function.\n */\n\n\nmodule.exports.withOptions = function objectAssignDeepInto(target, objects, options) {\n  return executeDeepMerge(target, objects, options);\n};\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/object-assign-deep.js?")
      },
      "./src/js/methods/offset.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (function (el) {\n  if (!el) return false;\n  var rect = el.getBoundingClientRect();\n  return {\n    top: rect.top - window.scrollY,\n    left: rect.left - window.scrollX\n  };\n});\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/offset.js?')
      },
      "./src/js/methods/slideDown.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar slideDown = function slideDown(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.removeProperty('display');\n  var display = window.getComputedStyle(target).display;\n  if (display === 'none') display = 'block';\n  target.style.display = display;\n  var height = target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  target.offsetHeight;\n  target.style.boxSizing = 'border-box';\n  target.style.transitionProperty = \"height, margin, padding\";\n  target.style.transitionDuration = duration + 'ms';\n  target.style.height = height + 'px';\n  target.style.removeProperty('padding-top');\n  target.style.removeProperty('padding-bottom');\n  target.style.removeProperty('margin-top');\n  target.style.removeProperty('margin-bottom');\n  window.setTimeout(function () {\n    target.style.removeProperty('height');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property');\n  }, duration);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideDown);\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/slideDown.js?")
      },
      "./src/js/methods/slideUp.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar slideUp = function slideUp(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.transitionProperty = 'height, margin, padding';\n  target.style.transitionDuration = duration + 'ms';\n  target.style.boxSizing = 'border-box';\n  target.style.height = target.offsetHeight + 'px';\n  target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  window.setTimeout(function () {\n    target.style.display = 'none';\n    target.style.removeProperty('height');\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property'); //alert(\"!\");\n  }, duration);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideUp);\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/slideUp.js?")
      },
      "./src/js/methods/smart-position.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return smartPosition; });\n/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset */ "./src/js/methods/offset.js");\n\nfunction smartPosition(el, params) {\n  if (!el) return;\n\n  if (!params.rtl) {\n    if (Object(_offset__WEBPACK_IMPORTED_MODULE_0__["default"])(el).left + el.offsetWidth > window.innerWidth) {\n      el.classList.add(params.classMap.reversed.slice(1));\n    }\n  } else {\n    if (Object(_offset__WEBPACK_IMPORTED_MODULE_0__["default"])(el).left < 0) {\n      el.classList.add(params.classMap.reversed.slice(1));\n    }\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/smart-position.js?')
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-mega-menu.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSShowAnimation = e() : t.HSShowAnimation = e()
  }(window, (function () {
    return d = {
      "./src/js/hs-show-animation.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSShowAnimation; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSShowAnimation Plugin\n* @version: 3.0.0 (Sat, 20 Nov 2021)\n*  @event-namespace: .HSShowAnimation\n* \n* Copyright 2021 Htmlstream\n*/\n\nvar dataAttributeName = \'data-hs-show-animation-options\';\nvar defaults = {\n  groupName: null,\n  targetSelector: null,\n  siblingSelector: null,\n  eventType: \'click\',\n  classMap: {\n    active: \'active\'\n  },\n  animationType: \'simple\',\n  animationInit: \'animated\',\n  animationIn: null,\n  duration: null,\n  afterShow: function afterShow() {}\n};\n\nvar HSShowAnimation = /*#__PURE__*/function () {\n  function HSShowAnimation(el, options, id) {\n    _classCallCheck(this, HSShowAnimation);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSShowAnimation, [{\n    key: "_init",\n    value: function _init() {\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          return "continue";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        that.prepareObject(_$el, _options);\n\n        _$el.addEventListener(_options.eventType, function (e) {\n          e.preventDefault();\n\n          if (_$el.classList.contains(_options.classMap.active)) {\n            return;\n          }\n\n          that.activeClassChange(_options);\n\n          if (_options.animationType === \'css-animation\') {\n            that.cssAnimation(_options);\n          } else {\n            that.simpleAnimation(_options);\n          }\n        });\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === "continue") continue;\n      }\n    }\n  }, {\n    key: "prepareObject",\n    value: function prepareObject($el, settings) {\n      var $targetSelector = document.querySelector(settings.targetSelector),\n          $siblingSelector = document.querySelector(settings.siblingSelector);\n      $el.setAttribute(\'data-hs-show-animation-link-group\', settings.groupName);\n\n      if (settings.duration) {\n        $targetSelector.style.animationDuration = "".concat(settings.duration, "ms");\n      }\n\n      $targetSelector.setAttribute(\'data-hs-show-animation-target-group\', settings.groupName);\n\n      if ($siblingSelector) {\n        $siblingSelector.setAttribute(\'data-hs-show-animation-target-group\', settings.groupName);\n      }\n    }\n  }, {\n    key: "activeClassChange",\n    value: function activeClassChange(settings) {\n      var $targets = document.querySelectorAll("[data-hs-show-animation-link-group=\\"".concat(settings.groupName, "\\"]"));\n\n      if ($targets.length) {\n        $targets.forEach(function ($item) {\n          return $item.classList.remove(settings.classMap.active);\n        });\n      }\n    }\n  }, {\n    key: "simpleAnimation",\n    value: function simpleAnimation(settings) {\n      var $targets = document.querySelectorAll("[data-hs-show-animation-target-group=\\"".concat(settings.groupName, "\\"]")),\n          $targetSelector = document.querySelector(settings.targetSelector);\n\n      if ($targets.length) {\n        $targets.forEach(function ($item) {\n          $item.style.display = \'none\';\n          $item.style.opacity = 0;\n        });\n      }\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])($targetSelector, 400);\n      settings.afterShow();\n    }\n  }, {\n    key: "cssAnimation",\n    value: function cssAnimation(settings) {\n      var $targets = document.querySelectorAll("[data-hs-show-animation-target-group=\\"".concat(settings.groupName, "\\"]")),\n          $targetSelector = document.querySelector(settings.targetSelector);\n\n      if ($targets.length) {\n        $targets.forEach(function ($item) {\n          $item.style.display = \'none\';\n          $item.style.opacity = 0;\n          $item.classList.remove(settings.animationInit, settings.animationIn);\n        });\n      }\n\n      $targetSelector.style.display = \'block\';\n      settings.afterShow();\n      setTimeout(function () {\n        $targetSelector.style.opacity = 1;\n        $targetSelector.classList.add(settings.animationInit, settings.animationIn);\n      }, 50);\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(item) {\n      if (typeof item === \'number\') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSShowAnimation;\n}();\n\n\n\n//# sourceURL=webpack://HSShowAnimation/./src/js/hs-show-animation.js?')
      },
      "./src/js/utils.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\nfunction fadeIn(el, time) {\n  if (!el || el.offsetParent !== null) return el;\n  el.style.opacity = 0;\n  el.style.display = 'block';\n  var last = +new Date();\n\n  var tick = function tick() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / time;\n    last = +new Date();\n\n    if (+el.style.opacity < 1) {\n      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}\n\n//# sourceURL=webpack://HSShowAnimation/./src/js/utils.js?")
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-show-animation.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSGoTo = e() : t.HSGoTo = e()
  }(window, (function () {
    return d = {
      "./src/js/hs-go-to.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSGoTo; });\n/* harmony import */ var _utils_scrollTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollTo */ "./src/utils/scrollTo.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar dataAttributeName = \'data-hs-go-to-options\';\nvar defaults = {\n  pageContainerSelector: \'html, body\',\n  targetSelector: null,\n  compensationSelector: null,\n  animationInit: \'animated\',\n  animationIn: \'fadeInUp\',\n  animationOut: \'fadeOutDown\',\n  duration: 800,\n  offsetTop: 0,\n  position: {\n    init: null,\n    hide: null,\n    show: null\n  },\n  isReferencedToOtherPage: null,\n  preventEventClass: \'hs-go-to-prevent-event\'\n};\n\nvar HSGoTo = /*#__PURE__*/function () {\n  function HSGoTo(el, options, id) {\n    _classCallCheck(this, HSGoTo);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSGoTo, [{\n    key: "_init",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          return "continue";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n\n        var _compensationSelector = document.querySelector(_options.compensationSelector),\n            _targetSelector = document.querySelector(_options.targetSelector),\n            _pageContainerSelector = document.querySelector(_options.pageContainerSelector);\n\n        _options.targetOffsetTop = function () {\n          if (_compensationSelector) {\n            return _targetSelector ? _targetSelector.offsetTop - _compensationSelector.innerHeight : 0;\n          } else {\n            return _targetSelector ? _targetSelector.offsetTop : 0;\n          }\n        };\n\n        _this.prepareObject(_$el, _options); // Set Position\n\n\n        if (_options.position) {\n          _this.setPosition(_$el, _options);\n        } // Click Events\n\n\n        _$el.addEventListener(\'click\', function (e) {\n          return _this.clickEvents(_$el, _options, {\n            _pageContainerSelector: _pageContainerSelector,\n            _compensationSelector: _compensationSelector,\n            _targetSelector: _targetSelector\n          });\n        }); // Scroll Events\n\n\n        if (_options.animationIn && _options.animationOut) {\n          document.addEventListener(\'scroll\', function (e) {\n            return _this.scrollEvents(_$el, _options);\n          });\n        }\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === "continue") continue;\n      }\n    }\n  }, {\n    key: "prepareObject",\n    value: function prepareObject($el, settings) {\n      if (settings.animationIn && settings.animationOut) {\n        if (navigator.userAgent.match(\'MSIE 10.0\')) {\n          document.html.classList.add(\'ie10\');\n        }\n\n        $el.classList.add(settings.animationInit, settings.animationOut, settings.preventEventClass);\n      }\n    }\n  }, {\n    key: "setPosition",\n    value: function setPosition($el, settings) {\n      for (var style in settings.position.init) {\n        $el.style.setProperty(style, settings.position.init[style]);\n      }\n    }\n  }, {\n    key: "clickEvents",\n    value: function clickEvents($el, settings, _ref) {\n      var _pageContainerSelector = _ref._pageContainerSelector;\n\n      if (!settings.isReferencedToOtherPage) {\n        if (event) {\n          event.preventDefault();\n        }\n\n        Object(_utils_scrollTo__WEBPACK_IMPORTED_MODULE_0__["default"])({\n          to: settings.targetOffsetTop(),\n          el: _pageContainerSelector\n        }, settings.duration);\n      }\n    }\n  }, {\n    key: "scrollEvents",\n    value: function scrollEvents($el, settings) {\n      $el.style.visibility = \'\';\n\n      if (window.scrollY >= settings.offsetTop) {\n        if (settings.position.show) {\n          for (var style in settings.position.show) {\n            $el.style.setProperty(style, settings.position.show[style]);\n          }\n        }\n\n        $el.classList.remove(settings.animationOut);\n        $el.classList.add(settings.animationIn);\n      } else {\n        if (settings.position.show) {\n          for (var _style in settings.position.show) {\n            $el.style.setProperty(_style, settings.position.show[_style]);\n          }\n        }\n\n        $el.classList.remove(settings.animationIn);\n        $el.classList.add(settings.animationOut);\n      }\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(item) {\n      if (typeof item === \'number\') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSGoTo;\n}();\n\n\n\n//# sourceURL=webpack://HSGoTo/./src/js/hs-go-to.js?')
      },
      "./src/utils/scrollTo.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollTo; });\nMath.easeInOutQuad = function (t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n};\n/*\n  scrollTo(element.scrollTop || 200, 400)\n*/\n\n\nfunction scrollTo(_ref, duration) {\n  var el = _ref.el,\n      to = _ref.to;\n  var element = el;\n  var start = element && element.scrollTop || window.pageYOffset,\n      change = to - start,\n      increment = 20;\n  var currentTime = 0;\n\n  var animateScroll = function animateScroll() {\n    currentTime += increment;\n    var val = Math.easeInOutQuad(currentTime, start, change, duration);\n    el.scrollTop = val;\n\n    if (currentTime < duration) {\n      window.setTimeout(animateScroll, increment);\n    }\n  };\n\n  animateScroll();\n}\n\n//# sourceURL=webpack://HSGoTo/./src/utils/scrollTo.js?')
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-go-to.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HsNavScroller = e() : t.HsNavScroller = e()
  }(window, (function () {
    return d = {
      "./node_modules/velocity-animate/velocity.js": function (module, exports, __webpack_require__) {
        eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */\r\n\r\n/*************************\r\n Velocity jQuery Shim\r\n *************************/\r\n\r\n/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */\r\n\r\n/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity\'s dependency on a full copy of jQuery, and allowing it to work in any environment. */\r\n/* These shimmed functions are only used if jQuery isn\'t present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */\r\n/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */\r\n\r\n(function(window) {\r\n\t"use strict";\r\n\t/***************\r\n\t Setup\r\n\t ***************/\r\n\r\n\t/* If jQuery is already loaded, there\'s no point in loading this shim. */\r\n\tif (window.jQuery) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t/* jQuery base. */\r\n\tvar $ = function(selector, context) {\r\n\t\treturn new $.fn.init(selector, context);\r\n\t};\r\n\r\n\t/********************\r\n\t Private Methods\r\n\t ********************/\r\n\r\n\t/* jQuery */\r\n\t$.isWindow = function(obj) {\r\n\t\t/* jshint eqeqeq: false */\r\n\t\treturn obj && obj === obj.window;\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.type = function(obj) {\r\n\t\tif (!obj) {\r\n\t\t\treturn obj + "";\r\n\t\t}\r\n\r\n\t\treturn typeof obj === "object" || typeof obj === "function" ?\r\n\t\t\t\tclass2type[toString.call(obj)] || "object" :\r\n\t\t\t\ttypeof obj;\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.isArray = Array.isArray || function(obj) {\r\n\t\treturn $.type(obj) === "array";\r\n\t};\r\n\r\n\t/* jQuery */\r\n\tfunction isArraylike(obj) {\r\n\t\tvar length = obj.length,\r\n\t\t\t\ttype = $.type(obj);\r\n\r\n\t\tif (type === "function" || $.isWindow(obj)) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tif (obj.nodeType === 1 && length) {\r\n\t\t\treturn true;\r\n\t\t}\r\n\r\n\t\treturn type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;\r\n\t}\r\n\r\n\t/***************\r\n\t $ Methods\r\n\t ***************/\r\n\r\n\t/* jQuery: Support removed for IE<9. */\r\n\t$.isPlainObject = function(obj) {\r\n\t\tvar key;\r\n\r\n\t\tif (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\tif (obj.constructor &&\r\n\t\t\t\t\t!hasOwn.call(obj, "constructor") &&\r\n\t\t\t\t\t!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t} catch (e) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tfor (key in obj) {\r\n\t\t}\r\n\r\n\t\treturn key === undefined || hasOwn.call(obj, key);\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.each = function(obj, callback, args) {\r\n\t\tvar value,\r\n\t\t\t\ti = 0,\r\n\t\t\t\tlength = obj.length,\r\n\t\t\t\tisArray = isArraylike(obj);\r\n\r\n\t\tif (args) {\r\n\t\t\tif (isArray) {\r\n\t\t\t\tfor (; i < length; i++) {\r\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (i in obj) {\r\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\tif (isArray) {\r\n\t\t\t\tfor (; i < length; i++) {\r\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (i in obj) {\r\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn obj;\r\n\t};\r\n\r\n\t/* Custom */\r\n\t$.data = function(node, key, value) {\r\n\t\t/* $.getData() */\r\n\t\tif (value === undefined) {\r\n\t\t\tvar getId = node[$.expando],\r\n\t\t\t\t\tstore = getId && cache[getId];\r\n\r\n\t\t\tif (key === undefined) {\r\n\t\t\t\treturn store;\r\n\t\t\t} else if (store) {\r\n\t\t\t\tif (key in store) {\r\n\t\t\t\t\treturn store[key];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t/* $.setData() */\r\n\t\t} else if (key !== undefined) {\r\n\t\t\tvar setId = node[$.expando] || (node[$.expando] = ++$.uuid);\r\n\r\n\t\t\tcache[setId] = cache[setId] || {};\r\n\t\t\tcache[setId][key] = value;\r\n\r\n\t\t\treturn value;\r\n\t\t}\r\n\t};\r\n\r\n\t/* Custom */\r\n\t$.removeData = function(node, keys) {\r\n\t\tvar id = node[$.expando],\r\n\t\t\t\tstore = id && cache[id];\r\n\r\n\t\tif (store) {\r\n\t\t\t// Cleanup the entire store if no keys are provided.\r\n\t\t\tif (!keys) {\r\n\t\t\t\tdelete cache[id];\r\n\t\t\t} else {\r\n\t\t\t\t$.each(keys, function(_, key) {\r\n\t\t\t\t\tdelete store[key];\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.extend = function() {\r\n\t\tvar src, copyIsArray, copy, name, options, clone,\r\n\t\t\t\ttarget = arguments[0] || {},\r\n\t\t\t\ti = 1,\r\n\t\t\t\tlength = arguments.length,\r\n\t\t\t\tdeep = false;\r\n\r\n\t\tif (typeof target === "boolean") {\r\n\t\t\tdeep = target;\r\n\r\n\t\t\ttarget = arguments[i] || {};\r\n\t\t\ti++;\r\n\t\t}\r\n\r\n\t\tif (typeof target !== "object" && $.type(target) !== "function") {\r\n\t\t\ttarget = {};\r\n\t\t}\r\n\r\n\t\tif (i === length) {\r\n\t\t\ttarget = this;\r\n\t\t\ti--;\r\n\t\t}\r\n\r\n\t\tfor (; i < length; i++) {\r\n\t\t\tif ((options = arguments[i])) {\r\n\t\t\t\tfor (name in options) {\r\n\t\t\t\t\tif (!options.hasOwnProperty(name)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tsrc = target[name];\r\n\t\t\t\t\tcopy = options[name];\r\n\r\n\t\t\t\t\tif (target === copy) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {\r\n\t\t\t\t\t\tif (copyIsArray) {\r\n\t\t\t\t\t\t\tcopyIsArray = false;\r\n\t\t\t\t\t\t\tclone = src && $.isArray(src) ? src : [];\r\n\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tclone = src && $.isPlainObject(src) ? src : {};\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\ttarget[name] = $.extend(deep, clone, copy);\r\n\r\n\t\t\t\t\t} else if (copy !== undefined) {\r\n\t\t\t\t\t\ttarget[name] = copy;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn target;\r\n\t};\r\n\r\n\t/* jQuery 1.4.3 */\r\n\t$.queue = function(elem, type, data) {\r\n\t\tfunction $makeArray(arr, results) {\r\n\t\t\tvar ret = results || [];\r\n\r\n\t\t\tif (arr) {\r\n\t\t\t\tif (isArraylike(Object(arr))) {\r\n\t\t\t\t\t/* $.merge */\r\n\t\t\t\t\t(function(first, second) {\r\n\t\t\t\t\t\tvar len = +second.length,\r\n\t\t\t\t\t\t\t\tj = 0,\r\n\t\t\t\t\t\t\t\ti = first.length;\r\n\r\n\t\t\t\t\t\twhile (j < len) {\r\n\t\t\t\t\t\t\tfirst[i++] = second[j++];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (len !== len) {\r\n\t\t\t\t\t\t\twhile (second[j] !== undefined) {\r\n\t\t\t\t\t\t\t\tfirst[i++] = second[j++];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tfirst.length = i;\r\n\r\n\t\t\t\t\t\treturn first;\r\n\t\t\t\t\t})(ret, typeof arr === "string" ? [arr] : arr);\r\n\t\t\t\t} else {\r\n\t\t\t\t\t[].push.call(ret, arr);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn ret;\r\n\t\t}\r\n\r\n\t\tif (!elem) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttype = (type || "fx") + "queue";\r\n\r\n\t\tvar q = $.data(elem, type);\r\n\r\n\t\tif (!data) {\r\n\t\t\treturn q || [];\r\n\t\t}\r\n\r\n\t\tif (!q || $.isArray(data)) {\r\n\t\t\tq = $.data(elem, type, $makeArray(data));\r\n\t\t} else {\r\n\t\t\tq.push(data);\r\n\t\t}\r\n\r\n\t\treturn q;\r\n\t};\r\n\r\n\t/* jQuery 1.4.3 */\r\n\t$.dequeue = function(elems, type) {\r\n\t\t/* Custom: Embed element iteration. */\r\n\t\t$.each(elems.nodeType ? [elems] : elems, function(i, elem) {\r\n\t\t\ttype = type || "fx";\r\n\r\n\t\t\tvar queue = $.queue(elem, type),\r\n\t\t\t\t\tfn = queue.shift();\r\n\r\n\t\t\tif (fn === "inprogress") {\r\n\t\t\t\tfn = queue.shift();\r\n\t\t\t}\r\n\r\n\t\t\tif (fn) {\r\n\t\t\t\tif (type === "fx") {\r\n\t\t\t\t\tqueue.unshift("inprogress");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfn.call(elem, function() {\r\n\t\t\t\t\t$.dequeue(elem, type);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\r\n\t/******************\r\n\t $.fn Methods\r\n\t ******************/\r\n\r\n\t/* jQuery */\r\n\t$.fn = $.prototype = {\r\n\t\tinit: function(selector) {\r\n\t\t\t/* Just return the element wrapped inside an array; don\'t proceed with the actual jQuery node wrapping process. */\r\n\t\t\tif (selector.nodeType) {\r\n\t\t\t\tthis[0] = selector;\r\n\r\n\t\t\t\treturn this;\r\n\t\t\t} else {\r\n\t\t\t\tthrow new Error("Not a DOM node.");\r\n\t\t\t}\r\n\t\t},\r\n\t\toffset: function() {\r\n\t\t\t/* jQuery altered code: Dropped disconnected DOM node checking. */\r\n\t\t\tvar box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};\r\n\r\n\t\t\treturn {\r\n\t\t\t\ttop: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),\r\n\t\t\t\tleft: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)\r\n\t\t\t};\r\n\t\t},\r\n\t\tposition: function() {\r\n\t\t\t/* jQuery */\r\n\t\t\tfunction offsetParentFn(elem) {\r\n\t\t\t\tvar offsetParent = elem.offsetParent;\r\n\r\n\t\t\t\twhile (offsetParent && (offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position.toLowerCase() === "static")) {\r\n\t\t\t\t\toffsetParent = offsetParent.offsetParent;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn offsetParent || document;\r\n\t\t\t}\r\n\r\n\t\t\t/* Zepto */\r\n\t\t\tvar elem = this[0],\r\n\t\t\t\t\toffsetParent = offsetParentFn(elem),\r\n\t\t\t\t\toffset = this.offset(),\r\n\t\t\t\t\tparentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();\r\n\r\n\t\t\toffset.top -= parseFloat(elem.style.marginTop) || 0;\r\n\t\t\toffset.left -= parseFloat(elem.style.marginLeft) || 0;\r\n\r\n\t\t\tif (offsetParent.style) {\r\n\t\t\t\tparentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;\r\n\t\t\t\tparentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;\r\n\t\t\t}\r\n\r\n\t\t\treturn {\r\n\t\t\t\ttop: offset.top - parentOffset.top,\r\n\t\t\t\tleft: offset.left - parentOffset.left\r\n\t\t\t};\r\n\t\t}\r\n\t};\r\n\r\n\t/**********************\r\n\t Private Variables\r\n\t **********************/\r\n\r\n\t/* For $.data() */\r\n\tvar cache = {};\r\n\t$.expando = "velocity" + (new Date().getTime());\r\n\t$.uuid = 0;\r\n\r\n\t/* For $.queue() */\r\n\tvar class2type = {},\r\n\t\t\thasOwn = class2type.hasOwnProperty,\r\n\t\t\ttoString = class2type.toString;\r\n\r\n\tvar types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");\r\n\tfor (var i = 0; i < types.length; i++) {\r\n\t\tclass2type["[object " + types[i] + "]"] = types[i].toLowerCase();\r\n\t}\r\n\r\n\t/* Makes $(node) possible, without having to call init. */\r\n\t$.fn.init.prototype = $.fn;\r\n\r\n\t/* Globalize Velocity onto the window, and assign its Utilities property. */\r\n\twindow.Velocity = {Utilities: $};\r\n})(window);\r\n\r\n/******************\r\n Velocity.js\r\n ******************/\r\n\r\n(function(factory) {\r\n\t"use strict";\r\n\t/* CommonJS module. */\r\n\tif ( true && typeof module.exports === "object") {\r\n\t\tmodule.exports = factory();\r\n\t\t/* AMD module. */\r\n\t} else if (true) {\r\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\t\t/* Browser globals. */\r\n\t} else {}\r\n}(function() {\r\n\t"use strict";\r\n\treturn function(global, window, document, undefined) {\r\n\r\n\t\t/***************\r\n\t\t Summary\r\n\t\t ***************/\r\n\r\n\t\t/*\r\n\t\t - CSS: CSS stack that works independently from the rest of Velocity.\r\n\t\t - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.\r\n\t\t - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call\'s options.\r\n\t\t - Queueing: The logic that runs once the call has reached its point of execution in the element\'s $.queue() stack.\r\n\t\t Most logic is placed here to avoid risking it becoming stale (if the element\'s properties have changed).\r\n\t\t - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\r\n\t\t - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.\r\n\t\t - completeCall(): Handles the cleanup process for each Velocity call.\r\n\t\t */\r\n\r\n\t\t/*********************\r\n\t\t Helper Functions\r\n\t\t *********************/\r\n\r\n\t\t/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */\r\n\t\tvar IE = (function() {\r\n\t\t\tif (document.documentMode) {\r\n\t\t\t\treturn document.documentMode;\r\n\t\t\t} else {\r\n\t\t\t\tfor (var i = 7; i > 4; i--) {\r\n\t\t\t\t\tvar div = document.createElement("div");\r\n\r\n\t\t\t\t\tdiv.innerHTML = "\x3c!--[if IE " + i + "]><span></span><![endif]--\x3e";\r\n\r\n\t\t\t\t\tif (div.getElementsByTagName("span").length) {\r\n\t\t\t\t\t\tdiv = null;\r\n\r\n\t\t\t\t\t\treturn i;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn undefined;\r\n\t\t})();\r\n\r\n\t\t/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */\r\n\t\tvar rAFShim = (function() {\r\n\t\t\tvar timeLast = 0;\r\n\r\n\t\t\treturn window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {\r\n\t\t\t\tvar timeCurrent = (new Date()).getTime(),\r\n\t\t\t\t\t\ttimeDelta;\r\n\r\n\t\t\t\t/* Dynamically set delay on a per-tick basis to match 60fps. */\r\n\t\t\t\t/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */\r\n\t\t\t\ttimeDelta = Math.max(0, 16 - (timeCurrent - timeLast));\r\n\t\t\t\ttimeLast = timeCurrent + timeDelta;\r\n\r\n\t\t\t\treturn setTimeout(function() {\r\n\t\t\t\t\tcallback(timeCurrent + timeDelta);\r\n\t\t\t\t}, timeDelta);\r\n\t\t\t};\r\n\t\t})();\r\n\r\n\t\tvar performance = (function() {\r\n\t\t\tvar perf = window.performance || {};\r\n\r\n\t\t\tif (typeof perf.now !== "function") {\r\n\t\t\t\tvar nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();\r\n\r\n\t\t\t\tperf.now = function() {\r\n\t\t\t\t\treturn (new Date()).getTime() - nowOffset;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\treturn perf;\r\n\t\t})();\r\n\r\n\t\t/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */\r\n\t\tfunction compactSparseArray(array) {\r\n\t\t\tvar index = -1,\r\n\t\t\t\t\tlength = array ? array.length : 0,\r\n\t\t\t\t\tresult = [];\r\n\r\n\t\t\twhile (++index < length) {\r\n\t\t\t\tvar value = array[index];\r\n\r\n\t\t\t\tif (value) {\r\n\t\t\t\t\tresult.push(value);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn result;\r\n\t\t}\r\n\r\n\t\t/**\r\n\t\t * Shim for "fixing" IE\'s lack of support (IE < 9) for applying slice\r\n\t\t * on host objects like NamedNodeMap, NodeList, and HTMLCollection\r\n\t\t * (technically, since host objects have been implementation-dependent,\r\n\t\t * at least before ES2015, IE hasn\'t needed to work this way).\r\n\t\t * Also works on strings, fixes IE < 9 to allow an explicit undefined\r\n\t\t * for the 2nd argument (as in Firefox), and prevents errors when\r\n\t\t * called on other DOM objects.\r\n\t\t */\r\n\t\tvar _slice = (function() {\r\n\t\t\tvar slice = Array.prototype.slice;\r\n\r\n\t\t\ttry {\r\n\t\t\t\t// Can\'t be used with DOM elements in IE < 9\r\n\t\t\t\tslice.call(document.documentElement);\r\n\t\t\t\treturn slice;\r\n\t\t\t} catch (e) { // Fails in IE < 9\r\n\r\n\t\t\t\t// This will work for genuine arrays, array-like objects, \r\n\t\t\t\t// NamedNodeMap (attributes, entities, notations),\r\n\t\t\t\t// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),\r\n\t\t\t\t// and will not fail on other DOM objects (as do DOM elements in IE < 9)\r\n\t\t\t\treturn function(begin, end) {\r\n\t\t\t\t\tvar len = this.length;\r\n\r\n\t\t\t\t\tif (typeof begin !== "number") {\r\n\t\t\t\t\t\tbegin = 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// IE < 9 gets unhappy with an undefined end argument\r\n\t\t\t\t\tif (typeof end !== "number") {\r\n\t\t\t\t\t\tend = len;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// For native Array objects, we use the native slice function\r\n\t\t\t\t\tif (this.slice) {\r\n\t\t\t\t\t\treturn slice.call(this, begin, end);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// For array like object we handle it ourselves.\r\n\t\t\t\t\tvar i,\r\n\t\t\t\t\t\t\tcloned = [],\r\n\t\t\t\t\t\t\t// Handle negative value for "begin"\r\n\t\t\t\t\t\t\tstart = (begin >= 0) ? begin : Math.max(0, len + begin),\r\n\t\t\t\t\t\t\t// Handle negative value for "end"\r\n\t\t\t\t\t\t\tupTo = end < 0 ? len + end : Math.min(end, len),\r\n\t\t\t\t\t\t\t// Actual expected size of the slice\r\n\t\t\t\t\t\t\tsize = upTo - start;\r\n\r\n\t\t\t\t\tif (size > 0) {\r\n\t\t\t\t\t\tcloned = new Array(size);\r\n\t\t\t\t\t\tif (this.charAt) {\r\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\r\n\t\t\t\t\t\t\t\tcloned[i] = this.charAt(start + i);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\r\n\t\t\t\t\t\t\t\tcloned[i] = this[start + i];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn cloned;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t})();\r\n\r\n\t\t/* .indexOf doesn\'t exist in IE<9 */\r\n\t\tvar _inArray = (function() {\r\n\t\t\tif (Array.prototype.includes) {\r\n\t\t\t\treturn function(arr, val) {\r\n\t\t\t\t\treturn arr.includes(val);\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\tif (Array.prototype.indexOf) {\r\n\t\t\t\treturn function(arr, val) {\r\n\t\t\t\t\treturn arr.indexOf(val) >= 0;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\treturn function(arr, val) {\r\n\t\t\t\tfor (var i = 0; i < arr.length; i++) {\r\n\t\t\t\t\tif (arr[i] === val) {\r\n\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn false;\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\tfunction sanitizeElements(elements) {\r\n\t\t\t/* Unwrap jQuery/Zepto objects. */\r\n\t\t\tif (Type.isWrapped(elements)) {\r\n\t\t\t\telements = _slice.call(elements);\r\n\t\t\t\t/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node\'s children. */\r\n\t\t\t} else if (Type.isNode(elements)) {\r\n\t\t\t\telements = [elements];\r\n\t\t\t}\r\n\r\n\t\t\treturn elements;\r\n\t\t}\r\n\r\n\t\tvar Type = {\r\n\t\t\tisNumber: function(variable) {\r\n\t\t\t\treturn (typeof variable === "number");\r\n\t\t\t},\r\n\t\t\tisString: function(variable) {\r\n\t\t\t\treturn (typeof variable === "string");\r\n\t\t\t},\r\n\t\t\tisArray: Array.isArray || function(variable) {\r\n\t\t\t\treturn Object.prototype.toString.call(variable) === "[object Array]";\r\n\t\t\t},\r\n\t\t\tisFunction: function(variable) {\r\n\t\t\t\treturn Object.prototype.toString.call(variable) === "[object Function]";\r\n\t\t\t},\r\n\t\t\tisNode: function(variable) {\r\n\t\t\t\treturn variable && variable.nodeType;\r\n\t\t\t},\r\n\t\t\t/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */\r\n\t\t\t/* NOTE: HTMLFormElements also have a length. */\r\n\t\t\tisWrapped: function(variable) {\r\n\t\t\t\treturn variable\r\n\t\t\t\t\t\t&& variable !== window\r\n\t\t\t\t\t\t&& Type.isNumber(variable.length)\r\n\t\t\t\t\t\t&& !Type.isString(variable)\r\n\t\t\t\t\t\t&& !Type.isFunction(variable)\r\n\t\t\t\t\t\t&& !Type.isNode(variable)\r\n\t\t\t\t\t\t&& (variable.length === 0 || Type.isNode(variable[0]));\r\n\t\t\t},\r\n\t\t\tisSVG: function(variable) {\r\n\t\t\t\treturn window.SVGElement && (variable instanceof window.SVGElement);\r\n\t\t\t},\r\n\t\t\tisEmptyObject: function(variable) {\r\n\t\t\t\tfor (var name in variable) {\r\n\t\t\t\t\tif (variable.hasOwnProperty(name)) {\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/*****************\r\n\t\t Dependencies\r\n\t\t *****************/\r\n\r\n\t\tvar $,\r\n\t\t\t\tisJQuery = false;\r\n\r\n\t\tif (global.fn && global.fn.jquery) {\r\n\t\t\t$ = global;\r\n\t\t\tisJQuery = true;\r\n\t\t} else {\r\n\t\t\t$ = window.Velocity.Utilities;\r\n\t\t}\r\n\r\n\t\tif (IE <= 8 && !isJQuery) {\r\n\t\t\tthrow new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");\r\n\t\t} else if (IE <= 7) {\r\n\t\t\t/* Revert to jQuery\'s $.animate(), and lose Velocity\'s extra features. */\r\n\t\t\tjQuery.fn.velocity = jQuery.fn.animate;\r\n\r\n\t\t\t/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t/*****************\r\n\t\t Constants\r\n\t\t *****************/\r\n\r\n\t\tvar DURATION_DEFAULT = 400,\r\n\t\t\t\tEASING_DEFAULT = "swing";\r\n\r\n\t\t/*************\r\n\t\t State\r\n\t\t *************/\r\n\r\n\t\tvar Velocity = {\r\n\t\t\t/* Container for page-wide Velocity state data. */\r\n\t\t\tState: {\r\n\t\t\t\t/* Detect mobile devices to determine if mobileHA should be turned on. */\r\n\t\t\t\tisMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),\r\n\t\t\t\t/* The mobileHA option\'s behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */\r\n\t\t\t\tisAndroid: /Android/i.test(window.navigator.userAgent),\r\n\t\t\t\tisGingerbread: /Android 2\\.3\\.[3-7]/i.test(window.navigator.userAgent),\r\n\t\t\t\tisChrome: window.chrome,\r\n\t\t\t\tisFirefox: /Firefox/i.test(window.navigator.userAgent),\r\n\t\t\t\t/* Create a cached element for re-use when checking for CSS property prefixes. */\r\n\t\t\t\tprefixElement: document.createElement("div"),\r\n\t\t\t\t/* Cache every prefix match to avoid repeating lookups. */\r\n\t\t\t\tprefixMatches: {},\r\n\t\t\t\t/* Cache the anchor used for animating window scrolling. */\r\n\t\t\t\tscrollAnchor: null,\r\n\t\t\t\t/* Cache the browser-specific property names associated with the scroll anchor. */\r\n\t\t\t\tscrollPropertyLeft: null,\r\n\t\t\t\tscrollPropertyTop: null,\r\n\t\t\t\t/* Keep track of whether our RAF tick is running. */\r\n\t\t\t\tisTicking: false,\r\n\t\t\t\t/* Container for every in-progress call to Velocity. */\r\n\t\t\t\tcalls: [],\r\n\t\t\t\tdelayedElements: {\r\n\t\t\t\t\tcount: 0\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/* Velocity\'s custom CSS stack. Made global for unit testing. */\r\n\t\t\tCSS: {/* Defined below. */},\r\n\t\t\t/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity\'s optional jQuery shim. */\r\n\t\t\tUtilities: $,\r\n\t\t\t/* Container for the user\'s custom animation redirects that are referenced by name in place of the properties map argument. */\r\n\t\t\tRedirects: {/* Manually registered by the user. */},\r\n\t\t\tEasings: {/* Defined below. */},\r\n\t\t\t/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */\r\n\t\t\tPromise: window.Promise,\r\n\t\t\t/* Velocity option defaults, which can be overriden by the user. */\r\n\t\t\tdefaults: {\r\n\t\t\t\tqueue: "",\r\n\t\t\t\tduration: DURATION_DEFAULT,\r\n\t\t\t\teasing: EASING_DEFAULT,\r\n\t\t\t\tbegin: undefined,\r\n\t\t\t\tcomplete: undefined,\r\n\t\t\t\tprogress: undefined,\r\n\t\t\t\tdisplay: undefined,\r\n\t\t\t\tvisibility: undefined,\r\n\t\t\t\tloop: false,\r\n\t\t\t\tdelay: false,\r\n\t\t\t\tmobileHA: true,\r\n\t\t\t\t/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */\r\n\t\t\t\t_cacheValues: true,\r\n\t\t\t\t/* Advanced: Set to false if the promise should always resolve on empty element lists. */\r\n\t\t\t\tpromiseRejectEmpty: true\r\n\t\t\t},\r\n\t\t\t/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */\r\n\t\t\tinit: function(element) {\r\n\t\t\t\t$.data(element, "velocity", {\r\n\t\t\t\t\t/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */\r\n\t\t\t\t\tisSVG: Type.isSVG(element),\r\n\t\t\t\t\t/* Keep track of whether the element is currently being animated by Velocity.\r\n\t\t\t\t\t This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */\r\n\t\t\t\t\tisAnimating: false,\r\n\t\t\t\t\t/* A reference to the element\'s live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\r\n\t\t\t\t\tcomputedStyle: null,\r\n\t\t\t\t\t/* Tween data is cached for each animation on the element so that data can be passed across calls --\r\n\t\t\t\t\t in particular, end values are used as subsequent start values in consecutive Velocity calls. */\r\n\t\t\t\t\ttweensContainer: null,\r\n\t\t\t\t\t/* The full root property values of each CSS hook being animated on this element are cached so that:\r\n\t\t\t\t\t 1) Concurrently-animating hooks sharing the same root can have their root values\' merged into one while tweening.\r\n\t\t\t\t\t 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */\r\n\t\t\t\t\trootPropertyValueCache: {},\r\n\t\t\t\t\t/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */\r\n\t\t\t\t\ttransformCache: {}\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t/* A parallel to jQuery\'s $.css(), used for getting/setting Velocity\'s hooked CSS properties. */\r\n\t\t\thook: null, /* Defined below. */\r\n\t\t\t/* Velocity-wide animation time remapping for testing purposes. */\r\n\t\t\tmock: false,\r\n\t\t\tversion: {major: 1, minor: 5, patch: 2},\r\n\t\t\t/* Set to 1 or 2 (most verbose) to output debug info to console. */\r\n\t\t\tdebug: false,\r\n\t\t\t/* Use rAF high resolution timestamp when available */\r\n\t\t\ttimestamp: true,\r\n\t\t\t/* Pause all animations */\r\n\t\t\tpauseAll: function(queueName) {\r\n\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\tif (activeCall) {\r\n\r\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\r\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Set call to paused */\r\n\t\t\t\t\t\tactiveCall[5] = {\r\n\t\t\t\t\t\t\tresume: false\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\r\n\t\t\t\t/* Pause timers on any currently delayed calls */\r\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\r\n\t\t\t\t\tif (!element) {\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tpauseDelayOnElement(element, currentTime);\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t/* Resume all animations */\r\n\t\t\tresumeAll: function(queueName) {\r\n\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\tif (activeCall) {\r\n\r\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\r\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Set call to resumed if it was paused */\r\n\t\t\t\t\t\tif (activeCall[5]) {\r\n\t\t\t\t\t\t\tactiveCall[5].resume = true;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\t/* Resume timers on any currently delayed calls */\r\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\r\n\t\t\t\t\tif (!element) {\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tresumeDelayOnElement(element, currentTime);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */\r\n\t\tif (window.pageYOffset !== undefined) {\r\n\t\t\tVelocity.State.scrollAnchor = window;\r\n\t\t\tVelocity.State.scrollPropertyLeft = "pageXOffset";\r\n\t\t\tVelocity.State.scrollPropertyTop = "pageYOffset";\r\n\t\t} else {\r\n\t\t\tVelocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;\r\n\t\t\tVelocity.State.scrollPropertyLeft = "scrollLeft";\r\n\t\t\tVelocity.State.scrollPropertyTop = "scrollTop";\r\n\t\t}\r\n\r\n\t\t/* Shorthand alias for jQuery\'s $.data() utility. */\r\n\t\tfunction Data(element) {\r\n\t\t\t/* Hardcode a reference to the plugin name. */\r\n\t\t\tvar response = $.data(element, "velocity");\r\n\r\n\t\t\t/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */\r\n\t\t\treturn response === null ? undefined : response;\r\n\t\t}\r\n\r\n\t\t/**************\r\n\t\t Delay Timer\r\n\t\t **************/\r\n\r\n\t\tfunction pauseDelayOnElement(element, currentTime) {\r\n\t\t\t/* Check for any delay timers, and pause the set timeouts (while preserving time data)\r\n\t\t\t to be resumed when the "resume" command is issued */\r\n\t\t\tvar data = Data(element);\r\n\t\t\tif (data && data.delayTimer && !data.delayPaused) {\r\n\t\t\t\tdata.delayRemaining = data.delay - currentTime + data.delayBegin;\r\n\t\t\t\tdata.delayPaused = true;\r\n\t\t\t\tclearTimeout(data.delayTimer.setTimeout);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction resumeDelayOnElement(element, currentTime) {\r\n\t\t\t/* Check for any paused timers and resume */\r\n\t\t\tvar data = Data(element);\r\n\t\t\tif (data && data.delayTimer && data.delayPaused) {\r\n\t\t\t\t/* If the element was mid-delay, re initiate the timeout with the remaining delay */\r\n\t\t\t\tdata.delayPaused = false;\r\n\t\t\t\tdata.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\r\n\t\t/**************\r\n\t\t Easing\r\n\t\t **************/\r\n\r\n\t\t/* Step easing generator. */\r\n\t\tfunction generateStep(steps) {\r\n\t\t\treturn function(p) {\r\n\t\t\t\treturn Math.round(p * steps) * (1 / steps);\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\t/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */\r\n\t\tfunction generateBezier(mX1, mY1, mX2, mY2) {\r\n\t\t\tvar NEWTON_ITERATIONS = 4,\r\n\t\t\t\t\tNEWTON_MIN_SLOPE = 0.001,\r\n\t\t\t\t\tSUBDIVISION_PRECISION = 0.0000001,\r\n\t\t\t\t\tSUBDIVISION_MAX_ITERATIONS = 10,\r\n\t\t\t\t\tkSplineTableSize = 11,\r\n\t\t\t\t\tkSampleStepSize = 1.0 / (kSplineTableSize - 1.0),\r\n\t\t\t\t\tfloat32ArraySupported = "Float32Array" in window;\r\n\r\n\t\t\t/* Must contain four arguments. */\r\n\t\t\tif (arguments.length !== 4) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Arguments must be numbers. */\r\n\t\t\tfor (var i = 0; i < 4; ++i) {\r\n\t\t\t\tif (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/* X values must be in the [0, 1] range. */\r\n\t\t\tmX1 = Math.min(mX1, 1);\r\n\t\t\tmX2 = Math.min(mX2, 1);\r\n\t\t\tmX1 = Math.max(mX1, 0);\r\n\t\t\tmX2 = Math.max(mX2, 0);\r\n\r\n\t\t\tvar mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);\r\n\r\n\t\t\tfunction A(aA1, aA2) {\r\n\t\t\t\treturn 1.0 - 3.0 * aA2 + 3.0 * aA1;\r\n\t\t\t}\r\n\t\t\tfunction B(aA1, aA2) {\r\n\t\t\t\treturn 3.0 * aA2 - 6.0 * aA1;\r\n\t\t\t}\r\n\t\t\tfunction C(aA1) {\r\n\t\t\t\treturn 3.0 * aA1;\r\n\t\t\t}\r\n\r\n\t\t\tfunction calcBezier(aT, aA1, aA2) {\r\n\t\t\t\treturn ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction getSlope(aT, aA1, aA2) {\r\n\t\t\t\treturn 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);\r\n\t\t\t}\r\n\r\n\t\t\tfunction newtonRaphsonIterate(aX, aGuessT) {\r\n\t\t\t\tfor (var i = 0; i < NEWTON_ITERATIONS; ++i) {\r\n\t\t\t\t\tvar currentSlope = getSlope(aGuessT, mX1, mX2);\r\n\r\n\t\t\t\t\tif (currentSlope === 0.0) {\r\n\t\t\t\t\t\treturn aGuessT;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar currentX = calcBezier(aGuessT, mX1, mX2) - aX;\r\n\t\t\t\t\taGuessT -= currentX / currentSlope;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn aGuessT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction calcSampleValues() {\r\n\t\t\t\tfor (var i = 0; i < kSplineTableSize; ++i) {\r\n\t\t\t\t\tmSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tfunction binarySubdivide(aX, aA, aB) {\r\n\t\t\t\tvar currentX, currentT, i = 0;\r\n\r\n\t\t\t\tdo {\r\n\t\t\t\t\tcurrentT = aA + (aB - aA) / 2.0;\r\n\t\t\t\t\tcurrentX = calcBezier(currentT, mX1, mX2) - aX;\r\n\t\t\t\t\tif (currentX > 0.0) {\r\n\t\t\t\t\t\taB = currentT;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\taA = currentT;\r\n\t\t\t\t\t}\r\n\t\t\t\t} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);\r\n\r\n\t\t\t\treturn currentT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction getTForX(aX) {\r\n\t\t\t\tvar intervalStart = 0.0,\r\n\t\t\t\t\t\tcurrentSample = 1,\r\n\t\t\t\t\t\tlastSample = kSplineTableSize - 1;\r\n\r\n\t\t\t\tfor (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {\r\n\t\t\t\t\tintervalStart += kSampleStepSize;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t--currentSample;\r\n\r\n\t\t\t\tvar dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),\r\n\t\t\t\t\t\tguessForT = intervalStart + dist * kSampleStepSize,\r\n\t\t\t\t\t\tinitialSlope = getSlope(guessForT, mX1, mX2);\r\n\r\n\t\t\t\tif (initialSlope >= NEWTON_MIN_SLOPE) {\r\n\t\t\t\t\treturn newtonRaphsonIterate(aX, guessForT);\r\n\t\t\t\t} else if (initialSlope === 0.0) {\r\n\t\t\t\t\treturn guessForT;\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar _precomputed = false;\r\n\r\n\t\t\tfunction precompute() {\r\n\t\t\t\t_precomputed = true;\r\n\t\t\t\tif (mX1 !== mY1 || mX2 !== mY2) {\r\n\t\t\t\t\tcalcSampleValues();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar f = function(aX) {\r\n\t\t\t\tif (!_precomputed) {\r\n\t\t\t\t\tprecompute();\r\n\t\t\t\t}\r\n\t\t\t\tif (mX1 === mY1 && mX2 === mY2) {\r\n\t\t\t\t\treturn aX;\r\n\t\t\t\t}\r\n\t\t\t\tif (aX === 0) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\t\t\t\tif (aX === 1) {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn calcBezier(getTForX(aX), mY1, mY2);\r\n\t\t\t};\r\n\r\n\t\t\tf.getControlPoints = function() {\r\n\t\t\t\treturn [{x: mX1, y: mY1}, {x: mX2, y: mY2}];\r\n\t\t\t};\r\n\r\n\t\t\tvar str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";\r\n\t\t\tf.toString = function() {\r\n\t\t\t\treturn str;\r\n\t\t\t};\r\n\r\n\t\t\treturn f;\r\n\t\t}\r\n\r\n\t\t/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */\r\n\t\t/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass\r\n\t\t then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */\r\n\t\tvar generateSpringRK4 = (function() {\r\n\t\t\tfunction springAccelerationForState(state) {\r\n\t\t\t\treturn (-state.tension * state.x) - (state.friction * state.v);\r\n\t\t\t}\r\n\r\n\t\t\tfunction springEvaluateStateWithDerivative(initialState, dt, derivative) {\r\n\t\t\t\tvar state = {\r\n\t\t\t\t\tx: initialState.x + derivative.dx * dt,\r\n\t\t\t\t\tv: initialState.v + derivative.dv * dt,\r\n\t\t\t\t\ttension: initialState.tension,\r\n\t\t\t\t\tfriction: initialState.friction\r\n\t\t\t\t};\r\n\r\n\t\t\t\treturn {dx: state.v, dv: springAccelerationForState(state)};\r\n\t\t\t}\r\n\r\n\t\t\tfunction springIntegrateState(state, dt) {\r\n\t\t\t\tvar a = {\r\n\t\t\t\t\tdx: state.v,\r\n\t\t\t\t\tdv: springAccelerationForState(state)\r\n\t\t\t\t},\r\n\t\t\t\t\t\tb = springEvaluateStateWithDerivative(state, dt * 0.5, a),\r\n\t\t\t\t\t\tc = springEvaluateStateWithDerivative(state, dt * 0.5, b),\r\n\t\t\t\t\t\td = springEvaluateStateWithDerivative(state, dt, c),\r\n\t\t\t\t\t\tdxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),\r\n\t\t\t\t\t\tdvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);\r\n\r\n\t\t\t\tstate.x = state.x + dxdt * dt;\r\n\t\t\t\tstate.v = state.v + dvdt * dt;\r\n\r\n\t\t\t\treturn state;\r\n\t\t\t}\r\n\r\n\t\t\treturn function springRK4Factory(tension, friction, duration) {\r\n\r\n\t\t\t\tvar initState = {\r\n\t\t\t\t\tx: -1,\r\n\t\t\t\t\tv: 0,\r\n\t\t\t\t\ttension: null,\r\n\t\t\t\t\tfriction: null\r\n\t\t\t\t},\r\n\t\t\t\t\t\tpath = [0],\r\n\t\t\t\t\t\ttime_lapsed = 0,\r\n\t\t\t\t\t\ttolerance = 1 / 10000,\r\n\t\t\t\t\t\tDT = 16 / 1000,\r\n\t\t\t\t\t\thave_duration, dt, last_state;\r\n\r\n\t\t\t\ttension = parseFloat(tension) || 500;\r\n\t\t\t\tfriction = parseFloat(friction) || 20;\r\n\t\t\t\tduration = duration || null;\r\n\r\n\t\t\t\tinitState.tension = tension;\r\n\t\t\t\tinitState.friction = friction;\r\n\r\n\t\t\t\thave_duration = duration !== null;\r\n\r\n\t\t\t\t/* Calculate the actual time it takes for this animation to complete with the provided conditions. */\r\n\t\t\t\tif (have_duration) {\r\n\t\t\t\t\t/* Run the simulation without a duration. */\r\n\t\t\t\t\ttime_lapsed = springRK4Factory(tension, friction);\r\n\t\t\t\t\t/* Compute the adjusted time delta. */\r\n\t\t\t\t\tdt = time_lapsed / duration * DT;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdt = DT;\r\n\t\t\t\t}\r\n\r\n\t\t\t\twhile (true) {\r\n\t\t\t\t\t/* Next/step function .*/\r\n\t\t\t\t\tlast_state = springIntegrateState(last_state || initState, dt);\r\n\t\t\t\t\t/* Store the position. */\r\n\t\t\t\t\tpath.push(1 + last_state.x);\r\n\t\t\t\t\ttime_lapsed += 16;\r\n\t\t\t\t\t/* If the change threshold is reached, break. */\r\n\t\t\t\t\tif (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the\r\n\t\t\t\t computed path and returns a snapshot of the position according to a given percentComplete. */\r\n\t\t\t\treturn !have_duration ? time_lapsed : function(percentComplete) {\r\n\t\t\t\t\treturn path[ (percentComplete * (path.length - 1)) | 0 ];\r\n\t\t\t\t};\r\n\t\t\t};\r\n\t\t}());\r\n\r\n\t\t/* jQuery easings. */\r\n\t\tVelocity.Easings = {\r\n\t\t\tlinear: function(p) {\r\n\t\t\t\treturn p;\r\n\t\t\t},\r\n\t\t\tswing: function(p) {\r\n\t\t\t\treturn 0.5 - Math.cos(p * Math.PI) / 2;\r\n\t\t\t},\r\n\t\t\t/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */\r\n\t\t\tspring: function(p) {\r\n\t\t\t\treturn 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* CSS3 and Robert Penner easings. */\r\n\t\t$.each(\r\n\t\t\t\t[\r\n\t\t\t\t\t["ease", [0.25, 0.1, 0.25, 1.0]],\r\n\t\t\t\t\t["ease-in", [0.42, 0.0, 1.00, 1.0]],\r\n\t\t\t\t\t["ease-out", [0.00, 0.0, 0.58, 1.0]],\r\n\t\t\t\t\t["ease-in-out", [0.42, 0.0, 0.58, 1.0]],\r\n\t\t\t\t\t["easeInSine", [0.47, 0, 0.745, 0.715]],\r\n\t\t\t\t\t["easeOutSine", [0.39, 0.575, 0.565, 1]],\r\n\t\t\t\t\t["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],\r\n\t\t\t\t\t["easeInQuad", [0.55, 0.085, 0.68, 0.53]],\r\n\t\t\t\t\t["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],\r\n\t\t\t\t\t["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],\r\n\t\t\t\t\t["easeInCubic", [0.55, 0.055, 0.675, 0.19]],\r\n\t\t\t\t\t["easeOutCubic", [0.215, 0.61, 0.355, 1]],\r\n\t\t\t\t\t["easeInOutCubic", [0.645, 0.045, 0.355, 1]],\r\n\t\t\t\t\t["easeInQuart", [0.895, 0.03, 0.685, 0.22]],\r\n\t\t\t\t\t["easeOutQuart", [0.165, 0.84, 0.44, 1]],\r\n\t\t\t\t\t["easeInOutQuart", [0.77, 0, 0.175, 1]],\r\n\t\t\t\t\t["easeInQuint", [0.755, 0.05, 0.855, 0.06]],\r\n\t\t\t\t\t["easeOutQuint", [0.23, 1, 0.32, 1]],\r\n\t\t\t\t\t["easeInOutQuint", [0.86, 0, 0.07, 1]],\r\n\t\t\t\t\t["easeInExpo", [0.95, 0.05, 0.795, 0.035]],\r\n\t\t\t\t\t["easeOutExpo", [0.19, 1, 0.22, 1]],\r\n\t\t\t\t\t["easeInOutExpo", [1, 0, 0, 1]],\r\n\t\t\t\t\t["easeInCirc", [0.6, 0.04, 0.98, 0.335]],\r\n\t\t\t\t\t["easeOutCirc", [0.075, 0.82, 0.165, 1]],\r\n\t\t\t\t\t["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]\r\n\t\t\t\t], function(i, easingArray) {\r\n\t\t\tVelocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);\r\n\t\t});\r\n\r\n\t\t/* Determine the appropriate easing type given an easing input. */\r\n\t\tfunction getEasing(value, duration) {\r\n\t\t\tvar easing = value;\r\n\r\n\t\t\t/* The easing option can either be a string that references a pre-registered easing,\r\n\t\t\t or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */\r\n\t\t\tif (Type.isString(value)) {\r\n\t\t\t\t/* Ensure that the easing has been assigned to jQuery\'s Velocity.Easings object. */\r\n\t\t\t\tif (!Velocity.Easings[value]) {\r\n\t\t\t\t\teasing = false;\r\n\t\t\t\t}\r\n\t\t\t} else if (Type.isArray(value) && value.length === 1) {\r\n\t\t\t\teasing = generateStep.apply(null, value);\r\n\t\t\t} else if (Type.isArray(value) && value.length === 2) {\r\n\t\t\t\t/* springRK4 must be passed the animation\'s duration. */\r\n\t\t\t\t/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing\r\n\t\t\t\t function generated with default tension and friction values. */\r\n\t\t\t\teasing = generateSpringRK4.apply(null, value.concat([duration]));\r\n\t\t\t} else if (Type.isArray(value) && value.length === 4) {\r\n\t\t\t\t/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */\r\n\t\t\t\teasing = generateBezier.apply(null, value);\r\n\t\t\t} else {\r\n\t\t\t\teasing = false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery\'s default)\r\n\t\t\t if the Velocity-wide default has been incorrectly modified. */\r\n\t\t\tif (easing === false) {\r\n\t\t\t\tif (Velocity.Easings[Velocity.defaults.easing]) {\r\n\t\t\t\t\teasing = Velocity.defaults.easing;\r\n\t\t\t\t} else {\r\n\t\t\t\t\teasing = EASING_DEFAULT;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn easing;\r\n\t\t}\r\n\r\n\t\t/*****************\r\n\t\t CSS Stack\r\n\t\t *****************/\r\n\r\n\t\t/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery\'s.\r\n\t\t It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */\r\n\t\t/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */\r\n\t\tvar CSS = Velocity.CSS = {\r\n\t\t\t/*************\r\n\t\t\t RegEx\r\n\t\t\t *************/\r\n\r\n\t\t\tRegEx: {\r\n\t\t\t\tisHex: /^#([A-f\\d]{3}){1,2}$/i,\r\n\t\t\t\t/* Unwrap a property value\'s surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */\r\n\t\t\t\tvalueUnwrap: /^[A-z]+\\((.*)\\)$/i,\r\n\t\t\t\twrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,\r\n\t\t\t\t/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */\r\n\t\t\t\tvalueSplit: /([A-z]+\\(.+\\))|(([A-z0-9#-.]+?)(?=\\s|$))/ig\r\n\t\t\t},\r\n\t\t\t/************\r\n\t\t\t Lists\r\n\t\t\t ************/\r\n\r\n\t\t\tLists: {\r\n\t\t\t\tcolors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],\r\n\t\t\t\ttransformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],\r\n\t\t\t\ttransforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],\r\n\t\t\t\tunits: [\r\n\t\t\t\t\t"%", // relative\r\n\t\t\t\t\t"em", "ex", "ch", "rem", // font relative\r\n\t\t\t\t\t"vw", "vh", "vmin", "vmax", // viewport relative\r\n\t\t\t\t\t"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths\r\n\t\t\t\t\t"deg", "grad", "rad", "turn", // angles\r\n\t\t\t\t\t"s", "ms" // time\r\n\t\t\t\t],\r\n\t\t\t\tcolorNames: {\r\n\t\t\t\t\t"aliceblue": "240,248,255",\r\n\t\t\t\t\t"antiquewhite": "250,235,215",\r\n\t\t\t\t\t"aquamarine": "127,255,212",\r\n\t\t\t\t\t"aqua": "0,255,255",\r\n\t\t\t\t\t"azure": "240,255,255",\r\n\t\t\t\t\t"beige": "245,245,220",\r\n\t\t\t\t\t"bisque": "255,228,196",\r\n\t\t\t\t\t"black": "0,0,0",\r\n\t\t\t\t\t"blanchedalmond": "255,235,205",\r\n\t\t\t\t\t"blueviolet": "138,43,226",\r\n\t\t\t\t\t"blue": "0,0,255",\r\n\t\t\t\t\t"brown": "165,42,42",\r\n\t\t\t\t\t"burlywood": "222,184,135",\r\n\t\t\t\t\t"cadetblue": "95,158,160",\r\n\t\t\t\t\t"chartreuse": "127,255,0",\r\n\t\t\t\t\t"chocolate": "210,105,30",\r\n\t\t\t\t\t"coral": "255,127,80",\r\n\t\t\t\t\t"cornflowerblue": "100,149,237",\r\n\t\t\t\t\t"cornsilk": "255,248,220",\r\n\t\t\t\t\t"crimson": "220,20,60",\r\n\t\t\t\t\t"cyan": "0,255,255",\r\n\t\t\t\t\t"darkblue": "0,0,139",\r\n\t\t\t\t\t"darkcyan": "0,139,139",\r\n\t\t\t\t\t"darkgoldenrod": "184,134,11",\r\n\t\t\t\t\t"darkgray": "169,169,169",\r\n\t\t\t\t\t"darkgrey": "169,169,169",\r\n\t\t\t\t\t"darkgreen": "0,100,0",\r\n\t\t\t\t\t"darkkhaki": "189,183,107",\r\n\t\t\t\t\t"darkmagenta": "139,0,139",\r\n\t\t\t\t\t"darkolivegreen": "85,107,47",\r\n\t\t\t\t\t"darkorange": "255,140,0",\r\n\t\t\t\t\t"darkorchid": "153,50,204",\r\n\t\t\t\t\t"darkred": "139,0,0",\r\n\t\t\t\t\t"darksalmon": "233,150,122",\r\n\t\t\t\t\t"darkseagreen": "143,188,143",\r\n\t\t\t\t\t"darkslateblue": "72,61,139",\r\n\t\t\t\t\t"darkslategray": "47,79,79",\r\n\t\t\t\t\t"darkturquoise": "0,206,209",\r\n\t\t\t\t\t"darkviolet": "148,0,211",\r\n\t\t\t\t\t"deeppink": "255,20,147",\r\n\t\t\t\t\t"deepskyblue": "0,191,255",\r\n\t\t\t\t\t"dimgray": "105,105,105",\r\n\t\t\t\t\t"dimgrey": "105,105,105",\r\n\t\t\t\t\t"dodgerblue": "30,144,255",\r\n\t\t\t\t\t"firebrick": "178,34,34",\r\n\t\t\t\t\t"floralwhite": "255,250,240",\r\n\t\t\t\t\t"forestgreen": "34,139,34",\r\n\t\t\t\t\t"fuchsia": "255,0,255",\r\n\t\t\t\t\t"gainsboro": "220,220,220",\r\n\t\t\t\t\t"ghostwhite": "248,248,255",\r\n\t\t\t\t\t"gold": "255,215,0",\r\n\t\t\t\t\t"goldenrod": "218,165,32",\r\n\t\t\t\t\t"gray": "128,128,128",\r\n\t\t\t\t\t"grey": "128,128,128",\r\n\t\t\t\t\t"greenyellow": "173,255,47",\r\n\t\t\t\t\t"green": "0,128,0",\r\n\t\t\t\t\t"honeydew": "240,255,240",\r\n\t\t\t\t\t"hotpink": "255,105,180",\r\n\t\t\t\t\t"indianred": "205,92,92",\r\n\t\t\t\t\t"indigo": "75,0,130",\r\n\t\t\t\t\t"ivory": "255,255,240",\r\n\t\t\t\t\t"khaki": "240,230,140",\r\n\t\t\t\t\t"lavenderblush": "255,240,245",\r\n\t\t\t\t\t"lavender": "230,230,250",\r\n\t\t\t\t\t"lawngreen": "124,252,0",\r\n\t\t\t\t\t"lemonchiffon": "255,250,205",\r\n\t\t\t\t\t"lightblue": "173,216,230",\r\n\t\t\t\t\t"lightcoral": "240,128,128",\r\n\t\t\t\t\t"lightcyan": "224,255,255",\r\n\t\t\t\t\t"lightgoldenrodyellow": "250,250,210",\r\n\t\t\t\t\t"lightgray": "211,211,211",\r\n\t\t\t\t\t"lightgrey": "211,211,211",\r\n\t\t\t\t\t"lightgreen": "144,238,144",\r\n\t\t\t\t\t"lightpink": "255,182,193",\r\n\t\t\t\t\t"lightsalmon": "255,160,122",\r\n\t\t\t\t\t"lightseagreen": "32,178,170",\r\n\t\t\t\t\t"lightskyblue": "135,206,250",\r\n\t\t\t\t\t"lightslategray": "119,136,153",\r\n\t\t\t\t\t"lightsteelblue": "176,196,222",\r\n\t\t\t\t\t"lightyellow": "255,255,224",\r\n\t\t\t\t\t"limegreen": "50,205,50",\r\n\t\t\t\t\t"lime": "0,255,0",\r\n\t\t\t\t\t"linen": "250,240,230",\r\n\t\t\t\t\t"magenta": "255,0,255",\r\n\t\t\t\t\t"maroon": "128,0,0",\r\n\t\t\t\t\t"mediumaquamarine": "102,205,170",\r\n\t\t\t\t\t"mediumblue": "0,0,205",\r\n\t\t\t\t\t"mediumorchid": "186,85,211",\r\n\t\t\t\t\t"mediumpurple": "147,112,219",\r\n\t\t\t\t\t"mediumseagreen": "60,179,113",\r\n\t\t\t\t\t"mediumslateblue": "123,104,238",\r\n\t\t\t\t\t"mediumspringgreen": "0,250,154",\r\n\t\t\t\t\t"mediumturquoise": "72,209,204",\r\n\t\t\t\t\t"mediumvioletred": "199,21,133",\r\n\t\t\t\t\t"midnightblue": "25,25,112",\r\n\t\t\t\t\t"mintcream": "245,255,250",\r\n\t\t\t\t\t"mistyrose": "255,228,225",\r\n\t\t\t\t\t"moccasin": "255,228,181",\r\n\t\t\t\t\t"navajowhite": "255,222,173",\r\n\t\t\t\t\t"navy": "0,0,128",\r\n\t\t\t\t\t"oldlace": "253,245,230",\r\n\t\t\t\t\t"olivedrab": "107,142,35",\r\n\t\t\t\t\t"olive": "128,128,0",\r\n\t\t\t\t\t"orangered": "255,69,0",\r\n\t\t\t\t\t"orange": "255,165,0",\r\n\t\t\t\t\t"orchid": "218,112,214",\r\n\t\t\t\t\t"palegoldenrod": "238,232,170",\r\n\t\t\t\t\t"palegreen": "152,251,152",\r\n\t\t\t\t\t"paleturquoise": "175,238,238",\r\n\t\t\t\t\t"palevioletred": "219,112,147",\r\n\t\t\t\t\t"papayawhip": "255,239,213",\r\n\t\t\t\t\t"peachpuff": "255,218,185",\r\n\t\t\t\t\t"peru": "205,133,63",\r\n\t\t\t\t\t"pink": "255,192,203",\r\n\t\t\t\t\t"plum": "221,160,221",\r\n\t\t\t\t\t"powderblue": "176,224,230",\r\n\t\t\t\t\t"purple": "128,0,128",\r\n\t\t\t\t\t"red": "255,0,0",\r\n\t\t\t\t\t"rosybrown": "188,143,143",\r\n\t\t\t\t\t"royalblue": "65,105,225",\r\n\t\t\t\t\t"saddlebrown": "139,69,19",\r\n\t\t\t\t\t"salmon": "250,128,114",\r\n\t\t\t\t\t"sandybrown": "244,164,96",\r\n\t\t\t\t\t"seagreen": "46,139,87",\r\n\t\t\t\t\t"seashell": "255,245,238",\r\n\t\t\t\t\t"sienna": "160,82,45",\r\n\t\t\t\t\t"silver": "192,192,192",\r\n\t\t\t\t\t"skyblue": "135,206,235",\r\n\t\t\t\t\t"slateblue": "106,90,205",\r\n\t\t\t\t\t"slategray": "112,128,144",\r\n\t\t\t\t\t"snow": "255,250,250",\r\n\t\t\t\t\t"springgreen": "0,255,127",\r\n\t\t\t\t\t"steelblue": "70,130,180",\r\n\t\t\t\t\t"tan": "210,180,140",\r\n\t\t\t\t\t"teal": "0,128,128",\r\n\t\t\t\t\t"thistle": "216,191,216",\r\n\t\t\t\t\t"tomato": "255,99,71",\r\n\t\t\t\t\t"turquoise": "64,224,208",\r\n\t\t\t\t\t"violet": "238,130,238",\r\n\t\t\t\t\t"wheat": "245,222,179",\r\n\t\t\t\t\t"whitesmoke": "245,245,245",\r\n\t\t\t\t\t"white": "255,255,255",\r\n\t\t\t\t\t"yellowgreen": "154,205,50",\r\n\t\t\t\t\t"yellow": "255,255,0"\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************\r\n\t\t\t Hooks\r\n\t\t\t ************/\r\n\r\n\t\t\t/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property\r\n\t\t\t (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */\r\n\t\t\t/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only\r\n\t\t\t tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */\r\n\t\t\tHooks: {\r\n\t\t\t\t/********************\r\n\t\t\t\t Registration\r\n\t\t\t\t ********************/\r\n\r\n\t\t\t\t/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */\r\n\t\t\t\t/* Each template consists of the compound-value\'s base name, its constituent subproperty names, and those subproperties\' default values. */\r\n\t\t\t\ttemplates: {\r\n\t\t\t\t\t"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],\r\n\t\t\t\t\t"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],\r\n\t\t\t\t\t"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],\r\n\t\t\t\t\t"backgroundPosition": ["X Y", "0% 0%"],\r\n\t\t\t\t\t"transformOrigin": ["X Y Z", "50% 50% 0px"],\r\n\t\t\t\t\t"perspectiveOrigin": ["X Y", "50% 50%"]\r\n\t\t\t\t},\r\n\t\t\t\t/* A "registered" hook is one that has been converted from its template form into a live,\r\n\t\t\t\t tweenable property. It contains data to associate it with its root property. */\r\n\t\t\t\tregistered: {\r\n\t\t\t\t\t/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],\r\n\t\t\t\t\t which consists of the subproperty\'s name, the associated root property\'s name,\r\n\t\t\t\t\t and the subproperty\'s position in the root\'s value. */\r\n\t\t\t\t},\r\n\t\t\t\t/* Convert the templates into individual hooks then append them to the registered object above. */\r\n\t\t\t\tregister: function() {\r\n\t\t\t\t\t/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are\r\n\t\t\t\t\t currently set to "transparent" default to their respective template below when color-animated,\r\n\t\t\t\t\t and white is typically a closer match to transparent than black is. An exception is made for text ("color"),\r\n\t\t\t\t\t which is almost always set closer to black than white. */\r\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.colors.length; i++) {\r\n\t\t\t\t\t\tvar rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";\r\n\t\t\t\t\t\tCSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar rootProperty,\r\n\t\t\t\t\t\t\thookTemplate,\r\n\t\t\t\t\t\t\thookNames;\r\n\r\n\t\t\t\t\t/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.\r\n\t\t\t\t\t Thus, we re-arrange the templates accordingly. */\r\n\t\t\t\t\tif (IE) {\r\n\t\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\r\n\t\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\r\n\t\t\t\t\t\t\thookNames = hookTemplate[0].split(" ");\r\n\r\n\t\t\t\t\t\t\tvar defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);\r\n\r\n\t\t\t\t\t\t\tif (hookNames[0] === "Color") {\r\n\t\t\t\t\t\t\t\t/* Reposition both the hook\'s name and its default value to the end of their respective strings. */\r\n\t\t\t\t\t\t\t\thookNames.push(hookNames.shift());\r\n\t\t\t\t\t\t\t\tdefaultValues.push(defaultValues.shift());\r\n\r\n\t\t\t\t\t\t\t\t/* Replace the existing template for the hook\'s root property. */\r\n\t\t\t\t\t\t\t\tCSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Hook registration. */\r\n\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\r\n\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\r\n\t\t\t\t\t\thookNames = hookTemplate[0].split(" ");\r\n\r\n\t\t\t\t\t\tfor (var j in hookNames) {\r\n\t\t\t\t\t\t\tif (!hookNames.hasOwnProperty(j)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tvar fullHookName = rootProperty + hookNames[j],\r\n\t\t\t\t\t\t\t\t\thookPosition = j;\r\n\r\n\t\t\t\t\t\t\t/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)\r\n\t\t\t\t\t\t\t and the hook\'s position in its template\'s default value string. */\r\n\t\t\t\t\t\t\tCSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/*****************************\r\n\t\t\t\t Injection and Extraction\r\n\t\t\t\t *****************************/\r\n\r\n\t\t\t\t/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */\r\n\t\t\t\t/* Since a hook cannot be set directly (the browser won\'t recognize it), style updating for hooks is routed through the hook\'s root property. */\r\n\t\t\t\tgetRoot: function(property) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[property];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\treturn hookData[0];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If there was no hook match, return the property name untouched. */\r\n\t\t\t\t\t\treturn property;\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tgetUnit: function(str, start) {\r\n\t\t\t\t\tvar unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";\r\n\r\n\t\t\t\t\tif (unit && _inArray(CSS.Lists.units, unit)) {\r\n\t\t\t\t\t\treturn unit;\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn "";\r\n\t\t\t\t},\r\n\t\t\t\tfixColors: function(str) {\r\n\t\t\t\t\treturn str.replace(/(rgba?\\(\\s*)?(\\b[a-z]+\\b)/g, function($0, $1, $2) {\r\n\t\t\t\t\t\tif (CSS.Lists.colorNames.hasOwnProperty($2)) {\r\n\t\t\t\t\t\t\treturn ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn $1 + $2;\r\n\t\t\t\t\t});\r\n\t\t\t\t},\r\n\t\t\t\t/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that\r\n\t\t\t\t the targeted hook can be injected or extracted at its standard position. */\r\n\t\t\t\tcleanRootPropertyValue: function(rootProperty, rootPropertyValue) {\r\n\t\t\t\t\t/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */\r\n\t\t\t\t\tif (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {\r\n\t\t\t\t\t\trootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If rootPropertyValue is a CSS null-value (from which there\'s inherently no hook value to extract),\r\n\t\t\t\t\t default to the root\'s default value as defined in CSS.Hooks.templates. */\r\n\t\t\t\t\t/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their\r\n\t\t\t\t\t zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */\r\n\t\t\t\t\tif (CSS.Values.isCSSNullValue(rootPropertyValue)) {\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t},\r\n\t\t\t\t/* Extracted the hook\'s value from its root property\'s value. This is used to get the starting value of an animating hook. */\r\n\t\t\t\textractValue: function(fullHookName, rootPropertyValue) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\tvar hookRoot = hookData[0],\r\n\t\t\t\t\t\t\t\thookPosition = hookData[1];\r\n\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\r\n\r\n\t\t\t\t\t\t/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */\r\n\t\t\t\t\t\treturn rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If the provided fullHookName isn\'t a registered hook, return the rootPropertyValue that was passed in. */\r\n\t\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* Inject the hook\'s value into its root property\'s value. This is used to piece back together the root property\r\n\t\t\t\t once Velocity has updated one of its individually hooked values through tweening. */\r\n\t\t\t\tinjectValue: function(fullHookName, hookValue, rootPropertyValue) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\tvar hookRoot = hookData[0],\r\n\t\t\t\t\t\t\t\thookPosition = hookData[1],\r\n\t\t\t\t\t\t\t\trootPropertyValueParts,\r\n\t\t\t\t\t\t\t\trootPropertyValueUpdated;\r\n\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\r\n\r\n\t\t\t\t\t\t/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,\r\n\t\t\t\t\t\t then reconstruct the rootPropertyValue string. */\r\n\t\t\t\t\t\trootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);\r\n\t\t\t\t\t\trootPropertyValueParts[hookPosition] = hookValue;\r\n\t\t\t\t\t\trootPropertyValueUpdated = rootPropertyValueParts.join(" ");\r\n\r\n\t\t\t\t\t\treturn rootPropertyValueUpdated;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If the provided fullHookName isn\'t a registered hook, return the rootPropertyValue that was passed in. */\r\n\t\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/*******************\r\n\t\t\t Normalizations\r\n\t\t\t *******************/\r\n\r\n\t\t\t/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)\r\n\t\t\t and reformatting special properties (e.g. clip, rgba) to look like standard ones. */\r\n\t\t\tNormalizations: {\r\n\t\t\t\t/* Normalizations are passed a normalization target (either the property\'s name, its extracted value, or its injected value),\r\n\t\t\t\t the targeted element (which may need to be queried), and the targeted property value. */\r\n\t\t\t\tregistered: {\r\n\t\t\t\t\tclip: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\treturn "clip";\r\n\t\t\t\t\t\t\t\t/* Clip needs to be unwrapped and stripped of its commas during extraction. */\r\n\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\tvar extracted;\r\n\r\n\t\t\t\t\t\t\t\t/* If Velocity also extracted this value, skip extraction. */\r\n\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\textracted = propertyValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* Remove the "rect()" wrapper. */\r\n\t\t\t\t\t\t\t\t\textracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);\r\n\r\n\t\t\t\t\t\t\t\t\t/* Strip off commas. */\r\n\t\t\t\t\t\t\t\t\textracted = extracted ? extracted[1].replace(/,(\\s+)?/g, " ") : propertyValue;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t/* Clip needs to be re-wrapped during injection. */\r\n\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\treturn "rect(" + propertyValue + ")";\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\tblur: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\treturn Velocity.State.isFirefox ? "filter" : "-webkit-filter";\r\n\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\tvar extracted = parseFloat(propertyValue);\r\n\r\n\t\t\t\t\t\t\t\t/* If extracted is NaN, meaning the value isn\'t already extracted. */\r\n\t\t\t\t\t\t\t\tif (!(extracted || extracted === 0)) {\r\n\t\t\t\t\t\t\t\t\tvar blurComponent = propertyValue.toString().match(/blur\\(([0-9]+[A-z]+)\\)/i);\r\n\r\n\t\t\t\t\t\t\t\t\t/* If the filter string had a blur component, return just the blur value and unit type. */\r\n\t\t\t\t\t\t\t\t\tif (blurComponent) {\r\n\t\t\t\t\t\t\t\t\t\textracted = blurComponent[1];\r\n\t\t\t\t\t\t\t\t\t\t/* If the component doesn\'t exist, default blur to 0. */\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\textracted = 0;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t/* Blur needs to be re-wrapped during injection. */\r\n\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\t/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */\r\n\t\t\t\t\t\t\t\tif (!parseFloat(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\treturn "none";\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\treturn "blur(" + propertyValue + ")";\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */\r\n\t\t\t\t\topacity: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\t\treturn "filter";\r\n\t\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\t\t/* <=IE8 return a "filter" value of "alpha(opacity=\\d{1,3})".\r\n\t\t\t\t\t\t\t\t\t Extract the value and convert it to a decimal value to match the standard CSS opacity property\'s formatting. */\r\n\t\t\t\t\t\t\t\t\tvar extracted = propertyValue.toString().match(/alpha\\(opacity=(.*)\\)/i);\r\n\r\n\t\t\t\t\t\t\t\t\tif (extracted) {\r\n\t\t\t\t\t\t\t\t\t\t/* Convert to decimal value. */\r\n\t\t\t\t\t\t\t\t\t\tpropertyValue = extracted[1] / 100;\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* When extracting opacity, default to 1 since a null value means opacity hasn\'t been set. */\r\n\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\t\t/* Opacified elements are required to have their zoom property set to a non-zero value. */\r\n\t\t\t\t\t\t\t\t\telement.style.zoom = 1;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Setting the filter property on elements with certain font property combinations can result in a\r\n\t\t\t\t\t\t\t\t\t highly unappealing ultra-bolding effect. There\'s no way to remedy this throughout a tween, but dropping the\r\n\t\t\t\t\t\t\t\t\t value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */\r\n\t\t\t\t\t\t\t\t\tif (parseFloat(propertyValue) >= 1) {\r\n\t\t\t\t\t\t\t\t\t\treturn "";\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* As per the filter property\'s spec, convert the decimal value to a whole number and wrap the value. */\r\n\t\t\t\t\t\t\t\t\t\treturn "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* With all other browsers, normalization is not required; return the same values that were passed in. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\t\treturn "opacity";\r\n\t\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/*****************************\r\n\t\t\t\t Batched Registrations\r\n\t\t\t\t *****************************/\r\n\r\n\t\t\t\t/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */\r\n\t\t\t\tregister: function() {\r\n\r\n\t\t\t\t\t/*****************\r\n\t\t\t\t\t Transforms\r\n\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization\r\n\t\t\t\t\t so that they can be referenced in a properties map by their individual names. */\r\n\t\t\t\t\t/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform\r\n\t\t\t\t\t setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.\r\n\t\t\t\t\t Transform setting is batched in this way to improve performance: the transform style only needs to be updated\r\n\t\t\t\t\t once when multiple transform subproperties are being animated simultaneously. */\r\n\t\t\t\t\t/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported\r\n\t\t\t\t\t transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values\r\n\t\t\t\t\t from being normalized for these browsers so that tweening skips these properties altogether\r\n\t\t\t\t\t (since it will ignore them as being unsupported by the browser.) */\r\n\t\t\t\t\tif ((!IE || IE > 9) && !Velocity.State.isGingerbread) {\r\n\t\t\t\t\t\t/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty\r\n\t\t\t\t\t\t share the same name, the latter is given a unique token within Velocity: "transformPerspective". */\r\n\t\t\t\t\t\tCSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.transformsBase.length; i++) {\r\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that transformName\'s value is\r\n\t\t\t\t\t\t paired with its respective function. (Otherwise, all functions would take the final for loop\'s transformName.) */\r\n\t\t\t\t\t\t(function() {\r\n\t\t\t\t\t\t\tvar transformName = CSS.Lists.transformsBase[i];\r\n\r\n\t\t\t\t\t\t\tCSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\t\t/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */\r\n\t\t\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\t\t\treturn "transform";\r\n\t\t\t\t\t\t\t\t\t\t/* Transform values are cached onto a per-element transformCache object. */\r\n\t\t\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\t\t\t/* If this transform has yet to be assigned a value, return its null value. */\r\n\t\t\t\t\t\t\t\t\t\tif (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */\r\n\t\t\t\t\t\t\t\t\t\t\treturn /^scale/i.test(transformName) ? 1 : 0;\r\n\t\t\t\t\t\t\t\t\t\t\t/* When transform values are set, they are wrapped in parentheses as per the CSS spec.\r\n\t\t\t\t\t\t\t\t\t\t\t Thus, when extracting their values (for tween calculations), we strip off the parentheses. */\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName].replace(/[()]/g, "");\r\n\t\t\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\t\t\tvar invalid = false;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.\r\n\t\t\t\t\t\t\t\t\t\t Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */\r\n\t\t\t\t\t\t\t\t\t\t/* Switch on the base transform type; ignore the axis by removing the last letter from the transform\'s name. */\r\n\t\t\t\t\t\t\t\t\t\tswitch (transformName.substr(0, transformName.length - 1)) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Whitelist unit types for each transform. */\r\n\t\t\t\t\t\t\t\t\t\t\tcase "translate":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(%|px|em|rem|vw|vh|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */\r\n\t\t\t\t\t\t\t\t\t\t\tcase "scal":\r\n\t\t\t\t\t\t\t\t\t\t\tcase "scale":\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Chrome on Android has a bug in which scaled elements blur if their initial scale\r\n\t\t\t\t\t\t\t\t\t\t\t\t value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property\r\n\t\t\t\t\t\t\t\t\t\t\t\t and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\tcase "skew":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\tcase "rotate":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (!invalid) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* As per the CSS spec, wrap the value in parentheses. */\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).transformCache[transformName] = "(" + propertyValue + ")";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */\r\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName];\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*************\r\n\t\t\t\t\t Colors\r\n\t\t\t\t\t *************/\r\n\r\n\t\t\t\t\t/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.\r\n\t\t\t\t\t Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */\r\n\t\t\t\t\tfor (var j = 0; j < CSS.Lists.colors.length; j++) {\r\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that colorName\'s value is paired with its respective function.\r\n\t\t\t\t\t\t (Otherwise, all functions would take the final for loop\'s colorName.) */\r\n\t\t\t\t\t\t(function() {\r\n\t\t\t\t\t\t\tvar colorName = CSS.Lists.colors[j];\r\n\r\n\t\t\t\t\t\t\t/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */\r\n\t\t\t\t\t\t\tCSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\t\t\treturn colorName;\r\n\t\t\t\t\t\t\t\t\t\t/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */\r\n\t\t\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\t\t\tvar extracted;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */\r\n\t\t\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\textracted = propertyValue;\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\tvar converted,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolorNames = {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblack: "rgb(0, 0, 0)",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblue: "rgb(0, 0, 255)",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgray: "rgb(128, 128, 128)",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgreen: "rgb(0, 128, 0)",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tred: "rgb(255, 0, 0)",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\twhite: "rgb(255, 255, 255)"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Convert color names to rgb. */\r\n\t\t\t\t\t\t\t\t\t\t\tif (/^[A-z]+$/i.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (colorNames[propertyValue] !== undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames[propertyValue];\r\n\t\t\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* If an unmatched color name is provided, default to black. */\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Convert hex values to rgb. */\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (CSS.RegEx.isHex.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* If the provided color doesn\'t match any of the accepted color formats, default to black. */\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!(/^rgba?\\(/i.test(propertyValue))) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip\r\n\t\t\t\t\t\t\t\t\t\t\t repeated spaces (in case the value included spaces to begin with). */\r\n\t\t\t\t\t\t\t\t\t\t\textracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\\s+)?/g, " ");\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* So long as this isn\'t <=IE8, add a fourth (alpha) component if it\'s missing and default it to 1 (visible). */\r\n\t\t\t\t\t\t\t\t\t\tif ((!IE || IE > 8) && extracted.split(" ").length === 3) {\r\n\t\t\t\t\t\t\t\t\t\t\textracted += " 1";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\t\t\t/* If we have a pattern then it might already have the right values */\r\n\t\t\t\t\t\t\t\t\t\tif (/^rgb/.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If this is IE<=8 and an alpha component exists, strip it off. */\r\n\t\t\t\t\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\t\t\t\t\tif (propertyValue.split(" ").length === 4) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = propertyValue.split(/\\s+/).slice(0, 3).join(" ");\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t/* Otherwise, add a fourth (alpha) component if it\'s missing and default it to 1 (visible). */\r\n\t\t\t\t\t\t\t\t\t\t} else if (propertyValue.split(" ").length === 3) {\r\n\t\t\t\t\t\t\t\t\t\t\tpropertyValue += " 1";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units\r\n\t\t\t\t\t\t\t\t\t\t on all values but the fourth (R, G, and B only accept whole numbers). */\r\n\t\t\t\t\t\t\t\t\t\treturn (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\\s+/g, ",").replace(/\\.(\\d)+(?=,)/g, "") + ")";\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/**************\r\n\t\t\t\t\t Dimensions\r\n\t\t\t\t\t **************/\r\n\t\t\t\t\tfunction augmentDimension(name, element, wantInner) {\r\n\t\t\t\t\t\tvar isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";\r\n\r\n\t\t\t\t\t\tif (isBorderBox === (wantInner || false)) {\r\n\t\t\t\t\t\t\t/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */\r\n\t\t\t\t\t\t\tvar i,\r\n\t\t\t\t\t\t\t\t\tvalue,\r\n\t\t\t\t\t\t\t\t\taugment = 0,\r\n\t\t\t\t\t\t\t\t\tsides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],\r\n\t\t\t\t\t\t\t\t\tfields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];\r\n\r\n\t\t\t\t\t\t\tfor (i = 0; i < fields.length; i++) {\r\n\t\t\t\t\t\t\t\tvalue = parseFloat(CSS.getPropertyValue(element, fields[i]));\r\n\t\t\t\t\t\t\t\tif (!isNaN(value)) {\r\n\t\t\t\t\t\t\t\t\taugment += value;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn wantInner ? -augment : augment;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tfunction getDimension(name, wantInner) {\r\n\t\t\t\t\t\treturn function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase "name":\r\n\t\t\t\t\t\t\t\t\treturn name;\r\n\t\t\t\t\t\t\t\tcase "extract":\r\n\t\t\t\t\t\t\t\t\treturn parseFloat(propertyValue) + augmentDimension(name, element, wantInner);\r\n\t\t\t\t\t\t\t\tcase "inject":\r\n\t\t\t\t\t\t\t\t\treturn (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t}\r\n\t\t\t\t\tCSS.Normalizations.registered.innerWidth = getDimension("width", true);\r\n\t\t\t\t\tCSS.Normalizations.registered.innerHeight = getDimension("height", true);\r\n\t\t\t\t\tCSS.Normalizations.registered.outerWidth = getDimension("width");\r\n\t\t\t\t\tCSS.Normalizations.registered.outerHeight = getDimension("height");\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************************\r\n\t\t\t CSS Property Names\r\n\t\t\t ************************/\r\n\r\n\t\t\tNames: {\r\n\t\t\t\t/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").\r\n\t\t\t\t Camelcasing is used to normalize property names between and across calls. */\r\n\t\t\t\tcamelCase: function(property) {\r\n\t\t\t\t\treturn property.replace(/-(\\w)/g, function(match, subMatch) {\r\n\t\t\t\t\t\treturn subMatch.toUpperCase();\r\n\t\t\t\t\t});\r\n\t\t\t\t},\r\n\t\t\t\t/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element\'s HTML attributes (instead of via CSS styles). */\r\n\t\t\t\tSVGAttribute: function(property) {\r\n\t\t\t\t\tvar SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";\r\n\r\n\t\t\t\t\t/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */\r\n\t\t\t\t\tif (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {\r\n\t\t\t\t\t\tSVGAttributes += "|transform";\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn new RegExp("^(" + SVGAttributes + ")$", "i").test(property);\r\n\t\t\t\t},\r\n\t\t\t\t/* Determine whether a property should be set with a vendor prefix. */\r\n\t\t\t\t/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.\r\n\t\t\t\t If the property is not at all supported by the browser, return a false flag. */\r\n\t\t\t\tprefixCheck: function(property) {\r\n\t\t\t\t\t/* If this property has already been checked, return the cached value. */\r\n\t\t\t\t\tif (Velocity.State.prefixMatches[property]) {\r\n\t\t\t\t\t\treturn [Velocity.State.prefixMatches[property], true];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tvar vendors = ["", "Webkit", "Moz", "ms", "O"];\r\n\r\n\t\t\t\t\t\tfor (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {\r\n\t\t\t\t\t\t\tvar propertyPrefixed;\r\n\r\n\t\t\t\t\t\t\tif (i === 0) {\r\n\t\t\t\t\t\t\t\tpropertyPrefixed = property;\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */\r\n\t\t\t\t\t\t\t\tpropertyPrefixed = vendors[i] + property.replace(/^\\w/, function(match) {\r\n\t\t\t\t\t\t\t\t\treturn match.toUpperCase();\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Check if the browser supports this property as prefixed. */\r\n\t\t\t\t\t\t\tif (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {\r\n\t\t\t\t\t\t\t\t/* Cache the match. */\r\n\t\t\t\t\t\t\t\tVelocity.State.prefixMatches[property] = propertyPrefixed;\r\n\r\n\t\t\t\t\t\t\t\treturn [propertyPrefixed, true];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* If the browser doesn\'t support this property in any form, include a false flag so that the caller can decide how to proceed. */\r\n\t\t\t\t\t\treturn [property, false];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************************\r\n\t\t\t CSS Property Values\r\n\t\t\t ************************/\r\n\r\n\t\t\tValues: {\r\n\t\t\t\t/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */\r\n\t\t\t\thexToRgb: function(hex) {\r\n\t\t\t\t\tvar shortformRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,\r\n\t\t\t\t\t\t\tlongformRegex = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i,\r\n\t\t\t\t\t\t\trgbParts;\r\n\r\n\t\t\t\t\thex = hex.replace(shortformRegex, function(m, r, g, b) {\r\n\t\t\t\t\t\treturn r + r + g + g + b + b;\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\trgbParts = longformRegex.exec(hex);\r\n\r\n\t\t\t\t\treturn rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];\r\n\t\t\t\t},\r\n\t\t\t\tisCSSNullValue: function(value) {\r\n\t\t\t\t\t/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.\r\n\t\t\t\t\t Thus, we check for both falsiness and these special strings. */\r\n\t\t\t\t\t/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook\r\n\t\t\t\t\t templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */\r\n\t\t\t\t\t/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */\r\n\t\t\t\t\treturn (!value || /^(none|auto|transparent|(rgba\\(0, ?0, ?0, ?0\\)))$/i.test(value));\r\n\t\t\t\t},\r\n\t\t\t\t/* Retrieve a property\'s default unit type. Used for assigning a unit type when one is not supplied by the user. */\r\n\t\t\t\tgetUnitType: function(property) {\r\n\t\t\t\t\tif (/^(rotate|skew)/i.test(property)) {\r\n\t\t\t\t\t\treturn "deg";\r\n\t\t\t\t\t} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {\r\n\t\t\t\t\t\t/* The above properties are unitless. */\r\n\t\t\t\t\t\treturn "";\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Default to px for all other properties. */\r\n\t\t\t\t\t\treturn "px";\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* HTML elements default to an associated display type when they\'re not set to display:none. */\r\n\t\t\t\t/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */\r\n\t\t\t\tgetDisplayType: function(element) {\r\n\t\t\t\t\tvar tagName = element && element.tagName.toString().toLowerCase();\r\n\r\n\t\t\t\t\tif (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn "inline";\r\n\t\t\t\t\t} else if (/^(li)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn "list-item";\r\n\t\t\t\t\t} else if (/^(tr)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn "table-row";\r\n\t\t\t\t\t} else if (/^(table)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn "table";\r\n\t\t\t\t\t} else if (/^(tbody)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn "table-row-group";\r\n\t\t\t\t\t\t/* Default to "block" when no match is found. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treturn "block";\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they\'re animating. */\r\n\t\t\t\taddClass: function(element, className) {\r\n\t\t\t\t\tif (element) {\r\n\t\t\t\t\t\tif (element.classList) {\r\n\t\t\t\t\t\t\telement.classList.add(className);\r\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\r\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\r\n\t\t\t\t\t\t\telement.className += (element.className.length ? " " : "") + className;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn\'t behave correctly - the same way jQuery does it\r\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";\r\n\r\n\t\t\t\t\t\t\telement.setAttribute("class", currentClass + (currentClass ? " " : "") + className);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tremoveClass: function(element, className) {\r\n\t\t\t\t\tif (element) {\r\n\t\t\t\t\t\tif (element.classList) {\r\n\t\t\t\t\t\t\telement.classList.remove(className);\r\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\r\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\r\n\t\t\t\t\t\t\t// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?\r\n\t\t\t\t\t\t\telement.className = element.className.toString().replace(new RegExp("(^|\\\\s)" + className.split(" ").join("|") + "(\\\\s|$)", "gi"), " ");\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn\'t behave correctly - the same way jQuery does it\r\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";\r\n\r\n\t\t\t\t\t\t\telement.setAttribute("class", currentClass.replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " "));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/****************************\r\n\t\t\t Style Getting & Setting\r\n\t\t\t ****************************/\r\n\r\n\t\t\t/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\r\n\t\t\tgetPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {\r\n\t\t\t\t/* Get an element\'s computed property value. */\r\n\t\t\t\t/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element\'s\r\n\t\t\t\t style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property\'s\r\n\t\t\t\t *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\r\n\t\t\t\tfunction computePropertyValue(element, property) {\r\n\t\t\t\t\t/* When box-sizing isn\'t set to border-box, height and width style values are incorrectly computed when an\r\n\t\t\t\t\t element\'s scrollbars are visible (which expands the element\'s dimensions). Thus, we defer to the more accurate\r\n\t\t\t\t\t offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.\r\n\t\t\t\t\t We subtract border and padding to get the sum of interior + scrollbar. */\r\n\t\t\t\t\tvar computedValue = 0;\r\n\r\n\t\t\t\t\t/* IE<=8 doesn\'t support window.getComputedStyle, thus we defer to jQuery, which has an extensive array\r\n\t\t\t\t\t of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the\r\n\t\t\t\t\t codebase for a dying browser. The performance repercussions of using jQuery here are minimal since\r\n\t\t\t\t\t Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn\'t that slow. */\r\n\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\tcomputedValue = $.css(element, property); /* GET */\r\n\t\t\t\t\t\t/* All other browsers support getComputedStyle. The returned live object reference is cached onto its\r\n\t\t\t\t\t\t associated element so that it does not need to be refetched upon every GET. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily\r\n\t\t\t\t\t\t toggle display to the element type\'s default value. */\r\n\t\t\t\t\t\tvar toggleDisplay = false;\r\n\r\n\t\t\t\t\t\tif (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {\r\n\t\t\t\t\t\t\ttoggleDisplay = true;\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar revertDisplay = function() {\r\n\t\t\t\t\t\t\tif (toggleDisplay) {\r\n\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, "display", "none");\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tif (!forceStyleLookup) {\r\n\t\t\t\t\t\t\tif (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {\r\n\t\t\t\t\t\t\t\tvar contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);\r\n\t\t\t\t\t\t\t\trevertDisplay();\r\n\r\n\t\t\t\t\t\t\t\treturn contentBoxHeight;\r\n\t\t\t\t\t\t\t} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {\r\n\t\t\t\t\t\t\t\tvar contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);\r\n\t\t\t\t\t\t\t\trevertDisplay();\r\n\r\n\t\t\t\t\t\t\t\treturn contentBoxWidth;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar computedStyle;\r\n\r\n\t\t\t\t\t\t/* For elements that Velocity hasn\'t been called on directly (e.g. when Velocity queries the DOM on behalf\r\n\t\t\t\t\t\t of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn\'t cached. */\r\n\t\t\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\t\t\tcomputedStyle = window.getComputedStyle(element, null); /* GET */\r\n\t\t\t\t\t\t\t/* If the computedStyle object has yet to be cached, do so now. */\r\n\t\t\t\t\t\t} else if (!Data(element).computedStyle) {\r\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */\r\n\t\t\t\t\t\t\t/* If computedStyle is cached, use it. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side\'s color.\r\n\t\t\t\t\t\t Also, in all browsers, when border colors aren\'t all the same, a compound value is returned that Velocity isn\'t setup to parse.\r\n\t\t\t\t\t\t So, as a polyfill for querying individual border side colors, we just return the top border\'s color and animate all borders from that value. */\r\n\t\t\t\t\t\tif (property === "borderColor") {\r\n\t\t\t\t\t\t\tproperty = "borderTopColor";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method\r\n\t\t\t\t\t\t instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */\r\n\t\t\t\t\t\tif (IE === 9 && property === "filter") {\r\n\t\t\t\t\t\t\tcomputedValue = computedStyle.getPropertyValue(property); /* GET */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcomputedValue = computedStyle[property];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Fall back to the property\'s style value (if defined) when computedValue returns nothing,\r\n\t\t\t\t\t\t which can happen when the element hasn\'t been painted. */\r\n\t\t\t\t\t\tif (computedValue === "" || computedValue === null) {\r\n\t\t\t\t\t\t\tcomputedValue = element.style[property];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\trevertDisplay();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,\r\n\t\t\t\t\t defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same\r\n\t\t\t\t\t effect as being set to 0, so no conversion is necessary.) */\r\n\t\t\t\t\t/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"\r\n\t\t\t\t\t property, which reverts to "auto", left\'s value is 0 relative to its parent element, but is often non-zero relative\r\n\t\t\t\t\t to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */\r\n\t\t\t\t\tif (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {\r\n\t\t\t\t\t\tvar position = computePropertyValue(element, "position"); /* GET */\r\n\r\n\t\t\t\t\t\t/* For absolute positioning, jQuery\'s $.position() only returns values for top and left;\r\n\t\t\t\t\t\t right and bottom will have their "auto" value reverted to 0. */\r\n\t\t\t\t\t\t/* Note: A jQuery object must be created here since jQuery doesn\'t have a low-level alias for $.position().\r\n\t\t\t\t\t\t Not a big deal since we\'re currently in a GET batch anyway. */\r\n\t\t\t\t\t\tif (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {\r\n\t\t\t\t\t\t\t/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue\'s behavior. */\r\n\t\t\t\t\t\t\tcomputedValue = $(element).position()[property] + "px"; /* GET */\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn computedValue;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar propertyValue;\r\n\r\n\t\t\t\t/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),\r\n\t\t\t\t extract the hook\'s value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */\r\n\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\tvar hook = property,\r\n\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(hook);\r\n\r\n\t\t\t\t\t/* If a cached rootPropertyValue wasn\'t passed in (which Velocity always attempts to do in order to avoid requerying the DOM),\r\n\t\t\t\t\t query the DOM for the root property\'s value. */\r\n\t\t\t\t\tif (rootPropertyValue === undefined) {\r\n\t\t\t\t\t\t/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */\r\n\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If this root has a normalization registered, peform the associated normalization extraction. */\r\n\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\r\n\t\t\t\t\t\trootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Extract the hook\'s value. */\r\n\t\t\t\t\tpropertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);\r\n\r\n\t\t\t\t\t/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),\r\n\t\t\t\t\t normalize the property\'s name and value, and handle the special case of transforms. */\r\n\t\t\t\t\t/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly\r\n\t\t\t\t\t numerical and therefore do not require normalization extraction. */\r\n\t\t\t\t} else if (CSS.Normalizations.registered[property]) {\r\n\t\t\t\t\tvar normalizedPropertyName,\r\n\t\t\t\t\t\t\tnormalizedPropertyValue;\r\n\r\n\t\t\t\t\tnormalizedPropertyName = CSS.Normalizations.registered[property]("name", element);\r\n\r\n\t\t\t\t\t/* Transform values are calculated via normalization extraction (see below), which checks against the element\'s transformCache.\r\n\t\t\t\t\t At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.\r\n\t\t\t\t\t This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;\r\n\t\t\t\t\t thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */\r\n\t\t\t\t\tif (normalizedPropertyName !== "transform") {\r\n\t\t\t\t\t\tnormalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */\r\n\r\n\t\t\t\t\t\t/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */\r\n\t\t\t\t\t\tif (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {\r\n\t\t\t\t\t\t\tnormalizedPropertyValue = CSS.Hooks.templates[property][1];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If a (numeric) value wasn\'t produced via hook extraction or normalization, query the DOM. */\r\n\t\t\t\tif (!/^[\\d-]/.test(propertyValue)) {\r\n\t\t\t\t\t/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via\r\n\t\t\t\t\t their HTML attribute values instead of their CSS style values. */\r\n\t\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\r\n\t\t\t\t\t\t/* Since the height/width attribute values must be set manually, they don\'t reflect computed values.\r\n\t\t\t\t\t\t Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */\r\n\t\t\t\t\t\tif (/^(height|width)$/i.test(property)) {\r\n\t\t\t\t\t\t\t/* Firefox throws an error if .getBBox() is called on an SVG that isn\'t attached to the DOM. */\r\n\t\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\t\tpropertyValue = element.getBBox()[property];\r\n\t\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\t\tpropertyValue = 0;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* Otherwise, access the attribute value directly. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tpropertyValue = element.getAttribute(property);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tpropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),\r\n\t\t\t\t convert CSS null-values to an integer of value 0. */\r\n\t\t\t\tif (CSS.Values.isCSSNullValue(propertyValue)) {\r\n\t\t\t\t\tpropertyValue = 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (Velocity.debug >= 2) {\r\n\t\t\t\t\tconsole.log("Get " + property + ": " + propertyValue);\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn propertyValue;\r\n\t\t\t},\r\n\t\t\t/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\r\n\t\t\tsetPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {\r\n\t\t\t\tvar propertyName = property;\r\n\r\n\t\t\t\t/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */\r\n\t\t\t\tif (property === "scroll") {\r\n\t\t\t\t\t/* If a container option is present, scroll the container instead of the browser window. */\r\n\t\t\t\t\tif (scrollData.container) {\r\n\t\t\t\t\t\tscrollData.container["scroll" + scrollData.direction] = propertyValue;\r\n\t\t\t\t\t\t/* Otherwise, Velocity defaults to scrolling the browser window. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tif (scrollData.direction === "Left") {\r\n\t\t\t\t\t\t\twindow.scrollTo(propertyValue, scrollData.alternateValue);\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\twindow.scrollTo(scrollData.alternateValue, propertyValue);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\t/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().\r\n\t\t\t\t\t Thus, for now, we merely cache transforms being SET. */\r\n\t\t\t\t\tif (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {\r\n\t\t\t\t\t\t/* Perform a normalization injection. */\r\n\t\t\t\t\t\t/* Note: The normalization logic handles the transformCache updating. */\r\n\t\t\t\t\t\tCSS.Normalizations.registered[property]("inject", element, propertyValue);\r\n\r\n\t\t\t\t\t\tpropertyName = "transform";\r\n\t\t\t\t\t\tpropertyValue = Data(element).transformCache[property];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Inject hooks. */\r\n\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\tvar hookName = property,\r\n\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\r\n\r\n\t\t\t\t\t\t\t/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot\'s current value. */\r\n\t\t\t\t\t\t\trootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */\r\n\r\n\t\t\t\t\t\t\tpropertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);\r\n\t\t\t\t\t\t\tproperty = hookRoot;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Normalize names and values. */\r\n\t\t\t\t\t\tif (CSS.Normalizations.registered[property]) {\r\n\t\t\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);\r\n\t\t\t\t\t\t\tproperty = CSS.Normalizations.registered[property]("name", element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Assign the appropriate vendor prefix before performing an official style update. */\r\n\t\t\t\t\t\tpropertyName = CSS.Names.prefixCheck(property)[0];\r\n\r\n\t\t\t\t\t\t/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.\r\n\t\t\t\t\t\t Try/catch is avoided for other browsers since it incurs a performance overhead. */\r\n\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\r\n\t\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */\r\n\t\t\t\t\t\t\t/* Note: IE8 does not support SVG elements, so it\'s okay that we skip it for SVG animation. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\r\n\t\t\t\t\t\t\t\t/* Note: For SVG attributes, vendor-prefixed property names are never used. */\r\n\t\t\t\t\t\t\t\t/* Note: Not all CSS properties can be animated via attributes, but the browser won\'t throw an error for unsupported properties. */\r\n\t\t\t\t\t\t\t\telement.setAttribute(property, propertyValue);\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (Velocity.debug >= 2) {\r\n\t\t\t\t\t\t\tconsole.log("Set " + property + " (" + propertyName + "): " + propertyValue);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */\r\n\t\t\t\treturn [propertyName, propertyValue];\r\n\t\t\t},\r\n\t\t\t/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */\r\n\t\t\t/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element\'s CSS styles. */\r\n\t\t\tflushTransformCache: function(element) {\r\n\t\t\t\tvar transformString = "",\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS\'s transform string\r\n\t\t\t\t (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */\r\n\t\t\t\tif ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {\r\n\t\t\t\t\t/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.\r\n\t\t\t\t\t Further, SVG transform properties only take unitless (representing pixels) values, so it\'s okay that parseFloat() strips the unit suffixed to the float value. */\r\n\t\t\t\t\tvar getTransformFloat = function(transformProperty) {\r\n\t\t\t\t\t\treturn parseFloat(CSS.getPropertyValue(element, transformProperty));\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* Create an object to organize all the transforms that we\'ll apply to the SVG element. To keep the logic simple,\r\n\t\t\t\t\t we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */\r\n\t\t\t\t\tvar SVGTransforms = {\r\n\t\t\t\t\t\ttranslate: [getTransformFloat("translateX"), getTransformFloat("translateY")],\r\n\t\t\t\t\t\tskewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],\r\n\t\t\t\t\t\t/* If the scale property is set (non-1), use that value for the scaleX and scaleY values\r\n\t\t\t\t\t\t (this behavior mimics the result of animating all these properties at once on HTML elements). */\r\n\t\t\t\t\t\tscale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],\r\n\t\t\t\t\t\t/* Note: SVG\'s rotate transform takes three values: rotation degrees followed by the X and Y values\r\n\t\t\t\t\t\t defining the rotation\'s origin point. We ignore the origin values (default them to 0). */\r\n\t\t\t\t\t\trotate: [getTransformFloat("rotateZ"), 0, 0]\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* Iterate through the transform properties in the user-defined property map order.\r\n\t\t\t\t\t (This mimics the behavior of non-SVG transform animation.) */\r\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\r\n\t\t\t\t\t\t/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master\r\n\t\t\t\t\t\t properties so that they match up with SVG\'s accepted transform properties. */\r\n\t\t\t\t\t\tif (/^translate/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = "translate";\r\n\t\t\t\t\t\t} else if (/^scale/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = "scale";\r\n\t\t\t\t\t\t} else if (/^rotate/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = "rotate";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Check that we haven\'t yet deleted the property from the SVGTransforms container. */\r\n\t\t\t\t\t\tif (SVGTransforms[transformName]) {\r\n\t\t\t\t\t\t\t/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */\r\n\t\t\t\t\t\t\ttransformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";\r\n\r\n\t\t\t\t\t\t\t/* After processing an SVG transform property, delete it from the SVGTransforms container so we don\'t\r\n\t\t\t\t\t\t\t re-insert the same master property if we encounter another one of its axis-specific properties. */\r\n\t\t\t\t\t\t\tdelete SVGTransforms[transformName];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t} else {\r\n\t\t\t\t\tvar transformValue,\r\n\t\t\t\t\t\t\tperspective;\r\n\r\n\t\t\t\t\t/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */\r\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\r\n\t\t\t\t\t\ttransformValue = Data(element).transformCache[transformName];\r\n\r\n\t\t\t\t\t\t/* Transform\'s perspective subproperty must be set first in order to take effect. Store it temporarily. */\r\n\t\t\t\t\t\tif (transformName === "transformPerspective") {\r\n\t\t\t\t\t\t\tperspective = transformValue;\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */\r\n\t\t\t\t\t\tif (IE === 9 && transformName === "rotateZ") {\r\n\t\t\t\t\t\t\ttransformName = "rotate";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\ttransformString += transformName + transformValue + " ";\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* If present, set the perspective subproperty first. */\r\n\t\t\t\t\tif (perspective) {\r\n\t\t\t\t\t\ttransformString = "perspective" + perspective + " " + transformString;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tCSS.setPropertyValue(element, "transform", transformString);\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* Register hooks and normalizations. */\r\n\t\tCSS.Hooks.register();\r\n\t\tCSS.Normalizations.register();\r\n\r\n\t\t/* Allow hook setting in the same fashion as jQuery\'s $.css(). */\r\n\t\tVelocity.hook = function(elements, arg2, arg3) {\r\n\t\t\tvar value;\r\n\r\n\t\t\telements = sanitizeElements(elements);\r\n\r\n\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t/* Initialize Velocity\'s per-element data cache if this element hasn\'t previously been animated. */\r\n\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\tVelocity.init(element);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Get property value. If an element set was passed in, only return the value for the first element. */\r\n\t\t\t\tif (arg3 === undefined) {\r\n\t\t\t\t\tif (value === undefined) {\r\n\t\t\t\t\t\tvalue = CSS.getPropertyValue(element, arg2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t/* Set property value. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\t/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */\r\n\t\t\t\t\tvar adjustedSet = CSS.setPropertyValue(element, arg2, arg3);\r\n\r\n\t\t\t\t\t/* Transform properties don\'t automatically set. They have to be flushed to the DOM. */\r\n\t\t\t\t\tif (adjustedSet[0] === "transform") {\r\n\t\t\t\t\t\tVelocity.CSS.flushTransformCache(element);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvalue = adjustedSet;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\treturn value;\r\n\t\t};\r\n\r\n\t\t/*****************\r\n\t\t Animation\r\n\t\t *****************/\r\n\r\n\t\tvar animate = function() {\r\n\t\t\tvar opts;\r\n\r\n\t\t\t/******************\r\n\t\t\t Call Chain\r\n\t\t\t ******************/\r\n\r\n\t\t\t/* Logic for determining what to return to the call stack when exiting out of Velocity. */\r\n\t\t\tfunction getChain() {\r\n\t\t\t\t/* If we are using the utility function, attempt to return this call\'s promise. If no promise library was detected,\r\n\t\t\t\t default to null instead of returning the targeted elements so that utility function\'s return value is standardized. */\r\n\t\t\t\tif (isUtility) {\r\n\t\t\t\t\treturn promiseData.promise || null;\r\n\t\t\t\t\t/* Otherwise, if we\'re using $.fn, return the jQuery-/Zepto-wrapped element set. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn elementsWrapped;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/*************************\r\n\t\t\t Arguments Assignment\r\n\t\t\t *************************/\r\n\r\n\t\t\t/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")\r\n\t\t\t objects are defined on a container object that\'s passed in as Velocity\'s sole argument. */\r\n\t\t\t/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */\r\n\t\t\tvar syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),\r\n\t\t\t\t\t/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */\r\n\t\t\t\t\tisUtility,\r\n\t\t\t\t\t/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly\r\n\t\t\t\t\t passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */\r\n\t\t\t\t\telementsWrapped,\r\n\t\t\t\t\targumentIndex;\r\n\r\n\t\t\tvar elements,\r\n\t\t\t\t\tpropertiesMap,\r\n\t\t\t\t\toptions;\r\n\r\n\t\t\t/* Detect jQuery/Zepto elements being animated via the $.fn method. */\r\n\t\t\tif (Type.isWrapped(this)) {\r\n\t\t\t\tisUtility = false;\r\n\r\n\t\t\t\targumentIndex = 0;\r\n\t\t\t\telements = this;\r\n\t\t\t\telementsWrapped = this;\r\n\t\t\t\t/* Otherwise, raw elements are being animated via the utility function. */\r\n\t\t\t} else {\r\n\t\t\t\tisUtility = true;\r\n\r\n\t\t\t\targumentIndex = 1;\r\n\t\t\t\telements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];\r\n\t\t\t}\r\n\r\n\t\t\t/***************\r\n\t\t\t Promises\r\n\t\t\t ***************/\r\n\r\n\t\t\tvar promiseData = {\r\n\t\t\t\tpromise: null,\r\n\t\t\t\tresolver: null,\r\n\t\t\t\trejecter: null\r\n\t\t\t};\r\n\r\n\t\t\t/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if\r\n\t\t\t promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve\r\n\t\t\t method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated\r\n\t\t\t call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */\r\n\t\t\t/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that\r\n\t\t\t triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are\r\n\t\t\t grouped together for the purposes of resolving and rejecting a promise. */\r\n\t\t\tif (isUtility && Velocity.Promise) {\r\n\t\t\t\tpromiseData.promise = new Velocity.Promise(function(resolve, reject) {\r\n\t\t\t\t\tpromiseData.resolver = resolve;\r\n\t\t\t\t\tpromiseData.rejecter = reject;\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\tif (syntacticSugar) {\r\n\t\t\t\tpropertiesMap = arguments[0].properties || arguments[0].p;\r\n\t\t\t\toptions = arguments[0].options || arguments[0].o;\r\n\t\t\t} else {\r\n\t\t\t\tpropertiesMap = arguments[argumentIndex];\r\n\t\t\t\toptions = arguments[argumentIndex + 1];\r\n\t\t\t}\r\n\r\n\t\t\telements = sanitizeElements(elements);\r\n\r\n\t\t\tif (!elements) {\r\n\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\tif (!propertiesMap || !options || options.promiseRejectEmpty !== false) {\r\n\t\t\t\t\t\tpromiseData.rejecter();\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tpromiseData.resolver();\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a\r\n\t\t\t single raw DOM element is passed in (which doesn\'t contain a length property). */\r\n\t\t\tvar elementsLength = elements.length,\r\n\t\t\t\t\telementsIndex = 0;\r\n\r\n\t\t\t/***************************\r\n\t\t\t Argument Overloading\r\n\t\t\t ***************************/\r\n\r\n\t\t\t/* Support is included for jQuery\'s argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).\r\n\t\t\t Overloading is detected by checking for the absence of an object being passed into options. */\r\n\t\t\t/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */\r\n\t\t\tif (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {\r\n\t\t\t\t/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */\r\n\t\t\t\tvar startingArgumentPosition = argumentIndex + 1;\r\n\r\n\t\t\t\toptions = {};\r\n\r\n\t\t\t\t/* Iterate through all options arguments */\r\n\t\t\t\tfor (var i = startingArgumentPosition; i < arguments.length; i++) {\r\n\t\t\t\t\t/* Treat a number as a duration. Parse it out. */\r\n\t\t\t\t\t/* Note: The following RegEx will return true if passed an array with a number as its first item.\r\n\t\t\t\t\t Thus, arrays are skipped from this check. */\r\n\t\t\t\t\tif (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\\d/.test(arguments[i]))) {\r\n\t\t\t\t\t\toptions.duration = arguments[i];\r\n\t\t\t\t\t\t/* Treat strings and arrays as easings. */\r\n\t\t\t\t\t} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {\r\n\t\t\t\t\t\toptions.easing = arguments[i];\r\n\t\t\t\t\t\t/* Treat a function as a complete callback. */\r\n\t\t\t\t\t} else if (Type.isFunction(arguments[i])) {\r\n\t\t\t\t\t\toptions.complete = arguments[i];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/*********************\r\n\t\t\t Action Detection\r\n\t\t\t *********************/\r\n\r\n\t\t\t/* Velocity\'s behavior is categorized into "actions": Elements can either be specially scrolled into view,\r\n\t\t\t or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity\'s\r\n\t\t\t first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in \r\n\t\t\t instead of a properties map. */\r\n\t\t\tvar action;\r\n\r\n\t\t\tswitch (propertiesMap) {\r\n\t\t\t\tcase "scroll":\r\n\t\t\t\t\taction = "scroll";\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase "reverse":\r\n\t\t\t\t\taction = "reverse";\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase "pause":\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Pause\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t\t/* Handle delay timers */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tpauseDelayOnElement(element, currentTime);\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a \r\n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\r\n\t\t\t\t\t as well. */\r\n\r\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\t\tvar found = false;\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call\'s targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? "" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Set call to paused */\r\n\t\t\t\t\t\t\t\t\t\tactiveCall[5] = {\r\n\t\t\t\t\t\t\t\t\t\t\tresume: false\r\n\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\r\n\t\t\t\t\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\r\n\t\t\t\t\t\t\t\tif (found) {\r\n\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Since pause creates no new tweens, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tcase "resume":\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Resume\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* Handle delay timers */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tresumeDelayOnElement(element, currentTime);\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a \r\n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\r\n\t\t\t\t\t as well. */\r\n\r\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\t\t\t\t\t\tvar found = false;\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call\'s targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? "" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Skip any calls that have never been paused */\r\n\t\t\t\t\t\t\t\tif (!activeCall[5]) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Flag a pause object to be resumed, which will occur during the next tick. In\r\n\t\t\t\t\t\t\t\t\t\t addition, the pause object will at that time be deleted */\r\n\t\t\t\t\t\t\t\t\t\tactiveCall[5].resume = true;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\r\n\t\t\t\t\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\r\n\t\t\t\t\t\t\t\tif (found) {\r\n\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Since resume creates no new tweens, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tcase "finish":\r\n\t\t\t\tcase "finishAll":\r\n\t\t\t\tcase "stop":\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Stop\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* Clear the currently-active delay on each targeted element. */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tif (Data(element) && Data(element).delayTimer) {\r\n\t\t\t\t\t\t\t/* Stop the timer from triggering its cached next() function. */\r\n\t\t\t\t\t\t\tclearTimeout(Data(element).delayTimer.setTimeout);\r\n\r\n\t\t\t\t\t\t\t/* Manually call the next() function so that the subsequent queue items can progress. */\r\n\t\t\t\t\t\t\tif (Data(element).delayTimer.next) {\r\n\t\t\t\t\t\t\t\tData(element).delayTimer.next();\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tdelete Data(element).delayTimer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* If we want to finish everything in the queue, we have to iterate through it\r\n\t\t\t\t\t\t and call each function. This will make them active calls below, which will\r\n\t\t\t\t\t\t cause them to be applied via the duration setting. */\r\n\t\t\t\t\t\tif (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {\r\n\t\t\t\t\t\t\t/* Iterate through the items in the element\'s queue. */\r\n\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {\r\n\t\t\t\t\t\t\t\t/* The queue array can contain an "inprogress" string, which we skip. */\r\n\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\r\n\t\t\t\t\t\t\t\t\titem();\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\r\n\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : "", []);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tvar callsToStop = [];\r\n\r\n\t\t\t\t\t/* When the stop action is triggered, the elements\' currently active call is immediately stopped. The active call might have\r\n\t\t\t\t\t been applied to multiple elements, in which case all of the call\'s elements will be stopped. When an element\r\n\t\t\t\t\t is stopped, the next item in its animation queue is immediately triggered. */\r\n\t\t\t\t\t/* An additional argument may be passed in to clear an element\'s remaining queued calls. Either true (which defaults to the "fx" queue)\r\n\t\t\t\t\t or a custom queue string can be passed in. */\r\n\t\t\t\t\t/* Note: The stop command runs prior to Velocity\'s Queueing phase since its behavior is intended to take effect *immediately*,\r\n\t\t\t\t\t regardless of the element\'s current queue state. */\r\n\r\n\t\t\t\t\t/* Iterate through every active call. */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call\'s targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\t/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only\r\n\t\t\t\t\t\t\t\t clear calls associated with the relevant queue. */\r\n\t\t\t\t\t\t\t\t/* Call stopping logic works as follows:\r\n\t\t\t\t\t\t\t\t - options === true --\x3e stop current default queue calls (and queue:false calls), including remaining queued ones.\r\n\t\t\t\t\t\t\t\t - options === undefined --\x3e stop current queue:"" call and all queue:false calls.\r\n\t\t\t\t\t\t\t\t - options === false --\x3e stop only queue:false calls.\r\n\t\t\t\t\t\t\t\t - options === "custom" --\x3e stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? "" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\t\t\t\t\t\t\t\t\t\t/* Optionally clear the remaining queued calls. If we\'re doing "finishAll" this won\'t find anything,\r\n\t\t\t\t\t\t\t\t\t\t due to the queue-clearing above. */\r\n\t\t\t\t\t\t\t\t\t\tif (options === true || Type.isString(options)) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Iterate through the items in the element\'s queue. */\r\n\t\t\t\t\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* The queue array can contain an "inprogress" string, which we skip. */\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* Pass the item\'s callback a flag indicating that we want to abort from the queue call.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t (Specifically, the queue will resolve the call\'s associated promise then abort.)  */\r\n\t\t\t\t\t\t\t\t\t\t\t\t\titem(null, true);\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\r\n\t\t\t\t\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : "", []);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (propertiesMap === "stop") {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Since "reverse" uses cached start values (the previous call\'s endValues), these values must be\r\n\t\t\t\t\t\t\t\t\t\t\t changed to reflect the final value that the elements were actually tweened to. */\r\n\t\t\t\t\t\t\t\t\t\t\t/* Note: If only queue:false/queue:"custom" animations are currently running on an element, it won\'t have a tweensContainer\r\n\t\t\t\t\t\t\t\t\t\t\t object. Also, queue:false/queue:"custom" animations can\'t be reversed. */\r\n\t\t\t\t\t\t\t\t\t\t\tvar data = Data(element);\r\n\t\t\t\t\t\t\t\t\t\t\tif (data && data.tweensContainer && (queueName === true || queueName === "")) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t$.each(data.tweensContainer, function(m, activeTween) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tactiveTween.endValue = activeTween.currentValue;\r\n\t\t\t\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tcallsToStop.push(i);\r\n\t\t\t\t\t\t\t\t\t\t} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {\r\n\t\t\t\t\t\t\t\t\t\t\t/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that\r\n\t\t\t\t\t\t\t\t\t\t\t they finish upon the next rAf tick then proceed with normal call completion logic. */\r\n\t\t\t\t\t\t\t\t\t\t\tactiveCall[2].duration = 1;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate\r\n\t\t\t\t\t that the complete callback and display:none setting should be skipped since we\'re completing prematurely. */\r\n\t\t\t\t\tif (propertiesMap === "stop") {\r\n\t\t\t\t\t\t$.each(callsToStop, function(i, j) {\r\n\t\t\t\t\t\t\tcompleteCall(j, true);\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\t/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Since we\'re stopping, and not proceeding with queueing, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tdefault:\r\n\t\t\t\t\t/* Treat a non-empty plain object as a literal properties map. */\r\n\t\t\t\t\tif ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {\r\n\t\t\t\t\t\taction = "start";\r\n\r\n\t\t\t\t\t\t/****************\r\n\t\t\t\t\t\t Redirects\r\n\t\t\t\t\t\t ****************/\r\n\r\n\t\t\t\t\t\t/* Check if a string matches a registered redirect (see Redirects above). */\r\n\t\t\t\t\t} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {\r\n\t\t\t\t\t\topts = $.extend({}, options);\r\n\r\n\t\t\t\t\t\tvar durationOriginal = opts.duration,\r\n\t\t\t\t\t\t\t\tdelayOriginal = opts.delay || 0;\r\n\r\n\t\t\t\t\t\t/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */\r\n\t\t\t\t\t\tif (opts.backwards === true) {\r\n\t\t\t\t\t\t\telements = $.extend(true, [], elements).reverse();\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */\r\n\t\t\t\t\t\t$.each(elements, function(elementIndex, element) {\r\n\t\t\t\t\t\t\t/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */\r\n\t\t\t\t\t\t\tif (parseFloat(opts.stagger)) {\r\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);\r\n\t\t\t\t\t\t\t} else if (Type.isFunction(opts.stagger)) {\r\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)\r\n\t\t\t\t\t\t\t the duration of each element\'s animation, using floors to prevent producing very short durations. */\r\n\t\t\t\t\t\t\tif (opts.drag) {\r\n\t\t\t\t\t\t\t\t/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */\r\n\t\t\t\t\t\t\t\topts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);\r\n\r\n\t\t\t\t\t\t\t\t/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,\r\n\t\t\t\t\t\t\t\t B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).\r\n\t\t\t\t\t\t\t\t The end result is a baseline of 75% of the redirect\'s duration that increases/decreases as the end of the element set is approached. */\r\n\t\t\t\t\t\t\t\topts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Pass in the call\'s opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to\r\n\t\t\t\t\t\t\t reduce the opts checking logic required inside the redirect. */\r\n\t\t\t\t\t\t\tVelocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t/* Since the animation logic resides within the redirect\'s own code, abort the remainder of this call.\r\n\t\t\t\t\t\t (The performance overhead up to this point is virtually non-existant.) */\r\n\t\t\t\t\t\t/* Note: The jQuery call chain is kept intact by returning the complete element set. */\r\n\t\t\t\t\t\treturn getChain();\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tvar abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";\r\n\r\n\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\tpromiseData.rejecter(new Error(abortError));\r\n\t\t\t\t\t\t} else if (window.console) {\r\n\t\t\t\t\t\t\tconsole.log(abortError);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\treturn getChain();\r\n\t\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/**************************\r\n\t\t\t Call-Wide Variables\r\n\t\t\t **************************/\r\n\r\n\t\t\t/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements\r\n\t\t\t being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore\r\n\t\t\t avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale\r\n\t\t\t conversion metrics across Velocity animations that are not immediately consecutively chained. */\r\n\t\t\tvar callUnitConversionData = {\r\n\t\t\t\tlastParent: null,\r\n\t\t\t\tlastPosition: null,\r\n\t\t\t\tlastFontSize: null,\r\n\t\t\t\tlastPercentToPxWidth: null,\r\n\t\t\t\tlastPercentToPxHeight: null,\r\n\t\t\t\tlastEmToPx: null,\r\n\t\t\t\tremToPx: null,\r\n\t\t\t\tvwToPx: null,\r\n\t\t\t\tvhToPx: null\r\n\t\t\t};\r\n\r\n\t\t\t/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide\r\n\t\t\t Velocity.State.calls array that is processed during animation ticking. */\r\n\t\t\tvar call = [];\r\n\r\n\t\t\t/************************\r\n\t\t\t Element Processing\r\n\t\t\t ************************/\r\n\r\n\t\t\t/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):\r\n\t\t\t 1) Pre-Queueing: Element-wide variables, including the element\'s data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.\r\n\t\t\t 2) Queueing: The logic that runs once this call has reached its point of execution in the element\'s $.queue() stack. Most logic is placed here to avoid risking it becoming stale.\r\n\t\t\t 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\r\n\t\t\t `elementArrayIndex` allows passing index of the element in the original array to value functions.\r\n\t\t\t If `elementsIndex` were used instead the index would be determined by the elements\' per-element queue.\r\n\t\t\t */\r\n\t\t\tfunction processElement(element, elementArrayIndex) {\r\n\r\n\t\t\t\t/*************************\r\n\t\t\t\t Part I: Pre-Queueing\r\n\t\t\t\t *************************/\r\n\r\n\t\t\t\t/***************************\r\n\t\t\t\t Element-Wide Variables\r\n\t\t\t\t ***************************/\r\n\r\n\t\t\t\tvar /* The runtime opts object is the extension of the current call\'s options and Velocity\'s page-wide option defaults. */\r\n\t\t\t\t\t\topts = $.extend({}, Velocity.defaults, options),\r\n\t\t\t\t\t\t/* A container for the processed data associated with each property in the propertyMap.\r\n\t\t\t\t\t\t (Each property in the map produces its own "tween".) */\r\n\t\t\t\t\t\ttweensContainer = {},\r\n\t\t\t\t\t\telementUnitConversionData;\r\n\r\n\t\t\t\t/******************\r\n\t\t\t\t Element Init\r\n\t\t\t\t ******************/\r\n\r\n\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\tVelocity.init(element);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/******************\r\n\t\t\t\t Option: Delay\r\n\t\t\t\t ******************/\r\n\r\n\t\t\t\t/* Since queue:false doesn\'t respect the item\'s existing queue, we avoid injecting its delay here (it\'s set later on). */\r\n\t\t\t\t/* Note: Velocity rolls its own delay function since jQuery doesn\'t have a utility alias for $.fn.delay()\r\n\t\t\t\t (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */\r\n\t\t\t\tif (parseFloat(opts.delay) && opts.queue !== false) {\r\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\r\n\t\t\t\t\t\tif (clearQueue === true) {\r\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */\r\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\r\n\r\n\t\t\t\t\t\t/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.\r\n\t\t\t\t\t\t The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity\'s "stop" command, and\r\n\t\t\t\t\t\t delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */\r\n\r\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilite access for global pause/resume */\r\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\r\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\r\n\r\n\t\t\t\t\t\tvar delayComplete = (function(index) {\r\n\t\t\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\r\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\r\n\r\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\r\n\t\t\t\t\t\t\t\tnext();\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})(callIndex);\r\n\r\n\r\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\r\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\r\n\t\t\t\t\t\tData(element).delayTimer = {\r\n\t\t\t\t\t\t\tsetTimeout: setTimeout(next, parseFloat(opts.delay)),\r\n\t\t\t\t\t\t\tnext: delayComplete\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Option: Duration\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* Support for jQuery\'s named durations. */\r\n\t\t\t\tswitch (opts.duration.toString().toLowerCase()) {\r\n\t\t\t\t\tcase "fast":\r\n\t\t\t\t\t\topts.duration = 200;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase "normal":\r\n\t\t\t\t\t\topts.duration = DURATION_DEFAULT;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase "slow":\r\n\t\t\t\t\t\topts.duration = 600;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */\r\n\t\t\t\t\t\topts.duration = parseFloat(opts.duration) || 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/************************\r\n\t\t\t\t Global Option: Mock\r\n\t\t\t\t ************************/\r\n\r\n\t\t\t\tif (Velocity.mock !== false) {\r\n\t\t\t\t\t/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.\r\n\t\t\t\t\t Alternatively, a multiplier can be passed in to time remap all delays and durations. */\r\n\t\t\t\t\tif (Velocity.mock === true) {\r\n\t\t\t\t\t\topts.duration = opts.delay = 1;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\topts.duration *= parseFloat(Velocity.mock) || 1;\r\n\t\t\t\t\t\topts.delay *= parseFloat(Velocity.mock) || 1;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*******************\r\n\t\t\t\t Option: Easing\r\n\t\t\t\t *******************/\r\n\r\n\t\t\t\topts.easing = getEasing(opts.easing, opts.duration);\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Option: Callbacks\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* Callbacks must functions. Otherwise, default to null. */\r\n\t\t\t\tif (opts.begin && !Type.isFunction(opts.begin)) {\r\n\t\t\t\t\topts.begin = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.progress && !Type.isFunction(opts.progress)) {\r\n\t\t\t\t\topts.progress = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.complete && !Type.isFunction(opts.complete)) {\r\n\t\t\t\t\topts.complete = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************************\r\n\t\t\t\t Option: Display & Visibility\r\n\t\t\t\t *********************************/\r\n\r\n\t\t\t\t/* Refer to Velocity\'s documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options\' behavior. */\r\n\t\t\t\t/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */\r\n\t\t\t\tif (opts.display !== undefined && opts.display !== null) {\r\n\t\t\t\t\topts.display = opts.display.toString().toLowerCase();\r\n\r\n\t\t\t\t\t/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */\r\n\t\t\t\t\tif (opts.display === "auto") {\r\n\t\t\t\t\t\topts.display = Velocity.CSS.Values.getDisplayType(element);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== null) {\r\n\t\t\t\t\topts.visibility = opts.visibility.toString().toLowerCase();\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Option: mobileHA\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)\r\n\t\t\t\t on animating elements. HA is removed from the element at the completion of its animation. */\r\n\t\t\t\t/* Note: Android Gingerbread doesn\'t support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */\r\n\t\t\t\t/* Note: You can read more about the use of mobileHA in Velocity\'s documentation: VelocityJS.org/#mobileHA. */\r\n\t\t\t\topts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);\r\n\r\n\t\t\t\t/***********************\r\n\t\t\t\t Part II: Queueing\r\n\t\t\t\t ***********************/\r\n\r\n\t\t\t\t/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.\r\n\t\t\t\t In this way, each element\'s existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */\r\n\t\t\t\t/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,\r\n\t\t\t\t the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */\r\n\t\t\t\tfunction buildQueue(next) {\r\n\t\t\t\t\tvar data, lastTweensContainer;\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Option: Begin\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */\r\n\t\t\t\t\tif (opts.begin && elementsIndex === 0) {\r\n\t\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don\'t halt the execution of Velocity itself. */\r\n\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\topts.begin.call(elements, elements);\r\n\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\t\t\t\tthrow error;\r\n\t\t\t\t\t\t\t}, 1);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*****************************************\r\n\t\t\t\t\t Tween Data Construction (for Scroll)\r\n\t\t\t\t\t *****************************************/\r\n\r\n\t\t\t\t\t/* Note: In order to be subjected to chaining and animation options, scroll\'s tweening is routed through Velocity as if it were a standard CSS property animation. */\r\n\t\t\t\t\tif (action === "scroll") {\r\n\t\t\t\t\t\t/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */\r\n\t\t\t\t\t\tvar scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),\r\n\t\t\t\t\t\t\t\tscrollOffset = parseFloat(opts.offset) || 0,\r\n\t\t\t\t\t\t\t\tscrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tscrollPositionCurrentAlternate,\r\n\t\t\t\t\t\t\t\tscrollPositionEnd;\r\n\r\n\t\t\t\t\t\t/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --\r\n\t\t\t\t\t\t as opposed to the browser window itself. This is useful for scrolling toward an element that\'s inside an overflowing parent element. */\r\n\t\t\t\t\t\tif (opts.container) {\r\n\t\t\t\t\t\t\t/* Ensure that either a jQuery object or a raw DOM element was passed in. */\r\n\t\t\t\t\t\t\tif (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {\r\n\t\t\t\t\t\t\t\t/* Extract the raw DOM element from the jQuery wrapper. */\r\n\t\t\t\t\t\t\t\topts.container = opts.container[0] || opts.container;\r\n\t\t\t\t\t\t\t\t/* Note: Unlike other properties in Velocity, the browser\'s scroll position is never cached since it so frequently changes\r\n\t\t\t\t\t\t\t\t (due to the user\'s natural interaction with the page). */\r\n\t\t\t\t\t\t\t\tscrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */\r\n\r\n\t\t\t\t\t\t\t\t/* $.position() values are relative to the container\'s currently viewable area (without taking into account the container\'s true dimensions\r\n\t\t\t\t\t\t\t\t -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element\'s position *and*\r\n\t\t\t\t\t\t\t\t the scroll container\'s current scroll position. */\r\n\t\t\t\t\t\t\t\tscrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */\r\n\t\t\t\t\t\t\t\t/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\topts.container = null;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using\r\n\t\t\t\t\t\t\t the appropriate cached property names (which differ based on browser type). */\r\n\t\t\t\t\t\t\tscrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */\r\n\t\t\t\t\t\t\t/* When scrolling the browser window, cache the alternate axis\'s current value since window.scrollTo() doesn\'t let us change only one value at a time. */\r\n\t\t\t\t\t\t\tscrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */\r\n\r\n\t\t\t\t\t\t\t/* Unlike $.position(), $.offset() values are relative to the browser window\'s true dimensions -- not merely its currently viewable area --\r\n\t\t\t\t\t\t\t and therefore end values do not need to be compounded onto current values. */\r\n\t\t\t\t\t\t\tscrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Since there\'s only one format that scroll\'s associated tweensContainer can take, we create it manually. */\r\n\t\t\t\t\t\ttweensContainer = {\r\n\t\t\t\t\t\t\tscroll: {\r\n\t\t\t\t\t\t\t\trootPropertyValue: false,\r\n\t\t\t\t\t\t\t\tstartValue: scrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tcurrentValue: scrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tendValue: scrollPositionEnd,\r\n\t\t\t\t\t\t\t\tunitType: "",\r\n\t\t\t\t\t\t\t\teasing: opts.easing,\r\n\t\t\t\t\t\t\t\tscrollData: {\r\n\t\t\t\t\t\t\t\t\tcontainer: opts.container,\r\n\t\t\t\t\t\t\t\t\tdirection: scrollDirection,\r\n\t\t\t\t\t\t\t\t\talternateValue: scrollPositionCurrentAlternate\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\telement: element\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\tconsole.log("tweensContainer (scroll): ", tweensContainer.scroll, element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/******************************************\r\n\t\t\t\t\t\t Tween Data Construction (for Reverse)\r\n\t\t\t\t\t\t ******************************************/\r\n\r\n\t\t\t\t\t\t/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is\r\n\t\t\t\t\t\t that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate\r\n\t\t\t\t\t\t the previous call to construct our new map: use the previous map\'s end values as our new map\'s start values. Copy over all other data. */\r\n\t\t\t\t\t\t/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */\r\n\t\t\t\t\t\t/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;\r\n\t\t\t\t\t\t there is no harm to reverse being called on a potentially stale data cache since reverse\'s behavior is simply defined\r\n\t\t\t\t\t\t as reverting to the element\'s values as they were prior to the previous *Velocity* call. */\r\n\t\t\t\t\t} else if (action === "reverse") {\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\t/* Abort if there is no prior animation data to reverse to. */\r\n\t\t\t\t\t\tif (!data) {\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (!data.tweensContainer) {\r\n\t\t\t\t\t\t\t/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */\r\n\t\t\t\t\t\t\t$.dequeue(element, opts.queue);\r\n\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t/*********************\r\n\t\t\t\t\t\t\t Options Parsing\r\n\t\t\t\t\t\t\t *********************/\r\n\r\n\t\t\t\t\t\t\t/* If the element was hidden via the display option in the previous call,\r\n\t\t\t\t\t\t\t revert display to "auto" prior to reversal so that the element is visible again. */\r\n\t\t\t\t\t\t\tif (data.opts.display === "none") {\r\n\t\t\t\t\t\t\t\tdata.opts.display = "auto";\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (data.opts.visibility === "hidden") {\r\n\t\t\t\t\t\t\t\tdata.opts.visibility = "visible";\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the loop option was set in the previous call, disable it so that "reverse" calls aren\'t recursively generated.\r\n\t\t\t\t\t\t\t Further, remove the previous call\'s callback options; typically, users do not want these to be refired. */\r\n\t\t\t\t\t\t\tdata.opts.loop = false;\r\n\t\t\t\t\t\t\tdata.opts.begin = null;\r\n\t\t\t\t\t\t\tdata.opts.complete = null;\r\n\r\n\t\t\t\t\t\t\t/* Since we\'re extending an opts object that has already been extended with the defaults options object,\r\n\t\t\t\t\t\t\t we remove non-explicitly-defined properties that are auto-assigned values. */\r\n\t\t\t\t\t\t\tif (!options.easing) {\r\n\t\t\t\t\t\t\t\tdelete opts.easing;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (!options.duration) {\r\n\t\t\t\t\t\t\t\tdelete opts.duration;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* The opts object used for reversal is an extension of the options object optionally passed into this\r\n\t\t\t\t\t\t\t reverse call plus the options used in the previous Velocity call. */\r\n\t\t\t\t\t\t\topts = $.extend({}, data.opts, opts);\r\n\r\n\t\t\t\t\t\t\t/*************************************\r\n\t\t\t\t\t\t\t Tweens Container Reconstruction\r\n\t\t\t\t\t\t\t *************************************/\r\n\r\n\t\t\t\t\t\t\t/* Create a deepy copy (indicated via the true flag) of the previous call\'s tweensContainer. */\r\n\t\t\t\t\t\t\tlastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);\r\n\r\n\t\t\t\t\t\t\t/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */\r\n\t\t\t\t\t\t\tfor (var lastTween in lastTweensContainer) {\r\n\t\t\t\t\t\t\t\t/* In addition to tween data, tweensContainers contain an element property that we ignore here. */\r\n\t\t\t\t\t\t\t\tif (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {\r\n\t\t\t\t\t\t\t\t\tvar lastStartValue = lastTweensContainer[lastTween].startValue;\r\n\r\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;\r\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].endValue = lastStartValue;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).\r\n\t\t\t\t\t\t\t\t\t Accordingly, every property\'s easing value must be updated when an options object is passed in with a reverse call.\r\n\t\t\t\t\t\t\t\t\t The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */\r\n\t\t\t\t\t\t\t\t\tif (!Type.isEmptyObject(options)) {\r\n\t\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].easing = opts.easing;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\ttweensContainer = lastTweensContainer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/*****************************************\r\n\t\t\t\t\t\t Tween Data Construction (for Start)\r\n\t\t\t\t\t\t *****************************************/\r\n\r\n\t\t\t\t\t} else if (action === "start") {\r\n\r\n\t\t\t\t\t\t/*************************\r\n\t\t\t\t\t\t Value Transferring\r\n\t\t\t\t\t\t *************************/\r\n\r\n\t\t\t\t\t\t/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created\r\n\t\t\t\t\t\t while the element was in the process of being animated by Velocity, then this current call is safe to use\r\n\t\t\t\t\t\t the end values from the prior call as its start values. Velocity attempts to perform this value transfer\r\n\t\t\t\t\t\t process whenever possible in order to avoid requerying the DOM. */\r\n\t\t\t\t\t\t/* If values aren\'t transferred from a prior call and start values were not forcefed by the user (more on this below),\r\n\t\t\t\t\t\t then the DOM is queried for the element\'s current values as a last resort. */\r\n\t\t\t\t\t\t/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */\r\n\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\t/* The per-element isAnimating flag is used to indicate whether it\'s safe (i.e. the data isn\'t stale)\r\n\t\t\t\t\t\t to transfer over end values to use as start values. If it\'s set to true and there is a previous\r\n\t\t\t\t\t\t Velocity call to pull values from, do so. */\r\n\t\t\t\t\t\tif (data && data.tweensContainer && data.isAnimating === true) {\r\n\t\t\t\t\t\t\tlastTweensContainer = data.tweensContainer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t Tween Data Calculation\r\n\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */\r\n\t\t\t\t\t\t/* Property map values can either take the form of 1) a single value representing the end value,\r\n\t\t\t\t\t\t or 2) an array in the form of [ endValue, [, easing] [, startValue] ].\r\n\t\t\t\t\t\t The optional third parameter is a forcefed startValue to be used instead of querying the DOM for\r\n\t\t\t\t\t\t the element\'s current value. Read Velocity\'s docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */\r\n\t\t\t\t\t\tvar parsePropertyValue = function(valueData, skipResolvingEasing) {\r\n\t\t\t\t\t\t\tvar endValue, easing, startValue;\r\n\r\n\t\t\t\t\t\t\t/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */\r\n\t\t\t\t\t\t\tif (Type.isFunction(valueData)) {\r\n\t\t\t\t\t\t\t\tvalueData = valueData.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Handle the array format, which can be structured as one of three potential overloads:\r\n\t\t\t\t\t\t\t A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */\r\n\t\t\t\t\t\t\tif (Type.isArray(valueData)) {\r\n\t\t\t\t\t\t\t\t/* endValue is always the first item in the array. Don\'t bother validating endValue\'s value now\r\n\t\t\t\t\t\t\t\t since the ensuing property cycling logic does that. */\r\n\t\t\t\t\t\t\t\tendValue = valueData[0];\r\n\r\n\t\t\t\t\t\t\t\t/* Two-item array format: If the second item is a number, function, or hex string, treat it as a\r\n\t\t\t\t\t\t\t\t start value since easings can only be non-hex strings or arrays. */\r\n\t\t\t\t\t\t\t\tif ((!Type.isArray(valueData[1]) && /^[\\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1];\r\n\t\t\t\t\t\t\t\t\t/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */\r\n\t\t\t\t\t\t\t\t} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {\r\n\t\t\t\t\t\t\t\t\teasing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);\r\n\r\n\t\t\t\t\t\t\t\t\t/* Don\'t bother validating startValue\'s value now since the ensuing property cycling logic inherently does that. */\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1] || valueData[2];\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t/* Handle the single-value format. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tendValue = valueData;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Default to the call\'s easing if a per-property easing type was not defined. */\r\n\t\t\t\t\t\t\tif (!skipResolvingEasing) {\r\n\t\t\t\t\t\t\t\teasing = easing || opts.easing;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If functions were passed in as values, pass the function the current element as its context,\r\n\t\t\t\t\t\t\t plus the element\'s index and the element set\'s size as arguments. Then, assign the returned value. */\r\n\t\t\t\t\t\t\tif (Type.isFunction(endValue)) {\r\n\t\t\t\t\t\t\t\tendValue = endValue.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (Type.isFunction(startValue)) {\r\n\t\t\t\t\t\t\t\tstartValue = startValue.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */\r\n\t\t\t\t\t\t\treturn [endValue || 0, easing, startValue];\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tvar fixPropertyValue = function(property, valueData) {\r\n\t\t\t\t\t\t\t/* In case this property is a hook, there are circumstances where we will intend to work on the hook\'s root property and not the hooked subproperty. */\r\n\t\t\t\t\t\t\tvar rootProperty = CSS.Hooks.getRoot(property),\r\n\t\t\t\t\t\t\t\t\trootPropertyValue = false,\r\n\t\t\t\t\t\t\t\t\t/* Parse out endValue, easing, and startValue from the property\'s data. */\r\n\t\t\t\t\t\t\t\t\tendValue = valueData[0],\r\n\t\t\t\t\t\t\t\t\teasing = valueData[1],\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2],\r\n\t\t\t\t\t\t\t\t\tpattern;\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t Start Value Sourcing\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\t/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will\r\n\t\t\t\t\t\t\t inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.\r\n\t\t\t\t\t\t\t Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */\r\n\t\t\t\t\t\t\t/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,\r\n\t\t\t\t\t\t\t there is no way to check for their explicit browser support, and so we skip skip this check for them. */\r\n\t\t\t\t\t\t\tif ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {\r\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log("Skipping [" + rootProperty + "] due to a lack of browser support.");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being\r\n\t\t\t\t\t\t\t animated to an endValue of non-zero, the user\'s intention is to fade in from invisible, thus we forcefeed opacity\r\n\t\t\t\t\t\t\t a startValue of 0 if its startValue hasn\'t already been sourced by value transferring or prior forcefeeding. */\r\n\t\t\t\t\t\t\tif (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {\r\n\t\t\t\t\t\t\t\tstartValue = 0;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue\r\n\t\t\t\t\t\t\t for all of the current call\'s properties that were *also* animated in the previous call. */\r\n\t\t\t\t\t\t\t/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */\r\n\t\t\t\t\t\t\tif (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {\r\n\t\t\t\t\t\t\t\tif (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\tstartValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* The previous call\'s rootPropertyValue is extracted from the element\'s data cache since that\'s the\r\n\t\t\t\t\t\t\t\t instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue\r\n\t\t\t\t\t\t\t\t attached to the incoming lastTweensContainer is equal to the root property\'s value prior to any tweening. */\r\n\t\t\t\t\t\t\t\trootPropertyValue = data.rootPropertyValueCache[rootProperty];\r\n\t\t\t\t\t\t\t\t/* If values were not transferred from a previous Velocity call, query the DOM as needed. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t/* Handle hooked properties. */\r\n\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\tif (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */\r\n\t\t\t\t\t\t\t\t\t\t/* Note: The following getPropertyValue() call does not actually trigger a DOM query;\r\n\t\t\t\t\t\t\t\t\t\t getPropertyValue() will extract the hook from rootPropertyValue. */\r\n\t\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property, rootPropertyValue);\r\n\t\t\t\t\t\t\t\t\t\t/* If startValue is already defined via forcefeeding, do not query the DOM for the root property\'s value;\r\n\t\t\t\t\t\t\t\t\t\t just grab rootProperty\'s zero-value template from CSS.Hooks. This overwrites the element\'s actual\r\n\t\t\t\t\t\t\t\t\t\t root property value (if one is set), but this is acceptable since the primary reason users forcefeed is\r\n\t\t\t\t\t\t\t\t\t\t to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property\'s value. */\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* Grab this hook\'s zero-value template, e.g. "0px 0px 0px black". */\r\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t/* Handle non-hooked properties that haven\'t already been defined via forcefeeding. */\r\n\t\t\t\t\t\t\t\t} else if (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property); /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t Value Data Extraction\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\tvar separatedValue,\r\n\t\t\t\t\t\t\t\t\tendValueUnitType,\r\n\t\t\t\t\t\t\t\t\tstartValueUnitType,\r\n\t\t\t\t\t\t\t\t\toperator = false;\r\n\r\n\t\t\t\t\t\t\t/* Separates a property value into its numeric value and its unit type. */\r\n\t\t\t\t\t\t\tvar separateValue = function(property, value) {\r\n\t\t\t\t\t\t\t\tvar unitType,\r\n\t\t\t\t\t\t\t\t\t\tnumericValue;\r\n\r\n\t\t\t\t\t\t\t\tnumericValue = (value || "0")\r\n\t\t\t\t\t\t\t\t\t\t.toString()\r\n\t\t\t\t\t\t\t\t\t\t.toLowerCase()\r\n\t\t\t\t\t\t\t\t\t\t/* Match the unit type at the end of the value. */\r\n\t\t\t\t\t\t\t\t\t\t.replace(/[%A-z]+$/, function(match) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Grab the unit type. */\r\n\t\t\t\t\t\t\t\t\t\t\tunitType = match;\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Strip the unit type off of value. */\r\n\t\t\t\t\t\t\t\t\t\t\treturn "";\r\n\t\t\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */\r\n\t\t\t\t\t\t\t\tif (!unitType) {\r\n\t\t\t\t\t\t\t\t\tunitType = CSS.Values.getUnitType(property);\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn [numericValue, unitType];\r\n\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\tif (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {\r\n\t\t\t\t\t\t\t\tpattern = "";\r\n\t\t\t\t\t\t\t\tvar iStart = 0, // index in startValue\r\n\t\t\t\t\t\t\t\t\t\tiEnd = 0, // index in endValue\r\n\t\t\t\t\t\t\t\t\t\taStart = [], // array of startValue numbers\r\n\t\t\t\t\t\t\t\t\t\taEnd = [], // array of endValue numbers\r\n\t\t\t\t\t\t\t\t\t\tinCalc = 0, // Keep track of being inside a "calc()" so we don\'t duplicate it\r\n\t\t\t\t\t\t\t\t\t\tinRGB = 0, // Keep track of being inside an RGB as we can\'t use fractional values\r\n\t\t\t\t\t\t\t\t\t\tinRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel\r\n\r\n\t\t\t\t\t\t\t\tstartValue = CSS.Hooks.fixColors(startValue);\r\n\t\t\t\t\t\t\t\tendValue = CSS.Hooks.fixColors(endValue);\r\n\t\t\t\t\t\t\t\twhile (iStart < startValue.length && iEnd < endValue.length) {\r\n\t\t\t\t\t\t\t\t\tvar cStart = startValue[iStart],\r\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\r\n\r\n\t\t\t\t\t\t\t\t\tif (/[\\d\\.-]/.test(cStart) && /[\\d\\.-]/.test(cEnd)) {\r\n\t\t\t\t\t\t\t\t\t\tvar tStart = cStart, // temporary character buffer\r\n\t\t\t\t\t\t\t\t\t\t\t\ttEnd = cEnd, // temporary character buffer\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = ".", // Make sure we can only ever match a single dot in a decimal\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = "."; // Make sure we can only ever match a single dot in a decimal\r\n\r\n\t\t\t\t\t\t\t\t\t\twhile (++iStart < startValue.length) {\r\n\t\t\t\t\t\t\t\t\t\t\tcStart = startValue[iStart];\r\n\t\t\t\t\t\t\t\t\t\t\tif (cStart === dotStart) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = ".."; // Can never match two characters\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cStart)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\ttStart += cStart;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\twhile (++iEnd < endValue.length) {\r\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\r\n\t\t\t\t\t\t\t\t\t\t\tif (cEnd === dotEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = ".."; // Can never match two characters\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cEnd)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\ttEnd += cEnd;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\tvar uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type\r\n\t\t\t\t\t\t\t\t\t\t\t\tuEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type\r\n\r\n\t\t\t\t\t\t\t\t\t\tiStart += uStart.length;\r\n\t\t\t\t\t\t\t\t\t\tiEnd += uEnd.length;\r\n\t\t\t\t\t\t\t\t\t\tif (uStart === uEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t// Same units\r\n\t\t\t\t\t\t\t\t\t\t\tif (tStart === tEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t// Same numbers, so just copy over\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += tStart + uStart;\r\n\t\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t\t// Different numbers, so store them\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(parseFloat(tStart));\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(parseFloat(tEnd));\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t// Different units, so put into a "calc(from + to)" and animate each side to/from zero\r\n\t\t\t\t\t\t\t\t\t\t\tvar nStart = parseFloat(tStart),\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tnEnd = parseFloat(tEnd);\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tpattern += (inCalc < 5 ? "calc" : "") + "("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ " + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ ")";\r\n\t\t\t\t\t\t\t\t\t\t\tif (nStart) {\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(nStart);\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(0);\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\tif (nEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(0);\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(nEnd);\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t} else if (cStart === cEnd) {\r\n\t\t\t\t\t\t\t\t\t\tpattern += cStart;\r\n\t\t\t\t\t\t\t\t\t\tiStart++;\r\n\t\t\t\t\t\t\t\t\t\tiEnd++;\r\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside a calc()\r\n\t\t\t\t\t\t\t\t\t\tif (inCalc === 0 && cStart === "c"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 1 && cStart === "a"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 2 && cStart === "l"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 3 && cStart === "c"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === "("\r\n\t\t\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tinCalc++;\r\n\t\t\t\t\t\t\t\t\t\t} else if ((inCalc && inCalc < 5)\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {\r\n\t\t\t\t\t\t\t\t\t\t\tinCalc = 0;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside an rgb() / rgba()\r\n\t\t\t\t\t\t\t\t\t\tif (inRGB === 0 && cStart === "r"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 1 && cStart === "g"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 2 && cStart === "b"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 3 && cStart === "a"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= 3 && cStart === "("\r\n\t\t\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tif (inRGB === 3 && cStart === "a") {\r\n\t\t\t\t\t\t\t\t\t\t\t\tinRGBA = 1;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\tinRGB++;\r\n\t\t\t\t\t\t\t\t\t\t} else if (inRGBA && cStart === ",") {\r\n\t\t\t\t\t\t\t\t\t\t\tif (++inRGBA > 3) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {\r\n\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\tinCalc = 0;\r\n\t\t\t\t\t\t\t\t\t\t// TODO: changing units, fixing colours\r\n\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (iStart !== startValue.length || iEnd !== endValue.length) {\r\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.error("Trying to pattern match mis-matched strings [\\"" + endValue + "\\", \\"" + startValue + "\\"]");\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\tpattern = undefined;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (pattern) {\r\n\t\t\t\t\t\t\t\t\tif (aStart.length) {\r\n\t\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\t\tconsole.log("Pattern found \\"" + pattern + "\\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\tstartValue = aStart;\r\n\t\t\t\t\t\t\t\t\t\tendValue = aEnd;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType = "";\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\tpattern = undefined;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (!pattern) {\r\n\t\t\t\t\t\t\t\t/* Separate startValue. */\r\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, startValue);\r\n\t\t\t\t\t\t\t\tstartValue = separatedValue[0];\r\n\t\t\t\t\t\t\t\tstartValueUnitType = separatedValue[1];\r\n\r\n\t\t\t\t\t\t\t\t/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */\r\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, endValue);\r\n\t\t\t\t\t\t\t\tendValue = separatedValue[0].replace(/^([+-\\/*])=/, function(match, subMatch) {\r\n\t\t\t\t\t\t\t\t\toperator = subMatch;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Strip the operator off of the value. */\r\n\t\t\t\t\t\t\t\t\treturn "";\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\tendValueUnitType = separatedValue[1];\r\n\r\n\t\t\t\t\t\t\t\t/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */\r\n\t\t\t\t\t\t\t\tstartValue = parseFloat(startValue) || 0;\r\n\t\t\t\t\t\t\t\tendValue = parseFloat(endValue) || 0;\r\n\r\n\t\t\t\t\t\t\t\t/***************************************\r\n\t\t\t\t\t\t\t\t Property-Specific Value Conversion\r\n\t\t\t\t\t\t\t\t ***************************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Custom support for properties that don\'t actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */\r\n\t\t\t\t\t\t\t\tif (endValueUnitType === "%") {\r\n\t\t\t\t\t\t\t\t\t/* A %-value fontSize/lineHeight is relative to the parent\'s fontSize (as opposed to the parent\'s dimensions),\r\n\t\t\t\t\t\t\t\t\t which is identical to the em unit\'s behavior, so we piggyback off of that. */\r\n\t\t\t\t\t\t\t\t\tif (/^(fontSize|lineHeight)$/.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\t/* Convert % into an em decimal value. */\r\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = "em";\r\n\t\t\t\t\t\t\t\t\t\t/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */\r\n\t\t\t\t\t\t\t\t\t} else if (/^scale/.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = "";\r\n\t\t\t\t\t\t\t\t\t\t/* For RGB components, take the defined percentage of 255 and strip off the unit type. */\r\n\t\t\t\t\t\t\t\t\t} else if (/(Red|Green|Blue)$/i.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\tendValue = (endValue / 100) * 255;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = "";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t Unit Ratio Calculation\r\n\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of\r\n\t\t\t\t\t\t\t %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order\r\n\t\t\t\t\t\t\t for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred\r\n\t\t\t\t\t\t\t from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:\r\n\t\t\t\t\t\t\t 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels\r\n\t\t\t\t\t\t\t 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */\r\n\t\t\t\t\t\t\t/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,\r\n\t\t\t\t\t\t\t setting values with the target unit type then comparing the returned pixel value. */\r\n\t\t\t\t\t\t\t/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead\r\n\t\t\t\t\t\t\t of batching the SETs and GETs together upfront outweights the potential overhead\r\n\t\t\t\t\t\t\t of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */\r\n\t\t\t\t\t\t\t/* Todo: Shift this logic into the calls\' first tick instance so that it\'s synced with RAF. */\r\n\t\t\t\t\t\t\tvar calculateUnitRatios = function() {\r\n\r\n\t\t\t\t\t\t\t\t/************************\r\n\t\t\t\t\t\t\t\t Same Ratio Checks\r\n\t\t\t\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\t\t\t\t/* The properties below are used to determine whether the element differs sufficiently from this call\'s\r\n\t\t\t\t\t\t\t\t previously iterated element to also differ in its unit conversion ratios. If the properties match up with those\r\n\t\t\t\t\t\t\t\t of the prior element, the prior element\'s conversion ratios are used. Like most optimizations in Velocity,\r\n\t\t\t\t\t\t\t\t this is done to minimize DOM querying. */\r\n\t\t\t\t\t\t\t\tvar sameRatioIndicators = {\r\n\t\t\t\t\t\t\t\t\tmyParent: element.parentNode || document.body, /* GET */\r\n\t\t\t\t\t\t\t\t\tposition: CSS.getPropertyValue(element, "position"), /* GET */\r\n\t\t\t\t\t\t\t\t\tfontSize: CSS.getPropertyValue(element, "fontSize") /* GET */\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same % ratio can be used. % is based on the element\'s position value and its parent\'s width and height dimensions. */\r\n\t\t\t\t\t\t\t\t\t\tsamePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),\r\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same em ratio can be used. em is relative to the element\'s fontSize. */\r\n\t\t\t\t\t\t\t\t\t\tsameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);\r\n\r\n\t\t\t\t\t\t\t\t/* Store these ratio indicators call-wide for the next element to compare against. */\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastParent = sameRatioIndicators.myParent;\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastPosition = sameRatioIndicators.position;\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;\r\n\r\n\t\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t\t Element-Specific Units\r\n\t\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement\r\n\t\t\t\t\t\t\t\t of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */\r\n\t\t\t\t\t\t\t\tvar measurement = 100,\r\n\t\t\t\t\t\t\t\t\t\tunitRatios = {};\r\n\r\n\t\t\t\t\t\t\t\tif (!sameEmRatio || !samePercentRatio) {\r\n\t\t\t\t\t\t\t\t\tvar dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");\r\n\r\n\t\t\t\t\t\t\t\t\tVelocity.init(dummy);\r\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.appendChild(dummy);\r\n\r\n\t\t\t\t\t\t\t\t\t/* To accurately and consistently calculate conversion ratios, the element\'s cascaded overflow and box-sizing are stripped.\r\n\t\t\t\t\t\t\t\t\t Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */\r\n\t\t\t\t\t\t\t\t\t/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */\r\n\t\t\t\t\t\t\t\t\t$.each(["overflow", "overflowX", "overflowY"], function(i, property) {\r\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, "hidden");\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");\r\n\r\n\t\t\t\t\t\t\t\t\t/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */\r\n\t\t\t\t\t\t\t\t\t$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {\r\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, measurement + "%");\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\t/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");\r\n\r\n\t\t\t\t\t\t\t\t\t/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */\r\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */\r\n\r\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.removeChild(dummy);\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx;\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t\t Element-Agnostic Units\r\n\t\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked\r\n\t\t\t\t\t\t\t\t once per call since it\'s exclusively dependant upon document.body\'s fontSize. If this is the first time\r\n\t\t\t\t\t\t\t\t that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,\r\n\t\t\t\t\t\t\t\t so we calculate it now. */\r\n\t\t\t\t\t\t\t\tif (callUnitConversionData.remToPx === null) {\r\n\t\t\t\t\t\t\t\t\t/* Default to browsers\' default fontSize of 16px in the case of 0. */\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Similarly, viewport units are %-relative to the window\'s inner dimensions. */\r\n\t\t\t\t\t\t\t\tif (callUnitConversionData.vwToPx === null) {\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\tunitRatios.remToPx = callUnitConversionData.remToPx;\r\n\t\t\t\t\t\t\t\tunitRatios.vwToPx = callUnitConversionData.vwToPx;\r\n\t\t\t\t\t\t\t\tunitRatios.vhToPx = callUnitConversionData.vhToPx;\r\n\r\n\t\t\t\t\t\t\t\tif (Velocity.debug >= 1) {\r\n\t\t\t\t\t\t\t\t\tconsole.log("Unit ratios: " + JSON.stringify(unitRatios), element);\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\treturn unitRatios;\r\n\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t/********************\r\n\t\t\t\t\t\t\t Unit Conversion\r\n\t\t\t\t\t\t\t ********************/\r\n\r\n\t\t\t\t\t\t\t/* The * and / operators, which are not passed in with an associated unit, inherently use startValue\'s unit. Skip value and unit conversion. */\r\n\t\t\t\t\t\t\tif (/[\\/*]/.test(operator)) {\r\n\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\r\n\t\t\t\t\t\t\t\t/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType\r\n\t\t\t\t\t\t\t\t is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend\r\n\t\t\t\t\t\t\t\t on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio\r\n\t\t\t\t\t\t\t\t would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */\r\n\t\t\t\t\t\t\t\t/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */\r\n\t\t\t\t\t\t\t} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {\r\n\t\t\t\t\t\t\t\t/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */\r\n\t\t\t\t\t\t\t\t/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won\'t relatively\r\n\t\t\t\t\t\t\t\t match the underlying metrics if they change, but this is acceptable since we\'re animating toward invisibility instead of toward visibility,\r\n\t\t\t\t\t\t\t\t which remains past the point of the animation\'s completion. */\r\n\t\t\t\t\t\t\t\tif (endValue === 0) {\r\n\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* By this point, we cannot avoid unit conversion (it\'s undesirable since it causes layout thrashing).\r\n\t\t\t\t\t\t\t\t\t If we haven\'t already, we trigger calculateUnitRatios(), which runs once per element per call. */\r\n\t\t\t\t\t\t\t\t\telementUnitConversionData = elementUnitConversionData || calculateUnitRatios();\r\n\r\n\t\t\t\t\t\t\t\t\t/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */\r\n\t\t\t\t\t\t\t\t\t/* Note: W3C spec mandates that all of margin and padding\'s properties (even top and bottom) are %-relative to the *width* of the parent element. */\r\n\t\t\t\t\t\t\t\t\tvar axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";\r\n\r\n\t\t\t\t\t\t\t\t\t/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:\r\n\t\t\t\t\t\t\t\t\t 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue\'s unit type. */\r\n\t\t\t\t\t\t\t\t\tswitch (startValueUnitType) {\r\n\t\t\t\t\t\t\t\t\t\tcase "%":\r\n\t\t\t\t\t\t\t\t\t\t\t/* Note: translateX and translateY are the only properties that are %-relative to an element\'s own dimensions -- not its parent\'s dimensions.\r\n\t\t\t\t\t\t\t\t\t\t\t Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value\r\n\t\t\t\t\t\t\t\t\t\t\t to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tcase "px":\r\n\t\t\t\t\t\t\t\t\t\t\t/* px acts as our midpoint in the unit conversion process; do nothing. */\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= elementUnitConversionData[startValueUnitType + "ToPx"];\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/* Invert the px ratios to convert into to the target unit. */\r\n\t\t\t\t\t\t\t\t\tswitch (endValueUnitType) {\r\n\t\t\t\t\t\t\t\t\t\tcase "%":\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tcase "px":\r\n\t\t\t\t\t\t\t\t\t\t\t/* startValue is already in px, do nothing; we\'re done. */\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/*********************\r\n\t\t\t\t\t\t\t Relative Values\r\n\t\t\t\t\t\t\t *********************/\r\n\r\n\t\t\t\t\t\t\t/* Operator logic must be performed last since it requires unit-normalized start and end values. */\r\n\t\t\t\t\t\t\t/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"\r\n\t\t\t\t\t\t\t to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:\r\n\t\t\t\t\t\t\t 50 points is added on top of the current % value. */\r\n\t\t\t\t\t\t\tswitch (operator) {\r\n\t\t\t\t\t\t\t\tcase "+":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue + endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase "-":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue - endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase "*":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue * endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase "/":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue / endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t tweensContainer Push\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\t/* Construct the per-property tween object, and push it to the element\'s tweensContainer. */\r\n\t\t\t\t\t\t\ttweensContainer[property] = {\r\n\t\t\t\t\t\t\t\trootPropertyValue: rootPropertyValue,\r\n\t\t\t\t\t\t\t\tstartValue: startValue,\r\n\t\t\t\t\t\t\t\tcurrentValue: startValue,\r\n\t\t\t\t\t\t\t\tendValue: endValue,\r\n\t\t\t\t\t\t\t\tunitType: endValueUnitType,\r\n\t\t\t\t\t\t\t\teasing: easing\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t\tif (pattern) {\r\n\t\t\t\t\t\t\t\ttweensContainer[property].pattern = pattern;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\tconsole.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t/* Create a tween out of each property, and append its associated data to tweensContainer. */\r\n\t\t\t\t\t\tfor (var property in propertiesMap) {\r\n\r\n\t\t\t\t\t\t\tif (!propertiesMap.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* The original property name\'s format must be used for the parsePropertyValue() lookup,\r\n\t\t\t\t\t\t\t but we then use its camelCase styling to normalize it for manipulation. */\r\n\t\t\t\t\t\t\tvar propertyName = CSS.Names.camelCase(property),\r\n\t\t\t\t\t\t\t\t\tvalueData = parsePropertyValue(propertiesMap[property]);\r\n\r\n\t\t\t\t\t\t\t/* Find shorthand color properties that have been passed a hex string. */\r\n\t\t\t\t\t\t\t/* Would be quicker to use CSS.Lists.colors.includes() if possible */\r\n\t\t\t\t\t\t\tif (_inArray(CSS.Lists.colors, propertyName)) {\r\n\t\t\t\t\t\t\t\t/* Parse the value data for each shorthand. */\r\n\t\t\t\t\t\t\t\tvar endValue = valueData[0],\r\n\t\t\t\t\t\t\t\t\t\teasing = valueData[1],\r\n\t\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\r\n\r\n\t\t\t\t\t\t\t\tif (CSS.RegEx.isHex.test(endValue)) {\r\n\t\t\t\t\t\t\t\t\t/* Convert the hex strings into their RGB component arrays. */\r\n\t\t\t\t\t\t\t\t\tvar colorComponents = ["Red", "Green", "Blue"],\r\n\t\t\t\t\t\t\t\t\t\t\tendValueRGB = CSS.Values.hexToRgb(endValue),\r\n\t\t\t\t\t\t\t\t\t\t\tstartValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Inject the RGB component tweens into propertiesMap. */\r\n\t\t\t\t\t\t\t\t\tfor (var i = 0; i < colorComponents.length; i++) {\r\n\t\t\t\t\t\t\t\t\t\tvar dataArray = [endValueRGB[i]];\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (easing) {\r\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(easing);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (startValueRGB !== undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(startValueRGB[i]);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tfixPropertyValue(propertyName + colorComponents[i], dataArray);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t/* If we have replaced a shortcut color value then don\'t update the standard property name */\r\n\t\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tfixPropertyValue(propertyName, valueData);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Along with its property data, store a reference to the element itself onto tweensContainer. */\r\n\t\t\t\t\t\ttweensContainer.element = element;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*****************\r\n\t\t\t\t\t Call Push\r\n\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t/* Note: tweensContainer can be empty if all of the properties in this call\'s property map were skipped due to not\r\n\t\t\t\t\t being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */\r\n\t\t\t\t\tif (tweensContainer.element) {\r\n\t\t\t\t\t\t/* Apply the "velocity-animating" indicator class. */\r\n\t\t\t\t\t\tCSS.Values.addClass(element, "velocity-animating");\r\n\r\n\t\t\t\t\t\t/* The call array houses the tweensContainers for each element being animated in the current call. */\r\n\t\t\t\t\t\tcall.push(tweensContainer);\r\n\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\tif (data) {\r\n\t\t\t\t\t\t\t/* Store the tweensContainer and options if we\'re working on the default effects queue, so that they can be used by the reverse command. */\r\n\t\t\t\t\t\t\tif (opts.queue === "") {\r\n\r\n\t\t\t\t\t\t\t\tdata.tweensContainer = tweensContainer;\r\n\t\t\t\t\t\t\t\tdata.opts = opts;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Switch on the element\'s animating flag. */\r\n\t\t\t\t\t\t\tdata.isAnimating = true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Once the final element in this call\'s element set has been processed, push the call array onto\r\n\t\t\t\t\t\t Velocity.State.calls for the animation tick to immediately begin processing. */\r\n\t\t\t\t\t\tif (elementsIndex === elementsLength - 1) {\r\n\t\t\t\t\t\t\t/* Add the current call plus its associated metadata (the element set and the call\'s options) onto the global call container.\r\n\t\t\t\t\t\t\t Anything on this call container is subjected to tick() processing. */\r\n\t\t\t\t\t\t\tVelocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);\r\n\r\n\t\t\t\t\t\t\t/* If the animation tick isn\'t running, start it. (Velocity shuts it off when there are no active calls to process.) */\r\n\t\t\t\t\t\t\tif (Velocity.State.isTicking === false) {\r\n\t\t\t\t\t\t\t\tVelocity.State.isTicking = true;\r\n\r\n\t\t\t\t\t\t\t\t/* Start the tick loop. */\r\n\t\t\t\t\t\t\t\ttick();\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\telementsIndex++;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* When the queue option is set to false, the call skips the element\'s queue and fires immediately. */\r\n\t\t\t\tif (opts.queue === false) {\r\n\t\t\t\t\t/* Since this buildQueue call doesn\'t respect the element\'s existing queue (which is where a delay option would have been appended),\r\n\t\t\t\t\t we manually inject the delay property here with an explicit setTimeout. */\r\n\t\t\t\t\tif (opts.delay) {\r\n\r\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilitate access for global pause/resume */\r\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\r\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\r\n\r\n\t\t\t\t\t\tvar delayComplete = (function(index) {\r\n\t\t\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\r\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\r\n\r\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\r\n\t\t\t\t\t\t\t\tbuildQueue();\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})(callIndex);\r\n\r\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\r\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\r\n\t\t\t\t\t\tData(element).delayTimer = {\r\n\t\t\t\t\t\t\tsetTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),\r\n\t\t\t\t\t\t\tnext: delayComplete\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tbuildQueue();\r\n\t\t\t\t\t}\r\n\t\t\t\t\t/* Otherwise, the call undergoes element queueing as normal. */\r\n\t\t\t\t\t/* Note: To interoperate with jQuery, Velocity uses jQuery\'s own $.queue() stack for queuing logic. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\r\n\t\t\t\t\t\t/* If the clearQueue flag was passed in by the stop command, resolve this call\'s promise. (Promises can only be resolved once,\r\n\t\t\t\t\t\t so it\'s fine if this is repeatedly triggered for each element in the associated call.) */\r\n\t\t\t\t\t\tif (clearQueue === true) {\r\n\t\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.\r\n\t\t\t\t\t\t See completeCall() for further details. */\r\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\r\n\r\n\t\t\t\t\t\tbuildQueue(next);\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Auto-Dequeuing\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* As per jQuery\'s $.queue() behavior, to fire the first non-custom-queue entry on an element, the element\r\n\t\t\t\t must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking\r\n\t\t\t\t for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element\'s\r\n\t\t\t\t queue is further appended with additional items -- including $.delay()\'s or even $.animate() calls, the queue\'s\r\n\t\t\t\t first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */\r\n\t\t\t\t/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until\r\n\t\t\t\t each one of the elements in the set has reached the end of its individually pre-existing queue chain. */\r\n\t\t\t\t/* Note: Unfortunately, most people don\'t fully grasp jQuery\'s powerful, yet quirky, $.queue() function.\r\n\t\t\t\t Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */\r\n\t\t\t\tif ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {\r\n\t\t\t\t\t$.dequeue(element);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/**************************\r\n\t\t\t Element Set Iteration\r\n\t\t\t **************************/\r\n\r\n\t\t\t/* If the "nodeType" property exists on the elements variable, we\'re animating a single element.\r\n\t\t\t Place it in an array so that $.each() can iterate over it. */\r\n\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */\r\n\t\t\t\tif (Type.isNode(element)) {\r\n\t\t\t\t\tprocessElement(element, i);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\t/******************\r\n\t\t\t Option: Loop\r\n\t\t\t ******************/\r\n\r\n\t\t\t/* The loop option accepts an integer indicating how many times the element should loop between the values in the\r\n\t\t\t current call\'s properties map and the element\'s property values prior to this call. */\r\n\t\t\t/* Note: The loop option\'s logic is performed here -- after element processing -- because the current call needs\r\n\t\t\t to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,\r\n\t\t\t which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */\r\n\t\t\topts = $.extend({}, Velocity.defaults, options);\r\n\t\t\topts.loop = parseInt(opts.loop, 10);\r\n\t\t\tvar reverseCallsCount = (opts.loop * 2) - 1;\r\n\r\n\t\t\tif (opts.loop) {\r\n\t\t\t\t/* Double the loop count to convert it into its appropriate number of "reverse" calls.\r\n\t\t\t\t Subtract 1 from the resulting value since the current call is included in the total alternation count. */\r\n\t\t\t\tfor (var x = 0; x < reverseCallsCount; x++) {\r\n\t\t\t\t\t/* Since the logic for the reverse action occurs inside Queueing and therefore this call\'s options object\r\n\t\t\t\t\t isn\'t parsed until then as well, the current call\'s delay option must be explicitly passed into the reverse\r\n\t\t\t\t\t call so that the delay logic that occurs inside *Pre-Queueing* can process it. */\r\n\t\t\t\t\tvar reverseOptions = {\r\n\t\t\t\t\t\tdelay: opts.delay,\r\n\t\t\t\t\t\tprogress: opts.progress\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* If a complete callback was passed into this call, transfer it to the loop redirect\'s final "reverse" call\r\n\t\t\t\t\t so that it\'s triggered when the entire redirect is complete (and not when the very first animation is complete). */\r\n\t\t\t\t\tif (x === reverseCallsCount - 1) {\r\n\t\t\t\t\t\treverseOptions.display = opts.display;\r\n\t\t\t\t\t\treverseOptions.visibility = opts.visibility;\r\n\t\t\t\t\t\treverseOptions.complete = opts.complete;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tanimate(elements, "reverse", reverseOptions);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/***************\r\n\t\t\t Chaining\r\n\t\t\t ***************/\r\n\r\n\t\t\t/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */\r\n\t\t\treturn getChain();\r\n\t\t};\r\n\r\n\t\t/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */\r\n\t\tVelocity = $.extend(animate, Velocity);\r\n\t\t/* For legacy support, also expose the literal animate method. */\r\n\t\tVelocity.animate = animate;\r\n\r\n\t\t/**************\r\n\t\t Timing\r\n\t\t **************/\r\n\r\n\t\t/* Ticker function. */\r\n\t\tvar ticker = window.requestAnimationFrame || rAFShim;\r\n\r\n\t\t/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.\r\n\t\t To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn\'t* pause) when the tab loses focus. We skip this for mobile\r\n\t\t devices to avoid wasting battery power on inactive tabs. */\r\n\t\t/* Note: Tab focus detection doesn\'t work on older versions of IE, but that\'s okay since they don\'t support rAF to begin with. */\r\n\t\tif (!Velocity.State.isMobile && document.hidden !== undefined) {\r\n\t\t\tvar updateTicker = function() {\r\n\t\t\t\t/* Reassign the rAF function (which the global tick() function uses) based on the tab\'s focus state. */\r\n\t\t\t\tif (document.hidden) {\r\n\t\t\t\t\tticker = function(callback) {\r\n\t\t\t\t\t\t/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */\r\n\t\t\t\t\t\treturn setTimeout(function() {\r\n\t\t\t\t\t\t\tcallback(true);\r\n\t\t\t\t\t\t}, 16);\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* The rAF loop has been paused by the browser, so we manually restart the tick. */\r\n\t\t\t\t\ttick();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tticker = window.requestAnimationFrame || rAFShim;\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\t/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */\r\n\t\t\tupdateTicker();\r\n\r\n\t\t\t/* And then run check again every time visibility changes */\r\n\t\t\tdocument.addEventListener("visibilitychange", updateTicker);\r\n\t\t}\r\n\r\n\t\t/************\r\n\t\t Tick\r\n\t\t ************/\r\n\r\n\t\t/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */\r\n\t\tfunction tick(timestamp) {\r\n\t\t\t/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.\r\n\t\t\t We leverage this metadata to fully ignore the first tick pass since RAF\'s initial pass is fired whenever\r\n\t\t\t the browser\'s next tick sync time occurs, which results in the first elements subjected to Velocity\r\n\t\t\t calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore\r\n\t\t\t the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated\r\n\t\t\t by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */\r\n\t\t\tif (timestamp) {\r\n\t\t\t\t/* We normally use RAF\'s high resolution timestamp but as it can be significantly offset when the browser is\r\n\t\t\t\t under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.\r\n\t\t\t\t We use performance.now() and shim it if it doesn\'t exist for when the tab is hidden. */\r\n\t\t\t\tvar timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();\r\n\r\n\t\t\t\t/********************\r\n\t\t\t\t Call Iteration\r\n\t\t\t\t ********************/\r\n\r\n\t\t\t\tvar callsLength = Velocity.State.calls.length;\r\n\r\n\t\t\t\t/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)\r\n\t\t\t\t when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation\r\n\t\t\t\t has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */\r\n\t\t\t\tif (callsLength > 10000) {\r\n\t\t\t\t\tVelocity.State.calls = compactSparseArray(Velocity.State.calls);\r\n\t\t\t\t\tcallsLength = Velocity.State.calls.length;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Iterate through each active call. */\r\n\t\t\t\tfor (var i = 0; i < callsLength; i++) {\r\n\t\t\t\t\t/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */\r\n\t\t\t\t\tif (!Velocity.State.calls[i]) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/************************\r\n\t\t\t\t\t Call-Wide Variables\r\n\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\tvar callContainer = Velocity.State.calls[i],\r\n\t\t\t\t\t\t\tcall = callContainer[0],\r\n\t\t\t\t\t\t\topts = callContainer[2],\r\n\t\t\t\t\t\t\ttimeStart = callContainer[3],\r\n\t\t\t\t\t\t\tfirstTick = !timeStart,\r\n\t\t\t\t\t\t\ttweenDummyValue = null,\r\n\t\t\t\t\t\t\tpauseObject = callContainer[5],\r\n\t\t\t\t\t\t\tmillisecondsEllapsed = callContainer[6];\r\n\r\n\r\n\r\n\t\t\t\t\t/* If timeStart is undefined, then this is the first time that this call has been processed by tick().\r\n\t\t\t\t\t We assign timeStart now so that its value is as close to the real animation start time as possible.\r\n\t\t\t\t\t (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay\r\n\t\t\t\t\t between that time and now would cause the first few frames of the tween to be skipped since\r\n\t\t\t\t\t percentComplete is calculated relative to timeStart.) */\r\n\t\t\t\t\t/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the\r\n\t\t\t\t\t first tick iteration isn\'t wasted by animating at 0% tween completion, which would produce the\r\n\t\t\t\t\t same style value as the element\'s current value. */\r\n\t\t\t\t\tif (!timeStart) {\r\n\t\t\t\t\t\ttimeStart = Velocity.State.calls[i][3] = timeCurrent - 16;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If a pause object is present, skip processing unless it has been set to resume */\r\n\t\t\t\t\tif (pauseObject) {\r\n\t\t\t\t\t\tif (pauseObject.resume === true) {\r\n\t\t\t\t\t\t\t/* Update the time start to accomodate the paused completion amount */\r\n\t\t\t\t\t\t\ttimeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);\r\n\r\n\t\t\t\t\t\t\t/* Remove pause object after processing */\r\n\t\t\t\t\t\t\tcallContainer[5] = null;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tmillisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;\r\n\r\n\t\t\t\t\t/* The tween\'s completion percentage is relative to the tween\'s start time, not the tween\'s start value\r\n\t\t\t\t\t (which would result in unpredictable tween durations since JavaScript\'s timers are not particularly accurate).\r\n\t\t\t\t\t Accordingly, we ensure that percentComplete does not exceed 1. */\r\n\t\t\t\t\tvar percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);\r\n\r\n\t\t\t\t\t/**********************\r\n\t\t\t\t\t Element Iteration\r\n\t\t\t\t\t **********************/\r\n\r\n\t\t\t\t\t/* For every call, iterate through each of the elements in its set. */\r\n\t\t\t\t\tfor (var j = 0, callLength = call.length; j < callLength; j++) {\r\n\t\t\t\t\t\tvar tweensContainer = call[j],\r\n\t\t\t\t\t\t\t\telement = tweensContainer.element;\r\n\r\n\t\t\t\t\t\t/* Check to see if this element has been deleted midway through the animation by checking for the\r\n\t\t\t\t\t\t continued existence of its data cache. If it\'s gone, or the element is currently paused, skip animating this element. */\r\n\t\t\t\t\t\tif (!Data(element)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar transformPropertyExists = false;\r\n\r\n\t\t\t\t\t\t/**********************************\r\n\t\t\t\t\t\t Display & Visibility Toggling\r\n\t\t\t\t\t\t **********************************/\r\n\r\n\t\t\t\t\t\t/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.\r\n\t\t\t\t\t\t (Otherwise, display\'s "none" value is set in completeCall() once the animation has completed.) */\r\n\t\t\t\t\t\tif (opts.display !== undefined && opts.display !== null && opts.display !== "none") {\r\n\t\t\t\t\t\t\tif (opts.display === "flex") {\r\n\t\t\t\t\t\t\t\tvar flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];\r\n\r\n\t\t\t\t\t\t\t\t$.each(flexValues, function(i, flexValue) {\r\n\t\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, "display", flexValue);\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, "display", opts.display);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Same goes with the visibility option, but its "none" equivalent is "hidden". */\r\n\t\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== "hidden") {\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, "visibility", opts.visibility);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/************************\r\n\t\t\t\t\t\t Property Iteration\r\n\t\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\t\t/* For every element, iterate through each property. */\r\n\t\t\t\t\t\tfor (var property in tweensContainer) {\r\n\t\t\t\t\t\t\t/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */\r\n\t\t\t\t\t\t\tif (tweensContainer.hasOwnProperty(property) && property !== "element") {\r\n\t\t\t\t\t\t\t\tvar tween = tweensContainer[property],\r\n\t\t\t\t\t\t\t\t\t\tcurrentValue,\r\n\t\t\t\t\t\t\t\t\t\t/* Easing can either be a pre-genereated function or a string that references a pre-registered easing\r\n\t\t\t\t\t\t\t\t\t\t on the Velocity.Easings object. In either case, return the appropriate easing *function*. */\r\n\t\t\t\t\t\t\t\t\t\teasing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;\r\n\r\n\t\t\t\t\t\t\t\t/******************************\r\n\t\t\t\t\t\t\t\t Current Value Calculation\r\n\t\t\t\t\t\t\t\t ******************************/\r\n\r\n\t\t\t\t\t\t\t\tif (Type.isString(tween.pattern)) {\r\n\t\t\t\t\t\t\t\t\tvar patternReplace = percentComplete === 1 ?\r\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tvar result = tween.endValue[index];\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\r\n\t\t\t\t\t\t\t\t\t\t\t} :\r\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tvar startValue = tween.startValue[index],\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttweenDelta = tween.endValue[index] - startValue,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\r\n\t\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.pattern.replace(/{(\\d+)(!)?}/g, patternReplace);\r\n\t\t\t\t\t\t\t\t} else if (percentComplete === 1) {\r\n\t\t\t\t\t\t\t\t\t/* If this is the last tick pass (if we\'ve reached 100% completion for this tween),\r\n\t\t\t\t\t\t\t\t\t ensure that currentValue is explicitly set to its target endValue so that it\'s not subjected to any rounding. */\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.endValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* Otherwise, calculate currentValue based on the current delta from startValue. */\r\n\t\t\t\t\t\t\t\t\tvar tweenDelta = tween.endValue - tween.startValue;\r\n\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\r\n\t\t\t\t\t\t\t\t\t/* If no value change is occurring, don\'t proceed with DOM updating. */\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (!firstTick && (currentValue === tween.currentValue)) {\r\n\t\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\ttween.currentValue = currentValue;\r\n\r\n\t\t\t\t\t\t\t\t/* If we\'re tweening a fake \'tween\' property in order to log transition values, update the one-per-call variable so that\r\n\t\t\t\t\t\t\t\t it can be passed into the progress callback. */\r\n\t\t\t\t\t\t\t\tif (property === "tween") {\r\n\t\t\t\t\t\t\t\t\ttweenDummyValue = currentValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/******************\r\n\t\t\t\t\t\t\t\t\t Hooks: Part I\r\n\t\t\t\t\t\t\t\t\t ******************/\r\n\t\t\t\t\t\t\t\t\tvar hookRoot;\r\n\r\n\t\t\t\t\t\t\t\t\t/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used\r\n\t\t\t\t\t\t\t\t\t for subsequent hooks in this call that are associated with the same root property. If we didn\'t cache the updated\r\n\t\t\t\t\t\t\t\t\t rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook\'s\r\n\t\t\t\t\t\t\t\t\t updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that\r\n\t\t\t\t\t\t\t\t\t subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */\r\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\r\n\r\n\t\t\t\t\t\t\t\t\t\tvar rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (rootPropertyValueCache) {\r\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue = rootPropertyValueCache;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/*****************\r\n\t\t\t\t\t\t\t\t\t DOM Update\r\n\t\t\t\t\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */\r\n\t\t\t\t\t\t\t\t\t/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */\r\n\t\t\t\t\t\t\t\t\tvar adjustedSetData = CSS.setPropertyValue(element, /* SET */\r\n\t\t\t\t\t\t\t\t\t\t\tproperty,\r\n\t\t\t\t\t\t\t\t\t\t\ttween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),\r\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue,\r\n\t\t\t\t\t\t\t\t\t\t\ttween.scrollData);\r\n\r\n\t\t\t\t\t\t\t\t\t/*******************\r\n\t\t\t\t\t\t\t\t\t Hooks: Part II\r\n\t\t\t\t\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* Now that we have the hook\'s updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */\r\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\t\t/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */\r\n\t\t\t\t\t\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/***************\r\n\t\t\t\t\t\t\t\t\t Transforms\r\n\t\t\t\t\t\t\t\t\t ***************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */\r\n\t\t\t\t\t\t\t\t\tif (adjustedSetData[0] === "transform") {\r\n\t\t\t\t\t\t\t\t\t\ttransformPropertyExists = true;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/****************\r\n\t\t\t\t\t\t mobileHA\r\n\t\t\t\t\t\t ****************/\r\n\r\n\t\t\t\t\t\t/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.\r\n\t\t\t\t\t\t It\'s safe to override this property since Velocity doesn\'t actually support its animation (hooks are used in its place). */\r\n\t\t\t\t\t\tif (opts.mobileHA) {\r\n\t\t\t\t\t\t\t/* Don\'t set the null transform hack if we\'ve already done so. */\r\n\t\t\t\t\t\t\tif (Data(element).transformCache.translate3d === undefined) {\r\n\t\t\t\t\t\t\t\t/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */\r\n\t\t\t\t\t\t\t\tData(element).transformCache.translate3d = "(0px, 0px, 0px)";\r\n\r\n\t\t\t\t\t\t\t\ttransformPropertyExists = true;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (transformPropertyExists) {\r\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.\r\n\t\t\t\t\t Accordingly, it\'s set to false so that it isn\'t re-processed by this call in the next tick. */\r\n\t\t\t\t\tif (opts.display !== undefined && opts.display !== "none") {\r\n\t\t\t\t\t\tVelocity.State.calls[i][2].display = false;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== "hidden") {\r\n\t\t\t\t\t\tVelocity.State.calls[i][2].visibility = false;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */\r\n\t\t\t\t\tif (opts.progress) {\r\n\t\t\t\t\t\topts.progress.call(callContainer[1],\r\n\t\t\t\t\t\t\t\tcallContainer[1],\r\n\t\t\t\t\t\t\t\tpercentComplete,\r\n\t\t\t\t\t\t\t\tMath.max(0, (timeStart + opts.duration) - timeCurrent),\r\n\t\t\t\t\t\t\t\ttimeStart,\r\n\t\t\t\t\t\t\t\ttweenDummyValue);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */\r\n\t\t\t\t\tif (percentComplete === 1) {\r\n\t\t\t\t\t\tcompleteCall(i);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */\r\n\t\t\tif (Velocity.State.isTicking) {\r\n\t\t\t\tticker(tick);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/**********************\r\n\t\t Call Completion\r\n\t\t **********************/\r\n\r\n\t\t/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */\r\n\t\tfunction completeCall(callIndex, isStopped) {\r\n\t\t\t/* Ensure the call exists. */\r\n\t\t\tif (!Velocity.State.calls[callIndex]) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Pull the metadata from the call. */\r\n\t\t\tvar call = Velocity.State.calls[callIndex][0],\r\n\t\t\t\t\telements = Velocity.State.calls[callIndex][1],\r\n\t\t\t\t\topts = Velocity.State.calls[callIndex][2],\r\n\t\t\t\t\tresolver = Velocity.State.calls[callIndex][4];\r\n\r\n\t\t\tvar remainingCallsExist = false;\r\n\r\n\t\t\t/*************************\r\n\t\t\t Element Finalization\r\n\t\t\t *************************/\r\n\r\n\t\t\tfor (var i = 0, callLength = call.length; i < callLength; i++) {\r\n\t\t\t\tvar element = call[i].element;\r\n\r\n\t\t\t\t/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */\r\n\t\t\t\t/* Note: display:none isn\'t set when calls are manually stopped (via Velocity("stop"). */\r\n\t\t\t\t/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */\r\n\t\t\t\tif (!isStopped && !opts.loop) {\r\n\t\t\t\t\tif (opts.display === "none") {\r\n\t\t\t\t\t\tCSS.setPropertyValue(element, "display", opts.display);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (opts.visibility === "hidden") {\r\n\t\t\t\t\t\tCSS.setPropertyValue(element, "visibility", opts.visibility);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If the element\'s queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run\r\n\t\t\t\t a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry\'s logic might alter\r\n\t\t\t\t an element\'s CSS values and thereby cause Velocity\'s cached value data to go stale. To detect if a queue entry was initiated by Velocity,\r\n\t\t\t\t we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won\'t rename since the flag\r\n\t\t\t\t is assigned to jQuery\'s global $ object and thus exists out of Velocity\'s own scope. */\r\n\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\tif (opts.loop !== true && ($.queue(element)[1] === undefined || !/\\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {\r\n\t\t\t\t\t/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */\r\n\t\t\t\t\tif (data) {\r\n\t\t\t\t\t\tdata.isAnimating = false;\r\n\t\t\t\t\t\t/* Clear the element\'s rootPropertyValueCache, which will become stale. */\r\n\t\t\t\t\t\tdata.rootPropertyValueCache = {};\r\n\r\n\t\t\t\t\t\tvar transformHAPropertyExists = false;\r\n\t\t\t\t\t\t/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */\r\n\t\t\t\t\t\t$.each(CSS.Lists.transforms3D, function(i, transformName) {\r\n\t\t\t\t\t\t\tvar defaultValue = /^scale/.test(transformName) ? 1 : 0,\r\n\t\t\t\t\t\t\t\t\tcurrentValue = data.transformCache[transformName];\r\n\r\n\t\t\t\t\t\t\tif (data.transformCache[transformName] !== undefined && new RegExp("^\\\\(" + defaultValue + "[^.]").test(currentValue)) {\r\n\t\t\t\t\t\t\t\ttransformHAPropertyExists = true;\r\n\r\n\t\t\t\t\t\t\t\tdelete data.transformCache[transformName];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU\'s memory. */\r\n\t\t\t\t\t\tif (opts.mobileHA) {\r\n\t\t\t\t\t\t\ttransformHAPropertyExists = true;\r\n\t\t\t\t\t\t\tdelete data.transformCache.translate3d;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Flush the subproperty removals to the DOM. */\r\n\t\t\t\t\t\tif (transformHAPropertyExists) {\r\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Remove the "velocity-animating" indicator class. */\r\n\t\t\t\t\t\tCSS.Values.removeClass(element, "velocity-animating");\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Option: Complete\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */\r\n\t\t\t\t/* Note: Callbacks aren\'t fired when calls are manually stopped (via Velocity("stop"). */\r\n\t\t\t\tif (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {\r\n\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don\'t halt the execution of Velocity itself. */\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\topts.complete.call(elements, elements);\r\n\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\t\t\tthrow error;\r\n\t\t\t\t\t\t}, 1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Promise Resolving\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* Note: Infinite loops don\'t return promises. */\r\n\t\t\t\tif (resolver && opts.loop !== true) {\r\n\t\t\t\t\tresolver(elements);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/****************************\r\n\t\t\t\t Option: Loop (Infinite)\r\n\t\t\t\t ****************************/\r\n\r\n\t\t\t\tif (data && opts.loop === true && !isStopped) {\r\n\t\t\t\t\t/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable\r\n\t\t\t\t\t continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */\r\n\t\t\t\t\t$.each(data.tweensContainer, function(propertyName, tweenContainer) {\r\n\t\t\t\t\t\tif (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {\r\n\t\t\t\t\t\t\tvar oldStartValue = tweenContainer.startValue;\r\n\r\n\t\t\t\t\t\t\ttweenContainer.startValue = tweenContainer.endValue;\r\n\t\t\t\t\t\t\ttweenContainer.endValue = oldStartValue;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {\r\n\t\t\t\t\t\t\ttweenContainer.endValue = 0;\r\n\t\t\t\t\t\t\ttweenContainer.startValue = 100;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tVelocity(element, "reverse", {loop: true, delay: opts.delay});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/***************\r\n\t\t\t\t Dequeueing\r\n\t\t\t\t ***************/\r\n\r\n\t\t\t\t/* Fire the next call in the queue so long as this call\'s queue wasn\'t set to false (to trigger a parallel animation),\r\n\t\t\t\t which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,\r\n\t\t\t\t $.dequeue() must still be called in order to completely clear jQuery\'s animation queue. */\r\n\t\t\t\tif (opts.queue !== false) {\r\n\t\t\t\t\t$.dequeue(element, opts.queue);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/************************\r\n\t\t\t Calls Array Cleanup\r\n\t\t\t ************************/\r\n\r\n\t\t\t/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().\r\n\t\t\t (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */\r\n\t\t\tVelocity.State.calls[callIndex] = false;\r\n\r\n\t\t\t/* Iterate through the calls array to determine if this was the final in-progress animation.\r\n\t\t\t If so, set a flag to end ticking and clear the calls array. */\r\n\t\t\tfor (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {\r\n\t\t\t\tif (Velocity.State.calls[j] !== false) {\r\n\t\t\t\t\tremainingCallsExist = true;\r\n\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (remainingCallsExist === false) {\r\n\t\t\t\t/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */\r\n\t\t\t\tVelocity.State.isTicking = false;\r\n\r\n\t\t\t\t/* Clear the calls array so that its length is reset. */\r\n\t\t\t\tdelete Velocity.State.calls;\r\n\t\t\t\tVelocity.State.calls = [];\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/******************\r\n\t\t Frameworks\r\n\t\t ******************/\r\n\r\n\t\t/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.\r\n\t\t If either framework is loaded, register a "velocity" extension pointing to Velocity\'s core animate() method.  Velocity\r\n\t\t also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are\r\n\t\t accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn\r\n\t\t (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */\r\n\t\tglobal.Velocity = Velocity;\r\n\r\n\t\tif (global !== window) {\r\n\t\t\t/* Assign the element function to Velocity\'s core animate() method. */\r\n\t\t\tglobal.fn.velocity = animate;\r\n\t\t\t/* Assign the object function\'s defaults to Velocity\'s global defaults object. */\r\n\t\t\tglobal.fn.velocity.defaults = Velocity.defaults;\r\n\t\t}\r\n\r\n\t\t/***********************\r\n\t\t Packaged Redirects\r\n\t\t ***********************/\r\n\r\n\t\t/* slideUp, slideDown */\r\n\t\t$.each(["Down", "Up"], function(i, direction) {\r\n\t\t\tVelocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\r\n\t\t\t\tvar opts = $.extend({}, options),\r\n\t\t\t\t\t\tbegin = opts.begin,\r\n\t\t\t\t\t\tcomplete = opts.complete,\r\n\t\t\t\t\t\tinlineValues = {},\r\n\t\t\t\t\t\tcomputedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};\r\n\r\n\t\t\t\tif (opts.display === undefined) {\r\n\t\t\t\t\t/* Show the element before slideDown begins and hide the element after slideUp completes. */\r\n\t\t\t\t\t/* Note: Inline elements cannot have dimensions animated, so they\'re reverted to inline-block. */\r\n\t\t\t\t\topts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");\r\n\t\t\t\t}\r\n\r\n\t\t\t\topts.begin = function() {\r\n\t\t\t\t\t/* If the user passed in a begin callback, fire it now. */\r\n\t\t\t\t\tif (elementsIndex === 0 && begin) {\r\n\t\t\t\t\t\tbegin.call(elements, elements);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Cache the elements\' original vertical dimensional property values so that we can animate back to them. */\r\n\t\t\t\t\tfor (var property in computedValues) {\r\n\t\t\t\t\t\tif (!computedValues.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tinlineValues[property] = element.style[property];\r\n\r\n\t\t\t\t\t\t/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,\r\n\t\t\t\t\t\t use forcefeeding to start from computed values and animate down to 0. */\r\n\t\t\t\t\t\tvar propertyValue = CSS.getPropertyValue(element, property);\r\n\t\t\t\t\t\tcomputedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Force vertical overflow content to clip so that sliding works as expected. */\r\n\t\t\t\t\tinlineValues.overflow = element.style.overflow;\r\n\t\t\t\t\telement.style.overflow = "hidden";\r\n\t\t\t\t};\r\n\r\n\t\t\t\topts.complete = function() {\r\n\t\t\t\t\t/* Reset element to its pre-slide inline values once its slide animation is complete. */\r\n\t\t\t\t\tfor (var property in inlineValues) {\r\n\t\t\t\t\t\tif (inlineValues.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\telement.style[property] = inlineValues[property];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If the user passed in a complete callback, fire it now. */\r\n\t\t\t\t\tif (elementsIndex === elementsSize - 1) {\r\n\t\t\t\t\t\tif (complete) {\r\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (promiseData) {\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\r\n\t\t\t\tVelocity(element, computedValues, opts);\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\t/* fadeIn, fadeOut */\r\n\t\t$.each(["In", "Out"], function(i, direction) {\r\n\t\t\tVelocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\r\n\t\t\t\tvar opts = $.extend({}, options),\r\n\t\t\t\t\t\tcomplete = opts.complete,\r\n\t\t\t\t\t\tpropertiesMap = {opacity: (direction === "In") ? 1 : 0};\r\n\r\n\t\t\t\t/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering\r\n\t\t\t\t callbacks by firing them only when the final element has been reached. */\r\n\t\t\t\tif (elementsIndex !== 0) {\r\n\t\t\t\t\topts.begin = null;\r\n\t\t\t\t}\r\n\t\t\t\tif (elementsIndex !== elementsSize - 1) {\r\n\t\t\t\t\topts.complete = null;\r\n\t\t\t\t} else {\r\n\t\t\t\t\topts.complete = function() {\r\n\t\t\t\t\t\tif (complete) {\r\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (promiseData) {\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */\r\n\t\t\t\t/* Note: We allow users to pass in "null" to skip display setting altogether. */\r\n\t\t\t\tif (opts.display === undefined) {\r\n\t\t\t\t\topts.display = (direction === "In" ? "auto" : "none");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tVelocity(this, propertiesMap, opts);\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\treturn Velocity;\r\n\t}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));\r\n}));\r\n\r\n/******************\r\n Known Issues\r\n ******************/\r\n\r\n/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.\r\n Velocity, however, doesn\'t make this distinction. Thus, converting to or from the % unit with these subproperties\r\n will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */\r\n\n\n//# sourceURL=webpack://HsNavScroller/./node_modules/velocity-animate/velocity.js?')
      },
      "./src/js/hs-nav-scroller.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HsNavScroller; });\n/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! velocity-animate */ \"./node_modules/velocity-animate/velocity.js\");\n/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSNavScroller Plugin\n* @version: 2.0.0 (Sat, 06 Jul 2021)\n* @requires: Velocity 1.5.2 or later\n* @author: HtmlStream\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\n\nvar dataAttributeName = 'data-hs-nav-scroller-options';\nvar defaults = {\n  type: 'horizontal',\n  target: '.active',\n  offset: 0,\n  delay: 20\n};\n\nvar HsNavScroller = /*#__PURE__*/function () {\n  function HsNavScroller(el, options, id) {\n    _classCallCheck(this, HsNavScroller);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HsNavScroller, [{\n    key: \"_init\",\n    value: function _init() {\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n\n        if (_options.type == 'vertical') {\n          velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_$el, 'scroll', {\n            container: _$el,\n            offset: _$el.querySelector(_options.target).offsetTop - _options.offset,\n            duration: _options.delay,\n            axis: 'y'\n          });\n        } else if (_options.type == 'horizontal') {\n          _options.nav = _$el.querySelector('.nav');\n          _options.prev = _$el.querySelector('.hs-nav-scroller-arrow-prev');\n          _options.next = _$el.querySelector('.hs-nav-scroller-arrow-next');\n          _options.activeElementLeftPosition = _options.nav.querySelector(_options.target).offsetLeft;\n          _options.scrollMaxLeft = parseInt((_options.nav.scrollWidth.toFixed() - _options.nav.clientWidth).toFixed());\n          _options.scrollPosition = _options.nav.scrollLeft;\n\n          if (_options.scrollPosition <= 0) {\n            _options.prev.style.display = 'none';\n          }\n\n          if (_options.scrollMaxLeft <= 0) {\n            _options.next.style.display = 'none';\n          }\n\n          that.onResize(_$el, _options);\n          window.addEventListener('resize', function () {\n            return that.onResize(_$el, _options);\n          });\n\n          var navRect = _options.nav.getBoundingClientRect(),\n              prevRect = _options.prev.getBoundingClientRect(),\n              nextRect = _options.next.getBoundingClientRect();\n\n          if (_options.activeElementLeftPosition > navRect.width / 2) {\n            velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_options.nav, 'scroll', {\n              container: _options.nav,\n              offset: _options.activeElementLeftPosition - _options.offset - prevRect.width,\n              duration: _options.delay,\n              axis: 'x'\n            });\n          }\n\n          _options.next.addEventListener('click', function () {\n            velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_options.nav, 'scroll', {\n              container: _options.nav,\n              offset: _options.scrollPosition + _options.nav.clientWidth - nextRect.width,\n              duration: _options.delay,\n              axis: 'x'\n            });\n          });\n\n          _options.prev.addEventListener('click', function () {\n            velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_options.nav, 'scroll', {\n              container: _options.nav,\n              offset: _options.scrollPosition - _options.nav.clientWidth + prevRect.width,\n              duration: _options.delay,\n              axis: 'x'\n            });\n          });\n\n          _options.nav.addEventListener('scroll', function () {\n            var scrollMaxLeft = (parseInt(_options.nav.scrollWidth.toFixed()) - parseInt(_options.nav.clientWidth)).toFixed(),\n                scrollPosition = _options.nav.scrollLeft; // Hide or Show Back Arrow\n\n            if (scrollPosition <= 0) {\n              _options.prev.style.display = 'none';\n            } else {\n              _options.prev.style.display = 'flex';\n            } // Hide or Show Next Arrow\n\n\n            if (scrollPosition >= scrollMaxLeft) {\n              _options.next.style.display = 'none';\n            } else {\n              _options.next.style.display = 'flex';\n            }\n          });\n        }\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize($el, settings) {\n      var scrollMaxLeft = parseInt(settings.nav.scrollWidth.toFixed()) - parseInt(settings.nav.clientWidth.toFixed()),\n          scrollPosition = settings.nav.scrollLeft;\n\n      if (scrollPosition <= 0) {\n        settings.prev.style.display = 'none';\n      } else {\n        settings.prev.style.display = 'flex';\n      }\n\n      if (scrollMaxLeft <= 0) {\n        settings.next.style.display = 'none';\n      } else {\n        settings.next.style.display = 'flex';\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HsNavScroller;\n}();\n\n\n\n//# sourceURL=webpack://HsNavScroller/./src/js/hs-nav-scroller.js?")
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-nav-scroller.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  /*!
     * 
     *   typed.js - A JavaScript Typing Animation Library
     *   Author: Matt Boldt <me@mattboldt.com>
     *   Version: v2.0.12
     *   Url: https://github.com/mattboldt/typed.js
     *   License(s): MIT
     * 
     */
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
  }(this, (function () {
    return function (t) {
      function e(r) {
        if (n[r])
          return n[r].exports;
        var s = n[r] = {
          exports: {},
          id: r,
          loaded: !1
        };
        return t[r].call(s.exports, s, s.exports, e),
          s.loaded = !0,
          s.exports
      }
      var n = {};
      return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    }([function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
      }()
        , s = n(1)
        , i = n(3)
        , a = function () {
          function t(e, n) {
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
            }
            )(this, t),
              s.initializer.load(this, n, e),
              this.begin()
          }
          return r(t, [{
            key: "toggle",
            value: function () {
              this.pause.status ? this.start() : this.stop()
            }
          }, {
            key: "stop",
            value: function () {
              this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                this.pause.status = !0,
                this.options.onStop(this.arrayPos, this))
            }
          }, {
            key: "start",
            value: function () {
              this.typingComplete || this.pause.status && (this.pause.status = !1,
                this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                this.options.onStart(this.arrayPos, this))
            }
          }, {
            key: "destroy",
            value: function () {
              this.reset(!1),
                this.options.onDestroy(this)
            }
          }, {
            key: "reset",
            value: function () {
              var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
              clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
                  this.cursor = null),
                this.strPos = 0,
                this.arrayPos = 0,
                this.curLoop = 0,
                t && (this.insertCursor(),
                  this.options.onReset(this),
                  this.begin())
            }
          }, {
            key: "begin",
            value: function () {
              var t = this;
              this.options.onBegin(this),
                this.typingComplete = !1,
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                this.timeout = setTimeout((function () {
                  t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                }
                ), this.startDelay)
            }
          }, {
            key: "typewrite",
            value: function (t, e) {
              var n = this;
              this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var r = this.humanizer(this.typeSpeed)
                , s = 1;
              return !0 === this.pause.status ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout((function () {
                e = i.htmlParser.typeHtmlChars(t, e, n);
                var r = 0
                  , a = t.substr(e);
                if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                  var o = 1;
                  o += (a = /\d+/.exec(a)[0]).length,
                    r = parseInt(a),
                    n.temporaryPause = !0,
                    n.options.onTypingPaused(n.arrayPos, n),
                    t = t.substring(0, e) + t.substring(e + o),
                    n.toggleBlinking(!0)
                }
                if ("`" === a.charAt(0)) {
                  for (; "`" !== t.substr(e + s).charAt(0) && (s++,
                    !(e + s > t.length));)
                    ;
                  var l = t.substring(0, e)
                    , c = t.substring(l.length + 1, e + s)
                    , u = t.substring(e + s + 1);
                  t = l + c + u,
                    s--
                }
                n.timeout = setTimeout((function () {
                  n.toggleBlinking(!1),
                    e >= t.length ? n.doneTyping(t, e) : n.keepTyping(t, e, s),
                    n.temporaryPause && (n.temporaryPause = !1,
                      n.options.onTypingResumed(n.arrayPos, n))
                }
                ), r)
              }
              ), r))
            }
          }, {
            key: "keepTyping",
            value: function (t, e, n) {
              0 === e && (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this)),
                e += n;
              var r = t.substr(0, e);
              this.replaceText(r),
                this.typewrite(t, e)
            }
          }, {
            key: "doneTyping",
            value: function (t, e) {
              var n = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                this.arrayPos === this.strings.length - 1 && (this.complete(),
                  !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function () {
                    n.backspace(t, e)
                  }
                  ), this.backDelay))
            }
          }, {
            key: "backspace",
            value: function (t, e) {
              var n = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut)
                  return this.initFadeOut();
                this.toggleBlinking(!1);
                var r = this.humanizer(this.backSpeed);
                this.timeout = setTimeout((function () {
                  e = i.htmlParser.backSpaceHtmlChars(t, e, n);
                  var r = t.substr(0, e);
                  if (n.replaceText(r),
                    n.smartBackspace) {
                    var s = n.strings[n.arrayPos + 1];
                    s && r === s.substr(0, e) ? n.stopNum = e : n.stopNum = 0
                  }
                  e > n.stopNum ? (e--,
                    n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++,
                      n.arrayPos === n.strings.length ? (n.arrayPos = 0,
                        n.options.onLastStringBackspaced(),
                        n.shuffleStringsIfNeeded(),
                        n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e))
                }
                ), r)
              } else
                this.setPauseStatus(t, e, !1)
            }
          }, {
            key: "complete",
            value: function () {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : this.typingComplete = !0
            }
          }, {
            key: "setPauseStatus",
            value: function (t, e, n) {
              this.pause.typewrite = n,
                this.pause.curString = t,
                this.pause.curStrPos = e
            }
          }, {
            key: "toggleBlinking",
            value: function (t) {
              this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t,
                t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
            }
          }, {
            key: "humanizer",
            value: function (t) {
              return Math.round(Math.random() * t / 2) + t
            }
          }, {
            key: "shuffleStringsIfNeeded",
            value: function () {
              this.shuffle && (this.sequence = this.sequence.sort((function () {
                return Math.random() - .5
              }
              )))
            }
          }, {
            key: "initFadeOut",
            value: function () {
              var t = this;
              return this.el.className += " " + this.fadeOutClass,
                this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                setTimeout((function () {
                  t.arrayPos++,
                    t.replaceText(""),
                    t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0),
                      t.arrayPos = 0)
                }
                ), this.fadeOutDelay)
            }
          }, {
            key: "replaceText",
            value: function (t) {
              this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
            }
          }, {
            key: "bindFocusEvents",
            value: function () {
              var t = this;
              this.isInput && (this.el.addEventListener("focus", (function (e) {
                t.stop()
              }
              )),
                this.el.addEventListener("blur", (function (e) {
                  t.el.value && 0 !== t.el.value.length || t.start()
                }
                )))
            }
          }, {
            key: "insertCursor",
            value: function () {
              this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                this.cursor.className = "typed-cursor",
                this.cursor.setAttribute("aria-hidden", !0),
                this.cursor.innerHTML = this.cursorChar,
                this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
            }
          }]),
            t
        }();
      e.default = a,
        t.exports = e.default
    }
      , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }
          , s = function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r)
              }
            }
            return function (e, n, r) {
              return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
          }()
          , i = function (t) {
            return t && t.__esModule ? t : {
              default: t
            }
          }(n(2))
          , a = function () {
            function t() {
              !function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t)
            }
            return s(t, [{
              key: "load",
              value: function (t, e, n) {
                if (t.el = "string" == typeof n ? document.querySelector(n) : n,
                  t.options = r({}, i.default, e),
                  t.isInput = "input" === t.el.tagName.toLowerCase(),
                  t.attr = t.options.attr,
                  t.bindInputFocusEvents = t.options.bindInputFocusEvents,
                  t.showCursor = !t.isInput && t.options.showCursor,
                  t.cursorChar = t.options.cursorChar,
                  t.cursorBlinking = !0,
                  t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent,
                  t.contentType = t.options.contentType,
                  t.typeSpeed = t.options.typeSpeed,
                  t.startDelay = t.options.startDelay,
                  t.backSpeed = t.options.backSpeed,
                  t.smartBackspace = t.options.smartBackspace,
                  t.backDelay = t.options.backDelay,
                  t.fadeOut = t.options.fadeOut,
                  t.fadeOutClass = t.options.fadeOutClass,
                  t.fadeOutDelay = t.options.fadeOutDelay,
                  t.isPaused = !1,
                  t.strings = t.options.strings.map((function (t) {
                    return t.trim()
                  }
                  )),
                  "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement,
                  t.stringsElement) {
                  t.strings = [],
                    t.stringsElement.style.display = "none";
                  var s = Array.prototype.slice.apply(t.stringsElement.children)
                    , a = s.length;
                  if (a)
                    for (var o = 0; o < a; o += 1) {
                      var l = s[o];
                      t.strings.push(l.innerHTML.trim())
                    }
                }
                for (var o in t.strPos = 0,
                  t.arrayPos = 0,
                  t.stopNum = 0,
                  t.loop = t.options.loop,
                  t.loopCount = t.options.loopCount,
                  t.curLoop = 0,
                  t.shuffle = t.options.shuffle,
                  t.sequence = [],
                  t.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0
                  },
                  t.typingComplete = !1,
                  t.strings)
                  t.sequence[o] = o;
                t.currentElContent = this.getCurrentElContent(t),
                  t.autoInsertCss = t.options.autoInsertCss,
                  this.appendAnimationCss(t)
              }
            }, {
              key: "getCurrentElContent",
              value: function (t) {
                return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
              }
            }, {
              key: "appendAnimationCss",
              value: function (t) {
                var e = "data-typed-js-css";
                if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                  var n = document.createElement("style");
                  n.type = "text/css",
                    n.setAttribute(e, !0);
                  var r = "";
                  t.showCursor && (r += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                    t.fadeOut && (r += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                    0 !== n.length && (n.innerHTML = r,
                      document.body.appendChild(n))
                }
              }
            }]),
              t
          }();
        e.default = a;
        var o = new a;
        e.initializer = o
      }
      , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.default = {
          strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function (t) { },
          onComplete: function (t) { },
          preStringTyped: function (t, e) { },
          onStringTyped: function (t, e) { },
          onLastStringBackspaced: function (t) { },
          onTypingPaused: function (t, e) { },
          onTypingResumed: function (t, e) { },
          onReset: function (t) { },
          onStop: function (t, e) { },
          onStart: function (t, e) { },
          onDestroy: function (t) { }
        },
          t.exports = e.default
      }
      , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n),
              r && t(e, r),
              e
          }
        }()
          , r = function () {
            function t() {
              !function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t)
            }
            return n(t, [{
              key: "typeHtmlChars",
              value: function (t, e, n) {
                if ("html" !== n.contentType)
                  return e;
                var r = t.substr(e).charAt(0);
                if ("<" === r || "&" === r) {
                  var s;
                  for (s = "<" === r ? ">" : ";"; t.substr(e + 1).charAt(0) !== s && !(++e + 1 > t.length);)
                    ;
                  e++
                }
                return e
              }
            }, {
              key: "backSpaceHtmlChars",
              value: function (t, e, n) {
                if ("html" !== n.contentType)
                  return e;
                var r = t.substr(e).charAt(0);
                if (">" === r || ";" === r) {
                  var s;
                  for (s = ">" === r ? "<" : "&"; t.substr(e - 1).charAt(0) !== s && !(--e < 0);)
                    ;
                  e--
                }
                return e
              }
            }]),
              t
          }();
        e.default = r;
        var s = new r;
        e.htmlParser = s
      }
    ])
  }
  )),
  function (t, e) {
    "object" == typeof exports && void 0 !== module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Swiper = e()
  }(this, (function () {
    "use strict";
    function t(t) {
      return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }
    function e(n = {}, r = {}) {
      Object.keys(r).forEach(s => {
        void 0 === n[s] ? n[s] = r[s] : t(r[s]) && t(n[s]) && Object.keys(r[s]).length > 0 && e(n[s], r[s])
      }
      )
    }
    const n = {
      body: {},
      addEventListener() { },
      removeEventListener() { },
      activeElement: {
        blur() { },
        nodeName: ""
      },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({
        initEvent() { }
      }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() { },
        getElementsByTagName: () => []
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };
    function r() {
      const t = "undefined" != typeof document ? document : {};
      return e(t, n),
        t
    }
    const s = {
      document: n,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { }
      },
      CustomEvent: function () {
        return this
      },
      addEventListener() { },
      removeEventListener() { },
      getComputedStyle: () => ({
        getPropertyValue: () => ""
      }),
      Image() { },
      Date() { },
      screen: {},
      setTimeout() { },
      clearTimeout() { },
      matchMedia: () => ({}),
      requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(),
        null) : setTimeout(t, 0),
      cancelAnimationFrame(t) {
        "undefined" != typeof setTimeout && clearTimeout(t)
      }
    };
    function i() {
      const t = "undefined" != typeof window ? window : {};
      return e(t, s),
        t
    }
    class a extends Array {
      constructor(t) {
        super(...t || []),
          function (t) {
            const e = t.__proto__;
            Object.defineProperty(t, "__proto__", {
              get: () => e,
              set(t) {
                e.__proto__ = t
              }
            })
          }(this)
      }
    }
    function o(t = []) {
      const e = [];
      return t.forEach(t => {
        Array.isArray(t) ? e.push(...o(t)) : e.push(t)
      }
      ),
        e
    }
    function l(t, e) {
      return Array.prototype.filter.call(t, e)
    }
    function c(t, e) {
      const n = i()
        , s = r();
      let o = [];
      if (!e && t instanceof a)
        return t;
      if (!t)
        return new a(o);
      if ("string" == typeof t) {
        const n = t.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let t = "div";
          0 === n.indexOf("<li") && (t = "ul"),
            0 === n.indexOf("<tr") && (t = "tbody"),
            0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (t = "tr"),
            0 === n.indexOf("<tbody") && (t = "table"),
            0 === n.indexOf("<option") && (t = "select");
          const e = s.createElement(t);
          e.innerHTML = n;
          for (let t = 0; t < e.childNodes.length; t += 1)
            o.push(e.childNodes[t])
        } else
          o = function (t, e) {
            if ("string" != typeof t)
              return [t];
            const n = []
              , r = e.querySelectorAll(t);
            for (let t = 0; t < r.length; t += 1)
              n.push(r[t]);
            return n
          }(t.trim(), e || s)
      } else if (t.nodeType || t === n || t === s)
        o.push(t);
      else if (Array.isArray(t)) {
        if (t instanceof a)
          return t;
        o = t
      }
      return new a(function (t) {
        const e = [];
        for (let n = 0; n < t.length; n += 1)
          -1 === e.indexOf(t[n]) && e.push(t[n]);
        return e
      }(o))
    }
    c.fn = a.prototype;
    const u = {
      addClass: function (...t) {
        const e = o(t.map(t => t.split(" ")));
        return this.forEach(t => {
          t.classList.add(...e)
        }
        ),
          this
      },
      removeClass: function (...t) {
        const e = o(t.map(t => t.split(" ")));
        return this.forEach(t => {
          t.classList.remove(...e)
        }
        ),
          this
      },
      hasClass: function (...t) {
        const e = o(t.map(t => t.split(" ")));
        return l(this, t => e.filter(e => t.classList.contains(e)).length > 0).length > 0
      },
      toggleClass: function (...t) {
        const e = o(t.map(t => t.split(" ")));
        this.forEach(t => {
          e.forEach(e => {
            t.classList.toggle(e)
          }
          )
        }
        )
      },
      attr: function (t, e) {
        if (1 === arguments.length && "string" == typeof t)
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length)
            this[n].setAttribute(t, e);
          else
            for (const e in t)
              this[n][e] = t[e],
                this[n].setAttribute(e, t[e]);
        return this
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].removeAttribute(t);
        return this
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transform = t;
        return this
      },
      transition: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
        return this
      },
      on: function (...t) {
        let [e, n, r, s] = t;
        function i(t) {
          const e = t.target;
          if (!e)
            return;
          const s = t.target.dom7EventData || [];
          if (s.indexOf(t) < 0 && s.unshift(t),
            c(e).is(n))
            r.apply(e, s);
          else {
            const t = c(e).parents();
            for (let e = 0; e < t.length; e += 1)
              c(t[e]).is(n) && r.apply(t[e], s)
          }
        }
        function a(t) {
          const e = t && t.target && t.target.dom7EventData || [];
          e.indexOf(t) < 0 && e.unshift(t),
            r.apply(this, e)
        }
        "function" == typeof t[1] && ([e, r, s] = t,
          n = void 0),
          s || (s = !1);
        const o = e.split(" ");
        let l;
        for (let t = 0; t < this.length; t += 1) {
          const e = this[t];
          if (n)
            for (l = 0; l < o.length; l += 1) {
              const t = o[l];
              e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                e.dom7LiveListeners[t].push({
                  listener: r,
                  proxyListener: i
                }),
                e.addEventListener(t, i, s)
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const t = o[l];
              e.dom7Listeners || (e.dom7Listeners = {}),
                e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                e.dom7Listeners[t].push({
                  listener: r,
                  proxyListener: a
                }),
                e.addEventListener(t, a, s)
            }
        }
        return this
      },
      off: function (...t) {
        let [e, n, r, s] = t;
        "function" == typeof t[1] && ([e, r, s] = t,
          n = void 0),
          s || (s = !1);
        const i = e.split(" ");
        for (let t = 0; t < i.length; t += 1) {
          const e = i[t];
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t];
            let a;
            if (!n && i.dom7Listeners ? a = i.dom7Listeners[e] : n && i.dom7LiveListeners && (a = i.dom7LiveListeners[e]),
              a && a.length)
              for (let t = a.length - 1; t >= 0; t -= 1) {
                const n = a[t];
                r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (i.removeEventListener(e, n.proxyListener, s),
                  a.splice(t, 1)) : r || (i.removeEventListener(e, n.proxyListener, s),
                    a.splice(t, 1))
              }
          }
        }
        return this
      },
      trigger: function (...t) {
        const e = i()
          , n = t[0].split(" ")
          , r = t[1];
        for (let s = 0; s < n.length; s += 1) {
          const i = n[s];
          for (let n = 0; n < this.length; n += 1) {
            const s = this[n];
            if (e.CustomEvent) {
              const n = new e.CustomEvent(i, {
                detail: r,
                bubbles: !0,
                cancelable: !0
              });
              s.dom7EventData = t.filter((t, e) => e > 0),
                s.dispatchEvent(n),
                s.dom7EventData = [],
                delete s.dom7EventData
            }
          }
        }
        return this
      },
      transitionEnd: function (t) {
        const e = this;
        return t && e.on("transitionend", (function n(r) {
          r.target === this && (t.call(this, r),
            e.off("transitionend", n))
        }
        )),
          this
      },
      outerWidth: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      },
      styles: function () {
        const t = i();
        return this[0] ? t.getComputedStyle(this[0], null) : {}
      },
      offset: function () {
        if (this.length > 0) {
          const t = i()
            , e = r()
            , n = this[0]
            , s = n.getBoundingClientRect()
            , a = e.body
            , o = n.clientTop || a.clientTop || 0
            , l = n.clientLeft || a.clientLeft || 0
            , c = n === t ? t.scrollY : n.scrollTop
            , u = n === t ? t.scrollX : n.scrollLeft;
          return {
            top: s.top + c - o,
            left: s.left + u - l
          }
        }
        return null
      },
      css: function (t, e) {
        const n = i();
        let r;
        if (1 === arguments.length) {
          if ("string" != typeof t) {
            for (r = 0; r < this.length; r += 1)
              for (const e in t)
                this[r].style[e] = t[e];
            return this
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(t)
        }
        if (2 === arguments.length && "string" == typeof t) {
          for (r = 0; r < this.length; r += 1)
            this[r].style[t] = e;
          return this
        }
        return this
      },
      each: function (t) {
        return t ? (this.forEach((e, n) => {
          t.apply(e, [e, n])
        }
        ),
          this) : this
      },
      html: function (t) {
        if (void 0 === t)
          return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1)
          this[e].innerHTML = t;
        return this
      },
      text: function (t) {
        if (void 0 === t)
          return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1)
          this[e].textContent = t;
        return this
      },
      is: function (t) {
        const e = i()
          , n = r()
          , s = this[0];
        let o, l;
        if (!s || void 0 === t)
          return !1;
        if ("string" == typeof t) {
          if (s.matches)
            return s.matches(t);
          if (s.webkitMatchesSelector)
            return s.webkitMatchesSelector(t);
          if (s.msMatchesSelector)
            return s.msMatchesSelector(t);
          for (o = c(t),
            l = 0; l < o.length; l += 1)
            if (o[l] === s)
              return !0;
          return !1
        }
        if (t === n)
          return s === n;
        if (t === e)
          return s === e;
        if (t.nodeType || t instanceof a) {
          for (o = t.nodeType ? [t] : t,
            l = 0; l < o.length; l += 1)
            if (o[l] === s)
              return !0;
          return !1
        }
        return !1
      },
      index: function () {
        let t, e = this[0];
        if (e) {
          for (t = 0; null !== (e = e.previousSibling);)
            1 === e.nodeType && (t += 1);
          return t
        }
      },
      eq: function (t) {
        if (void 0 === t)
          return this;
        const e = this.length;
        if (t > e - 1)
          return c([]);
        if (t < 0) {
          const n = e + t;
          return c(n < 0 ? [] : [this[n]])
        }
        return c([this[t]])
      },
      append: function (...t) {
        let e;
        const n = r();
        for (let r = 0; r < t.length; r += 1) {
          e = t[r];
          for (let t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              const r = n.createElement("div");
              for (r.innerHTML = e; r.firstChild;)
                this[t].appendChild(r.firstChild)
            } else if (e instanceof a)
              for (let n = 0; n < e.length; n += 1)
                this[t].appendChild(e[n]);
            else
              this[t].appendChild(e)
        }
        return this
      },
      prepend: function (t) {
        const e = r();
        let n, s;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            const r = e.createElement("div");
            for (r.innerHTML = t,
              s = r.childNodes.length - 1; s >= 0; s -= 1)
              this[n].insertBefore(r.childNodes[s], this[n].childNodes[0])
          } else if (t instanceof a)
            for (s = 0; s < t.length; s += 1)
              this[n].insertBefore(t[s], this[n].childNodes[0]);
          else
            this[n].insertBefore(t, this[n].childNodes[0]);
        return this
      },
      next: function (t) {
        return this.length > 0 ? t ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(t) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
      },
      nextAll: function (t) {
        const e = [];
        let n = this[0];
        if (!n)
          return c([]);
        for (; n.nextElementSibling;) {
          const r = n.nextElementSibling;
          t ? c(r).is(t) && e.push(r) : e.push(r),
            n = r
        }
        return c(e)
      },
      prev: function (t) {
        if (this.length > 0) {
          const e = this[0];
          return t ? e.previousElementSibling && c(e.previousElementSibling).is(t) ? c([e.previousElementSibling]) : c([]) : e.previousElementSibling ? c([e.previousElementSibling]) : c([])
        }
        return c([])
      },
      prevAll: function (t) {
        const e = [];
        let n = this[0];
        if (!n)
          return c([]);
        for (; n.previousElementSibling;) {
          const r = n.previousElementSibling;
          t ? c(r).is(t) && e.push(r) : e.push(r),
            n = r
        }
        return c(e)
      },
      parent: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode && (t ? c(this[n].parentNode).is(t) && e.push(this[n].parentNode) : e.push(this[n].parentNode));
        return c(e)
      },
      parents: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1) {
          let r = this[n].parentNode;
          for (; r;)
            t ? c(r).is(t) && e.push(r) : e.push(r),
              r = r.parentNode
        }
        return c(e)
      },
      closest: function (t) {
        let e = this;
        return void 0 === t ? c([]) : (e.is(t) || (e = e.parents(t).eq(0)),
          e)
      },
      find: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n].querySelectorAll(t);
          for (let t = 0; t < r.length; t += 1)
            e.push(r[t])
        }
        return c(e)
      },
      children: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n].children;
          for (let n = 0; n < r.length; n += 1)
            t && !c(r[n]).is(t) || e.push(r[n])
        }
        return c(e)
      },
      filter: function (t) {
        return c(l(this, t))
      },
      remove: function () {
        for (let t = 0; t < this.length; t += 1)
          this[t].parentNode && this[t].parentNode.removeChild(this[t]);
        return this
      }
    };
    function p(t, e = 0) {
      return setTimeout(t, e)
    }
    function d() {
      return Date.now()
    }
    function h(t, e = "x") {
      const n = i();
      let r, s, a;
      const o = function (t) {
        const e = i();
        let n;
        return e.getComputedStyle && (n = e.getComputedStyle(t, null)),
          !n && t.currentStyle && (n = t.currentStyle),
          n || (n = t.style),
          n
      }(t);
      return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform,
        s.split(",").length > 6 && (s = s.split(", ").map(t => t.replace(",", ".")).join(", ")),
        a = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
          r = a.toString().split(",")),
        "x" === e && (s = n.WebKitCSSMatrix ? a.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])),
        "y" === e && (s = n.WebKitCSSMatrix ? a.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])),
        s || 0
    }
    function f(t) {
      return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
    }
    function m(...t) {
      const e = Object(t[0])
        , n = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < t.length; s += 1) {
        const i = t[s];
        if (null != i && (r = i,
          !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
          const t = Object.keys(Object(i)).filter(t => n.indexOf(t) < 0);
          for (let n = 0, r = t.length; n < r; n += 1) {
            const r = t[n]
              , s = Object.getOwnPropertyDescriptor(i, r);
            void 0 !== s && s.enumerable && (f(e[r]) && f(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : m(e[r], i[r]) : !f(e[r]) && f(i[r]) ? (e[r] = {},
              i[r].__swiper__ ? e[r] = i[r] : m(e[r], i[r])) : e[r] = i[r])
          }
        }
      }
      var r;
      return e
    }
    function g(t, e, n) {
      t.style.setProperty(e, n)
    }
    function v({ swiper: t, targetPosition: e, side: n }) {
      const r = i()
        , s = -t.translate;
      let a, o = null;
      const l = t.params.speed;
      t.wrapperEl.style.scrollSnapType = "none",
        r.cancelAnimationFrame(t.cssModeFrameID);
      const c = e > s ? "next" : "prev"
        , u = (t, e) => "next" === c && t >= e || "prev" === c && t <= e
        , p = () => {
          a = (new Date).getTime(),
            null === o && (o = a);
          const i = Math.max(Math.min((a - o) / l, 1), 0)
            , c = .5 - Math.cos(i * Math.PI) / 2;
          let d = s + c * (e - s);
          if (u(d, e) && (d = e),
            t.wrapperEl.scrollTo({
              [n]: d
            }),
            u(d, e))
            return t.wrapperEl.style.overflow = "hidden",
              t.wrapperEl.style.scrollSnapType = "",
              setTimeout(() => {
                t.wrapperEl.style.overflow = "",
                  t.wrapperEl.scrollTo({
                    [n]: d
                  })
              }
              ),
              void r.cancelAnimationFrame(t.cssModeFrameID);
          t.cssModeFrameID = r.requestAnimationFrame(p)
        }
        ;
      p()
    }
    let y, b, _;
    function w() {
      return y || (y = function () {
        const t = i()
          , e = r();
        return {
          smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
          touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
          passiveListener: function () {
            let e = !1;
            try {
              const n = Object.defineProperty({}, "passive", {
                get() {
                  e = !0
                }
              });
              t.addEventListener("testPassiveListener", null, n)
            } catch (t) { }
            return e
          }(),
          gestures: "ongesturestart" in t
        }
      }()),
        y
    }
    function S(t = {}) {
      return b || (b = function ({ userAgent: t } = {}) {
        const e = w()
          , n = i()
          , r = n.navigator.platform
          , s = t || n.navigator.userAgent
          , a = {
            ios: !1,
            android: !1
          }
          , o = n.screen.width
          , l = n.screen.height
          , c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
        let u = s.match(/(iPad).*OS\s([\d_]+)/);
        const p = s.match(/(iPod)(.*OS\s([\d_]+))?/)
          , d = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
          , h = "Win32" === r;
        let f = "MacIntel" === r;
        return !u && f && e.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/),
          u || (u = [0, 1, "13_0_0"]),
          f = !1),
          c && !h && (a.os = "android",
            a.android = !0),
          (u || d || p) && (a.os = "ios",
            a.ios = !0),
          a
      }(t)),
        b
    }
    function C() {
      return _ || (_ = function () {
        const t = i();
        return {
          isSafari: function () {
            const e = t.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
          }(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        }
      }()),
        _
    }
    function x({ swiper: t, runCallbacks: e, direction: n, step: r }) {
      const { activeIndex: s, previousIndex: i } = t;
      let a = n;
      if (a || (a = s > i ? "next" : s < i ? "prev" : "reset"),
        t.emit("transition" + r),
        e && s !== i) {
        if ("reset" === a)
          return void t.emit("slideResetTransition" + r);
        t.emit("slideChangeTransition" + r),
          "next" === a ? t.emit("slideNextTransition" + r) : t.emit("slidePrevTransition" + r)
      }
    }
    function E(t) {
      const e = this
        , n = r()
        , s = i()
        , a = e.touchEventsData
        , { params: o, touches: l, enabled: u } = e;
      if (!u)
        return;
      if (e.animating && o.preventInteractionOnTransition)
        return;
      !e.animating && o.cssMode && o.loop && e.loopFix();
      let p = t;
      p.originalEvent && (p = p.originalEvent);
      let h = c(p.target);
      if ("wrapper" === o.touchEventsTarget && !h.closest(e.wrapperEl).length)
        return;
      if (a.isTouchEvent = "touchstart" === p.type,
        !a.isTouchEvent && "which" in p && 3 === p.which)
        return;
      if (!a.isTouchEvent && "button" in p && p.button > 0)
        return;
      if (a.isTouched && a.isMoved)
        return;
      o.noSwipingClass && "" !== o.noSwipingClass && p.target && p.target.shadowRoot && t.path && t.path[0] && (h = c(t.path[0]));
      const f = o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass
        , m = !(!p.target || !p.target.shadowRoot);
      if (o.noSwiping && (m ? function (t, e = this) {
        return function e(n) {
          return n && n !== r() && n !== i() ? (n.assignedSlot && (n = n.assignedSlot),
            n.closest(t) || e(n.getRootNode().host)) : null
        }(e)
      }(f, p.target) : h.closest(f)[0]))
        return void (e.allowClick = !0);
      if (o.swipeHandler && !h.closest(o.swipeHandler)[0])
        return;
      l.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
        l.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
      const g = l.currentX
        , v = l.currentY
        , y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection
        , b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (y && (g <= b || g >= s.innerWidth - b)) {
        if ("prevent" !== y)
          return;
        t.preventDefault()
      }
      if (Object.assign(a, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }),
        l.startX = g,
        l.startY = v,
        a.touchStartTime = d(),
        e.allowClick = !0,
        e.updateSize(),
        e.swipeDirection = void 0,
        o.threshold > 0 && (a.allowThresholdMove = !1),
        "touchstart" !== p.type) {
        let t = !0;
        h.is(a.focusableElements) && (t = !1),
          n.activeElement && c(n.activeElement).is(a.focusableElements) && n.activeElement !== h[0] && n.activeElement.blur();
        const r = t && e.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !r || h[0].isContentEditable || p.preventDefault()
      }
      e.emit("touchStart", p)
    }
    function k(t) {
      const e = r()
        , n = this
        , s = n.touchEventsData
        , { params: i, touches: a, rtlTranslate: o, enabled: l } = n;
      if (!l)
        return;
      let u = t;
      if (u.originalEvent && (u = u.originalEvent),
        !s.isTouched)
        return void (s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", u));
      if (s.isTouchEvent && "touchmove" !== u.type)
        return;
      const p = "touchmove" === u.type && u.targetTouches && (u.targetTouches[0] || u.changedTouches[0])
        , h = "touchmove" === u.type ? p.pageX : u.pageX
        , f = "touchmove" === u.type ? p.pageY : u.pageY;
      if (u.preventedByNestedSwiper)
        return a.startX = h,
          void (a.startY = f);
      if (!n.allowTouchMove)
        return n.allowClick = !1,
          void (s.isTouched && (Object.assign(a, {
            startX: h,
            startY: f,
            currentX: h,
            currentY: f
          }),
            s.touchStartTime = d()));
      if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (n.isVertical()) {
          if (f < a.startY && n.translate <= n.maxTranslate() || f > a.startY && n.translate >= n.minTranslate())
            return s.isTouched = !1,
              void (s.isMoved = !1)
        } else if (h < a.startX && n.translate <= n.maxTranslate() || h > a.startX && n.translate >= n.minTranslate())
          return;
      if (s.isTouchEvent && e.activeElement && u.target === e.activeElement && c(u.target).is(s.focusableElements))
        return s.isMoved = !0,
          void (n.allowClick = !1);
      if (s.allowTouchCallbacks && n.emit("touchMove", u),
        u.targetTouches && u.targetTouches.length > 1)
        return;
      a.currentX = h,
        a.currentY = f;
      const m = a.currentX - a.startX
        , g = a.currentY - a.startY;
      if (n.params.threshold && Math.sqrt(m ** 2 + g ** 2) < n.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let t;
        n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : m * m + g * g >= 25 && (t = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI,
          s.isScrolling = n.isHorizontal() ? t > i.touchAngle : 90 - t > i.touchAngle)
      }
      if (s.isScrolling && n.emit("touchMoveOpposite", u),
        void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)),
        s.isScrolling)
        return void (s.isTouched = !1);
      if (!s.startMoving)
        return;
      n.allowClick = !1,
        !i.cssMode && u.cancelable && u.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && u.stopPropagation(),
        s.isMoved || (i.loop && !i.cssMode && n.loopFix(),
          s.startTranslate = n.getTranslate(),
          n.setTransition(0),
          n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          s.allowMomentumBounce = !1,
          !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0),
          n.emit("sliderFirstMove", u)),
        n.emit("sliderMove", u),
        s.isMoved = !0;
      let v = n.isHorizontal() ? m : g;
      a.diff = v,
        v *= i.touchRatio,
        o && (v = -v),
        n.swipeDirection = v > 0 ? "prev" : "next",
        s.currentTranslate = v + s.startTranslate;
      let y = !0
        , b = i.resistanceRatio;
      if (i.touchReleaseOnEdges && (b = 0),
        v > 0 && s.currentTranslate > n.minTranslate() ? (y = !1,
          i.resistance && (s.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + v) ** b)) : v < 0 && s.currentTranslate < n.maxTranslate() && (y = !1,
            i.resistance && (s.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - v) ** b)),
        y && (u.preventedByNestedSwiper = !0),
        !n.allowSlideNext && "next" === n.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
        !n.allowSlidePrev && "prev" === n.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
        n.allowSlidePrev || n.allowSlideNext || (s.currentTranslate = s.startTranslate),
        i.threshold > 0) {
        if (!(Math.abs(v) > i.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return s.allowThresholdMove = !0,
            a.startX = a.currentX,
            a.startY = a.currentY,
            s.currentTranslate = s.startTranslate,
            void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
      }
      i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(),
        n.updateSlidesClasses()),
        n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
        n.updateProgress(s.currentTranslate),
        n.setTranslate(s.currentTranslate))
    }
    function T(t) {
      const e = this
        , n = e.touchEventsData
        , { params: r, touches: s, rtlTranslate: i, slidesGrid: a, enabled: o } = e;
      if (!o)
        return;
      let l = t;
      if (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && e.emit("touchEnd", l),
        n.allowTouchCallbacks = !1,
        !n.isTouched)
        return n.isMoved && r.grabCursor && e.setGrabCursor(!1),
          n.isMoved = !1,
          void (n.startMoving = !1);
      r.grabCursor && n.isMoved && n.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
      const c = d()
        , u = c - n.touchStartTime;
      if (e.allowClick && (e.updateClickedSlide(l),
        e.emit("tap click", l),
        u < 300 && c - n.lastClickTime < 300 && e.emit("doubleTap doubleClick", l)),
        n.lastClickTime = d(),
        p(() => {
          e.destroyed || (e.allowClick = !0)
        }
        ),
        !n.isTouched || !n.isMoved || !e.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate)
        return n.isTouched = !1,
          n.isMoved = !1,
          void (n.startMoving = !1);
      let h;
      if (n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1,
        h = r.followFinger ? i ? e.translate : -e.translate : -n.currentTranslate,
        r.cssMode)
        return;
      if (e.params.freeMode && r.freeMode.enabled)
        return void e.freeMode.onTouchEnd({
          currentPos: h
        });
      let f = 0
        , m = e.slidesSizesGrid[0];
      for (let t = 0; t < a.length; t += t < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
        const e = t < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== a[t + e] ? h >= a[t] && h < a[t + e] && (f = t,
          m = a[t + e] - a[t]) : h >= a[t] && (f = t,
            m = a[a.length - 1] - a[a.length - 2])
      }
      const g = (h - a[f]) / m
        , v = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (u > r.longSwipesMs) {
        if (!r.longSwipes)
          return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection && (g >= r.longSwipesRatio ? e.slideTo(f + v) : e.slideTo(f)),
          "prev" === e.swipeDirection && (g > 1 - r.longSwipesRatio ? e.slideTo(f + v) : e.slideTo(f))
      } else {
        if (!r.shortSwipes)
          return void e.slideTo(e.activeIndex);
        !e.navigation || l.target !== e.navigation.nextEl && l.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(f + v),
          "prev" === e.swipeDirection && e.slideTo(f)) : l.target === e.navigation.nextEl ? e.slideTo(f + v) : e.slideTo(f)
      }
    }
    function P() {
      const t = this
        , { params: e, el: n } = t;
      if (n && 0 === n.offsetWidth)
        return;
      e.breakpoints && t.setBreakpoint();
      const { allowSlideNext: r, allowSlidePrev: s, snapGrid: i } = t;
      t.allowSlideNext = !0,
        t.allowSlidePrev = !0,
        t.updateSize(),
        t.updateSlides(),
        t.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
        t.allowSlidePrev = s,
        t.allowSlideNext = r,
        t.params.watchOverflow && i !== t.snapGrid && t.checkOverflow()
    }
    function O(t) {
      const e = this;
      e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation && e.animating && (t.stopPropagation(),
          t.stopImmediatePropagation())))
    }
    function M() {
      const t = this
        , { wrapperEl: e, rtlTranslate: n, enabled: r } = t;
      if (!r)
        return;
      let s;
      t.previousTranslate = t.translate,
        t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop,
        -0 === t.translate && (t.translate = 0),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
      const i = t.maxTranslate() - t.minTranslate();
      s = 0 === i ? 0 : (t.translate - t.minTranslate()) / i,
        s !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
        t.emit("setTranslate", t.translate, !1)
    }
    Object.keys(u).forEach(t => {
      Object.defineProperty(c.fn, t, {
        value: u[t],
        writable: !0
      })
    }
    );
    let A = !1;
    function j() { }
    const I = (t, e) => {
      const n = r()
        , { params: s, touchEvents: i, el: a, wrapperEl: o, device: l, support: c } = t
        , u = !!s.nested
        , p = "on" === e ? "addEventListener" : "removeEventListener"
        , d = e;
      if (c.touch) {
        const e = !("touchstart" !== i.start || !c.passiveListener || !s.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        a[p](i.start, t.onTouchStart, e),
          a[p](i.move, t.onTouchMove, c.passiveListener ? {
            passive: !1,
            capture: u
          } : u),
          a[p](i.end, t.onTouchEnd, e),
          i.cancel && a[p](i.cancel, t.onTouchEnd, e)
      } else
        a[p](i.start, t.onTouchStart, !1),
          n[p](i.move, t.onTouchMove, u),
          n[p](i.end, t.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) && a[p]("click", t.onClick, !0),
        s.cssMode && o[p]("scroll", t.onScroll),
        s.updateOnWindowResize ? t[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : t[d]("observerUpdate", P, !0)
    }
      , D = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var L = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };
    function V(t, e) {
      return function (n = {}) {
        const r = Object.keys(n)[0]
          , s = n[r];
        "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === t[r] && (t[r] = {
          auto: !0
        }),
          r in t && "enabled" in s ? (!0 === t[r] && (t[r] = {
            enabled: !0
          }),
            "object" != typeof t[r] || "enabled" in t[r] || (t[r].enabled = !0),
            t[r] || (t[r] = {
              enabled: !1
            }),
            m(e, n)) : m(e, n)) : m(e, n)
      }
    }
    const $ = {
      eventsEmitter: {
        on(t, e, n) {
          const r = this;
          if ("function" != typeof e)
            return r;
          const s = n ? "unshift" : "push";
          return t.split(" ").forEach(t => {
            r.eventsListeners[t] || (r.eventsListeners[t] = []),
              r.eventsListeners[t][s](e)
          }
          ),
            r
        },
        once(t, e, n) {
          const r = this;
          if ("function" != typeof e)
            return r;
          function s(...n) {
            r.off(t, s),
              s.__emitterProxy && delete s.__emitterProxy,
              e.apply(r, n)
          }
          return s.__emitterProxy = e,
            r.on(t, s, n)
        },
        onAny(t, e) {
          const n = this;
          if ("function" != typeof t)
            return n;
          const r = e ? "unshift" : "push";
          return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[r](t),
            n
        },
        offAny(t) {
          const e = this;
          if (!e.eventsAnyListeners)
            return e;
          const n = e.eventsAnyListeners.indexOf(t);
          return n >= 0 && e.eventsAnyListeners.splice(n, 1),
            e
        },
        off(t, e) {
          const n = this;
          return n.eventsListeners ? (t.split(" ").forEach(t => {
            void 0 === e ? n.eventsListeners[t] = [] : n.eventsListeners[t] && n.eventsListeners[t].forEach((r, s) => {
              (r === e || r.__emitterProxy && r.__emitterProxy === e) && n.eventsListeners[t].splice(s, 1)
            }
            )
          }
          ),
            n) : n
        },
        emit(...t) {
          const e = this;
          if (!e.eventsListeners)
            return e;
          let n, r, s;
          return "string" == typeof t[0] || Array.isArray(t[0]) ? (n = t[0],
            r = t.slice(1, t.length),
            s = e) : (n = t[0].events,
              r = t[0].data,
              s = t[0].context || e),
            r.unshift(s),
            (Array.isArray(n) ? n : n.split(" ")).forEach(t => {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                e.apply(s, [t, ...r])
              }
              ),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(t => {
                  t.apply(s, r)
                }
                )
            }
            ),
            e
        }
      },
      update: {
        updateSize: function () {
          const t = this;
          let e, n;
          const r = t.$el;
          e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : r[0].clientWidth,
            n = void 0 !== t.params.height && null !== t.params.height ? t.params.height : r[0].clientHeight,
            0 === e && t.isHorizontal() || 0 === n && t.isVertical() || (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10),
              n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(t, {
                width: e,
                height: n,
                size: t.isHorizontal() ? e : n
              }))
        },
        updateSlides: function () {
          const t = this;
          function e(e) {
            return t.isHorizontal() ? e : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[e]
          }
          function n(t, n) {
            return parseFloat(t.getPropertyValue(e(n)) || 0)
          }
          const r = t.params
            , { $wrapperEl: s, size: i, rtlTranslate: a, wrongRTL: o } = t
            , l = t.virtual && r.virtual.enabled
            , c = l ? t.virtual.slides.length : t.slides.length
            , u = s.children("." + t.params.slideClass)
            , p = l ? t.virtual.slides.length : u.length;
          let d = [];
          const h = []
            , f = [];
          let m = r.slidesOffsetBefore;
          "function" == typeof m && (m = r.slidesOffsetBefore.call(t));
          let v = r.slidesOffsetAfter;
          "function" == typeof v && (v = r.slidesOffsetAfter.call(t));
          const y = t.snapGrid.length
            , b = t.slidesGrid.length;
          let _ = r.spaceBetween
            , w = -m
            , S = 0
            , C = 0;
          if (void 0 === i)
            return;
          "string" == typeof _ && _.indexOf("%") >= 0 && (_ = parseFloat(_.replace("%", "")) / 100 * i),
            t.virtualSize = -_,
            a ? u.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : u.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }),
            r.centeredSlides && r.cssMode && (g(t.wrapperEl, "--swiper-centered-offset-before", ""),
              g(t.wrapperEl, "--swiper-centered-offset-after", ""));
          const x = r.grid && r.grid.rows > 1 && t.grid;
          let E;
          x && t.grid.initSlides(p);
          const k = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(t => void 0 !== r.breakpoints[t].slidesPerView).length > 0;
          for (let s = 0; s < p; s += 1) {
            E = 0;
            const a = u.eq(s);
            if (x && t.grid.updateSlide(s, a, p, e),
              "none" !== a.css("display")) {
              if ("auto" === r.slidesPerView) {
                k && (u[s].style[e("width")] = "");
                const i = getComputedStyle(a[0])
                  , o = a[0].style.transform
                  , l = a[0].style.webkitTransform;
                if (o && (a[0].style.transform = "none"),
                  l && (a[0].style.webkitTransform = "none"),
                  r.roundLengths)
                  E = t.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const t = n(i, "width")
                    , e = n(i, "padding-left")
                    , r = n(i, "padding-right")
                    , s = n(i, "margin-left")
                    , o = n(i, "margin-right")
                    , l = i.getPropertyValue("box-sizing");
                  if (l && "border-box" === l)
                    E = t + s + o;
                  else {
                    const { clientWidth: n, offsetWidth: i } = a[0];
                    E = t + e + r + s + o + (i - n)
                  }
                }
                o && (a[0].style.transform = o),
                  l && (a[0].style.webkitTransform = l),
                  r.roundLengths && (E = Math.floor(E))
              } else
                E = (i - (r.slidesPerView - 1) * _) / r.slidesPerView,
                  r.roundLengths && (E = Math.floor(E)),
                  u[s] && (u[s].style[e("width")] = E + "px");
              u[s] && (u[s].swiperSlideSize = E),
                f.push(E),
                r.centeredSlides ? (w = w + E / 2 + S / 2 + _,
                  0 === S && 0 !== s && (w = w - i / 2 - _),
                  0 === s && (w = w - i / 2 - _),
                  Math.abs(w) < .001 && (w = 0),
                  r.roundLengths && (w = Math.floor(w)),
                  C % r.slidesPerGroup == 0 && d.push(w),
                  h.push(w)) : (r.roundLengths && (w = Math.floor(w)),
                    (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup == 0 && d.push(w),
                    h.push(w),
                    w = w + E + _),
                t.virtualSize += E + _,
                S = E,
                C += 1
            }
          }
          if (t.virtualSize = Math.max(t.virtualSize, i) + v,
            a && o && ("slide" === r.effect || "coverflow" === r.effect) && s.css({
              width: t.virtualSize + r.spaceBetween + "px"
            }),
            r.setWrapperSize && s.css({
              [e("width")]: t.virtualSize + r.spaceBetween + "px"
            }),
            x && t.grid.updateWrapperSize(E, d, e),
            !r.centeredSlides) {
            const e = [];
            for (let n = 0; n < d.length; n += 1) {
              let s = d[n];
              r.roundLengths && (s = Math.floor(s)),
                d[n] <= t.virtualSize - i && e.push(s)
            }
            d = e,
              Math.floor(t.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(t.virtualSize - i)
          }
          if (0 === d.length && (d = [0]),
            0 !== r.spaceBetween) {
            const n = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
            u.filter((t, e) => !r.cssMode || e !== u.length - 1).css({
              [n]: _ + "px"
            })
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let t = 0;
            f.forEach(e => {
              t += e + (r.spaceBetween ? r.spaceBetween : 0)
            }
            ),
              t -= r.spaceBetween;
            const e = t - i;
            d = d.map(t => t < 0 ? -m : t > e ? e + v : t)
          }
          if (r.centerInsufficientSlides) {
            let t = 0;
            if (f.forEach(e => {
              t += e + (r.spaceBetween ? r.spaceBetween : 0)
            }
            ),
              t -= r.spaceBetween,
              t < i) {
              const e = (i - t) / 2;
              d.forEach((t, n) => {
                d[n] = t - e
              }
              ),
                h.forEach((t, n) => {
                  h[n] = t + e
                }
                )
            }
          }
          if (Object.assign(t, {
            slides: u,
            snapGrid: d,
            slidesGrid: h,
            slidesSizesGrid: f
          }),
            r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            g(t.wrapperEl, "--swiper-centered-offset-before", -d[0] + "px"),
              g(t.wrapperEl, "--swiper-centered-offset-after", t.size / 2 - f[f.length - 1] / 2 + "px");
            const e = -t.snapGrid[0]
              , n = -t.slidesGrid[0];
            t.snapGrid = t.snapGrid.map(t => t + e),
              t.slidesGrid = t.slidesGrid.map(t => t + n)
          }
          p !== c && t.emit("slidesLengthChange"),
            d.length !== y && (t.params.watchOverflow && t.checkOverflow(),
              t.emit("snapGridLengthChange")),
            h.length !== b && t.emit("slidesGridLengthChange"),
            r.watchSlidesProgress && t.updateSlidesOffset()
        },
        updateAutoHeight: function (t) {
          const e = this
            , n = []
            , r = e.virtual && e.params.virtual.enabled;
          let s, i = 0;
          "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
          const a = t => r ? e.slides.filter(e => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t)[0] : e.slides.eq(t)[0];
          if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)
              e.visibleSlides.each(t => {
                n.push(t)
              }
              );
            else
              for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                const t = e.activeIndex + s;
                if (t > e.slides.length && !r)
                  break;
                n.push(a(t))
              }
          else
            n.push(a(e.activeIndex));
          for (s = 0; s < n.length; s += 1)
            if (void 0 !== n[s]) {
              const t = n[s].offsetHeight;
              i = t > i ? t : i
            }
          i && e.$wrapperEl.css("height", i + "px")
        },
        updateSlidesOffset: function () {
          const t = this
            , e = t.slides;
          for (let n = 0; n < e.length; n += 1)
            e[n].swiperSlideOffset = t.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop
        },
        updateSlidesProgress: function (t = this && this.translate || 0) {
          const e = this
            , n = e.params
            , { slides: r, rtlTranslate: s } = e;
          if (0 === r.length)
            return;
          void 0 === r[0].swiperSlideOffset && e.updateSlidesOffset();
          let i = -t;
          s && (i = t),
            r.removeClass(n.slideVisibleClass),
            e.visibleSlidesIndexes = [],
            e.visibleSlides = [];
          for (let t = 0; t < r.length; t += 1) {
            const a = r[t];
            let o = a.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (o -= r[0].swiperSlideOffset);
            const l = (i + (n.centeredSlides ? e.minTranslate() : 0) - o) / (a.swiperSlideSize + n.spaceBetween)
              , c = -(i - o)
              , u = c + e.slidesSizesGrid[t];
            (c >= 0 && c < e.size - 1 || u > 1 && u <= e.size || c <= 0 && u >= e.size) && (e.visibleSlides.push(a),
              e.visibleSlidesIndexes.push(t),
              r.eq(t).addClass(n.slideVisibleClass)),
              a.progress = s ? -l : l
          }
          e.visibleSlides = c(e.visibleSlides)
        },
        updateProgress: function (t) {
          const e = this;
          if (void 0 === t) {
            const n = e.rtlTranslate ? -1 : 1;
            t = e && e.translate && e.translate * n || 0
          }
          const n = e.params
            , r = e.maxTranslate() - e.minTranslate();
          let { progress: s, isBeginning: i, isEnd: a } = e;
          const o = i
            , l = a;
          0 === r ? (s = 0,
            i = !0,
            a = !0) : (s = (t - e.minTranslate()) / r,
              i = s <= 0,
              a = s >= 1),
            Object.assign(e, {
              progress: s,
              isBeginning: i,
              isEnd: a
            }),
            (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && e.updateSlidesProgress(t),
            i && !o && e.emit("reachBeginning toEdge"),
            a && !l && e.emit("reachEnd toEdge"),
            (o && !i || l && !a) && e.emit("fromEdge"),
            e.emit("progress", s)
        },
        updateSlidesClasses: function () {
          const t = this
            , { slides: e, params: n, $wrapperEl: r, activeIndex: s, realIndex: i } = t
            , a = t.virtual && n.virtual.enabled;
          let o;
          e.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),
            o = a ? t.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s),
            o.addClass(n.slideActiveClass),
            n.loop && (o.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${i}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${i}"]`).addClass(n.slideDuplicateActiveClass));
          let l = o.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
          n.loop && 0 === l.length && (l = e.eq(0),
            l.addClass(n.slideNextClass));
          let c = o.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
          n.loop && 0 === c.length && (c = e.eq(-1),
            c.addClass(n.slidePrevClass)),
            n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),
            t.emitSlidesClasses()
        },
        updateActiveIndex: function (t) {
          const e = this
            , n = e.rtlTranslate ? e.translate : -e.translate
            , { slidesGrid: r, snapGrid: s, params: i, activeIndex: a, realIndex: o, snapIndex: l } = e;
          let c, u = t;
          if (void 0 === u) {
            for (let t = 0; t < r.length; t += 1)
              void 0 !== r[t + 1] ? n >= r[t] && n < r[t + 1] - (r[t + 1] - r[t]) / 2 ? u = t : n >= r[t] && n < r[t + 1] && (u = t + 1) : n >= r[t] && (u = t);
            i.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
          }
          if (s.indexOf(n) >= 0)
            c = s.indexOf(n);
          else {
            const t = Math.min(i.slidesPerGroupSkip, u);
            c = t + Math.floor((u - t) / i.slidesPerGroup)
          }
          if (c >= s.length && (c = s.length - 1),
            u === a)
            return void (c !== l && (e.snapIndex = c,
              e.emit("snapIndexChange")));
          const p = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
          Object.assign(e, {
            snapIndex: c,
            realIndex: p,
            previousIndex: a,
            activeIndex: u
          }),
            e.emit("activeIndexChange"),
            e.emit("snapIndexChange"),
            o !== p && e.emit("realIndexChange"),
            (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
        },
        updateClickedSlide: function (t) {
          const e = this
            , n = e.params
            , r = c(t.target).closest("." + n.slideClass)[0];
          let s, i = !1;
          if (r)
            for (let t = 0; t < e.slides.length; t += 1)
              if (e.slides[t] === r) {
                i = !0,
                  s = t;
                break
              }
          if (!r || !i)
            return e.clickedSlide = void 0,
              void (e.clickedIndex = void 0);
          e.clickedSlide = r,
            e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(c(r).attr("data-swiper-slide-index"), 10) : e.clickedIndex = s,
            n.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
        }
      },
      translate: {
        getTranslate: function (t = (this.isHorizontal() ? "x" : "y")) {
          const { params: e, rtlTranslate: n, translate: r, $wrapperEl: s } = this;
          if (e.virtualTranslate)
            return n ? -r : r;
          if (e.cssMode)
            return r;
          let i = h(s[0], t);
          return n && (i = -i),
            i || 0
        },
        setTranslate: function (t, e) {
          const n = this
            , { rtlTranslate: r, params: s, $wrapperEl: i, wrapperEl: a, progress: o } = n;
          let l, c = 0, u = 0;
          n.isHorizontal() ? c = r ? -t : t : u = t,
            s.roundLengths && (c = Math.floor(c),
              u = Math.floor(u)),
            s.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -u : s.virtualTranslate || i.transform(`translate3d(${c}px, ${u}px, 0px)`),
            n.previousTranslate = n.translate,
            n.translate = n.isHorizontal() ? c : u;
          const p = n.maxTranslate() - n.minTranslate();
          l = 0 === p ? 0 : (t - n.minTranslate()) / p,
            l !== o && n.updateProgress(t),
            n.emit("setTranslate", n.translate, e)
        },
        minTranslate: function () {
          return -this.snapGrid[0]
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function (t = 0, e = this.params.speed, n = !0, r = !0, s) {
          const i = this
            , { params: a, wrapperEl: o } = i;
          if (i.animating && a.preventInteractionOnTransition)
            return !1;
          const l = i.minTranslate()
            , c = i.maxTranslate();
          let u;
          if (u = r && t > l ? l : r && t < c ? c : t,
            i.updateProgress(u),
            a.cssMode) {
            const t = i.isHorizontal();
            if (0 === e)
              o[t ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!i.support.smoothScroll)
                return v({
                  swiper: i,
                  targetPosition: -u,
                  side: t ? "left" : "top"
                }),
                  !0;
              o.scrollTo({
                [t ? "left" : "top"]: -u,
                behavior: "smooth"
              })
            }
            return !0
          }
          return 0 === e ? (i.setTransition(0),
            i.setTranslate(u),
            n && (i.emit("beforeTransitionStart", e, s),
              i.emit("transitionEnd"))) : (i.setTransition(e),
                i.setTranslate(u),
                n && (i.emit("beforeTransitionStart", e, s),
                  i.emit("transitionStart")),
                i.animating || (i.animating = !0,
                  i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function (t) {
                    i && !i.destroyed && t.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
                      i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd),
                      i.onTranslateToWrapperTransitionEnd = null,
                      delete i.onTranslateToWrapperTransitionEnd,
                      n && i.emit("transitionEnd"))
                  }
                  ),
                  i.$wrapperEl[0].addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
                  i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd))),
            !0
        }
      },
      transition: {
        setTransition: function (t, e) {
          const n = this;
          n.params.cssMode || n.$wrapperEl.transition(t),
            n.emit("setTransition", t, e)
        },
        transitionStart: function (t = !0, e) {
          const n = this
            , { params: r } = n;
          r.cssMode || (r.autoHeight && n.updateAutoHeight(),
            x({
              swiper: n,
              runCallbacks: t,
              direction: e,
              step: "Start"
            }))
        },
        transitionEnd: function (t = !0, e) {
          const n = this
            , { params: r } = n;
          n.animating = !1,
            r.cssMode || (n.setTransition(0),
              x({
                swiper: n,
                runCallbacks: t,
                direction: e,
                step: "End"
              }))
        }
      },
      slide: {
        slideTo: function (t = 0, e = this.params.speed, n = !0, r, s) {
          if ("number" != typeof t && "string" != typeof t)
            throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
          if ("string" == typeof t) {
            const e = parseInt(t, 10);
            if (!isFinite(e))
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
            t = e
          }
          const i = this;
          let a = t;
          a < 0 && (a = 0);
          const { params: o, snapGrid: l, slidesGrid: c, previousIndex: u, activeIndex: p, rtlTranslate: d, wrapperEl: h, enabled: f } = i;
          if (i.animating && o.preventInteractionOnTransition || !f && !r && !s)
            return !1;
          const m = Math.min(i.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / i.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (p || o.initialSlide || 0) === (u || 0) && n && i.emit("beforeSlideChangeStart");
          const y = -l[g];
          if (i.updateProgress(y),
            o.normalizeSlideIndex)
            for (let t = 0; t < c.length; t += 1) {
              const e = -Math.floor(100 * y)
                , n = Math.floor(100 * c[t])
                , r = Math.floor(100 * c[t + 1]);
              void 0 !== c[t + 1] ? e >= n && e < r - (r - n) / 2 ? a = t : e >= n && e < r && (a = t + 1) : e >= n && (a = t)
            }
          if (i.initialized && a !== p) {
            if (!i.allowSlideNext && y < i.translate && y < i.minTranslate())
              return !1;
            if (!i.allowSlidePrev && y > i.translate && y > i.maxTranslate() && (p || 0) !== a)
              return !1
          }
          let b;
          if (b = a > p ? "next" : a < p ? "prev" : "reset",
            d && -y === i.translate || !d && y === i.translate)
            return i.updateActiveIndex(a),
              o.autoHeight && i.updateAutoHeight(),
              i.updateSlidesClasses(),
              "slide" !== o.effect && i.setTranslate(y),
              "reset" !== b && (i.transitionStart(n, b),
                i.transitionEnd(n, b)),
              !1;
          if (o.cssMode) {
            const t = i.isHorizontal()
              , n = d ? y : -y;
            if (0 === e) {
              const e = i.virtual && i.params.virtual.enabled;
              e && (i.wrapperEl.style.scrollSnapType = "none",
                i._immediateVirtual = !0),
                h[t ? "scrollLeft" : "scrollTop"] = n,
                e && requestAnimationFrame(() => {
                  i.wrapperEl.style.scrollSnapType = "",
                    i._swiperImmediateVirtual = !1
                }
                )
            } else {
              if (!i.support.smoothScroll)
                return v({
                  swiper: i,
                  targetPosition: n,
                  side: t ? "left" : "top"
                }),
                  !0;
              h.scrollTo({
                [t ? "left" : "top"]: n,
                behavior: "smooth"
              })
            }
            return !0
          }
          return 0 === e ? (i.setTransition(0),
            i.setTranslate(y),
            i.updateActiveIndex(a),
            i.updateSlidesClasses(),
            i.emit("beforeTransitionStart", e, r),
            i.transitionStart(n, b),
            i.transitionEnd(n, b)) : (i.setTransition(e),
              i.setTranslate(y),
              i.updateActiveIndex(a),
              i.updateSlidesClasses(),
              i.emit("beforeTransitionStart", e, r),
              i.transitionStart(n, b),
              i.animating || (i.animating = !0,
                i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function (t) {
                  i && !i.destroyed && t.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                    i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd),
                    i.onSlideToWrapperTransitionEnd = null,
                    delete i.onSlideToWrapperTransitionEnd,
                    i.transitionEnd(n, b))
                }
                ),
                i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd))),
            !0
        },
        slideToLoop: function (t = 0, e = this.params.speed, n = !0, r) {
          const s = this;
          let i = t;
          return s.params.loop && (i += s.loopedSlides),
            s.slideTo(i, e, n, r)
        },
        slideNext: function (t = this.params.speed, e = !0, n) {
          const r = this
            , { animating: s, enabled: i, params: a } = r;
          if (!i)
            return r;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (s && a.loopPreventsSlide)
              return !1;
            r.loopFix(),
              r._clientLeft = r.$wrapperEl[0].clientLeft
          }
          return r.slideTo(r.activeIndex + l, t, e, n)
        },
        slidePrev: function (t = this.params.speed, e = !0, n) {
          const r = this
            , { params: s, animating: i, snapGrid: a, slidesGrid: o, rtlTranslate: l, enabled: c } = r;
          if (!c)
            return r;
          if (s.loop) {
            if (i && s.loopPreventsSlide)
              return !1;
            r.loopFix(),
              r._clientLeft = r.$wrapperEl[0].clientLeft
          }
          function u(t) {
            return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
          }
          const p = u(l ? r.translate : -r.translate)
            , d = a.map(t => u(t));
          let h = a[d.indexOf(p) - 1];
          if (void 0 === h && s.cssMode) {
            let t;
            a.forEach((e, n) => {
              p >= e && (t = n)
            }
            ),
              void 0 !== t && (h = a[t > 0 ? t - 1 : t])
          }
          let f = 0;
          return void 0 !== h && (f = o.indexOf(h),
            f < 0 && (f = r.activeIndex - 1),
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - r.slidesPerViewDynamic("previous", !0) + 1,
              f = Math.max(f, 0))),
            r.slideTo(f, t, e, n)
        },
        slideReset: function (t = this.params.speed, e = !0, n) {
          return this.slideTo(this.activeIndex, t, e, n)
        },
        slideToClosest: function (t = this.params.speed, e = !0, n, r = .5) {
          const s = this;
          let i = s.activeIndex;
          const a = Math.min(s.params.slidesPerGroupSkip, i)
            , o = a + Math.floor((i - a) / s.params.slidesPerGroup)
            , l = s.rtlTranslate ? s.translate : -s.translate;
          if (l >= s.snapGrid[o]) {
            const t = s.snapGrid[o];
            l - t > (s.snapGrid[o + 1] - t) * r && (i += s.params.slidesPerGroup)
          } else {
            const t = s.snapGrid[o - 1];
            l - t <= (s.snapGrid[o] - t) * r && (i -= s.params.slidesPerGroup)
          }
          return i = Math.max(i, 0),
            i = Math.min(i, s.slidesGrid.length - 1),
            s.slideTo(i, t, e, n)
        },
        slideToClickedSlide: function () {
          const t = this
            , { params: e, $wrapperEl: n } = t
            , r = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
          let s, i = t.clickedIndex;
          if (e.loop) {
            if (t.animating)
              return;
            s = parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10),
              e.centeredSlides ? i < t.loopedSlides - r / 2 || i > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                i = n.children(`.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),
                p(() => {
                  t.slideTo(i)
                }
                )) : t.slideTo(i) : i > t.slides.length - r ? (t.loopFix(),
                  i = n.children(`.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),
                  p(() => {
                    t.slideTo(i)
                  }
                  )) : t.slideTo(i)
          } else
            t.slideTo(i)
        }
      },
      loop: {
        loopCreate: function () {
          const t = this
            , e = r()
            , { params: n, $wrapperEl: s } = t;
          s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let i = s.children("." + n.slideClass);
          if (n.loopFillGroupWithBlank) {
            const t = n.slidesPerGroup - i.length % n.slidesPerGroup;
            if (t !== n.slidesPerGroup) {
              for (let r = 0; r < t; r += 1) {
                const t = c(e.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                s.append(t)
              }
              i = s.children("." + n.slideClass)
            }
          }
          "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length),
            t.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)),
            t.loopedSlides += n.loopAdditionalSlides,
            t.loopedSlides > i.length && (t.loopedSlides = i.length);
          const a = []
            , o = [];
          i.each((e, n) => {
            const r = c(e);
            n < t.loopedSlides && o.push(e),
              n < i.length && n >= i.length - t.loopedSlides && a.push(e),
              r.attr("data-swiper-slide-index", n)
          }
          );
          for (let t = 0; t < o.length; t += 1)
            s.append(c(o[t].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let t = a.length - 1; t >= 0; t -= 1)
            s.prepend(c(a[t].cloneNode(!0)).addClass(n.slideDuplicateClass))
        },
        loopFix: function () {
          const t = this;
          t.emit("beforeLoopFix");
          const { activeIndex: e, slides: n, loopedSlides: r, allowSlidePrev: s, allowSlideNext: i, snapGrid: a, rtlTranslate: o } = t;
          let l;
          t.allowSlidePrev = !0,
            t.allowSlideNext = !0;
          const c = -a[e] - t.getTranslate();
          e < r ? (l = n.length - 3 * r + e,
            l += r,
            t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((o ? -t.translate : t.translate) - c)) : e >= n.length - r && (l = -n.length + e + r,
              l += r,
              t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((o ? -t.translate : t.translate) - c)),
            t.allowSlidePrev = s,
            t.allowSlideNext = i,
            t.emit("loopFix")
        },
        loopDestroy: function () {
          const { $wrapperEl: t, params: e, slides: n } = this;
          t.children(`.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`).remove(),
            n.removeAttr("data-swiper-slide-index")
        }
      },
      grabCursor: {
        setGrabCursor: function (t) {
          const e = this;
          if (e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
            return;
          const n = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
          n.style.cursor = "move",
            n.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab",
            n.style.cursor = t ? "-moz-grabbin" : "-moz-grab",
            n.style.cursor = t ? "grabbing" : "grab"
        },
        unsetGrabCursor: function () {
          const t = this;
          t.support.touch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
        }
      },
      events: {
        attachEvents: function () {
          const t = this
            , e = r()
            , { params: n, support: s } = t;
          t.onTouchStart = E.bind(t),
            t.onTouchMove = k.bind(t),
            t.onTouchEnd = T.bind(t),
            n.cssMode && (t.onScroll = M.bind(t)),
            t.onClick = O.bind(t),
            s.touch && !A && (e.addEventListener("touchstart", j),
              A = !0),
            I(t, "on")
        },
        detachEvents: function () {
          I(this, "off")
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          const t = this
            , { activeIndex: e, initialized: n, loopedSlides: r = 0, params: s, $el: i } = t
            , a = s.breakpoints;
          if (!a || a && 0 === Object.keys(a).length)
            return;
          const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
          if (!o || t.currentBreakpoint === o)
            return;
          const l = (o in a ? a[o] : void 0) || t.originalParams
            , c = D(t, s)
            , u = D(t, l)
            , p = s.enabled;
          c && !u ? (i.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`),
            t.emitContainerClasses()) : !c && u && (i.addClass(s.containerModifierClass + "grid"),
              (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && i.addClass(s.containerModifierClass + "grid-column"),
              t.emitContainerClasses());
          const d = l.direction && l.direction !== s.direction
            , h = s.loop && (l.slidesPerView !== s.slidesPerView || d);
          d && n && t.changeDirection(),
            m(t.params, l);
          const f = t.params.enabled;
          Object.assign(t, {
            allowTouchMove: t.params.allowTouchMove,
            allowSlideNext: t.params.allowSlideNext,
            allowSlidePrev: t.params.allowSlidePrev
          }),
            p && !f ? t.disable() : !p && f && t.enable(),
            t.currentBreakpoint = o,
            t.emit("_beforeBreakpoint", l),
            h && n && (t.loopDestroy(),
              t.loopCreate(),
              t.updateSlides(),
              t.slideTo(e - r + t.loopedSlides, 0, !1)),
            t.emit("breakpoint", l)
        },
        getBreakpoint: function (t, e = "window", n) {
          if (!t || "container" === e && !n)
            return;
          let r = !1;
          const s = i()
            , a = "window" === e ? s.innerHeight : n.clientHeight
            , o = Object.keys(t).map(t => {
              if ("string" == typeof t && 0 === t.indexOf("@")) {
                const e = parseFloat(t.substr(1));
                return {
                  value: a * e,
                  point: t
                }
              }
              return {
                value: t,
                point: t
              }
            }
            );
          o.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
          for (let t = 0; t < o.length; t += 1) {
            const { point: i, value: a } = o[t];
            "window" === e ? s.matchMedia(`(min-width: ${a}px)`).matches && (r = i) : a <= n.clientWidth && (r = i)
          }
          return r || "max"
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          const t = this
            , { isLocked: e, params: n } = t
            , { slidesOffsetBefore: r } = n;
          if (r) {
            const e = t.slides.length - 1
              , n = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * r;
            t.isLocked = t.size > n
          } else
            t.isLocked = 1 === t.snapGrid.length;
          !0 === n.allowSlideNext && (t.allowSlideNext = !t.isLocked),
            !0 === n.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
            e && e !== t.isLocked && (t.isEnd = !1),
            e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
        }
      },
      classes: {
        addClasses: function () {
          const t = this
            , { classNames: e, params: n, rtl: r, $el: s, device: i, support: a } = t
            , o = function (t, e) {
              const n = [];
              return t.forEach(t => {
                "object" == typeof t ? Object.keys(t).forEach(r => {
                  t[r] && n.push(e + r)
                }
                ) : "string" == typeof t && n.push(e + t)
              }
              ),
                n
            }(["initialized", n.direction, {
              "pointer-events": !a.touch
            }, {
                "free-mode": t.params.freeMode && n.freeMode.enabled
              }, {
                autoheight: n.autoHeight
              }, {
                rtl: r
              }, {
                grid: n.grid && n.grid.rows > 1
              }, {
                "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
              }, {
                android: i.android
              }, {
                ios: i.ios
              }, {
                "css-mode": n.cssMode
              }, {
                centered: n.cssMode && n.centeredSlides
              }], n.containerModifierClass);
          e.push(...o),
            s.addClass([...e].join(" ")),
            t.emitContainerClasses()
        },
        removeClasses: function () {
          const { $el: t, classNames: e } = this;
          t.removeClass(e.join(" ")),
            this.emitContainerClasses()
        }
      },
      images: {
        loadImage: function (t, e, n, r, s, a) {
          const o = i();
          let l;
          function u() {
            a && a()
          }
          c(t).parent("picture")[0] || t.complete && s ? u() : e ? (l = new o.Image,
            l.onload = u,
            l.onerror = u,
            r && (l.sizes = r),
            n && (l.srcset = n),
            e && (l.src = e)) : u()
        },
        preloadImages: function () {
          const t = this;
          function e() {
            null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
              t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady")))
          }
          t.imagesToLoad = t.$el.find("img");
          for (let n = 0; n < t.imagesToLoad.length; n += 1) {
            const r = t.imagesToLoad[n];
            t.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, e)
          }
        }
      }
    }
      , N = {};
    class H {
      constructor(...t) {
        let e, n;
        if (1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? n = t[0] : [e, n] = t,
          n || (n = {}),
          n = m({}, n),
          e && !n.el && (n.el = e),
          n.el && c(n.el).length > 1) {
          const t = [];
          return c(n.el).each(e => {
            const r = m({}, n, {
              el: e
            });
            t.push(new H(r))
          }
          ),
            t
        }
        const r = this;
        r.__swiper__ = !0,
          r.support = w(),
          r.device = S({
            userAgent: n.userAgent
          }),
          r.browser = C(),
          r.eventsListeners = {},
          r.eventsAnyListeners = [],
          r.modules = [...r.__modules__],
          n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
        const s = {};
        r.modules.forEach(t => {
          t({
            swiper: r,
            extendParams: V(n, s),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r)
          })
        }
        );
        const i = m({}, L, s);
        return r.params = m({}, i, N, n),
          r.originalParams = m({}, r.params),
          r.passedParams = m({}, n),
          r.params && r.params.on && Object.keys(r.params.on).forEach(t => {
            r.on(t, r.params.on[t])
          }
          ),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          r.$ = c,
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: c(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: function () {
              const t = ["touchstart", "touchmove", "touchend", "touchcancel"]
                , e = ["pointerdown", "pointermove", "pointerup"];
              return r.touchEventsTouch = {
                start: t[0],
                move: t[1],
                end: t[2],
                cancel: t[3]
              },
                r.touchEventsDesktop = {
                  start: e[0],
                  move: e[1],
                  end: e[2]
                },
                r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: d(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
      }
      enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
          t.params.grabCursor && t.setGrabCursor(),
          t.emit("enable"))
      }
      disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
          t.params.grabCursor && t.unsetGrabCursor(),
          t.emit("disable"))
      }
      setProgress(t, e) {
        const n = this;
        t = Math.min(Math.max(t, 0), 1);
        const r = n.minTranslate()
          , s = (n.maxTranslate() - r) * t + r;
        n.translateTo(s, void 0 === e ? 0 : e),
          n.updateActiveIndex(),
          n.updateSlidesClasses()
      }
      emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
          return;
        const e = t.el.className.split(" ").filter(e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
        t.emit("_containerClasses", e.join(" "))
      }
      getSlideClasses(t) {
        const e = this;
        return t.className.split(" ").filter(t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass)).join(" ")
      }
      emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
          return;
        const e = [];
        t.slides.each(n => {
          const r = t.getSlideClasses(n);
          e.push({
            slideEl: n,
            classNames: r
          }),
            t.emit("_slideClass", n, r)
        }
        ),
          t.emit("_slideClasses", e)
      }
      slidesPerViewDynamic(t = "current", e = !1) {
        const { params: n, slides: r, slidesGrid: s, slidesSizesGrid: i, size: a, activeIndex: o } = this;
        let l = 1;
        if (n.centeredSlides) {
          let t, e = r[o].swiperSlideSize;
          for (let n = o + 1; n < r.length; n += 1)
            r[n] && !t && (e += r[n].swiperSlideSize,
              l += 1,
              e > a && (t = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            r[n] && !t && (e += r[n].swiperSlideSize,
              l += 1,
              e > a && (t = !0))
        } else if ("current" === t)
          for (let t = o + 1; t < r.length; t += 1)
            (e ? s[t] + i[t] - s[o] < a : s[t] - s[o] < a) && (l += 1);
        else
          for (let t = o - 1; t >= 0; t -= 1)
            s[o] - s[t] < a && (l += 1);
        return l
      }
      update() {
        const t = this;
        if (!t || t.destroyed)
          return;
        const { snapGrid: e, params: n } = t;
        function r() {
          const e = t.rtlTranslate ? -1 * t.translate : t.translate
            , n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(n),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        let s;
        n.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.params.freeMode && t.params.freeMode.enabled ? (r(),
            t.params.autoHeight && t.updateAutoHeight()) : (s = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
              s || r()),
          n.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
          t.emit("update")
      }
      changeDirection(t, e = !0) {
        const n = this
          , r = n.params.direction;
        return t || (t = "horizontal" === r ? "vertical" : "horizontal"),
          t === r || "horizontal" !== t && "vertical" !== t || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${t}`),
            n.emitContainerClasses(),
            n.params.direction = t,
            n.slides.each(e => {
              "vertical" === t ? e.style.width = "" : e.style.height = ""
            }
            ),
            n.emit("changeDirection"),
            e && n.update()),
          n
      }
      mount(t) {
        const e = this;
        if (e.mounted)
          return !0;
        const n = c(t || e.params.el);
        if (!(t = n[0]))
          return !1;
        t.swiper = e;
        const s = () => "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
        let i = (() => {
          if (t && t.shadowRoot && t.shadowRoot.querySelector) {
            const e = c(t.shadowRoot.querySelector(s()));
            return e.children = t => n.children(t),
              e
          }
          return n.children(s())
        }
        )();
        if (0 === i.length && e.params.createElements) {
          const t = r().createElement("div");
          i = c(t),
            t.className = e.params.wrapperClass,
            n.append(t),
            n.children("." + e.params.slideClass).each(t => {
              i.append(t)
            }
            )
        }
        return Object.assign(e, {
          $el: n,
          el: t,
          $wrapperEl: i,
          wrapperEl: i[0],
          mounted: !0,
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === i.css("display")
        }),
          !0
      }
      init(t) {
        const e = this;
        return e.initialized || !1 === e.mount(t) || (e.emit("beforeInit"),
          e.params.breakpoints && e.setBreakpoint(),
          e.addClasses(),
          e.params.loop && e.loopCreate(),
          e.updateSize(),
          e.updateSlides(),
          e.params.watchOverflow && e.checkOverflow(),
          e.params.grabCursor && e.enabled && e.setGrabCursor(),
          e.params.preloadImages && e.preloadImages(),
          e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0),
          e.attachEvents(),
          e.initialized = !0,
          e.emit("init"),
          e.emit("afterInit")),
          e
      }
      destroy(t = !0, e = !0) {
        const n = this
          , { params: r, $el: s, $wrapperEl: i, slides: a } = n;
        return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"),
          n.initialized = !1,
          n.detachEvents(),
          r.loop && n.loopDestroy(),
          e && (n.removeClasses(),
            s.removeAttr("style"),
            i.removeAttr("style"),
            a && a.length && a.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach(t => {
            n.off(t)
          }
          ),
          !1 !== t && (n.$el[0].swiper = null,
            function (t) {
              const e = t;
              Object.keys(e).forEach(t => {
                try {
                  e[t] = null
                } catch (t) { }
                try {
                  delete e[t]
                } catch (t) { }
              }
              )
            }(n)),
          n.destroyed = !0),
          null
      }
      static extendDefaults(t) {
        m(N, t)
      }
      static get extendedDefaults() {
        return N
      }
      static get defaults() {
        return L
      }
      static installModule(t) {
        H.prototype.__modules__ || (H.prototype.__modules__ = []);
        const e = H.prototype.__modules__;
        "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
      }
      static use(t) {
        return Array.isArray(t) ? (t.forEach(t => H.installModule(t)),
          H) : (H.installModule(t),
            H)
      }
    }
    function R(t, e, n, s) {
      const i = r();
      return t.params.createElements && Object.keys(s).forEach(r => {
        if (!n[r] && !0 === n.auto) {
          let a = t.$el.children("." + s[r])[0];
          a || (a = i.createElement("div"),
            a.className = s[r],
            t.$el.append(a)),
            n[r] = a,
            e[r] = a
        }
      }
      ),
        n
    }
    function z(t = "") {
      return "." + t.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
    }
    function q(t) {
      const e = this
        , { $wrapperEl: n, params: r } = e;
      if (r.loop && e.loopDestroy(),
        "object" == typeof t && "length" in t)
        for (let e = 0; e < t.length; e += 1)
          t[e] && n.append(t[e]);
      else
        n.append(t);
      r.loop && e.loopCreate(),
        r.observer || e.update()
    }
    function B(t) {
      const e = this
        , { params: n, $wrapperEl: r, activeIndex: s } = e;
      n.loop && e.loopDestroy();
      let i = s + 1;
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1)
          t[e] && r.prepend(t[e]);
        i = s + t.length
      } else
        r.prepend(t);
      n.loop && e.loopCreate(),
        n.observer || e.update(),
        e.slideTo(i, 0, !1)
    }
    function F(t, e) {
      const n = this
        , { $wrapperEl: r, params: s, activeIndex: i } = n;
      let a = i;
      s.loop && (a -= n.loopedSlides,
        n.loopDestroy(),
        n.slides = r.children("." + s.slideClass));
      const o = n.slides.length;
      if (t <= 0)
        return void n.prependSlide(e);
      if (t >= o)
        return void n.appendSlide(e);
      let l = a > t ? a + 1 : a;
      const c = [];
      for (let e = o - 1; e >= t; e -= 1) {
        const t = n.slides.eq(e);
        t.remove(),
          c.unshift(t)
      }
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1)
          e[t] && r.append(e[t]);
        l = a > t ? a + e.length : a
      } else
        r.append(e);
      for (let t = 0; t < c.length; t += 1)
        r.append(c[t]);
      s.loop && n.loopCreate(),
        s.observer || n.update(),
        s.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
    }
    function W(t) {
      const e = this
        , { params: n, $wrapperEl: r, activeIndex: s } = e;
      let i = s;
      n.loop && (i -= e.loopedSlides,
        e.loopDestroy(),
        e.slides = r.children("." + n.slideClass));
      let a, o = i;
      if ("object" == typeof t && "length" in t) {
        for (let n = 0; n < t.length; n += 1)
          a = t[n],
            e.slides[a] && e.slides.eq(a).remove(),
            a < o && (o -= 1);
        o = Math.max(o, 0)
      } else
        a = t,
          e.slides[a] && e.slides.eq(a).remove(),
          a < o && (o -= 1),
          o = Math.max(o, 0);
      n.loop && e.loopCreate(),
        n.observer || e.update(),
        n.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1)
    }
    function U() {
      const t = this
        , e = [];
      for (let n = 0; n < t.slides.length; n += 1)
        e.push(n);
      t.removeSlide(e)
    }
    function G(t) {
      const { effect: e, swiper: n, on: r, setTranslate: s, setTransition: i, overwriteParams: a, perspective: o } = t;
      r("beforeInit", () => {
        if (n.params.effect !== e)
          return;
        n.classNames.push(`${n.params.containerModifierClass}${e}`),
          o && o() && n.classNames.push(n.params.containerModifierClass + "3d");
        const t = a ? a() : {};
        Object.assign(n.params, t),
          Object.assign(n.originalParams, t)
      }
      ),
        r("setTranslate", () => {
          n.params.effect === e && s()
        }
        ),
        r("setTransition", (t, r) => {
          n.params.effect === e && i(r)
        }
        )
    }
    function Y(t, e) {
      return t.transformEl ? e.find(t.transformEl).css({
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden"
      }) : e
    }
    function X({ swiper: t, duration: e, transformEl: n, allSlides: r }) {
      const { slides: s, activeIndex: i, $wrapperEl: a } = t;
      if (t.params.virtualTranslate && 0 !== e) {
        let e, o = !1;
        e = r ? n ? s.find(n) : s : n ? s.eq(i).find(n) : s.eq(i),
          e.transitionEnd(() => {
            if (o)
              return;
            if (!t || t.destroyed)
              return;
            o = !0,
              t.animating = !1;
            const e = ["webkitTransitionEnd", "transitionend"];
            for (let t = 0; t < e.length; t += 1)
              a.trigger(e[t])
          }
          )
      }
    }
    function K(t, e, n) {
      const r = "swiper-slide-shadow" + (n ? "-" + n : "")
        , s = t.transformEl ? e.find(t.transformEl) : e;
      let i = s.children("." + r);
      return i.length || (i = c(`<div class="swiper-slide-shadow${n ? "-" + n : ""}"></div>`),
        s.append(i)),
        i
    }
    Object.keys($).forEach(t => {
      Object.keys($[t]).forEach(e => {
        H.prototype[e] = $[t][e]
      }
      )
    }
    ),
      H.use([function ({ swiper: t, on: e, emit: n }) {
        const r = i();
        let s = null;
        const a = () => {
          t && !t.destroyed && t.initialized && (n("beforeResize"),
            n("resize"))
        }
          , o = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          }
          ;
        e("init", () => {
          t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver(e => {
            const { width: n, height: r } = t;
            let s = n
              , i = r;
            e.forEach(({ contentBoxSize: e, contentRect: n, target: r }) => {
              r && r !== t.el || (s = n ? n.width : (e[0] || e).inlineSize,
                i = n ? n.height : (e[0] || e).blockSize)
            }
            ),
              s === n && i === r || a()
          }
          ),
            s.observe(t.el)) : (r.addEventListener("resize", a),
              r.addEventListener("orientationchange", o))
        }
        ),
          e("destroy", () => {
            s && s.unobserve && t.el && (s.unobserve(t.el),
              s = null),
              r.removeEventListener("resize", a),
              r.removeEventListener("orientationchange", o)
          }
          )
      }
        , function ({ swiper: t, extendParams: e, on: n, emit: r }) {
          const s = []
            , a = i()
            , o = (t, e = {}) => {
              const n = new (a.MutationObserver || a.WebkitMutationObserver)(t => {
                if (1 === t.length)
                  return void r("observerUpdate", t[0]);
                const e = function () {
                  r("observerUpdate", t[0])
                };
                a.requestAnimationFrame ? a.requestAnimationFrame(e) : a.setTimeout(e, 0)
              }
              );
              n.observe(t, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData
              }),
                s.push(n)
            }
            ;
          e({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
          }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1)
                    o(e[t])
                }
                o(t.$el[0], {
                  childList: t.params.observeSlideChildren
                }),
                  o(t.$wrapperEl[0], {
                    attributes: !1
                  })
              }
            }
            ),
            n("destroy", () => {
              s.forEach(t => {
                t.disconnect()
              }
              ),
                s.splice(0, s.length)
            }
            )
        }
      ]);
    const Q = [function ({ swiper: t, extendParams: e, on: n }) {
      let r;
      function s(e, n) {
        const r = t.params.virtual;
        if (r.cache && t.virtual.cache[n])
          return t.virtual.cache[n];
        const s = r.renderSlide ? c(r.renderSlide.call(t, e, n)) : c(`<div class="${t.params.slideClass}" data-swiper-slide-index="${n}">${e}</div>`);
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", n),
          r.cache && (t.virtual.cache[n] = s),
          s
      }
      function i(e) {
        const { slidesPerView: n, slidesPerGroup: r, centeredSlides: i } = t.params
          , { addSlidesBefore: a, addSlidesAfter: o } = t.params.virtual
          , { from: l, to: c, slides: u, slidesGrid: p, offset: d } = t.virtual;
        t.params.cssMode || t.updateActiveIndex();
        const h = t.activeIndex || 0;
        let f, m, g;
        f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
          i ? (m = Math.floor(n / 2) + r + o,
            g = Math.floor(n / 2) + r + a) : (m = n + (r - 1) + o,
              g = r + a);
        const v = Math.max((h || 0) - g, 0)
          , y = Math.min((h || 0) + m, u.length - 1)
          , b = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);
        function _() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load()
        }
        if (Object.assign(t.virtual, {
          from: v,
          to: y,
          offset: b,
          slidesGrid: t.slidesGrid
        }),
          l === v && c === y && !e)
          return t.slidesGrid !== p && b !== d && t.slides.css(f, b + "px"),
            void t.updateProgress();
        if (t.params.virtual.renderExternal)
          return t.params.virtual.renderExternal.call(t, {
            offset: b,
            from: v,
            to: y,
            slides: function () {
              const t = [];
              for (let e = v; e <= y; e += 1)
                t.push(u[e]);
              return t
            }()
          }),
            void (t.params.virtual.renderExternalUpdate && _());
        const w = []
          , S = [];
        if (e)
          t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (let e = l; e <= c; e += 1)
            (e < v || e > y) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
        for (let t = 0; t < u.length; t += 1)
          t >= v && t <= y && (void 0 === c || e ? S.push(t) : (t > c && S.push(t),
            t < l && w.push(t)));
        S.forEach(e => {
          t.$wrapperEl.append(s(u[e], e))
        }
        ),
          w.sort((t, e) => e - t).forEach(e => {
            t.$wrapperEl.prepend(s(u[e], e))
          }
          ),
          t.$wrapperEl.children(".swiper-slide").css(f, b + "px"),
          _()
      }
      e({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      }),
        t.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: []
        },
        n("beforeInit", () => {
          t.params.virtual.enabled && (t.virtual.slides = t.params.virtual.slides,
            t.classNames.push(t.params.containerModifierClass + "virtual"),
            t.params.watchSlidesProgress = !0,
            t.originalParams.watchSlidesProgress = !0,
            t.params.initialSlide || i())
        }
        ),
        n("setTranslate", () => {
          t.params.virtual.enabled && (t.params.cssMode && !t._immediateVirtual ? (clearTimeout(r),
            r = setTimeout(() => {
              i()
            }
              , 100)) : i())
        }
        ),
        n("init update resize", () => {
          t.params.virtual.enabled && t.params.cssMode && g(t.wrapperEl, "--swiper-virtual-size", t.virtualSize + "px")
        }
        ),
        Object.assign(t.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let n = 0; n < e.length; n += 1)
                e[n] && t.virtual.slides.push(e[n]);
            else
              t.virtual.slides.push(e);
            i(!0)
          },
          prependSlide: function (e) {
            const n = t.activeIndex;
            let r = n + 1
              , s = 1;
            if (Array.isArray(e)) {
              for (let n = 0; n < e.length; n += 1)
                e[n] && t.virtual.slides.unshift(e[n]);
              r = n + e.length,
                s = e.length
            } else
              t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
              const e = t.virtual.cache
                , n = {};
              Object.keys(e).forEach(t => {
                const r = e[t]
                  , i = r.attr("data-swiper-slide-index");
                i && r.attr("data-swiper-slide-index", parseInt(i, 10) + s),
                  n[parseInt(t, 10) + s] = r
              }
              ),
                t.virtual.cache = n
            }
            i(!0),
              t.slideTo(r, 0)
          },
          removeSlide: function (e) {
            if (null == e)
              return;
            let n = t.activeIndex;
            if (Array.isArray(e))
              for (let r = e.length - 1; r >= 0; r -= 1)
                t.virtual.slides.splice(e[r], 1),
                  t.params.virtual.cache && delete t.virtual.cache[e[r]],
                  e[r] < n && (n -= 1),
                  n = Math.max(n, 0);
            else
              t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < n && (n -= 1),
                n = Math.max(n, 0);
            i(!0),
              t.slideTo(n, 0)
          },
          removeAllSlides: function () {
            t.virtual.slides = [],
              t.params.virtual.cache && (t.virtual.cache = {}),
              i(!0),
              t.slideTo(0, 0)
          },
          update: i
        })
    }
      , function ({ swiper: t, extendParams: e, on: n, emit: s }) {
        const a = r()
          , o = i();
        function l(e) {
          if (!t.enabled)
            return;
          const { rtlTranslate: n } = t;
          let r = e;
          r.originalEvent && (r = r.originalEvent);
          const i = r.keyCode || r.charCode
            , l = t.params.keyboard.pageUpDown
            , c = l && 33 === i
            , u = l && 34 === i
            , p = 37 === i
            , d = 39 === i
            , h = 38 === i
            , f = 40 === i;
          if (!t.allowSlideNext && (t.isHorizontal() && d || t.isVertical() && f || u))
            return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || c))
            return !1;
          if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (c || u || p || d || h || f)) {
              let e = !1;
              if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                return;
              const r = t.$el
                , s = r[0].clientWidth
                , i = r[0].clientHeight
                , a = o.innerWidth
                , l = o.innerHeight
                , c = t.$el.offset();
              n && (c.left -= t.$el[0].scrollLeft);
              const u = [[c.left, c.top], [c.left + s, c.top], [c.left, c.top + i], [c.left + s, c.top + i]];
              for (let t = 0; t < u.length; t += 1) {
                const n = u[t];
                if (n[0] >= 0 && n[0] <= a && n[1] >= 0 && n[1] <= l) {
                  if (0 === n[0] && 0 === n[1])
                    continue;
                  e = !0
                }
              }
              if (!e)
                return
            }
            t.isHorizontal() ? ((c || u || p || d) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
              ((u || d) && !n || (c || p) && n) && t.slideNext(),
              ((c || p) && !n || (u || d) && n) && t.slidePrev()) : ((c || u || h || f) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                (u || f) && t.slideNext(),
                (c || h) && t.slidePrev()),
              s("keyPress", i)
          }
        }
        function u() {
          t.keyboard.enabled || (c(a).on("keydown", l),
            t.keyboard.enabled = !0)
        }
        function p() {
          t.keyboard.enabled && (c(a).off("keydown", l),
            t.keyboard.enabled = !1)
        }
        t.keyboard = {
          enabled: !1
        },
          e({
            keyboard: {
              enabled: !1,
              onlyInViewport: !0,
              pageUpDown: !0
            }
          }),
          n("init", () => {
            t.params.keyboard.enabled && u()
          }
          ),
          n("destroy", () => {
            t.keyboard.enabled && p()
          }
          ),
          Object.assign(t.keyboard, {
            enable: u,
            disable: p
          })
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: r }) {
        const s = i();
        let a;
        e({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null
          }
        }),
          t.mousewheel = {
            enabled: !1
          };
        let o, l = d();
        const u = [];
        function h() {
          t.enabled && (t.mouseEntered = !0)
        }
        function f() {
          t.enabled && (t.mouseEntered = !1)
        }
        function m(e) {
          return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && d() - l < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && d() - l < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            r("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
              r("scroll", e.raw)),
            l = (new s.Date).getTime(),
            1))
        }
        function g(e) {
          let n = e
            , s = !0;
          if (!t.enabled)
            return;
          const i = t.params.mousewheel;
          t.params.cssMode && n.preventDefault();
          let l = t.$el;
          if ("container" !== t.params.mousewheel.eventsTarget && (l = c(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !l[0].contains(n.target) && !i.releaseOnEdges)
            return !0;
          n.originalEvent && (n = n.originalEvent);
          let h = 0;
          const f = t.rtlTranslate ? -1 : 1
            , g = function (t) {
              let e = 0
                , n = 0
                , r = 0
                , s = 0;
              return "detail" in t && (n = t.detail),
                "wheelDelta" in t && (n = -t.wheelDelta / 120),
                "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120),
                "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = n,
                  n = 0),
                r = 10 * e,
                s = 10 * n,
                "deltaY" in t && (s = t.deltaY),
                "deltaX" in t && (r = t.deltaX),
                t.shiftKey && !r && (r = s,
                  s = 0),
                (r || s) && t.deltaMode && (1 === t.deltaMode ? (r *= 40,
                  s *= 40) : (r *= 800,
                    s *= 800)),
                r && !e && (e = r < 1 ? -1 : 1),
                s && !n && (n = s < 1 ? -1 : 1),
              {
                spinX: e,
                spinY: n,
                pixelX: r,
                pixelY: s
              }
            }(n);
          if (i.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                return !0;
              h = -g.pixelX * f
            } else {
              if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                return !0;
              h = -g.pixelY
            }
          else
            h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
          if (0 === h)
            return !0;
          i.invert && (h = -h);
          let v = t.getTranslate() + h * i.sensitivity;
          if (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            s = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
            s && t.params.nested && n.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {
            const e = {
              time: d(),
              delta: Math.abs(h),
              direction: Math.sign(h)
            }
              , s = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
            if (!s) {
              o = void 0,
                t.params.loop && t.loopFix();
              let l = t.getTranslate() + h * i.sensitivity;
              const c = t.isBeginning
                , d = t.isEnd;
              if (l >= t.minTranslate() && (l = t.minTranslate()),
                l <= t.maxTranslate() && (l = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(l),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                (!c && t.isBeginning || !d && t.isEnd) && t.updateSlidesClasses(),
                t.params.freeMode.sticky) {
                clearTimeout(a),
                  a = void 0,
                  u.length >= 15 && u.shift();
                const n = u.length ? u[u.length - 1] : void 0
                  , r = u[0];
                if (u.push(e),
                  n && (e.delta > n.delta || e.direction !== n.direction))
                  u.splice(0);
                else if (u.length >= 15 && e.time - r.time < 500 && r.delta - e.delta >= 1 && e.delta <= 6) {
                  const n = h > 0 ? .8 : .2;
                  o = e,
                    u.splice(0),
                    a = p(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, n)
                    }
                      , 0)
                }
                a || (a = p(() => {
                  o = e,
                    u.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, .5)
                }
                  , 500))
              }
              if (s || r("scroll", n),
                t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                l === t.minTranslate() || l === t.maxTranslate())
                return !0
            }
          } else {
            const n = {
              time: d(),
              delta: Math.abs(h),
              direction: Math.sign(h),
              raw: e
            };
            u.length >= 2 && u.shift();
            const r = u.length ? u[u.length - 1] : void 0;
            if (u.push(n),
              r ? (n.direction !== r.direction || n.delta > r.delta || n.time > r.time + 150) && m(n) : m(n),
              function (e) {
                const n = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && n.releaseOnEdges)
                    return !0
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
                  return !0;
                return !1
              }(n))
              return !0
          }
          return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
            !1
        }
        function v(e) {
          let n = t.$el;
          "container" !== t.params.mousewheel.eventsTarget && (n = c(t.params.mousewheel.eventsTarget)),
            n[e]("mouseenter", h),
            n[e]("mouseleave", f),
            n[e]("wheel", g)
        }
        function y() {
          return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g),
            !0) : !t.mousewheel.enabled && (v("on"),
              t.mousewheel.enabled = !0,
              !0)
        }
        function b() {
          return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g),
            !0) : !!t.mousewheel.enabled && (v("off"),
              t.mousewheel.enabled = !1,
              !0)
        }
        n("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && b(),
            t.params.mousewheel.enabled && y()
        }
        ),
          n("destroy", () => {
            t.params.cssMode && y(),
              t.mousewheel.enabled && b()
          }
          ),
          Object.assign(t.mousewheel, {
            enable: y,
            disable: b
          })
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: r }) {
        function s(e) {
          let n;
          return e && (n = c(e),
            t.params.uniqueNavElements && "string" == typeof e && n.length > 1 && 1 === t.$el.find(e).length && (n = t.$el.find(e))),
            n
        }
        function i(e, n) {
          const r = t.params.navigation;
          e && e.length > 0 && (e[n ? "addClass" : "removeClass"](r.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](r.lockClass))
        }
        function a() {
          if (t.params.loop)
            return;
          const { $nextEl: e, $prevEl: n } = t.navigation;
          i(n, t.isBeginning),
            i(e, t.isEnd)
        }
        function o(e) {
          e.preventDefault(),
            t.isBeginning && !t.params.loop || t.slidePrev()
        }
        function l(e) {
          e.preventDefault(),
            t.isEnd && !t.params.loop || t.slideNext()
        }
        function u() {
          const e = t.params.navigation;
          if (t.params.navigation = R(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
          }),
            !e.nextEl && !e.prevEl)
            return;
          const n = s(e.nextEl)
            , r = s(e.prevEl);
          n && n.length > 0 && n.on("click", l),
            r && r.length > 0 && r.on("click", o),
            Object.assign(t.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: r,
              prevEl: r && r[0]
            }),
            t.enabled || (n && n.addClass(e.lockClass),
              r && r.addClass(e.lockClass))
        }
        function p() {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e && e.length && (e.off("click", l),
            e.removeClass(t.params.navigation.disabledClass)),
            n && n.length && (n.off("click", o),
              n.removeClass(t.params.navigation.disabledClass))
        }
        e({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        }),
          t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
          },
          n("init", () => {
            u(),
              a()
          }
          ),
          n("toEdge fromEdge lock unlock", () => {
            a()
          }
          ),
          n("destroy", () => {
            p()
          }
          ),
          n("enable disable", () => {
            const { $nextEl: e, $prevEl: n } = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
              n && n[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
          }
          ),
          n("click", (e, n) => {
            const { $nextEl: s, $prevEl: i } = t.navigation
              , a = n.target;
            if (t.params.navigation.hideOnClick && !c(a).is(i) && !c(a).is(s)) {
              if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a)))
                return;
              let e;
              s ? e = s.hasClass(t.params.navigation.hiddenClass) : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                r(!0 === e ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(t.params.navigation.hiddenClass),
                i && i.toggleClass(t.params.navigation.hiddenClass)
            }
          }
          ),
          Object.assign(t.navigation, {
            update: a,
            init: u,
            destroy: p
          })
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: r }) {
        const s = "swiper-pagination";
        let i;
        e({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: t => t,
            formatFractionTotal: t => t,
            bulletClass: s + "-bullet",
            bulletActiveClass: s + "-bullet-active",
            modifierClass: s + "-",
            currentClass: s + "-current",
            totalClass: s + "-total",
            hiddenClass: s + "-hidden",
            progressbarFillClass: s + "-progressbar-fill",
            progressbarOppositeClass: s + "-progressbar-opposite",
            clickableClass: s + "-clickable",
            lockClass: s + "-lock",
            horizontalClass: s + "-horizontal",
            verticalClass: s + "-vertical"
          }
        }),
          t.pagination = {
            el: null,
            $el: null,
            bullets: []
          };
        let a = 0;
        function o() {
          return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }
        function l(e, n) {
          const { bulletActiveClass: r } = t.params.pagination;
          e[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`)
        }
        function u() {
          const e = t.rtl
            , n = t.params.pagination;
          if (o())
            return;
          const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
            , u = t.pagination.$el;
          let p;
          const d = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
            p > s - 1 - 2 * t.loopedSlides && (p -= s - 2 * t.loopedSlides),
            p > d - 1 && (p -= d),
            p < 0 && "bullets" !== t.params.paginationType && (p = d + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
            "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const r = t.pagination.bullets;
            let s, o, d;
            if (n.dynamicBullets && (i = r.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
              u.css(t.isHorizontal() ? "width" : "height", i * (n.dynamicMainBullets + 4) + "px"),
              n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (a += p - t.previousIndex,
                a > n.dynamicMainBullets - 1 ? a = n.dynamicMainBullets - 1 : a < 0 && (a = 0)),
              s = p - a,
              o = s + (Math.min(r.length, n.dynamicMainBullets) - 1),
              d = (o + s) / 2),
              r.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(t => `${n.bulletActiveClass}${t}`).join(" ")),
              u.length > 1)
              r.each(t => {
                const e = c(t)
                  , r = e.index();
                r === p && e.addClass(n.bulletActiveClass),
                  n.dynamicBullets && (r >= s && r <= o && e.addClass(n.bulletActiveClass + "-main"),
                    r === s && l(e, "prev"),
                    r === o && l(e, "next"))
              }
              );
            else {
              const e = r.eq(p)
                , i = e.index();
              if (e.addClass(n.bulletActiveClass),
                n.dynamicBullets) {
                const e = r.eq(s)
                  , a = r.eq(o);
                for (let t = s; t <= o; t += 1)
                  r.eq(t).addClass(n.bulletActiveClass + "-main");
                if (t.params.loop)
                  if (i >= r.length - n.dynamicMainBullets) {
                    for (let t = n.dynamicMainBullets; t >= 0; t -= 1)
                      r.eq(r.length - t).addClass(n.bulletActiveClass + "-main");
                    r.eq(r.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                  } else
                    l(e, "prev"),
                      l(a, "next");
                else
                  l(e, "prev"),
                    l(a, "next")
              }
            }
            if (n.dynamicBullets) {
              const s = Math.min(r.length, n.dynamicMainBullets + 4)
                , a = (i * s - i) / 2 - d * i
                , o = e ? "right" : "left";
              r.css(t.isHorizontal() ? o : "top", a + "px")
            }
          }
          if ("fraction" === n.type && (u.find(z(n.currentClass)).text(n.formatFractionCurrent(p + 1)),
            u.find(z(n.totalClass)).text(n.formatFractionTotal(d))),
            "progressbar" === n.type) {
            let e;
            e = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
            const r = (p + 1) / d;
            let s = 1
              , i = 1;
            "horizontal" === e ? s = r : i = r,
              u.find(z(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${i})`).transition(t.params.speed)
          }
          "custom" === n.type && n.renderCustom ? (u.html(n.renderCustom(t, p + 1, d)),
            r("paginationRender", u[0])) : r("paginationUpdate", u[0]),
            t.params.watchOverflow && t.enabled && u[t.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }
        function p() {
          const e = t.params.pagination;
          if (o())
            return;
          const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
            , s = t.pagination.$el;
          let i = "";
          if ("bullets" === e.type) {
            let r = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && r > n && (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet ? i += e.renderBullet.call(t, n, e.bulletClass) : i += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
            s.html(i),
              t.pagination.bullets = s.find(z(e.bulletClass))
          }
          "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,
            s.html(i)),
            "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`,
              s.html(i)),
            "custom" !== e.type && r("paginationRender", t.pagination.$el[0])
        }
        function d() {
          t.params.pagination = R(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el)
            return;
          let n = c(e.el);
          0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && n.length > 1 && (n = t.$el.find(e.el),
            n.length > 1 && (n = n.filter(e => c(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
            n.addClass(e.modifierClass + e.type),
            n.addClass(e.modifierClass + t.params.direction),
            "bullets" === e.type && e.dynamicBullets && (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
              a = 0,
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass),
            e.clickable && n.on("click", z(e.bulletClass), (function (e) {
              e.preventDefault();
              let n = c(this).index() * t.params.slidesPerGroup;
              t.params.loop && (n += t.loopedSlides),
                t.slideTo(n)
            }
            )),
            Object.assign(t.pagination, {
              $el: n,
              el: n[0]
            }),
            t.enabled || n.addClass(e.lockClass))
        }
        function h() {
          const e = t.params.pagination;
          if (o())
            return;
          const n = t.pagination.$el;
          n.removeClass(e.hiddenClass),
            n.removeClass(e.modifierClass + e.type),
            n.removeClass(e.modifierClass + t.params.direction),
            t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && n.off("click", z(e.bulletClass))
        }
        n("init", () => {
          d(),
            p(),
            u()
        }
        ),
          n("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && u()
          }
          ),
          n("snapIndexChange", () => {
            t.params.loop || u()
          }
          ),
          n("slidesLengthChange", () => {
            t.params.loop && (p(),
              u())
          }
          ),
          n("snapGridLengthChange", () => {
            t.params.loop || (p(),
              u())
          }
          ),
          n("destroy", () => {
            h()
          }
          ),
          n("enable disable", () => {
            const { $el: e } = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
          }
          ),
          n("lock unlock", () => {
            u()
          }
          ),
          n("click", (e, n) => {
            const s = n.target
              , { $el: i } = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && i.length > 0 && !c(s).hasClass(t.params.pagination.bulletClass)) {
              if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl))
                return;
              const e = i.hasClass(t.params.pagination.hiddenClass);
              r(!0 === e ? "paginationShow" : "paginationHide"),
                i.toggleClass(t.params.pagination.hiddenClass)
            }
          }
          ),
          Object.assign(t.pagination, {
            render: p,
            update: u,
            init: d,
            destroy: h
          })
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: s }) {
        const i = r();
        let a, o, l, u, d = !1, h = null, f = null;
        function m() {
          if (!t.params.scrollbar.el || !t.scrollbar.el)
            return;
          const { scrollbar: e, rtlTranslate: n, progress: r } = t
            , { $dragEl: s, $el: i } = e
            , a = t.params.scrollbar;
          let c = o
            , u = (l - o) * r;
          n ? (u = -u,
            u > 0 ? (c = o - u,
              u = 0) : -u + o > l && (c = l + u)) : u < 0 ? (c = o + u,
                u = 0) : u + o > l && (c = l - u),
            t.isHorizontal() ? (s.transform(`translate3d(${u}px, 0, 0)`),
              s[0].style.width = c + "px") : (s.transform(`translate3d(0px, ${u}px, 0)`),
                s[0].style.height = c + "px"),
            a.hide && (clearTimeout(h),
              i[0].style.opacity = 1,
              h = setTimeout(() => {
                i[0].style.opacity = 0,
                  i.transition(400)
              }
                , 1e3))
        }
        function g() {
          if (!t.params.scrollbar.el || !t.scrollbar.el)
            return;
          const { scrollbar: e } = t
            , { $dragEl: n, $el: r } = e;
          n[0].style.width = "",
            n[0].style.height = "",
            l = t.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
            u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
            o = "auto" === t.params.scrollbar.dragSize ? l * u : parseInt(t.params.scrollbar.dragSize, 10),
            t.isHorizontal() ? n[0].style.width = o + "px" : n[0].style.height = o + "px",
            r[0].style.display = u >= 1 ? "none" : "",
            t.params.scrollbar.hide && (r[0].style.opacity = 0),
            t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }
        function v(e) {
          return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }
        function y(e) {
          const { scrollbar: n, rtlTranslate: r } = t
            , { $el: s } = n;
          let i;
          i = (v(e) - s.offset()[t.isHorizontal() ? "left" : "top"] - (null !== a ? a : o / 2)) / (l - o),
            i = Math.max(Math.min(i, 1), 0),
            r && (i = 1 - i);
          const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * i;
          t.updateProgress(c),
            t.setTranslate(c),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        function b(e) {
          const n = t.params.scrollbar
            , { scrollbar: r, $wrapperEl: i } = t
            , { $el: o, $dragEl: l } = r;
          d = !0,
            a = e.target === l[0] || e.target === l ? v(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            l.transition(100),
            y(e),
            clearTimeout(f),
            o.transition(0),
            n.hide && o.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            s("scrollbarDragStart", e)
        }
        function _(e) {
          const { scrollbar: n, $wrapperEl: r } = t
            , { $el: i, $dragEl: a } = n;
          d && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            y(e),
            r.transition(0),
            i.transition(0),
            a.transition(0),
            s("scrollbarDragMove", e))
        }
        function w(e) {
          const n = t.params.scrollbar
            , { scrollbar: r, $wrapperEl: i } = t
            , { $el: a } = r;
          d && (d = !1,
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
              i.transition("")),
            n.hide && (clearTimeout(f),
              f = p(() => {
                a.css("opacity", 0),
                  a.transition(400)
              }
                , 1e3)),
            s("scrollbarDragEnd", e),
            n.snapOnRelease && t.slideToClosest())
        }
        function S(e) {
          const { scrollbar: n, touchEventsTouch: r, touchEventsDesktop: s, params: a, support: o } = t
            , l = n.$el[0]
            , c = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            }
            , u = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          if (!l)
            return;
          const p = "on" === e ? "addEventListener" : "removeEventListener";
          o.touch ? (l[p](r.start, b, c),
            l[p](r.move, _, c),
            l[p](r.end, w, u)) : (l[p](s.start, b, c),
              i[p](s.move, _, c),
              i[p](s.end, w, u))
        }
        function C() {
          const { scrollbar: e, $el: n } = t;
          t.params.scrollbar = R(t, t.originalParams.scrollbar, t.params.scrollbar, {
            el: "swiper-scrollbar"
          });
          const r = t.params.scrollbar;
          if (!r.el)
            return;
          let s = c(r.el);
          t.params.uniqueNavElements && "string" == typeof r.el && s.length > 1 && 1 === n.find(r.el).length && (s = n.find(r.el));
          let i = s.find("." + t.params.scrollbar.dragClass);
          0 === i.length && (i = c(`<div class="${t.params.scrollbar.dragClass}"></div>`),
            s.append(i)),
            Object.assign(e, {
              $el: s,
              el: s[0],
              $dragEl: i,
              dragEl: i[0]
            }),
            r.draggable && t.params.scrollbar.el && S("on"),
            s && s[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }
        function x() {
          t.params.scrollbar.el && S("off")
        }
        e({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        }),
          t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
          },
          n("init", () => {
            C(),
              g(),
              m()
          }
          ),
          n("update resize observerUpdate lock unlock", () => {
            g()
          }
          ),
          n("setTranslate", () => {
            m()
          }
          ),
          n("setTransition", (e, n) => {
            !function (e) {
              t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(n)
          }
          ),
          n("enable disable", () => {
            const { $el: e } = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
          }
          ),
          n("destroy", () => {
            x()
          }
          ),
          Object.assign(t.scrollbar, {
            updateSize: g,
            setTranslate: m,
            init: C,
            destroy: x
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          parallax: {
            enabled: !1
          }
        });
        const r = (e, n) => {
          const { rtl: r } = t
            , s = c(e)
            , i = r ? -1 : 1
            , a = s.attr("data-swiper-parallax") || "0";
          let o = s.attr("data-swiper-parallax-x")
            , l = s.attr("data-swiper-parallax-y");
          const u = s.attr("data-swiper-parallax-scale")
            , p = s.attr("data-swiper-parallax-opacity");
          if (o || l ? (o = o || "0",
            l = l || "0") : t.isHorizontal() ? (o = a,
              l = "0") : (l = a,
                o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * n * i + "%" : o * n * i + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px",
            null != p) {
            const t = p - (p - 1) * (1 - Math.abs(n));
            s[0].style.opacity = t
          }
          if (null == u)
            s.transform(`translate3d(${o}, ${l}, 0px)`);
          else {
            const t = u - (u - 1) * (1 - Math.abs(n));
            s.transform(`translate3d(${o}, ${l}, 0px) scale(${t})`)
          }
        }
          , s = () => {
            const { $el: e, slides: n, progress: s, snapGrid: i } = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
              r(t, s)
            }
            ),
              n.each((e, n) => {
                let a = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(n / 2) - s * (i.length - 1)),
                  a = Math.min(Math.max(a, -1), 1),
                  c(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                    r(t, a)
                  }
                  )
              }
              )
          }
          ;
        n("beforeInit", () => {
          t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
            t.originalParams.watchSlidesProgress = !0)
        }
        ),
          n("init", () => {
            t.params.parallax.enabled && s()
          }
          ),
          n("setTranslate", () => {
            t.params.parallax.enabled && s()
          }
          ),
          n("setTransition", (e, n) => {
            t.params.parallax.enabled && ((e = t.params.speed) => {
              const { $el: n } = t;
              n.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                const n = c(t);
                let r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0),
                  n.transition(r)
              }
              )
            }
            )(n)
          }
          )
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: r }) {
        const s = i();
        e({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        }),
          t.zoom = {
            enabled: !1
          };
        let a, o, l, u = 1, p = !1;
        const d = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        }
          , f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          }
          , m = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          };
        let g = 1;
        function v(t) {
          if (t.targetTouches.length < 2)
            return 1;
          const e = t.targetTouches[0].pageX
            , n = t.targetTouches[0].pageY
            , r = t.targetTouches[1].pageX
            , s = t.targetTouches[1].pageY;
          return Math.sqrt((r - e) ** 2 + (s - n) ** 2)
        }
        function y(e) {
          const n = t.support
            , r = t.params.zoom;
          if (o = !1,
            l = !1,
            !n.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
              return;
            o = !0,
              d.scaleStart = v(e)
          }
          d.$slideEl && d.$slideEl.length || (d.$slideEl = c(e.target).closest("." + t.params.slideClass),
            0 === d.$slideEl.length && (d.$slideEl = t.slides.eq(t.activeIndex)),
            d.$imageEl = d.$slideEl.find("." + r.containerClass).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
            d.$imageWrapEl = d.$imageEl.parent("." + r.containerClass),
            d.maxRatio = d.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio,
            0 !== d.$imageWrapEl.length) ? (d.$imageEl && d.$imageEl.transition(0),
              p = !0) : d.$imageEl = void 0
        }
        function b(e) {
          const n = t.support
            , r = t.params.zoom
            , s = t.zoom;
          if (!n.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
              return;
            l = !0,
              d.scaleMove = v(e)
          }
          d.$imageEl && 0 !== d.$imageEl.length ? (n.gestures ? s.scale = e.scale * u : s.scale = d.scaleMove / d.scaleStart * u,
            s.scale > d.maxRatio && (s.scale = d.maxRatio - 1 + (s.scale - d.maxRatio + 1) ** .5),
            s.scale < r.minRatio && (s.scale = r.minRatio + 1 - (r.minRatio - s.scale + 1) ** .5),
            d.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && y(e)
        }
        function _(e) {
          const n = t.device
            , r = t.support
            , s = t.params.zoom
            , i = t.zoom;
          if (!r.gestures) {
            if (!o || !l)
              return;
            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android)
              return;
            o = !1,
              l = !1
          }
          d.$imageEl && 0 !== d.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, d.maxRatio), s.minRatio),
            d.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
            u = i.scale,
            p = !1,
            1 === i.scale && (d.$slideEl = void 0))
        }
        function w(e) {
          const n = t.zoom;
          if (!d.$imageEl || 0 === d.$imageEl.length)
            return;
          if (t.allowClick = !1,
            !f.isTouched || !d.$slideEl)
            return;
          f.isMoved || (f.width = d.$imageEl[0].offsetWidth,
            f.height = d.$imageEl[0].offsetHeight,
            f.startX = h(d.$imageWrapEl[0], "x") || 0,
            f.startY = h(d.$imageWrapEl[0], "y") || 0,
            d.slideWidth = d.$slideEl[0].offsetWidth,
            d.slideHeight = d.$slideEl[0].offsetHeight,
            d.$imageWrapEl.transition(0));
          const r = f.width * n.scale
            , s = f.height * n.scale;
          if (!(r < d.slideWidth && s < d.slideHeight)) {
            if (f.minX = Math.min(d.slideWidth / 2 - r / 2, 0),
              f.maxX = -f.minX,
              f.minY = Math.min(d.slideHeight / 2 - s / 2, 0),
              f.maxY = -f.minY,
              f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
              f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
              !f.isMoved && !p) {
              if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
                return void (f.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
                return void (f.isTouched = !1)
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              f.isMoved = !0,
              f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX,
              f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY,
              f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8),
              f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8),
              f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8),
              f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8),
              m.prevPositionX || (m.prevPositionX = f.touchesCurrent.x),
              m.prevPositionY || (m.prevPositionY = f.touchesCurrent.y),
              m.prevTime || (m.prevTime = Date.now()),
              m.x = (f.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2,
              m.y = (f.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2,
              Math.abs(f.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
              Math.abs(f.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
              m.prevPositionX = f.touchesCurrent.x,
              m.prevPositionY = f.touchesCurrent.y,
              m.prevTime = Date.now(),
              d.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
          }
        }
        function S() {
          const e = t.zoom;
          d.$slideEl && t.previousIndex !== t.activeIndex && (d.$imageEl && d.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            d.$imageWrapEl && d.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            u = 1,
            d.$slideEl = void 0,
            d.$imageEl = void 0,
            d.$imageWrapEl = void 0)
        }
        function C(e) {
          const n = t.zoom
            , r = t.params.zoom;
          if (d.$slideEl || (e && e.target && (d.$slideEl = c(e.target).closest("." + t.params.slideClass)),
            d.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? d.$slideEl = t.$wrapperEl.children("." + t.params.slideActiveClass) : d.$slideEl = t.slides.eq(t.activeIndex)),
            d.$imageEl = d.$slideEl.find("." + r.containerClass).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
            d.$imageWrapEl = d.$imageEl.parent("." + r.containerClass)),
            !d.$imageEl || 0 === d.$imageEl.length || !d.$imageWrapEl || 0 === d.$imageWrapEl.length)
            return;
          let i, a, o, l, p, h, m, g, v, y, b, _, w, S, C, x, E, k;
          t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.touchAction = "none"),
            d.$slideEl.addClass("" + r.zoomedSlideClass),
            void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
              a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x,
                a = f.touchesStart.y),
            n.scale = d.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio,
            u = d.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio,
            e ? (E = d.$slideEl[0].offsetWidth,
              k = d.$slideEl[0].offsetHeight,
              o = d.$slideEl.offset().left + s.scrollX,
              l = d.$slideEl.offset().top + s.scrollY,
              p = o + E / 2 - i,
              h = l + k / 2 - a,
              v = d.$imageEl[0].offsetWidth,
              y = d.$imageEl[0].offsetHeight,
              b = v * n.scale,
              _ = y * n.scale,
              w = Math.min(E / 2 - b / 2, 0),
              S = Math.min(k / 2 - _ / 2, 0),
              C = -w,
              x = -S,
              m = p * n.scale,
              g = h * n.scale,
              m < w && (m = w),
              m > C && (m = C),
              g < S && (g = S),
              g > x && (g = x)) : (m = 0,
                g = 0),
            d.$imageWrapEl.transition(300).transform(`translate3d(${m}px, ${g}px,0)`),
            d.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
        }
        function x() {
          const e = t.zoom
            , n = t.params.zoom;
          d.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? d.$slideEl = t.$wrapperEl.children("." + t.params.slideActiveClass) : d.$slideEl = t.slides.eq(t.activeIndex),
            d.$imageEl = d.$slideEl.find("." + n.containerClass).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
            d.$imageWrapEl = d.$imageEl.parent("." + n.containerClass)),
            d.$imageEl && 0 !== d.$imageEl.length && d.$imageWrapEl && 0 !== d.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
              t.wrapperEl.style.touchAction = ""),
              e.scale = 1,
              u = 1,
              d.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              d.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
              d.$slideEl.removeClass("" + n.zoomedSlideClass),
              d.$slideEl = void 0)
        }
        function E(e) {
          const n = t.zoom;
          n.scale && 1 !== n.scale ? x() : C(e)
        }
        function k() {
          const e = t.support;
          return {
            passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            activeListenerWithCapture: !e.passiveListener || {
              passive: !1,
              capture: !0
            }
          }
        }
        function T() {
          return "." + t.params.slideClass
        }
        function P(e) {
          const { passiveListener: n } = k()
            , r = T();
          t.$wrapperEl[e]("gesturestart", r, y, n),
            t.$wrapperEl[e]("gesturechange", r, b, n),
            t.$wrapperEl[e]("gestureend", r, _, n)
        }
        function O() {
          a || (a = !0,
            P("on"))
        }
        function M() {
          a && (a = !1,
            P("off"))
        }
        function A() {
          const e = t.zoom;
          if (e.enabled)
            return;
          e.enabled = !0;
          const n = t.support
            , { passiveListener: r, activeListenerWithCapture: s } = k()
            , i = T();
          n.gestures ? (t.$wrapperEl.on(t.touchEvents.start, O, r),
            t.$wrapperEl.on(t.touchEvents.end, M, r)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, i, y, r),
              t.$wrapperEl.on(t.touchEvents.move, i, b, s),
              t.$wrapperEl.on(t.touchEvents.end, i, _, r),
              t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, i, _, r)),
            t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, w, s)
        }
        function j() {
          const e = t.zoom;
          if (!e.enabled)
            return;
          const n = t.support;
          e.enabled = !1;
          const { passiveListener: r, activeListenerWithCapture: s } = k()
            , i = T();
          n.gestures ? (t.$wrapperEl.off(t.touchEvents.start, O, r),
            t.$wrapperEl.off(t.touchEvents.end, M, r)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, i, y, r),
              t.$wrapperEl.off(t.touchEvents.move, i, b, s),
              t.$wrapperEl.off(t.touchEvents.end, i, _, r),
              t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, i, _, r)),
            t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, w, s)
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => g,
          set(t) {
            if (g !== t) {
              const e = d.$imageEl ? d.$imageEl[0] : void 0
                , n = d.$slideEl ? d.$slideEl[0] : void 0;
              r("zoomChange", t, e, n)
            }
            g = t
          }
        }),
          n("init", () => {
            t.params.zoom.enabled && A()
          }
          ),
          n("destroy", () => {
            j()
          }
          ),
          n("touchStart", (e, n) => {
            t.zoom.enabled && function (e) {
              const n = t.device;
              d.$imageEl && 0 !== d.$imageEl.length && (f.isTouched || (n.android && e.cancelable && e.preventDefault(),
                f.isTouched = !0,
                f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(n)
          }
          ),
          n("touchEnd", (e, n) => {
            t.zoom.enabled && function () {
              const e = t.zoom;
              if (!d.$imageEl || 0 === d.$imageEl.length)
                return;
              if (!f.isTouched || !f.isMoved)
                return f.isTouched = !1,
                  void (f.isMoved = !1);
              f.isTouched = !1,
                f.isMoved = !1;
              let n = 300
                , r = 300;
              const s = m.x * n
                , i = f.currentX + s
                , a = m.y * r
                , o = f.currentY + a;
              0 !== m.x && (n = Math.abs((i - f.currentX) / m.x)),
                0 !== m.y && (r = Math.abs((o - f.currentY) / m.y));
              const l = Math.max(n, r);
              f.currentX = i,
                f.currentY = o;
              const c = f.width * e.scale
                , u = f.height * e.scale;
              f.minX = Math.min(d.slideWidth / 2 - c / 2, 0),
                f.maxX = -f.minX,
                f.minY = Math.min(d.slideHeight / 2 - u / 2, 0),
                f.maxY = -f.minY,
                f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX),
                f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY),
                d.$imageWrapEl.transition(l).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
          }
          ),
          n("doubleTap", (e, n) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && E(n)
          }
          ),
          n("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && S()
          }
          ),
          n("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && S()
          }
          ),
          Object.assign(t.zoom, {
            enable: A,
            disable: j,
            in: C,
            out: x,
            toggle: E
          })
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: r }) {
        e({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        }),
          t.lazy = {};
        let s = !1
          , a = !1;
        function o(e, n = !0) {
          const s = t.params.lazy;
          if (void 0 === e)
            return;
          if (0 === t.slides.length)
            return;
          const i = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e)
            , a = i.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
          !i.hasClass(s.elementClass) || i.hasClass(s.loadedClass) || i.hasClass(s.loadingClass) || a.push(i[0]),
            0 !== a.length && a.each(e => {
              const a = c(e);
              a.addClass(s.loadingClass);
              const l = a.attr("data-background")
                , u = a.attr("data-src")
                , p = a.attr("data-srcset")
                , d = a.attr("data-sizes")
                , h = a.parent("picture");
              t.loadImage(a[0], u || l, p, d, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (l ? (a.css("background-image", `url("${l}")`),
                    a.removeAttr("data-background")) : (p && (a.attr("srcset", p),
                      a.removeAttr("data-srcset")),
                      d && (a.attr("sizes", d),
                        a.removeAttr("data-sizes")),
                      h.length && h.children("source").each(t => {
                        const e = c(t);
                        e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")),
                          e.removeAttr("data-srcset"))
                      }
                      ),
                      u && (a.attr("src", u),
                        a.removeAttr("data-src"))),
                    a.addClass(s.loadedClass).removeClass(s.loadingClass),
                    i.find("." + s.preloaderClass).remove(),
                    t.params.loop && n) {
                    const e = i.attr("data-swiper-slide-index");
                    i.hasClass(t.params.slideDuplicateClass) ? o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                  }
                  r("lazyImageReady", i[0], a[0]),
                    t.params.autoHeight && t.updateAutoHeight()
                }
              }
              ),
                r("lazyImageLoad", i[0], a[0])
            }
            )
        }
        function l() {
          const { $wrapperEl: e, params: n, slides: r, activeIndex: s } = t
            , i = t.virtual && n.virtual.enabled
            , l = n.lazy;
          let u = n.slidesPerView;
          function p(t) {
            if (i) {
              if (e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`).length)
                return !0
            } else if (r[t])
              return !0;
            return !1
          }
          function d(t) {
            return i ? c(t).attr("data-swiper-slide-index") : c(t).index()
          }
          if ("auto" === u && (u = 0),
            a || (a = !0),
            t.params.watchSlidesProgress)
            e.children("." + n.slideVisibleClass).each(t => {
              o(i ? c(t).attr("data-swiper-slide-index") : c(t).index())
            }
            );
          else if (u > 1)
            for (let t = s; t < s + u; t += 1)
              p(t) && o(t);
          else
            o(s);
          if (l.loadPrevNext)
            if (u > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
              const t = l.loadPrevNextAmount
                , e = u
                , n = Math.min(s + e + Math.max(t, e), r.length)
                , i = Math.max(s - Math.max(e, t), 0);
              for (let t = s + u; t < n; t += 1)
                p(t) && o(t);
              for (let t = i; t < s; t += 1)
                p(t) && o(t)
            } else {
              const t = e.children("." + n.slideNextClass);
              t.length > 0 && o(d(t));
              const r = e.children("." + n.slidePrevClass);
              r.length > 0 && o(d(r))
            }
        }
        function u() {
          const e = i();
          if (!t || t.destroyed)
            return;
          const n = t.params.lazy.scrollingElement ? c(t.params.lazy.scrollingElement) : c(e)
            , r = n[0] === e
            , a = r ? e.innerWidth : n[0].offsetWidth
            , o = r ? e.innerHeight : n[0].offsetHeight
            , p = t.$el.offset()
            , { rtlTranslate: d } = t;
          let h = !1;
          d && (p.left -= t.$el[0].scrollLeft);
          const f = [[p.left, p.top], [p.left + t.width, p.top], [p.left, p.top + t.height], [p.left + t.width, p.top + t.height]];
          for (let t = 0; t < f.length; t += 1) {
            const e = f[t];
            if (e[0] >= 0 && e[0] <= a && e[1] >= 0 && e[1] <= o) {
              if (0 === e[0] && 0 === e[1])
                continue;
              h = !0
            }
          }
          const m = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          h ? (l(),
            n.off("scroll", u, m)) : s || (s = !0,
              n.on("scroll", u, m))
        }
        n("beforeInit", () => {
          t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        }
        ),
          n("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : l())
          }
          ),
          n("scroll", () => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && l()
          }
          ),
          n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : l())
          }
          ),
          n("transitionStart", () => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !a) && (t.params.lazy.checkInView ? u() : l())
          }
          ),
          n("transitionEnd", () => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? u() : l())
          }
          ),
          n("slideChange", () => {
            const { lazy: e, cssMode: n, watchSlidesProgress: r, touchReleaseOnEdges: s, resistanceRatio: i } = t.params;
            e.enabled && (n || r && (s || 0 === i)) && l()
          }
          ),
          Object.assign(t.lazy, {
            load: l,
            loadInSlide: o
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        function r(t, e) {
          const n = function () {
            let t, e, n;
            return (r, s) => {
              for (e = -1,
                t = r.length; t - e > 1;)
                n = t + e >> 1,
                  r[n] <= s ? e = n : t = n;
              return t
            }
          }();
          let r, s;
          return this.x = t,
            this.y = e,
            this.lastIndex = t.length - 1,
            this.interpolate = function (t) {
              return t ? (s = n(this.x, t),
                r = s - 1,
                (t - this.x[r]) * (this.y[s] - this.y[r]) / (this.x[s] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        }
        function s() {
          t.controller.control && t.controller.spline && (t.controller.spline = void 0,
            delete t.controller.spline)
        }
        e({
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        }),
          t.controller = {
            control: void 0
          },
          n("beforeInit", () => {
            t.controller.control = t.params.controller.control
          }
          ),
          n("update", () => {
            s()
          }
          ),
          n("resize", () => {
            s()
          }
          ),
          n("observerUpdate", () => {
            s()
          }
          ),
          n("setTranslate", (e, n, r) => {
            t.controller.control && t.controller.setTranslate(n, r)
          }
          ),
          n("setTransition", (e, n, r) => {
            t.controller.control && t.controller.setTransition(n, r)
          }
          ),
          Object.assign(t.controller, {
            setTranslate: function (e, n) {
              const s = t.controller.control;
              let i, a;
              const o = t.constructor;
              function l(e) {
                const n = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by && (function (e) {
                  t.controller.spline || (t.controller.spline = t.params.loop ? new r(t.slidesGrid, e.slidesGrid) : new r(t.snapGrid, e.snapGrid))
                }(e),
                  a = -t.controller.spline.interpolate(-n)),
                  a && "container" !== t.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                    a = (n - t.minTranslate()) * i + e.minTranslate()),
                  t.params.controller.inverse && (a = e.maxTranslate() - a),
                  e.updateProgress(a),
                  e.setTranslate(a, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses()
              }
              if (Array.isArray(s))
                for (let t = 0; t < s.length; t += 1)
                  s[t] !== n && s[t] instanceof o && l(s[t]);
              else
                s instanceof o && n !== s && l(s)
            },
            setTransition: function (e, n) {
              const r = t.constructor
                , s = t.controller.control;
              let i;
              function a(n) {
                n.setTransition(e, t),
                  0 !== e && (n.transitionStart(),
                    n.params.autoHeight && p(() => {
                      n.updateAutoHeight()
                    }
                    ),
                    n.$wrapperEl.transitionEnd(() => {
                      s && (n.params.loop && "slide" === t.params.controller.by && n.loopFix(),
                        n.transitionEnd())
                    }
                    ))
              }
              if (Array.isArray(s))
                for (i = 0; i < s.length; i += 1)
                  s[i] !== n && s[i] instanceof r && a(s[i]);
              else
                s instanceof r && n !== s && a(s)
            }
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group"
          }
        });
        let r = null;
        function s(t) {
          const e = r;
          0 !== e.length && (e.html(""),
            e.html(t))
        }
        function i(t) {
          t.attr("tabIndex", "0")
        }
        function a(t) {
          t.attr("tabIndex", "-1")
        }
        function o(t, e) {
          t.attr("role", e)
        }
        function l(t, e) {
          t.attr("aria-roledescription", e)
        }
        function u(t, e) {
          t.attr("aria-label", e)
        }
        function p(t) {
          t.attr("aria-disabled", !0)
        }
        function d(t) {
          t.attr("aria-disabled", !1)
        }
        function h(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode)
            return;
          const n = t.params.a11y
            , r = c(e.target);
          t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? s(n.lastSlideMessage) : s(n.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
              t.isBeginning ? s(n.firstSlideMessage) : s(n.prevSlideMessage)),
            t.pagination && r.is(z(t.params.pagination.bulletClass)) && r[0].click()
        }
        function f() {
          if (t.params.loop || !t.navigation)
            return;
          const { $nextEl: e, $prevEl: n } = t.navigation;
          n && n.length > 0 && (t.isBeginning ? (p(n),
            a(n)) : (d(n),
              i(n))),
            e && e.length > 0 && (t.isEnd ? (p(e),
              a(e)) : (d(e),
                i(e)))
        }
        function m() {
          return t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length
        }
        const g = (t, e, n) => {
          i(t),
            "BUTTON" !== t[0].tagName && (o(t, "button"),
              t.on("keydown", h)),
            u(t, n),
            function (t, e) {
              t.attr("aria-controls", e)
            }(t, e)
        }
          ;
        n("beforeInit", () => {
          r = c(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        ),
          n("afterInit", () => {
            t.params.a11y.enabled && (function () {
              const e = t.params.a11y;
              t.$el.append(r);
              const n = t.$el;
              e.containerRoleDescriptionMessage && l(n, e.containerRoleDescriptionMessage),
                e.containerMessage && u(n, e.containerMessage);
              const s = t.$wrapperEl
                , i = s.attr("id") || "swiper-wrapper-" + function (t = 16) {
                  return "x".repeat(t).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))
                }(16)
                , a = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
              var p;
              p = i,
                s.attr("id", p),
                function (t, e) {
                  t.attr("aria-live", e)
                }(s, a),
                e.itemRoleDescriptionMessage && l(c(t.slides), e.itemRoleDescriptionMessage),
                o(c(t.slides), e.slideRole);
              const d = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
              let f, v;
              t.slides.each((n, r) => {
                const s = c(n)
                  , i = t.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : r;
                u(s, e.slideLabelMessage.replace(/\{\{index\}\}/, i + 1).replace(/\{\{slidesLength\}\}/, d))
              }
              ),
                t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (v = t.navigation.$prevEl),
                f && f.length && g(f, i, e.nextSlideMessage),
                v && v.length && g(v, i, e.prevSlideMessage),
                m() && t.pagination.$el.on("keydown", z(t.params.pagination.bulletClass), h)
            }(),
              f())
          }
          ),
          n("toEdge", () => {
            t.params.a11y.enabled && f()
          }
          ),
          n("fromEdge", () => {
            t.params.a11y.enabled && f()
          }
          ),
          n("paginationUpdate", () => {
            t.params.a11y.enabled && function () {
              const e = t.params.a11y;
              m() && t.pagination.bullets.each(n => {
                const r = c(n);
                i(r),
                  t.params.pagination.renderBullet || (o(r, "button"),
                    u(r, e.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1)))
              }
              )
            }()
          }
          ),
          n("destroy", () => {
            t.params.a11y.enabled && function () {
              let e, n;
              r && r.length > 0 && r.remove(),
                t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (n = t.navigation.$prevEl),
                e && e.off("keydown", h),
                n && n.off("keydown", h),
                m() && t.pagination.$el.off("keydown", z(t.params.pagination.bulletClass), h)
            }()
          }
          )
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides"
          }
        });
        let r = !1
          , s = {};
        const a = t => t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , o = t => {
            const e = i();
            let n;
            n = t ? new URL(t) : e.location;
            const r = n.pathname.slice(1).split("/").filter(t => "" !== t)
              , s = r.length;
            return {
              key: r[s - 2],
              value: r[s - 1]
            }
          }
          , l = (e, n) => {
            const s = i();
            if (!r || !t.params.history.enabled)
              return;
            let o;
            o = t.params.url ? new URL(t.params.url) : s.location;
            const l = t.slides.eq(n);
            let c = a(l.attr("data-history"));
            if (t.params.history.root.length > 0) {
              let n = t.params.history.root;
              "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)),
                c = `${n}/${e}/${c}`
            } else
              o.pathname.includes(e) || (c = `${e}/${c}`);
            const u = s.history.state;
            u && u.value === c || (t.params.history.replaceState ? s.history.replaceState({
              value: c
            }, null, c) : s.history.pushState({
              value: c
            }, null, c))
          }
          , c = (e, n, r) => {
            if (n)
              for (let s = 0, i = t.slides.length; s < i; s += 1) {
                const i = t.slides.eq(s);
                if (a(i.attr("data-history")) === n && !i.hasClass(t.params.slideDuplicateClass)) {
                  const n = i.index();
                  t.slideTo(n, e, r)
                }
              }
            else
              t.slideTo(0, e, r)
          }
          , u = () => {
            s = o(t.params.url),
              c(t.params.speed, t.paths.value, !1)
          }
          ;
        n("init", () => {
          t.params.history.enabled && (() => {
            const e = i();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return t.params.history.enabled = !1,
                  void (t.params.hashNavigation.enabled = !0);
              r = !0,
                s = o(t.params.url),
                (s.key || s.value) && (c(0, s.value, t.params.runCallbacksOnInit),
                  t.params.history.replaceState || e.addEventListener("popstate", u))
            }
          }
          )()
        }
        ),
          n("destroy", () => {
            t.params.history.enabled && (() => {
              const e = i();
              t.params.history.replaceState || e.removeEventListener("popstate", u)
            }
            )()
          }
          ),
          n("transitionEnd _freeModeNoMomentumRelease", () => {
            r && l(t.params.history.key, t.activeIndex)
          }
          ),
          n("slideChange", () => {
            r && t.params.cssMode && l(t.params.history.key, t.activeIndex)
          }
          )
      }
      , function ({ swiper: t, extendParams: e, emit: n, on: s }) {
        let a = !1;
        const o = r()
          , l = i();
        e({
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        });
        const u = () => {
          n("hashChange");
          const e = o.location.hash.replace("#", "");
          if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
            const n = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
            if (void 0 === n)
              return;
            t.slideTo(n)
          }
        }
          , p = () => {
            if (a && t.params.hashNavigation.enabled)
              if (t.params.hashNavigation.replaceState && l.history && l.history.replaceState)
                l.history.replaceState(null, null, "#" + t.slides.eq(t.activeIndex).attr("data-hash") || ""),
                  n("hashSet");
              else {
                const e = t.slides.eq(t.activeIndex)
                  , r = e.attr("data-hash") || e.attr("data-history");
                o.location.hash = r || "",
                  n("hashSet")
              }
          }
          ;
        s("init", () => {
          t.params.hashNavigation.enabled && (() => {
            if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
              return;
            a = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const n = 0;
              for (let r = 0, s = t.slides.length; r < s; r += 1) {
                const s = t.slides.eq(r);
                if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(t.params.slideDuplicateClass)) {
                  const e = s.index();
                  t.slideTo(e, n, t.params.runCallbacksOnInit, !0)
                }
              }
            }
            t.params.hashNavigation.watchState && c(l).on("hashchange", u)
          }
          )()
        }
        ),
          s("destroy", () => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && c(l).off("hashchange", u)
          }
          ),
          s("transitionEnd _freeModeNoMomentumRelease", () => {
            a && p()
          }
          ),
          s("slideChange", () => {
            a && t.params.cssMode && p()
          }
          )
      }
      , function ({ swiper: t, extendParams: e, on: n, emit: s }) {
        let i;
        function a() {
          const e = t.slides.eq(t.activeIndex);
          let n = t.params.autoplay.delay;
          e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
            clearTimeout(i),
            i = p(() => {
              let e;
              t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(),
                e = t.slidePrev(t.params.speed, !0, !0),
                s("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? l() : (e = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                  s("autoplay")) : (e = t.slidePrev(t.params.speed, !0, !0),
                    s("autoplay")) : t.params.loop ? (t.loopFix(),
                      e = t.slideNext(t.params.speed, !0, !0),
                      s("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? l() : (e = t.slideTo(0, t.params.speed, !0, !0),
                        s("autoplay")) : (e = t.slideNext(t.params.speed, !0, !0),
                          s("autoplay")),
                (t.params.cssMode && t.autoplay.running || !1 === e) && a()
            }
              , n)
        }
        function o() {
          return void 0 === i && !t.autoplay.running && (t.autoplay.running = !0,
            s("autoplayStart"),
            a(),
            !0)
        }
        function l() {
          return !!t.autoplay.running && void 0 !== i && (i && (clearTimeout(i),
            i = void 0),
            t.autoplay.running = !1,
            s("autoplayStop"),
            !0)
        }
        function c(e) {
          t.autoplay.running && (t.autoplay.paused || (i && clearTimeout(i),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
              t.$wrapperEl[0].addEventListener(e, d)
            }
            ) : (t.autoplay.paused = !1,
              a())))
        }
        function u() {
          const e = r();
          "hidden" === e.visibilityState && t.autoplay.running && c(),
            "visible" === e.visibilityState && t.autoplay.paused && (a(),
              t.autoplay.paused = !1)
        }
        function d(e) {
          t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
            t.$wrapperEl[0].removeEventListener(e, d)
          }
          ),
            t.autoplay.paused = !1,
            t.autoplay.running ? a() : l())
        }
        function h() {
          t.params.autoplay.disableOnInteraction ? l() : c(),
            ["transitionend", "webkitTransitionEnd"].forEach(e => {
              t.$wrapperEl[0].removeEventListener(e, d)
            }
            )
        }
        function f() {
          t.params.autoplay.disableOnInteraction || (t.autoplay.paused = !1,
            a())
        }
        t.autoplay = {
          running: !1,
          paused: !1
        },
          e({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1
            }
          }),
          n("init", () => {
            t.params.autoplay.enabled && (o(),
              r().addEventListener("visibilitychange", u),
              t.params.autoplay.pauseOnMouseEnter && (t.$el.on("mouseenter", h),
                t.$el.on("mouseleave", f)))
          }
          ),
          n("beforeTransitionStart", (e, n, r) => {
            t.autoplay.running && (r || !t.params.autoplay.disableOnInteraction ? t.autoplay.pause(n) : l())
          }
          ),
          n("sliderFirstMove", () => {
            t.autoplay.running && (t.params.autoplay.disableOnInteraction ? l() : c())
          }
          ),
          n("touchEnd", () => {
            t.params.cssMode && t.autoplay.paused && !t.params.autoplay.disableOnInteraction && a()
          }
          ),
          n("destroy", () => {
            t.$el.off("mouseenter", h),
              t.$el.off("mouseleave", f),
              t.autoplay.running && l(),
              r().removeEventListener("visibilitychange", u)
          }
          ),
          Object.assign(t.autoplay, {
            pause: c,
            run: a,
            start: o,
            stop: l
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let r = !1
          , s = !1;
        function i() {
          const e = t.thumbs.swiper;
          if (!e)
            return;
          const n = e.clickedIndex
            , r = e.clickedSlide;
          if (r && c(r).hasClass(t.params.thumbs.slideThumbActiveClass))
            return;
          if (null == n)
            return;
          let s;
          if (s = e.params.loop ? parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10) : n,
            t.params.loop) {
            let e = t.activeIndex;
            t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
              t._clientLeft = t.$wrapperEl[0].clientLeft,
              e = t.activeIndex);
            const n = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index()
              , r = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
            s = void 0 === n ? r : void 0 === r ? n : r - e < e - n ? r : n
          }
          t.slideTo(s)
        }
        function a() {
          const { thumbs: e } = t.params;
          if (r)
            return !1;
          r = !0;
          const n = t.constructor;
          if (e.swiper instanceof n)
            t.thumbs.swiper = e.swiper,
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              });
          else if (f(e.swiper)) {
            const r = Object.assign({}, e.swiper);
            Object.assign(r, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }),
              t.thumbs.swiper = new n(r),
              s = !0
          }
          return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", i),
            !0
        }
        function o(e) {
          const n = t.thumbs.swiper;
          if (!n)
            return;
          const r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView
            , s = t.params.thumbs.autoScrollOffset
            , i = s && !n.params.loop;
          if (t.realIndex !== n.realIndex || i) {
            let a, o, l = n.activeIndex;
            if (n.params.loop) {
              n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(),
                n._clientLeft = n.$wrapperEl[0].clientLeft,
                l = n.activeIndex);
              const e = n.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                , r = n.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
              a = void 0 === e ? r : void 0 === r ? e : r - l == l - e ? n.params.slidesPerGroup > 1 ? r : l : r - l < l - e ? r : e,
                o = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else
              a = t.realIndex,
                o = a > t.previousIndex ? "next" : "prev";
            i && (a += "next" === o ? s : -1 * s),
              n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(a) < 0 && (n.params.centeredSlides ? a = a > l ? a - Math.floor(r / 2) + 1 : a + Math.floor(r / 2) - 1 : a > l && n.params.slidesPerGroup,
                n.slideTo(a, e ? 0 : void 0))
          }
          let a = 1;
          const o = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (a = 1),
            a = Math.floor(a),
            n.slides.removeClass(o),
            n.params.loop || n.params.virtual && n.params.virtual.enabled)
            for (let e = 0; e < a; e += 1)
              n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(o);
          else
            for (let e = 0; e < a; e += 1)
              n.slides.eq(t.realIndex + e).addClass(o)
        }
        t.thumbs = {
          swiper: null
        },
          n("beforeInit", () => {
            const { thumbs: e } = t.params;
            e && e.swiper && (a(),
              o(!0))
          }
          ),
          n("slideChange update resize observerUpdate", () => {
            t.thumbs.swiper && o()
          }
          ),
          n("setTransition", (e, n) => {
            const r = t.thumbs.swiper;
            r && r.setTransition(n)
          }
          ),
          n("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && s && e && e.destroy()
          }
          ),
          Object.assign(t.thumbs, {
            init: a,
            update: o
          })
      }
      , function ({ swiper: t, extendParams: e, emit: n, once: r }) {
        e({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }),
          Object.assign(t, {
            freeMode: {
              onTouchMove: function () {
                const { touchEventsData: e, touches: n } = t;
                0 === e.velocities.length && e.velocities.push({
                  position: n[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime
                }),
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "currentX" : "currentY"],
                    time: d()
                  })
              },
              onTouchEnd: function ({ currentPos: e }) {
                const { params: s, $wrapperEl: i, rtlTranslate: a, snapGrid: o, touchEventsData: l } = t
                  , c = d() - l.touchStartTime;
                if (e < -t.minTranslate())
                  t.slideTo(t.activeIndex);
                else if (e > -t.maxTranslate())
                  t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                else {
                  if (s.freeMode.momentum) {
                    if (l.velocities.length > 1) {
                      const e = l.velocities.pop()
                        , n = l.velocities.pop()
                        , r = e.position - n.position
                        , i = e.time - n.time;
                      t.velocity = r / i,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < s.freeMode.minimumVelocity && (t.velocity = 0),
                        (i > 150 || d() - e.time > 300) && (t.velocity = 0)
                    } else
                      t.velocity = 0;
                    t.velocity *= s.freeMode.momentumVelocityRatio,
                      l.velocities.length = 0;
                    let e = 1e3 * s.freeMode.momentumRatio;
                    const c = t.velocity * e;
                    let u = t.translate + c;
                    a && (u = -u);
                    let p, h = !1;
                    const f = 20 * Math.abs(t.velocity) * s.freeMode.momentumBounceRatio;
                    let m;
                    if (u < t.maxTranslate())
                      s.freeMode.momentumBounce ? (u + t.maxTranslate() < -f && (u = t.maxTranslate() - f),
                        p = t.maxTranslate(),
                        h = !0,
                        l.allowMomentumBounce = !0) : u = t.maxTranslate(),
                        s.loop && s.centeredSlides && (m = !0);
                    else if (u > t.minTranslate())
                      s.freeMode.momentumBounce ? (u - t.minTranslate() > f && (u = t.minTranslate() + f),
                        p = t.minTranslate(),
                        h = !0,
                        l.allowMomentumBounce = !0) : u = t.minTranslate(),
                        s.loop && s.centeredSlides && (m = !0);
                    else if (s.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < o.length; t += 1)
                        if (o[t] > -u) {
                          e = t;
                          break
                        }
                      u = Math.abs(o[e] - u) < Math.abs(o[e - 1] - u) || "next" === t.swipeDirection ? o[e] : o[e - 1],
                        u = -u
                    }
                    if (m && r("transitionEnd", () => {
                      t.loopFix()
                    }
                    ),
                      0 !== t.velocity) {
                      if (e = a ? Math.abs((-u - t.translate) / t.velocity) : Math.abs((u - t.translate) / t.velocity),
                        s.freeMode.sticky) {
                        const n = Math.abs((a ? -u : u) - t.translate)
                          , r = t.slidesSizesGrid[t.activeIndex];
                        e = n < r ? s.speed : n < 2 * r ? 1.5 * s.speed : 2.5 * s.speed
                      }
                    } else if (s.freeMode.sticky)
                      return void t.slideToClosest();
                    s.freeMode.momentumBounce && h ? (t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(u),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating = !0,
                      i.transitionEnd(() => {
                        t && !t.destroyed && l.allowMomentumBounce && (n("momentumBounce"),
                          t.setTransition(s.speed),
                          setTimeout(() => {
                            t.setTranslate(p),
                              i.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd()
                              }
                              )
                          }
                            , 0))
                      }
                      )) : t.velocity ? (n("_freeModeNoMomentumRelease"),
                        t.updateProgress(u),
                        t.setTransition(e),
                        t.setTranslate(u),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                          i.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd()
                          }
                          ))) : t.updateProgress(u),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses()
                  } else {
                    if (s.freeMode.sticky)
                      return void t.slideToClosest();
                    s.freeMode && n("_freeModeNoMomentumRelease")
                  }
                  (!s.freeMode.momentum || c >= s.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses())
                }
              }
            }
          })
      }
      , function ({ swiper: t, extendParams: e }) {
        let n, r, s;
        e({
          grid: {
            rows: 1,
            fill: "column"
          }
        }),
          t.grid = {
            initSlides: e => {
              const { slidesPerView: i } = t.params
                , { rows: a, fill: o } = t.params.grid;
              r = n / a,
                s = Math.floor(e / a),
                n = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a,
                "auto" !== i && "row" === o && (n = Math.max(n, i * a))
            }
            ,
            updateSlide: (e, i, a, o) => {
              const { slidesPerGroup: l, spaceBetween: c } = t.params
                , { rows: u, fill: p } = t.params.grid;
              let d, h, f;
              if ("row" === p && l > 1) {
                const t = Math.floor(e / (l * u))
                  , r = e - u * l * t
                  , s = 0 === t ? l : Math.min(Math.ceil((a - t * u * l) / u), l);
                f = Math.floor(r / s),
                  h = r - f * s + t * l,
                  d = h + f * n / u,
                  i.css({
                    "-webkit-order": d,
                    order: d
                  })
              } else
                "column" === p ? (h = Math.floor(e / u),
                  f = e - h * u,
                  (h > s || h === s && f === u - 1) && (f += 1,
                    f >= u && (f = 0,
                      h += 1))) : (f = Math.floor(e / r),
                        h = e - f * r);
              i.css(o("margin-top"), 0 !== f ? c && c + "px" : "")
            }
            ,
            updateWrapperSize: (e, r, s) => {
              const { spaceBetween: i, centeredSlides: a, roundLengths: o } = t.params
                , { rows: l } = t.params.grid;
              if (t.virtualSize = (e + i) * n,
                t.virtualSize = Math.ceil(t.virtualSize / l) - i,
                t.$wrapperEl.css({
                  [s("width")]: t.virtualSize + i + "px"
                }),
                a) {
                r.splice(0, r.length);
                const e = [];
                for (let n = 0; n < r.length; n += 1) {
                  let s = r[n];
                  o && (s = Math.floor(s)),
                    r[n] < t.virtualSize + r[0] && e.push(s)
                }
                r.push(...e)
              }
            }
          }
      }
      , function ({ swiper: t }) {
        Object.assign(t, {
          appendSlide: q.bind(t),
          prependSlide: B.bind(t),
          addSlide: F.bind(t),
          removeSlide: W.bind(t),
          removeAllSlides: U.bind(t)
        })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          fadeEffect: {
            crossFade: !1,
            transformEl: null
          }
        }),
          G({
            effect: "fade",
            swiper: t,
            on: n,
            setTranslate: () => {
              const { slides: e } = t
                , n = t.params.fadeEffect;
              for (let r = 0; r < e.length; r += 1) {
                const e = t.slides.eq(r);
                let s = -e[0].swiperSlideOffset;
                t.params.virtualTranslate || (s -= t.translate);
                let i = 0;
                t.isHorizontal() || (i = s,
                  s = 0);
                const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                Y(n, e).css({
                  opacity: a
                }).transform(`translate3d(${s}px, ${i}px, 0px)`)
              }
            }
            ,
            setTransition: e => {
              const { transformEl: n } = t.params.fadeEffect;
              (n ? t.slides.find(n) : t.slides).transition(e),
                X({
                  swiper: t,
                  duration: e,
                  transformEl: n,
                  allSlides: !0
                })
            }
            ,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode
            })
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        }),
          G({
            effect: "cube",
            swiper: t,
            on: n,
            setTranslate: () => {
              const { $el: e, $wrapperEl: n, slides: r, width: s, height: i, rtlTranslate: a, size: o, browser: l } = t
                , u = t.params.cubeEffect
                , p = t.isHorizontal()
                , d = t.virtual && t.params.virtual.enabled;
              let h, f = 0;
              u.shadow && (p ? (h = n.find(".swiper-cube-shadow"),
                0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'),
                  n.append(h)),
                h.css({
                  height: s + "px"
                })) : (h = e.find(".swiper-cube-shadow"),
                  0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'),
                    e.append(h))));
              for (let t = 0; t < r.length; t += 1) {
                const e = r.eq(t);
                let n = t;
                d && (n = parseInt(e.attr("data-swiper-slide-index"), 10));
                let s = 90 * n
                  , i = Math.floor(s / 360);
                a && (s = -s,
                  i = Math.floor(-s / 360));
                const l = Math.max(Math.min(e[0].progress, 1), -1);
                let h = 0
                  , m = 0
                  , g = 0;
                n % 4 == 0 ? (h = 4 * -i * o,
                  g = 0) : (n - 1) % 4 == 0 ? (h = 0,
                    g = 4 * -i * o) : (n - 2) % 4 == 0 ? (h = o + 4 * i * o,
                      g = o) : (n - 3) % 4 == 0 && (h = -o,
                        g = 3 * o + 4 * o * i),
                  a && (h = -h),
                  p || (m = h,
                    h = 0);
                const v = `rotateX(${p ? 0 : -s}deg) rotateY(${p ? s : 0}deg) translate3d(${h}px, ${m}px, ${g}px)`;
                if (l <= 1 && l > -1 && (f = 90 * n + 90 * l,
                  a && (f = 90 * -n - 90 * l)),
                  e.transform(v),
                  u.slideShadows) {
                  let t = p ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
                    , n = p ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                  0 === t.length && (t = c(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`),
                    e.append(t)),
                    0 === n.length && (n = c(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`),
                      e.append(n)),
                    t.length && (t[0].style.opacity = Math.max(-l, 0)),
                    n.length && (n[0].style.opacity = Math.max(l, 0))
                }
              }
              if (n.css({
                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                "transform-origin": `50% 50% -${o / 2}px`
              }),
                u.shadow)
                if (p)
                  h.transform(`translate3d(0px, ${s / 2 + u.shadowOffset}px, ${-s / 2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`);
                else {
                  const t = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)
                    , e = 1.5 - (Math.sin(2 * t * Math.PI / 360) / 2 + Math.cos(2 * t * Math.PI / 360) / 2)
                    , n = u.shadowScale
                    , r = u.shadowScale / e
                    , s = u.shadowOffset;
                  h.transform(`scale3d(${n}, 1, ${r}) translate3d(0px, ${i / 2 + s}px, ${-i / 2 / r}px) rotateX(-90deg)`)
                }
              const m = l.isSafari || l.isWebView ? -o / 2 : 0;
              n.transform(`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`)
            }
            ,
            setTransition: e => {
              const { $el: n, slides: r } = t;
              r.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            })
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0,
            transformEl: null
          }
        }),
          G({
            effect: "flip",
            swiper: t,
            on: n,
            setTranslate: () => {
              const { slides: e, rtlTranslate: n } = t
                , r = t.params.flipEffect;
              for (let s = 0; s < e.length; s += 1) {
                const i = e.eq(s);
                let a = i[0].progress;
                t.params.flipEffect.limitRotation && (a = Math.max(Math.min(i[0].progress, 1), -1));
                const o = i[0].swiperSlideOffset;
                let l = -180 * a
                  , c = 0
                  , u = t.params.cssMode ? -o - t.translate : -o
                  , p = 0;
                if (t.isHorizontal() ? n && (l = -l) : (p = u,
                  u = 0,
                  c = -l,
                  l = 0),
                  i[0].style.zIndex = -Math.abs(Math.round(a)) + e.length,
                  r.slideShadows) {
                  let e = t.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                    , n = t.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                  0 === e.length && (e = K(r, i, t.isHorizontal() ? "left" : "top")),
                    0 === n.length && (n = K(r, i, t.isHorizontal() ? "right" : "bottom")),
                    e.length && (e[0].style.opacity = Math.max(-a, 0)),
                    n.length && (n[0].style.opacity = Math.max(a, 0))
                }
                const d = `translate3d(${u}px, ${p}px, 0px) rotateX(${c}deg) rotateY(${l}deg)`;
                Y(r, i).transform(d)
              }
            }
            ,
            setTransition: e => {
              const { transformEl: n } = t.params.flipEffect;
              (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                X({
                  swiper: t,
                  duration: e,
                  transformEl: n
                })
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode
            })
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null
          }
        }),
          G({
            effect: "coverflow",
            swiper: t,
            on: n,
            setTranslate: () => {
              const { width: e, height: n, slides: r, slidesSizesGrid: s } = t
                , i = t.params.coverflowEffect
                , a = t.isHorizontal()
                , o = t.translate
                , l = a ? e / 2 - o : n / 2 - o
                , c = a ? i.rotate : -i.rotate
                , u = i.depth;
              for (let t = 0, e = r.length; t < e; t += 1) {
                const e = r.eq(t)
                  , n = s[t]
                  , o = (l - e[0].swiperSlideOffset - n / 2) / n * i.modifier;
                let p = a ? c * o : 0
                  , d = a ? 0 : c * o
                  , h = -u * Math.abs(o)
                  , f = i.stretch;
                "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(i.stretch) / 100 * n);
                let m = a ? 0 : f * o
                  , g = a ? f * o : 0
                  , v = 1 - (1 - i.scale) * Math.abs(o);
                Math.abs(g) < .001 && (g = 0),
                  Math.abs(m) < .001 && (m = 0),
                  Math.abs(h) < .001 && (h = 0),
                  Math.abs(p) < .001 && (p = 0),
                  Math.abs(d) < .001 && (d = 0),
                  Math.abs(v) < .001 && (v = 0);
                const y = `translate3d(${g}px,${m}px,${h}px)  rotateX(${d}deg) rotateY(${p}deg) scale(${v})`;
                if (Y(i, e).transform(y),
                  e[0].style.zIndex = 1 - Math.abs(Math.round(o)),
                  i.slideShadows) {
                  let t = a ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
                    , n = a ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                  0 === t.length && (t = K(i, e, a ? "left" : "top")),
                    0 === n.length && (n = K(i, e, a ? "right" : "bottom")),
                    t.length && (t[0].style.opacity = o > 0 ? o : 0),
                    n.length && (n[0].style.opacity = -o > 0 ? -o : 0)
                }
              }
            }
            ,
            setTransition: e => {
              const { transformEl: n } = t.params.coverflowEffect;
              (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0
            })
          })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1
            }
          }
        });
        const r = t => "string" == typeof t ? t : t + "px";
        G({
          effect: "creative",
          swiper: t,
          on: n,
          setTranslate: () => {
            const { slides: e } = t
              , n = t.params.creativeEffect
              , { progressMultiplier: s } = n;
            for (let i = 0; i < e.length; i += 1) {
              const a = e.eq(i)
                , o = a[0].progress
                , l = Math.min(Math.max(a[0].progress, -n.limitProgress), n.limitProgress)
                , c = a[0].swiperSlideOffset
                , u = [t.params.cssMode ? -c - t.translate : -c, 0, 0]
                , p = [0, 0, 0];
              let d = !1;
              t.isHorizontal() || (u[1] = u[0],
                u[0] = 0);
              let h = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1
              };
              l < 0 ? (h = n.next,
                d = !0) : l > 0 && (h = n.prev,
                  d = !0),
                u.forEach((t, e) => {
                  u[e] = `calc(${t}px + (${r(h.translate[e])} * ${Math.abs(l * s)}))`
                }
                ),
                p.forEach((t, e) => {
                  p[e] = h.rotate[e] * Math.abs(l * s)
                }
                ),
                a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
              const f = u.join(", ")
                , m = `rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`
                , g = l < 0 ? `scale(${1 + (1 - h.scale) * l * s})` : `scale(${1 - (1 - h.scale) * l * s})`
                , v = l < 0 ? 1 + (1 - h.opacity) * l * s : 1 - (1 - h.opacity) * l * s
                , y = `translate3d(${f}) ${m} ${g}`;
              if (d && h.shadow || !d) {
                let t = a.children(".swiper-slide-shadow");
                if (0 === t.length && h.shadow && (t = K(n, a)),
                  t.length) {
                  const e = n.shadowPerProgress ? l * (1 / n.limitProgress) : l;
                  t[0].style.opacity = Math.min(Math.max(Math.abs(e), 0), 1)
                }
              }
              const b = Y(n, a);
              b.transform(y).css({
                opacity: v
              }),
                h.origin && b.css("transform-origin", h.origin)
            }
          }
          ,
          setTransition: e => {
            const { transformEl: n } = t.params.creativeEffect;
            (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
              X({
                swiper: t,
                duration: e,
                transformEl: n,
                allSlides: !0
              })
          }
          ,
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode
          })
        })
      }
      , function ({ swiper: t, extendParams: e, on: n }) {
        e({
          cardsEffect: {
            slideShadows: !0,
            transformEl: null
          }
        }),
          G({
            effect: "cards",
            swiper: t,
            on: n,
            setTranslate: () => {
              const { slides: e, activeIndex: n } = t
                , r = t.params.cardsEffect
                , { startTranslate: s, isTouched: i } = t.touchEventsData
                , a = t.translate;
              for (let o = 0; o < e.length; o += 1) {
                const l = e.eq(o)
                  , c = l[0].progress
                  , u = Math.min(Math.max(c, -4), 4);
                let p = l[0].swiperSlideOffset;
                t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                let d = t.params.cssMode ? -p - t.translate : -p
                  , h = 0;
                const f = -100 * Math.abs(u);
                let m = 1
                  , g = -2 * u
                  , v = 8 - .75 * Math.abs(u);
                const y = (o === n || o === n - 1) && u > 0 && u < 1 && (i || t.params.cssMode) && a < s
                  , b = (o === n || o === n + 1) && u < 0 && u > -1 && (i || t.params.cssMode) && a > s;
                if (y || b) {
                  const t = (1 - Math.abs((Math.abs(u) - .5) / .5)) ** .5;
                  g += -28 * u * t,
                    m += -.5 * t,
                    v += 96 * t,
                    h = -25 * t * Math.abs(u) + "%"
                }
                if (d = u < 0 ? `calc(${d}px + (${v * Math.abs(u)}%))` : u > 0 ? `calc(${d}px + (-${v * Math.abs(u)}%))` : d + "px",
                  !t.isHorizontal()) {
                  const t = h;
                  h = d,
                    d = t
                }
                const _ = `\n        translate3d(${d}, ${h}, ${f}px)\n        rotateZ(${g}deg)\n        scale(${u < 0 ? "" + (1 + (1 - m) * u) : "" + (1 - (1 - m) * u)})\n      `;
                if (r.slideShadows) {
                  let t = l.find(".swiper-slide-shadow");
                  0 === t.length && (t = K(r, l)),
                    t.length && (t[0].style.opacity = Math.min(Math.max((Math.abs(u) - .5) / .5, 0), 1))
                }
                l[0].style.zIndex = -Math.abs(Math.round(c)) + e.length,
                  Y(r, l).transform(_)
              }
            }
            ,
            setTransition: e => {
              const { transformEl: n } = t.params.cardsEffect;
              (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                X({
                  swiper: t,
                  duration: e,
                  transformEl: n
                })
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode
            })
          })
      }
    ];
    return H.use(Q),
      H
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSToggleSwitch = e() : t.HSToggleSwitch = e()
  }(window, (function () {
    return d = {
      "./node_modules/countup.js/dist/countUp.min.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUp", function() { return CountUp; });\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+="").split("."))[0],e=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign(__assign({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();\n\n//# sourceURL=webpack://HSToggleSwitch/./node_modules/countup.js/dist/countUp.min.js?')
      },
      "./src/js/hs-toggle-switch.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSToggleSwitch; });\n/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSToggleSwitch Plugin\n* @version: 1.0.0 (Mon, 12 Dec 2019)\n* @requires: countup.js v2.0.4\n* @author: HtmlStream\n* @event-namespace: .HSToggleSwitch\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\nvar dataAttributeName = \'data-hs-toggle-switch-options\';\nvar dataAttributeItemName = \'data-hs-toggle-switch-item-options\';\nvar defaults = {\n  mode: \'toggle-count\',\n  targetSelector: undefined,\n  isChecked: false,\n  eventType: \'change\'\n};\n\nvar HSToggleSwitch = /*#__PURE__*/function () {\n  function HSToggleSwitch(el, options, id) {\n    _classCallCheck(this, HSToggleSwitch);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSToggleSwitch, [{\n    key: "_init",\n    value: function _init() {\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          return "continue";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.isChecked = _$el.checked;\n        _options.$targets = document.querySelectorAll(_options.targetSelector);\n\n        if (_options.mode === \'toggle-count\') {\n          if (_options.isChecked) {\n            _options.isChecked = true;\n\n            _options.$targets.forEach(function ($target) {\n              var currentDataSettings = $target.hasAttribute(dataAttributeItemName) ? JSON.parse($target.getAttribute(dataAttributeItemName)) : {};\n              $target.innerHTML = currentDataSettings.max;\n            });\n          }\n\n          _$el.addEventListener(_options.eventType, function () {\n            return that._toggleCount(_options);\n          });\n        }\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === "continue") continue;\n      }\n    } // Toggle Count\n\n  }, {\n    key: "_toggleCount",\n    value: function _toggleCount(settings) {\n      if (settings.isChecked) {\n        this._countDownEach(settings);\n      } else {\n        this._countUpEach(settings);\n      }\n    }\n  }, {\n    key: "_countUpEach",\n    value: function _countUpEach(settings) {\n      var _this = this;\n\n      settings.isChecked = true;\n      settings.$targets.forEach(function ($target) {\n        var currentDataSettings = $target.hasAttribute(dataAttributeItemName) ? JSON.parse($target.getAttribute(dataAttributeItemName)) : {};\n        var currentDefaults = {\n          duration: .5,\n          useEasing: false\n        },\n            currentOptions = {};\n        currentOptions = Object.assign({}, currentDefaults, currentDataSettings);\n\n        _this._countUp($target, currentOptions);\n      });\n    }\n  }, {\n    key: "_countDownEach",\n    value: function _countDownEach(settings) {\n      var _this2 = this;\n\n      settings.isChecked = false;\n      settings.$targets.forEach(function ($target) {\n        var currentDataSettings = $target.hasAttribute(dataAttributeItemName) ? JSON.parse($target.getAttribute(dataAttributeItemName)) : {};\n        var currentDefaults = {\n          duration: .5,\n          useEasing: false\n        },\n            currentOptions = {};\n        currentOptions = Object.assign({}, currentDefaults, currentDataSettings);\n\n        _this2._countDown($target, currentOptions);\n      });\n    }\n  }, {\n    key: "_countUp",\n    value: function _countUp(el, data) {\n      var defaults = {\n        startVal: data.min\n      };\n      var options = Object.assign({}, defaults, data);\n      var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__["CountUp"](el, data.max, options);\n      countUp.start();\n    }\n  }, {\n    key: "_countDown",\n    value: function _countDown(el, data) {\n      var defaults = {\n        startVal: data.max\n      };\n      var options = Object.assign({}, defaults, data);\n      var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__["CountUp"](el, data.min, options);\n      countUp.start();\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(item) {\n      if (typeof item === \'number\') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSToggleSwitch;\n}();\n\n\n\n//# sourceURL=webpack://HSToggleSwitch/./src/js/hs-toggle-switch.js?')
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-toggle-switch.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSHeader = e() : t.HSHeader = e()
  }(window, (function () {
    return d = {
      "./src/js/hs-header.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSHeader; });\n/* harmony import */ var _observers_sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers/sticky */ \"./src/js/observers/sticky.js\");\n/* harmony import */ var _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers/moment-show-hide */ \"./src/js/observers/moment-show-hide.js\");\n/* harmony import */ var _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers/show-hide */ \"./src/js/observers/show-hide.js\");\n/* harmony import */ var _observers_hide_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers/hide-section */ \"./src/js/observers/hide-section.js\");\n/* harmony import */ var _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers/has-hidden-element */ \"./src/js/observers/has-hidden-element.js\");\n/* harmony import */ var _observers_floating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers/floating */ \"./src/js/observers/floating.js\");\n/* harmony import */ var _observers_without_behavior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers/without-behavior */ \"./src/js/observers/without-behavior.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n* HSHeader Plugin\r\n* @version: 3.0.0 (Mon, 25 Mar 2021)\r\n* @author: HtmlStream\r\n* @event-namespace: .HSHeader\r\n* @license: Htmlstream Libraries (https://htmlstream.com/)\r\n* Copyright 2019 Htmlstream\r\n*/\n// Sticky\n // Moment Show / Hide\n\n // Show / Hide\n\n // Hide Section\n\n // Has Hidden Element\n\n // Floating\n\n // Without Behavior\n\n\n\nvar HSHeader = /*#__PURE__*/function () {\n  function HSHeader(el, config, observers) {\n    _classCallCheck(this, HSHeader);\n\n    this.element = typeof el === \"string\" ? document.querySelector(el) : el;\n    this.config = config;\n    this.observers = observers && Object.prototype.toString.call(observers) === '[object Object]' ? observers : {};\n    this.viewport = 'xs';\n    this.defaults = {\n      fixMoment: 0,\n      fixMomentClasses: null,\n      fixMomentExclude: null,\n      fixEffect: 'slide',\n      breakpoint: 'lg',\n      breakpointsMap: {\n        'md': 768,\n        'sm': 576,\n        'lg': 992,\n        'xl': 1200\n      },\n      effectCompensation: false,\n      effectCompensationStartClass: false,\n      effectCompensationEndClass: false\n    };\n  }\n\n  _createClass(HSHeader, [{\n    key: \"init\",\n    value: function init() {\n      var self = this,\n          element = this.element;\n      var dataSettings = element.hasAttribute('data-hs-header-options') ? JSON.parse(element.getAttribute('data-hs-header-options')) : {};\n      if (!element || element.hasAttribute('HSHeader')) return;\n      this.config = Object.assign({}, this.defaults, dataSettings, this.config);\n\n      this._detectObservers();\n\n      this.fixMediaDifference(this.element);\n      this.checkViewport();\n      onScroll();\n      document.addEventListener('scroll', onScroll);\n      onResize();\n      window.addEventListener('resize', onResize);\n\n      function onScroll() {\n        window.HSHeader = null;\n\n        if (window.pageYOffset < self.config.fixMoment - 100 && self.config.effectCompensation === true) {\n          element.style.top = -window.pageYOffset;\n          element.classList.add(self.config.effectCompensationStartClass);\n          element.classList.remove(self.config.effectCompensationEndClass);\n        } else if (self.config.effectCompensation === true) {\n          element.style.top = 0;\n          element.classList.add(self.config.effectCompensationEndClass);\n          element.classList.remove(self.config.effectCompensationStartClass);\n        }\n\n        if (element.hasAttribute('HSHeader')) {\n          self.notify();\n        }\n\n        element.setAttribute('HSHeader', true);\n      }\n\n      function onResize() {\n        if (self.resizeTimeOutId) clearTimeout(self.resizeTimeOutId);\n        self.resizeTimeOutId = setTimeout(function () {\n          // self.checkViewport()\n          self.update();\n        }, 100);\n      }\n\n      return this.element;\n    }\n  }, {\n    key: \"header\",\n    value: function header(element, config, observers) {\n      if (!element || !element.length) return;\n      this.element = element;\n      this.config = config;\n      this.observers = observers && $.isPlainObject(observers) ? observers : {};\n      this.viewport = 'xs';\n      this.checkViewport();\n    }\n  }, {\n    key: \"_detectObservers\",\n    value: function _detectObservers() {\n      if (!this.element) return;\n      var observers = this.observers = {\n        'xs': [],\n        'sm': [],\n        'md': [],\n        'lg': [],\n        'xl': []\n      };\n      /* ------------------------ xs -------------------------*/\n      // Has Hidden Element\n\n      if (this.element.classList.contains('navbar-has-hidden-element')) {\n        observers['xs'].push(new _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.element).init());\n      } // Sticky top\n\n\n      if (this.element.classList.contains('navbar-sticky-top')) {\n        if (this.element.classList.contains('navbar-show-hide')) {\n          observers['xs'].push(new _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.element).init());\n        } else if (this.element.classList.contains('navbar-toggle')) {\n          observers['xs'].push(new _observers_hide_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        observers['xs'].push(new _observers_sticky__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element).init());\n      } // Floating\n\n\n      if (this.element.classList.contains('navbar-floating')) {\n        observers['xs'].push(new _observers_floating__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n      }\n\n      if (this.element.classList.contains('navbar-invulnerable')) {\n        observers['xs'].push(new _observers_without_behavior__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.element).init());\n      } // Abs top & Static\n\n\n      if (this.element.classList.contains('navbar-absolute-top') || this.element.classList.contains('navbar-static')) {\n        if (this.element.classList.contains('navbar-show-hide')) {\n          observers['xs'].push(new _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.element, this.config).init());\n        }\n      }\n\n      return observers;\n    }\n  }, {\n    key: \"fixMediaDifference\",\n    value: function fixMediaDifference(element) {\n      if (!element || !element.length || !element.filter(function (el) {\n        return el.closest('[class*=\"navbar-side\"]');\n      }).length) return;\n      var toggleable;\n\n      if (element.classList.contains('navbar-side-left-xl') || element.classList.contains('navbar-side-right-xl')) {\n        toggleable = element.querySelector('.navbar-expand-xl');\n\n        if (toggleable) {\n          toggleable.classList.remove('navbar-expand-xl');\n          toggleable.classList.add('navbar-expand-lg');\n        }\n      } else if (element.classList.contains('navbar-side-left-lg') || element.classList.contains('navbar-side-right-lg')) {\n        toggleable = element.querySelector('.navbar-expand-lg');\n\n        if (toggleable) {\n          toggleable.classList.remove('navbar-expand-lg');\n          toggleable.classList.add('navbar-expand-md');\n        }\n      } else if (element.classList.contains('navbar-side-left-md') || element.classList.contains('navbar-side-right-md')) {\n        toggleable = element.querySelector('.navbar-expand-md');\n\n        if (toggleable) {\n          toggleable.classList.remove('navbar-expand-md');\n          toggleable.classList.add('navbar-expand-sm');\n        }\n      } else if (element.classList.contains('navbar-side-left-sm') || element.classList.contains('navbar-side-right-sm')) {\n        toggleable = element.querySelector('.navbar-expand-sm');\n\n        if (toggleable) {\n          toggleable.classList.remove('navbar-expand-sm');\n          toggleable.classList.add('navbar-expand');\n        }\n      }\n    }\n  }, {\n    key: \"checkViewport\",\n    value: function checkViewport() {\n      if (window.innerWidth > this.config.breakpointsMap['sm'] && this.observers['sm'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'sm';\n\n        if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['sm'] === 'undefined') {\n            this.element.classList.remove('navbar-scrolled');\n          } else {\n            this.element.classList.add('navbar-scrolled');\n          }\n        }\n\n        return this;\n      }\n\n      if (window.innerWidth > this.config.breakpointsMap['md'] && this.observers['md'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'md';\n\n        if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['md'] === 'undefined') {\n            this.element.classList.remove('navbar-scrolled');\n          } else {\n            this.element.classList.add('navbar-scrolled');\n          }\n        }\n\n        return this;\n      }\n\n      if (window.innerWidth > this.config.breakpointsMap['lg'] && this.observers['lg'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'lg';\n\n        if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['lg'] === 'undefined') {\n            this.element.classList.remove('navbar-scrolled');\n          } else {\n            this.element.classList.add('navbar-scrolled');\n          }\n        }\n\n        return this;\n      }\n\n      if (window.innerWidth > this.config.breakpointsMap['xl'] && this.observers['xl'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'xl';\n\n        if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['xl'] === 'undefined') {\n            this.element.classList.remove('navbar-scrolled');\n          } else {\n            this.element.classList.add('navbar-scrolled');\n          }\n        }\n\n        return this;\n      }\n\n      if (this.prevViewport) this.prevViewport = this.viewport;\n\n      if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {\n        if (typeof this.config.breakpointsMap['xs'] === 'undefined') {\n          this.element.classList.remove('navbar-scrolled');\n        } else {\n          this.element.classList.add('navbar-scrolled');\n        }\n      }\n\n      this.viewport = 'xs';\n      return this;\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      if (this.prevViewport) {\n        this.observers[this.prevViewport].forEach(function (observer) {\n          observer.destroy();\n        });\n        this.prevViewport = null;\n      }\n\n      this.observers[this.viewport].forEach(function (observer) {\n        observer.check();\n      });\n      return this;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      for (var viewport in this.observers) {\n        this.observers[viewport].forEach(function (observer) {\n          observer.destroy();\n        });\n      }\n\n      this.prevViewport = null;\n      this.observers[this.viewport].forEach(function (observer) {\n        observer.reinit();\n      });\n      return this;\n    }\n  }]);\n\n  return HSHeader;\n}();\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/hs-header.js?")
      },
      "./src/js/observers/abstract.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSAbstractObserver; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HSAbstractObserver = /*#__PURE__*/function () {\n  function HSAbstractObserver(element) {\n    _classCallCheck(this, HSAbstractObserver);\n\n    this.element = element;\n    this.defaultState = true;\n  }\n\n  _createClass(HSAbstractObserver, [{\n    key: "reinit",\n    value: function reinit() {\n      this.destroy().init().check();\n    }\n  }]);\n\n  return HSAbstractObserver;\n}();\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/abstract.js?')
      },
      "./src/js/observers/floating.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderFloatingObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HSHeaderFloatingObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderFloatingObserver, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderFloatingObserver);\n\n  function HSHeaderFloatingObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderFloatingObserver);\n\n    _this = _super.call(this, element);\n    _this.dataSettings = _this.element.hasAttribute(\'data-hs-header-options\') ? JSON.parse(_this.element.getAttribute(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderFloatingObserver, [{\n    key: "init",\n    value: function init() {\n      this.offset = this.element.offsetTop;\n      this.sections = this.element.querySelectorAll(\'.navbar-section\');\n      this.defaultState = true;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var docScrolled = window.pageYOffset;\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      this.element.classList.add(\'navbar-scrolled\');\n      this.element.classList.add(this.dataSettings.fixMomentClasses);\n      this.element.classList.remove(this.dataSettings.fixMomentExclude);\n\n      if (this.sections.length) {\n        this.sections.forEach(function ($section) {\n          var dataSettings = $section.hasAttribute(\'data-hs-navbar-item-options\') ? JSON.parse($section.getAttribute(\'data-hs-navbar-item-options\')) : {};\n          $section.classList.add(dataSettings.fixMomentClasses);\n          $section.classList.remove(dataSettings.fixMomentExclude);\n        });\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.element.classList.remove(\'navbar-scrolled\');\n      this.element.classList.remove(this.dataSettings.fixMomentClasses);\n      this.element.classList.add(this.dataSettings.fixMomentExclude);\n\n      if (this.sections.length) {\n        this.sections.forEach(function ($section) {\n          var dataSettings = $section.hasAttribute(\'data-hs-navbar-item-options\') ? JSON.parse($section.getAttribute(\'data-hs-navbar-item-options\')) : {};\n          $section.classList.add(dataSettings.fixMomentClasses);\n          $section.classList.remove(dataSettings.fixMomentExclude);\n        });\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderFloatingObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/floating.js?')
      },
      "./src/js/observers/has-hidden-element.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderHasHiddenElement; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\n/* harmony import */ var _utils_slideUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/slideUp */ "./src/js/utils/slideUp.js");\n/* harmony import */ var _utils_slideDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/slideDown */ "./src/js/utils/slideDown.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar HSHeaderHasHiddenElement = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderHasHiddenElement, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderHasHiddenElement);\n\n  function HSHeaderHasHiddenElement(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderHasHiddenElement);\n\n    _this = _super.call(this, element);\n    _this.config = {\n      animated: true\n    };\n    _this.dataSettings = _this.element.hasAttribute(\'data-hs-header-options\') ? JSON.parse(_this.element.getAttribute(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderHasHiddenElement, [{\n    key: "init",\n    value: function init() {\n      this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;\n      this.elements = this.element.querySelectorAll(\'.navbar-hidden-element\');\n      this.defaultState = true;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      if (!this.elements.length) return this;\n      var docScrolled = window.pageYOffset;\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      if (this.config.animated) {\n        this.elements.forEach(function (item) {\n          Object(_utils_slideUp__WEBPACK_IMPORTED_MODULE_1__["default"])(item);\n        });\n      } else {\n        this.elements.forEach(function (item) {\n          item.style.display = \'none\';\n        });\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      if (this.config.animated) {\n        this.elements.forEach(function (item) {\n          Object(_utils_slideDown__WEBPACK_IMPORTED_MODULE_2__["default"])(item);\n        });\n      } else {\n        this.elements.forEach(function (item) {\n          item.style.display = \'block\';\n        });\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderHasHiddenElement;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/has-hidden-element.js?')
      },
      "./src/js/observers/hide-section.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderHideSectionObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HSHeaderHideSectionObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderHideSectionObserver, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderHideSectionObserver);\n\n  function HSHeaderHideSectionObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderHideSectionObserver);\n\n    _this = _super.call(this, element);\n    _this.dataSettings = _this.element.hasAttribute(\'data-hs-header-options\') ? JSON.parse(_this.element.getAttribute(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderHideSectionObserver, [{\n    key: "init",\n    value: function init() {\n      this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;\n      this.section = this.element.querySelector(\'.navbar-section-hidden\');\n      this.defaultState = true;\n      this.sectionHeight = this.section ? this.section.offsetHeight : 0;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      if (this.section) {\n        this.element.transition = \'margin-top .5s\';\n        this.element.style.marginTop = 0;\n      }\n\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      if (!this.section) return this;\n      var docScrolled = window.pageYOffset;\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      var self = this;\n      this.element.transition = \'margin-top .5s\';\n      this.element.style.marginTop = self.sectionHeight * -1 - 1 + \'px\';\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.element.transition = \'margin-top .5s\';\n      this.element.style.marginTop = 0;\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderHideSectionObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/hide-section.js?')
      },
      "./src/js/observers/moment-show-hide.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderMomentShowHideObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HSHeaderMomentShowHideObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderMomentShowHideObserver, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderMomentShowHideObserver);\n\n  function HSHeaderMomentShowHideObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderMomentShowHideObserver);\n\n    _this = _super.call(this, element);\n    _this.dataSettings = _this.element.hasAttribute(\'data-hs-header-options\') ? JSON.parse(_this.element.getAttribute(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderMomentShowHideObserver, [{\n    key: "init",\n    value: function init() {\n      this.direction = \'down\';\n      this.delta = 0;\n      this.defaultState = true;\n      this.offset = isFinite(this.dataSettings.fixMoment) && this.dataSettings.fixMoment !== 0 ? this.dataSettings.fixMoment : 5;\n      this.effect = this.dataSettings.fixEffect ? this.dataSettings.fixEffect : \'show-hide\';\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "checkDirection",\n    value: function checkDirection() {\n      if (window.pageYOffset > this.delta) {\n        this.direction = \'down\';\n      } else {\n        this.direction = \'up\';\n      }\n\n      this.delta = window.pageYOffset;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      switch (this.effect) {\n        case \'slide\':\n          this.element.classList.remove(\'navbar-moved-up\');\n          break;\n\n        case \'fade\':\n          this.element.classList.remove(\'navbar-faded\');\n          break;\n\n        default:\n          this.element.classList.remove(\'navbar-invisible\');\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      switch (this.effect) {\n        case \'slide\':\n          this.element.classList.add(\'navbar-moved-up\');\n          break;\n\n        case \'fade\':\n          this.element.classList.add(\'navbar-faded\');\n          break;\n\n        default:\n          this.element.classList.add(\'navbar-invisible\');\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var docScrolled = window.pageYOffset;\n      this.checkDirection();\n\n      if (docScrolled >= this.offset && this.defaultState && this.direction === \'down\') {\n        this.changeState();\n      } else if (!this.defaultState && this.direction === \'up\') {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }]);\n\n  return HSHeaderMomentShowHideObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/moment-show-hide.js?')
      },
      "./src/js/observers/show-hide.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSHeaderShowHideObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ \"./src/js/observers/abstract.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HSHeaderShowHideObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderShowHideObserver, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderShowHideObserver);\n\n  function HSHeaderShowHideObserver(element, config) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderShowHideObserver);\n\n    _this = _super.call(this, element, config);\n    _this.dataSettings = _this.element.hasAttribute('data-hs-header-options') ? JSON.parse(_this.element.getAttribute('data-hs-header-options')) : {};\n    _this.config = config;\n    return _this;\n  }\n\n  _createClass(HSHeaderShowHideObserver, [{\n    key: \"init\",\n    value: function init() {\n      if (!this.defaultState && window.pageYOffset > this.offset) return this;\n      this.defaultState = true;\n      this.transitionDuration = parseFloat(getComputedStyle(this.element)['transition-duration'], 10) * 1000;\n      this.offset = isFinite(this.dataSettings.fixMoment) && this.dataSettings.fixMoment > this.element.offsetHeight ? this.dataSettings.fixMoment : this.element.offsetHeight + 100;\n      this.effect = this.dataSettings.fixEffect ? this.dataSettings.fixEffect : 'show-hide';\n      return this;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.defaultState && window.pageYOffset > this.offset) return this;\n      this.element.classList.remove('navbar-untransitioned');\n\n      this._removeCap();\n\n      return this;\n    }\n  }, {\n    key: \"check\",\n    value: function check() {\n      if (window.pageYOffset > this.element.offsetHeight && !this.capInserted) {\n        this._insertCap();\n      } else if (window.pageYOffset <= this.element.offsetHeight && this.capInserted) {\n        this._removeCap();\n      }\n\n      if (window.pageYOffset > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (window.pageYOffset <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n    }\n  }, {\n    key: \"changeState\",\n    value: function changeState() {\n      if (this.config.fixMomentClasses) {\n        var _this$element$classLi;\n\n        (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, _toConsumableArray(this.config.fixMomentClasses));\n      }\n\n      this.element.classList.remove('navbar-untransitioned');\n      if (this.animationTimeoutId) clearTimeout(this.animationTimeoutId);\n\n      switch (this.effect) {\n        case 'fade':\n          this.element.classList.remove('navbar-faded');\n          break;\n\n        case 'slide':\n          this.element.classList.remove('navbar-moved-up');\n          break;\n\n        default:\n          this.element.classList.remove('navbar-invisible');\n      }\n\n      this.defaultState = !this.defaultState;\n    }\n  }, {\n    key: \"toDefaultState\",\n    value: function toDefaultState() {\n      var self = this;\n\n      if (this.config.fixMomentClasses) {\n        var _this$element$classLi2;\n\n        (_this$element$classLi2 = this.element.classList).remove.apply(_this$element$classLi2, _toConsumableArray(this.config.fixMomentClasses));\n      }\n\n      this.animationTimeoutId = setTimeout(function () {\n        self.element.classList.add('navbar-untransitioned');\n      }, this.transitionDuration);\n\n      switch (this.effect) {\n        case 'fade':\n          this.element.classList.add('navbar-faded');\n          break;\n\n        case 'slide':\n          this.element.classList.add('navbar-moved-up');\n          break;\n\n        default:\n          this.element.classList.add('navbar-invisible');\n      }\n\n      this.defaultState = !this.defaultState;\n    }\n  }, {\n    key: \"_insertCap\",\n    value: function _insertCap() {\n      this.element.classList.add('navbar-scrolled', 'navbar-untransitioned');\n\n      if (this.element.classList.contains('navbar-static')) {\n        document.documentElement.style.paddingTop = this.element.offsetHeight;\n      }\n\n      switch (this.effect) {\n        case 'fade':\n          this.element.classList.add('navbar-faded');\n          break;\n\n        case 'slide':\n          this.element.classList.add('navbar-moved-up');\n          break;\n\n        default:\n          this.element.classList.add('navbar-invisible');\n      }\n\n      this.capInserted = true;\n    }\n  }, {\n    key: \"_removeCap\",\n    value: function _removeCap() {\n      var self = this;\n      this.element.classList.remove('navbar-scrolled');\n\n      if (this.element.classList.contains('navbar-static')) {\n        document.documentElement.style.paddingTop = 0;\n      }\n\n      if (this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);\n      this.removeCapTimeOutId = setTimeout(function () {\n        self.element.classList.remove('navbar-moved-up', 'navbar-faded', 'navbar-invisible');\n      }, 10);\n      this.capInserted = false;\n    }\n  }]);\n\n  return HSHeaderShowHideObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/show-hide.js?")
      },
      "./src/js/observers/sticky.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderStickObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HSHeaderStickObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderStickObserver, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderStickObserver);\n\n  function HSHeaderStickObserver(element) {\n    _classCallCheck(this, HSHeaderStickObserver);\n\n    return _super.call(this, element);\n  }\n\n  _createClass(HSHeaderStickObserver, [{\n    key: "init",\n    value: function init() {\n      this.defaultState = true;\n      this.offset = this.element.offsetTop;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var docScrolled = window.pageYOffset;\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      this.element.classList.add(\'navbar-scrolled\');\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.element.classList.remove(\'navbar-scrolled\');\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderStickObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/sticky.js?')
      },
      "./src/js/observers/without-behavior.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderWithoutBehaviorObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HSHeaderWithoutBehaviorObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderWithoutBehaviorObserver, _HSAbstractObserver);\n\n  var _super = _createSuper(HSHeaderWithoutBehaviorObserver);\n\n  function HSHeaderWithoutBehaviorObserver(element) {\n    _classCallCheck(this, HSHeaderWithoutBehaviorObserver);\n\n    return _super.call(this, element);\n  }\n\n  _createClass(HSHeaderWithoutBehaviorObserver, [{\n    key: "init",\n    value: function init() {\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      return this;\n    }\n  }]);\n\n  return HSHeaderWithoutBehaviorObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/without-behavior.js?')
      },
      "./src/js/utils/slideDown.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar slideDown = function slideDown(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.removeProperty('display');\n  var display = window.getComputedStyle(target).display;\n  if (display === 'none') display = 'block';\n  target.style.display = display;\n  var height = target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  target.offsetHeight;\n  target.style.boxSizing = 'border-box';\n  target.style.transitionProperty = \"height, margin, padding\";\n  target.style.transitionDuration = duration + 'ms';\n  target.style.height = height + 'px';\n  target.style.removeProperty('padding-top');\n  target.style.removeProperty('padding-bottom');\n  target.style.removeProperty('margin-top');\n  target.style.removeProperty('margin-bottom');\n  window.setTimeout(function () {\n    target.style.removeProperty('height');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property');\n  }, duration);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideDown);\n\n//# sourceURL=webpack://HSHeader/./src/js/utils/slideDown.js?")
      },
      "./src/js/utils/slideUp.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar slideUp = function slideUp(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.transitionProperty = 'height, margin, padding';\n  target.style.transitionDuration = duration + 'ms';\n  target.style.boxSizing = 'border-box';\n  target.style.height = target.offsetHeight + 'px';\n  target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  window.setTimeout(function () {\n    target.style.display = 'none';\n    target.style.removeProperty('height');\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property'); //alert(\"!\");\n  }, duration);\n  return target;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideUp);\n\n//# sourceURL=webpack://HSHeader/./src/js/utils/slideUp.js?")
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-header.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd)
      define([], e);
    else {
      var n = e();
      for (var r in n)
        ("object" == typeof exports ? exports : t)[r] = n[r]
    }
  }(window, (function () {
    return function (t) {
      var e = {};
      function n(r) {
        if (e[r])
          return e[r].exports;
        var s = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(s.exports, s, s.exports, n),
          s.l = !0,
          s.exports
      }
      return n.m = t,
        n.c = e,
        n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
          })
        }
        ,
        n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }),
            Object.defineProperty(t, "__esModule", {
              value: !0
            })
        }
        ,
        n.t = function (t, e) {
          if (1 & e && (t = n(t)),
            8 & e)
            return t;
          if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
          var r = Object.create(null);
          if (n.r(r),
            Object.defineProperty(r, "default", {
              enumerable: !0,
              value: t
            }),
            2 & e && "string" != typeof t)
            for (var s in t)
              n.d(r, s, function (e) {
                return t[e]
              }
                .bind(null, s));
          return r
        }
        ,
        n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          }
            : function () {
              return t
            }
            ;
          return n.d(e, "a", e),
            e
        }
        ,
        n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 0)
    }([function (t, e, n) {
      "use strict";
      n.r(e);
      var r, s = "fslightbox-", i = "".concat(s, "styles"), a = "".concat(s, "cursor-grabbing"), o = "".concat(s, "full-dimension"), l = "".concat(s, "flex-centered"), c = "".concat(s, "open"), u = "".concat(s, "transform-transition"), p = "".concat(s, "absoluted"), d = "".concat(s, "slide-btn"), h = "".concat(d, "-container"), f = "".concat(s, "fade-in"), m = "".concat(s, "fade-out"), g = f + "-strong", v = m + "-strong", y = "".concat(s, "opacity-"), b = "".concat(y, "1"), _ = "".concat(s, "source");
      function w(t) {
        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        }
          : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
        )(t)
      }
      function S(t) {
        var e, n = t.props, r = 0, s = {};
        this.getSourceTypeFromLocalStorageByUrl = function (t) {
          return e[t] ? e[t] : i(t)
        }
          ,
          this.handleReceivedSourceTypeForUrl = function (t, n) {
            !1 === s[n] && (r--,
              "invalid" !== t ? s[n] = t : delete s[n],
              0 === r && (function (t, e) {
                for (var n in e)
                  t[n] = e[n]
              }(e, s),
                localStorage.setItem("fslightbox-types", JSON.stringify(e))))
          }
          ;
        var i = function (t) {
          r++,
            s[t] = !1
        };
        n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () { }
          ,
          this.handleReceivedSourceTypeForUrl = function () { }
        ) : (e = JSON.parse(localStorage.getItem("fslightbox-types"))) || (e = {},
          this.getSourceTypeFromLocalStorageByUrl = i)
      }
      function C(t, e, n, r) {
        var s = t.data
          , i = t.elements.sources
          , a = n / r
          , o = 0;
        this.adjustSize = function () {
          if ((o = s.maxSourceWidth / a) < s.maxSourceHeight)
            return n < s.maxSourceWidth && (o = r),
              l();
          o = r > s.maxSourceHeight ? s.maxSourceHeight : r,
            l()
        }
          ;
        var l = function () {
          i[e].style.width = o * a + "px",
            i[e].style.height = o + "px"
        }
      }
      function x(t, e) {
        var n = this
          , r = t.collections.sourceSizers
          , s = t.elements
          , i = s.sourceAnimationWrappers
          , a = s.sourceMainWrappers
          , o = s.sources
          , l = t.resolve;
        function c(t, n) {
          r[e] = l(C, [e, t, n]),
            r[e].adjustSize()
        }
        this.runActions = function (t, r) {
          o[e].classList.add(b),
            i[e].classList.add(g),
            a[e].removeChild(a[e].firstChild),
            c(t, r),
            n.runActions = c
        }
      }
      function E(t, e) {
        var n, r = this, s = t.elements.sources, i = t.props, a = (0,
          t.resolve)(x, [e]);
        this.handleImageLoad = function (t) {
          var e = t.target
            , n = e.naturalWidth
            , r = e.naturalHeight;
          a.runActions(n, r)
        }
          ,
          this.handleVideoLoad = function (t) {
            var e = t.target
              , r = e.videoWidth
              , s = e.videoHeight;
            n = !0,
              a.runActions(r, s)
          }
          ,
          this.handleNotMetaDatedVideoLoad = function () {
            n || r.handleYoutubeLoad()
          }
          ,
          this.handleYoutubeLoad = function () {
            var t = 1920
              , e = 1080;
            i.maxYoutubeDimensions && (t = i.maxYoutubeDimensions.width,
              e = i.maxYoutubeDimensions.height),
              a.runActions(t, e)
          }
          ,
          this.handleCustomLoad = function () {
            setTimeout((function () {
              var t = s[e];
              a.runActions(t.offsetWidth, t.offsetHeight)
            }
            ))
          }
      }
      function k(t, e, n) {
        var r = t.elements.sources
          , s = t.props.customClasses
          , i = s[e] ? s[e] : "";
        r[e].className = n + " " + i
      }
      function T(t, e) {
        var n = t.elements.sources
          , r = t.props.customAttributes;
        for (var s in r[e])
          n[e].setAttribute(s, r[e][s])
      }
      function P(t, e) {
        var n = t.collections.sourceLoadHandlers
          , r = t.elements
          , s = r.sources
          , i = r.sourceAnimationWrappers
          , a = t.props.sources;
        s[e] = document.createElement("img"),
          k(t, e, _),
          s[e].src = a[e],
          s[e].onload = n[e].handleImageLoad,
          T(t, e),
          i[e].appendChild(s[e])
      }
      function O(t, e) {
        var n = t.collections.sourceLoadHandlers
          , r = t.elements
          , s = r.sources
          , i = r.sourceAnimationWrappers
          , a = t.props
          , o = a.sources
          , l = a.videosPosters;
        s[e] = document.createElement("video"),
          k(t, e, _),
          s[e].src = o[e],
          s[e].onloadedmetadata = function (t) {
            n[e].handleVideoLoad(t)
          }
          ,
          s[e].controls = !0,
          T(t, e),
          l[e] && (s[e].poster = l[e]);
        var c = document.createElement("source");
        c.src = o[e],
          s[e].appendChild(c),
          setTimeout(n[e].handleNotMetaDatedVideoLoad, 3e3),
          i[e].appendChild(s[e])
      }
      function M(t, e) {
        var n = t.collections.sourceLoadHandlers
          , r = t.elements
          , i = r.sources
          , a = r.sourceAnimationWrappers
          , o = t.props.sources;
        i[e] = document.createElement("iframe"),
          k(t, e, "".concat(_, " ").concat(s, "youtube-iframe")),
          i[e].src = "https://www.youtube.com/embed/".concat(o[e].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"),
          i[e].allowFullscreen = !0,
          T(t, e),
          a[e].appendChild(i[e]),
          n[e].handleYoutubeLoad()
      }
      function A(t, e) {
        var n = t.collections.sourceLoadHandlers
          , r = t.elements
          , s = r.sources
          , i = r.sourceAnimationWrappers
          , a = t.props.sources;
        s[e] = a[e],
          k(t, e, "".concat(s[e].className, " ").concat(_)),
          i[e].appendChild(s[e]),
          n[e].handleCustomLoad()
      }
      function j(t, e) {
        var n = t.elements
          , r = n.sources
          , i = n.sourceAnimationWrappers
          , a = n.sourceMainWrappers;
        t.props.sources,
          r[e] = document.createElement("div"),
          r[e].className = "".concat(s, "invalid-file-wrapper ").concat(l),
          r[e].innerHTML = "Invalid source",
          i[e].classList.add(g),
          i[e].appendChild(r[e]),
          a[e].removeChild(a[e].firstChild)
      }
      function I(t) {
        var e = t.collections
          , n = e.sourceLoadHandlers
          , r = e.sourcesRenderFunctions
          , s = t.core.sourceDisplayFacade
          , i = t.resolve;
        this.runActionsForSourceTypeAndIndex = function (e, a) {
          var o;
          switch ("invalid" !== e && (n[a] = i(E, [a])),
          e) {
            case "image":
              o = P;
              break;
            case "video":
              o = O;
              break;
            case "youtube":
              o = M;
              break;
            case "custom":
              o = A;
              break;
            default:
              o = j
          }
          r[a] = function () {
            return o(t, a)
          }
            ,
            s.displaySourcesWhichShouldBeDisplayed()
        }
      }
      function D() {
        var t, e, n, r = function (t) {
          var e = document.createElement("a");
          return e.href = t,
            "www.youtube.com" === e.hostname
        }, s = function (t) {
          return t.slice(0, t.indexOf("/"))
        };
        function i() {
          if (4 !== n.readyState) {
            if (2 === n.readyState) {
              var t;
              switch (s(n.getResponseHeader("content-type"))) {
                case "image":
                  t = "image";
                  break;
                case "video":
                  t = "video";
                  break;
                default:
                  t = "invalid"
              }
              n.onreadystatechange = null,
                n.abort(),
                e(t)
            }
          } else
            e("invalid")
        }
        this.setUrlToCheck = function (e) {
          t = e
        }
          ,
          this.getSourceType = function (s) {
            if (r(t))
              return s("youtube");
            e = s,
              (n = new XMLHttpRequest).onreadystatechange = i,
              n.open("GET", t, !0),
              n.send()
          }
      }
      function L(t, e, n) {
        var r = t.props
          , s = r.types
          , i = r.type
          , a = r.sources
          , o = t.resolve;
        this.getTypeSetByClientForIndex = function (t) {
          var e;
          return s && s[t] ? e = s[t] : i && (e = i),
            e
        }
          ,
          this.retrieveTypeWithXhrForIndex = function (t) {
            var r = o(D);
            r.setUrlToCheck(a[t]),
              r.getSourceType((function (r) {
                e.handleReceivedSourceTypeForUrl(r, a[t]),
                  n.runActionsForSourceTypeAndIndex(r, t)
              }
              ))
          }
      }
      function V(t, e) {
        var n = t.componentsServices.hideSourceLoaderIfNotYetCollection
          , r = t.elements
          , s = r.sourceWrappersContainer
          , i = r.sourceMainWrappers;
        i[e] = document.createElement("div"),
          i[e].className = "".concat(p, " ").concat(o, " ").concat(l),
          i[e].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
        var a = i[e].firstChild;
        n[e] = function () {
          i[e].contains(a) && i[e].removeChild(a)
        }
          ,
          s.appendChild(i[e]),
          function (t, e) {
            var n = t.elements
              , r = n.sourceMainWrappers
              , s = n.sourceAnimationWrappers;
            s[e] = document.createElement("div"),
              r[e].appendChild(s[e])
          }(t, e)
      }
      function $(t, e, n, r) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        i.setAttributeNS(null, "width", e),
          i.setAttributeNS(null, "height", e),
          i.setAttributeNS(null, "viewBox", n);
        var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return a.setAttributeNS(null, "class", "".concat(s, "svg-path")),
          a.setAttributeNS(null, "d", r),
          i.appendChild(a),
          t.appendChild(i),
          i
      }
      function N(t, e) {
        var n = document.createElement("div");
        return n.className = "".concat(s, "toolbar-button ").concat(l),
          n.title = e,
          t.appendChild(n),
          n
      }
      function H(t) {
        var e = t.props.sources
          , n = t.elements.container
          , r = document.createElement("div");
        r.className = "".concat(s, "nav"),
          n.appendChild(r),
          function (t, e) {
            var n = document.createElement("div");
            n.className = "".concat(s, "toolbar"),
              e.appendChild(n),
              function (t, e) {
                var n = t.componentsServices
                  , r = t.core.fullscreenToggler
                  , s = t.data
                  , i = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
                  , a = N(e);
                a.title = "Enter fullscreen";
                var o = $(a, "20px", "0 0 18 18", i);
                n.enterFullscreen = function () {
                  s.isFullscreenOpen = !0,
                    a.title = "Exit fullscreen",
                    o.setAttributeNS(null, "width", "24px"),
                    o.setAttributeNS(null, "height", "24px"),
                    o.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                    o.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                }
                  ,
                  n.exitFullscreen = function () {
                    s.isFullscreenOpen = !1,
                      a.title = "Enter fullscreen",
                      o.setAttributeNS(null, "width", "20px"),
                      o.setAttributeNS(null, "height", "20px"),
                      o.setAttributeNS(null, "viewBox", "0 0 18 18"),
                      o.firstChild.setAttributeNS(null, "d", i)
                  }
                  ,
                  a.onclick = function () {
                    s.isFullscreenOpen ? r.exitFullscreen() : r.enterFullscreen()
                  }
              }(t, n),
              function (t, e) {
                var n = N(e, "Close");
                n.onclick = t.core.lightboxCloser.closeLightbox,
                  $(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
              }(t, n)
          }(t, r),
          e.length > 1 && function (t, e) {
            var n = t.componentsServices
              , r = t.props.sources
              , i = (t.stageIndexes,
                document.createElement("div"));
            i.className = "".concat(s, "slide-number-container");
            var a = document.createElement("div");
            a.className = l;
            var o = document.createElement("span");
            n.setSlideNumber = function (t) {
              return o.innerHTML = t
            }
              ;
            var c = document.createElement("span");
            c.className = "".concat(s, "slash");
            var u = document.createElement("div");
            u.innerHTML = r.length,
              i.appendChild(a),
              a.appendChild(o),
              a.appendChild(c),
              a.appendChild(u),
              e.appendChild(i),
              setTimeout((function () {
                a.offsetWidth > 55 && (i.style.justifyContent = "flex-start")
              }
              ))
          }(t, r)
      }
      function R(t, e) {
        var n = this
          , r = t.elements.sourceMainWrappers
          , s = t.props
          , i = 0;
        this.byValue = function (t) {
          return i = t,
            n
        }
          ,
          this.negative = function () {
            a(-o())
          }
          ,
          this.zero = function () {
            a(0)
          }
          ,
          this.positive = function () {
            a(o())
          }
          ;
        var a = function (t) {
          r[e].style.transform = "translateX(".concat(t + i, "px)"),
            i = 0
        }
          , o = function () {
            return (1 + s.slideDistance) * innerWidth
          }
      }
      function z(t, e, n, r) {
        var s = t.elements.container
          , i = n.charAt(0).toUpperCase() + n.slice(1)
          , a = document.createElement("div");
        a.className = "".concat(h, " ").concat(h, "-").concat(n),
          a.title = "".concat(i, " slide"),
          a.onclick = e,
          function (t, e) {
            var n = document.createElement("div");
            n.className = "".concat(d, " ").concat(l),
              $(n, "20px", "0 0 20 20", e),
              t.appendChild(n)
          }(a, r),
          s.appendChild(a)
      }
      function q(t, e) {
        var n = t.classList;
        n.contains(e) && n.remove(e)
      }
      function B(t) {
        var e = this
          , n = t.core
          , r = n.eventsDispatcher
          , s = n.fullscreenToggler
          , i = n.globalEventsController
          , a = n.scrollbarRecompensor
          , o = t.data
          , l = t.elements
          , u = t.props
          , p = t.sourcePointerProps;
        this.isLightboxFadingOut = !1,
          this.runActions = function () {
            e.isLightboxFadingOut = !0,
              l.container.classList.add(v),
              i.removeListeners(),
              u.exitFullscreenOnClose && o.isFullscreenOpen && s.exitFullscreen(),
              setTimeout((function () {
                e.isLightboxFadingOut = !1,
                  p.isPointering = !1,
                  l.container.classList.remove(v),
                  document.documentElement.classList.remove(c),
                  a.removeRecompense(),
                  document.body.removeChild(l.container),
                  r.dispatch("onClose")
              }
              ), 270)
          }
      }
      function F(t) {
        var e = t.core
          , n = e.lightboxCloser
          , r = e.fullscreenToggler
          , s = e.slideChangeFacade;
        this.listener = function (t) {
          switch (t.key) {
            case "Escape":
              n.closeLightbox();
              break;
            case "ArrowLeft":
              s.changeToPrevious();
              break;
            case "ArrowRight":
              s.changeToNext();
              break;
            case "F11":
              t.preventDefault(),
                r.enterFullscreen()
          }
        }
      }
      function W(t) {
        var e = t.collections.sourceMainWrappersTransformers
          , n = t.elements
          , r = t.sourcePointerProps
          , s = t.stageIndexes;
        function i(t, n) {
          e[t].byValue(r.swipedX)[n]()
        }
        this.runActionsForEvent = function (t) {
          var e, o, l;
          n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer),
            e = n.container,
            o = a,
            (l = e.classList).contains(o) || l.add(o),
            r.swipedX = t.screenX - r.downScreenX,
            i(s.current, "zero"),
            void 0 !== s.previous && r.swipedX > 0 ? i(s.previous, "negative") : void 0 !== s.next && r.swipedX < 0 && i(s.next, "positive")
        }
      }
      function U(t) {
        var e = t.props.sources
          , n = t.resolve
          , r = t.sourcePointerProps
          , s = n(W);
        1 === e.length ? this.listener = function () {
          r.swipedX = 1
        }
          : this.listener = function (t) {
            r.isPointering && s.runActionsForEvent(t)
          }
      }
      function G(t) {
        var e = t.collections.sourceMainWrappersTransformers
          , n = t.core.slideIndexChanger
          , r = t.elements.sourceMainWrappers
          , s = t.stageIndexes;
        this.runPositiveSwipedXActions = function () {
          void 0 === s.previous || (i("positive"),
            n.changeTo(s.previous)),
            i("zero")
        }
          ,
          this.runNegativeSwipedXActions = function () {
            void 0 === s.next || (i("negative"),
              n.changeTo(s.next)),
              i("zero")
          }
          ;
        var i = function (t) {
          r[s.current].classList.add(u),
            e[s.current][t]()
        }
      }
      function Y(t, e) {
        t.contains(e) && t.removeChild(e)
      }
      function X(t) {
        var e = t.core.lightboxCloser
          , n = t.elements
          , r = t.resolve
          , s = t.sourcePointerProps
          , i = r(G);
        this.runNoSwipeActions = function () {
          Y(n.container, n.slideSwipingHoverer),
            s.isSourceDownEventTarget || e.closeLightbox(),
            s.isPointering = !1
        }
          ,
          this.runActions = function () {
            s.swipedX > 0 ? i.runPositiveSwipedXActions() : i.runNegativeSwipedXActions(),
              Y(n.container, n.slideSwipingHoverer),
              n.container.classList.remove(a),
              s.isPointering = !1
          }
      }
      function K(t) {
        var e = t.resolve
          , n = t.sourcePointerProps
          , r = e(X);
        this.listener = function () {
          n.isPointering && (n.swipedX ? r.runActions() : r.runNoSwipeActions())
        }
      }
      function Q(t) {
        var e, n, r;
        n = (e = t).core.classFacade,
          r = e.elements,
          n.removeFromEachElementClassIfContains = function (t, e) {
            for (var n = 0; n < r[t].length; n++)
              q(r[t][n], e)
          }
          ,
          function (t) {
            var e = t.core.eventsDispatcher
              , n = t.props;
            e.dispatch = function (t) {
              n[t] && n[t]()
            }
          }(t),
          function (t) {
            var e = t.componentsServices
              , n = t.core.fullscreenToggler;
            n.enterFullscreen = function () {
              e.enterFullscreen();
              var t = document.documentElement;
              t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
            }
              ,
              n.exitFullscreen = function () {
                e.exitFullscreen(),
                  document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
              }
          }(t),
          function (t) {
            var e = t.core
              , n = e.globalEventsController
              , r = e.windowResizeActioner
              , s = t.resolve
              , i = s(F)
              , a = s(U)
              , o = s(K);
            n.attachListeners = function () {
              document.addEventListener("pointermove", a.listener),
                document.addEventListener("pointerup", o.listener),
                addEventListener("resize", r.runActions),
                document.addEventListener("keydown", i.listener)
            }
              ,
              n.removeListeners = function () {
                document.removeEventListener("pointermove", a.listener),
                  document.removeEventListener("pointerup", o.listener),
                  removeEventListener("resize", r.runActions),
                  document.removeEventListener("keydown", i.listener)
              }
          }(t),
          function (t) {
            var e = t.core.lightboxCloser
              , n = (0,
                t.resolve)(B);
            e.closeLightbox = function () {
              n.isLightboxFadingOut || n.runActions()
            }
          }(t),
          Z(t),
          function (t) {
            var e = t.data
              , n = t.core.scrollbarRecompensor;
            n.addRecompense = function () {
              "complete" === document.readyState ? r() : addEventListener("load", (function () {
                r(),
                  n.addRecompense = r
              }
              ))
            }
              ;
            var r = function () {
              document.body.offsetHeight > innerHeight && (document.body.style.marginRight = e.scrollbarWidth + "px")
            };
            n.removeRecompense = function () {
              document.body.style.removeProperty("margin-right")
            }
          }(t),
          function (t) {
            var e = t.core
              , n = e.slideChangeFacade
              , r = e.slideIndexChanger
              , s = e.stageManager;
            t.props.sources.length > 1 ? (n.changeToPrevious = function () {
              r.jumpTo(s.getPreviousSlideIndex())
            }
              ,
              n.changeToNext = function () {
                r.jumpTo(s.getNextSlideIndex())
              }
            ) : (n.changeToPrevious = function () { }
              ,
              n.changeToNext = function () { }
            )
          }(t),
          function (t) {
            var e, n, r = t.collections.sourceMainWrappersTransformers, s = t.componentsServices, i = t.core, a = i.classFacade, o = i.slideIndexChanger, l = i.sourceDisplayFacade, c = i.stageManager, p = t.elements.sourceAnimationWrappers, d = t.stageIndexes, h = (e = function () {
              a.removeFromEachElementClassIfContains("sourceAnimationWrappers", m)
            }
              ,
              300,
              n = [],
              function () {
                n.push(!0),
                  setTimeout((function () {
                    n.pop(),
                      n.length || e()
                  }
                  ), 300)
              }
            );
            o.changeTo = function (t) {
              d.current = t,
                c.updateStageIndexes(),
                s.setSlideNumber(t + 1),
                l.displaySourcesWhichShouldBeDisplayed()
            }
              ,
              o.jumpTo = function (t) {
                var e = d.current;
                o.changeTo(t),
                  a.removeFromEachElementClassIfContains("sourceMainWrappers", u),
                  q(p[e], g),
                  q(p[e], f),
                  p[e].classList.add(m),
                  q(p[t], g),
                  q(p[t], m),
                  p[t].classList.add(f),
                  h(),
                  r[t].zero(),
                  setTimeout((function () {
                    e !== d.current && r[e].negative()
                  }
                  ), 270)
              }
          }(t),
          function (t) {
            var e = t.core
              , n = e.classFacade
              , r = e.sourcesPointerDown
              , s = t.elements.sources
              , i = t.sourcePointerProps
              , a = t.stageIndexes;
            r.listener = function (t) {
              "VIDEO" !== t.target.tagName && t.preventDefault(),
                i.isPointering = !0,
                i.downScreenX = t.screenX,
                i.swipedX = 0;
              var e = s[a.current];
              e && e.contains(t.target) ? i.isSourceDownEventTarget = !0 : i.isSourceDownEventTarget = !1,
                n.removeFromEachElementClassIfContains("sourceMainWrappers", u)
            }
          }(t),
          function (t) {
            var e = t.collections.sourcesRenderFunctions
              , n = t.core.sourceDisplayFacade
              , r = t.props
              , s = t.stageIndexes;
            function i(t) {
              e[t] && (e[t](),
                delete e[t])
            }
            n.displaySourcesWhichShouldBeDisplayed = function () {
              if (r.loadOnlyCurrentSource)
                i(s.current);
              else
                for (var t in s)
                  i(s[t])
            }
          }(t),
          function (t) {
            var e = t.stageIndexes
              , n = t.core.stageManager
              , r = t.props.sources.length - 1;
            n.getPreviousSlideIndex = function () {
              return 0 === e.current ? r : e.current - 1
            }
              ,
              n.getNextSlideIndex = function () {
                return e.current === r ? 0 : e.current + 1
              }
              ,
              n.updateStageIndexes = 0 === r ? function () { }
                : 1 === r ? function () {
                  0 === e.current ? (e.next = 1,
                    delete e.previous) : (e.previous = 0,
                      delete e.next)
                }
                  : function () {
                    e.previous = n.getPreviousSlideIndex(),
                      e.next = n.getNextSlideIndex()
                  }
              ,
              n.isSourceInStage = r <= 2 ? function () {
                return !0
              }
                : function (t) {
                  var n = e.current;
                  if (0 === n && t === r || n === r && 0 === t)
                    return !0;
                  var s = n - t;
                  return -1 === s || 0 === s || 1 === s
                }
          }(t),
          function (t) {
            var e = t.collections
              , n = e.sourceMainWrappersTransformers
              , r = e.sourceSizers
              , s = t.core.windowResizeActioner
              , i = t.data
              , a = t.elements.sourceMainWrappers
              , o = t.props
              , l = t.stageIndexes;
            s.runActions = function () {
              innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = .9 * innerWidth,
                i.maxSourceHeight = .9 * innerHeight;
              for (var t = 0; t < o.sources.length; t++)
                q(a[t], u),
                  t !== l.current && n[t].negative(),
                  r[t] && r[t].adjustSize()
            }
          }(t)
      }
      function J(t) {
        var e = t.core.eventsDispatcher
          , n = t.data
          , r = t.elements
          , i = t.props.sources;
        n.isInitialized = !0,
          n.scrollbarWidth = function (t) {
            var e = t.props.disableLocalStorage;
            if (!e) {
              var n = localStorage.getItem("fslightbox-scrollbar-width");
              if (n)
                return n
            }
            var r = function () {
              var t = document.createElement("div")
                , e = t.style;
              return e.visibility = "hidden",
                e.width = "100px",
                e.msOverflowStyle = "scrollbar",
                e.overflow = "scroll",
                t
            }()
              , s = function () {
                var t = document.createElement("div");
                return t.style.width = "100%",
                  t
              }();
            document.body.appendChild(r);
            var i = r.offsetWidth;
            r.appendChild(s);
            var a = s.offsetWidth;
            document.body.removeChild(r);
            var o = i - a;
            return e || localStorage.setItem("fslightbox-scrollbar-width", o.toString()),
              o
          }(t),
          function (t) {
            for (var e = t.collections.sourceMainWrappersTransformers, n = t.props.sources, r = t.resolve, s = 0; s < n.length; s++)
              e[s] = r(R, [s])
          }(t),
          Q(t),
          r.container = document.createElement("div"),
          r.container.className = "".concat(s, "container ").concat(o, " ").concat(g),
          function (t) {
            var e = t.elements;
            e.slideSwipingHoverer = document.createElement("div"),
              e.slideSwipingHoverer.className = "".concat(s, "slide-swiping-hoverer ").concat(o, " ").concat(p)
          }(t),
          H(t),
          function (t) {
            var e = t.core.sourcesPointerDown
              , n = t.elements
              , r = t.props.sources
              , s = document.createElement("div");
            s.className = "".concat(p, " ").concat(o),
              n.container.appendChild(s),
              s.addEventListener("pointerdown", e.listener),
              n.sourceWrappersContainer = s;
            for (var i = 0; i < r.length; i++)
              V(t, i)
          }(t),
          i.length > 1 && function (t) {
            var e = t.core.slideChangeFacade;
            z(t, e.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),
              z(t, e.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")
          }(t),
          function (t) {
            for (var e = t.props.sources, n = t.resolve, r = n(S), s = n(I), i = n(L, [r, s]), a = 0; a < e.length; a++)
              if ("string" == typeof e[a]) {
                var o = i.getTypeSetByClientForIndex(a);
                if (o)
                  s.runActionsForSourceTypeAndIndex(o, a);
                else {
                  var l = r.getSourceTypeFromLocalStorageByUrl(e[a]);
                  l ? s.runActionsForSourceTypeAndIndex(l, a) : i.retrieveTypeWithXhrForIndex(a)
                }
              } else
                s.runActionsForSourceTypeAndIndex("custom", a)
          }(t),
          e.dispatch("onInit")
      }
      function Z(t) {
        var e = t.collections.sourceMainWrappersTransformers
          , n = t.componentsServices
          , r = t.core
          , s = r.eventsDispatcher
          , i = r.lightboxOpener
          , a = r.globalEventsController
          , o = r.scrollbarRecompensor
          , l = r.sourceDisplayFacade
          , u = r.stageManager
          , p = r.windowResizeActioner
          , d = t.data
          , h = t.elements
          , f = t.stageIndexes;
        i.open = function () {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          f.current = r,
            d.isInitialized ? s.dispatch("onShow") : J(t),
            u.updateStageIndexes(),
            l.displaySourcesWhichShouldBeDisplayed(),
            n.setSlideNumber(r + 1),
            document.body.appendChild(h.container),
            document.documentElement.classList.add(c),
            o.addRecompense(),
            a.attachListeners(),
            p.runActions(),
            e[f.current].zero(),
            s.dispatch("onOpen")
        }
      }
      function tt(t, e, n) {
        return (tt = et() ? Reflect.construct : function (t, e, n) {
          var r = [null];
          r.push.apply(r, e);
          var s = new (Function.bind.apply(t, r));
          return n && nt(s, n.prototype),
            s
        }
        ).apply(null, arguments)
      }
      function et() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ("function" == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }
          ))),
            !0
        } catch (t) {
          return !1
        }
      }
      function nt(t, e) {
        return (nt = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e,
            t
        }
        )(t, e)
      }
      function rt(t) {
        return function (t) {
          if (Array.isArray(t))
            return st(t)
        }(t) || function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t)
        }(t) || function (t, e) {
          if (t) {
            if ("string" == typeof t)
              return st(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? st(t, e) : void 0
          }
        }(t) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      function st(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++)
          r[n] = t[n];
        return r
      }
      function it() {
        for (var t = document.getElementsByTagName("a"), e = function (e) {
          if (!t[e].hasAttribute("data-fslightbox"))
            return "continue";
          var n = t[e].getAttribute("data-fslightbox")
            , r = t[e].getAttribute("href");
          fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox);
          var s;
          s = "#" === r.charAt(0) ? document.getElementById(r.substring(1)) : r,
            fsLightboxInstances[n].props.sources.push(s),
            fsLightboxInstances[n].elements.a.push(t[e]);
          var i = fsLightboxInstances[n].props.sources.length - 1;
          t[e].onclick = function (t) {
            t.preventDefault(),
              fsLightboxInstances[n].open(i)
          }
            ,
            p("types", "data-type"),
            p("videosPosters", "data-video-poster"),
            p("customClasses", "data-class"),
            p("customClasses", "data-custom-class");
          for (var a = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], o = t[e].attributes, l = fsLightboxInstances[n].props.customAttributes, c = 0; c < o.length; c++)
            if (-1 === a.indexOf(o[c].name) && "data-" === o[c].name.substr(0, 5)) {
              l[i] || (l[i] = {});
              var u = o[c].name.substr(5);
              l[i][u] = o[c].value
            }
          function p(r, s) {
            t[e].hasAttribute(s) && (fsLightboxInstances[n].props[r][i] = t[e].getAttribute(s))
          }
        }, n = 0; n < t.length; n++)
          e(n);
        var r = Object.keys(fsLightboxInstances);
        window.fsLightbox = fsLightboxInstances[r[r.length - 1]]
      }
      "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((r = document.createElement("style")).className = i,
        r.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:none;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),
        document.head.appendChild(r)),
        window.FsLightbox = function () {
          var t = this;
          this.props = {
            sources: [],
            customAttributes: [],
            customClasses: [],
            types: [],
            videosPosters: [],
            slideDistance: .3
          },
            this.data = {
              isInitialized: !1,
              isFullscreenOpen: !1,
              maxSourceWidth: 0,
              maxSourceHeight: 0,
              scrollbarWidth: 0
            },
            this.sourcePointerProps = {
              downScreenX: null,
              isPointering: !1,
              isSourceDownEventTarget: !1,
              swipedX: 0
            },
            this.stageIndexes = {},
            this.elements = {
              a: [],
              container: null,
              slideSwipingHoverer: null,
              sourceWrappersContainer: null,
              sources: [],
              sourceMainWrappers: [],
              sourceAnimationWrappers: []
            },
            this.componentsServices = {
              enterFullscreen: null,
              exitFullscreen: null,
              hideSourceLoaderIfNotYetCollection: [],
              setSlideNumber: function () { }
            },
            this.resolve = function (e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return n.unshift(t),
                tt(e, rt(n))
            }
            ,
            this.collections = {
              sourceMainWrappersTransformers: [],
              sourceLoadHandlers: [],
              sourcesRenderFunctions: [],
              sourceSizers: []
            },
            this.core = {
              classFacade: {},
              eventsDispatcher: {},
              fullscreenToggler: {},
              globalEventsController: {},
              lightboxCloser: {},
              lightboxOpener: {},
              lightboxUpdater: {},
              scrollbarRecompensor: {},
              slideChangeFacade: {},
              slideIndexChanger: {},
              sourcesPointerDown: {},
              sourceDisplayFacade: {},
              stageManager: {},
              windowResizeActioner: {}
            },
            Z(this),
            this.open = function (e) {
              return t.core.lightboxOpener.open(e)
            }
            ,
            this.close = function () {
              return t.core.lightboxCloser.closeLightbox()
            }
        }
        ,
        window.fsLightboxInstances = {},
        it(),
        window.refreshFsLightbox = function () {
          for (var t in fsLightboxInstances) {
            var e = fsLightboxInstances[t].props;
            fsLightboxInstances[t] = new FsLightbox,
              fsLightboxInstances[t].props = e,
              fsLightboxInstances[t].props.sources = [],
              fsLightboxInstances[t].elements.a = []
          }
          it()
        }
    }
    ])
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSFileAttach = e() : t.HSFileAttach = e()
  }(window, (function () {
    return d = {
      "./src/js/hs-file-attach.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSFileAttach; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSFileAttach Plugin\n* @version: 3.0.0 (Mon, 22 Feb 2021)\n* @author: HtmlStream\n* @event-namespace: .HSFileAttach\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\nvar dataAttributeName = 'data-hs-file-attach-options';\nvar defaults = {\n  textTarget: null,\n  maxFileSize: 1024,\n  // Infinity - off file size detection\n  errorMessage: 'File is too big!',\n  typeErrorMessage: 'Unsupported file type',\n  mode: 'simple',\n  targetAttr: null,\n  resetTarget: null,\n  allowTypes: []\n};\n\nvar HSFileAttach = /*#__PURE__*/function () {\n  function HSFileAttach(el, options, id) {\n    _classCallCheck(this, HSFileAttach);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSFileAttach, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.$target = document.querySelector(_options.textTarget);\n\n        function getFileExtension(filename) {\n          return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : null;\n        }\n\n        _$el.addEventListener('change', function (e) {\n          if (_$el.value === '') {\n            return;\n          }\n\n          if (e.target.files[0].size > _options.maxFileSize * 1024) {\n            alert(_options.errorMessage);\n            return e.target.value = '';\n          }\n\n          if (_options.allowTypes.length > 0) {\n            var type = '.' + getFileExtension(e.target.files[0].name);\n\n            if (!type || !_options.allowTypes.includes(type.toLowerCase())) {\n              alert(_options.typeErrorMessage);\n              return e.target.value = '';\n            }\n          }\n\n          if (_options.mode === 'image') {\n            _this.image(_$el, _options);\n          } else {\n            _this.simple(_$el, _options);\n          }\n        });\n\n        _options.resetTarget ? document.querySelector(_options.resetTarget).addEventListener('click', function () {\n          _$el.value = '';\n\n          _options.$target.setAttribute(_options.targetAttr, _options.resetImg);\n        }) : null;\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"simple\",\n    value: function simple($el, settings) {\n      settings.textContent = $el.value.replace(/.+[\\\\\\/]/, '');\n    }\n  }, {\n    key: \"image\",\n    value: function image($el, settings) {\n      var reader;\n\n      if ($el.files && $el.files[0]) {\n        reader = new FileReader();\n\n        reader.onload = function (e) {\n          settings.$target.setAttribute(settings.targetAttr, e.target.result);\n        };\n\n        reader.readAsDataURL($el.files[0]);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSFileAttach;\n}();\n\n\n\n//# sourceURL=webpack://HSFileAttach/./src/js/hs-file-attach.js?")
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-file-attach.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  ));
var countdown = function (t) {
  "use strict";
  var e = Math.ceil
    , n = Math.floor;
  function r(t, e) {
    var n = t.getTime();
    return t.setMonth(t.getMonth() + e),
      Math.round((t.getTime() - n) / 864e5)
  }
  function s(t) {
    var e = t.getTime()
      , n = new Date(e);
    return n.setMonth(t.getMonth() + 1),
      Math.round((n.getTime() - e) / 864e5)
  }
  function i(t, e) {
    if (e = e instanceof Date || null !== e && isFinite(e) ? new Date(+e) : new Date,
      !t)
      return e;
    var n = +t.value || 0;
    return n ? (e.setTime(e.getTime() + n),
      e) : ((n = +t.milliseconds || 0) && e.setMilliseconds(e.getMilliseconds() + n),
        (n = +t.seconds || 0) && e.setSeconds(e.getSeconds() + n),
        (n = +t.minutes || 0) && e.setMinutes(e.getMinutes() + n),
        (n = +t.hours || 0) && e.setHours(e.getHours() + n),
        (n = +t.weeks || 0) && (n *= 7),
        (n += +t.days || 0) && e.setDate(e.getDate() + n),
        (n = +t.months || 0) && e.setMonth(e.getMonth() + n),
        (n = +t.millennia || 0) && (n *= 10),
        (n += +t.centuries || 0) && (n *= 10),
        (n += +t.decades || 0) && (n *= 10),
        (n += +t.years || 0) && e.setFullYear(e.getFullYear() + n),
        e)
  }
  var a, o, l, c, u, p, d, h;
  function f(t, e) {
    return d(t) + (1 === t ? a[e] : o[e])
  }
  function m() { }
  function g(t, e, n, r, i, a) {
    return t[n] >= 0 && (e += t[n],
      delete t[n]),
      (e /= i) + 1 <= 1 ? 0 : t[r] >= 0 ? (t[r] = +(t[r] + e).toFixed(a),
        function (t, e) {
          switch (e) {
            case "seconds":
              if (60 !== t.seconds || isNaN(t.minutes))
                return;
              t.minutes++,
                t.seconds = 0;
            case "minutes":
              if (60 !== t.minutes || isNaN(t.hours))
                return;
              t.hours++,
                t.minutes = 0;
            case "hours":
              if (24 !== t.hours || isNaN(t.days))
                return;
              t.days++,
                t.hours = 0;
            case "days":
              if (7 !== t.days || isNaN(t.weeks))
                return;
              t.weeks++,
                t.days = 0;
            case "weeks":
              if (t.weeks !== s(t.refMonth) / 7 || isNaN(t.months))
                return;
              t.months++,
                t.weeks = 0;
            case "months":
              if (12 !== t.months || isNaN(t.years))
                return;
              t.years++,
                t.months = 0;
            case "years":
              if (10 !== t.years || isNaN(t.decades))
                return;
              t.decades++,
                t.years = 0;
            case "decades":
              if (10 !== t.decades || isNaN(t.centuries))
                return;
              t.centuries++,
                t.decades = 0;
            case "centuries":
              if (10 !== t.centuries || isNaN(t.millennia))
                return;
              t.millennia++,
                t.centuries = 0
          }
        }(t, r),
        0) : e
  }
  function v(t, e) {
    var n, r, i, a = g(t, 0, "milliseconds", "seconds", 1e3, e);
    if (a && ((a = g(t, a, "seconds", "minutes", 60, e)) && (a = g(t, a, "minutes", "hours", 60, e)) && (a = g(t, a, "hours", "days", 24, e)) && (a = g(t, a, "days", "weeks", 7, e)) && (a = g(t, a, "weeks", "months", s(t.refMonth) / 7, e)) && (a = g(t, a, "months", "years", (n = t.refMonth,
      r = n.getTime(),
      (i = new Date(r)).setFullYear(n.getFullYear() + 1),
      Math.round((i.getTime() - r) / 864e5) / s(t.refMonth)), e)) && (a = g(t, a, "years", "decades", 10, e)) && (a = g(t, a, "decades", "centuries", 10, e)) && (a = g(t, a, "centuries", "millennia", 10, e))))
      throw new Error("Fractional unit overflow")
  }
  function y(t, s, i, a, o, l) {
    var c = new Date;
    if (t.start = s = s || c,
      t.end = i = i || c,
      t.units = a,
      t.value = i.getTime() - s.getTime(),
      t.value < 0) {
      var u = i;
      i = s,
        s = u
    }
    t.refMonth = new Date(s.getFullYear(), s.getMonth(), 15, 12, 0, 0);
    try {
      t.millennia = 0,
        t.centuries = 0,
        t.decades = 0,
        t.years = i.getFullYear() - s.getFullYear(),
        t.months = i.getMonth() - s.getMonth(),
        t.weeks = 0,
        t.days = i.getDate() - s.getDate(),
        t.hours = i.getHours() - s.getHours(),
        t.minutes = i.getMinutes() - s.getMinutes(),
        t.seconds = i.getSeconds() - s.getSeconds(),
        t.milliseconds = i.getMilliseconds() - s.getMilliseconds(),
        function (t) {
          var s;
          for (t.milliseconds < 0 ? (s = e(-t.milliseconds / 1e3),
            t.seconds -= s,
            t.milliseconds += 1e3 * s) : t.milliseconds >= 1e3 && (t.seconds += n(t.milliseconds / 1e3),
              t.milliseconds %= 1e3),
            t.seconds < 0 ? (s = e(-t.seconds / 60),
              t.minutes -= s,
              t.seconds += 60 * s) : t.seconds >= 60 && (t.minutes += n(t.seconds / 60),
                t.seconds %= 60),
            t.minutes < 0 ? (s = e(-t.minutes / 60),
              t.hours -= s,
              t.minutes += 60 * s) : t.minutes >= 60 && (t.hours += n(t.minutes / 60),
                t.minutes %= 60),
            t.hours < 0 ? (s = e(-t.hours / 24),
              t.days -= s,
              t.hours += 24 * s) : t.hours >= 24 && (t.days += n(t.hours / 24),
                t.hours %= 24); t.days < 0;)
            t.months--,
              t.days += r(t.refMonth, 1);
          t.days >= 7 && (t.weeks += n(t.days / 7),
            t.days %= 7),
            t.months < 0 ? (s = e(-t.months / 12),
              t.years -= s,
              t.months += 12 * s) : t.months >= 12 && (t.years += n(t.months / 12),
                t.months %= 12),
            t.years >= 10 && (t.decades += n(t.years / 10),
              t.years %= 10,
              t.decades >= 10 && (t.centuries += n(t.decades / 10),
                t.decades %= 10,
                t.centuries >= 10 && (t.millennia += n(t.centuries / 10),
                  t.centuries %= 10)))
        }(t),
        function (t, e, s, i) {
          var a = 0;
          !(1024 & e) || a >= s ? (t.centuries += 10 * t.millennia,
            delete t.millennia) : t.millennia && a++,
            !(512 & e) || a >= s ? (t.decades += 10 * t.centuries,
              delete t.centuries) : t.centuries && a++,
            !(256 & e) || a >= s ? (t.years += 10 * t.decades,
              delete t.decades) : t.decades && a++,
            !(128 & e) || a >= s ? (t.months += 12 * t.years,
              delete t.years) : t.years && a++,
            !(64 & e) || a >= s ? (t.months && (t.days += r(t.refMonth, t.months)),
              delete t.months,
              t.days >= 7 && (t.weeks += n(t.days / 7),
                t.days %= 7)) : t.months && a++,
            !(32 & e) || a >= s ? (t.days += 7 * t.weeks,
              delete t.weeks) : t.weeks && a++,
            !(16 & e) || a >= s ? (t.hours += 24 * t.days,
              delete t.days) : t.days && a++,
            !(8 & e) || a >= s ? (t.minutes += 60 * t.hours,
              delete t.hours) : t.hours && a++,
            !(4 & e) || a >= s ? (t.seconds += 60 * t.minutes,
              delete t.minutes) : t.minutes && a++,
            !(2 & e) || a >= s ? (t.milliseconds += 1e3 * t.seconds,
              delete t.seconds) : t.seconds && a++,
            1 & e && !(a >= s) || v(t, i)
        }(t, a, o, l)
    } finally {
      delete t.refMonth
    }
    return t
  }
  function b(t, e, n, r, s) {
    var a;
    n = +n || 222,
      r = r > 0 ? r : NaN,
      s = s > 0 ? s < 20 ? Math.round(s) : 20 : 0;
    var o = null;
    "function" == typeof t ? (a = t,
      t = null) : t instanceof Date || (null !== t && isFinite(t) ? t = new Date(+t) : ("object" == typeof o && (o = t),
        t = null));
    var l = null;
    if ("function" == typeof e ? (a = e,
      e = null) : e instanceof Date || (null !== e && isFinite(e) ? e = new Date(+e) : ("object" == typeof e && (l = e),
        e = null)),
      o && (t = i(o, e)),
      l && (e = i(l, t)),
      !t && !e)
      return new m;
    if (!a)
      return y(new m, t, e, n, r, s);
    var c, u = function (t) {
      return 1 & t ? 1e3 / 30 : 2 & t ? 1e3 : 4 & t ? 6e4 : 8 & t ? 36e5 : 16 & t ? 864e5 : 6048e5
    }(n), p = function () {
      a(y(new m, t, e, n, r, s), c)
    };
    return p(),
      c = setInterval(p, u)
  }
  m.prototype.toString = function (t) {
    var e = h(this)
      , n = e.length;
    if (!n)
      return t ? "" + t : u;
    if (1 === n)
      return e[0];
    var r = l + e.pop();
    return e.join(c) + r
  }
    ,
    m.prototype.toHTML = function (t, e) {
      t = t || "span";
      var n = h(this)
        , r = n.length;
      if (!r)
        return (e = e || u) ? "<" + t + ">" + e + "</" + t + ">" : e;
      for (var s = 0; s < r; s++)
        n[s] = "<" + t + ">" + n[s] + "</" + t + ">";
      if (1 === r)
        return n[0];
      var i = l + n.pop();
      return n.join(c) + i
    }
    ,
    m.prototype.addTo = function (t) {
      return i(this, t)
    }
    ,
    h = function (t) {
      var e = []
        , n = t.millennia;
      return n && e.push(p(n, 10)),
        (n = t.centuries) && e.push(p(n, 9)),
        (n = t.decades) && e.push(p(n, 8)),
        (n = t.years) && e.push(p(n, 7)),
        (n = t.months) && e.push(p(n, 6)),
        (n = t.weeks) && e.push(p(n, 5)),
        (n = t.days) && e.push(p(n, 4)),
        (n = t.hours) && e.push(p(n, 3)),
        (n = t.minutes) && e.push(p(n, 2)),
        (n = t.seconds) && e.push(p(n, 1)),
        (n = t.milliseconds) && e.push(p(n, 0)),
        e
    }
    ,
    b.MILLISECONDS = 1,
    b.SECONDS = 2,
    b.MINUTES = 4,
    b.HOURS = 8,
    b.DAYS = 16,
    b.WEEKS = 32,
    b.MONTHS = 64,
    b.YEARS = 128,
    b.DECADES = 256,
    b.CENTURIES = 512,
    b.MILLENNIA = 1024,
    b.DEFAULTS = 222,
    b.ALL = 2047;
  var _ = b.setFormat = function (t) {
    if (t) {
      if ("singular" in t || "plural" in t) {
        var e = t.singular || [];
        e.split && (e = e.split("|"));
        var n = t.plural || [];
        n.split && (n = n.split("|"));
        for (var r = 0; r <= 10; r++)
          a[r] = e[r] || a[r],
            o[r] = n[r] || o[r]
      }
      "string" == typeof t.last && (l = t.last),
        "string" == typeof t.delim && (c = t.delim),
        "string" == typeof t.empty && (u = t.empty),
        "function" == typeof t.formatNumber && (d = t.formatNumber),
        "function" == typeof t.formatter && (p = t.formatter)
    }
  }
    , w = b.resetFormat = function () {
      a = " millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),
        o = " milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),
        l = " and ",
        c = ", ",
        u = "",
        d = function (t) {
          return t
        }
        ,
        p = f
    }
    ;
  return b.setLabels = function (t, e, n, r, s, i, a) {
    _({
      singular: t,
      plural: e,
      last: n,
      delim: r,
      empty: s,
      formatNumber: i,
      formatter: a
    })
  }
    ,
    b.resetLabels = w,
    w(),
    t && t.exports ? t.exports = b : "function" == typeof window.define && void 0 !== window.define.amd && window.define("countdown", [], (function () {
      return b
    }
    )),
    b
}(module), List;
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSStickyBlock = e() : t.HSStickyBlock = e()
}(window, (function () {
  return d = {
    "./src/js/hs-sticky-block.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSStickyBlock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n/*\n* HSStickyBlock Plugin\n* @version: 3.0.0 (Wed, 24 Nov 2021)\n* @author: HtmlStream\n* @event-namespace: .HSStickyBlock\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\nvar isNumeric = function isNumeric(n) {\n  return !isNaN(parseFloat(n)) && isFinite(n);\n},\n    offset = function offset(el) {\n  el = _typeof(el) === "object" ? el : document.querySelector(el);\n  return {\n    top: el ? window.pageYOffset + el.getBoundingClientRect().top : 0,\n    left: el ? el.getBoundingClientRect().left : 0\n  };\n},\n    css = function css(el, style) {\n  el = _typeof(el) === "object" ? el : document.querySelector(el);\n\n  for (var property in style) {\n    el.style[property] = style[property];\n  }\n};\n\nvar dataAttributeName = \'data-hs-sticky-block-options\';\nvar defaults = {\n  parentSelector: null,\n  parentWidth: null,\n  parentPaddingLeft: null,\n  parentOffsetLeft: null,\n  targetSelector: null,\n  targetHeight: 0,\n  stickyHeight: null,\n  stickyOffsetTop: 0,\n  stickyOffsetBottom: 0,\n  windowOffsetTop: 0,\n  startPoint: null,\n  endPoint: null,\n  resolutionsList: {\n    xs: 0,\n    sm: 576,\n    md: 768,\n    lg: 992,\n    xl: 1200\n  },\n  breakpoint: \'lg\',\n  styles: {\n    position: \'fixed\'\n  },\n  classMap: {\n    kill: \'hs-kill-sticky\'\n  }\n};\n\nvar HSStickyBlock = /*#__PURE__*/function () {\n  function HSStickyBlock(el, options, id) {\n    _classCallCheck(this, HSStickyBlock);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSStickyBlock, [{\n    key: "_init",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          return "continue";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        Array(\'resize\', \'scroll\').forEach(function (evt) {\n          return window.addEventListener(evt, function () {\n            return _this.update(_$el, _options);\n          }, false);\n        });\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === "continue") continue;\n      }\n    }\n  }, {\n    key: "update",\n    value: function update($el, settings) {\n      var that = this;\n\n      that._setRules($el, settings);\n    }\n  }, {\n    key: "_updateOptions",\n    value: function _updateOptions($el, settings) {\n      var parentSelector = document.querySelector(settings.parentSelector),\n          targetSelector = document.querySelector(settings.targetSelector);\n      settings.windowOffsetTop = window.pageYOffset;\n      settings.startPointPos = offset(settings.startPoint).top;\n      settings.endPointPos = offset(settings.endPoint).top;\n      settings.parentWidth = parentSelector ? parentSelector.clientWidth : 0;\n      settings.parentPaddingLeft = parentSelector ? parseInt(window.getComputedStyle(parentSelector).paddingLeft) : 0;\n      settings.parentOffsetLeft = offset(parentSelector).left;\n      settings.targetHeight = targetSelector ? targetSelector.offsetHeight : 0;\n      settings.stickyHeight = $el.offsetHeight;\n    }\n  }, {\n    key: "_setRules",\n    value: function _setRules($el, settings) {\n      var that = this;\n\n      that._kill($el, settings);\n\n      that._updateOptions($el, settings);\n\n      if (!$el.classList.contains(settings.classMap.kill)) {\n        if (settings.windowOffsetTop >= settings.startPointPos - settings.targetHeight - settings.stickyOffsetTop && settings.windowOffsetTop <= settings.endPointPos - settings.targetHeight - settings.stickyOffsetTop) {\n          that._add($el, settings);\n\n          that._top($el, settings);\n\n          that._parentSetHeight($el, settings);\n        } else {\n          that._reset($el);\n\n          that._parentRemoveHeight($el, settings);\n        }\n\n        if (settings.windowOffsetTop >= settings.endPointPos - settings.targetHeight - settings.stickyHeight - settings.stickyOffsetTop - settings.stickyOffsetBottom) {\n          that._bottom($el, settings);\n        }\n      }\n    }\n  }, {\n    key: "_add",\n    value: function _add($el, settings) {\n      css($el, {\n        position: settings.styles.position,\n        left: settings.parentOffsetLeft + settings.parentPaddingLeft + \'px\',\n        width: settings.parentWidth + \'px\'\n      });\n    }\n  }, {\n    key: "_top",\n    value: function _top($el, settings) {\n      css($el, {\n        top: settings.stickyOffsetTop + settings.targetHeight + \'px\'\n      });\n    }\n  }, {\n    key: "_bottom",\n    value: function _bottom($el, settings) {\n      css($el, {\n        top: settings.endPointPos - settings.windowOffsetTop - settings.stickyHeight - settings.stickyOffsetBottom + \'px\'\n      });\n    }\n  }, {\n    key: "_reset",\n    value: function _reset($el, settings) {\n      css($el, {\n        position: \'\',\n        top: \'\',\n        bottom: \'\',\n        left: \'\',\n        width: \'\'\n      });\n    }\n  }, {\n    key: "_kill",\n    value: function _kill($el, settings) {\n      var that = this;\n\n      if (window.innerWidth < settings.resolutionsList[settings.breakpoint]) {\n        $el.classList.add(settings.classMap.kill);\n\n        that._reset($el);\n\n        that._parentRemoveHeight($el, settings);\n      } else {\n        $el.classList.remove(settings.classMap.kill);\n      }\n    }\n  }, {\n    key: "_parentSetHeight",\n    value: function _parentSetHeight($el, settings) {\n      css(settings.parentSelector, {\n        height: settings.stickyHeight + \'px\'\n      });\n    }\n  }, {\n    key: "_parentRemoveHeight",\n    value: function _parentRemoveHeight($el, settings) {\n      css(settings.parentSelector, {\n        height: \'\'\n      });\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(item) {\n      if (typeof item === \'number\') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSStickyBlock;\n}();\n\n\n\n//# sourceURL=webpack://HSStickyBlock/./src/js/hs-sticky-block.js?')
    }
  },
    e = {},
    f.m = d,
    f.c = e,
    f.d = function (t, e, n) {
      f.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      })
    }
    ,
    f.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        })
    }
    ,
    f.t = function (t, e) {
      if (1 & e && (t = f(t)),
        8 & e)
        return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
        return t;
      var n = Object.create(null);
      if (f.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
        for (var r in t)
          f.d(n, r, function (e) {
            return t[e]
          }
            .bind(null, r));
      return n
    }
    ,
    f.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      }
        : function () {
          return t
        }
        ;
      return f.d(e, "a", e),
        e
    }
    ,
    f.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    f.p = "",
    f(f.s = "./src/js/hs-sticky-block.js").default;
  function f(t) {
    if (e[t])
      return e[t].exports;
    var n = e[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return d[t].call(n.exports, n, n.exports, f),
      n.l = !0,
      n.exports
  }
  var d, e
}
)),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSTogglePassword = e() : t.HSTogglePassword = e()
  }(window, (function () {
    return function (t) {
      var e = {};
      function n(r) {
        if (e[r])
          return e[r].exports;
        var s = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(s.exports, s, s.exports, n),
          s.l = !0,
          s.exports
      }
      return n.m = t,
        n.c = e,
        n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
          })
        }
        ,
        n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }),
            Object.defineProperty(t, "__esModule", {
              value: !0
            })
        }
        ,
        n.t = function (t, e) {
          if (1 & e && (t = n(t)),
            8 & e)
            return t;
          if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
          var r = Object.create(null);
          if (n.r(r),
            Object.defineProperty(r, "default", {
              enumerable: !0,
              value: t
            }),
            2 & e && "string" != typeof t)
            for (var s in t)
              n.d(r, s, function (e) {
                return t[e]
              }
                .bind(null, s));
          return r
        }
        ,
        n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          }
            : function () {
              return t
            }
            ;
          return n.d(e, "a", e),
            e
        }
        ,
        n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = "./src/js/hs-toggle-password.js")
    }({
      "./src/js/hs-toggle-password.js": /*!**************************************!*\
   !*** ./src/js/hs-toggle-password.js ***!
   \**************************************/
        /*! exports provided: default */
        function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSTogglePassword Plugin\n* @version: 1.0.0 (Sat, 30 Jul 2021)\n* @requires: tom-select 1.7.26\n* @author: HtmlStream\n* @event-namespace: .HSTogglePassword\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\nvar dataAttributeName = \'data-hs-toggle-password-options\';\nvar defaults = {\n  classChangeTarget: null,\n  defaultClass: null,\n  showClass: null,\n  show: false\n};\n\nvar _default = /*#__PURE__*/function () {\n  function _default(el, options, id) {\n    _classCallCheck(this, _default);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(_default, [{\n    key: "_init",\n    value: function _init() {\n      var that = this;\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          continue;\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n\n        if (Array.isArray(_options.target)) {\n          (function () {\n            var targets = [];\n\n            _options.target.forEach(function (target) {\n              targets.push(document.querySelector(target));\n            });\n\n            _options.target = targets;\n            _options.classChangeTarget = _options.classChangeTarget ? document.querySelector(_options.classChangeTarget) : _options.target;\n          })();\n        } else {\n          _options.target = document.querySelector(_options.target);\n          _options.classChangeTarget = _options.classChangeTarget ? document.querySelector(_options.classChangeTarget) : _options.target;\n        }\n\n        if (_options.show) {\n          _$el.type = "text";\n        }\n\n        that._toggleClass(_options, _options.show);\n\n        that._showPassword(_$el, _options);\n      }\n    }\n  }, {\n    key: "_showPassword",\n    value: function _showPassword(el, config) {\n      var that = this,\n          $target = config.target;\n\n      if (Array.isArray($target)) {\n        $target.forEach(function (target) {\n          target.addEventListener(\'click\', function (event) {\n            if (el.type === "password") {\n              el.type = "text";\n\n              that._toggleClass(config, true);\n            } else {\n              el.type = "password";\n\n              that._toggleClass(config, false);\n            }\n          });\n        });\n      } else {\n        $target.addEventListener(\'click\', function (event) {\n          if (el.type === "password") {\n            el.type = "text";\n\n            that._toggleClass(config, true);\n          } else {\n            el.type = "password";\n\n            that._toggleClass(config, false);\n          }\n        });\n      }\n    }\n  }, {\n    key: "_toggleClass",\n    value: function _toggleClass(config) {\n      var _this = this;\n\n      var isShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var that = this,\n          $target = config.classChangeTarget;\n\n      if (Array.isArray($target)) {\n        $target.forEach(function (target) {\n          if (isShow) {\n            _this._removeClasses(target, config.defaultClass);\n\n            _this._addClasses(target, config.showClass);\n          } else {\n            _this._removeClasses(target, config.showClass);\n\n            _this._addClasses(target, config.defaultClass);\n          }\n        });\n      } else {\n        if (isShow) {\n          this._removeClasses($target, config.defaultClass);\n\n          this._addClasses($target, config.showClass);\n        } else {\n          this._removeClasses($target, config.showClass);\n\n          this._addClasses($target, config.defaultClass);\n        }\n      }\n    }\n  }, {\n    key: "_addClasses",\n    value: function _addClasses($target, classes) {\n      if (classes && classes.trim().indexOf(\' \') != -1) {\n        var array = classes.split(\' \');\n\n        for (var i = 0, length = array.length; i < length; i++) {\n          $target.classList.add(array[i]);\n        }\n      } else {\n        $target.classList.add(classes);\n      }\n    }\n  }, {\n    key: "_removeClasses",\n    value: function _removeClasses($target, classes) {\n      if (classes && classes.trim().indexOf(\' \') != -1) {\n        var array = classes.split(\' \');\n\n        for (var i = 0, length = array.length; i < length; i++) {\n          $target.classList.remove(array[i]);\n        }\n      } else {\n        $target.classList.remove(classes);\n      }\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(item) {\n      if (typeof item === \'number\') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://HSTogglePassword/./src/js/hs-toggle-password.js?')
        }
    }).default
  }
  )),
  function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HSScrollspy = e() : t.HSScrollspy = e()
  }(window, (function () {
    return d = {
      "./src/js/hs-scrollspy.js": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSScrollspy; });\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n* HSScrollspy Plugin\r\n* @version: 1.0.0 (Wed, 24 Nov 2021)\r\n* @author: HtmlStream\r\n* @event-namespace: .HSScrollspy\r\n* @license: Htmlstream Libraries (https://htmlstream.com/)\r\n* Copyright 2021 Htmlstream\r\n*/\nvar HSScrollspy = /*#__PURE__*/function () {\n  function HSScrollspy(elem, settings) {\n    _classCallCheck(this, HSScrollspy);\n\n    this.$el = typeof elem === \'string\' ? document.querySelector(elem) : elem;\n    this.defaults = {\n      disableCollapse: null,\n      scrollOffset: 0,\n      collapsibleNav: null,\n      resolutionsList: {\n        xs: 0,\n        sm: 576,\n        md: 768,\n        lg: 992,\n        xl: 1200\n      },\n      resetOffset: null,\n      breakpoint: \'lg\',\n      scrollspyContainer: document.body\n    };\n    this.dataSettings = this.$el.hasAttribute(\'data-hs-scrollspy-options\') ? JSON.parse(this.$el.getAttribute(\'data-hs-scrollspy-options\')) : {}, this.settings = Object.assign({}, this.defaults, this.dataSettings, settings);\n    this.init();\n  }\n\n  _createClass(HSScrollspy, [{\n    key: "init",\n    value: function init() {\n      var _this = this;\n\n      this.scrollSpyInstance = bootstrap.ScrollSpy.getInstance(this.settings.scrollspyContainer);\n      var nav = _typeof(this.scrollSpyInstance._config.target) === \'object\' ? this.scrollSpyInstance._config.target : document.querySelector(this.scrollSpyInstance._config.target);\n\n      if (this.settings.disableCollapse === null && this.$el.classList.contains(\'collapse\')) {\n        this.settings.disableCollapse = false;\n      }\n\n      nav.addEventListener(\'click\', function (e) {\n        if (!e.target.closest(\'a:not([href="#"]):not([href="#0"])\')) return;\n        e.preventDefault();\n\n        if (_this.settings.disableCollapse === false && window.innerWidth < _this.settings.resolutionsList[_this.settings.breakpoint]) {\n          new bootstrap.Collapse(_this.$el).hide();\n          return _this.$el.addEventListener(\'hidden.bs.collapse\', function () {\n            _this.smoothScroll(e);\n          });\n        } else {\n          _this.smoothScroll(e);\n        }\n      });\n    }\n  }, {\n    key: "smoothScroll",\n    value: function smoothScroll(e) {\n      var offset = this.settings.resetOffset && window.innerWidth < this.settings.resolutionsList[this.settings.resetOffset] ? 0 : this.scrollSpyInstance._config.offset;\n      window.scroll({\n        top: document.querySelector(e.target.hash).offsetTop - offset - this.settings.scrollOffset,\n        left: 0,\n        behavior: \'smooth\'\n      });\n    }\n  }]);\n\n  return HSScrollspy;\n}();\n\n\n\n//# sourceURL=webpack://HSScrollspy/./src/js/hs-scrollspy.js?')
      }
    },
      e = {},
      f.m = d,
      f.c = e,
      f.d = function (t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }
      ,
      f.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      f.t = function (t, e) {
        if (1 & e && (t = f(t)),
          8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n = Object.create(null);
        if (f.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }),
          2 & e && "string" != typeof t)
          for (var r in t)
            f.d(n, r, function (e) {
              return t[e]
            }
              .bind(null, r));
        return n
      }
      ,
      f.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
          : function () {
            return t
          }
          ;
        return f.d(e, "a", e),
          e
      }
      ,
      f.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      f.p = "",
      f(f.s = "./src/js/hs-scrollspy.js").default;
    function f(t) {
      if (e[t])
        return e[t].exports;
      var n = e[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return d[t].call(n.exports, n, n.exports, f),
        n.l = !0,
        n.exports
    }
    var d, e
  }
  )),
  function (t, e) {
    "object" == typeof exports && void 0 !== module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Shuffle = e()
  }(this, (function () {
    "use strict";
    function t(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    function e(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    function n(t, n, r) {
      return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
    function r(t) {
      return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      }
      )(t)
    }
    function s(t, e) {
      return (s = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e,
          t
      }
      )(t, e)
    }
    function i(t, e) {
      return !e || "object" != typeof e && "function" != typeof e ? function (t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }
    function a(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ("function" == typeof Proxy)
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
          ))),
            !0
        } catch (t) {
          return !1
        }
      }();
      return function () {
        var n, s = r(t);
        if (e) {
          var a = r(this).constructor;
          n = Reflect.construct(s, arguments, a)
        } else
          n = s.apply(this, arguments);
        return i(this, n)
      }
    }
    var o = {
      exports: {}
    };
    function l() { }
    l.prototype = {
      on: function (t, e, n) {
        var r = this.e || (this.e = {});
        return (r[t] || (r[t] = [])).push({
          fn: e,
          ctx: n
        }),
          this
      },
      once: function (t, e, n) {
        var r = this;
        function s() {
          r.off(t, s),
            e.apply(n, arguments)
        }
        return s._ = e,
          this.on(t, s, n)
      },
      emit: function (t) {
        for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, s = n.length; r < s; r++)
          n[r].fn.apply(n[r].ctx, e);
        return this
      },
      off: function (t, e) {
        var n = this.e || (this.e = {})
          , r = n[t]
          , s = [];
        if (r && e)
          for (var i = 0, a = r.length; i < a; i++)
            r[i].fn !== e && r[i].fn._ !== e && s.push(r[i]);
        return s.length ? n[t] = s : delete n[t],
          this
      }
    },
      o.exports = l,
      o.exports.TinyEmitter = l;
    var c = o.exports
      , u = "undefined" != typeof Element ? Element.prototype : {}
      , p = u.matches || u.matchesSelector || u.webkitMatchesSelector || u.mozMatchesSelector || u.msMatchesSelector || u.oMatchesSelector
      , d = function (t, e) {
        if (!t || 1 !== t.nodeType)
          return !1;
        if (p)
          return p.call(t, e);
        for (var n = t.parentNode.querySelectorAll(e), r = 0; r < n.length; r++)
          if (n[r] == t)
            return !0;
        return !1
      };
    var h = function (t, e) {
      var n, r, s, i, a = 0;
      return function () {
        n = this,
          r = arguments;
        var t = new Date - a;
        return i || (t >= e ? o() : i = setTimeout(o, e - t)),
          s
      }
        ;
      function o() {
        i = 0,
          a = +new Date,
          s = t.apply(n, r),
          n = null,
          r = null
      }
    };
    function f() { }
    function m(t) {
      return parseFloat(t) || 0
    }
    var g = function () {
      function e(n, r) {
        t(this, e),
          this.x = m(n),
          this.y = m(r)
      }
      return n(e, null, [{
        key: "equals",
        value: function (t, e) {
          return t.x === e.x && t.y === e.y
        }
      }]),
        e
    }()
      , v = function () {
        function e(n, r, s, i, a) {
          t(this, e),
            this.id = a,
            this.left = n,
            this.top = r,
            this.width = s,
            this.height = i
        }
        return n(e, null, [{
          key: "intersects",
          value: function (t, e) {
            return t.left < e.left + e.width && e.left < t.left + t.width && t.top < e.top + e.height && e.top < t.top + t.height
          }
        }]),
          e
      }()
      , y = {
        BASE: "shuffle",
        SHUFFLE_ITEM: "shuffle-item",
        VISIBLE: "shuffle-item--visible",
        HIDDEN: "shuffle-item--hidden"
      }
      , b = 0
      , _ = function () {
        function e(n, r) {
          t(this, e),
            b += 1,
            this.id = b,
            this.element = n,
            this.isRTL = r,
            this.isVisible = !0,
            this.isHidden = !1
        }
        return n(e, [{
          key: "show",
          value: function () {
            this.isVisible = !0,
              this.element.classList.remove(y.HIDDEN),
              this.element.classList.add(y.VISIBLE),
              this.element.removeAttribute("aria-hidden")
          }
        }, {
          key: "hide",
          value: function () {
            this.isVisible = !1,
              this.element.classList.remove(y.VISIBLE),
              this.element.classList.add(y.HIDDEN),
              this.element.setAttribute("aria-hidden", !0)
          }
        }, {
          key: "init",
          value: function () {
            this.addClasses([y.SHUFFLE_ITEM, y.VISIBLE]),
              this.applyCss(e.Css.INITIAL),
              this.applyCss(this.isRTL ? e.Css.DIRECTION.rtl : e.Css.DIRECTION.ltr),
              this.scale = e.Scale.VISIBLE,
              this.point = new g
          }
        }, {
          key: "addClasses",
          value: function (t) {
            var e = this;
            t.forEach((function (t) {
              e.element.classList.add(t)
            }
            ))
          }
        }, {
          key: "removeClasses",
          value: function (t) {
            var e = this;
            t.forEach((function (t) {
              e.element.classList.remove(t)
            }
            ))
          }
        }, {
          key: "applyCss",
          value: function (t) {
            var e = this;
            Object.keys(t).forEach((function (n) {
              e.element.style[n] = t[n]
            }
            ))
          }
        }, {
          key: "dispose",
          value: function () {
            this.removeClasses([y.HIDDEN, y.VISIBLE, y.SHUFFLE_ITEM]),
              this.element.removeAttribute("style"),
              this.element = null
          }
        }]),
          e
      }();
    _.Css = {
      INITIAL: {
        position: "absolute",
        top: 0,
        visibility: "visible",
        willChange: "transform"
      },
      DIRECTION: {
        ltr: {
          left: 0
        },
        rtl: {
          right: 0
        }
      },
      VISIBLE: {
        before: {
          opacity: 1,
          visibility: "visible"
        },
        after: {
          transitionDelay: ""
        }
      },
      HIDDEN: {
        before: {
          opacity: 0
        },
        after: {
          visibility: "hidden",
          transitionDelay: ""
        }
      }
    },
      _.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
      };
    var w = null
      , S = function () {
        if (null !== w)
          return w;
        var t = document.body || document.documentElement
          , e = document.createElement("div");
        e.style.cssText = "width:10px;padding:2px;box-sizing:border-box;",
          t.appendChild(e);
        var n = window.getComputedStyle(e, null).width;
        return w = 10 === Math.round(m(n)),
          t.removeChild(e),
          w
      };
    function C(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null)
        , r = m(n[e]);
      return S() || "width" !== e ? S() || "height" !== e || (r += m(n.paddingTop) + m(n.paddingBottom) + m(n.borderTopWidth) + m(n.borderBottomWidth)) : r += m(n.paddingLeft) + m(n.paddingRight) + m(n.borderLeftWidth) + m(n.borderRightWidth),
        r
    }
    var x = {
      reverse: !1,
      by: null,
      compare: null,
      randomize: !1,
      key: "element"
    };
    function E(t, e) {
      var n = Object.assign({}, x, e)
        , r = Array.from(t)
        , s = !1;
      return t.length ? n.randomize ? function (t) {
        for (var e = t.length; e;) {
          e -= 1;
          var n = Math.floor(Math.random() * (e + 1))
            , r = t[n];
          t[n] = t[e],
            t[e] = r
        }
        return t
      }(t) : ("function" == typeof n.by ? t.sort((function (t, e) {
        if (s)
          return 0;
        var r = n.by(t[n.key])
          , i = n.by(e[n.key]);
        return void 0 === r && void 0 === i ? (s = !0,
          0) : r < i || "sortFirst" === r || "sortLast" === i ? -1 : r > i || "sortLast" === r || "sortFirst" === i ? 1 : 0
      }
      )) : "function" == typeof n.compare && t.sort(n.compare),
        s ? r : (n.reverse && t.reverse(),
          t)) : []
    }
    var k = {}
      , T = 0;
    function P(t) {
      return !!k[t] && (k[t].element.removeEventListener("transitionend", k[t].listener),
        k[t] = null,
        !0)
    }
    function O(t, e) {
      var n = "transitionend" + (T += 1)
        , r = function (t) {
          t.currentTarget === t.target && (P(n),
            e(t))
        };
      return t.addEventListener("transitionend", r),
        k[n] = {
          element: t,
          listener: r
        },
        n
    }
    function M(t) {
      return Math.max.apply(Math, t)
    }
    function A(t, e, n, r) {
      var s = t / e;
      return Math.abs(Math.round(s) - s) < r && (s = Math.round(s)),
        Math.min(Math.ceil(s), n)
    }
    function j(t, e, n) {
      if (1 === e)
        return t;
      for (var r = [], s = 0; s <= n - e; s++)
        r.push(M(t.slice(s, s + e)));
      return r
    }
    function I(t, e) {
      for (var n, r = (n = t,
        Math.min.apply(Math, n)), s = 0, i = t.length; s < i; s++)
        if (t[s] >= r - e && t[s] <= r + e)
          return s;
      return 0
    }
    function D(t, e) {
      var n = {};
      t.forEach((function (t) {
        n[t.top] ? n[t.top].push(t) : n[t.top] = [t]
      }
      ));
      var r = []
        , s = []
        , i = [];
      return Object.keys(n).forEach((function (t) {
        var a = n[t];
        s.push(a);
        var o, l = a[a.length - 1], c = l.left + l.width, u = Math.round((e - c) / 2), p = a, d = !1;
        if (u > 0) {
          var h = [];
          (d = a.every((function (t) {
            var e = new v(t.left + u, t.top, t.width, t.height, t.id)
              , n = !r.some((function (t) {
                return v.intersects(e, t)
              }
              ));
            return h.push(e),
              n
          }
          ))) && (p = h)
        }
        if (!d && a.some((function (t) {
          return r.some((function (e) {
            var n = v.intersects(t, e);
            return n && (o = e),
              n
          }
          ))
        }
        ))) {
          var f = i.findIndex((function (t) {
            return t.includes(o)
          }
          ));
          i.splice(f, 1, s[f])
        }
        r = r.concat(p),
          i.push(p)
      }
      )),
        [].concat.apply([], i).sort((function (t, e) {
          return t.id - e.id
        }
        )).map((function (t) {
          return new g(t.left, t.top)
        }
        ))
    }
    function L(t) {
      return Array.from(new Set(t))
    }
    var V = 0
      , $ = function (e) {
        !function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
            e && s(t, e)
        }(i, e);
        var r = a(i);
        function i(e) {
          var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t(this, i),
            (n = r.call(this)).options = Object.assign({}, i.options, s),
            n.options.delimeter && (n.options.delimiter = n.options.delimeter),
            n.lastSort = {},
            n.group = i.ALL_ITEMS,
            n.lastFilter = i.ALL_ITEMS,
            n.isEnabled = !0,
            n.isDestroyed = !1,
            n.isInitialized = !1,
            n._transitions = [],
            n.isTransitioning = !1,
            n._queue = [];
          var a = n._getElementOption(e);
          if (!a)
            throw new TypeError("Shuffle needs to be initialized with an element.");
          return n.element = a,
            n.id = "shuffle_" + V,
            V += 1,
            n._init(),
            n.isInitialized = !0,
            n
        }
        return n(i, [{
          key: "_init",
          value: function () {
            if (this.items = this._getItems(),
              this.sortedItems = this.items,
              this.options.sizer = this._getElementOption(this.options.sizer),
              this.element.classList.add(i.Classes.BASE),
              this._initItems(this.items),
              this._onResize = this._getResizeFunction(),
              window.addEventListener("resize", this._onResize),
              "complete" !== document.readyState) {
              var t = this.layout.bind(this);
              window.addEventListener("load", (function e() {
                window.removeEventListener("load", e),
                  t()
              }
              ))
            }
            var e = window.getComputedStyle(this.element, null)
              , n = i.getSize(this.element).width;
            this._validateStyles(e),
              this._setColumns(n),
              this.filter(this.options.group, this.options.initialSort),
              this.element.offsetWidth,
              this.setItemTransitions(this.items),
              this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing)
          }
        }, {
          key: "_getResizeFunction",
          value: function () {
            var t = this._handleResize.bind(this);
            return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
          }
        }, {
          key: "_getElementOption",
          value: function (t) {
            return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
          }
        }, {
          key: "_validateStyles",
          value: function (t) {
            "static" === t.position && (this.element.style.position = "relative"),
              "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
          }
        }, {
          key: "_filter",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items
              , n = this._getFilteredSets(t, e);
            return this._toggleFilterClasses(n),
              this.lastFilter = t,
              "string" == typeof t && (this.group = t),
              n
          }
        }, {
          key: "_getFilteredSets",
          value: function (t, e) {
            var n = this
              , r = []
              , s = [];
            return t === i.ALL_ITEMS ? r = e : e.forEach((function (e) {
              n._doesPassFilter(t, e.element) ? r.push(e) : s.push(e)
            }
            )),
            {
              visible: r,
              hidden: s
            }
          }
        }, {
          key: "_doesPassFilter",
          value: function (t, e) {
            if ("function" == typeof t)
              return t.call(e, e, this);
            var n = e.getAttribute("data-" + i.FILTER_ATTRIBUTE_KEY)
              , r = this.options.delimiter ? n.split(this.options.delimiter) : JSON.parse(n);
            function s(t) {
              return r.includes(t)
            }
            return Array.isArray(t) ? this.options.filterMode === i.FilterMode.ANY ? t.some(s) : t.every(s) : r.includes(t)
          }
        }, {
          key: "_toggleFilterClasses",
          value: function (t) {
            var e = t.visible
              , n = t.hidden;
            e.forEach((function (t) {
              t.show()
            }
            )),
              n.forEach((function (t) {
                t.hide()
              }
              ))
          }
        }, {
          key: "_initItems",
          value: function (t) {
            t.forEach((function (t) {
              t.init()
            }
            ))
          }
        }, {
          key: "_disposeItems",
          value: function (t) {
            t.forEach((function (t) {
              t.dispose()
            }
            ))
          }
        }, {
          key: "_updateItemCount",
          value: function () {
            this.visibleItems = this._getFilteredItems().length
          }
        }, {
          key: "setItemTransitions",
          value: function (t) {
            var e = this.options
              , n = e.speed
              , r = e.easing
              , s = this.options.useTransforms ? ["transform"] : ["top", "left"]
              , i = Object.keys(_.Css.HIDDEN.before).map((function (t) {
                return t.replace(/([A-Z])/g, (function (t, e) {
                  return "-".concat(e.toLowerCase())
                }
                ))
              }
              ))
              , a = s.concat(i).join();
            t.forEach((function (t) {
              t.element.style.transitionDuration = n + "ms",
                t.element.style.transitionTimingFunction = r,
                t.element.style.transitionProperty = a
            }
            ))
          }
        }, {
          key: "_getItems",
          value: function () {
            var t = this;
            return Array.from(this.element.children).filter((function (e) {
              return d(e, t.options.itemSelector)
            }
            )).map((function (e) {
              return new _(e, t.options.isRTL)
            }
            ))
          }
        }, {
          key: "_mergeNewItems",
          value: function (t) {
            var e = Array.from(this.element.children);
            return E(this.items.concat(t), {
              by: function (t) {
                return e.indexOf(t)
              }
            })
          }
        }, {
          key: "_getFilteredItems",
          value: function () {
            return this.items.filter((function (t) {
              return t.isVisible
            }
            ))
          }
        }, {
          key: "_getConcealedItems",
          value: function () {
            return this.items.filter((function (t) {
              return !t.isVisible
            }
            ))
          }
        }, {
          key: "_getColumnSize",
          value: function (t, e) {
            var n;
            return 0 === (n = "function" == typeof this.options.columnWidth ? this.options.columnWidth(t) : this.options.sizer ? i.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? i.getSize(this.items[0].element, !0).width : t) && (n = t),
              n + e
          }
        }, {
          key: "_getGutterSize",
          value: function (t) {
            return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.options.sizer ? C(this.options.sizer, "marginLeft") : this.options.gutterWidth
          }
        }, {
          key: "_setColumns",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.getSize(this.element).width
              , e = this._getGutterSize(t)
              , n = this._getColumnSize(t, e)
              , r = (t + e) / n;
            Math.abs(Math.round(r) - r) < this.options.columnThreshold && (r = Math.round(r)),
              this.cols = Math.max(Math.floor(r || 0), 1),
              this.containerWidth = t,
              this.colWidth = n
          }
        }, {
          key: "_setContainerSize",
          value: function () {
            this.element.style.height = this._getContainerSize() + "px"
          }
        }, {
          key: "_getContainerSize",
          value: function () {
            return M(this.positions)
          }
        }, {
          key: "_getStaggerAmount",
          value: function (t) {
            return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
          }
        }, {
          key: "_dispatch",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.isDestroyed || (e.shuffle = this,
              this.emit(t, e))
          }
        }, {
          key: "_resetCols",
          value: function () {
            var t = this.cols;
            for (this.positions = []; t;)
              t -= 1,
                this.positions.push(0)
          }
        }, {
          key: "_layout",
          value: function (t) {
            var e = this
              , n = this._getNextPositions(t)
              , r = 0;
            t.forEach((function (t, s) {
              function i() {
                t.applyCss(_.Css.VISIBLE.after)
              }
              if (g.equals(t.point, n[s]) && !t.isHidden)
                return t.applyCss(_.Css.VISIBLE.before),
                  void i();
              t.point = n[s],
                t.scale = _.Scale.VISIBLE,
                t.isHidden = !1;
              var a = e.getStylesForTransition(t, _.Css.VISIBLE.before);
              a.transitionDelay = e._getStaggerAmount(r) + "ms",
                e._queue.push({
                  item: t,
                  styles: a,
                  callback: i
                }),
                r += 1
            }
            ))
          }
        }, {
          key: "_getNextPositions",
          value: function (t) {
            var e = this;
            if (this.options.isCentered) {
              var n = t.map((function (t, n) {
                var r = i.getSize(t.element, !0)
                  , s = e._getItemPosition(r);
                return new v(s.x, s.y, r.width, r.height, n)
              }
              ));
              return this.getTransformedPositions(n, this.containerWidth)
            }
            return t.map((function (t) {
              return e._getItemPosition(i.getSize(t.element, !0))
            }
            ))
          }
        }, {
          key: "_getItemPosition",
          value: function (t) {
            return function (t) {
              for (var e = t.itemSize, n = t.positions, r = t.gridSize, s = t.total, i = t.threshold, a = t.buffer, o = A(e.width, r, s, i), l = j(n, o, s), c = I(l, a), u = new g(r * c, l[c]), p = l[c] + e.height, d = 0; d < o; d++)
                n[c + d] = p;
              return u
            }({
              itemSize: t,
              positions: this.positions,
              gridSize: this.colWidth,
              total: this.cols,
              threshold: this.options.columnThreshold,
              buffer: this.options.buffer
            })
          }
        }, {
          key: "getTransformedPositions",
          value: function (t, e) {
            return D(t, e)
          }
        }, {
          key: "_shrink",
          value: function () {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems()
              , n = 0;
            e.forEach((function (e) {
              function r() {
                e.applyCss(_.Css.HIDDEN.after)
              }
              if (e.isHidden)
                return e.applyCss(_.Css.HIDDEN.before),
                  void r();
              e.scale = _.Scale.HIDDEN,
                e.isHidden = !0;
              var s = t.getStylesForTransition(e, _.Css.HIDDEN.before);
              s.transitionDelay = t._getStaggerAmount(n) + "ms",
                t._queue.push({
                  item: e,
                  styles: s,
                  callback: r
                }),
                n += 1
            }
            ))
          }
        }, {
          key: "_handleResize",
          value: function () {
            this.isEnabled && !this.isDestroyed && this.update()
          }
        }, {
          key: "getStylesForTransition",
          value: function (t, e) {
            var n = Object.assign({}, e);
            if (this.options.useTransforms) {
              var r = this.options.isRTL ? "-" : ""
                , s = this.options.roundTransforms ? Math.round(t.point.x) : t.point.x
                , i = this.options.roundTransforms ? Math.round(t.point.y) : t.point.y;
              n.transform = "translate(".concat(r).concat(s, "px, ").concat(i, "px) scale(").concat(t.scale, ")")
            } else
              this.options.isRTL ? n.right = t.point.x + "px" : n.left = t.point.x + "px",
                n.top = t.point.y + "px";
            return n
          }
        }, {
          key: "_whenTransitionDone",
          value: function (t, e, n) {
            var r = O(t, (function (t) {
              e(),
                n(null, t)
            }
            ));
            this._transitions.push(r)
          }
        }, {
          key: "_getTransitionFunction",
          value: function (t) {
            var e = this;
            return function (n) {
              t.item.applyCss(t.styles),
                e._whenTransitionDone(t.item.element, t.callback, n)
            }
          }
        }, {
          key: "_processQueue",
          value: function () {
            this.isTransitioning && this._cancelMovement();
            var t = this.options.speed > 0
              , e = this._queue.length > 0;
            e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue),
              this._dispatch(i.EventType.LAYOUT)) : this._dispatch(i.EventType.LAYOUT),
              this._queue.length = 0
          }
        }, {
          key: "_startTransitions",
          value: function (t) {
            var e = this;
            this.isTransitioning = !0,
              function (t, e, n) {
                n || ("function" == typeof e ? (n = e,
                  e = null) : n = f);
                var r = t && t.length;
                if (!r)
                  return n(null, []);
                var s = !1
                  , i = new Array(r);
                function a(t) {
                  return function (e, a) {
                    if (!s) {
                      if (e)
                        return n(e, i),
                          void (s = !0);
                      i[t] = a,
                        --r || n(null, i)
                    }
                  }
                }
                t.forEach(e ? function (t, n) {
                  t.call(e, a(n))
                }
                  : function (t, e) {
                    t(a(e))
                  }
                )
              }(t.map((function (t) {
                return e._getTransitionFunction(t)
              }
              )), this._movementFinished.bind(this))
          }
        }, {
          key: "_cancelMovement",
          value: function () {
            this._transitions.forEach(P),
              this._transitions.length = 0,
              this.isTransitioning = !1
          }
        }, {
          key: "_styleImmediately",
          value: function (t) {
            if (t.length) {
              var e = t.map((function (t) {
                return t.item.element
              }
              ));
              i._skipTransitions(e, (function () {
                t.forEach((function (t) {
                  t.item.applyCss(t.styles),
                    t.callback()
                }
                ))
              }
              ))
            }
          }
        }, {
          key: "_movementFinished",
          value: function () {
            this._transitions.length = 0,
              this.isTransitioning = !1,
              this._dispatch(i.EventType.LAYOUT)
          }
        }, {
          key: "filter",
          value: function (t, e) {
            this.isEnabled && ((!t || t && 0 === t.length) && (t = i.ALL_ITEMS),
              this._filter(t),
              this._shrink(),
              this._updateItemCount(),
              this.sort(e))
          }
        }, {
          key: "sort",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
            if (this.isEnabled) {
              this._resetCols();
              var e = E(this._getFilteredItems(), t);
              this.sortedItems = e,
                this._layout(e),
                this._processQueue(),
                this._setContainerSize(),
                this.lastSort = t
            }
          }
        }, {
          key: "update",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.isEnabled && (t || this._setColumns(),
              this.sort())
          }
        }, {
          key: "layout",
          value: function () {
            this.update(!0)
          }
        }, {
          key: "add",
          value: function (t) {
            var e = this
              , n = L(t).map((function (t) {
                return new _(t, e.options.isRTL)
              }
              ));
            this._initItems(n),
              this._resetCols();
            var r = E(this._mergeNewItems(n), this.lastSort)
              , s = this._filter(this.lastFilter, r)
              , i = function (t) {
                return n.includes(t)
              }
              , a = function (t) {
                t.scale = _.Scale.HIDDEN,
                  t.isHidden = !0,
                  t.applyCss(_.Css.HIDDEN.before),
                  t.applyCss(_.Css.HIDDEN.after)
              }
              , o = this._getNextPositions(s.visible);
            s.visible.forEach((function (t, n) {
              i(t) && (t.point = o[n],
                a(t),
                t.applyCss(e.getStylesForTransition(t, {})))
            }
            )),
              s.hidden.forEach((function (t) {
                i(t) && a(t)
              }
              )),
              this.element.offsetWidth,
              this.setItemTransitions(n),
              this.items = this._mergeNewItems(n),
              this.filter(this.lastFilter)
          }
        }, {
          key: "disable",
          value: function () {
            this.isEnabled = !1
          }
        }, {
          key: "enable",
          value: function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.isEnabled = !0,
              t && this.update()
          }
        }, {
          key: "remove",
          value: function (t) {
            var e = this;
            if (t.length) {
              var n = L(t)
                , r = n.map((function (t) {
                  return e.getItemByElement(t)
                }
                )).filter((function (t) {
                  return !!t
                }
                ));
              this._toggleFilterClasses({
                visible: [],
                hidden: r
              }),
                this._shrink(r),
                this.sort(),
                this.items = this.items.filter((function (t) {
                  return !r.includes(t)
                }
                )),
                this._updateItemCount(),
                this.once(i.EventType.LAYOUT, (function () {
                  e._disposeItems(r),
                    n.forEach((function (t) {
                      t.parentNode.removeChild(t)
                    }
                    )),
                    e._dispatch(i.EventType.REMOVED, {
                      collection: n
                    })
                }
                ))
            }
          }
        }, {
          key: "getItemByElement",
          value: function (t) {
            return this.items.find((function (e) {
              return e.element === t
            }
            ))
          }
        }, {
          key: "resetItems",
          value: function () {
            var t = this;
            this._disposeItems(this.items),
              this.isInitialized = !1,
              this.items = this._getItems(),
              this._initItems(this.items),
              this.once(i.EventType.LAYOUT, (function () {
                t.setItemTransitions(t.items),
                  t.isInitialized = !0
              }
              )),
              this.filter(this.lastFilter)
          }
        }, {
          key: "destroy",
          value: function () {
            this._cancelMovement(),
              window.removeEventListener("resize", this._onResize),
              this.element.classList.remove("shuffle"),
              this.element.removeAttribute("style"),
              this._disposeItems(this.items),
              this.items.length = 0,
              this._transitions.length = 0,
              this.options.sizer = null,
              this.element = null,
              this.isDestroyed = !0,
              this.isEnabled = !1
          }
        }], [{
          key: "getSize",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = window.getComputedStyle(t, null)
              , r = C(t, "width", n)
              , s = C(t, "height", n);
            if (e) {
              var i = C(t, "marginLeft", n)
                , a = C(t, "marginRight", n)
                , o = C(t, "marginTop", n)
                , l = C(t, "marginBottom", n);
              r += i + a,
                s += o + l
            }
            return {
              width: r,
              height: s
            }
          }
        }, {
          key: "_skipTransitions",
          value: function (t, e) {
            var n = t.map((function (t) {
              var e = t.style
                , n = e.transitionDuration
                , r = e.transitionDelay;
              return e.transitionDuration = "0ms",
                e.transitionDelay = "0ms",
              {
                duration: n,
                delay: r
              }
            }
            ));
            e(),
              t[0].offsetWidth,
              t.forEach((function (t, e) {
                t.style.transitionDuration = n[e].duration,
                  t.style.transitionDelay = n[e].delay
              }
              ))
          }
        }]),
          i
      }(c);
    return $.ShuffleItem = _,
      $.ALL_ITEMS = "all",
      $.FILTER_ATTRIBUTE_KEY = "groups",
      $.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
      },
      $.Classes = y,
      $.FilterMode = {
        ANY: "any",
        ALL: "all"
      },
      $.options = {
        group: $.ALL_ITEMS,
        speed: 250,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimiter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: h,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 150,
        useTransforms: !0,
        filterMode: $.FilterMode.ANY,
        isCentered: !1,
        isRTL: !1,
        roundTransforms: !0
      },
      $.Point = g,
      $.Rect = v,
      $.__sorter = E,
      $.__getColumnSpan = A,
      $.__getAvailablePositions = j,
      $.__getShortColumn = I,
      $.__getCenteredPositions = D,
      $
  }
  )),
  List = function () {
    var t = {
      "./src/add-async.js": function (t) {
        t.exports = function (t) {
          return function e(n, r, s) {
            var i = n.splice(0, 50);
            s = (s = s || []).concat(t.add(i)),
              n.length > 0 ? setTimeout((function () {
                e(n, r, s)
              }
              ), 1) : (t.update(),
                r(s))
          }
        }
      },
      "./src/filter.js": function (t) {
        t.exports = function (t) {
          return t.handlers.filterStart = t.handlers.filterStart || [],
            t.handlers.filterComplete = t.handlers.filterComplete || [],
            function (e) {
              if (t.trigger("filterStart"),
                t.i = 1,
                t.reset.filter(),
                void 0 === e)
                t.filtered = !1;
              else {
                t.filtered = !0;
                for (var n = t.items, r = 0, s = n.length; r < s; r++) {
                  var i = n[r];
                  e(i) ? i.filtered = !0 : i.filtered = !1
                }
              }
              return t.update(),
                t.trigger("filterComplete"),
                t.visibleItems
            }
        }
      },
      "./src/fuzzy-search.js": function (t, e, n) {
        n("./src/utils/classes.js");
        var r = n("./src/utils/events.js")
          , s = n("./src/utils/extend.js")
          , i = n("./src/utils/to-string.js")
          , a = n("./src/utils/get-by-class.js")
          , o = n("./src/utils/fuzzy.js");
        t.exports = function (t, e) {
          e = s({
            location: 0,
            distance: 100,
            threshold: .4,
            multiSearch: !0,
            searchClass: "fuzzy-search"
          }, e = e || {});
          var n = {
            search: function (r, s) {
              for (var i = e.multiSearch ? r.replace(/ +$/, "").split(/ +/) : [r], a = 0, o = t.items.length; a < o; a++)
                n.item(t.items[a], s, i)
            },
            item: function (t, e, r) {
              for (var s = !0, i = 0; i < r.length; i++) {
                for (var a = !1, o = 0, l = e.length; o < l; o++)
                  n.values(t.values(), e[o], r[i]) && (a = !0);
                a || (s = !1)
              }
              t.found = s
            },
            values: function (t, n, r) {
              if (t.hasOwnProperty(n)) {
                var s = i(t[n]).toLowerCase();
                if (o(s, r, e))
                  return !0
              }
              return !1
            }
          };
          return r.bind(a(t.listContainer, e.searchClass), "keyup", t.utils.events.debounce((function (e) {
            var r = e.target || e.srcElement;
            t.search(r.value, n.search)
          }
          ), t.searchDelay)),
            function (e, r) {
              t.search(e, r, n.search)
            }
        }
      },
      "./src/index.js": function (t, e, n) {
        var r = n("./node_modules/string-natural-compare/natural-compare.js")
          , s = n("./src/utils/get-by-class.js")
          , i = n("./src/utils/extend.js")
          , a = n("./src/utils/index-of.js")
          , o = n("./src/utils/events.js")
          , l = n("./src/utils/to-string.js")
          , c = n("./src/utils/classes.js")
          , u = n("./src/utils/get-attribute.js")
          , p = n("./src/utils/to-array.js");
        t.exports = function (t, e, d) {
          var h, f = this, m = n("./src/item.js")(f), g = n("./src/add-async.js")(f), v = n("./src/pagination.js")(f);
          h = {
            start: function () {
              f.listClass = "list",
                f.searchClass = "search",
                f.sortClass = "sort",
                f.page = 1e4,
                f.i = 1,
                f.items = [],
                f.visibleItems = [],
                f.matchingItems = [],
                f.searched = !1,
                f.filtered = !1,
                f.searchColumns = void 0,
                f.searchDelay = 0,
                f.handlers = {
                  updated: []
                },
                f.valueNames = [],
                f.utils = {
                  getByClass: s,
                  extend: i,
                  indexOf: a,
                  events: o,
                  toString: l,
                  naturalSort: r,
                  classes: c,
                  getAttribute: u,
                  toArray: p
                },
                f.utils.extend(f, e),
                f.listContainer = "string" == typeof t ? document.getElementById(t) : t,
                f.listContainer && (f.list = s(f.listContainer, f.listClass, !0),
                  f.parse = n("./src/parse.js")(f),
                  f.templater = n("./src/templater.js")(f),
                  f.search = n("./src/search.js")(f),
                  f.filter = n("./src/filter.js")(f),
                  f.sort = n("./src/sort.js")(f),
                  f.fuzzySearch = n("./src/fuzzy-search.js")(f, e.fuzzySearch),
                  this.handlers(),
                  this.items(),
                  this.pagination(),
                  f.update())
            },
            handlers: function () {
              for (var t in f.handlers)
                f[t] && f.handlers.hasOwnProperty(t) && f.on(t, f[t])
            },
            items: function () {
              f.parse(f.list),
                void 0 !== d && f.add(d)
            },
            pagination: function () {
              if (void 0 !== e.pagination) {
                !0 === e.pagination && (e.pagination = [{}]),
                  void 0 === e.pagination[0] && (e.pagination = [e.pagination]);
                for (var t = 0, n = e.pagination.length; t < n; t++)
                  v(e.pagination[t])
              }
            }
          },
            this.reIndex = function () {
              f.items = [],
                f.visibleItems = [],
                f.matchingItems = [],
                f.searched = !1,
                f.filtered = !1,
                f.parse(f.list)
            }
            ,
            this.toJSON = function () {
              for (var t = [], e = 0, n = f.items.length; e < n; e++)
                t.push(f.items[e].values());
              return t
            }
            ,
            this.add = function (t, e) {
              if (0 !== t.length) {
                if (!e) {
                  var n = []
                    , r = !1;
                  void 0 === t[0] && (t = [t]);
                  for (var s = 0, i = t.length; s < i; s++) {
                    var a;
                    r = f.items.length > f.page,
                      a = new m(t[s], void 0, r),
                      f.items.push(a),
                      n.push(a)
                  }
                  return f.update(),
                    n
                }
                g(t.slice(0), e)
              }
            }
            ,
            this.show = function (t, e) {
              return this.i = t,
                this.page = e,
                f.update(),
                f
            }
            ,
            this.remove = function (t, e, n) {
              for (var r = 0, s = 0, i = f.items.length; s < i; s++)
                f.items[s].values()[t] == e && (f.templater.remove(f.items[s], n),
                  f.items.splice(s, 1),
                  i--,
                  s--,
                  r++);
              return f.update(),
                r
            }
            ,
            this.get = function (t, e) {
              for (var n = [], r = 0, s = f.items.length; r < s; r++) {
                var i = f.items[r];
                i.values()[t] == e && n.push(i)
              }
              return n
            }
            ,
            this.size = function () {
              return f.items.length
            }
            ,
            this.clear = function () {
              return f.templater.clear(),
                f.items = [],
                f
            }
            ,
            this.on = function (t, e) {
              return f.handlers[t].push(e),
                f
            }
            ,
            this.off = function (t, e) {
              var n = f.handlers[t]
                , r = a(n, e);
              return r > -1 && n.splice(r, 1),
                f
            }
            ,
            this.trigger = function (t) {
              for (var e = f.handlers[t].length; e--;)
                f.handlers[t][e](f);
              return f
            }
            ,
            this.reset = {
              filter: function () {
                for (var t = f.items, e = t.length; e--;)
                  t[e].filtered = !1;
                return f
              },
              search: function () {
                for (var t = f.items, e = t.length; e--;)
                  t[e].found = !1;
                return f
              }
            },
            this.update = function () {
              var t = f.items
                , e = t.length;
              f.visibleItems = [],
                f.matchingItems = [],
                f.templater.clear();
              for (var n = 0; n < e; n++)
                t[n].matching() && f.matchingItems.length + 1 >= f.i && f.visibleItems.length < f.page ? (t[n].show(),
                  f.visibleItems.push(t[n]),
                  f.matchingItems.push(t[n])) : t[n].matching() ? (f.matchingItems.push(t[n]),
                    t[n].hide()) : t[n].hide();
              return f.trigger("updated"),
                f
            }
            ,
            h.start()
        }
      },
      "./src/item.js": function (t) {
        t.exports = function (t) {
          return function (e, n, r) {
            var s = this;
            this._values = {},
              this.found = !1,
              this.filtered = !1,
              this.values = function (e, n) {
                if (void 0 === e)
                  return s._values;
                for (var r in e)
                  s._values[r] = e[r];
                !0 !== n && t.templater.set(s, s.values())
              }
              ,
              this.show = function () {
                t.templater.show(s)
              }
              ,
              this.hide = function () {
                t.templater.hide(s)
              }
              ,
              this.matching = function () {
                return t.filtered && t.searched && s.found && s.filtered || t.filtered && !t.searched && s.filtered || !t.filtered && t.searched && s.found || !t.filtered && !t.searched
              }
              ,
              this.visible = function () {
                return !(!s.elm || s.elm.parentNode != t.list)
              }
              ,
              function (e, n, r) {
                if (void 0 === n)
                  r ? s.values(e, r) : s.values(e);
                else {
                  s.elm = n;
                  var i = t.templater.get(s, e);
                  s.values(i)
                }
              }(e, n, r)
          }
        }
      },
      "./src/pagination.js": function (t, e, n) {
        var r = n("./src/utils/classes.js")
          , s = n("./src/utils/events.js")
          , i = n("./src/index.js");
        t.exports = function (t) {
          var e = !1
            , n = function (n, s) {
              if (t.page < 1)
                return t.listContainer.style.display = "none",
                  void (e = !0);
              e && (t.listContainer.style.display = "block");
              var i, o = t.matchingItems.length, l = t.i, c = t.page, u = Math.ceil(o / c), p = Math.ceil(l / c), d = s.innerWindow || 2, h = s.left || s.outerWindow || 0, f = s.right || s.outerWindow || 0;
              f = u - f,
                n.clear();
              for (var m = 1; m <= u; m++) {
                var g = p === m ? "active" : "";
                a.number(m, h, f, p, d) ? (i = n.add({
                  page: m,
                  dotted: !1
                })[0],
                  g && r(i.elm).add(g),
                  i.elm.firstChild.setAttribute("data-i", m),
                  i.elm.firstChild.setAttribute("data-page", c)) : a.dotted(n, m, h, f, p, d, n.size()) && (i = n.add({
                    page: "...",
                    dotted: !0
                  })[0],
                    r(i.elm).add("disabled"))
              }
            }
            , a = {
              number: function (t, e, n, r, s) {
                return this.left(t, e) || this.right(t, n) || this.innerWindow(t, r, s)
              },
              left: function (t, e) {
                return t <= e
              },
              right: function (t, e) {
                return t > e
              },
              innerWindow: function (t, e, n) {
                return t >= e - n && t <= e + n
              },
              dotted: function (t, e, n, r, s, i, a) {
                return this.dottedLeft(t, e, n, r, s, i) || this.dottedRight(t, e, n, r, s, i, a)
              },
              dottedLeft: function (t, e, n, r, s, i) {
                return e == n + 1 && !this.innerWindow(e, s, i) && !this.right(e, r)
              },
              dottedRight: function (t, e, n, r, s, i, a) {
                return !t.items[a - 1].values().dotted && e == r && !this.innerWindow(e, s, i) && !this.right(e, r)
              }
            };
          return function (e) {
            var r = new i(t.listContainer.id, {
              listClass: e.paginationClass || "pagination",
              item: e.item || "<li><a class='page' href='#'></a></li>",
              valueNames: ["page", "dotted"],
              searchClass: "pagination-search-that-is-not-supposed-to-exist",
              sortClass: "pagination-sort-that-is-not-supposed-to-exist"
            });
            s.bind(r.listContainer, "click", (function (e) {
              var n = e.target || e.srcElement
                , r = t.utils.getAttribute(n, "data-page")
                , s = t.utils.getAttribute(n, "data-i");
              s && t.show((s - 1) * r + 1, r)
            }
            )),
              t.on("updated", (function () {
                n(r, e)
              }
              )),
              n(r, e)
          }
        }
      },
      "./src/parse.js": function (t, e, n) {
        t.exports = function (t) {
          var e = n("./src/item.js")(t)
            , r = function (n, r) {
              for (var s = 0, i = n.length; s < i; s++)
                t.items.push(new e(r, n[s]))
            };
          return t.handlers.parseComplete = t.handlers.parseComplete || [],
            function () {
              var e = function (t) {
                for (var e = t.childNodes, n = [], r = 0, s = e.length; r < s; r++)
                  void 0 === e[r].data && n.push(e[r]);
                return n
              }(t.list)
                , n = t.valueNames;
              t.indexAsync ? function e(n, s) {
                var i = n.splice(0, 50);
                r(i, s),
                  n.length > 0 ? setTimeout((function () {
                    e(n, s)
                  }
                  ), 1) : (t.update(),
                    t.trigger("parseComplete"))
              }(e, n) : r(e, n)
            }
        }
      },
      "./src/search.js": function (t) {
        t.exports = function (t) {
          var e, n, r, s = {
            resetList: function () {
              t.i = 1,
                t.templater.clear(),
                r = void 0
            },
            setOptions: function (t) {
              2 == t.length && t[1] instanceof Array ? e = t[1] : 2 == t.length && "function" == typeof t[1] ? (e = void 0,
                r = t[1]) : 3 == t.length ? (e = t[1],
                  r = t[2]) : e = void 0
            },
            setColumns: function () {
              0 !== t.items.length && void 0 === e && (e = void 0 === t.searchColumns ? s.toArray(t.items[0].values()) : t.searchColumns)
            },
            setSearchString: function (e) {
              e = (e = t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"),
                n = e
            },
            toArray: function (t) {
              var e = [];
              for (var n in t)
                e.push(n);
              return e
            }
          }, i = function () {
            for (var r, s = [], i = n; null !== (r = i.match(/"([^"]+)"/));)
              s.push(r[1]),
                i = i.substring(0, r.index) + i.substring(r.index + r[0].length);
            (i = i.trim()).length && (s = s.concat(i.split(/\s+/)));
            for (var a = 0, o = t.items.length; a < o; a++) {
              var l = t.items[a];
              if (l.found = !1,
                s.length) {
                for (var c = 0, u = s.length; c < u; c++) {
                  for (var p = !1, d = 0, h = e.length; d < h; d++) {
                    var f = l.values()
                      , m = e[d];
                    if (f.hasOwnProperty(m) && void 0 !== f[m] && null !== f[m] && -1 !== ("string" != typeof f[m] ? f[m].toString() : f[m]).toLowerCase().indexOf(s[c])) {
                      p = !0;
                      break
                    }
                  }
                  if (!p)
                    break
                }
                l.found = p
              }
            }
          }, a = function () {
            t.reset.search(),
              t.searched = !1
          }, o = function (o) {
            return t.trigger("searchStart"),
              s.resetList(),
              s.setSearchString(o),
              s.setOptions(arguments),
              s.setColumns(),
              "" === n ? a() : (t.searched = !0,
                r ? r(n, e) : i()),
              t.update(),
              t.trigger("searchComplete"),
              t.visibleItems
          };
          return t.handlers.searchStart = t.handlers.searchStart || [],
            t.handlers.searchComplete = t.handlers.searchComplete || [],
            t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", t.utils.events.debounce((function (e) {
              var n = e.target || e.srcElement;
              "" === n.value && !t.searched || o(n.value)
            }
            ), t.searchDelay)),
            t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", (function (t) {
              "" === (t.target || t.srcElement).value && o("")
            }
            )),
            o
        }
      },
      "./src/sort.js": function (t) {
        t.exports = function (t) {
          var e = {
            els: void 0,
            clear: function () {
              for (var n = 0, r = e.els.length; n < r; n++)
                t.utils.classes(e.els[n]).remove("asc"),
                  t.utils.classes(e.els[n]).remove("desc")
            },
            getOrder: function (e) {
              var n = t.utils.getAttribute(e, "data-order");
              return "asc" == n || "desc" == n ? n : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc"
            },
            getInSensitive: function (e, n) {
              var r = t.utils.getAttribute(e, "data-insensitive");
              n.insensitive = "false" !== r
            },
            setOrder: function (n) {
              for (var r = 0, s = e.els.length; r < s; r++) {
                var i = e.els[r];
                if (t.utils.getAttribute(i, "data-sort") === n.valueName) {
                  var a = t.utils.getAttribute(i, "data-order");
                  "asc" == a || "desc" == a ? a == n.order && t.utils.classes(i).add(n.order) : t.utils.classes(i).add(n.order)
                }
              }
            }
          }
            , n = function () {
              t.trigger("sortStart");
              var n = {}
                , r = arguments[0].currentTarget || arguments[0].srcElement || void 0;
              r ? (n.valueName = t.utils.getAttribute(r, "data-sort"),
                e.getInSensitive(r, n),
                n.order = e.getOrder(r)) : ((n = arguments[1] || n).valueName = arguments[0],
                  n.order = n.order || "asc",
                  n.insensitive = void 0 === n.insensitive || n.insensitive),
                e.clear(),
                e.setOrder(n);
              var s, i = n.sortFunction || t.sortFunction || null, a = "desc" === n.order ? -1 : 1;
              s = i ? function (t, e) {
                return i(t, e, n) * a
              }
                : function (e, r) {
                  var s = t.utils.naturalSort;
                  return s.alphabet = t.alphabet || n.alphabet || void 0,
                    !s.alphabet && n.insensitive && (s = t.utils.naturalSort.caseInsensitive),
                    s(e.values()[n.valueName], r.values()[n.valueName]) * a
                }
                ,
                t.items.sort(s),
                t.update(),
                t.trigger("sortComplete")
            };
          return t.handlers.sortStart = t.handlers.sortStart || [],
            t.handlers.sortComplete = t.handlers.sortComplete || [],
            e.els = t.utils.getByClass(t.listContainer, t.sortClass),
            t.utils.events.bind(e.els, "click", n),
            t.on("searchStart", e.clear),
            t.on("filterStart", e.clear),
            n
        }
      },
      "./src/templater.js": function (t) {
        var e = function (t) {
          var e, n = this, r = function (t) {
            if ("string" == typeof t) {
              if (/<tr[\s>]/g.exec(t)) {
                var e = document.createElement("tbody");
                return e.innerHTML = t,
                  e.firstElementChild
              }
              if (-1 !== t.indexOf("<")) {
                var n = document.createElement("div");
                return n.innerHTML = t,
                  n.firstElementChild
              }
            }
          }, s = function (e, n, r) {
            var s = void 0
              , i = function (e) {
                for (var n = 0, r = t.valueNames.length; n < r; n++) {
                  var s = t.valueNames[n];
                  if (s.data) {
                    for (var i = s.data, a = 0, o = i.length; a < o; a++)
                      if (i[a] === e)
                        return {
                          data: e
                        }
                  } else {
                    if (s.attr && s.name && s.name == e)
                      return s;
                    if (s === e)
                      return e
                  }
                }
              }(n);
            i && (i.data ? e.elm.setAttribute("data-" + i.data, r) : i.attr && i.name ? (s = t.utils.getByClass(e.elm, i.name, !0)) && s.setAttribute(i.attr, r) : (s = t.utils.getByClass(e.elm, i, !0)) && (s.innerHTML = r))
          };
          this.get = function (e, r) {
            n.create(e);
            for (var s = {}, i = 0, a = r.length; i < a; i++) {
              var o = void 0
                , l = r[i];
              if (l.data)
                for (var c = 0, u = l.data.length; c < u; c++)
                  s[l.data[c]] = t.utils.getAttribute(e.elm, "data-" + l.data[c]);
              else
                l.attr && l.name ? (o = t.utils.getByClass(e.elm, l.name, !0),
                  s[l.name] = o ? t.utils.getAttribute(o, l.attr) : "") : (o = t.utils.getByClass(e.elm, l, !0),
                    s[l] = o ? o.innerHTML : "")
            }
            return s
          }
            ,
            this.set = function (t, e) {
              if (!n.create(t))
                for (var r in e)
                  e.hasOwnProperty(r) && s(t, r, e[r])
            }
            ,
            this.create = function (t) {
              return void 0 === t.elm && (t.elm = e(t.values()),
                n.set(t, t.values()),
                !0)
            }
            ,
            this.remove = function (e) {
              e.elm.parentNode === t.list && t.list.removeChild(e.elm)
            }
            ,
            this.show = function (e) {
              n.create(e),
                t.list.appendChild(e.elm)
            }
            ,
            this.hide = function (e) {
              void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm)
            }
            ,
            this.clear = function () {
              if (t.list.hasChildNodes())
                for (; t.list.childNodes.length >= 1;)
                  t.list.removeChild(t.list.firstChild)
            }
            ,
            function () {
              var n;
              if ("function" != typeof t.item) {
                if (!(n = "string" == typeof t.item ? -1 === t.item.indexOf("<") ? document.getElementById(t.item) : r(t.item) : function () {
                  for (var e = t.list.childNodes, n = 0, r = e.length; n < r; n++)
                    if (void 0 === e[n].data)
                      return e[n].cloneNode(!0)
                }()))
                  throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");
                n = function (e, n) {
                  var r = e.cloneNode(!0);
                  r.removeAttribute("id");
                  for (var s = 0, i = n.length; s < i; s++) {
                    var a = void 0
                      , o = n[s];
                    if (o.data)
                      for (var l = 0, c = o.data.length; l < c; l++)
                        r.setAttribute("data-" + o.data[l], "");
                    else
                      o.attr && o.name ? (a = t.utils.getByClass(r, o.name, !0)) && a.setAttribute(o.attr, "") : (a = t.utils.getByClass(r, o, !0)) && (a.innerHTML = "")
                  }
                  return r
                }(n, t.valueNames),
                  e = function () {
                    return n.cloneNode(!0)
                  }
              } else
                e = function (e) {
                  var n = t.item(e);
                  return r(n)
                }
            }()
        };
        t.exports = function (t) {
          return new e(t)
        }
      },
      "./src/utils/classes.js": function (t, e, n) {
        var r = n("./src/utils/index-of.js")
          , s = /\s+/;
        function i(t) {
          if (!t || !t.nodeType)
            throw new Error("A DOM element reference is required");
          this.el = t,
            this.list = t.classList
        }
        Object.prototype.toString,
          t.exports = function (t) {
            return new i(t)
          }
          ,
          i.prototype.add = function (t) {
            if (this.list)
              return this.list.add(t),
                this;
            var e = this.array();
            return ~r(e, t) || e.push(t),
              this.el.className = e.join(" "),
              this
          }
          ,
          i.prototype.remove = function (t) {
            if (this.list)
              return this.list.remove(t),
                this;
            var e = this.array()
              , n = r(e, t);
            return ~n && e.splice(n, 1),
              this.el.className = e.join(" "),
              this
          }
          ,
          i.prototype.toggle = function (t, e) {
            return this.list ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t),
              this) : (void 0 !== e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t),
                this)
          }
          ,
          i.prototype.array = function () {
            var t = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(s);
            return "" === t[0] && t.shift(),
              t
          }
          ,
          i.prototype.has = i.prototype.contains = function (t) {
            return this.list ? this.list.contains(t) : !!~r(this.array(), t)
          }
      },
      "./src/utils/events.js": function (t, e, n) {
        var r = window.addEventListener ? "addEventListener" : "attachEvent"
          , s = window.removeEventListener ? "removeEventListener" : "detachEvent"
          , i = "addEventListener" !== r ? "on" : ""
          , a = n("./src/utils/to-array.js");
        e.bind = function (t, e, n, s) {
          for (var o = 0, l = (t = a(t)).length; o < l; o++)
            t[o][r](i + e, n, s || !1)
        }
          ,
          e.unbind = function (t, e, n, r) {
            for (var o = 0, l = (t = a(t)).length; o < l; o++)
              t[o][s](i + e, n, r || !1)
          }
          ,
          e.debounce = function (t, e, n) {
            var r;
            return e ? function () {
              var s = this
                , i = arguments
                , a = function () {
                  r = null,
                    n || t.apply(s, i)
                }
                , o = n && !r;
              clearTimeout(r),
                r = setTimeout(a, e),
                o && t.apply(s, i)
            }
              : t
          }
      },
      "./src/utils/extend.js": function (t) {
        t.exports = function (t) {
          for (var e, n = Array.prototype.slice.call(arguments, 1), r = 0; e = n[r]; r++)
            if (e)
              for (var s in e)
                t[s] = e[s];
          return t
        }
      },
      "./src/utils/fuzzy.js": function (t) {
        t.exports = function (t, e, n) {
          var r = n.location || 0
            , s = n.distance || 100
            , i = n.threshold || .4;
          if (e === t)
            return !0;
          if (e.length > 32)
            return !1;
          var a = r
            , o = function () {
              var t, n = {};
              for (t = 0; t < e.length; t++)
                n[e.charAt(t)] = 0;
              for (t = 0; t < e.length; t++)
                n[e.charAt(t)] |= 1 << e.length - t - 1;
              return n
            }();
          function l(t, n) {
            var r = t / e.length
              , i = Math.abs(a - n);
            return s ? r + i / s : i ? 1 : r
          }
          var c = i
            , u = t.indexOf(e, a);
          -1 != u && (c = Math.min(l(0, u), c),
            -1 != (u = t.lastIndexOf(e, a + e.length)) && (c = Math.min(l(0, u), c)));
          var p, d, h = 1 << e.length - 1;
          u = -1;
          for (var f, m = e.length + t.length, g = 0; g < e.length; g++) {
            for (p = 0,
              d = m; p < d;)
              l(g, a + d) <= c ? p = d : m = d,
                d = Math.floor((m - p) / 2 + p);
            m = d;
            var v = Math.max(1, a - d + 1)
              , y = Math.min(a + d, t.length) + e.length
              , b = Array(y + 2);
            b[y + 1] = (1 << g) - 1;
            for (var _ = y; _ >= v; _--) {
              var w = o[t.charAt(_ - 1)];
              if (b[_] = 0 === g ? (b[_ + 1] << 1 | 1) & w : (b[_ + 1] << 1 | 1) & w | (f[_ + 1] | f[_]) << 1 | 1 | f[_ + 1],
                b[_] & h) {
                var S = l(g, _ - 1);
                if (S <= c) {
                  if (c = S,
                    !((u = _ - 1) > a))
                    break;
                  v = Math.max(1, 2 * a - u)
                }
              }
            }
            if (l(g + 1, a) > c)
              break;
            f = b
          }
          return !(u < 0)
        }
      },
      "./src/utils/get-attribute.js": function (t) {
        t.exports = function (t, e) {
          var n = t.getAttribute && t.getAttribute(e) || null;
          if (!n)
            for (var r = t.attributes, s = r.length, i = 0; i < s; i++)
              void 0 !== r[i] && r[i].nodeName === e && (n = r[i].nodeValue);
          return n
        }
      },
      "./src/utils/get-by-class.js": function (t) {
        t.exports = function (t, e, n, r) {
          return (r = r || {}).test && r.getElementsByClassName || !r.test && document.getElementsByClassName ? function (t, e, n) {
            return n ? t.getElementsByClassName(e)[0] : t.getElementsByClassName(e)
          }(t, e, n) : r.test && r.querySelector || !r.test && document.querySelector ? function (t, e, n) {
            return e = "." + e,
              n ? t.querySelector(e) : t.querySelectorAll(e)
          }(t, e, n) : function (t, e, n) {
            for (var r = [], s = t.getElementsByTagName("*"), i = s.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), o = 0, l = 0; o < i; o++)
              if (a.test(s[o].className)) {
                if (n)
                  return s[o];
                r[l] = s[o],
                  l++
              }
            return r
          }(t, e, n)
        }
      },
      "./src/utils/index-of.js": function (t) {
        var e = [].indexOf;
        t.exports = function (t, n) {
          if (e)
            return t.indexOf(n);
          for (var r = 0, s = t.length; r < s; ++r)
            if (t[r] === n)
              return r;
          return -1
        }
      },
      "./src/utils/to-array.js": function (t) {
        t.exports = function (t) {
          if (void 0 === t)
            return [];
          if (null === t)
            return [null];
          if (t === window)
            return [window];
          if ("string" == typeof t)
            return [t];
          if (function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          }(t))
            return t;
          if ("number" != typeof t.length)
            return [t];
          if ("function" == typeof t && t instanceof Function)
            return [t];
          for (var e = [], n = 0, r = t.length; n < r; n++)
            (Object.prototype.hasOwnProperty.call(t, n) || n in t) && e.push(t[n]);
          return e.length ? e : []
        }
      },
      "./src/utils/to-string.js": function (t) {
        t.exports = function (t) {
          return (t = null === (t = void 0 === t ? "" : t) ? "" : t).toString()
        }
      },
      "./node_modules/string-natural-compare/natural-compare.js": function (t) {
        "use strict";
        var e, n, r = 0;
        function s(t) {
          return t >= 48 && t <= 57
        }
        function i(t, e) {
          for (var i = (t += "").length, a = (e += "").length, o = 0, l = 0; o < i && l < a;) {
            var c = t.charCodeAt(o)
              , u = e.charCodeAt(l);
            if (s(c)) {
              if (!s(u))
                return c - u;
              for (var p = o, d = l; 48 === c && ++p < i;)
                c = t.charCodeAt(p);
              for (; 48 === u && ++d < a;)
                u = e.charCodeAt(d);
              for (var h = p, f = d; h < i && s(t.charCodeAt(h));)
                ++h;
              for (; f < a && s(e.charCodeAt(f));)
                ++f;
              var m = h - p - f + d;
              if (m)
                return m;
              for (; p < h;)
                if (m = t.charCodeAt(p++) - e.charCodeAt(d++))
                  return m;
              o = h,
                l = f
            } else {
              if (c !== u)
                return c < r && u < r && -1 !== n[c] && -1 !== n[u] ? n[c] - n[u] : c - u;
              ++o,
                ++l
            }
          }
          return o >= i && l < a && i >= a ? -1 : l >= a && o < i && a >= i ? 1 : i - a
        }
        i.caseInsensitive = i.i = function (t, e) {
          return i(("" + t).toLowerCase(), ("" + e).toLowerCase())
        }
          ,
          Object.defineProperties(i, {
            alphabet: {
              get: function () {
                return e
              },
              set: function (t) {
                n = [];
                var s = 0;
                if (e = t)
                  for (; s < e.length; s++)
                    n[e.charCodeAt(s)] = s;
                for (r = n.length,
                  s = 0; s < r; s++)
                  void 0 === n[s] && (n[s] = -1)
              }
            }
          }),
          t.exports = i
      }
    }
      , e = {};
    return function n(r) {
      if (e[r])
        return e[r].exports;
      var s = e[r] = {
        exports: {}
      };
      return t[r](s, s.exports, n),
        s.exports
    }("./src/index.js")
  }();
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function () {
    var t = /\blang(?:uage)?-(\w+)\b/i
      , e = 0
      , n = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
          encode: function (t) {
            return t instanceof r ? new r(t.type, n.util.encode(t.content), t.alias) : "Array" === n.util.type(t) ? t.map(n.util.encode) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
          },
          type: function (t) {
            return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]
          },
          objId: function (t) {
            return t.__id || Object.defineProperty(t, "__id", {
              value: ++e
            }),
              t.__id
          },
          clone: function (t, e) {
            var r = n.util.type(t);
            switch (e = e || {},
            r) {
              case "Object":
                if (e[n.util.objId(t)])
                  return e[n.util.objId(t)];
                var s = {};
                for (var i in e[n.util.objId(t)] = s,
                  t)
                  t.hasOwnProperty(i) && (s[i] = n.util.clone(t[i], e));
                return s;
              case "Array":
                if (e[n.util.objId(t)])
                  return e[n.util.objId(t)];
                s = [];
                return e[n.util.objId(t)] = s,
                  t.forEach((function (t, r) {
                    s[r] = n.util.clone(t, e)
                  }
                  )),
                  s
            }
            return t
          }
        },
        languages: {
          extend: function (t, e) {
            var r = n.util.clone(n.languages[t]);
            for (var s in e)
              r[s] = e[s];
            return r
          },
          insertBefore: function (t, e, r, s) {
            var i = (s = s || n.languages)[t];
            if (2 == arguments.length) {
              for (var a in r = arguments[1])
                r.hasOwnProperty(a) && (i[a] = r[a]);
              return i
            }
            var o = {};
            for (var l in i)
              if (i.hasOwnProperty(l)) {
                if (l == e)
                  for (var a in r)
                    r.hasOwnProperty(a) && (o[a] = r[a]);
                o[l] = i[l]
              }
            return n.languages.DFS(n.languages, (function (e, n) {
              n === s[t] && e != t && (this[e] = o)
            }
            )),
              s[t] = o
          },
          DFS: function (t, e, r, s) {
            for (var i in s = s || {},
              t)
              t.hasOwnProperty(i) && (e.call(t, i, t[i], r || i),
                "Object" !== n.util.type(t[i]) || s[n.util.objId(t[i])] ? "Array" !== n.util.type(t[i]) || s[n.util.objId(t[i])] || (s[n.util.objId(t[i])] = !0,
                  n.languages.DFS(t[i], e, i, s)) : (s[n.util.objId(t[i])] = !0,
                    n.languages.DFS(t[i], e, null, s)))
          }
        },
        plugins: {},
        highlightAll: function (t, e) {
          n.highlightAllUnder(document, t, e)
        },
        highlightAllUnder: function (t, e, r) {
          var s = {
            callback: r,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run("before-highlightall", s);
          for (var i, a = s.elements || t.querySelectorAll(s.selector), o = 0; i = a[o++];)
            n.highlightElement(i, !0 === e, s.callback)
        },
        highlightElement: function (e, r, s) {
          for (var i, a, o = e; o && !t.test(o.className);)
            o = o.parentNode;
          o && (i = (o.className.match(t) || [, ""])[1].toLowerCase(),
            a = n.languages[i]),
            e.className = e.className.replace(t, "").replace(/\s+/g, " ") + " language-" + i,
            e.parentNode && (o = e.parentNode,
              /pre/i.test(o.nodeName) && (o.className = o.className.replace(t, "").replace(/\s+/g, " ") + " language-" + i));
          var l = {
            element: e,
            language: i,
            grammar: a,
            code: e.textContent
          };
          if (n.hooks.run("before-sanity-check", l),
            !l.code || !l.grammar)
            return l.code && (n.hooks.run("before-highlight", l),
              l.element.textContent = l.code,
              n.hooks.run("after-highlight", l)),
              void n.hooks.run("complete", l);
          if (n.hooks.run("before-highlight", l),
            r && _self.Worker) {
            var c = new Worker(n.filename);
            c.onmessage = function (t) {
              l.highlightedCode = t.data,
                n.hooks.run("before-insert", l),
                l.element.innerHTML = l.highlightedCode,
                s && s.call(l.element),
                n.hooks.run("after-highlight", l),
                n.hooks.run("complete", l)
            }
              ,
              c.postMessage(JSON.stringify({
                language: l.language,
                code: l.code,
                immediateClose: !0
              }))
          } else
            l.highlightedCode = n.highlight(l.code, l.grammar, l.language),
              n.hooks.run("before-insert", l),
              l.element.innerHTML = l.highlightedCode,
              s && s.call(e),
              n.hooks.run("after-highlight", l),
              n.hooks.run("complete", l)
        },
        highlight: function (t, e, s) {
          var i = {
            code: t,
            grammar: e,
            language: s
          };
          return n.hooks.run("before-tokenize", i),
            i.tokens = n.tokenize(i.code, i.grammar),
            n.hooks.run("after-tokenize", i),
            r.stringify(n.util.encode(i.tokens), i.language)
        },
        matchGrammar: function (t, e, r, s, i, a, o) {
          var l = n.Token;
          for (var c in r)
            if (r.hasOwnProperty(c) && r[c]) {
              if (c == o)
                return;
              var u = r[c];
              u = "Array" === n.util.type(u) ? u : [u];
              for (var p = 0; p < u.length; ++p) {
                var d = u[p]
                  , h = d.inside
                  , f = !!d.lookbehind
                  , m = !!d.greedy
                  , g = 0
                  , v = d.alias;
                if (m && !d.pattern.global) {
                  var y = d.pattern.toString().match(/[imuy]*$/)[0];
                  d.pattern = RegExp(d.pattern.source, y + "g")
                }
                d = d.pattern || d;
                for (var b = s, _ = i; b < e.length; _ += e[b].length,
                  ++b) {
                  var w = e[b];
                  if (e.length > t.length)
                    return;
                  if (!(w instanceof l)) {
                    if (m && b != e.length - 1) {
                      if (d.lastIndex = _,
                        !(T = d.exec(t)))
                        break;
                      for (var S = T.index + (f ? T[1].length : 0), C = T.index + T[0].length, x = b, E = _, k = e.length; k > x && (C > E || !e[x].type && !e[x - 1].greedy); ++x)
                        S >= (E += e[x].length) && (++b,
                          _ = E);
                      if (e[b] instanceof l)
                        continue;
                      P = x - b,
                        w = t.slice(_, E),
                        T.index -= _
                    } else {
                      d.lastIndex = 0;
                      var T = d.exec(w)
                        , P = 1
                    }
                    if (T) {
                      f && (g = T[1] ? T[1].length : 0);
                      C = (S = T.index + g) + (T = T[0].slice(g)).length;
                      var O = w.slice(0, S)
                        , M = w.slice(C)
                        , A = [b, P];
                      O && (++b,
                        _ += O.length,
                        A.push(O));
                      var j = new l(c, h ? n.tokenize(T, h) : T, v, T, m);
                      if (A.push(j),
                        M && A.push(M),
                        Array.prototype.splice.apply(e, A),
                        1 != P && n.matchGrammar(t, e, r, b, _, !0, c),
                        a)
                        break
                    } else if (a)
                      break
                  }
                }
              }
            }
        },
        tokenize: function (t, e) {
          var r = [t]
            , s = e.rest;
          if (s) {
            for (var i in s)
              e[i] = s[i];
            delete e.rest
          }
          return n.matchGrammar(t, r, e, 0, 0, !1),
            r
        },
        hooks: {
          all: {},
          add: function (t, e) {
            var r = n.hooks.all;
            r[t] = r[t] || [],
              r[t].push(e)
          },
          run: function (t, e) {
            var r = n.hooks.all[t];
            if (r && r.length)
              for (var s, i = 0; s = r[i++];)
                s(e)
          }
        }
      }
      , r = n.Token = function (t, e, n, r, s) {
        this.type = t,
          this.content = e,
          this.alias = n,
          this.length = 0 | (r || "").length,
          this.greedy = !!s
      }
      ;
    if (r.stringify = function (t, e, s) {
      if ("string" == typeof t)
        return t;
      if ("Array" === n.util.type(t))
        return t.map((function (n) {
          return r.stringify(n, e, t)
        }
        )).join("");
      var i = {
        type: t.type,
        content: r.stringify(t.content, e, s),
        tag: "span",
        classes: ["token", t.type],
        attributes: {},
        language: e,
        parent: s
      };
      if (t.alias) {
        var a = "Array" === n.util.type(t.alias) ? t.alias : [t.alias];
        Array.prototype.push.apply(i.classes, a)
      }
      n.hooks.run("wrap", i);
      var o = Object.keys(i.attributes).map((function (t) {
        return t + '="' + (i.attributes[t] || "").replace(/"/g, "&quot;") + '"'
      }
      )).join(" ");
      return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + i.content + "</" + i.tag + ">"
    }
      ,
      !_self.document)
      return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", (function (t) {
        var e = JSON.parse(t.data)
          , r = e.language
          , s = e.code
          , i = e.immediateClose;
        _self.postMessage(n.highlight(s, n.languages[r], r)),
          i && _self.close()
      }
      ), !1),
        _self.Prism) : _self.Prism;
    var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return s && (n.filename = s.src,
      n.manual || s.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))),
      _self.Prism
  }();
void 0 !== module && module.exports && (module.exports = Prism),
  "undefined" != typeof global && (global.Prism = Prism),
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "attr-value": {
          pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
          inside: {
            punctuation: [/^=/, {
              pattern: /(^|[^\\])["']/,
              lookbehind: !0
            }]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  },
  Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
  Prism.hooks.add("wrap", (function (t) {
    "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
  }
  )),
  Prism.languages.xml = Prism.languages.markup,
  Prism.languages.html = Prism.languages.markup,
  Prism.languages.mathml = Prism.languages.markup,
  Prism.languages.svg = Prism.languages.markup,
  Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {
      pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
  },
  Prism.languages.css.atrule.inside.rest = Prism.languages.css,
  Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
      pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
      lookbehind: !0,
      inside: Prism.languages.css,
      alias: "language-css",
      greedy: !0
    }
  }),
    Prism.languages.insertBefore("inside", "attr-value", {
      "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          "attr-name": {
            pattern: /^\s*style/i,
            inside: Prism.languages.markup.tag.inside
          },
          punctuation: /^\s*=\s*['"]|['"]\s*$/,
          "attr-value": {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: "language-css"
      }
    }, Prism.languages.markup.tag)),
  Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  },
  Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  }),
  Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0,
      greedy: !0
    },
    "function-variable": {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
      alias: "function"
    },
    constant: /\b[A-Z][A-Z\d_]*\b/
  }),
  Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\$\{[^}]+\}/,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }),
  Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
      pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript,
      alias: "language-javascript",
      greedy: !0
    }
  }),
  Prism.languages.js = Prism.languages.javascript,
  Prism.languages.css.selector = {
    pattern: /[^{}\s][^{}]*(?=\s*\{)/,
    inside: {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+(?:\(.*\))?/,
      class: /\.[-:.\w]+/,
      id: /#[-:.\w]+/,
      attribute: /\[[^\]]+\]/
    }
  },
  Prism.languages.insertBefore("css", "function", {
    hexcode: /#[\da-f]{3,8}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%.]+/
  }),
  Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    command: {
      pattern: /^.*\$ git .*$/m,
      inside: {
        parameter: /\s--?\w+/m
      }
    },
    coord: /^@@.*@@$/m,
    commit_sha1: /^commit \w{40}$/m
  },
  Prism.languages.icon = {
    comment: /#.*/,
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
      greedy: !0
    },
    number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
    "builtin-keyword": {
      pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
      alias: "variable"
    },
    directive: {
      pattern: /\$\w+/,
      alias: "builtin"
    },
    keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
    function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
    operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
    punctuation: /[\[\](){},;]/
  },
  Prism.languages.json = {
    property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      greedy: !0
    },
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    punctuation: /[{}[\]);,]/,
    operator: /:/g,
    boolean: /\b(?:true|false)\b/i,
    null: /\bnull\b/i
  },
  Prism.languages.jsonp = Prism.languages.json,
  function (t) {
    t.languages.sass = t.languages.extend("css", {
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
        lookbehind: !0
      }
    }),
      t.languages.insertBefore("sass", "atrule", {
        "atrule-line": {
          pattern: /^(?:[ \t]*)[@+=].+/m,
          inside: {
            atrule: /(?:@[\w-]+|[+=])/m
          }
        }
      }),
      delete t.languages.sass.atrule;
    var e = /\$[-\w]+|#\{\$[-\w]+\}/
      , n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
        pattern: /(\s+)-(?=\s)/,
        lookbehind: !0
      }];
    t.languages.insertBefore("sass", "property", {
      "variable-line": {
        pattern: /^[ \t]*\$.+/m,
        inside: {
          punctuation: /:/,
          variable: e,
          operator: n
        }
      },
      "property-line": {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
        inside: {
          property: [/[^:\s]+(?=\s*:)/, {
            pattern: /(:)[^:\s]+/,
            lookbehind: !0
          }],
          punctuation: /:/,
          variable: e,
          operator: n,
          important: t.languages.sass.important
        }
      }
    }),
      delete t.languages.sass.property,
      delete t.languages.sass.important,
      delete t.languages.sass.selector,
      t.languages.insertBefore("sass", "punctuation", {
        selector: {
          pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
          lookbehind: !0
        }
      })
  }(Prism),
  Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    },
    atrule: {
      pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /(?:[-a-z]+-)*url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
      inside: {
        parent: {
          pattern: /&/,
          alias: "important"
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  }),
  Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
      pattern: /( +)(?:from|through)(?= )/,
      lookbehind: !0
    }]
  }),
  Prism.languages.scss.property = {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  }),
  Prism.languages.insertBefore("scss", "function", {
    placeholder: {
      pattern: /%[-\w]+/,
      alias: "selector"
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: "keyword"
    },
    boolean: /\b(?:true|false)\b/,
    null: /\bnull\b/,
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0
    }
  }),
  Prism.languages.scss.atrule.inside.rest = Prism.languages.scss,
  function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
      var t = []
        , e = {}
        , n = function () { };
      Prism.plugins.toolbar = {};
      var r = Prism.plugins.toolbar.registerButton = function (n, r) {
        var s;
        s = "function" == typeof r ? r : function (t) {
          var e;
          return "function" == typeof r.onClick ? ((e = document.createElement("button")).type = "button",
            e.addEventListener("click", (function () {
              r.onClick.call(this, t)
            }
            ))) : "string" == typeof r.url ? (e = document.createElement("a")).href = r.url : e = document.createElement("span"),
            e.textContent = r.text,
            e
        }
          ,
          t.push(e[n] = s)
      }
        , s = Prism.plugins.toolbar.hook = function (r) {
          var s = r.element.parentNode;
          if (s && /pre/i.test(s.nodeName) && !s.parentNode.classList.contains("code-toolbar")) {
            var i = document.createElement("div");
            i.classList.add("code-toolbar"),
              s.parentNode.insertBefore(i, s),
              i.appendChild(s);
            var a = document.createElement("div");
            a.classList.add("toolbar"),
              document.body.hasAttribute("data-toolbar-order") && (t = document.body.getAttribute("data-toolbar-order").split(",").map((function (t) {
                return e[t] || n
              }
              ))),
              t.forEach((function (t) {
                var e = t(r);
                if (e) {
                  var n = document.createElement("div");
                  n.classList.add("toolbar-item"),
                    n.appendChild(e),
                    a.appendChild(n)
                }
              }
              )),
              i.appendChild(a)
          }
        }
        ;
      r("label", (function (t) {
        var e = t.element.parentNode;
        if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
          var n, r, s = e.getAttribute("data-label");
          try {
            r = document.querySelector("template#" + s)
          } catch (t) { }
          return r ? n = r.content : (e.hasAttribute("data-url") ? (n = document.createElement("a")).href = e.getAttribute("data-url") : n = document.createElement("span"),
            n.textContent = s),
            n
        }
      }
      )),
        Prism.hooks.add("complete", s)
    }
  }(),
  function () {
    function t(t) {
      this.defaults = r({}, t)
    }
    function e(t) {
      return t.replace(/-(\w)/g, (function (t, e) {
        return e.toUpperCase()
      }
      ))
    }
    function n(t) {
      for (var e = 0, n = 0; n < t.length; ++n)
        t.charCodeAt(n) == "\t".charCodeAt(0) && (e += 3);
      return t.length + e
    }
    var r = Object.assign || function (t, e) {
      for (var n in e)
        e.hasOwnProperty(n) && (t[n] = e[n]);
      return t
    }
      ;
    t.prototype = {
      setDefaults: function (t) {
        this.defaults = r(this.defaults, t)
      },
      normalize: function (t, n) {
        for (var s in n = r(this.defaults, n)) {
          var i = e(s);
          "normalize" !== s && "setDefaults" !== i && n[s] && this[i] && (t = this[i].call(this, t, n[s]))
        }
        return t
      },
      leftTrim: function (t) {
        return t.replace(/^\s+/, "")
      },
      rightTrim: function (t) {
        return t.replace(/\s+$/, "")
      },
      tabsToSpaces: function (t, e) {
        return e = 0 | e || 4,
          t.replace(/\t/g, new Array(++e).join(" "))
      },
      spacesToTabs: function (t, e) {
        return e = 0 | e || 4,
          t.replace(new RegExp(" {" + e + "}", "g"), "\t")
      },
      removeTrailing: function (t) {
        return t.replace(/\s*?$/gm, "")
      },
      removeInitialLineFeed: function (t) {
        return t.replace(/^(?:\r?\n|\r)/, "")
      },
      removeIndent: function (t) {
        var e = t.match(/^[^\S\n\r]*(?=\S)/gm);
        return e && e[0].length ? (e.sort((function (t, e) {
          return t.length - e.length
        }
        )),
          e[0].length ? t.replace(new RegExp("^" + e[0], "gm"), "") : t) : t
      },
      indent: function (t, e) {
        return t.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++e).join("\t") + "$&")
      },
      breakLines: function (t, e) {
        e = !0 === e ? 80 : 0 | e || 80;
        for (var r = t.split("\n"), s = 0; s < r.length; ++s)
          if (!(n(r[s]) <= e)) {
            for (var i = r[s].split(/(\s+)/g), a = 0, o = 0; o < i.length; ++o) {
              var l = n(i[o]);
              (a += l) > e && (i[o] = "\n" + i[o],
                a = l)
            }
            r[s] = i.join("")
          }
        return r.join("\n")
      }
    },
      void 0 !== module && module.exports && (module.exports = t),
      void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
        "remove-trailing": !0,
        "remove-indent": !0,
        "left-trim": !0,
        "right-trim": !0
      }),
        Prism.hooks.add("before-sanity-check", (function (t) {
          var e = Prism.plugins.NormalizeWhitespace;
          if (!t.settings || !1 !== t.settings["whitespace-normalization"]) {
            if ((!t.element || !t.element.parentNode) && t.code)
              return void (t.code = e.normalize(t.code, t.settings));
            var n = t.element.parentNode
              , r = /\bno-whitespace-normalization\b/;
            if (t.code && n && "pre" === n.nodeName.toLowerCase() && !r.test(n.className) && !r.test(t.element.className)) {
              for (var s = n.childNodes, i = "", a = "", o = !1, l = 0; l < s.length; ++l) {
                var c = s[l];
                c == t.element ? o = !0 : "#text" === c.nodeName && (o ? a += c.nodeValue : i += c.nodeValue,
                  n.removeChild(c),
                  --l)
              }
              if (t.element.children.length && Prism.plugins.KeepMarkup) {
                var u = i + t.element.innerHTML + a;
                t.element.innerHTML = e.normalize(u, t.settings),
                  t.code = t.element.textContent
              } else
                t.code = i + t.code + a,
                  t.code = e.normalize(t.code, t.settings)
            }
          }
        }
        )))
  }(),
  function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
      if (!Prism.plugins.toolbar)
        return void console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
      var t = window.ClipboardJS || void 0;
      t || "function" != typeof require || (t = require("clipboard"));
      var e = [];
      if (!t) {
        var n = document.createElement("script")
          , r = document.querySelector("head");
        n.onload = function () {
          if (t = window.ClipboardJS)
            for (; e.length;)
              e.pop()()
        }
          ,
          n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
          r.appendChild(n)
      }
      Prism.plugins.toolbar.registerButton("copy-to-clipboard", (function (n) {
        function r() {
          var e = new t(i, {
            text: function () {
              return n.code
            }
          });
          e.on("success", (function () {
            i.textContent = "Copied!",
              s()
          }
          )),
            e.on("error", (function () {
              i.textContent = "Press Ctrl+C to copy",
                s()
            }
            ))
        }
        function s() {
          setTimeout((function () {
            i.textContent = "Copy"
          }
          ), 5e3)
        }
        var i = document.createElement("a");
        return i.textContent = "Copy",
          t ? r() : e.push(r),
          i
      }
      ))
    }
  }();
