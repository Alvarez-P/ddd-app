import { createContainer, asClass, asValue, InjectionMode } from 'awilix'
import { App } from './infraestructure/common/http/app'
import { Server } from './infraestructure/common/http/server'
import { ToolsService } from './libs/services/tools'
import { Logger } from './libs/services/logger'
import UserController from './infraestructure/user/http/controller'
import DocsController from './infraestructure/docs/http/controller'
import { UserService } from './application/user.service'

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
}).register({
  toolsService: asClass(ToolsService).singleton(),
  app: asClass(App).singleton(),
  server: asClass(Server).singleton(),
  logger: asValue(new Logger('Server')),
  userService: asClass(UserService),
  userController: asClass(UserController),
  docsController: asClass(DocsController)
})
