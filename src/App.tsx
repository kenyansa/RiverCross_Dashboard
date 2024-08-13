import AriaChart from "./components/AriaChart";
import BaChart from "./components/BaChart";
import DoughnutChart from "./components/DoughNut";
import LyneChart from "./components/LyneChart";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications";



export default function App() {

  return (
    <>
      <Navbar />
      <div className="pt-16 flex flex-col md:flex-row h-screen">
        {/* Right Section: Notifications */}
        <div className='w-full md:w-1/4 p-4 md:order-1'>
          <Notifications />
        </div>

        {/* Vertical Line Separator */}
        <div className="hidden md:block w-px bg-gray-300"></div>

        {/* Left Section: Dashboard Header and Charts */}
        <div className="flex-1 p-4 md:w-3/4">
          <h1 className='text-3xl font-bold mb-2'>DashBoard</h1>
          <hr className='w-full border-gray-300 border-t-1 mb-4 mx-2'/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Charts here */}
            <BaChart />
            <AriaChart />
            <LyneChart />
            <DoughnutChart />

          </div>
        </div>
      </div>
        
    </>
  )
}


