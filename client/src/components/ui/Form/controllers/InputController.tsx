import { FieldValues, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Field from '@client/components/ui/Form/Field'
import Input from '@client/components/ui/Form/Input'
import { Box } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import Label from '../Label'
import { FormControllerProps } from './types'

const InputController = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  disabled,
  type = 'text',
  placeholder,
  icon
}: FormControllerProps<T, HTMLInputElement>) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: rules
  })
  const { t } = useTranslation()
  return (
    <Field aria-disabled={disabled}>
      {label && <Label>{label}</Label>}
      <Box position={'relative'}>
        <Input
          disabled={disabled}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          ref={field.ref}
          type={type}
          placeholder={placeholder}
        />
        {icon && icon}
      </Box>
      {error && (
        <Typography color="admin.secondaryAlt" fontSize="12px" mt="4px" pl="4px">
          {error.message || t('Please fill out this field.')}
        </Typography>
      )}
    </Field>
  )
}

export default InputController
