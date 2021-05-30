import User from '../users/user.model';
import Board from '../boards/board.model';
import Task from '../tasks/task.model';

interface Idatabase {
  USERS: Array<User>;
  BOARDS: Array<Board>;
  TASKS: Array<Task>;
}

const db: Idatabase = {
  USERS: [],
  BOARDS: [],
  TASKS: [],
};

export default db;
