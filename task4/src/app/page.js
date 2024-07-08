// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full max-w-md mx-auto bg-white p-8 md:p-12 lg:p-24">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Champion Journal</h1>
          <p className="mt-2">Sign in to your account</p>
        </div>
        <form>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" autoComplete="current-password" required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign In
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot Password? Click Here</a>
          </div>
        </form>
      </div>
      <div className="hidden lg:block lg:w-2/3 bg-gradient-to-br from-blue-400 to-purple-500"></div>
    </div>
  );
}
