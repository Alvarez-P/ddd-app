import { Response } from 'express'
import { HttpError } from '../exceptions/http-error.exception'

const DEFAULT_ERROR = {
  STATUS: 500,
  BODY: {
    message: 'Internal server error'
  }
}
export const ErrorHandler = (
  _propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const sourceMethod: Function = descriptor.value
  descriptor.value = async function (...args: any[]): Promise<void> {
    const response: Response = args[1]
    try {
      await sourceMethod.apply(this, args)
    } catch (error: any) {
      if (error instanceof HttpError) { response.status(error.statusCode).send(error.body) } else response.status(DEFAULT_ERROR.STATUS).send(DEFAULT_ERROR.BODY)
    }
  }
  return descriptor
}
