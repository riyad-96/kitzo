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
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var toastStyles = ".toast-content,\n.toast-content-bottom {\n  font-size: 0.925rem;\n}\n.toast-content,\n.toast-content-bottom {\n  pointer-events: all;\n}\n  \n.pre-styled {\n  padding-inline: 0.825rem;\n  padding-block: 0.625rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: white;\n  border-radius: 0.5525rem;\n  box-shadow: 0 2px 8px -3px rgba(0, 0, 0, 0.3);\n}\n\n.toast-content {\n  animation: slide-in 230ms forwards;\n}\n.toast-content.exit {\n  animation: slide-out 110ms forwards;\n}\n\n.toast-content-bottom {\n  animation: bottom-slide-in 230ms forwards;\n}\n.toast-content-bottom.exit {\n  animation: bottom-slide-out 110ms forwards;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    translate: 0 -100%;\n    scale: 0.7;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n    scale: 1;\n  }\n}\n\n@keyframes slide-out {\n  from {\n    opacity: 1;\n    translate: 0 0;\n    scale: 1;\n  }\n  to {\n    opacity: 0;\n    translate: 0 -100%;\n    scale: 0.7;\n  }\n}\n\n@keyframes bottom-slide-in {\n  from {\n    opacity: 0;\n    translate: 0 100%;\n    scale: 0.7;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n    scale: 1;\n  }\n}\n\n@keyframes bottom-slide-out {\n  from {\n    opacity: 1;\n    translate: 0 0;\n    scale: 1;\n  }\n  to {\n    opacity: 0;\n    translate: 0 100%;\n    scale: 0.7;\n  }\n}\n\n.svg-container {\n  display: grid;\n  place-items: center;\n  border-radius: 10rem;\n  background-color: #61d345;\n  color: white;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  overflow: hidden;\n\n  scale: 1.1;\n  animation: svg-container-animation 400ms ease-in-out forwards;\n\n  svg {\n    width: 14px;\n    height: 14px;\n    stroke-width: 4px;\n    display: inline-block;\n  }\n}\n\n.svg-container.success {\n  background-color: #61d345;\n}\n.svg-container.error {\n  background-color: #ff4b4b;\n\n  svg {\n    scale: 0;\n    animation: error-svg-zoom-in 170ms 130ms forwards;\n  }\n}\n\n.svg-container.success::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: 5;\n  border-radius: 10rem;\n  background-color: #61d345;\n  animation: success-container-before-animation 250ms 150ms forwards;\n}\n\n@keyframes svg-container-animation {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.15;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes success-container-before-animation {\n  from {\n    translate: 0 0;\n  }\n  to {\n    translate: 100% -50%;\n  }\n}\n\n@keyframes error-svg-zoom-in {\n  from {\n    scale: 0;\n  }\n  to {\n    scale: 1;\n  }\n}\n\n.promise-svg-container {\n  width: 20px;\n  height: 20px;\n  display: grid;\n  place-items: center;\n  color: #474747;\n\n  svg {\n    width: 14px;\n    height: 14px;\n    stroke-width: 3px;\n    display: inline-block;\n    animation: rotate-infinity 1000ms infinite linear;\n  }\n}\n\n@keyframes rotate-infinity {\n  to {\n    rotate: 360deg;\n  }\n}\n";
var listeners = new Set();
function addToast(toast) {
  listeners.forEach(function (callback) {
    callback(toast);
  });
}
function subscribe(callback) {
  if (!document.getElementById('kitzo-react-toast-styles')) {
    var styleTag = document.createElement('style');
    styleTag.id = 'kitzo-react-toast-styles';
    styleTag.textContent = toastStyles;
    document.head.appendChild(styleTag);
  }
  listeners.add(callback);
  return function () {
    return listeners["delete"](callback);
  };
}
function toast() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Toast message';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var id = Date.now();
  options = Object.assign({
    duration: 2800,
    id: id,
    style: {},
    showIcon: false
  }, options);
  addToast({
    type: 'success',
    text: text,
    options: options
  });
}
toast.success = function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Toast success';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var id = Date.now();
  options = Object.assign({
    duration: 2800,
    id: id,
    style: {},
    showIcon: true
  }, options);
  addToast({
    type: 'success',
    text: text,
    options: options
  });
};
toast.error = function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Toast denied';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var id = Date.now();
  options = Object.assign({
    duration: 2800,
    id: id,
    style: {},
    showIcon: true
  }, options);
  addToast({
    type: 'error',
    text: text,
    options: options
  });
};
toast.promise = function (callback) {
  var msgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var id = Date.now();
  options = Object.assign({
    duration: 2800,
    id: id,
    style: {},
    showIcon: true
  }, options);
  msgs = Object.assign({
    loading: 'Saving...',
    success: 'Success',
    error: 'Something went wrong'
  }, msgs);
  addToast({
    type: 'loading',
    text: msgs.loading,
    options: _objectSpread2(_objectSpread2({}, options), {}, {
      duration: Infinity,
      id: id
    })
  });
  callback.then(function (res) {
    var successMsg = typeof msgs.success === 'function' ? msgs.success(res) : msgs.success;
    addToast({
      type: 'success',
      text: successMsg,
      options: options
    });
    return res;
  })["catch"](function (err) {
    var normalizedError = err instanceof Error ? err : new Error(String(err));
    var errorMsg = typeof msgs.error === 'function' ? msgs.error(normalizedError) : msgs.error;
    addToast({
      type: 'error',
      text: errorMsg,
      options: options
    });
    return Promise.reject(normalizedError);
  });
};
toast.custom = function (render) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var id = Date.now();
  options = Object.assign({
    duration: 3000,
    id: id,
    exitDelay: 50
  }, options);
  addToast({
    type: 'custom',
    render: render,
    options: options
  });
  return id;
};
function dismiss(id, exitDelay) {
  addToast({
    type: 'dismiss',
    id: id,
    exitDelay: exitDelay
  });
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
    d: "M21 12a9 9 0 1 1-6.219-8.56"
  })));
}

function Toast(_ref) {
  var toast = _ref.toast,
    setToasts = _ref.setToasts,
    position = _ref.position,
    gap = _ref.gap;
  var id = toast.id,
    leaving = toast.leaving,
    offset = toast.offset,
    text = toast.text,
    type = toast.type,
    options = toast.options;
  var style = options.style,
    showIcon = options.showIcon;
  var ref = useRef(null);
  useLayoutEffect(function () {
    if (!ref.current) return;
    var height = ref.current.getBoundingClientRect().height;
    var totalHeight = height + gap;
    setToasts(function (prev) {
      return prev.map(function (t) {
        return t.id === id ? _objectSpread2(_objectSpread2({}, t), {}, {
          height: totalHeight
        }) : t;
      });
    });
  }, []);
  var transformY = position.includes('bottom') ? "translateY(-".concat(offset || 0, "px)") : "translateY(".concat(offset || 0, "px)");
  function renderCustomContent() {
    var render = toast.render;
    if (typeof render === 'function') {
      return render(function () {
        return dismiss(toast.id, toast.options.exitDelay);
      });
    }
    if (typeof render === 'string') {
      return /*#__PURE__*/React.createElement("span", null, render);
    }
    return render;
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: _objectSpread2({
      maxHeight: 'fit-content',
      transform: transformY
    }, getToastPosition(position))
  }, /*#__PURE__*/React.createElement("div", {
    className: "toast-content".concat(position.includes('bottom') ? '-bottom' : '', " ").concat(leaving ? 'exit' : '')
  }, type === 'custom' ? renderCustomContent() : /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, style),
    className: "pre-styled"
  }, showIcon && /*#__PURE__*/React.createElement(React.Fragment, null, type === 'loading' && /*#__PURE__*/React.createElement(LoadingSvg, null), type === 'success' && /*#__PURE__*/React.createElement(SuccessSvg, null), type === 'error' && /*#__PURE__*/React.createElement(ErrorSvg, null)), /*#__PURE__*/React.createElement("span", null, text))));
}
function getToastPosition(position) {
  var isLeft = position.includes('left');
  var isRight = position.includes('right');
  var styles = {
    position: 'absolute',
    width: '100%',
    pointerEvents: 'none',
    transition: 'transform 230ms',
    display: 'flex'
  };
  if (position.includes('top')) {
    styles.top = '0';
    styles.justifyContent = isLeft ? 'flex-start' : isRight ? 'flex-end' : 'center';
  }
  if (position.includes('bottom')) {
    styles.bottom = '0';
    styles.justifyContent = isLeft ? 'flex-start' : isRight ? 'flex-end' : 'center';
  }
  return styles;
}

function ToastContainer(props) {
  props = Object.assign({
    position: 'top-center',
    gap: 8
  }, props);
  var _props = props,
    gap = _props.gap;
  var position = props.position;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];

  // event listener
  useEffect(function () {
    var unsub = subscribe(function (toast) {
      if (toast.type === 'dismiss') {
        setTimeout(function () {
          setToasts(function (prev) {
            return prev.map(function (t) {
              return t.options.id === toast.id ? _objectSpread2(_objectSpread2({}, t), {}, {
                leaving: true
              }) : t;
            });
          });
        }, Math.max(0, Number(toast.exitDelay)));
        setTimeout(function () {
          setToasts(function (prev) {
            return prev.filter(function (t) {
              return t.options.id !== toast.id;
            });
          });
        }, Math.max(0, Number(toast.exitDelay) + 300));
        return;
      }
      var duration = toast.options.duration;
      var id = toast.options.id;
      setToasts(function (prev) {
        var exists = prev.some(function (t) {
          return t.options.id === id;
        });
        if (exists) {
          return prev.map(function (t) {
            return t.options.id === id ? _objectSpread2(_objectSpread2({}, t), toast) : t;
          });
        }
        return [_objectSpread2(_objectSpread2({
          id: id
        }, toast), {}, {
          offset: 0,
          height: 0,
          leaving: false
        })].concat(_toConsumableArray(prev));
      });
      if (toast.type !== 'loading' && isFinite(duration)) {
        setTimeout(function () {
          setToasts(function (prev) {
            return prev.map(function (t) {
              return t.options.id === id ? _objectSpread2(_objectSpread2({}, t), {}, {
                leaving: true
              }) : t;
            });
          });
        }, Math.max(0, duration - 300));
        setTimeout(function () {
          setToasts(function (prev) {
            return prev.filter(function (t) {
              return t.options.id !== id;
            });
          });
        }, duration);
      }
    });
    return function () {
      return unsub();
    };
  }, []);

  // measue height and offset for each toast
  useLayoutEffect(function () {
    var grouped = toasts.reduce(function (acc, t) {
      var pos = t.options.position || position || 'top-center';
      (acc[pos] || (acc[pos] = [])).push(t);
      return acc;
    }, {});
    var hasChanged = false;
    var updated = toasts.map(function (toast) {
      var pos = toast.options.position || position || 'top-center';
      var group = grouped[pos];
      var index = group.findIndex(function (t) {
        return t.id === toast.id;
      });
      var offset = group.slice(0, index).reduce(function (acc, t) {
        return acc + (t.height || 0);
      }, 0);
      if (offset !== toast.offset) {
        hasChanged = true;
      }
      return _objectSpread2(_objectSpread2({}, toast), {}, {
        offset: offset
      });
    });
    if (hasChanged) {
      setToasts(updated);
    }
  }, [toasts]);
  var positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100000000,
      pointerEvents: 'none',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    }
  }, positions.map(function (pos) {
    var group = toasts.filter(function (t) {
      return (t.options.position || position || 'top-center') === pos;
    });
    if (!group.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: pos,
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        padding: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, group.map(function (toast) {
      return /*#__PURE__*/React.createElement(Toast, {
        key: toast.options.id,
        toast: toast,
        setToasts: setToasts,
        position: pos,
        gap: typeof gap === 'string' ? isNaN(+gap) ? 8 : +gap : gap
      });
    })));
  }));
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
