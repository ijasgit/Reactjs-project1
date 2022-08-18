import React from "react";
import Class from "./pages/Class_comp/Lass";
// import First from './First'
// import Second from './Second'
import Header from "./pages/header/Header";
import Title from "./pages/Title/Title";
import Lass from "./pages/Class_comp/Lass";
import Cart from "./pages/cart/Cart";
const main = () => {
  return (
    <div>
      <Header />
      <Title />
      {/* {[1,2,3].map((item,index)=>(
        <p key={index}>
          {item}
        </p>
        ))} */}
      <Lass />
      <Cart obj={{ name: 'react', id: "01" }} />
    </div>

  );
};

export default main;
