import React, { useState } from 'react';
import styled from 'styled-components';

interface Todo {
  id: number;
  content: string;
}

const Todos = () => {
  const [content, setContent] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const addTodos = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: (todos?.length ?? 0) + 1,
      content: content,
    };

    const newTodos = todos?.concat(newTodo) ?? [newTodo];

    setTodos(newTodos);
    setContent('');
  };

  return (
    <>
      <div>TodoList</div>

      {todos?.map((item) => (
        <p key={item.id}>
          {item.id} / {item.content}
        </p>
      ))}
      <form>
        <input
          placeholder="할 일을 입력해주세요."
          value={content}
          onChange={handleInput}
        />
        <Button type="submit" onClick={addTodos}>
          등록하기
        </Button>
      </form>
    </>
  );
};

export default Todos;

const Button = styled.button``;
