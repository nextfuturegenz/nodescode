'use strict';

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var sendEmail = function sendEmail(_ref) {
  _objectDestructuringEmpty(_ref);
  console.log("sending email");
  return true;
};

exports.sendEmail = sendEmail;
//# sourceMappingURL=types.cjs.development.js.map
