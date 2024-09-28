import Aiheadshot from '@/components/Aiheadshot'
import Content from '@/components/Content'
import Navbar from '@/components/Navbar'
import ProffetionalPicture from '@/components/ProffetionalPicture'
import Steps from '@/components/Steps'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Aiheadshot/>
      <Steps/>
      <ProffetionalPicture/>
    </div>
  )
}

export default page
