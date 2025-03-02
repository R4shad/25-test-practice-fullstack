import { Link } from 'react-router-dom'
import { useStudents } from '../hooks/useStudents'
import { Form } from './Form'

const StudentsList = () => {
  const { students, setStudents } = useStudents()

  return (
    <>
      <Form setStudents={setStudents} />
      <ul>
        {students &&
          students.map((student) => (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>
                {student.name} :{student.email}
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default StudentsList
