const AvengerModel = require("../models/models");
const AvengerClass = require("../entities/entity");

class Services {
  getAllService = async () => {
    return await require("./getAll.service")(AvengerModel);
  };
  getByIdService = async (id) => {
    return await require("./getById.service")(id, AvengerModel);
  };
  deleteService = async (id) => {
    return await require("./delete.service")(id, AvengerModel);
  };
  postService = async (obj) => {
    return await require("./post.service")(obj, AvengerModel, AvengerClass);
  };
  putService = async (obj, id) => {
    return await require("./put.service")(obj, id, AvengerModel);
  };
}

module.exports = Services;
