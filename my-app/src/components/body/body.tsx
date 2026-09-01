import add , {sub, mul} from "../../utils/math.utils"
import React from "react";
import DataBinding from "../databinding/DataBinding.tsx";

function Body(){
  console.log(add(10,20));
  console.log(sub(10,20));
  console.log(mul(10,20));
  console.log(React);


  return <div style={{"minHeight":"350px"}}>
    <div>This is Body Component</div>
    <div>My react version is:: {React.version}</div>
    <DataBinding/>
  </div>
}
export default Body;

