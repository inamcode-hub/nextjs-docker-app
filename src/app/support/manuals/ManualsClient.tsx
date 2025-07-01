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
          <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group">
            
            {/* Card Header */}
            <div className="bg-gradient-to-r from-primary-1 to-secondary-1 border-b border-primary/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                  {manual.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors duration-200 leading-tight">
                    {manual.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-full">
                      📋 {manual.category}
                    </span>
                    {manual.size && (
                      <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-secondary to-secondary-dark text-white text-sm font-semibold rounded-full">
                        📄 {manual.size}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Description */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">What's Inside:</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {manual.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleDownload(manual.downloadUrl, `${manual.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}.pdf`)}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold hover:shadow-xl transition-all duration-200 text-base"
                  title="Download PDF to your device"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Save to Device</span>
                </button>
                <button
                  onClick={() => handleView(manual.downloadUrl)}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-50 text-gray-700 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-100 hover:border-primary transition-all duration-200"
                  title="View PDF in browser"
                >
                  <Eye size={18} />
                  <span>Quick View</span>
                  <span className="text-xs text-gray-500">Open in Browser</span>
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  💡 Tip: Right-click "Quick View" to save or print directly
                </p>
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