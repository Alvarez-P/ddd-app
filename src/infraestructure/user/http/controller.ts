import { route, GET, POST } from 'awilix-express'
import { Request, Response } from 'express'
import { CreateUserUseCase } from '../../../application/user/use-cases/create-user'
import { ModuleErrorHandler } from '../../../libs/decorators/module-error-handler.decorator'
import { ToolsService } from '../../../libs/services/tools'
import { CreateUserReqDto } from '../dto/requests/create-user.dto'

@route('/users')
@ModuleErrorHandler
export default class UserController {
  constructor (private toolsService: ToolsService, private createUserUseCase: CreateUserUseCase) {}

  @POST()
  async createUser (request: Request, response: Response) {
    const userDto = await this.toolsService.validator(
      new CreateUserReqDto(request.body)
    )
    const user = await this.createUserUseCase.create(userDto, '', '')
    return response.status(201).send({ message: 'Created', item: user })
  }

  @GET()
  async getUser (_request: Request, response: Response) {
    return response.send({ message: 'Success', users: 'Users' })
  }
}
