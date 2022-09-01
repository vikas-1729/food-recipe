import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Recipe = (props)=>{
    const [recipeData,setRecipeData] = useState(null);
    const {recipeId} = useParams();
    useEffect(()=>{
         if(recipeId){
            console.log('okk');
            getRecipeInfo();
         }   
    },[recipeId]);
    
    const getRecipeInfo = async () => {
        let App_Id = "5721b349";
        let App_Key = "7e13d45f8678a26a41c1de4c4b1aa3fb";
        try {
          let url = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${App_Id}&app_key=${App_Key}`
          
          let res = await fetch(url);
          let data = await res.json();
    
          setRecipeData(data);
    
        } catch (error) {
          console.log(error);
        }
      };
    

    const item = recipeData?.recipe || null;
    return (
        <div>
            <Link to ='/'>Home</Link>
            {item ? (<div className="recipe">
            Name:{item.label}
            IMage:<img alt="food-img" src = {item.image}/>
            Calories:{item.calories}
            Ingredients:{item.ingredients.length}
        
        </div>):'Nothing to render'}

        </div>
        )
}

export default Recipe;