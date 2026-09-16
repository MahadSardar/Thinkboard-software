import toast from "react-hot-toast"
import { Navigate } from "react-router-dom"

const ProtectedRoute =({children})=>{
    const token = localStorage.getItem("token")
    if(!token){
        toast.error("LogIn To Continue")
        return <Navigate to="/" replace/>
    }
    return children
}
export default ProtectedRoute