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
export type StudentForm = {
  studentId: number
  subject: string
  grade: number
}
export const emptyForm = {
  studentId: 0,
  subject: '',
  grade: 0,
}
