import { ILogger } from '../../../libs/services/interfaces/logger.interface'
import { App } from './app'

export class Server {
  private PORT: number = 3000
  constructor (private app: App, private logger: ILogger) {}

  public start () {
    return this.app.init().listen(this.PORT, () => {
      this.logger.info('Server running on PORT:', this.PORT)
    })
  }
}
