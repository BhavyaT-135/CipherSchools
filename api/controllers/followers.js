


const getFollowers = async (req, res) => {
  res.send(`All the followers of user ${req.params.userId}`)
}

const addFollowers = async (req, res) => {
  res.send(`Add a follower to user ${req.params.userId}`)
}

module.exports = {
  getFollowers,
  addFollowers
}