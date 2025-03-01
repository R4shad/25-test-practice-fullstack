import { useState } from 'react'
import { createStudent } from '../functions'
import { emptyForm, Student, StudentForm } from '../types.d'

type Props = {
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>
}

export const Form: React.FC<Props> = ({ setStudents }) => {
  const [formData, setFormData] = useState<StudentForm>(emptyForm)
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
    if (formData.name !== '' && formData.email !== '') {
      setError('')
      const data = await createStudent(formData)
      if (data) {
        alert('Created')
        setStudents((prevStudents) => [...prevStudents, data])
        setFormData(emptyForm)
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
        name="name"
        placeholder="names"
        value={formData.name}
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        name="email"
        placeholder="mail@example.com"
        value={formData.email}
        onChange={(e) => handleInputChange(e)}
      />
      {error !== '' && <p>{error}</p>}
      <button>Submit</button>
    </form>
  )
}
