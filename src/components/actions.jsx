// Action type constants
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action creators
export const addTodo = (text: string) => ({
	type: ADD_TODO as typeof ADD_TODO,
	payload: text,
});

export const removeTodo = (id: number) => ({
	type: REMOVE_TODO as typeof REMOVE_TODO,
	payload: id,
});

export const toggleTodo = (id: number) => ({
	type: TOGGLE_TODO as typeof TOGGLE_TODO,
	payload: id,
});

// Types
interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

interface AddTodoAction {
	type: typeof ADD_TODO;
	payload: string;
}

interface RemoveTodoAction {
	type: typeof REMOVE_TODO;
	payload: number;
}

interface ToggleTodoAction {
	type: typeof TOGGLE_TODO;
	payload: number;
}

type TodoAction = AddTodoAction | RemoveTodoAction | ToggleTodoAction;

// Initial state
const initialState: Todo[] = [];

// Reducer
export default function todoReducer(
	state = initialState,
	action: TodoAction
): Todo[] {
	switch (action.type) {
		case ADD_TODO:
			{ const newTodo: Todo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			return [...state, newTodo]; }
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.payload);
		case TOGGLE_TODO:
			return state.map(todo =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);
		default:
			return state;
	}
}
