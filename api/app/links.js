const express = require('express');
const nanoid = require('nanoid');
const Link = require('../models/Link');

const router = express.Router();

router.get('/:shortUrl', (req, res) => {
   const link = Link.findOne({shortUrl: req.params.shortUrl})
        .then(() => {
            if (link) {
                res.status(301).redirect(link.originalUrl)
            }
        })
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