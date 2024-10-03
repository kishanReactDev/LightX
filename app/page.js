import Aiheadshot from '@/components/Aiheadshot'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProffetionalPicture from '@/components/ProffetionalPicture'
import Secondsection from '@/components/Secondsection'
import Steps from '@/components/Steps'
import React from 'react'
import { ContextProvider } from '@/contextApi/modalContext'

const page = () => {
  return (
    <div>
        <Navbar />
        <Secondsection />
        <Aiheadshot />
        <Steps />
        <ProffetionalPicture />
        <Footer />
    </div>
  )
}

export default page
