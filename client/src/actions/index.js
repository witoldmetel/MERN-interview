import { GET_TODOS, ADD_TODO, DELETE_TODO, ADD_SUBTASK, TODOS_LOADING } from '../actions/types';
import axios from 'axios';

export const getTodos = () => dispatch => {
    dispatch(setTodosLoading());
    axios.get('/todos')
        .then(res => 
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })
        )
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

export const setTodosLoading = () => {
    return {
        type: 'TODOS_LOADING',
    };
}