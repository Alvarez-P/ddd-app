import { route, GET, before } from 'awilix-express'
import { Request, Response } from 'express'
import redocExpressMiddleware from 'redoc-express'

@route('/docs')
export default class UserController {
  @route('/swagger.json')
  @GET()
  async serveSwaggerFile (_request: Request, response: Response) {
    response.sendFile('/docs/swagger.json', { root: process.cwd() })
  }

  @GET()
  @before([
    redocExpressMiddleware({
      title: 'API Docs',
      specUrl: '/api/docs/swagger.json'
    })
  ])
  async serveRedoc (_request: Request, _response: Response) {}
}
