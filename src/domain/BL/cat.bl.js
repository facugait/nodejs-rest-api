const catSchema = require('../models/cat.model');

const catBL = () => {
  const scope = this;

  scope.add = async (cat) => {
    try {
      const newCat = new catSchema(cat);
      await newCat.save();
      return true;
    } catch (error) {
      return false;
    }
  };

  scope.getAll = async () => {
    try {
      const cats = await catSchema.find();
      return cats;
    } catch (error) {
      return null;
    }
  };

  scope.getOne = async (id) => {
    try {
      const data = await catSchema.findById(id);
      return data;
    } catch {
      return null;
    }
  };

  scope.update = async (cat) => {
    try {
      const catToUpdate = await catSchema.findByIdAndUpdate(cat.id);

      catToUpdate.name = cat.name;
      catToUpdate.race = cat.race;
      catToUpdate.color = cat.color;

      await catToUpdate.save();
      return true;
    } catch (error) {
      return false;
    }
  };

  scope.delete = async (id) => {
    try {
      await catSchema.findByIdAndRemove(id)
      return true;
    } catch (error) {
      return false;
    }
  }

  return scope;

}

module.exports = catBL();