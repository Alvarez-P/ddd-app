import { ILogger } from './interfaces/logger.interface'
import { Logger as LogProvider } from 'tslog'

export class Logger implements ILogger {
  private logger: LogProvider

  constructor (name?: string) {
    this.logger = new LogProvider({
      displayInstanceName: true,
      displayFilePath: 'hidden',
      displayFunctionName: false,
      name,
      logLevelsColors: {
        0: 'dim',
        1: 'white',
        2: 'blue',
        3: 'green',
        4: 'yellow',
        5: 'red',
        6: 'red'
      },
      dateTimeTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    })
  }

  public info (...args: unknown[]) {
    this.logger.info(...args)
  }

  public error (...args: unknown[]) {
    this.logger.error(...args)
  }

  public warn (...args: unknown[]) {
    this.logger.warn(...args)
  }

  public trace (...args: unknown[]) {
    this.logger.trace(...args)
  }

  public debug (...args: unknown[]) {
    this.logger.debug(...args)
  }
}
