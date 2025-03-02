class UnauthorizedError extends Error {
  //Inherit from the supper class Error (Inheritance)
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
