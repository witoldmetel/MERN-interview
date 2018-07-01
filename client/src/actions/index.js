import { GET_TODOS, ADD_TODO, DELETE_TODO, ADD_SUBTASK } from '../actions/types';

export const getTodos = () => {
    return {
        type: GET_TODOS
    };
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export const addSubtask = (todo, id) => {
    return {
        type: ADD_SUBTASK,
        payload: todo,
        id: id
    };
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    };
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    };
}