import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "./Redux/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function Add_User(){

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const handleClick = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:3001/add_user', {name, email, age})
        .then(result => {
                dispatch(addUser(result.data))
                navigate('/')
            })
        .catch(err => console.log(err) )
       }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="p-3 w-50 bg-white rounded">
                <form onSubmit = {handleClick}>
                    <h2>Add User</h2>
                    <div className="mb-3">
                        <label htmlFor="Name">Name</label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control" 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"  
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number"
                            placeholder="Enter Age"
                            className="form-control"  
                            onChange={(e) => setAge(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-primary d-flex justify-content-center">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Add_User