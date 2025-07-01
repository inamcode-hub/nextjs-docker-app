import { Star, Quote, MapPin, Award, Banknote, Headphones, Shield, Clock } from 'lucide-react';
import CustomerAvatar from './CustomerAvatar';
import { calculateYearsOfExperience } from '@/lib/customerExperiencesData';

interface CustomerRating {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  category: string;
  categoryIcon: any;
  customerSince: string;
  verified: boolean;
}

const customerRatings: CustomerRating[] = [
  {
    id: 1,
    name: "Mark",
    location: "Indiana",
    rating: 5,
    review: "The system pays for itself through energy savings and improved grain quality. Best investment we've made.",
    category: "ROI & Energy Savings",
    categoryIcon: Banknote,
    customerSince: "2015",
    verified: true
  },
  {
    id: 2,
    name: "Jared",
    location: "Illinois", 
    rating: 5,
    review: "Don't let the price scare you away. It's definitely worth the investment. Dryer Master's customer support has exceeded my expectations!",
    category: "Customer Support Excellence",
    categoryIcon: Headphones,
    customerSince: "2016",
    verified: true
  },
  {
    id: 3,
    name: "Richard",
    location: "South Dakota",
    rating: 5,
    review: "The moisture consistency is outstanding. We've seen significant improvements in grain quality and reduced energy costs.",
    category: "System Performance",
    categoryIcon: Award,
    customerSince: "2011",
    verified: true
  },
  {
    id: 4,
    name: "Joe",
    location: "Ohio",
    rating: 5,
    review: "Installation was smooth and the technical support has been exceptional. Highly recommend to other farmers.",
    category: "Technical Support",
    categoryIcon: Headphones,
    customerSince: "2019",
    verified: true
  },
  {
    id: 5,
    name: "Pete",
    location: "Michigan",
    rating: 5,
    review: "The system is incredibly user-friendly and the support from Dryer Master has been outstanding from day one.",
    category: "Outstanding Support",
    categoryIcon: Shield,
    customerSince: "1996",
    verified: true
  },
  {
    id: 6,
    name: "Trevor",
    location: "North Dakota",
    rating: 5,
    review: "This monitoring system pays for itself yearly in our eyes with the elevators being so aggressive on drying charges.",
    category: "Financial ROI",
    categoryIcon: Banknote,
    customerSince: "2014",
    verified: true
  },
  {
    id: 7,
    name: "Greg",
    location: "Ontario, Canada",
    rating: 5,
    review: "TechSupp was excellent at preparing us for the switch over. The system has been reliable for over 30 years.",
    category: "Long-term Reliability",
    categoryIcon: Clock,
    customerSince: "1993",
    verified: true
  },
  {
    id: 8,
    name: "Brian",
    location: "Pennsylvania",
    rating: 5,
    review: "The system's reliability during our first full season exceeded our expectations. No downtime during harvest.",
    category: "Reliability & Performance",
    categoryIcon: Shield,
    customerSince: "2015",
    verified: true
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={`${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function CustomerRatingCards() {
  // Calculate overall stats
  const totalRatings = customerRatings.length;
  const averageRating = customerRatings.reduce((sum, rating) => sum + rating.rating, 0) / totalRatings;
  const fiveStarCount = customerRatings.filter(r => r.rating === 5).length;
  const fiveStarPercentage = Math.round((fiveStarCount / totalRatings) * 100);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Customer Ratings & Reviews
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Real feedback from verified Dryer Master customers
        </p>
        
        {/* Overall Rating Stats */}
        <div className="flex items-center justify-center gap-8 mb-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{averageRating.toFixed(1)}</div>
            <StarRating rating={Math.round(averageRating)} />
            <div className="text-sm text-gray-600 mt-1">Overall Rating</div>
          </div>
          <div className="w-px h-16 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">{fiveStarPercentage}%</div>
            <div className="text-sm text-gray-600">5-Star Reviews</div>
          </div>
          <div className="w-px h-16 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{totalRatings}</div>
            <div className="text-sm text-gray-600">Verified Reviews</div>
          </div>
        </div>
      </div>

      {/* Rating Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {customerRatings.map((rating) => {
          const CategoryIcon = rating.categoryIcon;
          
          return (
            <div
              key={rating.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <CustomerAvatar 
                    name={rating.name} 
                    className="w-12 h-12 text-sm flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{rating.name}</span>
                      {rating.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={12} />
                      <span>{rating.location}</span>
                    </div>
                  </div>
                </div>
                <StarRating rating={rating.rating} />
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CategoryIcon size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">{rating.category}</span>
              </div>

              {/* Review Quote */}
              <div className="relative mb-4">
                <Quote className="absolute -top-1 -left-1 w-4 h-4 text-primary/30" />
                <blockquote className="text-gray-700 italic leading-relaxed pl-6 text-sm">
                  {rating.review}
                </blockquote>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">
                  Customer since {rating.customerSince}
                </div>
                <div className="text-xs text-primary font-medium">
                  {calculateYearsOfExperience(rating.customerSince)} years using Dryer Master
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 pt-6 border-t border-gray-100">
        <p className="text-gray-600 mb-4">
          Join thousands of satisfied customers who have transformed their grain drying operations
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="/customers/experiences" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            Read All Customer Stories
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            Get Your Quote Today
          </a>
        </div>
      </div>
    </div>
  );
}