import React from 'react'
import { test } from '../testObject'
import { FiPlusCircle } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

const FeedbackFooterTags = () => {
  const { tags } = test
  const [tagValue, setTagValue] = useState('');
  const [addTag, setAddTag] = useState(test.tags)

  // const saveTagValue = (e) => {
  //   if(e.key === 'Enter') {
  //     setTagValue[e.target.tagValue] = e.target.value
  //     e.target.value = '' 
  //   } 
  // }
  console.log(tagValue);

  const addTags = () => {
    const newValue = setTagValue;
    setAddTag(newValue.push())
  }

  // console.log(test.tags);
  
  return (
    <>
      <div className='flex justify-between flex-wrap'>
        <div className='flex mx-2'>
          {tags.map(v => {
            return (
              <div className='flex justify-between border-2 border-orange-400 border-w mr-2 text-sm p-2 px-2 bg-white text-orange-400 rounded-full'>{v}
                <div className='mx-2'> <GrFormClose/> </div>
              </div>
            )
          })}
        </div>
        <div>
          <input className='border-2 border-orange-400 rounded-xl text-md' 
          type='text' 
          placeholder='Add a tag'
          onChange={e => setTagValue(e.target.value)} />
        </div>
        <div className='cursor-pointer' onClick={addTags}>
          <FiPlusCircle />
        </div>
      </div>
    </>
  )
}

export default FeedbackFooterTags