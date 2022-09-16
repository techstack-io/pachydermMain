import TopNav from '../components/TopNav';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ToastContainer position='top-center' />
    <TopNav />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
