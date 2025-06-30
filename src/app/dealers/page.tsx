import { generateMetadata as genMeta } from "@/lib/metadata";
import DealerLocator from "@/components/DealerLocator";

export const metadata = genMeta({
  title: "Find Authorized Dryer Master Dealers Near You",
  description: "Locate authorized Dryer Master dealers worldwide. Search by country, province, or city to find local representatives for moisture monitoring systems, technical support, and product installation.",
  keywords: ["dryer master dealers", "authorized dealers", "local representatives", "dealer locator", "agricultural dealers", "moisture sensor dealers", "canada dealers", "usa dealers"],
  canonical: "/dealers",
});

export default function Dealers() {
  return (
    <div className="main-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Authorized Dealer Network</h1>
          <p className="page-description">
            Find trusted DryerMaster dealers in your region. Our global network provides expert support, installation services, and genuine parts for all your agricultural moisture monitoring needs.
          </p>
        </div>
      </div>
      <div className="page-content">
        <DealerLocator />
      </div>
    </div>
  );
}