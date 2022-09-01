import "./App.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import Temp from "./pages/SearchCart/search";

function App() {
  // const [response, setResponse] = useState([]);
  // const [data, setData] = useState([]);
  // const [searchValue, setSearchValue] = useState("pune");
  // useEffect(() => {
  //   let App_Id = "5721b349";
  //   let App_Key = "7e13d45f8678a26a41c1de4c4b1aa3fb";
  //   axios
  //     .get(
  //       `https://api.edamam.com/search?app_id=${App_Id}&app_key=${App_Key}&q=salad`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //       setResponse(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div>
        <div>
          <Temp />
        </div>
      </div>
    </>
  );
}

export default App;
