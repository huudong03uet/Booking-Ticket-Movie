// import logo from '../logo.svg';
// import './App.scss';
// import MyComponent from '../Example/MyComponent.js';
// import ListTodo from '../Todos/ListTodo';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ListUser from '../Users/ListUser';
// import Nav from '../Nav/Nav';
// import Home from '../Home/Home';
// import DetailUser from '../Users/DetailUser';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";


// /**
//  * 2 components: class component / function component ( function, arrow)
//  * JSX
//  */

// function App() {
//   // const  App = () =>  {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <header className="App-header">
//           <Nav />
//           <img src={logo} className="App-logo" alt="logo" />
//           <Switch>
//             <Route path="/" exact>
//               <Home />

//             </Route>

//             <Route path="/todo">
//               <ListTodo />
//             </Route>
//             <Route path="/about">
//               <MyComponent />
//             </Route>

//             <Route path="/user" exact>
//               <ListUser />
//             </Route>

//             <Route path="/user/:id">
//               <DetailUser />
//             </Route>

//           </Switch>

//         </header>


//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//       </div>
//     </BrowserRouter>
//   );
// }

//export default App;

import React from 'react';
//import Home from '../Home/Home';
// import UserLogin from '../UserLogin/UserLogin';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


// import UserProfile from '../UserProfile/UserProfile';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { routesHome } from "../../routers";
import { connect } from 'react-redux';
import FPSStats from "react-fps-stats";
import ScrollToTop from 'react-scroll-up'
function App(props) {
  const showItem = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.component} login={item.data} />
        )
      })
    }
  }
  return (
    <div className="App">
      {/* <FPSStats/> */}
      <ScrollToTop style={{bottom: "144px", right: "38px"}} showUnder={160}>
        <span >
              <i style={{color: "white"}} class="fa fa-chevron-up" aria-hidden="true"></i>
        </span>
      </ScrollToTop>
      <BrowserRouter>
        <Switch>
          {showItem(routesHome)}
          <Redirect from="*" to="/404" />
        </Switch>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <UserLogin/> */}
      {/* <UserProfile/> */}
    </div>
  );
}

const mapStateToProps = state => ({
  logInStatus: state.toggleLogInStatus.status,
  session: state.getSession
});




//export default App;
export default connect(mapStateToProps, null)(App);

