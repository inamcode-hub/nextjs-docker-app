'use client';

import { useState, useMemo } from 'react';
import ReactCountryFlag from 'react-country-flag';

interface Dealer {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  phone: string;
  email?: string;
  website?: string;
  postalCode?: string;
}

const dealersData: Dealer[] = [
  // CANADA
  // Quebec
  { id: 'ca-qc-1', name: 'Comptoir Agricole Ste-Anne (CASA)', address: '', city: 'Repentigny', state: 'Quebec', country: 'Canada', countryCode: 'CA', phone: '1-888-891-0957', website: 'comptoiragricole.com/en' },
  { id: 'ca-qc-2', name: 'Agrilog Inc.', address: '', city: 'St-Hyacinthe', state: 'Quebec', country: 'Canada', countryCode: 'CA', phone: '(514) 980-2838', email: 'mathieu@agrilog.ca', website: 'agrilog.ca' },

  // Ontario
  { id: 'ca-on-1', name: 'Goertz Farm Systems Ltd.', address: '', city: 'Arkona', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '519-828-3668' },
  { id: 'ca-on-2', name: 'Kawartha Lakes Farm Service', address: '', city: 'Lindsay', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '705-799-1445', email: 'chrisklfs@gmail.com', website: 'klfs.ca' },
  { id: 'ca-on-3', name: 'Gaffney Electrical Solutions', address: '', city: 'Mitchell', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '519-348-0505', email: 'jimg@gaffneyelectrical.ca', website: 'gaffneyelectrical.ca' },
  { id: 'ca-on-4', name: 'J. Geurts Electrical Ltd.', address: '', city: 'Lucan', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '519-702-6217', email: 'J.GeurtsElectricalLtd@outlook.com' },
  { id: 'ca-on-5', name: 'Clark Haasen Electric Inc', address: '', city: 'Strathroy', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '519-245-4900', website: 'clarkhaasen.com' },
  { id: 'ca-on-6', name: 'C&A Distributing Inc.', address: '', city: 'Arthur', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '519-848-3209' },
  { id: 'ca-on-7', name: 'ICS Industrial Contracting Solutions Inc.', address: '', city: 'Stratford', state: 'Ontario', country: 'Canada', countryCode: 'CA', phone: '519-271-1600', email: 'kertc@ics-ind.com', website: 'ics-ind.com' },

  // Manitoba
  { id: 'ca-mb-1', name: 'Wall Grain Handling Systems Ltd', address: '', city: 'Winnipeg', state: 'Manitoba', country: 'Canada', countryCode: 'CA', phone: '204-269-7616', website: 'wallgrain.com' },

  // Alberta
  { id: 'ca-ab-1', name: 'JK Grain Handlers Ltd.', address: '', city: 'Millet', state: 'Alberta', country: 'Canada', countryCode: 'CA', phone: '780-362-3206', email: 'jkgrainhandlers@gmail.com', website: 'jkgrain.com' },

  // USA
  // Illinois
  { id: 'us-il-1', name: 'Agee and Son', address: '', city: 'Argenta', state: 'Illinois', country: 'United States', countryCode: 'US', phone: '217-795-2012', website: 'ageeandson.com' },
  { id: 'us-il-2', name: 'Briney Brothers', address: '', city: 'Astoria', state: 'Illinois', country: 'United States', countryCode: 'US', phone: '309-329-2629', website: 'brineybrothers.com' },
  { id: 'us-il-3', name: 'Innovative Electrical Solutions', address: '', city: 'Henning', state: 'Illinois', country: 'United States', countryCode: 'US', phone: '217-286-3280', website: 'iesllc.co' },
  { id: 'us-il-4', name: 'Grain Systems Distribution', address: '', city: 'Rock Falls', state: 'Illinois', country: 'United States', countryCode: 'US', phone: '815-625-2838', website: 'grainsystemsdistribution.com' },

  // Indiana
  { id: 'us-in-1', name: 'Chester Ag. Systems', address: '', city: 'North Judson', state: 'Indiana', country: 'United States', countryCode: 'US', phone: '574-896-5600', website: 'chesterinc.com/ag' },
  { id: 'us-in-2', name: 'Custom Agri Builders, LLC', address: '', city: 'Washington', state: 'Indiana', country: 'United States', countryCode: 'US', phone: '812-257-1115', website: 'casindustries.com' },
  { id: 'us-in-3', name: 'Obermeyer Agri Group', address: '', city: 'Greensburg', state: 'Indiana', country: 'United States', countryCode: 'US', phone: '812-663-4020', website: 'obermeyeragrigroup.com' },
  { id: 'us-in-4', name: 'Hochstetler Grain Equipment Inc.', address: '', city: 'Nappanee', state: 'Indiana', country: 'United States', countryCode: 'US', phone: '574-773-7737', website: 'hochstetlergrain.com' },
  { id: 'us-in-5', name: 'Ripco Ltd.', address: '', city: 'Otwell', state: 'Indiana', country: 'United States', countryCode: 'US', phone: '812-354-2496', website: 'ripcoltd.com' },

  // Iowa
  { id: 'us-ia-1', name: 'Sorem Sales', address: '', city: 'Nevada', state: 'Iowa', country: 'United States', countryCode: 'US', phone: '515-382-2189', website: 'soremsalesinc.com' },
  { id: 'us-ia-2', name: 'Klapperich Farm Systems', address: '', city: 'McIntyre', state: 'Iowa', country: 'United States', countryCode: 'US', phone: '641-985-2520' },
  { id: 'us-ia-3', name: 'Hawkeye Grain Systems', address: '', city: 'Sumner', state: 'Iowa', country: 'United States', countryCode: 'US', phone: '563-578-5510', website: 'hawkeyegrainsystems.com' },
  { id: 'us-ia-4', name: 'Kuhl Grain Systems Inc.', address: '', city: 'Davenport', state: 'Iowa', country: 'United States', countryCode: 'US', phone: '563-285-8564', website: 'kuhlgrainsystems.com' },
  { id: 'us-ia-5', name: 'Agri-Sales & Building Supply', address: '', city: 'Northwood', state: 'Iowa', country: 'United States', countryCode: 'US', phone: '641-324-2735', website: 'agri-salesandbuildingsupply.com' },
  { id: 'us-ia-6', name: 'Hosch Grain Tec Inc.', address: '', city: 'Hopkinton', state: 'Iowa', country: 'United States', countryCode: 'US', phone: '563-920-6033' },

  // Kansas
  { id: 'us-ks-1', name: 'Jade Millwrights Inc.', address: '', city: 'Hiawatha', state: 'Kansas', country: 'United States', countryCode: 'US', phone: '785-544-7771', website: 'jademillwrights.com' },
  { id: 'us-ks-2', name: 'Just Right Grain', address: '', city: 'Mayville', state: 'North Dakota', country: 'United States', countryCode: 'US', phone: '701-788-8927', website: 'jrgrain.com' },

  // Michigan
  { id: 'us-mi-1', name: 'Custom Agri Systems, Inc.', address: '', city: 'Coldwater', state: 'Michigan', country: 'United States', countryCode: 'US', phone: '517-278-0280', website: 'www.casindustries.com' },
  { id: 'us-mi-2', name: 'D S Services', address: '', city: 'Cass City', state: 'Michigan', country: 'United States', countryCode: 'US', phone: '989-872-3318', website: 'dsservicesinc.com' },

  // Minnesota
  { id: 'us-mn-1', name: 'Whitcomb Brothers Grain Systems Inc.', address: '', city: 'Atwater', state: 'Minnesota', country: 'United States', countryCode: 'US', phone: '320-974-8337', website: 'wbgrain.com' },
  { id: 'us-mn-2', name: 'Rural Fabrication Systems Inc.', address: '', city: 'Clara City', state: 'Minnesota', country: 'United States', countryCode: 'US', phone: '320-226-7525' },
  { id: 'us-mn-3', name: 'Freeborn\'s Pride Builders Inc.', address: '', city: 'Freeborn', state: 'Minnesota', country: 'United States', countryCode: 'US', phone: '507-863-2296', website: 'freebornspridebuilders.com' },
  { id: 'us-mn-4', name: 'R&S Grain', address: '', city: 'Dexter', state: 'Minnesota', country: 'United States', countryCode: 'US', phone: '507-584-6794', website: 'rsgrain.com' },
  { id: 'us-mn-5', name: 'Lodermeier\'s Inc', address: '', city: 'Goodhue', state: 'Minnesota', country: 'United States', countryCode: 'US', phone: '651-923-4441', website: 'lodermeiers.net' },

  // Nebraska
  { id: 'us-ne-1', name: 'Ag Dryer Services', address: '', city: 'Elm Creek', state: 'Nebraska', country: 'United States', countryCode: 'US', phone: '308-856-4636', website: 'agdryer.com' },

  // North Dakota
  { id: 'us-nd-1', name: 'Advanced Grain Handling', address: '', city: 'Mayville', state: 'North Dakota', country: 'United States', countryCode: 'US', phone: '701-788-8927', website: 'advancedgrainhandling.com' },

  // Ohio
  { id: 'us-oh-1', name: 'D&E Equipment', address: '', city: 'Wilmington', state: 'Ohio', country: 'United States', countryCode: 'US', phone: '937-382-3501', website: 'deequipment.com' },
  { id: 'us-oh-2', name: 'Custom Agri Systems, Inc.', address: '', city: 'Upper Sandusky', state: 'Ohio', country: 'United States', countryCode: 'US', phone: '419-209-0940', website: 'www.casindustries.com' },
  { id: 'us-oh-3', name: 'Custom Agri Systems, Inc.', address: '', city: 'Beloit', state: 'Ohio', country: 'United States', countryCode: 'US', phone: '330-851-3246', website: 'www.casindustries.com' },
  { id: 'us-oh-4', name: 'Custom Agri Systems Inc', address: '', city: 'Napoleon', state: 'Ohio', country: 'United States', countryCode: 'US', phone: '419-599-5180', website: 'www.casindustries.com' },

  // Wisconsin
  { id: 'us-wi-1', name: 'The Sharine Group', address: '', city: 'Whitewater', state: 'Wisconsin', country: 'United States', countryCode: 'US', phone: '608-883-2880', website: 'thesharinegroup.com' },
  { id: 'us-wi-2', name: 'Digman Construction', address: '', city: 'Platteville', state: 'Wisconsin', country: 'United States', countryCode: 'US', phone: '608-348-2231', website: 'digmanconstruction.com' },

  // EUROPE
  // United Kingdom
  { id: 'uk-1', name: 'Kentra Grain Systems', address: '', city: 'United Kingdom', state: '', country: 'United Kingdom', countryCode: 'GB', phone: '+44 (0)1423 326665', website: 'kentra.co.uk' },

  // SOUTH AMERICA
  // Colombia
  { id: 'co-1', name: 'Sibler S.A.S', address: '', city: 'Bogota', state: 'Colombia', country: 'Colombia', countryCode: 'CO', phone: '', email: 'ingenieria@sibler.com.co' },

  // CHINA
  { id: 'cn-1', name: 'Beijing HuaiRen Technology Co.,Ltd (北京怀仁科技有限公司)', address: '', city: 'Beijing', state: 'China', country: 'China', countryCode: 'CN', phone: '010-80460710', email: 'yiqianzh@hrtbj.com' },

  // SOUTH EAST ASIA
  // Malaysia
  { id: 'my-1', name: 'Ingermark (M) SDN. BHD', address: 'No. 29, Jalan KPK 1/8, Kawasan Perindustrian Kundang, 48020 Rawang, Selangor D.E., MALAYSIA', city: 'Rawang', state: 'Selangor', country: 'Malaysia', countryCode: 'MY', phone: '', email: 'enquiry@ingermark.com', website: 'www.ingermark.com' },

  // NEW ZEALAND
  { id: 'nz-1', name: 'PMR Grain Systems', address: '', city: 'Hinds', state: 'New Zealand', country: 'New Zealand', countryCode: 'NZ', phone: '+64 3-303 7266', website: 'www.pmr.co.nz' },
];

const DealerLocator = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Get unique countries and states with statistics
  const countryStats = useMemo(() => {
    const stats = dealersData.reduce((acc, dealer) => {
      if (!acc[dealer.country]) {
        acc[dealer.country] = {
          count: 0,
          countryCode: dealer.countryCode
        };
      }
      acc[dealer.country].count++;
      return acc;
    }, {} as Record<string, { count: number; countryCode: string }>);

    return Object.entries(stats)
      .map(([country, data]) => ({
        country,
        count: data.count,
        countryCode: data.countryCode
      }))
      .sort((a, b) => b.count - a.count); // Sort by dealer count
  }, []);

  // Note: countries derived from countryStats for consistency

  const states = useMemo(() => {
    if (!selectedCountry) return [];
    return Array.from(new Set(
      dealersData
        .filter(dealer => dealer.country === selectedCountry)
        .map(dealer => dealer.state)
    )).sort();
  }, [selectedCountry]);

  // Filter dealers based on selections and search
  const filteredDealers = useMemo(() => {
    return dealersData.filter(dealer => {
      const matchesCountry = !selectedCountry || dealer.country === selectedCountry;
      const matchesState = !selectedState || dealer.state === selectedState;
      const matchesSearch = !searchTerm || 
        dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.country.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCountry && matchesState && matchesSearch;
    });
  }, [selectedCountry, selectedState, searchTerm]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedState(''); // Reset state when country changes
  };

  const clearFilters = () => {
    setSelectedCountry('');
    setSelectedState('');
    setSearchTerm('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Section */}
      <div className="bg-gradient-to-br from-primary-1 to-gray-50 rounded-3xl p-6 md:p-12 mb-16 border border-gray-200 shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find Your Local Dealer</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Use the filters below to find authorized DryerMaster dealers in your area
          </p>
        </div>

        {/* Country Statistics */}
        <div className="my-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">Global Dealer Network</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {countryStats.map(({ country, count, countryCode }) => (
              <div 
                key={country} 
                className={`bg-white border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-lg ${selectedCountry === country ? 'border-primary bg-gradient-to-br from-primary-1 to-white shadow-lg' : 'border-gray-200'}`}
                onClick={() => handleCountryChange(selectedCountry === country ? '' : country)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary transform transition-transform duration-300 scale-x-0 origin-left group-hover:scale-x-100"></div>
                <div className="mb-4 flex justify-center">
                  <ReactCountryFlag 
                    countryCode={countryCode} 
                    svg 
                    style={{ width: '2em', height: '2em' }}
                    title={country}
                  />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{count}</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-2">
                    {count === 1 ? 'Dealer' : 'Dealers'}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">{country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end mb-8">
          {/* Search Bar */}
          <div className="lg:col-span-2 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400">🔍</div>
            <input
              type="text"
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg"
              placeholder="Search by dealer name, city, state, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 hover:text-red-500 transition-colors duration-300"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Country Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary">Country</label>
            <select
              className="py-4 px-4 border-2 border-gray-200 rounded-xl text-base bg-white min-w-0 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg"
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option value="">All Countries</option>
              {countryStats.map(({ country, count }) => (
                <option key={country} value={country}>
                  {country} ({count} dealer{count !== 1 ? 's' : ''})
                </option>
              ))}
            </select>
          </div>

          {/* State/Province Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary">State/Province</label>
            <select
              className="py-4 px-4 border-2 border-gray-200 rounded-xl text-base bg-white min-w-0 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              disabled={!selectedCountry}
            >
              <option value="">All States/Provinces</option>
              {states.map(state => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters and Results */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center justify-center gap-4 px-6 py-3 bg-white/80 rounded-xl border border-gray-200">
            <span className="text-base font-semibold text-primary">
              {filteredDealers.length} dealer{filteredDealers.length !== 1 ? 's' : ''} found
            </span>
            {(selectedCountry || selectedState || searchTerm) && (
              <span className="text-sm text-gray-500">
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCountry && ` in ${selectedCountry}`}
                {selectedState && `, ${selectedState}`}
              </span>
            )}
          </div>
          
          {(selectedCountry || selectedState || searchTerm) && (
            <button 
              className="px-6 py-3 bg-red-500 text-white border-none rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* Dealer Results */}
      <div className="mb-24">
        {filteredDealers.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border border-gray-200">
            <div className="text-6xl mb-8 opacity-60">🔍</div>
            <h3 className="text-2xl md:text-3xl text-primary mb-4">No dealers found</h3>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Try adjusting your filters or search terms to find dealers in your area.
            </p>
            <button 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold no-underline border-2 border-primary text-primary bg-transparent rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDealers.map(dealer => (
              <div key={dealer.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 shadow-md hover:-translate-y-2 hover:shadow-xl hover:border-primary">
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <ReactCountryFlag 
                      countryCode={dealer.countryCode} 
                      svg 
                      style={{ width: '1.8em', height: '1.8em' }}
                      title={dealer.country}
                      className="rounded"
                    />
                    <span className="text-base font-semibold">{dealer.country}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <span className="text-base">📍</span>
                    <span>{dealer.city}, {dealer.state}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6 leading-tight">{dealer.name}</h3>
                  <div className="text-sm leading-relaxed text-gray-700 mb-6">
                    {dealer.address && <p className="mb-2">{dealer.address}</p>}
                    <p className="mb-2">{dealer.city}, {dealer.state} {dealer.postalCode}</p>
                    <p>{dealer.country}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-secondary">📞</span>
                    <a href={`tel:${dealer.phone}`} className="text-primary no-underline font-medium transition-colors duration-300 hover:text-secondary hover:underline">
                      {dealer.phone}
                    </a>
                  </div>
                  {dealer.email && (
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-secondary">✉️</span>
                      <a href={`mailto:${dealer.email}`} className="text-primary no-underline font-medium transition-colors duration-300 hover:text-secondary hover:underline">
                        {dealer.email}
                      </a>
                    </div>
                  )}
                  {dealer.website && (
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-secondary">🌐</span>
                      <a 
                        href={`https://${dealer.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary no-underline font-medium transition-colors duration-300 hover:text-secondary hover:underline"
                      >
                        {dealer.website}
                      </a>
                    </div>
                  )}
                </div>

                <div className="px-6 pb-6 flex gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${dealer.address}, ${dealer.city}, ${dealer.state}, ${dealer.country}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-secondary text-white border-2 border-secondary rounded-lg text-sm font-semibold no-underline transition-all duration-300 hover:bg-secondary-dark hover:border-secondary-dark hover:-translate-y-1"
                  >
                    <span className="text-base">🗺️</span>
                    Get Directions
                  </a>
                  <a
                    href={`tel:${dealer.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-transparent text-primary border-2 border-primary rounded-lg text-sm font-semibold no-underline transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                  >
                    <span className="text-base">📞</span>
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Become a Dealer CTA */}
      <div className="mt-24 mb-16">
        <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 p-12 text-white">
            <div className="text-6xl flex-shrink-0">🤝</div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6 text-white">Become an Authorized Dealer</h3>
              <p className="text-lg leading-relaxed opacity-90 mb-0">
                Join our network of trusted dealers and grow your business with DryerMaster&rsquo;s innovative agricultural solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 flex-shrink-0">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline border-0 rounded-lg cursor-pointer transition-all duration-300 text-center whitespace-nowrap bg-white text-secondary border-2 border-white hover:bg-gray-100 hover:-translate-y-1"
              >
                Apply Now
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline border-2 border-white text-white bg-transparent rounded-lg cursor-pointer transition-all duration-300 text-center whitespace-nowrap hover:bg-white hover:text-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerLocator;