import { FieldValues, useController } from 'react-hook-form'

import Field from '@client/components/ui/Form/Field'
import Input from '@client/components/ui/Form/Input'
import { Box } from '@client/components/layout/Box'
import Label from '../Label'
import { FormControllerProps } from './types'
import ControllerHelpText from './ControllerHelpText'

const InputController = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  disabled,
  type = 'text',
  placeholder,
  helpText,
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
      <ControllerHelpText helpText={helpText} error={error} />
    </Field>
  )
}

export default InputController
