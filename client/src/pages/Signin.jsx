import React from 'react'

export default function Signin() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Sign In</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-1">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Sign In</button>
        </form>
      </div>
    </div>
  )
}
