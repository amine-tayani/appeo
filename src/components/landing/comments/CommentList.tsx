import * as React from 'react'
import { motion } from 'framer-motion'
import Comment from './Comment'

const CommentList: React.FunctionComponent = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto mt-40 max-w-3xl text-center">
          <h1 className="mt-8 mb-4 text-5xl font-bold leading-snug text-white">
            People love using Appeo
          </h1>
          <p className=" text-xl text-neutral-400 ">
            Here are some nice comments our users said about us
          </p>
        </div>
        <div className=" mt-10 flex flex-wrap justify-center">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </section>
  )
}

export default CommentList
