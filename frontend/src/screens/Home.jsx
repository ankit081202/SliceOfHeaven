import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Food from "../components/Food";
import { getFoodDetails } from "../actions/action";
const Home = () => {
  const dispatch = useDispatch();
  const foodstate = useSelector((state) => state.getAllFoodReducer);
  const { foods, error, loading } = foodstate;
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(getFoodDetails());
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div >
      <div className="searchInput_Container row justify-content-center mt-5">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          className="form-control"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          style={{ width: "500px", marginBottom: "25px" }}
        />
      </div>
      <div className="row">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Something went wrong....</h1>
        ) : (
          foods
            .filter((food) => {
              if (searchTerm == "") {
                return food;
              } else if (
                food.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return food;
              }
            })
            .map((food) => {
              return (
                <div className="col-md-4" key={food._id}>
                  <div>
                    <Food data={food} />
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default Home;
