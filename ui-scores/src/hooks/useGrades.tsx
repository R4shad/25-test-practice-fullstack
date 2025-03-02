import { useEffect, useState } from 'react'
import { getAllGradesByStudent } from '../functions'
import { Grade } from '../types'
import { useParams } from 'react-router-dom'

export const useGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([])
  const { studentId } = useParams()
  // const [ student, setStudent ] = useState<Student>()

  useEffect(() => {
    if (!studentId) {
      throw new Error('Param not found')
    }
    const fetchGrades = async () => {
      if (studentId) {
        const data = await getAllGradesByStudent(Number(studentId))
        if (data) {
          setGrades(data)
        } else {
          console.error('error fetching data')
        }
      }
    }
    fetchGrades()
  }, [studentId])

  return { grades, setGrades, studentId }
}
