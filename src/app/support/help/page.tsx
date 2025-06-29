import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function Support() {
  return (
    <PageTemplate 
      title="Technical Support" 
      description="Get help with installation, troubleshooting, and technical questions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Contact Support</h3>
            <p className="card-text">
              Our technical support team is available 24/7 to help with any questions 
              or issues you may have.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm mt-4">
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">FAQ</h3>
            <p className="card-text">
              Find answers to commonly asked questions about our products 
              and services.
            </p>
            <button className="btn btn-outline btn-sm mt-4">View FAQ</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}