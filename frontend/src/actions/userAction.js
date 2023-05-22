import axios from "axios"
export const registerUser=(user)=>async dispatch=>{
    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
        const response = await axios.post('https://slice-backend.onrender.com/api/users/register',user);
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }
    catch (err) {
        dispatch({type:'USER_REGISTER_FAILED',payload:err})
    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    try{
        const response = await axios.post('https://slice-backend.onrender.com/api/users/login',user);
        dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
        window.location.href='/'
    }
    catch (err) {
        dispatch({type:'USER_LOGIN_FAILED',payload:err})
    }
}