import type { NextPage } from 'next'
import { Container, LoadingContainer } from '../styles/pages/dashboard'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import Router from 'next/router';
import { Header, Trending, Sliders, CardsTop, Recommends, NewDisney, Originals, Loading } from '../components'
import { database, db } from "../services/firebase";

const Dashboard: NextPage = () => {
  const [isColorBlack, setIsColorBlack] = useState(false)
  const { loading } = useAuth()

  useEffect(()=>{
    const scrollListener = () =>{
        if(window.scrollY > 10){
          setIsColorBlack(prevState => !prevState);
        }
    }
    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <Container>
      <Header colorBlack='#1A1D29' />
      {loading ? 
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
      : 
        <>
          <Sliders />
          <CardsTop />
          <Recommends />
          <NewDisney />
          <Originals />
          <Trending />
        </>
      }
    </Container>
  )
}

export default Dashboard
