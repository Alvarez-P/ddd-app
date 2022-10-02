import { v4 as uuid } from 'uuid'
import { UserService } from '../../../src/application/user.service'
import { User } from '../../../src/domain/user/entity/user.entity'
import { CreateUserReqDto } from '../../../src/infraestructure/user/dto/requests/create-user.dto'
import { createUserReqMock, userMock } from '../dataset/user'

describe('Testing CreateUserUseCase service', () => {
  const sut = new UserService()
  it('should create a user', async () => {
    const userReqMock: CreateUserReqDto = createUserReqMock()
    const tenantId = uuid()
    const cuurrentUserMock: User = userMock({ tenant: tenantId })
    const response = await sut.create(
      userReqMock,
      cuurrentUserMock.id,
      cuurrentUserMock.tenant
    )
    expect(response).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        role: expect.any(String),
        tenant: expect.any(String),
        createdAt: expect.any(String)
      })
    )
    expect(response).not.toHaveProperty('password')
    expect(response).not.toHaveProperty('isActive')
    expect(response.tenant).toEqual(tenantId)
  })
})
