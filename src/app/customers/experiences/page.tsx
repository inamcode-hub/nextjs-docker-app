import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { Users } from 'lucide-react';
import CustomerTestimonialCard from '@/components/CustomerTestimonialCard';
import { customerTestimonials, stats, pageContent } from '@/lib/customerExperiencesData';

export default function CustomerExperiences() {

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-12">
        <GlobalHeroCard>
          <GlobalHeroCardBadge icon={<Users size={16} />}>
            {pageContent.hero.badge}
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle>
            {pageContent.hero.title}
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            {pageContent.hero.description}
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{pageContent.sections.testimonials.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {pageContent.sections.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerTestimonials.map((testimonial) => (
              <CustomerTestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {pageContent.sections.cta.title}
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            {pageContent.sections.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {pageContent.sections.cta.buttons.map((button, index) => (
              <a 
                key={index}
                href={button.href} 
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 ${
                  button.primary 
                    ? 'bg-white text-primary hover:bg-gray-100' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}