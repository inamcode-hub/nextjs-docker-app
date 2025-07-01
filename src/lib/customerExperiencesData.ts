import { Users, Wheat, TrendingUp, Award } from 'lucide-react';

export interface CustomerTestimonial {
  id: number;
  name: string;
  location: string;
  since: string;
  volume: string;
  crops: string;
  equipment: string;
  quote: string;
  image: string;
  dryer?: string;
  dryerModel?: string;
  calibrationFrequency?: string;
  usesMobile?: boolean;
  detailedQA?: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  yearsPecialist?: number;
  trainingTime?: string;
  keyBenefit?: string;
  surprise?: string;
  slug: string; // For URL routing
}

export interface StatItem {
  label: string;
  value: string;
  icon: any;
}

export const customerTestimonials: CustomerTestimonial[] = [
  {
    id: 1,
    name: "Greg",
    location: "Ontario, Canada",
    since: "1993",
    volume: "1.4 million bushels",
    crops: "Corn & Soybeans",
    equipment: "2 Zimmerman Dryers (VT2541, Farm Fans CMS-1000H)",
    quote: "TechSupp was excellent at preparing us for the switch over. The system has been reliable for over 30 years.",
    image: "/customer-experiences/greg-ontario.jpg",
    dryer: "Zimmerman",
    dryerModel: "VT2541, Farm Fans CMS-1000H",
    calibrationFrequency: "Twice daily",
    usesMobile: false,
    yearsPecialist: 30,
    trainingTime: "4-6 hours initially",
    keyBenefit: "Reliable automation for over 30 years",
    slug: "greg-ontario",
    detailedQA: {
      questions: [
        {
          question: "How long have you been using Dryer Master?",
          answer: "I've been using Dryer Master since 1993, so that's over 30 years now. Started with the older systems and upgraded to the DM510."
        },
        {
          question: "What type of operation do you run?",
          answer: "We dry about 1.4 million bushels annually, mostly corn and soybeans. We have 2 Zimmerman dryers - a VT2541 and a Farm Fans CMS-1000H."
        },
        {
          question: "How was the training process?",
          answer: "TechSupp was excellent at preparing us for the switch over. The initial training took about 4-6 hours, but the system is very intuitive once you understand the basics."
        },
        {
          question: "What's been the biggest benefit?",
          answer: "The reliability has been outstanding. In over 30 years, we've had minimal downtime. The system just works, and when we do need support, the team is always there to help."
        }
      ]
    }
  },
  {
    id: 2,
    name: "Lowell",
    location: "Minnesota",
    since: "2015",
    volume: "1 million bushels",
    crops: "Corn",
    equipment: "DM510 on Grain Handler 4024",
    quote: "I can go do other work and not worry about the dryer adjustments. The automation is incredible.",
    image: "/customer-experiences/lowell-minnesota.jpg",
    dryer: "Grain Handler",
    dryerModel: "4024",
    calibrationFrequency: "Daily",
    usesMobile: true,
    trainingTime: "A couple hours",
    keyBenefit: "Remote monitoring and automation",
    surprise: "The simplicity of operation",
    slug: "lowell-minnesota",
    detailedQA: {
      questions: [
        {
          question: "How long did training take?",
          answer: "Just a couple hours. The system is very user-friendly and intuitive to operate."
        },
        {
          question: "How has it changed your operations?",
          answer: "I can go do other work and not worry about the dryer adjustments. The DM Mobile app lets me monitor everything remotely and make adjustments from anywhere on the farm."
        },
        {
          question: "What surprised you most?",
          answer: "The simplicity. I thought it would be much more complicated, but it's very straightforward to use."
        },
        {
          question: "Do you use DM Mobile?",
          answer: "Absolutely. I use it extensively. Being able to monitor the dryer and make adjustments from my phone has been a game-changer for our operation."
        }
      ]
    }
  },
  {
    id: 3,
    name: "Mike",
    location: "Michigan",
    since: "2003",
    volume: "600,000 bushels",
    crops: "Corn",
    equipment: "2 DM510s on FFI Dryers",
    quote: "Real time samples are helpful to our operation... to know moisture even when we're not there. Game changer for our operation.",
    image: "/customer-experiences/mike-michigan.jpg",
    dryer: "FFI",
    calibrationFrequency: "As needed",
    usesMobile: true,
    yearsPecialist: 20,
    keyBenefit: "Real-time moisture monitoring",
    slug: "mike-michigan",
    detailedQA: {
      questions: [
        {
          question: "How long have you been using Dryer Master?",
          answer: "Almost 20 years now. We started with the earlier systems and have upgraded to the DM510s on both our FFI dryers."
        },
        {
          question: "What's the biggest advantage?",
          answer: "Real time samples are helpful to our operation. Being able to know moisture levels even when we're not there gives us confidence and helps us maintain quality."
        },
        {
          question: "How was the learning curve?",
          answer: "It's fairly simple to operate once you get the hang of it. The interface is logical and the system does most of the thinking for you."
        },
        {
          question: "What volume do you dry annually?",
          answer: "We dry about 600,000 bushels of corn each year across our two dryers. The consistency we get with the DM510 systems is outstanding."
        }
      ]
    }
  },
  {
    id: 4,
    name: "Kenton",
    location: "Illinois",
    since: "2014",
    volume: "250,000 bushels",
    crops: "Corn",
    equipment: "DM510 with DM Mobile",
    quote: "DM Mobile gave me confidence to be away from the dryer. I can monitor everything from my phone.",
    image: "/customer-experiences/kenton-illinois.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "Every 2 hours during harvest",
    usesMobile: true,
    keyBenefit: "Remote monitoring confidence",
    slug: "kenton-illinois"
  },
  {
    id: 5,
    name: "Richard",
    location: "South Dakota",
    since: "2011",
    volume: "800,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 System",
    quote: "The moisture consistency is outstanding. We've seen significant improvements in grain quality and reduced energy costs.",
    image: "/customer-experiences/richard-southdakota.jpg",
    dryer: "Diamond",
    calibrationFrequency: "1-3 hours during peak season",
    usesMobile: true,
    keyBenefit: "Consistent moisture control",
    slug: "richard-southdakota"
  },
  {
    id: 6,
    name: "Mark",
    location: "Indiana",
    since: "2017",
    volume: "1.2 million bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 Controller",
    quote: "The system pays for itself through energy savings and improved grain quality. Best investment we've made.",
    image: "/customer-experiences/mark-indiana.jpg",
    dryer: "Delux",
    calibrationFrequency: "2-4 hours",
    usesMobile: true,
    keyBenefit: "Energy savings and ROI",
    slug: "mark-indiana"
  },
  {
    id: 7,
    name: "Joe",
    location: "Ohio",
    since: "2019",
    volume: "450,000 bushels",
    crops: "Corn & Wheat",
    equipment: "DM510 with Moisture Sensors",
    quote: "Installation was smooth and the technical support has been exceptional. Highly recommend to other farmers.",
    image: "/customer-experiences/joe-ohio.jpg",
    dryer: "Zimmerman",
    calibrationFrequency: "1-2 hours",
    usesMobile: false,
    keyBenefit: "Exceptional technical support",
    slug: "joe-ohio"
  },
  {
    id: 8,
    name: "Jared",
    location: "Illinois",
    since: "2018",
    volume: "350,000 bushels",
    crops: "Corn",
    equipment: "DM510 Controller",
    quote: "The precision control has improved our grain quality significantly. We're seeing better test weights and less cracked corn.",
    image: "/customer-experiences/jared-illinois.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "2 hours",
    usesMobile: true,
    keyBenefit: "Improved grain quality",
    slug: "jared-illinois"
  },
  {
    id: 9,
    name: "Chris",
    location: "Illinois",
    since: "2020",
    volume: "500,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 System",
    quote: "The automated adjustments have eliminated the guesswork. We can focus on other operations while the dryer runs efficiently.",
    image: "/customer-experiences/chris-illinois.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "1-3 hours",
    usesMobile: true,
    keyBenefit: "Automated precision",
    slug: "chris-illinois"
  },
  {
    id: 10,
    name: "Trevor",
    location: "North Dakota",
    since: "2020",
    volume: "2 million bushels",
    crops: "Corn, Soybeans & Wheat",
    equipment: "Multiple DM510 Systems",
    quote: "Scaling up our operation required reliable automation. Dryer Master delivered exactly what we needed.",
    image: "/customer-experiences/trevor-northdakota.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "1-3 hours",
    usesMobile: true,
    keyBenefit: "Scalable automation",
    slug: "trevor-northdakota"
  },
  {
    id: 11,
    name: "Brian",
    location: "Indiana",
    since: "2018",
    volume: "350,000 bushels",
    crops: "Corn",
    equipment: "DM510 Controller",
    quote: "The real-time monitoring has transformed how we operate. We can maintain optimal moisture levels consistently.",
    image: "/customer-experiences/brian-indiana.jpg",
    dryer: "Zimmerman",
    calibrationFrequency: "2 hours",
    usesMobile: true,
    keyBenefit: "Real-time monitoring",
    slug: "brian-indiana"
  },
  {
    id: 12,
    name: "Aaron",
    location: "Illinois",
    since: "2019",
    volume: "700,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 with DM Mobile",
    quote: "Being able to monitor the dryer remotely has given us peace of mind and improved our efficiency significantly.",
    image: "/customer-experiences/aaron-illinois.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "1-2 hours",
    usesMobile: true,
    keyBenefit: "Remote peace of mind",
    slug: "aaron-illinois"
  },
  {
    id: 13,
    name: "Brian",
    location: "Pennsylvania",
    since: "2021",
    volume: "300,000 bushels",
    crops: "Corn",
    equipment: "DM510 Controller",
    quote: "The system's reliability during our first full season exceeded our expectations. No downtime during harvest.",
    image: "/customer-experiences/brian-pennsylvania.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "2-3 hours",
    usesMobile: true,
    keyBenefit: "Exceptional reliability",
    slug: "brian-pennsylvania"
  },
  {
    id: 14,
    name: "Ryan",
    location: "Ontario, Canada",
    since: "2017",
    volume: "900,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 System",
    quote: "The precision and reliability of the Dryer Master system has helped us improve our grain quality and reduce costs.",
    image: "/customer-experiences/ryan-ontario.jpg",
    dryer: "Dorssers",
    calibrationFrequency: "2-3 hours",
    usesMobile: true,
    keyBenefit: "Quality improvement",
    slug: "ryan-ontario"
  },
  {
    id: 15,
    name: "Pete",
    location: "Michigan",
    since: "2020",
    volume: "550,000 bushels",
    crops: "Corn",
    equipment: "DM510 Controller",
    quote: "The system is incredibly user-friendly and the support from Dryer Master has been outstanding from day one.",
    image: "/customer-experiences/pete-michigan.jpg",
    dryer: "Delux & Meyer",
    calibrationFrequency: "3 hours",
    usesMobile: false,
    keyBenefit: "Outstanding support",
    slug: "pete-michigan"
  },
  {
    id: 16,
    name: "Kevin",
    location: "Indiana",
    since: "2016",
    volume: "650,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 System",
    quote: "The energy savings alone have made this investment worthwhile. Plus the grain quality improvements are significant.",
    image: "/customer-experiences/kevin-indiana.jpg",
    dryer: "Zimmerman",
    calibrationFrequency: "1-2 hours",
    usesMobile: true,
    keyBenefit: "Energy savings",
    slug: "kevin-indiana"
  },
  {
    id: 17,
    name: "Larry",
    location: "Ontario, Canada",
    since: "2019",
    volume: "400,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 Controller",
    quote: "The automation has allowed us to run longer hours with confidence. We can dry more grain in less time.",
    image: "/customer-experiences/larry-ontario.jpg",
    dryer: "Grain Handler",
    calibrationFrequency: "2 hours",
    usesMobile: true,
    keyBenefit: "Extended operating hours",
    slug: "larry-ontario"
  },
  {
    id: 18,
    name: "Anthony",
    location: "Ohio",
    since: "2020",
    volume: "750,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 System",
    quote: "The consistent moisture control has improved our storage quality and reduced shrink. Very impressed with the results.",
    image: "/customer-experiences/anthony-ohio.jpg",
    dryer: "Zimmerman",
    calibrationFrequency: "1-3 hours",
    usesMobile: true,
    keyBenefit: "Reduced shrink",
    slug: "anthony-ohio"
  }
];

export const stats: StatItem[] = [
  { label: "Years of Experience", value: "40+", icon: Award },
  { label: "Satisfied Customers", value: "500+", icon: Users },
  { label: "Bushels Dried Daily", value: "50M+", icon: Wheat },
  { label: "Average Savings", value: "25%", icon: TrendingUp }
];

export const pageContent = {
  hero: {
    badge: "Customer Success Stories",
    title: "Dryer Master Customer Experiences",
    description: "Discover how farmers across North America are transforming their grain drying operations with Dryer Master technology. Real stories from real customers."
  },
  sections: {
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "From small family farms to large commercial operations, our customers share their experiences with Dryer Master technology."
    },
    cta: {
      title: "Ready to Join Our Satisfied Customers?",
      description: "Experience the same efficiency, reliability, and cost savings that have made our customers successful. Contact us today to learn more.",
      buttons: [
        { text: "Get Started Today", href: "/contact", primary: true },
        { text: "View Products", href: "/products/dm510-controller", primary: false }
      ]
    }
  }
};