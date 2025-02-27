// import React, {useState} from 'react';
import Signup from '../Components/Signup';
// import Login from '../Components/Login';
// import Profile from '../Components/Profile';
import {Tabs,Tab} from 'react-bootstrap';

// const Home = (props) => {
//     const [data,setData]=useState({})
//     return(
//         <Tabs defaultActiveKey="SignUp" id="uncontrolled-tab-example">
// <Tab eventKey="SignUp" title="SignUp">
// <Signup dataSignup={(data)=>setData(data)}/>
// </Tab>
// <Tab eventKey="Login" title="Login">
// <Login data={data}/>
// </Tab>
// <Tab eventKey="Profile" title="Profile">
// <Profile data={data}/>
// </Tab>
// </Tabs> 
//       )
// }

const Home =(props)=>{
    return(
        <Tabs
        defaultActiveKey="SignUp"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="SignUp" title="SignUp">
          <Signup/>
        </Tab>
        <Tab eventKey="Login" title="Login">
          Tab content for Login
        </Tab>
        <Tab eventKey="Profile" title="Profile">
          Tab content for Profile
        </Tab>
      </Tabs>
    )
}

export default Home;