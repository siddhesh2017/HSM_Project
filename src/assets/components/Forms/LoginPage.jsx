import React from 'react'
import image from '../../../../public/medicine-blue-background-flat-lay.jpg'

const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-center bg-cover bg-[url(../../../../public/medicine-blue-background-flat-lay.jpg)] flex items-center justify-center p-30'>
      {/* Login Form */}
      <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
            <form className="flex flex-col">
              <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address"></input>
              <input type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password"></input>
              
              {/* Counter Option */}
              <div className="  max-w-auto text-gray-500">
              <label className="text-gray-400 text-md "> Counter </label>
                <div
                  className=" rounded-lg flex items-center p-2 bg-gray-100"
                >
                  <select
                    className="text-md outline-none rounded-lg h-full px-2 cursor-pointer font-semibold tracking-wide bg-transparent"
                  >
                    <option
                      value="Billing/Reception Counter"
                      label="Billing/Reception Counter"
                      className="cursor-pointer bg-transparent text-gray-500 hover:text-white font-semibold tracking-wide"
                    ></option>
                    <option
                      value="Billing/Reception Counter"
                      label="Billing/Reception Counter"
                      className="cursor-pointer bg-white text-gray-500 hover:text-white font-semibold"
                    ></option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between flex-wrap">
                <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
                  <input type="checkbox" id="remember-me" className="mr-2"></input>
                  Remember me
                </label>
                <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
                <p className="text-gray-900 mt-4"> Don't have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
              </div>

              <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage