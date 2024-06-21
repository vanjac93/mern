import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
// import { handlers } from './handlers';

const handlers = [
  http.get('/test', () => {
    return HttpResponse.json(
      {
        message: 'cool'
      },
      { status: 200 }
    )
  })
]

const server = setupServer(...handlers)

export default server
