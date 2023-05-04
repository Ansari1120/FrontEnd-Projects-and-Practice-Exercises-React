import { useSelector } from "react-redux"



export default function Home ()  {


    const selector = useSelector((a)=> a.Login)
    console.log(selector)

   const value =  Object.values(selector)
   console.log(value)    

    return (

        <>

        <div>

            
            
        </div>
        </>

    )
    
}