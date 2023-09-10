import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Layout/Navbar'
import Banner from '@/Components/Home/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Navbar/>
   <Banner/>
    </>
  )
}
