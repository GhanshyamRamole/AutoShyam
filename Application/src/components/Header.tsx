import React from 'react';
import { Car, Phone, Mail, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onBackToHome?: () => void;
}

export default function Header({ onBackToHome }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
            )}
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AutoShyam</h1>
                <p className="text-xs text-gray-500">Premium Car Marketplace</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 XXXXXX2019</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span className="text-sm">ghanshyamramoleXX@gmail.com</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sell Your Car
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}