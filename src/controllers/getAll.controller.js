async function getAllController(req, res, Services) {
  const services = new Services();
  const answer = await services.getAllService();
  if (answer.length === 0) throw new Error("Array is empty");
  return answer;
}

module.exports = getAllController;
