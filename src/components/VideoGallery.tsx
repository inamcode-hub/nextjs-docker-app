'use client';

import { useState, useMemo } from 'react';
import { Play, Clock, Filter, Search, X, Video as VideoIcon, Monitor, Smartphone, Settings, Target, Image as ImageIcon } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  videoUrl?: string; // YouTube or other video URL
  thumbnailUrl?: string;
  duration?: string;
  featured?: boolean;
}

// Video data with actual YouTube video IDs
const videosData: Video[] = [
  // DM Mobile Videos
  {
    id: 'dm-mobile-overview',
    title: 'An Overview of DM Mobile',
    description: 'A walkthrough of the features of DM Mobile, Dryer Master\'s remote access feature for the DM510.',
    category: 'DM Mobile',
    videoUrl: 'https://www.youtube.com/embed/rWaXKL-Fx9Q',
    thumbnailUrl: 'https://img.youtube.com/vi/rWaXKL-Fx9Q/maxresdefault.jpg',
    featured: true
  },

  // DM510 Videos
  {
    id: 'dm510-basics',
    title: 'DM510 The Basics',
    description: 'A video going over the basics of operating a Dryer Master DM510 system, specifically geared to first time users.',
    category: 'DM510',
    videoUrl: 'https://www.youtube.com/embed/Xcsl1haNCOo',
    thumbnailUrl: 'https://img.youtube.com/vi/Xcsl1haNCOo/maxresdefault.jpg',
    featured: true
  },
  {
    id: 'dm510-more-basics',
    title: 'DM510 More Basics',
    description: 'Some additional information to help you get the most out of your DM510.',
    category: 'DM510',
    videoUrl: 'https://www.youtube.com/embed/4U_ryYip0sQ',
    thumbnailUrl: 'https://img.youtube.com/vi/4U_ryYip0sQ/maxresdefault.jpg'
  },
  {
    id: 'dm510-introduction',
    title: 'An introduction to Dryer Master\'s DM510',
    description: 'An overview of how the DM510 system works.',
    category: 'DM510',
    videoUrl: 'https://www.youtube.com/embed/HpfMRHYjUW0',
    thumbnailUrl: 'https://img.youtube.com/vi/HpfMRHYjUW0/maxresdefault.jpg'
  },
  {
    id: 'dm510-training',
    title: 'DM510 Training Video - Complete operator training video',
    description: 'Operator training video for the Dryer Master DM510 Computerized Grain Drying Control System.',
    category: 'DM510',
    videoUrl: 'https://www.youtube.com/embed/U72nZad0Xuo',
    thumbnailUrl: 'https://img.youtube.com/vi/U72nZad0Xuo/maxresdefault.jpg',
    featured: true
  },
  {
    id: 'grain-drying-approach',
    title: 'The Dryer Master approach to grain drying - Excerpt from the training video',
    description: 'An excerpt from the DM510 training video that provides an overview of the Dryer Master approach to grain drying and how it can help improve your drying process.',
    category: 'DM510',
    videoUrl: 'https://www.youtube.com/embed/6KksSwgZfiw',
    thumbnailUrl: 'https://img.youtube.com/vi/6KksSwgZfiw/maxresdefault.jpg'
  },
  {
    id: 'moisture-sampling',
    title: 'Moisture sampling and moisture sensor calibration - Excerpt from the training video',
    description: 'An excerpt from the DM510 training video that focuses on suggested procedures for accurate moisture sampling and sensor calibration.',
    category: 'DM510',
    videoUrl: 'https://www.youtube.com/embed/dNlh3xRNLmc',
    thumbnailUrl: 'https://img.youtube.com/vi/dNlh3xRNLmc/maxresdefault.jpg'
  },

  // Moisture Monitor Pro Video
  {
    id: 'mmp-training',
    title: 'Moisture Monitor Pro Training Video',
    description: 'This video goes over the basic setup and operation of the Moisture Monitor Pro.',
    category: 'Moisture Monitor Pro',
    videoUrl: 'https://www.youtube.com/embed/RzpRXttz8FI',
    thumbnailUrl: 'https://img.youtube.com/vi/RzpRXttz8FI/maxresdefault.jpg'
  },

  // DM100 Videos
  {
    id: 'dm100-interface',
    title: 'DM100 - User Interface Overview',
    description: 'This video goes over the basic operation of the DM100 system.',
    category: 'DM100',
    videoUrl: 'https://www.youtube.com/embed/sPRxJRw5zi4',
    thumbnailUrl: 'https://img.youtube.com/vi/sPRxJRw5zi4/maxresdefault.jpg'
  },
  {
    id: 'dm100-state-logic',
    title: 'DM100 - State Logic Control',
    description: 'This video covers state logic control and how it is used in the DM100.',
    category: 'DM100',
    videoUrl: 'https://www.youtube.com/embed/6cgTbz7bU5E',
    thumbnailUrl: 'https://img.youtube.com/vi/6cgTbz7bU5E/maxresdefault.jpg'
  },
  {
    id: 'dm100-calibration',
    title: 'DM100 - Moisture Sensor Calibration',
    description: 'This video goes over moisture sensor calibration on the DM100.',
    category: 'DM100',
    videoUrl: 'https://www.youtube.com/embed/giBn27nKs3Y',
    thumbnailUrl: 'https://img.youtube.com/vi/giBn27nKs3Y/maxresdefault.jpg'
  },

  // Moisture Sensor Videos
  {
    id: 'sensor-chute',
    title: 'Moisture sensor in chute',
    description: 'This video shows the speed of flow of product past the moisture sensor in a bypass chute with rotary feed. Recommended flow is less than 1" (2.5cm)/second.',
    category: 'Moisture Sensors',
    videoUrl: 'https://www.youtube.com/embed/t_A8Rnh3SdQ',
    thumbnailUrl: 'https://img.youtube.com/vi/t_A8Rnh3SdQ/maxresdefault.jpg'
  },
  {
    id: 'mounting-chutes',
    title: 'Mounting chutes for Dryer Master moisture sensor',
    description: 'This video takes a look at the two versions of the mounting chute with rotary feed available for use with the Dryer Master moisture sensor.',
    category: 'Moisture Sensors',
    videoUrl: 'https://www.youtube.com/embed/giBn27nKs3Y',
    thumbnailUrl: 'https://img.youtube.com/vi/giBn27nKs3Y/maxresdefault.jpg'
  }
];

const categories = [
  { id: 'all', name: 'All Videos', icon: VideoIcon, count: videosData.length },
  { id: 'DM510', name: 'DM510 System', icon: Monitor, count: videosData.filter(v => v.category === 'DM510').length },
  { id: 'DM Mobile', name: 'DM Mobile', icon: Smartphone, count: videosData.filter(v => v.category === 'DM Mobile').length },
  { id: 'DM100', name: 'DM100 System', icon: Settings, count: videosData.filter(v => v.category === 'DM100').length },
  { id: 'Moisture Monitor Pro', name: 'Monitor Pro', icon: Monitor, count: videosData.filter(v => v.category === 'Moisture Monitor Pro').length },
  { id: 'Moisture Sensors', name: 'Sensors', icon: Target, count: videosData.filter(v => v.category === 'Moisture Sensors').length }
];

// Extract YouTube video ID from URL for multiple thumbnail attempts
const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:embed\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};

// VideoThumbnail component with multiple fallback options
const VideoThumbnail = ({ video }: { video: Video }) => {
  const [imageError, setImageError] = useState(false);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  
  const videoId = getYouTubeId(video.videoUrl || '');
  
  // Multiple thumbnail quality options
  const thumbnailOptions = [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, // Highest quality
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,     // High quality
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,     // Medium quality
    `https://img.youtube.com/vi/${videoId}/default.jpg`        // Standard quality
  ];

  const handleImageError = () => {
    if (currentThumbnailIndex < thumbnailOptions.length - 1) {
      setCurrentThumbnailIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  // Beautiful fallback based on category
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'DM510':
        return 'from-blue-500 via-blue-600 to-blue-700';
      case 'DM Mobile':
        return 'from-green-500 via-green-600 to-green-700';
      case 'DM100':
        return 'from-purple-500 via-purple-600 to-purple-700';
      case 'Moisture Monitor Pro':
        return 'from-orange-500 via-orange-600 to-orange-700';
      case 'Moisture Sensors':
        return 'from-teal-500 via-teal-600 to-teal-700';
      default:
        return 'from-primary via-primary-dark to-secondary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'DM510':
        return <Monitor size={32} className="text-white/80" />;
      case 'DM Mobile':
        return <Smartphone size={32} className="text-white/80" />;
      case 'DM100':
        return <Settings size={32} className="text-white/80" />;
      case 'Moisture Monitor Pro':
        return <Monitor size={32} className="text-white/80" />;
      case 'Moisture Sensors':
        return <Target size={32} className="text-white/80" />;
      default:
        return <VideoIcon size={32} className="text-white/80" />;
    }
  };

  return (
    <div className="relative h-48 bg-gray-200 overflow-hidden group">
      {!imageError && videoId ? (
        <>
          <img 
            src={thumbnailOptions[currentThumbnailIndex]}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
        </>
      ) : (
        // Beautiful fallback design
        <>
          <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(video.category)} relative overflow-hidden`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                <div className="absolute top-8 right-8 w-4 h-4 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border border-white/25 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
              </div>
            </div>
            
            {/* Category icon and text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="mb-3 opacity-80">
                {getCategoryIcon(video.category)}
              </div>
              <div className="text-white/90 text-sm font-semibold uppercase tracking-wide text-center px-4">
                {video.category}
              </div>
              <div className="text-white/70 text-xs mt-1">Training Video</div>
            </div>
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </>
      )}
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-black/70 transition-all duration-300 border-2 border-white/30">
          <Play size={24} className="text-white ml-1" />
        </div>
      </div>
      
      {/* Featured badge */}
      {video.featured && (
        <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
          <span className="text-white text-xs font-semibold">Featured</span>
        </div>
      )}
      
      {/* Loading indicator for thumbnail */}
      {!imageError && videoId && currentThumbnailIndex === 0 && (
        <div className="absolute bottom-2 left-2 text-xs text-white/60 bg-black/30 px-2 py-1 rounded">
          Loading preview...
        </div>
      )}
    </div>
  );
};

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Filter videos based on category and search
  const filteredVideos = useMemo(() => {
    return videosData.filter(video => {
      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
      const matchesSearch = !searchTerm || 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredVideos = useMemo(() => {
    return videosData.filter(video => video.featured);
  }, []);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Featured Videos Section */}
      {selectedCategory === 'all' && !searchTerm && (
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Play size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Featured Content</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Popular Training Videos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Start with these essential training videos to get the most out of your DryerMaster systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredVideos.map((video) => (
              <div 
                key={video.id}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <VideoThumbnail video={video} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-md">
                      {video.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>Training</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-gray-200/50 shadow-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Filter size={20} />
            <span className="text-lg font-semibold">Video Library</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Training & Product Videos</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive video tutorials and product demonstrations for all DryerMaster systems
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60">
              <Search size={20} />
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200/50 rounded-xl text-base bg-white/90 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:bg-white placeholder:text-gray-400"
              placeholder="Search videos by title, description, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-300 p-1 rounded-full hover:bg-red-50"
                onClick={() => setSearchTerm('')}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary/50 hover:text-primary hover:shadow-md'
                }`}
              >
                <Icon size={16} />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-primary-1 to-secondary-1 rounded-xl">
            <div className="flex items-center gap-2">
              <VideoIcon size={16} className="text-primary" />
              <span className="text-lg font-bold text-primary">{filteredVideos.length}</span>
              <span className="text-sm text-gray-600">video{filteredVideos.length !== 1 ? 's' : ''} found</span>
            </div>
          </div>
          
          {(selectedCategory !== 'all' || searchTerm) && (
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300"
              onClick={clearFilters}
            >
              <X size={16} />
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Video Grid */}
      <div className="mb-24">
        {filteredVideos.length === 0 ? (
          <div className="text-center py-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4">No videos found</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We couldn't find any videos matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-white rounded-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
              onClick={clearFilters}
            >
              <X size={16} />
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div 
                key={video.id}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease forwards'
                }}
                onClick={() => setSelectedVideo(video)}
              >
                <VideoThumbnail video={video} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <VideoIcon size={12} />
                      <span>Training</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {selectedVideo.videoUrl ? (
                <div className="relative h-64 md:h-96 mb-6">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 md:h-96 flex items-center justify-center mb-6">
                  <div className="text-center max-w-md">
                    <VideoIcon size={48} className="text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Video Coming Soon</h4>
                    <p className="text-gray-600 mb-6">This video is available on our YouTube channel. Click below to visit our channel or contact us for direct access.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a 
                        href="https://www.youtube.com/channel/UCenJ1moMte_eeuIr_k6a6uA" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
                      >
                        <VideoIcon size={16} />
                        Visit YouTube Channel
                      </a>
                      <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors duration-300"
                      >
                        <VideoIcon size={16} />
                        Request Video Access
                      </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">Category: {selectedVideo.category}</p>
                  </div>
                </div>
              )}
              <div className="prose max-w-none">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">About This Video</h4>
                <p className="text-gray-700 leading-relaxed">{selectedVideo.description}</p>
                {!selectedVideo.videoUrl && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> We're currently updating our video library with direct embeddings. 
                      In the meantime, all videos are available on our official YouTube channel.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;