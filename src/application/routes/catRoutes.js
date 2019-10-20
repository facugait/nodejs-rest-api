const express = require('express');
const router = express.Router();
const catsController = require('../controllers/catsController');

router.get('/', catsController.getCats);
router.get('/:id', catsController.getCat);
router.post('/', catsController.saveCat);
router.put('/:id', catsController.updateCat);
router.delete('/:id', catsController.deleteCat);

module.exports = router;