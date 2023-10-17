import CustomError from "./custom-error.js";

class DuplicateDataError extends CustomError {
  constructor(resourse, resourseValue) {
    super(`The ${resourse} with ${resourseValue} already exists.`, 409);
  }
}

export default DuplicateDataError;
