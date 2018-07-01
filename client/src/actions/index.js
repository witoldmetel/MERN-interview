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

export const addTodo = (todo) => dispatch => {
    axios.post('/todos', todo)
        .then(res => 
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        )
}

export const addSubtask = (todo, id) => {
    return {
        type: ADD_SUBTASK,
        payload: todo,
        id: id
    };
}

export const deleteTodo = (id) => dispatch => {
    axios.delete(`/todos/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        )
}

export const toggleTodo = (id, todo) => dispatch => {
    axios.put(`/todos/${id}`, todo)
        .then(res =>
            dispatch({
                type: 'TOGGLE_TODO',
                payload: todo
            })    
        )
}

export const setTodosLoading = () => {
    return {
        type: 'TODOS_LOADING',
    };
}