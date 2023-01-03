import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormLabel, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>C&G</Icon>
          <FormContent>
            <Form action='#'>
              <FormLabel htmlFor='for'>Usuario</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Contraseña</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Iniciar sesión </FormButton>
              <Text>¿Has olvidado la contraseña?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
