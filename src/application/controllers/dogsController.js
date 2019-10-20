const moment = require('moment');
const dogBL = require('../../domain/BL/dog.bl')
const dogValidator = require('../../domain/schemas/dog.schema')

const dogController = {

  saveDog: async function (req, res) {
    const dog = req.body;

    const validation = dogValidator.Validate(dog);
    if (validation.success) {

      const result = await dogBL.add(dog);
      if (result) {
        res.status(200).json({
          "success": result,
          "msg": "Dog saved!",
          "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        });
      }
      else {
        res.status(500).json({
          "success": result,
          "msg": "No dogs saved."
        });
      }

    } else {
      res.status(500).json({
        "success": validation.success,
        "msg": validation.messasge
      });
    }
  },

  getDogs: async function (req, res) {
    const data = await dogBL.getAll();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        "success": false,
        "msg": "No dogs found.",
      });
    }
  },

  getDog: async function (req, res) {
    const data = await dogBL.getOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        "succes": false,
        "msg": "Dog not found."
      })
    }
  },

  updateDog: async function (req, res) {
    var validation = dogValidator.Validate(req.body);
    if (validation.success) {
      const dog = {
        id: req.params.id,
        name: req.body.name,
        race: req.body.race,
        color: req.body.color
      }
      const result = await dogBL.update(dog);
      if (result) {
        res.status(200).json({
          "success": result,
          "msg": "Dog updated!",
          "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        });
      } else {
        res.status(500).json({
          "success": result,
          "msg": "No dogs saved."
        });
      }
    } else {
      res.status(400).json({
        "success": validation.ok,
        "msg": validation.messasge
      });
    }
  },

  deleteDog: async function (req, res) {
    const result = await dogBL.delete(req.params.id);
    if (result) {
      res.status(200).json({
        "success": result,
        "msg": "Dog deleted!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      });
    } else {
      res.status(404).json({
        "error": result,
        "msg": "Dog not found"
      });
    }
  }
}

module.exports = dogController;