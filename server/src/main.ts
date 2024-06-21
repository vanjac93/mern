import express from 'express'
import cors from 'cors'

const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 8080

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Vanjass sAPI' })
})

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`)
})
