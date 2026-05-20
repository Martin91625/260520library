import Book from '../models/book.js'

const BookController = {
    async index(req, res) {
        try {
            await BookController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const books = await Book.findAll()
        res.status(200)
        res.json({
            success: true,
            data: books
        })
    },
    async show(req, res) {
        try {
            await BookController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const book = await Book.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: book
        })
    },
    async store(req, res) {
        try {
            await BookController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const book = await Book.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: book
        })
    },
    async update(req, res) {
        try {
            await BookController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Book.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const book = await Book.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: book
        })
    },
    async destroy(req, res) {
        try {
            await BookController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const book = await Book.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: book
        })
    }
}

export default BookController
