const initialState = {
   "paypalPaymentRendered":false
  }

export const paypalReducer=(state=initialState,action)=>
{
switch(action.type)
{

    case action.type:
        return{
            ...state,
            "paypalPaymentRendered":true
        }
    default:
        return state;
    
}


}