import { Flex } from '@client/components/layout/Box'
import styled from 'styled-components'
import loginImg from '@client/assets/login2.jpg'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '@client/components/NavBar/Logo'
import Form from '@client/components/ui/Form/Form'
import InputController from '@client/components/ui/Form/controllers/InputController'
import Button from '@client/components/ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { PASS_HELP_TEXT, UserSchema, signupDefaultValues } from './util'
import { SignupFormType } from './types'

export default function Signup() {
  const { control, handleSubmit } = useForm<SignupFormType>({
    mode: 'onChange',
    defaultValues: signupDefaultValues,
    resolver: zodResolver(UserSchema)
  })
  const { t } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(data: SignupFormType) {
    console.log('data', data)
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      navigate('/login')
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
            name="email"
            label={t('Email')}
            placeholder={t('Enter email')}
          />
          <InputController
            control={control}
            name="username"
            label={t('Username')}
            placeholder={t('Enter username')}
          />
          <InputController
            type="password"
            control={control}
            name="password"
            label={t('Password')}
            helpText={PASS_HELP_TEXT}
            placeholder={t('Enter email')}
          />
          <Flex justifyContent="space-around">
            <Button type="submit" text={t('Submit')} loading />
          </Flex>
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
