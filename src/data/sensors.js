export const sensors = [
  {
    id: 'gas',
    name: 'Gas Sensors',
    icon: 'Wind',
    shortDesc: 'Detection of spoilage-related gases',
    description: 'Gas sensors detect volatile compounds such as ethanol and ammonia that indicate potential spoilage. These chemical signatures help identify deteriorating food products before visible signs appear.',
    role: 'Early spoilage detection',
    technologies: ['MQ-3 Ethanol Sensor', 'MQ-137 Ammonia Sensor', 'Electrochemical sensing'],
    color: 'from-lime/20 to-lime/5'
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'Thermometer',
    shortDesc: 'Thermometric sensing and monitoring',
    description: 'Temperature sensors measure thermal properties that correlate with freshness and storage conditions. Temperature deviations can indicate improper handling or biological activity.',
    role: 'Thermal quality assessment',
    technologies: ['LM35 Temperature Sensor', 'Thermistor-based sensing', 'RTD sensors'],
    color: 'from-amber/20 to-amber/5'
  },
  {
    id: 'humidity',
    name: 'Humidity',
    icon: 'Droplets',
    shortDesc: 'Capacitive humidity measurement',
    description: 'Humidity sensors monitor moisture levels that affect food preservation. Excessive or insufficient humidity can accelerate degradation and microbial growth.',
    role: 'Moisture condition monitoring',
    technologies: ['DHT11/DHT22', 'Capacitive humidity sensors', 'Resistive sensors'],
    color: 'from-blue-400/20 to-blue-400/5'
  },
  {
    id: 'ph',
    name: 'pH Sensing',
    icon: 'Beaker',
    shortDesc: 'Electrochemical acidity measurement',
    description: 'pH sensors measure acidity and alkalinity levels. Changes in pH indicate fermentation, bacterial activity, or chemical degradation in food products.',
    role: 'Chemical quality monitoring',
    technologies: ['Glass electrode pH probes', 'Ion-selective electrodes', 'Digital pH modules'],
    color: 'from-purple-400/20 to-purple-400/5'
  },
  {
    id: 'ultrasonic',
    name: 'Ultrasonic',
    icon: 'Radio',
    shortDesc: 'Reflection and distance measurement',
    description: 'Ultrasonic sensors measure physical dimensions and detect surface irregularities through sound wave reflection. This helps assess structural integrity and detect physical defects.',
    role: 'Physical inspection',
    technologies: ['HC-SR04 sensors', 'Time-of-flight measurement', 'Echo analysis'],
    color: 'from-cyan-400/20 to-cyan-400/5'
  },
  {
    id: 'color-nir',
    name: 'Colour & NIR',
    icon: 'Eye',
    shortDesc: 'Visual and near-infrared assessment',
    description: 'Colour sensors and near-infrared (NIR) spectroscopy evaluate visual appearance and subsurface composition. These methods detect ripeness, bruising, and internal defects non-invasively.',
    role: 'Freshness and ripeness assessment',
    technologies: ['TCS3200 colour sensors', 'RGB analysis', 'NIR spectroscopy'],
    color: 'from-green-400/20 to-green-400/5'
  },
  {
    id: 'ftir',
    name: 'FTIR Spectroscopy',
    icon: 'Wavelength',
    shortDesc: 'Infrared compositional fingerprinting',
    description: 'Fourier Transform Infrared (FTIR) spectroscopy analyzes how molecules absorb infrared light, providing a unique compositional fingerprint. This advanced technique can detect adulteration and verify authenticity.',
    role: 'Molecular composition analysis',
    technologies: ['ATR-FTIR', 'Mid-infrared spectroscopy', 'Chemical fingerprinting'],
    color: 'from-red-400/20 to-red-400/5'
  },
  {
    id: 'nmr',
    name: 'NMR Analysis',
    icon: 'Atom',
    shortDesc: 'Nuclear magnetic resonance',
    description: 'Nuclear Magnetic Resonance (NMR) provides detailed information about molecular structure, water mobility, and fat content. This non-destructive technique offers deep compositional insights.',
    role: 'Advanced molecular analysis',
    technologies: ['Low-field NMR', 'Relaxation time measurement', 'Structural analysis'],
    color: 'from-indigo-400/20 to-indigo-400/5'
  }
];

export const processSteps = [
  {
    id: 1,
    title: 'Food Input',
    description: 'Products enter the inspection system through the feeding mechanism',
    tech: 'Mechanical feeding system',
    icon: 'Package'
  },
  {
    id: 2,
    title: 'Conveyor Transport',
    description: 'Automated conveyor moves products through the inspection zone at controlled speed',
    tech: 'Motor-driven conveyor belt',
    icon: 'MoveRight'
  },
  {
    id: 3,
    title: 'Multi-Sensor Scanning',
    description: 'Multiple sensors simultaneously collect quality-related data from each product',
    tech: 'Gas, temperature, pH, colour, humidity sensors',
    icon: 'ScanLine'
  },
  {
    id: 4,
    title: 'Signal Conditioning',
    description: 'Raw sensor signals are filtered, amplified, and converted to digital format',
    tech: 'Analog signal processing circuits',
    icon: 'Waves'
  },
  {
    id: 5,
    title: 'Digital Logic Processing',
    description: 'Logic gates perform preliminary signal processing and threshold comparisons',
    tech: 'Combinational and sequential logic',
    icon: 'Binary'
  },
  {
    id: 6,
    title: 'Microcontroller Analysis',
    description: 'Arduino and Raspberry Pi evaluate sensor data against quality parameters',
    tech: 'Arduino Uno, Raspberry Pi',
    icon: 'Cpu'
  },
  {
    id: 7,
    title: 'Quality Classification',
    description: 'Processing system determines product quality status based on combined sensor analysis',
    tech: 'Multi-parameter decision algorithm',
    icon: 'GitBranch'
  },
  {
    id: 8,
    title: 'Automated Separation',
    description: 'Mechanical actuators direct products to appropriate output paths based on quality classification',
    tech: 'Servo-controlled sorting mechanism',
    icon: 'Split'
  },
  {
    id: 9,
    title: 'Display & Logging',
    description: 'LCD displays status and inspection results; data is logged for quality records',
    tech: '16×2 LCD display, data logging',
    icon: 'Monitor'
  }
];
