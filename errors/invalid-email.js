import CustomError from "./custom-error.js";

class InvalidEmailError extends CustomError {
  constructor() {
    super("Please provide a valid email address.", 400);
  }
}
export default new InvalidEmailError();
