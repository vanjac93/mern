import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 8080
const MONGO_URL = process.env.MONGO_URL

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Testing is the best' })
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
