async function putService(obj, id, Model) {
  const avengerToUpdate = await Model.find({ id: id });

  const updatedAvenger = {
    character:
      obj.character === undefined ? avengerToUpdate.character : obj.character,
    realName:
      obj.realName === undefined ? avengerToUpdate.realName : obj.realName,
    joinedIn:
      obj.joinedIn === undefined ? avengerToUpdate.joinedIn : obj.joinedIn,
    image: obj.image === undefined ? avengerToUpdate.image : obj.image,
    notes: obj.notes === undefined ? avengerToUpdate.notes : obj.notes,
  };

  return await Model.findOneAndUpdate({ id: id }, updatedAvenger, {
    new: true,
  });
}

module.exports = putService;
