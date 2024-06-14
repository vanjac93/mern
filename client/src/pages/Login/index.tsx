import Button from '@client/components/ui/Button'
import Form from '@client/components/ui/Form/Form'
import InputController from '@client/components/ui/Form/controllers/InputController'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

interface LoginFormType {
  username: string
  password: string
}

const defaultValues: LoginFormType = {
  username: '',
  password: ''
}

export default function Login() {
  const { control, handleSubmit } = useForm<LoginFormType>({ mode: 'onSubmit', defaultValues })
  const { t } = useTranslation()

  async function onSubmit(data: LoginFormType) {
    console.log('data', data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputController control={control} name="username" label={t('Username')} />
        <InputController control={control} name="password" label={t('Password')} />
        <Button type="submit">{t('Submit')}</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const StyledFormContainer = styled.div``
