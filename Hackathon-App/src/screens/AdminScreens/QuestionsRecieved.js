import React, { useEffect, useState } from "react";
import ScreenHeader from "../../components/screenheader";
import { fbGet } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import { useNavigate, useParams } from "react-router-dom";

const QuestionsRecieved = () => {
  const [recievedPrompt, setRecievedPrompt] = useState([]);
  const navigate = useNavigate();
  const openResponse = (id) => {
    console.log(id);
    navigate(`/admin/QuestionsResponse/${id}`);
  };
  const ReceiveResponse = () => {
    fbGet("userQuestions")
      .then((res) => {
        setRecievedPrompt([...res]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    ReceiveResponse();
  }, []);

  return (
    <>
      <ScreenHeader title="user Questions" />
      {/* /<SMGrid datasource={recievedPrompt} columns={col} /> */}
      {recievedPrompt.map((x, i) => (
        <div
          onClick={() => openResponse(x.id)}
          className="card bg-primary  text-white font-bold"
        >
          {" "}
          {x.question}
        </div>
      ))}
    </>
  );
};

export default QuestionsRecieved;
