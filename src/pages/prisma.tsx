import * as React from 'react'
import { GetServerSideProps } from 'next'
import prisma from '@/lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  const accounts = await prisma.account.findMany({})
  return {
    props: { data: accounts },
  }
}

const PrismaPage = ({ data }) => {
  console.log(data)
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-800">
        <div className="flex w-full max-w-md flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center text-xl font-medium text-white sm:text-2xl">
            Prisma
          </div>
          <div className="mt-10 self-center text-white">
            <h1>{data[0].userId}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PrismaPage
