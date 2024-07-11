import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { addUser, editUser } from "./Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Edit_User = () => {
    const {id} = useParams();
    const users = useSelector(state => state.users.users)
    const user = users.find(u => u.id === id);
    // console.log(user)

    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);

    const navigate = useNavigate();

    const handleEdit = (e) =>{
        e.preventDefault()

        axios.put(`http://localhost:3001/edit/${id}`, {name, email, age})
        .then(result => {
                dispatch(editUser({id, name, email,age}))
                navigate('/');
            })
        .catch(err => console.log(err) )
       }


    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="p-3 w-50 bg-white rounded">
                <form onSubmit={handleEdit} >
                    <h2>Add User</h2>
                    <div className="mb-3">
                        <label htmlFor="Name">Name</label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control" 
                            onChange={(e) => setName(e.target.value)} 
                            value = {name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"  
                            onChange={(e) => setEmail(e.target.value)} 
                            value = {email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number"
                            placeholder="Enter Age"
                            className="form-control"  
                            onChange={(e) => setAge(e.target.value)} 
                            value = {age}
                        />
                    </div>
                    <button className="btn btn-primary d-flex justify-content-center">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit_User