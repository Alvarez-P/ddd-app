import { plainToInstance } from 'class-transformer'
import { UserBuilder } from '../../../domain/user/entity/user.builder'
import { User } from '../../../domain/user/entity/user.entity'
import { CreateUserReqDto } from '../../../infraestructure/user/dto/requests/create-user.dto'
import { UserResDto } from '../../../infraestructure/user/dto/responses/base-user.dto'
import { ICreateUserUseCase } from './interfaces/create-user.interface'

export class CreateUserUseCase implements ICreateUserUseCase {
  public async create (
    userDto: CreateUserReqDto,
    currentUserId: string,
    tenantId: string
  ): Promise<UserResDto> {
    const user: User = new UserBuilder()
      .username(userDto.username)
      .password(userDto.password)
      .email(userDto.email)
      .createdBy(currentUserId)
      .tenant(tenantId)
      .build()
    return plainToInstance(UserResDto, user)
  }
}
