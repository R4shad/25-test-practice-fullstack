import { Router } from 'express'
import { getGrades, postGrade } from '../controllers/grade.controllers'

export const gradeRoutes = Router()

gradeRoutes.get('/:studentId', getGrades)

gradeRoutes.post('/', postGrade)
