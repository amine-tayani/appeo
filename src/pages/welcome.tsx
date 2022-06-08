import * as React from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'

const WelcomePage = () => {
  const { data: session } = useSession()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { username, password }
      setLoading(true)
      await fetch('/api/profile/create', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setLoading(false)
      Router.push('/applications')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-800">
        <form onSubmit={submitData}>
          <div className="flex w-full max-w-md flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
            <h1 className="text-center text-xl font-semibold text-white sm:text-2xl">
              Welcome {session?.user?.name}
            </h1>
            <p className="mt-2 text-center text-neutral-400">
              First things first, tell us a bit about yourself
            </p>
            <div className="mt-8 mb-3 flex justify-center">
              <img
                src={session?.user?.image}
                width={70}
                height={70}
                alt="profile avatar"
                className="rounded-full"
              />
            </div>
            <div className="my-2 flex flex-col space-y-2">
              <label className="text-sm text-neutral-400" htmlFor="username">
                What should we call you?
              </label>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                id="username"
                className="rounded-lg bg-neutral-700 py-2 pl-6 text-sm text-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-blue-500"
                placeholder="Username"
              />
            </div>
            <div className="my-2 flex flex-col space-y-2">
              <label className="text-sm text-neutral-400" htmlFor="password">
                Set a password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                id="password"
                className="rounded-lg bg-neutral-700 py-2 pr-4 pl-6 text-sm text-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-blue-500"
                placeholder="New password"
              />
            </div>

            <div className="mt-4">
              <p className="text-xs text-neutral-400">
                You're creating an account for
                <span className="text-neutral-100">
                  {' '}
                  {session?.user?.email}
                </span>
              </p>
            </div>
            <button
              type="submit"
              disabled={!password || !username}
              className="mt-8 rounded-lg bg-blue-700 px-4 py-3 text-center font-medium text-white hover:bg-blue-600 focus:bg-blue-500 disabled:opacity-70 disabled:hover:bg-blue-700"
            >
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
                'Create your account'
              )}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default WelcomePage
