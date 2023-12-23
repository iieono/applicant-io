import React from 'react'

function Page404() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue" onClick={() => window.location.reload()}>Refresh</button>
                <a href="/" className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline-green">Go to Main Page</a>
            </div>
        </div>
    </div>
  )
}

export default Page404