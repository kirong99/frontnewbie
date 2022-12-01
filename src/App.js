import Header from './Main/header.js';
import Todo from './Main/Todo.js';
import Calendar from './Main/Calendar/Calendar';
import { Routes, Route } from 'react-router-dom';
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

// 에러 주석
// You cannot render a <Router> inside another <Router>. You should never have more than one in your app
// DevTools failed to load source map: Could not load content for chrome-extension://cfhdojbkjhnklbpkdaibdccddilifddb/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND

export default App;
