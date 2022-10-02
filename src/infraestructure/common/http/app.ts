import 'reflect-metadata'
import express, { Router } from 'express'
import cors from 'cors'
import { container } from '../../../container'
import UserController from '../../user/http/controller'
import DocsController from '../../docs/http/controller'

export class App {
  public init (): express.Application {
    const router = Router()
    const userController = container.resolve<UserController>('userController')
    const docsController = container.resolve<DocsController>('docsController')
    router.use('/users', userController.routes())
    router.use('/docs', docsController.routes())
    const app: express.Application = express()
    app.use(cors())
    app.use(express.json())
    app.use('/api', router)
    return app
  }
}
