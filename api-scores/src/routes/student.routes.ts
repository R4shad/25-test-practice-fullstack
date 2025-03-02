import { Router } from 'express'
import {
  getStudents,
  getStudent,
  postStudent,
} from '../controllers/student.controllers'

export const studentRoutes = Router()

studentRoutes.get('/:studentId', getStudent)

studentRoutes.get('/', getStudents)

studentRoutes.post('/', postStudent)
