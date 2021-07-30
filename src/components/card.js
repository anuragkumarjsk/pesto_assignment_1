import React,{useRef, useState} from 'react'
import { updatetodo } from '../Reducer/action'
import {useDispatch} from 'react-redux'


function Card(props) {
    const [count, setcount] = useState(0)
    const [stoptimer,setstoptimer] = useState(false)
    const someref = useRef(stoptimer)
    someref.current =stoptimer
    let g = null; 
    const usedispatch = useDispatch()

    function clicked(){
       console.log('clicked')
       let a=0
       g = setInterval(() => {
           a=a+1
           console.log(a,g)
           setcount(a)
           if(someref.current)
           {clearInterval(g)}
       },1000);
   }

   function unclicked(){
       console.log('unclicked',g)
       setstoptimer(true)
     try{
        if(props.id)
        {
            usedispatch(updatetodo({id:props.id,timestamp:count}))
        }
        }
       catch(e){
           console.log(e)
       }
       clearInterval(g);
   }

    return (<>
         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> 
            <button  onClick={(e)=>{e.preventDefault(); clicked()}}>Start</button>
           <h3 style={{margin:"2px 2rem 2px 2rem"}}>{count}</h3>
           <button onClick={(e)=>{e.preventDefault(); unclicked()}}>Stop</button>
           </div>
    </>)
}
export default Card
