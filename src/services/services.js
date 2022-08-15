const AvengerModel = require("../models/models");
const AvengerClass = require("../entities/entity");

class Services {
  async getAllService() {
    return await AvengerModel.find();
  }

  getByIdService = async (id) => {
    return await AvengerModel.find({ id: id });
  };

  deleteService = async (id) => {
    return await AvengerModel.findOneAndDelete({ id: id });
  };

  postService = async (obj) => {
    const avengersArr = await AvengerModel.find();
    const newAvenger = await new AvengerClass(obj, avengersArr);
    newAvenger.verify();
    const avengerToSave = new AvengerModel({ ...newAvenger });
    return avengerToSave.save();
  };

  putService = async (obj, id) => {
    const avengerToUpdate = await AvengerModel.find({ id: id });

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

    return await AvengerModel.findOneAndUpdate({ id: id }, updatedAvenger, {
      new: true,
    });
  };
}

module.exports = Services;
