import { Button, ButtonBase } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SMGrid from '../../Compoments/SMGrid';
import Modal from "../../Compoments/SMModal"
import { Get } from '../../Config/apibasemethod';

function Notifiction() {
   const [list, setList] = useState([]);

   const [searchfilter, setSearchfilter] = useState([]);
   const navigation = useNavigate()

   const getUser = () => {
     Get("users")
       .then((res) => {
         console.log(res.data);
         setList([...res.data]);
         setSearchfilter([...res.data]);
       })
       .catch((err) => {
         console.log(err);
       });
   };

   useEffect(() => {
     getUser();
   }, []);

   let openAddForm = (id) => {
    //  navigation(`/commentform/${id}`);
   };

   const aboutTable = [
     {
       displayName: "Action",
       displayField: (e) => (
         <Button onClick={() => openAddForm(e.id)} variant="contained">
           View
         </Button>
       ),
     },
     {
       key: "name",
       displayName: "username",
       displayField: (i) => <div style={{ color: "red" }}> {i.name} </div>,
     },
     {
       key: "email",
       displayName: "Email",
       displayField: (i) => <div style={{ color: "red" }}> {i.email} </div>,
     },

     {
       key: "phone",
       displayName: "Phone",
     },

     {
       key: "website",
       displayName: "Website",
     },
   ];
  return (
    <div>
      <SMGrid
        aboutTable={aboutTable}
        list={list}
        tilte="Table List"
        setList={setList}
        searchfilter={searchfilter}
        setSearchfilter={setSearchfilter}
      />
    </div>
  );
}

export default Notifiction;