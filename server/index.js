import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userModel from './Models/User.js';

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://deekshithyk:deekshithyk@cluster0.ykuvmiu.mongodb.net/CRUD")

app.get('/', (req, res) => {
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/add_user', (req, res) => {
    userModel.create(req.body)
        .then(user => {
            res.json(user)})
        .catch(err => res.json(err))
})

app.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    }
    ).then(user => res.json(user))
    .catch(err => res.json(err))
})


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server listening in port 3001')
})