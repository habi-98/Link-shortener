const express = require('express');
const nanoid = require('nanoid');
const Link = require('../models/Link');

const router = express.Router();

router.get('/:shortUrl', async (req, res) => {
    try {
        const link = await Link.findOne({shortUrl: req.params.shortUrl})

        if  (link) {
            res.status(301).redirect(link.originalUrl)
        }
    } catch (e) {
        res.sendStatus(500)
    }
});

router.post('/', async (req, res) => {
    const linkData = req.body;

    linkData.shortUrl = nanoid(6);

    const link = new Link(linkData);

    link.save()
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error))

});


module.exports = router;