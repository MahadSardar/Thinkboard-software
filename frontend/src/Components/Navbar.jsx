import React, { useState } from 'react'
import {PlusIcon,Notebook, LogOutIcon} from "lucide-react"
import {Link, useNavigate} from "react-router"
import toast from 'react-hot-toast'

const Navbar = () => {

    const navigate = useNavigate()

    const handlelogout =()=>{
        if(!window.confirm("Are you sure want to logout?")) return;
        localStorage.removeItem("token")
        toast.success("Logged out successfully")
        navigate("/")


    }
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4'>
                

                <h1 className='text-2xl sm:text-3xl font-bold text-primary font-mono tracking-tight'>Thinkboard</h1>

                <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-4'>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className='btn btn-primary btn-sm sm:btn-md'>
                    <PlusIcon className='size-5'/>
                    <span>New Note</span>
                    </Link>
                </div>

                <div className='flex items-center gap-4'>
                    <button onClick={handlelogout} className='btn btn-primary btn-sm sm:btn-md'>
                        <LogOutIcon className='size-5'/>
                        logout
                    </button>
                </div>

                </div>


            </div>
        </div>
    </header>
  )
}

export default Navbar
