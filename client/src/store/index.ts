import { createWithEqualityFn } from 'zustand/traditional'
import { AuthSliceType, createAuthSlice } from './authSlice'

type AppStoreType = AuthSliceType

export const useAppStore = createWithEqualityFn<AppStoreType>((...a) => ({
  ...createAuthSlice(...a)
}))
