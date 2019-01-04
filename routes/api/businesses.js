import Business from '../../models/Business'

router.get('/businesses', passport.authenticate('jwt', { session: false }), (req, res) => {
  Business.find({}).then(businesses => {
      res.send(businesses)
    },err => {res.status(404).send(err)})
})
