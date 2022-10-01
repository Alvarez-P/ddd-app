import { container } from './container'
import { Server } from './infraestructure/common/http/server'

const server = container.resolve<Server>('server')
server.start()
