import axios from 'axios';
import { ArrowBigLeftIcon } from 'lucide-react';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {Link, useNavigate} from "react-router"
import api from '../lib/axios.js';
 

const CreatePage = () => {
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(!title.trim() || !content.trim()){
      toast.error("All fields are required")
      return
    }
    setLoading(true)
    try {
      await api.post("/notes",{title,content})
      toast.success("Note created successfully!")
      navigate("/homepage")
    } catch (error) {
      if(error.response.status === 429){
        toast.error("Slow down! You're creating notes too fast",{
          duration:4000,
          icon:"💀",
        })
      } else{
        toast.error("Failed to create note")
      }
    } finally{
      setLoading(false)
    }
  }
  return (
  <div className='min-h-screen bg-base-200'>
    <div className='container mx-auto px-4 py-6 sm:py-8'>
      <div className='max-w-2xl mx-auto'>
        <Link to={'/homepage'} className='btn btn-ghost mb-6 btn-sm sm:btn-md'>
        <ArrowBigLeftIcon className='size-5'/>
        Back To Notes
        </Link>

        <div className='card bg-base-100'>
          <div className='card-body p-4 sm:p-6'>
            <h2 className='card-title text-xl sm:text-2xl mb-4'>Create New Note</h2>
            <form onSubmit={handleSubmit}>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input type="text" placeholder='Note Title' className='input input-bordered w-full' value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
              </div>

                <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea placeholder='Write your note here.....'
                className='textarea textarea-bordered h-32 w-full'
                value={content}
                onChange={(e)=> setContent(e.target.value)}
                />
              </div>

              <div className="card-actions justify-end">
                <button type='submit' className='btn btn-primary w-full sm:w-auto' disabled={loading} >
                  {loading? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  </div>
  )
}
export default CreatePage
