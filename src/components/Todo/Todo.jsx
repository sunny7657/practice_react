export const Todo = ({
  todo: { title, description, id, completed },
  deleteTodo,
  updateTodo,
}) => {
  return (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <button
        onClick={() => updateTodo(id)}
        style={{ marginRight: '15px', height: '26px' }}
      >
        {completed.toString()}
      </button>
      <button onClick={() => deleteTodo(id)} style={{ height: '26px' }}>
        Delete
      </button>
    </li>
  );
};
