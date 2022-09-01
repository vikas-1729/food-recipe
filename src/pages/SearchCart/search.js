import React, { useState, useEffect } from "react";
// import Recipecard from "./searchCart";
// import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("coffee");

  const [data, setData] = useState();

  const getRecipeInfo = async () => {
    let App_Id = "5721b349";
    let App_Key = "7e13d45f8678a26a41c1de4c4b1aa3fb";
    try {
      let url = `https://api.edamam.com/search?app_id=${App_Id}&app_key=${App_Key}&q=${searchValue}`;

      let res = await fetch(url);
      let data = await res.json();

      console.log(data.hits[0]);

      const { recipe } = data.hits;

      const myNewRecipeInfo = {
        recipe,
      };

      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeInfo();
    // eslint - disable - next - line;
  }, [searchValue]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getRecipeInfo}
          >
            Search
          </button>

          <div>
            <img src={data.hits[0].recipe.image}></img>
            {/* <h1>{data.hits[0].recipe.ingredients.label}</h1> */}
            {/* <p>{data.hits[0].recipe.healthLabels}</p>
            <p>{data.hits[0].recipe.totalDaily.CA.label}</p> */}

            {/* {for(const key of Object.keys(data.hits[0])){ */}

            {/* {Object.keys(data.hits[0]).map((curr) => {
              const { image, healthLabels } = curr;
              return (
                <div>
                  {Object.keys(curr.recipe).map((item) => {
                    <img src={item.image}></img>;
                  })}
                  <img src={curr.image}></img>
                </div>
              );
            })} */}

            {/* {data.hits[0].map((obj) => {
              {
                Object.keys(obj).map((curr) => {
                  <h1>curr.image</h1>;
                });
              }
            })} */}
          </div>
        </div>
      </div>

      {/* our temp card  */}
      {/* <Recipecard {...tempInfo} /> */}
    </>
  );
};

export default Temp;
