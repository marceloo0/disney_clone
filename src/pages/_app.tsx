import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../contexts/AuthContext';
import { MoviesContextProvider } from '../contexts/MovieContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <AuthContextProvider>
      <MoviesContextProvider>
        <Component {...pageProps} />
      </MoviesContextProvider>
    </AuthContextProvider>
    </>
  )
}
export default MyApp
