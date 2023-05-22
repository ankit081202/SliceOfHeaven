import axios from "axios"
export const getFoodDetails=()=>async dispatch=>{
    dispatch({type:'GET_FOOD_REQUEST'})

    try{
        const response = await axios.get('https://slice-backend.onrender.com/api/foods/allData');
        dispatch({type:'GET_FOOD_SUCCESS',payload:response.data})
    }
    catch (err) {
        dispatch({type:'GET_FOOD_FAILED',payload:err})
    }
}