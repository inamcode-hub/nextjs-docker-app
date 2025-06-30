'use client';

import { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';

interface Manual {
  title: string;
  description: string;
  downloadUrl: string;
  category: string;
  icon: React.ReactNode;
  size?: string;
}

interface ManualsClientProps {
  manualsData: Manual[];
  categories: string[];
}

export default function ManualsClient({ manualsData, categories }: ManualsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredManuals = selectedCategory === "All" 
    ? manualsData 
    : manualsData.filter(manual => manual.category === selectedCategory);

  const handleDownload = (downloadUrl: string, fileName: string) => {
    // Create a temporary link element with download attribute
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName || 'manual.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Temporarily add to DOM and click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (viewUrl: string) => {
    // Open in new tab/window for viewing
    window.open(viewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-primary">{filteredManuals.length}</span> manual{filteredManuals.length !== 1 ? 's' : ''}
          {selectedCategory !== "All" && (
            <span> in <span className="font-semibold text-primary">{selectedCategory}</span></span>
          )}
        </p>
      </div>

      {/* Manuals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredManuals.map((manual, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                {manual.icon}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-200">
                    {manual.title}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {manual.category}
                    </span>
                    {manual.size && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        {manual.size}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {manual.description}
              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(manual.downloadUrl, `${manual.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}.pdf`)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg flex-1 justify-center"
                  title="Download PDF to your device"
                >
                  <Download size={16} />
                  Download
                </button>
                <button
                  onClick={() => handleView(manual.downloadUrl)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 shadow-md hover:shadow-lg flex-1 justify-center"
                  title="View PDF in browser"
                >
                  <Eye size={16} />
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredManuals.length === 0 && (
        <div className="text-center py-12">
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No manuals found</h3>
          <p className="text-gray-500">Try selecting a different category.</p>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-16 bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Need Additional Documentation?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Can&apos;t find the manual you&apos;re looking for? Contact our technical support team for additional documentation and assistance.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
        >
          <FileText size={16} />
          Contact Support
        </a>
      </div>

    </div>
  );
}