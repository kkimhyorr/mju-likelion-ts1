interface Todo {
  id: number;
  content: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos?.map((item) => (
        <p key={item.id}>
          {item.id} / {item.content}
        </p>
      ))}
    </>
  );
};

export default TodoList;
