const Business = require('../../models/Business');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  Business.find({}).then(businesses => {
      res.send(businesses)
    },err => {res.status(404).send(err)})
})

router.post('/', (req, res) => {
  console.log(req.query)
  Business.create(req.body).then(business => {
    res.save(business)
  }, err => {
    res.status(404).send(err)
  })
})
router.delete('/:id', (req, res) => {
  console.log(req.params.id )
  Business.findOneAndDelete({ _id: req.params.id }).then((err, business) => {
    if (err) {
      res.status(404);
    }
  });
})



module.exports = router;