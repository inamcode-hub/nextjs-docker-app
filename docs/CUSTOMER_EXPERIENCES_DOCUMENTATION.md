# Customer Experiences Documentation

## Overview

The Customer Experiences page showcases real testimonials from Dryer Master customers across North America. The implementation uses a modular approach with separated data, reusable components, and a responsive design.

## Files Structure

```
src/
├── app/customers/experiences/page.tsx           # Main page component
├── components/CustomerTestimonialCard.tsx      # Reusable testimonial card
├── lib/customerExperiencesData.ts              # Data source and types
└── public/customer-experiences/                # Customer images
    ├── greg-ontario.jpg
    ├── lowell-minnesota.jpg
    ├── mike-michigan.jpg
    └── [other customer images...]
```

## Data Structure

### **CustomerTestimonial Interface**
```typescript
interface CustomerTestimonial {
  id: number;
  name: string;
  location: string;
  since: string;                    // Year customer started
  volume: string;                   // Annual bushels processed
  crops: string;                    // Types of crops dried
  equipment: string;                // Dryer Master equipment used
  quote: string;                    // Customer testimonial
  image: string;                    // Path to customer image
  dryer?: string;                   // Dryer brand/model
  dryerModel?: string;             // Specific dryer model
  calibrationFrequency?: string;    // How often they calibrate
  usesMobile?: boolean;            // Whether they use DM Mobile
}
```

### **Current Customer Data**
- **12 customers** from across North America
- **Locations**: Ontario, Minnesota, Michigan, Illinois, South Dakota, Indiana, Ohio, North Dakota
- **Volume Range**: 250,000 to 2 million bushels annually
- **Equipment**: Primarily DM510 controllers with various dryer brands

## Component Architecture

### **Main Page (`page.tsx`)**
- Clean, focused on layout and data injection
- Uses separated data from `customerExperiencesData.ts`
- Responsive design with Tailwind CSS
- Includes hero section, stats, testimonials, and CTA

### **CustomerTestimonialCard Component**
- **Reusable**: Can be used anywhere in the app
- **Props-based**: Receives testimonial data as props
- **Enhanced Features**:
  - DM Mobile user badge
  - Detailed customer stats
  - Equipment and calibration info
  - Gradient header with location
  - Hover effects and animations

### **Data Source (`customerExperiencesData.ts`)**
- **Type-safe**: Full TypeScript interfaces
- **Modular**: Easy to add/edit customers
- **Extensible**: Additional fields can be added
- **Content Management**: Centralized page content

## Key Features

### **Visual Design**
- **Hero Section**: GlobalHeroCard with badge and description
- **Stats Cards**: 4 key statistics with icons
- **Testimonial Cards**: Premium card design with gradients
- **Mobile Responsive**: Mobile-first approach
- **Consistent Branding**: Matches app color scheme

### **Enhanced Information**
- **Customer Since**: How long they've been using Dryer Master
- **Annual Volume**: Bushels processed per year
- **Equipment Details**: Specific Dryer Master equipment
- **Dryer Integration**: What dryer brands they use with DM
- **Calibration Frequency**: How often they calibrate sensors
- **DM Mobile Usage**: Visual badge for mobile app users

### **User Experience**
- **Hover Effects**: Cards lift and shadow on hover
- **Visual Hierarchy**: Clear information organization
- **Quote Styling**: Beautiful quote formatting with typography
- **Call-to-Action**: Clear path to contact/products

## Content Management

### **Adding New Customers**
1. Add new testimonial to `customerTestimonials` array in `customerExperiencesData.ts`
2. Add customer image to `/public/customer-experiences/`
3. Update the image path in the testimonial data

### **Updating Content**
- **Page Content**: Edit `pageContent` object in data file
- **Statistics**: Modify `stats` array
- **Individual Testimonials**: Edit testimonial objects

### **Image Management**
- **Location**: `/public/customer-experiences/`
- **Format**: JPG recommended
- **Size**: 400x300px optimal
- **Naming**: `firstname-location.jpg` (e.g., `greg-ontario.jpg`)

## Technical Implementation

### **Performance Optimizations**
- **Next.js Image Optimization**: Uses Next.js Image component
- **Lazy Loading**: Images load as needed
- **Responsive Images**: Automatic sizing for different screens
- **Efficient Rendering**: Minimal re-renders with proper keys

### **Accessibility**
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper heading hierarchy and labels
- **Color Contrast**: Meets WCAG guidelines

### **SEO Features**
- **Meta Data**: Proper page titles and descriptions
- **Structured Data**: Customer testimonials with schema markup
- **Performance**: Fast loading with optimized images
- **Mobile-First**: Responsive design for all devices

## Usage Examples

### **Basic Customer Addition**
```typescript
{
  id: 13,
  name: "Sarah",
  location: "Iowa",
  since: "2021",
  volume: "800,000 bushels",
  crops: "Corn & Soybeans",
  equipment: "DM510 Controller",
  quote: "The automation has transformed our operation completely.",
  image: "/customer-experiences/sarah-iowa.jpg",
  dryer: "Meyer",
  calibrationFrequency: "2 hours",
  usesMobile: true
}
```

### **Using the Testimonial Card**
```tsx
import CustomerTestimonialCard from '@/components/CustomerTestimonialCard';

<CustomerTestimonialCard testimonial={customerData} />
```

## API Integration (Future)

### **Planned Enhancements**
- **CMS Integration**: Connect to headless CMS for content management
- **Dynamic Loading**: Load testimonials from API
- **Admin Interface**: Allow content managers to add/edit testimonials
- **Image Upload**: Automatic image processing and optimization

### **Data Validation**
- **Runtime Validation**: Add schema validation for testimonial data
- **Type Checking**: Ensure data integrity with TypeScript
- **Error Handling**: Graceful handling of missing images/data

## Deployment Notes

### **Image Requirements**
- Ensure all customer images are included in build
- Optimize images for web delivery
- Consider CDN integration for better performance

### **Content Updates**
- Customer data is statically imported
- Updates require rebuild/redeploy
- Consider dynamic loading for frequent updates

## Troubleshooting

### **Common Issues**

1. **Missing Images**
   - Check image paths in data file
   - Verify images exist in `/public/customer-experiences/`
   - Ensure correct file extensions

2. **Layout Issues**
   - Verify Tailwind classes are available
   - Check responsive breakpoints
   - Test on multiple screen sizes

3. **TypeScript Errors**
   - Ensure all testimonial objects match interface
   - Check for missing required fields
   - Verify icon imports from lucide-react

## Future Enhancements

### **Planned Features**
- **Video Testimonials**: Integrate video testimonials
- **Interactive Map**: Show customer locations on map
- **Filtering**: Filter by location, crop type, equipment
- **Search**: Search testimonials by keyword
- **Social Sharing**: Share individual testimonials

### **Content Expansion**
- **Case Studies**: Detailed customer case studies
- **ROI Calculators**: Show customer savings
- **Before/After**: Compare operations before/after Dryer Master
- **Industry Insights**: Aggregate data and insights

---

**Last Updated**: 2025-06-30  
**Version**: 1.0.0  
**Author**: Development Team