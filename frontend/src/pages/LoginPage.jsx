import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import toast from "react-hot-toast"
import { BookOpen, Mail, Lock } from "lucide-react"
import api from "../lib/axios.js"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await api.post("/auth/login",{email,password})
            localStorage.setItem("token",(await res).data.token)
            navigate("/homepage")
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full sm:w-[390px] shrink-0 mx-auto rounded-2xl bg-white shadow-xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col items-center">

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex justify-center items-center mb-4">
                <BookOpen className="text-primary size-8" strokeWidth={2} />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">Thinkboard</h1>
            <p className="text-sm text-gray-500 mb-6 text-center">Welcome back! Log in to continue.</p>

            <form onSubmit={handlesubmit} className="w-full flex flex-col gap-4">
                {/* Email */}
                <div className="relative w-full">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        className="w-full bg-gray-100 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        placeholder="Email address"
                    />
                </div>

                {/* Password */}
                <div className="relative w-full">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                        className="w-full bg-gray-100 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        placeholder="Password"
                    />
                </div>

                {/* Log In button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-semibold rounded-lg py-3 text-sm hover:bg-primary/90 transition disabled:opacity-60"
                >
                    {loading ? "Logging in..Please wait few sec" : "Log In"}
                </button>
            </form>

            {/* Divider */}
            <div className="w-full flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Create account button */}
            <Link
                to="/register"
                className="w-full text-center border border-primary text-primary font-semibold rounded-lg py-3 text-sm hover:bg-primary/5 transition"
            >
                Create an Account
            </Link>

            {/* Bottom text */}
            <p className="text-sm text-gray-500 mt-6 text-center">
                Dont have an account?{" "}
                <Link to="/Register" className="text-primary font-semibold hover:underline">
                    Register
                </Link>
            </p>
        </div>
    )
}
export default LoginPage