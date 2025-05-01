import jwt from "jsonwebtoken";

const userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username === process.env.ADMIN_LOGIN_USERNAME && password === process.env.ADMIN_LOGIN_PASSWORD) {
      const token = jwt.sign(username + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Crenditials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default userLogin;
