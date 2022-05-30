import axios from "axios";


// export const getLastPost = async (postData) => {
//     try {
//       const { data } = await axios.post("http://localhost:8000/api/user/1/last_post", postData);
//       return data;
//     } catch (error) {
//       alert("Something went wrong.");
//     }
//   };

export const addPost = async (postData) => {
  try {
    const { data } = await axios.post("/api/posts", postData);
    return data;
  } catch (error) {
    alert("Something went wrong.");
  }
};

export const addComment = async (commentData) => {
  try {
    const { data } = await axios.post(
      "/api/comments/" + commentData.id,
      commentData
    );
    return data;
  } catch (error) {
    alert("Something went wrong.");
  }
};

export const likeOrDislikePost = async (postData) => {
  try {
    const { data } = await axios.post("/api/posts/likes", postData);
    return data;
  } catch (error) {
    alert("Something went wrong.");
  }
};

export const deletePost = async (postData) => {
  try {
    const { data } = await axios.delete(`/api/posts/${postData.id}`);
    return data;
  } catch (error) {
    alert("Something went wrong.");
  }
};


