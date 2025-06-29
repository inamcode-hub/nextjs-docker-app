import PageTemplate from "@/components/PageTemplate";

export default function Videos() {
  return (
    <PageTemplate 
      title="Video Library" 
      description="Watch installation guides, tutorials, and product demonstrations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Installation Videos</h3>
            <p className="card-text">Step-by-step installation guides for all products.</p>
            <button className="btn btn-primary btn-sm mt-4">Watch Now</button>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Product Demonstrations</h3>
            <p className="card-text">See our products in action with detailed demonstrations.</p>
            <button className="btn btn-primary btn-sm mt-4">Watch Now</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}