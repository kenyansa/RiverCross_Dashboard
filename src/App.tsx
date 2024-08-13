import Navbar from "./components/Navbar";



export default function App() {

  return (
    <>
      <Navbar />
      <div className="pt-16 flex h-screen">
        <div className="flex-1 p-4">
          <h1 className='text-3xl font-bold mb-2'>DashBoard</h1>
          <hr className='w-full border-gray-300 border-t-2 mb-4 mx-2'/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Charts here */}
          </div>

        </div>

      </div>
        
    </>
  )
}


