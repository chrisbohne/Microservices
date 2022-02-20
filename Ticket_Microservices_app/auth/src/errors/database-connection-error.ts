export class DataBaseConnectionError extends Error {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super();

    // because we are extending a built in class
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
