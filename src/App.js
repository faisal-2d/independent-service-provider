import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
