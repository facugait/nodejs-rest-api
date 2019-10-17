const express = require('express');
const router = express.Router();
let Dog = require('../models/dog.schema');
let Cat = require('../models/cat.schema');

router.get('/', (req, res) => {
  res.send('Hello World');
});

//DOGS
router.get('/dog', (req, res) => {
  Dog.find()
  .then(dogs => res.json(dogs))
  .catch(err => res.status(400).json({
    "error": true,
    "msg": "No dogs found"
  }));
});

router.post('/dog', (req, res) => {
  const dogName = req.body;

  const newDog = new Dog(dogName);

  newDog.save()
  .then(() => res.json({
    "success": true,
    "msg": "Dog saved!"
  }))
  .catch(err => res.status(400).json({
    "error": true,
    "msg": "No dogs saved"
  }));
});

router.put('/dog/:id', (req, res) => {
  Dog.findByIdAndUpdate(req.params.id)
  .then(dog => {
    dog.name = req.body.name,
    dog.race = req.body.race,
    dog.color = req.body.color

    dog.save()
    .then(() => res.json({
      "success": true,
      "msg": "Dog updated!"
    }))
    .catch(err => res.status(400).json({
      "error": true,
      "msg": "No dog updated"
    }));
  })
  .catch(err => res.status(404).json({
    "error": true,
    "msg": "No dog found"
  }));
});

router.delete('/dog/:id', (req, res) => {
  Dog.findByIdAndDelete(req.params.id)
  .then(() => res.json({
    "success": true,
    "msg": "Dog deleted!"
  }))
  .catch(err => res.status(404).json({
    "error": true,
    "msg": "No dog found"
  }));
});

//CATS
router.get('/cat', (req, res) => {
  Cat.find()
  .then(cats => res.json(cats))
  .catch(err => res.status(400).json({
    "error": true,
    "msg": "No cats found"
  }));
});

router.post('/cat', (req, res) => {
  const catName = req.body;

  const newCat = new Cat(catName);

  newCat.save()
  .then(() => res.json({
    "success": true,
    "msg": "Cat saved!"
  }))
  .catch(err => res.status(400).json({
    "error": true,
    "msg": "No cats saved"
  }));
});

router.put('/cat/:id', (req, res) => {
  Cat.findByIdAndUpdate(req.params.id)
  .then(cat => {
    cat.name = req.body.name,
    cat.race = req.body.race,
    cat.color = req.body.color

    cat.save()
    .then(() => res.json({
      "success": true,
      "msg": "Cat updated!"
    }))
    .catch(err => res.status(400).json({
      "error": true,
      "msg": "No cat updated"
    }));
  })
  .catch(err => res.status(404).json({
    "error": true,
    "msg": "No cat found"
  }));
});

router.delete('/cat/:id', (req, res) => {
  Cat.findByIdAndDelete(req.params.id)
  .then(() => res.json({
    "success": true,
    "msg": "Cat deleted!"
  }))
  .catch(err => res.status(404).json({
    "error": true,
    "msg": "No cat found"
  }));
});

module.exports = router;