const Business = require('../../models/Business');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  Business.find({}).then(businesses => {
      res.send(businesses)
    },err => {res.status(404).send(err)})
})

router.post('/add', (req, res) => {
  Business.create(business).then(business => {
    res.save(business)
  }, err => {
    res.status(404).send(err)
  })
})

router.patch('/edit', (req, res) => {
  Business.find({id: req.body._id}).then(business => {
    if (req.body.title) {
      business.title = req.body.title
    }

    if (req.body.address) {
      business.address = req.body.address
    }

    if (req.body.days) {
      business.days = req.body.days
    }

    if (req.body.startTime) {
      business.startTime = req.body.startTime
    }

    if (req.body.endTime) {
      business.endTime = req.body.endTime
    }

    if (req.body.menu) {
      business.endTime = req.body.endTime
    }

    if (req.body.vibe) {
      business.endTime = req.body.endTime
    }

    res.save(business)
  }, err => {
    res.status(404).send(err)
  })
})

module.exports = router;