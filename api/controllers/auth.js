

const register = async (req, res) => {
  res.json({ msg: "This is the register page..."})
}

const login = async (req, res) => {
  res.json({ msg: "This is the login page..."})
}

module.exports = {
  register,
  login
}