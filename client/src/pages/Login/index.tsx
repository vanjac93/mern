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
import Field from '@client/components/ui/Form/Field'
import { Divider } from '@client/components/layout/Divider'

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
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(data: LoginFormType) {
    console.log('data', data)
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      navigate('/')
    }, 2000)
  }

  return (
    <Container>
      <StyledImg src={loginImg} />
      <StyledFormContainer>
        <Logo />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputController
            control={control}
            placeholder={t('Enter username')}
            name="username"
            label={t('Username')}
          />
          <InputController
            style={{ marginBottom: '0 !important' }}
            control={control}
            placeholder={t('Enter password')}
            name="password"
            label={t('Password')}
          />
          <Flex mb="16px">
            <Button style={{ flex: 1 }} loading={submitting} positive type="submit">
              {t('Submit')}
            </Button>
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
