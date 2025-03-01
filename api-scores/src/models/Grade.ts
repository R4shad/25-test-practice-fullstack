import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../database/database'
import { Student } from './Student'

export class Grade extends Model {
  declare id: number
  declare studentId: number
  declare subject: string
  declare grade: string
}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Grade',
  }
)
