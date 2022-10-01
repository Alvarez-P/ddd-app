import {
  IsInt,
  Length,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive
} from 'class-validator'

export class CreateUserReqDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  public username!: string

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  public firstname!: string

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  public lastname!: string

  @IsNumber()
  @IsInt()
  @IsPositive()
  public age!: number

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email!: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  public password!: string

  constructor (partial?: Partial<CreateUserReqDto>) {
    Object.assign(this, partial)
  }
}
