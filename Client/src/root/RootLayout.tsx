import React from 'react'
import TopBar from '../components/TopBar'
import LeftSideBar from '../components/LeftSideBar'
import { Outlet } from 'react-router-dom'
import BottomBar from '../components/BottomBar'

const RootLayout = () => {
  return (
    <div>
      <TopBar/>
      <LeftSideBar/>

      <section>
        <Outlet/>
        <BottomBar/>
      </section>
    </div>
  )
}

export default RootLayout