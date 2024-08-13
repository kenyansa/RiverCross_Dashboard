import Navbar from "./components/Navbar";



export default function App() {

  return (
    <>
      <Navbar />
      <div className="pt-16 flex h-screen">
        <div className="flex-1 p-4">
          <h1 className='text-3xl font-bold mb-2'>DashBoard</h1>
          <hr className='w-full border-gray-300 border-t-1 mb-4 mx-2'/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Charts here */}
          </div>
        </div>

        {/* Vertical Line Separator */}
        <div className="w-px bg-gray-300"></div>

        {/* Right Section: Notifications */}
        <div className='w-full md:w-1/4 p-4'>
          {/* RHS Components */}
        </div>

      </div>
        
    </>
  )
}


