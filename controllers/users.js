const Users = require("../models/users");

exports.postUser = async (req, res, next) => {
  try {
    const newUser = await Users.create({ ...req.body });
    return res.status(200).json({ success: true, message: "user created" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "failed to store user in database" });
  }
};

exports.getUser = async (req, res, next) => {
  await Users.findAll()
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((err) => {});
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  await Users.destroy({ where: { id: userId } });
  res.status(200).json({ success: true, message: "user deleted" });
};

exports.editUser = async (req, res, next) => {
  const userId = req.params.id;
  const { username, phonenumber, email } = req.body;
  const user = await Users.findByPk(userId);
  user.username = username;
  user.phonenumber = phonenumber;
  user.email = email;
  await user.save();

  return res.status(200).json({ success: true, message: "edited" });
};
