function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var sendEmail = function sendEmail(_ref) {
  _objectDestructuringEmpty(_ref);
  console.log("sending email");
  return true;
};

export { sendEmail };
//# sourceMappingURL=types.esm.js.map
