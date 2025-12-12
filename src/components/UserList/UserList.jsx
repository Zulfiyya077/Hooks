import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserList.module.css';  // <-- module.css import DÜZGÜN

const UserList = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchtodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10');
        setTodo(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchtodos();
  }, []);

  const deleteTodo = (id) => {
    setTodo(todo.filter(item => item.id !== id));
  };

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
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>

      <div className={styles.inputBox}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className={styles.input}
        />

        <button onClick={addTodo} className={styles.addBtn}>Add Todo</button>
      </div>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <ul className={styles.todoList}>
          {todo.map((item) => (
            <li key={item.id} className={styles.todoItem}>
              {item.title}
              <button
                onClick={() => deleteTodo(item.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
