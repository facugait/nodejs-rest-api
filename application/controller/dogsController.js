const Dog = require('../../domain/models/dog.model');
const schema = require('../../domain/schemas/dog.schema');
const moment = require('moment');

let dogController = {

  saveDog: async function (req, res) {
    const dog = req.body;
    if (schema.validate(req.body).error) {
      res.status(400).json({
        "error": true,
        "msg": "Dog not saved, invalid body."
      });
      return;
    }
    try {
      const newDog = new Dog(dog);
      await newDog.save();
      res.status(200).json({
        "success": true,
        "msg": "Dog saved!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      });
    }
    catch (err) {
      res.status(500).json({
        "error": true,
        "msg": "No dogs saved."
      });
    }
  },

  getDogs: async function (req, res) {
    try {
      const data = await Dog.find();
      res.status(200).json(data);
    }
    catch (err) {
      res.status(404).json({
        "error": true,
        "msg": "No dogs found in database."
      });
    }
  },

  getDog: async function (req, res) {
    try {
      const data = await Dog.findById(req.params.id);
      data !== null ? res.status(200).json(data) : res.status(404).json({
        "error": true,
        "msg": "Dog not found"
      });
    }
    catch (err) {
      res.status(404).json({
        "error": true,
        "msg": "Dog not found in database."
      });
    }
  },

  updateDog: async function (req, res) {
    var validation = schema.validate(req.body).error;
    if (validation) {
      res.status(400).json({
        "error": true,
        "msg": validation.details.map((err) => err.message).join(', ')
      });
      return;
    }
    try {
      var dogToUpdate = await Dog.findByIdAndUpdate(req.params.id);

      dogToUpdate.name = req.body.name;
      dogToUpdate.race = req.body.race;
      dogToUpdate.color = req.body.color;

      await dogToUpdate.save();
  
      res.status(200).json({
        "success": true,
        "msg": "Dog updated!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      });
    } catch (error) {

      res.status(400).json({
        "success": false,
        "msg": "Dog not updated!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      });
    }
  
  },

  deleteDog: async function (req, res) {
    try {
      await Dog.findByIdAndRemove(req.params.id)
      res.status(200).json({
        "success": true,
        "msg": "Dog deleted!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      });
    }
    catch (err) {
      res.status(404).json({
        "error": true,
        "msg": "No dog found"
      });
    }
  }
}

module.exports = dogController;