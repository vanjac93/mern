import { RequestHandler } from 'express'

export const postGetHandler: RequestHandler = (req, res, next) => {
  res.json([
    {
      id: 1,
      text: 'first'
    },
    {
      id: 2,
      text: 'second'
    }
  ])
}
