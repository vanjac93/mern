import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import errorHandler from './util/errorHandler'
import postsRouter from './routes/postsRoutes'
import authRouter from './routes/authRoutes'
import cookieParser from 'cookie-parser'

const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 8080
const MONGO_URL = process.env.MONGO_URL

process.on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error)
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1)
  }
})

process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
  throw reason
})

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)
app.use(helmet())

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ message: 'Testing is the best' })
})

app.use('/auth', authRouter)

app.use('/posts', postsRouter)

// Error handler
app.use(async (err, req, res, next) => {
  if (!errorHandler.isTrustedError(err)) {
    next(err)
  }
  await errorHandler.handleError(err)

  res.status(err.code || 400).json({
    error: err
  })
})

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(port, host, () => {
      console.log(`[connected to DB and ready ] http://${host}:${port}`)
    })
  })
  .catch((err) => {
    console.log('cant ocnnect', err)
  })
