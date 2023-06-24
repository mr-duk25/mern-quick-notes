const Notes = require('../models/note');

module.exports = {
    create
}

async function create(req, res) {
    try {
        const newNote = await Notes.create(req.body)
        res.json(newNote)
    } catch(err) {
        res.status(400).json(err)
        console.log(err)
    }
}