import { generateMetadata as genMeta } from "@/lib/metadata";
import DealerLocator from "@/components/DealerLocator";
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { Users } from 'lucide-react';

export const metadata = genMeta({
  title: "Find Authorized Dryer Master Dealers Near You",
  description: "Locate authorized Dryer Master dealers worldwide. Search by country, province, or city to find local representatives for moisture monitoring systems, technical support, and product installation.",
  keywords: ["dryer master dealers", "authorized dealers", "local representatives", "dealer locator", "agricultural dealers", "moisture sensor dealers", "canada dealers", "usa dealers"],
  canonical: "/dealers",
});

export default function Dealers() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge 
            icon={<Users size={20} className="text-secondary-1" />}
          >
            Global Network
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle highlightText="Local Dealer">
            Find Your
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            Connect with authorized DryerMaster dealers worldwide for expert support, installation, and genuine parts
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </div>
      <div className="py-8">
        <DealerLocator />
      </div>
    </div>
  );
}