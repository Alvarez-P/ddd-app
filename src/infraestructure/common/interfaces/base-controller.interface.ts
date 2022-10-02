import { Router } from 'express'

export interface BaseController {
  /**
   * @description Module routes
   * @return Router
   * @memberof BaseController
   */
  routes(): Router
}
