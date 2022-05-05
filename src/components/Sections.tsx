import * as React from 'react'

const Sections: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap items-center px-5 py-24 sm:flex-nowrap">
          <div className="mx-4 mt-8 w-full max-w-lg md:mt-0 md:py-8 lg:ml-40">
            <h1 className="mb-8 text-5xl font-bold text-white lg:text-[70px] lg:leading-[70px]">
              Organize your search
            </h1>
            <p className="mb-5 max-w-sm text-lg leading-8 text-neutral-400">
              No more messy spreadsheets. Trace keeps track of every detail
              about your job opportunities regardless of where you found them
            </p>
          </div>
          <div className="relative mt-8 flex h-96 w-full items-center justify-center overflow-hidden rounded-xl bg-blue-400 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] sm:mr-10 md:w-1/2 lg:left-40 lg:mt-0 lg:h-[600px] lg:w-3/5 lg:p-20">
            <div className="flex flex-wrap ">
              <div className="">
                <img
                  className=" relative max-w-[300px] rounded-2xl lg:left-16 lg:max-w-3xl"
                  src="https://res.cloudinary.com/glasnik/image/upload/v1651756076/media/image2-section_tefzfp.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap items-center px-5 py-24 sm:flex-nowrap">
          <div className="relative order-last flex h-96 w-full justify-center overflow-hidden rounded-xl bg-blue-400 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-20 sm:mr-10 md:w-1/2 lg:right-40 lg:order-first lg:h-[600px] lg:w-3/5">
            <div className="flex flex-wrap ">
              <div className="">
                <img
                  className="relative max-w-[300px] rounded-2xl lg:right-12 lg:max-w-3xl"
                  src="https://res.cloudinary.com/glasnik/image/upload/v1651756079/media/image1-section_v5ghrn.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-4 mt-8 w-full max-w-xl md:mt-0 md:py-8">
            <h1 className="mb-8 text-5xl font-bold text-white lg:text-[70px] lg:leading-[70px] ">
              Get insights for applications
            </h1>
            <p className="mb-12 max-w-sm text-lg leading-8 text-neutral-400 lg:mb-5">
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
