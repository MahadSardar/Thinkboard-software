import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import {Link} from "react-router"
import { formatDate } from '../lib/utils'
import axios from 'axios';
import toast from 'react-hot-toast'
import api from '../lib/axios.js';

const NoteCard = ({note,setNotes}) => {

    const handleDelete = async (e,id) =>{
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note?")) return;
        try {
            await api.delete(`/notes/${id}`)
            setNotes((prev)=>prev.filter(note=>note._id !== id))
            toast.success("Note Deleted Successfully")
        } catch (error) {
            console.log("Error in handleDelete",error)
            toast.error("Failed to delete note");
        }
    }

  return (
    <Link to={`/note/${note._id}`} className='card bg-base-100 shadow-lg hover:bg-base-200 transition-all duration-200 border-t-4
    border-solid border-primary w-full' >
        <div className='card-body p-4 sm:p-6'>
            <h3 className='card-title text-base-content text-lg sm:text-xl break-words'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3 text-sm sm:text-base' >{note.content}</p>
            <div className='card-actions justify-between items-center mt-4 flex-wrap gap-2' >
                <span className='text-xs sm:text-sm text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handleDelete(e,note._id)}>
                        <Trash2Icon className='size-4'/>
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard