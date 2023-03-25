import { Box } from '@mui/system';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function Registration() {


    
        const [value, setValue] = useState([1, 3]);

   


    const handleChange = (val) => setValue(val);
  return (
    <Box sx={{ flexGrow: 1 }} >

<Grid container spacing={3}> 

</Grid>

       
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />

        <Form.Label>Father Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />

        <Form.Label>CNIC</Form.Label>
        <Form.Control type="number" placeholder="Enter email" />


<Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>Last Qualification</option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>


<Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>Course</option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>


<Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>Institute</option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>



<Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>Section </option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>



<Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />


        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter email" />



        <Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>City </option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>


<Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>Country </option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>






<Box className="my-3">
<Form.Select aria-label="Default select example">
      <option>date of birth  </option>
      <option value="Matric">One</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachlors">Bachlors</option>
    </Form.Select>


    
</Box>


<Box className="my-3">
<ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Male
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" className='bg-danger ' value={2}>
     Female
      </ToggleButton>
     
    </ToggleButtonGroup>

    
</Box>


<Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />






    



 


        
      </Form.Group>

      

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Box>
  );
}

export default Registration;