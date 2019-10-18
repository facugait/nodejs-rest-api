const Dog = require('../../domain/schemas/dog.model');
const moment = require('moment');

let dogController = {

  saveDog: function (req, res) {
    const dog = req.body;

    const newDog = new Dog(dog);

    newDog.save()
      .then(() => res.status(200).json({
        "success": true,
        "msg": "Dog saved!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      }))
      .catch(err => res.status(400).json({
        "error": true,
        "msg": "No dogs saved"
      }));
  },

  getDogs: function (req, res) {
    Dog.find()
      .then(dogs => res.status(200).json(dogs))
      .catch(err => res.status(404).json({
        "error": true,
        "msg": "No dogs found"
      }));
  },

  getDog: function (req, res) {
    Dog.findById()
      .then(dog => res.status(200).json(dog))
      .catch(err => res.status(404).json({
        "error": true,
        "msg": "No dog found"
      }));
  },

  updateDog: function (req, res) {
    Dog.findByIdAndUpdate(req.params.id)
      .then(dog => {
        dog.name = req.body.name,
        dog.race = req.body.race,
        dog.color = req.body.color

        dog.save()
          .then(() => res.status(200).json({
            "success": true,
            "msg": "Dog updated!",
            "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
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
  },

  deleteDog: function (req, res) {
    Dog.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json({
        "success": true,
        "msg": "Dog deleted!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      }))
      .catch(err => res.status(404).json({
        "error": true,
        "msg": "No dog found"
      }));
  }

}

module.exports = dogController;