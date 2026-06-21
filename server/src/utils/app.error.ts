class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public errors: unknown = null,
  ) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ApiError;
