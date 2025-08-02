import { useState } from 'react';
import { UseAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function NewPost({getPosts}) {
  const [content, setContent] = useState("");
  const {userInfo} = UseAuth();
  const userId = userInfo?.user?._id;


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/posts/createPost`, 
            {userId, content});

        if (res.data.success) {
            toast.success(res.data.msg);
            setContent("");
            getPosts();
        }
        
    } catch (error) {
        toast.error(error.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded resize-none text-sm"
          placeholder="Start a post..."
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="text-right mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
