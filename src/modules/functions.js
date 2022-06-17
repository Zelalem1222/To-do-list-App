export const addTodo = (description, tasks) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length,
  };

  const newTasks = [...tasks, newTask];
  return newTasks;
};

export const deleteTodo = (index, tasks) =>
  tasks.filter((task) => task.index !== index);

export const editTodo = (tasks, description, index) => {
  const newTasks = tasks;
  const task = newTasks.find((t) => t.index === index);
  task.description = description;
  newTasks[index] = task;
  return newTasks;
};

export const updateTodoStatus = (tasks, index) => {
  const newTasks = tasks;
  const task = newTasks.find((t) => t.index === index);
  task.completed = !task.completed;
  newTasks[index] = task;
  return newTasks;
};

export const removeAllCompleted = (tasks) =>
  tasks.filter((task) => !task.completed);