export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Journals</h1>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Create Journal</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md">India</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md">Active</span>
              </div>
              <span>Expires in 5 months 28 days</span>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Extend Validity</button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-md">Edit</button>
              <button className="bg-brown-600 text-white px-4 py-2 rounded-md">Open</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  