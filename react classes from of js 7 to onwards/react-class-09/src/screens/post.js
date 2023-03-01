import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  let api = "https://jsonplaceholder.typicode.com/photos";

  const [listData, setListData] = useState([]);
  const [isLoading, setisLoading] = useState([]);
  let getData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const moveToSinglePost = (i) => {
    navigate(`/singlepost/${i}`);
  };

  return (
    <>
      <h1>Post</h1>
      {listData.map((x, i) => (
        <div onClick={() => moveToSinglePost(x.id)}>
          <p>{x.title}</p>
          <img src={x.thumbnailUrl} width="300px" alt="" />
        </div>
      ))}
    </>
  );
}

export default Posts;
