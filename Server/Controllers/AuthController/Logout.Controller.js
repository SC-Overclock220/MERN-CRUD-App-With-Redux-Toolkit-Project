const logout = async (req, res) => {
  const { userID } = req;

  res.clearCookie('token');
  console.log(userID);
  return res.status(200).json({ message: `Logout Success`, success: true });
};

export default logout;
