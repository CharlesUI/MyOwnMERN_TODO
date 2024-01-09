import { useEffect, useState } from "react";
import ToDoItems from "./components/ToDoItems";
import getAllTodos from "./api/getAllTodos";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from "react-query";
import CreateToDoForm from "./components/CreateToDoForm";
import { FcTodoList } from "react-icons/fc";

function App() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => getAllTodos(),
    queryKey: ["todos"]
  });

  if (isLoading) {
    return <ClipLoader />;
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="title">TO DO<FcTodoList /> CRUD Operation</h1>
        <CreateToDoForm />
        {isLoading ? (
          <ClipLoader />
        ) : (
          todos?.map((todo) => {
            return <ToDoItems key={todo._id} todo={todo} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
