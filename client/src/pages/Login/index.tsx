import Logo from '~/components/NavBar/Logo'
import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import Button from '~/components/ui/Button'
import Form from '~/components/ui/Form/Form'
import InputController from '~/components/ui/Form/controllers/InputController'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import loginImg from '~/assets/login2.jpg'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Divider } from '~/components/layout/Divider'
import Field from '~/components/ui/Form/Field'
import { Message } from '~/components/ui/Message'
import { useAppStore } from '~/store'
import { AuthAPI } from '~/services/api'

interface LoginFormType {
  username: string
  password: string
}

const defaultValues: LoginFormType = {
  username: '',
  password: ''
}

export default function Login() {
  const { user, login } = useAppStore()
  const { control, handleSubmit } = useForm<LoginFormType>({ mode: 'onChange', defaultValues })
  const { t } = useTranslation()
  const [errors, setErrors] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(data: LoginFormType) {
    setSubmitting(true)
    if (errors.length) {
      setErrors([])
    }

    const [_, apiErrors] = await AuthAPI.login(data)
    setSubmitting(false)
    if (apiErrors.length) {
      setErrors(apiErrors)
      return
    }

    await login()
  }

  if (user) {
    return <Navigate to="/" />
  }

  return (
    <Container>
      <StyledImg src={loginImg} />
      <StyledFormContainer>
        <Logo />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.length > 0 && (
            <Field>
              <Message title={t('Error')} type="error" message={errors} />
            </Field>
          )}
          <InputController
            control={control}
            placeholder={t('Enter username')}
            name="username"
            label={t('Username')}
          />
          <InputController
            style={{ marginBottom: '0 !important' }}
            control={control}
            type="password"
            placeholder={t('Enter password')}
            name="password"
            label={t('Password')}
          />
          <Flex m="16px 0 8px 0">
            <Button text={t('Login')} style={{ flex: 1 }} loading={submitting} type="submit" />
          </Flex>
          <Typography textAlign="center">{t('Forgot password')}</Typography>
          <Divider />
          <Typography textAlign="center">
            {t("Don't have an account?")}
            &nbsp;
            <Link to="/signup">{t('Sign up.')}</Link>
          </Typography>
        </Form>
      </StyledFormContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`

const StyledFormContainer = styled(Flex)`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 20px;
  align-items: center;
  padding: 2rem;

  form {
    width: 250px;
  }
`

const StyledImg = styled.img`
  flex: 1;
  background-color: aliceblue;
`
