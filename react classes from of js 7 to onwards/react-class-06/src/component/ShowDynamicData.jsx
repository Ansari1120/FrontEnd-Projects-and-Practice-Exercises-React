

import React from 'react'

export default function ShowDynamicData(props) {
    const {data,setRowclick} = props;
let keys = Object.keys(data[0]);
  return (
    <table>
    <thead>
        <tr>
            {keys.map((e,i)=>{
                return(

                    <th key={i}>{e}</th>
                    );
            })}
        </tr>
    </thead>
    <tbody>
        {/* {got object} */}
{data.map((x,i)=>{
    return (

        <tr onClick={()=>setRowclick(x)} key={i}>
                {/* {nested mapping on array}
                y got multiple keys all x keys printed(all title,price printed of each key(y)) then jump to next y */}

 {/* {x[y] = first array of object[title]
                    x[y] = first array of object[description]
                    x[y] = first array of object[price]
                    
                } */}
        {keys.map((y,ind)=>{
           

               return(

                   
                   <td key={ind}>{x[y]}</td>
                   )
            
        })}
    </tr>
)
})}
    </tbody>
</table>
  )
}
