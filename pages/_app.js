import { CitiesWrapp } from '../Context/ContextCities'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

 <CitiesWrapp><Component {...pageProps} /></CitiesWrapp>

  )
}

export default MyApp
