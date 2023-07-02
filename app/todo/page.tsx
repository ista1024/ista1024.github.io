"use client";

// import { FaGear } from "react-icons/fa6";

export default function Home() {

  return (
    <main>
      <div className="contents">
        <div className="flex flex-col justify-center items-center">
          <h1 className="head_text">Todo!</h1>
        </div>
        <div className="flex flex-col w-full justify-start items-start mt-5">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="justify-between items-center sm:mr-3 mr-1">
              <select className=" appearance-none md:w-48 w-16 bg-gray-100 border border-gray-200 text-gray-700 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </div>
            <div className="flex flex-1 flex-row justify-between items-center gap-3">
              <input className="appearance-none w-full bg-gray-100 text-gray-700 border focus:border-red-500 rounded p-2 sm:mr-4 mr-1 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="To do" />
              {/* <div className="rounded-full border sm:w-10 sm:h-10 w-5 h-5 flex jusify-center items-center sm:p-4 p-2">
                <p className="desc text-center">
                  i
                </p>
              </div>
              <FaGear className="sm:w-9 sm:h-9 w-4 h-4 flex jusify-center items-center" /> */}
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <div className="md:w-48 w-16 sm:mr-3 mr-1">
              <input className="appearance-none w-full bg-gray-100 text-gray-700 border rounded p-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search" />
              <p className="desc ">
                today
              </p>
              <p className="desc text-ellipsis overflow-hidden ">
                custom categories
              </p>
            </div>
            <div className="flex-1 w-64 justify-center items-center">
              <p className="desc">
                todo list
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
