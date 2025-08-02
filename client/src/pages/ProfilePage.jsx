import UserInfoCard from "../components/Card/UserInfoCard";
import PostCard from "../components/Card/PostCard";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest User",
    email: "guest@example.com",
    bio: "Full Stack Developer | Cyber Enthusiast",
  };

  const [postsData, setPostsData] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("/Posts.json").then((response) =>
        response.json()
      );
      setPostsData(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const userPosts = postsData.filter((post) => post.author === user.name);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen w-full">
        <div className="p-6 max-w-5xl mx-auto space-y-6">
          <UserInfoCard user={user} />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Posts</h3>
            {userPosts.length > 0 ? (
              userPosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <p className="text-sm text-gray-500">No posts yet.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
