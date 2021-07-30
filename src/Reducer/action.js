const addtodo=(value)=>{
    return    ({
      type : "ADDTODO",
      payload :value 
    })
}
const updatetodo =(value)=>
{
    return({
        type :"UPDATETODO",
        payload: value
    })
}

const deletetodo=(value)=>{
    return    ({
      type : "DELETETODO",
      payload :value 
    })
}

export {addtodo,updatetodo,deletetodo}