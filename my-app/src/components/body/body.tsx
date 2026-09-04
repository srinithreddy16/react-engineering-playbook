import add , {sub, mul} from "../../utils/math.utils"
import React from "react";
import DataBinding from "../databinding/DataBinding.tsx";
import DataBindingAssignments from "../databinding_examples/DataBindingExamples.tsx";
import ListDemo1 from "../listItem/ListDemo1.tsx";
import UserList from "../userlist/UserList.tsx";
import ProductList from "../productList/ProductList.tsx";
import EmployeeList from "../listItem/EmployeeList.tsx";
import TaskList from "../listItem/TaskList.tsx";
import PropsDemo1 from "../props/PropsDemo1.tsx";
import ProductList2 from "../productList/ProductList2.tsx";
import Demo1 from "../demo/Demo1.tsx";
import Demo2 from "../demo/Demo2.tsx";
import Counter from "../state/Counter.tsx";

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
    <ProductList2/>
    <EmployeeList/>
    <TaskList/>
    <PropsDemo1 name="Srinith" msg="How are you" />
    <PropsDemo1 name="Reddy"  />
    <Demo1/>
    <Demo2/>
    <Counter/>
    
   
  </div>
}
export default Body;

