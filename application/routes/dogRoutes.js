const express = require('express');
const router = express.Router();
const dogsController = require('../controller/dogsController');

router.get('/', dogsController.getDogs);
router.get('/:id', dogsController.getDog);
router.post('/', dogsController.saveDog);
router.put('/:id', dogsController.updateDog);
router.delete('/:id', dogsController.deleteDog);

module.exports = router;