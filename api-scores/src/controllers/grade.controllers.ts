import { Request, Response } from 'express'
import { Grade } from './../models/Grade'
import { Student } from '../models/Student'

export const getGrades = async (req: Request, res: Response) => {
  const { studentId } = req.params
  try {
    const Grades = await Grade.findAll({ where: { studentId } })
    const status = 200
    res.status(status).json(Grades)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const postGrade = async (req: Request, res: Response) => {
  try {
    const { studentId, subject, grade } = req.body
    if (!studentId || !subject || !grade) {
      res
        .status(400)
        .json({ message: 'studentId, subject and grade are needed' })
    } else {
      const studentExists = await Student.findByPk(studentId)
      if (!studentExists) {
        res.status(404).json({ message: 'Student not found' })
      } else {
        const createdGrade = await Grade.create({ studentId, subject, grade })
        res.status(201).json(createdGrade)
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error 2', error })
  }
}
