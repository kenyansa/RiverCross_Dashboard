import { useState, ChangeEvent } from 'react';

export default function FleetAndDatePicker() {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2">
        {/* Fleet Header */}
        <div className="flex items-center">
          <h2 className='text-2xl font-semibold text-blue-950'>Fleet</h2>
        </div>
        
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