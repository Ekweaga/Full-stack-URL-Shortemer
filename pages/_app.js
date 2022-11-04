import '../styles/globals.css'
import Layout from './Components/Layout'
import { AuthProvider } from './Context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider> <Layout>
    
  <Component {...pageProps} />
 
    </Layout> </AuthProvider>
  )

}

export default MyApp
