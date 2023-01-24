import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [todos, setTodos] = useState([]);
    const [tablelight, setTableLight] = useState('table-dark')
    const [textColor, setTextColor] = useState('')
    useEffect(() => {
        loadtodos()
    }, [])

    // get todos from api
    const loadtodos = async () => {
        const result = await axios.get("http://localhost:3300/todo")
        setTodos(result.data.reverse())
    }

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:3300/todo/${id}`)
        loadtodos()
    }
    return (
        <div className='container my-3 '>
            <div className='card bg-dark bg-gradient p-3 '>
                <div className='card-title d-flex justify-content-between'>
                    <h2>Today's List</h2>
                    <div className="form-check form-switch mx-4 ">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() =>{
                            if(tablelight === 'table-dark') setTableLight('table-warning')
                            else setTableLight('table-dark')
                        }}/>
                        <label className="form-check-label text-light " for="flexSwitchCheckDefault">
                            light Mode
                        </label>
                    </div>
                </div>
                <div className='card-body'>
                    <table className={`table table-hover fs-6 fw-bold ${tablelight}`}>
                        <thead className='bg-info bg-gradient '>
                            <tr>
                                <td>Status</td>
                                <td>Title</td>
                                <td>Desciption</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {todos.map((todo, index) => (
                                <tr className='m-3'>
                                    <th><input type="checkbox" className='ms-4' defaultChecked={false} /></th>
                                    <td>{todo.title}</td>
                                    <td>{todo.desc}</td>
                                    <td>
                                        <Link className='ms-3 btn' to={`/view/${todo.id}`}><i className="fas fa-eye"></i></Link>
                                        <Link className='ms-3 btn' to={`/edit/todo/${todo.id}`}><i class="fas fa-pen"></i></Link>
                                        <Link className='ms-3 btn' onClick={() => deleteTask(todo.id)}><i className="fas fa-trash-alt"></i></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;