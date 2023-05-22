export const addToCart = (data, quantity, varient) => (dispatch,getState) => {
    var cartItem = {
      name: data.name,
      _id: data._id,
      image: data.image,
      varient: varient,
      quantity: Number(quantity),
      prices: data.prices,
      price: data.prices[0][varient] * quantity,
    };
    if(cartItem.quantity > 10){
      alert("You acn't add more than 10 items");
    }
    else if(cartItem.quantity === 0){
      dispatch({type:'DELETE_FROM_CART',payload:data})
      const cartItems = getState().cartReducer.cartItems
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
    else{
      dispatch({ type: 'ADD_TO_CART', payload: cartItem});
      const cartItems = getState().cartReducer.cartItems
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
  };
  
  export const deleteFromCart = (data)=> (dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART',payload:data})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  }