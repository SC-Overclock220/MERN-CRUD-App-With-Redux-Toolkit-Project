import jwt from "jsonwebtoken";
import ThrowError from "../Helpers/ThrowError.js";
const auth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: `Forbidden`, success: false });

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const { id } = decodedToken;

    console.log(id);

    if (!id)
      return res.status(403).json({ message: `Bad Token`, success: false });

    req.userID = id;

    next();
  } catch (error) {
    return ThrowError(res, error);
  }
};

export default auth;
