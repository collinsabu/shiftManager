import React, { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://shift-manager-eight.vercel.app/api/todo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await response.json();
        setTodos(data.todos); // Assuming the response has a 'todos' field
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="container mt-4">
      {isLoading && <p className="text-white flex justify-center items-center p-10">Loading Todo...</p>} {/* Show loading message while fetching data */}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && (
        <div className="">
          {todos.length > 0 ? (
            <div className=" ">
              {todos.map((todo) => (
                <div key={todo._id} className="mb-4 bg-green-200 w-full py-1 px-2">
                  <div className="flex justify-between items-center">
                    <p className="mb-0 text-[16px] font-semibold">{todo.task}</p>
                    <div>
                      <RemoveBtn id={todo._id} />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-[14px] w-[200px]">{todo.description}</p>
                    <div className="flex font-semibold">
                      <p className="text-[11px] mx-2">{todo.formattedDate}</p>
                      <p className="text-[11px]">{todo.formattedTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No todos found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
