const Controllers = require("../controllers/index.controllers");
const controllers = new Controllers();

class Routes {
  getAllRoute = (req, res) => controllers.getAllController(req, res);
  getByIdRoute = (req, res) => controllers.getByIdController(req, res);
  deleteRoute = (req, res) => controllers.deleteController(req, res);
  postRoute = (req, res) => controllers.postController(req, res);
  putRoute = (req, res) => controllers.putController(req, res);
}

module.exports = Routes;
