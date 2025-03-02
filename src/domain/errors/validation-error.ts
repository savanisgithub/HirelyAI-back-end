class ValidationError extends Error {
  //Inherit from the supper class Error (Inheritance)
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export default ValidationError;
