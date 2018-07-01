import uuid from 'uuid';
import { GET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO, ADD_SUBTASK } from '../actions/types';

const initialState = {
    todos: [
            { id: uuid(), title: 'Buy books', completed: false, subtasks: [] },
            { id: uuid(), title: 'Buy cars', completed: false, subtasks: [] },
            { id: uuid(), title: 'Buy milk', completed: false, subtasks: [] },
            { id: uuid(), title: 'Buy apple', completed: false, subtasks: [] }
        ]
    }

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo =>
                    (todo.id === action.payload) ?
                    {
                        ...todo,
                        completed: !todo.completed
                    } :
                    todo)
                }
        case ADD_SUBTASK:
            return {
                todos: state.todos.map(todo =>
                    (todo.id === action.id) ? {
                        ...todo,
                        subtasks: [action.payload, ...todo.subtasks]
                    } :
                    todo)
                }
        default:
            return state
    }
}