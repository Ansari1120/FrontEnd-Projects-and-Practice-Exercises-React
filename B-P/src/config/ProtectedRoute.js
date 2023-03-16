import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "./firebasemethods";
// import { checkAuth } from "./firebasemethods";

function ProtectedRoute({ Component }) {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    checkAuth()
      .then((uid) => {
        setLoader(false);
        console.log(uid, "User Logged In");
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        navigate("/");
      });
  }, []);
  return <>{loader ? <h1>Loading...</h1> : <Component />}</>;
}
export default ProtectedRoute;
