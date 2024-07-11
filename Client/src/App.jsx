import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Users from './Users';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add_User from './Add_User.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './Redux/userSlice.jsx';
import axios from 'axios';
import Edit_User from './Edit_User.jsx';



function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async() => {
        try{
        const response = await axios.get("http://localhost:3001");
        dispatch(getUser(response.data))
        }
        catch(err){
            console.log(err)
        }
    }
    fetchData();
}, [])
  return (
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Users />}></Route>
      <Route path ='/add' element = {<Add_User />}></Route>
      <Route path ='/edit/:id' element = {<Edit_User />}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App
