import * as React from 'react'
import { getSession } from 'next-auth/react'
import AuthNav from '@/components/navbar/AuthNav'
import ListContainer from '@/components/applications/ListContainer'
import { GetServerSideProps } from 'next'

const StatusPage = () => {
  return (
    <div className="min-h-screen bg-neutral-800">
      <AuthNav />
      <ListContainer />
    </div>
  )
}

export default StatusPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
