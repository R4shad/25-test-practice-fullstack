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
