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
  { id: 'co-1', name: 'Sibler S.A.S', address: '', city: 'Bogota', state: 'Colombia', country: 'Colombia', countryCode: 'CO', email: 'ingenieria@sibler.com.co' },

  // CHINA
  { id: 'cn-1', name: 'Beijing HuaiRen Technology Co.,Ltd (北京怀仁科技有限公司)', address: '', city: 'Beijing', state: 'China', country: 'China', countryCode: 'CN', phone: '010-80460710', email: 'yiqianzh@hrtbj.com' },

  // SOUTH EAST ASIA
  // Malaysia
  { id: 'my-1', name: 'Ingermark (M) SDN. BHD', address: 'No. 29, Jalan KPK 1/8, Kawasan Perindustrian Kundang, 48020 Rawang, Selangor D.E., MALAYSIA', city: 'Rawang', state: 'Selangor', country: 'Malaysia', countryCode: 'MY', email: 'enquiry@ingermark.com', website: 'www.ingermark.com' },

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
    <div className="dealer-locator">
      {/* Search and Filter Section */}
      <div className="dealer-filters">
        <div className="filter-header">
          <h2 className="filter-title">Find Your Local Dealer</h2>
          <p className="filter-description">
            Use the filters below to find authorized DryerMaster dealers in your area
          </p>
        </div>

        {/* Country Statistics */}
        <div className="country-stats">
          <h3 className="stats-title">Global Dealer Network</h3>
          <div className="stats-grid">
            {countryStats.map(({ country, count, countryCode }) => (
              <div 
                key={country} 
                className={`stat-card ${selectedCountry === country ? 'active' : ''}`}
                onClick={() => handleCountryChange(selectedCountry === country ? '' : country)}
              >
                <div className="stat-flag">
                  <ReactCountryFlag 
                    countryCode={countryCode} 
                    svg 
                    style={{ width: '2em', height: '2em' }}
                    title={country}
                  />
                </div>
                <div className="stat-info">
                  <div className="stat-count">{count}</div>
                  <div className="stat-label">
                    {count === 1 ? 'Dealer' : 'Dealers'}
                  </div>
                  <div className="stat-country">{country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="filter-controls">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              className="search-input"
              placeholder="Search by dealer name, city, state, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Country Filter */}
          <div className="filter-group">
            <label className="filter-label">Country</label>
            <select
              className="filter-select"
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
          <div className="filter-group">
            <label className="filter-label">State/Province</label>
            <select
              className="filter-select"
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

          {/* Clear Filters */}
          {(selectedCountry || selectedState || searchTerm) && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="results-summary">
          <span className="results-count">
            {filteredDealers.length} dealer{filteredDealers.length !== 1 ? 's' : ''} found
          </span>
          {(selectedCountry || selectedState || searchTerm) && (
            <span className="filter-info">
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCountry && ` in ${selectedCountry}`}
              {selectedState && `, ${selectedState}`}
            </span>
          )}
        </div>
      </div>

      {/* Dealer Results */}
      <div className="dealer-results">
        {filteredDealers.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No dealers found</h3>
            <p>Try adjusting your filters or search terms to find dealers in your area.</p>
            <button className="btn btn-outline" onClick={clearFilters}>
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="dealer-grid">
            {filteredDealers.map(dealer => (
              <div key={dealer.id} className="dealer-card">
                <div className="dealer-header">
                  <div className="dealer-country">
                    <ReactCountryFlag 
                      countryCode={dealer.countryCode} 
                      svg 
                      style={{ width: '1.8em', height: '1.8em' }}
                      title={dealer.country}
                      className="country-flag"
                    />
                    <span className="country-name">{dealer.country}</span>
                  </div>
                  <div className="dealer-location">
                    <span className="location-icon">📍</span>
                    <span>{dealer.city}, {dealer.state}</span>
                  </div>
                </div>

                <div className="dealer-info">
                  <h3 className="dealer-name">{dealer.name}</h3>
                  <div className="dealer-address">
                    <p>{dealer.address}</p>
                    <p>{dealer.city}, {dealer.state} {dealer.postalCode}</p>
                    <p>{dealer.country}</p>
                  </div>
                </div>

                <div className="dealer-contact">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <a href={`tel:${dealer.phone}`} className="contact-link">
                      {dealer.phone}
                    </a>
                  </div>
                  {dealer.email && (
                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <a href={`mailto:${dealer.email}`} className="contact-link">
                        {dealer.email}
                      </a>
                    </div>
                  )}
                  {dealer.website && (
                    <div className="contact-item">
                      <span className="contact-icon">🌐</span>
                      <a 
                        href={`https://${dealer.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        {dealer.website}
                      </a>
                    </div>
                  )}
                </div>

                <div className="dealer-actions">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${dealer.address}, ${dealer.city}, ${dealer.state}, ${dealer.country}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dealer-action-btn directions-btn"
                  >
                    <span className="btn-icon">🗺️</span>
                    Get Directions
                  </a>
                  <a
                    href={`tel:${dealer.phone}`}
                    className="dealer-action-btn call-btn"
                  >
                    <span className="btn-icon">📞</span>
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Become a Dealer CTA */}
      <div className="become-dealer-section">
        <div className="become-dealer-card">
          <div className="become-dealer-content">
            <div className="become-dealer-icon">🤝</div>
            <div className="become-dealer-info">
              <h3>Become an Authorized Dealer</h3>
              <p>Join our network of trusted dealers and grow your business with DryerMaster&rsquo;s innovative agricultural solutions.</p>
            </div>
            <div className="become-dealer-actions">
              <a href="/contact" className="btn btn-primary">
                Apply Now
              </a>
              <a href="/contact" className="btn btn-outline">
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