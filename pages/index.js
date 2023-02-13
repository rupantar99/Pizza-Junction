import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Featured from '../components/featured'
import PizzaList from '../components/PizzaList'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>

      
          <Head>
            <title>Pizza Restaurant in New York</title>
            <meta name="description" content="Best pizza restaurant" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      
        <Featured/>
        <PizzaList/>
      
      
    </div>
    
  )
}
