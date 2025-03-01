import { Router } from 'express'
import { getStudents, postStudent } from '../controllers/student.controllers'

export const studentRoutes = Router()

studentRoutes.get('/', getStudents)

studentRoutes.post('/', postStudent)
