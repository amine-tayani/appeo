import * as React from 'react'

const Comment: React.FunctionComponent = () => {
  return (
    <div className="p-2 sm:w-[430px] sm:p-3 md:w-[400px]">
      <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
        <div className="p-8">
          <div className="flex justify-between space-x-4">
            <div className="inline-flex space-x-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div className=" mb-6">
                <h1 className="font-semibold text-white">Matt Ronaldo</h1>
                <p className="text-sm text-neutral-400">@Gamerthedude</p>
              </div>
            </div>

            <svg
              className="mt-2"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.6925 18C16.1143 18 20.7226 11.0728 20.7226 5.07579C20.7226 4.8809 20.7226 4.68602 20.7137 4.49114C21.6068 3.85335 22.3838 3.04724 23 2.13484C22.1784 2.49803 21.2942 2.73721 20.3654 2.85236C21.3121 2.29429 22.0355 1.39961 22.3838 0.336614C21.4996 0.859252 20.5172 1.2313 19.4723 1.43504C18.6328 0.549212 17.445 0 16.1322 0C13.6047 0 11.5506 2.0374 11.5506 4.54429C11.5506 4.89862 11.5953 5.24409 11.6667 5.58071C7.86219 5.39468 4.48632 3.57874 2.2268 0.832677C1.83385 1.50591 1.61057 2.28543 1.61057 3.11811C1.61057 4.69488 2.42328 6.08563 3.64681 6.90059C2.89662 6.87402 2.19108 6.67027 1.57485 6.33366C1.57485 6.35138 1.57485 6.36909 1.57485 6.39567C1.57485 8.59252 3.15562 10.435 5.24544 10.8514C4.86141 10.9577 4.45952 11.0108 4.03977 11.0108C3.74505 11.0108 3.45927 10.9843 3.18241 10.9311C3.76291 12.7382 5.45978 14.0492 7.4603 14.0846C5.88846 15.3071 3.91474 16.0335 1.77133 16.0335C1.40516 16.0335 1.039 16.0157 0.681763 15.9715C2.70014 17.247 5.11148 18 7.6925 18Z"
                fill="#1DA1F2"
              />
            </svg>
          </div>
          <p className="mb-3 text-[15px] leading-7 text-neutral-100">
            Best. Product. Ever! I have gotten at least 50 times the value from
            job application tracker. You guys rock!
          </p>
          <p className="mt-6 text-sm font-medium text-neutral-400">
            10:04 PM - May 21, 2022
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
