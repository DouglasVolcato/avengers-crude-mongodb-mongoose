async function postController(req, res, Services) {
  const services = new Services();
  return (
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

module.exports = postController;
