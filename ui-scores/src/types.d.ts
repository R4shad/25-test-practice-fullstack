export type Student = {
  id: number
  name: string
  email: string
}
export type StudentForm = {
  name: string
  email: string
}
export const emptyForm = {
  name: '',
  email: '',
}

export type Grade = {
  id: number
  studentId: number
  subject: string
  grade: number
}
export type GradeForm = {
  studentId: number
  subject: string
  grade: number
}
export const emptyGradeForm = {
  studentId: 0,
  subject: '',
  grade: -1,
}
