import { useEffect } from "react";
import { useState } from "react";
import SMGrid from "../components/SMGrid";
import { Get } from "../config/apibasemethods";

function About() {
  const [usersList, setUsersList] = useState([]);
  const [loader, setLoader] = useState(false);

  let columns = [
    {
      key: "username",
      displayName: "User Name",
    },
    {
      key: "email",
      displayName: "Email",
    },
    {
      key: "phone",
      displayName: "Contact #",
    },
    {
      key: "website",
      displayName: "Website URL",
    },
    {
      key: "name",
      displayName: "Full Name",
    },
  ];

  let getUsers = () => {
    setLoader(true);
    Get("users")
      .then((res) => {
        setLoader(false);
        setUsersList([...res.data]);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>About</h1>
      <SMGrid
        isLoading={loader}
        title="Users Data"
        datasource={usersList}
        columns={columns}
      />
    </>
  );
}

export default About;
