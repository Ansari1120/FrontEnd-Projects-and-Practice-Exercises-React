import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";

const QandAresponse = () => {
  const [response, setResponse] = useState([]);
 

  const ReceiveResponse = () => {
    fbGet("IslamicAnswer").then((res) => {
      setResponse([...res]);
    });
  };

  useEffect(() => {
    ReceiveResponse();
  }, []);
  return (
   <>

{response.map((x, i) => (
        <div
          className="card bg-primary  text-white font-bold"
        >
          {" "}
          {x.answer}
        </div>
      ))}
   
   
   </>
  );
};

export default QandAresponse;
