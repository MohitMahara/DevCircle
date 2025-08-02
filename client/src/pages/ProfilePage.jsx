import UserInfoCard from "../components/Card/UserInfoCard";
import PostCard from "../components/Card/PostCard";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { UseAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const {userInfo} = UseAuth();
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

  const userPosts = postsData.filter((post) => post.author === userInfo?.user?.name);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen w-full">
        <div className="p-6 max-w-5xl mx-auto space-y-6">
          <UserInfoCard user={userInfo?.user} />
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
