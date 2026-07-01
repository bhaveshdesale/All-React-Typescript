import type { EmployeeCardData } from '../types/employee'

interface EmployeeCardProps{
  employee:EmployeeCardData
}

function EmployeeCard({employee}:EmployeeCardProps) {
  return (
    <div>
      <h2>{employee.name}</h2>
      <h2>{employee.email}</h2>
      
    </div>
  )
}

export default EmployeeCard
