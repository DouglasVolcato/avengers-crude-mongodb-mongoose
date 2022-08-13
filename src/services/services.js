const AvengerModel = require("../models/models");
const AvengerClass = require("../entities/entity");

class Services {
  async getAllService() {
    return await AvengerModel.find();
  }

  getByIdService = async (id) => {
    return await AvengerModel.find({id: id});
  };

  deleteService = async (id) => {
    return await AvengerModel.findOneAndDelete({id: id});
  };

  postService = async (obj) => {
    const newAvenger = new AvengerClass(obj);
    const avengersArr = await AvengerModel.find();

    try {
      if (newAvenger.verify().includes("empty")) {
        return newAvenger.verify();
      }
    } catch (e) {
      return await AvengerModel.create(newAvenger, ...avengersArr);
    }
  };

  putService = async (obj, id) => {
    const avengerToUpdate = await AvengerModel.find({id: id});

    const updatedAvenger = {
      character:
        obj.character === undefined ? avengerToUpdate.character : obj.character,
      realName:
        obj.realName === undefined ? avengerToUpdate.realName : obj.realName,
      joinedIn:
        obj.joinedIn === undefined ? avengerToUpdate.joinedIn : obj.joinedIn,
      image: obj.image === undefined ? avengerToUpdate.image : obj.image,
      notes: obj.notes === undefined ? avengerToUpdate.notes : obj.notes,
    };

    return await AvengerModel.findOneAndUpdate({id: id}, updatedAvenger);
  };
}

module.exports = Services;
