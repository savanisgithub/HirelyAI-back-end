class ForbiddenError extends Error {
  //Inherit from the supper class Error (Inheritance)
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
  }
}

export default ForbiddenError;
