import { useEffect } from "react";
import { useState } from "react";
import MyTable from "../../components/Table";
import { Get } from "../../config/apibasemethods";

function Todos() {
  const [usersTodoList, setusersTodoList] = useState([]);
  //   const [loader, setLoader] = useState(false);
  //   const [searchAbled, setSearchAbled] = useState(true);

  //   let handleChange = () => {
  //     setSearchAbled(!searchAbled);
  //   };

  let columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "completed", headerName: "Status", width: 130 },
  ];

  let getUsers = () => {
    // setLoader(true);
    Get("todos")
      .then((res) => {
        // setLoader(false);
        setusersTodoList([...res.data]);
      })
      .catch((err) => {
        // setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      {/* <MyCheckBox onClick={() => handleChange()} color="default" /> */}
      {/* <SMGrid
        isLoading={loader}
        title="Users Data"
        datasource={usersTodoList}
        columns={columns}
      /> */}
      <MyTable columns={columns} rows={usersTodoList} />
    </>
  );
}

export default Todos;
