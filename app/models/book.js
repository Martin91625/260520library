import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Book = sequelize.define('books', {
    isbn: { type: DataTypes.STRING,  allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    totalCopies: { type: DataTypes.INTEGER, allowNull: false}
}, {
    timestamps: true,
    freezeTableName: true
})

export default Book
