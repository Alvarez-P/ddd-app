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

  async createUser ({ body }: Request) {
    const userDto = await this.toolsService.validator(
      new CreateUserReqDto(body)
    )
    const user = await this.userService.create(userDto, '', '')
    return { message: 'Created', item: user }
  }

  getUser () {
    return { message: 'Success', users: 'Users' }
  }

  routes () {
    this.router.post('/', async (req: Request, res: Response) =>
      res.status(201).send(await this.createUser(req))
    )
    this.router.get('/', (_req: Request, res: Response) =>
      res.send(this.getUser())
    )
    return this.router
  }
}
