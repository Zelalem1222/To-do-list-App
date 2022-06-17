import {
  addTodo,
  deleteTodo,
  removeAllCompleted,
  editTodo,
  updateTodoStatus,
} from "./functions";
import tasksMock from '../../__mocks__/mock.json';


let tasks = tasksMock;
describe("add and remove test", () => {
  test("add todo", () => {
    const { length } = tasks;
    const newTask = {
      description: "new task",
      completed: false,
      index: 0,
    };
    tasks = addTodo(newTask, tasks);

    expect(tasks.length).toBe(length + 1);
  });

  test("delete todo", () => {
    const { length } = tasks;
    tasks = deleteTodo(0, tasks);

    expect(tasks.length).toBe(length - 1);
  });

  test("Remove all", () => {
    const lengthArray = tasks.length;
    tasks = removeAllCompleted(tasks);
    expect(tasks).toHaveLength(lengthArray - 1);
  });

  test("edit todo", () => {
    tasks = editTodo(tasks, "edited task", 1);
    expect(tasks[1].description).toBe("edited task");
  });

  test("update todo status", () => {
    tasks = updateTodoStatus(tasks, 1);
    expect(tasks[1].completed).toBe(true);
  });
});