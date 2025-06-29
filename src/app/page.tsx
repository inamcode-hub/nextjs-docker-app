import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function Home() {
  return (
    <PageTemplate 
      title="Real-Time Moisture Monitoring Solutions" 
      description="Leading provider of innovative moisture monitoring technology for grain dryers and agricultural applications worldwide."
    >
      <div className="hero-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-primary mb-4">Precision Moisture Control</h2>
            <p className="mb-6">
              Our advanced real-time moisture sensors and control systems help grain dryers 
              achieve optimal moisture levels, reduce energy costs, and improve grain quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/moisture-sensors" className="btn btn-primary">
                View Products
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="card">
              <h3 className="card-title">Why Choose Dryer Master?</h3>
              <ul className="text-left space-y-2">
                <li>• Real-time moisture monitoring</li>
                <li>• Reduced drying costs</li>
                <li>• Improved grain quality</li>
                <li>• Easy installation</li>
                <li>• 24/7 technical support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card card-info">
            <div className="card-body">
              <h3 className="card-title">DM510 Controller</h3>
              <p className="card-text">Advanced moisture control system with real-time monitoring and automated adjustments.</p>
              <Link href="/products/dm510-controller" className="btn btn-secondary btn-sm mt-4">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="card card-success">
            <div className="card-body">
              <h3 className="card-title">Moisture Sensors</h3>
              <p className="card-text">Precision sensors providing accurate real-time moisture readings for optimal drying.</p>
              <Link href="/products/moisture-sensors" className="btn btn-secondary btn-sm mt-4">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="card card-warning">
            <div className="card-body">
              <h3 className="card-title">DM Mobile</h3>
              <p className="card-text">Remote monitoring and control via mobile app for complete system management.</p>
              <Link href="/products/dm-mobile" className="btn btn-secondary btn-sm mt-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
