import * as React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/landing/Header'
import Features from '@/components/landing/Features'
import Sections from '@/components/landing/Sections'
import CommentList from '@/components/landing/comments/CommentList'
import Companies from '@/components/landing/Companies'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Companies />
      <Features />
      <Sections />
      <CommentList />
      <Pricing />
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
