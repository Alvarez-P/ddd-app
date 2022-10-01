import { Exclude } from 'class-transformer'

export class UserResDto {
  id!: string
  firstname!: string
  lastname!: string
  age!: number
  email!: string
  role!: string
  createdAt!: string
  updatedAt?: string
  tenant!: string
  createdBy!: string
  updatedBy!: string | null
  deletedBy!: string | null

  @Exclude() password!: string
  @Exclude() isActive!: boolean
  @Exclude() deletedAt!: string
}
