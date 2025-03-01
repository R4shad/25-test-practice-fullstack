import { Grade } from './Grade'
import { Student } from './Student'

Student.hasMany(Grade, {
  foreignKey: 'studentId',
})
Grade.belongsTo(Student, { foreignKey: 'studentId' })
