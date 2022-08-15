async function deleteController(req, res, Services) {
  const services = new Services();
  const answer = await services.deleteService(Number(req.params.id));
  if (!answer) throw new Error("Id not found");
  return "Deleted item: " + answer;
}

module.exports = deleteController;
