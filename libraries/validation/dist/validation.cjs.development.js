'use strict';

var missing = function missing(value) {
  return value === null || value === undefined;
};

// Checks returns errors for use in async functions
var check = function check(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? null : _ref$name,
    _ref$parameters = _ref.parameters,
    parameters = _ref$parameters === void 0 ? {} : _ref$parameters;
  var identifier = name ? "'" + name + "'" : 'function';
  for (var _i = 0, _Object$entries = Object.entries(parameters); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (missing(value)) return "Invalid '" + key + "' passed to " + identifier;
  }
  return null;
};

// Validate throws errors for use in sync functions
var validate = function validate(_temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
    _ref2$name = _ref2.name,
    name = _ref2$name === void 0 ? null : _ref2$name,
    _ref2$parameters = _ref2.parameters,
    parameters = _ref2$parameters === void 0 ? {} : _ref2$parameters;
  var identifier = name ? "'" + name + "'" : 'function';
  for (var _i2 = 0, _Object$entries2 = Object.entries(parameters); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _Object$entries2[_i2],
      key = _Object$entries2$_i[0],
      value = _Object$entries2$_i[1];
    if (missing(value)) throw new Error("Invalid '" + key + "' passed to " + identifier);
  }
  return null;
};

exports.check = check;
exports.validate = validate;
//# sourceMappingURL=validation.cjs.development.js.map
