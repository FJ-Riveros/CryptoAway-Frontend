// import Login from "./pages/Login";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
// import Profile from "./pages/Profile";
// import PrivateRoute from "./components/PrivateRoute";
// import { Route, Switch, Router} from "react-router";
// import { BrowserRouter } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

// import PostDetails from "./pages/PostDetails";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import axios from "axios";
// import { setAuth } from "./redux/authSlice";

function App() {
  // const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if ("login" in localStorage) {
  //     const login = JSON.parse(localStorage.getItem("login"));
  //     axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
  //   }
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
  //   if (isLoggedIn) {
  //     dispatch(setAuth({ isLoggedIn }));
  //   }
  // }, [dispatch, isLoggedIn]);
  
  
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <PrivateRoute exact path="/profile/:id">
            <Layout>
              <Profile />
            </Layout>
          </PrivateRoute> */}
          {/* <PrivateRoute exact path="/posts/:id">
            <Layout>
              <PostDetails />
            </Layout>
          </PrivateRoute> */}
          {/* <PrivateRoute exact path="/"> */}
          
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" component={NotFound} />            
            
          
        
          {/* </PrivateRoute> */}
          {/* <Route path="/login">
            <Login />
          </Route> */}
          {/* <Route path="/register">
            <Register />
          </Route> */}
        </Routes>
      </Layout>
    </Router>
  );
  function NotFound() {
    return <>Ha llegado a una página que no existe</>;
  }
}

export default App;
