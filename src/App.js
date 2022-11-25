import Header from './Main/header.js';
import Todo from './Main/Todo.js';
import Calendar from './Main/Calendar/Calendar';
import { HashRouter as Routes, Route } from 'react-router-dom';
import './App.css';
import './main.css';

function App() {
  return(
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Todo />}/>
        <Route path = "/Todo" element={<Todo />}/>
        <Route path = "/Calendar" element={<Calendar />}/>
      </Route>
    </Routes>
)}

export default App;
