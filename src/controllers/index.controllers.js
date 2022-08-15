const Services = require("../services/index.services");

class Controllers {
  async getAllController(req, res) {
    res.send(await require("./getAll.controller")(req, res, Services));
  }
  async getByIdController(req, res) {
    res.send(await require("./getById.controller")(req, res, Services));
  }
  async deleteController(req, res) {
    res.send(await require("./delete.controller")(req, res, Services));
  }
  async postController(req, res) {
    res.send(await require("./post.controller")(req, res, Services));
  }
  async putController(req, res) {
    res.send(await require("./put.controller")(req, res, Services));
  }
}

module.exports = Controllers;
