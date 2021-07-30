import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { deletetodo } from '../Reducer/action'
import './comp.css'
import Card from './card'
function List() {
    const todolist = useSelector(state => state.todos)
    const usedispatch = useDispatch()
    console.log(todolist)
    const buttonclicked=(id)=>{
        usedispatch(deletetodo({id}))
    }
    
    return (
        <div>
            
            <table style={{width:"70vw",border:"1px solid white"}}>
                <tr>
                    <th style={{margin:"1px 2rem 1px 8rem"}}>id</th>
                    <th>task</th>
                    <th>timestamp</th>
                    <th>timer operation</th>
                    <th>Delete </th>
                </tr>
                {
                (todolist !== undefined) ? 
                todolist.map((item)=>{
               
                return (<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{item.timestamp}</td>
                <td>{(item.done)? "task done" : <Card id={item.id}/>}</td>
                <td>
                    <button onClick={(e)=> {e.preventDefault();buttonclicked(item.id)}}>Delete record </button> 
                 </td>
                </tr>)

                })  
                :
                <h2>Loading...</h2>              
                }
            </table>
        </div>
    )
}

export default List
