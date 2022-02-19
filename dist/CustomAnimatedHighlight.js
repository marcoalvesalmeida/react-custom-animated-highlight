"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomAnimatedHighlight = function CustomAnimatedHighlight(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      subtitleColor = _ref.subtitleColor;
  return /*#__PURE__*/_react["default"].createElement(_styles.Container, null, /*#__PURE__*/_react["default"].createElement(_styles.Title, null, title), /*#__PURE__*/_react["default"].createElement(_styles.SubTitle, {
    color: subtitleColor
  }, subtitle));
};

CustomAnimatedHighlight.propTypes = {
  title: _propTypes["default"].string,
  subtitle: _propTypes["default"].string,
  subtitleColor: _propTypes["default"].string
};
var _default = CustomAnimatedHighlight;
exports["default"] = _default;