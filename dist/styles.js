"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SubTitle = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Fade = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"])));

var Container = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Yanone+Kaffeesatz&display=swap');\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"])));

exports.Container = Container;

var Title = _styledComponents["default"].h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-image: url('https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif');\n    background-size: cover;\n    color: transparent;\n    background-clip: text;\n    -moz-background-clip: text;\n    -webkit-background-clip: text;\n    text-transform: uppercase;\n    font-size: 80px;\n    font-family: 'Monoton', 'cursive';\n    margin: 0;\n"])));

exports.Title = Title;

var SubTitle = _styledComponents["default"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    animation: ", " 2s linear;\n    color:  ", ";\n    font-size: 16px;\n    font-weight: bold;\n    font-family: 'Yanone Kaffeesatz', sans-serif;\n    margin: 0;\n"])), Fade, function (_ref) {
  var color = _ref.color;
  return color;
});

exports.SubTitle = SubTitle;