import { useEffect, useState } from 'react'
import { getAllGradesByStudent, getStudent } from '../functions'
import { Grade, Student } from '../types'
import { useParams } from 'react-router-dom'

export const useGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([])
  const { studentId } = useParams()
  const [student, setStudent] = useState<Student>()

  useEffect(() => {
    if (!studentId) {
      throw new Error('Param not found')
    }
    const fetchGrades = async () => {
      if (studentId) {
        const data = await getAllGradesByStudent(Number(studentId))
        if (data) {
          setGrades(data)
          const std = await getStudent(Number(studentId))
          if (std) {
            setStudent(std)
          } else {
            console.error('error fetching data')
          }
        } else {
          console.error('error fetching data')
        }
      }
    }
    fetchGrades()
  }, [studentId])

  return { grades, setGrades, studentId, student }
}
