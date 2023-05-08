import { useEffect, useState } from "react";
import SMGrid from "../../components/SMGrid";
import { fbGet } from "../../config/firebasemethods";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [loader, setloader] = useState(false);
  const col = [
    // {
    //   displayName: "Action",
    //   key: "",
    //   displayField: (e) => (
    //     <Button
    //       onClick={() =>
    //         setdisplayObj({
    //           ...displayObj,
    //           userName: e.userName,
    //           email: e.email,
    //           message: e.message,
    //         })
    //       }
    //       variant="contained"
    //     >
    //       View
    //     </Button>
    //   ),
    //   searchAble: true,
    // },
    {
      key: "FullName",
      displayName: "Full Name",
      searchAble: true,
    },
    {
      key: "FatherName",
      displayName: "Father Name",
      searchAble: true,
    },
    {
      key: "SelectCourse",
      displayName: "Course Enrolled",
      searchAble: true,
    },
  ];

  const getStudents = () => {
    setloader(true);
    fbGet("StudentRegistrationData")
      .then((res) => {
        setStudents([...res]);
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  console.log(students);
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <SMGrid
        datasource={students}
        title="Students Registered"
        columns={col}
        isLoading={loader}
      />
    </>
  );
}

export default StudentsList;
