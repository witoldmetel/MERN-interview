import uuid from 'uuid';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    todos: [
            { id: uuid(), title: 'Buy books' },
            { id: uuid(), title: 'Buy cars' },
            { id: uuid(), title: 'Buy milk' },
            { id: uuid(), title: 'Buy apple' }
        ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state
            }
        default:
            return state
    }
}