import React, { useEffect, useState } from 'react'
import { fbCustomPost, fbGet, fbPost } from '../../Config/firebasemethod';
import Studentregistration from '../StudentRegistrationScreen/studentregistration';
import Switch from '@mui/material/Switch';

function Registration() {
 const [model,setmodel] = useState({});

 const save = () =>{
    model.courseList = []
    fbCustomPost("coursecontrol",model).then((res)=>{
        console.log(res);
    }).then((err)=>{
        console.log(err);
    })
 }

 const getDt = () =>{
    fbGet("coursecontrol").then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
 }

useEffect(() => {
  getDt()
},[])
  return (
    <div>
            <h1>Registration Control </h1>
            <div>
                <div>
                <Switch label="Course Open" defaultChecked onChange={(e)=> setmodel({...model,registrationOpen:e.target.checked})}/>

                </div>
                <div>
<button  onClick={save}>
    Course Open
</button>
                </div>
            </div>
        
    </div>
  )
}

export default Registration;