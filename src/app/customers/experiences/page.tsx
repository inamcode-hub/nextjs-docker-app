import PageTemplate from "@/components/PageTemplate";

export default function CustomerExperiences() {
  return (
    <PageTemplate 
      title="Customer Experiences" 
      description="Read testimonials and success stories from our satisfied customers."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Midwest Grain Co.</h3>
            <p className="card-text">
              "Dryer Master's moisture monitoring system has reduced our drying costs by 25% 
              while improving grain quality. The real-time data helps us make better decisions."
            </p>
            <p className="text-muted mt-2">- John Smith, Operations Manager</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Prairie Farms LLC</h3>
            <p className="card-text">
              "Installation was quick and easy. The system pays for itself through energy 
              savings and improved grain quality. Excellent technical support."
            </p>
            <p className="text-muted mt-2">- Sarah Johnson, Farm Owner</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}