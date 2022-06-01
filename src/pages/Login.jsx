import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
import AssistantIcon from "@mui/icons-material/Assistant";
import { login } from "../api";
// import Post from "../components/Post";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../redux/postSlice";
// import AddPost from "../components/AddPost";

export default function Login() {
  // const dispatch = useDispatch();
  // const { status, posts } = useSelector((state) => state.post);
  // useEffect(() => {
  //   // dispatch(getPosts());
  // }, [dispatch]);

  const prueba = async ()=>{
    // axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
    // // Login...
    // console.log("hola");
    // console.log(response.json());
    // });

    let data = await fetch("http://localhost:8000/sanctum/csrf-cookie")
    // .then(response => response.json())
    .then(response => console.log(response))
  }
  



// useEffect(()=>{
//   login();
//   // prueba();
// },[]);

  return (
    <div className="row mb-3">
    <form method="post" action="http://localhost:8000/login">
      {/* <input type="hidden" name="_token" value="yJj6Ve5XbpsrStp9Erui3ZrBO82Xuqzs5jEWrR15" /> */}

      <div className="row mb-3">
        <label for="email" className="col-md-4 col-form-label text-md-end">
          Email Address
        </label>

        <div className="col-md-6">
          <input
            id="email"
            type="email"
            className="form-control "
            name="email"
            required=""
            autocomplete="email"
            autofocus=""
          />
        </div>
      </div>

      <div className="row mb-3">
        <label for="password" className="col-md-4 col-form-label text-md-end">
          Password
        </label>

        <div className="col-md-6">
          <input
            id="password"
            type="password"
            className="form-control "
            name="password"
            required=""
            autocomplete="current-password"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 offset-md-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
              id="remember"
            />

            <label className="form-check-label" for="remember">
              Remember Me
            </label>
          </div>
        </div>
      </div>

      <div className="row mb-0">
        <div className="col-md-8 offset-md-4">
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <a className="btn btn-link" href="http://localhost:8000/password/reset">
            Forgot Your Password?
          </a>
        </div>
      </div>
      </form>
      <button className="btn btn-primary" onClick={()=>login()}>
            Prueba
          </button>
    </div>
    
  );
}
