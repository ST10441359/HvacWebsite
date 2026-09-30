export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  btu: number;
  price: number;
  description: string;
  rating: number;
  image: string;
  coverage: string;
  features: string[];
}

export const products: Product[] = [
  // ==================== SAMSUNG ====================
  {
    id: 'samsung-inverter-12000',
    name: 'Samsung Inverter 12000 BTU Air Conditioner',
    brand: 'Samsung',
    model: 'AR12TXHQBWKN',
    btu: 12000,
    price: 12999.99,
    description: 'Samsung inverter air conditioner with advanced cooling technology and energy efficiency.',
    rating: 4.5,
    image: '/images/products/Samsung_Inverter_12000.jpeg',
    coverage: '20m² - 35m²',
    features: ['Inverter Technology', 'Wi-Fi Control', 'Energy Efficient', 'R32 Refrigerant'],
  },
  {
    id: 'samsung-ar4500-18000',
    name: 'Samsung AR4500 18000 BTU',
    brand: 'Samsung',
    model: 'AR18TXHQBWKN',
    btu: 18000,
    price: 15999.99,
    description: 'Samsung AR4500 series with powerful cooling and modern design.',
    rating: 4.3,
    image: '/images/products/Samsung_AR4500_18000.jpeg',
    coverage: '35m² - 50m²',
    features: ['Inverter Technology', 'Fast Cooling', 'Digital Display', 'Auto Restart'],
  },

  // ==================== LG ====================
  {
    id: 'lg-artcool-12000',
    name: 'LG ArtCool Inverter 12000 BTU (Wifi)',
    brand: 'LG',
    model: 'S12EW',
    btu: 12000,
    price: 13999.99,
    description: 'LG Premium ArtCool inverter with WiFi connectivity and smart features.',
    rating: 4.7,
    image: '/images/products/LG_ArtCool_12000.jpeg',
    coverage: '20m² - 35m²',
    features: ['Dual Inverter', 'Wi-Fi Control', 'Dual Protection Filter', 'Smart ThinQ'],
  },
  {
    id: 'lg-cassette-60000',
    name: 'LG Cassette Inverter 60000 BTU',
    brand: 'LG',
    model: 'T60E',
    btu: 60000,
    price: 45999.99,
    description: 'LG cassette inverter for commercial spaces with 4-way airflow.',
    rating: 4.6,
    image: '/images/products/LG_Cassette_60000.jpeg',
    coverage: '100m²+',
    features: ['Commercial-Grade', '4-Way Airflow', 'Inverter Compressor', 'BMS Integration'],
  },

  // ==================== CARRIER ====================
  {
    id: 'carrier-hiwall',
    name: 'Carrier Hi Wall Air Conditioner',
    brand: 'Carrier',
    model: '42QH12D',
    btu: 12000,
    price: 9999.99,
    description: 'Carrier Hi Wall air conditioner with efficient cooling and reliable performance.',
    rating: 4.2,
    image: '/images/products/Carrier_HiWall.jpeg',
    coverage: '20m² - 35m²',
    features: ['Inverter Technology', 'Turbo Cooling', 'Sleep Mode', 'R32 Refrigerant'],
  },
  {
    id: 'carrier-midwall-24000',
    name: 'Carrier Mid-Wall 24000 BTU',
    brand: 'Carrier',
    model: '42QH24D',
    btu: 24000,
    price: 18499.99,
    description: 'Carrier mid-wall split air conditioner with powerful 24000 BTU cooling.',
    rating: 4.4,
    image: '/images/products/24000_btu_Carrier_Midwall.jpeg',
    coverage: '50m² - 70m²',
    features: ['Inverter Technology', 'Wide Airflow', 'Energy Saver', 'Auto-Cleaning'],
  },

  // ==================== BLU STAR ====================
  {
    id: 'blustar-cassette',
    name: 'Blu Star Cassette Air Conditioner',
    brand: 'Blu Star',
    model: 'BSC-12C',
    btu: 12000,
    price: 10999.99,
    description: 'Blu Star cassette air conditioner with high cooling capacity.',
    rating: 4.0,
    image: '/images/products/BluStar_Cassette.jpeg',
    coverage: '20m² - 35m²',
    features: ['Cassette Design', '4-Way Airflow', 'Quiet Operation', 'Inverter Compressor'],
  },
  {
    id: 'blustar-outdoor-condenser',
    name: 'Blu Star Outdoor Condenser Unit',
    brand: 'Blu Star',
    model: 'BSC-OUT-12',
    btu: 12000,
    price: 9499.99,
    description: 'Blu Star outdoor condenser unit for split air conditioning systems.',
    rating: 4.1,
    image: '/images/products/Blue_Star_outdoor_condenser_unit.jpeg',
    coverage: '20m² - 35m²',
    features: ['Outdoor Unit', 'Weather Resistant', 'Anti-Corrosion', 'R32 Refrigerant'],
  },

  // ==================== DAIKIN ====================
  {
    id: 'daikin-emura',
    name: 'Daikin Emura Wall-Mounted Air Conditioner',
    brand: 'Daikin',
    model: 'FTXJ-EMURA',
    btu: 12000,
    price: 22999.99,
    description: 'Daikin Emura premium wall-mounted air conditioner with advanced inverter technology.',
    rating: 4.8,
    image: '/images/products/Daikin_Emura_wall-mounted_air_conditioner.jpeg',
    coverage: '20m² - 35m²',
    features: ['Premium Design', 'Advanced Inverter', 'Intelligent Eye', 'Whisper Quiet'],
  },

  // ==================== HISENSE ====================
  {
    id: 'hisense-wall-mounted-split',
    name: 'Hisense Wall-Mounted Split Air Conditioner',
    brand: 'Hisense',
    model: 'AS-12UW4RXC1',
    btu: 12000,
    price: 9999.99,
    description: 'Hisense wall-mounted split air conditioner with WiFi control and A Energy Class rating.',
    rating: 4.5,
    image: '/images/products/Hisense_wall-mounted_split_air_conditioner.jpeg',
    coverage: '20m² - 35m²',
    features: ['Inverter Technology', 'Wi-Fi Control', 'A Energy Class', 'Self-Cleaning'],
  },

  // ==================== TCL ====================
  {
    id: 'tcl-wall-mounted-split',
    name: 'TCL Wall-Mounted Split Air Conditioner',
    brand: 'TCL',
    model: 'TAC-12CHSA',
    btu: 12000,
    price: 7999.99,
    description: 'TCL wall-mounted split air conditioner with inverter technology and fast cooling.',
    rating: 4.1,
    image: '/images/products/TCL_wall-mounted_split_air_conditioner.jpeg',
    coverage: '20m² - 35m²',
    features: ['Inverter Technology', 'Fast Cooling', 'Smart Control', 'R32 Refrigerant'],
  },

  // ==================== IQ ====================
  {
    id: 'iq-blackmirror-12000',
    name: 'IQ Blackmirror Inverter 12000 BTU',
    brand: 'IQ',
    model: 'IQ-12INV',
    btu: 12000,
    price: 8999.99,
    description: 'IQ Blackmirror inverter split air conditioner with WiFi control and digital display.',
    rating: 4.2,
    image: '/images/products/IQ_Blackmirror_12000_btu.jpeg',
    coverage: '20m² - 35m²',
    features: ['Inverter Technology', 'Wi-Fi Control', 'Digital Display', 'Black Mirror Finish'],
  },

  // ==================== COMFEE ====================
  {
    id: 'comfee-split-indoor',
    name: 'Comfee Split Air Conditioner (Indoor Unit)',
    brand: 'Comfee',
    model: 'CF-12V',
    btu: 12000,
    price: 7499.99,
    description: 'Comfee inverter split air conditioner with energy-efficient cooling.',
    rating: 4.0,
    image: '/images/products/Comfee_split_air_conditioner_indoor_unit.jpeg',
    coverage: '20m² - 35m²',
    features: ['Inverter Technology', 'Energy Efficient', 'Quiet Mode', 'Auto Restart'],
  },

  // ==================== ALLIANCE / COMMERCIAL ====================
  {
    id: 'alliance-ceiling-cassette',
    name: 'Ceiling Cassette Air Conditioner',
    brand: 'Alliance',
    model: 'CAS-CEIL-12',
    btu: 12000,
    price: 15999.99,
    description: 'Ceiling cassette air conditioner with 4-way airflow for commercial spaces.',
    rating: 4.3,
    image: '/images/products/ceiling_cassette_air_conditioner.jpeg',
    coverage: '20m² - 35m²',
    features: ['Ceiling Mounted', '4-Way Airflow', 'Commercial-Grade', 'Low Noise'],
  },
  {
    id: 'alliance-light-commercial-cassette',
    name: 'Alliance Light Commercial Inverter Cassette',
    brand: 'Alliance',
    model: 'AIC-COM-INV',
    btu: 36000,
    price: 32999.99,
    description: 'Alliance light commercial inverter cassette — ideal for offices and retail spaces.',
    rating: 4.6,
    image: '/images/products/Alliance_Light_Commercial_Inverter_Cassette.jpeg',
    coverage: '70m² - 100m²',
    features: ['Commercial Inverter', 'Cassette Design', '360° Airflow', 'BMS Integration'],
  },
];