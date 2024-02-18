const userService = require("../services/user.services.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.services.js");

const register = async (req,res) => {
  try {
    const user = userService.createUser(req.body);

    const jwt = jwtProvider.generatejsonwebtoken(user._id);

    await cartService.createCart(user);

    return res.status(200).send({ jwt, message: "User Register Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = userService.getUserbyemail(email);

    if (!user) {
      return res.status(404).send({ message: "User not found with :", email });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: " Invalid Password " });
    }

    const jwt = jwtProvider.generatejsonwebtoken(user._id);
    return res.status(200).send({ jwt, message: "Login Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
module.exports = { register, login };
