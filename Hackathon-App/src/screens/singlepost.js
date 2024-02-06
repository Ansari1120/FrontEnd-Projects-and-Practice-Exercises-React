// import axios from "axios";
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// const SinglePost = () => {
//   const params = useParams();
//   console.log(params);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;
//   // let api1 = "https://jsonplaceholder.typicode.com/todos/2";

  
 

//   return (
//     <>
//       {isLoading ? (
//         <img
//           width="40%"
//           src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
//           alt="Loading..."
//         />
//       ) : (
//         <div>
//           <h1>
//             This is Dynamic Routing where we hit one element in the list and
//             gets its detail , as you see below
//           </h1>
//           <h1> ID : {data.id}</h1>
//           <p> Title : {data.title}</p>
//           <img alt="my img1" src={data.url} />
//           <br />
//           <br />
//           <img alt="my img2" src={data.thumbnailUrl} />
//         </div>
//       )}
//     </>
//   );
// };

// export default SinglePost;
