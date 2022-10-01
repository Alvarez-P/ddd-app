import { container } from '../../src/container'
import { App } from '../../src/infraestructure/common/http/app'

export const app = container.resolve<App>('app').init()
