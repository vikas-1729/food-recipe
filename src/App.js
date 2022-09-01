import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./pages/SearchCart/Recipe";
import SearchRecipe from "./pages/SearchCart/SearchRecipe";

function App() {
    return (
      <Router>
        <div id="main-container">
          <Routes>
            <Route path="/showRecipe/:recipeId" element={<Recipe />} />
            <Route exact path="/" element={<SearchRecipe />} />
            {/* <Route component={Page404} /> */}
          </Routes>
        </div>
      </Router>
    );
}

export default App;
