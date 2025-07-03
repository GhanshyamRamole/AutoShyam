import React, { useState } from 'react';
import { Car } from '../types/Car';
import { 
  Fuel, 
  Gauge, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Settings, 
  Users, 
  Car as CarIcon,
  Star,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface CarDetailProps {
  car: Car;
  onBack: () => void;
}

export default function CarDetail({ car, onBack }: CarDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === car.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? car.images.length - 1 : prev - 1
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form submitted:', { userName, userEmail, inquiryMessage });
    setShowContactForm(false);
    // Reset form
    setUserName('');
    setUserEmail('');
    setInquiryMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Listings</span>
        </button>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={car.images[currentImageIndex]}
              alt={`${car.make} ${car.model}`}
              className="w-full h-96 object-cover rounded-2xl"
            />
            
            {car.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            
            {car.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span>Featured</span>
              </div>
            )}
          </div>
          
          {car.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {car.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${car.make} ${car.model} view ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-20 w-20 object-cover rounded-lg cursor-pointer transition-all ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-blue-500 opacity-100' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Car Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {car.year} {car.make} {car.model}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{car.location}</span>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              {formatPrice(car.price)}
            </div>
          </div>

          {/* Key Specs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-2">
                <Gauge className="h-5 w-5 mr-2" />
                <span className="text-sm">Mileage</span>
              </div>
              <div className="text-xl font-semibold text-gray-900">
                {formatMileage(car.mileage)} miles
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="text-sm">Year</span>
              </div>
              <div className="text-xl font-semibold text-gray-900">
                {car.year}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-2">
                <Fuel className="h-5 w-5 mr-2" />
                <span className="text-sm">Fuel Type</span>
              </div>
              <div className="text-xl font-semibold text-gray-900">
                {car.fuelType}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-2">
                <Settings className="h-5 w-5 mr-2" />
                <span className="text-sm">Transmission</span>
              </div>
              <div className="text-xl font-semibold text-gray-900">
                {car.transmission}
              </div>
            </div>
          </div>

          {/* Additional Specs */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Body Type:</span>
                <span className="font-medium">{car.bodyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color:</span>
                <span className="font-medium">{car.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Engine:</span>
                <span className="font-medium">{car.engineSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Drivetrain:</span>
                <span className="font-medium">{car.drivetrain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Doors:</span>
                <span className="font-medium">{car.doors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Seats:</span>
                <span className="font-medium">{car.seats}</span>
              </div>
            </div>
          </div>

          {/* Contact Seller */}
          <div className="bg-blue-50 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Seller</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-700">
                <span className="font-medium">{car.sellerName}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>{car.sellerPhone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>{car.sellerEmail}</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Call Now
              </button>
              <button 
                onClick={() => setShowContactForm(true)}
                className="flex-1 bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Features */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
          <p className="text-gray-600 leading-relaxed">{car.description}</p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Features</h3>
          <div className="grid grid-cols-1 gap-2">
            {car.features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message to Seller</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Hi, I'm interested in the ${car.year} ${car.make} ${car.model}. Is it still available?`}
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}