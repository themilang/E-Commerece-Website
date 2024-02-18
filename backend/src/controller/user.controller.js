const userService = require("../services/user.services");

const getUserProfile = async (req, res) => {
  try {
    const jwt = req.header.authorization?.split(" ") [1];
    if (!jwt) {
      return res.status(404).send({ message: "Token not found" });
    }
    const user = await userService.getUserByJWT(jwt);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = userService.getallUser();
    return res.status(200).send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserProfile, getAllUser };
