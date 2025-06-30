import PageTemplate from "@/components/PageTemplate";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "About Dryer Master - Agricultural Technology Leaders",
  description: "Learn about Dryer Master's 20+ years of experience in moisture monitoring technology. Our mission to provide innovative agricultural solutions for optimal grain drying.",
  keywords: ["agricultural technology", "company history", "moisture monitoring experts", "grain drying innovation", "agricultural solutions"],
  canonical: "/about",
});

export default function About() {
  return (
    <PageTemplate 
      title="About Dryer Master" 
      description="Leading the industry in moisture monitoring technology for over two decades."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To provide innovative, reliable moisture monitoring solutions that help agricultural 
                professionals optimize their grain drying processes, reduce costs, and improve quality.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To be the global leader in moisture monitoring technology, continuously advancing 
                the agricultural industry through precision and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Company History</h3>
            <p className="card-text">
              Founded in 2001, Dryer Master has been at the forefront of moisture monitoring technology 
              for agricultural applications. Our team of engineers and agricultural experts work 
              tirelessly to develop solutions that meet the evolving needs of modern farming operations.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="card-body">
            <h3 className="card-title text-blue-900">Quality Excellence</h3>
            <p className="card-text text-blue-800">
              DryerMaster prides itself on providing industry-leading real-time moisture monitoring devices 
              with exceptional customer service. Our Quality Management System is based on ISO 9001:2015, 
              demonstrating our commitment to continual improvement of products and processes.
            </p>
            <div className="mt-4">
              <a 
                href="/quality" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More About Our Quality Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}