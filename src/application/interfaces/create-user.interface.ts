import { CreateUserReqDto } from '../../infraestructure/user/dto/requests/create-user.dto'
import { UserResDto } from '../../infraestructure/user/dto/responses/base-user.dto'

export interface IUserService {
  /**
   * @description Creates a user
   * @param  {CreateUserReqDto} userDto
   * @param  {string} currentUserId Session user id
   * @param  {string} tenantId Tenant user id
   * @return Promise<CreateClientResDto>
   * @memberof CreateClientService
   */
  create(
    userDto: CreateUserReqDto,
    currentUserId: string,
    tenantId: string
  ): Promise<UserResDto>
}
