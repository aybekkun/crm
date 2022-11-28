import React from 'react'
import BasicPagination from '../../components/BasicPagination'
import TableTeachers from '../../components/PageComponents/TeachersComponents/TableTeachers'
import TopInfo from '../../components/TopInfo'

const Teachers:React.FC = () => {
  return (
    <div>
      <TopInfo name='Учителья'/>
      <TableTeachers/>
      <BasicPagination/>
    </div>
  )
}

export default Teachers