import React, { useState } from 'react';
import { Calendar, Search, MapPin } from 'lucide-react';
import { Region } from '../../types';
import PriceVisualization from '../common/PriceVisualization';

interface SearchFilterProps {
  regions: Region[];
  onFilterChange: (filters: {
    region: string;
    priceRange: [number, number];
    date: string;
    searchTerm: string;
  }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ regions, onFilterChange }) => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [date, setDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePriceChange = (value: number) => {
    setPriceRange([0, value]);
    onFilterChange({
      region: selectedRegion,
      priceRange: [0, value],
      date,
      searchTerm
    });
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRegion(value);
    onFilterChange({
      region: value,
      priceRange,
      date,
      searchTerm
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
    onFilterChange({
      region: selectedRegion,
      priceRange,
      date: value,
      searchTerm
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({
      region: selectedRegion,
      priceRange,
      date,
      searchTerm: value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="space-y-4">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="label">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="search"
              placeholder="Search for hosts..."
              className="input pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Region Select */}
        <div>
          <label htmlFor="region" className="label">Region</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <select
              id="region"
              className="input pl-10 appearance-none"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="all">All Regions</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <PriceVisualization
          min={0}
          max={200}
          value={priceRange[1]}
          onChange={handlePriceChange}
        />

        {/* Date */}
        <div>
          <label htmlFor="date" className="label">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="date"
              id="date"
              className="input pl-10"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;