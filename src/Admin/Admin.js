import Form from "./Form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowPost from "./showPosts.js/ShowPost";
function Admin() {
  const [post, setPost] = useState({
    id: "",
    status: "",
    image_post: "",
    title: "",
  });
  const [listProduct, setListProduct] = useState([]);
  const [stateButton, setStateButton] = useState("Add");
  const getData = () => {
    axios
      .get(`https://61ce7a697067f600179c5f0e.mockapi.io/content`)
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((error) => console.log(error));
  };
    useEffect(() => {
      getData();
    }, []);
  const handlerChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setPost((prev) => {
      const prevState = { ...prev };
      prevState[nam] = val;
      return prevState;
    });
  };
  const addPost = (e) => {
    e.preventDefault();
    stateButton === "Add"
      ? axios
          .post(`https://61ce7a697067f600179c5f0e.mockapi.io/content`, {
            status: post.status,
            image_post: post.image_post,
            title_post: post.title,
          })
          .then((res) => {
            alert("post thành công");
            setPost((prev) => {
              const prevState = { ...prev };
              prevState.status = "";
              prevState.image_post = "";
              prevState.title = "";
              console.log(prevState);
              return prevState;
            });
            getData();
          })
      : axios
          .put(
            `https://61ce7a697067f600179c5f0e.mockapi.io/content/${post.id}`,
            {
              id: post.id,
              status: post.status,
              image_post: post.image_post,
              title_post: post.title,
            }
          )
          .then((res) => {
            alert("Update thành công");
            setPost((prev) => {
              const prevState = { ...prev };
              prevState.status = "";
              prevState.image_post = "";
              prevState.title = "";
              console.log(prevState);
              return prevState;
            });
            setStateButton("Add");
            getData();
          });
  };
  const showInput = (product) => {
    setPost((prev) => {
      const prevState = { ...prev };
      prevState.status = product.status;
      prevState.image_post = product.image_post;
      prevState.title = product.title_post;
      prevState.id = product.id;
      return prevState;
    });
    setStateButton("Update");
  };
  const deleteProduct = (product) => {
          setPost((prev) => {
            const prevState = { ...prev };
            prevState.id = product.id;
            return prevState;
          });
          axios
            .delete(
              `https://61ce7a697067f600179c5f0e.mockapi.io/content/${product.id}`
            )
            .then((res) => {
              getData();
            });
  } 
  return (
    <>
      <Form
        status={post.status}
        image={post.image_post}
        title={post.title}
        handerlechange={(e) => {
          handlerChange(e);
        }}
        handlerSubmit={(e) => {
          addPost(e);
        }}
        stateButton={stateButton}
      />
      <ShowPost
        ListProduct={listProduct}
        updateInput={(product) => {
          showInput(product);
        }}
        deleteProduct ={(product) =>{
          deleteProduct(product)
        }}
      />
    </>
  );
}
export default Admin;
