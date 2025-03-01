import { Student, StudentForm } from './types.d'

const API_URL = 'http://localhost:3000/api/student'

export const getAllStudents = async () => {
  try {
    const response = await fetch(API_URL)
    if (response.ok) {
      const data: Student[] = await response.json()
      return data
    } else {
      throw new Error('Error fetching data')
    }
  } catch (error) {
    console.error('Error creating student:', error)
  }
}

export const createStudent = async (student: StudentForm) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })

    if (!response.ok) {
      throw new Error(`Error creating student: ${response.statusText}`)
    }

    const data: Student = await response.json()
    return data
  } catch (error) {
    console.error('Error creating student:', error)
  }
}

export const getAllGradesByStudent = async (studentId: number) => {
  try {
    const response = await fetch(`API_URL`)
    if (response.ok) {
      const data: Student[] = await response.json()
      return data
    } else {
      throw new Error('Error fetching data')
    }
  } catch (error) {
    console.error('Error creating student:', error)
  }
}
