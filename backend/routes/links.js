// routes/notes.js
const express = require('express');
const Link = require('../models/Link');

const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
    try {
        const links = await Link.find();
        res.json(links);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new note
router.post('/', async (req, res) => {
    const { title, links } = req.body;
    const newLink = new Link({
        title,
        links,
    });

    try {
        const savedLink = await newLink.save();
        res.json(savedLink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a note
router.delete('/:id', async (req, res) => {
    try {
        const link = await Link.findByIdAndDelete(req.params.id);
        if (!link) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json({ message: 'Link deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
