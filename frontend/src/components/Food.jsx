import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import {useDispatch,useSelector} from 'react-redux';
import { addToCart } from "../actions/cartAction";
const Food = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  function addtoCart(){
    dispatch(addToCart(data,quantity,varient));
  }
  return (
    <div
      className="shadow-lg p-3 mb-4 bg-body-tertiary rounded"
      style={{ margin: "0 60px" }}
    >
      <div onClick={handleShow}>
        <h1 style={{ fontSize: "20px" }}>{data.name}</h1>
        <img
          src={data.image}
          className="img-fluid mb-2"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <div className="flex-container ">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {data.varients.map((v) => {
              return <option value={v}>{v}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-3 w-100">
          <h1 style={{ fontSize: "20px" }}>
            {" "}
            Price: {data.prices[0][varient] * quantity} Eth/-
          </h1>
        </div>
        <div className="w-100 m-1">
          <button className="btn" onClick={addtoCart}>Add to Cart</button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={data.image} className="img-fluid mb-2" style={{ width: "250px", height: "250px" }} />
          <p>{data.description}</p>
        </Modal.Body>
        <Modal.Footer><button className="btn" onClick={handleClose}>close</button></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Food;
