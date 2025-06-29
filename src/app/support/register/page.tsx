import PageTemplate from "@/components/PageTemplate";

export default function Register() {
  return (
    <PageTemplate 
      title="Product Registration" 
      description="Register your Dryer Master products for warranty and support."
    >
      <div className="max-w-2xl mx-auto">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Register Your Product</h3>
            <form className="space-y-4">
              <div>
                <label className="form-label">Product Model</label>
                <select className="form-select">
                  <option>Select your product</option>
                  <option>DM510 Controller</option>
                  <option>Moisture Sensors</option>
                  <option>DM Mobile</option>
                  <option>DM100</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Serial Number</label>
                <input type="text" className="form-input" placeholder="Enter serial number" />
              </div>
              
              <div>
                <label className="form-label">Purchase Date</label>
                <input type="date" className="form-input" />
              </div>
              
              <button type="submit" className="btn btn-primary">Register Product</button>
            </form>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}