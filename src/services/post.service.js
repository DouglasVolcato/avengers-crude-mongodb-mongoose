async function postService(obj, Model, Class) {
  const avengersArr = await Model.find();
  const newAvenger = await new Class(obj, avengersArr);
  newAvenger.verify();
  const avengerToSave = new Model({ ...newAvenger });
  return avengerToSave.save();
}

module.exports = postService;
