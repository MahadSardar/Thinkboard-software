import React from 'react'
import {PlusIcon,Notebook} from "lucide-react"
import {Link} from "react-router"

const MainPageNavbar = () => {
  return (
    <header className='bg-white border-b border-base-content/10 mb-5'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between gap-2'>

                <div className='flex items-center justify-center gap-2'>
                    <Notebook className='size-8 sm:size-11 text-primary'/>
                <h1 className='text-xl sm:text-3xl font-bold text-primary font-mono tracking-tight'>Thinkboard</h1>
                </div>


                <div className='hidden sm:flex items-center'>
                    <p className='font-mono text-sm md:text-base'>Your thoughts.Organized.</p>
                </div>

            </div>
        </div>
    </header>
  )
}

export default MainPageNavbar