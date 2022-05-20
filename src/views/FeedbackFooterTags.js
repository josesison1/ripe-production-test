import React from 'react'
import { test } from '../testObject'

const FeedbackFooterTags = () => {
  const { tags } = test

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex mx-2'>
          {tags.map(v => {
            return (
              <div className='border-2 border-orange-400 border-w mr-2 my-2 px-8 bg-white text-orange-400 rounded-lg'>{v}</div>
            )
          })}
        </div>
        <div>
          Add Tag
        </div>

      </div>
    </>
  )
}

export default FeedbackFooterTags