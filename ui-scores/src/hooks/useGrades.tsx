import { useEffect, useState } from 'react'
import { getAllGrades } from '../functions'
import { Student } from '../types'

export const useGrades = () => {
  const [Grades, setGrades] = useState<Student[]>([])

  useEffect(() => {
    const fetchGrades = async () => {
      const data = await getAllGrades()
      if (data) {
        setGrades(data)
      } else {
        console.error('error fetching data')
      }
    }
    fetchGrades()
  }, [])

  return { Grades, setGrades }
}
