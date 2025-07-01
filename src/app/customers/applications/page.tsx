'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { Settings, Factory, Award, Coffee, Wheat, Droplets, Filter, X } from 'lucide-react';
import ApplicationCard from '@/components/ApplicationCard';
import { applicationExamples, applicationStats, pageContent, ApplicationExample } from '@/lib/applicationExamplesData';

export default function ApplicationsPage() {
  const [filteredApplications, setFilteredApplications] = useState<ApplicationExample[]>(applicationExamples);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredApplications(applicationExamples);
    } else {
      setFilteredApplications(applicationExamples.filter(app => app.category === category));
    }
  };

  return (
    <main className="min-h-screen py-8">
      {/* Hero Section */}
      <header className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-12">
        <GlobalHeroCard>
          <GlobalHeroCardBadge icon={<Settings size={16} />}>
            {pageContent.hero.badge}
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle>
            <h1>{pageContent.hero.title}</h1>
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            {pageContent.hero.description}
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" aria-label="Application Statistics">
          {applicationStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <article key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </article>
            );
          })}
        </section>

        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pageContent.sections.intro.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {pageContent.sections.intro.description}
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-gray-900">Filter by Category</h3>
            {activeCategory !== 'all' && (
              <button
                onClick={() => handleCategoryFilter('all')}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <X size={14} />
                Clear Filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {pageContent.sections.categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.key;
              const count = category.key === 'all' 
                ? applicationExamples.length 
                : applicationExamples.filter(app => app.category === category.key).length;
              
              return (
                <button
                  key={category.key}
                  onClick={() => handleCategoryFilter(category.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-primary hover:bg-primary-50'
                  }`}
                >
                  <IconComponent size={16} />
                  <span className="font-medium">{category.label}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Applications Grid */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeCategory === 'all' ? 'All Applications' : pageContent.sections.categories.find(cat => cat.key === activeCategory)?.label}
            </h2>
            <p className="text-gray-600">
              {filteredApplications.length} of {applicationExamples.length} applications shown
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Application Examples">
            {filteredApplications.map((application) => (
              <div key={application.id} role="listitem">
                <ApplicationCard application={application} />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {pageContent.sections.cta.title}
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            {pageContent.sections.cta.description}
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Contact Options">
            {pageContent.sections.cta.buttons.map((button, index) => (
              <a 
                key={index}
                href={button.href} 
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 ${
                  button.primary 
                    ? 'bg-white text-primary hover:bg-gray-100' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary'
                }`}
                aria-label={button.text}
              >
                {button.text}
              </a>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}