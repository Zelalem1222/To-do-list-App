
export const addTodo = (description, tasks) => {
    const newTask = {
        description,
        completed: false,
        index: tasks.length
    }

    const newTasks = [...tasks, newTask];
    return newTasks
}

export const editTodo = () => { }

export const deleteTodo = (index, tasks) => tasks.filter(task => task.index != index)

export const removeAllCompleted = () => {

}
