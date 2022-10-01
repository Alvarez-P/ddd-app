import { plainToClass } from 'class-transformer'
import { User } from './user.entity'
import { v4 as uuid } from 'uuid'

export class UserBuilder {
  readonly #user: User

  constructor (user?: User) {
    this.#user = user
      ? plainToClass(User, { ...user })
      : new User(
        uuid(),
        '',
        '',
        '',
        '',
        '',
        true,
        new Date().toISOString(),
        null,
        null,
        null,
        null,
        null
      )
  }

  id (id: string): UserBuilder {
    this.#user.id = id
    return this
  }

  tenant (tenant: string): UserBuilder {
    this.#user.tenant = tenant
    return this
  }

  username (username: string): UserBuilder {
    this.#user.username = username
    return this
  }

  email (email: string): UserBuilder {
    this.#user.email = email
    return this
  }

  password (password: string): UserBuilder {
    this.#user.password = password
    return this
  }

  roleId (roleId: string): UserBuilder {
    this.#user.role = roleId
    return this
  }

  isActive (isActive: boolean): UserBuilder {
    this.#user.isActive = isActive
    return this
  }

  createdAt (createdAt: string): UserBuilder {
    this.#user.createdAt = createdAt
    return this
  }

  updatedAt (updatedAt: string | null): UserBuilder {
    this.#user.updatedAt = updatedAt
    return this
  }

  deletedAt (deletedAt: string | null): UserBuilder {
    this.#user.deletedAt = deletedAt
    return this
  }

  createdBy (createdBy: string): UserBuilder {
    this.#user.createdBy = createdBy
    return this
  }

  deletedBy (deletedBy: string | null): UserBuilder {
    this.#user.deletedBy = deletedBy
    return this
  }

  updatedBy (updatedBy: string | null): UserBuilder {
    this.#user.updatedBy = updatedBy
    return this
  }

  build (): User {
    return new User(
      this.#user.id,
      this.#user.username,
      this.#user.email,
      this.#user.password,
      this.#user.role,
      this.#user.tenant,
      this.#user.isActive,
      this.#user.createdAt,
      this.#user.updatedAt,
      this.#user.deletedAt,
      this.#user.createdBy,
      this.#user.updatedBy,
      this.#user.deletedBy
    )
  }
}
