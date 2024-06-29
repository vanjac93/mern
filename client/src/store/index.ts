import { UserType } from '@client/services/api/auth/types'
import { createWithEqualityFn } from 'zustand/traditional'

interface AppStoreType {
  user?: UserType
  setUser: (user?: UserType) => void
}

export const useAppStore = createWithEqualityFn<AppStoreType>((set, get) => ({
  setUser: (user) => set({ user })
}))
