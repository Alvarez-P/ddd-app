export interface IToolsService {
  validator<T extends object>(value: T): Promise<T>
}
