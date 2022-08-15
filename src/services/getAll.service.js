async function getAllService(Model) {
  return await Model.find();
}

module.exports = getAllService;
