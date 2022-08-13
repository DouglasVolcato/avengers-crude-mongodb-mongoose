const Services = require("../services/services");
const services = new Services();

class Controllers {
  async getAllController(req, res) {
    res.send(await services.getAllService());
  }

  async getByIdController(req, res) {
    res.send(await services.getByIdService(Number(req.params.id)));
  }

  async deleteController(req, res) {
    res.send(await services.deleteService(Number(req.params.id)));
  }

  async postController(req, res) {
    res.send(
      await services.postService({
        character: req.body.character,
        realName: req.body.realName,
        joinedIn: req.body.joinedIn,
        image: req.body.image,
        notes: req.body.notes,
      })
    );
  }
  async putController(req, res) {
    res.send(
      await services.putService(
        {
          character: req.body.character,
          realName: req.body.realName,
          joinedIn: req.body.joinedIn,
          image: req.body.image,
          notes: req.body.notes,
        },
        Number(req.params.idSearch)
      )
    );
  }
}

module.exports = Controllers;
