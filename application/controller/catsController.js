const Cat = require('../../domain/models/cat.model');
const moment = require('moment');

let catController = {

  saveCat: function (req, res) {
    const cat = req.body;

    const newCat = new Cat(cat);

    newCat.save()
      .then(() => res.status(200).json({
        "success": true,
        "msg": "Cat saved!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      }))
      .catch(err => res.status(400).json({
        "error": true,
        "msg": "No cats saved"
      }));
  },

  getCats: function (req, res) {
    Cat.find()
      .then(cats => res.status(200).json(cats))
      .catch(err => res.status(404).json({
        "error": true,
        "msg": "No cats found"
      }));
  },

  getCat: function (req, res) {
    Cat.findById(req.params.id)
      .then(cat => res.status(200).json(cat))
      .catch(err => res.status(404).json({
        "error": true,
        "msg": "No cat found"
      }));
  },

  updateCat: function (req, res) {
    Cat.findByIdAndUpdate(req.params.id)
      .then(cat => {
        cat.name = req.body.name,
        cat.race = req.body.race,
        cat.color = req.body.color

        cat.save()
          .then(() => res.status(200).json({
            "success": true,
            "msg": "Cat updated!",
            "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
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
  },

  deleteCat: function (req, res) {
    Cat.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json({
        "success": true,
        "msg": "Cat deleted!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      }))
      .catch(err => res.status(404).json({
        "error": true,
        "msg": "No cat found"
      }));
  }

}

module.exports = catController;