import { ADD_TODO } from './Constants'

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: 'The newTodo param'
})
