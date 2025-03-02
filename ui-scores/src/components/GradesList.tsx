import { useGrades } from '../hooks/useGrades'

import { GradesForm } from './GradesForm'

const GradesList = () => {
  const { grades, setGrades, studentId } = useGrades()
  if (studentId) if (grades.length === 0) return <p>Error</p>
  return (
    <>
      <h1></h1>
      <GradesForm setGrades={setGrades} studentId={studentId} />
      <ul>
        {grades &&
          grades.map((grades) => (
            <li key={grades.id}>
              {grades.subject} :{grades.grade}
            </li>
          ))}
      </ul>
    </>
  )
}

export default GradesList
