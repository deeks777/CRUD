import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './Redux/userSlice';


function Users() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch();

    const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/delete/${id}`)
        .then(result => {
            dispatch(deleteUser({id}))
        })
        .catch(err => console.log(err))
    }
    


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='p-3 rounded bg-white w-50'>
                <Link to = '/add' className='btn btn-success btm-sm'>
                    Add +
                </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>email</th>
                            <th>age</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            users.map(user => {
                                return (<tr key = {user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to ={`/edit/${user.id}`} className='btn btn-success btn-sm me-2'>Edit</Link>
                                        <button className='btn btn-danger btn-sm' onClick = {() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users