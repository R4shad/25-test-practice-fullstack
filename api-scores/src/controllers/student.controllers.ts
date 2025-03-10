import { Request, Response } from 'express'
import { Student } from './../models/Student'

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll()
    const status = 200
    res.status(status).json(students)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const getStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const id = Number(studentId)
    if (!isNaN(id)) {
      const student = await Student.findByPk(id)
      if (!student) {
        res.status(404).json({ message: 'Student not found' })
      } else {
        res.status(200).json(student)
      }
    } else {
      res.status(400).json({ message: 'Invalid student ID' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const postStudent = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body

    if (!name || !email) {
      res.status(400).json({ message: 'Name and Email are needed' })
    } else {
      const createdStudent = await Student.create({ name, email })
      res.status(201).json(createdStudent)
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error 2', error })
  }
}
