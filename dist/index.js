'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaWhatsapp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(props);
}

var WhatsAppFloating = function (_a) {
    var phoneNumber = _a.phoneNumber, _b = _a.companyName, companyName = _b === void 0 ? "Support Team" : _b, companyLogo = _a.companyLogo, _c = _a.message, message = _c === void 0 ? "Hi there! 👋 How can I help you?" : _c, _d = _a.replyTime, replyTime = _d === void 0 ? "Typically replies within 5 minutes" : _d, _e = _a.position, position = _e === void 0 ? "right" : _e, _f = _a.buttonSize, buttonSize = _f === void 0 ? 60 : _f, _g = _a.buttonColor, buttonColor = _g === void 0 ? "#25D366" : _g, _h = _a.headerColor, headerColor = _h === void 0 ? "#075E54" : _h, _j = _a.textColor, textColor = _j === void 0 ? "#fff" : _j, _k = _a.placeholder, placeholder = _k === void 0 ? "Type a message..." : _k, _l = _a.zIndex, zIndex = _l === void 0 ? 1000 : _l;
    var _m = React.useState(false), isOpen = _m[0], setIsOpen = _m[1];
    var _o = React.useState(""), userMessage = _o[0], setUserMessage = _o[1];
    var handleSend = function () {
        if (!userMessage.trim())
            return;
        var encodedMessage = encodeURIComponent(userMessage);
        var cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
        var isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
        var url = isMobile
            ? "https://api.whatsapp.com/send?phone=".concat(cleanPhoneNumber, "&text=").concat(encodedMessage)
            : "https://web.whatsapp.com/send?phone=".concat(cleanPhoneNumber, "&text=").concat(encodedMessage);
        window.open(url, "_blank");
        setUserMessage("");
    };
    var handleKeyDown = function (e) {
        if (e.key === "Enter") {
            handleSend();
        }
    };
    var positionStyles = {
        left: { left: "20px" },
        right: { right: "20px" },
    };
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { onClick: function () { return setIsOpen(!isOpen); }, style: __assign$1(__assign$1({ position: "fixed", bottom: "20px" }, positionStyles[position]), { backgroundColor: buttonColor, borderRadius: "50%", width: "".concat(buttonSize, "px"), height: "".concat(buttonSize, "px"), display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", zIndex: zIndex, transition: "transform 0.3s ease" }), onMouseEnter: function (e) {
                    e.currentTarget.style.transform = "scale(1.1)";
                }, onMouseLeave: function (e) {
                    e.currentTarget.style.transform = "scale(1)";
                }, children: jsxRuntime.jsx(FaWhatsapp, { size: buttonSize * 0.5, color: textColor }) }), isOpen && (jsxRuntime.jsxs("div", { style: __assign$1(__assign$1({ position: "fixed", bottom: "".concat(buttonSize + 30, "px") }, positionStyles[position]), { width: "300px", background: "#fff", borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0,0,0,0.15)", overflow: "hidden", zIndex: zIndex, animation: "slideUp 0.3s ease" }), children: [jsxRuntime.jsxs("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: headerColor,
                            color: textColor,
                            padding: "15px",
                        }, children: [jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [companyLogo && (jsxRuntime.jsx("img", { src: companyLogo, alt: "".concat(companyName, " logo"), style: {
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "1px solid ".concat(textColor),
                                        } })), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: companyName }), jsxRuntime.jsx("div", { style: { fontSize: "12px", opacity: 0.8 }, children: replyTime })] })] }), jsxRuntime.jsx("button", { onClick: function () { return setIsOpen(false); }, style: {
                                    background: "transparent",
                                    border: "none",
                                    color: textColor,
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    lineHeight: "1",
                                    padding: "0",
                                    width: "20px",
                                    height: "20px",
                                }, "aria-label": "Close chat", children: "\u00D7" })] }), jsxRuntime.jsx("div", { style: {
                            padding: "15px",
                            fontSize: "14px",
                            background: "#ece5dd",
                            lineHeight: "1.4",
                        }, children: message }), jsxRuntime.jsxs("div", { style: { display: "flex", borderTop: "1px solid #e0e0e0" }, children: [jsxRuntime.jsx("input", { type: "text", value: userMessage, onChange: function (e) { return setUserMessage(e.target.value); }, onKeyDown: handleKeyDown, placeholder: placeholder, style: {
                                    flex: 1,
                                    border: "none",
                                    padding: "15px",
                                    fontSize: "14px",
                                    outline: "none",
                                    backgroundColor: "#fff",
                                } }), jsxRuntime.jsx("button", { onClick: handleSend, disabled: !userMessage.trim(), style: {
                                    background: "transparent",
                                    border: "none",
                                    padding: "15px",
                                    cursor: userMessage.trim() ? "pointer" : "not-allowed",
                                    fontSize: "16px",
                                    color: userMessage.trim() ? headerColor : "#ccc",
                                    transition: "color 0.2s ease",
                                }, "aria-label": "Send message", children: "\u27A4" })] })] })), jsxRuntime.jsx("style", { children: "\n          @keyframes slideUp {\n            from {\n              opacity: 0;\n              transform: translateY(20px);\n            }\n            to {\n              opacity: 1;\n              transform: translateY(0);\n            }\n          }\n        " })] }));
};

exports.WhatsAppFloating = WhatsAppFloating;
exports.default = WhatsAppFloating;
//# sourceMappingURL=index.js.map
