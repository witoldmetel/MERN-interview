import {
	GET_TODOS,
	ADD_TODO,
	DELETE_TODO,
	TOGGLE_TODO,
	ADD_SUBTASK,
	TODOS_LOADING,
} from '../actions/types';

const initialState = {
	todos: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload,
				loading: false,
			};
		case ADD_TODO:
			return {
				...state,
				todos: [action.payload, ...state.todos],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo._id !== action.payload),
			};
		case TOGGLE_TODO:
			return {
				todos: state.todos.map((todo) =>
					todo.id === action.payload
						? {
								...todo,
								completed: !todo.completed,
						  }
						: todo
				),
			};
		case ADD_SUBTASK:
			return {
				todos: state.todos.map((todo) =>
					todo.id === action.id
						? {
								...todo,
								subtasks: [action.payload, ...todo.subtasks],
						  }
						: todo
				),
			};
		case TODOS_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
