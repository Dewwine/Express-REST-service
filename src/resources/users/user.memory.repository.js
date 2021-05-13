const User = require('./user.model');

const USERS = [new User(), new User({id: 'xxx'}), new User()];

const getAll = async () => USERS;

const getById = async (id) => USERS.find(user => user.id === id);

const createUser = async (body) => USERS[USERS.push(User.fromRequest(body)) - 1];

const deleteUser = async (id) => {
  const usr = USERS.find(user => user.id === id);
  const index = USERS.indexOf(usr);

  if (index > -1) {
    USERS.splice(index, 1);
  }
  return USERS;
};

const updateUser = async (id, body) => {
  const usr = USERS.find(user => user.id === id);
  const index = USERS.indexOf(usr);

  if (index > -1) {
    USERS[index] = User.fromRequest(body);
    USERS[index].id = id;
  }
  return USERS;
};


module.exports = { 
  getAll, 
  getById, 
  createUser, 
  deleteUser, 
  updateUser 
};
