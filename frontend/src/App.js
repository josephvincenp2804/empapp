
import './App.css';
import Navbar from './components/Navbar';
import Add from './components/Add';
import View from './components/View';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
    <Route path='/add' element={<Add data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>}></Route>
    <Route path='/view' element={<View/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
