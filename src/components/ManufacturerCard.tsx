import { ExternalLink, MapPin, Calendar, Award, CheckCircle, Globe } from 'lucide-react';
import { Manufacturer } from '@/lib/manufacturersData';
import Image from 'next/image';

interface ManufacturerCardProps {
  manufacturer: Manufacturer;
  featured?: boolean;
}

export default function ManufacturerCard({ manufacturer, featured = false }: ManufacturerCardProps) {
  const CategoryIcon = manufacturer.categoryIcon;
  
  // Card size variations
  const cardSize = featured ? 'lg:col-span-2' : '';
  const logoSize = featured ? 'h-20 w-auto' : 'h-16 w-auto';
  const padding = '';

  // Category colors
  const categoryColors = {
    commercial: 'from-blue-50 to-blue-100 border-blue-200',
    farm: 'from-green-50 to-green-100 border-green-200',
    specialty: 'from-purple-50 to-purple-100 border-purple-200',
    mixed: 'from-orange-50 to-orange-100 border-orange-200'
  };

  const categoryBadgeColors = {
    commercial: 'bg-blue-100 text-blue-700',
    farm: 'bg-green-100 text-green-700',
    specialty: 'bg-purple-100 text-purple-700',
    mixed: 'bg-orange-100 text-orange-700'
  };

  const categoryGradient = categoryColors[manufacturer.category] || categoryColors.commercial;
  const categoryBadge = categoryBadgeColors[manufacturer.category] || categoryBadgeColors.commercial;

  return (
    <div className={`${cardSize} group h-full`}>
      <div className="bg-white hover:bg-gradient-to-br hover:from-primary-50 hover:to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:scale-[1.02]">
        {/* Header with Logo */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-0 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-50">
              <div className={`${logoSize} flex items-center justify-center min-w-[72px] min-h-[72px]`}>
                <Image
                  src={manufacturer.logo}
                  alt={`${manufacturer.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight mb-3">
                {manufacturer.name}
              </h3>
              <div className="space-y-2">
                {manufacturer.location && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-sm font-medium">{manufacturer.location}</span>
                  </div>
                )}
                {manufacturer.established && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-sm font-medium">Est. {manufacturer.established}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="flex flex-col items-end gap-2">
            <span className={`text-xs font-semibold px-4 py-2 rounded-full ${categoryBadge} capitalize shadow-sm`}>
              {manufacturer.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 flex flex-col">
          <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
            {manufacturer.description}
          </p>

          {/* Specialties */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              Key Specialties
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
              {manufacturer.specialties.slice(0, 4).map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs font-medium px-3 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 rounded-lg border border-primary-200 shadow-sm"
                >
                  <CheckCircle size={12} className="text-primary-600" />
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatibility Badge */}
          <div className="mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-700 bg-green-50 px-4 py-3 rounded-xl border border-green-200">
              <Award size={18} className="text-green-600" />
              <span className="font-semibold">Dryer Master Compatible</span>
            </div>
          </div>
        </div>

        {/* Footer - Push to bottom */}
        <div className="mt-auto">
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-primary-200 transition-colors">
            <div className="text-sm text-gray-500 font-medium">
              Trusted Partner
            </div>
            <a 
              href={manufacturer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-600 transition-colors group/link bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-xl"
            >
              <span className="text-sm font-semibold">Visit Website</span>
              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}