import * as React from 'react'

const Sections: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto  items-center px-5 py-24 ">
          <div className="mx-4 mt-8 flex w-full flex-col items-center justify-center text-center md:mt-0 md:py-8 ">
            <h1 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-6xl xl:text-[70px] xl:leading-[70px]">
              Organize your search
            </h1>
            <p className="mb-5 max-w-xl leading-8 text-neutral-400 md:text-2xl md:leading-loose xl:text-xl">
              No more messy spreadsheets. Trace keeps track of every detail
              about your job opportunities regardless of where you found them
            </p>
          </div>
          <div className="relative mt-8 flex h-[270px] w-full items-center justify-center overflow-hidden rounded-xl bg-blue-400 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] sm:left-20 sm:mr-10 sm:h-96 sm:w-4/5 md:left-10 md:h-[600px] md:w-[900px] xl:left-60 xl:h-[600px]  xl:w-[1000px] ">
            <div className="flex flex-wrap ">
              <div className="">
                <img
                  className="relative max-w-[330px] rounded-2xl sm:max-w-[400px] md:max-w-[600px] xl:left-2 xl:max-w-3xl"
                  src="https://res.cloudinary.com/glasnik/image/upload/v1651756076/media/image2-section_tefzfp.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 ">
          <div className="mx-4 mt-8 flex w-full flex-col items-center justify-center text-center md:mt-0 md:py-8">
            <h1 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-6xl xl:text-[70px] xl:leading-[70px] ">
              Get insights for applications
            </h1>
            <p className=" mb-12 max-w-xl leading-8 text-neutral-400 md:max-w-none md:text-2xl md:leading-loose lg:max-w-none xl:mb-5 xl:max-w-xl xl:text-xl ">
              Appeo is used by thousands of job seekers from all over the world,
              including students and graduates from hundreds of educational
              institutions.
            </p>
          </div>
          <div className="relative flex h-[270px] w-full justify-center overflow-hidden rounded-xl bg-blue-400 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-20  sm:left-20 sm:mr-10 sm:h-96 sm:w-4/5 md:right-10 md:h-[600px] md:w-[900px] xl:right-40 xl:mr-40 xl:h-[600px] xl:w-[1000px]">
            <div className="flex flex-wrap ">
              <div className="">
                <img
                  className="relative max-w-[330px] rounded-2xl sm:max-w-[400px] md:max-w-[600px] xl:left-2 xl:max-w-3xl"
                  src="https://res.cloudinary.com/glasnik/image/upload/v1651756079/media/image1-section_v5ghrn.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Sections
