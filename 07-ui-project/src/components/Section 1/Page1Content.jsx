import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content