import { useEffect, useState } from "react";
import ToDoItems from "./components/ToDoItems";
import getAllTodos from "./api/getAllTodos";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from "react-query";
import CreateToDoForm from "./components/CreateToDoForm";

function App() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => getAllTodos(),
    queryKey: ["todos"],
    staleTime: Infinity,
    cacheTime: 0
  });

  if (isLoading) {
    return <ClipLoader />;
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To Do App</h1>
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
