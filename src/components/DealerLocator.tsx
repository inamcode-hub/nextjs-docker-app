'use client';

import { useState, useMemo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Search, MapPin, Phone, Mail, Globe, Filter, X, Users, Star, Clock, ChevronDown } from 'lucide-react';

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
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-gray-200/50 shadow-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Filter size={20} />
            <span className="text-lg font-semibold">Search & Filter</span>
          </div>
        </div>

        {/* Country Statistics */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Global Network Overview</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Select a country to filter dealers by region</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {countryStats.map(({ country, count, countryCode }) => (
              <div 
                key={country} 
                className={`group relative bg-white/90 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${selectedCountry === country ? 'border-primary bg-gradient-to-br from-primary-1 to-white shadow-lg ring-2 ring-primary/20' : 'border-gray-200/50 hover:border-primary/50'}`}
                onClick={() => handleCountryChange(selectedCountry === country ? '' : country)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-3 flex justify-center">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300">
                      <ReactCountryFlag 
                        countryCode={countryCode} 
                        svg 
                        style={{ width: '1.8em', height: '1.8em' }}
                        title={country}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{count}</div>
                    <div className="text-xs text-gray-500 uppercase font-medium tracking-wide mb-2">
                      {count === 1 ? 'Dealer' : 'Dealers'}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 truncate" title={country}>{country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end mb-8">
          {/* Search Bar */}
          <div className="lg:col-span-2 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60">
              <Search size={20} />
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200/50 rounded-xl text-base bg-white/90 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:bg-white placeholder:text-gray-400"
              placeholder="Search dealers, cities, or regions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-300 p-1 rounded-full hover:bg-red-50"
                onClick={() => setSearchTerm('')}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Country Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary flex items-center gap-2">
              <Globe size={16} />
              Country
            </label>
            <div className="relative">
              <select
                className="w-full py-4 px-4 pr-10 border-2 border-gray-200/50 rounded-xl text-base bg-white/90 backdrop-blur-sm min-w-0 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:bg-white appearance-none cursor-pointer"
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
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* State/Province Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary flex items-center gap-2">
              <MapPin size={16} />
              State/Province
            </label>
            <div className="relative">
              <select
                className="w-full py-4 px-4 pr-10 border-2 border-gray-200/50 rounded-xl text-base bg-white/90 backdrop-blur-sm min-w-0 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:bg-white appearance-none cursor-pointer disabled:bg-gray-100/50 disabled:text-gray-400 disabled:cursor-not-allowed"
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
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Summary and Clear Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-primary-1 to-secondary-1 rounded-xl border border-primary/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Users size={16} className="text-primary" />
              </div>
              <span className="text-lg font-bold text-primary">
                {filteredDealers.length}
              </span>
              <span className="text-sm text-gray-600">
                dealer{filteredDealers.length !== 1 ? 's' : ''} found
              </span>
            </div>
            {(selectedCountry || selectedState || searchTerm) && (
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            )}
            {(selectedCountry || selectedState || searchTerm) && (
              <div className="text-sm text-gray-600 flex flex-wrap gap-1">
                {searchTerm && (
                  <span className="bg-white/80 px-2 py-1 rounded-md">
                    &quot;{searchTerm}&quot;
                  </span>
                )}
                {selectedCountry && (
                  <span className="bg-white/80 px-2 py-1 rounded-md">
                    {selectedCountry}
                  </span>
                )}
                {selectedState && (
                  <span className="bg-white/80 px-2 py-1 rounded-md">
                    {selectedState}
                  </span>
                )}
              </div>
            )}
          </div>
          
          {(selectedCountry || selectedState || searchTerm) && (
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white border-none rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:bg-red-600 hover:scale-105 hover:shadow-lg"
              onClick={clearFilters}
            >
              <X size={16} />
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Dealer Results */}
      <div className="mb-24">
        {filteredDealers.length === 0 ? (
          <div className="text-center py-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4">No dealers found</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We couldn&apos;t find any dealers matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-white rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary-dark hover:scale-105 hover:shadow-lg"
                onClick={clearFilters}
              >
                <X size={16} />
                Clear All Filters
              </button>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border-2 border-primary text-primary bg-transparent rounded-xl no-underline cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <Phone size={16} />
                Contact Us for Help
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDealers.map((dealer, index) => (
              <div 
                key={dealer.id} 
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl hover:scale-105 hover:border-primary/20"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease forwards'
                }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-primary-1 to-secondary-1 border-b border-primary/10 p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-xl shadow-md border border-gray-200/50 flex-shrink-0">
                        <ReactCountryFlag 
                          countryCode={dealer.countryCode} 
                          svg 
                          style={{ width: '1.5em', height: '1.5em' }}
                          title={dealer.country}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-primary-dark transition-colors duration-300">
                          {dealer.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark text-white px-3 py-2 rounded-full shadow-md">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold uppercase tracking-wide">Authorized</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Address */}
                  <div className="flex items-start gap-3 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin size={14} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Address</div>
                      <div className="text-sm text-gray-700 leading-relaxed">
                        {dealer.address && <div className="mb-1">{dealer.address}</div>}
                        <div className="mb-1">{dealer.city}, {dealer.state} {dealer.postalCode}</div>
                        <div className="text-gray-500 text-xs">{dealer.country}</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Phone size={14} className="text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Phone</div>
                        <a 
                          href={`tel:${dealer.phone}`} 
                          className="text-gray-700 font-semibold text-sm no-underline hover:text-secondary hover:underline transition-colors duration-200 block truncate"
                        >
                          {dealer.phone}
                        </a>
                      </div>
                    </div>
                    
                    {dealer.email && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail size={14} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Email</div>
                          <a 
                            href={`mailto:${dealer.email}`} 
                            className="text-gray-700 font-semibold text-sm no-underline hover:text-primary hover:underline transition-colors duration-200 block truncate"
                          >
                            {dealer.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {dealer.website && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                          <Globe size={14} className="text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Website</div>
                          <a 
                            href={`https://${dealer.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 font-semibold text-sm no-underline hover:text-amber-600 hover:underline transition-colors duration-200 block truncate"
                          >
                            {dealer.website}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Become a Dealer CTA */}
      <div className="mt-24 mb-16">
        <div className="relative bg-gradient-to-br from-secondary via-secondary-dark to-primary rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-12 text-white">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Users size={32} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                <Star size={16} className="text-yellow-300" />
                <span className="text-sm font-medium">Partner Opportunity</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                Become an Authorized Dealer
              </h3>
              <p className="text-lg leading-relaxed opacity-90 mb-6 max-w-2xl">
                Join our growing network of trusted dealers and expand your business with DryerMaster&apos;s innovative agricultural solutions. Access exclusive products, training, and support.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Clock size={14} />
                  <span>Quick Application</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Star size={14} />
                  <span>Exclusive Territory</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Users size={14} />
                  <span>Ongoing Support</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline bg-white text-secondary rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              >
                <Phone size={16} />
                Apply Now
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline border-2 border-white text-white bg-transparent rounded-xl cursor-pointer transition-all duration-300 hover:bg-white hover:text-secondary"
              >
                <Globe size={16} />
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