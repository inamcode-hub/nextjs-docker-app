import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function MoistureSensors() {
  return (
    <PageTemplate 
      title="Real-Time Moisture Sensors" 
      description="Precision moisture monitoring technology for accurate grain drying control."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Product Features</h3>
              <ul className="space-y-2">
                <li>• Real-time moisture measurement</li>
                <li>• High accuracy sensors</li>
                <li>• Durable construction</li>
                <li>• Easy installation</li>
                <li>• Compatible with all dryer types</li>
                <li>• Wireless connectivity options</li>
              </ul>
            </div>
          </div>
          
          <div className="card mt-6">
            <div className="card-body">
              <h3 className="card-title">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4>Accuracy</h4>
                  <p>±0.1% moisture content</p>
                </div>
                <div>
                  <h4>Operating Range</h4>
                  <p>5% - 40% moisture content</p>
                </div>
                <div>
                  <h4>Temperature Range</h4>
                  <p>-40°C to +85°C</p>
                </div>
                <div>
                  <h4>Response Time</h4>
                  <p>&lt; 2 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card card-success">
            <div className="card-body">
              <h3 className="card-title">Get Quote</h3>
              <p className="card-text">Contact us for pricing and technical specifications.</p>
              <Link href="/contact" className="btn btn-primary btn-sm mt-4">
                Request Quote
              </Link>
            </div>
          </div>
          
          <div className="card mt-6">
            <div className="card-body">
              <h3 className="card-title">Related Products</h3>
              <div className="space-y-2">
                <Link href="/products/dm510-controller" className="block text-primary hover:underline">
                  DM510 Controller
                </Link>
                <Link href="/products/dm-mobile" className="block text-primary hover:underline">
                  DM Mobile App
                </Link>
                <Link href="/products/dm100" className="block text-primary hover:underline">
                  Dryer Master DM100
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}