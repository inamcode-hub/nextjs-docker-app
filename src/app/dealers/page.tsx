import PageTemplate from "@/components/PageTemplate";

export default function Dealers() {
  return (
    <PageTemplate 
      title="Find a Dealer Near You" 
      description="Locate authorized Dryer Master dealers in your area."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Dealer Locator</h3>
              <form className="space-y-4">
                <div>
                  <label className="form-label">Enter Your Location</label>
                  <input type="text" className="form-input" placeholder="City, State or ZIP code" />
                </div>
                
                <div>
                  <label className="form-label">Search Radius</label>
                  <select className="form-select">
                    <option>25 miles</option>
                    <option>50 miles</option>
                    <option>100 miles</option>
                    <option>200 miles</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary">Search Dealers</button>
              </form>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Become a Dealer</h3>
              <p className="card-text">
                Interested in becoming an authorized Dryer Master dealer? 
                Contact us to learn about partnership opportunities.
              </p>
              <button className="btn btn-outline mt-4">Dealer Application</button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}