import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function ProductPage() {
  const productName = "${dir}".replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <PageTemplate 
      title={productName}
      description={`Advanced moisture monitoring solution for agricultural applications.`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Product Overview</h3>
              <p className="card-text">
                This product provides advanced moisture monitoring capabilities with real-time data 
                collection and analysis for optimal grain drying performance.
              </p>
            </div>
          </div>
          
          <div className="card mt-6">
            <div className="card-body">
              <h3 className="card-title">Key Features</h3>
              <ul className="space-y-2">
                <li>• Real-time monitoring</li>
                <li>• High precision sensors</li>
                <li>• User-friendly interface</li>
                <li>• Robust construction</li>
                <li>• Easy maintenance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card card-info">
            <div className="card-body">
              <h3 className="card-title">Get Information</h3>
              <p className="card-text">Contact us for detailed specifications and pricing.</p>
              <Link href="/contact" className="btn btn-primary btn-sm mt-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
