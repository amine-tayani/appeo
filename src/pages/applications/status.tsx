import * as React from 'react'
import AuthNav from '@/components/navbar/AuthNav'
import ListContainer from '@/components/applications/ListContainer'

const StatusPage = () => {
  return (
    <div className="min-h-screen bg-neutral-800">
      <AuthNav />
      <ListContainer />
    </div>
  )
}

export default StatusPage
