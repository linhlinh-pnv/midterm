import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Home/Home";
import Header from "./Components/component/Header";
import Banner1 from "./Components/component/banner";

function App() {
  return (
    <>
       <Header></Header>
       <Banner1></Banner1>
        <Homepage/>
        

    </>
  );
}

export default App;
