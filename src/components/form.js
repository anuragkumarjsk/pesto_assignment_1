import React,{useState} from 'react'
import {uuid} from 'uuidv4'
import { addtodo} from '../Reducer/action'
import {useDispatch} from 'react-redux'
function Form() {
    const [task, settask] = useState("")
    const dispatch =useDispatch()

    function handleinputchange(e){
        settask(e.target.value)
    }
    function buttonclick(){
        dispatch( addtodo({id:uuid(),task,timestamp:0,done:false}))
        settask("")
    }
    return (
        <div className="formcomp">
            <input type="text" name="task" value={task} onChange={handleinputchange}/>
            <button onClick={buttonclick}>addtask</button>
        </div>
    )
}

export default Form
