import * as React from 'react'
import { motion, Variants } from 'framer-motion'

const Pricing: React.FunctionComponent = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className=" text-xl text-neutral-400 ">PRICING</p>
          <h1 className="my-8 text-3xl font-bold leading-snug text-white md:text-5xl">
            Unlock unlimited Experience
          </h1>
          <p className="text-xl text-neutral-400 md:text-3xl ">
            1 month free trial with PRO
          </p>
        </div>
        <section className="">
          <div className="container mx-auto px-5 py-24">
            <div className=" flex flex-col flex-wrap justify-center lg:flex-row">
              <div className="p-4 md:px-20 md:py-8 lg:w-1/3 lg:px-4 lg:py-4 xl:px-10">
                <motion.div
                  whileHover={{ scale: 1.1, cursor: 'grab' }}
                  className="h-full overflow-hidden rounded-xl bg-neutral-800"
                >
                  <div className="p-10">
                    <h2 className=" mb-3 font-medium text-neutral-400">
                      PERSONAL
                    </h2>
                    <h1 className=" mb-8 text-3xl font-bold text-white">
                      Free
                    </h1>
                    <ul className="mb-3 ml-4 list-disc space-y-3 text-neutral-300">
                      <li>1 project</li>
                      <li>2 Documents</li>
                      <li>Collab mode</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1, cursor: 'grab' }}
                className="p-4 md:px-16 lg:w-1/3 lg:px-0 lg:py-0 xl:px-4"
              >
                <div className="h-full overflow-hidden rounded-xl bg-blue-600 text-white ">
                  <div className="mt-4 p-10">
                    <h2 className=" mb-3 font-medium">PRO 1 YEAR</h2>
                    <h1 className=" mb-8 text-3xl font-bold">$19.99</h1>
                    <ul className="mb-3 ml-4 list-disc space-y-3">
                      <li>Unlimited projects</li>
                      <li>Unlimited Documents</li>
                      <li>Collab mode</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, cursor: 'grab' }}
                className="p-4 md:px-20 md:py-8 lg:w-1/3 lg:px-4 lg:py-4 xl:px-6"
              >
                <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
                  <div className="p-10">
                    <h2 className=" mb-3 font-medium text-neutral-400">
                      PRO 1 MONTH
                    </h2>
                    <h1 className=" mb-8 text-3xl font-bold text-white">
                      $3.49
                    </h1>
                    <ul className="mb-3 ml-4 list-disc space-y-3 text-neutral-300">
                      <li>Unlimited projects</li>
                      <li>4 Documents</li>
                      <li>Collab mode</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Pricing
