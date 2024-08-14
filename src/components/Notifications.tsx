import { FaUser, FaInfoCircle, FaWeight,FaAlgolia } from 'react-icons/fa';
import { CiLight } from "react-icons/ci";
import { MdBatteryAlert } from "react-icons/md";
import { useState } from 'react';
import Modal from './Modal'

export default function Notifications() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
          <div className="flex flex-col items-center p-4 shadow-lg rounded-lg">
            <div className="flex flex-col items-center space-y-2 mb-4">
              <FaUser className="text-4xl text-gray-400 w-20 h-20" />
              <p className="text-2xl text-blue-800 font-bold">Hi David, welcome.</p>
            </div>
            <hr className='w-full border-gray-300 border-t-1 mb-4'/>
            <h2 className="text-xl text-gray-500 font-bold mb-4 text-center">RECENT NOTIFICATIONS</h2>

            <div className='space-y-2 w-full overflow-y-scroll'>
              {/* Card 1 */}
              <div className="flex items-center w-full p-1 bg-blue-50 shadow-lg rounded-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-red-700 rounded-md">
                  <MdBatteryAlert className="text-white text-3xl" />
                </div>

                <div className="ml-4 flex-grow">
                  <div className="text-md text-gray-500 font-medium">KBL 175G</div>
                  <div className="text-gray-600">10/02/2023 14:21</div>
                  <div className="text-teal-300 font-medium">Kapenguria Depot</div>
                </div>
                <div className="ml-auto">
                  <FaInfoCircle className="text-gray-500 text-3xl" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center w-full p-1 bg-blue-50 shadow-lg rounded-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-red-400 rounded-md">
                  <CiLight  className="text-white text-3xl" />
                </div>

                <div className="ml-4 flex-grow">
                  <div className="text-md text-gray-500 font-medium">KBL 115G</div>
                  <div className="text-gray-600">10/02/2023 14:19</div>
                  <div className="text-teal-300 font-medium">KCC Molo</div>
                </div>
                <div className="ml-auto">
                  <FaInfoCircle className="text-gray-500 text-3xl" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center w-full p-1 bg-blue-50 shadow-lg rounded-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-teal-600 rounded-md">
                  <FaWeight className="text-white text-3xl" />
                </div>

                <div className="ml-4 flex-grow">
                  <div className="text-md text-gray-500 font-medium">KBL 165G</div>
                  <div className="text-gray-600">10/02/2023 14:17</div>
                  <div className="text-teal-300 font-medium">Mbaraki DepoT</div>
                </div>
                <div className="ml-auto">
                  <FaInfoCircle className="text-gray-500 text-3xl" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-center w-full p-1 bg-blue-50 shadow-lg rounded-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-md">
                  <FaAlgolia className="text-white text-3xl" />
                </div>

                <div className="ml-4 flex-grow">
                  <div className="text-md text-gray-500 font-medium">KBQ 165G</div>
                  <div className="text-gray-600">10/02/2023 14:17</div>
                  <div className="text-teal-300 font-medium">Mbaraki Depot</div>
                </div>
                {/* Information Icon */}
                <div className="ml-auto">
                  <FaInfoCircle className="text-gray-500 text-3xl" />
                </div>
              </div>
            </div>
            <hr className='w-full border-gray-300 border-t-1 m-4'/>
            <button
                className="mt-2 px-4 py-4 bg-blue-600 text-white font-bold rounded-lg w-full"
                onClick={() => setModalOpen(true)}
                >
                See More Details
            </button>
          </div>
          {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </>
      )
}

