import type { Action } from 'redux';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// State type
export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export type TodoState = Todo[];

// Initial state
const initialState: TodoState = [];

// Reducer
export default function todoReducer(
	state = initialState,
	action: Action & { payload?: unknown }
): TodoState {
	switch (action.type) {
		case ADD_TODO:
			if (typeof action.payload === 'string') {
				const newTodo: Todo = {
					id: Date.now(),
					text: action.payload,
					completed: false,
				};
				return [...state, newTodo];
			}
			return state;
		case REMOVE_TODO:
			if (typeof action.payload === 'number') {
				return state.filter(todo => todo.id !== action.payload);
			}
			return state;
		case TOGGLE_TODO:
			if (typeof action.payload === 'number') {
				return state.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				);
			}
			return state;
		default:
			return state;
	}
}
