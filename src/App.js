
import Header from './Main/header.js';
import Todo from './Main/Todo.js';
import Join from './Login/Join.js';
import Login from './Login/Login.js';
import Calendar from './Main/Calendar/Calendar';
import { Routes, Route } from 'react-router-dom';
import events from './Main/Calendar/events.js';
import './App.css';
import './main.css';



function App() {
  return(
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Todo event={events} />}/>
        <Route path = "/Todo" element={<Todo event={events} />}/>
        <Route path = "/Login" element={<Login />}/>
        <Route path = "/Join" element={<Join />}/>
        <Route path = "/Calendar" element={<Calendar />}/>
      </Route>
    </Routes>
)}
export default App;
