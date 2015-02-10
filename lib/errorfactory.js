function createCustomError(name, code, defaultMessage, BaseError) {
  BaseError = BaseError || Error;

  // note: this method was taken from the mongoose project

  function CustomError(msg) {
    BaseError.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.message = msg || defaultMessage || 'An error occurred';
    this.name = name;
    this.code = code;
  }

  CustomError.prototype.name = name;
  CustomError.prototype.__proto__ = BaseError.prototype;

  return CustomError;
}

module.exports = createCustomError;
