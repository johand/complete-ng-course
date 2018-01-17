import { tassign } from 'tassign';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODO } from 'app/actions';

export interface IAppState {
    todos: any[];
    lastUpdate: Date;
}

export const INITIAL_STATE = {
    todos: [],
    lastUpdate: null

}

function addTodo(state, action) {
    const newTodo = { id: state.todos.length + 1, title: action.title }
    return tassign(state, {
        todos: state.todos.concat(newTodo), lastUpdate: new Date()
    });
}

function toggleTodo(state, action) {
    const todo = state.todos.find(t => t.id === action.id);
    const index = state.todos.indexOf(todo);
    return tassign(state, {
        todos: [
            ...state.todos.slice(0, index),
            tassign(todo, { isCompleted: !todo.isCompleted }),
            ...state.todos.slice(index + 1)
        ], lastUpdate: new Date()
    })
}

function removeTodo(state, action) {
    return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
    })
}

function clearTodo(state, action) {
    return tassign(state, { todos: [], lastUpdate: new Date() })
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action);
        case TOGGLE_TODO: return toggleTodo(state, action);
        case REMOVE_TODO: return removeTodo(state, action);
        case CLEAR_TODO: return clearTodo(state, action);
    }

    return state;
}
