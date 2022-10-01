import { ErrorHandler } from './error-handler.decorator'

export const ModuleErrorHandler = function (target: any) {
  for (const key of Object.getOwnPropertyNames(target.prototype)) {
    let descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)
    if (descriptor) {
      descriptor = ErrorHandler(key, descriptor)
      Object.defineProperty(target.prototype, key, descriptor)
    }
  }
}
