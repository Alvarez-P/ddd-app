export class HttpError extends Error {
  public statusCode: number
  public body: object

  constructor (statusCode: number, body: object, ...params: any) {
    super(...params)
    Error.captureStackTrace(this, HttpError)
    this.name = 'HttpError'
    this.statusCode = statusCode
    this.body = body
  }
}
