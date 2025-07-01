import { Wheat, Factory, Droplets, Thermometer, Settings, Zap, Coffee, Mountain } from 'lucide-react';

export interface ApplicationExample {
  id: number;
  title: string;
  slug: string;
  category: 'grain-drying' | 'food-processing' | 'industrial' | 'monitoring';
  image: string;
  summary: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  technicalDetails?: {
    products?: string[];
    system?: string;
    sensors?: string;
    integration?: string;
  };
  icon: any;
}

export const applicationExamples: ApplicationExample[] = [
  {
    id: 1,
    title: "Whole Grains Drying Control",
    slug: "whole-grains-drying-control",
    category: "grain-drying",
    image: "/application-examples/whole-grains-drying-control.jpg",
    summary: "Advanced DM510 system with real-time moisture control for outdoor grain drying operations.",
    description: "Dryer Master developed its DM510 grain drying control system specifically to deal with the difficult control challenges presented by the outdoor drying of grain. Two real time moisture sensors continuously monitor incoming and outgoing grain moisture and feed this critical information to the DM510 controller. The controller builds a model of how efficiently the dryer is drying at any point in time, and updates the model based on actual drying results.",
    keyFeatures: [
      "Two real-time moisture sensors",
      "Dynamic drying efficiency model",
      "Optimal discharge rate calculation",
      "DM Mobile remote access platform",
      "Multi-product configuration"
    ],
    benefits: [
      "Less over drying (shrinkage)",
      "Improved throughput",
      "Reduced energy consumption",
      "Peace of mind automation",
      "Remote monitoring capability"
    ],
    technicalDetails: {
      products: ["Corn", "Wheat", "Soybeans", "Canola"],
      system: "DM510 Controller",
      sensors: "Real-time moisture sensors",
      integration: "DM Mobile platform included"
    },
    icon: Wheat
  },
  {
    id: 2,
    title: "Soymeal Moisture Monitoring",
    slug: "soymeal-moisture-monitoring",
    category: "food-processing",
    image: "/application-examples/soymeal-moisture-monitoring.jpg",
    summary: "Stainless steel food-grade sensors for real-time soymeal moisture monitoring in production processes.",
    description: "Dryer Master's stainless steel food grade moisture sensors are built tough and are designed to be able to be integrated into the production process either at the end of the DTDC (in a solvent extraction process) or in the cooling process (in a press process). The sensors can be installed and connected directly into a plant wide automation system.",
    keyFeatures: [
      "Stainless steel food-grade construction",
      "Plant-wide automation integration",
      "Real-time moisture information",
      "Dedicated GM2M2 display panel option",
      "High-volume processing capability"
    ],
    benefits: [
      "More accurate process view",
      "Faster issue identification",
      "Reduced manual sampling time",
      "Cost-effective for high volumes",
      "Freed up operator resources"
    ],
    technicalDetails: {
      sensors: "Stainless steel food-grade moisture sensors",
      integration: "Plant automation or GM2M2 display panel",
      system: "Solvent extraction or press process integration"
    },
    icon: Factory
  },
  {
    id: 3,
    title: "Ethanol Facility Moisture Monitoring",
    slug: "ethanol-facility-moisture-monitoring",
    category: "industrial",
    image: "/application-examples/ethanol-facility-moisture-monitoring.jpg",
    summary: "Multi-location moisture monitoring for ethanol facilities from corn kernels to DDGS output.",
    description: "The same moisture measurement technology that allows grain dryer operators to monitor product moisture in real time is also available to Ethanol Facilities to use at multiple locations in their facilities, whether on corn kernels before the hammermill or on DDGS at the end.",
    keyFeatures: [
      "Multi-location monitoring",
      "Real-time corn kernel measurement",
      "DDGS moisture tracking",
      "PLC integration capability",
      "Expandable system architecture"
    ],
    benefits: [
      "Expanded process monitoring",
      "More consistent milling results",
      "Valuable process information",
      "Easy system expansion",
      "Integrated automation control"
    ],
    technicalDetails: {
      system: "GM2 moisture monitoring system",
      integration: "PLC-based plant monitoring",
      sensors: "Multiple location sensors"
    },
    icon: Droplets
  },
  {
    id: 4,
    title: "Pet Food Moisture Monitoring",
    slug: "pet-food-moisture-monitoring",
    category: "food-processing",
    image: "/application-examples/pet-food-moisture-monitoring.jpg",
    summary: "Precise moisture control for complex multi-product pet food manufacturing operations.",
    description: "Pet food plants generally produce multiple products. The number of products can run into the hundreds, each with their own recipe and process settings for temperatures and belt speeds. This makes for a complex operation that can benefit from additional process information.",
    keyFeatures: [
      "Multi-product line monitoring",
      "Recipe management integration",
      "Real-time dryer exit monitoring",
      "Calibration procedure integration",
      "Temperature and speed optimization"
    ],
    benefits: [
      "More consistent product moisture",
      "Production gains and yield improvements",
      "Reduced energy consumption",
      "Precise process control",
      "Direct bottom line benefits"
    ],
    technicalDetails: {
      integration: "Recipe management system",
      sensors: "Production line moisture sensors",
      system: "Multi-product processing control"
    },
    icon: Coffee
  },
  {
    id: 5,
    title: "Rice Paddy Moisture Monitoring",
    slug: "rice-paddy-moisture-monitoring",
    category: "grain-drying",
    image: "/application-examples/rice-paddy-moisture-monitoring.jpg",
    summary: "Multi-pass drying monitoring with temperature control to prevent rice kernel breakage.",
    description: "The drying of rice is done quite differently from the drying of most whole grains. Drying is typically done in multiple passes with the emphasis being on reducing moisture while keeping the paddy temperature below a point which might cause breakage.",
    keyFeatures: [
      "Multi-pass drying monitoring",
      "Temperature and moisture tracking",
      "Multiple dryer exit sensors",
      "Plant automation integration",
      "Breakage prevention control"
    ],
    benefits: [
      "Prevents rice kernel breakage",
      "Continuous multi-point monitoring",
      "Quick anomaly detection",
      "Improved process control",
      "Enhanced quality assurance"
    ],
    technicalDetails: {
      sensors: "Multiple exit point sensors",
      integration: "Plant-wide automation system",
      system: "Multi-pass drying process"
    },
    icon: Thermometer
  },
  {
    id: 6,
    title: "DDGS Moisture Monitoring",
    slug: "ddgs-moisture-monitoring",
    category: "industrial",
    image: "/application-examples/ddgs-moisture-monitoring.jpg",
    summary: "Cost-effective real-time monitoring for spent grain drying in distillery operations.",
    description: "Dryer Master worked with a distiller that dried spent grain in a rotary dryer down to a 12% level for use as feed. The client saw that by adding an in-line moisture sensor to the process they were able to conveniently and continuously monitor the outlet moisture from the dryer in real time.",
    keyFeatures: [
      "In-line moisture sensing",
      "Continuous real-time monitoring",
      "Rotary dryer integration",
      "PLC connectivity option",
      "Flexible installation points"
    ],
    benefits: [
      "Reduced manual sampling",
      "Freed up operator resources",
      "Continuous process monitoring",
      "Cost-effective implementation",
      "Real-time moisture information"
    ],
    technicalDetails: {
      sensors: "Stainless steel moisture sensors",
      integration: "Plant PLC or dedicated display",
      system: "Rotary dryer process"
    },
    icon: Settings
  },
  {
    id: 7,
    title: "Coffee Quenching Control",
    slug: "coffee-quenching-control",
    category: "food-processing",
    image: "/application-examples/coffee-quenching-control.jpg",
    summary: "Custom-engineered moisture control system for automated coffee bean quenching and quality control.",
    description: "Dryer Master moisture measurement and control technologies have multiple applications in the food industry, where tight control of moisture levels can have a direct impact on the quality of the product. We custom engineered this system to automate and improve a coffee bean quenching process.",
    keyFeatures: [
      "Custom-engineered system",
      "Food-grade stainless steel sensors",
      "PLC-based control integration",
      "Precision spray system",
      "Automated quenching process"
    ],
    benefits: [
      "Consistent coffee quality",
      "Automated flavor preservation",
      "Precise moisture control",
      "Quality objective achievement",
      "Process automation"
    ],
    technicalDetails: {
      sensors: "Food-grade stainless steel",
      integration: "PLC-based control system",
      system: "Automated spray quenching"
    },
    icon: Coffee
  },
  {
    id: 8,
    title: "Harsh Environment Monitoring",
    slug: "harsh-environment-monitoring",
    category: "grain-drying",
    image: "/application-examples/harsh-environment-monitoring-control.jpg",
    summary: "Extreme cold weather drying control system designed for temperatures down to -20°C.",
    description: "A prospective client approached us looking for a drying control system that could withstand the rigors of the depths of winter. In their location corn was not removed from the cob until after the kernels had frozen, requiring operation at temperatures as low as -20C.",
    keyFeatures: [
      "Extreme cold operation (-20°C)",
      "Frozen grain handling",
      "Modified DM510 controller",
      "Cold-resistant sensors",
      "Proven winter reliability"
    ],
    benefits: [
      "Extreme weather capability",
      "Reliable winter operation",
      "Frozen grain processing",
      "Proven performance record",
      "100+ installations deployed"
    ],
    technicalDetails: {
      system: "Modified DM510 controller",
      sensors: "Cold-resistant moisture sensors",
      integration: "Grain elevator systems"
    },
    icon: Mountain
  },
  {
    id: 9,
    title: "Integrated Drying Control",
    slug: "integrated-drying-control",
    category: "grain-drying",
    image: "/application-examples/integrated-drying-control.jpg",
    summary: "Compact DM510e module for dryer manufacturers enabling single-panel operation control.",
    description: "A major dryer manufacturer approached us with the concept of adding Dryer Master control to their dryers as an integrated option feature, so that all dryer operation, including moisture control, could take place from one dryer control panel.",
    keyFeatures: [
      "Compact DM510e module",
      "Single panel operation",
      "Manufacturer integration",
      "Full functionality access",
      "Unified user interface"
    ],
    benefits: [
      "Simplified integration",
      "Proven control technology",
      "Reasonable price point",
      "Enhanced dryer features",
      "Manufacturer competitive advantage"
    ],
    technicalDetails: {
      system: "DM510e integrated module",
      integration: "Dryer manufacturer panels",
      sensors: "Integrated moisture control"
    },
    icon: Zap
  }
];

export const applicationStats = [
  { label: "Application Types", value: "9+", icon: Settings },
  { label: "Industries Served", value: "4+", icon: Factory },
  { label: "Years of Experience", value: "25+", icon: Zap },
  { label: "Custom Solutions", value: "100+", icon: Wheat }
];

export const pageContent = {
  hero: {
    badge: "Real-World Applications",
    title: "Dryer Master Application Examples",
    description: "Discover how Dryer Master's real-time moisture monitoring and control technologies deliver bottom-line results across diverse industries and applications."
  },
  sections: {
    intro: {
      title: "Proven Results Across Industries",
      description: "Our customers tell us that they see real bottom line results from being able to master their moisture. Explore our comprehensive range of applications spanning grain drying, food processing, and industrial operations."
    },
    categories: [
      { key: "all", label: "All Applications", icon: Settings },
      { key: "grain-drying", label: "Grain Drying", icon: Wheat },
      { key: "food-processing", label: "Food Processing", icon: Coffee },
      { key: "industrial", label: "Industrial", icon: Factory },
      { key: "monitoring", label: "Monitoring", icon: Droplets }
    ],
    cta: {
      title: "Ready to Optimize Your Process?",
      description: "Contact our engineering team to discuss how Dryer Master technology can be customized for your specific application requirements.",
      buttons: [
        { text: "Contact Engineering", href: "/contact", primary: true },
        { text: "View All Products", href: "/products", primary: false }
      ]
    }
  }
};