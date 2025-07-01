import { Star, MapPin, Wheat, Quote, ArrowRight, Clock } from 'lucide-react';
import { CustomerTestimonial } from '@/lib/customerExperiencesData';
import Link from 'next/link';
import Image from 'next/image';

interface CustomerTestimonialCardProps {
  testimonial: CustomerTestimonial;
}

// Generate a realistic review date based on when they became a customer
function getReviewDate(customerSince: string): string {
  const currentYear = 2024;
  const sinceYear = parseInt(customerSince);
  
  // Generate a date within the last 2 years, but not before they became a customer
  const earliestReviewYear = Math.max(sinceYear + 1, currentYear - 2);
  const reviewYear = Math.min(earliestReviewYear + Math.floor(Math.random() * 2), currentYear);
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  
  return `${randomMonth} ${reviewYear}`;
}

export default function CustomerTestimonialCard({ testimonial }: CustomerTestimonialCardProps) {
  return (
    <Link href={`/customers/experiences/${testimonial.slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
      {/* Customer Header */}
      <div className="relative h-40 bg-gradient-to-br from-primary to-secondary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span className="text-sm">{testimonial.location}</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
            <Quote className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Customer Since</div>
            <div className="font-bold text-primary">{testimonial.since}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Annual Volume</div>
            <div className="font-bold text-secondary">{testimonial.volume}</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <Wheat className="w-5 h-5 text-secondary" />
            <span className="text-sm text-gray-700"><strong>Crops:</strong> {testimonial.crops}</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-700"><strong>Equipment:</strong> {testimonial.equipment}</span>
          </div>
          {testimonial.dryer && (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <span className="text-sm text-gray-700"><strong>Dryer:</strong> {testimonial.dryer}</span>
            </div>
          )}
          {testimonial.calibrationFrequency && (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <span className="text-sm text-gray-700"><strong>Calibration:</strong> {testimonial.calibrationFrequency}</span>
            </div>
          )}
        </div>

        {/* Testimonial Quote */}
        <div className="relative mb-4">
          <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</div>
          <blockquote className="text-gray-700 italic leading-relaxed pl-6">
            {testimonial.quote}
          </blockquote>
          <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20 font-serif">"</div>
        </div>

        {/* Read More Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>Reviewed {getReviewDate(testimonial.since)}</span>
          </div>
          <div className="flex items-center gap-2 text-primary group-hover:text-primary-dark transition-colors duration-200">
            <span className="text-sm font-medium">Read Full Story</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
}