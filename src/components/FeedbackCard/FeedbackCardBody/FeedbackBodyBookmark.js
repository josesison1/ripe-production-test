import React from 'react'
import { useState } from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

export const FeedbackBodyBookmark = () => {
  const [bookmarked, setBookmarked] =  useState(false)
  const handleClick = () => setBookmarked(!bookmarked)
  console.log(setBookmarked);
  return (
    <div className='flex justify-end' onClick={handleClick}>
      {!bookmarked ? (<FaRegBookmark/>) : (<FaBookmark/>)}
    </div>
  )
}
