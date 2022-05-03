import * as React from 'react'

const Sections: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap items-center px-5 py-24 sm:flex-nowrap">
          <div className="mt-8 ml-40 w-full max-w-lg md:mt-0 md:py-8">
            <h1 className="mb-8 text-[70px] font-bold leading-[70px] text-white">
              Organize your search
            </h1>
            <p className="mb-5 max-w-sm text-lg leading-8 text-neutral-400">
              No more messy spreadsheets. Trace keeps track of every detail
              about your job opportunities regardless of where you found them
            </p>
          </div>
          <div className="relative left-32 flex h-[600px] overflow-hidden rounded-xl bg-blue-400 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-20 sm:mr-10 md:w-1/2 lg:w-3/5">
            <div className="flex flex-wrap py-6 ">
              <div className="px-6">{/* image */}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap items-center px-5 py-24 sm:flex-nowrap">
          <div className="relative right-32 flex h-[600px] overflow-hidden rounded-xl bg-blue-400 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-20 sm:mr-10 md:w-1/2 lg:w-3/5">
            <div className="flex flex-wrap py-6 ">
              <div className="px-6">{/* image */}</div>
            </div>
          </div>
          <div className="mt-8  w-full max-w-xl md:mt-0 md:py-8">
            <h1 className="mb-8 text-[70px] font-bold leading-[70px] text-white">
              Get insights for applications
            </h1>
            <p className="mb-5 max-w-sm text-lg leading-8 text-neutral-400">
              trace is used by thousands of job seekers from all over the world,
              including students and graduates from hundreds of educational
              institutions.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Sections
