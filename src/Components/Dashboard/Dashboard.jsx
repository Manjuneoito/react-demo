import React from 'react'
import SideNav from '../SideNav/SideNav'
// import FirstPage from '../Firstpage/FirstPage'
// import SecondPage from '../SecondPage/SecondPage'

function Dashboard(props) {
  console.log(props,'props');
  return (
    <>
    <div className=' w-full h-screen bg-gray-300'>
    <SideNav/>
    <div className='h-[calc(100vh-80px)] mt-20 p-10'>
    {props.children}
    </div>
    </div>

    
    </>
  )
}

export default Dashboard