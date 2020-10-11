const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

const accessTokenSecret = process.env.SECRET;
const saltRounds = 10;

const register = async (req, res) => {
  try {
    if (!req.body) throw new Error("empty request!");

    const { name, email, password } = req.body;
    if (!name || !email || !password) throw new Error("Invalid details");

    await bcrypt.genSalt(saltRounds, async (err, salt) => {
      if (err) {
        throw err;
      } else {
        await bcrypt.hash(password, salt, async (err, hash) => {
          if (err) {
            throw err;
          } else {
            let userEntity = {
              name: name,
              email: email,
              hash: hash,
            };

            const user = await User.create(userEntity);
            return res
              .status(201)
              .json({ message: "Registered Succesfully !!" });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message || "Error creating the user entry",
    });
  }
};

const login = async (req, res) => {
  try {
    if (!req.body) throw new Error("empty request!");

    const { email, password } = req.body;
    if (!email || !password) throw new Error("Invalid details");

    const dbUser = await User.findOne({
      where: {
        email,
      },
    });
    const hash = dbUser.hash;

    if (!hash) return res.status(404).json({ message: "No such user exists" });

    const validPassword = await bcrypt.compare(password, hash);
    if (!validPassword)
      return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign(email, accessTokenSecret);
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message || "Error loggin in",
    });
  }
};

module.exports = { register, login };
