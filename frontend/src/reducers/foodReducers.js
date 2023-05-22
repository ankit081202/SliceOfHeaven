export const getAllFoodReducer= (state={foods : []},action) =>{
    switch(action.type){
        case 'GET_FOOD_REQUEST' : return{
            loading:true,
            ...state
        }
        case 'GET_FOOD_SUCCESS' : return{
            loading:false,
            foods : action.payload
        }
        case 'GET_FOOD_FAILED' : return{
            loading:false,
            foods : action.payload
        }
        default : return state
    }
}