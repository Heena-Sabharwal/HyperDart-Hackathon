var oE = Object.defineProperty;
var uE = (a, r, i) => r in a ? oE(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[r] = i;
var Hr = (a, r, i) => uE(a, typeof r != "symbol" ? r + "" : r, i);
function sE(a, r) {
  for (var i = 0; i < r.length; i++) {
    const o = r[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const c in o)
        if (c !== "default" && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(o, c);
          f && Object.defineProperty(a, c, f.get ? f : {
            enumerable: !0,
            get: () => o[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function om(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Sd = { exports: {} }, Zi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0;
function cE() {
  if (d0) return Zi;
  d0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(o, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: a,
      type: o,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return Zi.Fragment = r, Zi.jsx = i, Zi.jsxs = i, Zi;
}
var m0;
function fE() {
  return m0 || (m0 = 1, Sd.exports = cE()), Sd.exports;
}
var X = fE(), Cd = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p0;
function dE() {
  if (p0) return Ce;
  p0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), E = Symbol.for("react.view_transition"), O = Symbol.iterator;
  function T(A) {
    return A === null || typeof A != "object" ? null : (A = O && A[O] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, M = {};
  function q(A, Y, re) {
    this.props = A, this.context = Y, this.refs = M, this.updater = re || x;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(A, Y) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, Y, "setState");
  }, q.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function U() {
  }
  U.prototype = q.prototype;
  function H(A, Y, re) {
    this.props = A, this.context = Y, this.refs = M, this.updater = re || x;
  }
  var N = H.prototype = new U();
  N.constructor = H, w(N, q.prototype), N.isPureReactComponent = !0;
  var Q = Array.isArray;
  function G() {
  }
  var Z = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function S(A, Y, re) {
    var ue = re.ref;
    return {
      $$typeof: a,
      type: A,
      key: Y,
      ref: ue !== void 0 ? ue : null,
      props: re
    };
  }
  function $(A, Y) {
    return S(A.type, Y, A.props);
  }
  function ee(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function ae(A) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(re) {
      return Y[re];
    });
  }
  var le = /\/+/g;
  function F(A, Y) {
    return typeof A == "object" && A !== null && A.key != null ? ae("" + A.key) : Y.toString(36);
  }
  function k(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(G, G) : (A.status = "pending", A.then(
          function(Y) {
            A.status === "pending" && (A.status = "fulfilled", A.value = Y);
          },
          function(Y) {
            A.status === "pending" && (A.status = "rejected", A.reason = Y);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function te(A, Y, re, ue, ge) {
    var Se = typeof A;
    (Se === "undefined" || Se === "boolean") && (A = null);
    var we = !1;
    if (A === null) we = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case r:
              we = !0;
              break;
            case v:
              return we = A._init, te(
                we(A._payload),
                Y,
                re,
                ue,
                ge
              );
          }
      }
    if (we)
      return ge = ge(A), we = ue === "" ? "." + F(A, 0) : ue, Q(ge) ? (re = "", we != null && (re = we.replace(le, "$&/") + "/"), te(ge, Y, re, "", function(Xt) {
        return Xt;
      })) : ge != null && (ee(ge) && (ge = $(
        ge,
        re + (ge.key == null || A && A.key === ge.key ? "" : ("" + ge.key).replace(
          le,
          "$&/"
        ) + "/") + we
      )), Y.push(ge)), 1;
    we = 0;
    var se = ue === "" ? "." : ue + ":";
    if (Q(A))
      for (var pe = 0; pe < A.length; pe++)
        ue = A[pe], Se = se + F(ue, pe), we += te(
          ue,
          Y,
          re,
          Se,
          ge
        );
    else if (pe = T(A), typeof pe == "function")
      for (A = pe.call(A), pe = 0; !(ue = A.next()).done; )
        ue = ue.value, Se = se + F(ue, pe++), we += te(
          ue,
          Y,
          re,
          Se,
          ge
        );
    else if (Se === "object") {
      if (typeof A.then == "function")
        return te(
          k(A),
          Y,
          re,
          ue,
          ge
        );
      throw Y = String(A), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function W(A, Y, re) {
    if (A == null) return A;
    var ue = [], ge = 0;
    return te(A, ue, "", "", function(Se) {
      return Y.call(re, Se, ge++);
    }), ue;
  }
  function ne(A) {
    if (A._status === -1) {
      var Y = A._result, re = Y();
      re.then(
        function(ue) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ue, re.status === void 0 && (re.status = "fulfilled", re.value = ue));
        },
        function(ue) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ue, re.status === void 0 && (re.status = "rejected", re.reason = ue));
        }
      ), A._status === -1 && (A._status = 0, A._result = re);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function ye(A) {
    var Y = Z.T, re = {};
    re.types = Y !== null ? Y.types : null, Z.T = re;
    try {
      var ue = A(), ge = Z.S;
      ge !== null && ge(re, ue), typeof ue == "object" && ue !== null && typeof ue.then == "function" && ue.then(G, ce);
    } catch (Se) {
      ce(Se);
    } finally {
      Y !== null && re.types !== null && (Y.types = re.types), Z.T = Y;
    }
  }
  function Oe(A) {
    var Y = Z.T;
    if (Y !== null) {
      var re = Y.types;
      re === null ? Y.types = [A] : re.indexOf(A) === -1 && re.push(A);
    } else ye(Oe.bind(null, A));
  }
  var Le = {
    map: W,
    forEach: function(A, Y, re) {
      W(
        A,
        function() {
          Y.apply(this, arguments);
        },
        re
      );
    },
    count: function(A) {
      var Y = 0;
      return W(A, function() {
        Y++;
      }), Y;
    },
    toArray: function(A) {
      return W(A, function(Y) {
        return Y;
      }) || [];
    },
    only: function(A) {
      if (!ee(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return Ce.Activity = g, Ce.Children = Le, Ce.Component = q, Ce.Fragment = i, Ce.Profiler = c, Ce.PureComponent = H, Ce.StrictMode = o, Ce.Suspense = h, Ce.ViewTransition = E, Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, Ce.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return Z.H.useMemoCache(A);
    }
  }, Ce.addTransitionType = Oe, Ce.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, Ce.cacheSignal = function() {
    return null;
  }, Ce.cloneElement = function(A, Y, re) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var ue = w({}, A.props), ge = A.key;
    if (Y != null)
      for (Se in Y.key !== void 0 && (ge = "" + Y.key), Y)
        !J.call(Y, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && Y.ref === void 0 || (ue[Se] = Y[Se]);
    var Se = arguments.length - 2;
    if (Se === 1) ue.children = re;
    else if (1 < Se) {
      for (var we = Array(Se), se = 0; se < Se; se++)
        we[se] = arguments[se + 2];
      ue.children = we;
    }
    return S(A.type, ge, ue);
  }, Ce.createContext = function(A) {
    return A = {
      $$typeof: d,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: f,
      _context: A
    }, A;
  }, Ce.createElement = function(A, Y, re) {
    var ue, ge = {}, Se = null;
    if (Y != null)
      for (ue in Y.key !== void 0 && (Se = "" + Y.key), Y)
        J.call(Y, ue) && ue !== "key" && ue !== "__self" && ue !== "__source" && (ge[ue] = Y[ue]);
    var we = arguments.length - 2;
    if (we === 1) ge.children = re;
    else if (1 < we) {
      for (var se = Array(we), pe = 0; pe < we; pe++)
        se[pe] = arguments[pe + 2];
      ge.children = se;
    }
    if (A && A.defaultProps)
      for (ue in we = A.defaultProps, we)
        ge[ue] === void 0 && (ge[ue] = we[ue]);
    return S(A, Se, ge);
  }, Ce.createRef = function() {
    return { current: null };
  }, Ce.forwardRef = function(A) {
    return { $$typeof: p, render: A };
  }, Ce.isValidElement = ee, Ce.lazy = function(A) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: A },
      _init: ne
    };
  }, Ce.memo = function(A, Y) {
    return {
      $$typeof: y,
      type: A,
      compare: Y === void 0 ? null : Y
    };
  }, Ce.startTransition = ye, Ce.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, Ce.use = function(A) {
    return Z.H.use(A);
  }, Ce.useActionState = function(A, Y, re) {
    return Z.H.useActionState(A, Y, re);
  }, Ce.useCallback = function(A, Y) {
    return Z.H.useCallback(A, Y);
  }, Ce.useContext = function(A) {
    return Z.H.useContext(A);
  }, Ce.useDebugValue = function() {
  }, Ce.useDeferredValue = function(A, Y) {
    return Z.H.useDeferredValue(A, Y);
  }, Ce.useEffect = function(A, Y) {
    return Z.H.useEffect(A, Y);
  }, Ce.useEffectEvent = function(A) {
    return Z.H.useEffectEvent(A);
  }, Ce.useId = function() {
    return Z.H.useId();
  }, Ce.useImperativeHandle = function(A, Y, re) {
    return Z.H.useImperativeHandle(A, Y, re);
  }, Ce.useInsertionEffect = function(A, Y) {
    return Z.H.useInsertionEffect(A, Y);
  }, Ce.useLayoutEffect = function(A, Y) {
    return Z.H.useLayoutEffect(A, Y);
  }, Ce.useMemo = function(A, Y) {
    return Z.H.useMemo(A, Y);
  }, Ce.useOptimistic = function(A, Y) {
    return Z.H.useOptimistic(A, Y);
  }, Ce.useReducer = function(A, Y, re) {
    return Z.H.useReducer(A, Y, re);
  }, Ce.useRef = function(A) {
    return Z.H.useRef(A);
  }, Ce.useState = function(A) {
    return Z.H.useState(A);
  }, Ce.useSyncExternalStore = function(A, Y, re) {
    return Z.H.useSyncExternalStore(
      A,
      Y,
      re
    );
  }, Ce.useTransition = function() {
    return Z.H.useTransition();
  }, Ce.version = "19.3.1", Ce;
}
var h0;
function um() {
  return h0 || (h0 = 1, Cd.exports = dE()), Cd.exports;
}
var C = um();
const he = /* @__PURE__ */ om(C), ms = /* @__PURE__ */ sE({
  __proto__: null,
  default: he
}, [C]), ro = {
  black: "#000",
  white: "#fff"
}, Lr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, jr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, $r = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, kr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Yr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ii = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, mE = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function ql(a, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${a}`);
  return r.forEach((o) => i.searchParams.append("args[]", o)), `Minified MUI error #${a}; visit ${i} for the full message.`;
}
const ra = "$$material";
function ps() {
  return ps = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var o in i) ({}).hasOwnProperty.call(i, o) && (a[o] = i[o]);
    }
    return a;
  }, ps.apply(null, arguments);
}
function pE(a) {
  if (a.sheet)
    return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a)
      return document.styleSheets[r];
}
function hE(a) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a.key), a.nonce !== void 0 && r.setAttribute("nonce", a.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var $v = /* @__PURE__ */ (function() {
  function a(i) {
    var o = this;
    this._insertTag = function(c) {
      var f;
      o.tags.length === 0 ? o.insertionPoint ? f = o.insertionPoint.nextSibling : o.prepend ? f = o.container.firstChild : f = o.before : f = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(c, f), o.tags.push(c);
    }, this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var r = a.prototype;
  return r.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, r.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hE(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = pE(c);
      try {
        f.insertRule(o, f.cssRules.length);
      } catch {
      }
    } else
      c.appendChild(document.createTextNode(o));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(o) {
      var c;
      return (c = o.parentNode) == null ? void 0 : c.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), $t = "-ms-", hs = "-moz-", $e = "-webkit-", kv = "comm", sm = "rule", cm = "decl", gE = "@import", Yv = "@keyframes", yE = "@layer", vE = Math.abs, xs = String.fromCharCode, bE = Object.assign;
function SE(a, r) {
  return Lt(a, 0) ^ 45 ? (((r << 2 ^ Lt(a, 0)) << 2 ^ Lt(a, 1)) << 2 ^ Lt(a, 2)) << 2 ^ Lt(a, 3) : 0;
}
function Vv(a) {
  return a.trim();
}
function CE(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function ke(a, r, i) {
  return a.replace(r, i);
}
function Xd(a, r) {
  return a.indexOf(r);
}
function Lt(a, r) {
  return a.charCodeAt(r) | 0;
}
function io(a, r, i) {
  return a.slice(r, i);
}
function ta(a) {
  return a.length;
}
function fm(a) {
  return a.length;
}
function Fu(a, r) {
  return r.push(a), a;
}
function EE(a, r) {
  return a.map(r).join("");
}
var Ts = 1, Kr = 1, qv = 0, Wt = 0, yt = 0, Fr = "";
function Rs(a, r, i, o, c, f, d) {
  return { value: a, root: r, parent: i, type: o, props: c, children: f, line: Ts, column: Kr, length: d, return: "" };
}
function Pi(a, r) {
  return bE(Rs("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function xE() {
  return yt;
}
function TE() {
  return yt = Wt > 0 ? Lt(Fr, --Wt) : 0, Kr--, yt === 10 && (Kr = 1, Ts--), yt;
}
function pn() {
  return yt = Wt < qv ? Lt(Fr, Wt++) : 0, Kr++, yt === 10 && (Kr = 1, Ts++), yt;
}
function ia() {
  return Lt(Fr, Wt);
}
function os() {
  return Wt;
}
function mo(a, r) {
  return io(Fr, a, r);
}
function oo(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gv(a) {
  return Ts = Kr = 1, qv = ta(Fr = a), Wt = 0, [];
}
function Xv(a) {
  return Fr = "", a;
}
function us(a) {
  return Vv(mo(Wt - 1, Qd(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function RE(a) {
  for (; (yt = ia()) && yt < 33; )
    pn();
  return oo(a) > 2 || oo(yt) > 3 ? "" : " ";
}
function OE(a, r) {
  for (; --r && pn() && !(yt < 48 || yt > 102 || yt > 57 && yt < 65 || yt > 70 && yt < 97); )
    ;
  return mo(a, os() + (r < 6 && ia() == 32 && pn() == 32));
}
function Qd(a) {
  for (; pn(); )
    switch (yt) {
      // ] ) " '
      case a:
        return Wt;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Qd(yt);
        break;
      // (
      case 40:
        a === 41 && Qd(a);
        break;
      // \
      case 92:
        pn();
        break;
    }
  return Wt;
}
function wE(a, r) {
  for (; pn() && a + yt !== 57; )
    if (a + yt === 84 && ia() === 47)
      break;
  return "/*" + mo(r, Wt - 1) + "*" + xs(a === 47 ? a : pn());
}
function AE(a) {
  for (; !oo(ia()); )
    pn();
  return mo(a, Wt);
}
function zE(a) {
  return Xv(ss("", null, null, null, [""], a = Gv(a), 0, [0], a));
}
function ss(a, r, i, o, c, f, d, p, h) {
  for (var y = 0, v = 0, g = d, E = 0, O = 0, T = 0, x = 1, w = 1, M = 1, q = 0, U = "", H = c, N = f, Q = o, G = U; w; )
    switch (T = q, q = pn()) {
      // (
      case 40:
        if (T != 108 && Lt(G, g - 1) == 58) {
          Xd(G += ke(us(q), "&", "&\f"), "&\f") != -1 && (M = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        G += us(q);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        G += RE(T);
        break;
      // \
      case 92:
        G += OE(os() - 1, 7);
        continue;
      // /
      case 47:
        switch (ia()) {
          case 42:
          case 47:
            Fu(ME(wE(pn(), os()), r, i), h);
            break;
          default:
            G += "/";
        }
        break;
      // {
      case 123 * x:
        p[y++] = ta(G) * M;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (q) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + v:
            M == -1 && (G = ke(G, /\f/g, "")), O > 0 && ta(G) - g && Fu(O > 32 ? y0(G + ";", o, i, g - 1) : y0(ke(G, " ", "") + ";", o, i, g - 2), h);
            break;
          // @ ;
          case 59:
            G += ";";
          // { rule/at-rule
          default:
            if (Fu(Q = g0(G, r, i, y, v, c, p, U, H = [], N = [], g), f), q === 123)
              if (v === 0)
                ss(G, r, Q, Q, H, f, g, p, N);
              else
                switch (E === 99 && Lt(G, 3) === 110 ? 100 : E) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ss(a, Q, Q, o && Fu(g0(a, Q, Q, 0, 0, c, p, U, c, H = [], g), N), c, N, g, p, o ? H : N);
                    break;
                  default:
                    ss(G, Q, Q, Q, [""], N, 0, p, N);
                }
        }
        y = v = O = 0, x = M = 1, U = G = "", g = d;
        break;
      // :
      case 58:
        g = 1 + ta(G), O = T;
      default:
        if (x < 1) {
          if (q == 123)
            --x;
          else if (q == 125 && x++ == 0 && TE() == 125)
            continue;
        }
        switch (G += xs(q), q * x) {
          // &
          case 38:
            M = v > 0 ? 1 : (G += "\f", -1);
            break;
          // ,
          case 44:
            p[y++] = (ta(G) - 1) * M, M = 1;
            break;
          // @
          case 64:
            ia() === 45 && (G += us(pn())), E = ia(), v = g = ta(U = G += AE(os())), q++;
            break;
          // -
          case 45:
            T === 45 && ta(G) == 2 && (x = 0);
        }
    }
  return f;
}
function g0(a, r, i, o, c, f, d, p, h, y, v) {
  for (var g = c - 1, E = c === 0 ? f : [""], O = fm(E), T = 0, x = 0, w = 0; T < o; ++T)
    for (var M = 0, q = io(a, g + 1, g = vE(x = d[T])), U = a; M < O; ++M)
      (U = Vv(x > 0 ? E[M] + " " + q : ke(q, /&\f/g, E[M]))) && (h[w++] = U);
  return Rs(a, r, i, c === 0 ? sm : p, h, y, v);
}
function ME(a, r, i) {
  return Rs(a, r, i, kv, xs(xE()), io(a, 2, -2), 0);
}
function y0(a, r, i, o) {
  return Rs(a, r, i, cm, io(a, 0, o), io(a, o + 1, -1), o);
}
function Gr(a, r) {
  for (var i = "", o = fm(a), c = 0; c < o; c++)
    i += r(a[c], c, a, r) || "";
  return i;
}
function NE(a, r, i, o) {
  switch (a.type) {
    case yE:
      if (a.children.length) break;
    case gE:
    case cm:
      return a.return = a.return || a.value;
    case kv:
      return "";
    case Yv:
      return a.return = a.value + "{" + Gr(a.children, o) + "}";
    case sm:
      a.value = a.props.join(",");
  }
  return ta(i = Gr(a.children, o)) ? a.return = a.value + "{" + i + "}" : "";
}
function _E(a) {
  var r = fm(a);
  return function(i, o, c, f) {
    for (var d = "", p = 0; p < r; p++)
      d += a[p](i, o, c, f) || "";
    return d;
  };
}
function DE(a) {
  return function(r) {
    r.root || (r = r.return) && a(r);
  };
}
function Qv(a) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return r[i] === void 0 && (r[i] = a(i)), r[i];
  };
}
var BE = function(r, i, o) {
  for (var c = 0, f = 0; c = f, f = ia(), c === 38 && f === 12 && (i[o] = 1), !oo(f); )
    pn();
  return mo(r, Wt);
}, UE = function(r, i) {
  var o = -1, c = 44;
  do
    switch (oo(c)) {
      case 0:
        c === 38 && ia() === 12 && (i[o] = 1), r[o] += BE(Wt - 1, i, o);
        break;
      case 2:
        r[o] += us(c);
        break;
      case 4:
        if (c === 44) {
          r[++o] = ia() === 58 ? "&\f" : "", i[o] = r[o].length;
          break;
        }
      // fallthrough
      default:
        r[o] += xs(c);
    }
  while (c = pn());
  return r;
}, HE = function(r, i) {
  return Xv(UE(Gv(r), i));
}, v0 = /* @__PURE__ */ new WeakMap(), LE = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var i = r.value, o = r.parent, c = r.column === o.column && r.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(r.props.length === 1 && i.charCodeAt(0) !== 58 && !v0.get(o)) && !c) {
      v0.set(r, !0);
      for (var f = [], d = HE(i, f), p = o.props, h = 0, y = 0; h < d.length; h++)
        for (var v = 0; v < p.length; v++, y++)
          r.props[y] = f[h] ? d[h].replace(/&\f/g, p[v]) : p[v] + " " + d[h];
    }
  }
}, jE = function(r) {
  if (r.type === "decl") {
    var i = r.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Kv(a, r) {
  switch (SE(a, r)) {
    // color-adjust
    case 5103:
      return $e + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return $e + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $e + a + hs + a + $t + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return $e + a + $t + a + a;
    // order
    case 6165:
      return $e + a + $t + "flex-" + a + a;
    // align-items
    case 5187:
      return $e + a + ke(a, /(\w+).+(:[^]+)/, $e + "box-$1$2" + $t + "flex-$1$2") + a;
    // align-self
    case 5443:
      return $e + a + $t + "flex-item-" + ke(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return $e + a + $t + "flex-line-pack" + ke(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return $e + a + $t + ke(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return $e + a + $t + ke(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return $e + "box-" + ke(a, "-grow", "") + $e + a + $t + ke(a, "grow", "positive") + a;
    // transition
    case 4554:
      return $e + ke(a, /([^-])(transform)/g, "$1" + $e + "$2") + a;
    // cursor
    case 6187:
      return ke(ke(ke(a, /(zoom-|grab)/, $e + "$1"), /(image-set)/, $e + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return ke(a, /(image-set\([^]*)/, $e + "$1$`$1");
    // justify-content
    case 4968:
      return ke(ke(a, /(.+:)(flex-)?(.*)/, $e + "box-pack:$3" + $t + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $e + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(a, /(.+)-inline(.+)/, $e + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ta(a) - 1 - r > 6) switch (Lt(a, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Lt(a, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ke(a, /(.+:)(.+)-([^]+)/, "$1" + $e + "$2-$3$1" + hs + (Lt(a, r + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~Xd(a, "stretch") ? Kv(ke(a, "stretch", "fill-available"), r) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (Lt(a, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Lt(a, ta(a) - 3 - (~Xd(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ke(a, ":", ":" + $e) + a;
        // (inline-)?fl(e)x
        case 101:
          return ke(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $e + (Lt(a, 14) === 45 ? "inline-" : "") + "box$3$1" + $e + "$2$3$1" + $t + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (Lt(a, r + 11)) {
        // vertical-l(r)
        case 114:
          return $e + a + $t + ke(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return $e + a + $t + ke(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return $e + a + $t + ke(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return $e + a + $t + a + a;
  }
  return a;
}
var $E = function(r, i, o, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case cm:
      r.return = Kv(r.value, r.length);
      break;
    case Yv:
      return Gr([Pi(r, {
        value: ke(r.value, "@", "@" + $e)
      })], c);
    case sm:
      if (r.length) return EE(r.props, function(f) {
        switch (CE(f, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Gr([Pi(r, {
              props: [ke(f, /:(read-\w+)/, ":" + hs + "$1")]
            })], c);
          // :placeholder
          case "::placeholder":
            return Gr([Pi(r, {
              props: [ke(f, /:(plac\w+)/, ":" + $e + "input-$1")]
            }), Pi(r, {
              props: [ke(f, /:(plac\w+)/, ":" + hs + "$1")]
            }), Pi(r, {
              props: [ke(f, /:(plac\w+)/, $t + "input-$1")]
            })], c);
        }
        return "";
      });
  }
}, kE = [$E], Zv = function(r) {
  var i = r.key;
  if (i === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(x) {
      var w = x.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || kE, f = {}, d, p = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(x) {
      for (var w = x.getAttribute("data-emotion").split(" "), M = 1; M < w.length; M++)
        f[w[M]] = !0;
      p.push(x);
    }
  );
  var h, y = [LE, jE];
  {
    var v, g = [NE, DE(function(x) {
      v.insert(x);
    })], E = _E(y.concat(c, g)), O = function(w) {
      return Gr(zE(w), E);
    };
    h = function(w, M, q, U) {
      v = q, O(w ? w + "{" + M.styles + "}" : M.styles), U && (T.inserted[M.name] = !0);
    };
  }
  var T = {
    key: i,
    sheet: new $v({
      key: i,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: f,
    registered: {},
    insert: h
  };
  return T.sheet.hydrate(p), T;
}, Ed = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b0;
function YE() {
  if (b0) return Ve;
  b0 = 1;
  var a = typeof Symbol == "function" && Symbol.for, r = a ? Symbol.for("react.element") : 60103, i = a ? Symbol.for("react.portal") : 60106, o = a ? Symbol.for("react.fragment") : 60107, c = a ? Symbol.for("react.strict_mode") : 60108, f = a ? Symbol.for("react.profiler") : 60114, d = a ? Symbol.for("react.provider") : 60109, p = a ? Symbol.for("react.context") : 60110, h = a ? Symbol.for("react.async_mode") : 60111, y = a ? Symbol.for("react.concurrent_mode") : 60111, v = a ? Symbol.for("react.forward_ref") : 60112, g = a ? Symbol.for("react.suspense") : 60113, E = a ? Symbol.for("react.suspense_list") : 60120, O = a ? Symbol.for("react.memo") : 60115, T = a ? Symbol.for("react.lazy") : 60116, x = a ? Symbol.for("react.block") : 60121, w = a ? Symbol.for("react.fundamental") : 60117, M = a ? Symbol.for("react.responder") : 60118, q = a ? Symbol.for("react.scope") : 60119;
  function U(N) {
    if (typeof N == "object" && N !== null) {
      var Q = N.$$typeof;
      switch (Q) {
        case r:
          switch (N = N.type, N) {
            case h:
            case y:
            case o:
            case f:
            case c:
            case g:
              return N;
            default:
              switch (N = N && N.$$typeof, N) {
                case p:
                case v:
                case T:
                case O:
                case d:
                  return N;
                default:
                  return Q;
              }
          }
        case i:
          return Q;
      }
    }
  }
  function H(N) {
    return U(N) === y;
  }
  return Ve.AsyncMode = h, Ve.ConcurrentMode = y, Ve.ContextConsumer = p, Ve.ContextProvider = d, Ve.Element = r, Ve.ForwardRef = v, Ve.Fragment = o, Ve.Lazy = T, Ve.Memo = O, Ve.Portal = i, Ve.Profiler = f, Ve.StrictMode = c, Ve.Suspense = g, Ve.isAsyncMode = function(N) {
    return H(N) || U(N) === h;
  }, Ve.isConcurrentMode = H, Ve.isContextConsumer = function(N) {
    return U(N) === p;
  }, Ve.isContextProvider = function(N) {
    return U(N) === d;
  }, Ve.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === r;
  }, Ve.isForwardRef = function(N) {
    return U(N) === v;
  }, Ve.isFragment = function(N) {
    return U(N) === o;
  }, Ve.isLazy = function(N) {
    return U(N) === T;
  }, Ve.isMemo = function(N) {
    return U(N) === O;
  }, Ve.isPortal = function(N) {
    return U(N) === i;
  }, Ve.isProfiler = function(N) {
    return U(N) === f;
  }, Ve.isStrictMode = function(N) {
    return U(N) === c;
  }, Ve.isSuspense = function(N) {
    return U(N) === g;
  }, Ve.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === o || N === y || N === f || N === c || N === g || N === E || typeof N == "object" && N !== null && (N.$$typeof === T || N.$$typeof === O || N.$$typeof === d || N.$$typeof === p || N.$$typeof === v || N.$$typeof === w || N.$$typeof === M || N.$$typeof === q || N.$$typeof === x);
  }, Ve.typeOf = U, Ve;
}
var S0;
function VE() {
  return S0 || (S0 = 1, Ed.exports = YE()), Ed.exports;
}
var xd, C0;
function qE() {
  if (C0) return xd;
  C0 = 1;
  var a = VE(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, c = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, f = {};
  f[a.ForwardRef] = o, f[a.Memo] = c;
  function d(T) {
    return a.isMemo(T) ? c : f[T.$$typeof] || r;
  }
  var p = Object.defineProperty, h = Object.getOwnPropertyNames, y = Object.getOwnPropertySymbols, v = Object.getOwnPropertyDescriptor, g = Object.getPrototypeOf, E = Object.prototype;
  function O(T, x, w) {
    if (typeof x != "string") {
      if (E) {
        var M = g(x);
        M && M !== E && O(T, M, w);
      }
      var q = h(x);
      y && (q = q.concat(y(x)));
      for (var U = d(T), H = d(x), N = 0; N < q.length; ++N) {
        var Q = q[N];
        if (!i[Q] && !(w && w[Q]) && !(H && H[Q]) && !(U && U[Q])) {
          var G = v(x, Q);
          try {
            p(T, Q, G);
          } catch {
          }
        }
      }
    }
    return T;
  }
  return xd = O, xd;
}
qE();
var GE = !0;
function Iv(a, r, i) {
  var o = "";
  return i.split(" ").forEach(function(c) {
    a[c] !== void 0 ? r.push(a[c] + ";") : c && (o += c + " ");
  }), o;
}
var dm = function(r, i, o) {
  var c = r.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  GE === !1) && r.registered[c] === void 0 && (r.registered[c] = i.styles);
}, mm = function(r, i, o) {
  dm(r, i, o);
  var c = r.key + "-" + i.name;
  if (r.inserted[i.name] === void 0) {
    var f = i;
    do
      r.insert(i === f ? "." + c : "", f, r.sheet, !0), f = f.next;
    while (f !== void 0);
  }
};
function XE(a) {
  for (var r = 0, i, o = 0, c = a.length; c >= 4; ++o, c -= 4)
    i = a.charCodeAt(o) & 255 | (a.charCodeAt(++o) & 255) << 8 | (a.charCodeAt(++o) & 255) << 16 | (a.charCodeAt(++o) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, r = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      r ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      r ^= a.charCodeAt(o) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var QE = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, KE = /[A-Z]|^ms/g, ZE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pv = function(r) {
  return r.charCodeAt(1) === 45;
}, E0 = function(r) {
  return r != null && typeof r != "boolean";
}, Td = /* @__PURE__ */ Qv(function(a) {
  return Pv(a) ? a : a.replace(KE, "-$&").toLowerCase();
}), x0 = function(r, i) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(ZE, function(o, c, f) {
          return na = {
            name: c,
            styles: f,
            next: na
          }, c;
        });
  }
  return QE[r] !== 1 && !Pv(r) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function uo(a, r, i) {
  if (i == null)
    return "";
  var o = i;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var c = i;
      if (c.anim === 1)
        return na = {
          name: c.name,
          styles: c.styles,
          next: na
        }, c.name;
      var f = i;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            na = {
              name: d.name,
              styles: d.styles,
              next: na
            }, d = d.next;
        var p = f.styles + ";";
        return p;
      }
      return IE(a, r, i);
    }
    case "function": {
      if (a !== void 0) {
        var h = na, y = i(a);
        return na = h, uo(a, r, y);
      }
      break;
    }
  }
  var v = i;
  if (r == null)
    return v;
  var g = r[v];
  return g !== void 0 ? g : v;
}
function IE(a, r, i) {
  var o = "";
  if (Array.isArray(i))
    for (var c = 0; c < i.length; c++)
      o += uo(a, r, i[c]) + ";";
  else
    for (var f in i) {
      var d = i[f];
      if (typeof d != "object") {
        var p = d;
        r != null && r[p] !== void 0 ? o += f + "{" + r[p] + "}" : E0(p) && (o += Td(f) + ":" + x0(f, p) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
        for (var h = 0; h < d.length; h++)
          E0(d[h]) && (o += Td(f) + ":" + x0(f, d[h]) + ";");
      else {
        var y = uo(a, r, d);
        switch (f) {
          case "animation":
          case "animationName": {
            o += Td(f) + ":" + y + ";";
            break;
          }
          default:
            o += f + "{" + y + "}";
        }
      }
    }
  return o;
}
var T0 = /label:\s*([^\s;{]+)\s*(;|$)/g, na;
function po(a, r, i) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var o = !0, c = "";
  na = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0)
    o = !1, c += uo(i, r, f);
  else {
    var d = f;
    c += d[0];
  }
  for (var p = 1; p < a.length; p++)
    if (c += uo(i, r, a[p]), o) {
      var h = f;
      c += h[p];
    }
  T0.lastIndex = 0;
  for (var y = "", v; (v = T0.exec(c)) !== null; )
    y += "-" + v[1];
  var g = XE(c) + y;
  return {
    name: g,
    styles: c,
    next: na
  };
}
var PE = function(r) {
  return r();
}, Jv = ms.useInsertionEffect ? ms.useInsertionEffect : !1, Fv = Jv || PE, R0 = Jv || C.useLayoutEffect, Wv = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Zv({
    key: "css"
  }) : null
), JE = Wv.Provider, pm = function(r) {
  return /* @__PURE__ */ C.forwardRef(function(i, o) {
    var c = C.useContext(Wv);
    return r(i, c, o);
  });
}, ho = /* @__PURE__ */ C.createContext({}), hm = {}.hasOwnProperty, Kd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", FE = function(r, i) {
  var o = {};
  for (var c in i)
    hm.call(i, c) && (o[c] = i[c]);
  return o[Kd] = r, o;
}, WE = function(r) {
  var i = r.cache, o = r.serialized, c = r.isStringTag;
  return dm(i, o, c), Fv(function() {
    return mm(i, o, c);
  }), null;
}, ex = /* @__PURE__ */ pm(function(a, r, i) {
  var o = a.css;
  typeof o == "string" && r.registered[o] !== void 0 && (o = r.registered[o]);
  var c = a[Kd], f = [o], d = "";
  typeof a.className == "string" ? d = Iv(r.registered, f, a.className) : a.className != null && (d = a.className + " ");
  var p = po(f, void 0, C.useContext(ho));
  d += r.key + "-" + p.name;
  var h = {};
  for (var y in a)
    hm.call(a, y) && y !== "css" && y !== Kd && (h[y] = a[y]);
  return h.className = d, i && (h.ref = i), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(WE, {
    cache: r,
    serialized: p,
    isStringTag: typeof c == "string"
  }), /* @__PURE__ */ C.createElement(c, h));
}), tx = ex, O0 = function(r, i) {
  var o = arguments;
  if (i == null || !hm.call(i, "css"))
    return C.createElement.apply(void 0, o);
  var c = o.length, f = new Array(c);
  f[0] = tx, f[1] = FE(r, i);
  for (var d = 2; d < c; d++)
    f[d] = o[d];
  return C.createElement.apply(null, f);
};
(function(a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(O0 || (O0 = {}));
var nx = /* @__PURE__ */ pm(function(a, r) {
  var i = a.styles, o = po([i], void 0, C.useContext(ho)), c = C.useRef();
  return R0(function() {
    var f = r.key + "-global", d = new r.sheet.constructor({
      key: f,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), p = !1, h = document.querySelector('style[data-emotion="' + f + " " + o.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), h !== null && (p = !0, h.setAttribute("data-emotion", f), d.hydrate([h])), c.current = [d, p], function() {
      d.flush();
    };
  }, [r]), R0(function() {
    var f = c.current, d = f[0], p = f[1];
    if (p) {
      f[1] = !1;
      return;
    }
    if (o.next !== void 0 && mm(r, o.next, !0), d.tags.length) {
      var h = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = h, d.flush();
    }
    r.insert("", o, d, !1);
  }, [r, o.name]), null;
});
function gm() {
  for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
    r[i] = arguments[i];
  return po(r);
}
function go() {
  var a = gm.apply(void 0, arguments), r = "animation-" + a.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var ax = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lx = /* @__PURE__ */ Qv(
  function(a) {
    return ax.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), rx = lx, ix = function(r) {
  return r !== "theme";
}, w0 = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? rx : ix;
}, A0 = function(r, i, o) {
  var c;
  if (i) {
    var f = i.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(d) {
      return r.__emotion_forwardProp(d) && f(d);
    } : f;
  }
  return typeof c != "function" && o && (c = r.__emotion_forwardProp), c;
}, ox = function(r) {
  var i = r.cache, o = r.serialized, c = r.isStringTag;
  return dm(i, o, c), Fv(function() {
    return mm(i, o, c);
  }), null;
}, ux = function a(r, i) {
  var o = r.__emotion_real === r, c = o && r.__emotion_base || r, f, d;
  i !== void 0 && (f = i.label, d = i.target);
  var p = A0(r, i, o), h = p || w0(c), y = !h("as");
  return function() {
    var v = arguments, g = o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && g.push("label:" + f + ";"), v[0] == null || v[0].raw === void 0)
      g.push.apply(g, v);
    else {
      var E = v[0];
      g.push(E[0]);
      for (var O = v.length, T = 1; T < O; T++)
        g.push(v[T], E[T]);
    }
    var x = pm(function(w, M, q) {
      var U = y && w.as || c, H = "", N = [], Q = w;
      if (w.theme == null) {
        Q = {};
        for (var G in w)
          Q[G] = w[G];
        Q.theme = C.useContext(ho);
      }
      typeof w.className == "string" ? H = Iv(M.registered, N, w.className) : w.className != null && (H = w.className + " ");
      var Z = po(g.concat(N), M.registered, Q);
      H += M.key + "-" + Z.name, d !== void 0 && (H += " " + d);
      var J = y && p === void 0 ? w0(U) : h, S = {};
      for (var $ in w)
        y && $ === "as" || J($) && (S[$] = w[$]);
      return S.className = H, q && (S.ref = q), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ox, {
        cache: M,
        serialized: Z,
        isStringTag: typeof U == "string"
      }), /* @__PURE__ */ C.createElement(U, S));
    });
    return x.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = c, x.__emotion_styles = g, x.__emotion_forwardProp = p, Object.defineProperty(x, "toString", {
      value: function() {
        return "." + d;
      }
    }), x.withComponent = function(w, M) {
      var q = a(w, ps({}, i, M, {
        shouldForwardProp: A0(x, M, !0)
      }));
      return q.apply(void 0, g);
    }, x;
  };
}, sx = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
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
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Zd = ux.bind(null);
sx.forEach(function(a) {
  Zd[a] = Zd(a);
});
const Rd = /* @__PURE__ */ new Map(), cx = (a, r) => {
  const i = Zv(a);
  return i.sheet = new r({
    key: i.key,
    nonce: i.sheet.nonce,
    container: i.sheet.container,
    speedy: i.sheet.isSpeedy,
    prepend: i.sheet.prepend,
    insertionPoint: i.sheet.insertionPoint
  }), i;
};
let sl;
if (typeof document == "object" && (sl = document.querySelector('[name="emotion-insertion-point"]'), !sl)) {
  sl = document.createElement("meta"), sl.setAttribute("name", "emotion-insertion-point"), sl.setAttribute("content", "");
  const a = document.querySelector("head");
  a && a.prepend(sl);
}
function fx(a, r) {
  if (a || r) {
    class i extends $v {
      insert(f, d) {
        return this.key && this.key.endsWith("global") && (this.before = sl), super.insert(f, d);
      }
    }
    const o = cx({
      key: "css",
      insertionPoint: a ? sl : void 0
    }, i);
    if (r) {
      const c = o.insert;
      o.insert = (...f) => (f[1].styles.match(/^@layer\s+[^{]*$/) || (f[1].styles = `@layer mui {${f[1].styles}}`), c(...f));
    }
    return o;
  }
}
function dx(a) {
  const {
    injectFirst: r,
    enableCssLayer: i,
    children: o
  } = a, c = C.useMemo(() => {
    const f = `${r}-${i}`;
    if (typeof document == "object" && Rd.has(f))
      return Rd.get(f);
    const d = fx(r, i);
    return Rd.set(f, d), d;
  }, [r, i]);
  return c ? /* @__PURE__ */ X.jsx(JE, {
    value: c,
    children: o
  }) : o;
}
function mx(a) {
  return a == null || Object.keys(a).length === 0;
}
function eb(a) {
  const {
    styles: r,
    defaultTheme: i = {}
  } = a, o = typeof r == "function" ? (c) => r(mx(c) ? i : c) : r;
  return /* @__PURE__ */ X.jsx(nx, {
    styles: o
  });
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function tb(a, r) {
  return Zd(a, r);
}
function px(a, r) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = r(a.__emotion_styles));
}
const z0 = [];
function cl(a) {
  return z0[0] = a, po(z0);
}
var Od = { exports: {} }, Ke = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M0;
function hx() {
  if (M0) return Ke;
  M0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.view_transition"), O = Symbol.for("react.client.reference");
  function T(x) {
    if (typeof x == "object" && x !== null) {
      var w = x.$$typeof;
      switch (w) {
        case a:
          switch (x = x.type, x) {
            case i:
            case c:
            case o:
            case h:
            case y:
            case E:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case d:
                case p:
                case g:
                case v:
                  return x;
                case f:
                  return x;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  return Ke.ContextConsumer = f, Ke.ContextProvider = d, Ke.Element = a, Ke.ForwardRef = p, Ke.Fragment = i, Ke.Lazy = g, Ke.Memo = v, Ke.Portal = r, Ke.Profiler = c, Ke.StrictMode = o, Ke.Suspense = h, Ke.SuspenseList = y, Ke.isContextConsumer = function(x) {
    return T(x) === f;
  }, Ke.isContextProvider = function(x) {
    return T(x) === d;
  }, Ke.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }, Ke.isForwardRef = function(x) {
    return T(x) === p;
  }, Ke.isFragment = function(x) {
    return T(x) === i;
  }, Ke.isLazy = function(x) {
    return T(x) === g;
  }, Ke.isMemo = function(x) {
    return T(x) === v;
  }, Ke.isPortal = function(x) {
    return T(x) === r;
  }, Ke.isProfiler = function(x) {
    return T(x) === c;
  }, Ke.isStrictMode = function(x) {
    return T(x) === o;
  }, Ke.isSuspense = function(x) {
    return T(x) === h;
  }, Ke.isSuspenseList = function(x) {
    return T(x) === y;
  }, Ke.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === c || x === o || x === h || x === y || x === E || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === v || x.$$typeof === d || x.$$typeof === f || x.$$typeof === p || x.$$typeof === O || x.getModuleId !== void 0);
  }, Ke.typeOf = T, Ke;
}
var N0;
function gx() {
  return N0 || (N0 = 1, Od.exports = /* @__PURE__ */ hx()), Od.exports;
}
var nb = /* @__PURE__ */ gx();
function aa(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const r = Object.getPrototypeOf(a);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function ab(a) {
  if (/* @__PURE__ */ C.isValidElement(a) || nb.isValidElementType(a) || !aa(a))
    return a;
  const r = {};
  return Object.keys(a).forEach((i) => {
    r[i] = ab(a[i]);
  }), r;
}
function hn(a, r, i = {
  clone: !0
}) {
  const o = i.clone ? {
    ...a
  } : a;
  return aa(a) && aa(r) && Object.keys(r).forEach((c) => {
    /* @__PURE__ */ C.isValidElement(r[c]) || nb.isValidElementType(r[c]) ? o[c] = r[c] : aa(r[c]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, c) && aa(a[c]) ? o[c] = hn(a[c], r[c], i) : i.clone ? o[c] = aa(r[c]) ? ab(r[c]) : r[c] : o[c] = r[c];
  }), o;
}
const yx = (a) => {
  const r = Object.keys(a).map((i) => ({
    key: i,
    val: a[i]
  })) || [];
  return r.sort((i, o) => i.val - o.val), r.reduce((i, o) => ({
    ...i,
    [o.key]: o.val
  }), {});
};
function lb(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: i = "px",
    step: o = 5,
    ...c
  } = a, f = yx(r), d = Object.keys(f);
  function p(E) {
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${i})`;
  }
  function h(E) {
    return `@media (max-width:${(typeof r[E] == "number" ? r[E] : E) - o / 100}${i})`;
  }
  function y(E, O) {
    const T = d.indexOf(O);
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${i}) and (max-width:${(T !== -1 && typeof r[d[T]] == "number" ? r[d[T]] : O) - o / 100}${i})`;
  }
  function v(E) {
    return d.indexOf(E) + 1 < d.length ? y(E, d[d.indexOf(E) + 1]) : p(E);
  }
  function g(E) {
    const O = d.indexOf(E);
    return O === 0 ? p(d[1]) : O === d.length - 1 ? h(d[O]) : y(E, d[d.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: p,
    down: h,
    between: y,
    only: v,
    not: g,
    unit: i,
    ...c
  };
}
function _0(a, r) {
  if (!a.containerQueries)
    return r;
  const i = Object.keys(r).filter((o) => o.startsWith("@container")).sort((o, c) => {
    var d, p;
    const f = /min-width:\s*([0-9.]+)/;
    return +(((d = o.match(f)) == null ? void 0 : d[1]) || 0) - +(((p = c.match(f)) == null ? void 0 : p[1]) || 0);
  });
  return i.length ? i.reduce((o, c) => {
    const f = r[c];
    return delete o[c], o[c] = f, o;
  }, {
    ...r
  }) : r;
}
function vx(a, r) {
  return r === "@" || r.startsWith("@") && (a.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/));
}
function bx(a, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, o, c] = i, f = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(c).up(f);
}
function Sx(a) {
  const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function i(f, d) {
    f.up = (...p) => r(a.breakpoints.up(...p), d), f.down = (...p) => r(a.breakpoints.down(...p), d), f.between = (...p) => r(a.breakpoints.between(...p), d), f.only = (...p) => r(a.breakpoints.only(...p), d), f.not = (...p) => {
      const h = r(a.breakpoints.not(...p), d);
      return h.includes("not all and") ? h.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : h;
    };
  }
  const o = {}, c = (f) => (i(o, f), o);
  return i(c), {
    ...a,
    containerQueries: c
  };
}
const Cx = {
  borderRadius: 4
};
function ao(a, r) {
  return r ? hn(a, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const Os = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, D0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${Os[a]}px)`
}, Ex = {
  containerQueries: (a) => ({
    up: (r) => {
      let i = typeof r == "number" ? r : Os[r] || r;
      return typeof i == "number" && (i = `${i}px`), a ? `@container ${a} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function Ma(a, r, i) {
  const o = a.theme || {};
  if (Array.isArray(r)) {
    const f = o.breakpoints || D0;
    return r.reduce((d, p, h) => (d[f.up(f.keys[h])] = i(r[h]), d), {});
  }
  if (typeof r == "object") {
    const f = o.breakpoints || D0;
    return Object.keys(r).reduce((d, p) => {
      if (vx(f.keys, p)) {
        const h = bx(o.containerQueries ? o : Ex, p);
        h && (d[h] = i(r[p], p));
      } else if (Object.keys(f.values || Os).includes(p)) {
        const h = f.up(p);
        d[h] = i(r[p], p);
      } else {
        const h = p;
        d[h] = r[h];
      }
      return d;
    }, {});
  }
  return i(r);
}
function xx(a = {}) {
  var i;
  return ((i = a.keys) == null ? void 0 : i.reduce((o, c) => {
    const f = a.up(c);
    return o[f] = {}, o;
  }, {})) || {};
}
function B0(a, r) {
  return a.reduce((i, o) => {
    const c = i[o];
    return (!c || Object.keys(c).length === 0) && delete i[o], i;
  }, r);
}
function ie(a) {
  if (typeof a != "string")
    throw new Error(ql(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function ws(a, r, i = !0) {
  if (!r || typeof r != "string")
    return null;
  if (a && a.vars && i) {
    const o = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a);
    if (o != null)
      return o;
  }
  return r.split(".").reduce((o, c) => o && o[c] != null ? o[c] : null, a);
}
function gs(a, r, i, o = i) {
  let c;
  return typeof a == "function" ? c = a(i) : Array.isArray(a) ? c = a[i] || o : c = ws(a, i) || o, r && (c = r(c, o, a)), c;
}
function ft(a) {
  const {
    prop: r,
    cssProperty: i = a.prop,
    themeKey: o,
    transform: c
  } = a, f = (d) => {
    if (d[r] == null)
      return null;
    const p = d[r], h = d.theme, y = ws(h, o) || {};
    return Ma(d, p, (g) => {
      let E = gs(y, c, g);
      return g === E && typeof g == "string" && (E = gs(y, c, `${r}${g === "default" ? "" : ie(g)}`, g)), i === !1 ? E : {
        [i]: E
      };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function Tx(a) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = a(i)), r[i]);
}
const Rx = {
  m: "margin",
  p: "padding"
}, Ox = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, U0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, wx = Tx((a) => {
  if (a.length > 2)
    if (U0[a])
      a = U0[a];
    else
      return [a];
  const [r, i] = a.split(""), o = Rx[r], c = Ox[i] || "";
  return Array.isArray(c) ? c.map((f) => o + f) : [o + c];
}), ym = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], vm = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ym, ...vm];
function yo(a, r, i, o) {
  const c = ws(a, r, !0) ?? i;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string")
      return f;
    const d = Math.abs(f), p = c[d];
    return f >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
  } : typeof c == "function" ? c : () => {
  };
}
function bm(a) {
  return yo(a, "spacing", 8);
}
function vo(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function Ax(a, r) {
  return (i) => a.reduce((o, c) => (o[c] = vo(r, i), o), {});
}
function zx(a, r, i, o) {
  if (!r.includes(i))
    return null;
  const c = wx(i), f = Ax(c, o), d = a[i];
  return Ma(a, d, f);
}
function rb(a, r) {
  const i = bm(a.theme);
  return Object.keys(a).map((o) => zx(a, r, o, i)).reduce(ao, {});
}
function ut(a) {
  return rb(a, ym);
}
ut.propTypes = {};
ut.filterProps = ym;
function st(a) {
  return rb(a, vm);
}
st.propTypes = {};
st.filterProps = vm;
function Sm(a = 8, r = bm({
  spacing: a
})) {
  if (a.mui)
    return a;
  const i = (...o) => (o.length === 0 ? [1] : o).map((f) => {
    const d = r(f);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return i.mui = !0, i;
}
function As(...a) {
  const r = a.reduce((o, c) => (c.filterProps.forEach((f) => {
    o[f] = c;
  }), o), {}), i = (o) => Object.keys(o).reduce((c, f) => r[f] ? ao(c, r[f](o)) : c, {});
  return i.propTypes = {}, i.filterProps = a.reduce((o, c) => o.concat(c.filterProps), []), i;
}
function zn(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function Mn(a, r) {
  return ft({
    prop: a,
    themeKey: "borders",
    transform: r
  });
}
const Mx = Mn("border", zn), Nx = Mn("borderTop", zn), _x = Mn("borderRight", zn), Dx = Mn("borderBottom", zn), Bx = Mn("borderLeft", zn), Ux = Mn("borderColor"), Hx = Mn("borderTopColor"), Lx = Mn("borderRightColor"), jx = Mn("borderBottomColor"), $x = Mn("borderLeftColor"), kx = Mn("outline", zn), Yx = Mn("outlineColor"), zs = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const r = yo(a.theme, "shape.borderRadius", 4), i = (o) => ({
      borderRadius: vo(r, o)
    });
    return Ma(a, a.borderRadius, i);
  }
  return null;
};
zs.propTypes = {};
zs.filterProps = ["borderRadius"];
As(Mx, Nx, _x, Dx, Bx, Ux, Hx, Lx, jx, $x, zs, kx, Yx);
const Ms = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = yo(a.theme, "spacing", 8), i = (o) => ({
      gap: vo(r, o)
    });
    return Ma(a, a.gap, i);
  }
  return null;
};
Ms.propTypes = {};
Ms.filterProps = ["gap"];
const Ns = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = yo(a.theme, "spacing", 8), i = (o) => ({
      columnGap: vo(r, o)
    });
    return Ma(a, a.columnGap, i);
  }
  return null;
};
Ns.propTypes = {};
Ns.filterProps = ["columnGap"];
const _s = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = yo(a.theme, "spacing", 8), i = (o) => ({
      rowGap: vo(r, o)
    });
    return Ma(a, a.rowGap, i);
  }
  return null;
};
_s.propTypes = {};
_s.filterProps = ["rowGap"];
const Vx = ft({
  prop: "gridColumn"
}), qx = ft({
  prop: "gridRow"
}), Gx = ft({
  prop: "gridAutoFlow"
}), Xx = ft({
  prop: "gridAutoColumns"
}), Qx = ft({
  prop: "gridAutoRows"
}), Kx = ft({
  prop: "gridTemplateColumns"
}), Zx = ft({
  prop: "gridTemplateRows"
}), Ix = ft({
  prop: "gridTemplateAreas"
}), Px = ft({
  prop: "gridArea"
});
As(Ms, Ns, _s, Vx, qx, Gx, Xx, Qx, Kx, Zx, Ix, Px);
function Xr(a, r) {
  return r === "grey" ? r : a;
}
const Jx = ft({
  prop: "color",
  themeKey: "palette",
  transform: Xr
}), Fx = ft({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Xr
}), Wx = ft({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Xr
});
As(Jx, Fx, Wx);
function mn(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const eT = ft({
  prop: "width",
  transform: mn
}), Cm = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const r = (i) => {
      var c, f, d, p, h;
      const o = ((d = (f = (c = a.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.values) == null ? void 0 : d[i]) || Os[i];
      return o ? ((h = (p = a.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : h.unit) !== "px" ? {
        maxWidth: `${o}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: mn(i)
      };
    };
    return Ma(a, a.maxWidth, r);
  }
  return null;
};
Cm.filterProps = ["maxWidth"];
const tT = ft({
  prop: "minWidth",
  transform: mn
}), nT = ft({
  prop: "height",
  transform: mn
}), aT = ft({
  prop: "maxHeight",
  transform: mn
}), lT = ft({
  prop: "minHeight",
  transform: mn
});
ft({
  prop: "size",
  cssProperty: "width",
  transform: mn
});
ft({
  prop: "size",
  cssProperty: "height",
  transform: mn
});
const rT = ft({
  prop: "boxSizing"
});
As(eT, Cm, tT, nT, aT, lT, rT);
const bo = {
  // borders
  border: {
    themeKey: "borders",
    transform: zn
  },
  borderTop: {
    themeKey: "borders",
    transform: zn
  },
  borderRight: {
    themeKey: "borders",
    transform: zn
  },
  borderBottom: {
    themeKey: "borders",
    transform: zn
  },
  borderLeft: {
    themeKey: "borders",
    transform: zn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: zn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: zs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Xr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Xr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Xr
  },
  // spacing
  p: {
    style: st
  },
  pt: {
    style: st
  },
  pr: {
    style: st
  },
  pb: {
    style: st
  },
  pl: {
    style: st
  },
  px: {
    style: st
  },
  py: {
    style: st
  },
  padding: {
    style: st
  },
  paddingTop: {
    style: st
  },
  paddingRight: {
    style: st
  },
  paddingBottom: {
    style: st
  },
  paddingLeft: {
    style: st
  },
  paddingX: {
    style: st
  },
  paddingY: {
    style: st
  },
  paddingInline: {
    style: st
  },
  paddingInlineStart: {
    style: st
  },
  paddingInlineEnd: {
    style: st
  },
  paddingBlock: {
    style: st
  },
  paddingBlockStart: {
    style: st
  },
  paddingBlockEnd: {
    style: st
  },
  m: {
    style: ut
  },
  mt: {
    style: ut
  },
  mr: {
    style: ut
  },
  mb: {
    style: ut
  },
  ml: {
    style: ut
  },
  mx: {
    style: ut
  },
  my: {
    style: ut
  },
  margin: {
    style: ut
  },
  marginTop: {
    style: ut
  },
  marginRight: {
    style: ut
  },
  marginBottom: {
    style: ut
  },
  marginLeft: {
    style: ut
  },
  marginX: {
    style: ut
  },
  marginY: {
    style: ut
  },
  marginInline: {
    style: ut
  },
  marginInlineStart: {
    style: ut
  },
  marginInlineEnd: {
    style: ut
  },
  marginBlock: {
    style: ut
  },
  marginBlockStart: {
    style: ut
  },
  marginBlockEnd: {
    style: ut
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ms
  },
  rowGap: {
    style: _s
  },
  columnGap: {
    style: Ns
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: mn
  },
  maxWidth: {
    style: Cm
  },
  minWidth: {
    transform: mn
  },
  height: {
    transform: mn
  },
  maxHeight: {
    transform: mn
  },
  minHeight: {
    transform: mn
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function iT(...a) {
  const r = a.reduce((o, c) => o.concat(Object.keys(c)), []), i = new Set(r);
  return a.every((o) => i.size === Object.keys(o).length);
}
function oT(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function uT() {
  function a(i, o, c, f) {
    const d = {
      [i]: o,
      theme: c
    }, p = f[i];
    if (!p)
      return {
        [i]: o
      };
    const {
      cssProperty: h = i,
      themeKey: y,
      transform: v,
      style: g
    } = p;
    if (o == null)
      return null;
    if (y === "typography" && o === "inherit")
      return {
        [i]: o
      };
    const E = ws(c, y) || {};
    return g ? g(d) : Ma(d, o, (T) => {
      let x = gs(E, v, T);
      return T === x && typeof T == "string" && (x = gs(E, v, `${i}${T === "default" ? "" : ie(T)}`, T)), h === !1 ? x : {
        [h]: x
      };
    });
  }
  function r(i) {
    const {
      sx: o,
      theme: c = {},
      nested: f
    } = i || {};
    if (!o)
      return null;
    const d = c.unstable_sxConfig ?? bo;
    function p(h) {
      let y = h;
      if (typeof h == "function")
        y = h(c);
      else if (typeof h != "object")
        return h;
      if (!y)
        return null;
      const v = xx(c.breakpoints), g = Object.keys(v);
      let E = v;
      return Object.keys(y).forEach((O) => {
        const T = oT(y[O], c);
        if (T != null)
          if (typeof T == "object")
            if (d[O])
              E = ao(E, a(O, T, c, d));
            else {
              const x = Ma({
                theme: c
              }, T, (w) => ({
                [O]: w
              }));
              iT(x, T) ? E[O] = r({
                sx: T,
                theme: c,
                nested: !0
              }) : E = ao(E, x);
            }
          else
            E = ao(E, a(O, T, c, d));
      }), !f && c.modularCssLayers ? {
        "@layer sx": _0(c, B0(g, E))
      } : _0(c, B0(g, E));
    }
    return Array.isArray(o) ? o.map(p) : p(o);
  }
  return r;
}
const fl = uT();
fl.filterProps = ["sx"];
function sT(a, r) {
  var o;
  const i = this;
  if (i.vars) {
    if (!((o = i.colorSchemes) != null && o[a]) || typeof i.getColorSchemeSelector != "function")
      return {};
    let c = i.getColorSchemeSelector(a);
    return c === "&" ? r : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), {
      [c]: r
    });
  }
  return i.palette.mode === a ? r : {};
}
function Em(a = {}, ...r) {
  const {
    breakpoints: i = {},
    palette: o = {},
    spacing: c,
    shape: f = {},
    ...d
  } = a, p = lb(i), h = Sm(c);
  let y = hn({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: h,
    shape: {
      ...Cx,
      ...f
    }
  }, d);
  return y = Sx(y), y.applyStyles = sT, y = r.reduce((v, g) => hn(v, g), y), y.unstable_sxConfig = {
    ...bo,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(g) {
    return fl({
      sx: g,
      theme: this
    });
  }, y;
}
function cT(a) {
  return Object.keys(a).length === 0;
}
function Ds(a = null) {
  const r = C.useContext(ho);
  return !r || cT(r) ? a : r;
}
const fT = Em();
function xm(a = fT) {
  return Ds(a);
}
function wd(a) {
  const r = cl(a);
  return a !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : a;
}
function dT({
  styles: a,
  themeId: r,
  defaultTheme: i = {}
}) {
  const o = xm(i), c = r && o[r] || o;
  let f = typeof a == "function" ? a(c) : a;
  return c.modularCssLayers && (Array.isArray(f) ? f = f.map((d) => wd(typeof d == "function" ? d(c) : d)) : f = wd(f)), /* @__PURE__ */ X.jsx(eb, {
    styles: f
  });
}
const mT = (a) => {
  var o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = ((o = a == null ? void 0 : a.theme) == null ? void 0 : o.unstable_sxConfig) ?? bo;
  return Object.keys(a).forEach((c) => {
    i[c] ? r.systemProps[c] = a[c] : r.otherProps[c] = a[c];
  }), r;
};
function ib(a) {
  const {
    sx: r,
    ...i
  } = a, {
    systemProps: o,
    otherProps: c
  } = mT(i);
  let f;
  return Array.isArray(r) ? f = [o, ...r] : typeof r == "function" ? f = (...d) => {
    const p = r(...d);
    return aa(p) ? {
      ...o,
      ...p
    } : o;
  } : f = {
    ...o,
    ...r
  }, {
    ...c,
    sx: f
  };
}
const H0 = (a) => a, pT = () => {
  let a = H0;
  return {
    configure(r) {
      a = r;
    },
    generate(r) {
      return a(r);
    },
    reset() {
      a = H0;
    }
  };
}, ob = pT();
function ub(a) {
  var r, i, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (r = 0; r < c; r++) a[r] && (i = ub(a[r])) && (o && (o += " "), o += i);
  } else for (i in a) a[i] && (o && (o += " "), o += i);
  return o;
}
function xe() {
  for (var a, r, i = 0, o = "", c = arguments.length; i < c; i++) (a = arguments[i]) && (r = ub(a)) && (o && (o += " "), o += r);
  return o;
}
function hT(a = {}) {
  const {
    themeId: r,
    defaultTheme: i,
    defaultClassName: o = "MuiBox-root",
    generateClassName: c
  } = a, f = tb("div", {
    shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as"
  })(fl);
  return /* @__PURE__ */ C.forwardRef(function(h, y) {
    const v = xm(i), {
      className: g,
      component: E = "div",
      ...O
    } = ib(h);
    return /* @__PURE__ */ X.jsx(f, {
      as: E,
      ref: y,
      className: xe(g, c ? c(o) : o),
      theme: r && v[r] || v,
      ...O
    });
  });
}
const gT = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function vt(a, r, i = "Mui") {
  const o = gT[r];
  return o ? `${i}-${o}` : `${ob.generate(a)}-${r}`;
}
function dt(a, r, i = "Mui") {
  const o = {};
  return r.forEach((c) => {
    o[c] = vt(a, c, i);
  }), o;
}
function sb(a) {
  const {
    variants: r,
    ...i
  } = a, o = {
    variants: r,
    style: cl(i),
    isProcessed: !0
  };
  return o.style === i || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = cl(c.style));
  }), o;
}
const yT = Em();
function Ad(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function Yl(a, r) {
  return r && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${r}{${String(a.styles)}}`), a;
}
function vT(a) {
  return a ? (r, i) => i[a] : null;
}
function bT(a, r, i) {
  a.theme = ET(a.theme) ? i : a.theme[r] || a.theme;
}
function cs(a, r, i) {
  const o = typeof r == "function" ? r(a) : r;
  if (Array.isArray(o))
    return o.flatMap((c) => cs(a, c, i));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let c;
    if (o.isProcessed)
      c = i ? Yl(o.style, i) : o.style;
    else {
      const {
        variants: f,
        ...d
      } = o;
      c = i ? Yl(cl(d), i) : d;
    }
    return cb(a, o.variants, [c], i);
  }
  return o != null && o.isProcessed ? i ? Yl(cl(o.style), i) : o.style : i ? Yl(cl(o), i) : o;
}
function cb(a, r, i = [], o = void 0) {
  var f;
  let c;
  e: for (let d = 0; d < r.length; d += 1) {
    const p = r[d];
    if (typeof p.props == "function") {
      if (c ?? (c = {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }), !p.props(c))
        continue;
    } else
      for (const h in p.props)
        if (a[h] !== p.props[h] && ((f = a.ownerState) == null ? void 0 : f[h]) !== p.props[h])
          continue e;
    typeof p.style == "function" ? (c ?? (c = {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }), i.push(o ? Yl(cl(p.style(c)), o) : p.style(c))) : i.push(o ? Yl(cl(p.style), o) : p.style);
  }
  return i;
}
function ST(a = {}) {
  const {
    themeId: r,
    defaultTheme: i = yT,
    rootShouldForwardProp: o = Ad,
    slotShouldForwardProp: c = Ad
  } = a;
  function f(p) {
    bT(p, r, i);
  }
  return (p, h = {}) => {
    px(p, (Q) => Q.filter((G) => G !== fl));
    const {
      name: y,
      slot: v,
      skipVariantsResolver: g,
      skipSx: E,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: O = vT(TT(v)),
      ...T
    } = h, x = y && y.startsWith("Mui") || v ? "components" : "custom", w = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      v && v !== "Root" && v !== "root" || !1
    ), M = E || !1;
    let q = Ad;
    v === "Root" || v === "root" ? q = o : v ? q = c : xT(p) && (q = void 0);
    const U = tb(p, {
      shouldForwardProp: q,
      label: CT(),
      ...T
    }), H = (Q) => {
      if (Q.__emotion_real === Q)
        return Q;
      if (typeof Q == "function")
        return function(Z) {
          return cs(Z, Q, Z.theme.modularCssLayers ? x : void 0);
        };
      if (aa(Q)) {
        const G = sb(Q);
        return function(J) {
          return G.variants ? cs(J, G, J.theme.modularCssLayers ? x : void 0) : J.theme.modularCssLayers ? Yl(G.style, x) : G.style;
        };
      }
      return Q;
    }, N = (...Q) => {
      const G = [], Z = Q.map(H), J = [];
      if (G.push(f), y && O && J.push(function(ae) {
        var te, W;
        const F = (W = (te = ae.theme.components) == null ? void 0 : te[y]) == null ? void 0 : W.styleOverrides;
        if (!F)
          return null;
        const k = {};
        for (const ne in F)
          k[ne] = cs(ae, F[ne], ae.theme.modularCssLayers ? "theme" : void 0);
        return O(ae, k);
      }), y && !w && J.push(function(ae) {
        var k, te;
        const le = ae.theme, F = (te = (k = le == null ? void 0 : le.components) == null ? void 0 : k[y]) == null ? void 0 : te.variants;
        return F ? cb(ae, F, [], ae.theme.modularCssLayers ? "theme" : void 0) : null;
      }), M || J.push(fl), Array.isArray(Z[0])) {
        const ee = Z.shift(), ae = new Array(G.length).fill(""), le = new Array(J.length).fill("");
        let F;
        F = [...ae, ...ee, ...le], F.raw = [...ae, ...ee.raw, ...le], G.unshift(F);
      }
      const S = [...G, ...Z, ...J], $ = U(...S);
      return p.muiName && ($.muiName = p.muiName), $;
    };
    return U.withConfig && (N.withConfig = U.withConfig), N;
  };
}
function CT(a, r) {
  return void 0;
}
function ET(a) {
  for (const r in a)
    return !1;
  return !0;
}
function xT(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function TT(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function so(a, r) {
  const i = {
    ...r
  };
  for (const o in a)
    if (Object.prototype.hasOwnProperty.call(a, o)) {
      const c = o;
      if (c === "components" || c === "slots")
        i[c] = {
          ...a[c],
          ...i[c]
        };
      else if (c === "componentsProps" || c === "slotProps") {
        const f = a[c], d = r[c];
        if (!d)
          i[c] = f || {};
        else if (!f)
          i[c] = d;
        else {
          i[c] = {
            ...d
          };
          for (const p in f)
            if (Object.prototype.hasOwnProperty.call(f, p)) {
              const h = p;
              i[c][h] = so(f[h], d[h]);
            }
        }
      } else i[c] === void 0 && (i[c] = a[c]);
    }
  return i;
}
function RT(a) {
  const {
    theme: r,
    name: i,
    props: o
  } = a;
  return !r || !r.components || !r.components[i] || !r.components[i].defaultProps ? o : so(r.components[i].defaultProps, o);
}
const Zr = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function OT(a, r, i, o, c) {
  const [f, d] = C.useState(() => c && i ? i(a).matches : o ? o(a).matches : r);
  return Zr(() => {
    if (!i)
      return;
    const p = i(a), h = () => {
      d(p.matches);
    };
    return h(), p.addEventListener("change", h), () => {
      p.removeEventListener("change", h);
    };
  }, [a, i]), f;
}
const wT = {
  ...ms
}, fb = wT.useSyncExternalStore;
function AT(a, r, i, o, c) {
  const f = C.useCallback(() => r, [r]), d = C.useMemo(() => {
    if (c && i)
      return () => i(a).matches;
    if (o !== null) {
      const {
        matches: v
      } = o(a);
      return () => v;
    }
    return f;
  }, [f, a, o, c, i]), [p, h] = C.useMemo(() => {
    if (i === null)
      return [f, () => () => {
      }];
    const v = i(a);
    return [() => v.matches, (g) => (v.addEventListener("change", g), () => {
      v.removeEventListener("change", g);
    })];
  }, [f, i, a]);
  return fb(h, p, d);
}
function db(a = {}) {
  const {
    themeId: r
  } = a;
  return function(o, c = {}) {
    let f = Ds();
    f && r && (f = f[r] || f);
    const d = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: p = !1,
      matchMedia: h = d ? window.matchMedia : null,
      ssrMatchMedia: y = null,
      noSsr: v = !1
    } = RT({
      name: "MuiUseMediaQuery",
      props: c,
      theme: f
    });
    let g = typeof o == "function" ? o(f) : o;
    return g = g.replace(/^@media( ?)/m, ""), g.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (fb !== void 0 ? AT : OT)(g, p, h, y, v);
  };
}
db();
function zT(a, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, i));
}
function Tm(a, r = 0, i = 1) {
  return zT(a, r, i);
}
function MT(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let i = a.match(r);
  return i && i[0].length === 1 && (i = i.map((o) => o + o)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((o, c) => c < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function dl(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return dl(MT(a));
  const r = a.indexOf("("), i = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(ql(9, a));
  let o = a.substring(r + 1, a.length - 1), c;
  if (i === "color") {
    if (o = o.split(" "), c = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c))
      throw new Error(ql(10, c));
  } else
    o = o.split(",");
  return o = o.map((f) => parseFloat(f)), {
    type: i,
    values: o,
    colorSpace: c
  };
}
const NT = (a) => {
  const r = dl(a);
  return r.values.slice(0, 3).map((i, o) => r.type.includes("hsl") && o !== 0 ? `${i}%` : i).join(" ");
}, eo = (a, r) => {
  try {
    return NT(a);
  } catch {
    return a;
  }
};
function Bs(a) {
  const {
    type: r,
    colorSpace: i
  } = a;
  let {
    values: o
  } = a;
  return r.includes("rgb") ? o = o.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), r.includes("color") ? o = `${i} ${o.join(" ")}` : o = `${o.join(", ")}`, `${r}(${o})`;
}
function mb(a) {
  a = dl(a);
  const {
    values: r
  } = a, i = r[0], o = r[1] / 100, c = r[2] / 100, f = o * Math.min(c, 1 - c), d = (y, v = (y + i / 30) % 12) => c - f * Math.max(Math.min(v - 3, 9 - v, 1), -1);
  let p = "rgb";
  const h = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return a.type === "hsla" && (p += "a", h.push(r[3])), Bs({
    type: p,
    values: h
  });
}
function Id(a) {
  a = dl(a);
  let r = a.type === "hsl" || a.type === "hsla" ? dl(mb(a)).values : a.values;
  return r = r.map((i) => (a.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function _T(a, r) {
  const i = Id(a), o = Id(r);
  return (Math.max(i, o) + 0.05) / (Math.min(i, o) + 0.05);
}
function nt(a, r) {
  return a = dl(a), r = Tm(r), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${r}` : a.values[3] = r, Bs(a);
}
function Wu(a, r, i) {
  try {
    return nt(a, r);
  } catch {
    return a;
  }
}
function Us(a, r) {
  if (a = dl(a), r = Tm(r), a.type.includes("hsl"))
    a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] *= 1 - r;
  return Bs(a);
}
function Ie(a, r, i) {
  try {
    return Us(a, r);
  } catch {
    return a;
  }
}
function Hs(a, r) {
  if (a = dl(a), r = Tm(r), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (255 - a.values[i]) * r;
  else if (a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (1 - a.values[i]) * r;
  return Bs(a);
}
function Pe(a, r, i) {
  try {
    return Hs(a, r);
  } catch {
    return a;
  }
}
function DT(a, r = 0.15) {
  return Id(a) > 0.5 ? Us(a, r) : Hs(a, r);
}
function es(a, r, i) {
  try {
    return DT(a, r);
  } catch {
    return a;
  }
}
function L0(...a) {
  return a.reduce((r, i) => i == null ? r : function(...c) {
    r.apply(this, c), i.apply(this, c);
  }, () => {
  });
}
function BT(a, r = 166) {
  let i;
  function o(...c) {
    const f = () => {
      a.apply(this, c);
    };
    clearTimeout(i), i = setTimeout(f, r);
  }
  return o.clear = () => {
    clearTimeout(i);
  }, o;
}
function Gl(a) {
  return a && a.ownerDocument || document;
}
function Ir(a) {
  return Gl(a).defaultView || window;
}
function j0(a, r) {
  typeof a == "function" ? a(r) : a && (a.current = r);
}
let $0 = 0;
function UT(a) {
  const [r, i] = C.useState(a), o = a || r;
  return C.useEffect(() => {
    r == null && ($0 += 1, i(`mui-${$0}`));
  }, [r]), o;
}
const HT = {
  ...ms
}, k0 = HT.useId;
function Rm(a) {
  if (k0 !== void 0) {
    const r = k0();
    return a ?? r;
  }
  return UT(a);
}
function Qr(a) {
  const r = C.useRef(a);
  return Zr(() => {
    r.current = a;
  }), C.useRef((...i) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...i)
  )).current;
}
function Na(...a) {
  const r = C.useRef(void 0), i = C.useCallback((o) => {
    const c = a.map((f) => {
      if (f == null)
        return null;
      if (typeof f == "function") {
        const d = f, p = d(o);
        return typeof p == "function" ? p : () => {
          d(null);
        };
      }
      return f.current = o, () => {
        f.current = null;
      };
    });
    return () => {
      c.forEach((f) => f == null ? void 0 : f());
    };
  }, a);
  return C.useMemo(() => a.every((o) => o == null) ? null : (o) => {
    r.current && (r.current(), r.current = void 0), o != null && (r.current = i(o));
  }, a);
}
const Y0 = {};
function pb(a, r) {
  const i = C.useRef(Y0);
  return i.current === Y0 && (i.current = a(r)), i;
}
const LT = [];
function jT(a) {
  C.useEffect(a, LT);
}
class Om {
  constructor() {
    Hr(this, "currentId", null);
    Hr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Hr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Om();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, i) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, i();
    }, r);
  }
}
function $T() {
  const a = pb(Om.create).current;
  return jT(a.disposeEffect), a;
}
function V0(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function kT(a = window) {
  const r = a.document.documentElement.clientWidth;
  return a.innerWidth - r;
}
const hb = (a) => {
  const r = C.useRef({});
  return C.useEffect(() => {
    r.current = a;
  }), r.current;
};
function Et(a, r, i = void 0) {
  const o = {};
  for (const c in a) {
    const f = a[c];
    let d = "", p = !0;
    for (let h = 0; h < f.length; h += 1) {
      const y = f[h];
      y && (d += (p === !0 ? "" : " ") + r(y), p = !1, i && i[y] && (d += " " + i[y]));
    }
    o[c] = d;
  }
  return o;
}
function YT(a) {
  return typeof a == "string";
}
function VT(a, r, i) {
  return a === void 0 || YT(a) ? r : {
    ...r,
    ownerState: {
      ...r.ownerState,
      ...i
    }
  };
}
function gb(a, r = []) {
  if (a === void 0)
    return {};
  const i = {};
  return Object.keys(a).filter((o) => o.match(/^on[A-Z]/) && typeof a[o] == "function" && !r.includes(o)).forEach((o) => {
    i[o] = a[o];
  }), i;
}
function q0(a) {
  if (a === void 0)
    return {};
  const r = {};
  return Object.keys(a).filter((i) => !(i.match(/^on[A-Z]/) && typeof a[i] == "function")).forEach((i) => {
    r[i] = a[i];
  }), r;
}
function qT(a) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: o,
    externalForwardedProps: c,
    className: f
  } = a;
  if (!r) {
    const O = xe(i == null ? void 0 : i.className, f, c == null ? void 0 : c.className, o == null ? void 0 : o.className), T = {
      ...i == null ? void 0 : i.style,
      ...c == null ? void 0 : c.style,
      ...o == null ? void 0 : o.style
    }, x = {
      ...i,
      ...c,
      ...o
    };
    return O.length > 0 && (x.className = O), Object.keys(T).length > 0 && (x.style = T), {
      props: x,
      internalRef: void 0
    };
  }
  const d = gb({
    ...c,
    ...o
  }), p = q0(o), h = q0(c), y = r(d), v = xe(y == null ? void 0 : y.className, i == null ? void 0 : i.className, f, c == null ? void 0 : c.className, o == null ? void 0 : o.className), g = {
    ...y == null ? void 0 : y.style,
    ...i == null ? void 0 : i.style,
    ...c == null ? void 0 : c.style,
    ...o == null ? void 0 : o.style
  }, E = {
    ...y,
    ...i,
    ...h,
    ...p
  };
  return v.length > 0 && (E.className = v), Object.keys(g).length > 0 && (E.style = g), {
    props: E,
    internalRef: y.ref
  };
}
function GT(a, r, i) {
  return typeof a == "function" ? a(r, i) : a;
}
function Ls(a) {
  var r;
  return parseInt(C.version, 10) >= 19 ? ((r = a == null ? void 0 : a.props) == null ? void 0 : r.ref) || null : (a == null ? void 0 : a.ref) || null;
}
const yb = /* @__PURE__ */ C.createContext(null);
function wm() {
  return C.useContext(yb);
}
const XT = typeof Symbol == "function" && Symbol.for, QT = XT ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function KT(a, r) {
  return typeof r == "function" ? r(a) : {
    ...a,
    ...r
  };
}
function ZT(a) {
  const {
    children: r,
    theme: i
  } = a, o = wm(), c = C.useMemo(() => {
    const f = o === null ? {
      ...i
    } : KT(o, i);
    return f != null && (f[QT] = o !== null), f;
  }, [i, o]);
  return /* @__PURE__ */ X.jsx(yb.Provider, {
    value: c,
    children: r
  });
}
const vb = /* @__PURE__ */ C.createContext();
function IT({
  value: a,
  ...r
}) {
  return /* @__PURE__ */ X.jsx(vb.Provider, {
    value: a ?? !0,
    ...r
  });
}
const PT = () => C.useContext(vb) ?? !1, bb = /* @__PURE__ */ C.createContext(void 0);
function JT({
  value: a,
  children: r
}) {
  return /* @__PURE__ */ X.jsx(bb.Provider, {
    value: a,
    children: r
  });
}
function FT(a) {
  const {
    theme: r,
    name: i,
    props: o
  } = a;
  if (!r || !r.components || !r.components[i])
    return o;
  const c = r.components[i];
  return c.defaultProps ? so(c.defaultProps, o) : !c.styleOverrides && !c.variants ? so(c, o) : o;
}
function WT({
  props: a,
  name: r
}) {
  const i = C.useContext(bb);
  return FT({
    props: a,
    name: r,
    theme: {
      components: i
    }
  });
}
function e2(a) {
  const r = Ds(), i = Rm() || "", {
    modularCssLayers: o
  } = a;
  let c = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !o || r !== null ? c = "" : typeof o == "string" ? c = o.replace(/mui(?!\.)/g, c) : c = `@layer ${c};`, Zr(() => {
    var p, h;
    const f = document.querySelector("head");
    if (!f)
      return;
    const d = f.firstChild;
    if (c) {
      if (d && ((p = d.hasAttribute) != null && p.call(d, "data-mui-layer-order")) && d.getAttribute("data-mui-layer-order") === i)
        return;
      const y = document.createElement("style");
      y.setAttribute("data-mui-layer-order", i), y.textContent = c, f.prepend(y);
    } else
      (h = f.querySelector(`style[data-mui-layer-order="${i}"]`)) == null || h.remove();
  }, [c, i]), c ? /* @__PURE__ */ X.jsx(dT, {
    styles: c
  }) : null;
}
const G0 = {};
function X0(a, r, i, o = !1) {
  return C.useMemo(() => {
    const c = a && r[a] || r;
    if (typeof i == "function") {
      const f = i(c), d = a ? {
        ...r,
        [a]: f
      } : f;
      return o ? () => d : d;
    }
    return a ? {
      ...r,
      [a]: i
    } : {
      ...r,
      ...i
    };
  }, [a, r, i, o]);
}
function Sb(a) {
  const {
    children: r,
    theme: i,
    themeId: o
  } = a, c = Ds(G0), f = wm() || G0, d = X0(o, c, i), p = X0(o, f, i, !0), h = (o ? d[o] : d).direction === "rtl", y = e2(d);
  return /* @__PURE__ */ X.jsx(ZT, {
    theme: p,
    children: /* @__PURE__ */ X.jsx(ho.Provider, {
      value: d,
      children: /* @__PURE__ */ X.jsx(IT, {
        value: h,
        children: /* @__PURE__ */ X.jsxs(JT, {
          value: o ? d[o].components : d.components,
          children: [y, r]
        })
      })
    })
  });
}
const Q0 = {
  theme: void 0
};
function t2(a) {
  let r, i;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== i) && (Q0.theme = c.theme, f = sb(a(Q0)), r = f, i = c.theme), f;
  };
}
const Am = "mode", zm = "color-scheme", n2 = "data-color-scheme";
function a2(a) {
  const {
    defaultMode: r = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: c = Am,
    colorSchemeStorageKey: f = zm,
    attribute: d = n2,
    colorSchemeNode: p = "document.documentElement",
    nonce: h
  } = a || {};
  let y = "", v = d;
  if (d === "class" && (v = ".%s"), d === "data" && (v = "[data-%s]"), v.startsWith(".")) {
    const E = v.substring(1);
    y += `${p}.classList.remove('${E}'.replace('%s', light), '${E}'.replace('%s', dark));
      ${p}.classList.add('${E}'.replace('%s', colorScheme));`;
  }
  const g = v.match(/\[([^\]]+)\]/);
  if (g) {
    const [E, O] = g[1].split("=");
    O || (y += `${p}.removeAttribute('${E}'.replace('%s', light));
      ${p}.removeAttribute('${E}'.replace('%s', dark));`), y += `
      ${p}.setAttribute('${E}'.replace('%s', colorScheme), ${O ? `${O}.replace('%s', colorScheme)` : '""'});`;
  } else
    y += `${p}.setAttribute('${v}', colorScheme);`;
  return /* @__PURE__ */ X.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? h : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${o}';
  const light = localStorage.getItem('${f}-light') || '${i}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${y}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function l2() {
}
const r2 = ({
  key: a,
  storageWindow: r
}) => (!r && typeof window < "u" && (r = window), {
  get(i) {
    if (typeof window > "u")
      return;
    if (!r)
      return i;
    let o;
    try {
      o = r.localStorage.getItem(a);
    } catch {
    }
    return o || i;
  },
  set: (i) => {
    if (r)
      try {
        r.localStorage.setItem(a, i);
      } catch {
      }
  },
  subscribe: (i) => {
    if (!r)
      return l2;
    const o = (c) => {
      const f = c.newValue;
      c.key === a && i(f);
    };
    return r.addEventListener("storage", o), () => {
      r.removeEventListener("storage", o);
    };
  }
});
function zd() {
}
function K0(a) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && a === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Cb(a, r) {
  if (a.mode === "light" || a.mode === "system" && a.systemMode === "light")
    return r("light");
  if (a.mode === "dark" || a.mode === "system" && a.systemMode === "dark")
    return r("dark");
}
function i2(a) {
  return Cb(a, (r) => {
    if (r === "light")
      return a.lightColorScheme;
    if (r === "dark")
      return a.darkColorScheme;
  });
}
function o2(a) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: o,
    supportedColorSchemes: c = [],
    modeStorageKey: f = Am,
    colorSchemeStorageKey: d = zm,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: h = r2,
    noSsr: y = !1
  } = a, v = c.join(","), g = c.length > 1, E = C.useMemo(() => h == null ? void 0 : h({
    key: f,
    storageWindow: p
  }), [h, f, p]), O = C.useMemo(() => h == null ? void 0 : h({
    key: `${d}-light`,
    storageWindow: p
  }), [h, d, p]), T = C.useMemo(() => h == null ? void 0 : h({
    key: `${d}-dark`,
    storageWindow: p
  }), [h, d, p]), [x, w] = C.useState(() => {
    const Z = (E == null ? void 0 : E.get(r)) || r, J = (O == null ? void 0 : O.get(i)) || i, S = (T == null ? void 0 : T.get(o)) || o;
    return {
      mode: Z,
      systemMode: K0(Z),
      lightColorScheme: J,
      darkColorScheme: S
    };
  }), [M, q] = C.useState(y || !g);
  C.useEffect(() => {
    q(!0);
  }, []);
  const U = i2(x), H = C.useCallback((Z) => {
    w((J) => {
      if (Z === J.mode)
        return J;
      const S = Z ?? r;
      return E == null || E.set(S), {
        ...J,
        mode: S,
        systemMode: K0(S)
      };
    });
  }, [E, r]), N = C.useCallback((Z) => {
    Z ? typeof Z == "string" ? Z && !v.includes(Z) ? console.error(`\`${Z}\` does not exist in \`theme.colorSchemes\`.`) : w((J) => {
      const S = {
        ...J
      };
      return Cb(J, ($) => {
        $ === "light" && (O == null || O.set(Z), S.lightColorScheme = Z), $ === "dark" && (T == null || T.set(Z), S.darkColorScheme = Z);
      }), S;
    }) : w((J) => {
      const S = {
        ...J
      }, $ = Z.light === null ? i : Z.light, ee = Z.dark === null ? o : Z.dark;
      return $ && (v.includes($) ? (S.lightColorScheme = $, O == null || O.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), ee && (v.includes(ee) ? (S.darkColorScheme = ee, T == null || T.set(ee)) : console.error(`\`${ee}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : w((J) => (O == null || O.set(i), T == null || T.set(o), {
      ...J,
      lightColorScheme: i,
      darkColorScheme: o
    }));
  }, [v, O, T, i, o]), Q = C.useCallback((Z) => {
    x.mode === "system" && w((J) => {
      const S = Z != null && Z.matches ? "dark" : "light";
      return J.systemMode === S ? J : {
        ...J,
        systemMode: S
      };
    });
  }, [x.mode]), G = C.useRef(Q);
  return G.current = Q, C.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const Z = (...S) => G.current(...S), J = window.matchMedia("(prefers-color-scheme: dark)");
    return J.addListener(Z), Z(J), () => {
      J.removeListener(Z);
    };
  }, [g]), C.useEffect(() => {
    if (g) {
      const Z = (E == null ? void 0 : E.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && H($ || r);
      })) || zd, J = (O == null ? void 0 : O.subscribe(($) => {
        (!$ || v.match($)) && N({
          light: $
        });
      })) || zd, S = (T == null ? void 0 : T.subscribe(($) => {
        (!$ || v.match($)) && N({
          dark: $
        });
      })) || zd;
      return () => {
        Z(), J(), S();
      };
    }
  }, [N, H, v, r, p, g, E, O, T]), {
    ...x,
    mode: M ? x.mode : void 0,
    systemMode: M ? x.systemMode : void 0,
    colorScheme: M ? U : void 0,
    setMode: H,
    setColorScheme: N
  };
}
const u2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function s2(a) {
  const {
    themeId: r,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: o = Am,
    colorSchemeStorageKey: c = zm,
    disableTransitionOnChange: f = !1,
    defaultColorScheme: d,
    resolveTheme: p
  } = a, h = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, y = /* @__PURE__ */ C.createContext(void 0), v = () => C.useContext(y) || h, g = {}, E = {};
  function O(M) {
    var ca, Xl, pl, Ql;
    const {
      children: q,
      theme: U,
      modeStorageKey: H = o,
      colorSchemeStorageKey: N = c,
      disableTransitionOnChange: Q = f,
      storageManager: G,
      storageWindow: Z = typeof window > "u" ? void 0 : window,
      documentNode: J = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: $ = !1,
      disableStyleSheetGeneration: ee = !1,
      defaultMode: ae = "system",
      noSsr: le
    } = M, F = C.useRef(!1), k = wm(), te = C.useContext(y), W = !!te && !$, ne = C.useMemo(() => U || (typeof i == "function" ? i() : i), [U]), ce = ne[r], ye = ce || ne, {
      colorSchemes: Oe = g,
      components: Le = E,
      cssVarPrefix: A
    } = ye, Y = Object.keys(Oe).filter((Tt) => !!Oe[Tt]).join(","), re = C.useMemo(() => Y.split(","), [Y]), ue = typeof d == "string" ? d : d.light, ge = typeof d == "string" ? d : d.dark, Se = Oe[ue] && Oe[ge] ? ae : ((Xl = (ca = Oe[ye.defaultColorScheme]) == null ? void 0 : ca.palette) == null ? void 0 : Xl.mode) || ((pl = ye.palette) == null ? void 0 : pl.mode), {
      mode: we,
      setMode: se,
      systemMode: pe,
      lightColorScheme: Xt,
      darkColorScheme: kn,
      colorScheme: Yn,
      setColorScheme: kt
    } = o2({
      supportedColorSchemes: re,
      defaultLightColorScheme: ue,
      defaultDarkColorScheme: ge,
      modeStorageKey: H,
      colorSchemeStorageKey: N,
      defaultMode: Se,
      storageManager: G,
      storageWindow: Z,
      noSsr: le
    });
    let Je = we, Ee = Yn;
    W && (Je = te.mode, Ee = te.colorScheme);
    const xt = C.useMemo(() => {
      var fa;
      const Tt = Ee || ye.defaultColorScheme, at = ((fa = ye.generateThemeVars) == null ? void 0 : fa.call(ye)) || ye.vars, zt = {
        ...ye,
        components: Le,
        colorSchemes: Oe,
        cssVarPrefix: A,
        vars: at
      };
      if (typeof zt.generateSpacing == "function" && (zt.spacing = zt.generateSpacing()), Tt) {
        const en = Oe[Tt];
        en && typeof en == "object" && Object.keys(en).forEach((yn) => {
          en[yn] && typeof en[yn] == "object" ? zt[yn] = {
            ...zt[yn],
            ...en[yn]
          } : zt[yn] = en[yn];
        });
      }
      return p ? p(zt) : zt;
    }, [ye, Ee, Le, Oe, A]), Qt = ye.colorSchemeSelector;
    Zr(() => {
      if (Ee && S && Qt && Qt !== "media") {
        const Tt = Qt;
        let at = Qt;
        if (Tt === "class" && (at = ".%s"), Tt === "data" && (at = "[data-%s]"), Tt != null && Tt.startsWith("data-") && !Tt.includes("%s") && (at = `[${Tt}="%s"]`), at.startsWith("."))
          S.classList.remove(...re.map((zt) => at.substring(1).replace("%s", zt))), S.classList.add(at.substring(1).replace("%s", Ee));
        else {
          const zt = at.replace("%s", Ee).match(/\[([^\]]+)\]/);
          if (zt) {
            const [fa, en] = zt[1].split("=");
            en || re.forEach((yn) => {
              S.removeAttribute(fa.replace(Ee, yn));
            }), S.setAttribute(fa, en ? en.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(at, Ee);
        }
      }
    }, [Ee, Qt, S, re]), C.useEffect(() => {
      let Tt;
      if (Q && F.current && J) {
        const at = J.createElement("style");
        at.appendChild(J.createTextNode(u2)), J.head.appendChild(at), window.getComputedStyle(J.body), Tt = setTimeout(() => {
          J.head.removeChild(at);
        }, 1);
      }
      return () => {
        clearTimeout(Tt);
      };
    }, [Ee, Q, J]), C.useEffect(() => (F.current = !0, () => {
      F.current = !1;
    }), []);
    const gn = C.useMemo(() => ({
      allColorSchemes: re,
      colorScheme: Ee,
      darkColorScheme: kn,
      lightColorScheme: Xt,
      mode: Je,
      setColorScheme: kt,
      setMode: se,
      systemMode: pe
    }), [re, Ee, kn, Xt, Je, kt, se, pe, xt.colorSchemeSelector]);
    let be = !0;
    (ee || ye.cssVariables === !1 || W && (k == null ? void 0 : k.cssVarPrefix) === A) && (be = !1);
    const ml = /* @__PURE__ */ X.jsxs(C.Fragment, {
      children: [/* @__PURE__ */ X.jsx(Sb, {
        themeId: ce ? r : void 0,
        theme: xt,
        children: q
      }), be && /* @__PURE__ */ X.jsx(eb, {
        styles: ((Ql = xt.generateStyleSheets) == null ? void 0 : Ql.call(xt)) || []
      })]
    });
    return W ? ml : /* @__PURE__ */ X.jsx(y.Provider, {
      value: gn,
      children: ml
    });
  }
  const T = typeof d == "string" ? d : d.light, x = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: O,
    useColorScheme: v,
    getInitColorSchemeScript: (M) => a2({
      colorSchemeStorageKey: c,
      defaultLightColorScheme: T,
      defaultDarkColorScheme: x,
      modeStorageKey: o,
      ...M
    })
  };
}
function c2(a = "") {
  function r(...o) {
    if (!o.length)
      return "";
    const c = o[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${c}${r(...o.slice(1))})` : `, ${c}`;
  }
  return (o, ...c) => `var(--${a ? `${a}-` : ""}${o}${r(...c)})`;
}
const Z0 = (a, r, i, o = []) => {
  let c = a;
  r.forEach((f, d) => {
    d === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = i : c && typeof c == "object" && (c[f] = i) : c && typeof c == "object" && (c[f] || (c[f] = o.includes(f) ? [] : {}), c = c[f]);
  });
}, f2 = (a, r, i) => {
  function o(c, f = [], d = []) {
    Object.entries(c).forEach(([p, h]) => {
      (!i || i && !i([...f, p])) && h != null && (typeof h == "object" && Object.keys(h).length > 0 ? o(h, [...f, p], Array.isArray(h) ? [...d, p] : d) : r([...f, p], h, d));
    });
  }
  o(a);
}, d2 = (a, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => a.includes(o)) || a[a.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Md(a, r) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: o
  } = r || {}, c = {}, f = {}, d = {};
  return f2(
    a,
    (p, h, y) => {
      if ((typeof h == "string" || typeof h == "number") && (!o || !o(p, h))) {
        const v = `--${i ? `${i}-` : ""}${p.join("-")}`, g = d2(p, h);
        Object.assign(c, {
          [v]: g
        }), Z0(f, p, `var(${v})`, y), Z0(d, p, `var(${v}, ${g})`, y);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: c,
    vars: f,
    varsWithDefaults: d
  };
}
function m2(a, r = {}) {
  const {
    getSelector: i = w,
    disableCssColorScheme: o,
    colorSchemeSelector: c
  } = r, {
    colorSchemes: f = {},
    components: d,
    defaultColorScheme: p = "light",
    ...h
  } = a, {
    vars: y,
    css: v,
    varsWithDefaults: g
  } = Md(h, r);
  let E = g;
  const O = {}, {
    [p]: T,
    ...x
  } = f;
  if (Object.entries(x || {}).forEach(([U, H]) => {
    const {
      vars: N,
      css: Q,
      varsWithDefaults: G
    } = Md(H, r);
    E = hn(E, G), O[U] = {
      css: Q,
      vars: N
    };
  }), T) {
    const {
      css: U,
      vars: H,
      varsWithDefaults: N
    } = Md(T, r);
    E = hn(E, N), O[p] = {
      css: U,
      vars: H
    };
  }
  function w(U, H) {
    var Q, G;
    let N = c;
    if (c === "class" && (N = ".%s"), c === "data" && (N = "[data-%s]"), c != null && c.startsWith("data-") && !c.includes("%s") && (N = `[${c}="%s"]`), U) {
      if (N === "media")
        return a.defaultColorScheme === U ? ":root" : {
          [`@media (prefers-color-scheme: ${((G = (Q = f[U]) == null ? void 0 : Q.palette) == null ? void 0 : G.mode) || U})`]: {
            ":root": H
          }
        };
      if (N)
        return a.defaultColorScheme === U ? `:root, ${N.replace("%s", String(U))}` : N.replace("%s", String(U));
    }
    return ":root";
  }
  return {
    vars: E,
    generateThemeVars: () => {
      let U = {
        ...y
      };
      return Object.entries(O).forEach(([, {
        vars: H
      }]) => {
        U = hn(U, H);
      }), U;
    },
    generateStyleSheets: () => {
      var Z, J;
      const U = [], H = a.defaultColorScheme || "light";
      function N(S, $) {
        Object.keys($).length && U.push(typeof S == "string" ? {
          [S]: {
            ...$
          }
        } : S);
      }
      N(i(void 0, {
        ...v
      }), v);
      const {
        [H]: Q,
        ...G
      } = O;
      if (Q) {
        const {
          css: S
        } = Q, $ = (J = (Z = f[H]) == null ? void 0 : Z.palette) == null ? void 0 : J.mode, ee = !o && $ ? {
          colorScheme: $,
          ...S
        } : {
          ...S
        };
        N(i(H, {
          ...ee
        }), ee);
      }
      return Object.entries(G).forEach(([S, {
        css: $
      }]) => {
        var le, F;
        const ee = (F = (le = f[S]) == null ? void 0 : le.palette) == null ? void 0 : F.mode, ae = !o && ee ? {
          colorScheme: ee,
          ...$
        } : {
          ...$
        };
        N(i(S, {
          ...ae
        }), ae);
      }), U;
    }
  };
}
function p2(a) {
  return function(i) {
    return a === "media" ? `@media (prefers-color-scheme: ${i})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${i}"] &` : a === "class" ? `.${i} &` : a === "data" ? `[data-${i}] &` : `${a.replace("%s", i)} &` : "&";
  };
}
function I0(a) {
  const {
    defaultProps: r = {},
    mixins: i = {},
    overrides: o = {},
    palette: c = {},
    props: f = {},
    styleOverrides: d = {},
    ...p
  } = a, h = {
    ...p,
    components: {}
  };
  Object.keys(r).forEach((x) => {
    const w = h.components[x] || {};
    w.defaultProps = r[x], h.components[x] = w;
  }), Object.keys(f).forEach((x) => {
    const w = h.components[x] || {};
    w.defaultProps = f[x], h.components[x] = w;
  }), Object.keys(d).forEach((x) => {
    const w = h.components[x] || {};
    w.styleOverrides = d[x], h.components[x] = w;
  }), Object.keys(o).forEach((x) => {
    const w = h.components[x] || {};
    w.styleOverrides = o[x], h.components[x] = w;
  }), h.spacing = Sm(a.spacing);
  const y = lb(a.breakpoints || {}), v = h.spacing;
  h.mixins = {
    gutters: (x = {}) => ({
      paddingLeft: v(2),
      paddingRight: v(2),
      ...x,
      [y.up("sm")]: {
        paddingLeft: v(3),
        paddingRight: v(3),
        ...x[y.up("sm")]
      }
    }),
    ...i
  };
  const {
    type: g,
    mode: E,
    ...O
  } = c, T = E || g || "light";
  return h.palette = {
    // theme.palette.text.hint
    text: {
      hint: T === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: T,
    type: T,
    ...O
  }, h;
}
function Eb() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: ro.white,
      default: ro.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const h2 = Eb();
function xb() {
  return {
    text: {
      primary: ro.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: ro.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const P0 = xb();
function J0(a, r, i, o) {
  const c = o.light || o, f = o.dark || o * 1.5;
  a[r] || (a.hasOwnProperty(i) ? a[r] = a[i] : r === "light" ? a.light = Hs(a.main, c) : r === "dark" && (a.dark = Us(a.main, f)));
}
function g2(a = "light") {
  return a === "dark" ? {
    main: $r[200],
    light: $r[50],
    dark: $r[400]
  } : {
    main: $r[700],
    light: $r[400],
    dark: $r[800]
  };
}
function y2(a = "light") {
  return a === "dark" ? {
    main: jr[200],
    light: jr[50],
    dark: jr[400]
  } : {
    main: jr[500],
    light: jr[300],
    dark: jr[700]
  };
}
function v2(a = "light") {
  return a === "dark" ? {
    main: Lr[500],
    light: Lr[300],
    dark: Lr[700]
  } : {
    main: Lr[700],
    light: Lr[400],
    dark: Lr[800]
  };
}
function b2(a = "light") {
  return a === "dark" ? {
    main: kr[400],
    light: kr[300],
    dark: kr[700]
  } : {
    main: kr[700],
    light: kr[500],
    dark: kr[900]
  };
}
function S2(a = "light") {
  return a === "dark" ? {
    main: Yr[400],
    light: Yr[300],
    dark: Yr[700]
  } : {
    main: Yr[800],
    light: Yr[500],
    dark: Yr[900]
  };
}
function C2(a = "light") {
  return a === "dark" ? {
    main: Ii[400],
    light: Ii[300],
    dark: Ii[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ii[500],
    dark: Ii[900]
  };
}
function Mm(a) {
  const {
    mode: r = "light",
    contrastThreshold: i = 3,
    tonalOffset: o = 0.2,
    ...c
  } = a, f = a.primary || g2(r), d = a.secondary || y2(r), p = a.error || v2(r), h = a.info || b2(r), y = a.success || S2(r), v = a.warning || C2(r);
  function g(x) {
    return _T(x, P0.text.primary) >= i ? P0.text.primary : h2.text.primary;
  }
  const E = ({
    color: x,
    name: w,
    mainShade: M = 500,
    lightShade: q = 300,
    darkShade: U = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[M] && (x.main = x[M]), !x.hasOwnProperty("main"))
      throw new Error(ql(11, w ? ` (${w})` : "", M));
    if (typeof x.main != "string")
      throw new Error(ql(12, w ? ` (${w})` : "", JSON.stringify(x.main)));
    return J0(x, "light", q, o), J0(x, "dark", U, o), x.contrastText || (x.contrastText = g(x.main)), x;
  };
  let O;
  return r === "light" ? O = Eb() : r === "dark" && (O = xb()), hn({
    // A collection of common colors.
    common: {
      ...ro
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: E({
      color: f,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: E({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: E({
      color: p,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: E({
      color: v,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: E({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: E({
      color: y,
      name: "success"
    }),
    // The grey colors.
    grey: mE,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: i,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: E,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...O
  }, c);
}
function E2(a) {
  const r = {};
  return Object.entries(a).forEach((o) => {
    const [c, f] = o;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function x2(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function T2(a) {
  return Math.round(a * 1e5) / 1e5;
}
const F0 = {
  textTransform: "uppercase"
}, W0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Tb(a, r) {
  const {
    fontFamily: i = W0,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: c = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: h = 16,
    // Apply the CSS properties to all the variants.
    allVariants: y,
    pxToRem: v,
    ...g
  } = typeof r == "function" ? r(a) : r, E = o / 14, O = v || ((w) => `${w / h * E}rem`), T = (w, M, q, U, H) => ({
    fontFamily: i,
    fontWeight: w,
    fontSize: O(M),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: q,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === W0 ? {
      letterSpacing: `${T2(U / M)}em`
    } : {},
    ...H,
    ...y
  }), x = {
    h1: T(c, 96, 1.167, -1.5),
    h2: T(c, 60, 1.2, -0.5),
    h3: T(f, 48, 1.167, 0),
    h4: T(f, 34, 1.235, 0.25),
    h5: T(f, 24, 1.334, 0),
    h6: T(d, 20, 1.6, 0.15),
    subtitle1: T(f, 16, 1.75, 0.15),
    subtitle2: T(d, 14, 1.57, 0.1),
    body1: T(f, 16, 1.5, 0.15),
    body2: T(f, 14, 1.43, 0.15),
    button: T(d, 14, 1.75, 0.4, F0),
    caption: T(f, 12, 1.66, 0.4),
    overline: T(f, 12, 2.66, 1, F0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return hn({
    htmlFontSize: h,
    pxToRem: O,
    fontFamily: i,
    fontSize: o,
    fontWeightLight: c,
    fontWeightRegular: f,
    fontWeightMedium: d,
    fontWeightBold: p,
    ...x
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const R2 = 0.2, O2 = 0.14, w2 = 0.12;
function tt(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${R2})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${O2})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${w2})`].join(",");
}
const A2 = ["none", tt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), tt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), tt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), tt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), tt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), tt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), tt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), tt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), tt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), tt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), tt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), tt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), tt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), tt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), tt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), tt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), tt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), tt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), tt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), tt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), tt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), tt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), tt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), tt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], z2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, M2 = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ev(a) {
  return `${Math.round(a)}ms`;
}
function N2(a) {
  if (!a)
    return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function _2(a) {
  const r = {
    ...z2,
    ...a.easing
  }, i = {
    ...M2,
    ...a.duration
  };
  return {
    getAutoHeightDuration: N2,
    create: (c = ["all"], f = {}) => {
      const {
        duration: d = i.standard,
        easing: p = r.easeInOut,
        delay: h = 0,
        ...y
      } = f;
      return (Array.isArray(c) ? c : [c]).map((v) => `${v} ${typeof d == "string" ? d : ev(d)} ${p} ${typeof h == "string" ? h : ev(h)}`).join(",");
    },
    ...a,
    easing: r,
    duration: i
  };
}
const D2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function B2(a) {
  return aa(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function Rb(a = {}) {
  const r = {
    ...a
  };
  function i(o) {
    const c = Object.entries(o);
    for (let f = 0; f < c.length; f++) {
      const [d, p] = c[f];
      !B2(p) || d.startsWith("unstable_") ? delete o[d] : aa(p) && (o[d] = {
        ...p
      }, i(o[d]));
    }
  }
  return i(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Pd(a = {}, ...r) {
  const {
    breakpoints: i,
    mixins: o = {},
    spacing: c,
    palette: f = {},
    transitions: d = {},
    typography: p = {},
    shape: h,
    ...y
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(ql(20));
  const v = Mm(f), g = Em(a);
  let E = hn(g, {
    mixins: x2(g.breakpoints, o),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: A2.slice(),
    typography: Tb(v, p),
    transitions: _2(d),
    zIndex: {
      ...D2
    }
  });
  return E = hn(E, y), E = r.reduce((O, T) => hn(O, T), E), E.unstable_sxConfig = {
    ...bo,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, E.unstable_sx = function(T) {
    return fl({
      sx: T,
      theme: this
    });
  }, E.toRuntimeSource = Rb, E;
}
function Jd(a) {
  let r;
  return a < 1 ? r = 5.11916 * a ** 2 : r = 4.5 * Math.log(a + 1) + 2, Math.round(r * 10) / 1e3;
}
const U2 = [...Array(25)].map((a, r) => {
  if (r === 0)
    return "none";
  const i = Jd(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Ob(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function wb(a) {
  return a === "dark" ? U2 : [];
}
function H2(a) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: o,
    ...c
  } = a, f = Mm(r);
  return {
    palette: f,
    opacity: {
      ...Ob(f.mode),
      ...i
    },
    overlays: o || wb(f.mode),
    ...c
  };
}
function L2(a) {
  var r;
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!((r = a[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const j2 = (a) => [...[...Array(25)].map((r, i) => `--${a ? `${a}-` : ""}overlays-${i}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], $2 = (a) => (r, i) => {
  const o = a.rootSelector || ":root", c = a.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), c != null && c.startsWith("data-") && !c.includes("%s") && (f = `[${c}="%s"]`), a.defaultColorScheme === r) {
    if (r === "dark") {
      const d = {};
      return j2(a.cssVarPrefix).forEach((p) => {
        d[p] = i[p], delete i[p];
      }), f === "media" ? {
        [o]: i,
        "@media (prefers-color-scheme: dark)": {
          [o]: d
        }
      } : f ? {
        [f.replace("%s", r)]: d,
        [`${o}, ${f.replace("%s", r)}`]: i
      } : {
        [o]: {
          ...i,
          ...d
        }
      };
    }
    if (f && f !== "media")
      return `${o}, ${f.replace("%s", String(r))}`;
  } else if (r) {
    if (f === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [o]: i
        }
      };
    if (f)
      return f.replace("%s", String(r));
  }
  return o;
};
function k2(a, r) {
  r.forEach((i) => {
    a[i] || (a[i] = {});
  });
}
function K(a, r, i) {
  !a[r] && i && (a[r] = i);
}
function to(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : mb(a);
}
function wa(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = eo(to(a[r])));
}
function Y2(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const Wn = (a) => {
  try {
    return a();
  } catch {
  }
}, V2 = (a = "mui") => c2(a);
function Nd(a, r, i, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const c = o === "dark" ? "dark" : "light";
  if (!i) {
    a[o] = H2({
      ...r,
      palette: {
        mode: c,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: f,
    ...d
  } = Pd({
    ...i,
    palette: {
      mode: c,
      ...r == null ? void 0 : r.palette
    }
  });
  return a[o] = {
    ...r,
    palette: f,
    opacity: {
      ...Ob(c),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || wb(c)
  }, d;
}
function q2(a = {}, ...r) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: c = !1,
    cssVarPrefix: f = "mui",
    shouldSkipGeneratingVar: d = L2,
    colorSchemeSelector: p = i.light && i.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...y
  } = a, v = Object.keys(i)[0], g = o || (i.light && v !== "light" ? "light" : v), E = V2(f), {
    [g]: O,
    light: T,
    dark: x,
    ...w
  } = i, M = {
    ...w
  };
  let q = O;
  if ((g === "dark" && !("dark" in i) || g === "light" && !("light" in i)) && (q = !0), !q)
    throw new Error(ql(21, g));
  const U = Nd(M, q, y, g);
  T && !M.light && Nd(M, T, void 0, "light"), x && !M.dark && Nd(M, x, void 0, "dark");
  let H = {
    defaultColorScheme: g,
    ...U,
    cssVarPrefix: f,
    colorSchemeSelector: p,
    rootSelector: h,
    getCssVar: E,
    colorSchemes: M,
    font: {
      ...E2(U.typography),
      ...U.font
    },
    spacing: Y2(y.spacing)
  };
  Object.keys(H.colorSchemes).forEach((J) => {
    const S = H.colorSchemes[J].palette, $ = (ee) => {
      const ae = ee.split("-"), le = ae[1], F = ae[2];
      return E(ee, S[le][F]);
    };
    if (S.mode === "light" && (K(S.common, "background", "#fff"), K(S.common, "onBackground", "#000")), S.mode === "dark" && (K(S.common, "background", "#000"), K(S.common, "onBackground", "#fff")), k2(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      K(S.Alert, "errorColor", Ie(S.error.light, 0.6)), K(S.Alert, "infoColor", Ie(S.info.light, 0.6)), K(S.Alert, "successColor", Ie(S.success.light, 0.6)), K(S.Alert, "warningColor", Ie(S.warning.light, 0.6)), K(S.Alert, "errorFilledBg", $("palette-error-main")), K(S.Alert, "infoFilledBg", $("palette-info-main")), K(S.Alert, "successFilledBg", $("palette-success-main")), K(S.Alert, "warningFilledBg", $("palette-warning-main")), K(S.Alert, "errorFilledColor", Wn(() => S.getContrastText(S.error.main))), K(S.Alert, "infoFilledColor", Wn(() => S.getContrastText(S.info.main))), K(S.Alert, "successFilledColor", Wn(() => S.getContrastText(S.success.main))), K(S.Alert, "warningFilledColor", Wn(() => S.getContrastText(S.warning.main))), K(S.Alert, "errorStandardBg", Pe(S.error.light, 0.9)), K(S.Alert, "infoStandardBg", Pe(S.info.light, 0.9)), K(S.Alert, "successStandardBg", Pe(S.success.light, 0.9)), K(S.Alert, "warningStandardBg", Pe(S.warning.light, 0.9)), K(S.Alert, "errorIconColor", $("palette-error-main")), K(S.Alert, "infoIconColor", $("palette-info-main")), K(S.Alert, "successIconColor", $("palette-success-main")), K(S.Alert, "warningIconColor", $("palette-warning-main")), K(S.AppBar, "defaultBg", $("palette-grey-100")), K(S.Avatar, "defaultBg", $("palette-grey-400")), K(S.Button, "inheritContainedBg", $("palette-grey-300")), K(S.Button, "inheritContainedHoverBg", $("palette-grey-A100")), K(S.Chip, "defaultBorder", $("palette-grey-400")), K(S.Chip, "defaultAvatarColor", $("palette-grey-700")), K(S.Chip, "defaultIconColor", $("palette-grey-700")), K(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), K(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), K(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), K(S.LinearProgress, "primaryBg", Pe(S.primary.main, 0.62)), K(S.LinearProgress, "secondaryBg", Pe(S.secondary.main, 0.62)), K(S.LinearProgress, "errorBg", Pe(S.error.main, 0.62)), K(S.LinearProgress, "infoBg", Pe(S.info.main, 0.62)), K(S.LinearProgress, "successBg", Pe(S.success.main, 0.62)), K(S.LinearProgress, "warningBg", Pe(S.warning.main, 0.62)), K(S.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), K(S.Slider, "primaryTrack", Pe(S.primary.main, 0.62)), K(S.Slider, "secondaryTrack", Pe(S.secondary.main, 0.62)), K(S.Slider, "errorTrack", Pe(S.error.main, 0.62)), K(S.Slider, "infoTrack", Pe(S.info.main, 0.62)), K(S.Slider, "successTrack", Pe(S.success.main, 0.62)), K(S.Slider, "warningTrack", Pe(S.warning.main, 0.62));
      const ee = es(S.background.default, 0.8);
      K(S.SnackbarContent, "bg", ee), K(S.SnackbarContent, "color", Wn(() => S.getContrastText(ee))), K(S.SpeedDialAction, "fabHoverBg", es(S.background.paper, 0.15)), K(S.StepConnector, "border", $("palette-grey-400")), K(S.StepContent, "border", $("palette-grey-400")), K(S.Switch, "defaultColor", $("palette-common-white")), K(S.Switch, "defaultDisabledColor", $("palette-grey-100")), K(S.Switch, "primaryDisabledColor", Pe(S.primary.main, 0.62)), K(S.Switch, "secondaryDisabledColor", Pe(S.secondary.main, 0.62)), K(S.Switch, "errorDisabledColor", Pe(S.error.main, 0.62)), K(S.Switch, "infoDisabledColor", Pe(S.info.main, 0.62)), K(S.Switch, "successDisabledColor", Pe(S.success.main, 0.62)), K(S.Switch, "warningDisabledColor", Pe(S.warning.main, 0.62)), K(S.TableCell, "border", Pe(Wu(S.divider, 1), 0.88)), K(S.Tooltip, "bg", Wu(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      K(S.Alert, "errorColor", Pe(S.error.light, 0.6)), K(S.Alert, "infoColor", Pe(S.info.light, 0.6)), K(S.Alert, "successColor", Pe(S.success.light, 0.6)), K(S.Alert, "warningColor", Pe(S.warning.light, 0.6)), K(S.Alert, "errorFilledBg", $("palette-error-dark")), K(S.Alert, "infoFilledBg", $("palette-info-dark")), K(S.Alert, "successFilledBg", $("palette-success-dark")), K(S.Alert, "warningFilledBg", $("palette-warning-dark")), K(S.Alert, "errorFilledColor", Wn(() => S.getContrastText(S.error.dark))), K(S.Alert, "infoFilledColor", Wn(() => S.getContrastText(S.info.dark))), K(S.Alert, "successFilledColor", Wn(() => S.getContrastText(S.success.dark))), K(S.Alert, "warningFilledColor", Wn(() => S.getContrastText(S.warning.dark))), K(S.Alert, "errorStandardBg", Ie(S.error.light, 0.9)), K(S.Alert, "infoStandardBg", Ie(S.info.light, 0.9)), K(S.Alert, "successStandardBg", Ie(S.success.light, 0.9)), K(S.Alert, "warningStandardBg", Ie(S.warning.light, 0.9)), K(S.Alert, "errorIconColor", $("palette-error-main")), K(S.Alert, "infoIconColor", $("palette-info-main")), K(S.Alert, "successIconColor", $("palette-success-main")), K(S.Alert, "warningIconColor", $("palette-warning-main")), K(S.AppBar, "defaultBg", $("palette-grey-900")), K(S.AppBar, "darkBg", $("palette-background-paper")), K(S.AppBar, "darkColor", $("palette-text-primary")), K(S.Avatar, "defaultBg", $("palette-grey-600")), K(S.Button, "inheritContainedBg", $("palette-grey-800")), K(S.Button, "inheritContainedHoverBg", $("palette-grey-700")), K(S.Chip, "defaultBorder", $("palette-grey-700")), K(S.Chip, "defaultAvatarColor", $("palette-grey-300")), K(S.Chip, "defaultIconColor", $("palette-grey-300")), K(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), K(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), K(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), K(S.LinearProgress, "primaryBg", Ie(S.primary.main, 0.5)), K(S.LinearProgress, "secondaryBg", Ie(S.secondary.main, 0.5)), K(S.LinearProgress, "errorBg", Ie(S.error.main, 0.5)), K(S.LinearProgress, "infoBg", Ie(S.info.main, 0.5)), K(S.LinearProgress, "successBg", Ie(S.success.main, 0.5)), K(S.LinearProgress, "warningBg", Ie(S.warning.main, 0.5)), K(S.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), K(S.Slider, "primaryTrack", Ie(S.primary.main, 0.5)), K(S.Slider, "secondaryTrack", Ie(S.secondary.main, 0.5)), K(S.Slider, "errorTrack", Ie(S.error.main, 0.5)), K(S.Slider, "infoTrack", Ie(S.info.main, 0.5)), K(S.Slider, "successTrack", Ie(S.success.main, 0.5)), K(S.Slider, "warningTrack", Ie(S.warning.main, 0.5));
      const ee = es(S.background.default, 0.98);
      K(S.SnackbarContent, "bg", ee), K(S.SnackbarContent, "color", Wn(() => S.getContrastText(ee))), K(S.SpeedDialAction, "fabHoverBg", es(S.background.paper, 0.15)), K(S.StepConnector, "border", $("palette-grey-600")), K(S.StepContent, "border", $("palette-grey-600")), K(S.Switch, "defaultColor", $("palette-grey-300")), K(S.Switch, "defaultDisabledColor", $("palette-grey-600")), K(S.Switch, "primaryDisabledColor", Ie(S.primary.main, 0.55)), K(S.Switch, "secondaryDisabledColor", Ie(S.secondary.main, 0.55)), K(S.Switch, "errorDisabledColor", Ie(S.error.main, 0.55)), K(S.Switch, "infoDisabledColor", Ie(S.info.main, 0.55)), K(S.Switch, "successDisabledColor", Ie(S.success.main, 0.55)), K(S.Switch, "warningDisabledColor", Ie(S.warning.main, 0.55)), K(S.TableCell, "border", Ie(Wu(S.divider, 1), 0.68)), K(S.Tooltip, "bg", Wu(S.grey[700], 0.92));
    }
    wa(S.background, "default"), wa(S.background, "paper"), wa(S.common, "background"), wa(S.common, "onBackground"), wa(S, "divider"), Object.keys(S).forEach((ee) => {
      const ae = S[ee];
      ee !== "tonalOffset" && ae && typeof ae == "object" && (ae.main && K(S[ee], "mainChannel", eo(to(ae.main))), ae.light && K(S[ee], "lightChannel", eo(to(ae.light))), ae.dark && K(S[ee], "darkChannel", eo(to(ae.dark))), ae.contrastText && K(S[ee], "contrastTextChannel", eo(to(ae.contrastText))), ee === "text" && (wa(S[ee], "primary"), wa(S[ee], "secondary")), ee === "action" && (ae.active && wa(S[ee], "active"), ae.selected && wa(S[ee], "selected")));
    });
  }), H = r.reduce((J, S) => hn(J, S), H);
  const N = {
    prefix: f,
    disableCssColorScheme: c,
    shouldSkipGeneratingVar: d,
    getSelector: $2(H)
  }, {
    vars: Q,
    generateThemeVars: G,
    generateStyleSheets: Z
  } = m2(H, N);
  return H.vars = Q, Object.entries(H.colorSchemes[H.defaultColorScheme]).forEach(([J, S]) => {
    H[J] = S;
  }), H.generateThemeVars = G, H.generateStyleSheets = Z, H.generateSpacing = function() {
    return Sm(y.spacing, bm(this));
  }, H.getColorSchemeSelector = p2(p), H.spacing = H.generateSpacing(), H.shouldSkipGeneratingVar = d, H.unstable_sxConfig = {
    ...bo,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, H.unstable_sx = function(S) {
    return fl({
      sx: S,
      theme: this
    });
  }, H.toRuntimeSource = Rb, H;
}
function tv(a, r, i) {
  a.colorSchemes && i && (a.colorSchemes[r] = {
    ...i !== !0 && i,
    palette: Mm({
      ...i === !0 ? {} : i.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function co(a = {}, ...r) {
  const {
    palette: i,
    cssVariables: o = !1,
    colorSchemes: c = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: f = i == null ? void 0 : i.mode,
    ...d
  } = a, p = f || "light", h = c == null ? void 0 : c[p], y = {
    ...c,
    ...i ? {
      [p]: {
        ...typeof h != "boolean" && h,
        palette: i
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in a))
      return Pd(a, ...r);
    let v = i;
    "palette" in a || y[p] && (y[p] !== !0 ? v = y[p].palette : p === "dark" && (v = {
      mode: "dark"
    }));
    const g = Pd({
      ...a,
      palette: v
    }, ...r);
    return g.defaultColorScheme = p, g.colorSchemes = y, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...y.light !== !0 && y.light,
      palette: g.palette
    }, tv(g, "dark", y.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...y.dark !== !0 && y.dark,
      palette: g.palette
    }, tv(g, "light", y.light)), g;
  }
  return !i && !("light" in y) && p === "light" && (y.light = !0), q2({
    ...d,
    colorSchemes: y,
    defaultColorScheme: p,
    ...typeof o != "boolean" && o
  }, ...r);
}
const Ab = co();
function So() {
  const a = xm(Ab);
  return a[ra] || a;
}
function G2(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const js = (a) => G2(a) && a !== "classes", Be = ST({
  themeId: ra,
  defaultTheme: Ab,
  rootShouldForwardProp: js
});
function X2({
  theme: a,
  ...r
}) {
  const i = ra in a ? a[ra] : void 0;
  return /* @__PURE__ */ X.jsx(Sb, {
    ...r,
    themeId: i ? ra : void 0,
    theme: i || a
  });
}
const ts = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Q2
} = s2({
  themeId: ra,
  // @ts-ignore ignore module augmentation tests
  theme: () => co({
    cssVariables: !0
  }),
  colorSchemeStorageKey: ts.colorSchemeStorageKey,
  modeStorageKey: ts.modeStorageKey,
  defaultColorScheme: {
    light: ts.defaultLightColorScheme,
    dark: ts.defaultDarkColorScheme
  },
  resolveTheme: (a) => {
    const r = {
      ...a,
      typography: Tb(a.palette, a.typography)
    };
    return r.unstable_sx = function(o) {
      return fl({
        sx: o,
        theme: this
      });
    }, r;
  }
}), K2 = Q2;
function Z2({
  theme: a,
  ...r
}) {
  const i = C.useMemo(() => {
    if (typeof a == "function")
      return a;
    const o = ra in a ? a[ra] : a;
    return "colorSchemes" in o ? null : "vars" in o ? a : {
      ...a,
      vars: null
    };
  }, [a]);
  return i ? /* @__PURE__ */ X.jsx(X2, {
    theme: i,
    ...r
  }) : /* @__PURE__ */ X.jsx(K2, {
    theme: a,
    ...r
  });
}
function I2() {
  return ib;
}
const Ct = t2;
function bt(a) {
  return WT(a);
}
function P2(a) {
  return vt("MuiSvgIcon", a);
}
dt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const J2 = (a) => {
  const {
    color: r,
    fontSize: i,
    classes: o
  } = a, c = {
    root: ["root", r !== "inherit" && `color${ie(r)}`, `fontSize${ie(i)}`]
  };
  return Et(c, P2, o);
}, F2 = Be("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.color !== "inherit" && r[`color${ie(i.color)}`], r[`fontSize${ie(i.fontSize)}`]];
  }
})(Ct(({
  theme: a
}) => {
  var r, i, o, c, f, d, p, h, y, v, g, E, O, T;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (c = (r = a.transitions) == null ? void 0 : r.create) == null ? void 0 : c.call(r, "fill", {
      duration: (o = (i = (a.vars ?? a).transitions) == null ? void 0 : i.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (x) => !x.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((d = (f = a.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : d.call(f, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((h = (p = a.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : h.call(p, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((v = (y = a.typography) == null ? void 0 : y.pxToRem) == null ? void 0 : v.call(y, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((a.vars ?? a).palette).filter(([, x]) => x && x.main).map(([x]) => {
        var w, M;
        return {
          props: {
            color: x
          },
          style: {
            color: (M = (w = (a.vars ?? a).palette) == null ? void 0 : w[x]) == null ? void 0 : M.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (E = (g = (a.vars ?? a).palette) == null ? void 0 : g.action) == null ? void 0 : E.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (T = (O = (a.vars ?? a).palette) == null ? void 0 : O.action) == null ? void 0 : T.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Fd = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: c,
    className: f,
    color: d = "inherit",
    component: p = "svg",
    fontSize: h = "medium",
    htmlColor: y,
    inheritViewBox: v = !1,
    titleAccess: g,
    viewBox: E = "0 0 24 24",
    ...O
  } = o, T = /* @__PURE__ */ C.isValidElement(c) && c.type === "svg", x = {
    ...o,
    color: d,
    component: p,
    fontSize: h,
    instanceFontSize: r.fontSize,
    inheritViewBox: v,
    viewBox: E,
    hasSvgAsChild: T
  }, w = {};
  v || (w.viewBox = E);
  const M = J2(x);
  return /* @__PURE__ */ X.jsxs(F2, {
    as: p,
    className: xe(M.root, f),
    focusable: "false",
    color: y,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: i,
    ...w,
    ...O,
    ...T && c.props,
    ownerState: x,
    children: [T ? c.props.children : c, g ? /* @__PURE__ */ X.jsx("title", {
      children: g
    }) : null]
  });
});
Fd.muiName = "SvgIcon";
function Co(a, r) {
  function i(o, c) {
    return /* @__PURE__ */ X.jsx(Fd, {
      "data-testid": `${r}Icon`,
      ref: c,
      ...o,
      children: a
    });
  }
  return i.muiName = Fd.muiName, /* @__PURE__ */ C.memo(/* @__PURE__ */ C.forwardRef(i));
}
function W2(a, r) {
  if (!a)
    return r;
  if (typeof a == "function" || typeof r == "function")
    return (c) => {
      const f = typeof r == "function" ? r(c) : r, d = typeof a == "function" ? a({
        ...c,
        ...f
      }) : a, p = xe(c == null ? void 0 : c.className, f == null ? void 0 : f.className, d == null ? void 0 : d.className);
      return {
        ...f,
        ...d,
        ...!!p && {
          className: p
        },
        ...(f == null ? void 0 : f.style) && (d == null ? void 0 : d.style) && {
          style: {
            ...f.style,
            ...d.style
          }
        },
        ...(f == null ? void 0 : f.sx) && (d == null ? void 0 : d.sx) && {
          sx: [...Array.isArray(f.sx) ? f.sx : [f.sx], ...Array.isArray(d.sx) ? d.sx : [d.sx]]
        }
      };
    };
  const i = r, o = xe(i == null ? void 0 : i.className, a == null ? void 0 : a.className);
  return {
    ...r,
    ...a,
    ...!!o && {
      className: o
    },
    ...(i == null ? void 0 : i.style) && (a == null ? void 0 : a.style) && {
      style: {
        ...i.style,
        ...a.style
      }
    },
    ...(i == null ? void 0 : i.sx) && (a == null ? void 0 : a.sx) && {
      sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]]
    }
  };
}
function zb(a, r) {
  if (a == null) return {};
  var i = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (r.indexOf(o) !== -1) continue;
    i[o] = a[o];
  }
  return i;
}
function Wd(a, r) {
  return Wd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Wd(a, r);
}
function Mb(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, Wd(a, r);
}
var _d = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function eR() {
  if (nv) return Ht;
  nv = 1;
  var a = um();
  function r(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        g += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var o = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), f = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function p(v, g, E) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: O == null ? null : O === d ? d : "" + O,
      children: v,
      containerInfo: g,
      implementation: E
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ht.browser = function(v) {
    return { $$typeof: f, _reason: v };
  }, Ht.createPortal = function(v, g) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return p(v, g, null, E);
  }, Ht.flushSync = function(v) {
    var g = h.T, E = o.p;
    try {
      if (h.T = null, o.p = 2, v) return v();
    } finally {
      h.T = g, o.p = E, o.d.f();
    }
  }, Ht.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(v, g));
  }, Ht.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, Ht.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var E = g.as, O = y(E, g.crossOrigin), T = typeof g.integrity == "string" ? g.integrity : void 0, x = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      E === "style" ? o.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: O,
          integrity: T,
          fetchPriority: x
        }
      ) : E === "script" && o.d.X(v, {
        crossOrigin: O,
        integrity: T,
        fetchPriority: x,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Ht.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var E = y(
            g.as,
            g.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: E,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && o.d.M(v);
  }, Ht.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var E = g.as, O = y(E, g.crossOrigin);
      o.d.L(v, E, {
        crossOrigin: O,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Ht.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var E = y(g.as, g.crossOrigin);
        o.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else o.d.m(v);
  }, Ht.requestFormReset = function(v) {
    o.d.r(v);
  }, Ht.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, Ht.useFormState = function(v, g, E) {
    return h.H.useFormState(v, g, E);
  }, Ht.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Ht.version = "19.3.1", Ht;
}
var av;
function Nb() {
  if (av) return _d.exports;
  av = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), _d.exports = eR(), _d.exports;
}
var _b = Nb();
const ns = /* @__PURE__ */ om(_b), lv = {
  disabled: !1
}, ys = he.createContext(null);
var tR = function(r) {
  return r.scrollTop;
}, no = "unmounted", $l = "exited", kl = "entering", qr = "entered", em = "exiting", ua = /* @__PURE__ */ (function(a) {
  Mb(r, a);
  function r(o, c) {
    var f;
    f = a.call(this, o, c) || this;
    var d = c, p = d && !d.isMounting ? o.enter : o.appear, h;
    return f.appearStatus = null, o.in ? p ? (h = $l, f.appearStatus = kl) : h = qr : o.unmountOnExit || o.mountOnEnter ? h = no : h = $l, f.state = {
      status: h
    }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var d = c.in;
    return d && f.status === no ? {
      status: $l
    } : null;
  };
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, i.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== kl && d !== qr && (f = kl) : (d === kl || d === qr) && (f = em);
    }
    this.updateStatus(!1, f);
  }, i.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, i.getTimeouts = function() {
    var c = this.props.timeout, f, d, p;
    return f = d = p = c, c != null && typeof c != "number" && (f = c.exit, d = c.enter, p = c.appear !== void 0 ? c.appear : d), {
      exit: f,
      enter: d,
      appear: p
    };
  }, i.updateStatus = function(c, f) {
    if (c === void 0 && (c = !1), f !== null)
      if (this.cancelNextCallback(), f === kl) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : ns.findDOMNode(this);
          d && tR(d);
        }
        this.performEnter(c);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === $l && this.setState({
      status: no
    });
  }, i.performEnter = function(c) {
    var f = this, d = this.props.enter, p = this.context ? this.context.isMounting : c, h = this.props.nodeRef ? [p] : [ns.findDOMNode(this), p], y = h[0], v = h[1], g = this.getTimeouts(), E = p ? g.appear : g.enter;
    if (!c && !d || lv.disabled) {
      this.safeSetState({
        status: qr
      }, function() {
        f.props.onEntered(y);
      });
      return;
    }
    this.props.onEnter(y, v), this.safeSetState({
      status: kl
    }, function() {
      f.props.onEntering(y, v), f.onTransitionEnd(E, function() {
        f.safeSetState({
          status: qr
        }, function() {
          f.props.onEntered(y, v);
        });
      });
    });
  }, i.performExit = function() {
    var c = this, f = this.props.exit, d = this.getTimeouts(), p = this.props.nodeRef ? void 0 : ns.findDOMNode(this);
    if (!f || lv.disabled) {
      this.safeSetState({
        status: $l
      }, function() {
        c.props.onExited(p);
      });
      return;
    }
    this.props.onExit(p), this.safeSetState({
      status: em
    }, function() {
      c.props.onExiting(p), c.onTransitionEnd(d.exit, function() {
        c.safeSetState({
          status: $l
        }, function() {
          c.props.onExited(p);
        });
      });
    });
  }, i.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, i.safeSetState = function(c, f) {
    f = this.setNextCallback(f), this.setState(c, f);
  }, i.setNextCallback = function(c) {
    var f = this, d = !0;
    return this.nextCallback = function(p) {
      d && (d = !1, f.nextCallback = null, c(p));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, i.onTransitionEnd = function(c, f) {
    this.setNextCallback(f);
    var d = this.props.nodeRef ? this.props.nodeRef.current : ns.findDOMNode(this), p = c == null && !this.props.addEndListener;
    if (!d || p) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var h = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], y = h[0], v = h[1];
      this.props.addEndListener(y, v);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, i.render = function() {
    var c = this.state.status;
    if (c === no)
      return null;
    var f = this.props, d = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var p = zb(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ he.createElement(ys.Provider, {
        value: null
      }, typeof d == "function" ? d(c, p) : he.cloneElement(he.Children.only(d), p))
    );
  }, r;
})(he.Component);
ua.contextType = ys;
ua.propTypes = {};
function Vr() {
}
ua.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Vr,
  onEntering: Vr,
  onEntered: Vr,
  onExit: Vr,
  onExiting: Vr,
  onExited: Vr
};
ua.UNMOUNTED = no;
ua.EXITED = $l;
ua.ENTERING = kl;
ua.ENTERED = qr;
ua.EXITING = em;
function nR(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Nm(a, r) {
  var i = function(f) {
    return r && C.isValidElement(f) ? r(f) : f;
  }, o = /* @__PURE__ */ Object.create(null);
  return a && C.Children.map(a, function(c) {
    return c;
  }).forEach(function(c) {
    o[c.key] = i(c);
  }), o;
}
function aR(a, r) {
  a = a || {}, r = r || {};
  function i(v) {
    return v in r ? r[v] : a[v];
  }
  var o = /* @__PURE__ */ Object.create(null), c = [];
  for (var f in a)
    f in r ? c.length && (o[f] = c, c = []) : c.push(f);
  var d, p = {};
  for (var h in r) {
    if (o[h])
      for (d = 0; d < o[h].length; d++) {
        var y = o[h][d];
        p[o[h][d]] = i(y);
      }
    p[h] = i(h);
  }
  for (d = 0; d < c.length; d++)
    p[c[d]] = i(c[d]);
  return p;
}
function Vl(a, r, i) {
  return i[r] != null ? i[r] : a.props[r];
}
function lR(a, r) {
  return Nm(a.children, function(i) {
    return C.cloneElement(i, {
      onExited: r.bind(null, i),
      in: !0,
      appear: Vl(i, "appear", a),
      enter: Vl(i, "enter", a),
      exit: Vl(i, "exit", a)
    });
  });
}
function rR(a, r, i) {
  var o = Nm(a.children), c = aR(r, o);
  return Object.keys(c).forEach(function(f) {
    var d = c[f];
    if (C.isValidElement(d)) {
      var p = f in r, h = f in o, y = r[f], v = C.isValidElement(y) && !y.props.in;
      h && (!p || v) ? c[f] = C.cloneElement(d, {
        onExited: i.bind(null, d),
        in: !0,
        exit: Vl(d, "exit", a),
        enter: Vl(d, "enter", a)
      }) : !h && p && !v ? c[f] = C.cloneElement(d, {
        in: !1
      }) : h && p && C.isValidElement(y) && (c[f] = C.cloneElement(d, {
        onExited: i.bind(null, d),
        in: y.props.in,
        exit: Vl(d, "exit", a),
        enter: Vl(d, "enter", a)
      }));
    }
  }), c;
}
var iR = Object.values || function(a) {
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}, oR = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, _m = /* @__PURE__ */ (function(a) {
  Mb(r, a);
  function r(o, c) {
    var f;
    f = a.call(this, o, c) || this;
    var d = f.handleExited.bind(nR(f));
    return f.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: d,
      firstRender: !0
    }, f;
  }
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, i.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(c, f) {
    var d = f.children, p = f.handleExited, h = f.firstRender;
    return {
      children: h ? lR(c, p) : rR(c, d, p),
      firstRender: !1
    };
  }, i.handleExited = function(c, f) {
    var d = Nm(this.props.children);
    c.key in d || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(p) {
      var h = ps({}, p.children);
      return delete h[c.key], {
        children: h
      };
    }));
  }, i.render = function() {
    var c = this.props, f = c.component, d = c.childFactory, p = zb(c, ["component", "childFactory"]), h = this.state.contextValue, y = iR(this.state.children).map(d);
    return delete p.appear, delete p.enter, delete p.exit, f === null ? /* @__PURE__ */ he.createElement(ys.Provider, {
      value: h
    }, y) : /* @__PURE__ */ he.createElement(ys.Provider, {
      value: h
    }, /* @__PURE__ */ he.createElement(f, p, y));
  }, r;
})(he.Component);
_m.propTypes = {};
_m.defaultProps = oR;
const Db = (a) => a.scrollTop;
function vs(a, r) {
  const {
    timeout: i,
    easing: o,
    style: c = {}
  } = a;
  return {
    duration: c.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof o == "object" ? o[r.mode] : o),
    delay: c.transitionDelay
  };
}
function uR(a) {
  return vt("MuiPaper", a);
}
dt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const sR = (a) => {
  const {
    square: r,
    elevation: i,
    variant: o,
    classes: c
  } = a, f = {
    root: ["root", o, !r && "rounded", o === "elevation" && `elevation${i}`]
  };
  return Et(f, uR, c);
}, cR = Be("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], !i.square && r.rounded, i.variant === "elevation" && r[`elevation${i.elevation}`]];
  }
})(Ct(({
  theme: a
}) => ({
  backgroundColor: (a.vars || a).palette.background.paper,
  color: (a.vars || a).palette.text.primary,
  transition: a.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: a.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Bb = /* @__PURE__ */ C.forwardRef(function(r, i) {
  var O;
  const o = bt({
    props: r,
    name: "MuiPaper"
  }), c = So(), {
    className: f,
    component: d = "div",
    elevation: p = 1,
    square: h = !1,
    variant: y = "elevation",
    ...v
  } = o, g = {
    ...o,
    component: d,
    elevation: p,
    square: h,
    variant: y
  }, E = sR(g);
  return /* @__PURE__ */ X.jsx(cR, {
    as: d,
    ownerState: g,
    className: xe(E.root, f),
    ref: i,
    ...v,
    style: {
      ...y === "elevation" && {
        "--Paper-shadow": (c.vars || c).shadows[p],
        ...c.vars && {
          "--Paper-overlay": (O = c.vars.overlays) == null ? void 0 : O[p]
        },
        ...!c.vars && c.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${nt("#fff", Jd(p))}, ${nt("#fff", Jd(p))})`
        }
      },
      ...v.style
    }
  });
});
function la(a, r) {
  const {
    className: i,
    elementType: o,
    ownerState: c,
    externalForwardedProps: f,
    internalForwardedProps: d,
    shouldForwardComponentProp: p = !1,
    ...h
  } = r, {
    component: y,
    slots: v = {
      [a]: void 0
    },
    slotProps: g = {
      [a]: void 0
    },
    ...E
  } = f, O = v[a] || o, T = GT(g[a], c), {
    props: {
      component: x,
      ...w
    },
    internalRef: M
  } = qT({
    className: i,
    ...h,
    externalForwardedProps: a === "root" ? E : void 0,
    externalSlotProps: T
  }), q = Na(M, T == null ? void 0 : T.ref, r.ref), U = a === "root" ? x || y : x, H = VT(O, {
    ...a === "root" && !y && !v[a] && d,
    ...a !== "root" && !v[a] && d,
    ...w,
    ...U && !p && {
      as: U
    },
    ...U && p && {
      component: U
    },
    ref: q
  }, c);
  return [O, H];
}
class bs {
  constructor() {
    Hr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new bs();
  }
  static use() {
    const r = pb(bs.create).current, [i, o] = C.useState(!1);
    return r.shouldMount = i, r.setShouldMount = o, C.useEffect(r.mountEffect, [i]), r;
  }
  mount() {
    return this.mounted || (this.mounted = dR(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.pulsate(...r);
    });
  }
}
function fR() {
  return bs.use();
}
function dR() {
  let a, r;
  const i = new Promise((o, c) => {
    a = o, r = c;
  });
  return i.resolve = a, i.reject = r, i;
}
function mR(a) {
  const {
    className: r,
    classes: i,
    pulsate: o = !1,
    rippleX: c,
    rippleY: f,
    rippleSize: d,
    in: p,
    onExited: h,
    timeout: y
  } = a, [v, g] = C.useState(!1), E = xe(r, i.ripple, i.rippleVisible, o && i.ripplePulsate), O = {
    width: d,
    height: d,
    top: -(d / 2) + f,
    left: -(d / 2) + c
  }, T = xe(i.child, v && i.childLeaving, o && i.childPulsate);
  return !p && !v && g(!0), C.useEffect(() => {
    if (!p && h != null) {
      const x = setTimeout(h, y);
      return () => {
        clearTimeout(x);
      };
    }
  }, [h, p, y]), /* @__PURE__ */ X.jsx("span", {
    className: E,
    style: O,
    children: /* @__PURE__ */ X.jsx("span", {
      className: T
    })
  });
}
const An = dt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), tm = 550, pR = 80, hR = go`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, gR = go`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, yR = go`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, vR = Be("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), bR = Be(mR, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${An.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${hR};
    animation-duration: ${tm}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  &.${An.ripplePulsate} {
    animation-duration: ${({
  theme: a
}) => a.transitions.duration.shorter}ms;
  }

  & .${An.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${An.childLeaving} {
    opacity: 0;
    animation-name: ${gR};
    animation-duration: ${tm}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  & .${An.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${yR};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, SR = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: c = !1,
    classes: f = {},
    className: d,
    ...p
  } = o, [h, y] = C.useState([]), v = C.useRef(0), g = C.useRef(null);
  C.useEffect(() => {
    g.current && (g.current(), g.current = null);
  }, [h]);
  const E = C.useRef(!1), O = $T(), T = C.useRef(null), x = C.useRef(null), w = C.useCallback((H) => {
    const {
      pulsate: N,
      rippleX: Q,
      rippleY: G,
      rippleSize: Z,
      cb: J
    } = H;
    y((S) => [...S, /* @__PURE__ */ X.jsx(bR, {
      classes: {
        ripple: xe(f.ripple, An.ripple),
        rippleVisible: xe(f.rippleVisible, An.rippleVisible),
        ripplePulsate: xe(f.ripplePulsate, An.ripplePulsate),
        child: xe(f.child, An.child),
        childLeaving: xe(f.childLeaving, An.childLeaving),
        childPulsate: xe(f.childPulsate, An.childPulsate)
      },
      timeout: tm,
      pulsate: N,
      rippleX: Q,
      rippleY: G,
      rippleSize: Z
    }, v.current)]), v.current += 1, g.current = J;
  }, [f]), M = C.useCallback((H = {}, N = {}, Q = () => {
  }) => {
    const {
      pulsate: G = !1,
      center: Z = c || N.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = N;
    if ((H == null ? void 0 : H.type) === "mousedown" && E.current) {
      E.current = !1;
      return;
    }
    (H == null ? void 0 : H.type) === "touchstart" && (E.current = !0);
    const S = J ? null : x.current, $ = S ? S.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ee, ae, le;
    if (Z || H === void 0 || H.clientX === 0 && H.clientY === 0 || !H.clientX && !H.touches)
      ee = Math.round($.width / 2), ae = Math.round($.height / 2);
    else {
      const {
        clientX: F,
        clientY: k
      } = H.touches && H.touches.length > 0 ? H.touches[0] : H;
      ee = Math.round(F - $.left), ae = Math.round(k - $.top);
    }
    if (Z)
      le = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), le % 2 === 0 && (le += 1);
    else {
      const F = Math.max(Math.abs((S ? S.clientWidth : 0) - ee), ee) * 2 + 2, k = Math.max(Math.abs((S ? S.clientHeight : 0) - ae), ae) * 2 + 2;
      le = Math.sqrt(F ** 2 + k ** 2);
    }
    H != null && H.touches ? T.current === null && (T.current = () => {
      w({
        pulsate: G,
        rippleX: ee,
        rippleY: ae,
        rippleSize: le,
        cb: Q
      });
    }, O.start(pR, () => {
      T.current && (T.current(), T.current = null);
    })) : w({
      pulsate: G,
      rippleX: ee,
      rippleY: ae,
      rippleSize: le,
      cb: Q
    });
  }, [c, w, O]), q = C.useCallback(() => {
    M({}, {
      pulsate: !0
    });
  }, [M]), U = C.useCallback((H, N) => {
    if (O.clear(), (H == null ? void 0 : H.type) === "touchend" && T.current) {
      T.current(), T.current = null, O.start(0, () => {
        U(H, N);
      });
      return;
    }
    T.current = null, y((Q) => Q.length > 0 ? Q.slice(1) : Q), g.current = N;
  }, [O]);
  return C.useImperativeHandle(i, () => ({
    pulsate: q,
    start: M,
    stop: U
  }), [q, M, U]), /* @__PURE__ */ X.jsx(vR, {
    className: xe(An.root, f.root, d),
    ref: x,
    ...p,
    children: /* @__PURE__ */ X.jsx(_m, {
      component: null,
      exit: !0,
      children: h
    })
  });
});
function CR(a) {
  return vt("MuiButtonBase", a);
}
const ER = dt("MuiButtonBase", ["root", "disabled", "focusVisible"]), xR = (a) => {
  const {
    disabled: r,
    focusVisible: i,
    focusVisibleClassName: o,
    classes: c
  } = a, d = Et({
    root: ["root", r && "disabled", i && "focusVisible"]
  }, CR, c);
  return i && o && (d.root += ` ${o}`), d;
}, TR = Be("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ER.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), fo = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: c,
    centerRipple: f = !1,
    children: d,
    className: p,
    component: h = "button",
    disabled: y = !1,
    disableRipple: v = !1,
    disableTouchRipple: g = !1,
    focusRipple: E = !1,
    focusVisibleClassName: O,
    LinkComponent: T = "a",
    onBlur: x,
    onClick: w,
    onContextMenu: M,
    onDragLeave: q,
    onFocus: U,
    onFocusVisible: H,
    onKeyDown: N,
    onKeyUp: Q,
    onMouseDown: G,
    onMouseLeave: Z,
    onMouseUp: J,
    onTouchEnd: S,
    onTouchMove: $,
    onTouchStart: ee,
    tabIndex: ae = 0,
    TouchRippleProps: le,
    touchRippleRef: F,
    type: k,
    ...te
  } = o, W = C.useRef(null), ne = fR(), ce = Na(ne.ref, F), [ye, Oe] = C.useState(!1);
  y && ye && Oe(!1), C.useImperativeHandle(c, () => ({
    focusVisible: () => {
      Oe(!0), W.current.focus();
    }
  }), []);
  const Le = ne.shouldMount && !v && !y;
  C.useEffect(() => {
    ye && E && !v && ne.pulsate();
  }, [v, E, ye, ne]);
  const A = Aa(ne, "start", G, g), Y = Aa(ne, "stop", M, g), re = Aa(ne, "stop", q, g), ue = Aa(ne, "stop", J, g), ge = Aa(ne, "stop", (be) => {
    ye && be.preventDefault(), Z && Z(be);
  }, g), Se = Aa(ne, "start", ee, g), we = Aa(ne, "stop", S, g), se = Aa(ne, "stop", $, g), pe = Aa(ne, "stop", (be) => {
    V0(be.target) || Oe(!1), x && x(be);
  }, !1), Xt = Qr((be) => {
    W.current || (W.current = be.currentTarget), V0(be.target) && (Oe(!0), H && H(be)), U && U(be);
  }), kn = () => {
    const be = W.current;
    return h && h !== "button" && !(be.tagName === "A" && be.href);
  }, Yn = Qr((be) => {
    E && !be.repeat && ye && be.key === " " && ne.stop(be, () => {
      ne.start(be);
    }), be.target === be.currentTarget && kn() && be.key === " " && be.preventDefault(), N && N(be), be.target === be.currentTarget && kn() && be.key === "Enter" && !y && (be.preventDefault(), w && w(be));
  }), kt = Qr((be) => {
    E && be.key === " " && ye && !be.defaultPrevented && ne.stop(be, () => {
      ne.pulsate(be);
    }), Q && Q(be), w && be.target === be.currentTarget && kn() && be.key === " " && !be.defaultPrevented && w(be);
  });
  let Je = h;
  Je === "button" && (te.href || te.to) && (Je = T);
  const Ee = {};
  Je === "button" ? (Ee.type = k === void 0 ? "button" : k, Ee.disabled = y) : (!te.href && !te.to && (Ee.role = "button"), y && (Ee["aria-disabled"] = y));
  const xt = Na(i, W), Qt = {
    ...o,
    centerRipple: f,
    component: h,
    disabled: y,
    disableRipple: v,
    disableTouchRipple: g,
    focusRipple: E,
    tabIndex: ae,
    focusVisible: ye
  }, gn = xR(Qt);
  return /* @__PURE__ */ X.jsxs(TR, {
    as: Je,
    className: xe(gn.root, p),
    ownerState: Qt,
    onBlur: pe,
    onClick: w,
    onContextMenu: Y,
    onFocus: Xt,
    onKeyDown: Yn,
    onKeyUp: kt,
    onMouseDown: A,
    onMouseLeave: ge,
    onMouseUp: ue,
    onDragLeave: re,
    onTouchEnd: we,
    onTouchMove: se,
    onTouchStart: Se,
    ref: xt,
    tabIndex: y ? -1 : ae,
    type: k,
    ...Ee,
    ...te,
    children: [d, Le ? /* @__PURE__ */ X.jsx(SR, {
      ref: ce,
      center: f,
      ...le
    }) : null]
  });
});
function Aa(a, r, i, o = !1) {
  return Qr((c) => (i && i(c), o || a[r](c), !0));
}
function RR(a) {
  return typeof a.main == "string";
}
function OR(a, r = []) {
  if (!RR(a))
    return !1;
  for (const i of r)
    if (!a.hasOwnProperty(i) || typeof a[i] != "string")
      return !1;
  return !0;
}
function jn(a = []) {
  return ([, r]) => r && OR(r, a);
}
function wR(a) {
  return vt("MuiCircularProgress", a);
}
dt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const ol = 44, nm = go`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, am = go`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, AR = typeof nm != "string" ? gm`
        animation: ${nm} 1.4s linear infinite;
      ` : null, zR = typeof am != "string" ? gm`
        animation: ${am} 1.4s ease-in-out infinite;
      ` : null, MR = (a) => {
  const {
    classes: r,
    variant: i,
    color: o,
    disableShrink: c
  } = a, f = {
    root: ["root", i, `color${ie(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ie(i)}`, c && "circleDisableShrink"]
  };
  return Et(f, wR, r);
}, NR = Be("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`color${ie(i.color)}`]];
  }
})(Ct(({
  theme: a
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: AR || {
      animation: `${nm} 1.4s linear infinite`
    }
  }, ...Object.entries(a.palette).filter(jn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  }))]
}))), _R = Be("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (a, r) => r.svg
})({
  display: "block"
  // Keeps the progress centered
}), DR = Be("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.circle, r[`circle${ie(i.variant)}`], i.disableShrink && r.circleDisableShrink];
  }
})(Ct(({
  theme: a
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" && !r.disableShrink,
    style: zR || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${am} 1.4s ease-in-out infinite`
    }
  }]
}))), Dm = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiCircularProgress"
  }), {
    className: c,
    color: f = "primary",
    disableShrink: d = !1,
    size: p = 40,
    style: h,
    thickness: y = 3.6,
    value: v = 0,
    variant: g = "indeterminate",
    ...E
  } = o, O = {
    ...o,
    color: f,
    disableShrink: d,
    size: p,
    thickness: y,
    value: v,
    variant: g
  }, T = MR(O), x = {}, w = {}, M = {};
  if (g === "determinate") {
    const q = 2 * Math.PI * ((ol - y) / 2);
    x.strokeDasharray = q.toFixed(3), M["aria-valuenow"] = Math.round(v), x.strokeDashoffset = `${((100 - v) / 100 * q).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ X.jsx(NR, {
    className: xe(T.root, c),
    style: {
      width: p,
      height: p,
      ...w,
      ...h
    },
    ownerState: O,
    ref: i,
    role: "progressbar",
    ...M,
    ...E,
    children: /* @__PURE__ */ X.jsx(_R, {
      className: T.svg,
      ownerState: O,
      viewBox: `${ol / 2} ${ol / 2} ${ol} ${ol}`,
      children: /* @__PURE__ */ X.jsx(DR, {
        className: T.circle,
        style: x,
        ownerState: O,
        cx: ol,
        cy: ol,
        r: (ol - y) / 2,
        fill: "none",
        strokeWidth: y
      })
    })
  });
});
function BR(a) {
  return vt("MuiIconButton", a);
}
const rv = dt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), UR = (a) => {
  const {
    classes: r,
    disabled: i,
    color: o,
    edge: c,
    size: f,
    loading: d
  } = a, p = {
    root: ["root", d && "loading", i && "disabled", o !== "default" && `color${ie(o)}`, c && `edge${ie(c)}`, `size${ie(f)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Et(p, BR, r);
}, HR = Be(fo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.loading && r.loading, i.color !== "default" && r[`color${ie(i.color)}`], i.edge && r[`edge${ie(i.edge)}`], r[`size${ie(i.size)}`]];
  }
})(Ct(({
  theme: a
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: a.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (a.vars || a).palette.action.active,
  transition: a.transitions.create("background-color", {
    duration: a.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": a.vars ? `rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})` : nt(a.palette.action.active, a.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ct(({
  theme: a
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(a.palette).filter(jn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette).filter(jn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": a.vars ? `rgba(${(a.vars || a).palette[r].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : nt((a.vars || a).palette[r].main, a.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: a.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: a.typography.pxToRem(28)
    }
  }],
  [`&.${rv.disabled}`]: {
    backgroundColor: "transparent",
    color: (a.vars || a).palette.action.disabled
  },
  [`&.${rv.loading}`]: {
    color: "transparent"
  }
}))), LR = Be("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (a, r) => r.loadingIndicator
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (a.vars || a).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), jR = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: c = !1,
    children: f,
    className: d,
    color: p = "default",
    disabled: h = !1,
    disableFocusRipple: y = !1,
    size: v = "medium",
    id: g,
    loading: E = null,
    loadingIndicator: O,
    ...T
  } = o, x = Rm(g), w = O ?? /* @__PURE__ */ X.jsx(Dm, {
    "aria-labelledby": x,
    color: "inherit",
    size: 16
  }), M = {
    ...o,
    edge: c,
    color: p,
    disabled: h,
    disableFocusRipple: y,
    loading: E,
    loadingIndicator: w,
    size: v
  }, q = UR(M);
  return /* @__PURE__ */ X.jsxs(HR, {
    id: E ? x : g,
    className: xe(q.root, d),
    centerRipple: !0,
    focusRipple: !y,
    disabled: h || E,
    ref: i,
    ...T,
    ownerState: M,
    children: [typeof E == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ X.jsx("span", {
      className: q.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ X.jsx(LR, {
        className: q.loadingIndicator,
        ownerState: M,
        children: E && w
      })
    }), f]
  });
});
function $R(a) {
  return vt("MuiTypography", a);
}
dt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const kR = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, YR = I2(), VR = (a) => {
  const {
    align: r,
    gutterBottom: i,
    noWrap: o,
    paragraph: c,
    variant: f,
    classes: d
  } = a, p = {
    root: ["root", f, a.align !== "inherit" && `align${ie(r)}`, i && "gutterBottom", o && "noWrap", c && "paragraph"]
  };
  return Et(p, $R, d);
}, qR = Be("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.variant && r[i.variant], i.align !== "inherit" && r[`align${ie(i.align)}`], i.noWrap && r.noWrap, i.gutterBottom && r.gutterBottom, i.paragraph && r.paragraph];
  }
})(Ct(({
  theme: a
}) => {
  var r;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(a.typography).filter(([i, o]) => i !== "inherit" && o && typeof o == "object").map(([i, o]) => ({
      props: {
        variant: i
      },
      style: o
    })), ...Object.entries(a.palette).filter(jn()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        color: (a.vars || a).palette[i].main
      }
    })), ...Object.entries(((r = a.palette) == null ? void 0 : r.text) || {}).filter(([, i]) => typeof i == "string").map(([i]) => ({
      props: {
        color: `text${ie(i)}`
      },
      style: {
        color: (a.vars || a).palette.text[i]
      }
    })), {
      props: ({
        ownerState: i
      }) => i.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), iv = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, wn = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const {
    color: o,
    ...c
  } = bt({
    props: r,
    name: "MuiTypography"
  }), f = !kR[o], d = YR({
    ...c,
    ...f && {
      color: o
    }
  }), {
    align: p = "inherit",
    className: h,
    component: y,
    gutterBottom: v = !1,
    noWrap: g = !1,
    paragraph: E = !1,
    variant: O = "body1",
    variantMapping: T = iv,
    ...x
  } = d, w = {
    ...d,
    align: p,
    color: o,
    className: h,
    component: y,
    gutterBottom: v,
    noWrap: g,
    paragraph: E,
    variant: O,
    variantMapping: T
  }, M = y || (E ? "p" : T[O] || iv[O]) || "span", q = VR(w);
  return /* @__PURE__ */ X.jsx(qR, {
    as: M,
    ref: i,
    className: xe(q.root, h),
    ...x,
    ownerState: w,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...x.style
    }
  });
});
function GR(a) {
  return typeof a == "function" ? a() : a;
}
const XR = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const {
    children: o,
    container: c,
    disablePortal: f = !1
  } = r, [d, p] = C.useState(null), h = Na(/* @__PURE__ */ C.isValidElement(o) ? Ls(o) : null, i);
  if (Zr(() => {
    f || p(GR(c) || document.body);
  }, [c, f]), Zr(() => {
    if (d && !f)
      return j0(i, d), () => {
        j0(i, null);
      };
  }, [i, d, f]), f) {
    if (/* @__PURE__ */ C.isValidElement(o)) {
      const y = {
        ref: h
      };
      return /* @__PURE__ */ C.cloneElement(o, y);
    }
    return o;
  }
  return d && /* @__PURE__ */ _b.createPortal(o, d);
}), QR = Co(/* @__PURE__ */ X.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function KR(a) {
  return vt("MuiChip", a);
}
const Ne = dt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), ZR = (a) => {
  const {
    classes: r,
    disabled: i,
    size: o,
    color: c,
    iconColor: f,
    onDelete: d,
    clickable: p,
    variant: h
  } = a, y = {
    root: ["root", h, i && "disabled", `size${ie(o)}`, `color${ie(c)}`, p && "clickable", p && `clickableColor${ie(c)}`, d && "deletable", d && `deletableColor${ie(c)}`, `${h}${ie(c)}`],
    label: ["label", `label${ie(o)}`],
    avatar: ["avatar", `avatar${ie(o)}`, `avatarColor${ie(c)}`],
    icon: ["icon", `icon${ie(o)}`, `iconColor${ie(f)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ie(o)}`, `deleteIconColor${ie(c)}`, `deleteIcon${ie(h)}Color${ie(c)}`]
  };
  return Et(y, KR, r);
}, IR = Be("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a, {
      color: o,
      iconColor: c,
      clickable: f,
      onDelete: d,
      size: p,
      variant: h
    } = i;
    return [{
      [`& .${Ne.avatar}`]: r.avatar
    }, {
      [`& .${Ne.avatar}`]: r[`avatar${ie(p)}`]
    }, {
      [`& .${Ne.avatar}`]: r[`avatarColor${ie(o)}`]
    }, {
      [`& .${Ne.icon}`]: r.icon
    }, {
      [`& .${Ne.icon}`]: r[`icon${ie(p)}`]
    }, {
      [`& .${Ne.icon}`]: r[`iconColor${ie(c)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: r.deleteIcon
    }, {
      [`& .${Ne.deleteIcon}`]: r[`deleteIcon${ie(p)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: r[`deleteIconColor${ie(o)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: r[`deleteIcon${ie(h)}Color${ie(o)}`]
    }, r.root, r[`size${ie(p)}`], r[`color${ie(o)}`], f && r.clickable, f && o !== "default" && r[`clickableColor${ie(o)})`], d && r.deletable, d && o !== "default" && r[`deletableColor${ie(o)}`], r[h], r[`${h}${ie(o)}`]];
  }
})(Ct(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? a.palette.grey[700] : a.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: a.typography.fontFamily,
    fontSize: a.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (a.vars || a).palette.text.primary,
    backgroundColor: (a.vars || a).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: a.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Ne.disabled}`]: {
      opacity: (a.vars || a).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ne.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: a.vars ? a.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: a.typography.pxToRem(12)
    },
    [`& .${Ne.avatarColorPrimary}`]: {
      color: (a.vars || a).palette.primary.contrastText,
      backgroundColor: (a.vars || a).palette.primary.dark
    },
    [`& .${Ne.avatarColorSecondary}`]: {
      color: (a.vars || a).palette.secondary.contrastText,
      backgroundColor: (a.vars || a).palette.secondary.dark
    },
    [`& .${Ne.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: a.typography.pxToRem(10)
    },
    [`& .${Ne.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Ne.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / 0.26)` : nt(a.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / 0.4)` : nt(a.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Ne.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Ne.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(a.palette).filter(jn(["contrastText"])).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        backgroundColor: (a.vars || a).palette[i].main,
        color: (a.vars || a).palette[i].contrastText,
        [`& .${Ne.deleteIcon}`]: {
          color: a.vars ? `rgba(${a.vars.palette[i].contrastTextChannel} / 0.7)` : nt(a.palette[i].contrastText, 0.7),
          "&:hover, &:active": {
            color: (a.vars || a).palette[i].contrastText
          }
        }
      }
    })), {
      props: (i) => i.iconColor === i.color,
      style: {
        [`& .${Ne.icon}`]: {
          color: a.vars ? a.vars.palette.Chip.defaultIconColor : r
        }
      }
    }, {
      props: (i) => i.iconColor === i.color && i.color !== "default",
      style: {
        [`& .${Ne.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: a.vars ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))` : nt(a.palette.action.selected, a.palette.action.selectedOpacity + a.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(a.palette).filter(jn(["dark"])).map(([i]) => ({
      props: {
        color: i,
        onDelete: !0
      },
      style: {
        [`&.${Ne.focusVisible}`]: {
          background: (a.vars || a).palette[i].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: a.vars ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))` : nt(a.palette.action.selected, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity)
        },
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: a.vars ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))` : nt(a.palette.action.selected, a.palette.action.selectedOpacity + a.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (a.vars || a).shadows[1]
        }
      }
    }, ...Object.entries(a.palette).filter(jn(["dark"])).map(([i]) => ({
      props: {
        color: i,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Ne.focusVisible}`]: {
          backgroundColor: (a.vars || a).palette[i].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: a.vars ? `1px solid ${a.vars.palette.Chip.defaultBorder}` : `1px solid ${a.palette.mode === "light" ? a.palette.grey[400] : a.palette.grey[700]}`,
        [`&.${Ne.clickable}:hover`]: {
          backgroundColor: (a.vars || a).palette.action.hover
        },
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: (a.vars || a).palette.action.focus
        },
        [`& .${Ne.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Ne.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ne.icon}`]: {
          marginLeft: 4
        },
        [`& .${Ne.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ne.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Ne.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(a.palette).filter(jn()).map(([i]) => ({
      props: {
        variant: "outlined",
        color: i
      },
      style: {
        color: (a.vars || a).palette[i].main,
        border: `1px solid ${a.vars ? `rgba(${a.vars.palette[i].mainChannel} / 0.7)` : nt(a.palette[i].main, 0.7)}`,
        [`&.${Ne.clickable}:hover`]: {
          backgroundColor: a.vars ? `rgba(${a.vars.palette[i].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : nt(a.palette[i].main, a.palette.action.hoverOpacity)
        },
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: a.vars ? `rgba(${a.vars.palette[i].mainChannel} / ${a.vars.palette.action.focusOpacity})` : nt(a.palette[i].main, a.palette.action.focusOpacity)
        },
        [`& .${Ne.deleteIcon}`]: {
          color: a.vars ? `rgba(${a.vars.palette[i].mainChannel} / 0.7)` : nt(a.palette[i].main, 0.7),
          "&:hover, &:active": {
            color: (a.vars || a).palette[i].main
          }
        }
      }
    }))]
  };
})), PR = Be("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a, {
      size: o
    } = i;
    return [r.label, r[`label${ie(o)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function ov(a) {
  return a.key === "Backspace" || a.key === "Delete";
}
const uv = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiChip"
  }), {
    avatar: c,
    className: f,
    clickable: d,
    color: p = "default",
    component: h,
    deleteIcon: y,
    disabled: v = !1,
    icon: g,
    label: E,
    onClick: O,
    onDelete: T,
    onKeyDown: x,
    onKeyUp: w,
    size: M = "medium",
    variant: q = "filled",
    tabIndex: U,
    skipFocusWhenDisabled: H = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...N
  } = o, Q = C.useRef(null), G = Na(Q, i), Z = (ne) => {
    ne.stopPropagation(), T && T(ne);
  }, J = (ne) => {
    ne.currentTarget === ne.target && ov(ne) && ne.preventDefault(), x && x(ne);
  }, S = (ne) => {
    ne.currentTarget === ne.target && T && ov(ne) && T(ne), w && w(ne);
  }, $ = d !== !1 && O ? !0 : d, ee = $ || T ? fo : h || "div", ae = {
    ...o,
    component: ee,
    disabled: v,
    size: M,
    color: p,
    iconColor: /* @__PURE__ */ C.isValidElement(g) && g.props.color || p,
    onDelete: !!T,
    clickable: $,
    variant: q
  }, le = ZR(ae), F = ee === fo ? {
    component: h || "div",
    focusVisibleClassName: le.focusVisible,
    ...T && {
      disableRipple: !0
    }
  } : {};
  let k = null;
  T && (k = y && /* @__PURE__ */ C.isValidElement(y) ? /* @__PURE__ */ C.cloneElement(y, {
    className: xe(y.props.className, le.deleteIcon),
    onClick: Z
  }) : /* @__PURE__ */ X.jsx(QR, {
    className: xe(le.deleteIcon),
    onClick: Z
  }));
  let te = null;
  c && /* @__PURE__ */ C.isValidElement(c) && (te = /* @__PURE__ */ C.cloneElement(c, {
    className: xe(le.avatar, c.props.className)
  }));
  let W = null;
  return g && /* @__PURE__ */ C.isValidElement(g) && (W = /* @__PURE__ */ C.cloneElement(g, {
    className: xe(le.icon, g.props.className)
  })), /* @__PURE__ */ X.jsxs(IR, {
    as: ee,
    className: xe(le.root, f),
    disabled: $ && v ? !0 : void 0,
    onClick: O,
    onKeyDown: J,
    onKeyUp: S,
    ref: G,
    tabIndex: H && v ? -1 : U,
    ownerState: ae,
    ...F,
    ...N,
    children: [te || W, /* @__PURE__ */ X.jsx(PR, {
      className: xe(le.label),
      ownerState: ae,
      children: E
    }), k]
  });
}), JR = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, FR = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = So(), c = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: f,
    appear: d = !0,
    children: p,
    easing: h,
    in: y,
    onEnter: v,
    onEntered: g,
    onEntering: E,
    onExit: O,
    onExited: T,
    onExiting: x,
    style: w,
    timeout: M = c,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: q = ua,
    ...U
  } = r, H = C.useRef(null), N = Na(H, Ls(p), i), Q = (le) => (F) => {
    if (le) {
      const k = H.current;
      F === void 0 ? le(k) : le(k, F);
    }
  }, G = Q(E), Z = Q((le, F) => {
    Db(le);
    const k = vs({
      style: w,
      timeout: M,
      easing: h
    }, {
      mode: "enter"
    });
    le.style.webkitTransition = o.transitions.create("opacity", k), le.style.transition = o.transitions.create("opacity", k), v && v(le, F);
  }), J = Q(g), S = Q(x), $ = Q((le) => {
    const F = vs({
      style: w,
      timeout: M,
      easing: h
    }, {
      mode: "exit"
    });
    le.style.webkitTransition = o.transitions.create("opacity", F), le.style.transition = o.transitions.create("opacity", F), O && O(le);
  }), ee = Q(T), ae = (le) => {
    f && f(H.current, le);
  };
  return /* @__PURE__ */ X.jsx(q, {
    appear: d,
    in: y,
    nodeRef: H,
    onEnter: Z,
    onEntered: J,
    onEntering: G,
    onExit: $,
    onExited: ee,
    onExiting: S,
    addEndListener: ae,
    timeout: M,
    ...U,
    children: (le, {
      ownerState: F,
      ...k
    }) => /* @__PURE__ */ C.cloneElement(p, {
      style: {
        opacity: 0,
        visibility: le === "exited" && !y ? "hidden" : void 0,
        ...JR[le],
        ...w,
        ...p.props.style
      },
      ref: N,
      ...k
    })
  });
});
function WR(a) {
  return vt("MuiBackdrop", a);
}
dt("MuiBackdrop", ["root", "invisible"]);
const e5 = (a) => {
  const {
    classes: r,
    invisible: i
  } = a;
  return Et({
    root: ["root", i && "invisible"]
  }, WR, r);
}, t5 = Be("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.invisible && r.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), n5 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: f,
    component: d = "div",
    invisible: p = !1,
    open: h,
    components: y = {},
    componentsProps: v = {},
    slotProps: g = {},
    slots: E = {},
    TransitionComponent: O,
    transitionDuration: T,
    ...x
  } = o, w = {
    ...o,
    component: d,
    invisible: p
  }, M = e5(w), q = {
    transition: O,
    root: y.Root,
    ...E
  }, U = {
    ...v,
    ...g
  }, H = {
    slots: q,
    slotProps: U
  }, [N, Q] = la("root", {
    elementType: t5,
    externalForwardedProps: H,
    className: xe(M.root, f),
    ownerState: w
  }), [G, Z] = la("transition", {
    elementType: FR,
    externalForwardedProps: H,
    ownerState: w
  });
  return /* @__PURE__ */ X.jsx(G, {
    in: h,
    timeout: T,
    ...x,
    ...Z,
    children: /* @__PURE__ */ X.jsx(N, {
      "aria-hidden": !0,
      ...Q,
      classes: M,
      ref: i,
      children: c
    })
  });
});
function a5(a) {
  const {
    badgeContent: r,
    invisible: i = !1,
    max: o = 99,
    showZero: c = !1
  } = a, f = hb({
    badgeContent: r,
    max: o
  });
  let d = i;
  i === !1 && r === 0 && !c && (d = !0);
  const {
    badgeContent: p,
    max: h = o
  } = d ? f : a, y = p && Number(p) > h ? `${h}+` : p;
  return {
    badgeContent: p,
    invisible: d,
    max: h,
    displayValue: y
  };
}
function l5(a) {
  return vt("MuiBadge", a);
}
const ul = dt("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), Dd = 10, Bd = 4, r5 = (a) => {
  const {
    color: r,
    anchorOrigin: i,
    invisible: o,
    overlap: c,
    variant: f,
    classes: d = {}
  } = a, p = {
    root: ["root"],
    badge: ["badge", f, o && "invisible", `anchorOrigin${ie(i.vertical)}${ie(i.horizontal)}`, `anchorOrigin${ie(i.vertical)}${ie(i.horizontal)}${ie(c)}`, `overlap${ie(c)}`, r !== "default" && `color${ie(r)}`]
  };
  return Et(p, l5, d);
}, i5 = Be("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), o5 = Be("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.badge, r[i.variant], r[`anchorOrigin${ie(i.anchorOrigin.vertical)}${ie(i.anchorOrigin.horizontal)}${ie(i.overlap)}`], i.color !== "default" && r[`color${ie(i.color)}`], i.invisible && r.invisible];
  }
})(Ct(({
  theme: a
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: a.typography.fontFamily,
  fontWeight: a.typography.fontWeightMedium,
  fontSize: a.typography.pxToRem(12),
  minWidth: Dd * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Dd * 2,
  borderRadius: Dd,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: a.transitions.create("transform", {
    easing: a.transitions.easing.easeInOut,
    duration: a.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(a.palette).filter(jn(["contrastText"])).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      backgroundColor: (a.vars || a).palette[r].main,
      color: (a.vars || a).palette[r].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: Bd,
      height: Bd * 2,
      minWidth: Bd * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "right" && r.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "right" && r.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "left" && r.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "left" && r.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "right" && r.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "right" && r.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "left" && r.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "left" && r.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${ul.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: a.transitions.create("transform", {
        easing: a.transitions.easing.easeInOut,
        duration: a.transitions.duration.leavingScreen
      })
    }
  }]
})));
function sv(a) {
  return {
    vertical: (a == null ? void 0 : a.vertical) ?? "top",
    horizontal: (a == null ? void 0 : a.horizontal) ?? "right"
  };
}
const u5 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiBadge"
  }), {
    anchorOrigin: c,
    className: f,
    classes: d,
    component: p,
    components: h = {},
    componentsProps: y = {},
    children: v,
    overlap: g = "rectangular",
    color: E = "default",
    invisible: O = !1,
    max: T = 99,
    badgeContent: x,
    slots: w,
    slotProps: M,
    showZero: q = !1,
    variant: U = "standard",
    ...H
  } = o, {
    badgeContent: N,
    invisible: Q,
    max: G,
    displayValue: Z
  } = a5({
    max: T,
    invisible: O,
    badgeContent: x,
    showZero: q
  }), J = hb({
    anchorOrigin: sv(c),
    color: E,
    overlap: g,
    variant: U,
    badgeContent: x
  }), S = Q || N == null && U !== "dot", {
    color: $ = E,
    overlap: ee = g,
    anchorOrigin: ae,
    variant: le = U
  } = S ? J : o, F = sv(ae), k = le !== "dot" ? Z : void 0, te = {
    ...o,
    badgeContent: N,
    invisible: S,
    max: G,
    displayValue: k,
    showZero: q,
    anchorOrigin: F,
    color: $,
    overlap: ee,
    variant: le
  }, W = r5(te), ne = {
    slots: {
      root: (w == null ? void 0 : w.root) ?? h.Root,
      badge: (w == null ? void 0 : w.badge) ?? h.Badge
    },
    slotProps: {
      root: (M == null ? void 0 : M.root) ?? y.root,
      badge: (M == null ? void 0 : M.badge) ?? y.badge
    }
  }, [ce, ye] = la("root", {
    elementType: i5,
    externalForwardedProps: {
      ...ne,
      ...H
    },
    ownerState: te,
    className: xe(W.root, f),
    ref: i,
    additionalProps: {
      as: p
    }
  }), [Oe, Le] = la("badge", {
    elementType: o5,
    externalForwardedProps: ne,
    ownerState: te,
    className: W.badge
  });
  return /* @__PURE__ */ X.jsxs(ce, {
    ...ye,
    children: [v, /* @__PURE__ */ X.jsx(Oe, {
      ...Le,
      children: k
    })]
  });
}), s5 = dt("MuiBox", ["root"]), c5 = co(), za = hT({
  themeId: ra,
  defaultTheme: c5,
  defaultClassName: s5.root,
  generateClassName: ob.generate
});
function f5(a) {
  return vt("MuiButton", a);
}
const jl = dt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), d5 = /* @__PURE__ */ C.createContext({}), m5 = /* @__PURE__ */ C.createContext(void 0), p5 = (a) => {
  const {
    color: r,
    disableElevation: i,
    fullWidth: o,
    size: c,
    variant: f,
    loading: d,
    loadingPosition: p,
    classes: h
  } = a, y = {
    root: ["root", d && "loading", f, `${f}${ie(r)}`, `size${ie(c)}`, `${f}Size${ie(c)}`, `color${ie(r)}`, i && "disableElevation", o && "fullWidth", d && `loadingPosition${ie(p)}`],
    startIcon: ["icon", "startIcon", `iconSize${ie(c)}`],
    endIcon: ["icon", "endIcon", `iconSize${ie(c)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, v = Et(y, f5, h);
  return {
    ...h,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...v
  };
}, Ub = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], h5 = Be(fo, {
  shouldForwardProp: (a) => js(a) || a === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`${i.variant}${ie(i.color)}`], r[`size${ie(i.size)}`], r[`${i.variant}Size${ie(i.size)}`], i.color === "inherit" && r.colorInherit, i.disableElevation && r.disableElevation, i.fullWidth && r.fullWidth, i.loading && r.loading];
  }
})(Ct(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? a.palette.grey[300] : a.palette.grey[800], i = a.palette.mode === "light" ? a.palette.grey.A100 : a.palette.grey[700];
  return {
    ...a.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (a.vars || a).shape.borderRadius,
    transition: a.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: a.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${jl.disabled}`]: {
      color: (a.vars || a).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (a.vars || a).shadows[2],
        "&:hover": {
          boxShadow: (a.vars || a).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (a.vars || a).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (a.vars || a).shadows[8]
        },
        [`&.${jl.focusVisible}`]: {
          boxShadow: (a.vars || a).shadows[6]
        },
        [`&.${jl.disabled}`]: {
          color: (a.vars || a).palette.action.disabled,
          boxShadow: (a.vars || a).shadows[0],
          backgroundColor: (a.vars || a).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${jl.disabled}`]: {
          border: `1px solid ${(a.vars || a).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(a.palette).filter(jn()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (a.vars || a).palette[o].main,
        "--variant-outlinedColor": (a.vars || a).palette[o].main,
        "--variant-outlinedBorder": a.vars ? `rgba(${a.vars.palette[o].mainChannel} / 0.5)` : nt(a.palette[o].main, 0.5),
        "--variant-containedColor": (a.vars || a).palette[o].contrastText,
        "--variant-containedBg": (a.vars || a).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (a.vars || a).palette[o].dark,
            "--variant-textBg": a.vars ? `rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : nt(a.palette[o].main, a.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (a.vars || a).palette[o].main,
            "--variant-outlinedBg": a.vars ? `rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : nt(a.palette[o].main, a.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": a.vars ? a.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": a.vars ? a.vars.palette.Button.inheritContainedHoverBg : i,
            "--variant-textBg": a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : nt(a.palette.text.primary, a.palette.action.hoverOpacity),
            "--variant-outlinedBg": a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : nt(a.palette.text.primary, a.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${jl.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${jl.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: a.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: a.transitions.duration.short
        }),
        [`&.${jl.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), g5 = Be("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.startIcon, i.loading && r.startIconLoadingStart, r[`iconSize${ie(i.size)}`]];
  }
})(({
  theme: a
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: a.transitions.create(["opacity"], {
        duration: a.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Ub]
})), y5 = Be("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.endIcon, i.loading && r.endIconLoadingEnd, r[`iconSize${ie(i.size)}`]];
  }
})(({
  theme: a
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: a.transitions.create(["opacity"], {
        duration: a.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Ub]
})), v5 = Be("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (a, r) => r.loadingIndicator
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (a.vars || a).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), cv = Be("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (a, r) => r.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), as = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = C.useContext(d5), c = C.useContext(m5), f = so(o, r), d = bt({
    props: f,
    name: "MuiButton"
  }), {
    children: p,
    color: h = "primary",
    component: y = "button",
    className: v,
    disabled: g = !1,
    disableElevation: E = !1,
    disableFocusRipple: O = !1,
    endIcon: T,
    focusVisibleClassName: x,
    fullWidth: w = !1,
    id: M,
    loading: q = null,
    loadingIndicator: U,
    loadingPosition: H = "center",
    size: N = "medium",
    startIcon: Q,
    type: G,
    variant: Z = "text",
    ...J
  } = d, S = Rm(M), $ = U ?? /* @__PURE__ */ X.jsx(Dm, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), ee = {
    ...d,
    color: h,
    component: y,
    disabled: g,
    disableElevation: E,
    disableFocusRipple: O,
    fullWidth: w,
    loading: q,
    loadingIndicator: $,
    loadingPosition: H,
    size: N,
    type: G,
    variant: Z
  }, ae = p5(ee), le = (Q || q && H === "start") && /* @__PURE__ */ X.jsx(g5, {
    className: ae.startIcon,
    ownerState: ee,
    children: Q || /* @__PURE__ */ X.jsx(cv, {
      className: ae.loadingIconPlaceholder,
      ownerState: ee
    })
  }), F = (T || q && H === "end") && /* @__PURE__ */ X.jsx(y5, {
    className: ae.endIcon,
    ownerState: ee,
    children: T || /* @__PURE__ */ X.jsx(cv, {
      className: ae.loadingIconPlaceholder,
      ownerState: ee
    })
  }), k = c || "", te = typeof q == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ X.jsx("span", {
      className: ae.loadingWrapper,
      style: {
        display: "contents"
      },
      children: q && /* @__PURE__ */ X.jsx(v5, {
        className: ae.loadingIndicator,
        ownerState: ee,
        children: $
      })
    })
  ) : null;
  return /* @__PURE__ */ X.jsxs(h5, {
    ownerState: ee,
    className: xe(o.className, ae.root, v, k),
    component: y,
    disabled: g || q,
    focusRipple: !O,
    focusVisibleClassName: xe(ae.focusVisible, x),
    ref: i,
    type: G,
    id: q ? S : M,
    ...J,
    classes: ae,
    children: [le, H !== "end" && te, p, H === "end" && te, F]
  });
});
function b5(a) {
  const r = Gl(a);
  return r.body === a ? Ir(a).innerWidth > r.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
}
function lo(a, r) {
  r ? a.setAttribute("aria-hidden", "true") : a.removeAttribute("aria-hidden");
}
function fv(a) {
  return parseInt(Ir(a).getComputedStyle(a).paddingRight, 10) || 0;
}
function S5(a) {
  const i = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a.tagName), o = a.tagName === "INPUT" && a.getAttribute("type") === "hidden";
  return i || o;
}
function dv(a, r, i, o, c) {
  const f = [r, i, ...o];
  [].forEach.call(a.children, (d) => {
    const p = !f.includes(d), h = !S5(d);
    p && h && lo(d, c);
  });
}
function Ud(a, r) {
  let i = -1;
  return a.some((o, c) => r(o) ? (i = c, !0) : !1), i;
}
function C5(a, r) {
  const i = [], o = a.container;
  if (!r.disableScrollLock) {
    if (b5(o)) {
      const d = kT(Ir(o));
      i.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${fv(o) + d}px`;
      const p = Gl(o).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (h) => {
        i.push({
          value: h.style.paddingRight,
          property: "padding-right",
          el: h
        }), h.style.paddingRight = `${fv(h) + d}px`;
      });
    }
    let f;
    if (o.parentNode instanceof DocumentFragment)
      f = Gl(o).body;
    else {
      const d = o.parentElement, p = Ir(o);
      f = (d == null ? void 0 : d.nodeName) === "HTML" && p.getComputedStyle(d).overflowY === "scroll" ? d : o;
    }
    i.push({
      value: f.style.overflow,
      property: "overflow",
      el: f
    }, {
      value: f.style.overflowX,
      property: "overflow-x",
      el: f
    }, {
      value: f.style.overflowY,
      property: "overflow-y",
      el: f
    }), f.style.overflow = "hidden";
  }
  return () => {
    i.forEach(({
      value: f,
      el: d,
      property: p
    }) => {
      f ? d.style.setProperty(p, f) : d.style.removeProperty(p);
    });
  };
}
function E5(a) {
  const r = [];
  return [].forEach.call(a.children, (i) => {
    i.getAttribute("aria-hidden") === "true" && r.push(i);
  }), r;
}
class x5 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, i) {
    let o = this.modals.indexOf(r);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(r), r.modalRef && lo(r.modalRef, !1);
    const c = E5(i);
    dv(i, r.mount, r.modalRef, c, !0);
    const f = Ud(this.containers, (d) => d.container === i);
    return f !== -1 ? (this.containers[f].modals.push(r), o) : (this.containers.push({
      modals: [r],
      container: i,
      restore: null,
      hiddenSiblings: c
    }), o);
  }
  mount(r, i) {
    const o = Ud(this.containers, (f) => f.modals.includes(r)), c = this.containers[o];
    c.restore || (c.restore = C5(c, i));
  }
  remove(r, i = !0) {
    const o = this.modals.indexOf(r);
    if (o === -1)
      return o;
    const c = Ud(this.containers, (d) => d.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(o, 1), f.modals.length === 0)
      f.restore && f.restore(), r.modalRef && lo(r.modalRef, i), dv(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1), this.containers.splice(c, 1);
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && lo(d.modalRef, !1);
    }
    return o;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const T5 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function R5(a) {
  const r = parseInt(a.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? a.contentEditable === "true" || (a.nodeName === "AUDIO" || a.nodeName === "VIDEO" || a.nodeName === "DETAILS") && a.getAttribute("tabindex") === null ? 0 : a.tabIndex : r;
}
function O5(a) {
  if (a.tagName !== "INPUT" || a.type !== "radio" || !a.name)
    return !1;
  const r = (o) => a.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let i = r(`[name="${a.name}"]:checked`);
  return i || (i = r(`[name="${a.name}"]`)), i !== a;
}
function w5(a) {
  return !(a.disabled || a.tagName === "INPUT" && a.type === "hidden" || O5(a));
}
function A5(a) {
  const r = [], i = [];
  return Array.from(a.querySelectorAll(T5)).forEach((o, c) => {
    const f = R5(o);
    f === -1 || !w5(o) || (f === 0 ? r.push(o) : i.push({
      documentOrder: c,
      tabIndex: f,
      node: o
    }));
  }), i.sort((o, c) => o.tabIndex === c.tabIndex ? o.documentOrder - c.documentOrder : o.tabIndex - c.tabIndex).map((o) => o.node).concat(r);
}
function z5() {
  return !0;
}
function M5(a) {
  const {
    children: r,
    disableAutoFocus: i = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: c = !1,
    getTabbable: f = A5,
    isEnabled: d = z5,
    open: p
  } = a, h = C.useRef(!1), y = C.useRef(null), v = C.useRef(null), g = C.useRef(null), E = C.useRef(null), O = C.useRef(!1), T = C.useRef(null), x = Na(Ls(r), T), w = C.useRef(null);
  C.useEffect(() => {
    !p || !T.current || (O.current = !i);
  }, [i, p]), C.useEffect(() => {
    if (!p || !T.current)
      return;
    const U = Gl(T.current);
    return T.current.contains(U.activeElement) || (T.current.hasAttribute("tabIndex") || T.current.setAttribute("tabIndex", "-1"), O.current && T.current.focus()), () => {
      c || (g.current && g.current.focus && (h.current = !0, g.current.focus()), g.current = null);
    };
  }, [p]), C.useEffect(() => {
    if (!p || !T.current)
      return;
    const U = Gl(T.current), H = (G) => {
      w.current = G, !(o || !d() || G.key !== "Tab") && U.activeElement === T.current && G.shiftKey && (h.current = !0, v.current && v.current.focus());
    }, N = () => {
      var J, S;
      const G = T.current;
      if (G === null)
        return;
      if (!U.hasFocus() || !d() || h.current) {
        h.current = !1;
        return;
      }
      if (G.contains(U.activeElement) || o && U.activeElement !== y.current && U.activeElement !== v.current)
        return;
      if (U.activeElement !== E.current)
        E.current = null;
      else if (E.current !== null)
        return;
      if (!O.current)
        return;
      let Z = [];
      if ((U.activeElement === y.current || U.activeElement === v.current) && (Z = f(T.current)), Z.length > 0) {
        const $ = !!((J = w.current) != null && J.shiftKey && ((S = w.current) == null ? void 0 : S.key) === "Tab"), ee = Z[0], ae = Z[Z.length - 1];
        typeof ee != "string" && typeof ae != "string" && ($ ? ae.focus() : ee.focus());
      } else
        G.focus();
    };
    U.addEventListener("focusin", N), U.addEventListener("keydown", H, !0);
    const Q = setInterval(() => {
      U.activeElement && U.activeElement.tagName === "BODY" && N();
    }, 50);
    return () => {
      clearInterval(Q), U.removeEventListener("focusin", N), U.removeEventListener("keydown", H, !0);
    };
  }, [i, o, c, d, p, f]);
  const M = (U) => {
    g.current === null && (g.current = U.relatedTarget), O.current = !0, E.current = U.target;
    const H = r.props.onFocus;
    H && H(U);
  }, q = (U) => {
    g.current === null && (g.current = U.relatedTarget), O.current = !0;
  };
  return /* @__PURE__ */ X.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ X.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: q,
      ref: y,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ C.cloneElement(r, {
      ref: x,
      onFocus: M
    }), /* @__PURE__ */ X.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: q,
      ref: v,
      "data-testid": "sentinelEnd"
    })]
  });
}
function N5(a) {
  return typeof a == "function" ? a() : a;
}
function _5(a) {
  return a ? a.props.hasOwnProperty("in") : !1;
}
const mv = () => {
}, ls = new x5();
function D5(a) {
  const {
    container: r,
    disableEscapeKeyDown: i = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: c = !1,
    onTransitionEnter: f,
    onTransitionExited: d,
    children: p,
    onClose: h,
    open: y,
    rootRef: v
  } = a, g = C.useRef({}), E = C.useRef(null), O = C.useRef(null), T = Na(O, v), [x, w] = C.useState(!y), M = _5(p);
  let q = !0;
  (a["aria-hidden"] === "false" || a["aria-hidden"] === !1) && (q = !1);
  const U = () => Gl(E.current), H = () => (g.current.modalRef = O.current, g.current.mount = E.current, g.current), N = () => {
    ls.mount(H(), {
      disableScrollLock: o
    }), O.current && (O.current.scrollTop = 0);
  }, Q = Qr(() => {
    const F = N5(r) || U().body;
    ls.add(H(), F), O.current && N();
  }), G = () => ls.isTopModal(H()), Z = Qr((F) => {
    E.current = F, F && (y && G() ? N() : O.current && lo(O.current, q));
  }), J = C.useCallback(() => {
    ls.remove(H(), q);
  }, [q]);
  C.useEffect(() => () => {
    J();
  }, [J]), C.useEffect(() => {
    y ? Q() : (!M || !c) && J();
  }, [y, J, M, c, Q]);
  const S = (F) => (k) => {
    var te;
    (te = F.onKeyDown) == null || te.call(F, k), !(k.key !== "Escape" || k.which === 229 || // Wait until IME is settled.
    !G()) && (i || (k.stopPropagation(), h && h(k, "escapeKeyDown")));
  }, $ = (F) => (k) => {
    var te;
    (te = F.onClick) == null || te.call(F, k), k.target === k.currentTarget && h && h(k, "backdropClick");
  };
  return {
    getRootProps: (F = {}) => {
      const k = gb(a);
      delete k.onTransitionEnter, delete k.onTransitionExited;
      const te = {
        ...k,
        ...F
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...te,
        onKeyDown: S(te),
        ref: T
      };
    },
    getBackdropProps: (F = {}) => {
      const k = F;
      return {
        "aria-hidden": !0,
        ...k,
        onClick: $(k),
        open: y
      };
    },
    getTransitionProps: () => {
      const F = () => {
        w(!1), f && f();
      }, k = () => {
        w(!0), d && d(), c && J();
      };
      return {
        onEnter: L0(F, (p == null ? void 0 : p.props.onEnter) ?? mv),
        onExited: L0(k, (p == null ? void 0 : p.props.onExited) ?? mv)
      };
    },
    rootRef: T,
    portalRef: Z,
    isTopModal: G,
    exited: x,
    hasTransition: M
  };
}
function B5(a) {
  return vt("MuiModal", a);
}
dt("MuiModal", ["root", "hidden", "backdrop"]);
const U5 = (a) => {
  const {
    open: r,
    exited: i,
    classes: o
  } = a;
  return Et({
    root: ["root", !r && i && "hidden"],
    backdrop: ["backdrop"]
  }, B5, o);
}, H5 = Be("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, !i.open && i.exited && r.hidden];
  }
})(Ct(({
  theme: a
}) => ({
  position: "fixed",
  zIndex: (a.vars || a).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: r
    }) => !r.open && r.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), L5 = Be(n5, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (a, r) => r.backdrop
})({
  zIndex: -1
}), j5 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    name: "MuiModal",
    props: r
  }), {
    BackdropComponent: c = L5,
    BackdropProps: f,
    classes: d,
    className: p,
    closeAfterTransition: h = !1,
    children: y,
    container: v,
    component: g,
    components: E = {},
    componentsProps: O = {},
    disableAutoFocus: T = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: M = !1,
    disableRestoreFocus: q = !1,
    disableScrollLock: U = !1,
    hideBackdrop: H = !1,
    keepMounted: N = !1,
    onBackdropClick: Q,
    onClose: G,
    onTransitionEnter: Z,
    onTransitionExited: J,
    open: S,
    slotProps: $ = {},
    slots: ee = {},
    // eslint-disable-next-line react/prop-types
    theme: ae,
    ...le
  } = o, F = {
    ...o,
    closeAfterTransition: h,
    disableAutoFocus: T,
    disableEnforceFocus: x,
    disableEscapeKeyDown: w,
    disablePortal: M,
    disableRestoreFocus: q,
    disableScrollLock: U,
    hideBackdrop: H,
    keepMounted: N
  }, {
    getRootProps: k,
    getBackdropProps: te,
    getTransitionProps: W,
    portalRef: ne,
    isTopModal: ce,
    exited: ye,
    hasTransition: Oe
  } = D5({
    ...F,
    rootRef: i
  }), Le = {
    ...F,
    exited: ye
  }, A = U5(Le), Y = {};
  if (y.props.tabIndex === void 0 && (Y.tabIndex = "-1"), Oe) {
    const {
      onEnter: se,
      onExited: pe
    } = W();
    Y.onEnter = se, Y.onExited = pe;
  }
  const re = {
    slots: {
      root: E.Root,
      backdrop: E.Backdrop,
      ...ee
    },
    slotProps: {
      ...O,
      ...$
    }
  }, [ue, ge] = la("root", {
    ref: i,
    elementType: H5,
    externalForwardedProps: {
      ...re,
      ...le,
      component: g
    },
    getSlotProps: k,
    ownerState: Le,
    className: xe(p, A == null ? void 0 : A.root, !Le.open && Le.exited && (A == null ? void 0 : A.hidden))
  }), [Se, we] = la("backdrop", {
    ref: f == null ? void 0 : f.ref,
    elementType: c,
    externalForwardedProps: re,
    shouldForwardComponentProp: !0,
    additionalProps: f,
    getSlotProps: (se) => te({
      ...se,
      onClick: (pe) => {
        Q && Q(pe), se != null && se.onClick && se.onClick(pe);
      }
    }),
    className: xe(f == null ? void 0 : f.className, A == null ? void 0 : A.backdrop),
    ownerState: Le
  });
  return !N && !S && (!Oe || ye) ? null : /* @__PURE__ */ X.jsx(XR, {
    ref: ne,
    container: v,
    disablePortal: M,
    children: /* @__PURE__ */ X.jsxs(ue, {
      ...ge,
      children: [!H && c ? /* @__PURE__ */ X.jsx(Se, {
        ...we
      }) : null, /* @__PURE__ */ X.jsx(M5, {
        disableEnforceFocus: x,
        disableAutoFocus: T,
        disableRestoreFocus: q,
        isEnabled: ce,
        open: S,
        children: /* @__PURE__ */ C.cloneElement(y, Y)
      })]
    })
  });
});
function $5(a, r, i) {
  const o = r.getBoundingClientRect(), c = i && i.getBoundingClientRect(), f = Ir(r);
  let d;
  if (r.fakeTransform)
    d = r.fakeTransform;
  else {
    const y = f.getComputedStyle(r);
    d = y.getPropertyValue("-webkit-transform") || y.getPropertyValue("transform");
  }
  let p = 0, h = 0;
  if (d && d !== "none" && typeof d == "string") {
    const y = d.split("(")[1].split(")")[0].split(",");
    p = parseInt(y[4], 10), h = parseInt(y[5], 10);
  }
  return a === "left" ? c ? `translateX(${c.right + p - o.left}px)` : `translateX(${f.innerWidth + p - o.left}px)` : a === "right" ? c ? `translateX(-${o.right - c.left - p}px)` : `translateX(-${o.left + o.width - p}px)` : a === "up" ? c ? `translateY(${c.bottom + h - o.top}px)` : `translateY(${f.innerHeight + h - o.top}px)` : c ? `translateY(-${o.top - c.top + o.height - h}px)` : `translateY(-${o.top + o.height - h}px)`;
}
function k5(a) {
  return typeof a == "function" ? a() : a;
}
function rs(a, r, i) {
  const o = k5(i), c = $5(a, r, o);
  c && (r.style.webkitTransform = c, r.style.transform = c);
}
const Y5 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = So(), c = {
    enter: o.transitions.easing.easeOut,
    exit: o.transitions.easing.sharp
  }, f = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: p = !0,
    children: h,
    container: y,
    direction: v = "down",
    easing: g = c,
    in: E,
    onEnter: O,
    onEntered: T,
    onEntering: x,
    onExit: w,
    onExited: M,
    onExiting: q,
    style: U,
    timeout: H = f,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: N = ua,
    ...Q
  } = r, G = C.useRef(null), Z = Na(Ls(h), G, i), J = (W) => (ne) => {
    W && (ne === void 0 ? W(G.current) : W(G.current, ne));
  }, S = J((W, ne) => {
    rs(v, W, y), Db(W), O && O(W, ne);
  }), $ = J((W, ne) => {
    const ce = vs({
      timeout: H,
      style: U,
      easing: g
    }, {
      mode: "enter"
    });
    W.style.webkitTransition = o.transitions.create("-webkit-transform", {
      ...ce
    }), W.style.transition = o.transitions.create("transform", {
      ...ce
    }), W.style.webkitTransform = "none", W.style.transform = "none", x && x(W, ne);
  }), ee = J(T), ae = J(q), le = J((W) => {
    const ne = vs({
      timeout: H,
      style: U,
      easing: g
    }, {
      mode: "exit"
    });
    W.style.webkitTransition = o.transitions.create("-webkit-transform", ne), W.style.transition = o.transitions.create("transform", ne), rs(v, W, y), w && w(W);
  }), F = J((W) => {
    W.style.webkitTransition = "", W.style.transition = "", M && M(W);
  }), k = (W) => {
    d && d(G.current, W);
  }, te = C.useCallback(() => {
    G.current && rs(v, G.current, y);
  }, [v, y]);
  return C.useEffect(() => {
    if (E || v === "down" || v === "right")
      return;
    const W = BT(() => {
      G.current && rs(v, G.current, y);
    }), ne = Ir(G.current);
    return ne.addEventListener("resize", W), () => {
      W.clear(), ne.removeEventListener("resize", W);
    };
  }, [v, E, y]), C.useEffect(() => {
    E || te();
  }, [E, te]), /* @__PURE__ */ X.jsx(N, {
    nodeRef: G,
    onEnter: S,
    onEntered: ee,
    onEntering: $,
    onExit: le,
    onExited: F,
    onExiting: ae,
    addEndListener: k,
    appear: p,
    in: E,
    timeout: H,
    ...Q,
    children: (W, {
      ownerState: ne,
      ...ce
    }) => /* @__PURE__ */ C.cloneElement(h, {
      ref: Z,
      style: {
        visibility: W === "exited" && !E ? "hidden" : void 0,
        ...U,
        ...h.props.style
      },
      ...ce
    })
  });
});
function V5(a) {
  return vt("MuiDrawer", a);
}
dt("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Hb = (a, r) => {
  const {
    ownerState: i
  } = a;
  return [r.root, (i.variant === "permanent" || i.variant === "persistent") && r.docked, r.modal];
}, q5 = (a) => {
  const {
    classes: r,
    anchor: i,
    variant: o
  } = a, c = {
    root: ["root", `anchor${ie(i)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${ie(i)}`, o !== "temporary" && `paperAnchorDocked${ie(i)}`]
  };
  return Et(c, V5, r);
}, G5 = Be(j5, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Hb
})(Ct(({
  theme: a
}) => ({
  zIndex: (a.vars || a).zIndex.drawer
}))), X5 = Be("div", {
  shouldForwardProp: js,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Hb
})({
  flex: "0 0 auto"
}), Q5 = Be(Bb, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.paper, r[`paperAnchor${ie(i.anchor)}`], i.variant !== "temporary" && r[`paperAnchorDocked${ie(i.anchor)}`]];
  }
})(Ct(({
  theme: a
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (a.vars || a).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "left" && r.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "top" && r.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "right" && r.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "bottom" && r.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(a.vars || a).palette.divider}`
    }
  }]
}))), Lb = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function K5(a) {
  return ["left", "right"].includes(a);
}
function Z5({
  direction: a
}, r) {
  return a === "rtl" && K5(r) ? Lb[r] : r;
}
const pv = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiDrawer"
  }), c = So(), f = PT(), d = {
    enter: c.transitions.duration.enteringScreen,
    exit: c.transitions.duration.leavingScreen
  }, {
    anchor: p = "left",
    BackdropProps: h,
    children: y,
    className: v,
    elevation: g = 16,
    hideBackdrop: E = !1,
    ModalProps: {
      BackdropProps: O,
      ...T
    } = {},
    onClose: x,
    open: w = !1,
    PaperProps: M = {},
    SlideProps: q,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: U,
    transitionDuration: H = d,
    variant: N = "temporary",
    slots: Q = {},
    slotProps: G = {},
    ...Z
  } = o, J = C.useRef(!1);
  C.useEffect(() => {
    J.current = !0;
  }, []);
  const S = Z5({
    direction: f ? "rtl" : "ltr"
  }, p), ee = {
    ...o,
    anchor: p,
    elevation: g,
    open: w,
    variant: N,
    ...Z
  }, ae = q5(ee), le = {
    slots: {
      transition: U,
      ...Q
    },
    slotProps: {
      paper: M,
      transition: q,
      ...G,
      backdrop: W2(G.backdrop || {
        ...h,
        ...O
      }, {
        transitionDuration: H
      })
    }
  }, [F, k] = la("root", {
    ref: i,
    elementType: G5,
    className: xe(ae.root, ae.modal, v),
    shouldForwardComponentProp: !0,
    ownerState: ee,
    externalForwardedProps: {
      ...le,
      ...Z,
      ...T
    },
    additionalProps: {
      open: w,
      onClose: x,
      hideBackdrop: E,
      slots: {
        backdrop: le.slots.backdrop
      },
      slotProps: {
        backdrop: le.slotProps.backdrop
      }
    }
  }), [te, W] = la("paper", {
    elementType: Q5,
    shouldForwardComponentProp: !0,
    className: xe(ae.paper, M.className),
    ownerState: ee,
    externalForwardedProps: le,
    additionalProps: {
      elevation: N === "temporary" ? g : 0,
      square: !0
    }
  }), [ne, ce] = la("docked", {
    elementType: X5,
    ref: i,
    className: xe(ae.root, ae.docked, v),
    ownerState: ee,
    externalForwardedProps: le,
    additionalProps: Z
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [ye, Oe] = la("transition", {
    elementType: Y5,
    ownerState: ee,
    externalForwardedProps: le,
    additionalProps: {
      in: w,
      direction: Lb[S],
      timeout: H,
      appear: J.current
    }
  }), Le = /* @__PURE__ */ X.jsx(te, {
    ...W,
    children: y
  });
  if (N === "permanent")
    return /* @__PURE__ */ X.jsx(ne, {
      ...ce,
      children: Le
    });
  const A = /* @__PURE__ */ X.jsx(ye, {
    ...Oe,
    children: Le
  });
  return N === "persistent" ? /* @__PURE__ */ X.jsx(ne, {
    ...ce,
    children: A
  }) : /* @__PURE__ */ X.jsx(F, {
    ...k,
    children: A
  });
});
function I5(a) {
  return vt("MuiFab", a);
}
const hv = dt("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), P5 = (a) => {
  const {
    color: r,
    variant: i,
    classes: o,
    size: c
  } = a, f = {
    root: ["root", i, `size${ie(c)}`, r === "inherit" ? "colorInherit" : r]
  }, d = Et(f, I5, o);
  return {
    ...o,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, J5 = Be(fo, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (a) => js(a) || a === "classes",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`size${ie(i.size)}`], i.color === "inherit" && r.colorInherit, r[ie(i.size)], r[i.color]];
  }
})(Ct(({
  theme: a
}) => {
  var r, i;
  return {
    ...a.typography.button,
    minHeight: 36,
    transition: a.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: a.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (a.vars || a).zIndex.fab,
    boxShadow: (a.vars || a).shadows[6],
    "&:active": {
      boxShadow: (a.vars || a).shadows[12]
    },
    color: a.vars ? a.vars.palette.text.primary : (i = (r = a.palette).getContrastText) == null ? void 0 : i.call(r, a.palette.grey[300]),
    backgroundColor: (a.vars || a).palette.grey[300],
    "&:hover": {
      backgroundColor: (a.vars || a).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (a.vars || a).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${hv.focusVisible}`]: {
      boxShadow: (a.vars || a).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Ct(({
  theme: a
}) => ({
  variants: [...Object.entries(a.palette).filter(jn(["dark", "contrastText"])).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].contrastText,
      backgroundColor: (a.vars || a).palette[r].main,
      "&:hover": {
        backgroundColor: (a.vars || a).palette[r].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (a.vars || a).palette[r].main
        }
      }
    }
  }))]
})), Ct(({
  theme: a
}) => ({
  [`&.${hv.disabled}`]: {
    color: (a.vars || a).palette.action.disabled,
    boxShadow: (a.vars || a).shadows[0],
    backgroundColor: (a.vars || a).palette.action.disabledBackground
  }
}))), F5 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiFab"
  }), {
    children: c,
    className: f,
    color: d = "default",
    component: p = "button",
    disabled: h = !1,
    disableFocusRipple: y = !1,
    focusVisibleClassName: v,
    size: g = "large",
    variant: E = "circular",
    ...O
  } = o, T = {
    ...o,
    color: d,
    component: p,
    disabled: h,
    disableFocusRipple: y,
    size: g,
    variant: E
  }, x = P5(T);
  return /* @__PURE__ */ X.jsx(J5, {
    className: xe(x.root, f),
    component: p,
    disabled: h,
    focusRipple: !y,
    focusVisibleClassName: xe(x.focusVisible, v),
    ownerState: T,
    ref: i,
    ...O,
    classes: x,
    children: c
  });
}), W5 = db({
  themeId: ra
}), jb = /* @__PURE__ */ C.createContext();
function e3(a) {
  return vt("MuiTable", a);
}
dt("MuiTable", ["root", "stickyHeader"]);
const t3 = (a) => {
  const {
    classes: r,
    stickyHeader: i
  } = a;
  return Et({
    root: ["root", i && "stickyHeader"]
  }, e3, r);
}, n3 = Be("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.stickyHeader && r.stickyHeader];
  }
})(Ct(({
  theme: a
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...a.typography.body2,
    padding: a.spacing(2),
    color: (a.vars || a).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState: r
    }) => r.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
}))), gv = "table", a3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTable"
  }), {
    className: c,
    component: f = gv,
    padding: d = "normal",
    size: p = "medium",
    stickyHeader: h = !1,
    ...y
  } = o, v = {
    ...o,
    component: f,
    padding: d,
    size: p,
    stickyHeader: h
  }, g = t3(v), E = C.useMemo(() => ({
    padding: d,
    size: p,
    stickyHeader: h
  }), [d, p, h]);
  return /* @__PURE__ */ X.jsx(jb.Provider, {
    value: E,
    children: /* @__PURE__ */ X.jsx(n3, {
      as: f,
      role: f === gv ? null : "table",
      ref: i,
      className: xe(g.root, c),
      ownerState: v,
      ...y
    })
  });
}), $s = /* @__PURE__ */ C.createContext();
function l3(a) {
  return vt("MuiTableBody", a);
}
dt("MuiTableBody", ["root"]);
const r3 = (a) => {
  const {
    classes: r
  } = a;
  return Et({
    root: ["root"]
  }, l3, r);
}, i3 = Be("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  display: "table-row-group"
}), o3 = {
  variant: "body"
}, yv = "tbody", u3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTableBody"
  }), {
    className: c,
    component: f = yv,
    ...d
  } = o, p = {
    ...o,
    component: f
  }, h = r3(p);
  return /* @__PURE__ */ X.jsx($s.Provider, {
    value: o3,
    children: /* @__PURE__ */ X.jsx(i3, {
      className: xe(h.root, c),
      as: f,
      ref: i,
      role: f === yv ? null : "rowgroup",
      ownerState: p,
      ...d
    })
  });
});
function s3(a) {
  return vt("MuiTableCell", a);
}
const c3 = dt("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), f3 = (a) => {
  const {
    classes: r,
    variant: i,
    align: o,
    padding: c,
    size: f,
    stickyHeader: d
  } = a, p = {
    root: ["root", i, d && "stickyHeader", o !== "inherit" && `align${ie(o)}`, c !== "normal" && `padding${ie(c)}`, `size${ie(f)}`]
  };
  return Et(p, s3, r);
}, d3 = Be("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`size${ie(i.size)}`], i.padding !== "normal" && r[`padding${ie(i.padding)}`], i.align !== "inherit" && r[`align${ie(i.align)}`], i.stickyHeader && r.stickyHeader];
  }
})(Ct(({
  theme: a
}) => ({
  ...a.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: a.vars ? `1px solid ${a.vars.palette.TableCell.border}` : `1px solid
    ${a.palette.mode === "light" ? Hs(nt(a.palette.divider, 1), 0.88) : Us(nt(a.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (a.vars || a).palette.text.primary,
      lineHeight: a.typography.pxToRem(24),
      fontWeight: a.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (a.vars || a).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (a.vars || a).palette.text.secondary,
      lineHeight: a.typography.pxToRem(21),
      fontSize: a.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${c3.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (a.vars || a).palette.background.default
    }
  }]
}))), ea = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTableCell"
  }), {
    align: c = "inherit",
    className: f,
    component: d,
    padding: p,
    scope: h,
    size: y,
    sortDirection: v,
    variant: g,
    ...E
  } = o, O = C.useContext(jb), T = C.useContext($s), x = T && T.variant === "head";
  let w;
  d ? w = d : w = x ? "th" : "td";
  let M = h;
  w === "td" ? M = void 0 : !M && x && (M = "col");
  const q = g || T && T.variant, U = {
    ...o,
    align: c,
    component: w,
    padding: p || (O && O.padding ? O.padding : "normal"),
    size: y || (O && O.size ? O.size : "medium"),
    sortDirection: v,
    stickyHeader: q === "head" && O && O.stickyHeader,
    variant: q
  }, H = f3(U);
  let N = null;
  return v && (N = v === "asc" ? "ascending" : "descending"), /* @__PURE__ */ X.jsx(d3, {
    as: w,
    ref: i,
    className: xe(H.root, f),
    "aria-sort": N,
    scope: M,
    ownerState: U,
    ...E
  });
});
function m3(a) {
  return vt("MuiTableContainer", a);
}
dt("MuiTableContainer", ["root"]);
const p3 = (a) => {
  const {
    classes: r
  } = a;
  return Et({
    root: ["root"]
  }, m3, r);
}, h3 = Be("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  width: "100%",
  overflowX: "auto"
}), g3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTableContainer"
  }), {
    className: c,
    component: f = "div",
    ...d
  } = o, p = {
    ...o,
    component: f
  }, h = p3(p);
  return /* @__PURE__ */ X.jsx(h3, {
    ref: i,
    as: f,
    className: xe(h.root, c),
    ownerState: p,
    ...d
  });
});
function y3(a) {
  return vt("MuiTableHead", a);
}
dt("MuiTableHead", ["root"]);
const v3 = (a) => {
  const {
    classes: r
  } = a;
  return Et({
    root: ["root"]
  }, y3, r);
}, b3 = Be("thead", {
  name: "MuiTableHead",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  display: "table-header-group"
}), S3 = {
  variant: "head"
}, vv = "thead", C3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTableHead"
  }), {
    className: c,
    component: f = vv,
    ...d
  } = o, p = {
    ...o,
    component: f
  }, h = v3(p);
  return /* @__PURE__ */ X.jsx($s.Provider, {
    value: S3,
    children: /* @__PURE__ */ X.jsx(b3, {
      as: f,
      className: xe(h.root, c),
      ref: i,
      role: f === vv ? null : "rowgroup",
      ownerState: p,
      ...d
    })
  });
});
function E3(a) {
  return vt("MuiTableRow", a);
}
const bv = dt("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), x3 = (a) => {
  const {
    classes: r,
    selected: i,
    hover: o,
    head: c,
    footer: f
  } = a;
  return Et({
    root: ["root", i && "selected", o && "hover", c && "head", f && "footer"]
  }, E3, r);
}, T3 = Be("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.head && r.head, i.footer && r.footer];
  }
})(Ct(({
  theme: a
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${bv.hover}:hover`]: {
    backgroundColor: (a.vars || a).palette.action.hover
  },
  [`&.${bv.selected}`]: {
    backgroundColor: a.vars ? `rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})` : nt(a.palette.primary.main, a.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: a.vars ? `rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))` : nt(a.palette.primary.main, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity)
    }
  }
}))), Sv = "tr", Ji = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const o = bt({
    props: r,
    name: "MuiTableRow"
  }), {
    className: c,
    component: f = Sv,
    hover: d = !1,
    selected: p = !1,
    ...h
  } = o, y = C.useContext($s), v = {
    ...o,
    component: f,
    hover: d,
    selected: p,
    head: y && y.variant === "head",
    footer: y && y.variant === "footer"
  }, g = x3(v);
  return /* @__PURE__ */ X.jsx(T3, {
    as: f,
    ref: i,
    className: xe(g.root, c),
    role: f === Sv ? null : "row",
    ownerState: v,
    ...h
  });
}), Bm = "https://registry.npmjs.org", R3 = `${Bm}/-/v1/search`, O3 = /* @__PURE__ */ new Set([
  "about",
  "above",
  "after",
  "again",
  "also",
  "among",
  "been",
  "being",
  "below",
  "between",
  "both",
  "based",
  "build",
  "built",
  "common",
  "could",
  "each",
  "from",
  "have",
  "into",
  "just",
  "library",
  "lightweight",
  "modern",
  "more",
  "most",
  "other",
  "package",
  "provides",
  "simple",
  "some",
  "support",
  "that",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "this",
  "those",
  "through",
  "using",
  "very",
  "with",
  "without",
  "your",
  "javascript",
  "typescript",
  "node",
  "nodejs",
  "module",
  "modules",
  "tool",
  "tools",
  "best",
  "good",
  "recommended",
  "popular",
  "top",
  "find",
  "search",
  "for",
  "in"
]);
function Um(a) {
  return (a || "").toLowerCase().replace(/[^a-z0-9\s@/-]/g, " ").replace(/\s+/g, " ").trim();
}
function Ss(a) {
  return new Set(
    Um(a).split(/\s+/).filter(
      (r) => r.length > 2 && !O3.has(r) && !r.startsWith("@")
    )
  );
}
function lm(a) {
  return Array.isArray(a == null ? void 0 : a.keywords) ? a.keywords.filter((r) => typeof r == "string").map((r) => r.toLowerCase().trim()).filter(Boolean) : [];
}
function w3(a, r, i = 0) {
  const o = new Set(lm(a)), c = new Set(lm(r));
  let f = 0;
  for (const y of o)
    c.has(y) && (f += 4);
  const d = Ss(a.description || ""), p = Ss(r.description || "");
  let h = 0;
  for (const y of d)
    p.has(y) && (h += 1);
  if (f += Math.min(h, 8), d.size > 0 && p.size > 0) {
    const y = h / Math.max(1, Math.min(d.size, p.size));
    f += y * 3;
  }
  return Number.isFinite(i) && (f += Math.max(0, i) * 2), f;
}
function A3(a) {
  const r = (a.name || "").toLowerCase(), i = lm(a), o = Um(a.description), c = [], f = (v) => v.some((g) => i.includes(g) || o.includes(g));
  (r === "moment" || f(["date", "datetime", "date-time", "date manipulation", "time"])) && c.push(
    "javascript date library",
    "date parsing formatting manipulation",
    "date-fns",
    "dayjs",
    "luxon",
    "javascript datetime"
  ), f(["http", "http client", "request", "fetch", "ajax"]) && c.push(
    "javascript http client",
    "promise based http requests",
    "fetch api alternative"
  ), f(["utility", "utilities", "functional programming"]) && c.push(
    "javascript utility library",
    "functional programming utilities"
  ), f(["validation", "schema", "validator"]) && c.push(
    "javascript schema validation",
    "object validation library"
  );
  const d = i.filter((v) => v.length >= 3).slice(0, 5), p = [...Ss(a.description)], h = [
    p.slice(0, 4).join(" "),
    p.slice(2, 6).join(" ")
  ].filter((v) => v.trim().length >= 2), y = [
    `${r} alternative`,
    ...c,
    ...d,
    ...h
  ];
  return [...new Set(y.map((v) => v.trim()).filter(Boolean))].slice(0, 12);
}
async function Cv(a) {
  const r = await fetch(
    `${Bm}/${encodeURIComponent(a)}/latest`
  );
  if (!r.ok)
    throw new Error(`Could not fetch metadata for "${a}".`);
  return r.json();
}
async function Ev(a) {
  const r = await fetch(
    `${R3}?text=${encodeURIComponent(a)}&size=20`
  );
  if (!r.ok)
    throw new Error("Could not search npm. Please try again.");
  return r.json();
}
function z3(a) {
  return [
    ...Object.keys(a.dependencies || {}),
    ...Object.keys(a.peerDependencies || {}),
    ...Object.keys(a.optionalDependencies || {})
  ].map((r) => r.toLowerCase());
}
function M3(a, r, i) {
  const o = a.toLowerCase(), c = (r.name || "").toLowerCase(), f = (r.description || "").toLowerCase(), d = z3(i);
  let p = 0;
  const h = [];
  d.includes(o) && (p += 8, h.push("depends on the original package"));
  const y = [
    "adapter",
    "wrapper",
    "integration",
    "plugin",
    "react component",
    "extension for",
    "bridge for"
  ], v = c.includes(o) || f.includes(o), g = y.some(
    (E) => f.includes(E)
  );
  return v && g && (p += 4, h.push("may be an integration or wrapper")), { penalty: p, reasons: h };
}
function N3(a) {
  const r = Um(a), o = [
    "best",
    "package for",
    "library for",
    "tool for",
    "how to",
    "parsing",
    "formatting",
    "generator",
    "utility for",
    "framework for",
    "wrapper for"
  ].some((f) => r.includes(f)), c = r.split(/\s+/).length;
  return o || c >= 4;
}
function _3(a) {
  var Q, G, Z, J;
  const [r, i] = C.useState(null), [o, c] = C.useState([]), [f, d] = C.useState([]), [p, h] = C.useState(""), [y, v] = C.useState(!1), [g, E] = C.useState(""), [O, T] = C.useState([]), x = (a == null ? void 0 : a.query) || (a == null ? void 0 : a.searchQuery) || (a == null ? void 0 : a.searchTerm) || ((Q = a == null ? void 0 : a.data) == null ? void 0 : Q.query) || ((G = a == null ? void 0 : a.searchData) == null ? void 0 : G.query) || ((J = (Z = a == null ? void 0 : a.entities) == null ? void 0 : Z[0]) == null ? void 0 : J.word) || "";
  C.useEffect(() => {
    var S, $;
    ($ = (S = a == null ? void 0 : a.messageHandlers) == null ? void 0 : S.componentLoaded) == null || $.call(S);
  }, []), C.useEffect(() => {
    x && x.trim() && U(x.trim());
  }, [x]);
  async function w(S) {
    let $;
    try {
      $ = await fetch(
        `${Bm}/${encodeURIComponent(S)}/latest`
      );
    } catch {
      throw new Error(
        "Network error. Please check your internet connection and try again."
      );
    }
    if ($.status === 404)
      throw new Error(`Package "${S}" not found. Please check the name.`);
    if (!$.ok)
      throw new Error(
        "Could not fetch package information. Please try again."
      );
    return $.json();
  }
  async function M(S) {
    var ne;
    const $ = [...Ss(S)], ee = [
      S,
      $.join(" "),
      $.slice(0, 3).join(" ")
    ].filter(Boolean), le = (await Promise.allSettled(
      ee.map((ce) => Ev(ce))
    )).filter((ce) => ce.status === "fulfilled").map((ce) => ce.value), F = /* @__PURE__ */ new Map();
    for (const ce of le)
      for (const ye of ce.objects || []) {
        const Oe = ye.package;
        if (!Oe || typeof Oe.name != "string") continue;
        const Le = Oe.name.toLowerCase(), A = Number((ne = ye.score) == null ? void 0 : ne.final) || 0, Y = F.get(Le);
        (!Y || A > Y.searchScore) && F.set(Le, { ...Oe, searchScore: A });
      }
    const k = [...F.values()].sort((ce, ye) => ye.searchScore - ce.searchScore).slice(0, 40);
    if (k.length === 0)
      throw new Error(`No npm packages found for use-case "${S}".`);
    const te = k.slice(0, 4);
    return (await Promise.allSettled(
      te.map(async (ce) => {
        var ye, Oe, Le, A;
        try {
          const Y = await Cv(ce.name);
          return {
            ...ce,
            ...Y,
            homepage: Y.homepage || ((ye = ce.links) == null ? void 0 : ye.homepage) || ((Oe = ce.links) == null ? void 0 : Oe.repository) || ""
          };
        } catch {
          return {
            ...ce,
            homepage: ((Le = ce.links) == null ? void 0 : Le.homepage) || ((A = ce.links) == null ? void 0 : A.repository) || ""
          };
        }
      })
    )).filter((ce) => ce.status === "fulfilled").map((ce) => ce.value);
  }
  async function q(S) {
    var A;
    const $ = await w(S), ee = A3($);
    if (ee.length === 0)
      throw new Error(
        `Not enough package metadata to discover alternatives to "${S}".`
      );
    const le = (await Promise.allSettled(
      ee.map((Y) => Ev(Y))
    )).filter((Y) => Y.status === "fulfilled").map((Y) => Y.value);
    if (le.length === 0)
      throw new Error(
        "Could not discover alternatives because npm searches failed. Please try again."
      );
    const F = /* @__PURE__ */ new Map();
    for (const Y of le)
      for (const re of Y.objects || []) {
        const ue = re.package;
        if (!ue || typeof ue.name != "string") continue;
        const ge = ue.name.toLowerCase(), Se = Number((A = re.score) == null ? void 0 : A.final) || 0, we = F.get(ge);
        (!we || Se > we.searchScore) && F.set(ge, { ...ue, searchScore: Se });
      }
    const k = ($.name || S).toLowerCase(), te = [...F.values()].filter((Y) => Y.name.toLowerCase() !== k).sort((Y, re) => re.searchScore - Y.searchScore).slice(0, 60);
    if (te.length === 0) return [];
    const ne = te.map((Y) => {
      const re = w3(
        $,
        Y,
        Y.searchScore
      ), ue = Y.name.toLowerCase(), ge = k.toLowerCase(), Se = ue.startsWith(`${ge}-`) || ue.startsWith(`${ge}.`) || ue === `${ge}js` || ue === `${ge}-mini`;
      return {
        ...Y,
        relevanceScore: Math.min(re, 10) * 0.5 + Y.searchScore * 2 - (Se ? 12 : 0)
      };
    }).sort((Y, re) => re.relevanceScore - Y.relevanceScore).slice(0, 15), ye = (await Promise.allSettled(
      ne.map(async (Y) => {
        var ge, Se;
        const re = await Cv(Y.name), ue = M3(
          k,
          Y,
          re
        );
        return {
          ...Y,
          ...re,
          homepage: re.homepage || ((ge = Y.links) == null ? void 0 : ge.homepage) || ((Se = Y.links) == null ? void 0 : Se.repository) || "",
          relevanceScore: Y.relevanceScore - ue.penalty,
          relationshipNotes: ue.reasons
        };
      })
    )).filter((Y) => Y.status === "fulfilled").map((Y) => Y.value), Oe = new Set(
      ye.map((Y) => Y.name.toLowerCase())
    ), Le = ne.filter((Y) => !Oe.has(Y.name.toLowerCase())).map((Y) => {
      var re, ue;
      return {
        ...Y,
        homepage: ((re = Y.links) == null ? void 0 : re.homepage) || ((ue = Y.links) == null ? void 0 : ue.repository) || "",
        relationshipNotes: []
      };
    });
    return [...ye, ...Le].sort((Y, re) => re.relevanceScore - Y.relevanceScore).slice(0, 5);
  }
  async function U(S) {
    const $ = S.match(
      /^(?:find\s+)?(?:alternatives|alternative packages|similar packages)\s+(?:to|for)\s+(.+)$/i
    ), ee = /^\s*compare\b/i.test(S), le = S.replace(/^\s*compare\s+/i, "").split(/,\s*|\s+(?:and|vs\.?)\s+/i).map((k) => k.trim()).filter(Boolean), F = ee || le.length > 1;
    v(!0), E(""), i(null), c([]), T([]), d([]);
    try {
      if ($) {
        const k = $[1].trim(), te = await q(k);
        if (te.length === 0)
          throw new Error(
            `No suitable alternative candidates found for "${k}".`
          );
        T(te);
      } else if (F) {
        if (le.length < 2 || le.length > 3)
          throw new Error(
            "Please compare 2 or 3 packages, for example: Compare React and Vue."
          );
        const k = await Promise.all(
          le.map((te) => w(te))
        );
        c(k);
      } else if (N3(S)) {
        const k = await M(S);
        h(S), d(k);
      } else
        try {
          const k = await w(S);
          i(k);
        } catch {
          const k = await M(S);
          h(S), d(k);
        }
    } catch (k) {
      E(k.message || "Something went wrong. Please try again.");
    } finally {
      v(!1);
    }
  }
  function H({ info: S }) {
    return /* @__PURE__ */ X.jsxs(
      za,
      {
        sx: {
          p: 2,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          minWidth: 0
        },
        children: [
          /* @__PURE__ */ X.jsx(
            wn,
            {
              variant: "h6",
              fontWeight: "bold",
              sx: { overflowWrap: "anywhere" },
              children: S.name
            }
          ),
          /* @__PURE__ */ X.jsx(
            uv,
            {
              label: `Latest: ${S.version || "Unknown"}`,
              color: "primary",
              size: "small",
              sx: { mt: 1 }
            }
          ),
          /* @__PURE__ */ X.jsx(wn, { sx: { mt: 2 }, children: S.description || "No description provided." }),
          /* @__PURE__ */ X.jsxs(wn, { variant: "body2", sx: { mt: 2 }, children: [
            /* @__PURE__ */ X.jsx("strong", { children: "License:" }),
            " ",
            S.license || "Not specified"
          ] }),
          S.homepage && /* @__PURE__ */ X.jsxs(
            wn,
            {
              variant: "body2",
              sx: { mt: 1, overflowWrap: "anywhere" },
              children: [
                /* @__PURE__ */ X.jsx("strong", { children: "Homepage:" }),
                " ",
                /* @__PURE__ */ X.jsx("a", { href: S.homepage, target: "_blank", rel: "noreferrer", children: S.homepage })
              ]
            }
          ),
          Array.isArray(S.relationshipNotes) && S.relationshipNotes.length > 0 && /* @__PURE__ */ X.jsxs(
            wn,
            {
              variant: "body2",
              color: "text.secondary",
              sx: { mt: 1 },
              children: [
                "Note: ",
                S.relationshipNotes.join("; "),
                "."
              ]
            }
          )
        ]
      }
    );
  }
  function N({ results: S }) {
    return /* @__PURE__ */ X.jsx(g3, { component: Bb, variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ X.jsxs(a3, { children: [
      /* @__PURE__ */ X.jsx(C3, { children: /* @__PURE__ */ X.jsxs(Ji, { children: [
        /* @__PURE__ */ X.jsx(ea, { sx: { fontWeight: "bold", width: "20%" }, children: "Feature" }),
        S.map(($) => /* @__PURE__ */ X.jsx(ea, { sx: { fontWeight: "bold" }, children: $.name }, $.name))
      ] }) }),
      /* @__PURE__ */ X.jsxs(u3, { children: [
        /* @__PURE__ */ X.jsxs(Ji, { children: [
          /* @__PURE__ */ X.jsx(ea, { component: "th", scope: "row", sx: { fontWeight: "bold" }, children: "Latest Version" }),
          S.map(($) => /* @__PURE__ */ X.jsx(ea, { children: /* @__PURE__ */ X.jsx(
            uv,
            {
              label: $.version || "Unknown",
              color: "primary",
              size: "small"
            }
          ) }, $.name))
        ] }),
        /* @__PURE__ */ X.jsxs(Ji, { children: [
          /* @__PURE__ */ X.jsx(ea, { component: "th", scope: "row", sx: { fontWeight: "bold" }, children: "Description" }),
          S.map(($) => /* @__PURE__ */ X.jsx(ea, { children: $.description || "No description provided." }, $.name))
        ] }),
        /* @__PURE__ */ X.jsxs(Ji, { children: [
          /* @__PURE__ */ X.jsx(ea, { component: "th", scope: "row", sx: { fontWeight: "bold" }, children: "License" }),
          S.map(($) => /* @__PURE__ */ X.jsx(ea, { children: $.license || "Not specified" }, $.name))
        ] }),
        /* @__PURE__ */ X.jsxs(Ji, { children: [
          /* @__PURE__ */ X.jsx(ea, { component: "th", scope: "row", sx: { fontWeight: "bold" }, children: "Homepage" }),
          S.map(($) => /* @__PURE__ */ X.jsx(ea, { sx: { overflowWrap: "anywhere" }, children: $.homepage ? /* @__PURE__ */ X.jsx("a", { href: $.homepage, target: "_blank", rel: "noreferrer", children: $.homepage }) : "N/A" }, $.name))
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ X.jsxs(za, { sx: { p: 2 }, children: [
    !x && /* @__PURE__ */ X.jsx(wn, { color: "text.secondary", align: "center", sx: { py: 4 }, children: 'Enter a query in the top search bar (e.g. "compare react and vue" or "best package for date formatting").' }),
    y && /* @__PURE__ */ X.jsx(za, { sx: { display: "flex", justifyContent: "center", p: 3 }, children: /* @__PURE__ */ X.jsx(Dm, {}) }),
    g && /* @__PURE__ */ X.jsx(wn, { color: "error", role: "alert", sx: { mb: 2 }, children: g }),
    r && /* @__PURE__ */ X.jsx(H, { info: r }),
    o.length > 0 && /* @__PURE__ */ X.jsxs(za, { children: [
      /* @__PURE__ */ X.jsx(wn, { variant: "h6", fontWeight: "bold", sx: { mb: 2 }, children: "Package Comparison" }),
      /* @__PURE__ */ X.jsx(N, { results: o })
    ] }),
    f.length > 0 && /* @__PURE__ */ X.jsxs(za, { children: [
      /* @__PURE__ */ X.jsx(wn, { variant: "h6", fontWeight: "bold", sx: { mb: 1 }, children: "Top Package Recommendations" }),
      /* @__PURE__ */ X.jsxs(wn, { color: "text.secondary", sx: { mb: 2 }, children: [
        "Ranked options for: ",
        /* @__PURE__ */ X.jsxs("strong", { children: [
          '"',
          p,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ X.jsx(N, { results: f })
    ] }),
    O.length > 0 && /* @__PURE__ */ X.jsxs(za, { sx: { mt: 3 }, children: [
      /* @__PURE__ */ X.jsx(wn, { variant: "h6", fontWeight: "bold", sx: { mb: 2 }, children: "Alternative Package Candidates" }),
      /* @__PURE__ */ X.jsx(
        za,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))"
            },
            gap: 2
          },
          children: O.map((S) => /* @__PURE__ */ X.jsx(H, { info: S }, S.name))
        }
      )
    ] })
  ] });
}
/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Hm = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, $b = /^[\\/]{2}/;
function D3(a, r) {
  return r + a.replace(/\\/g, "/");
}
var xv = "popstate";
function Tv(a) {
  return typeof a == "object" && a != null && "pathname" in a && "search" in a && "hash" in a && "state" in a && "key" in a;
}
function B3(a = {}) {
  function r(o, c) {
    var y;
    let f = (y = c.state) == null ? void 0 : y.masked, { pathname: d, search: p, hash: h } = f || o.location;
    return rm(
      "",
      { pathname: d, search: p, hash: h },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default",
      f ? {
        pathname: o.location.pathname,
        search: o.location.search,
        hash: o.location.hash
      } : void 0
    );
  }
  function i(o, c) {
    return typeof c == "string" ? c : Pr(c);
  }
  return H3(
    r,
    i,
    null,
    a
  );
}
function rt(a, r) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(r);
}
function oa(a, r) {
  if (!a) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function U3() {
  return Math.random().toString(36).substring(2, 10);
}
function Rv(a, r) {
  return {
    usr: a.state,
    key: a.key,
    idx: r,
    masked: a.mask ? {
      pathname: a.pathname,
      search: a.search,
      hash: a.hash
    } : void 0
  };
}
function rm(a, r, i = null, o, c) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Wr(r) : r,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || U3(),
    mask: c
  };
}
function Pr({
  pathname: a = "/",
  search: r = "",
  hash: i = ""
}) {
  return r && r !== "?" && (a += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i), a;
}
function Wr(a) {
  let r = {};
  if (a) {
    let i = a.indexOf("#");
    i >= 0 && (r.hash = a.substring(i), a = a.substring(0, i));
    let o = a.indexOf("?");
    o >= 0 && (r.search = a.substring(o), a = a.substring(0, o)), a && (r.pathname = a);
  }
  return r;
}
function H3(a, r, i, o = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = o, d = c.history, p = "POP", h = null, y = v();
  y == null && (y = 0, d.replaceState({ ...d.state, idx: y }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function g() {
    p = "POP";
    let w = v(), M = w == null ? null : w - y;
    y = w, h && h({ action: p, location: x.location, delta: M });
  }
  function E(w, M) {
    p = "PUSH";
    let q = Tv(w) ? w : rm(x.location, w, M);
    y = v() + 1;
    let U = Rv(q, y), H = x.createHref(q.mask || q);
    try {
      d.pushState(U, "", H);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError")
        throw N;
      c.location.assign(H);
    }
    f && h && h({ action: p, location: x.location, delta: 1 });
  }
  function O(w, M) {
    p = "REPLACE";
    let q = Tv(w) ? w : rm(x.location, w, M);
    y = v();
    let U = Rv(q, y), H = x.createHref(q.mask || q);
    d.replaceState(U, "", H), f && h && h({ action: p, location: x.location, delta: 0 });
  }
  function T(w) {
    return L3(c, w);
  }
  let x = {
    get action() {
      return p;
    },
    get location() {
      return a(c, d);
    },
    listen(w) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(xv, g), h = w, () => {
        c.removeEventListener(xv, g), h = null;
      };
    },
    createHref(w) {
      return r(c, w);
    },
    createURL: T,
    encodeLocation(w) {
      let M = T(w);
      return {
        pathname: M.pathname,
        search: M.search,
        hash: M.hash
      };
    },
    push: E,
    replace: O,
    go(w) {
      return d.go(w);
    }
  };
  return x;
}
function L3(a, r, i = !1) {
  let o = "http://localhost";
  a && (o = a.location.origin !== "null" ? a.location.origin : a.location.href), rt(o, "No window.location.(origin|href) available to create URL");
  let c = typeof r == "string" ? r : Pr(r);
  return c = c.replace(/ $/, "%20"), !i && $b.test(c) && (c = o + c), new URL(c, o);
}
function kb(a, r, i = "/") {
  return j3(a, r, i, !1);
}
function j3(a, r, i, o, c) {
  let f = typeof r == "string" ? Wr(r) : r, d = _a(f.pathname || "/", i);
  if (d == null)
    return null;
  let p = $3(a), h = null, y = P3(d);
  for (let v = 0; h == null && v < p.length; ++v)
    h = I3(
      p[v],
      y,
      o
    );
  return h;
}
function $3(a) {
  let r = Yb(a);
  return k3(r), r;
}
function Yb(a, r = [], i = [], o = "", c = !1) {
  let f = (d, p, h = c, y) => {
    let v = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(o) && h)
        return;
      rt(
        v.relativePath.startsWith(o),
        `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), v.relativePath = v.relativePath.slice(o.length);
    }
    let g = $n([o, v.relativePath]), E = i.concat(v);
    d.children && d.children.length > 0 && (rt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      d.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
    ), Yb(
      d.children,
      r,
      E,
      g,
      h
    )), !(d.path == null && !d.index) && r.push({
      path: g,
      score: K3(g, d.index),
      routesMeta: E.map((O, T) => {
        let [x, w] = Gb(
          O.relativePath,
          O.caseSensitive,
          T === E.length - 1
        );
        return {
          ...O,
          matcher: x,
          compiledParams: w
        };
      })
    });
  };
  return a.forEach((d, p) => {
    var h;
    if (d.path === "" || !((h = d.path) != null && h.includes("?")))
      f(d, p);
    else
      for (let y of Vb(d.path))
        f(d, p, !0, y);
  }), r;
}
function Vb(a) {
  let r = a.split("/");
  if (r.length === 0) return [];
  let [i, ...o] = r, c = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [f, ""] : [f];
  let d = Vb(o.join("/")), p = [];
  return p.push(
    ...d.map(
      (h) => h === "" ? f : [f, h].join("/")
    )
  ), c && p.push(...d), p.map(
    (h) => a.startsWith("/") && h === "" ? "/" : h
  );
}
function k3(a) {
  a.sort(
    (r, i) => r.score !== i.score ? i.score - r.score : Z3(
      r.routesMeta.map((o) => o.childrenIndex),
      i.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Y3 = /^:[\w-]+$/, V3 = 3, q3 = 2, G3 = 1, X3 = 10, Q3 = -2, Ov = (a) => a === "*";
function K3(a, r) {
  let i = a.split("/"), o = i.length;
  return i.some(Ov) && (o += Q3), r && (o += q3), i.filter((c) => !Ov(c)).reduce(
    (c, f) => c + (Y3.test(f) ? V3 : f === "" ? G3 : X3),
    o
  );
}
function Z3(a, r) {
  return a.length === r.length && a.slice(0, -1).every((o, c) => o === r[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function I3(a, r, i = !1) {
  let { routesMeta: o } = a, c = {}, f = "/", d = [];
  for (let p = 0; p < o.length; ++p) {
    let h = o[p], y = p === o.length - 1, v = f === "/" ? r : r.slice(f.length) || "/", g = {
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: y
    }, E = (
      // Use precomputed matcher if it exists
      h.matcher && h.compiledParams ? qb(
        g,
        v,
        h.matcher,
        h.compiledParams
      ) : Cs(g, v)
    ), O = h.route;
    if (!E && y && i && !o[o.length - 1].route.index && (E = Cs(
      {
        path: h.relativePath,
        caseSensitive: h.caseSensitive,
        end: !1
      },
      v
    )), !E)
      return null;
    Object.assign(c, E.params), d.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: $n([f, E.pathname]),
      pathnameBase: W3(
        $n([f, E.pathnameBase])
      ),
      route: O
    }), E.pathnameBase !== "/" && (f = $n([f, E.pathnameBase]));
  }
  return d;
}
function Cs(a, r) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [i, o] = Gb(
    a.path,
    a.caseSensitive,
    a.end
  );
  return qb(a, r, i, o);
}
function qb(a, r, i, o) {
  let c = r.match(i);
  if (!c) return null;
  let f = c[0], d = Jr(f, 1), p = c.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: v, isOptional: g }, E) => {
        if (v === "*") {
          let T = p[E] || "";
          d = Jr(
            f.slice(0, f.length - T.length),
            1
          );
        }
        const O = p[E];
        return g && !O ? y[v] = void 0 : y[v] = (O || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: d,
    pattern: a
  };
}
function Gb(a, r = !1, i = !0) {
  oa(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, p, h, y, v) => {
      if (o.push({ paramName: p, isOptional: h != null }), h) {
        let g = v.charAt(y + d.length);
        return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return a.endsWith("*") ? (o.push({ paramName: "*" }), c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function P3(a) {
  try {
    return a.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return oa(
      !1,
      `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), a;
  }
}
function _a(a, r) {
  if (r === "/") return a;
  if (!a.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let i = r.endsWith("/") ? r.length - 1 : r.length, o = a.charAt(i);
  return o && o !== "/" ? null : a.slice(i) || "/";
}
function J3(a, r = "/") {
  let {
    pathname: i,
    search: o = "",
    hash: c = ""
  } = typeof a == "string" ? Wr(a) : a, f;
  return i ? (i = Qb(i), i.startsWith("/") || i.startsWith("\\") ? f = wv(i.substring(1), "/") : f = wv(i, r)) : f = r, {
    pathname: f,
    search: eO(o),
    hash: tO(c)
  };
}
function wv(a, r) {
  let i = Jr(r).split("/");
  return a.split("/").forEach((c) => {
    c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c);
  }), i.length > 1 ? i.join("/") : "/";
}
function Hd(a, r, i, o) {
  return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function F3(a) {
  return a.filter(
    (r, i) => i === 0 || r.route.path && r.route.path.length > 0
  );
}
function Xb(a) {
  let r = F3(a);
  return r.map(
    (i, o) => o === r.length - 1 ? i.pathname : i.pathnameBase
  );
}
function Lm(a, r, i, o = !1) {
  let c;
  typeof a == "string" ? c = Wr(a) : (c = { ...a }, rt(
    !c.pathname || !c.pathname.includes("?"),
    Hd("?", "pathname", "search", c)
  ), rt(
    !c.pathname || !c.pathname.includes("#"),
    Hd("#", "pathname", "hash", c)
  ), rt(
    !c.search || !c.search.includes("#"),
    Hd("#", "search", "hash", c)
  ));
  let f = a === "" || c.pathname === "", d = f ? "/" : c.pathname, p;
  if (d == null)
    p = i;
  else {
    let g = r.length - 1;
    if (!o && d.startsWith("..")) {
      let E = d.split("/");
      for (; E[0] === ".."; )
        E.shift(), g -= 1;
      c.pathname = E.join("/");
    }
    p = g >= 0 ? r[g] : "/";
  }
  let h = J3(c, p), y = d && d !== "/" && d.endsWith("/"), v = (f || d === ".") && i.endsWith("/");
  return !h.pathname.endsWith("/") && (y || v) && (h.pathname += "/"), h;
}
var Qb = (a) => a.replace(/[\\/]{2,}/g, "/"), $n = (a) => Qb(a.join("/"));
function Jr(a, r = 0) {
  let i = a.length;
  for (; i > r && a.charCodeAt(i - 1) === 47; )
    i--;
  return i === a.length ? a : a.slice(0, i);
}
var W3 = (a) => Jr(a).replace(/^\/*/, "/"), eO = (a) => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a, tO = (a) => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a, nO = class {
  constructor(a, r, i, o = !1) {
    this.status = a, this.statusText = r || "", this.internal = o, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function aO(a) {
  return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a;
}
function lO(a) {
  let r = a.map((i) => i.route.path).filter(Boolean);
  return $n(r) || "/";
}
var Kb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Zb(a, r) {
  let i = a;
  if (typeof i != "string" || !Hm.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let o = i, c = !1;
  if (Kb)
    try {
      let f = new URL(window.location.href), d = $b.test(i) ? new URL(D3(i, f.protocol)) : new URL(i), p = _a(d.pathname, r);
      d.origin === f.origin && p != null ? i = p + d.search + d.hash : c = !0;
    } catch {
      oa(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: c,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Av = new URL("http://localhost");
function Ib(a) {
  if (a.createURL)
    return a.createURL("/");
  try {
    return new URL(a.createHref("/"), Av);
  } catch {
    return Av;
  }
}
function Ld(a, r) {
  return a.origin === r.origin && (a.origin !== "null" || a.protocol === r.protocol && a.host === r.host);
}
function rO(a, r) {
  if (a.startsWith("//"))
    return !0;
  let i = r.protocol.toLowerCase();
  return a.toLowerCase().startsWith(i) ? r.host === "" || a.slice(i.length).startsWith("//") : !1;
}
function Pb(a, r, i, o) {
  let c = null;
  try {
    c = a == null ? null : new URL(a, i);
  } catch {
  }
  let f = new URL(r, i), d = c != null && !Ld(c, i), p = !Ld(f, i);
  if (o === "reject") {
    if (d || p)
      throw new Error("External navigation is not allowed");
  } else if (p && (c == null || !rO(a, c) || !Ld(c, f)))
    throw new Error("External navigation is not allowed");
}
var Jb = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Jb
);
var iO = [
  "GET",
  ...Jb
];
new Set(iO);
var oO = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"
];
function uO(a) {
  try {
    return oO.includes(new URL(a).protocol);
  } catch {
    return !1;
  }
}
var ei = C.createContext(null);
ei.displayName = "DataRouter";
var ks = C.createContext(null);
ks.displayName = "DataRouterState";
var Fb = C.createContext(!1);
function sO() {
  return C.useContext(Fb);
}
var Wb = C.createContext({
  isTransitioning: !1
});
Wb.displayName = "ViewTransition";
var cO = C.createContext(
  /* @__PURE__ */ new Map()
);
cO.displayName = "Fetchers";
var fO = C.createContext(null);
fO.displayName = "Await";
var Nn = C.createContext(
  null
);
Nn.displayName = "Navigation";
var Eo = C.createContext(
  null
);
Eo.displayName = "Location";
var Da = C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Da.displayName = "Route";
var jm = C.createContext(null);
jm.displayName = "RouteError";
var e1 = "REACT_ROUTER_ERROR", dO = "REDIRECT", mO = "ROUTE_ERROR_RESPONSE";
function pO(a) {
  if (a.startsWith(`${e1}:${dO}:{`))
    try {
      let r = JSON.parse(a.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function hO(a) {
  if (a.startsWith(
    `${e1}:${mO}:{`
  ))
    try {
      let r = JSON.parse(a.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new nO(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function gO(a, { relative: r } = {}) {
  rt(
    xo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: o } = C.useContext(Nn), { hash: c, pathname: f, search: d } = To(a, { relative: r }), p = f;
  return i !== "/" && (p = f === "/" ? i : $n([i, f])), o.createHref({ pathname: p, search: d, hash: c });
}
function xo() {
  return C.useContext(Eo) != null;
}
function sa() {
  return rt(
    xo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), C.useContext(Eo).location;
}
var t1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function n1(a) {
  C.useContext(Nn).static || C.useLayoutEffect(a);
}
function a1() {
  let { isDataRoute: a } = C.useContext(Da);
  return a ? zO() : yO();
}
function yO() {
  rt(
    xo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = C.useContext(ei), { basename: r, navigator: i } = C.useContext(Nn), { matches: o } = C.useContext(Da), { pathname: c } = sa(), f = JSON.stringify(Xb(o)), d = C.useRef(!1);
  return n1(() => {
    d.current = !0;
  }), C.useCallback(
    (h, y = {}) => {
      if (oa(d.current, t1), !d.current) return;
      if (typeof h == "number") {
        i.go(h);
        return;
      }
      let v = Lm(
        h,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      a == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : $n([r, v.pathname])), Pb(
        typeof h == "string" ? h : Pr(h),
        i.createHref(v),
        Ib(i),
        "reject"
      ), (y.replace ? i.replace : i.push)(
        v,
        y.state,
        y
      );
    },
    [
      r,
      i,
      f,
      c,
      a
    ]
  );
}
C.createContext(null);
function To(a, { relative: r } = {}) {
  let { matches: i } = C.useContext(Da), { pathname: o } = sa(), c = JSON.stringify(Xb(i));
  return C.useMemo(
    () => Lm(
      a,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [a, c, o, r]
  );
}
function vO(a, r) {
  return l1(a, r);
}
function l1(a, r, i) {
  var w;
  rt(
    xo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = C.useContext(Nn), { matches: c } = C.useContext(Da), f = c[c.length - 1], d = f ? f.params : {}, p = f ? f.pathname : "/", h = f ? f.pathnameBase : "/", y = f && f.route;
  {
    let M = y && y.path || "";
    i1(
      p,
      !y || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`
    );
  }
  let v = sa(), g;
  if (r) {
    let M = typeof r == "string" ? Wr(r) : r;
    rt(
      h === "/" || ((w = M.pathname) == null ? void 0 : w.startsWith(h)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ), g = M;
  } else
    g = v;
  let E = g.pathname || "/", O = E;
  if (h !== "/") {
    let M = h.replace(/^\//, "").split("/");
    O = "/" + E.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let T = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (M) => Object.assign(M, {
        route: i.manifest[M.route.id] || M.route
      })
    )
  ) : kb(a, { pathname: O });
  oa(
    y || T != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), oa(
    T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let x = xO(
    T && T.map(
      (M) => Object.assign({}, M, {
        params: Object.assign({}, d, M.params),
        pathname: $n([
          h,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            M.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathname
        ]),
        pathnameBase: M.pathnameBase === "/" ? h : $n([
          h,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            M.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathnameBase
        ])
      })
    ),
    c,
    i
  );
  return r && x ? /* @__PURE__ */ C.createElement(
    Eo.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...g
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    x
  ) : x;
}
function bO() {
  let a = AO(), r = aO(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a), i = a instanceof Error ? a.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, f = { padding: "2px 4px", backgroundColor: o }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    a
  ), d = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ C.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ C.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ C.createElement("h3", { style: { fontStyle: "italic" } }, r), i ? /* @__PURE__ */ C.createElement("pre", { style: c }, i) : null, d);
}
var SO = /* @__PURE__ */ C.createElement(bO, null), r1 = class extends C.Component {
  constructor(a) {
    super(a), this.state = {
      location: a.location,
      revalidation: a.revalidation,
      error: a.error
    };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, r) {
    return r.location !== a.location || r.revalidation !== "idle" && a.revalidation === "idle" ? {
      error: a.error,
      location: a.location,
      revalidation: a.revalidation
    } : {
      error: a.error !== void 0 ? a.error : r.error,
      location: r.location,
      revalidation: a.revalidation || r.revalidation
    };
  }
  componentDidCatch(a, r) {
    this.props.onError ? this.props.onError(a, r) : console.error(
      "React Router caught the following error during render",
      a
    );
  }
  render() {
    let a = this.state.error;
    if (this.context && typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
      const i = hO(a.digest);
      i && (a = i);
    }
    let r = a !== void 0 ? /* @__PURE__ */ C.createElement(Da.Provider, { value: this.props.routeContext }, /* @__PURE__ */ C.createElement(
      jm.Provider,
      {
        value: a,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ C.createElement(CO, { error: a }, r) : r;
  }
};
r1.contextType = Fb;
var jd = /* @__PURE__ */ new WeakMap();
function CO({
  children: a,
  error: r
}) {
  let { basename: i, navigator: o } = C.useContext(Nn);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = pO(r.digest);
    if (c) {
      let f = jd.get(r);
      if (f) throw f;
      let d = Zb(c.location, i), p = d.absoluteURL || d.to;
      if (Pb(
        c.location,
        p,
        Ib(o),
        "allow-explicit"
      ), uO(p))
        throw new Error("Invalid redirect location");
      if (Kb && !jd.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = p;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw jd.set(r, h), h;
        }
      return /* @__PURE__ */ C.createElement("meta", { httpEquiv: "refresh", content: `0;url=${p}` });
    }
  }
  return a;
}
function EO({ routeContext: a, match: r, children: i }) {
  let o = C.useContext(ei);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ C.createElement(Da.Provider, { value: a }, i);
}
function xO(a, r = [], i) {
  let o = i == null ? void 0 : i.state;
  if (a == null) {
    if (!o)
      return null;
    if (o.errors)
      a = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      a = o.matches;
    else
      return null;
  }
  let c = a, f = o == null ? void 0 : o.errors;
  if (f != null) {
    let v = c.findIndex(
      (g) => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0
    );
    rt(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), c = c.slice(
      0,
      Math.min(c.length, v + 1)
    );
  }
  let d = !1, p = -1;
  if (i && o) {
    d = o.renderFallback;
    for (let v = 0; v < c.length; v++) {
      let g = c[v];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = v), g.route.id) {
        let { loaderData: E, errors: O } = o, T = g.route.loader && !E.hasOwnProperty(g.route.id) && (!O || O[g.route.id] === void 0);
        if (g.route.lazy || T) {
          i.isStatic && (d = !0), p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  }
  let h = i == null ? void 0 : i.onError, y = o && h ? (v, g) => {
    var E, O;
    h(v, {
      location: o.location,
      params: ((O = (E = o.matches) == null ? void 0 : E[0]) == null ? void 0 : O.params) ?? {},
      pattern: lO(o.matches),
      errorInfo: g
    });
  } : void 0;
  return c.reduceRight(
    (v, g, E) => {
      let O, T = !1, x = null, w = null;
      o && (O = f && g.route.id ? f[g.route.id] : void 0, x = g.route.errorElement || SO, d && (p < 0 && E === 0 ? (i1(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), T = !0, w = null) : p === E && (T = !0, w = g.route.hydrateFallbackElement || null)));
      let M = r.concat(c.slice(0, E + 1)), q = () => {
        let U;
        return O ? U = x : T ? U = w : g.route.Component ? U = /* @__PURE__ */ C.createElement(g.route.Component, null) : g.route.element ? U = g.route.element : U = v, /* @__PURE__ */ C.createElement(
          EO,
          {
            match: g,
            routeContext: {
              outlet: v,
              matches: M,
              isDataRoute: o != null
            },
            children: U
          }
        );
      };
      return o && (g.route.ErrorBoundary || g.route.errorElement || E === 0) ? /* @__PURE__ */ C.createElement(
        r1,
        {
          location: o.location,
          revalidation: o.revalidation,
          component: x,
          error: O,
          children: q(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          onError: y
        }
      ) : q();
    },
    null
  );
}
function $m(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function TO(a) {
  let r = C.useContext(ei);
  return rt(r, $m(a)), r;
}
function RO(a) {
  let r = C.useContext(ks);
  return rt(r, $m(a)), r;
}
function OO(a) {
  let r = C.useContext(Da);
  return rt(r, $m(a)), r;
}
function km(a) {
  let r = OO(a), i = r.matches[r.matches.length - 1];
  return rt(
    i.route.id,
    `${a} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function wO() {
  return km(
    "useRouteId"
    /* UseRouteId */
  );
}
function AO() {
  var o;
  let a = C.useContext(jm), r = RO(
    "useRouteError"
    /* UseRouteError */
  ), i = km(
    "useRouteError"
    /* UseRouteError */
  );
  return a !== void 0 ? a : (o = r.errors) == null ? void 0 : o[i];
}
function zO() {
  let { router: a } = TO(
    "useNavigate"
    /* UseNavigateStable */
  ), r = km(
    "useNavigate"
    /* UseNavigateStable */
  ), i = C.useRef(!1);
  return n1(() => {
    i.current = !0;
  }), C.useCallback(
    async (c, f = {}) => {
      oa(i.current, t1), i.current && (typeof c == "number" ? await a.navigate(c) : await a.navigate(c, { fromRouteId: r, ...f }));
    },
    [a, r]
  );
}
var zv = {};
function i1(a, r, i) {
  !r && !zv[a] && (zv[a] = !0, oa(!1, i));
}
C.memo(MO);
function MO({
  routes: a,
  manifest: r,
  future: i,
  state: o,
  isStatic: c,
  onError: f
}) {
  return l1(a, void 0, {
    manifest: r,
    state: o,
    isStatic: c,
    onError: f
  });
}
function o1(a) {
  rt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function NO({
  basename: a = "/",
  children: r = null,
  location: i,
  navigationType: o = "POP",
  navigator: c,
  static: f = !1,
  useTransitions: d
}) {
  rt(
    !xo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = a.replace(/^\/*/, "/"), h = C.useMemo(
    () => ({
      basename: p,
      navigator: c,
      static: f,
      useTransitions: d,
      future: {}
    }),
    [p, c, f, d]
  );
  typeof i == "string" && (i = Wr(i));
  let {
    pathname: y = "/",
    search: v = "",
    hash: g = "",
    state: E = null,
    key: O = "default",
    mask: T
  } = i, x = C.useMemo(() => {
    let w = _a(y, p);
    return w == null ? null : {
      location: {
        pathname: w,
        search: v,
        hash: g,
        state: E,
        key: O,
        mask: T
      },
      navigationType: o
    };
  }, [p, y, v, g, E, O, o, T]);
  return oa(
    x != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), x == null ? null : /* @__PURE__ */ C.createElement(Nn.Provider, { value: h }, /* @__PURE__ */ C.createElement(Eo.Provider, { children: r, value: x }));
}
function _O({
  children: a,
  location: r
}) {
  return vO(im(a), r);
}
function im(a, r = []) {
  let i = [];
  return C.Children.forEach(a, (o, c) => {
    if (!C.isValidElement(o))
      return;
    let f = [...r, c];
    if (o.type === C.Fragment) {
      i.push.apply(
        i,
        im(o.props.children, f)
      );
      return;
    }
    rt(
      o.type === o1,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), rt(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: o.props.id || f.join("-"),
      caseSensitive: o.props.caseSensitive,
      element: o.props.element,
      Component: o.props.Component,
      index: o.props.index,
      path: o.props.path,
      middleware: o.props.middleware,
      loader: o.props.loader,
      action: o.props.action,
      hydrateFallbackElement: o.props.hydrateFallbackElement,
      HydrateFallback: o.props.HydrateFallback,
      errorElement: o.props.errorElement,
      ErrorBoundary: o.props.ErrorBoundary,
      hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
      shouldRevalidate: o.props.shouldRevalidate,
      handle: o.props.handle,
      lazy: o.props.lazy
    };
    o.props.children && (d.children = im(
      o.props.children,
      f
    )), i.push(d);
  }), i;
}
var fs = "get", ds = "application/x-www-form-urlencoded";
function Ys(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function DO(a) {
  return Ys(a) && a.tagName.toLowerCase() === "button";
}
function BO(a) {
  return Ys(a) && a.tagName.toLowerCase() === "form";
}
function UO(a) {
  return Ys(a) && a.tagName.toLowerCase() === "input";
}
function HO(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function LO(a, r) {
  return a.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !HO(a);
}
var is = null;
function jO() {
  if (is === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), is = !1;
    } catch {
      is = !0;
    }
  return is;
}
var $O = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function $d(a) {
  return a != null && !$O.has(a) ? (oa(
    !1,
    `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ds}"`
  ), null) : a;
}
function kO(a, r) {
  let i, o, c, f, d;
  if (BO(a)) {
    let p = a.getAttribute("action");
    o = p ? _a(p, r) : null, i = a.getAttribute("method") || fs, c = $d(a.getAttribute("enctype")) || ds, f = new FormData(a);
  } else if (DO(a) || UO(a) && (a.type === "submit" || a.type === "image")) {
    let p = a.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = a.getAttribute("formaction") || p.getAttribute("action");
    if (o = h ? _a(h, r) : null, i = a.getAttribute("formmethod") || p.getAttribute("method") || fs, c = $d(a.getAttribute("formenctype")) || $d(p.getAttribute("enctype")) || ds, f = new FormData(p, a), !jO()) {
      let { name: y, type: v, value: g } = a;
      if (v === "image") {
        let E = y ? `${y}.` : "";
        f.append(`${E}x`, "0"), f.append(`${E}y`, "0");
      } else y && f.append(y, g);
    }
  } else {
    if (Ys(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = fs, o = null, c = ds, d = a;
  }
  return f && c === "text/plain" && (d = f, f = void 0), { action: o, method: i.toLowerCase(), encType: c, formData: f, body: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ym(a, r) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(r);
}
function u1(a, r, i, o) {
  let c = typeof a == "string" ? new URL(
    a,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : a;
  return i ? c.pathname.endsWith("/") ? c.pathname = `${c.pathname}_.${o}` : c.pathname = `${c.pathname}.${o}` : c.pathname === "/" ? c.pathname = `_root.${o}` : r && _a(c.pathname, r) === "/" ? c.pathname = `${Jr(r)}/_root.${o}` : c.pathname = `${Jr(c.pathname)}.${o}`, c;
}
async function YO(a, r) {
  if (a.id in r)
    return r[a.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      a.module
    );
    return r[a.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${a.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function VO(a) {
  return a == null ? !1 : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string";
}
async function qO(a, r, i) {
  let o = await Promise.all(
    a.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let d = await YO(f, i);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return KO(
    o.flat(1).filter(VO).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function Mv(a, r, i, o, c, f) {
  let d = (h, y) => i[y] ? h.route.id !== i[y].route.id : !0, p = (h, y) => {
    var v;
    return (
      // param change, /users/123 -> /users/456
      i[y].pathname !== h.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((v = i[y].route.path) == null ? void 0 : v.endsWith("*")) && i[y].params["*"] !== h.params["*"]
    );
  };
  return f === "assets" ? r.filter(
    (h, y) => d(h, y) || p(h, y)
  ) : f === "data" ? r.filter((h, y) => {
    var g;
    let v = o.routes[h.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (d(h, y) || p(h, y))
      return !0;
    if (h.route.shouldRevalidate) {
      let E = h.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: ((g = i[0]) == null ? void 0 : g.params) || {},
        nextUrl: new URL(a, window.origin),
        nextParams: h.params,
        defaultShouldRevalidate: !0
      });
      if (typeof E == "boolean")
        return E;
    }
    return !0;
  }) : [];
}
function GO(a, r, { includeHydrateFallback: i } = {}) {
  return XO(
    a.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), i && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function XO(a) {
  return [...new Set(a)];
}
function QO(a) {
  let r = {}, i = Object.keys(a).sort();
  for (let o of i)
    r[o] = a[o];
  return r;
}
function KO(a, r) {
  let i = /* @__PURE__ */ new Set();
  return new Set(r), a.reduce((o, c) => {
    let f = JSON.stringify(QO(c));
    return i.has(f) || (i.add(f), o.push({ key: f, link: c })), o;
  }, []);
}
function Vm() {
  let a = C.useContext(ei);
  return Ym(
    a,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), a;
}
function ZO() {
  let a = C.useContext(ks);
  return Ym(
    a,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), a;
}
var qm = C.createContext(void 0);
qm.displayName = "FrameworkContext";
function Vs() {
  let a = C.useContext(qm);
  return Ym(
    a,
    "You must render this element inside a <HydratedRouter> element"
  ), a;
}
function IO(a, r) {
  let i = C.useContext(qm), [o, c] = C.useState(!1), [f, d] = C.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: y, onMouseLeave: v, onTouchStart: g } = r, E = C.useRef(null);
  C.useEffect(() => {
    if (a === "render" && d(!0), a === "viewport") {
      let x = (M) => {
        M.forEach((q) => {
          d(q.isIntersecting);
        });
      }, w = new IntersectionObserver(x, { threshold: 0.5 });
      return E.current && w.observe(E.current), () => {
        w.disconnect();
      };
    }
  }, [a]), C.useEffect(() => {
    if (o) {
      let x = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(x);
      };
    }
  }, [o]);
  let O = () => {
    c(!0);
  }, T = () => {
    c(!1), d(!1);
  };
  return i ? a !== "intent" ? [f, E, {}] : [
    f,
    E,
    {
      onFocus: Fi(p, O),
      onBlur: Fi(h, T),
      onMouseEnter: Fi(y, O),
      onMouseLeave: Fi(v, T),
      onTouchStart: Fi(g, O)
    }
  ] : [!1, E, {}];
}
function Fi(a, r) {
  return (i) => {
    a && a(i), i.defaultPrevented || r(i);
  };
}
function PO({ page: a, ...r }) {
  let i = sO(), { nonce: o } = Vs(), { router: c } = Vm(), f = C.useMemo(
    () => kb(c.routes, a, c.basename),
    [c.routes, a, c.basename]
  );
  return f ? (r.nonce == null && o && (r = { ...r, nonce: o }), i ? /* @__PURE__ */ C.createElement(FO, { page: a, matches: f, ...r }) : /* @__PURE__ */ C.createElement(WO, { page: a, matches: f, ...r })) : null;
}
function JO(a) {
  let { manifest: r, routeModules: i } = Vs(), [o, c] = C.useState([]);
  return C.useEffect(() => {
    let f = !1;
    return qO(a, r, i).then(
      (d) => {
        f || c(d);
      }
    ), () => {
      f = !0;
    };
  }, [a, r, i]), o;
}
function FO({
  page: a,
  matches: r,
  ...i
}) {
  let o = sa(), { future: c } = Vs(), { basename: f } = Vm(), d = C.useMemo(() => {
    if (a === o.pathname + o.search + o.hash)
      return [];
    let p = u1(
      a,
      f,
      c.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), h = !1, y = [];
    for (let v of r)
      typeof v.route.shouldRevalidate == "function" ? h = !0 : y.push(v.route.id);
    return h && y.length > 0 && p.searchParams.set("_routes", y.join(",")), [p.pathname + p.search];
  }, [
    f,
    c.v8_trailingSlashAwareDataRequests,
    a,
    o,
    r
  ]);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, d.map((p) => /* @__PURE__ */ C.createElement("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...i })));
}
function WO({
  page: a,
  matches: r,
  ...i
}) {
  let o = sa(), { future: c, manifest: f, routeModules: d } = Vs(), { basename: p } = Vm(), { loaderData: h, matches: y } = ZO(), v = C.useMemo(
    () => Mv(
      a,
      r,
      y,
      f,
      o,
      "data"
    ),
    [a, r, y, f, o]
  ), g = C.useMemo(
    () => Mv(
      a,
      r,
      y,
      f,
      o,
      "assets"
    ),
    [a, r, y, f, o]
  ), E = C.useMemo(() => {
    if (a === o.pathname + o.search + o.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), w = !1;
    if (r.forEach((q) => {
      var H;
      let U = f.routes[q.route.id];
      !U || !U.hasLoader || (!v.some((N) => N.route.id === q.route.id) && q.route.id in h && ((H = d[q.route.id]) != null && H.shouldRevalidate) || U.hasClientLoader ? w = !0 : x.add(q.route.id));
    }), x.size === 0)
      return [];
    let M = u1(
      a,
      p,
      c.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return w && x.size > 0 && M.searchParams.set(
      "_routes",
      r.filter((q) => x.has(q.route.id)).map((q) => q.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    p,
    c.v8_trailingSlashAwareDataRequests,
    h,
    o,
    f,
    v,
    r,
    a,
    d
  ]), O = C.useMemo(
    () => GO(g, f),
    [g, f]
  ), T = JO(g);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, E.map((x) => /* @__PURE__ */ C.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...i })), O.map((x) => /* @__PURE__ */ C.createElement("link", { key: x, rel: "modulepreload", href: x, ...i })), T.map(({ key: x, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ C.createElement(
      "link",
      {
        key: x,
        nonce: i.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function ew(...a) {
  return (r) => {
    a.forEach((i) => {
      typeof i == "function" ? i(r) : i != null && (i.current = r);
    });
  };
}
var tw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  tw && (window.__reactRouterVersion = // @ts-expect-error
  "7.18.4");
} catch {
}
function nw({
  basename: a,
  children: r,
  useTransitions: i,
  window: o
}) {
  let c = C.useRef();
  c.current == null && (c.current = B3({ window: o, v5Compat: !0 }));
  let f = c.current, [d, p] = C.useState({
    action: f.action,
    location: f.location
  }), h = C.useCallback(
    (y) => {
      i === !1 ? p(y) : C.startTransition(() => p(y));
    },
    [i]
  );
  return C.useLayoutEffect(() => f.listen(h), [f, h]), /* @__PURE__ */ C.createElement(
    NO,
    {
      basename: a,
      children: r,
      location: d.location,
      navigationType: d.action,
      navigator: f,
      useTransitions: i
    }
  );
}
var s1 = C.forwardRef(
  function({
    onClick: r,
    discover: i = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: f,
    replace: d,
    mask: p,
    state: h,
    target: y,
    to: v,
    preventScrollReset: g,
    viewTransition: E,
    defaultShouldRevalidate: O,
    ...T
  }, x) {
    let { basename: w, navigator: M, useTransitions: q } = C.useContext(Nn), U = typeof v == "string" && Hm.test(v), H = Zb(v, w);
    v = H.to;
    let N = gO(v, { relative: c }), Q = sa(), G = null;
    if (p) {
      let F = Lm(
        p,
        [],
        Q.mask ? Q.mask.pathname : "/",
        !0
      );
      w !== "/" && (F.pathname = F.pathname === "/" ? w : $n([w, F.pathname])), G = M.createHref(F);
    }
    let [Z, J, S] = IO(
      o,
      T
    ), $ = iw(v, {
      replace: d,
      mask: p,
      state: h,
      target: y,
      preventScrollReset: g,
      relative: c,
      viewTransition: E,
      defaultShouldRevalidate: O,
      useTransitions: q
    });
    function ee(F) {
      r && r(F), F.defaultPrevented || $(F);
    }
    let ae = !(H.isExternal || f), le = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ C.createElement(
        "a",
        {
          ...T,
          ...S,
          href: (ae ? G : void 0) || H.absoluteURL || N,
          onClick: ae ? ee : r,
          ref: ew(x, J),
          target: y,
          "data-discover": !U && i === "render" ? "true" : void 0
        }
      )
    );
    return Z && !U ? /* @__PURE__ */ C.createElement(C.Fragment, null, le, /* @__PURE__ */ C.createElement(PO, { page: N })) : le;
  }
);
s1.displayName = "Link";
var aw = C.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: c = !1,
    style: f,
    to: d,
    viewTransition: p,
    children: h,
    ...y
  }, v) {
    let g = To(d, { relative: y.relative }), E = sa(), O = C.useContext(ks), { navigator: T, basename: x } = C.useContext(Nn), w = O != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fw(g) && p === !0, M = T.encodeLocation ? T.encodeLocation(g).pathname : g.pathname, q = E.pathname, U = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
    i || (q = q.toLowerCase(), U = U ? U.toLowerCase() : null, M = M.toLowerCase()), U && x && (U = _a(U, x) || U);
    const H = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let N = q === M || !c && q.startsWith(M) && q.charAt(H) === "/", Q = U != null && (U === M || !c && U.startsWith(M) && U.charAt(M.length) === "/"), G = {
      isActive: N,
      isPending: Q,
      isTransitioning: w
    }, Z = N ? r : void 0, J;
    typeof o == "function" ? J = o(G) : J = [
      o,
      N ? "active" : null,
      Q ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof f == "function" ? f(G) : f;
    return /* @__PURE__ */ C.createElement(
      s1,
      {
        ...y,
        "aria-current": Z,
        className: J,
        ref: v,
        style: S,
        to: d,
        viewTransition: p
      },
      typeof h == "function" ? h(G) : h
    );
  }
);
aw.displayName = "NavLink";
var lw = C.forwardRef(
  ({
    discover: a = "render",
    fetcherKey: r,
    navigate: i,
    reloadDocument: o,
    replace: c,
    state: f,
    method: d = fs,
    action: p,
    onSubmit: h,
    relative: y,
    preventScrollReset: v,
    viewTransition: g,
    defaultShouldRevalidate: E,
    ...O
  }, T) => {
    let { useTransitions: x } = C.useContext(Nn), w = sw(), M = cw(p, { relative: y }), q = d.toLowerCase() === "get" ? "get" : "post", U = typeof p == "string" && Hm.test(p), H = (N) => {
      if (h && h(N), N.defaultPrevented) return;
      N.preventDefault();
      let Q = N.nativeEvent.submitter, G = (Q == null ? void 0 : Q.getAttribute("formmethod")) || d, Z = () => w(Q || N.currentTarget, {
        fetcherKey: r,
        method: G,
        navigate: i,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: v,
        viewTransition: g,
        defaultShouldRevalidate: E
      });
      x && i !== !1 ? C.startTransition(() => Z()) : Z();
    };
    return /* @__PURE__ */ C.createElement(
      "form",
      {
        ref: T,
        method: q,
        action: M,
        onSubmit: o ? h : H,
        ...O,
        "data-discover": !U && a === "render" ? "true" : void 0
      }
    );
  }
);
lw.displayName = "Form";
function rw(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function c1(a) {
  let r = C.useContext(ei);
  return rt(r, rw(a)), r;
}
function iw(a, {
  target: r,
  replace: i,
  mask: o,
  state: c,
  preventScrollReset: f,
  relative: d,
  viewTransition: p,
  defaultShouldRevalidate: h,
  useTransitions: y
} = {}) {
  let v = a1(), g = sa(), E = To(a, { relative: d });
  return C.useCallback(
    (O) => {
      if (LO(O, r)) {
        O.preventDefault();
        let T = i !== void 0 ? i : Pr(g) === Pr(E), x = () => v(a, {
          replace: T,
          mask: o,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: p,
          defaultShouldRevalidate: h
        });
        y ? C.startTransition(() => x()) : x();
      }
    },
    [
      g,
      v,
      E,
      i,
      o,
      c,
      r,
      a,
      f,
      d,
      p,
      h,
      y
    ]
  );
}
var ow = 0, uw = () => `__${String(++ow)}__`;
function sw() {
  let { router: a } = c1(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = C.useContext(Nn), i = wO(), o = a.fetch, c = a.navigate;
  return C.useCallback(
    async (f, d = {}) => {
      let { action: p, method: h, encType: y, formData: v, body: g } = kO(
        f,
        r
      );
      if (d.navigate === !1) {
        let E = d.fetcherKey || uw();
        await o(E, i, d.action || p, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: g,
          formMethod: d.method || h,
          formEncType: d.encType || y,
          flushSync: d.flushSync
        });
      } else
        await c(d.action || p, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: g,
          formMethod: d.method || h,
          formEncType: d.encType || y,
          replace: d.replace,
          state: d.state,
          fromRouteId: i,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition
        });
    },
    [o, c, r, i]
  );
}
function cw(a, { relative: r } = {}) {
  let { basename: i } = C.useContext(Nn), o = C.useContext(Da);
  rt(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), f = { ...To(a || ".", { relative: r }) }, d = sa();
  if (a == null) {
    f.search = d.search;
    let p = new URLSearchParams(f.search), h = p.getAll("index");
    if (h.some((v) => v === "")) {
      p.delete("index"), h.filter((g) => g).forEach((g) => p.append("index", g));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (!a || a === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : $n([i, f.pathname])), Pr(f);
}
function fw(a, { relative: r } = {}) {
  let i = C.useContext(Wb);
  rt(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = c1(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = To(a, { relative: r });
  if (!i.isTransitioning)
    return !1;
  let f = _a(i.currentLocation.pathname, o) || i.currentLocation.pathname, d = _a(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return Cs(c.pathname, d) != null || Cs(c.pathname, f) != null;
}
const dw = Co(/* @__PURE__ */ X.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), Nv = Co(/* @__PURE__ */ X.jsx("path", {
  d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
}), "FilterList"), mw = Co([/* @__PURE__ */ X.jsx("path", {
  d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
}, "0"), /* @__PURE__ */ X.jsx("path", {
  d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
}, "1")], "DoubleArrow"), pw = Co(/* @__PURE__ */ X.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var kd = { exports: {} }, Wi = {}, Yd = { exports: {} }, Vd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _v;
function hw() {
  return _v || (_v = 1, (function(a) {
    function r(k, te) {
      var W = k.length;
      k.push(te);
      e: for (; 0 < W; ) {
        var ne = W - 1 >>> 1, ce = k[ne];
        if (0 < c(ce, te))
          k[ne] = te, k[W] = ce, W = ne;
        else break e;
      }
    }
    function i(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var te = k[0], W = k.pop();
      if (W !== te) {
        k[0] = W;
        e: for (var ne = 0, ce = k.length, ye = ce >>> 1; ne < ye; ) {
          var Oe = 2 * (ne + 1) - 1, Le = k[Oe], A = Oe + 1, Y = k[A];
          if (0 > c(Le, W))
            A < ce && 0 > c(Y, Le) ? (k[ne] = Y, k[A] = W, ne = A) : (k[ne] = Le, k[Oe] = W, ne = Oe);
          else if (A < ce && 0 > c(Y, W))
            k[ne] = Y, k[A] = W, ne = A;
          else break e;
        }
      }
      return te;
    }
    function c(k, te) {
      var W = k.sortIndex - te.sortIndex;
      return W !== 0 ? W : k.id - te.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      a.unstable_now = function() {
        return d.now() - p;
      };
    }
    var h = [], y = [], v = 1, g = null, E = 3, O = !1, T = !1, x = !1, w = !1, M = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function H(k) {
      for (var te = i(y); te !== null; ) {
        if (te.callback === null) o(y);
        else if (te.startTime <= k)
          o(y), te.sortIndex = te.expirationTime, r(h, te);
        else break;
        te = i(y);
      }
    }
    function N(k) {
      if (x = !1, H(k), !T)
        if (i(h) !== null)
          T = !0, Q || (Q = !0, ee());
        else {
          var te = i(y);
          te !== null && F(N, te.startTime - k);
        }
    }
    var Q = !1, G = -1, Z = 5, J = -1;
    function S() {
      return w ? !0 : !(a.unstable_now() - J < Z);
    }
    function $() {
      if (w = !1, Q) {
        var k = a.unstable_now();
        J = k;
        var te = !0;
        try {
          e: {
            T = !1, x && (x = !1, q(G), G = -1), O = !0;
            var W = E;
            try {
              t: {
                for (H(k), g = i(h); g !== null && !(g.expirationTime > k && S()); ) {
                  var ne = g.callback;
                  if (typeof ne == "function") {
                    g.callback = null, E = g.priorityLevel;
                    var ce = ne(
                      g.expirationTime <= k
                    );
                    if (k = a.unstable_now(), typeof ce == "function") {
                      g.callback = ce, H(k), te = !0;
                      break t;
                    }
                    g === i(h) && o(h), H(k);
                  } else o(h);
                  g = i(h);
                }
                if (g !== null) te = !0;
                else {
                  var ye = i(y);
                  ye !== null && F(
                    N,
                    ye.startTime - k
                  ), te = !1;
                }
              }
              break e;
            } finally {
              g = null, E = W, O = !1;
            }
            te = void 0;
          }
        } finally {
          te ? ee() : Q = !1;
        }
      }
    }
    var ee;
    if (typeof U == "function")
      ee = function() {
        U($);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), le = ae.port2;
      ae.port1.onmessage = $, ee = function() {
        le.postMessage(null);
      };
    } else
      ee = function() {
        M($, 0);
      };
    function F(k, te) {
      G = M(function() {
        k(a.unstable_now());
      }, te);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, a.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < k ? Math.floor(1e3 / k) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, a.unstable_next = function(k) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = E;
      }
      var W = E;
      E = te;
      try {
        return k();
      } finally {
        E = W;
      }
    }, a.unstable_requestPaint = function() {
      w = !0;
    }, a.unstable_runWithPriority = function(k, te) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var W = E;
      E = k;
      try {
        return te();
      } finally {
        E = W;
      }
    }, a.unstable_scheduleCallback = function(k, te, W) {
      var ne = a.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ne + W : ne) : W = ne, k) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return ce = W + ce, k = {
        id: v++,
        callback: te,
        priorityLevel: k,
        startTime: W,
        expirationTime: ce,
        sortIndex: -1
      }, W > ne ? (k.sortIndex = W, r(y, k), i(h) === null && k === i(y) && (x ? (q(G), G = -1) : x = !0, F(N, W - ne))) : (k.sortIndex = ce, r(h, k), T || O || (T = !0, Q || (Q = !0, ee()))), k;
    }, a.unstable_shouldYield = S, a.unstable_wrapCallback = function(k) {
      var te = E;
      return function() {
        var W = E;
        E = te;
        try {
          return k.apply(this, arguments);
        } finally {
          E = W;
        }
      };
    };
  })(Vd)), Vd;
}
var Dv;
function gw() {
  return Dv || (Dv = 1, Yd.exports = hw()), Yd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv;
function yw() {
  if (Bv) return Wi;
  Bv = 1;
  var a = gw(), r = um(), i = Nb();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    for (var t = e, n = t; n && !n.alternate; )
      t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (f(e) !== e)
      throw Error(o(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (l = u.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s; ) {
          if (s === n) return h(u), e;
          if (s === l) return h(u), t;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = u, l = s;
      else {
        for (var m = !1, b = u.child; b; ) {
          if (b === n) {
            m = !0, n = u, l = s;
            break;
          }
          if (b === l) {
            m = !0, l = u, n = s;
            break;
          }
          b = b.sibling;
        }
        if (!m) {
          for (b = s.child; b; ) {
            if (b === n) {
              m = !0, n = s, l = u;
              break;
            }
            if (b === l) {
              m = !0, l = s, n = u;
              break;
            }
            b = b.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function g(e, t, n, l, u, s) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, l, u, s) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && g(
        e.child,
        t,
        n,
        l,
        u,
        s
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function E(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function O(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function T(e) {
    var t = [null, null], n = E(e);
    return n === null || x(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function x(e, t, n, l) {
    for (; n !== null; ) {
      if (n === t) l.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (l.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && x(
        e,
        t,
        n.child,
        l
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function w(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var M = null, q = null;
  function U(e, t, n) {
    return e === n ? !0 : e === t ? (M = e, !0) : !1;
  }
  function H(e, t, n) {
    return e === n ? (q = e, !1) : e === t ? (q !== null && (M = e), !0) : !1;
  }
  function N(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function Q(e, t, n) {
    for (var l = 0, u = e; u; u = n(u)) l++;
    u = 0;
    for (var s = t; s; s = n(s)) u++;
    for (; 0 < l - u; ) e = n(e), l--;
    for (; 0 < u - l; ) t = n(t), u--;
    for (; l--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var G = Object.assign, Z = Symbol.for("react.element"), J = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), le = Symbol.for("react.consumer"), F = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ye = Symbol.for("react.activity"), Oe = Symbol.for("react.legacy_hidden"), Le = Symbol.for("react.memo_cache_sentinel"), A = Symbol.for("react.view_transition"), Y = Symbol.for("react.recoverable"), re = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ge = Symbol.for("react.client.reference");
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case ae:
        return "Profiler";
      case ee:
        return "StrictMode";
      case te:
        return "Suspense";
      case W:
        return "SuspenseList";
      case ye:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case le:
          return (e._context.displayName || "Context") + ".Consumer";
        case k:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ne:
          return t = e.displayName || null, t !== null ? t : Se(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return Se(e(t));
          } catch {
          }
      }
    return null;
  }
  var we = Array.isArray, se = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, kn = [], Yn = -1;
  function kt(e) {
    return { current: e };
  }
  function Je(e) {
    0 > Yn || (e.current = kn[Yn], kn[Yn] = null, Yn--);
  }
  function Ee(e, t) {
    Yn++, kn[Yn] = e.current, e.current = t;
  }
  var xt = kt(null), Qt = kt(null), gn = kt(null), be = kt(null);
  function ml(e, t) {
    switch (Ee(gn, t), Ee(Qt, e), Ee(xt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Cy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Cy(t), e = Ey(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Je(xt), Ee(xt, e);
  }
  function ca() {
    Je(xt), Je(Qt), Je(gn);
  }
  function Xl(e) {
    var t = e.memoizedState;
    t !== null && (Dr._currentValue = t.memoizedState, Ee(be, e)), t = xt.current;
    var n = Ey(t, e.type);
    t !== n && (Ee(Qt, e), Ee(xt, n));
  }
  function pl(e) {
    Qt.current === e && (Je(xt), Je(Qt)), be.current === e && (Je(be), Dr._currentValue = Xt);
  }
  var Ql, Tt;
  function at(e) {
    if (Ql === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ql = t && t[1] || "", Tt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ql + e + Tt;
  }
  var zt = !1;
  function fa(e, t) {
    if (!e || zt) return "";
    zt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (oe) {
                  var _ = oe;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (oe) {
                  _ = oe;
                }
                P = !1;
                try {
                  var j = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), P = !0, new e();
                } finally {
                  P && (j !== void 0 ? Object.defineProperty(e.prototype, "props", j) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (oe) {
                _ = oe;
              }
              (P = e()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (oe) {
            if (oe && _ && typeof oe.stack == "string")
              return [oe.stack, _.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = l.DetermineComponentFrameRoot(), m = s[0], b = s[1];
      if (m && b) {
        var R = m.split(`
`), B = b.split(`
`);
        for (u = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < B.length && !B[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === R.length || u === B.length)
          for (l = R.length - 1, u = B.length - 1; 1 <= l && 0 <= u && R[l] !== B[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (R[l] !== B[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || R[l] !== B[u]) {
                  var V = `
` + R[l].replace(" at new ", " at ");
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      zt = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? at(n) : "";
  }
  function en(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return at(e.type);
      case 16:
        return at("Lazy");
      case 13:
        return e.child !== t && t !== null ? at("Suspense Fallback") : at("Suspense");
      case 19:
        return at("SuspenseList");
      case 0:
      case 15:
        return fa(e.type, !1);
      case 11:
        return fa(e.type.render, !1);
      case 1:
        return fa(e.type, !0);
      case 31:
        return at("Activity");
      case 30:
        return at("ViewTransition");
      default:
        return "";
    }
  }
  function yn(e) {
    try {
      var t = "", n = null;
      do
        t += en(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var qs = Object.prototype.hasOwnProperty, Gs = a.unstable_scheduleCallback, Xs = a.unstable_cancelCallback, d1 = a.unstable_shouldYield, m1 = a.unstable_requestPaint, tn = a.unstable_now, p1 = a.unstable_getCurrentPriorityLevel, Gm = a.unstable_ImmediatePriority, Xm = a.unstable_UserBlockingPriority, Ro = a.unstable_NormalPriority, h1 = a.unstable_LowPriority, Qm = a.unstable_IdlePriority, g1 = a.log, y1 = a.unstable_setDisableYieldValue, ti = null, nn = null;
  function Ba(e) {
    if (typeof g1 == "function" && y1(e), nn && typeof nn.setStrictMode == "function")
      try {
        nn.setStrictMode(ti, e);
      } catch {
      }
  }
  var an = Math.clz32 ? Math.clz32 : S1, v1 = Math.log, b1 = Math.LN2;
  function S1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (v1(e) / b1 | 0) | 0;
  }
  var Oo = 256, wo = 262144, Ao = 4194304;
  function hl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function zo(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, s = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var b = l & 134217727;
    return b !== 0 ? (l = b & ~s, l !== 0 ? u = hl(l) : (m &= b, m !== 0 ? u = hl(m) : n || (n = b & ~e, n !== 0 && (u = hl(n))))) : (b = l & ~s, b !== 0 ? u = hl(b) : m !== 0 ? u = hl(m) : n || (n = l & ~e, n !== 0 && (u = hl(n)))), u === 0 ? 0 : t !== 0 && t !== u && (t & s) === 0 && (s = u & -u, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : u;
  }
  function ni(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Km(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - an(n), u = 1 << l;
        t |= e[l], n &= ~u;
      }
    return t;
  }
  function C1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zm() {
    var e = Ao;
    return Ao <<= 1, (Ao & 62914560) === 0 && (Ao = 4194304), e;
  }
  function Qs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ai(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function E1(e, t, n, l, u, s) {
    var m = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, R = e.expirationTimes, B = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var V = 31 - an(n), P = 1 << V;
      b[V] = 0, R[V] = -1;
      var _ = B[V];
      if (_ !== null)
        for (B[V] = null, V = 0; V < _.length; V++) {
          var j = _[V];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~P;
    }
    l !== 0 && Im(e, l, 0), s !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(m & ~t));
  }
  function Im(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - an(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Pm(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - an(n), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), n &= ~u;
    }
  }
  function Jm(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Ks(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Ks(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Zs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fm() {
    var e = pe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : r0(e.type));
  }
  function Wm(e, t) {
    var n = pe.p;
    try {
      return pe.p = e, t();
    } finally {
      pe.p = n;
    }
  }
  var da = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + da, Kt = "__reactProps$" + da, Kl = "__reactContainer$" + da, ep = "__reactEvents$" + da, x1 = "__reactListeners$" + da, T1 = "__reactHandles$" + da, tp = "__reactResources$" + da, li = "__reactMarker$" + da, Mo = "__reactLoad$" + da;
  function No(e) {
    delete e[Mt], delete e[Kt], delete e[x1], delete e[T1];
  }
  function gl(e) {
    var t;
    if (t = e[Mt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Kl] || n[Mt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = $y(e); e !== null; ) {
            if (n = e[Mt]) return n;
            e = $y(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Zl(e) {
    if (e = e[Mt] || e[Kl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ri(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Il(e) {
    var t = e[tp];
    return t || (t = e[tp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Rt(e) {
    e[li] = !0;
  }
  function np(e) {
    e[Mo] = void 0;
  }
  var ap = /* @__PURE__ */ new Set(), lp = {};
  function yl(e, t) {
    Pl(e, t), Pl(e + "Capture", t);
  }
  function Pl(e, t) {
    for (lp[e] = t, e = 0; e < t.length; e++)
      ap.add(t[e]);
  }
  var R1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rp = {}, ip = {};
  function O1(e) {
    return qs.call(ip, e) ? !0 : qs.call(rp, e) ? !1 : R1.test(e) ? ip[e] = !0 : (rp[e] = !0, !1);
  }
  var He = !1;
  function op() {
    var e = He;
    return He = !1, e;
  }
  function _o(e, t, n) {
    if (O1(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
  }
  function Do(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function ma(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, l);
    }
  }
  function ln(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function up(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function w1(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, s = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(m) {
          n = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(m) {
          n = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Is(e) {
    if (!e._valueTracker) {
      var t = up(e) ? "checked" : "value";
      e._valueTracker = w1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function sp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = up(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  var A1 = /[\n"\\]/g;
  function vn(e) {
    return e.replace(
      A1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ps(e, t, n, l, u, s, m, b) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ln(t)) : e.value !== "" + ln(t) && (e.value = "" + ln(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? m === "number" && e.value == t ? Js(e, ln(e.value)) : Js(e, ln(t)) : n != null ? Js(e, ln(n)) : l != null && e.removeAttribute("value"), u == null && s != null && (e.defaultChecked = !!s), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + ln(b) : e.removeAttribute("name");
  }
  function cp(e, t, n, l, u, s, m, b) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        Is(e);
        return;
      }
      n = n != null ? "" + ln(n) : "", t = t != null ? "" + ln(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = b ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), Is(e);
  }
  function Js(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Jl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < n.length; u++)
        t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ln(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fp(e, t, n) {
    if (t != null && (t = "" + ln(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + ln(n) : "";
  }
  function dp(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (we(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = ln(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Is(e);
  }
  function Fl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var z1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mp(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || z1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function pp(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", He = !0);
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && n[u] !== l && (mp(e, u, l), He = !0);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && mp(e, s, t[s]);
  }
  function Fs(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var M1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), N1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bo(e) {
    return N1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Vn() {
  }
  var Ws = null;
  function ec(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wl = null, er = null;
  function hp(e) {
    var t = Zl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ps(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + vn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = l[Kt] || null;
                if (!u) throw Error(o(90));
                Ps(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && sp(l);
          }
          break e;
        case "textarea":
          fp(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Jl(e, !!n.multiple, t, !1);
      }
    }
  }
  var tc = !1;
  function gp(e, t, n) {
    if (tc) return e(t, n);
    tc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (tc = !1, (Wl !== null || er !== null) && (Bu(), Wl && (t = Wl, e = er, er = Wl = null, hp(t), e)))
        for (t = 0; t < e.length; t++) hp(e[t]);
    }
  }
  function ii(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Kt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var pa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nc = !1;
  if (pa)
    try {
      var oi = {};
      Object.defineProperty(oi, "passive", {
        get: function() {
          nc = !0;
        }
      }), window.addEventListener("test", oi, oi), window.removeEventListener("test", oi, oi);
    } catch {
      nc = !1;
    }
  var Ua = null, ac = null, Uo = null;
  function yp() {
    if (Uo) return Uo;
    var e, t = ac, n = t.length, l, u = "value" in Ua ? Ua.value : Ua.textContent, s = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++) ;
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === u[s - l]; l++) ;
    return Uo = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ho(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Lo() {
    return !0;
  }
  function vp() {
    return !1;
  }
  function Yt(e) {
    function t(n, l, u, s, m) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var b in e)
        e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(s) : s[b]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Lo : vp, this.isPropagationStopped = vp, this;
    }
    return G(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Lo);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Lo);
      },
      persist: function() {
      },
      isPersistent: Lo
    }), t;
  }
  var Ha = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, jo = Yt(Ha), ui = G({}, Ha, { view: 0, detail: 0 }), _1 = Yt(ui), lc, rc, si, $o = G({}, ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? (lc = e.screenX - si.screenX, rc = e.screenY - si.screenY) : rc = lc = 0, si = e), lc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : rc;
    }
  }), bp = Yt($o), D1 = G({}, $o, { dataTransfer: 0 }), B1 = Yt(D1), U1 = G({}, ui, { relatedTarget: 0 }), ic = Yt(U1), H1 = G({}, Ha, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), L1 = Yt(H1), j1 = G({}, Ha, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), $1 = Yt(j1), k1 = G({}, Ha, { data: 0 }), Sp = Yt(k1), Y1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, V1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
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
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function G1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = q1[e]) ? !!t[e] : !1;
  }
  function oc() {
    return G1;
  }
  var X1 = G({}, ui, {
    key: function(e) {
      if (e.key) {
        var t = Y1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? V1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oc,
    charCode: function(e) {
      return e.type === "keypress" ? Ho(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Q1 = Yt(X1), K1 = G({}, $o, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Cp = Yt(K1), Z1 = G({}, Ha, { submitter: 0 }), I1 = Yt(Z1), P1 = G({}, ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), J1 = Yt(P1), F1 = G({}, Ha, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), W1 = Yt(F1), eS = G({}, $o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tS = Yt(eS), nS = G({}, Ha, {
    newState: 0,
    oldState: 0,
    source: 0
  }), aS = Yt(nS), lS = [9, 13, 27, 32], uc = pa && "CompositionEvent" in window, ci = null;
  pa && "documentMode" in document && (ci = document.documentMode);
  var rS = pa && "TextEvent" in window && !ci, Ep = pa && (!uc || ci && 8 < ci && 11 >= ci), xp = " ", Tp = !1;
  function Rp(e, t) {
    switch (e) {
      case "keyup":
        return lS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Op(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tr = !1;
  function iS(e, t) {
    switch (e) {
      case "compositionend":
        return Op(t);
      case "keypress":
        return t.which !== 32 ? null : (Tp = !0, xp);
      case "textInput":
        return e = t.data, e === xp && Tp ? null : e;
      default:
        return null;
    }
  }
  function oS(e, t) {
    if (tr)
      return e === "compositionend" || !uc && Rp(e, t) ? (e = yp(), Uo = ac = Ua = null, tr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ep && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var uS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uS[e.type] : t === "textarea";
  }
  function Ap(e, t, n, l) {
    Wl ? er ? er.push(l) : er = [l] : Wl = l, t = ku(t, "onChange"), 0 < t.length && (n = new jo(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var fi = null, di = null;
  function sS(e) {
    hy(e, 0);
  }
  function ko(e) {
    var t = ri(e);
    if (sp(t)) return e;
  }
  function zp(e, t) {
    if (e === "change") return t;
  }
  var Mp = !1;
  if (pa) {
    var sc;
    if (pa) {
      var cc = "oninput" in document;
      if (!cc) {
        var Np = document.createElement("div");
        Np.setAttribute("oninput", "return;"), cc = typeof Np.oninput == "function";
      }
      sc = cc;
    } else sc = !1;
    Mp = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function _p() {
    fi && (fi.detachEvent("onpropertychange", Dp), di = fi = null);
  }
  function Dp(e) {
    if (e.propertyName === "value" && ko(di)) {
      var t = [];
      Ap(
        t,
        di,
        e,
        ec(e)
      ), gp(sS, t);
    }
  }
  function cS(e, t, n) {
    e === "focusin" ? (_p(), fi = t, di = n, fi.attachEvent("onpropertychange", Dp)) : e === "focusout" && _p();
  }
  function fS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ko(di);
  }
  function dS(e, t) {
    if (e === "click") return ko(t);
  }
  function mS(e, t) {
    if (e === "input" || e === "change")
      return ko(t);
  }
  function pS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rn = typeof Object.is == "function" ? Object.is : pS;
  function mi(e, t) {
    if (rn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!qs.call(t, u) || !rn(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function fc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Up(e, t) {
    var n = Bp(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Bp(n);
    }
  }
  function Hp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Lp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = fc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = fc(e.document);
    }
    return t;
  }
  function dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var hS = pa && "documentMode" in document && 11 >= document.documentMode, nr = null, mc = null, pi = null, pc = !1;
  function jp(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pc || nr == null || nr !== fc(l) || (l = nr, "selectionStart" in l && dc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), pi && mi(pi, l) || (pi = l, l = ku(mc, "onSelect"), 0 < l.length && (t = new jo(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = nr)));
  }
  function vl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ar = {
    animationend: vl("Animation", "AnimationEnd"),
    animationiteration: vl("Animation", "AnimationIteration"),
    animationstart: vl("Animation", "AnimationStart"),
    transitionrun: vl("Transition", "TransitionRun"),
    transitionstart: vl("Transition", "TransitionStart"),
    transitioncancel: vl("Transition", "TransitionCancel"),
    transitionend: vl("Transition", "TransitionEnd")
  }, hc = {}, $p = {};
  pa && ($p = document.createElement("div").style, "AnimationEvent" in window || (delete ar.animationend.animation, delete ar.animationiteration.animation, delete ar.animationstart.animation), "TransitionEvent" in window || delete ar.transitionend.transition);
  function bl(e) {
    if (hc[e]) return hc[e];
    if (!ar[e]) return e;
    var t = ar[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in $p)
        return hc[e] = t[n];
    return e;
  }
  var kp = bl("animationend"), Yp = bl("animationiteration"), Vp = bl("animationstart"), gS = bl("transitionrun"), yS = bl("transitionstart"), vS = bl("transitioncancel"), qp = bl("transitionend"), Gp = /* @__PURE__ */ new Map(), gc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gc.push("scrollEnd");
  function _n(e, t) {
    Gp.set(e, t), yl(t, [e]);
  }
  var bS = 0;
  function ha(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Hn.identifierPrefix;
    var n = bS++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Xp(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, n = xr;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = e[n[l]];
        if (u != null) {
          if (u === "none") return "none";
          t = t == null ? u : t + (" " + u);
        }
      }
    return t ?? e.default;
  }
  function ga(e, t) {
    return e = Xp(e), t = Xp(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Yo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, bn = [], lr = 0, yc = 0;
  function Vo() {
    for (var e = lr, t = yc = lr = 0; t < e; ) {
      var n = bn[t];
      bn[t++] = null;
      var l = bn[t];
      bn[t++] = null;
      var u = bn[t];
      bn[t++] = null;
      var s = bn[t];
      if (bn[t++] = null, l !== null && u !== null) {
        var m = l.pending;
        m === null ? u.next = u : (u.next = m.next, m.next = u), l.pending = u;
      }
      s !== 0 && Qp(n, u, s);
    }
  }
  function qo(e, t, n, l) {
    bn[lr++] = e, bn[lr++] = t, bn[lr++] = n, bn[lr++] = l, yc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function vc(e, t, n, l) {
    return qo(e, t, n, l), Go(e);
  }
  function Sl(e, t) {
    return qo(e, null, null, t), Go(e);
  }
  function Qp(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, s = e.return; s !== null; )
      s.childLanes |= n, l = s.alternate, l !== null && (l.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (u = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, u && t !== null && (u = 31 - an(n), e = s.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = n | 536870912), s) : null;
  }
  function Go(e) {
    if (50 < Hi)
      throw Hi = 0, Du = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var rr = {};
  function SS(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Zt(e, t, n, l) {
    return new SS(e, t, n, l);
  }
  function bc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ya(e, t) {
    var n = e.alternate;
    return n === null ? (n = Zt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Kp(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Xo(e, t, n, l, u, s) {
    var m = 0;
    if (l = e, typeof l == "function") bc(l) && (m = 1);
    else if (typeof l == "string")
      m = ZC(
        e,
        n,
        xt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ye:
          return e = Zt(31, n, t, u), e.elementType = ye, e.lanes = s, e;
        case $:
          return Cl(n.children, u, s, t);
        case ee:
          m = 8, u |= 24;
          break;
        case ae:
          return e = Zt(12, n, t, u | 2), e.elementType = ae, e.lanes = s, e;
        case te:
          return e = Zt(13, n, t, u), e.elementType = te, e.lanes = s, e;
        case W:
          return e = Zt(19, n, t, u), e.elementType = W, e.lanes = s, e;
        case Oe:
        case A:
          return e = u | 32, e = Zt(30, n, t, e), e.elementType = A, e.lanes = s, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case F:
                m = 10;
                break e;
              case le:
                m = 9;
                break e;
              case k:
                m = 11;
                break e;
              case ne:
                m = 14;
                break e;
              case ce:
                m = 16, l = null;
                break e;
            }
          m = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Zt(m, n, t, u), t.elementType = e, t.type = l, t.lanes = s, t;
  }
  function Cl(e, t, n, l) {
    return e = Zt(7, e, l, t), e.lanes = n, e;
  }
  function Sc(e, t, n) {
    return e = Zt(6, e, null, t), e.lanes = n, e;
  }
  function Zp(e) {
    var t = Zt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Cc(e, t, n) {
    return t = Zt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ip = /* @__PURE__ */ new WeakMap();
  function Sn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ip.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: yn(t)
      }, Ip.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: yn(t)
    };
  }
  var ir = [], or = 0, Qo = null, hi = 0, Cn = [], En = 0, La = null, qn = 1, Gn = "";
  function va(e, t) {
    ir[or++] = hi, ir[or++] = Qo, Qo = e, hi = t;
  }
  function Pp(e, t, n) {
    Cn[En++] = qn, Cn[En++] = Gn, Cn[En++] = La, La = e;
    var l = qn;
    e = Gn;
    var u = 32 - an(l) - 1;
    l &= ~(1 << u), n += 1;
    var s = 32 - an(t) + u;
    if (30 < s) {
      var m = u - u % 5;
      s = (l & (1 << m) - 1).toString(32), l >>= m, u -= m, qn = 1 << 32 - an(t) + u | n << u | l, Gn = s + e;
    } else
      qn = 1 << s | n << u | l, Gn = e;
  }
  function Ko(e) {
    e.return !== null && (va(e, 1), Pp(e, 1, 0));
  }
  function Ec(e) {
    for (; e === Qo; )
      Qo = ir[--or], ir[or] = null, hi = ir[--or], ir[or] = null;
    for (; e === La; )
      La = Cn[--En], Cn[En] = null, Gn = Cn[--En], Cn[En] = null, qn = Cn[--En], Cn[En] = null;
  }
  function Jp(e, t) {
    Cn[En++] = qn, Cn[En++] = Gn, Cn[En++] = La, qn = t.id, Gn = t.overflow, La = e;
  }
  var Ot = null, Fe = null, Ae = !1, ja = null, xn = !1, xc = Error(o(519));
  function $a(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw gi(Sn(t, e)), xc;
  }
  function Fp(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Mt] = e, t[Kt] = l, n) {
      case "dialog":
        Me("cancel", t), Me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Me("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ji.length; n++)
          Me(ji[n], t);
        break;
      case "source":
        Me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Me("error", t), Me("load", t);
        break;
      case "details":
        Me("toggle", t);
        break;
      case "input":
        Me("invalid", t), cp(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Me("invalid", t);
        break;
      case "textarea":
        Me("invalid", t), dp(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || by(t.textContent, n) ? (l.popover != null && (Me("beforetoggle", t), Me("toggle", t)), l.onScroll != null && Me("scroll", t), l.onScrollEnd != null && Me("scrollend", t), l.onClick != null && (t.onclick = Vn), t = !0) : t = !1, t || $a(e, !0);
  }
  function Zo(e) {
    for (Ot = e.return; Ot; )
      switch (Ot.tag) {
        case 5:
        case 31:
        case 13:
          xn = !1;
          return;
        case 27:
        case 3:
          xn = !0;
          return;
        default:
          Ot = Ot.return;
      }
  }
  function ur(e) {
    if (e !== Ot) return !1;
    if (!Ae) return Zo(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || ed(e.type, e.memoizedProps)), n = !n), n && Fe && $a(e), Zo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Fe = jy(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Fe = jy(e);
    } else
      t === 27 ? (t = Fe, tl(e.type) ? (e = sd, sd = null, Fe = e) : Fe = t) : Fe = Ot ? Rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function El() {
    Fe = Ot = null, Ae = !1;
  }
  function Tc() {
    var e = ja;
    return e !== null && (Jt === null ? Jt = e : Jt.push.apply(
      Jt,
      e
    ), ja = null), e;
  }
  function gi(e) {
    ja === null ? ja = [e] : ja.push(e);
  }
  var Rc = kt(null), xl = null, ba = null;
  function ka(e, t, n) {
    Ee(Rc, t._currentValue), t._currentValue = n;
  }
  function Sa(e) {
    e._currentValue = Rc.current, Je(Rc);
  }
  function Io(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Oc(e, t, n, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var s = u.dependencies;
      if (s !== null) {
        var m = u.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var b = s;
          s = u;
          for (var R = 0; R < t.length; R++)
            if (b.context === t[R]) {
              s.lanes |= n, b = s.alternate, b !== null && (b.lanes |= n), Io(
                s.return,
                n,
                e
              ), l || (m = null);
              break e;
            }
          s = b.next;
        }
      } else if (u.tag === 18) {
        if (m = u.return, m === null) throw Error(o(341));
        m.lanes |= n, s = m.alternate, s !== null && (s.lanes |= n), Io(m, n, e), m = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, m = u.alternate, m !== null && (m.lanes |= n), Io(
          u.return,
          n,
          e
        ), m = u.child, m = m !== null ? m.sibling : null) : m = u.child;
      if (m !== null) m.return = u;
      else
        for (m = u; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (u = m.sibling, u !== null) {
            u.return = m.return, m = u;
            break;
          }
          m = m.return;
        }
      u = m;
    }
  }
  function Tl(e, t, n, l) {
    e = null;
    for (var u = t, s = !1; u !== null; ) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var m = u.alternate;
        if (m === null) throw Error(o(387));
        if (m = m.memoizedProps, m !== null) {
          var b = u.type;
          rn(u.pendingProps.value, m.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (u === be.current) {
        if (m = u.alternate, m === null) throw Error(o(387));
        m.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Dr) : e = [Dr]);
      }
      u = u.return;
    }
    return e !== null && Oc(
      t,
      e,
      n,
      l
    ), t.flags |= 262144, e !== null;
  }
  function Po(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Rl(e) {
    xl = e, ba = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Nt(e) {
    return Wp(xl, e);
  }
  function Jo(e, t) {
    return xl === null && Rl(e), Wp(e, t);
  }
  function Wp(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, ba === null) {
      if (e === null) throw Error(o(308));
      ba = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ba = ba.next = t;
    return n;
  }
  var CS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, ES = a.unstable_scheduleCallback, xS = a.unstable_NormalPriority, mt = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wc() {
    return {
      controller: new CS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function yi(e) {
    e.refCount--, e.refCount === 0 && ES(xS, function() {
      e.controller.abort();
    });
  }
  function eh(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var l = t[e];
        n.indexOf(l) === -1 && n.push(l);
      }
    }
  }
  var vi = null;
  function TS(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var bi = null, Ac = 0, Ol = 0, sr = null;
  function RS(e, t) {
    if (bi === null) {
      var n = bi = [];
      Ac = 0, Ol = Xf(), sr = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Ac++, t.then(th, th), t;
  }
  function th() {
    if (--Ac === 0 && (vi = null, bi !== null)) {
      sr !== null && (sr.status = "fulfilled");
      var e = bi;
      bi = null, Ol = 0, sr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function OS(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < n.length; u++) (0, n[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), l;
  }
  var nh = se.S;
  se.S = function(e, t) {
    if (Zg = tn(), typeof t == "object" && t !== null && typeof t.then == "function" && RS(e, t), vi !== null)
      for (var n = wr; n !== null; )
        eh(n, vi), n = n.next;
    if (n = e.types, n !== null) {
      for (var l = wr; l !== null; )
        eh(l, n), l = l.next;
      if (Ol !== 0) {
        l = vi, l === null && (l = vi = []);
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          l.indexOf(s) === -1 && l.push(s);
        }
      }
    }
    nh !== null && nh(e, t);
  };
  var wl = kt(null);
  function zc() {
    var e = wl.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function Fo(e, t) {
    t === null ? Ee(wl, wl.current) : Ee(wl, t.pool);
  }
  function ah() {
    var e = zc();
    return e === null ? null : { parent: mt._currentValue, pool: e };
  }
  var cr = Error(o(460)), Mc = Error(o(474)), Wo = Error(o(542)), eu = { then: function() {
  } };
  function lh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function rh(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Vn, Vn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, oh(e), e === void 0 && !("reason" in t) ? Error(o(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Vn, Vn);
        else {
          if (e = Ze, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, oh(e), e;
        }
        throw zl = t, cr;
    }
  }
  function Al(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (zl = n, cr) : n;
    }
  }
  var zl = null;
  function ih() {
    if (zl === null) throw Error(o(459));
    var e = zl;
    return zl = null, e;
  }
  function oh(e) {
    if (e === cr || e === Wo)
      throw Error(o(483));
  }
  var fr = null, Si = 0;
  function tu(e) {
    var t = Si;
    return Si += 1, fr === null && (fr = []), rh(fr, e, t);
  }
  function Ya(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function nu(e, t) {
    throw t.$$typeof === Z ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function uh(e) {
    function t(D, z) {
      if (e) {
        var L = D.deletions;
        L === null ? (D.deletions = [z], D.flags |= 16) : L.push(z);
      }
    }
    function n(D, z) {
      if (!e) return null;
      for (; z !== null; )
        t(D, z), z = z.sibling;
      return null;
    }
    function l(D) {
      for (var z = /* @__PURE__ */ new Map(); D !== null; )
        D.key === null ? z.set(D.index, D) : z.set(D.key, D), D = D.sibling;
      return z;
    }
    function u(D, z) {
      return D = ya(D, z), D.index = 0, D.sibling = null, D;
    }
    function s(D, z, L) {
      return D.index = L, e ? (L = D.alternate, L !== null ? (L = L.index, L < z ? (D.flags |= 2, z) : L) : (D.flags |= 134217730, z)) : (D.flags |= 1048576, z);
    }
    function m(D) {
      return e && D.alternate === null && (D.flags |= 134217730), D;
    }
    function b(D, z, L, I) {
      return z === null || z.tag !== 6 ? (z = Sc(L, D.mode, I), z.return = D, z) : (z = u(z, L), z.return = D, z);
    }
    function R(D, z, L, I) {
      var fe = L.type;
      return fe === $ ? (D = V(
        D,
        z,
        L.props.children,
        I,
        L.key
      ), Ya(D, L), D) : z !== null && (z.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === ce && Al(fe) === z.type) ? (z = u(z, L.props), Ya(z, L), z.return = D, z) : (z = Xo(
        L.type,
        L.key,
        L.props,
        null,
        D.mode,
        I
      ), Ya(z, L), z.return = D, z);
    }
    function B(D, z, L, I) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== L.containerInfo || z.stateNode.implementation !== L.implementation ? (z = Cc(L, D.mode, I), z.return = D, z) : (z = u(z, L.children || []), z.return = D, z);
    }
    function V(D, z, L, I, fe) {
      return z === null || z.tag !== 7 ? (z = Cl(
        L,
        D.mode,
        I,
        fe
      ), z.return = D, z) : (z = u(z, L), z.return = D, z);
    }
    function P(D, z, L) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Sc(
          "" + z,
          D.mode,
          L
        ), z.return = D, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case J:
            return L = Xo(
              z.type,
              z.key,
              z.props,
              null,
              D.mode,
              L
            ), Ya(L, z), L.return = D, L;
          case S:
            return z = Cc(
              z,
              D.mode,
              L
            ), z.return = D, z;
          case ce:
            return z = Al(z), P(D, z, L);
        }
        if (we(z) || ue(z))
          return z = Cl(
            z,
            D.mode,
            L,
            null
          ), z.return = D, z;
        if (typeof z.then == "function")
          return P(D, tu(z), L);
        if (z.$$typeof === F)
          return P(
            D,
            Jo(D, z),
            L
          );
        nu(D, z);
      }
      return null;
    }
    function _(D, z, L, I) {
      var fe = z !== null ? z.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return fe !== null ? null : b(D, z, "" + L, I);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case J:
            return L.key === fe ? R(D, z, L, I) : null;
          case S:
            return L.key === fe ? B(D, z, L, I) : null;
          case ce:
            return L = Al(L), _(D, z, L, I);
        }
        if (we(L) || ue(L))
          return fe !== null ? null : V(D, z, L, I, null);
        if (typeof L.then == "function")
          return _(
            D,
            z,
            tu(L),
            I
          );
        if (L.$$typeof === F)
          return _(
            D,
            z,
            Jo(D, L),
            I
          );
        nu(D, L);
      }
      return null;
    }
    function j(D, z, L, I, fe) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return D = D.get(L) || null, b(z, D, "" + I, fe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case J:
            return D = D.get(
              I.key === null ? L : I.key
            ) || null, R(z, D, I, fe);
          case S:
            return D = D.get(
              I.key === null ? L : I.key
            ) || null, B(z, D, I, fe);
          case ce:
            return I = Al(I), j(
              D,
              z,
              L,
              I,
              fe
            );
        }
        if (we(I) || ue(I))
          return D = D.get(L) || null, V(z, D, I, fe, null);
        if (typeof I.then == "function")
          return j(
            D,
            z,
            L,
            tu(I),
            fe
          );
        if (I.$$typeof === F)
          return j(
            D,
            z,
            L,
            Jo(z, I),
            fe
          );
        nu(z, I);
      }
      return null;
    }
    function oe(D, z, L, I) {
      for (var fe = null, De = null, me = z, ve = z = 0, gt = null; me !== null && ve < L.length; ve++) {
        me.index > ve ? (gt = me, me = null) : gt = me.sibling;
        var Ue = _(
          D,
          me,
          L[ve],
          I
        );
        if (Ue === null) {
          me === null && (me = gt);
          break;
        }
        e && me && Ue.alternate === null && t(D, me), z = s(Ue, z, ve), De === null ? fe = Ue : De.sibling = Ue, De = Ue, me = gt;
      }
      if (ve === L.length)
        return n(D, me), Ae && va(D, ve), fe;
      if (me === null) {
        for (; ve < L.length; ve++)
          me = P(D, L[ve], I), me !== null && (z = s(
            me,
            z,
            ve
          ), De === null ? fe = me : De.sibling = me, De = me);
        return Ae && va(D, ve), fe;
      }
      for (me = l(me); ve < L.length; ve++)
        gt = j(
          me,
          D,
          ve,
          L[ve],
          I
        ), gt !== null && (e && (Ue = gt.alternate, Ue !== null && me.delete(Ue.key === null ? ve : Ue.key)), z = s(
          gt,
          z,
          ve
        ), De === null ? fe = gt : De.sibling = gt, De = gt);
      return e && me.forEach(function(il) {
        return t(D, il);
      }), Ae && va(D, ve), fe;
    }
    function de(D, z, L, I) {
      if (L == null) throw Error(o(151));
      for (var fe = null, De = null, me = z, ve = z = 0, gt = null, Ue = L.next(); me !== null && !Ue.done; ve++, Ue = L.next()) {
        me.index > ve ? (gt = me, me = null) : gt = me.sibling;
        var il = _(D, me, Ue.value, I);
        if (il === null) {
          me === null && (me = gt);
          break;
        }
        e && me && il.alternate === null && t(D, me), z = s(il, z, ve), De === null ? fe = il : De.sibling = il, De = il, me = gt;
      }
      if (Ue.done)
        return n(D, me), Ae && va(D, ve), fe;
      if (me === null) {
        for (; !Ue.done; ve++, Ue = L.next())
          Ue = P(D, Ue.value, I), Ue !== null && (z = s(Ue, z, ve), De === null ? fe = Ue : De.sibling = Ue, De = Ue);
        return Ae && va(D, ve), fe;
      }
      for (me = l(me); !Ue.done; ve++, Ue = L.next())
        Ue = j(me, D, ve, Ue.value, I), Ue !== null && (e && (gt = Ue.alternate, gt !== null && me.delete(
          gt.key === null ? ve : gt.key
        )), z = s(Ue, z, ve), De === null ? fe = Ue : De.sibling = Ue, De = Ue);
      return e && me.forEach(function(iE) {
        return t(D, iE);
      }), Ae && va(D, ve), fe;
    }
    function Re(D, z, L, I) {
      if (typeof L == "object" && L !== null && L.type === $ && L.key === null && L.props.ref === void 0 && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case J:
            e: {
              for (var fe = L.key; z !== null; ) {
                if (z.key === fe) {
                  if (fe = L.type, fe === $) {
                    if (z.tag === 7) {
                      n(
                        D,
                        z.sibling
                      ), I = u(
                        z,
                        L.props.children
                      ), Ya(I, L), I.return = D, D = I;
                      break e;
                    }
                  } else if (z.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === ce && Al(fe) === z.type) {
                    n(
                      D,
                      z.sibling
                    ), I = u(z, L.props), Ya(I, L), I.return = D, D = I;
                    break e;
                  }
                  n(D, z);
                  break;
                } else t(D, z);
                z = z.sibling;
              }
              L.type === $ ? (I = Cl(
                L.props.children,
                D.mode,
                I,
                L.key
              ), Ya(I, L), I.return = D, D = I) : (I = Xo(
                L.type,
                L.key,
                L.props,
                null,
                D.mode,
                I
              ), Ya(I, L), I.return = D, D = I);
            }
            return m(D);
          case S:
            e: {
              for (fe = L.key; z !== null; ) {
                if (z.key === fe)
                  if (z.tag === 4 && z.stateNode.containerInfo === L.containerInfo && z.stateNode.implementation === L.implementation) {
                    n(
                      D,
                      z.sibling
                    ), I = u(z, L.children || []), I.return = D, D = I;
                    break e;
                  } else {
                    n(D, z);
                    break;
                  }
                else t(D, z);
                z = z.sibling;
              }
              I = Cc(L, D.mode, I), I.return = D, D = I;
            }
            return m(D);
          case ce:
            return L = Al(L), Re(
              D,
              z,
              L,
              I
            );
        }
        if (we(L))
          return oe(
            D,
            z,
            L,
            I
          );
        if (ue(L)) {
          if (fe = ue(L), typeof fe != "function") throw Error(o(150));
          return L = fe.call(L), de(
            D,
            z,
            L,
            I
          );
        }
        if (typeof L.then == "function")
          return Re(
            D,
            z,
            tu(L),
            I
          );
        if (L.$$typeof === F)
          return Re(
            D,
            z,
            Jo(D, L),
            I
          );
        nu(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, z !== null && z.tag === 6 ? (n(D, z.sibling), I = u(z, L), I.return = D, D = I) : (n(D, z), I = Sc(L, D.mode, I), I.return = D, D = I), m(D)) : n(D, z);
    }
    return function(D, z, L, I) {
      try {
        Si = 0;
        var fe = Re(
          D,
          z,
          L,
          I
        );
        return fr = null, fe;
      } catch (me) {
        if (me === cr || me === Wo) throw me;
        var De = Zt(29, me, null, D.mode);
        return De.lanes = I, De.return = D, De;
      } finally {
      }
    };
  }
  var Ml = uh(!0), sh = uh(!1), Va = !1;
  function Nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function qa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ga(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (je & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = Go(e), Qp(e, null, n), t;
    }
    return qo(e, l, t, n), Go(e);
  }
  function Ci(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Pm(e, n);
    }
  }
  function Dc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var u = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? u = s = m : s = s.next = m, n = n.next;
        } while (n !== null);
        s === null ? u = s = t : s = s.next = t;
      } else u = s = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Bc = !1;
  function Ei() {
    if (Bc) {
      var e = sr;
      if (e !== null) throw e;
    }
  }
  function xi(e, t, n, l) {
    Bc = !1;
    var u = e.updateQueue;
    Va = !1;
    var s = u.firstBaseUpdate, m = u.lastBaseUpdate, b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var R = b, B = R.next;
      R.next = null, m === null ? s = B : m.next = B, m = R;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, b = V.lastBaseUpdate, b !== m && (b === null ? V.firstBaseUpdate = B : b.next = B, V.lastBaseUpdate = R));
    }
    if (s !== null) {
      var P = u.baseState;
      m = 0, V = B = R = null, b = s;
      do {
        var _ = b.lane & -536870913, j = _ !== b.lane;
        if (j ? (_e & _) === _ : (l & _) === _) {
          _ !== 0 && _ === Ol && (Bc = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var oe = e, de = b;
            _ = t;
            var Re = n;
            switch (de.tag) {
              case 1:
                if (oe = de.payload, typeof oe == "function") {
                  P = oe.call(Re, P, _);
                  break e;
                }
                P = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = de.payload, _ = typeof oe == "function" ? oe.call(Re, P, _) : oe, _ == null) break e;
                P = G({}, P, _);
                break e;
              case 2:
                Va = !0;
            }
          }
          _ = b.callback, _ !== null && (e.flags |= 64, j && (e.flags |= 8192), j = u.callbacks, j === null ? u.callbacks = [_] : j.push(_));
        } else
          j = {
            lane: _,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, V === null ? (B = V = j, R = P) : V = V.next = j, m |= _;
        if (b = b.next, b === null) {
          if (b = u.shared.pending, b === null)
            break;
          j = b, b = j.next, j.next = null, u.lastBaseUpdate = j, u.shared.pending = null;
        }
      } while (!0);
      V === null && (R = P), u.baseState = R, u.firstBaseUpdate = B, u.lastBaseUpdate = V, s === null && (u.shared.lanes = 0), Ja |= m, e.lanes = m, e.memoizedState = P;
    }
  }
  function ch(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function fh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        ch(n[e], t);
  }
  var Xa = kt(null), au = kt(0);
  function dh(e, t) {
    e = Ra, Ee(au, e), Ee(Xa, t), Ra = e | t.baseLanes;
  }
  function Uc() {
    Ee(au, Ra), Ee(Xa, Xa.current);
  }
  function Hc() {
    Ra = au.current, Je(Xa), Je(au);
  }
  var _t = kt(null), jt = null;
  function Qa(e) {
    var t = e.alternate;
    Ee(Dt, Dt.current & 1), Ee(_t, e), jt === null && (t === null || Xa.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function Lc(e) {
    Ee(Dt, Dt.current), Ee(_t, e), jt === null && (jt = e);
  }
  function mh(e) {
    e.tag === 22 ? (Ee(Dt, Dt.current), Ee(_t, e), jt === null && (jt = e)) : Ka();
  }
  function Ka() {
    Ee(Dt, Dt.current), Ee(_t, _t.current);
  }
  function on(e) {
    Je(_t), jt === e && (jt = null), Je(Dt);
  }
  var Dt = kt(0);
  function Ti(e, t) {
    Ee(_t, _t.current), Ee(Dt, t);
  }
  function jc(e) {
    Je(Dt), Je(_t), jt === e && (jt = null);
  }
  function lu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || od(n) || ud(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ca = 0, Te = null, Qe = null, pt = null, ru = !1, dr = !1, Nl = !1, iu = 0, Ri = 0, mr = null, wS = 0;
  function it() {
    throw Error(o(321));
  }
  function $c(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!rn(e[n], t[n])) return !1;
    return !0;
  }
  function kc(e, t, n, l, u, s) {
    return Ca = s, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, se.H = e === null || e.memoizedState === null ? Ph : Jh, Nl = !1, s = n(l, u), Nl = !1, dr && (s = hh(
      t,
      n,
      l,
      u
    )), ph(e), s;
  }
  function ph(e) {
    se.H = mu;
    var t = Qe !== null && Qe.next !== null;
    if (Ca = 0, pt = Qe = Te = null, ru = !1, Ri = 0, mr = null, t) throw Error(o(300));
    e === null || ht || (e = e.dependencies, e !== null && Po(e) && (ht = !0));
  }
  function hh(e, t, n, l) {
    Te = e;
    var u = 0;
    do {
      if (dr && (mr = null), Ri = 0, dr = !1, 25 <= u) throw Error(o(301));
      if (u += 1, pt = Qe = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      se.H = US, s = t(n, l);
    } while (dr);
    return s;
  }
  function AS() {
    var e = se.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Oi(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (Te.flags |= 1024), t;
  }
  function Yc() {
    var e = iu !== 0;
    return iu = 0, e;
  }
  function Vc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function qc(e) {
    if (ru) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ru = !1;
    }
    Ca = 0, pt = Qe = Te = null, dr = !1, Ri = iu = 0, mr = null;
  }
  function Vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pt === null ? Te.memoizedState = pt = e : pt = pt.next = e, pt;
  }
  function ct() {
    if (Qe === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = pt === null ? Te.memoizedState : pt.next;
    if (t !== null)
      pt = t, Qe = e;
    else {
      if (e === null)
        throw Te.alternate === null ? Error(o(467)) : Error(o(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, pt === null ? Te.memoizedState = pt = e : pt = pt.next = e;
    }
    return pt;
  }
  function ou() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Oi(e) {
    var t = Ri;
    return Ri += 1, mr === null && (mr = []), e = rh(mr, e, t), t = Te, (pt === null ? t.memoizedState : pt.next) === null && (t = t.alternate, se.H = t === null || t.memoizedState === null ? Ph : Jh), e;
  }
  function uu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Oi(e);
      if (e.$$typeof === Y) return;
      if (e.$$typeof === F) return Nt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Gc(e) {
    var t = null, n = Te.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = Te.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = ou(), Te.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Le;
    return t.index++, n;
  }
  function Ea(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function su(e) {
    var t = ct();
    return Xc(t, Qe, e);
  }
  function Xc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var u = e.baseQueue, s = l.pending;
    if (s !== null) {
      if (u !== null) {
        var m = u.next;
        u.next = s.next, s.next = m;
      }
      t.baseQueue = u = s, l.pending = null;
    }
    if (s = e.baseState, u === null) e.memoizedState = s;
    else {
      t = u.next;
      var b = m = null, R = null, B = t, V = !1;
      do {
        var P = B.lane & -536870913;
        if (P !== B.lane ? (_e & P) === P : (Ca & P) === P) {
          var _ = B.revertLane;
          if (_ === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), P === Ol && (V = !0);
          else if ((Ca & _) === _) {
            B = B.next, _ === Ol && (V = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, R === null ? (b = R = P, m = s) : R = R.next = P, Te.lanes |= _, Ja |= _;
          P = B.action, Nl && n(s, P), s = B.hasEagerState ? B.eagerState : n(s, P);
        } else
          _ = {
            lane: P,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, R === null ? (b = R = _, m = s) : R = R.next = _, Te.lanes |= P, Ja |= P;
        B = B.next;
      } while (B !== null && B !== t);
      if (R === null ? m = s : R.next = b, !rn(s, e.memoizedState) && (ht = !0, V && (n = sr, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = m, e.baseQueue = R, l.lastRenderedState = s;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Qc(e) {
    var t = ct(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, u = n.pending, s = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var m = u = u.next;
      do
        s = e(s, m.action), m = m.next;
      while (m !== u);
      rn(s, t.memoizedState) || (ht = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, l];
  }
  function gh(e, t, n) {
    var l = Te, u = ct(), s = Ae;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !rn(
      (Qe || u).memoizedState,
      n
    );
    if (m && (u.memoizedState = n, ht = !0), u = u.queue, Ic(bh.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== t || m || pt !== null && (pt.memoizedState.tag & 1) !== 0, pr(
      e ? 9 : 8,
      { destroy: void 0 },
      vh.bind(null, l, u, n, t),
      null
    ), e) {
      if (l.flags |= 2048, Ze === null) throw Error(o(349));
      s || (Ca & 127) !== 0 || yh(l, t, n);
    }
    return n;
  }
  function yh(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Te.updateQueue, t === null ? (t = ou(), Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vh(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Sh(t) && Ch(e);
  }
  function bh(e, t, n) {
    return n(function() {
      Sh(t) && Ch(e);
    });
  }
  function Sh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rn(e, n);
    } catch {
      return !0;
    }
  }
  function Ch(e) {
    var t = Sl(e, 2);
    t !== null && Ft(t, e, 2);
  }
  function Kc(e) {
    var t = Vt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Nl) {
        Ba(!0);
        try {
          n();
        } finally {
          Ba(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ea,
      lastRenderedState: e
    }, t;
  }
  function Eh(e, t, n, l) {
    return e.baseState = n, Xc(
      e,
      Qe,
      typeof l == "function" ? l : Ea
    );
  }
  function zS(e, t, n, l, u) {
    if (du(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      se.T !== null ? n(!0) : s.isTransition = !1, l(s), n = t.pending, n === null ? (s.next = t.pending = s, xh(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function xh(e, t) {
    var n = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var s = se.T, m = {};
      m.types = s !== null ? s.types : null, se.T = m;
      try {
        var b = n(u, l), R = se.S;
        R !== null && R(m, b), Th(e, t, b);
      } catch (B) {
        Zc(e, t, B);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), se.T = s;
      }
    } else
      try {
        s = n(u, l), Th(e, t, s);
      } catch (B) {
        Zc(e, t, B);
      }
  }
  function Th(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Rh(e, t, l);
      },
      function(l) {
        return Zc(e, t, l);
      }
    ) : Rh(e, t, n);
  }
  function Rh(e, t, n) {
    t.status = "fulfilled", t.value = n, Oh(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, xh(e, n)));
  }
  function Zc(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Oh(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Oh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function wh(e, t) {
    return t;
  }
  function Ah(e, t) {
    if (Ae) {
      var n = Ze.formState;
      if (n !== null) {
        e: {
          var l = Te;
          if (Ae) {
            if (Fe) {
              t: {
                for (var u = Fe, s = xn; u.nodeType !== 8; ) {
                  if (!s) {
                    u = null;
                    break t;
                  }
                  if (u = Rn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                s = u.data, u = s === "F!" || s === "F" ? u : null;
              }
              if (u) {
                Fe = Rn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            $a(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Vt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wh,
      lastRenderedState: t
    }, n.queue = l, n = Kh.bind(
      null,
      Te,
      l
    ), l.dispatch = n, l = Kc(!1), s = ef.bind(
      null,
      Te,
      !1,
      l.queue
    ), l = Vt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, n = zS.bind(
      null,
      Te,
      u,
      s,
      n
    ), u.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function zh(e) {
    var t = ct();
    return Mh(t, Qe, e);
  }
  function Mh(e, t, n) {
    if (t = Xc(
      e,
      t,
      wh
    )[0], e = su(Ea)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Oi(t);
      } catch (m) {
        throw m === cr ? Wo : m;
      }
    else l = t;
    t = ct();
    var u = t.queue, s = u.dispatch;
    return n !== t.memoizedState && (Te.flags |= 2048, pr(
      9,
      { destroy: void 0 },
      MS.bind(null, u, n),
      null
    )), [l, s, e];
  }
  function MS(e, t) {
    e.action = t;
  }
  function Nh(e) {
    var t = ct(), n = Qe;
    if (n !== null)
      return Mh(t, n, e);
    ct(), t = t.memoizedState, n = ct();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function pr(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = Te.updateQueue, t === null && (t = ou(), Te.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function _h() {
    return ct().memoizedState;
  }
  function cu(e, t, n, l) {
    var u = Vt();
    Te.flags |= e, u.memoizedState = pr(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function fu(e, t, n, l) {
    var u = ct();
    l = l === void 0 ? null : l;
    var s = u.memoizedState.inst;
    Qe !== null && l !== null && $c(l, Qe.memoizedState.deps) ? u.memoizedState = pr(t, s, n, l) : (Te.flags |= e, u.memoizedState = pr(
      1 | t,
      s,
      n,
      l
    ));
  }
  function Dh(e, t) {
    cu(8390656, 8, e, t);
  }
  function Ic(e, t) {
    fu(2048, 8, e, t);
  }
  function NS(e) {
    Te.flags |= 4;
    var t = Te.updateQueue;
    if (t === null)
      t = ou(), Te.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Bh(e) {
    var t = ct().memoizedState;
    return NS({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Uh(e, t) {
    return fu(4, 2, e, t);
  }
  function Hh(e, t) {
    return fu(4, 4, e, t);
  }
  function Lh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function jh(e, t, n) {
    n = n != null ? n.concat([e]) : null, fu(4, 4, Lh.bind(null, t, e), n);
  }
  function Pc() {
  }
  function $h(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && $c(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function kh(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && $c(t, l[1]))
      return l[0];
    if (l = e(), Nl) {
      Ba(!0);
      try {
        e();
      } finally {
        Ba(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Jc(e, t, n) {
    return n === void 0 || (Ca & 1073741824) !== 0 && (_e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Pg(), Te.lanes |= e, Ja |= e, n);
  }
  function Yh(e, t, n, l) {
    return rn(n, t) ? n : Xa.current !== null ? (e = Jc(e, n, l), rn(e, t) || (ht = !0), e) : (Ca & 106) === 0 || (Ca & 1073741824) !== 0 && (_e & 261930) === 0 ? (ht = !0, e.memoizedState = n) : (e = Pg(), Te.lanes |= e, Ja |= e, t);
  }
  function Vh(e, t, n, l, u) {
    var s = pe.p;
    pe.p = s !== 0 && 8 > s ? s : 8;
    var m = se.T, b = {};
    b.types = m !== null ? m.types : null, se.T = b, ef(e, !1, t, n);
    try {
      var R = u(), B = se.S;
      if (B !== null && B(b, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var V = OS(
          R,
          l
        );
        wi(
          e,
          t,
          V,
          fn(e)
        );
      } else
        wi(
          e,
          t,
          l,
          fn(e)
        );
    } catch (P) {
      wi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: P },
        fn()
      );
    } finally {
      pe.p = s, m !== null && b.types !== null && (m.types = b.types), se.T = m;
    }
  }
  function _S() {
  }
  function Fc(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = qh(e).queue;
    Vh(
      e,
      u,
      t,
      Xt,
      n === null ? _S : function() {
        return Gh(e), n(l);
      }
    );
  }
  function qh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Xt,
      baseState: Xt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: Xt
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Gh(e) {
    var t = qh(e);
    t.next === null && (t = e.alternate.memoizedState), wi(
      e,
      t.next.queue,
      {},
      fn()
    );
  }
  function Wc() {
    return Nt(Dr);
  }
  function Xh() {
    return ct().memoizedState;
  }
  function Qh() {
    return ct().memoizedState;
  }
  function DS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = fn();
          e = qa(n);
          var l = Ga(t, e, n);
          l !== null && (Ft(l, t, n), Ci(l, t, n)), t = { cache: wc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function BS(e, t, n) {
    var l = fn();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, du(e) ? Zh(t, n) : (n = vc(e, t, n, l), n !== null && (Ft(n, e, l), Ih(n, t, l)));
  }
  function Kh(e, t, n) {
    var l = fn();
    wi(e, t, n, l);
  }
  function wi(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (du(e)) Zh(t, u);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var m = t.lastRenderedState, b = s(m, n);
          if (u.hasEagerState = !0, u.eagerState = b, rn(b, m))
            return qo(e, t, u, 0), Ze === null && Vo(), !1;
        } catch {
        } finally {
        }
      if (n = vc(e, t, u, l), n !== null)
        return Ft(n, e, l), Ih(n, t, l), !0;
    }
    return !1;
  }
  function ef(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Xf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, du(e)) {
      if (t) throw Error(o(479));
    } else
      t = vc(
        e,
        n,
        l,
        2
      ), t !== null && Ft(t, e, 2);
  }
  function du(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function Zh(e, t) {
    dr = ru = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ih(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Pm(e, n);
    }
  }
  var mu = {
    readContext: Nt,
    use: uu,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useLayoutEffect: it,
    useInsertionEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useSyncExternalStore: it,
    useId: it,
    useHostTransitionStatus: it,
    useFormState: it,
    useActionState: it,
    useOptimistic: it,
    useMemoCache: it,
    useCacheRefresh: it,
    useEffectEvent: it
  }, Ph = {
    readContext: Nt,
    use: uu,
    useCallback: function(e, t) {
      return Vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Nt,
    useEffect: Dh,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, cu(
        4194308,
        4,
        Lh.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return cu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      cu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Vt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Nl) {
        Ba(!0);
        try {
          e();
        } finally {
          Ba(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Vt();
      if (n !== void 0) {
        var u = n(t);
        if (Nl) {
          Ba(!0);
          try {
            n(t);
          } finally {
            Ba(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = BS.bind(
        null,
        Te,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Vt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Kc(e);
      var t = e.queue, n = Kh.bind(null, Te, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var n = Vt();
      return Jc(n, e, t);
    },
    useTransition: function() {
      var e = Kc(!1);
      return e = Vh.bind(
        null,
        Te,
        e.queue,
        !0,
        !1
      ), Vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = Te, u = Vt();
      if (Ae) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ze === null)
          throw Error(o(349));
        (_e & 127) !== 0 || yh(l, t, n);
      }
      u.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return u.queue = s, Dh(bh.bind(null, l, s, e), [
        e
      ]), l.flags |= 2048, pr(
        9,
        { destroy: void 0 },
        vh.bind(
          null,
          l,
          s,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Vt(), t = Ze.identifierPrefix;
      if (Ae) {
        var n = Gn, l = qn;
        n = (l & ~(1 << 32 - an(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = iu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = wS++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Wc,
    useFormState: Ah,
    useActionState: Ah,
    useOptimistic: function(e) {
      var t = Vt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ef.bind(
        null,
        Te,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Gc,
    useCacheRefresh: function() {
      return Vt().memoizedState = DS.bind(
        null,
        Te
      );
    },
    useEffectEvent: function(e) {
      var t = Vt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((je & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Jh = {
    readContext: Nt,
    use: uu,
    useCallback: $h,
    useContext: Nt,
    useEffect: Ic,
    useImperativeHandle: jh,
    useInsertionEffect: Uh,
    useLayoutEffect: Hh,
    useMemo: kh,
    useReducer: su,
    useRef: _h,
    useState: function() {
      return su(Ea);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var n = ct();
      return Yh(
        n,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = su(Ea)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : Oi(e),
        t
      ];
    },
    useSyncExternalStore: gh,
    useId: Xh,
    useHostTransitionStatus: Wc,
    useFormState: zh,
    useActionState: zh,
    useOptimistic: function(e, t) {
      var n = ct();
      return Eh(n, Qe, e, t);
    },
    useMemoCache: Gc,
    useCacheRefresh: Qh,
    useEffectEvent: Bh
  }, US = {
    readContext: Nt,
    use: uu,
    useCallback: $h,
    useContext: Nt,
    useEffect: Ic,
    useImperativeHandle: jh,
    useInsertionEffect: Uh,
    useLayoutEffect: Hh,
    useMemo: kh,
    useReducer: Qc,
    useRef: _h,
    useState: function() {
      return Qc(Ea);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var n = ct();
      return Qe === null ? Jc(n, e, t) : Yh(
        n,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Qc(Ea)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : Oi(e),
        t
      ];
    },
    useSyncExternalStore: gh,
    useId: Xh,
    useHostTransitionStatus: Wc,
    useFormState: Nh,
    useActionState: Nh,
    useOptimistic: function(e, t) {
      var n = ct();
      return Qe !== null ? Eh(n, Qe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gc,
    useCacheRefresh: Qh,
    useEffectEvent: Bh
  };
  function tf(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var nf = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = fn(), u = qa(l);
      u.payload = t, n != null && (u.callback = n), t = Ga(e, u, l), t !== null && (Ft(t, e, l), Ci(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = fn(), u = qa(l);
      u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Ga(e, u, l), t !== null && (Ft(t, e, l), Ci(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = fn(), l = qa(n);
      l.tag = 2, t != null && (l.callback = t), t = Ga(e, l, n), t !== null && (Ft(t, e, n), Ci(t, e, n));
    }
  };
  function Fh(e, t, n, l, u, s, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, m) : t.prototype && t.prototype.isPureReactComponent ? !mi(n, l) || !mi(u, s) : !0;
  }
  function Wh(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && nf.enqueueReplaceState(t, t.state, null);
  }
  function _l(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = G({}, n));
      for (var u in e)
        n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function eg(e) {
    Yo(e);
  }
  function tg(e) {
    console.error(e);
  }
  function ng(e) {
    Yo(e);
  }
  function pu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function ag(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function af(e, t, n) {
    return n = qa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      pu(e, t);
    }, n;
  }
  function lg(e) {
    return e = qa(e), e.tag = 3, e;
  }
  function rg(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = l.value;
      e.payload = function() {
        return u(s);
      }, e.callback = function() {
        ag(t, n, l);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      ag(t, n, l), typeof u != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
      var b = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function HS(e, t, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Tl(
        t,
        n,
        u,
        !0
      ), n = _t.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return jt === null ? Uu() : n.alternate === null && ot === 0 && (ot = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === eu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Vf(e, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === eu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Vf(e, l, u)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return Vf(e, l, u), Uu(), !1;
    }
    if (Ae)
      return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== xc && (e = Error(o(422), { cause: l }), gi(Sn(e, n)))) : (l !== xc && (t = Error(o(423), {
        cause: l
      }), gi(
        Sn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Sn(l, n), u = af(
        e.stateNode,
        l,
        u
      ), Dc(e, u), ot !== 4 && (ot = 2)), !1;
    var s = Error(o(520), { cause: l });
    if (s = Sn(s, n), Ui === null ? Ui = [s] : Ui.push(s), ot !== 4 && (ot = 2), t === null) return !0;
    l = Sn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = u & -u, n.lanes |= e, e = af(n.stateNode, l, e), Dc(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Fa === null || !Fa.has(s))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = lg(u), rg(
              u,
              e,
              n,
              l
            ), Dc(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var lf = Error(o(461)), ht = !1;
  function St(e, t, n, l) {
    t.child = e === null ? sh(t, null, n, l) : Ml(
      t,
      e.child,
      n,
      l
    );
  }
  function ig(e, t, n, l, u) {
    n = n.render;
    var s = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var b in l)
        b !== "ref" && (m[b] = l[b]);
    } else m = l;
    return Rl(t), l = kc(
      e,
      t,
      n,
      m,
      s,
      u
    ), b = Yc(), e !== null && !ht ? (Vc(e, t, u), xa(e, t, u)) : (Ae && b && Ko(t), t.flags |= 1, St(e, t, l, u), t.child);
  }
  function og(e, t, n, l, u) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !bc(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, ug(
        e,
        t,
        s,
        l,
        u
      )) : (e = Xo(
        n.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !mf(e, u)) {
      var m = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : mi, n(m, l) && e.ref === t.ref)
        return xa(e, t, u);
    }
    return t.flags |= 1, e = ya(s, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ug(e, t, n, l, u) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (mi(s, l) && e.ref === t.ref)
        if (ht = !1, t.pendingProps = l = s, mf(e, u))
          (e.flags & 131072) !== 0 && (ht = !0);
        else
          return t.lanes = e.lanes, xa(e, t, u);
    }
    return rf(
      e,
      t,
      n,
      l,
      u
    );
  }
  function sg(e, t, n, l) {
    var u = l.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~s;
        } else l = 0, t.child = null;
        return cg(
          e,
          t,
          s,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Fo(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? dh(t, s) : Uc(), mh(t);
      else
        return l = t.lanes = 536870912, cg(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          l
        );
    } else
      s !== null ? (Fo(t, s.cachePool), dh(t, s), Ka(), t.memoizedState = null) : (e !== null && Fo(t, null), Uc(), Ka());
    return St(e, t, u, n), t.child;
  }
  function Ai(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function cg(e, t, n, l, u) {
    var s = zc();
    return s = s === null ? null : { parent: mt._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && Fo(t, null), Uc(), mh(t), e !== null && Tl(e, t, l, !0), t.childLanes = u, null;
  }
  function hu(e, t) {
    return t = gu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function fg(e, t, n) {
    return Ml(t, e.child, null, n), e = hu(t, t.pendingProps), e.flags |= 2, on(t), t.memoizedState = null, e;
  }
  function LS(e, t, n) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = hu(t, l), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ai(null, e);
        if (Lc(t), (e = Fe) ? (e = Ly(
          e,
          xn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: La !== null ? { id: qn, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Zp(e), n.return = t, t.child = n, Ot = t, Fe = null)) : e = null, e === null) throw $a(t);
        return t.lanes = 536870912, null;
      }
      return hu(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (Lc(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = fg(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (ht || Tl(e, t, n, !1), u = (n & e.childLanes) !== 0, ht || u) {
        if (Xa.current === null) {
          if (l = Ze, l !== null && (m = Jm(l, n), m !== 0 && m !== s.retryLane))
            throw s.retryLane = m, Sl(e, m), Ft(l, e, m), lf;
          Uu();
        }
        t = fg(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Fe = Rn(m.nextSibling), Ot = t, Ae = !0, ja = null, xn = !1, e !== null && Jp(t, e), t = hu(t, l), t.flags |= 134221824;
      return t;
    }
    return e = ya(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function hr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function rf(e, t, n, l, u) {
    return Rl(t), n = kc(
      e,
      t,
      n,
      l,
      void 0,
      u
    ), l = Yc(), e !== null && !ht ? (Vc(e, t, u), xa(e, t, u)) : (Ae && l && Ko(t), t.flags |= 1, St(e, t, n, u), t.child);
  }
  function dg(e, t, n, l, u, s) {
    return Rl(t), t.updateQueue = null, n = hh(
      t,
      l,
      n,
      u
    ), ph(e), l = Yc(), e !== null && !ht ? (Vc(e, t, s), xa(e, t, s)) : (Ae && l && Ko(t), t.flags |= 1, St(e, t, n, s), t.child);
  }
  function mg(e, t, n, l, u) {
    if (Rl(t), t.stateNode === null) {
      var s = rr, m = n.contextType;
      typeof m == "object" && m !== null && (s = Nt(m)), s = new n(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = nf, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, Nc(t), m = n.contextType, s.context = typeof m == "object" && m !== null ? Nt(m) : rr, s.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (tf(
        t,
        n,
        m,
        l
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && nf.enqueueReplaceState(s, s.state, null), xi(t, l, s, u), Ei(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      s = t.stateNode;
      var b = t.memoizedProps, R = _l(n, b);
      s.props = R;
      var B = s.context, V = n.contextType;
      m = rr, typeof V == "object" && V !== null && (m = Nt(V));
      var P = n.getDerivedStateFromProps;
      V = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, V || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (b || B !== m) && Wh(
        t,
        s,
        l,
        m
      ), Va = !1;
      var _ = t.memoizedState;
      s.state = _, xi(t, l, s, u), Ei(), B = t.memoizedState, b || _ !== B || Va ? (typeof P == "function" && (tf(
        t,
        n,
        P,
        l
      ), B = t.memoizedState), (R = Va || Fh(
        t,
        n,
        R,
        l,
        _,
        B,
        m
      )) ? (V || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), s.props = l, s.state = B, s.context = m, l = R) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      s = t.stateNode, _c(e, t), m = t.memoizedProps, V = _l(n, m), s.props = V, P = t.pendingProps, _ = s.context, B = n.contextType, R = rr, typeof B == "object" && B !== null && (R = Nt(B)), b = n.getDerivedStateFromProps, (B = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== P || _ !== R) && Wh(
        t,
        s,
        l,
        R
      ), Va = !1, _ = t.memoizedState, s.state = _, xi(t, l, s, u), Ei();
      var j = t.memoizedState;
      m !== P || _ !== j || Va || e !== null && e.dependencies !== null && Po(e.dependencies) ? (typeof b == "function" && (tf(
        t,
        n,
        b,
        l
      ), j = t.memoizedState), (V = Va || Fh(
        t,
        n,
        V,
        l,
        _,
        j,
        R
      ) || e !== null && e.dependencies !== null && Po(e.dependencies)) ? (B || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, j, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        l,
        j,
        R
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = j), s.props = l, s.state = j, s.context = R, l = V) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return s = l, hr(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = Ml(
      t,
      e.child,
      null,
      u
    ), t.child = Ml(
      t,
      null,
      n,
      u
    )) : St(e, t, n, u), t.memoizedState = s.state, e = t.child) : e = xa(
      e,
      t,
      u
    ), e;
  }
  function pg(e, t, n, l) {
    return El(), t.flags |= 256, St(e, t, n, l), t.child;
  }
  var of = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uf(e) {
    return { baseLanes: e, cachePool: ah() };
  }
  function sf(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= cn), e;
  }
  function hg(e, t, n) {
    var l = t.pendingProps, u = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (Dt.current & 2) !== 0), m && (u = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (u ? Qa(t) : Ka(), (e = Fe) ? (e = Ly(
          e,
          xn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: La !== null ? { id: qn, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Zp(e), n.return = t, t.child = n, Ot = t, Fe = null)) : e = null, e === null) throw $a(t);
        return ud(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return s = l.children, l = l.fallback, u ? (Ka(), u = t.mode, s = gu(
        { mode: "hidden", children: s },
        u
      ), l = Cl(
        l,
        u,
        n,
        null
      ), s.return = t, l.return = t, s.sibling = l, t.child = s, l = t.child, l.memoizedState = uf(n), l.childLanes = sf(
        e,
        m,
        n
      ), t.memoizedState = of, Ai(null, l)) : (Qa(t), cf(t, s));
    }
    var b = e.memoizedState;
    if (b !== null) {
      var R = b.dehydrated;
      if (R !== null)
        return jS(
          e,
          t,
          s,
          m,
          l,
          R,
          b,
          n
        );
    }
    return u ? (Ka(), u = l.fallback, s = t.mode, b = e.child, R = b.sibling, l = ya(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 1206910976, R !== null ? u = ya(R, u) : (u = Cl(
      u,
      s,
      n,
      null
    ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, Ai(null, l), l = t.child, u = e.child.memoizedState, u === null ? u = uf(n) : (s = u.cachePool, s !== null ? (b = mt._currentValue, s = s.parent !== b ? { parent: b, pool: b } : s) : s = ah(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: s
    }), l.memoizedState = u, l.childLanes = sf(
      e,
      m,
      n
    ), t.memoizedState = of, Ai(e.child, l)) : (Qa(t), n = e.child, e = n.sibling, n = ya(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function cf(e, t) {
    return t = gu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function gu(e, t) {
    return e = Zt(22, e, null, t), e.lanes = 0, e;
  }
  function yu(e, t, n) {
    return Ml(t, e.child, null, n), e = cf(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function jS(e, t, n, l, u, s, m, b) {
    if (n)
      return t.flags & 256 ? (Qa(t), t.flags &= -257, yu(
        e,
        t,
        b
      )) : t.memoizedState !== null ? (Ka(), t.child = e.child, t.flags |= 128, null) : (Ka(), s = u.fallback, m = t.mode, u = gu(
        { mode: "visible", children: u.children },
        m
      ), s = Cl(
        s,
        m,
        b,
        null
      ), s.flags |= 2, u.return = t, s.return = t, u.sibling = s, t.child = u, Ml(t, e.child, null, b), u = t.child, u.memoizedState = uf(b), u.childLanes = sf(
        e,
        l,
        b
      ), t.memoizedState = of, Ai(null, u));
    if (Qa(t), ud(s)) {
      if (l = s.nextSibling && s.nextSibling.dataset, l) var R = l.dgst;
      return l = R, l !== "" && (u = Error(o(419)), u.stack = "", u.digest = l, gi({ value: u, source: null, stack: null })), yu(
        e,
        t,
        b
      );
    }
    if (ht || Tl(e, t, b, !1), l = (b & e.childLanes) !== 0, ht || l) {
      if (Xa.current !== null)
        return yu(
          e,
          t,
          b
        );
      if (l = Ze, l !== null && (u = Jm(
        l,
        b
      ), u !== 0 && u !== m.retryLane))
        throw m.retryLane = u, Sl(e, u), Ft(l, e, u), lf;
      return od(s) || Uu(), yu(
        e,
        t,
        b
      );
    }
    return od(s) ? (t.flags |= 192, t.child = e.child, null) : (e = m.treeContext, Fe = Rn(s.nextSibling), Ot = t, Ae = !0, ja = null, xn = !1, e !== null && Jp(t, e), t = cf(
      t,
      u.children
    ), t.flags |= 134221824, t);
  }
  function gg(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Io(e.return, t, n);
  }
  function yg(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && lu(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function vu(e, t, n, l, u, s) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: u,
      treeForkCount: s
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = n, m.tailMode = u, m.treeForkCount = s);
  }
  function ff(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function df(e, t, n) {
    var l = t.pendingProps, u = l.revealOrder, s = l.tail;
    l = l.children;
    var m = Dt.current;
    if (t.flags & 128)
      return Ti(t, m), null;
    var b = (m & 2) !== 0;
    if (b ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, Ti(t, m), u === "backwards" && e !== null ? (ff(e), St(e, t, l, n), ff(e)) : St(e, t, l, n), l = Ae ? hi : 0, !b && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && gg(e, n, t);
        else if (e.tag === 19)
          gg(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "backwards":
        n = yg(t.child), n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null, ff(t)), vu(
          t,
          !0,
          u,
          null,
          s,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && lu(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = n, n = u, u = e;
        }
        vu(
          t,
          !0,
          n,
          null,
          s,
          l
        );
        break;
      case "together":
        vu(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        n = yg(t.child), n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), vu(
          t,
          !1,
          u,
          n,
          s,
          l
        );
    }
    return t.child;
  }
  function vg(e, t, n) {
    var l = t.pendingProps;
    return ka(t, t.type, l.value), St(e, t, l.children, n), t.child;
  }
  function xa(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ja |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Tl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ya(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ya(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function mf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Po(e)));
  }
  function $S(e, t, n) {
    switch (t.tag) {
      case 3:
        ml(t, t.stateNode.containerInfo), ka(t, mt, e.memoizedState.cache), El();
        break;
      case 27:
      case 5:
        Xl(t);
        break;
      case 4:
        ml(t, t.stateNode.containerInfo);
        break;
      case 10:
        ka(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Lc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Qa(t), t.flags |= 128, null;
          l = Tl(
            e,
            t,
            n,
            !1
          );
          var u = t.child.childLanes;
          return l || (n & u) !== 0 ? hg(e, t, n) : (Qa(t), e = xa(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        Qa(t);
        break;
      case 19:
        if (t.flags & 128)
          return df(
            e,
            t,
            n
          );
        if (u = (e.flags & 128) !== 0, l = (n & t.childLanes) !== 0, l || (Tl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), u) {
          if (l)
            return df(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ti(t, Dt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, sg(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ka(t, mt, e.memoizedState.cache);
    }
    return xa(e, t, n);
  }
  function bg(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ht = !0;
      else {
        if (!mf(e, n) && (t.flags & 128) === 0)
          return ht = !1, $S(
            e,
            t,
            n
          );
        ht = (e.flags & 131072) !== 0;
      }
    else
      ht = !1, Ae && (t.flags & 1048576) !== 0 && Pp(t, hi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Al(t.elementType), t.type = e, typeof e == "function")
            bc(e) ? (l = _l(e, l), t.tag = 1, t = mg(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = rf(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === k) {
                t.tag = 11, t = ig(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (u === ne) {
                t.tag = 14, t = og(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (u === F) {
                t.tag = 10, t.type = e, t = vg(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = Se(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return rf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, u = _l(
          l,
          t.pendingProps
        ), mg(
          e,
          t,
          l,
          u,
          n
        );
      case 3:
        e: {
          if (ml(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          u = s.element, _c(e, t), xi(t, l, null, n);
          var m = t.memoizedState;
          if (l = m.cache, ka(t, mt, l), l !== s.cache && Oc(
            t,
            [mt],
            n,
            !0
          ), Ei(), l = m.element, s.isDehydrated)
            if (s = {
              element: l,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = pg(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== u) {
              u = Sn(
                Error(o(424)),
                t
              ), gi(u), t = pg(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Fe = Rn(e.firstChild), Ot = t, Ae = !0, ja = null, xn = !0, n = sh(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (El(), l === u) {
              t = xa(
                e,
                t,
                n
              );
              break e;
            }
            St(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return hr(e, t), e === null ? (n = Gy(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (t.stateNode = xy(
          t.type,
          t.pendingProps,
          gn.current,
          t
        )) : t.memoizedState = Gy(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Xl(t), e === null && Ae && (l = t.stateNode = ky(
          t.type,
          t.pendingProps,
          gn.current
        ), Ot = t, xn = !0, u = Fe, tl(t.type) ? (sd = u, Fe = Rn(l.firstChild)) : Fe = u), St(
          e,
          t,
          t.pendingProps.children,
          n
        ), hr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((u = l = Fe) && (l = DC(
          l,
          t.type,
          t.pendingProps,
          xn
        ), l !== null ? (t.stateNode = l, Ot = t, Fe = Rn(l.firstChild), xn = !1, u = !0) : u = !1), u || $a(t)), Xl(t), u = t.type, s = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = s.children, ed(u, s) ? l = null : m !== null && ed(u, m) && (t.flags |= 32), t.memoizedState !== null && (u = kc(
          e,
          t,
          AS,
          null,
          null,
          n
        ), Dr._currentValue = u), hr(e, t), St(e, t, l, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = Fe) && (n = BC(
          n,
          t.pendingProps,
          xn
        ), n !== null ? (t.stateNode = n, Ot = t, Fe = null, e = !0) : e = !1), e || $a(t)), null;
      case 13:
        return hg(e, t, n);
      case 4:
        return ml(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Ml(
          t,
          null,
          l,
          n
        ) : St(e, t, l, n), t.child;
      case 11:
        return ig(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return l = t.pendingProps, hr(e, t), St(e, t, l, n), t.child;
      case 8:
        return St(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return St(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return vg(e, t, n);
      case 9:
        return u = t.type._context, l = t.pendingProps.children, Rl(t), u = Nt(u), l = l(u), t.flags |= 1, St(e, t, l, n), t.child;
      case 14:
        return og(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ug(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return df(e, t, n);
      case 31:
        return LS(e, t, n);
      case 22:
        return sg(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Rl(t), l = Nt(mt), e === null ? (u = zc(), u === null && (u = Ze, s = wc(), u.pooledCache = s, s.refCount++, s !== null && (u.pooledCacheLanes |= n), u = s), t.memoizedState = { parent: l, cache: u }, Nc(t), ka(t, mt, u)) : ((e.lanes & n) !== 0 && (_c(e, t), xi(t, null, null, n), Ei()), u = e.memoizedState, s = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ka(t, mt, l)) : (l = s.cache, ka(t, mt, l), l !== u.cache && Oc(
          t,
          [mt],
          n,
          !0
        ))), St(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = t.pendingProps, l.name != null && l.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ae && Ko(t), e !== null && e.memoizedProps.name !== l.name ? t.flags |= 4194816 : hr(e, t), St(e, t, l.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Ta(e) {
    e.flags |= 4;
  }
  function pf(e, t, n, l, u) {
    var s;
    if ((s = (e.mode & 32) !== 0) && (s = n === null ? Zy(t, l) : Zy(t, l) && (l.src !== n.src || l.srcSet !== n.srcSet)), s) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ey()) e.flags |= 8192;
        else
          throw zl = eu, Mc;
    } else e.flags &= -16777217;
  }
  function Sg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Iy(t))
      if (ey()) e.flags |= 8192;
      else
        throw zl = eu, Mc;
  }
  function bu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zm() : 536870912, e.lanes |= t, Sr |= t);
  }
  function zi(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = e.tail, l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (t = e.tail, n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
      }
  }
  function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 1206910976, l |= u.flags & 1206910976, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function kS(e, t, n) {
    var l = t.pendingProps;
    switch (Ec(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return We(t), null;
      case 1:
        return We(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sa(mt), ca(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ur(t) ? Ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Tc())), We(t), null;
      case 26:
        var u = t.type, s = t.memoizedState;
        return e === null ? (Ta(t), s !== null ? (We(t), Sg(t, s)) : (We(t), pf(
          t,
          u,
          null,
          l,
          n
        ))) : s ? s !== e.memoizedState ? (Ta(t), We(t), Sg(t, s)) : (We(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ta(t), We(t), pf(
          t,
          u,
          e,
          l,
          n
        )), null;
      case 27:
        if (pl(t), n = gn.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return We(t), t.subtreeFlags &= -33554433, null;
          }
          e = xt.current, ur(t) ? Fp(t) : (e = ky(u, l, n), t.stateNode = e, Ta(t));
        }
        return We(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (pl(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return We(t), t.subtreeFlags &= -33554433, null;
          }
          if (s = xt.current, ur(t))
            Fp(t);
          else {
            var m = ki(
              gn.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof l.is == "string" ? m.createElement("select", {
                      is: l.is
                    }) : m.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                    break;
                  default:
                    s = typeof l.is == "string" ? m.createElement(u, { is: l.is }) : m.createElement(u);
                }
            }
            s[Mt] = t, s[Kt] = l;
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            t.stateNode = s;
            e: switch (Ut(s, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Ta(t);
          }
        }
        return We(t), t.subtreeFlags &= -33554433, pf(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = gn.current, ur(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, u = Ot, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Mt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || by(e.nodeValue, n)), e || $a(t, !0);
          } else
            e = ki(e).createTextNode(
              l
            ), e[Mt] = t, t.stateNode = e;
        }
        return We(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ur(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Mt] = t;
            } else
              El(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            We(t), e = !1;
          } else
            n = Tc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (on(t), t) : (on(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return We(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = ur(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Mt] = t;
            } else
              El(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            We(t), u = !1;
          } else
            u = Tc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (on(t), t) : (on(t), null);
        }
        return on(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== u && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), bu(t, t.updateQueue), We(t), null);
      case 4:
        return ca(), e === null && If(t.stateNode.containerInfo), t.flags |= 67108864, We(t), null;
      case 10:
        return Sa(t.type), We(t), null;
      case 19:
        if (jc(t), l = t.memoizedState, l === null) return We(t), null;
        if (u = (t.flags & 128) !== 0, s = l.rendering, s === null)
          if (u) zi(l, !1);
          else {
            if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = lu(e), s !== null) {
                  for (t.flags |= 128, zi(l, !1), e = s.updateQueue, t.updateQueue = e, bu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Kp(n, e), n = n.sibling;
                  return Ti(
                    t,
                    Dt.current & 1 | 2
                  ), Ae && va(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && tn() > Nu && (t.flags |= 128, u = !0, zi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = lu(s), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, bu(t, e), zi(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !s.alternate && !Ae)
                return We(t), null;
            } else
              2 * tn() - l.renderingStartTime > Nu && n !== 536870912 && (t.flags |= 128, u = !0, zi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (e = l.last, e !== null ? e.sibling = s : t.child = s, l.last = s);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (n = e; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break e;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = tn(), e.sibling = null, s = Dt.current, s = u ? s & 1 | 2 : s & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !n || Ae ? Ti(t, s) : (n = s, Ee(_t, t), Ee(Dt, n), jt === null && (jt = t)), Ae && va(t, l.treeForkCount), e;
        }
        return We(t), null;
      case 22:
      case 23:
        return on(t), Hc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), n = t.updateQueue, n !== null && bu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && Je(wl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Sa(mt), We(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, We(t), null;
    }
    throw Error(o(156, t.tag));
  }
  function YS(e, t) {
    switch (Ec(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sa(mt), ca(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (on(t), t.alternate === null)
            throw Error(o(340));
          El();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (on(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          El();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return jc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ca(), null;
      case 10:
        return Sa(t.type), null;
      case 22:
      case 23:
        return on(t), Hc(), e !== null && Je(wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sa(mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cg(e, t) {
    switch (Ec(t), t.tag) {
      case 3:
        Sa(mt), ca();
        break;
      case 26:
      case 27:
      case 5:
        pl(t);
        break;
      case 4:
        ca();
        break;
      case 31:
        t.memoizedState !== null && on(t);
        break;
      case 13:
        on(t);
        break;
      case 19:
        jc(t);
        break;
      case 10:
        Sa(t.type);
        break;
      case 22:
      case 23:
        on(t), Hc(), e !== null && Je(wl);
        break;
      case 24:
        Sa(mt);
    }
  }
  function Mi(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var s = n.create, m = n.inst;
            l = s(), m.destroy = l;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (b) {
      Ge(t, t.return, b);
    }
  }
  function Za(e, t, n) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst, b = m.destroy;
            if (b !== void 0) {
              m.destroy = void 0, u = t;
              var R = n, B = b;
              try {
                B();
              } catch (V) {
                Ge(
                  u,
                  R,
                  V
                );
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (V) {
      Ge(t, t.return, V);
    }
  }
  function Eg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        fh(t, n);
      } catch (l) {
        Ge(e, e.return, l);
      }
    }
  }
  function xg(e, t, n) {
    n.props = _l(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ge(e, t, l);
    }
  }
  function Xn(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var u = e.stateNode, s = ha(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== s) && (u.ref = My(s)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var m = new dn(e);
              g(
                e.child,
                !1,
                NC,
                m,
                void 0,
                void 0
              ), e.stateNode = m;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (b) {
      Ge(e, t, b);
    }
  }
  function Bt(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ge(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Ge(e, t, u);
        }
      else n.current = null;
  }
  function Su(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        Hy(
          e.stateNode,
          t[n]
        );
  }
  function Tg(e) {
    for (var t = e.return; t !== null && (gf(t) && Hy(e.stateNode, t.stateNode), !hf(t)); )
      t = t.return;
  }
  function Ni(e) {
    for (var t = e.return; t !== null && (gf(t) && _C(e.stateNode, t.stateNode), !hf(t)); )
      t = t.return;
  }
  function hf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function gf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function yf(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      Ge(e, e.return, u);
    }
  }
  function vf(e, t, n) {
    try {
      var l = e.stateNode;
      mC(l, e.type, n, t), l[Kt] = t;
    } catch (u) {
      Ge(e, e.return, u);
    }
  }
  function Rg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && tl(e.type) || e.tag === 4;
  }
  function bf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && tl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sf(e, t, n, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(u), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vn)), Su(e, l), He = !0;
    else if (u !== 4 && (u === 27 && (Su(e, l), l = null, tl(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (Sf(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        Sf(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function Cu(e, t, n, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, t ? n.insertBefore(u, t) : n.appendChild(u), Su(e, l), He = !0;
    else if (u !== 4 && (u === 27 && (Su(e, l), l = null, tl(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (Cu(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        Cu(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function Og(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ut(t, l, n), t[Mt] = e, t[Kt] = n;
    } catch (s) {
      Ge(e, e.return, s);
    }
  }
  var Eu = !1, un = null;
  function wg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Eu = !0);
  }
  var Qn = null;
  function Ag() {
    var e = Qn;
    return Qn = null, e;
  }
  var It = 0;
  function gr(e, t, n, l, u) {
    return It = 0, zg(
      e.child,
      t,
      n,
      l,
      u
    );
  }
  function zg(e, t, n, l, u) {
    for (var s = !1; e !== null; ) {
      if (e.tag === 5) {
        var m = e.stateNode;
        if (l !== null) {
          var b = ad(m);
          l.push(b), b.view && (s = !0);
        } else
          s || ad(m).view && (s = !0);
        Eu = !0, Ay(
          m,
          It === 0 ? t : t + "_" + It,
          n
        ), It++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || zg(
        e.child,
        t,
        n,
        l,
        u
      ) && (s = !0));
      e = e.sibling;
    }
    return s;
  }
  function Kn(e, t) {
    for (; e !== null; )
      e.tag === 5 ? zy(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Kn(
        e.child,
        t
      )), e = e.sibling;
  }
  function xu(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (xu(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(o(544));
          var n = t.name;
          t = ga(t.default, t.share), t !== "none" && (gr(
            e,
            n,
            t,
            null,
            !1
          ) || Kn(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function Cf(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, l = e.memoizedProps, u = ha(l, n), s = ga(
        l.default,
        n.paired ? l.share : l.enter
      );
      s !== "none" ? gr(e, u, s, null, !1) ? (xu(e), n.paired || t || Tr(e, l.onEnter)) : Kn(e.child, !1) : xu(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Cf(e, t), e = e.sibling;
    else xu(e);
  }
  function Ef(e) {
    if (un !== null && un.size !== 0) {
      var t = un;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, l = n.name;
              if (l != null && l !== "auto") {
                var u = t.get(l);
                if (u !== void 0) {
                  var s = ga(
                    n.default,
                    n.share
                  );
                  if (s !== "none" && (gr(
                    e,
                    l,
                    s,
                    null,
                    !1
                  ) ? (s = e.stateNode, u.paired = s, s.paired = u, Tr(e, n.onShare)) : Kn(e.child, !1)), t.delete(l), t.size === 0) break;
                }
              }
            }
            Ef(e);
          }
          e = e.sibling;
        }
    }
  }
  function xf(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = ha(t, e.stateNode), l = un !== null ? un.get(n) : void 0, u = ga(
        t.default,
        l !== void 0 ? t.share : t.exit
      );
      u !== "none" && (gr(e, n, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, un.delete(n), Tr(e, t.onShare)) : Tr(e, t.onExit) : Kn(e.child, !1)), un !== null && Ef(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        xf(e), e = e.sibling;
    else
      un !== null && Ef(e);
  }
  function Mg(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = ha(t, e.stateNode);
        t = ga(t.default, t.update), e.flags &= -5, t !== "none" && gr(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Mg(e);
      e = e.sibling;
    }
  }
  function Tf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Kn(e.child, !1));
          }
          Tf(e);
        }
        e = e.sibling;
      }
  }
  function Tu(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Kn(e.child, !1), Tf(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Tu(e), e = e.sibling;
    else Tf(e);
  }
  function Ng(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Kn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Ng(e), e = e.sibling;
  }
  function Rf(e, t, n, l, u, s, m) {
    for (var b = !1; t !== null; ) {
      if (t.tag === 5) {
        var R = t.stateNode;
        if (s !== null && It < s.length) {
          var B = s[It], V = ad(R);
          (B.view || V.view) && (b = !0);
          var P;
          if (P = (e.flags & 4) === 0)
            if (V.clip) P = !0;
            else {
              P = B.rect;
              var _ = V.rect;
              P = P.y !== _.y || P.x !== _.x || P.height !== _.height || P.width !== _.width;
            }
          P && (e.flags |= 4), V.abs ? V = !B.abs : (B = B.rect, V = V.rect, V = B.height !== V.height || B.width !== V.width), V && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Ay(
          R,
          It === 0 ? n : n + "_" + It,
          u
        ), b && (e.flags & 4) !== 0 || (Qn === null && (Qn = []), Qn.push(
          R,
          It === 0 ? l : l + "_" + It,
          t.memoizedProps
        )), It++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && m ? e.flags |= t.flags & 32 : Rf(
        e,
        t.child,
        n,
        l,
        u,
        s,
        m
      ) && (b = !0));
      t = t.sibling;
    }
    return b;
  }
  function _g(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, l = e.stateNode, u = ha(n, l), s = ga(n.default, n.update), m;
        m = e.memoizedState, e.memoizedState = null, l = e;
        var b = e.child;
        It = 0, u = Rf(
          l,
          b,
          u,
          u,
          s,
          m,
          !1
        ), (e.flags & 4) !== 0 && u && Tr(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && _g(e);
      e = e.sibling;
    }
  }
  var wt = !1, Ye = !1, Zn = !1, Of = !1, Dg = typeof WeakSet == "function" ? WeakSet : Set, At = null, In = !1, _i = !1, Ru = !1, wf = !1;
  function VS(e, t, n) {
    if (e = e.containerInfo, Ff = Br, e = Lp(e), dc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var s = u.anchorOffset, m = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, m.nodeType;
            } catch {
              l = null;
              break e;
            }
            var b = 0, R = -1, B = -1, V = 0, P = 0, _ = e, j = null;
            t: for (; ; ) {
              for (var oe; _ !== l || s !== 0 && _.nodeType !== 3 || (R = b + s), _ !== m || u !== 0 && _.nodeType !== 3 || (B = b + u), _.nodeType === 3 && (b += _.nodeValue.length), (oe = _.firstChild) !== null; )
                j = _, _ = oe;
              for (; ; ) {
                if (_ === e) break t;
                if (j === l && ++V === s && (R = b), j === m && ++P === u && (B = b), (oe = _.nextSibling) !== null) break;
                _ = j, j = _.parentNode;
              }
              _ = oe;
            }
            l = R === -1 || B === -1 ? null : { start: R, end: B };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Wf = { focusedElem: e, selectionRange: l }, Br = !1, n = (n & 335544064) === n, At = t, t = n ? 9270 : 1024; At !== null; ) {
      if (e = At, n && (l = e.deletions, l !== null))
        for (s = 0; s < l.length; s++)
          n && xf(l[s]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && wg(e), Ou(n);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && n && xf(l), Ou(n);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            n && wg(e), Ou(n);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & t) !== 0 && l !== null ? (l.return = e, At = l) : (n && Mg(e), Ou(n));
      }
    }
    un = null;
  }
  function Ou(e) {
    for (; At !== null; ) {
      var t = At, n = e, l = t.alternate, u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && l !== null) {
            n = void 0, u = l.memoizedProps, l = l.memoizedState;
            var s = t.stateNode;
            try {
              var m = _l(
                t.type,
                u
              );
              n = s.getSnapshotBeforeUpdate(
                m,
                l
              ), s.__reactInternalSnapshotBeforeUpdate = n;
            } catch (b) {
              Ge(t, t.return, b);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, n = l.nodeType, n === 9)
              id(l);
            else if (n === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  id(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && l !== null && (n = ha(
            l.memoizedProps,
            l.stateNode
          ), u = t.memoizedProps, u = ga(u.default, u.update), u !== "none" && gr(
            l,
            n,
            u,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, At = l;
        break;
      }
      At = t.return;
    }
  }
  function Bg(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Pn(e, n), l & 4 && Mi(5, n);
        break;
      case 1:
        if (Pn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              Ge(n, n.return, m);
            }
          else {
            var u = _l(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Ge(
                n,
                n.return,
                m
              );
            }
          }
        l & 64 && Eg(n), l & 512 && Xn(n, n.return);
        break;
      case 3:
        if (Pn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            fh(e, t);
          } catch (m) {
            Ge(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Og(n);
      case 26:
      case 5:
        Pn(e, n), t === null && l & 4 && yf(n), l & 512 && Xn(n, n.return);
        break;
      case 12:
        Pn(e, n);
        break;
      case 31:
        Pn(e, n), l & 4 && jg(e, n);
        break;
      case 13:
        Pn(e, n), l & 4 && $g(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = eC.bind(
          null,
          n
        ), UC(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || wt, !l) {
          var s = t !== null && t.memoizedState !== null || Ye;
          t = wt, u = Ye, wt = l, (Ye = s) && !u ? (l = 2, (n.subtreeFlags & 8772) !== 0 && (l |= 1), Un(
            e,
            n,
            l
          )) : Pn(e, n), wt = t, Ye = u;
        }
        break;
      case 30:
        Pn(e, n), l & 512 && Xn(n, n.return);
        break;
      case 7:
        l & 512 && Xn(n, n.return);
      default:
        Pn(e, n);
    }
  }
  function Af(e, t) {
    for (e = e.child; e !== null; )
      Ug(e, t), e = e.sibling;
  }
  function Ug(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var l = n.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var u = e.stateNode, s = e.memoizedProps.style, m = s != null && s.hasOwnProperty("display") ? s.display : null;
            u.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
          }
        } catch (R) {
          Ge(e, e.return, R);
        }
        zf(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, He = !0;
        } catch (R) {
          Ge(e, e.return, R);
        }
        break;
      case 18:
        try {
          var b = e.stateNode;
          t ? wy(b, !0) : wy(e.stateNode, !1);
        } catch (R) {
          Ge(e, e.return, R);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Af(e, t);
        break;
      default:
        Af(e, t);
    }
  }
  function zf(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, l = t;
          switch (n.tag) {
            case 4:
              Ug(n, l);
              break e;
            case 22:
              n.memoizedState === null && zf(n, l);
              break e;
            default:
              zf(n, l);
          }
        }
        e = e.sibling;
      }
  }
  function Hg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Hg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && No(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var et = null, Pt = !1;
  function Dn(e, t, n) {
    for (n = n.child; n !== null; )
      Lg(e, t, n), n = n.sibling;
  }
  function Lg(e, t, n) {
    if (nn && typeof nn.onCommitFiberUnmount == "function")
      try {
        nn.onCommitFiberUnmount(ti, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ye || Bt(n, t), Dn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Ye && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ye || Bt(n, t), Ni(n);
        var l = et, u = Pt;
        tl(n.type) && (et = n.stateNode, Pt = !1), Dn(
          e,
          t,
          n
        ), Yy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), et = l, Pt = u;
        break;
      case 5:
        Ye || Bt(n, t), Ni(n);
      case 6:
        if (n.tag === 6 && Ni(n), l = et, u = Pt, et = null, Dn(
          e,
          t,
          n
        ), et = l, Pt = u, et !== null)
          if (Pt)
            try {
              (et.nodeType === 9 ? et.body : et.nodeName === "HTML" ? et.ownerDocument.body : et).removeChild(n.stateNode), He = !0;
            } catch (s) {
              Ge(
                n,
                t,
                s
              );
            }
          else
            try {
              et.removeChild(n.stateNode), He = !0;
            } catch (s) {
              Ge(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        et !== null && (Pt ? (e = et, Oy(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Ur(e)) : Oy(et, n.stateNode));
        break;
      case 4:
        l = et, u = Pt, et = n.stateNode.containerInfo, Pt = !0, Dn(
          e,
          t,
          n
        ), et = l, Pt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Za(2, n, t), Ye || Za(4, n, t), Dn(
          e,
          t,
          n
        );
        break;
      case 1:
        Ye || (Bt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && xg(
          n,
          t,
          l
        )), Dn(
          e,
          t,
          n
        );
        break;
      case 21:
        Dn(
          e,
          t,
          n
        );
        break;
      case 22:
        Ye = (l = Ye) || n.memoizedState !== null, Dn(
          e,
          t,
          n
        ), Ye = l;
        break;
      case 30:
        Bt(n, t), Dn(
          e,
          t,
          n
        );
        break;
      case 7:
        Ye || Bt(n, t), Dn(
          e,
          t,
          n
        );
        break;
      default:
        Dn(
          e,
          t,
          n
        );
    }
  }
  function jg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ur(e);
      } catch (n) {
        Ge(t, t.return, n);
      }
    }
  }
  function $g(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ur(e);
      } catch (n) {
        Ge(t, t.return, n);
      }
  }
  function qS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Dg()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dg()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function wu(e, t) {
    var n = qS(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var u = tC.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function qt(e, t, n) {
    var l = t.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var s = l[u], m = e, b = t, R = b;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 27:
              if (tl(R.type)) {
                et = R.stateNode, Pt = !1;
                break e;
              }
              break;
            case 5:
              et = R.stateNode, Pt = !1;
              break e;
            case 3:
            case 4:
              et = R.stateNode.containerInfo, Pt = !0;
              break e;
          }
          R = R.return;
        }
        if (et === null) throw Error(o(160));
        Lg(m, b, s), et = null, Pt = !1, m = s.alternate, m !== null && (m.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        kg(t, e, n), t = t.sibling;
  }
  var Bn = null;
  function kg(e, t, n) {
    var l = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var s = 0; s < l.length; s++) {
            var m = l[s];
            m.ref.impl = m.nextImpl;
          }
        qt(t, e, n), Gt(e), u & 4 && (Za(3, e, e.return), Mi(3, e), Za(5, e, e.return));
        break;
      case 1:
        qt(t, e, n), Gt(e), u & 512 && (Ye || l === null || Bt(l, l.return)), u & 64 && wt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (s = Bn, qt(t, e, n), Gt(e), u & 512 && (Ye || l === null || Bt(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null)
                if (wt)
                  e.stateNode = xy(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, n = e.memoizedProps, u = s.ownerDocument || s;
                    t: switch (t) {
                      case "title":
                        l = u.getElementsByTagName("title")[0], (!l || l[li] || l[Mt] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(t), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), Ut(l, t, n), l[Mt] = e, Rt(l), t = l;
                        break e;
                      case "link":
                        if (s = Ky(
                          "link",
                          "href",
                          u
                        ).get(t + (n.href || ""))) {
                          for (m = 0; m < s.length; m++)
                            if (l = s[m], l.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              s.splice(m, 1);
                              break t;
                            }
                        }
                        l = u.createElement(t), Ut(l, t, n), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (s = Ky(
                          "meta",
                          "content",
                          u
                        ).get(t + (n.content || ""))) {
                          for (m = 0; m < s.length; m++)
                            if (l = s[m], l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              s.splice(m, 1);
                              break t;
                            }
                        }
                        l = u.createElement(t), Ut(l, t, n), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(o(468, t));
                    }
                    l[Mt] = e, Rt(l), t = l;
                  }
                  e.stateNode = t;
                }
              else
                wt || md(s, e.type, e.stateNode);
            else
              e.stateNode = Qy(
                s,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? (t = l.stateNode, t === null || Ye || t.parentNode.removeChild(t)) : u.count--, n === null ? wt || md(s, e.type, e.stateNode) : Qy(s, n, e.memoizedProps)) : n === null && e.stateNode !== null && vf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        qt(t, e, n), Gt(e), u & 512 && (Ye || l === null || Bt(l, l.return)), l !== null && u & 4 && vf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (s = Zn, Zn = !1, qt(t, e, n), Zn = s, Gt(e), u & 512 && (Ye || l === null || Bt(l, l.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            Fl(t, ""), He = !0;
          } catch (V) {
            Ge(e, e.return, V);
          }
        }
        u & 4 && e.stateNode != null && (t = e.memoizedProps, vf(
          e,
          t,
          l !== null ? l.memoizedProps : t
        )), u & 1024 && (Of = !0);
        break;
      case 6:
        if (qt(t, e, n), Gt(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, He = !0;
          } catch (V) {
            Ge(e, e.return, V);
          }
        }
        break;
      case 3:
        if (He = !1, Vu = null, s = Bn, Bn = Yi(t.containerInfo), qt(t, e, n), Bn = s, Gt(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ur(t.containerInfo);
          } catch (V) {
            Ge(e, e.return, V);
          }
        Of && (Of = !1, Yg(e)), He = !1;
        break;
      case 4:
        u = Zn, Zn = wt, l = op(), s = Bn, Bn = Yi(
          e.stateNode.containerInfo
        ), qt(t, e, n), Gt(e), Bn = s, He && _i && (Ru = !0), He = l, Zn = u;
        break;
      case 12:
        qt(t, e, n), Gt(e);
        break;
      case 31:
        qt(t, e, n), Gt(e), u & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
        break;
      case 13:
        qt(t, e, n), Gt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Mu = tn()), u & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
        break;
      case 22:
        s = e.memoizedState !== null, m = l !== null && l.memoizedState !== null;
        var b = wt, R = Ye, B = Zn;
        wt = b || s, Zn = B || s, Ye = R || m, qt(t, e, n), Ye = R, Zn = B, wt = b, Gt(e), u & 8192 && (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, !s || l === null || m || wt || Ye || (t = m || Ye, n = wt, l = Ye, wt = s || wt, Ye = t, Ia(e, 2), wt = n, Ye = l), !s && Zn || Af(e, s)), u & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, wu(e, n))));
        break;
      case 19:
        qt(t, e, n), Gt(e), u & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
        break;
      case 30:
        u & 512 && (Ye || l === null || Bt(l, l.return)), u = op(), s = _i, m = (n & 335544064) === n, b = e.memoizedProps, _i = m && ga(
          b.default,
          b.update
        ) !== "none", qt(t, e, n), Gt(e), m && l !== null && He && (e.flags |= 4), _i = s, He = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Ye || l === null || Bt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        qt(t, e, n), Gt(e);
    }
  }
  function Gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Rg(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (gf(u)) {
            var s = u.stateNode;
            l === null ? l = [s] : l.push(s);
          }
          if (hf(u)) break;
          u = u.return;
        }
        var m = l;
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, R = bf(e);
            Cu(
              e,
              R,
              b,
              m
            );
            break;
          case 5:
            var B = n.stateNode;
            n.flags & 32 && (Fl(B, ""), n.flags &= -33);
            var V = bf(e);
            Cu(
              e,
              V,
              B,
              m
            );
            break;
          case 3:
          case 4:
            var P = n.stateNode.containerInfo, _ = bf(e);
            Sf(
              e,
              _,
              P,
              m
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Ge(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Yg(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Br = !0, t.reset(), Br = !1), e = e.sibling;
      }
  }
  function yr(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Vg(t, e), t = t.sibling;
    else _g(t);
  }
  function Vg(e, t) {
    var n = e.alternate;
    if (n === null) Cf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (wf = In = !1, Ag(), yr(t, e), !In && !Ru) {
            if (e = Qn, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                n = e[l];
                var u = e[l + 1];
                zy(n, e[l + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), wf = !0;
          }
          Qn = null;
          break;
        case 5:
          yr(t, e);
          break;
        case 4:
          l = In, In = !1, yr(t, e), In && (Ru = !0), In = l;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? Cf(e, !1) : yr(t, e));
          break;
        case 30:
          l = In, u = Ag(), In = !1, yr(t, e), In && (e.flags |= 4);
          var s = e.memoizedProps, m = e.stateNode;
          t = ha(s, m), m = ha(n.memoizedProps, m);
          var b = ga(s.default, s.update);
          b === "none" ? t = !1 : (s = n.memoizedState, n.memoizedState = null, n = e.child, It = 0, t = Rf(
            e,
            n,
            t,
            m,
            b,
            s,
            !0
          ), It !== (s === null ? 0 : s.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (Tr(
            e,
            e.memoizedProps.onUpdate
          ), Qn = u) : u !== null && (u.push.apply(u, Qn), Qn = u), In = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          yr(t, e);
      }
  }
  function Pn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Bg(e, t.alternate, t), t = t.sibling;
  }
  function Ia(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, l = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Za(4, n, n.return), Ia(
            n,
            l
          );
          break;
        case 1:
          Bt(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && xg(
            n,
            n.return,
            u
          ), Ia(
            n,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Yy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Bt(n, n.return), n.tag !== 5 && n.tag !== 27 || Ni(n), Ia(
            n,
            l
          );
          break;
        case 6:
          Ni(n);
          break;
        case 26:
          Bt(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || Ye || u.parentNode.removeChild(u), Ia(
            n,
            l
          );
          break;
        case 22:
          n.memoizedState === null && Ia(
            n,
            l
          );
          break;
        case 30:
          Bt(n, n.return), Ia(
            n,
            l
          );
          break;
        case 7:
          Bt(n, n.return);
        default:
          Ia(
            n,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Un(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, s = t, m = s.flags, b = (n & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            u,
            s,
            n
          ), Mi(4, s);
          break;
        case 1:
          if (Un(
            u,
            s,
            n
          ), l = s, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (V) {
              Ge(l, l.return, V);
            }
          if (l = s, u = l.updateQueue, u !== null) {
            var R = l.stateNode;
            try {
              var B = u.shared.hiddenCallbacks;
              if (B !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < B.length; u++)
                  ch(B[u], R);
            } catch (V) {
              Ge(l, l.return, V);
            }
          }
          b && m & 64 && Eg(s), Xn(s, s.return);
          break;
        case 27:
          (n & 2) !== 0 && Og(s);
        case 5:
          s.tag !== 5 && s.tag !== 27 || Tg(s), Un(
            u,
            s,
            n
          ), b && l === null && m & 4 && yf(s), Xn(s, s.return);
          break;
        case 6:
          Tg(s);
          break;
        case 26:
          R = s.stateNode, s.memoizedState !== null || R === null || wt || md(
            Yi(R.ownerDocument),
            s.type,
            R
          ), Un(
            u,
            s,
            n
          ), b && l === null && m & 4 && yf(s), Xn(s, s.return);
          break;
        case 12:
          Un(
            u,
            s,
            n
          );
          break;
        case 31:
          Un(
            u,
            s,
            n
          ), b && m & 4 && jg(u, s);
          break;
        case 13:
          Un(
            u,
            s,
            n
          ), b && m & 4 && $g(u, s);
          break;
        case 22:
          s.memoizedState === null && Un(
            u,
            s,
            n
          ), Xn(s, s.return);
          break;
        case 30:
          Un(
            u,
            s,
            n
          ), Xn(s, s.return);
          break;
        case 7:
          Xn(s, s.return);
        default:
          Un(
            u,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Mf(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && yi(n));
  }
  function Nf(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yi(e));
  }
  function Tn(e, t, n, l) {
    var u = (n & 335544064) === n;
    if (t.subtreeFlags & (u ? 10262 : 10256))
      for (t = t.child; t !== null; )
        qg(
          e,
          t,
          n,
          l
        ), t = t.sibling;
    else u && Ng(t);
  }
  function qg(e, t, n, l) {
    var u = (n & 335544064) === n;
    u && t.alternate === null && t.return !== null && t.return.alternate !== null && Tu(t);
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tn(
          e,
          t,
          n,
          l
        ), s & 2048 && Mi(9, t);
        break;
      case 1:
        Tn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        Tn(
          e,
          t,
          n,
          l
        ), u && wf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), s & 2048 && (s = null, t.alternate !== null && (s = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== s && (t.refCount++, s != null && yi(s)));
        break;
      case 12:
        if (s & 2048) {
          Tn(
            e,
            t,
            n,
            l
          ), s = t.stateNode;
          try {
            var m = t.memoizedProps, b = m.id, R = m.onPostCommit;
            typeof R == "function" && R(
              b,
              t.alternate === null ? "mount" : "update",
              s.passiveEffectDuration,
              -0
            );
          } catch (B) {
            Ge(t, t.return, B);
          }
        } else
          Tn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        Tn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        Tn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = t.stateNode, b = t.alternate, t.memoizedState !== null ? (u && b !== null && b.memoizedState === null && Tu(b), m._visibility & 2 ? Tn(
          e,
          t,
          n,
          l
        ) : Di(
          e,
          t
        )) : (u && b !== null && b.memoizedState !== null && Tu(t), m._visibility & 2 ? Tn(
          e,
          t,
          n,
          l
        ) : (m._visibility |= 2, vr(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), s & 2048 && Mf(b, t);
        break;
      case 24:
        Tn(
          e,
          t,
          n,
          l
        ), s & 2048 && Nf(t.alternate, t);
        break;
      case 30:
        u && (s = t.alternate, s !== null && (Kn(s.child, !0), Kn(t.child, !0))), Tn(
          e,
          t,
          n,
          l
        );
        break;
      default:
        Tn(
          e,
          t,
          n,
          l
        );
    }
  }
  function vr(e, t, n, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, m = t, b = n, R = l, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          vr(
            s,
            m,
            b,
            R,
            u
          ), Mi(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? vr(
            s,
            m,
            b,
            R,
            u
          ) : Di(
            s,
            m
          ) : (V._visibility |= 2, vr(
            s,
            m,
            b,
            R,
            u
          )), u && B & 2048 && Mf(
            m.alternate,
            m
          );
          break;
        case 24:
          vr(
            s,
            m,
            b,
            R,
            u
          ), u && B & 2048 && Nf(m.alternate, m);
          break;
        default:
          vr(
            s,
            m,
            b,
            R,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Di(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            Di(n, l), u & 2048 && Mf(
              l.alternate,
              l
            );
            break;
          case 24:
            Di(n, l), u & 2048 && Nf(l.alternate, l);
            break;
          default:
            Di(n, l);
        }
        t = t.sibling;
      }
  }
  var Dl = 8192;
  function Bl(e, t, n) {
    if (e.subtreeFlags & Dl)
      for (e = e.child; e !== null; )
        Gg(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Gg(e, t, n) {
    switch (e.tag) {
      case 26:
        Bl(
          e,
          t,
          n
        ), e.flags & Dl && (e.memoizedState !== null ? IC(
          n,
          Bn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Jy(n, e)));
        break;
      case 5:
        Bl(
          e,
          t,
          n
        ), e.flags & Dl && (e = e.stateNode, (t & 335544128) === t && Jy(n, e));
        break;
      case 3:
      case 4:
        var l = Bn;
        Bn = Yi(e.stateNode.containerInfo), Bl(
          e,
          t,
          n
        ), Bn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Dl, Dl = 16777216, Bl(
          e,
          t,
          n
        ), Dl = l) : Bl(
          e,
          t,
          n
        ));
        break;
      case 30:
        if ((e.flags & Dl) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, un === null && (un = /* @__PURE__ */ new Map()), un.set(l, u);
        }
        Bl(
          e,
          t,
          n
        );
        break;
      default:
        Bl(
          e,
          t,
          n
        );
    }
  }
  function Xg(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Bi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          At = l, Kg(
            l,
            e
          );
        }
      Xg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qg(e), e = e.sibling;
  }
  function Qg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Bi(e), e.flags & 2048 && Za(9, e, e.return);
        break;
      case 3:
        Bi(e);
        break;
      case 12:
        Bi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Au(e)) : Bi(e);
        break;
      default:
        Bi(e);
    }
  }
  function Au(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          At = l, Kg(
            l,
            e
          );
        }
      Xg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Za(8, t, t.return), Au(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Au(t));
          break;
        default:
          Au(t);
      }
      e = e.sibling;
    }
  }
  function Kg(e, t) {
    for (; At !== null; ) {
      var n = At;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Za(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          yi(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, At = l;
      else
        e: for (n = e; At !== null; ) {
          l = At;
          var u = l.sibling, s = l.return;
          if (Hg(l), l === n) {
            At = null;
            break e;
          }
          if (u !== null) {
            u.return = s, At = u;
            break e;
          }
          At = s;
        }
    }
  }
  var GS = {
    getCacheForType: function(e) {
      var t = Nt(mt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Nt(mt).controller.signal;
    }
  }, XS = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ze = null, ze = null, _e = 0, qe = 0, sn = null, Pa = !1, br = !1, _f = !1, Ra = 0, ot = 0, Ja = 0, Ul = 0, zu = 0, cn = 0, Sr = 0, Ui = null, Jt = null, Df = !1, Mu = 0, Zg = 0, Nu = 1 / 0, _u = null, Fa = null, lt = 0, Hn = null, Hl = null, Jn = 0, Bf = 0, Uf = null, Ig = null, Cr = null, Er = null, xr = null, Hi = 0, Du = null;
  function fn() {
    return (je & 2) !== 0 && _e !== 0 ? _e & -_e : se.T !== null ? Xf() : Fm();
  }
  function Pg() {
    if (cn === 0)
      if ((_e & 536870912) === 0 || Ae) {
        var e = wo;
        wo <<= 1, (wo & 3932160) === 0 && (wo = 262144), cn = e;
      } else cn = 536870912;
    return e = _t.current, e !== null && (e.flags |= 32), cn;
  }
  function Tr(e, t) {
    if (t != null) {
      var n = e.stateNode, l = n.ref;
      l === null && (l = n.ref = My(
        ha(e.memoizedProps, n)
      )), Er === null && (Er = []), Er.push(t.bind(null, l));
    }
  }
  function Ft(e, t, n) {
    (e === Ze && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (Rr(e, 0), Wa(
      e,
      _e,
      cn,
      !1
    )), ai(e, n), ((je & 2) === 0 || e !== Ze) && (e === Ze && ((je & 2) === 0 && (Ul |= n), ot === 4 && Wa(
      e,
      _e,
      cn,
      !1
    )), Fn(e));
  }
  function Jg(e, t, n) {
    if ((je & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ni(e, t), u = l ? ZS(e, t) : Lf(e, t, !0), s = l;
    do {
      if (u === 0) {
        br && !l && Wa(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !QS(n)) {
          u = Lf(e, t, !1), s = !1;
          continue;
        }
        if (u === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var b = e;
              u = Ui;
              var R = b.current.memoizedState.isDehydrated;
              if (R && (Rr(b, m).flags |= 256), m = Lf(
                b,
                m,
                !1
              ), m !== 2 && m !== 6) {
                if (_f && !R) {
                  b.errorRecoveryDisabledLanes |= s, Ul |= s, u = 4;
                  break e;
                }
                s = Jt, Jt = u, s !== null && (Jt === null ? Jt = s : Jt.push.apply(
                  Jt,
                  s
                ));
              }
              u = m;
            }
            if (s = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Rr(e, 0), Wa(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, s = u, s) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Wa(
                l,
                t,
                cn,
                !Pa
              );
              break e;
            case 2:
              Jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = Mu + 300 - tn(), 10 < u)) {
            if (Wa(
              l,
              t,
              cn,
              !Pa
            ), zo(l, 0, !0) !== 0) break e;
            Jn = t, l.timeoutHandle = nd(
              Fg.bind(
                null,
                l,
                n,
                Jt,
                _u,
                Df,
                t,
                cn,
                Ul,
                Sr,
                Pa,
                s,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Fg(
            l,
            n,
            Jt,
            _u,
            Df,
            t,
            cn,
            Ul,
            Sr,
            Pa,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Fn(e);
  }
  function Fg(e, t, n, l, u, s, m, b, R, B, V, P, _, j) {
    e.timeoutHandle = -1;
    var oe = t.subtreeFlags, de = (s & 335544064) === s;
    if (P = null, (de || oe & 8192 || (oe & 16785408) === 16785408) && (P = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Vn
    }, un = null, Gg(
      t,
      s,
      P
    ), de && (oe = P, de = e.containerInfo, de = (de.nodeType === 9 ? de : de.ownerDocument).__reactViewTransition, de != null && (oe.count++, oe.waitingForViewTransition = !0, oe = Gi.bind(oe), de.finished.then(oe, oe))), oe = (s & 62914560) === s ? Mu - tn() : (s & 4194048) === s ? Zg - tn() : 0, oe = PC(
      P,
      oe
    ), oe !== null)) {
      Jn = s, e.cancelPendingCommit = oe(
        iy.bind(
          null,
          e,
          t,
          s,
          n,
          l,
          u,
          m,
          b,
          R,
          B,
          V,
          P,
          null,
          _,
          j
        )
      ), Wa(e, s, m, !B);
      return;
    }
    iy(
      e,
      t,
      s,
      n,
      l,
      u,
      m,
      b,
      R,
      B,
      V,
      P
    );
  }
  function QS(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], s = u.getSnapshot;
          u = u.value;
          try {
            if (!rn(s(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Wa(e, t, n, l) {
    t = Km(e, t), t &= ~zu, t &= ~Ul, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var s = 31 - an(u), m = 1 << s;
      l[s] = -1, u &= ~m;
    }
    n !== 0 && Im(e, n, t);
  }
  function Bu() {
    return (je & 6) === 0 ? (Li(0), !1) : !0;
  }
  function Hf() {
    if (ze !== null) {
      if (qe === 0)
        var e = ze.return;
      else
        e = ze, ba = xl = null, qc(e), fr = null, Si = 0, e = ze;
      for (; e !== null; )
        Cg(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function Rr(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, gC(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Jn = 0, Hf(), Ze = e, ze = n = ya(e.current, null), _e = t, qe = 0, sn = null, Pa = !1, br = ni(e, t), _f = !1, Sr = cn = zu = Ul = Ja = ot = 0, Jt = Ui = null, Df = !1, Ra = Km(e, t), Vo(), n;
  }
  function Wg(e, t) {
    Te = null, se.H = mu, t === cr || t === Wo ? (t = ih(), qe = 3) : t === Mc ? (t = ih(), qe = 4) : qe = t === lf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, sn = t, ze === null && (ot = 1, pu(
      e,
      Sn(t, e.current)
    ));
  }
  function ey() {
    var e = _t.current;
    return e === null ? !0 : (_e & 4194048) === _e ? jt === null : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === jt : !1;
  }
  function ty() {
    var e = se.H;
    return se.H = mu, e === null ? mu : e;
  }
  function ny() {
    var e = se.A;
    return se.A = GS, e;
  }
  function Uu() {
    ot = 4, Pa || (_e & 4194048) !== _e && _t.current !== null || (br = !0), (Ja & 134217727) === 0 && (Ul & 134217727) === 0 || Ze === null || Wa(
      Ze,
      _e,
      cn,
      !1
    );
  }
  function Lf(e, t, n) {
    var l = je;
    je |= 2;
    var u = ty(), s = ny();
    (Ze !== e || _e !== t) && (_u = null, Rr(e, t)), t = !1;
    var m = ot;
    e: do
      try {
        if (qe !== 0 && ze !== null) {
          var b = ze, R = sn;
          switch (qe) {
            case 8:
              Hf(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _t.current === null && (t = !0);
              var B = qe;
              if (qe = 0, sn = null, Or(e, b, R, B), n && br) {
                m = 0;
                break e;
              }
              break;
            default:
              B = qe, qe = 0, sn = null, Or(e, b, R, B);
          }
        }
        KS(), m = ot;
        break;
      } catch (V) {
        Wg(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ba = xl = null, je = l, se.H = u, se.A = s, ze === null && (Ze = null, _e = 0, Vo()), m;
  }
  function KS() {
    for (; ze !== null; ) ay(ze);
  }
  function ZS(e, t) {
    var n = je;
    je |= 2;
    var l = ty(), u = ny();
    Ze !== e || _e !== t ? (_u = null, Nu = tn() + 500, Rr(e, t)) : br = ni(
      e,
      t
    );
    e: do
      try {
        if (qe !== 0 && ze !== null) {
          t = ze;
          var s = sn;
          t: switch (qe) {
            case 1:
              qe = 0, sn = null, Or(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (lh(s)) {
                qe = 0, sn = null, ly(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || Ze !== e || (qe = 7), Fn(e);
              }, s.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              lh(s) ? (qe = 0, sn = null, ly(t)) : (qe = 0, sn = null, Or(e, t, s, 7));
              break;
            case 5:
              var m = null;
              switch (ze.tag) {
                case 26:
                  m = ze.memoizedState;
                case 5:
                case 27:
                  var b = ze;
                  if (m ? Iy(m) : b.stateNode.complete) {
                    qe = 0, sn = null;
                    var R = b.sibling;
                    if (R !== null) ze = R;
                    else {
                      var B = b.return;
                      B !== null ? (ze = B, Hu(B)) : ze = null;
                    }
                    break t;
                  }
              }
              qe = 0, sn = null, Or(e, t, s, 5);
              break;
            case 6:
              qe = 0, sn = null, Or(e, t, s, 6);
              break;
            case 8:
              Hf(), ot = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        IS();
        break;
      } catch (V) {
        Wg(e, V);
      }
    while (!0);
    return ba = xl = null, se.H = l, se.A = u, je = n, ze !== null ? 0 : (Ze = null, _e = 0, Vo(), ot);
  }
  function IS() {
    for (; ze !== null && !d1(); )
      ay(ze);
  }
  function ay(e) {
    var t = bg(e.alternate, e, Ra);
    e.memoizedProps = e.pendingProps, t === null ? Hu(e) : ze = t;
  }
  function ly(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = dg(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          _e
        );
        break;
      case 11:
        t = dg(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          _e
        );
        break;
      case 5:
        qc(t);
        var l = t;
        l === Ot && (Ae ? (Zo(l), l.tag === 5 && l.stateNode != null && (Fe = l.stateNode)) : (Zo(l), Ae = !0));
      default:
        Cg(n, t), t = ze = Kp(t, Ra), t = bg(n, t, Ra);
    }
    e.memoizedProps = e.pendingProps, t === null ? Hu(e) : ze = t;
  }
  function Or(e, t, n, l) {
    ba = xl = null, qc(t), fr = null, Si = 0;
    var u = t.return;
    try {
      if (HS(
        e,
        u,
        t,
        n,
        _e
      )) {
        ot = 1, pu(
          e,
          Sn(n, e.current)
        ), ze = null;
        return;
      }
    } catch (s) {
      if (u !== null) throw ze = u, s;
      ot = 1, pu(
        e,
        Sn(n, e.current)
      ), ze = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : br || (_e & 536870912) !== 0 ? e = !1 : (Pa = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = _t.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ry(t, e)) : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ry(
          t,
          Pa
        );
        return;
      }
      e = t.return;
      var n = kS(
        t.alternate,
        t,
        Ra
      );
      if (n !== null) {
        ze = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    ot === 0 && (ot = 5);
  }
  function ry(e, t) {
    do {
      var n = YS(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ze = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ze = e;
        return;
      }
      ze = e = n;
    } while (e !== null);
    ot = 6, ze = null;
  }
  function iy(e, t, n, l, u, s, m, b, R, B, V, P) {
    e.cancelPendingCommit = null;
    do
      Lu();
    while (lt !== 0);
    if ((je & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      e === Ze && (ze = Ze = null, _e = 0), Hl = t, Hn = e, Jn = n, Uf = u, Ig = l, PS(
        e,
        t,
        n,
        m,
        b,
        R,
        P
      );
    }
  }
  function PS(e, t, n, l, u, s, m) {
    var b = t.lanes | t.childLanes;
    if (Bf = b, b |= yc, E1(
      e,
      n,
      b,
      l,
      u,
      s
    ), Er = null, (n & 335544064) === n ? (xr = TS(e), l = 10262) : (xr = null, l = 10256), (t.subtreeFlags & l) !== 0 || (t.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, nC(Ro, function() {
      return Yf(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Eu = !1, l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
      l = se.T, se.T = null, u = pe.p, pe.p = 2, s = je, je |= 4;
      try {
        VS(e, t, n);
      } finally {
        je = s, pe.p = u, se.T = l;
      }
    }
    lt = 1, Eu ? Cr = EC(
      m,
      e.containerInfo,
      xr,
      jf,
      $f,
      FS,
      kf,
      Yf,
      JS
    ) : (jf(), $f(), kf());
  }
  function JS(e) {
    if (lt !== 0) {
      var t = Hn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function FS() {
    lt === 3 && (lt = 0, Vg(Hl, Hn), lt = 4);
  }
  function jf() {
    if (lt === 1) {
      lt = 0;
      var e = Hn, t = Hl, n = Jn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = se.T, se.T = null;
        var u = pe.p;
        pe.p = 2;
        var s = je;
        je |= 4;
        try {
          _i = Ru = !1, kg(t, e, n), n = Wf;
          var m = Lp(e.containerInfo), b = n.focusedElem, R = n.selectionRange;
          if (m !== b && b && b.ownerDocument && Hp(
            b.ownerDocument.documentElement,
            b
          )) {
            if (R !== null && dc(b)) {
              var B = R.start, V = R.end;
              if (V === void 0 && (V = B), "selectionStart" in b)
                b.selectionStart = B, b.selectionEnd = Math.min(
                  V,
                  b.value.length
                );
              else {
                var P = b.ownerDocument || document, _ = P && P.defaultView || window;
                if (_.getSelection) {
                  var j = _.getSelection(), oe = b.textContent.length, de = Math.min(R.start, oe), Re = R.end === void 0 ? de : Math.min(R.end, oe);
                  !j.extend && de > Re && (m = Re, Re = de, de = m);
                  var D = Up(
                    b,
                    de
                  ), z = Up(
                    b,
                    Re
                  );
                  if (D && z && (j.rangeCount !== 1 || j.anchorNode !== D.node || j.anchorOffset !== D.offset || j.focusNode !== z.node || j.focusOffset !== z.offset)) {
                    var L = P.createRange();
                    L.setStart(D.node, D.offset), j.removeAllRanges(), de > Re ? (j.addRange(L), j.extend(z.node, z.offset)) : (L.setEnd(z.node, z.offset), j.addRange(L));
                  }
                }
              }
            }
            for (P = [], j = b; j = j.parentNode; )
              j.nodeType === 1 && P.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < P.length; b++) {
              var I = P[b];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          Br = !!Ff, Wf = Ff = null;
        } finally {
          je = s, pe.p = u, se.T = l;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function $f() {
    if (lt === 2) {
      lt = 0;
      var e = Hn, t = Hl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = se.T, se.T = null;
        var l = pe.p;
        pe.p = 2;
        var u = je;
        je |= 4;
        try {
          Bg(e, t.alternate, t);
        } finally {
          je = u, pe.p = l, se.T = n;
        }
      }
      lt = 3;
    }
  }
  function kf() {
    if (lt === 4 || lt === 3) {
      lt = 0;
      var e = Cr;
      Cr = null, m1();
      var t = Hn, n = Hl, l = Jn, u = Ig, s = (l & 335544064) === l ? 10262 : 10256;
      if ((n.subtreeFlags & s) !== 0 || (n.flags & s) !== 0 ? lt = 5 : (lt = 0, Hl = Hn = null, oy(t, t.pendingLanes)), s = t.pendingLanes, s === 0 && (Fa = null), Zs(l), n = n.stateNode, nn && typeof nn.onCommitFiberRoot == "function")
        try {
          nn.onCommitFiberRoot(
            ti,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = se.T, s = pe.p, pe.p = 2, se.T = null;
        try {
          for (var m = t.onRecoverableError, b = 0; b < u.length; b++) {
            var R = u[b];
            m(R.value, {
              componentStack: R.stack
            });
          }
        } finally {
          se.T = n, pe.p = s;
        }
      }
      if (u = Er, m = xr, xr = null, u !== null && (Er = null, m === null && (m = []), e !== null))
        for (R = 0; R < u.length; R++)
          n = (0, u[R])(
            m
          ), n !== void 0 && e.finished.finally(n);
      (Jn & 3) !== 0 && Lu(), Fn(t), s = t.pendingLanes, (l & 261930) !== 0 && (s & 42) !== 0 ? t === Du ? Hi++ : (Hi = 0, Du = t) : (Hi = 0, Du = null), Li(0);
    }
  }
  function oy(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, yi(t)));
  }
  function Lu() {
    return Cr !== null && (Cr.skipTransition(), Cr = null), jf(), $f(), kf(), Yf();
  }
  function Yf() {
    if (lt !== 5) return !1;
    var e = Hn, t = Bf;
    Bf = 0;
    var n = Zs(Jn), l = se.T, u = pe.p;
    try {
      pe.p = 32 > n ? 32 : n, se.T = null, n = Uf, Uf = null;
      var s = Hn, m = Jn;
      if (lt = 0, Hl = Hn = null, Jn = 0, (je & 6) !== 0) throw Error(o(331));
      var b = je;
      if (je |= 4, Qg(s.current), qg(
        s,
        s.current,
        m,
        n
      ), je = b, Li(0, !1), nn && typeof nn.onPostCommitFiberRoot == "function")
        try {
          nn.onPostCommitFiberRoot(ti, s);
        } catch {
        }
      return !0;
    } finally {
      pe.p = u, se.T = l, oy(e, t);
    }
  }
  function uy(e, t, n) {
    t = Sn(n, t), t = af(e.stateNode, t, 2), e = Ga(e, t, 2), e !== null && (ai(e, 2), Fn(e));
  }
  function Ge(e, t, n) {
    if (e.tag === 3)
      uy(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          uy(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Fa === null || !Fa.has(l))) {
            e = Sn(n, e), n = lg(2), l = Ga(t, n, 2), l !== null && (rg(
              n,
              l,
              t,
              e
            ), ai(l, 2), Fn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vf(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new XS();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(n) || (_f = !0, u.add(n), e = WS.bind(null, e, t, n), t.then(e, e));
  }
  function WS(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ze === e && (_e & n) === n && ((ot === 4 || ot === 3 && (_e & 62914560) === _e && 300 > tn() - Mu) && (je & 2) === 0 ? Rr(e, 0) : zu |= n, Sr === _e && (Sr = 0)), Fn(e);
  }
  function sy(e, t) {
    t === 0 && (t = Zm()), e = Sl(e, t), e !== null && (ai(e, t), Fn(e));
  }
  function eC(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), sy(e, n);
  }
  function tC(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), sy(e, n);
  }
  function nC(e, t) {
    return Gs(e, t);
  }
  var wr = null, Ar = null, qf = !1, ju = !1, Gf = !1, el = 0;
  function Fn(e) {
    e !== Ar && e.next === null && (Ar === null ? wr = Ar = e : Ar = Ar.next = e), ju = !0, qf || (qf = !0, lC());
  }
  function Li(e, t) {
    if (!Gf && ju) {
      Gf = !0;
      do
        for (var n = !1, l = wr; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var m = l.suspendedLanes, b = l.pingedLanes;
              s = (1 << 31 - an(42 | e) + 1) - 1, s &= u & ~(m & ~b), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, my(l, s));
          } else
            s = _e, s = zo(
              l,
              l === Ze ? s : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (s & 3) === 0 || ni(l, s) || (n = !0, my(l, s));
          l = l.next;
        }
      while (n);
      Gf = !1;
    }
  }
  function aC() {
    cy();
  }
  function cy() {
    ju = qf = !1;
    var e = 0;
    el !== 0 && hC() && (e = el);
    for (var t = tn(), n = null, l = wr; l !== null; ) {
      var u = l.next, s = fy(l, t);
      s === 0 ? (l.next = null, n === null ? wr = u : n.next = u, u === null && (Ar = n)) : (n = l, (e !== 0 || (s & 3) !== 0) && (ju = !0)), l = u;
    }
    lt !== 0 && lt !== 5 || Li(e), el !== 0 && (el = 0);
  }
  function fy(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - an(s), b = 1 << m, R = u[m];
      R === -1 ? ((b & n) === 0 || (b & l) !== 0) && (u[m] = C1(b, t)) : R <= t && (e.expiredLanes |= b), s &= ~b;
    }
    if (t = Ze, n = _e, n = zo(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Xs(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ni(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Xs(l), Zs(n)) {
        case 2:
        case 8:
          n = Xm;
          break;
        case 32:
          n = Ro;
          break;
        case 268435456:
          n = Qm;
          break;
        default:
          n = Ro;
      }
      return l = dy.bind(null, e), n = Gs(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Xs(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function dy(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Lu() && e.callbackNode !== n)
      return null;
    var l = _e;
    return l = zo(
      e,
      e === Ze ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Jg(e, l, t), fy(e, tn()), e.callbackNode != null && e.callbackNode === n ? dy.bind(null, e) : null);
  }
  function my(e, t) {
    if (Lu()) return null;
    Jg(e, t, !0);
  }
  function lC() {
    yC(function() {
      (je & 6) !== 0 ? Gs(
        Gm,
        aC
      ) : cy();
    });
  }
  function Xf() {
    if (el === 0) {
      var e = Ol;
      e === 0 && (e = Oo, Oo <<= 1, (Oo & 261888) === 0 && (Oo = 256)), el = e;
    }
    return el;
  }
  function py(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Bo(e);
  }
  function rC(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var s = py(
        (u[Kt] || null).action
      ), m = l.submitter;
      m && (t = (t = m[Kt] || null) ? py(t.formAction) : m.getAttribute("formAction"), t !== null && (s = t, m = null));
      var b = new jo(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (el !== 0) {
                  var R = new FormData(u, m);
                  Fc(
                    n,
                    {
                      pending: !0,
                      data: R,
                      method: u.method,
                      action: s
                    },
                    null,
                    R
                  );
                }
              } else
                typeof s == "function" && (b.preventDefault(), R = new FormData(u, m), Fc(
                  n,
                  {
                    pending: !0,
                    data: R,
                    method: u.method,
                    action: s
                  },
                  s,
                  R
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Qf = 0; Qf < gc.length; Qf++) {
    var Kf = gc[Qf], iC = Kf.toLowerCase(), oC = Kf[0].toUpperCase() + Kf.slice(1);
    _n(
      iC,
      "on" + oC
    );
  }
  _n(kp, "onAnimationEnd"), _n(Yp, "onAnimationIteration"), _n(Vp, "onAnimationStart"), _n("dblclick", "onDoubleClick"), _n("focusin", "onFocus"), _n("focusout", "onBlur"), _n(gS, "onTransitionRun"), _n(yS, "onTransitionStart"), _n(vS, "onTransitionCancel"), _n(qp, "onTransitionEnd"), Pl("onMouseEnter", ["mouseout", "mouseover"]), Pl("onMouseLeave", ["mouseout", "mouseover"]), Pl("onPointerEnter", ["pointerout", "pointerover"]), Pl("onPointerLeave", ["pointerout", "pointerover"]), yl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), yl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), yl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), yl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), yl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), yl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), uC = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ji)
  );
  function hy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], u = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var b = l[m], R = b.instance, B = b.currentTarget;
            if (b = b.listener, R !== s && u.isPropagationStopped())
              break e;
            s = b, u.currentTarget = B;
            try {
              s(u);
            } catch (V) {
              Yo(V);
            }
            u.currentTarget = null, s = R;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (b = l[m], R = b.instance, B = b.currentTarget, b = b.listener, R !== s && u.isPropagationStopped())
              break e;
            s = b, u.currentTarget = B;
            try {
              s(u);
            } catch (V) {
              Yo(V);
            }
            u.currentTarget = null, s = R;
          }
      }
    }
  }
  function Me(e, t) {
    var n = t[ep];
    n === void 0 && (n = t[ep] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (gy(t, e, 2, !1), n.add(l));
  }
  function Zf(e, t, n) {
    var l = 0;
    t && (l |= 4), gy(
      n,
      e,
      l,
      t
    );
  }
  var $u = "_reactListening" + Math.random().toString(36).slice(2);
  function If(e) {
    if (!e[$u]) {
      e[$u] = !0, ap.forEach(function(n) {
        n !== "selectionchange" && (uC.has(n) || Zf(n, !1, e), Zf(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$u] || (t[$u] = !0, Zf("selectionchange", !1, t));
    }
  }
  function gy(e, t, n, l) {
    switch (r0(t)) {
      case 2:
        var u = eE;
        break;
      case 8:
        u = tE;
        break;
      default:
        u = hd;
    }
    n = u.bind(
      null,
      t,
      n,
      e
    ), u = void 0, !nc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, {
      passive: u
    }) : e.addEventListener(t, n, !1);
  }
  function Pf(e, t, n, l, u) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var b = l.stateNode.containerInfo;
          if (b === u) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var R = m.tag;
              if ((R === 3 || R === 4) && m.stateNode.containerInfo === u)
                return;
              m = m.return;
            }
          for (; b !== null; ) {
            if (m = gl(b), m === null) return;
            if (R = m.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = s = m;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    gp(function() {
      var B = s, V = ec(n), P = [];
      e: {
        var _ = Gp.get(e);
        if (_ !== void 0) {
          var j = jo, oe = e;
          switch (e) {
            case "keypress":
              if (Ho(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = Q1;
              break;
            case "focusin":
              oe = "focus", j = ic;
              break;
            case "focusout":
              oe = "blur", j = ic;
              break;
            case "beforeblur":
            case "afterblur":
              j = ic;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = bp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = B1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = J1;
              break;
            case kp:
            case Yp:
            case Vp:
              j = L1;
              break;
            case qp:
              j = W1;
              break;
            case "scroll":
            case "scrollend":
              j = _1;
              break;
            case "wheel":
              j = tS;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = $1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Cp;
              break;
            case "submit":
              j = I1;
              break;
            case "toggle":
            case "beforetoggle":
              j = aS;
          }
          var de = (t & 4) !== 0, Re = !de && (e === "scroll" || e === "scrollend"), D = de ? _ !== null ? _ + "Capture" : null : _;
          de = [];
          for (var z = B, L; z !== null; ) {
            var I = z;
            if (L = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || L === null || D === null || (I = ii(z, D), I != null && de.push(
              $i(z, I, L)
            )), Re) break;
            z = z.return;
          }
          0 < de.length && (_ = new j(
            _,
            oe,
            null,
            n,
            V
          ), P.push({ event: _, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", j && n !== Ws && (oe = n.relatedTarget || n.fromElement) && (gl(oe) || oe[Kl]))
            break e;
          (_ || j) && (oe = V.window === V ? V : (j = V.ownerDocument) ? j.defaultView || j.parentWindow : window, _ ? (j = n.relatedTarget || n.toElement, _ = B, j = j ? gl(j) : null, j !== null && (Re = f(j), de = j.tag, j !== Re || de !== 5 && de !== 27 && de !== 6) && (j = null)) : (_ = null, j = B), _ !== j && (de = bp, I = "onMouseLeave", D = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (de = Cp, I = "onPointerLeave", D = "onPointerEnter", z = "pointer"), Re = _ == null ? oe : ri(_), L = j == null ? oe : ri(j), oe = new de(
            I,
            z + "leave",
            _,
            n,
            V
          ), oe.target = Re, oe.relatedTarget = L, I = null, gl(V) === B && (de = new de(
            D,
            z + "enter",
            j,
            n,
            V
          ), de.target = L, de.relatedTarget = Re, I = de), Re = I, de = _ && j ? Q(
            _,
            j,
            sC
          ) : null, _ !== null && yy(
            P,
            oe,
            _,
            de,
            !1
          ), j !== null && Re !== null && yy(
            P,
            Re,
            j,
            de,
            !0
          )));
        }
        e: {
          if (_ = B ? ri(B) : window, j = _.nodeName && _.nodeName.toLowerCase(), j === "select" || j === "input" && _.type === "file")
            var fe = zp;
          else if (wp(_))
            if (Mp)
              fe = mS;
            else {
              fe = fS;
              var De = cS;
            }
          else
            j = _.nodeName, !j || j.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? B && Fs(B.elementType) && (fe = zp) : fe = dS;
          if (fe && (fe = fe(e, B))) {
            Ap(
              P,
              fe,
              n,
              V
            );
            break e;
          }
          De && De(e, _, B);
        }
        switch (De = B ? ri(B) : window, e) {
          case "focusin":
            (wp(De) || De.contentEditable === "true") && (nr = De, mc = B, pi = null);
            break;
          case "focusout":
            pi = mc = nr = null;
            break;
          case "mousedown":
            pc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pc = !1, jp(P, n, V);
            break;
          case "selectionchange":
            if (hS) break;
          case "keydown":
          case "keyup":
            jp(P, n, V);
        }
        var me;
        if (uc)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          tr ? Rp(e, n) && (ve = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Ep && n.locale !== "ko" && (tr || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && tr && (me = yp()) : (Ua = V, ac = "value" in Ua ? Ua.value : Ua.textContent, tr = !0)), De = ku(B, ve), 0 < De.length && (ve = new Sp(
          ve,
          e,
          null,
          n,
          V
        ), P.push({ event: ve, listeners: De }), me ? ve.data = me : (me = Op(n), me !== null && (ve.data = me)))), (me = rS ? iS(e, n) : oS(e, n)) && (ve = ku(B, "onBeforeInput"), 0 < ve.length && (De = new Sp(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), P.push({
          event: De,
          listeners: ve
        }), De.data = me)), rC(
          P,
          e,
          B,
          n,
          V
        );
      }
      hy(P, t);
    });
  }
  function $i(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function ku(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e, s = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || s === null || (u = ii(e, n), u != null && l.unshift(
        $i(e, u, s)
      ), u = ii(e, t), u != null && l.push(
        $i(e, u, s)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function sC(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yy(e, t, n, l, u) {
    for (var s = t._reactName, m = []; n !== null && n !== l; ) {
      var b = n, R = b.alternate, B = b.stateNode;
      if (b = b.tag, R !== null && R === l) break;
      b !== 5 && b !== 26 && b !== 27 || B === null || (R = B, u ? (B = ii(n, s), B != null && m.unshift(
        $i(n, B, R)
      )) : u || (B = ii(n, s), B != null && m.push(
        $i(n, B, R)
      ))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var cC = /\r\n?/g, fC = /\u0000|\uFFFD/g;
  function vy(e) {
    return (typeof e == "string" ? e : "" + e).replace(cC, `
`).replace(fC, "");
  }
  function by(e, t) {
    return t = vy(t), vy(e) === t;
  }
  function Xe(e, t, n, l, u, s) {
    switch (n) {
      case "children":
        if (typeof l == "string")
          t === "body" || t === "textarea" && l === "" || Fl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          t !== "body" && Fl(e, "" + l);
        else return;
        break;
      case "className":
        Do(e, "class", l);
        break;
      case "tabIndex":
        Do(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Do(e, n, l);
        break;
      case "style":
        pp(e, l, s);
        return;
      case "data":
        if (t !== "object") {
          Do(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Bo(l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (t !== "input" && Xe(e, t, "name", u.name, u, null), Xe(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Xe(e, t, "encType", u.encType, u, null), Xe(e, t, "method", u.method, u, null), Xe(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Bo(l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Vn);
        return;
      case "onScroll":
        l != null && Me("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Me("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            (s != null ? s.__html : void 0) !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Bo(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Me("beforetoggle", e), Me("toggle", e), _o(e, "popover", l);
        break;
      case "xlinkActuate":
        ma(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ma(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ma(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ma(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ma(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ma(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ma(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ma(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ma(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        _o(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = M1.get(n) || n, _o(e, n, l);
        else return;
    }
    He = !0;
  }
  function Jf(e, t, n, l, u, s) {
    switch (n) {
      case "style":
        pp(e, l, s);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            (s != null ? s.__html : void 0) !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof l == "string") Fl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          Fl(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Me("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Me("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = Vn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!lp.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), s = n.slice(2, u ? n.length - 7 : void 0), t = e[Kt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(s, t, u), typeof l == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(s, l, u);
              break e;
            }
            He = !0, n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : _o(e, n, l);
          }
        return;
    }
    He = !0;
  }
  function Ut(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Me("error", e), Me("load", e);
        var l = !1, u = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var m = n[s];
            if (m != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Xe(e, t, s, m, n, null);
              }
          }
        u && Xe(e, t, "srcSet", n.srcSet, n, null), l && Xe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Me("invalid", e);
        var b = s = m = u = null, R = null, B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var V = n[l];
            if (V != null)
              switch (l) {
                case "name":
                  u = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  R = V;
                  break;
                case "defaultChecked":
                  B = V;
                  break;
                case "value":
                  s = V;
                  break;
                case "defaultValue":
                  b = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Xe(e, t, l, V, n, null);
              }
          }
        cp(
          e,
          s,
          b,
          R,
          B,
          m,
          u,
          !1
        );
        return;
      case "select":
        Me("invalid", e), l = m = s = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (b = n[u], b != null))
            switch (u) {
              case "value":
                s = b;
                break;
              case "defaultValue":
                m = b;
                break;
              case "multiple":
                l = b;
              default:
                Xe(e, t, u, b, n, null);
            }
        t = s, n = m, e.multiple = !!l, t != null ? Jl(e, !!l, t, !1) : n != null && Jl(e, !!l, n, !0);
        return;
      case "textarea":
        Me("invalid", e), s = u = l = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (b = n[m], b != null))
            switch (m) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                u = b;
                break;
              case "children":
                s = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(o(91));
                break;
              default:
                Xe(e, t, m, b, n, null);
            }
        dp(e, l, u, s);
        return;
      case "option":
        for (R in n)
          if (n.hasOwnProperty(R) && (l = n[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Xe(e, t, R, l, n, null);
            }
        return;
      case "dialog":
        Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
        break;
      case "iframe":
      case "object":
        Me("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ji.length; l++)
          Me(ji[l], e);
        break;
      case "image":
        Me("error", e), Me("load", e);
        break;
      case "details":
        Me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Me("error", e), Me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in n)
          if (n.hasOwnProperty(B) && (l = n[B], l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Xe(e, t, B, l, n, null);
            }
        return;
      default:
        if (Fs(t)) {
          for (V in n)
            n.hasOwnProperty(V) && (l = n[V], l !== void 0 && Jf(
              e,
              t,
              V,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (l = n[b], l != null && Xe(e, t, b, l, n, null));
  }
  var dC = {};
  function mC(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, s = null, m = null, b = null, R = null, B = null, V = null;
        for (j in n) {
          var P = n[j];
          if (n.hasOwnProperty(j) && P != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = P;
              default:
                l.hasOwnProperty(j) || Xe(e, t, j, null, l, P);
            }
        }
        for (var _ in l) {
          var j = l[_];
          if (P = n[_], l.hasOwnProperty(_) && (j != null || P != null))
            switch (_) {
              case "type":
                j !== P && (He = !0), s = j;
                break;
              case "name":
                j !== P && (He = !0), u = j;
                break;
              case "checked":
                j !== P && (He = !0), B = j;
                break;
              case "defaultChecked":
                j !== P && (He = !0), V = j;
                break;
              case "value":
                j !== P && (He = !0), m = j;
                break;
              case "defaultValue":
                j !== P && (He = !0), b = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, t));
                break;
              default:
                j !== P && Xe(
                  e,
                  t,
                  _,
                  j,
                  l,
                  P
                );
            }
        }
        Ps(
          e,
          m,
          b,
          R,
          B,
          V,
          s,
          u
        );
        return;
      case "select":
        j = m = b = _ = null;
        for (s in n)
          if (R = n[s], n.hasOwnProperty(s) && R != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                j = R;
              default:
                l.hasOwnProperty(s) || Xe(
                  e,
                  t,
                  s,
                  null,
                  l,
                  R
                );
            }
        for (u in l)
          if (s = l[u], R = n[u], l.hasOwnProperty(u) && (s != null || R != null))
            switch (u) {
              case "value":
                s !== R && (He = !0), _ = s;
                break;
              case "defaultValue":
                s !== R && (He = !0), b = s;
                break;
              case "multiple":
                s !== R && (He = !0), m = s;
              default:
                s !== R && Xe(
                  e,
                  t,
                  u,
                  s,
                  l,
                  R
                );
            }
        t = b, n = m, l = j, _ != null ? Jl(e, !!n, _, !1) : !!l != !!n && (t != null ? Jl(e, !!n, t, !0) : Jl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        j = _ = null;
        for (b in n)
          if (u = n[b], n.hasOwnProperty(b) && u != null && !l.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, b, null, l, u);
            }
        for (m in l)
          if (u = l[m], s = n[m], l.hasOwnProperty(m) && (u != null || s != null))
            switch (m) {
              case "value":
                u !== s && (He = !0), _ = u;
                break;
              case "defaultValue":
                u !== s && (He = !0), j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== s && Xe(e, t, m, u, l, s);
            }
        fp(e, _, j);
        return;
      case "option":
        for (var oe in n)
          if (_ = n[oe], n.hasOwnProperty(oe) && _ != null && !l.hasOwnProperty(oe))
            switch (oe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Xe(
                  e,
                  t,
                  oe,
                  null,
                  l,
                  _
                );
            }
        for (R in l)
          if (_ = l[R], j = n[R], l.hasOwnProperty(R) && _ !== j && (_ != null || j != null))
            switch (R) {
              case "selected":
                _ !== j && (He = !0), e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Xe(
                  e,
                  t,
                  R,
                  _,
                  l,
                  j
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var de in n)
          _ = n[de], n.hasOwnProperty(de) && _ != null && !l.hasOwnProperty(de) && Xe(e, t, de, null, l, _);
        for (B in l)
          if (_ = l[B], j = n[B], l.hasOwnProperty(B) && _ !== j && (_ != null || j != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(o(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  B,
                  _,
                  l,
                  j
                );
            }
        return;
      default:
        if (Fs(t)) {
          for (var Re in n)
            _ = n[Re], n.hasOwnProperty(Re) && _ !== void 0 && !l.hasOwnProperty(Re) && Jf(
              e,
              t,
              Re,
              void 0,
              l,
              _
            );
          for (V in l)
            _ = l[V], j = n[V], !l.hasOwnProperty(V) || _ === j || _ === void 0 && j === void 0 || Jf(
              e,
              t,
              V,
              _,
              l,
              j
            );
          return;
        }
    }
    for (var D in n)
      _ = n[D], n.hasOwnProperty(D) && _ != null && !l.hasOwnProperty(D) && Xe(e, t, D, null, l, _);
    for (P in l)
      _ = l[P], j = n[P], !l.hasOwnProperty(P) || _ === j || _ == null && j == null || Xe(e, t, P, _, l, j);
  }
  function Sy(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pC() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var u = n[l], s = u.transferSize, m = u.initiatorType, b = u.duration;
        if (s && b && Sy(m)) {
          for (m = 0, b = u.responseEnd, l += 1; l < n.length; l++) {
            var R = n[l], B = R.startTime;
            if (B > b) break;
            var V = R.transferSize, P = R.initiatorType;
            V && Sy(P) && (R = R.responseEnd, m += V * (R < b ? 1 : (b - B) / (R - B)));
          }
          if (--l, t += 8 * (s + m) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ff = null, Wf = null;
  function ki(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Cy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ey(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function xy(e, t, n, l) {
    return n = ki(
      n
    ).createElement(e), n[Mt] = l, n[Kt] = t, Ut(n, e, t), Rt(n), n;
  }
  function ed(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var td = null;
  function hC() {
    var e = window.event;
    return e && e.type === "popstate" ? e === td ? !1 : (td = e, !0) : (td = null, !1);
  }
  var nd = typeof setTimeout == "function" ? setTimeout : void 0, gC = typeof clearTimeout == "function" ? clearTimeout : void 0, Ty = typeof Promise == "function" ? Promise : void 0, Ry = typeof requestAnimationFrame == "function" ? requestAnimationFrame : nd, yC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ty < "u" ? function(e) {
    return Ty.resolve(null).then(e).catch(vC);
  } : nd;
  function vC(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function tl(e) {
    return e === "head";
  }
  function Oy(e, t) {
    var n = t, l = 0;
    do {
      var u = n.nextSibling;
      if (e.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(u), Ur(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          cd(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, cd(n);
          for (var s = n.firstChild; s; ) {
            var m = s.nextSibling, b = s.nodeName;
            s[li] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = m;
          }
        } else
          n === "body" && cd(e.ownerDocument.body);
      n = u;
    } while (n);
    Ur(t);
  }
  function wy(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Ay(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var l = 1;
      else
        for (var u = l = 0; u < t.length; u++) {
          var s = t[u];
          0 < s.width && 0 < s.height && l++;
        }
      l === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function zy(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function bC(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function ad(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return bC(t, n, e);
  }
  function SC(e) {
    return e.documentElement.clientHeight;
  }
  function CC(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function EC(e, t, n, l, u, s, m, b, R) {
    var B = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var V = B.startViewTransition({
        update: function() {
          var _ = B.defaultView, j = _.navigation && _.navigation.transition, oe = B.fonts.status;
          l();
          var de = [];
          if (oe === "loaded" && (SC(B), B.fonts.status === "loading" && de.push(B.fonts.ready)), oe = de.length, e !== null)
            for (var Re = e.suspenseyImages, D = 0, z = 0; z < Re.length; z++) {
              var L = Re[z];
              if (!L.complete) {
                var I = L.getBoundingClientRect();
                if (0 < I.bottom && 0 < I.right && I.top < _.innerHeight && I.left < _.innerWidth) {
                  if (D += Py(L), D > qu) {
                    de.length = oe;
                    break;
                  }
                  L = new Promise(
                    CC.bind(L)
                  ), de.push(L);
                }
              }
            }
          if (0 < de.length)
            return _ = Promise.race([
              Promise.all(de),
              new Promise(function(fe) {
                return setTimeout(fe, 500);
              })
            ]).then(u, u), (j ? Promise.allSettled([j.finished, _]) : _).then(s, s);
          if (u(), j)
            return j.finished.then(
              s,
              s
            );
          s();
        },
        types: n
      });
      B.__reactViewTransition = V;
      var P = [];
      return V.ready.then(
        function() {
          for (var _ = B.documentElement.getAnimations({
            subtree: !0
          }), j = 0; j < _.length; j++) {
            var oe = _[j], de = oe.effect, Re = de.pseudoElement;
            if (Re != null && Re.startsWith("::view-transition")) {
              P.push(oe), oe = de.getKeyframes();
              for (var D = Re = void 0, z = !0, L = 0; L < oe.length; L++) {
                var I = oe[L], fe = I.width;
                if (Re === void 0) Re = fe;
                else if (Re !== fe) {
                  z = !1;
                  break;
                }
                if (fe = I.height, D === void 0) D = fe;
                else if (D !== fe) {
                  z = !1;
                  break;
                }
                delete I.width, delete I.height, I.transform === "none" && delete I.transform;
              }
              z && Re !== void 0 && D !== void 0 && (de.setKeyframes(oe), z = getComputedStyle(
                de.target,
                de.pseudoElement
              ), z.width !== Re || z.height !== D) && (z = oe[0], z.width = Re, z.height = D, z = oe[oe.length - 1], z.width = Re, z.height = D, de.setKeyframes(oe));
            }
          }
          m();
        },
        function(_) {
          B.__reactViewTransition === V && (B.__reactViewTransition = null);
          try {
            if (typeof _ == "object" && _ !== null)
              switch (_.name) {
                case "InvalidStateError":
                  (_.message === "View transition was skipped because document visibility state is hidden." || _.message === "Skipping view transition because document visibility state has become hidden." || _.message === "Skipping view transition because viewport size changed." || _.message === "Transition was aborted because of invalid state") && (_ = null);
              }
            _ !== null && R(_);
          } finally {
            l(), u(), m();
          }
        }
      ), V.finished.finally(function() {
        for (var _ = 0; _ < P.length; _++)
          P[_].cancel();
        B.__reactViewTransition === V && (B.__reactViewTransition = null), b();
      }), V;
    } catch {
      return l(), u(), m(), null;
    }
  }
  function Ll(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  Ll.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : G({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, Ll.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < n.length; u++) {
      var s = n[u].effect;
      s !== null && s.target === e && s.pseudoElement === t && l.push(n[u]);
    }
    return l;
  }, Ll.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function My(e) {
    return {
      name: e,
      group: new Ll("group", e),
      imagePair: new Ll("image-pair", e),
      old: new Ll("old", e),
      new: new Ll("new", e)
    };
  }
  function dn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  dn.prototype.addEventListener = function(e, t, n) {
    var l = null, u = null;
    if (!(n != null && typeof n != "boolean" && (l = n.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (_y(s, e, t, n) === -1) {
        var m = this, b = t;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(R) {
          m.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, R) : t.handleEvent(R);
        }), l !== null && (u = m.removeEventListener.bind(
          m,
          e,
          t,
          n
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = zr(n), s.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: b,
          cleanup: u
        }), g(
          this._fragmentFiber.child,
          !1,
          xC,
          e,
          b,
          l
        );
      }
      this._eventListeners = s;
    }
  };
  function xC(e, t, n, l) {
    return w(e).addEventListener(
      t,
      n,
      l
    ), !1;
  }
  dn.prototype.removeEventListener = function(e, t, n) {
    var l = this._eventListeners;
    if (l !== null && (t = _y(
      l,
      e,
      t,
      n
    ), t !== -1)) {
      var u = l[t];
      n = u.attachedListener;
      var s = u.cleanup;
      u = zr(u.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        TC,
        e,
        n,
        u
      ), l.splice(t, 1), s !== null && s();
    }
  };
  function TC(e, t, n, l) {
    return w(e).removeEventListener(
      t,
      n,
      l
    ), !1;
  }
  function zr(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Ny(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function _y(e, t, n, l) {
    if (e.length === 0) return -1;
    l = Ny(l);
    for (var u = 0; u < e.length; u++) {
      var s = e[u];
      if (s.type === t && s.listener === n && Ny(s.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  dn.prototype.dispatchEvent = function(e) {
    var t = E(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = w(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var l = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          l.addEventListener(
            s.type,
            s.attachedListener,
            zr(s.optionsOrUseCapture)
          );
        }
      if (t.appendChild(l), e = l.dispatchEvent(e), n)
        for (u = 0; u < n.length; u++)
          s = n[u], l.removeEventListener(
            s.type,
            s.attachedListener,
            zr(s.optionsOrUseCapture)
          );
      return t.removeChild(l), e;
    }
    return t.dispatchEvent(e);
  }, dn.prototype.focus = function(e) {
    g(
      this._fragmentFiber.child,
      !0,
      Dy,
      e,
      void 0,
      void 0
    );
  };
  function Dy(e, t) {
    return e.tag === 6 ? !1 : (e = w(e), HC(e, t));
  }
  dn.prototype.focusLast = function(e) {
    var t = [];
    g(
      this._fragmentFiber.child,
      !0,
      ld,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Dy(t[n], e); n--) ;
  };
  function ld(e, t) {
    return t.push(e), !1;
  }
  dn.prototype.blur = function() {
    var e = E(
      this._fragmentFiber
    );
    e !== null && (e = w(e), e = ki(e).activeElement, e !== null && g(
      this._fragmentFiber.child,
      !1,
      RC,
      e,
      void 0,
      void 0
    ));
  };
  function RC(e, t) {
    return e.tag === 6 ? !1 : (e = w(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  dn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), g(
      this._fragmentFiber.child,
      !1,
      OC,
      e,
      void 0,
      void 0
    );
  };
  function OC(e, t) {
    return e.tag === 6 || (e = w(e), t.observe(e)), !1;
  }
  dn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), g(
        this._fragmentFiber.child,
        !1,
        wC,
        e,
        void 0,
        void 0
      );
      for (var n = t = 0; n < Ln.length; n++) {
        var l = Ln[n];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : Ln[t++] = l;
      }
      Ln.length = t;
    }
  };
  function wC(e, t) {
    return e.tag === 6 || (e = w(e), t.unobserve(e)), !1;
  }
  var Ln = [], rd = !1;
  function AC(e, t, n) {
    Ln.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), rd || (rd = !0, LC(function() {
      rd = !1;
      var l = Ln;
      Ln = [];
      for (var u = 0; u < l.length; u++) {
        var s = l[u];
        s.observer.unobserve(s.instance);
      }
    }));
  }
  dn.prototype.getClientRects = function() {
    var e = [];
    return g(
      this._fragmentFiber.child,
      !1,
      zC,
      e,
      void 0,
      void 0
    ), e;
  };
  function zC(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = w(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  dn.prototype.getRootNode = function(e) {
    var t = E(
      this._fragmentFiber
    );
    return t === null ? this : w(t).getRootNode(e);
  }, dn.prototype.compareDocumentPosition = function(e) {
    var t = E(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    g(
      this._fragmentFiber.child,
      !1,
      ld,
      n,
      void 0,
      void 0
    );
    var l = w(t);
    if (n.length === 0) {
      if (n = l, O(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (n = t);
      }
      t = this._fragmentFiber;
      var u = l = n.compareDocumentPosition(e);
      return n === e ? u = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = T(t)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (e = w(n).compareDocumentPosition(
        e
      ), u = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = w(n[0]), u = w(n[n.length - 1]);
    var s = O(this._fragmentFiber) ? t.parentElement : l;
    if (s == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = s.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, s = s.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var m = t.compareDocumentPosition(e), b = u.compareDocumentPosition(e), R = m & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = l && s && m & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, t = l && t === e || s && u === e || R || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && t === e || !s && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : m, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || MC(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function MC(e, t, n, l, u) {
    var s = gl(u);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!s)
        e: {
          for (; s !== null; ) {
            if (s.tag === 7 && (s === t || s.alternate === t)) {
              n = !0;
              break e;
            }
            s = s.return;
          }
          n = !1;
        }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return s = u.ownerDocument, u === s || u === s.documentElement || u === s.body;
      e: {
        for (s = t, t = E(t); s !== null; ) {
          if (!(s.tag !== 5 && s.tag !== 3 && s.tag !== 27 || s !== t && s.alternate !== t)) {
            s = !0;
            break e;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!s) && !(t = s === n) && (t = Q(
      n,
      s,
      N
    ), t === null ? t = !1 : (g(
      t,
      !0,
      U,
      s,
      n
    ), s = M, M = null, t = s !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!s) && !(t = s === l) && (t = Q(
      l,
      s,
      N
    ), t === null ? t = !1 : (g(
      t,
      !0,
      H,
      s,
      l
    ), s = M, q = M = null, t = s !== null)), t) : !1;
  }
  function By(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  dn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(o(566));
    var t = [];
    g(
      this._fragmentFiber.child,
      !1,
      ld,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var l = T(
        this._fragmentFiber
      );
      if (l = n ? l[1] || l[0] || E(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = w(l), By(e, n);
        return;
      }
      if (l = w(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          n = "host" in l ? l.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = n ? t.length - 1 : 0; l !== (n ? -1 : t.length); ) {
      var u = t[l];
      u.tag === 6 ? (u = w(u), By(u, n)) : w(u).scrollIntoView(e), l += n ? -1 : 1;
    }
  };
  function NC(e, t) {
    return e = w(e), Uy(e, t), !1;
  }
  function Uy(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Hy(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          zr(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(s) {
      for (var m = 0, b = 0; b < Ln.length; b++) {
        var R = Ln[b];
        (R.fragmentInstance !== t || R.observer !== s || R.instance !== e) && (Ln[m++] = R);
      }
      Ln.length = m, s.observe(e);
    }), Uy(e, t));
  }
  function _C(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          zr(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(s) {
      typeof s.rootMargin == "string" ? AC(
        t,
        s,
        e
      ) : s.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function id(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          id(n), No(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function DC(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[li])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === s)
          return e;
      } else return e;
      if (e = Rn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function BC(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ly(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function od(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ud(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function UC(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Rn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var sd = null;
  function jy(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Rn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function $y(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function HC(e, t) {
    function n() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return l;
  }
  function LC(e) {
    Ry(function() {
      Ry(function(t) {
        return e(t);
      });
    });
  }
  function ky(e, t, n) {
    switch (t = ki(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Yy(e, t, n) {
    for (var l in n) {
      var u = n[l];
      n.hasOwnProperty(l) && u != null && Xe(e, t, l, null, dC, u);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Vn && (e.onclick = null), No(e);
  }
  function cd(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    No(e);
  }
  var On = /* @__PURE__ */ new Map(), Vy = /* @__PURE__ */ new Set();
  function Yi(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Oa = pe.d;
  pe.d = {
    f: jC,
    r: $C,
    D: kC,
    C: YC,
    L: VC,
    m: qC,
    X: XC,
    S: GC,
    M: QC
  };
  function jC() {
    var e = Oa.f(), t = Bu();
    return e || t;
  }
  function $C(e) {
    var t = Zl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Gh(t) : Oa.r(e);
  }
  var Mr = typeof document > "u" ? null : document;
  function qy(e, t, n) {
    var l = Mr;
    if (l && typeof t == "string" && t) {
      var u = vn(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Vy.has(u) || (Vy.add(u), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), Ut(t, "link", e), Rt(t), l.head.appendChild(t)));
    }
  }
  function kC(e) {
    Oa.D(e), qy("dns-prefetch", e, null);
  }
  function YC(e, t) {
    Oa.C(e, t), qy("preconnect", e, t);
  }
  function VC(e, t, n) {
    Oa.L(e, t, n);
    var l = Mr;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + vn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + vn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + vn(
        n.imageSizes
      ) + '"]')) : u += '[href="' + vn(e) + '"]';
      var s = u;
      switch (t) {
        case "style":
          s = Nr(e);
          break;
        case "script":
          s = _r(e);
      }
      if (!(On.has(s) || (e = G(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), On.set(s, e), l.querySelector(u) !== null || t === "style" && l.querySelector(Vi(s)) || t === "script" && l.querySelector(qi(s))))) {
        var m = l.createElement("link");
        Ut(m, "link", e), t === "style" && (m[Mo] = !0, m.onload = m.onerror = function() {
          np(m);
        }), Rt(m), l.head.appendChild(m);
      }
    }
  }
  function qC(e, t) {
    Oa.m(e, t);
    var n = Mr;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + vn(l) + '"][href="' + vn(e) + '"]', s = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = _r(e);
      }
      if (!On.has(s) && (e = G({ rel: "modulepreload", href: e }, t), On.set(s, e), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(qi(s)))
              return;
        }
        l = n.createElement("link"), Ut(l, "link", e), Rt(l), n.head.appendChild(l);
      }
    }
  }
  function GC(e, t, n) {
    Oa.S(e, t, n);
    var l = Mr;
    if (l && e) {
      var u = Il(l).hoistableStyles, s = Nr(e);
      t = t || "default";
      var m = u.get(s);
      if (!m) {
        var b = { loading: 0, preload: null };
        if (m = l.querySelector(
          Vi(s)
        ))
          b.loading = 5;
        else {
          e = G(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = On.get(s)) && fd(e, n);
          var R = m = l.createElement("link");
          Rt(R), Ut(R, "link", e), R._p = new Promise(function(B, V) {
            R.onload = B, R.onerror = V;
          }), R.addEventListener("load", function() {
            b.loading |= 1;
          }), R.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Yu(m, t, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: b
        }, u.set(s, m);
      }
    }
  }
  function XC(e, t) {
    Oa.X(e, t);
    var n = Mr;
    if (n && e) {
      var l = Il(n).hoistableScripts, u = _r(e), s = l.get(u);
      s || (s = n.querySelector(qi(u)), s || (e = G({ src: e, async: !0 }, t), (t = On.get(u)) && dd(e, t), s = n.createElement("script"), Rt(s), Ut(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(u, s));
    }
  }
  function QC(e, t) {
    Oa.M(e, t);
    var n = Mr;
    if (n && e) {
      var l = Il(n).hoistableScripts, u = _r(e), s = l.get(u);
      s || (s = n.querySelector(qi(u)), s || (e = G({ src: e, async: !0, type: "module" }, t), (t = On.get(u)) && dd(e, t), s = n.createElement("script"), Rt(s), Ut(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(u, s));
    }
  }
  function Gy(e, t, n, l) {
    var u = (u = gn.current) ? Yi(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Nr(n.href), t = Il(
          u
        ).hoistableStyles, l = t.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Nr(n.href);
          var s = Il(
            u
          ).hoistableStyles, m = s.get(e);
          if (m || (u = u.ownerDocument || u, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, m), (s = u.querySelector(
            Vi(e)
          )) ? s._p || (m.instance = s, m.state.loading = 5) : (s = On.get(e), s || (s = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, On.set(e, s)), KC(
            u,
            e,
            s,
            m.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return m;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = _r(n), t = Il(
          u
        ).hoistableScripts, l = t.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Nr(e) {
    return 'href="' + vn(e) + '"';
  }
  function Vi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xy(e) {
    return G({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function KC(e, t, n, l) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Mo] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[Mo] = !0, t.onload = t.onerror = np.bind(null, t), Ut(t, "link", n), Rt(t), e.head.appendChild(t);
    l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function _r(e) {
    return '[src="' + vn(e) + '"]';
  }
  function qi(e) {
    return "script[async]" + e;
  }
  function Qy(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + vn(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Rt(l), l;
          var u = G({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Rt(l), Ut(l, "style", u), Yu(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          u = Nr(n.href);
          var s = e.querySelector(
            Vi(u)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, Rt(s), s;
          l = Xy(n), (u = On.get(u)) && fd(l, u), s = (e.ownerDocument || e).createElement("link"), Rt(s);
          var m = s;
          return m._p = new Promise(function(b, R) {
            m.onload = b, m.onerror = R;
          }), Ut(s, "link", l), t.state.loading |= 4, Yu(s, n.precedence, e), t.instance = s;
        case "script":
          return s = _r(n.src), (u = e.querySelector(
            qi(s)
          )) ? (t.instance = u, Rt(u), u) : (l = n, (u = On.get(s)) && (l = G({}, n), dd(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Rt(u), Ut(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Yu(l, n.precedence, e));
    return t.instance;
  }
  function Yu(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, s = u, m = 0; m < l.length; m++) {
      var b = l[m];
      if (b.dataset.precedence === t) s = b;
      else if (s !== u) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function fd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function dd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Vu = null;
  function Ky(e, t, n) {
    if (Vu === null) {
      var l = /* @__PURE__ */ new Map(), u = Vu = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Vu, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), u = 0; u < n.length; u++) {
      var s = n[u];
      if (!(s[li] || s[Mt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(t) || "";
        m = e + m;
        var b = l.get(m);
        b ? b.push(s) : l.set(m, [s]);
      }
    }
    return l;
  }
  function md(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function ZC(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Zy(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Iy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Py(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Jy(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Py(t), e.suspenseyImages.push(t)), e = JC.bind(e), t.decode().then(e, e));
  }
  function IC(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = Nr(l.href), s = t.querySelector(
          Vi(u)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Gi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, Rt(s);
          return;
        }
        s = t.ownerDocument || t, l = Xy(l), (u = On.get(u)) && fd(l, u), s = s.createElement("link"), Rt(s);
        var m = s;
        m._p = new Promise(function(b, R) {
          m.onload = b, m.onerror = R;
        }), Ut(s, "link", l), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Gi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var qu = 0;
  function PC(e, t) {
    return e.stylesheets && e.count === 0 && Xu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && qu === 0 && (qu = 62500 * pC());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > qu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Fy(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Xu(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Gi() {
    this.count--, Fy(this);
  }
  function JC() {
    this.imgCount--, Fy(this);
  }
  var Gu = null;
  function Xu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Gu = /* @__PURE__ */ new Map(), t.forEach(FC, e), Gu = null, Gi.call(e));
  }
  function FC(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Gu.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Gu.set(e, n);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < u.length; s++) {
          var m = u[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), l = m);
        }
        l && n.set(null, l);
      }
      u = t.instance, m = u.getAttribute("data-precedence"), s = n.get(m) || l, s === l && n.set(null, u), n.set(m, u), this.count++, l = Gi.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), s ? s.parentNode.insertBefore(u, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Dr = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: Xt,
    _currentValue2: Xt,
    _threadCount: 0
  };
  function WC(e, t, n, l, u, s, m, b, R) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qs(0), this.hiddenUpdates = Qs(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wy(e, t, n, l, u, s, m, b, R, B, V, P) {
    return e = new WC(
      e,
      t,
      n,
      m,
      R,
      B,
      V,
      P,
      b
    ), t = 1, s === !0 && (t |= 24), s = Zt(3, null, null, t), e.current = s, s.stateNode = e, t = wc(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Nc(s), e;
  }
  function e0(e) {
    return e ? (e = rr, e) : rr;
  }
  function t0(e, t, n, l, u, s) {
    u = e0(u), l.context === null ? l.context = u : l.pendingContext = u, l = qa(t), l.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (l.callback = s), n = Ga(e, l, t), n !== null && (Ft(n, e, t), Ci(n, e, t));
  }
  function n0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function pd(e, t) {
    n0(e, t), (e = e.alternate) && n0(e, t);
  }
  function a0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Sl(e, 67108864);
      t !== null && Ft(t, e, 67108864), pd(e, 67108864);
    }
  }
  function l0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = fn();
      t = Ks(t);
      var n = Sl(e, t);
      n !== null && Ft(n, e, t), pd(e, t);
    }
  }
  var Br = !0;
  function eE(e, t, n, l) {
    var u = se.T;
    se.T = null;
    var s = pe.p;
    try {
      pe.p = 2, hd(e, t, n, l);
    } finally {
      pe.p = s, se.T = u;
    }
  }
  function tE(e, t, n, l) {
    var u = se.T;
    se.T = null;
    var s = pe.p;
    try {
      pe.p = 8, hd(e, t, n, l);
    } finally {
      pe.p = s, se.T = u;
    }
  }
  function hd(e, t, n, l) {
    if (Br) {
      var u = gd(l);
      if (u === null)
        Pf(
          e,
          t,
          l,
          Qu,
          n
        ), i0(e, l);
      else if (aE(
        u,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (i0(e, l), t & 4 && -1 < nE.indexOf(e)) {
        for (; u !== null; ) {
          var s = Zl(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = hl(s.pendingLanes);
                  if (m !== 0) {
                    var b = s;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; m; ) {
                      var R = 1 << 31 - an(m);
                      b.entanglements[1] |= R, m &= ~R;
                    }
                    Fn(s), (je & 6) === 0 && (Nu = tn() + 500, Li(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Sl(s, 2), b !== null && Ft(b, s, 2), Bu(), pd(s, 2);
            }
          if (s = gd(l), s === null && Pf(
            e,
            t,
            l,
            Qu,
            n
          ), s === u) break;
          u = s;
        }
        u !== null && l.stopPropagation();
      } else
        Pf(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function gd(e) {
    return e = ec(e), yd(e);
  }
  var Qu = null;
  function yd(e) {
    if (Qu = null, e = gl(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Qu = e, null;
  }
  function r0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (p1()) {
          case Gm:
            return 2;
          case Xm:
            return 8;
          case Ro:
          case h1:
            return 32;
          case Qm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vd = !1, nl = null, al = null, ll = null, Xi = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), rl = [], nE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function i0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        nl = null;
        break;
      case "dragenter":
      case "dragleave":
        al = null;
        break;
      case "mouseover":
      case "mouseout":
        ll = null;
        break;
      case "pointerover":
      case "pointerout":
        Xi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qi.delete(t.pointerId);
    }
  }
  function Ki(e, t, n, l, u, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [u]
    }, t !== null && (t = Zl(t), t !== null && a0(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function aE(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return nl = Ki(
          nl,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return al = Ki(
          al,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return ll = Ki(
          ll,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var s = u.pointerId;
        return Xi.set(
          s,
          Ki(
            Xi.get(s) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return s = u.pointerId, Qi.set(
          s,
          Ki(
            Qi.get(s) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function o0(e) {
    var t = gl(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, Wm(e.priority, function() {
              l0(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Wm(e.priority, function() {
              l0(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ku(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = gd(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Ws = l, n.target.dispatchEvent(l), Ws = null;
      } else
        return t = Zl(n), t !== null && a0(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function u0(e, t, n) {
    Ku(e) && n.delete(t);
  }
  function lE() {
    vd = !1, nl !== null && Ku(nl) && (nl = null), al !== null && Ku(al) && (al = null), ll !== null && Ku(ll) && (ll = null), Xi.forEach(u0), Qi.forEach(u0);
  }
  function Zu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, vd || (vd = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      lE
    )));
  }
  var Iu = null;
  function s0(e) {
    Iu !== e && (Iu = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Iu === e && (Iu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (yd(l || n) === null)
              continue;
            break;
          }
          var s = Zl(n);
          s !== null && (e.splice(t, 3), t -= 3, Fc(
            s,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function Ur(e) {
    function t(R) {
      return Zu(R, e);
    }
    nl !== null && Zu(nl, e), al !== null && Zu(al, e), ll !== null && Zu(ll, e), Xi.forEach(t), Qi.forEach(t);
    for (var n = 0; n < rl.length; n++) {
      var l = rl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < rl.length && (n = rl[0], n.blockedOn === null); )
      o0(n), n.blockedOn === null && rl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], s = n[l + 1], m = u[Kt] || null;
        if (typeof s == "function")
          m || s0(n);
        else if (m) {
          var b = null;
          if (s && s.hasAttribute("formAction")) {
            if (u = s, m = s[Kt] || null)
              b = m.formAction;
            else if (yd(u) !== null) continue;
          } else b = m.action;
          typeof b == "function" ? n[l + 1] = b : (n.splice(l, 3), l -= 3), s0(n);
        }
      }
  }
  function c0() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return u = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function bd(e) {
    this._internalRoot = e;
  }
  Pu.prototype.render = bd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = fn();
    t0(n, l, e, t, null, null);
  }, Pu.prototype.unmount = bd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      t0(e.current, 2, null, e, null, null), Bu(), t[Kl] = null;
    }
  };
  function Pu(e) {
    this._internalRoot = e;
  }
  Pu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < rl.length && t !== 0 && t < rl[n].priority; n++) ;
      rl.splice(n, 0, e), n === 0 && o0(e);
    }
  };
  var f0 = r.version;
  if (f0 !== "19.3.1")
    throw Error(
      o(
        527,
        f0,
        "19.3.1"
      )
    );
  pe.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = y(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var rE = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: se,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        ti = Ju.inject(
          rE
        ), nn = Ju;
      } catch {
      }
  }
  return Wi.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var n = !1, l = "", u = eg, s = tg, m = ng;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = Wy(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      u,
      s,
      m,
      c0
    ), e[Kl] = t.current, If(e), new bd(t);
  }, Wi.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(o(299));
    var l = !1, u = "", s = eg, m = tg, b = ng, R = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (R = n.formState)), t = Wy(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      u,
      R,
      s,
      m,
      b,
      c0
    ), t.context = e0(null), n = t.current, l = fn(), l = Ks(l), u = qa(l), u.callback = null, Ga(n, u, l), n = l, t.current.lanes = n, ai(t, n), Fn(t), e[Kl] = t.current, If(e), new Pu(t);
  }, Wi.version = "19.3.1", Wi;
}
var Uv;
function vw() {
  if (Uv) return kd.exports;
  Uv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), kd.exports = yw(), kd.exports;
}
var bw = vw();
const Sw = /* @__PURE__ */ om(bw);
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var o in i) ({}).hasOwnProperty.call(i, o) && (a[o] = i[o]);
    }
    return a;
  }, Es.apply(null, arguments);
}
const qd = {
  light: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#EEEEEE"
        }
      }
    }
  },
  dark: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    }
  },
  lightsOut: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    }
  }
}, Cw = {
  default: {
    palette: {
      mode: "light"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  light: {
    components: {
      ...qd.light
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      secondary: {
        main: "#40f0bb"
      },
      mode: "light",
      background: {
        default: "#F5F5F5",
        cardContainer: "#fafafa"
      },
      customShadow: "0px 6px 9px 0px #00000014"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  dark: {
    components: {
      ...qd.dark
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#303030",
        paper: "#424242",
        cardContainer: "#424242"
      },
      customShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  lightsOut: {
    components: {
      ...qd.lightsOut
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#000",
        paper: "#000",
        cardContainer: "#000"
      }
    },
    shadows: Array(25).fill("0px 4px 12px #888888"),
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  }
}, Hv = (a) => ({
  MuiCard: {
    styleOverrides: {
      root: ({
        theme: r
      }) => {
        var i, o;
        return {
          backgroundColor: r.palette.mode === "dark" ? ((o = (i = a.palette) == null ? void 0 : i.background) == null ? void 0 : o.cardContainer) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({
        theme: r
      }) => {
        var i, o;
        return {
          backgroundColor: r.palette.mode === "dark" ? ((o = (i = a.palette) == null ? void 0 : i.background) == null ? void 0 : o.paper) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  }
});
class Ew extends C.Component {
  constructor(i) {
    super(i);
    Hr(this, "handleReload", () => {
      const {
        reloadPath: i
      } = this.props;
      i && f1(i) ? window.location.href = i : window.location.reload();
    });
    this.state = {
      themeName: i.themeName || "light",
      hasAppError: !1
    }, this.themeSource = i.theme || Cw;
    const o = this.themeSource[this.state.themeName];
    this.theme = co({
      ...I0(o),
      components: {
        ...Hv(o)
      }
    });
  }
  /*
   * ERROR BOUNDARY CAPABILITIES:
   *   CATCHES:
   *   - Render crashes (e.g., null references during render)
   *   - Missing JS Chunks (ChunkLoadError mid-session)
   *   - Synchronous errors in lifecycle methods/useEffect
   */
  static getDerivedStateFromError(i) {
    return {
      hasAppError: !0
    };
  }
  componentDidCatch(i, o) {
    console.error("HDTheme Error Boundary caught an error:", i, o);
  }
  componentDidUpdate(i) {
    if (this.props.themeName !== i.themeName) {
      const o = this.themeSource[this.props.themeName];
      this.theme = co({
        ...I0(o),
        components: {
          ...Hv(o)
        }
      }), this.setState({
        themeName: this.props.themeName
      });
    }
  }
  render() {
    return this.state.hasAppError ? /* @__PURE__ */ he.createElement("div", {
      style: {
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#111827",
        margin: "20px auto",
        maxWidth: "600px"
      }
    }, /* @__PURE__ */ he.createElement("h3", {
      style: {
        marginBottom: "10px",
        fontSize: "1.5rem",
        fontWeight: "500"
      }
    }, "Something went wrong"), /* @__PURE__ */ he.createElement("p", {
      style: {
        marginBottom: "24px",
        color: "#4b5563",
        fontSize: "1rem"
      }
    }, "The application may have been updated in the background."), /* @__PURE__ */ he.createElement("button", {
      onClick: this.handleReload,
      style: {
        padding: "10px 24px",
        cursor: "pointer",
        background: "transparent",
        color: "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500"
      }
    }, "Reload Application")) : /* @__PURE__ */ he.createElement(dx, {
      injectFirst: !0
    }, /* @__PURE__ */ he.createElement(Z2, {
      theme: this.theme
    }, this.props.children));
  }
}
function f1(a) {
  return !(!a || typeof a != "string" || !a.startsWith("/") || a.startsWith("//") || /^[a-zA-Z][a-zA-Z0-9+\-.]*:/i.test(a));
}
function xw(a) {
  if (a && typeof a == "object" && "componentPath" in a) {
    const {
      componentPath: r,
      ...i
    } = a;
    return Object.keys(i).length > 0 ? i : {};
  }
  return a;
}
function Tw(a) {
  return {
    setWebsearchHeader: (r) => window.parent.postMessage({
      type: "setWebsearchHeader",
      header: r
    }, "*"),
    secondaryMenu: (r) => a(r),
    searchQuery: (r) => window.parent.postMessage({
      type: "searchQuery",
      query: r
    }, "*"),
    switchFullScreen: (r = !0, i = !1) => window.parent.postMessage({
      type: "switchFullScreen",
      fullScreen: r,
      navigatedViaRoute: i
    }, "*"),
    componentLoaded: () => window.parent.postMessage({
      type: "componentLoaded"
    }, "*"),
    loadAiGeneratedResponse: (r) => new Promise((i, o) => {
      const c = Date.now();
      function f(d) {
        var p, h;
        ((p = d.data) == null ? void 0 : p.type) === "loadAiGeneratedResponseResult" && ((h = d.data) == null ? void 0 : h.requestId) === c && (window.removeEventListener("message", f), d.data.error ? o(new Error(d.data.error)) : i(d.data.response));
      }
      window.addEventListener("message", f), window.parent.postMessage({
        type: "loadAiGeneratedResponse",
        payload: r,
        requestId: c
      }, "*");
    }),
    unload: (r = "") => window.parent.postMessage({
      type: "unload",
      message: r
    }, "*")
  };
}
const Rw = {
  outerContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    width: "100%"
  }
};
function Ow(a) {
  C.useEffect(() => {
    if (!a) return;
    const r = (i) => {
      (i.key === "/" || i.code === "Slash") && window.parent.postMessage({
        type: "searchShortcutPressed",
        event: {
          key: i.key,
          code: i.code
        }
      }, "*");
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [a]);
}
const ww = Be(F5)(({
  theme: a
}) => ({
  zIndex: "5",
  position: "fixed",
  bottom: 58,
  right: 10,
  opacity: 0.8,
  width: "48px",
  height: "48px",
  [a.breakpoints.up("lg")]: {
    bottom: 58,
    right: "calc(100% - 1140px)"
  }
})), Lv = Be("div")(({
  theme: a
}) => ({
  display: "flex",
  justifyContent: "space-evenly",
  cursor: "pointer",
  position: "sticky",
  bottom: 0,
  backgroundColor: a.palette.background.default,
  zIndex: 1e3
})), Aw = (a) => {
  var U;
  const {
    isMdUp: r
  } = a, [i, o] = C.useState(r), [c, f] = C.useState(!1);
  C.useEffect(() => {
    o(r);
  }, [r]);
  const {
    menu: d,
    componentFullWidth: p,
    fullHeight: h,
    applyBtnMdUp: y,
    applyBtnMdUpOnClick: v,
    applyBtnSmDown: g,
    applyBtnSmDownOnClick: E,
    filters: O,
    noOfFilters: T,
    preventAutoClose: x
  } = a.secondaryMenu, w = () => {
    o(!i), f(!c);
  }, M = (H) => {
    w(), H();
  }, q = () => {
    w();
  };
  return C.useEffect(() => {
    var H;
    if ((H = a.secondaryMenu) != null && H.menu && document.getElementById("secondaryMenu")) {
      const Q = document.getElementById("secondaryMenu").clientHeight > window.innerHeight;
      a.setHeightOverflow(Q);
    }
  }, [(U = a.secondaryMenu) == null ? void 0 : U.menu]), /* @__PURE__ */ he.createElement(he.Fragment, null, !i && /* @__PURE__ */ he.createElement(ww, {
    onClick: w,
    color: "primary",
    className: p ? "fabButtonClose" : "fabButton"
  }, O ? T ? /* @__PURE__ */ he.createElement(u5, {
    badgeContent: T,
    color: "primary"
  }, /* @__PURE__ */ he.createElement(Nv, null)) : /* @__PURE__ */ he.createElement(Nv, null) : /* @__PURE__ */ he.createElement(dw, null)), r && i && /* @__PURE__ */ he.createElement(pv, {
    variant: "persistent",
    anchor: "right",
    open: i,
    PaperProps: {
      elevation: 1,
      id: "secondaryMenu",
      sx: {
        boxSizing: "border-box",
        paddingTop: "4px",
        width: i ? "100%" : 0,
        position: "static",
        height: h ? "inherit" : "auto"
      }
    }
  }, d, y && v ? /* @__PURE__ */ he.createElement(Lv, null, /* @__PURE__ */ he.createElement(as, {
    variant: "outlined",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: q
  }, "Close"), /* @__PURE__ */ he.createElement(as, {
    variant: "contained",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: () => M(v)
  }, "Apply")) : /* @__PURE__ */ he.createElement(za, {
    sx: {
      display: "flex",
      padding: "16px",
      cursor: "pointer"
    },
    onClick: w
  }, /* @__PURE__ */ he.createElement(wn, {
    variant: "caption"
  }, "Hide Menu"), /* @__PURE__ */ he.createElement(mw, {
    sx: {
      color: "grey",
      width: 16,
      height: 20
    }
  }))), !r && /* @__PURE__ */ he.createElement(pv, {
    anchor: "right",
    open: c,
    onClose: w,
    PaperProps: {
      sx: {
        width: "80%"
      }
    }
  }, /* @__PURE__ */ he.createElement("div", {
    tabIndex: 0,
    role: "button",
    onClick: g && E || x ? void 0 : w,
    onKeyDown: g && E || x ? void 0 : w
  }, x && /* @__PURE__ */ he.createElement(za, {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "10px"
    }
  }, /* @__PURE__ */ he.createElement(jR, {
    onClick: w,
    edge: "end",
    "aria-label": "close",
    size: "large"
  }, /* @__PURE__ */ he.createElement(pw, null))), d, g && E && /* @__PURE__ */ he.createElement(Lv, null, /* @__PURE__ */ he.createElement(as, {
    variant: "outlined",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: q
  }, "Close"), /* @__PURE__ */ he.createElement(as, {
    variant: "contained",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: () => M(E)
  }, "Apply")))));
};
var zw = /* @__PURE__ */ C.memo(Aw);
const Mw = ({
  secondaryMenuProps: a,
  isMdUp: r
}) => {
  const [i, o] = C.useState(!1), [c, f] = C.useState({
    scrollPos: 0,
    top: 0
  }), d = C.useRef(null), p = {
    innerContainer: {
      position: "sticky",
      top: 0,
      bottom: "auto",
      display: "flex",
      flexDirection: "column"
    }
  };
  return C.useEffect(() => {
    const h = () => {
      var g;
      const y = (g = d == null ? void 0 : d.current) == null ? void 0 : g.offsetHeight, v = window.innerHeight;
      f((E) => {
        const O = E.scrollPos - window.scrollY;
        let T = E.top + O;
        return T > 0 && (T = 0), T < v - y && (T = v - y), {
          top: T,
          scrollPos: window.scrollY
        };
      });
    };
    return window.addEventListener("scroll", h), () => {
      window.removeEventListener("scroll", h);
    };
  }, []), a && a !== "" && a.menu !== "" ? /* @__PURE__ */ he.createElement("div", {
    ref: d,
    style: {
      ...p.innerContainer,
      top: i ? c == null ? void 0 : c.top : 0,
      width: r ? "240px" : 0,
      height: "100%"
    }
  }, /* @__PURE__ */ he.createElement(zw, {
    setHeightOverflow: o,
    secondaryMenu: a,
    isMdUp: r
  })) : null;
};
let Gd = null;
function jv(a, r, i, o, c) {
  const f = document.getElementById("root");
  Gd || (Gd = Sw.createRoot(f));
  const d = location.pathname.indexOf(r) < 0 ? "" : location.pathname.slice(0, location.pathname.indexOf(r));
  Gd.render(/* @__PURE__ */ he.createElement(a, {
    baseURL: r,
    basename: d,
    searchData: i,
    UIOptions: o,
    deployedBackendURL: c
  }));
}
function Nw(a, r, i) {
  window.onmessage = function(f) {
    if (f.data.type === "dataRefresh") {
      const d = f.data.searchData && f.data.searchData[0];
      jv(a, r, d, f.data.UIOptions, i);
    }
  }, jv(a, r, {}, {}, i);
  const o = new ResizeObserver((f) => {
    if (f.length > 0) {
      const d = f[0].target.clientHeight;
      window.parent.postMessage({
        type: "resizeIframe",
        height: d
      }, "*");
    }
  }), c = document.getElementById("root");
  c && o.observe(c);
}
const _w = (a) => {
  var U, H;
  const r = C.useRef(!1), i = a1(), o = sa(), c = So(), f = W5(c.breakpoints.up("md")), [d, p] = C.useState(null), {
    format: h,
    UIOptions: y,
    searchData: v,
    baseURL: g = "",
    basename: E = ""
  } = a, O = h === "fullscreen", T = E + g, {
    componentStyles: x,
    ...w
  } = y || {}, M = C.useMemo(() => Tw(p), []);
  Ow(O), C.useEffect(() => {
    if (a.searchData && a.searchData.componentPath) {
      const N = a.searchData.componentPath, Q = N.startsWith(T) ? N.substring(T.length) : N;
      f1(Q) ? i(Q, {
        replace: !0
      }) : console.warn("[withHD] Blocked unsafe componentPath:", N);
    }
  }, [(U = a == null ? void 0 : a.searchData) == null ? void 0 : U.componentPath]), C.useEffect(() => {
    const N = T + o.pathname + o.search;
    r.current ? N && (!(a.searchData && a.searchData.componentPath) || a.searchData && a.searchData.componentPath && N !== a.searchData.componentPath) && window.parent.postMessage({
      type: "updateComponentPath",
      componentPath: N
    }, "*") : r.current = !0;
  }, [o == null ? void 0 : o.pathname, o == null ? void 0 : o.search]);
  const q = xw(v);
  return /* @__PURE__ */ he.createElement("div", {
    style: Rw.outerContainer
  }, /* @__PURE__ */ he.createElement("div", {
    style: {
      width: f && O && d && d.menu !== "" ? "calc(100% - 400px)" : "100%",
      maxWidth: f && O && d && d.menu !== "" ? "966px" : "1160px",
      margin: f && O && ((H = y == null ? void 0 : y.componentStyles) == null ? void 0 : H.margin) || ""
    }
  }, /* @__PURE__ */ he.createElement(a.comp, Es({}, a, {
    UIOptions: w,
    searchData: q,
    messageHandlers: M
  }))), O && /* @__PURE__ */ he.createElement(Mw, {
    secondaryMenuProps: d,
    isMdUp: f
  }));
}, Dw = (a) => {
  const r = (i) => {
    let {
      quickPanel: o,
      basename: c,
      searchData: f,
      UIOptions: d,
      ...p
    } = i ? {
      ...i
    } : {};
    o = o || !0, c = c || "", p.search = p.search || ((v) => console.log("New query = ", v));
    const h = f && (typeof f == "object" && !Array.isArray(f) || Array.isArray(f) && f.length > 0);
    let y = !0;
    try {
      y = window.self !== window.top;
    } catch {
      y = !0;
    }
    return /* @__PURE__ */ he.createElement(C.Fragment, null, h || d && d.sandbox || !y ? /* @__PURE__ */ he.createElement(nw, {
      basename: c + (i.baseURL || "")
    }, /* @__PURE__ */ he.createElement(Ew, {
      themeName: d && d.themeName,
      theme: d && d.theme,
      reloadPath: `/${c + (i.baseURL || "")}`
    }, /* @__PURE__ */ he.createElement(_O, null, /* @__PURE__ */ he.createElement(o1, {
      path: "*",
      element: /* @__PURE__ */ he.createElement(_w, Es({}, i, {
        comp: a,
        quickPanel: o,
        format: d && d.format,
        searchData: f,
        UIOptions: d,
        basename: c
      }))
    })))) : null, !h && d && d.sandbox ? /* @__PURE__ */ he.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        color: "white"
      }
    }, /* @__PURE__ */ he.createElement("h6", {
      style: {
        margin: "5px"
      }
    }, "No search data received. Component will not be loaded...")) : null);
  };
  return r.initHD = Nw, r;
};
function Bw(a, r) {
  r === void 0 && (r = {});
  var i = r.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", i === "top" && o.firstChild ? o.insertBefore(c, o.firstChild) : o.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
  }
}
var Uw = `/* placeholder animations */
.imgComponentStyles_placeholder__GXJke {
    margin: 0 auto;
    width: 100%;
    height: 18px;
    border-radius: 8px;
    background-color: #eee;
}

@keyframes imgComponentStyles_placeHolderShimmer__5-fnD {
    0% {
        background-position: -468px 0
    }

    100% {
        background-position: 468px 0
    }
}

.imgComponentStyles_animated-background__vGXc6 {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: imgComponentStyles_placeHolderShimmer__5-fnD;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 15%, #b2b2b2 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100%;
    border-radius: 20px;
    position: relative;
}

/* blinking dot */
@keyframes imgComponentStyles_up-right__Y-xzl {
    0% {
        transform: scale(1);
        opacity: .25
    }

    50% {
        transform: scale (1, 5);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: .25;
    }
}

.imgComponentStyles_border__Lvjsc {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    opacity: .25;
}

.imgComponentStyles_dot-animation__T9Onq {
    background-color: white;
    position: relative;
    top: -12px;
    left: 30px;
    -webkit-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -moz-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -o-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
}`;
Bw(Uw);
const Lw = Dw(_3);
export {
  Lw as default
};
