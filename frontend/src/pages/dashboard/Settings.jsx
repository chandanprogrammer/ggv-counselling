import React from 'react'
import Sidebar from '../../components/Sidebar'

const Settings = () => {
  return (
    <div className="flex flex-row">
      <Sidebar page="settings"/>
      <div className=" w-[80%] pt-[5em]">
        <p>Settings</p>
      </div>
    </div>
  )
}

export default Settings
