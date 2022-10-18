import React from "react";
const Props = (pops) => {
    const myStyle = {
        color: "white",
        backgroundColor: "#282c34",
        padding: "10px",
        fontFamily: "Sans-Serif"
      
      };
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Im {pops.Name} </h1>
      <h3 style={myStyle}>Age:{pops.Age}</h3>
      <h1>404</h1>
      <h2 style={{color: "red"}}>Page Not Found</h2>
    </>
  );
};
export default Props;
