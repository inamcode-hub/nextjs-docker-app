import PageTemplate from "@/components/PageTemplate";

export default function ApplicationExamples() {
  return (
    <PageTemplate 
      title="Application Examples" 
      description="Real-world applications of our moisture monitoring systems."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Corn Drying</h3>
            <p className="card-text">
              Optimize corn drying operations with real-time moisture monitoring 
              for maximum efficiency and quality.
            </p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Soybean Processing</h3>
            <p className="card-text">
              Ensure optimal moisture levels in soybean processing operations 
              for improved storage and quality.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}