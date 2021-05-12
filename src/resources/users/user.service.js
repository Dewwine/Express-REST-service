const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getById(id);

module.exports = { getAll, getUser };
