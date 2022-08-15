async function getByIdController(req, res, Services) {
  const services = new Services();
  const answer = await services.getByIdService(Number(req.params.id));
  if (answer.length === 0) throw new Error("Id not found");
  return answer;
}

module.exports = getByIdController;
