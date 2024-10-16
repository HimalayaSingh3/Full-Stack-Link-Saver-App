import React, { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import "../App.css"
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS



const LinkSaver = () => {
  const [savers, setSavers] = useState([]);
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState("");

  useEffect(() => {
    fetchLinks();
}, []);

const fetchLinks = async () => {
    const response = await axios.get('http://localhost:5000/api/links');
    setSavers(response.data);
};

const addLink = async () => {
  if (!title || !links) {
      toast.error("Both title and URL are required!");
      return;
  }

  const newLink = { title, links };

  try {
      await axios.post('http://localhost:5000/api/links', newLink);
      fetchLinks();
      setTitle('');
      setLinks('');
      toast.success("Link saved successfully!");
  } catch (error) {
      console.error('Error adding link:', error.response.data);
      toast.error("Failed to save link.");
  }
};

const deleteLink = async (id) => {
  try {
      await axios.delete(`http://localhost:5000/api/links/${id}`);
      fetchLinks();
      toast.success("Link deleted successfully!");
  } catch (error) {
      console.error('Error deleting link:', error);
      toast.error("Failed to delete link.");
  }
};


const textCopy = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("Link copied to clipboard!");
};


  return (
    <div class="manager" className='w-full p-10 bg-blue-200'>
       <ToastContainer />
        <h1 className='text-4xl text-center font-bold'>&lt;Link <span className='text-blue-500'>Saver/&gt;</span> </h1>
        <p className='text-center mb-4 font-semibold'>Your Link Manager</p>
        <div className='flex flex-col gap-3'>
            <input type="text" placeholder='Enter TITLE' className='border-2 border-blue-500 px-6 p-2 outline-none rounded-3xl'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" placeholder='Enter URL' className='border-2 border-blue-500 p-2 px-6 outline-none rounded-3xl'
            value={links}
            onChange={(e) => setLinks(e.target.value)}/>
            <div className='flex justify-center'>
            <button className='bg-blue-500 p-2 w-20 flex gap-1 font-semibold text-white rounded border-none' 
            onClick={addLink}>
                <SaveIcon/>
                Save
            </button>
            </div>
            <h2 className='text-xl text-blue-500 mb-4 font-bold'>Yours Links</h2>
            <div className='mb-6'>
                 <ul className='flex flex-col gap-4'>
                     {savers.map((link) => (
                         <li key={link._id} className='shadow-md bg-green-100 rounded-lg p-2 flex flex-col gap-2 items-start '>
                             <h2 className='text-lg font-bold'>{link.title}</h2>
                             <p>{link.links}</p> {/* Updated to link.url */}
                             <div className='flex justify-between w-full'>
                                 <button onClick={() => textCopy(link.links)} className="p-1 rounded-lg bg-blue-600 text-sm text-white flex items-center">
                                     <ContentCopyIcon/>
                                 </button>
                                 <button onClick={() => deleteLink(link._id)} className="p-1 rounded-lg bg-red-600 text-sm text-white"><DeleteIcon/></button>
                             </div>
                         </li>
                     ))}
                 </ul>
            </div>
        </div>
        
    </div>
    
  )
}

export default LinkSaver
