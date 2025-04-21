import React from 'react';
import { motion } from 'framer-motion';

interface PriceVisualizationProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  currency?: string;
}

const PriceVisualization: React.FC<PriceVisualizationProps> = ({
  min,
  max,
  value,
  onChange,
  currency = '$'
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const priceRanges = [
    { label: 'Budget', max: 50, color: 'bg-green-500' },
    { label: 'Moderate', max: 100, color: 'bg-yellow-500' },
    { label: 'Premium', max: 150, color: 'bg-orange-500' },
    { label: 'Luxury', max: 200, color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Price (per night)</span>
        <span className="text-lg font-semibold text-primary-600">
          {currency}{value}
        </span>
      </div>

      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        {priceRanges.map((range, index) => (
          <div
            key={range.label}
            className={`absolute h-full ${range.color} opacity-20`}
            style={{
              left: `${((range.max - min) / (max - min)) * 100}%`,
              width: index === 0
                ? `${((range.max - min) / (max - min)) * 100}%`
                : `${((range.max - priceRanges[index - 1].max) / (max - min)) * 100}%`
            }}
          />
        ))}

        <motion.div
          className="absolute h-full bg-primary-500 rounded-full"
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        {priceRanges.map((range) => (
          <span key={range.label}>{range.label}</span>
        ))}
      </div>
    </div>
  );
};

export default PriceVisualization; 