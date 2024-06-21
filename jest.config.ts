import { getJestProjectsAsync } from '@nx/jest'
import type { Config } from 'jest'

const config: Config = {
  projects: await getJestProjectsAsync(),
  injectGlobals: true,
  watch: false
}

export default config
