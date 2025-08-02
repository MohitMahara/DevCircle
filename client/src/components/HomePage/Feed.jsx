import toast from "react-hot-toast";
import NewPost from "./NewPost";
import { useState } from "react";
import { useEffect } from "react";
import PostCard from "../Card/PostCard";


export default function Feed() {

  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    try {
      const res = await fetch('/Posts.json');
      const data = await res.json();
      setPosts(data);

    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
     getPosts();
  }, [posts]);

  const handleNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="space-y-4">
      <NewPost onPost={handleNewPost} />
      {posts?.map((post) => (
        <PostCard key={post?.id} post={post} />
      ))}
    </div>
  );
}
