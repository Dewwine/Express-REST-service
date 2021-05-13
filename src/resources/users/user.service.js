const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUser = (id) => usersRepo.getById(id);

const createUser = (body) => usersRepo.createUser(body);

module.exports = { getAll, getUser, createUser };
