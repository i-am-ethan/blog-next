import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import Container from '@/components/container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Hero
      title="CUBE"
      subtitle="アウトプットしていくサイト"
      imageOn
       />
    </Container>
  )
}
