import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-indigo-950 text-white p-2 shadow-lg fixed top-0 w-full z-50">
      <div className="mx-auto flex ml-4 items-center">
        <div className="font-bold">
          <a href="/" className="hover:text-gray-200">
            <img src="/logo.png" alt="logo" className="w-20 h-12" />
          </a>
        </div>

        <ul className="text-xl font-semibold flex space-x-4 ml-6">
          <li>
            <a
              href="/dashboard"
              className="hover:text-gray-300 focus:text-yellow-400 active:text-yellow-400"
            >
              Dashboard
            </a>
          </li>

          {/* Tracking with Dropdown */}
          <li className="relative group">
            <button className="hover:text-gray-200 flex items-center focus:text-yellow-400 active:text-yellow-400">
              Tracking <FaChevronDown className="text-sm ml-1 relative top-[2px]" />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-indigo-900 text-blue shadow-lg rounded-lg hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-200 border-b border-white">
                <a href="/tracking/orders">Order Tracking</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 border-b border-white">
                <a href="/tracking/shipments">Shipment Tracking</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <a href="/tracking/returns">Return Tracking</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="/analytics"
              className="hover:text-gray-300 focus:text-yellow-400 active:text-yellow-400"
            >
              Analytics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
