const User = require('./user.model');

const USERS = [new User({id: 'xxx'}), new User(), new User()];

const getAll = async () => USERS;

const getById = async (id) => USERS.find(user => user.id === id);

module.exports = { getAll, getById };
