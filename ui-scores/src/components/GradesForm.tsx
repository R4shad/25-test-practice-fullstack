import { useState } from 'react'
import { createGrade } from '../functions'
import { emptyGradeForm, Grade, GradeForm } from '../types.d'

type Props = {
  setGrades: React.Dispatch<React.SetStateAction<Grade[]>>
  studentId: string | undefined
}

export const GradesForm: React.FC<Props> = ({ setGrades, studentId }) => {
  const [formData, setFormData] = useState<GradeForm>(emptyGradeForm)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.subject !== '' && formData.grade !== -1) {
      setError('')
      if (studentId) {
        const stdId = Number(studentId)
        setFormData((prevData) => ({ ...prevData, studentId: stdId }))
      }

      const data = await createGrade(formData)
      if (data) {
        alert('Created')
        setGrades((prevGrades) => [...prevGrades, data])
        setFormData(emptyGradeForm)
      }
    } else {
      setError('Complete all inputs')
    }
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <input
        type="text"
        name="subject"
        placeholder="math"
        value={formData.subject}
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        name="grade"
        placeholder="100"
        value={formData.grade}
        onChange={(e) => handleInputChange(e)}
      />
      {error !== '' && <p>{error}</p>}
      <button>Submit</button>
    </form>
  )
}
