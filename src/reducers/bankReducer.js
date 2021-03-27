console.log("init bank reducer")
export const initialBank =  {id:"", title:"", address:""}
let currentId = 0;
export default (state=[], action) => {
    switch (action.type) {
      
      case bankActions.add:{
        action.payload.id =currentId++; 
        return [...state, action.payload];
      }
      case bankActions.update:
          return state.map( i=> i.id == action.payload.id? action.payload : i)
      
      case bankActions.delete:{
          const index = state.findIndex(s => s.id == action.payload.id);
          console.log(index)
          if (index > -1){
            let newState = [...state]
            newState.splice(index,1)
            return newState
          }
          return state
      }

      case bankActions.reset: return []
      
      default:
        throw new Error();
    }
}

export const bankActions = {
  add: 'add',
  update:'update',
  delete:'delete',
  reset:'reset'
}