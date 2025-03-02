class NotFoundError extends Error {
  //Inherit from the supper class Error (Inheritance)
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;
