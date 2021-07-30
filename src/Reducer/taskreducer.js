
const todosreducer = (state=[],action)=>{
 switch(action.type) {
   case 'ADDTODO': return [...state,action.payload];
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

   case 'DELETETODO': let arr=[]
                      arr = state.filter(obj => obj.id !== action.payload.id  )
                      return arr
   default: return state
}
}

export default todosreducer