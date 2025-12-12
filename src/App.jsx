import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'




function App() {

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {

    const fetchtodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
        setTodo(response.data);
        setLoading(false);
        console.log(response.data);
      }
      catch (error) {
        console.error("Error fetching todos:", error);
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    }

    fetchtodos();
  }, []);


  const deleteTodo = (id) => {
    setTodo(todo.filter(item => item.id !== id));
  }

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        userId: 1,
        id: todo.length + 1,
        title: input,
        completed: false
      };
      setTodo([newTodo, ...todo]);
      setInput("");
    }
  }





  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />

      <button onClick={addTodo}>Add Todo</button>

      {loading ? (
        <p>Loading...</p>)
        : (
          <ul>
            {todo.map((item) => (
              <li key={item.id}>
                {item.title}
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}


    </div>
  )

}
  export default App;






































































// fetchusers from https://jsonplaceholder.typicode.com/users and display name and email in a list axios
// function App() {

//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const fetchusers = async () => {

//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users')

//         setUser(response.data);
//         setLoading(false);
//       }
//       catch (error) {
//         console.error("Error fetching users:", error);
//         setLoading(false);
//       }
//       finally {
//         setLoading(false);
//       }
//     };


//     fetchusers();
//   }, []);


//   return (
//     <>


//       <div className="App">
//         <h1>Users List</h1>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <ul>
//             {user.map((user) => (
//               <li key={user.id}>
//                 {user.name} - {user.email}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//     </>
//   )
// }





