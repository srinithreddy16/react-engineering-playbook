import add , {sub, mul} from "../../utils/math.utils"
import React from "react";
import { Routes, Route } from "react-router-dom";
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
import AdditionDemo1 from "../form/AdditionDemo1.tsx";
import AdditionDemo2 from "../form/AdditionDemo2.tsx";
import FormDemo1 from "../form/FormDemo1.tsx";
import FormDemo2 from "../form/FormDemo2.tsx";
import Folder from "../folder_explorer/Folder";
import folderData from '../folder_explorer/data.json'
import UserList_Http from "../http/UserList_Http.tsx";
import CommentList_Http from "../http/CommentList_Http.tsx";
import ToDoList_Http from "../http/ToDoList_Http.tsx";
import Multiple_API from "../http/Multiple_API.tsx";
import UseEffectDemo1 from "../hooks/UseEffectDemo1.tsx";
import UserDetails from "../hooks/UserDetails.tsx";
import UseMemoTest from "../hooks/UseMemoTest.tsx";
import ClickCounter from "../HOC/ClickCounter.tsx";
import HoverCounter from "../HOC/HoverCounter.tsx";
import MyCounter from "../HOC/MyCounter.tsx";
import Home from "../routing/Home.tsx";
import AboutUs from "../routing/AboutUs.tsx";
import Careers from "../routing/Careers.tsx";
import ContactUs from "../routing/ContactUs.tsx";
import NotFound from "../routing/NotFound.tsx";
import UserDetail from "../routing/UserDetail.tsx";
import ProductDetails from "../routing/ProductDetails.tsx";
import PermanentJobs from "../routing/PermanentJobs.tsx";
import ContractJobs from "../routing/ContractJobs.tsx";
import UploadVideos from "../routing/UploadVideos.tsx";
import ProtectedRoute from "../routing/ProtectedRoute.tsx";

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
    <ProductList2/>
    <EmployeeList/>
    <TaskList/>
    <PropsDemo1 name="Srinith" msg="How are you" />
    <PropsDemo1 name="Reddy"  />
    <Demo1/>
    <Demo2/>
    <Counter/>
    <AdditionDemo1/>
    <AdditionDemo2/>
    <FormDemo1/>
    <FormDemo2/>
    <Folder folderInfo={folderData}/>
    <UserList_Http/>
    <CommentList_Http/>
    <ToDoList_Http/>
    <Multiple_API/>
    <UseEffectDemo1/>
    <UserDetails/>
    <UseMemoTest/>
    <ClickCounter/>
    <HoverCounter/>
    <MyCounter/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />}>
          <Route index element={<PermanentJobs />} />
          <Route path="permanent" element={<PermanentJobs />} />
          <Route path="contract" element={<ContractJobs />} />
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/userdetails/:id" element={<UserDetail />} />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadVideos />
            </ProtectedRoute>
          }
        />
        {/* No Match Route */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
}
export default Body;
