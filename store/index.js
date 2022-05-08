export const state = () => ({
    tasks:[]
})

export const mutations = {
    ADD_TASK(state, task) {
        // Adds a new task at top of the list
        state.tasks = [{content: task, done: false}, ...state.tasks]
        
        // .push adds a new task at bottom of the list
        //state.tasks.push({content: task, done: false})
        
        // .unshift adds a new task at top of the list
        //state.tasks.unshift({content: task, done: false})
    },
    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done
    }
}