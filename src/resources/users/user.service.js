const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUser = (id) => usersRepo.getById(id);

const createUser = (body) => usersRepo.createUser(body);

const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, createUser, deleteUser };
