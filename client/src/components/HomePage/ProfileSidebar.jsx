import { Link } from "react-router-dom";

export default function ProfileSidebar() {
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: 'Demo User',
    email: 'demo@example.com',
    bio: 'Web developer & designer',
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <Link to={"/profile"} className="text-center">
        <div className="w-20 h-20 bg-gray-300 mx-auto rounded-full mb-2" />
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-600 mt-2">{user.bio}</p>
      </Link>
    </div>
  );
}
