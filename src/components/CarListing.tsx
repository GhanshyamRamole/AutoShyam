import React from 'react';
import { Car } from '../types/Car';
import CarCard from './CarCard';

interface CarListingProps {
  cars: Car[];
  onCarSelect: (car: Car) => void;
}

export default function CarListing({ cars, onCarSelect }: CarListingProps) {
  const featuredCars = cars.filter(car => car.featured);
  const regularCars = cars.filter(car => !car.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {featuredCars.length > 0 && (
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Vehicles</h2>
            <p className="text-gray-600">Hand-picked premium cars from trusted sellers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onSelect={() => onCarSelect(car)}
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">All Vehicles</h2>
          <p className="text-gray-600">Browse our complete inventory of quality cars</p>
        </div>
        
        {regularCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onSelect={() => onCarSelect(car)}
                featured={false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No vehicles found matching your criteria</div>
            <p className="text-gray-500">Try adjusting your search filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
}