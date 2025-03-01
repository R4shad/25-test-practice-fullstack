import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

export class App {
  app: express.Application
  port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'
    // Middlewares
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(morgan('dev'))

    this.startServer()
  }

  private startServer() {
    this.app.listen(this.port, () => {
      console.log('Server running on port ' + this.port + '/api')
    })
  }
}
