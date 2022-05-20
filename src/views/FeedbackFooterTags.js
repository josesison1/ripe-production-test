import React from 'react'
import { test } from '../testObject'
import { FiPlusCircle } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'

const FeedbackFooterTags = () => {
  const { tags } = test

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex mx-2'>
          {tags.map(v => {
            return (
              <div className='flex justify-between border-2 border-orange-400 border-w mr-2 text-sm p-2 px-2 bg-white text-orange-400 rounded-full'>{v}
                <div className='mx-2'> <GrFormClose /> </div>
              </div>
            )
          })}
        </div>
        <div className=''>
          add tag
          <FiPlusCircle />
        </div>

      </div>
    </>
  )
}

export default FeedbackFooterTags