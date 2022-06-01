import axios from "axios";


const url = "http://localhost:8000";


export const getLastPost = async (postData) => {
    try {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + "293|2fL9bpVOr04hRrhCICT5xvcP5bRk53d7LaJUYLsx"
        }
      }
      const { data } = await axios.get("http://localhost:8000/api/user/1/last_post");
      return data;
    } catch (error) {
      alert("Something went wrong.");
    }
  };


export const login = async (credentials) => {
  try {

    // const { data } = await axios.post(`${url}/login`, {
      let config = {
        headers: {
          'X-CSRF-TOKEN': "MRGVc7hWoQYOe9Z6Jg8RgDMNtwRNKKFQBl0aTo4N"
        }
      }
      axios.post(`${url}/api/login`, {
      email: "juan@gmail.com",
      password: "123",
      _token: "MRGVc7hWoQYOe9Z6Jg8RgDMNtwRNKKFQBl0aTo4N" 
      }, config)
      .then( response=> console.log(response))
        
      // var formdata = new FormData();
      // formdata.append("email", "juan@gmail.com");
      // formdata.append("password", "123");
      
      // var requestOptions = {
      //   method: 'POST',
      //   body: formdata,
      //   redirect: 'follow'
      // };
      
      // fetch("http://127.0.0.1:8000/api/login", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));

      
    // console.log(data);
    // return data;
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


