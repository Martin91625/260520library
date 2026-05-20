import Patron from '../models/patron.js'

const PatronController = {
    async index(req, res) {
        try {
            await PatronController.tryIndex(req, res)
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
        const patrons = await Patron.findAll()
        res.status(200)
        res.json({
            success: true,
            data: patrons
        })
    },
    async show(req, res) {
        try {
            await PatronController.tryShow(req, res)
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
        const patron = await Patron.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: patron
        })
    },
    async store(req, res) {
        try {
            await PatronController.tryStore(req, res)
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
        const patron = await Patron.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: patron
        })
    },
    async update(req, res) {
        try {
            await PatronController.tryUpdate(req, res)
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
        const recordNumber = await Patron.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const patron = await Patron.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: patron
        })
    },
    async destroy(req, res) {
        try {
            await PatronController.tryDestroy(req, res)
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
        const patron = await Patron.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: patron
        })
    }
}

export default PatronController
