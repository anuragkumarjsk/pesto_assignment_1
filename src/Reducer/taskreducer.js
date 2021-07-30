
const todosreducer = (state=[],action)=>{
 switch(action.type) {
   case 'ADDTODO': return [...state,action.payload];
   break
   case 'UPDATETODO':  let newarr = []
                      newarr = state.map( (item)=>{
                        if(item.id === action.payload.id)
                        {
                          item.timestamp = action.payload.timestamp
                          item.done = true
                        }
                        return item
                      }) 
              
                      return [...newarr]

   break
   case 'DELETETODO': let arr=[]
                      arr = state.filter(obj => obj.id !== action.payload.id  )
                      return arr
     break
   default: return state
}
}

export default todosreducer