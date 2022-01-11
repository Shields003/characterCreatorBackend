module.exports.create_character = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Character Successfully Saved!" });
};

module.exports.get_character_single = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Character Successfully Retrieved!" });
};

module.exports.get_character_multiple = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Characters Successfully Retrieved!" });
};

module.exports.update_character = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Character Successfully Updated!" });
};

module.exports.delete_character = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Character Successfully Deleted!" });
};
