import * as React from 'react'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  const handleSignInWithGoogleAction = (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    signIn('google', {
      callbackUrl: `${window.location.origin}/applications`,
    })
  }

  const handleSignInWithLinkedinAction = (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    signIn('linkedin', {
      callbackUrl: `${window.location.origin}/applications`,
    })
  }
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-800">
        <div className="flex w-full max-w-md flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
          <svg
            className="my-4 self-center"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.031 28.4765C23.4992 23.7239 34.5669 23.1815 39.4745 23.5689C22.4601 23.0824 18.8757 50.4312 23.4604 63.0875C27.3897 73.9347 36.4718 77.2999 38.5705 79.4891C12.0697 78.7142 2.21593 57.6849 0.601607 47.2672C-0.366987 42.9838 0.562863 33.229 12.031 28.4765Z"
              fill="#2F83BC"
            />
            <path
              d="M62.3978 54.1767C59.4016 52.2654 52.7119 51.9597 49.7415 52.0458C29.6938 61.3909 24.0151 45.5229 23.7832 36.5483C15.639 63.422 30.0505 76.9368 38.5058 79.5539C54.9332 80.5871 66.5304 70.5137 70.082 65.477C70.2757 59.0197 66.143 56.5659 62.3978 54.1767Z"
              fill="#3B5999"
            />
            <path
              d="M42.9618 23.7628C58.8467 14.0769 49.3545 1.61432 41.7995 0C4.81216 1.39477 -1.33519 30.2847 0.214563 44.5553C1.76431 25.4934 29.3584 22.7942 42.9618 23.7628Z"
              fill="#41C1F0"
            />
            <path
              d="M48.7727 52.3687C31.1008 47.0096 37.367 28.1466 49.4185 27.7018H73.6333C75.4337 27.5929 75.2945 27.241 78.8637 31.4471C82.0227 35.1699 78.4629 60.8479 69.8235 65.7999C69.6943 60.5695 65.4067 50.9223 48.7727 52.3687Z"
              fill="#3971B7"
            />
          </svg>

          <div className="self-center text-xl font-medium text-white sm:text-2xl">
            Login to Appeo
          </div>

          <div className="mt-10">
            <div className="mb-6 flex flex-col">
              <button
                onClick={handleSignInWithGoogleAction}
                type="button"
                className="block w-full rounded-lg bg-neutral-100 px-4 py-3 font-medium text-neutral-600"
              >
                <div className="flex items-center justify-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.1603 13.1287C25.1603 12.2563 25.0895 11.3792 24.9385 10.521H12.8339V15.4629H19.7657C19.478 17.0567 18.5538 18.4667 17.2004 19.3625V22.5691H21.3359C23.7645 20.3339 25.1603 17.0331 25.1603 13.1287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.8342 25.6676C16.2954 25.6676 19.2144 24.5311 21.341 22.5694L17.2055 19.3629C16.0549 20.1457 14.5695 20.589 12.8389 20.589C9.49093 20.589 6.65219 18.3302 5.63364 15.2935H1.36609V18.599C3.54467 22.9327 7.98197 25.6676 12.8342 25.6676Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.62796 15.2934C5.09039 13.6995 5.09039 11.9736 5.62796 10.3798V7.07422H1.36514C-0.455048 10.7005 -0.455048 14.9727 1.36514 18.5989L5.62796 15.2934Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.8342 5.07947C14.6638 5.05119 16.4322 5.73964 17.7572 7.00341L21.4212 3.33944C19.1012 1.16088 16.0219 -0.0368592 12.8342 0.000864816C7.98195 0.000864816 3.54467 2.73587 1.36609 7.07414L5.62891 10.3797C6.64274 7.3382 9.48621 5.07947 12.8342 5.07947Z"
                      fill="#EA4335"
                    />
                  </svg>

                  <span className="ml-4">Continue with Google</span>
                </div>
              </button>
            </div>
            <div className="mb-6 flex flex-col">
              <button
                onClick={handleSignInWithLinkedinAction}
                className="block w-full rounded-lg bg-blue-700 px-4 py-3 text-neutral-100 hover:bg-blue-600 focus:bg-neutral-500"
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

export default LoginPage
