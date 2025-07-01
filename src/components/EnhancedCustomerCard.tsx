import { Star, Quote, MapPin, Wheat, Settings, Smartphone, Calendar, CheckCircle, Factory } from 'lucide-react';
import { CustomerTestimonial, calculateYearsOfExperience } from '@/lib/customerExperiencesData';
import Link from 'next/link';
import CustomerAvatar from './CustomerAvatar';

interface EnhancedCustomerCardProps {
  testimonial: CustomerTestimonial;
}

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}

export default function EnhancedCustomerCard({ testimonial }: EnhancedCustomerCardProps) {
  const yearsOfExperience = calculateYearsOfExperience(testimonial.since);
  
  // Add subtle visual variation based on customer ID for better distinction
  const cardVariations = [
    'from-white to-blue-50',
    'from-white to-green-50', 
    'from-white to-purple-50',
    'from-white to-orange-50',
    'from-white to-teal-50',
    'from-white to-pink-50'
  ];
  const backgroundVariation = cardVariations[testimonial.id % cardVariations.length];
  
  return (
    <Link href={`/customers/experiences/${testimonial.slug}`} className="block">
      <div className={`bg-gradient-to-br ${backgroundVariation} rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-primary-50 hover:to-white transition-all duration-300 group h-full`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <CustomerAvatar 
              name={testimonial.name} 
              className="w-12 h-12 text-sm flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">{testimonial.name}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  Verified
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={12} />
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>
          <StarRating />
        </div>

        {/* Customer Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-3 border border-primary-200 group-hover:border-primary-300 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Calendar size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary">Since</span>
            </div>
            <div className="text-sm font-bold text-gray-900">{testimonial.since}</div>
            <div className="text-xs text-gray-600">{yearsOfExperience} years</div>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-3 border border-secondary-200 group-hover:border-secondary-300 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Wheat size={14} className="text-secondary" />
              <span className="text-xs font-medium text-secondary">Volume</span>
            </div>
            <div className="text-sm font-bold text-gray-900">{testimonial.volume}</div>
            <div className="text-xs text-gray-600">annually</div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <Wheat size={14} className="text-secondary flex-shrink-0" />
            <div>
              <span className="text-xs font-medium text-secondary">Crops:</span>
              <span className="text-sm text-gray-700 ml-1">{testimonial.crops}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Settings size={14} className="text-primary flex-shrink-0" />
            <div>
              <span className="text-xs font-medium text-primary">Equipment:</span>
              <span className="text-sm text-gray-700 ml-1">{testimonial.equipment}</span>
            </div>
          </div>

          {testimonial.dryer && (
            <div className="flex items-center gap-2">
              <Factory size={14} className="text-gray-600 flex-shrink-0" />
              <div>
                <span className="text-xs font-medium text-gray-600">Dryer:</span>
                <span className="text-sm text-gray-700 ml-1">{testimonial.dryer}</span>
                {testimonial.dryerModel && (
                  <span className="text-xs text-gray-500 ml-1">({testimonial.dryerModel})</span>
                )}
              </div>
            </div>
          )}

          {testimonial.usesMobile && (
            <div className="flex items-center gap-2">
              <Smartphone size={14} className="text-green-600 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                DM Mobile User
              </span>
            </div>
          )}
        </div>

        {/* Key Benefit Badge */}
        {testimonial.keyBenefit && (
          <div className="mb-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-200 rounded-lg p-3 border border-primary-300 group-hover:from-primary-200 group-hover:to-primary-300 transition-all">
              <CheckCircle size={14} className="text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">{testimonial.keyBenefit}</span>
            </div>
          </div>
        )}

        {/* Review Quote */}
        <div className="relative mb-4">
          <Quote className="absolute -top-1 -left-1 w-4 h-4 text-primary/30" />
          <blockquote className="text-gray-700 italic leading-relaxed pl-6 text-sm line-clamp-3">
            {testimonial.quote}
          </blockquote>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-primary-200 transition-colors">
          <div className="text-xs text-gray-500">
            {testimonial.calibrationFrequency && (
              <span>Calibrates: {testimonial.calibrationFrequency}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-primary group-hover:text-primary-dark transition-colors duration-200">
            <span className="text-sm font-medium group-hover:font-semibold">Read Full Story</span>
            <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}