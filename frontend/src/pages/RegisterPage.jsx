import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import toast from "react-hot-toast"
import { BookOpen, User, Mail, Lock } from "lucide-react"
import api from "../lib/axios.js"

const RegisterPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await api.post("/auth/register", { name, email, password });
            localStorage.setItem("token", res.data.token)
            toast.success("Registered successfully")
            navigate("/homepage")
        } catch (error) {
            setError(error.response.data.message)
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-pink-50 px-4 py-8">
            <div className="w-full max-w-[400px] rounded-2xl bg-white shadow-md px-6 sm:px-8 py-8 sm:py-10 flex flex-col items-center">

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex justify-center items-center mb-4">
                    <BookOpen className="text-primary size-8" strokeWidth={2} />
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">Thinkboard</h1>
                <p className="text-sm text-gray-500 mb-6 text-center">Create an account to get started.</p>

                <form onSubmit={handlesubmit} className="w-full flex flex-col gap-4">
                    {/* Name */}
                    <div className="relative w-full">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            required
                            className="w-full bg-gray-100 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            placeholder="Name"
                        />
                    </div>

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

                    {/* Error message */}
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    {/* Register button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white font-semibold rounded-lg py-3 text-sm hover:bg-primary/90 transition disabled:opacity-60"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {/* Bottom text */}
                <p className="text-sm text-gray-500 mt-6 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-semibold hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterPage