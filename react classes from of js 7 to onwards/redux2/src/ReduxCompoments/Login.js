import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { add } from "../Reducer/LoginSlice/loginslice"


export default function Login()  {
    const loginUser = () => {
        let obj ={
            email: "hamza@gmail.com",
            password: "123456789"
        }

        dispatch(add(obj))
        navigate("/HomeRedux")  

    }
    const dispatch = useDispatch()
    const navigate = useNavigate()



    return (

        <>

        <div onClick={loginUser}>
            Login
        </div>
        </>

    )
    
}