import * as React from 'react'
import { signIn } from 'next-auth/react'
import AppeoIcon from '@/components/icons/AppeoIcon'
import GoogleIcon from '@/components/icons/GoogleIcon'

const SignupPage = () => {
  const handleSignUpWithGoogleAction = (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    signIn('google', {
      callbackUrl: `${window.location.origin}/welcome`,
    })
  }

  const handleSignUpWithLinkedInAction = (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    signIn('linkedin', {
      callbackUrl: `${window.location.origin}/welcome`,
    })
  }
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-800">
        <div className="flex w-full max-w-md flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
          <AppeoIcon />
          <div className="self-center text-xl font-medium text-white sm:text-2xl">
            Create your Appeo account
          </div>
          <div className="mt-10">
            <div className="mb-6 flex flex-col">
              <button
                onClick={handleSignUpWithGoogleAction}
                type="button"
                className="block w-full rounded-lg bg-neutral-100 px-4 py-3 font-medium text-neutral-600"
              >
                <div className="flex items-center justify-center">
                  <GoogleIcon width="25" />
                  <span className="ml-3">Continue with Google</span>
                </div>
              </button>
            </div>
            <div className="mb-6 flex flex-col">
              <button
                onClick={handleSignUpWithLinkedInAction}
                type="button"
                className="block w-full rounded-lg bg-blue-700 px-4 py-3 font-medium text-white hover:bg-blue-600 focus:bg-blue-500"
              >
                Continue with Linkedin
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignupPage
