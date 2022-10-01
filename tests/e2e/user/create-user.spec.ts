import request from 'supertest'
import { CreateUserReqDto } from '../../../src/infraestructure/user/dto/requests/create-user.dto'
import { createUserReqMock } from '../../unit/dataset/user'
import { app } from '../bootstrap'

let api: request.SuperTest<request.Test>
describe('POST /api/users', () => {
  beforeAll(() => {
    api = request(app)
  })

  it('should create a user', async () => {
    const userReqMock: CreateUserReqDto = createUserReqMock()
    const response = await api.post('/api/users').send(userReqMock)
    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('item')
  })
})
