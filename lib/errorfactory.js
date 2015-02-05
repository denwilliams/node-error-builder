function createCustomError(name, code, defaultMessage) {

  function CustomError(msg) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.message = msg || defaultMessage || 'An error occurred';
    this.name = name;
    this.code = code;
  }

  CustomError.prototype.name = name;
  CustomError.prototype.__proto__ = Error.prototype;

  return CustomError;
}

module.exports = createCustomError;
