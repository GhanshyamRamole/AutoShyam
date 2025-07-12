import React from 'react';
import { Search, Filter, DollarSign } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function Hero({ 
  searchTerm, 
  onSearchChange, 
  selectedBrand, 
  onBrandChange, 
  priceRange, 
  onPriceRangeChange 
}: HeroProps) {
  const brands = ['', 'BMW', 'Tesla', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda'];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Find Your Perfect Car
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Discover premium vehicles from trusted sellers nationwide
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search make or model..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Brand Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedBrand}
                onChange={(e) => onBrandChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none"
              >
                <option value="">All Brands</option>
                {brands.slice(1).map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={`${priceRange[0]}-${priceRange[1]}`}
                onChange={(e) => {
                  const [min, max] = e.target.value.split('-').map(Number);
                  onPriceRangeChange([min, max]);
                }}
                className="w-full pl-10 pr-4 py-3 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none"
              >
                <option value="0-100000">All Prices</option>
                <option value="0-30000">Under $30,000</option>
                <option value="30000-50000">$30,000 - $50,000</option>
                <option value="50000-70000">$50,000 - $70,000</option>
                <option value="70000-100000">$70,000+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-300 mb-2">1000+</div>
            <div className="text-blue-200">Quality Vehicles</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
            <div className="text-blue-200">Trusted Dealers</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
            <div className="text-blue-200">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}