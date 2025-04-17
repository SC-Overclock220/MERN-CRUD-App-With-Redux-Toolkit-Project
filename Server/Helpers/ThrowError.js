const ThrowError = (res, error) => {
  console.log(error);
  return res
    .status(500)
    .json({ message: `Internal Server Error`, success: false });
};

export default ThrowError;
