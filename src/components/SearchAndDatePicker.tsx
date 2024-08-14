import { useState, ChangeEvent } from 'react';
import { MdCarCrash } from "react-icons/md";

export default function SearchAndDatePicker() {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2">
        {/* Search Input */}
        <div className="flex items-center border-b-4 border-blue-950 pb-1 flex-1">
          <MdCarCrash className="text-blue-950 mr-2 w-8 h-8" />
          <input
            type="text"
            placeholder="Search by Reg No ..."
            className="focus:outline-none focus:border-none flex-1"
          />
        </div>

        {/* Button */}
        <button className="px-4 py-2 bg-blue-950 h-9 text-white rounded-lg hover:bg-blue-700">
          Go Track
        </button>
      </div>

      {/* Date Picker */}
      <div className="flex items-center rounded border-2 p-1">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border-none focus:outline-none"
        />
      </div>
    </div>
  );
}