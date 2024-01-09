import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import createTodo from "../api/createTodo";
import { IoIosCreate } from "react-icons/io";

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
      <textarea
        name="text"
        value={todo.text}
        onChange={(e) => setTodo({ text: e.target.value })}
        spellCheck={false}
        placeholder="Input your to do here..."
      />
      <button><IoIosCreate /></button>
    </form>
  );
}
