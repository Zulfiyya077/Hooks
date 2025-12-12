import React from 'react';
import UserList from './components/UserList/UserList';
import './App.css';
import TextRotation from './components/textRotation/TextRotation';
import Darkmode from './components/Darkmode/Darkmode';
import CurrentTime from './components/CurrentTime/CurrentTime';
import WindowResize from './components/WindowResize/WindowResize';
import CharCount from './components/CharCount/CharCount';
import Bgcolor from './components/Bg-color/Bg-color';
import MouseTracker from './components/MousTracker/MouseTracker';
import Stopwatch from './components/Stopwatch/Stopwatch';
import CountDown from './components/CountDown/CountDown';
import AnimateText from './components/AnimateText/AnimateText';
import FocusInput from './components/FocusInput/FocusInput';
import Tab from './components/Tab/Tab';



function App() {


  return (
    <>
    <UserList />

     <TextRotation />

     <Darkmode />

     <CurrentTime />

     <WindowResize />

     <CharCount />

     <Bgcolor />

     <MouseTracker />

     <Stopwatch />

     <CountDown />

     <AnimateText />

     <FocusInput />

   <Tab />
    </>

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





