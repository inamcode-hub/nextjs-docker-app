import PageTemplate from "@/components/PageTemplate";

export default function Terms() {
  return (
    <PageTemplate 
      title="Terms of Service" 
      description="Terms and conditions for using Dryer Master products and services."
    >
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
                <p>By using our products and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-3">Product Warranty</h3>
                <p>Our products are covered by a comprehensive warranty. Please refer to your product documentation for specific warranty terms.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p>To the maximum extent permitted by law, Dryer Master shall not be liable for any indirect, incidental, or consequential damages.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <p>For questions about these Terms of Service, please contact us at legal@dryermaster.com.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}