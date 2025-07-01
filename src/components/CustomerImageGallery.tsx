'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera } from 'lucide-react';

interface CustomerImageGalleryProps {
  images: string[];
  customerName: string;
}

export default function CustomerImageGallery({ images, customerName }: CustomerImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  const openFullscreen = (index: number) => {
    const validIndex = validImages.findIndex(img => img === images[index]);
    if (validIndex !== -1) {
      setSelectedImage(validIndex);
      setCurrentIndex(validIndex);
    }
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const handleImageError = (imageSrc: string) => {
    setImageErrors(prev => new Set(prev).add(imageSrc));
  };

  if (!images || images.length === 0) return null;

  // Filter out images that had errors
  const validImages = images.filter(img => !imageErrors.has(img));

  // If all images have errors, show placeholder
  if (validImages.length === 0 && imageErrors.size === images.length) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Gallery</h2>
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            Installation photos for {customerName} are coming soon.
          </p>
          <p className="text-sm text-gray-500">
            Check back later to see {customerName}\'s dryer installation and Dryer Master control system setup.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Gallery</h2>
        <p className="text-gray-600 mb-6">
          View {customerName}\'s actual dryer installation and Dryer Master control system setup
        </p>
        
        {/* Scrollable horizontal gallery for mobile, grid for desktop */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              !imageErrors.has(image) && (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openFullscreen(index)}
                >
                  <Image
                    src={image}
                    alt={`${customerName} installation ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(image)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4">
                  {images.map((image, index) => (
                    !imageErrors.has(image) && (
                      <div
                        key={index}
                        className="relative aspect-[4/3] min-w-[280px] rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                        onClick={() => openFullscreen(index)}
                      >
                        <Image
                          src={image}
                          alt={`${customerName} installation ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="280px"
                          onError={() => handleImageError(image)}
                        />
                      </div>
                    )
                  ))}
                </div>
              </div>
              {validImages.length > 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {validImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && validImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close fullscreen"
          >
            <X size={32} />
          </button>

          {validImages.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              src={validImages[currentIndex]}
              alt={`${customerName} installation ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          {validImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} of {validImages.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}