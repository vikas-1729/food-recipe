import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
// import Recipecard from "./searchCart";
// import "./style.css";

const SearchRecipe = () => {
  const [searchValue, setSearchValue] = useState("");

  const [recipeList, setRecipeList] = useState([]);

  const getRecipeInfo = async () => {
    let App_Id = "5721b349";
    let App_Key = "7e13d45f8678a26a41c1de4c4b1aa3fb";
    try {
      let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${App_Id}&app_key=${App_Key}`
      //let url = `https://api.edamam.com/search?app_id=${App_Id}&app_key=${App_Key}&q=${searchValue}`;

      let res = await fetch(url);
      let data = await res.json();

      setRecipeList(data.hits);
      console.log(data.hits);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(searchValue.length>2){
      getRecipeInfo();
    }
    
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
          
          </div>
        </div>
        <div className="search-result">
          <ul>
          {recipeList.map((item,index) => {
            const data = item.recipe;
                  return (
                    <li>
                      <div className="recipe">
                      Name:{data.label}
                      Image:<img alt="food-img" src = {data.image}/>
                      Calories:{data.calories}
                      Ingredients:{data.ingredients.length}
                      <Link to={{'showRecipe':`/${item._links.self.href}`}}>
                        <span className="link">Show Recipe</span>
                      </Link>
                    </div>
                </li>
                  )
            })}

          </ul>
        </div>
      </div>

      {/* our temp card  */}
      {/* <Recipecard {...tempInfo} /> */}
    </>
  );
};

export default SearchRecipe;
