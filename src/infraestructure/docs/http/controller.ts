import { Request, Response, Router } from 'express'
import redoc from 'redoc-express'
import { BaseController } from '../../common/interfaces/base-controller.interface'

export default class DocsController implements BaseController {
  private router: Router
  constructor () {
    this.router = Router()
  }

  routes () {
    const redocOptions = {
      title: 'API Docs',
      specUrl: '/api/docs/swagger.json'
    }
    this.router.get('/swagger.json', (_req: Request, res: Response) =>
      res.sendFile('/docs/swagger.json', { root: process.cwd() })
    )
    this.router.get('/', redoc(redocOptions))
    return this.router
  }
}
