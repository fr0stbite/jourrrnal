class ExecutableNotFoundError extends Error {
  public type: string = "ExecutableNotFoundError";

  constructor(name: string) {
    super(`Unable to find the executable '${name}'.`);
  }
}

export default ExecutableNotFoundError;
