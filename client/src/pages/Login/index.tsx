import Logo from '@client/components/NavBar/Logo'
import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import Button from '@client/components/ui/Button'
import Form from '@client/components/ui/Form/Form'
import InputController from '@client/components/ui/Form/controllers/InputController'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import loginImg from '@client/assets/login2.jpg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Divider } from '@client/components/layout/Divider'
import Field from '@client/components/ui/Form/Field'
import { Message } from '@client/components/ui/Message'
import { AuthAPI2 } from '@client/services/apiV2'
import { useAppStore } from '@client/store'

interface LoginFormType {
  username: string
  password: string
}

const defaultValues: LoginFormType = {
  username: '',
  password: ''
}

export default function Login() {
  const { control, handleSubmit } = useForm<LoginFormType>({ mode: 'onChange', defaultValues })
  const { t } = useTranslation()
  const store = useAppStore()
  const [errors, setErrors] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(data: LoginFormType) {
    setSubmitting(true)
    if (errors.length) {
      setErrors([])
    }

    const [tokens, apiError] = await AuthAPI2.login(data)
    setSubmitting(false)
    if (apiError) {
      setErrors(apiError)
      return
    }

    const [user, userErrors] = await AuthAPI2.getUser()
    if (!userErrors) {
      store.setUser(user)
    }
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
