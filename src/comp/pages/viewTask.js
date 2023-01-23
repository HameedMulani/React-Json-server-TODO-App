
import Axios from 'axios';
// import { MDBBtn } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams} from "react-router-dom";


const ViewTask = () => {

    
    // const history = useNavigate();
    const {id} = useParams();
    // alert(id);
    const [task, setTask] = useState({
        title: "",
        desc: ""
    })
    
    const {title, desc} = task;

    useEffect(() => {
        loadUserTask()
    },[])

    const loadUserTask = async () =>{
        const res = await Axios.get(`http://localhost:3300/todo/${id}`)
        setTask(res.data)
    }
  
  
    return ( 
        <div className='container my-3'>
            <h1 className='display-4'>Task: </h1>
            <hr />
            <ul className='list-group w-50 ms-5 fs-2'>
                <li >Title : </li>
                <p>{title}</p>
                <li>Descrepition: </li>
                <p>{desc}</p>
            </ul>
            <hr />
            <Link className='btn btn-primary mt-4 ms-4' to='/'> Back </Link>
        </div>
        );
}
 
export default ViewTask;