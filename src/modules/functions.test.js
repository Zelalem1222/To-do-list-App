import { addTodo, deleteTodo } from './functions';

let tasks = [];
describe('add and remove test', () => {
  test('add todo', () => {
    const { length } = tasks;
    const newTask = {
      description: 'new task',
      completed: false,
      index: 0,
    };
    tasks = addTodo(newTask, tasks);

    expect(tasks.length).toBe(length + 1);
  });

  test('delete todo', () => {
    const { length } = tasks;
    tasks = deleteTodo(0, tasks);

    expect(tasks.length).toBe(length - 1);
  });
});