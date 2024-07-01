import { AuthAPI } from '~/services/api'
import { UserType } from '~/services/api/auth/types'
import { clearAccessToken } from '~/services/api/util'
import { StateCreator } from 'zustand/vanilla'

export interface AuthSliceType {
  user: UserType | null
  login: () => Promise<void>
  setUser: (user: UserType) => void
  logout: () => Promise<void>
}

export const createAuthSlice: StateCreator<AuthSliceType, [], [], AuthSliceType> = (set, get) => ({
  user: null,
  login: async () => {
    const [user] = await AuthAPI.getUser()
    set({ user })
  },
  logout: async () => {
    await AuthAPI.logout()
    clearAccessToken()
    set({ user: null })
  },
  setUser: (user) => set({ user })
})
