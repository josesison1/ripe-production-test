import React from 'react'
import { test } from '../testObject'
import { FiPlusCircle } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

const FeedbackFooterTags = () => {
  const { tags } = test
  const [addTag, setAddTag] = useState([tags])

  const submitTag = (e) => {
    if(e.key === 'Enter') {
      setAddTag([...addTag, e.target.value])
      e.target.value = '' 
    } 
  }

  const removeTag = (index) => {
    setAddTag(addTag.filter((v, i) => i !== index))
  }

  return (
    <>
      <div className='flex justify-between flex-wrap'>
        <div className='flex mx-2'>
          {tags.map(v => {
            return (
              <div className='flex justify-between border-2 border-orange-400 border-w mr-2 text-sm p-2 px-2 bg-white text-orange-400 rounded-full'>{v}
                <div className='mx-2'> <GrFormClose onClick={removeTag}/> </div>
              </div>
            )
          })}
        </div>
        <div>
          <input className='border-2 border-orange-400 rounded-xl text-md' type='text' placeholder='Add a tag'></input>
        </div>
        <div className='cursor-pointer' onClick={submitTag}>
          <FiPlusCircle />
        </div>
      </div>
    </>
  )
}

export default FeedbackFooterTags