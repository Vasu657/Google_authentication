import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { FaUserCircle, FaChartBar, FaCog } from 'react-icons/fa'; // Icons for dashboard

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100 p-8">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-indigo-800">Dashboard</h2>
          <p className="text-xl text-gray-600 mt-2">Welcome back, {user.displayName || user.email}!</p>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center mb-4">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
              ) : (
                <FaUserCircle className="text-6xl text-indigo-500 mr-4" />
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{user.displayName || 'User'}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition w-full flex items-center justify-center">
              <FaCog className="mr-2" /> Edit Profile
            </button>
          </div>

          {/* Stats Section */}
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><FaChartBar className="mr-2 text-indigo-500" /> Your Stats</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Logins This Month:</span> <span className="font-bold">12</span></li>
              <li className="flex justify-between"><span>Active Sessions:</span> <span className="font-bold">3</span></li>
              <li className="flex justify-between"><span>Last Login:</span> <span className="font-bold">{new Date().toLocaleDateString()}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;