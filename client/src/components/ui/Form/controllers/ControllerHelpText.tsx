//ccomponent that renders  help text and error message

import { Typography } from '@client/components/layout/Typography'
import { FieldError } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const ControllerHelpText = ({ helpText, error }: { helpText?: string; error?: FieldError }) => {
  const { t } = useTranslation()
  const hideHelp = error?.message === helpText
  return (
    <>
      {helpText && !hideHelp && (
        <Typography color="textSecondary" fontSize="12px" mt="4px" px="4px">
          {helpText}
        </Typography>
      )}
      {error && (
        <Typography
          color="error"
          fontSize="12px"
          mt={!hideHelp && helpText ? '0px' : '4px'}
          px="4px"
        >
          {error.message || t('Please fill out this field.')}
        </Typography>
      )}
    </>
  )
}

export default ControllerHelpText
