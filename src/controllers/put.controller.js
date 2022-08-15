async function putController(req, res, Services) {
  const services = new Services();
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
  if (!answer) throw new Error("Id not found");
  return "Updated item: " + answer;
}

module.exports = putController;
