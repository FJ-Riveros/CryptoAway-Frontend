import axios from "axios";


export const getLastPost = async (postData) => {
    try {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + "28|NdNI2iRA4T4lbPBhlWTZ49YG1DjGllqlvcqgAr2A"
        }
      }
      const { data } = await axios.get("http://localhost:8000/api/user/1/last_post", config);
      return data;
    } catch (error) {
      alert("Something went wrong.");
    }
  };

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


