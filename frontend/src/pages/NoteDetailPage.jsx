import axios from 'axios';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import {Link} from "react-router"
import api from '../lib/axios.js';

const NoteDetailPage = () => {

  const [note,setNote] = useState(null);
  const [loading,setLoading] = useState(true);
  const [saving,setSaving] = useState(false)

  const navigate = useNavigate();
 
  const {id} = useParams();

  useEffect(()=>{
    const fetchNote = async()=>{
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.log("Error in fetching note",error)
        toast.error("Failed to fetch the note")
      } finally{
        setLoading(false)
      }
    }
    fetchNote();
  },[id])

  const handleDelete = async() =>{
    if(!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`)
      toast.success("Note deleted");
      navigate("/homepage")
    } catch (error) {
        console.log("Error deleting the note:",error)
        toast.error("Failed to delete the note");
    }
  }

  const handlesave = async()=>{
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Please add a title or content");
      return;
    }
    setSaving(true)

    try {
      await api.put(`/notes/${id}`,note);
      toast.success("Note updated successfully")
      navigate("/homepage")
    } catch (error) {
      console.log("Error saving the note:",error)
      toast.error("Failed to update note");
    } finally{
      setSaving(false)
    }
  }

  if(loading){
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-6 sm:py-8'>
        <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 mb-6'>
          <Link to="/homepage" className='btn btn-ghost btn-sm sm:btn-md w-full sm:w-auto'>
          <ArrowLeftIcon className='h-5 w-5'/>
          Back to Notes
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline btn-sm sm:btn-md w-full sm:w-auto'>
            <Trash2Icon className='h-5 w-5'/>
            Delete Note
          </button>
           </div>

           <div className='card bg-base-100'>
            <div className='card-body p-4 sm:p-6'>
              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input
                type="text"
                placeholder='Note title'
                className='input input-bordered w-full'
                value={note.title}
                onChange={(e)=>setNote({...note,title: e.target.value})}
                />
              </div>


                <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea
                placeholder='Write Your Note here....'
                className='textarea textarea-bordered h-32 w-full'
                value={note.content}
                onChange={(e)=>setNote({...note,content: e.target.value})}
                />
              </div>

              <div className='card-actions justify-end'>
                <button className='btn btn-primary w-full sm:w-auto' disabled={saving} onClick={handlesave} >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>


            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage