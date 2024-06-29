import { UserType } from '@client/services/apiV2/auth/types'
import { createWithEqualityFn } from 'zustand/traditional'

interface AppStoreType {
  user?: UserType
  setUser: (user?: UserType) => void
}

export const useAppStore = createWithEqualityFn<AppStoreType>((set, get) => ({
  setUser: (user) => set({ user })
}))
