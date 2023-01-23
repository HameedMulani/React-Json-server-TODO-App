import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Home from './comp/pages/home';
import About from './comp/pages/about';
import Contact from './comp/pages/contact';
import Navbar from './comp/layout/Navbar';
import PageNotFound from './comp/pages/PageNotFound';
import AddTodo from './comp/pages/addTodos';
import EditTodo from './comp/pages/editTodo';
import ViewTask from './comp/pages/viewTask';


function App(props) {
  return (
    <div className='full mw-100 mh-100 bg-dark bg-gradient text-white'>
      <center><h1 className='container text-warning'>TODO APP</h1></center>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add/todo' element={<AddTodo/>}/>
          <Route path='/view/:id' element={<ViewTask/>}/>
          <Route path='/edit/todo/:id' element={<EditTodo/>}/>
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
