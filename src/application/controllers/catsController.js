const moment = require('moment');
const catBL = require('../../domain/BL/cat.bl')
const catValidator = require('../../domain/schemas/cat.schema')

const catController = {

  saveCat: async function (req, res) {
    const cat = req.body;

    const validation = catValidator.Validate(cat);
    if (validation.success) {

      const result = await catBL.add(cat);
      if (result) {
        res.status(200).json({
          "success": result,
          "msg": "Cat saved!",
          "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        });
      }
      else {
        res.status(500).json({
          "success": result,
          "msg": "No cats saved."
        });
      }

    } else {
      res.status(500).json({
        "success": validation.success,
        "msg": validation.messasge
      });
    }
  },

  getCats: async function (req, res) {
    const data = await catBL.getAll();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        "success": false,
        "msg": "No cats found.",
      });
    }
  },

  getCat: async function (req, res) {
    const data = await catBL.getOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        "succes": false,
        "msg": "Cat not found."
      })
    }
  },

  updateCat: async function (req, res) {
    var validation = catValidator.Validate(req.body);
    if (validation.success) {
      const cat = {
        id: req.params.id,
        name: req.body.name,
        race: req.body.race,
        color: req.body.color
      }
      const result = await catBL.update(cat);
      if (result) {
        res.status(200).json({
          "success": result,
          "msg": "Cat updated!",
          "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        });
      } else {
        res.status(500).json({
          "success": result,
          "msg": "No cats saved."
        });
      }
    } else {
      res.status(400).json({
        "success": validation.ok,
        "msg": validation.messasge
      });
    }
  },

  deleteCat: async function (req, res) {
    const result = await catBL.delete(req.params.id);
    if (result) {
      res.status(200).json({
        "success": result,
        "msg": "Cat deleted!",
        "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
      });
    } else {
      res.status(404).json({
        "error": result,
        "msg": "Cat not found"
      });
    }
  }
}

module.exports = catController;