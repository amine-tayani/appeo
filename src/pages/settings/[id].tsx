import * as React from 'react'
import Head from 'next/head'
import requestIp from 'request-ip'
import geoip from 'geoip-lite'
import uaParser from 'ua-parser-js'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import Modal from '@/components/session/Modal'
import AuthNav from '@/components/navbar/AuthNav'
import LaptopIcon from '@/components/icons/LaptopIcon'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon'
import MacIcon from '@/components/icons/MacIcon'
import IosIcon from '@/components/icons/IosIcon'
import AndroidIcon from '@/components/icons/AndroidIcon'

enum SecUaPlatform {
  Windows = 'Windows',
  MacOS = 'MacOS',
  Linux = 'Linux',
  iOS = 'iOS',
  Android = 'Android',
  Other = 'Other',
}

const Profile = ({ country, deviceOS, ua, ip }) => {
  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const getDeviceOS = (sp: SecUaPlatform): React.ReactElement | null => {
    switch (sp) {
      case SecUaPlatform.Windows || SecUaPlatform.Linux:
        return <LaptopIcon />
      case SecUaPlatform.MacOS:
        return <MacIcon />
      case SecUaPlatform.iOS:
        return <IosIcon />
      case SecUaPlatform.Android:
        return <AndroidIcon />
      default:
        return null
    }
  }

  const [device_os] = React.useState(getDeviceOS(deviceOS?.replace(/"/g, '')))

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { oldPassword, newPassword, confirmPassword }
      setLoading(true)
      await fetch('/api/settings/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setLoading(false)
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Settings</title>
      </Head>
      <div className="min-h-screen bg-neutral-800">
        <AuthNav />
        <form onSubmit={submitData}>
          <div className="container flex max-w-screen-2xl justify-center">
            <div className=" w-1/3">
              <h1 className="mb-1 text-left text-2xl font-semibold text-neutral-100">
                Security & Login
              </h1>
              <p className="mb-10 text-sm text-neutral-400">
                Manage your setting
              </p>

              <div className="my-4 flex flex-col space-y-2">
                <label
                  className="text-sm text-neutral-400"
                  htmlFor="oldPassword"
                >
                  Old password
                </label>
                <input
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value)
                  }}
                  type="password"
                  id="oldPassword"
                  className="rounded-lg bg-neutral-700 py-2 pr-4 pl-6 text-sm text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="my-4 flex flex-col space-y-2">
                <label
                  className="text-sm text-neutral-400"
                  htmlFor="newPassword"
                >
                  New password
                </label>
                <input
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value)
                  }}
                  type="password"
                  id="newPassword"
                  className="rounded-lg bg-neutral-700 py-2 pr-4 pl-6 text-sm text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="my-4 flex flex-col space-y-2">
                <label
                  className="text-sm text-neutral-400"
                  htmlFor="confirmPassword"
                >
                  Confirm new password
                </label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  value={confirmPassword}
                  type="password"
                  id="confirmPassword"
                  className="rounded-lg bg-neutral-700 py-2 pr-4 pl-6 text-sm text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className=" rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-blue-500 focus:outline-none">
                {loading ? (
                  <>
                    <svg
                      className="mr-2 inline h-4 w-4 animate-spin text-gray-200 "
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    <span>loading</span>
                  </>
                ) : (
                  'update'
                )}
              </button>

              <div className="py-8 text-sm text-neutral-200">
                <p className="my-4 text-lg font-semibold">
                  Current active sessions
                </p>
                <div
                  onClick={() => setIsOpen(true)}
                  className="-mx-4 mb-2 flex select-none items-center justify-between rounded-xl p-4 hover:bg-neutral-700"
                >
                  <div className="flex space-x-4">
                    <div className="flex items-center rounded-full bg-neutral-700 p-2.5">
                      {device_os}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="">
                        {deviceOS?.replace(/"/g, '')} - {country.city || ''},{' '}
                        {country.country || ''}
                      </span>
                      <p className=" text-neutral-400">
                        {ua.name} -{' '}
                        <span className="text-green-400">Active now</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon h="22" w="22" sw={1.5} />
                  </div>
                </div>
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  data={{ country, ua, deviceOS, ip }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

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
  let ua = uaParser(context.req.headers['user-agent'])
  const deviceOS = context.req.headers['sec-ch-ua-platform']
  const ip =
    requestIp
      .getClientIp(context.req)
      .replace('::1', '')
      .replace('127.0.0.1', '') || '105.158.95.169'

  const country = geoip.lookup(ip)

  return {
    props: { country, deviceOS, ua: ua['browser'], ip },
  }
}

export default Profile
