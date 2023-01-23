
import Axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { useNavigate, useParams} from "react-router-dom";

const EditTodo = () => {

    const history = useNavigate();
    const {id} = useParams();
    // alert(id);
    const [task, EditTask] = useState({
        title: "",
        desc: ""
    })
    const {title, desc} = task;
    const onChangeTodo = (e) =>{
        EditTask({...task,[e.target.name]: e.target.value })
        // console.log(e.target.value)
    }
    useEffect(() => {
        loadUserTask()
    },[])

    const onSubmit = async e =>{
        e.preventDefault()
        await Axios.put(`http://localhost:3300/todo/${id}`,task)
        .catch(err => console.log('Login: ', err));
        history("/")
    }
 
    
    const loadUserTask = async () =>{
        const res = await Axios.get(`http://localhost:3300/todo/${id}`)
        EditTask(res.data)
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Add Task</h1>
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={title} onChange={e => onChangeTodo(e)} />
                    <div id="emailHelp" className="form-text">Title should be in 1 to 4 Words.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Enter Descreption</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="desc" value={desc} onChange={e => onChangeTodo(e)} />
                </div>
                <MDBBtn type="submit" color='info'>Uptade</MDBBtn>
            </form>
        </div>
    );
}

export default EditTodo;