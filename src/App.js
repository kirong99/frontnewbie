
import Header from './Main/header.js';
import Todo from './Main/Todo.js';
import Join from './Login/Join.js';
import Login from './Login/Login.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './main.css';



function App() {
  return(
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Todo />}/>
        <Route path = "/Login" element={<Login />}/>
      </Route>
    </Routes>
)}

// function App(){
//   return(
//     <div>
//       <Header />
//       <Todo />
//     </div>
//   )
// }

export default App;
