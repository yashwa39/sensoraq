export const sensors = [
  {
    id: 'gas',
    name: 'Gas Sensors',
    icon: 'Wind',
    shortDesc: 'Spoilage gas detection',
    description: 'Detect ethanol and ammonia indicating potential spoilage before visible signs appear.',
    role: 'Early spoilage detection',
    technologies: ['MQ-3 Ethanol Sensor', 'MQ-137 Ammonia Sensor', 'Electrochemical sensing'],
    color: 'from-lime/20 to-lime/5'
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'Thermometer',
    shortDesc: 'Thermal monitoring',
    description: 'Measure thermal properties correlating with freshness and storage conditions.',
    role: 'Thermal quality assessment',
    technologies: ['LM35 Temperature Sensor', 'Thermistor-based sensing', 'RTD sensors'],
    color: 'from-amber/20 to-amber/5'
  },
  {
    id: 'humidity',
    name: 'Humidity',
    icon: 'Droplets',
    shortDesc: 'Moisture measurement',
    description: 'Monitor moisture levels affecting food preservation and microbial growth.',
    role: 'Moisture monitoring',
    technologies: ['DHT11/DHT22', 'Capacitive humidity sensors', 'Resistive sensors'],
    color: 'from-blue-400/20 to-blue-400/5'
  },
  {
    id: 'ph',
    name: 'pH Sensing',
    icon: 'Beaker',
    shortDesc: 'Acidity measurement',
    description: 'Measure pH levels to indicate fermentation, bacterial activity, or degradation.',
    role: 'Chemical quality monitoring',
    technologies: ['Glass electrode pH probes', 'Ion-selective electrodes', 'Digital pH modules'],
    color: 'from-purple-400/20 to-purple-400/5'
  },
  {
    id: 'ultrasonic',
    name: 'Ultrasonic',
    icon: 'Radio',
    shortDesc: 'Physical inspection',
    description: 'Measure dimensions and detect surface irregularities through sound waves.',
    role: 'Structural integrity check',
    technologies: ['HC-SR04 sensors', 'Time-of-flight measurement', 'Echo analysis'],
    color: 'from-cyan-400/20 to-cyan-400/5'
  },
  {
    id: 'color-nir',
    name: 'Colour & NIR',
    icon: 'Eye',
    shortDesc: 'Visual assessment',
    description: 'Evaluate appearance and subsurface composition to detect ripeness and defects.',
    role: 'Freshness assessment',
    technologies: ['TCS3200 colour sensors', 'RGB analysis', 'NIR spectroscopy'],
    color: 'from-green-400/20 to-green-400/5'
  },
  {
    id: 'ftir',
    name: 'FTIR Spectroscopy',
    icon: 'Wavelength',
    shortDesc: 'Compositional analysis',
    description: 'Analyze molecular absorption patterns to detect adulteration and verify authenticity.',
    role: 'Molecular fingerprinting',
    technologies: ['ATR-FTIR', 'Mid-infrared spectroscopy', 'Chemical fingerprinting'],
    color: 'from-red-400/20 to-red-400/5'
  },
  {
    id: 'nmr',
    name: 'NMR Analysis',
    icon: 'Atom',
    shortDesc: 'Molecular structure',
    description: 'Provide detailed information about molecular structure, water mobility, and fat content.',
    role: 'Advanced structural analysis',
    technologies: ['Low-field NMR', 'Relaxation time measurement', 'Structural analysis'],
    color: 'from-indigo-400/20 to-indigo-400/5'
  }
];

export const processSteps = [
  {
    id: 1,
    title: 'Food Input',
    description: 'Products enter through the feeding mechanism',
    tech: 'Mechanical feeding',
    icon: 'Package'
  },
  {
    id: 2,
    title: 'Conveyor Transport',
    description: 'Automated conveyor moves products through inspection zone',
    tech: 'Motor-driven conveyor',
    icon: 'MoveRight'
  },
  {
    id: 3,
    title: 'Multi-Sensor Scanning',
    description: 'Multiple sensors simultaneously collect quality data',
    tech: 'Gas, temp, pH, colour, humidity',
    icon: 'ScanLine'
  },
  {
    id: 4,
    title: 'Signal Conditioning',
    description: 'Raw signals are filtered, amplified, and digitized',
    tech: 'Analog processing circuits',
    icon: 'Waves'
  },
  {
    id: 5,
    title: 'Digital Logic',
    description: 'Logic gates perform preliminary processing',
    tech: 'Combinational logic',
    icon: 'Binary'
  },
  {
    id: 6,
    title: 'Microcontroller Analysis',
    description: 'Arduino and Raspberry Pi evaluate sensor data',
    tech: 'Arduino Uno, Raspberry Pi',
    icon: 'Cpu'
  },
  {
    id: 7,
    title: 'Quality Classification',
    description: 'System determines product quality status',
    tech: 'Multi-parameter algorithm',
    icon: 'GitBranch'
  },
  {
    id: 8,
    title: 'Automated Separation',
    description: 'Actuators direct products to appropriate paths',
    tech: 'Servo-controlled sorting',
    icon: 'Split'
  },
  {
    id: 9,
    title: 'Display & Logging',
    description: 'LCD shows status and logs inspection results',
    tech: '16×2 LCD, data logging',
    icon: 'Monitor'
  }
];
