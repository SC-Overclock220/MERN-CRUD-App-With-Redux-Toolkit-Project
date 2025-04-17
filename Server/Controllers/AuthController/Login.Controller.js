import User from "../../Models/User.Model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ThrowError from "../../Helpers/ThrowError.js";

const login = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({
      message: `None of the required fields can be empty`,
      success: false,
    });

  try {
    const userExists = await User.findOne({ email, username });

    if (!userExists)
      return res
        .status(400)
        .json({ message: `Invalid Credentials`, success: false });

    const isPasswordMatch = await bcrypt.compare(password, userExists.password);

    if (!isPasswordMatch)
      return res
        .status(400)
        .json({ message: `Invalid Credentials`, success: false });

    userExists.accountLastLogin = new Date().getTime();

    const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "PRODUCTION",
    });

    await userExists.save();

    return res.status(200).json({ message: `Login Successful`, success: true });
  } catch (error) {
    return ThrowError(res, error);
  }
};

export default login;
