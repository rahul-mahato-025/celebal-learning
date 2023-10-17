class CustomError extends Error {
  constructor(message = "Something went wrong", statusCode = 500) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default CustomError;
