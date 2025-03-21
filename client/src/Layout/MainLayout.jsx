import Courses from '@/pages/student/Courses'
import Home  from '../pages/Home'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Home />
        <Courses/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
