import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{
        getUser:(state, action) => {
            state.users = action.payload.map(user => {
                return {id: user._id, name: user.name, email:user.email, age:user.age}
            }
            )
        },
        addUser:(state, action) => {
            state.users.push(action.payload)
        },
        editUser:(state, action) =>{
            const index = state.users.findIndex(u => u.id === action.payload.id)
            state.users[index] =  {
                id:action.payload.id,
                name:action.payload.name,
                email:action.payload.email,
                age:action.payload.age
            }
        },
        deleteUser:(state, action) => {
            const id = action.payload.id;
            state.users = state.users.filter(u => u.id !== id)
        }

    }
})

export const {getUser, addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice.reducer