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
    <div className="min-h-screen py-8">
      <div className="text-center mb-16 py-12 border-b border-gray-5">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl text-primary font-bold mb-4">Authorized Dealer Network</h1>
          <p className="text-lg text-gray-7 max-w-3xl mx-auto">
            Find trusted DryerMaster dealers in your region. Our global network provides expert support, installation services, and genuine parts for all your agricultural moisture monitoring needs.
          </p>
        </div>
      </div>
      <div className="py-8">
        <DealerLocator />
      </div>
    </div>
  );
}