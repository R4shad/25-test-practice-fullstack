import { useGrades } from '../hooks/useGrades'

import { GradesForm } from './GradesForm'

const GradesList = () => {
  const { grades, setGrades, studentId, student } = useGrades()

  return (
    <>
      <h1>
        {student?.name} ; {student?.email}
      </h1>
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
