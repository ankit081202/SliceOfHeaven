import React from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartAction";
const CartScreen = ({ state }) => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = Number(cartItems.reduce((x,item) => x+item.price,0))/10000000
  const t = subtotal.toString()
  const amount = { value: ethers.utils.parseEther(t) }
  const dispatch = useDispatch();
  const buy = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = "Ankit";
    const message = "Hello";
    console.log(name, message, contract);
    const transaction = await contract.buy(message, amount);
    await transaction.wait();
    alert("Transaction is done");
    localStorage.removeItem('cartItems');
    window.location.reload()
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 style={{ fontSize: "40px" }}>MY CART</h2>
        {cartItems.map((item) => {
          return (
            <div
              className="flex-container"
              style={{ borderBottom: "1px solid", marginBottom: "10px" }}
            >
              <div className="text-left  m-1 w-100">
                <h4>
                  {item.name} [{item.varient}]
                </h4>
                <h4>
                  Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h4>
                <h5 style={{ display: "inline" }}>Quantity : </h5>
                <i
                  className="fa fa-minus"
                  style={{ color: "red" }}
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                  }}
                ></i>
                <b style={{ margin: "5px" }}>{item.quantity}</b>
                <i
                  className="fa fa-plus"
                  style={{ color: "green" }}
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity+1 , item.varient));
                  }}
                ></i>
              </div>
              <div className="m-1 w-100 mt-2">
                <img
                  src={item.image}
                  style={{ height: "80px", width: "80px", marginRight: "20px" }}
                  alt=""
                />
                <i
                  className="fa fa-trash "
                  style={{ color: "red" }}
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        <div className="col mt-5">
            <h3>Subtotal : {subtotal} /-</h3>
        </div>
        <button
            className="btn btn-primary"
            onClick={buy}
            disabled={!subtotal}
          >
            Pay
          </button>
      </div>
    </div>
    
  );
};

export default CartScreen;
