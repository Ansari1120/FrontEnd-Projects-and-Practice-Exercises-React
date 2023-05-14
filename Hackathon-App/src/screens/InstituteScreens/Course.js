import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import SMGrid from '../../components/SMGrid';
import { fbGet } from '../../config/firebasemethods';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Coursename', "maths", "phy", "urdu", "english"),
  createData('Duration', "4 Months", "3 Months", "2 Months", "1 Months"),
  createData('Fees', 4000, 7000, 4000, 3000),
 
];

export default function SMCourse() {
    const [listData, setlistData] = React.useState([]);

    const navigation = useNavigate()


    const pagegoestoCourseFrom = () =>{
        navigation("/institute/coursefrom")

    }



    React.useEffect(() => {
        showData()
    },[])
    let showData = () => {
        fbGet("CourseForm")
          .then((res) => {
            console.log("Data Fetched Successfully  ", res);
            setlistData([...res]);
          
            
          })
          .catch((err) => {
            console.log(err);
            
          });
      };


      const col = [
        {
          displayName: "Action",
          key: "",
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
        },
        {
          key: "CourseName",
          displayName: "CourseName",
          searchAble: true,
        },
        {
          key: "Duration",
          displayName: "Duration",
          searchAble: true,
        },
        {
          key: "fee",
          displayName: "fee",
          searchAble: true,
        },

        {
            key: "teacher",
            displayName: "teacher",
            searchAble: true,
          },
      ];


   
  return (

    <>
   
   <SMGrid datasource={listData} columns={col} />

    <Box className="my-2 d-flex justify-content-end">
    <Button variant="outlined" onClick={pagegoestoCourseFrom} >Course Form</Button>

    </Box>


    </>
  );
}