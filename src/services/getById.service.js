async function getByIdService(id, Model) {
  return await Model.find({ id: id });
}

module.exports = getByIdService;
