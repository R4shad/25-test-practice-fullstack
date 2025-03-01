import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../database/database'

export class Student extends Model {
  declare id: number
  declare name: string
  declare email: string
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Student',
  }
)
