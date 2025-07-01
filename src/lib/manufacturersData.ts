import { Factory, Globe, Award, Zap, Settings, Wheat } from 'lucide-react';

export interface Manufacturer {
  id: number;
  name: string;
  website: string;
  logo: string;
  description: string;
  specialties: string[];
  established?: string;
  location?: string;
  featured: boolean;
  category: 'commercial' | 'farm' | 'specialty' | 'mixed';
  categoryIcon: any;
  dryerTypes: string[];
  capacity?: string;
  region: 'North America' | 'Europe' | 'Global';
}

export const manufacturers: Manufacturer[] = [
  // Primary Featured Manufacturers (as shown on DryerMaster.com)
  {
    id: 1,
    name: "Mathews Company",
    website: "https://mathewscompany.com/",
    logo: "/manufacturers/mathews-logo.png",
    description: "70+ years of grain drying innovation with Legacy Series, ECO Series, and Tower Dryers serving 160+ countries",
    specialties: ["Legacy Series Dryers", "Tower Dryers", "70+ Years Experience", "Global Export Leader"],
    established: "1957",
    location: "Crystal Lake, Illinois",
    featured: true,
    category: 'commercial',
    categoryIcon: Factory,
    dryerTypes: ["Legacy Series", "ECO Series", "Tower Dryers"],
    region: "Global"
  },
  {
    id: 2,
    name: "NECO",
    website: "https://www.aggrowth.com/",
    logo: "/manufacturers/neco-logo.png",
    description: "Leading mixed flow dryer manufacturer since 1959, delivering 2,000+ dryers with 20-30% fuel savings",
    specialties: ["Mixed Flow Technology", "Screen-Free Operation", "Fuel Cost Savings", "Wireless Monitoring"],
    established: "1959",
    location: "Omaha, Nebraska",
    featured: true,
    category: 'commercial',
    categoryIcon: Factory,
    dryerTypes: ["Mixed Flow Dryers", "Commercial Dryers"],
    region: "North America"
  },
  {
    id: 3,
    name: "Chief Agri",
    website: "https://agri.chiefind.com/products/dryers/",
    logo: "/manufacturers/chief-agri-logo.png",
    description: "60+ years manufacturing continuous mixed-flow dryers with energy efficiency and advanced touchscreen controls",
    specialties: ["Mixed-Flow Dryers", "Energy Efficiency", "Touchscreen Controls", "Modular Construction"],
    established: "1961",
    location: "United States",
    featured: true,
    category: 'mixed',
    categoryIcon: Wheat,
    dryerTypes: ["Mixed-Flow Dryers", "Continuous Dryers"],
    region: "North America"
  },
  {
    id: 4,
    name: "Grain Handler",
    website: "https://www.grainhandler.com/",
    logo: "/manufacturers/grain-handler-logo.png",
    description: "Continuous Mix-Flow dryers with energy maximizing technology, drying virtually any grain type since 1979",
    specialties: ["Mix-Flow Technology", "Energy Maximizing", "Multi-Grain Capability", "Proven Design"],
    established: "1979",
    location: "United States",
    featured: true,
    category: 'mixed',
    categoryIcon: Award,
    dryerTypes: ["Continuous Mix-Flow Dryers"],
    capacity: "Variable",
    region: "North America"
  },
  {
    id: 5,
    name: "Kentra Grain Drying Systems Limited",
    website: "https://www.kentra.co.uk/",
    logo: "/manufacturers/kentra-logo.jpg",
    description: "British manufacturer of continuous mixed flow dryers (6-60 tonnes/hr) with heavy-duty galvanised construction",
    specialties: ["Mixed Flow Dryers", "Heavy-Duty Construction", "Modular Design", "In-House Fans"],
    established: "1988",
    location: "Yorkshire, United Kingdom",
    featured: true,
    category: 'specialty',
    categoryIcon: Zap,
    dryerTypes: ["Mixed Flow Dryers", "High Temperature Dryers"],
    capacity: "6-60 tonnes/hr",
    region: "Europe"
  },
  {
    id: 6,
    name: "Superior Grain Equipment",
    website: "https://superiorbins.com/superior-products/grain-dryers/",
    logo: "/manufacturers/superior-grain-logo.png",
    description: "Family-owned manufacturer offering mixed-flow dryers (690-9,510 bu) with expandable capacity and lifetime warranties",
    specialties: ["Expandable Capacity", "Energy Efficient", "Lifetime Warranties", "Global Export"],
    established: "2008",
    location: "Kindred, North Dakota",
    featured: true,
    category: 'commercial',
    categoryIcon: Factory,
    dryerTypes: ["Mixed Flow Dryers", "Expandable Dryers"],
    capacity: "690-9510 bu",
    region: "Global"
  },
  {
    id: 7,
    name: "Millennium Dryers",
    website: "https://gaffneyelectrical.ca/",
    logo: "/manufacturers/millenium-logo.jpg",
    description: "Canadian manufacturer providing advanced grain drying solutions with proven technology and service support",
    specialties: ["Canadian Engineering", "Service Support", "Proven Technology", "Regional Expertise"],
    location: "Mitchell, Ontario",
    featured: true,
    category: 'specialty',
    categoryIcon: Settings,
    dryerTypes: ["Continuous Flow Dryers"],
    capacity: "Variable",
    region: "North America"
  },
  // Additional Compatible Manufacturers
  {
    id: 8,
    name: "GSI (Grain Systems Inc.)",
    website: "https://www.grainsystems.com/",
    logo: "/manufacturers/gsi-logo.svg",
    description: "World's largest steel farm bin manufacturer since 1972, offering portable, stack, and tower dryers in 70+ countries",
    specialties: ["World's Largest", "Tower Dryers", "Global Network", "Maximum ROI Focus"],
    established: "1972",
    location: "United States",
    featured: true,
    category: 'commercial',
    categoryIcon: Globe,
    dryerTypes: ["Tower Dryers", "Portable Dryers", "Stack Dryers"],
    capacity: "Variable",
    region: "Global"
  },
  {
    id: 9,
    name: "Zimmerman",
    website: "https://www.zimmerman.net/",
    logo: "/manufacturers/zimmerman-logo.svg",
    description: "Premium grain dryers with superior engineering and performance",
    specialties: ["Premium Engineering", "High Performance", "Commercial Grade"],
    location: "United States",
    featured: false,
    category: 'commercial',
    categoryIcon: Award,
    dryerTypes: ["Commercial Dryers", "High Performance Dryers"],
    capacity: "Commercial Scale",
    region: "North America"
  },
  {
    id: 10,
    name: "Sukup Manufacturing",
    website: "https://www.sukup.com/",
    logo: "/manufacturers/sukup-logo.svg",
    description: "Comprehensive grain handling and drying solutions for agriculture",
    specialties: ["Comprehensive Solutions", "Farm Equipment", "Grain Handling"],
    location: "United States",
    featured: false,
    category: 'farm',
    categoryIcon: Wheat,
    dryerTypes: ["Farm Dryers", "Portable Dryers"],
    capacity: "Farm Scale",
    region: "North America"
  },
  {
    id: 11,
    name: "Brock Grain Systems",
    website: "https://www.brockgrain.com/",
    logo: "/manufacturers/brock-logo.svg",
    description: "Industry-leading grain storage and drying solutions",
    specialties: ["Industry Leading", "Storage Solutions", "Drying Systems"],
    location: "United States",
    featured: false,
    category: 'commercial',
    categoryIcon: Factory,
    dryerTypes: ["Commercial Dryers", "Storage Systems"],
    capacity: "Commercial Scale",
    region: "North America"
  },
  {
    id: 12,
    name: "Cimbria",
    website: "https://www.cimbria.com/",
    logo: "/manufacturers/cimbria-logo.svg",
    description: "Global solutions for seed and grain processing technology",
    specialties: ["Global Solutions", "Seed Processing", "Advanced Technology"],
    location: "Denmark",
    featured: false,
    category: 'specialty',
    categoryIcon: Globe,
    dryerTypes: ["Seed Processing Dryers", "Specialty Dryers"],
    capacity: "Variable",
    region: "Global"
  }
];

export const manufacturerStats = [
  { label: "Partner Manufacturers", value: "12+", icon: Factory },
  { label: "Countries Represented", value: "5", icon: Globe },
  { label: "Years Combined Experience", value: "300+", icon: Award },
  { label: "Dryer Models Supported", value: "50+", icon: Settings }
];

export const pageContent = {
  hero: {
    badge: "Partner Network",
    title: "Dryer Master Compatible Manufacturers",
    description: "Our system works seamlessly with grain dryers from leading manufacturers worldwide. Discover the comprehensive range of equipment that integrates with Dryer Master technology."
  },
  sections: {
    featured: {
      title: "Featured Manufacturing Partners",
      subtitle: "Leading dryer manufacturers that integrate seamlessly with Dryer Master systems"
    },
    all: {
      title: "All Compatible Manufacturers",
      subtitle: "Complete list of grain dryer manufacturers supported by Dryer Master technology"
    },
    cta: {
      title: "Don't See Your Dryer Manufacturer?",
      description: "Contact our technical team to discuss compatibility options for your specific equipment. We're continuously expanding our manufacturer partnerships.",
      buttons: [
        { text: "Contact Technical Support", href: "/contact", primary: true },
        { text: "View All Products", href: "/products", primary: false }
      ]
    }
  }
};