import { getAuth } from "firebase/auth";
import Institutelayout from "../../components/instituteLayout";
import { useEffect, useState } from "react";

function Institute(props) {
  const { checked } = props;
  const auth = getAuth();
  const [UserName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div>
      <Institutelayout UserName={UserName} switching={checked} />
    </div>
  );
}

export default Institute;
