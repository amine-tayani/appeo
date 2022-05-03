import * as React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Sections from '@/components/Sections'
import CommentList from '@/components/comments/CommentList'
import Companies from '@/components/Companies'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

const IndexPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Features />
      <Sections />
      <CommentList />
      <Companies />
      <Pricing />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
