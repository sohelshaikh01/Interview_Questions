import { useOptimistic, useState } from 'react';


const UseOptimistic1 = () => {
    const [todos, setTodos] = useState([]);

    const [optimisticTodo, setOptimisticTodo] = useOptimistic(
        todos, 
        (oldTodos, newTodo) => [...oldTodos, {text: newTodo, pending: true }]
    );

    // It works similar to useState
    // It takes two arguments: first state for which it working and keep track of it, second is callback function.
    // Callback function takes oldState and newState.

    // It returns an array that has

    const handleAddTodo = async(formData) => {
        const newTodo = formData.get("todo");

        setOptimisticTodo(newTodo);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setTodos((currentTodos) => [
            ...currentTodos,
            { text: newTodo, pending: false },
        ]);
    }; 

  return (
    <div>
        <form action={handleAddTodo}>
            <input type="text" name="todo" placeholder="Enter todo" className="py-1 px-4 outline-none border block" />
            <button type="submit" className="bg-sky-300 py-1 px-4  mt-2" >Add Todo</button>
        </form>

        <ul>
            {optimisticTodo.map((todo, index) => (
                todo.text && <li className='py-1 px-2 bg-neutral-700 border  my-1' key={index}>
                    {todo.text}
                    {todo.pending && <span>(Adding...)</span>}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UseOptimistic1;
