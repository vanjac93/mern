import { ZodType, z } from 'zod'
import { SignupFormType } from './types'
import i18n from '~/services/i18n/i18n'

export const signupDefaultValues: SignupFormType = {
  username: '',
  email: '',
  password: ''
}

export const PASS_HELP_TEXT = i18n.t('Password must be at least 8 characters long.')

export const UserSchema: ZodType<SignupFormType> = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(8, { message: PASS_HELP_TEXT }),
  username: z
    .string()
    .trim()
    .min(5, { message: i18n.t('Username must be at least 8 characters long.') })
})
