export const demoSamples = [
  {
    id: 'fresh-apple',
    name: 'Fresh Apple',
    image: '🍎',
    description: 'High-quality fresh apple',
    readings: {
      gas: { ethanol: 12, ammonia: 3, status: 'normal' },
      temperature: { value: 18, unit: '°C', status: 'optimal' },
      humidity: { value: 85, unit: '%', status: 'good' },
      ph: { value: 3.8, status: 'normal' },
      color: { r: 180, g: 45, b: 40, freshness: 95 },
      ultrasonic: { distance: 7.2, unit: 'cm', integrity: 'intact' }
    },
    analysis: {
      overall: 'PASS',
      quality: 92,
      issues: [],
      pathway: 'green'
    }
  },
  {
    id: 'suspect-orange',
    name: 'Suspect Orange',
    image: '🍊',
    description: 'Orange showing early deterioration signs',
    readings: {
      gas: { ethanol: 145, ammonia: 42, status: 'elevated' },
      temperature: { value: 24, unit: '°C', status: 'elevated' },
      humidity: { value: 78, unit: '%', status: 'acceptable' },
      ph: { value: 4.8, status: 'elevated' },
      color: { r: 165, g: 95, b: 35, freshness: 68 },
      ultrasonic: { distance: 6.8, unit: 'cm', integrity: 'minor irregularity' }
    },
    analysis: {
      overall: 'REVIEW',
      quality: 64,
      issues: ['Elevated ethanol', 'Higher temperature', 'Reduced freshness score'],
      pathway: 'amber'
    }
  },
  {
    id: 'spoiled-citrus',
    name: 'Spoiled Citrus',
    image: '🍋',
    description: 'Significantly deteriorated fruit',
    readings: {
      gas: { ethanol: 342, ammonia: 128, status: 'critical' },
      temperature: { value: 28, unit: '°C', status: 'high' },
      humidity: { value: 92, unit: '%', status: 'excessive' },
      ph: { value: 5.6, status: 'abnormal' },
      color: { r: 145, g: 125, b: 80, freshness: 28 },
      ultrasonic: { distance: 5.9, unit: 'cm', integrity: 'structural damage' }
    },
    analysis: {
      overall: 'REJECT',
      quality: 25,
      issues: ['Critical gas levels', 'Excessive humidity', 'Severe pH deviation', 'Poor visual quality', 'Structural compromise'],
      pathway: 'red'
    }
  },
  {
    id: 'fresh-grape',
    name: 'Fresh Grapes',
    image: '🍇',
    description: 'Premium quality grape cluster',
    readings: {
      gas: { ethanol: 8, ammonia: 2, status: 'normal' },
      temperature: { value: 16, unit: '°C', status: 'optimal' },
      humidity: { value: 88, unit: '%', status: 'excellent' },
      ph: { value: 3.6, status: 'normal' },
      color: { r: 95, g: 35, b: 85, freshness: 97 },
      ultrasonic: { distance: 4.5, unit: 'cm', integrity: 'intact' }
    },
    analysis: {
      overall: 'PASS',
      quality: 96,
      issues: [],
      pathway: 'green'
    }
  }
];

export const pathwayColors = {
  green: {
    name: 'Accepted',
    color: '#B7F36B',
    bg: 'bg-lime/20',
    border: 'border-lime',
    text: 'text-lime'
  },
  amber: {
    name: 'Review Required',
    color: '#F2AD45',
    bg: 'bg-amber/20',
    border: 'border-amber',
    text: 'text-amber'
  },
  red: {
    name: 'Rejected',
    color: '#E45D56',
    bg: 'bg-error/20',
    border: 'border-error',
    text: 'text-error'
  }
};
