import PageTemplate from "@/components/PageTemplate";

export default function Privacy() {
  return (
    <PageTemplate 
      title="Privacy Policy" 
      description="Our commitment to protecting your privacy and personal information."
    >
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@dryermaster.com.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}