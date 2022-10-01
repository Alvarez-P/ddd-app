import { v4 as uuid } from 'uuid'
import { User } from '../../../src/domain/user/entity/user.entity'
import { CreateUserReqDto } from '../../../src/infraestructure/user/dto/requests/create-user.dto'

const createUserReqMockDefaults = (): CreateUserReqDto => ({
  username: 'Esteban',
  password: 'pass2022!',
  firstname: 'Esteban',
  lastname: 'Alvarez',
  age: 23,
  email: 'alvarez@mail.com'
})

export const createUserReqMock = (
  user?: Partial<CreateUserReqDto>
): CreateUserReqDto => ({
  ...createUserReqMockDefaults(),
  ...user
})

const now = new Date().toISOString()
const id = uuid()
const userMockDefaults = (): User => ({
  id: uuid(),
  username: 'Esteban',
  password: 'pass2022!',
  email: 'alvarez@mail.com',
  role: uuid(),
  tenant: uuid(),
  createdAt: now,
  updatedAt: null,
  createdBy: id,
  updatedBy: null,
  isActive: true,
  deletedBy: null,
  deletedAt: null
})

export const userMock = (user?: Partial<User>): User => ({
  ...userMockDefaults(),
  ...user
})
