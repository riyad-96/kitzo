import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var toastStyles = ".kitzo-toast-container {\n  --normal-bg: hsl(0, 0%, 100%);\n  --success-bg: hsl(152, 65%, 95%);\n  --error-bg: hsl(0, 65%, 95%);\n  --info-bg: hsl(210, 65%, 95%);\n\n  --normal-text: hsl(0, 0%, 10%);\n  --success-text: hsl(142, 98%, 30%);\n  --error-text: hsl(6, 98%, 40%);\n  --info-text: hsl(210, 100%, 20%);\n\n  --normal-border: hsl(0, 0%, 94%);\n  --success-border: hsl(123, 100%, 93%);\n  --error-border: hsl(0, 100%, 94%);\n  --info-border: hsl(210, 100%, 94%);\n\n  --success-svg-bg: hsl(142, 98%, 40%);\n  --error-svg-bg: hsl(6, 98%, 50%);\n  --info-svg-bg: hsl(210, 100%, 40%);\n\n  --loader-stroke: hsl(0, 0%, 50%);\n  --loader-bg: hsl(0, 0%, 80%);\n}\n\n.kitzo-toast-container.kitzo-toast-dark {\n  --normal-bg: hsl(0, 0%, 15%);\n  --success-bg: hsl(152, 65%, 15%);\n  --error-bg: hsl(0, 65%, 15%);\n  --info-bg: hsl(210, 65%, 15%);\n\n  --normal-text: hsl(0, 0%, 95%);\n  --success-text: hsl(142, 98%, 70%);\n  --error-text: hsl(6, 98%, 70%);\n  --info-text: hsl(210, 100%, 70%);\n\n  --normal-border: hsl(0, 0%, 17%);\n  --success-border: hsl(123, 100%, 15%);\n  --error-border: hsl(0, 100%, 15%);\n  --info-border: hsl(210, 100%, 16%);\n\n  --success-svg-bg: hsl(142, 98%, 40%);\n  --error-svg-bg: hsl(6, 98%, 50%);\n  --info-svg-bg: hsl(210, 100%, 40%);\n\n  --loader-stroke: hsl(0, 0%, 80%);\n  --loader-bg: hsl(0, 0%, 50%);\n}\n\n.kitzo-toast {\n  font-family: inherit;\n  font-size: 0.875rem;\n  transition:\n    opacity 160ms,\n    transform 210ms;\n}\n\n/*! toast transition styles */\n.kitzo-toast.pos-y-top {\n  transform-origin: top;\n}\n.kitzo-toast.pos-y-bottom {\n  transform-origin: bottom;\n}\n\n.kitzo-toast.type-normal {\n  background-color: var(--normal-bg);\n  color: var(--normal-text);\n  border: 1px solid var(--normal-border);\n}\n.kitzo-toast.type-loading {\n  background-color: var(--normal-bg);\n  color: var(--normal-text);\n  border: 1px solid var(--normal-border);\n}\n\n.kitzo-toast.type-success {\n  background-color: var(--success-bg);\n  color: var(--success-text);\n  border: 1px solid var(--success-border);\n}\n\n.kitzo-toast.type-error {\n  background-color: var(--error-bg);\n  color: var(--error-text);\n  border: 1px solid var(--error-border);\n}\n\n.kitzo-toast.type-info {\n  background-color: var(--info-bg);\n  color: var(--info-text);\n  border: 1px solid var(--info-border);\n}\n\n.kitzo-toast.type-normal,\n.kitzo-toast.type-loading,\n.kitzo-toast.type-success,\n.kitzo-toast.type-error,\n.kitzo-toast.type-info {\n  border-radius: 0.425rem;\n  padding: 0.2525rem 0.5rem;\n  box-shadow: 0 3px 8px -3px hsl(0, 0%, 0%, 0.15);\n}\n\n.kitzo-toast.status-entering.pos-y-top {\n  opacity: 0;\n  transform: translateY(-120%) scale(0.5);\n}\n\n.kitzo-toast.status-visible.pos-y-top {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n\n.kitzo-toast.status-leaving.pos-y-top {\n  opacity: 0;\n  transform: translateY(-120%) scale(0.5);\n}\n\n.kitzo-toast.status-entering.pos-y-bottom {\n  opacity: 0;\n  transform: translateY(120%) scale(0.5);\n}\n\n.kitzo-toast.status-visible.pos-y-bottom {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n\n.kitzo-toast.status-leaving.pos-y-bottom {\n  opacity: 0;\n  transform: translateY(120%) scale(0.5);\n}\n\n.action-update {\n  animation: update 150ms;\n}\n\n@keyframes update {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/*! svg stylings */\n.svg-container {\n  display: grid;\n  place-items: center;\n  border-radius: 10rem;\n  color: white;\n  height: 18px;\n  width: 18px;\n  position: relative;\n  overflow: hidden;\n\n  scale: 1.1;\n  animation: svg-container-animation 400ms ease-in-out forwards;\n\n  svg {\n    width: 12px;\n    height: 12px;\n    stroke-width: 4px;\n    display: inline-block;\n  }\n}\n\n.svg-container.success {\n  background-color: var(--success-svg-bg);\n}\n.svg-container.error {\n  background-color: var(--error-svg-bg);\n\n  svg {\n    scale: 0;\n    animation: error-svg-zoom-in 170ms 130ms forwards;\n  }\n}\n\n.svg-container.info {\n  background-color: var(--info-svg-bg);\n  animation: info-svg-bell 400ms 200ms;\n\n  svg {\n    width: 14px;\n    height: 14px;\n    color: white;\n  }\n}\n\n.svg-container.success::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: 5;\n  border-radius: 10rem;\n  background-color: var(--success-svg-bg);\n  animation: success-container-before-animation 250ms 150ms forwards;\n}\n\n@keyframes svg-container-animation {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.15;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes success-container-before-animation {\n  from {\n    translate: 0 0;\n  }\n  to {\n    translate: 100% -50%;\n  }\n}\n\n@keyframes error-svg-zoom-in {\n  from {\n    scale: 0;\n  }\n  to {\n    scale: 1;\n  }\n}\n\n@keyframes info-svg-bell {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(15deg);\n  }\n  75% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n.promise-svg-container {\n  width: 20px;\n  height: 20px;\n  display: grid;\n  place-items: center;\n\n  .loader {\n    width: 14px;\n    height: 14px;\n    background-image: conic-gradient(\n      var(--loader-stroke) 0 25%,\n      var(--loader-bg) 0 100%\n    );\n    border-radius: 10rem;\n    position: relative;\n    animation: rotate-infinity 1000ms linear infinite;\n  }\n  .loader::before {\n    content: '';\n    position: absolute;\n    inset: 2px;\n    border-radius: inherit;\n    background-color: var(--normal-bg);\n  }\n}\n\n@keyframes rotate-infinity {\n  to {\n    rotate: 360deg;\n  }\n}\n";
var listeners = new Set();
function subscribe(fn) {
  if (!document.getElementById('kitzo-toast-styles')) {
    var styleTag = document.createElement('style');
    styleTag.id = 'kitzo-toast-styles';
    styleTag.textContent = toastStyles;
    document.head.appendChild(styleTag);
  }
  listeners.add(fn);
  return function () {
    return listeners["delete"](fn);
  };
}
function notify(toast) {
  listeners.forEach(function (fn) {
    return fn(toast);
  });
}
var DEFAULTS = {
  duration: 2800,
  showIcon: true
};
var uid = 0;
var genId = function genId() {
  var _crypto$randomUUID, _crypto$randomUUID2, _crypto;
  return (_crypto$randomUUID = (_crypto$randomUUID2 = (_crypto = crypto).randomUUID) === null || _crypto$randomUUID2 === void 0 ? void 0 : _crypto$randomUUID2.call(_crypto)) !== null && _crypto$randomUUID !== void 0 ? _crypto$randomUUID : "kitzo_toast_id_".concat(++uid);
};
var zIndex = 1;
function createToast(type, content) {
  var _opts$id, _opts$duration, _opts$showIcon;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opts = _typeof(options) === 'object' && options !== null ? options : {};
  return _objectSpread2({
    id: (_opts$id = opts.id) !== null && _opts$id !== void 0 ? _opts$id : genId(),
    type: type,
    zIndex: ++zIndex,
    render: content,
    duration: (_opts$duration = opts.duration) !== null && _opts$duration !== void 0 ? _opts$duration : DEFAULTS.duration,
    showIcon: (_opts$showIcon = opts.showIcon) !== null && _opts$showIcon !== void 0 ? _opts$showIcon : DEFAULTS.showIcon,
    action: 'add'
  }, opts);
}
function toast(content, options) {
  if (content == null) return;
  notify(createToast('normal', content, options));
}
toast.success = function (content, options) {
  if (content == null) return;
  notify(createToast('success', content, options));
};
toast.error = function (content, options) {
  if (content == null) return;
  notify(createToast('error', content, options));
};
toast.info = function (content, options) {
  if (content == null) return;
  notify(createToast('info', content, options));
};
toast.custom = function (content, options) {
  if (content == null) return;
  notify(createToast('custom', content, options));
};
toast.dismiss = function (id) {
  notify({
    action: 'dismiss',
    id: id
  });
};
toast.update = function (id, content) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!id) return;
  notify(_objectSpread2(_objectSpread2({}, options), {}, {
    id: id,
    render: content,
    action: 'update'
  }));
};
var loading = function loading(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  notify(createToast('loading', content, _objectSpread2(_objectSpread2({}, options), {}, {
    duration: Infinity
  })));
};
toast.promise = function (promise, handlers) {
  var _options$id;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!promise) return;
  if (!handlers) return;
  if (!handlers.loading) return;
  if (!handlers.success) return;
  if (!handlers.error) return;
  var id = (_options$id = options.id) !== null && _options$id !== void 0 ? _options$id : genId();
  loading(handlers.loading, _objectSpread2(_objectSpread2({}, options), {}, {
    id: id,
    duration: Infinity
  }));
  promise.then(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(result) {
      var _options$duration;
      var _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _t = toast;
            _t2 = id;
            _context.n = 1;
            return handlers.success(result);
          case 1:
            _t.update.call(_t, _t2, _context.v, {
              type: 'success',
              duration: (_options$duration = options.duration) !== null && _options$duration !== void 0 ? _options$duration : 2800
            });
            return _context.a(2, result);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }())["catch"](/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(error) {
      var _options$duration2;
      var _t3, _t4;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _t3 = toast;
            _t4 = id;
            _context2.n = 1;
            return handlers.error(error);
          case 1:
            _t3.update.call(_t3, _t4, _context2.v, {
              type: 'error',
              duration: (_options$duration2 = options.duration) !== null && _options$duration2 !== void 0 ? _options$duration2 : 3800
            });
            throw error;
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  return promise;
};

var timeouts = new Map();
var LEAVE_DELAY = 600;
var MIN_VISIBLE = 700;
function clearToastTimers(id) {
  var t = timeouts.get(id);
  if (!t) return;
  clearTimeout(t.leaving);
  clearTimeout(t.left);
  timeouts["delete"](id);
}
function getDurations(duration) {
  var d = Number(duration);
  if (!isFinite(d)) return null;
  var visible = Math.max(MIN_VISIBLE, d);
  return {
    leaving: visible,
    left: visible + LEAVE_DELAY
  };
}
function armToastTimers(toast, setToasts) {
  var durations = getDurations(toast.duration);
  if (!durations) return;
  clearToastTimers(toast.id);
  var leaving = setTimeout(function () {
    setToasts(function (prev) {
      return prev.map(function (t) {
        return t.id === toast.id ? _objectSpread2(_objectSpread2({}, t), {}, {
          status: 'leaving'
        }) : t;
      });
    });
  }, durations.leaving);
  var left = setTimeout(function () {
    setToasts(function (prev) {
      return prev.filter(function (t) {
        return t.id !== toast.id;
      });
    });
    timeouts["delete"](toast.id);
  }, durations.left);
  timeouts.set(toast.id, {
    leaving: leaving,
    left: left
  });
}
function manageToasts(toast, setToasts) {
  // dismiss
  if (toast.action === 'dismiss') {
    if (!toast.id) {
      setToasts(function (prev) {
        return prev.map(function (t) {
          return _objectSpread2(_objectSpread2({}, t), {}, {
            status: 'leaving'
          });
        });
      });
      setTimeout(function () {
        setToasts([]);
      }, LEAVE_DELAY);
      timeouts.forEach(function (_ref) {
        var leaving = _ref.leaving,
          left = _ref.left;
        clearTimeout(leaving);
        clearTimeout(left);
      });
      timeouts.clear();
      return;
    }
    clearToastTimers(toast.id);
    setToasts(function (prev) {
      return prev.map(function (t) {
        return t.id === toast.id ? _objectSpread2(_objectSpread2({}, t), {}, {
          status: 'leaving'
        }) : t;
      });
    });
    setTimeout(function () {
      setToasts(function (prev) {
        return prev.filter(function (t) {
          return t.id !== toast.id;
        });
      });
    }, LEAVE_DELAY);
    return;
  }

  // update
  if (toast.action === 'update') {
    setToasts(function (prev) {
      var prevToast = prev.find(function (t) {
        return t.id === toast.id;
      });
      if (!prevToast) return prev;
      if (prevToast.type !== 'custom' && prevToast.type !== 'loading') return prev;
      return prev.map(function (t) {
        return t.id === toast.id ? _objectSpread2(_objectSpread2(_objectSpread2({}, t), toast), {}, {
          status: 'visible'
        }) : t;
      });
    });
    armToastTimers(toast, setToasts);
    return;
  }

  // add
  var enteringToast = _objectSpread2(_objectSpread2({}, toast), {}, {
    status: 'entering'
  });
  setToasts(function (prev) {
    var prevToast = prev.find(function (t) {
      return t.id === enteringToast.id;
    });
    if (prevToast) return prev;
    return [enteringToast].concat(_toConsumableArray(prev));
  });
  requestAnimationFrame(function () {
    setToasts(function (prev) {
      return prev.map(function (t) {
        return t.id === toast.id ? _objectSpread2(_objectSpread2({}, t), {}, {
          status: 'visible'
        }) : t;
      });
    });
  });
  armToastTimers(enteringToast, setToasts);
}

function SuccessSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-container success"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
}
function ErrorSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-container error"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })));
}
function LoadingSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "promise-svg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }));
}
function InfoSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-container info"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z"
  })));
}

function Toast(_ref) {
  var t = _ref.t,
    containerPosition = _ref.containerPosition,
    gap = _ref.gap,
    setToasts = _ref.setToasts;
  var id = t.id,
    type = t.type,
    render = t.render,
    action = t.action,
    status = t.status;
  var ref = useRef(null);
  useLayoutEffect(function () {
    if (!ref.current) return;
    var g = typeof gap === 'number' ? gap : Number.isFinite(Number(gap)) ? Number(gap) : 8;
    var el = ref.current;
    var observer = new ResizeObserver(function () {
      var height = el.offsetHeight + g;
      setToasts(function (prev) {
        return prev.map(function (t) {
          return t.id === id ? _objectSpread2(_objectSpread2({}, t), {}, {
            height: height
          }) : t;
        });
      });
    });
    observer.observe(el);
    return function () {
      return observer.disconnect();
    };
  }, []);
  var allowedPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  var userPosition = t.position || containerPosition;
  var position = allowedPositions.includes(userPosition) ? userPosition : 'top-center';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: getToastStyles(t, position)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'all',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    },
    className: "kitzo-toast type-".concat(type, " action-").concat(action, " status-").concat(status, " pos-y-").concat(position.split('-')[0], " pos-x-").concat(position.split('-')[1], " ")
  }, t.showIcon && type !== 'normal' && type !== 'custom' && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, type === 'loading' && /*#__PURE__*/React.createElement(LoadingSvg, null), type === 'success' && /*#__PURE__*/React.createElement(SuccessSvg, null), type === 'error' && /*#__PURE__*/React.createElement(ErrorSvg, null), type === 'info' && /*#__PURE__*/React.createElement(InfoSvg, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, typeof render === 'function' ? render(function () {
    return toast.dismiss(id);
  }) : render)));
}
function getToastStyles(t, position) {
  var styles = {
    position: 'absolute',
    zIndex: t.zIndex,
    left: 0,
    width: '100%',
    transition: 'transform 260ms',
    display: 'flex'
  };
  var transform = position.includes('top') ? "translateY(".concat(t.distance || 0, "px)") : "translateY(-".concat(t.distance || 0, "px)");
  var justifyContent = position.includes('left') ? 'flex-start' : position.includes('center') ? 'center' : 'flex-end';
  styles.transform = transform;
  styles.justifyContent = justifyContent;
  if (position.includes('top')) styles.top = 0;
  if (position.includes('bottom')) styles.bottom = 0;
  return styles;
}

function ToastContainer(_ref) {
  var _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'top-center' : _ref$position,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 8 : _ref$gap,
    _ref$edgeOffset = _ref.edgeOffset,
    edgeOffset = _ref$edgeOffset === void 0 ? 16 : _ref$edgeOffset,
    _ref$isDark = _ref.isDark,
    isDark = _ref$isDark === void 0 ? window.matchMedia('(prefers-color-scheme: dark)').matches : _ref$isDark;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];
  useEffect(function () {
    var unsub = subscribe(function (toast) {
      return manageToasts(toast, setToasts);
    });
    return unsub;
  }, []);
  useLayoutEffect(function () {
    var grouped = toasts.reduce(function (prev, t) {
      var pos = t.position || position || 'top-center';
      (prev[pos] || (prev[pos] = [])).push(t);
      return prev;
    }, {});
    var hasChanged = false;
    var updated = toasts.map(function (toast) {
      var pos = toast.position || position || 'top-center';
      var group = grouped[pos];
      var index = group.findIndex(function (t) {
        return t.id === toast.id;
      });
      var distance = group.slice(0, index).reduce(function (acc, t) {
        return acc + (t.height || 0);
      }, 0);
      if (distance !== toast.distance) {
        hasChanged = true;
      }
      return _objectSpread2(_objectSpread2({}, toast), {}, {
        distance: distance
      });
    });
    if (hasChanged) {
      setTimeout(function () {
        setToasts(updated);
      }, 30);
    }
  }, [toasts, position]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2147483647,
      pointerEvents: 'none',
      display: 'grid',
      padding: edgeOffset != null ? edgeOffset : 16
    },
    className: "kitzo-toast-container ".concat(isDark ? 'kitzo-toast-dark' : '')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, toasts.map(function (t) {
    return /*#__PURE__*/React.createElement(Toast, {
      key: t.id,
      t: t,
      containerPosition: position,
      gap: gap,
      setToasts: setToasts
    });
  })));
}

// import './style.css';
var tooltipStyles = "/* Default styling */\n.kitzo-react-tooltip-root {\n  --bg-clr: hsl(0, 0%, 15%);\n  --text-clr: hsl(0, 0%, 95%);\n\n  @media (prefers-color-scheme: dark) {\n    --bg-clr: hsl(0, 0%, 95%);\n    --text-clr: hsl(0, 0%, 15%);\n  }\n}\n\n.kitzo-react-tooltip-content-default-style {\n  font-family:\n    inherit,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    'Open Sans',\n    'Helvetica Neue',\n    sans-serif;\n  font-size: 0.875rem;\n  background-color: var(--bg-clr);\n  color: var(--text-clr);\n  padding-block: 0.25rem;\n  padding-inline: 0.5rem;\n  border-radius: 0.325rem;\n}\n\n/* Tooltip positioning */\n.kitzo-react-tooltip-wrapper {\n  --tooltip-offset: calc(var(--offset) * 1px + 1px);\n}\n/* Top */\n.kitzo-react-tooltip-wrapper.top {\n  bottom: 100%;\n  padding-block-end: var(--tooltip-offset);\n}\n.kitzo-react-tooltip-wrapper.top {\n  left: 50%;\n  translate: -50% 0;\n}\n.kitzo-react-tooltip-wrapper.top.start {\n  left: 0;\n  translate: 0 0;\n}\n.kitzo-react-tooltip-wrapper.top.end {\n  right: 0;\n  translate: 0 0;\n}\n\n/* Right */\n.kitzo-react-tooltip-wrapper.right {\n  left: 100%;\n  padding-inline-start: var(--tooltip-offset);\n}\n.kitzo-react-tooltip-wrapper.right {\n  top: 50%;\n  translate: 0 -50%;\n}\n.kitzo-react-tooltip-wrapper.right.start {\n  top: 0;\n  translate: 0 0;\n}\n.kitzo-react-tooltip-wrapper.right.end {\n  top: 100%;\n  translate: 0 -100%;\n}\n\n/* Bottom */\n.kitzo-react-tooltip-wrapper.bottom {\n  top: 100%;\n  padding-block-start: var(--tooltip-offset);\n}\n.kitzo-react-tooltip-wrapper.bottom {\n  left: 50%;\n  translate: -50% 0;\n}\n.kitzo-react-tooltip-wrapper.bottom.start {\n  left: 0;\n  translate: 0 0;\n}\n.kitzo-react-tooltip-wrapper.bottom.end {\n  left: 100%;\n  translate: -100% 0;\n}\n\n/* Left */\n.kitzo-react-tooltip-wrapper.left {\n  right: 100%;\n  padding-inline-end: var(--tooltip-offset);\n}\n.kitzo-react-tooltip-wrapper.left {\n  top: 50%;\n  translate: 0 -50%;\n}\n.kitzo-react-tooltip-wrapper.left.start {\n  top: 0;\n  translate: 0 0;\n}\n.kitzo-react-tooltip-wrapper.left.end {\n  top: 100%;\n  translate: 0 -100%;\n}\n\n/* Tooltip transitions */\n.kitzo-react-tooltip-root.animate-tooltip {\n  --transition-startDuration: calc(var(--startDuration) * 1ms);\n  --transition-endDuration: calc(var(--endDuration) * 1ms);\n  --transition-startDelay: calc(var(--startDelay) * 1ms);\n  --transition-endDelay: calc(var(--endDelay) * 1ms);\n\n  .kitzo-react-tooltip-content {\n    transition:\n      transform var(--transition-endDuration) var(--transition-endDelay),\n      opacity var(--transition-endDuration) var(--transition-endDelay);\n  }\n}\n\n.kitzo-react-tooltip-content {\n  transform: scale(0.8);\n  opacity: 0;\n}\n\n.kitzo-react-tooltip-content.top {\n  transform-origin: bottom;\n}\n.kitzo-react-tooltip-content.right {\n  transform-origin: left;\n}\n.kitzo-react-tooltip-content.bottom {\n  transform-origin: top;\n}\n.kitzo-react-tooltip-content.left {\n  transform-origin: right;\n}\n\n.kitzo-react-tooltip-root.animate-tooltip:hover {\n  .kitzo-react-tooltip-content {\n    transition:\n      transform var(--transition-startDuration) var(--transition-startDelay),\n      opacity var(--transition-startDuration) var(--transition-startDelay);\n  }\n}\n.kitzo-react-tooltip-root:hover {\n  .kitzo-react-tooltip-content {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n/* smart hover persistence feature */\n.kitzo-react-tooltip-root {\n  .kitzo-react-tooltip-wrapper {\n    pointer-events: none;\n  }\n}\n.kitzo-react-tooltip-root.smart-hover:hover {\n  .kitzo-react-tooltip-wrapper {\n    pointer-events: all;\n  }\n}\n\n/* Arrow */\n.kitzo-react-tooltip-content.tooltip-arrow {\n  --effective-size: calc(var(--arrow-size, 6) * 1px);\n  --effective-color: var(--arrow-color, var(--bg-clr));\n\n  position: relative;\n}\n.kitzo-react-tooltip-content.tooltip-arrow::before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  border: var(--effective-size) solid transparent;\n}\n.kitzo-react-tooltip-content.tooltip-arrow.top::before {\n  left: 50%;\n  translate: -50% 0;\n  top: calc(100% - 1px);\n  border-top: var(--effective-size) solid var(--effective-color);\n}\n.kitzo-react-tooltip-content.tooltip-arrow.right::before {\n  top: 50%;\n  translate: 0 -50%;\n  right: calc(100% - 1px);\n  border-right: var(--effective-size) solid var(--effective-color);\n}\n.kitzo-react-tooltip-content.tooltip-arrow.bottom::before {\n  left: 50%;\n  translate: -50% 0;\n  bottom: calc(100% - 1px);\n  border-bottom: var(--effective-size) solid var(--effective-color);\n}\n.kitzo-react-tooltip-content.tooltip-arrow.left::before {\n  top: 50%;\n  translate: 0 -50%;\n  left: calc(100% - 1px);\n  border-left: var(--effective-size) solid var(--effective-color);\n}";
(function () {
  if (!document.getElementById('kitzo-react-tooltip-styles')) {
    var styleTag = document.createElement('style');
    styleTag.id = 'kitzo-react-tooltip-styles';
    styleTag.textContent = tooltipStyles;
    document.head.appendChild(styleTag);
  }
})();
var allowedPositions = ['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end'];
function getPositionClass() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var allowedPos = allowedPositions.find(function (p) {
    return p === position;
  });
  if (!allowedPos) return 'top';
  if (allowedPos.includes('-')) {
    var _allowedPos$split = allowedPos.split('-'),
      _allowedPos$split2 = _slicedToArray(_allowedPos$split, 2),
      dir = _allowedPos$split2[0],
      state = _allowedPos$split2[1];
    return "".concat(dir, " ").concat(state);
  } else {
    return allowedPos;
  }
}
function getAnimationProperties(animation) {
  var _animation$delay, _animation$duration;
  var effectiveStartDelay = animation === null || animation === void 0 ? void 0 : animation.startDelay;
  var effectiveEndDelay = animation === null || animation === void 0 ? void 0 : animation.endDelay;
  var effectiveDelay = (_animation$delay = animation === null || animation === void 0 ? void 0 : animation.delay) !== null && _animation$delay !== void 0 ? _animation$delay : 0;
  var effectiveStartDuration = animation === null || animation === void 0 ? void 0 : animation.startDuration;
  var effectiveEndDuration = animation === null || animation === void 0 ? void 0 : animation.endDuration;
  var effectiveDuration = (_animation$duration = animation === null || animation === void 0 ? void 0 : animation.duration) !== null && _animation$duration !== void 0 ? _animation$duration : 110;
  return {
    startDelay: effectiveStartDelay !== null && effectiveStartDelay !== void 0 ? effectiveStartDelay : effectiveDelay,
    endDelay: effectiveEndDelay !== null && effectiveEndDelay !== void 0 ? effectiveEndDelay : effectiveDelay,
    startDuration: effectiveStartDuration !== null && effectiveStartDuration !== void 0 ? effectiveStartDuration : effectiveDuration,
    endDuration: effectiveEndDuration !== null && effectiveEndDuration !== void 0 ? effectiveEndDuration : effectiveDuration
  };
}
function Tooltip(_ref) {
  var content = _ref.content,
    _ref$tooltipOptions = _ref.tooltipOptions,
    tooltipOptions = _ref$tooltipOptions === void 0 ? {} : _ref$tooltipOptions,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? true : _ref$animation,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$isHidden = _ref.isHidden,
    isHidden = _ref$isHidden === void 0 ? false : _ref$isHidden,
    children = _ref.children;
  if (typeof isHidden === 'boolean' && isHidden) return children;
  if (typeof content === 'string') {
    if (!content.trim()) throw new Error('kitzo/react: tooltip content is required');
  } else if (!content) {
    throw new Error('kitzo/react: tooltip content is required');
  }
  // Define options
  var _ref2 = tooltipOptions !== null && tooltipOptions !== void 0 ? tooltipOptions : {},
    _ref2$position = _ref2.position,
    position = _ref2$position === void 0 ? 'top' : _ref2$position,
    _ref2$offset = _ref2.offset,
    offset = _ref2$offset === void 0 ? 8 : _ref2$offset,
    _ref2$hideOnTouch = _ref2.hideOnTouch,
    hideOnTouch = _ref2$hideOnTouch === void 0 ? true : _ref2$hideOnTouch,
    _ref2$arrow = _ref2.arrow,
    arrow = _ref2$arrow === void 0 ? false : _ref2$arrow,
    _ref2$smartHover = _ref2.smartHover,
    smartHover = _ref2$smartHover === void 0 ? true : _ref2$smartHover;
  var finalOptions = {
    position: typeof position === 'string' ? position.trim().toLowerCase() : 'top',
    offset: !isNaN(Number(offset)) ? Number(offset) : 8,
    arrow: typeof arrow === 'boolean' ? arrow : false,
    smartHover: typeof smartHover === 'boolean' ? smartHover : true,
    hideOnTouch: typeof hideOnTouch === 'boolean' ? hideOnTouch : true
  };

  // Hide on touch device
  var isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch && finalOptions.hideOnTouch) return children;
  var positionClass = getPositionClass(finalOptions.position);

  // Define animations
  var animationEnabled = animation ? true : false;
  var animationObj = animation === true ? {} : animation;
  var finalAnimationProperties = getAnimationProperties(animationObj);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 'fit-content',
      '--offset': Math.max(0, finalOptions.offset),
      '--startDuration': Math.max(0, finalAnimationProperties.startDuration),
      '--endDuration': Math.max(0, finalAnimationProperties.endDuration),
      '--startDelay': Math.max(0, finalAnimationProperties.startDelay),
      '--endDelay': Math.max(0, finalAnimationProperties.endDelay),
      '--arrow-color': style === null || style === void 0 ? void 0 : style['--arrow-color'],
      '--arrow-size': style === null || style === void 0 ? void 0 : style['--arrow-size']
    },
    className: "kitzo-react-tooltip-root ".concat(finalOptions.smartHover ? 'smart-hover' : '', " ").concat(animationEnabled ? 'animate-tooltip' : '')
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      whiteSpace: typeof content === 'string' ? 'nowrap' : 'normal'
    },
    tabIndex: -1,
    className: "kitzo-react-tooltip-wrapper ".concat(positionClass)
  }, /*#__PURE__*/React.createElement("div", {
    className: "kitzo-react-tooltip-content ".concat(positionClass, " ").concat(finalOptions.arrow ? 'tooltip-arrow' : '')
  }, typeof content === 'string' || typeof content === 'number' ? /*#__PURE__*/React.createElement("div", {
    className: "kitzo-react-tooltip-content-default-style"
  }, content) : /*#__PURE__*/React.createElement(React.Fragment, null, content))));
}

function useDebounce(value, delay) {
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    debouncedValue = _useState2[0],
    setDebouncedValue = _useState2[1];
  useEffect(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

function useWindowSize() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$delay = options.delay,
    delay = _options$delay === void 0 ? 50 : _options$delay;
  if (typeof delay !== 'number') throw new Error("Only number is accepted 'useWindowSize' hook configuration: delay");
  var _useState = useState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    }),
    _useState2 = _slicedToArray(_useState, 2),
    screenSize = _useState2[0],
    setScreenSize = _useState2[1];
  var timeoutRef = useRef(null);
  useEffect(function () {
    function updateScreenSize() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(function () {
        setScreenSize({
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight
        });
      }, Math.max(0, Number(delay)));
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateScreenSize);
    }
    return function () {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [delay]);
  return screenSize;
}

export { ToastContainer, Tooltip, toast, useDebounce, useWindowSize };
//# sourceMappingURL=index.js.map
