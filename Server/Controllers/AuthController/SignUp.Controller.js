import ThrowError from "../../Helpers/ThrowError.js";
import User from "../../Models/User.Model.js";
import emailValidator from "../../Validations/Email.Validation.js";
import passwordValidator from "../../Validations/Password.Validation.js";
import usernameValidation from "../../Validations/Username.Validation.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  const { firstName, lastName, email, password, username } = req.body;

  // Check If Fields Exists

  if (!firstName || !lastName || !email || !password || !username)
    return res.status(400).json({
      message: `None of the required fields can be empty`,
      success: false,
    });

  // Check if criteria satisfied

  if (!emailValidator(email))
    return res.status(400).json({
      message: `Email ID is invalid.Enter a valid email id. `,
      success: false,
    });

  if (!usernameValidation(username))
    return res.status(400).json({
      message: `Username doesnt satisfy required criterias.`,
      success: false,
    });

  if (!passwordValidator(password))
    return res.status(400).json({
      message: `Password doesnt satisfy required criteria. `,
      success: false,
    });

  try {
    // Check if user already exists with same username

    const usernameExists = await User.findOne({ username });

    if (usernameExists)
      return res.status(400).json({
        message: `Username already associated with an account`,
        success: false,
      });

    // Check if user already exists with same email address

    const emailExists = await User.findOne({ email });

    if (emailExists)
      return res.status(400).json({
        message: `Email already associated with an account`,
        success: false,
      });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      lastName,
      username,
      password: hashedPassword,
      email,
    });

    const userData = await newUser.save();

    return res
      .status(201)
      .json({ message: `User Created Successfully`, success: true });
  } catch (error) {
    return ThrowError(res, error);
  }
};

export default signup;
