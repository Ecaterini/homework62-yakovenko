const users = [
  { id: 1, username: "Anna" },
  { id: 2, username: "Ivan" },
  { id: 3, username: "Oleg" },
];

exports.getUsers = (req, res) => {
  res.render("users/users", { users });
};

exports.createUser = (req, res) => {
  res.send("Post users route");
};

exports.getUserById = (req, res) => {
  const userId = Number(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.send("User not found");
  }

  res.render("users/user", { user });
};

exports.updateUser = (req, res) => {
  res.send(`Put user by Id route: ${req.params.userId}`);
};

exports.deleteUser = (req, res) => {
  res.send(`Delete user by Id route: ${req.params.userId}`);
};