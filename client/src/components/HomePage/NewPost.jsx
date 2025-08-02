import { useState } from 'react';

export default function NewPost({ onPost }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    const newPost = {
      id: Date.now(),
      author: JSON.parse(localStorage.getItem('user'))?.name || 'Guest',
      content: text,
      timestamp: 'Just now',
    };

    onPost(newPost);
    setText('');
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded resize-none text-sm"
          placeholder="Start a post..."
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
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
