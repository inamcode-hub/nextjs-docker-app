export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dryer Master",
    "url": "https://www.dryermaster.com",
    "logo": "https://www.dryermaster.com/header-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-519-725-4700",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kitchener-Waterloo",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "foundingDate": "1983",
    "description": "Leading manufacturer of precision grain drying and moisture monitoring equipment since 1983."
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DM510 Controller",
    "description": "Smart grain dryer automation system with precision moisture monitoring",
    "brand": {
      "@type": "Brand",
      "name": "Dryer Master"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Dryer Master"
    },
    "category": "Agricultural Equipment",
    "image": "https://www.dryermaster.com/products/dm-510/dm510-controller-product-photo.jpg"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dryer Master",
    "url": "https://www.dryermaster.com",
    "description": "Stop losing money on every bushel with precision grain drying solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.dryermaster.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}