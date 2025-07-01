import { CheckCircle, ArrowRight, Target, Zap } from 'lucide-react';
import { ApplicationExample } from '@/lib/applicationExamplesData';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicationCardProps {
  application: ApplicationExample;
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  const IconComponent = application.icon;
  
  const categoryColors = {
    'grain-drying': 'from-amber-50 to-amber-100 border-amber-200 text-amber-700',
    'food-processing': 'from-green-50 to-green-100 border-green-200 text-green-700',
    'industrial': 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
    'monitoring': 'from-purple-50 to-purple-100 border-purple-200 text-purple-700'
  };

  const categoryBadge = categoryColors[application.category] || categoryColors['monitoring'];

  return (
    <article className="group h-full">
      <div className="bg-white hover:bg-gradient-to-br hover:from-primary-50 hover:to-white rounded-2xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden group-hover:scale-[1.02]">
        
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={application.image}
            alt={application.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${categoryBadge}`}>
              <IconComponent size={14} />
              {application.category.replace('-', ' ')}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white leading-tight">
              {application.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Summary */}
          <p className="text-gray-700 leading-relaxed mb-4 text-sm">
            {application.summary}
          </p>

          {/* Key Features Preview */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              Key Features
            </h4>
            <div className="space-y-2">
              {application.keyFeatures.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle size={12} className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-xs text-gray-700">{feature}</span>
                </div>
              ))}
              {application.keyFeatures.length > 3 && (
                <div className="text-xs text-primary font-medium">
                  +{application.keyFeatures.length - 3} more features
                </div>
              )}
            </div>
          </div>

          {/* Benefits Preview */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target size={16} className="text-green-600" />
              Key Benefits
            </h4>
            <div className="flex flex-wrap gap-2">
              {application.benefits.slice(0, 2).map((benefit, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-full border border-green-200"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          {application.technicalDetails && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap size={16} className="text-blue-600" />
                Technical Info
              </h4>
              <div className="space-y-1">
                {application.technicalDetails.system && (
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">System:</span> {application.technicalDetails.system}
                  </div>
                )}
                {application.technicalDetails.sensors && (
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Sensors:</span> {application.technicalDetails.sensors}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto">
            <Link 
              href={`/customers/applications/${application.slug}`}
              className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 rounded-xl border border-primary-200 transition-all duration-300 group/link"
            >
              <span className="text-sm font-semibold text-primary-700">
                View Details
              </span>
              <ArrowRight size={16} className="text-primary-600 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}