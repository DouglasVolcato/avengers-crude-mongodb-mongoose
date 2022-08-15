const Services = require("../services/services");
const services = new Services();

class Controllers {
  async getAllController(req, res) {
    const answer = await services.getAllService();
    if (answer.length == 0) throw new Error("Array is empty");
    res.send(answer);
  }

  async getByIdController(req, res) {
    const answer = await services.getByIdService(Number(req.params.id));
    if (answer.length == 0) throw new Error("Ip not found");
    res.send(answer);
  }

  async deleteController(req, res) {
    const answer = await services.deleteService(Number(req.params.id));
    if (!answer) throw new Error("Ip not found");
    res.send("Deleted item: " + answer);
  }

  async postController(req, res) {
    res.send(
      "Added item: " +
        (await services.postService({
          character: req.body.character,
          realName: req.body.realName,
          joinedIn: req.body.joinedIn,
          image: req.body.image,
          notes: req.body.notes,
        }))
    );
  }
  async putController(req, res) {
    const answer = await services.putService(
      {
        character: req.body.character,
        realName: req.body.realName,
        joinedIn: req.body.joinedIn,
        image: req.body.image,
        notes: req.body.notes,
      },
      Number(req.params.idSearch)
    );
    if (!answer) throw new Error("Ip not found");
    res.send("Updated item: " + answer);
  }
}

module.exports = Controllers;
