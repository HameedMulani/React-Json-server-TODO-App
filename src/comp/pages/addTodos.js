import  Axios  from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const history = useNavigate();

    const [todo, addTask] = useState({
        title: "",
        desc: ""
    })
    const {title, desc} = todo;
    const onChangeTodo = (e) =>{
        addTask({...todo,[e.target.name]: e.target.value })
        // console.log(e.target.value)
    }

    const onSubmit = async e =>{
        e.preventDefault()
        await Axios.post("http://localhost:3300/todo",todo)
        .catch(err => console.log('Login: ', err));
        history("/")
    }

    return (<div className="container text-transparent">
        <div className="py-4">
            <h1>Add Task</h1>
        </div>
        <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
                <label className="form-label text-transparent">Enter Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={title} onChange={e => onChangeTodo(e)}/>
                <div id="emailHelp" className="form-text">Title should be in 1 to 4 Words.</div>
            </div>
            <div className="mb-3">
                <label className="form-label text-transparent">Enter Descreption</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="desc" value={desc} onChange={e => onChangeTodo(e)} />
            </div>
            <MDBBtn type="submit" color='info'>Submit</MDBBtn>
        </form>
    </div>
    );
}

export default AddTodo;