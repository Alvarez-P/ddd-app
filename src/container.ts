import { createContainer, asClass, asValue, InjectionMode } from 'awilix'
import { App } from './infraestructure/common/http/app'
import { Server } from './infraestructure/common/http/server'
import { ToolsService } from './libs/services/tools'
import { Logger } from './libs/services/logger'
import { CreateUserUseCase } from './application/user/use-cases/create-user'

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
}).register({
  toolsService: asClass(ToolsService).singleton(),
  app: asClass(App).singleton(),
  server: asClass(Server).singleton(),
  logger: asValue(new Logger('Server')),
  createUserUseCase: asClass(CreateUserUseCase)
})
