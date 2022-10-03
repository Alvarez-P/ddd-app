import { Request, Response, Router } from 'express'
import { UserService } from '../../../application/user.service'
import { ToolsService } from '../../../libs/services/tools'
import { BaseController } from '../../common/interfaces/base-controller.interface'
import { CreateUserReqDto } from '../dto/requests/create-user.dto'

export default class UserController implements BaseController {
  private router: Router
  constructor (
    private toolsService: ToolsService,
    private userService: UserService
  ) {
    this.router = Router()
  }

  async createUser ({ body }: Request, response: Response) {
    const userDto = await this.toolsService.validator(
      new CreateUserReqDto(body)
    )
    const user = await this.userService.create(userDto, '', '')
    return response.status(201).send({ message: 'Created', item: user })
  }

  getUser (_request: Request, response: Response) {
    return response.send({ message: 'Success', users: 'Users' })
  }

  routes () {
    this.router.post('/', this.createUser.bind(this))
    this.router.get('/', this.getUser.bind(this))
    return this.router
  }
}
