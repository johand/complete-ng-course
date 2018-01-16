import { tassign } from 'tassign';
import { INCREMENT, DECREMENT } from 'app/actions';


export interface IMessagingState {
    newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
    newMessages: 0
}

function increment(state, action) {
    return tassign(state, { newMessages: state.newMessages + 1 });
}

function decrement(state, action) {
    return tassign(state, { newMessages: state.newMessages - 1 });
}

function addTodo(state, action) {
    var newTodo = { id: state.todos.length + 1, title: action.title };

    return tassign(state, {
        todos: state.todos.concat(newTodo),
        lastUpdate: new Date()
    });
}

function toggleTodo(state, action) {
    var todo = state.todos.find(t => t.id === action.id);

    // Now, we need to find the position of this item in the array.
    var index = state.todos.indexOf(todo);

    return tassign(state, {
        todos: [
            ...state.todos.slice(0, index),
            tassign(todo, { isCompleted: !todo.isCompleted }),
            ...state.todos.slice(index + 1),
        ],
        lastUpdate: new Date()
    });
}

function removeTodo(state, action) {
    return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
    });
}

function clearTodos(state, action) {
    return tassign(state, {
        todos: [],
        lastUpdate: new Date()
    });
}


export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
    switch (action.type) {
        case INCREMENT: return increment(state, action);
        case DECREMENT: return decrement(state, action);
    }

    return state;
}
