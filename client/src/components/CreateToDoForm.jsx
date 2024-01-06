import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import createTodo from "../api/createTodo";

export default function CreateToDoForm() {
  const [todo, setTodo] = useState({
    text: '',
    completed: false
  });

  const queryClient = useQueryClient()

  const { mutate: toggleCreate } = useMutation({
    mutationFn: (newTodo) => createTodo(newTodo),
    onSuccess: () => queryClient.invalidateQueries(['todos'])
  })

  const createData = (e) => {
    e.preventDefault()
    if(!todo.text) return
    toggleCreate(todo)
    setTodo({text: ''})
  }

  return (
    <form onSubmit={createData} className="todo-form">
      <input
        type="text"
        name="text"
        value={todo.text}
        onChange={(e) => setTodo({ text: e.target.value })}
      />
      <button>Create</button>
    </form>
  );
}
