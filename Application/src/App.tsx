import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarListing from './components/CarListing';
import CarDetail from './components/CarDetail';
import Footer from './components/Footer';
import { Car } from './types/Car';
import { mockCars } from './data/mockData';

function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === '' || car.make === selectedBrand;
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    
    return matchesSearch && matchesBrand && matchesPrice;
  });

  if (selectedCar) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onBackToHome={() => setSelectedCar(null)} />
        <CarDetail car={selectedCar} onBack={() => setSelectedCar(null)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
      />
      <CarListing 
        cars={filteredCars}
        onCarSelect={setSelectedCar}
      />
      <Footer />
    </div>
  );
}

export default App;