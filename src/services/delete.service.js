async function deleteService(id, Model) {
  return await Model.findOneAndDelete({ id: id });
}

module.exports = deleteService;
