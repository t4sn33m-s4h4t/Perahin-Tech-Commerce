import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <section className="bg-white ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-5xl font-medium text-[#9538E2]">
              <p>404</p>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500">The page you are looking for doesn't exist. Here are some helpful links:</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button onClick={() => navigate(-1)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                <span>Go back</span>
              </button>

              <Link to="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#9538E2] rounded-lg shrink-0 sm:w-auto hover:bg-[#7928bb]">
                Take me home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
