import User from './user.js';
import sequelize from '../database/database.js'
import Book from './book.js';
import Patron from './patron.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Book = Book;
db.Patron = Patron;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
