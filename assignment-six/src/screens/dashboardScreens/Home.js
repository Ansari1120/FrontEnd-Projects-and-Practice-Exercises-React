import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(null);
  let api = "https://jsonplaceholder.typicode.com/photos";
  const navigate = useNavigate();

  let getApIData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
        SetLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApIData();
  }, []);

  const HitToNavigate = (i) => {
    navigate(`/singlepost/${i}`);
  };

  return (
    <div className="App">
      {loading ? (
        data.map((t, i) => {
          return (
            <div key={i} onClick={() => HitToNavigate(t.id)}>
              <div>ID {t.id}</div>
              <div>Title {t.title}</div>
              <img src={t.url} />
              <img src={t.thumbnailUrl} />
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Home;
