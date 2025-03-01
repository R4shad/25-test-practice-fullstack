import { useEffect, useState } from 'react'
import { getAllStudents } from '../functions'
import { Student } from '../types'

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getAllStudents()
      if (data) {
        setStudents(data)
      } else {
        console.error('error fetching data')
      }
    }
    fetchStudents()
  }, [])

  return { students, setStudents }
}
