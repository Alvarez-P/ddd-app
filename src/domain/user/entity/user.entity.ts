export class User {
  constructor (
    public id: string,
    public username: string,
    public email: string,
    public password: string,
    public role: string,
    public tenant: string,
    public isActive: boolean,
    public createdAt: string,
    public updatedAt: string | null,
    public deletedAt: string | null,
    public createdBy: string | null,
    public updatedBy: string | null,
    public deletedBy: string | null
  ) {}
}
