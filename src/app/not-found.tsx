import Link from 'next/link';
import Image from 'next/image';
import { Home, Search, Wheat, AlertCircle } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { Metadata } from 'next';
import GoBackButton from './GoBackButton';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Dryer Master',
  description: 'The page you are looking for could not be found. Browse our moisture control solutions and grain drying products.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen py-8">
      {/* Hero Section */}
      <header className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-12">
        <GlobalHeroCard>
          <GlobalHeroCardBadge icon={<AlertCircle size={16} />}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200 text-amber-700">
              404 - Page Not Found
            </span>
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle>
            Looks Like This Grain Bin is Empty
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            The page you're looking for seems to have been harvested already. Let's help you find what you need.
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual Element */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center animate-pulse">
              <Wheat size={80} className="text-amber-600" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle size={32} className="text-red-600" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 mb-4">
            Just like monitoring grain moisture, sometimes we need to redirect to the right location.
          </p>
          <p className="text-gray-600">
            The page might have been moved, renamed, or temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary-dark transition-colors shadow-lg"
          >
            <Search size={20} />
            Browse Products
          </Link>
          <GoBackButton />
        </div>

        {/* Helpful Links */}
        <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Products Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">🌾</span>
                </div>
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/moisture-sensors" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Real-Time Moisture Sensors
                  </Link>
                </li>
                <li>
                  <Link href="/products/dm510-controller" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    DM510 Controller
                  </Link>
                </li>
                <li>
                  <Link href="/products/dm-mobile" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    DM Mobile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Applications Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-secondary">🌽</span>
                </div>
                Applications
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/customers/applications" className="text-gray-600 hover:text-secondary transition-colors text-sm">
                    Application Examples
                  </Link>
                </li>
                <li>
                  <Link href="/customers/experiences" className="text-gray-600 hover:text-secondary transition-colors text-sm">
                    Customer Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/customers/manufacturers" className="text-gray-600 hover:text-secondary transition-colors text-sm">
                    Dryer Manufacturers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600">🚜</span>
                </div>
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/support/help" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">
                    Get Support
                  </Link>
                </li>
                <li>
                  <Link href="/support/manuals" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">
                    Product Manuals
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm">
            <Wheat size={16} />
            <span className="font-medium">Fun Fact:</span>
            <span>Proper grain moisture control can prevent up to 15% post-harvest losses!</span>
          </div>
        </div>
      </div>
    </main>
  );
}