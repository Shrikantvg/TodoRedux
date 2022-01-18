import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selector';
import { deleteTodo } from '../redux/actions';
import { Todo } from './Todo';

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <Box my={3}>
      {filterTodos.map((todo, index) => (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '700px' }}>
            <Todo key={`todo-${todo.id}`} todo={todo} />
          </div>
          <button
            style={{
              backgroundColor: 'gray',
              margin: '',
              width: '100px',
              height: '40px',
            }}
            onClick={() => dispatch(deleteTodo(index))}
          >
            Delete
          </button>
        </div>
      ))}
    </Box>
  )
}
