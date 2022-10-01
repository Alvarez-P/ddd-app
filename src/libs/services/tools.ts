import { IToolsService } from './interfaces/tools.interface'
import { validateOrReject } from 'class-validator'
import { HttpError } from '../exceptions/http-error.exception'
import { ErrorCodes } from '../constants/http-errors.enums'

export class ToolsService implements IToolsService {
  async validator<T extends object> (value: T): Promise<T> {
    try {
      await validateOrReject(value, {
        stopAtFirstError: true,
        validationError: {
          target: false
        }
      })
      return value
    } catch (error) {
      throw new HttpError(400, {
        code: ErrorCodes.VALIDATION_ERROR,
        details: error
      })
    }
  }
}
