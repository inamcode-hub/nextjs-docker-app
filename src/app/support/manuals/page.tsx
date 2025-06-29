import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function Manuals() {
  return (
    <PageTemplate 
      title="Product Manuals" 
      description="Download manuals and documentation for all Dryer Master products."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">DM510 Controller Manual</h3>
            <p className="card-text">Complete installation and operation guide.</p>
            <button className="btn btn-outline btn-sm mt-4">Download PDF</button>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Moisture Sensors Guide</h3>
            <p className="card-text">Technical specifications and setup instructions.</p>
            <button className="btn btn-outline btn-sm mt-4">Download PDF</button>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">DM Mobile App Guide</h3>
            <p className="card-text">Mobile app installation and usage guide.</p>
            <button className="btn btn-outline btn-sm mt-4">Download PDF</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}