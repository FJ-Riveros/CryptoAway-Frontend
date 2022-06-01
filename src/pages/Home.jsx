import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import { getLastPost } from "../api";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
// import Post from "../components/Post";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../redux/postSlice";
// import AddPost from "../components/AddPost";

export default  function Home() {
  // const dispatch = useDispatch();
  // const { status, posts } = useSelector((state) => state.post);
  // useEffect(() => {
  //   // dispatch(getPosts());
  // }, [dispatch]);

  
  const getPost = async ()=>{
    let data = await getLastPost();
    if(data) console.log(data);
  }

  const fetchPost = async ()=>{
    let data = fetch("http://localhost:8000/api/user/1/last_post")
    .then(response => response.json())
    .then(response => console.log(response))

    // if(data) console.log(data);

  } 
  useEffect(()=>{
    getPost();
    //fetchPost();
    console.log("hola")
  },[])

  return (
    <>
      <Box>
      <Box borderBottom="1px solid #ccc" padding="8px 20px">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Home</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <AssistantIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box height="92vh" sx={{ overflowY: "scroll" }}>
        {/* <AddPost /> */}
        <Box textAlign="center" marginTop="1rem">
          {/* {status === "loading" && (
            <CircularProgress size={20} color="primary" />
          )} */}
        </Box>
        {/* {status === "success" &&
          posts.map((post) => <Post key={post._id} post={post} />)} */}
      </Box>
    </Box>    
    </>
  );
}



