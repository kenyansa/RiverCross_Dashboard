import { FaLongArrowAltRight } from 'react-icons/fa';

interface ChartButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function ChartButton({ label, onClick, className = '' }: ChartButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-700 focus:outline-none text-sm ${className}`}
    >
      {label}
      <FaLongArrowAltRight className="ml-2" />
    </button>
  );
}
