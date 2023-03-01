import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  console.log(params);

  let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;

  //   const [listData, setListData] = useState([]);

  //   let getData = () => {
  //     axios
  //       .get(api)
  //       .then((res) => {
  //         console.log(res);
  //         setListData([...res.data]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return <div>singlePost</div>;
};

export default SinglePost;
