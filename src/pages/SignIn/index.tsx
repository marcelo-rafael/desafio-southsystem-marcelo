import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer } from './styles';

const SignIn: React.FC = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const history = useHistory()

  const user = {
    email: 'email@teste.com',
    password: '123456'
  }

  const handleSubmit = () => {
    if (email === user.email && password === user.password) {
      localStorage.clear()
      localStorage.setItem("@FakeToken", "FakeToken")
      history.push('/dashboard')
    } else {
      console.log('erro ao logar')
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              name="email"
              icon={FiMail}
              placeholder="email@teste.com"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)} />

            <Input
            name="password"
            icon={FiLock}
            placeholder="123456"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)} />

            <Button type="submit">Entrar</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignIn
