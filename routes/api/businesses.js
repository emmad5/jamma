const Business = require('../../models/Business');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  Business.find({}).then(businesses => {
      res.send(businesses)
    },err => {res.status(404).send(err)})
})

module.exports = router;