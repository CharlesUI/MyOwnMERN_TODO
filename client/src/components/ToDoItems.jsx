import React, { useEffect, useMemo, useState } from "react";
import updateToDo from "../api/updateTodo";
import deleteTodo from "../api/deleteTodo";
import { useMutation, useQueryClient } from "react-query";
import debounce from "lodash.debounce";

export default function ToDoItems({ todo }) {

  const queryClient = useQueryClient();
  //state that manages the new todo in order to make sure that the user input is not laggy
  const [newTodo, setNewTodo] = useState(todo);
  //state for update button
  const [isDisabled, setIsDisabled] = useState(true)


  //----------------------------------------------------------------------------------------------------------------------
  const { mutate: toggleUpdate } = useMutation({
    mutationFn: (updatedTodo) => {
      console.log("request made");
      updateToDo(updatedTodo);
    },
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  const { mutate: toggleDelete } = useMutation({
    mutationFn: (updatedTodo) => {
      console.log('delete')
      deleteTodo(updatedTodo)
    },
    onSuccess: () => queryClient.invalidateQueries(['todos'])
  })

  //debounce method to make sure that controlled inputs does not lag
  const debounceUpdateTodo = useMemo(() => {
    return debounce((updatedTodo) => toggleUpdate(updatedTodo), 500);
  }, [toggleUpdate]);

  //BUTTON FUNCTIONS
  const toggleButtonUpdate = () => {
    setIsDisabled(prevData => !prevData)
    debounceUpdateTodo(newTodo)
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name="completed"
        disabled={isDisabled}
        checked={newTodo.completed}
        onChange={(e) => {
          const updatedTodo = {
            ...newTodo,
            completed: !newTodo.completed,
          }
          setNewTodo(updatedTodo);
        }}
      />
      <input
        type="text"
        name="text"
        disabled={isDisabled}
        value={newTodo.text}
        onChange={(e) => {
          const updatedTodo = {
            ...newTodo,
            text: e.target.value,
          }
          setNewTodo(updatedTodo);
        }}
      />
      <button onClick={toggleButtonUpdate}>{isDisabled ? 'Update' : 'Finish'}</button>
      <button onClick={() => toggleDelete(newTodo)}>Delete</button>
    </div>
  );
}

