import { Todo } from 'components/Todo/Todo';

export const TodoList = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <ol>
      {todo.map(el => (
        <Todo
          todo={el}
          key={el.id}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ol>
  );
};
