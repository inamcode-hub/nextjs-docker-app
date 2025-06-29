import PageTemplate from "@/components/PageTemplate";

export default function Contact() {
  return (
    <PageTemplate 
      title="Contact Us" 
      description="Get in touch with our team for sales, support, or technical questions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" />
                </div>
                
                <div>
                  <label className="form-label">Subject</label>
                  <select className="form-select">
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>General Question</option>
                    <option>Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" rows={5}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4>Phone</h4>
                  <p>1-800-DRYER-MASTER</p>
                </div>
                
                <div>
                  <h4>Email</h4>
                  <p>info@dryermaster.com</p>
                  <p>support@dryermaster.com</p>
                </div>
                
                <div>
                  <h4>Address</h4>
                  <p>Agricultural Technology Center<br />
                     123 Innovation Drive<br />
                     Farm City, FC 12345</p>
                </div>
                
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                     Saturday: 9:00 AM - 3:00 PM<br />
                     Sunday: Closed</p>
                  <p className="text-sm text-muted mt-2">24/7 Technical Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}