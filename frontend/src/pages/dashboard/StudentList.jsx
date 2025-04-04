import React from 'react'
import Sidebar from '../../components/Sidebar'

const StudentList = () => {
  return (
    <div className="flex flex-row">
      <Sidebar page="student-list"/>
      <div className=" w-[80%] pt-[5em]">
        <p>Student List</p>
      </div>
    </div>
  )
}

export default StudentList
