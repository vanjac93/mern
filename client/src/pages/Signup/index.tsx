import { Box, Flex } from '@client/components/layout/Box'
import styled from 'styled-components'
import loginImg from '@client/assets/login2.jpg'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '@client/components/NavBar/Logo'
import Form from '@client/components/ui/Form/Form'
import InputController from '@client/components/ui/Form/controllers/InputController'
import Button from '@client/components/ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { PASS_HELP_TEXT, UserSchema, signupDefaultValues } from './util'
import { SignupFormType } from './types'
import { Message } from '@client/components/ui/Message'
// import { AuthAPI } from '@client/services/api'
import Field from '@client/components/ui/Form/Field'
import { AuthAPI2 } from '@client/services/apiV2'

export default function Signup() {
  const { control, handleSubmit } = useForm<SignupFormType>({
    mode: 'onSubmit',
    defaultValues: signupDefaultValues,
    resolver: zodResolver(UserSchema)
  })
  const { t } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  async function onSubmit(data: SignupFormType) {
    setSubmitting(true)
    if (errors.length) {
      setErrors([])
    }

    const apiData = await AuthAPI2.signup(data)
    console.log('signup data', apiData)
    // if (apiErrors.length) {
    //   setErrors(apiErrors)
    // } else {
    //   setDone(true)
    // }
    // setSubmitting(false)
  }

  function renderDone() {
    return (
      <Box>
        <Message type="success" title={t('Account created!')} message={t('Ready to go.')}></Message>
        <Button style={{ marginTop: 16 }} as={Link} to="/login" text={t('Login')} />
      </Box>
    )
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          {errors.length > 0 && <Message title={'Error'} type="error" message={errors} />}
        </Field>
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
          <Button type="submit" text={t('Submit')} loading={submitting} />
        </Flex>
      </Form>
    )
  }
  return (
    <Container>
      <StyledImg src={loginImg} />
      <StyledFormContainer>
        <Logo />
        {done ? renderDone() : renderForm()}
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
