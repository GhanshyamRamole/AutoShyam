export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic' | 'CVT';
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Convertible' | 'Wagon';
  color: string;
  image: string;
  images: string[];
  features: string[];
  description: string;
  location: string;
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
  featured: boolean;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  engineSize: string;
  doors: number;
  seats: number;
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD';
}