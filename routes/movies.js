// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.movies.index);
router.get('/:id', ctrl.movies.show);
router.post('/', ctrl.movies.create);
router.put('/:id', ctrl.movies.update);
router.delete('/:id', ctrl.movies.destroy);

// exports
module.exports = router;