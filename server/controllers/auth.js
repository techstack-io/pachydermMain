import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is already used. Please login or try another email address");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    // Find email in database
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email }).exec();
      if (!user) return res.status(400).send("User not found");
    // check password
    const match = await comparePassword(password, user.password);
    // create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
     // return user and token to client, exclude hashed password
     user.password = undefined;
     // send token in cookie
     res.cookie('token', token, {
       httpOnly: true,
       // secure: true, // only works on https
     });
     res.json(user);
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error! Please try again.')
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "You are now signed out of your account." });
  } catch (err) {
    console.log(err);
  }
};
