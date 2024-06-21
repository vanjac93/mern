import '@testing-library/jest-dom'

import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import '@testing-library/jest-dom'
import server from './mocks/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  cleanup()
  server.restoreHandlers()
})

afterAll(() => {
  server.close()
})
