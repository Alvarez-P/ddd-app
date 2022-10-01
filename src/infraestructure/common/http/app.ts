import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { container } from '../../../container'
import { loadControllers, scopePerRequest } from 'awilix-express'

export class App {
  public init (): express.Application {
    const CONTROLLERS_PATH = 'src/infraestructure/*/http/controller.ts'
    const app: express.Application = express()
    app.use(cors())
    app.use(express.json())
    app.use(scopePerRequest(container))
    app.use('/api', loadControllers(CONTROLLERS_PATH, { cwd: process.cwd() }))
    return app
  }
}
