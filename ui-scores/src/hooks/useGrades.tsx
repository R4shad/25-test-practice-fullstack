import { useCallback, useEffect, useState } from 'react'
import { getAllGradesByStudent, getStudent } from '../functions'
import { Grade, Student } from '../types'
import { useParams } from 'react-router-dom'

export const useGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([])
  const { studentId } = useParams()
  const [student, setStudent] = useState<Student>()

  const fetchGrades = useCallback(async () => {
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
  }, [studentId])

  useEffect(() => {
    fetchGrades()
  }, [fetchGrades])

  return { grades, setGrades, studentId, student }
}
