const User = require('./user.model');

const USERS = [];

const getAll = async () => USERS;

const getById = async (id) => USERS.find(user => user.id === id);

const createUser = async (body) => USERS[USERS.push(User.fromRequest(body)) - 1];


module.exports = { getAll, getById, createUser };
