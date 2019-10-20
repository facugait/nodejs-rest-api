const dogSchema = require('../models/dog.model')

const dogBL = () => {
  const scope = this;

  scope.add = async (dog) => {
    try {
      const newDog = new dogSchema(dog);
      await newDog.save();
      return true;
    } catch (error) {
      return false;
    }
  };

  scope.getAll = async () => {
    try {
      const dogs = await dogSchema.find();
      return dogs;
    } catch (error) {
      return null;
    }
  };

  scope.getOne = async (id) => {
    try {
      const data = await dogSchema.findById(id);
      return data;
    } catch {
      return null;
    }
  };

  scope.update = async (dog) => {
    try {
      const dogToUpdate = await dogSchema.findByIdAndUpdate(dog.id);

      dogToUpdate.name = dog.name;
      dogToUpdate.race = dog.race;
      dogToUpdate.color = dog.color;

      await dogToUpdate.save();
      return true;
    } catch (error) {
      return false;
    }
  };

  scope.delete = async (id) => {
    try {
      await dogSchema.findByIdAndRemove(id)
      return true;
    } catch (error) {      
      return false;
    }
  }

  return scope;
}

module.exports = dogBL();
