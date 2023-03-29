import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fbGet } from "../../config/firebasemethods";
import MyStack from "../../components/Stack";
import { Image } from "@mui/icons-material";

const SingleDetail = () => {
  const [model, setModel] = useState({});
  const params = useParams();

  let getSingleComment = () => {
    fbGet("StudentRegistrationData", params.id)
      .then((res) => {
        setModel({ ...res });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleComment();
  }, []);

  return (
    <>
      <img src={model.fileUpload} alt={"profile"} />
      <MyStack title="City" data={model.SelectCity} />
      <MyStack title="Name" data={model.FullName} />
      <MyStack  title="Father Name" data={model.FatherName} />
      <MyStack title="Course" data={model.SelectCourse} />
      <MyStack title="E-mail" data={model.Email} />
      <MyStack title="CNIC" data={model.CNIC} />
      <MyStack title="Father's CNIC" data={model.FatherCnic} />
      <MyStack title="Date Of Birth" data={model.date} />
      <MyStack title="Gender" data={model.SelecGender} />
      <MyStack title="Last Qualification" data={model.LastQualification} />
      <MyStack title="Have Laptop" data={model.HaveLaptop} />
      <MyStack title="PROFILE PICTURE" data={model.fileUpload} />
    </>
  );
};

export default SingleDetail;

{
  /* <Container>
        <Grid container>
          <Grid item md={6}>
            {model.SelectCity}
          </Grid>
          <Grid item md={6}>
            {model.FullName}
            {/* <table className="table table-stripped">
              <tbody>
                {model.map((x, i) => (
                  <tr key={i}>{x}</tr>
                ))}
              </tbody>
            </table> */
}
//     </Grid>
//     <Grid item md={6}>
//       {model.FatherName}
//     </Grid>
//     <Grid item md={6}>
//       {model.SelectCourse}
//     </Grid>
//     <Grid item md={6}>
//       {model.Email}
//     </Grid>
//     <Grid item md={6}>
//       {model.CNIC}
//     </Grid>
//     <Grid item md={6}>
//       {model.FatherCnic}
//     </Grid>
//     <Grid item md={6}>
//       {model.date}
//     </Grid>
//     <Grid item md={6}>
//       {model.SelecGender}
//     </Grid>
//     <Grid item md={6}>
//       {model.Address}
//     </Grid>
//     <Grid item md={6}>
//       {model.LastQualification}
//     </Grid>
//     <Grid item md={6}>
//       {model.HaveLaptop}
//     </Grid>
//     <Grid item md={6}>
//       <img src={model.fileUpload} alt="my image" />
//     </Grid>
//   </Grid>
// </Container> */}
