import add , {sub, mul} from "../../utils/math.utils"
import React from "react";
import DataBinding from "../databinding/DataBinding.tsx";
import DataBindingAssignments from "../databinding_examples/DataBindingExamples.tsx";
import ListDemo1 from "../listItem/ListDemo1.tsx";
import UserList from "../userlist/UserList.tsx";
import ProductList from "../productList/ProductList.tsx";
import EmployeeList from "../listItem/EmployeeList.tsx";
import TaskList from "../listItem/TaskList.tsx";

function Body(){
  console.log(add(10,20));
  console.log(sub(10,20));
  console.log(mul(10,20));
  console.log(React);


  return <div style={{"minHeight":"350px"}}>
    <div>This is Body Component</div>
    <div>My react version is:: {React.version}</div>
    <DataBinding/>
    <DataBindingAssignments/>
    <ListDemo1/>
    <UserList/>
    <ProductList/>
    <EmployeeList/>
    <TaskList/>
  </div>
}
export default Body;

