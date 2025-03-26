// import Courses from '@/pages/student/Courses'
// import Home  from '../pages/Home'
// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import HeroSection from '@/pages/student/HeroSection'
// // import Navbar from '@/components/Navbar'

// const MainLayout = () => {
//   return (
//     <div>
//         {/* <Navbar/> */}
//         {/* <Home /> */}
//         <HeroSection/>
//         <Courses/>
//       <div>
//         <Outlet/>
//       </div>
//     </div>
//   )
// }

// export default MainLayout

import Navbar from '@/components/Navbar'
// import { Home } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        {/* <Home/> */}
        <div className='flex-1 mt-16'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
