import { useNavigate } from 'react-router-dom'
import { useStudents } from '../hooks/useStudents'
import { Form } from './Form'

const StudentsList = () => {
  const navigate = useNavigate()
  const { students, setStudents } = useStudents()

  return (
    <>
      <Form setStudents={setStudents} />
      <ul>
        {students &&
          students.map((student) => (
            <li
              onClick={() => {
                navigate(`/student/${student.id}`)
              }}
              key={student.id}
            >
              {student.name} :{student.email}
            </li>
          ))}
      </ul>
    </>
  )
}

export default StudentsList
