export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold border-b-4 border-black pb-3">
          Dashboard
        </h1>
        <p className="mt-3 text-gray-700 text-lg">
          Welcome to your admin dashboard. Here’s an overview of your platform.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-3xl font-extrabold text-blue-600">1,250</p>
          <p className="text-gray-500 mt-1">Active users this month</p>
        </div>

        {/* Courses */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Courses</h2>
          <p className="text-3xl font-extrabold text-green-600">32</p>
          <p className="text-gray-500 mt-1">Courses available</p>
        </div>

        {/* Promotions */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Promotions</h2>
          <p className="text-3xl font-extrabold text-purple-600">5</p>
          <p className="text-gray-500 mt-1">Active promotions</p>
        </div>

        {/* Notices */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Notices</h2>
          <p className="text-3xl font-extrabold text-red-600">12</p>
          <p className="text-gray-500 mt-1">Unread notices</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="bg-white border-2 border-black rounded-xl p-4 shadow hover:shadow-lg transition flex justify-between items-center">
            <span>New course added: "React Basics"</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </li>
          <li className="bg-white border-2 border-black rounded-xl p-4 shadow hover:shadow-lg transition flex justify-between items-center">
            <span>Promotion activated: "Summer Discount"</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </li>
          <li className="bg-white border-2 border-black rounded-xl p-4 shadow hover:shadow-lg transition flex justify-between items-center">
            <span>Notice published: "Maintenance Downtime"</span>
            <span className="text-gray-500 text-sm">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
