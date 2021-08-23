import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../hooks/useAuth'
import { ButtonWithIcon } from '../components'
import { Container, Content, Section, Title, Description, Footer, AccessSection, Background } from '../styles/pages/home'

const Home: NextPage = () => {
  const { signout, signinGoogle, loading } = useAuth()
  // async function handleGoogle() {
  //   await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
  // }
  console.log(loading)
  return (
    <Container>
      <Content>
        <Section>
          <Image src='/logo.svg' alt='logo' width={250} height={130} />
          <Title>As melhores historias em um só lugar.</Title>
          <Description>Faça seu login de forma fácil e tenha acesso a todo o conteudo que o Disney Plus oferece.</Description>
          <AccessSection>
            <ButtonWithIcon 
              onClick={signinGoogle} 
              name='/images/google.png' 
              backgroundColor='#FFFFFF'
              size='large'
              loading={loading}
            >Acessar com GOOGLE</ButtonWithIcon>
          </AccessSection>
          <Footer>
            <Image src='/images/cta-logo-two.png' alt='cta' width={400} height={25} />
          </Footer>
        </Section>
        <Background />
      </Content>
    </Container>
  )
}

export default Home
