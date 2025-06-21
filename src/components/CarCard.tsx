import React from 'react';
import { Car } from '../types/Car';
import { Fuel, Gauge, Calendar, MapPin, Star, Zap } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: () => void;
  featured: boolean;
}

export default function CarCard({ car, onSelect, featured }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <div 
      onClick={onSelect}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group ${
        featured ? 'ring-2 ring-blue-500 relative' : ''
      }`}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current" />
          <span>Featured</span>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
          {car.condition}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {car.year} {car.make} {car.model}
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {car.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{formatPrice(car.price)}</div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Gauge className="h-4 w-4 mr-2 text-gray-400" />
              <span>{formatMileage(car.mileage)} miles</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>{car.year}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              {car.fuelType === 'Electric' ? (
                <Zap className="h-4 w-4 mr-2 text-green-500" />
              ) : (
                <Fuel className="h-4 w-4 mr-2 text-gray-400" />
              )}
              <span>{car.fuelType}</span>
            </div>
            <div className="text-gray-500">
              {car.transmission}
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {car.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                +{car.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
}