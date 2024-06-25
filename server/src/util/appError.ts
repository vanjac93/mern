type HttpCode = 200 | 400 | 404 | 401 | 403 | 500

export class AppError extends Error {
  public readonly name: string
  public readonly code: HttpCode
  public readonly isOperational: boolean
  public readonly description: string

  constructor(name: string, code: HttpCode, description: string, isOperational: boolean) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = name
    this.code = code
    this.isOperational = isOperational
    this.description = description
    Error.captureStackTrace(this)
  }
}
