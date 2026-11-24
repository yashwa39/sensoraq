import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { demoSamples, pathwayColors } from '../data/demoData';
import { Activity, Thermometer, Droplets, Beaker, Eye, Radio, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

const QualityDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedSample, setSelectedSample] = useState(demoSamples[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const handleSampleSelect = (sample) => {
    setIsAnalyzing(true);
    setShowResults(false);
    setSelectedSample(sample);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'PASS': return <CheckCircle2 className="w-6 h-6" />;
      case 'REVIEW': return <AlertTriangle className="w-6 h-6" />;
      case 'REJECT': return <XCircle className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section ref={ref} className="section-padding bg-forest relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-lime font-mono text-sm uppercase tracking-wider border border-lime/30 rounded-full px-6 py-2 bg-lime/10">
              Interactive Demo
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            See <span className="text-gradient">quality analysis</span> in action
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed mb-4">
            Explore how SensoraQ evaluates different food samples through multi-sensor inspection.
          </p>

          <div className="inline-flex items-center space-x-2 bg-amber/10 border border-amber/30 rounded-lg px-4 py-2 text-sm text-amber">
            <Info size={16} />
            <span>Interactive demonstration — illustrative data, not live sensor measurements</span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sample Selection */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Select Sample
              </h3>
              {demoSamples.map((sample, index) => (
                <motion.button
                  key={sample.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => handleSampleSelect(sample)}
                  className={`w-full tech-card text-left transition-all ${
                    selectedSample.id === sample.id ? 'ring-2 ring-lime' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{sample.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-white mb-1">
                        {sample.name}
                      </h4>
                      <p className="text-sm text-sage">{sample.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Analysis Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="sensor-panel">
                {/* Product Display */}
                <div className="mb-8 text-center pb-8 border-b border-lime/20">
                  <motion.div
                    key={selectedSample.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl mb-4"
                  >
                    {selectedSample.image}
                  </motion.div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">
                    {selectedSample.name}
                  </h3>
                  <p className="text-sage">{selectedSample.description}</p>
                </div>

                {/* Analyzing State */}
                <AnimatePresence mode="wait">
                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-16 h-16 border-4 border-lime/20 border-t-lime rounded-full mx-auto mb-4"
                      />
                      <p className="text-lime font-mono">Analyzing sample...</p>
                      <p className="text-sage text-sm mt-2">Processing multi-sensor data</p>
                    </motion.div>
                  )}

                  {/* Results Display */}
                  {showResults && !isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Sensor Readings Grid */}
                      <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-4 flex items-center">
                          <Activity className="w-5 h-5 text-lime mr-2" />
                          Sensor Readings
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Gas Sensors */}
                          <div className="bg-forest/50 rounded-xl p-4 border border-lime/10">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <Radio className="w-4 h-4 text-lime" />
                                <span className="text-white font-medium text-sm">Gas Sensors</span>
                              </div>
                              <span className={`text-xs font-mono px-2 py-1 rounded ${
                                selectedSample.readings.gas.status === 'normal' ? 'bg-lime/20 text-lime' :
                                selectedSample.readings.gas.status === 'elevated' ? 'bg-amber/20 text-amber' :
                                'bg-error/20 text-error'
                              }`}>
                                {selectedSample.readings.gas.status}
                              </span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-sage">Ethanol</span>
                                <span className="text-white font-mono">{selectedSample.readings.gas.ethanol} ppm</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sage">Ammonia</span>
                                <span className="text-white font-mono">{selectedSample.readings.gas.ammonia} ppm</span>
                              </div>
                            </div>
                          </div>

                          {/* Temperature */}
                          <div className="bg-forest/50 rounded-xl p-4 border border-lime/10">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <Thermometer className="w-4 h-4 text-lime" />
                                <span className="text-white font-medium text-sm">Temperature</span>
                              </div>
                              <span className={`text-xs font-mono px-2 py-1 rounded ${
                                selectedSample.readings.temperature.status === 'optimal' ? 'bg-lime/20 text-lime' :
                                selectedSample.readings.temperature.status === 'elevated' ? 'bg-amber/20 text-amber' :
                                'bg-error/20 text-error'
                              }`}>
                                {selectedSample.readings.temperature.status}
                              </span>
                            </div>
                            <div className="text-2xl font-bold font-mono text-white">
                              {selectedSample.readings.temperature.value}{selectedSample.readings.temperature.unit}
                            </div>
                          </div>

                          {/* Humidity */}
                          <div className="bg-forest/50 rounded-xl p-4 border border-lime/10">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <Droplets className="w-4 h-4 text-lime" />
                                <span className="text-white font-medium text-sm">Humidity</span>
                              </div>
                              <span className={`text-xs font-mono px-2 py-1 rounded ${
                                selectedSample.readings.humidity.status === 'good' || selectedSample.readings.humidity.status === 'excellent' || selectedSample.readings.humidity.status === 'acceptable' ? 'bg-lime/20 text-lime' :
                                'bg-error/20 text-error'
                              }`}>
                                {selectedSample.readings.humidity.status}
                              </span>
                            </div>
                            <div className="text-2xl font-bold font-mono text-white">
                              {selectedSample.readings.humidity.value}{selectedSample.readings.humidity.unit}
                            </div>
                          </div>

                          {/* pH */}
                          <div className="bg-forest/50 rounded-xl p-4 border border-lime/10">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <Beaker className="w-4 h-4 text-lime" />
                                <span className="text-white font-medium text-sm">pH Level</span>
                              </div>
                              <span className={`text-xs font-mono px-2 py-1 rounded ${
                                selectedSample.readings.ph.status === 'normal' ? 'bg-lime/20 text-lime' :
                                selectedSample.readings.ph.status === 'elevated' ? 'bg-amber/20 text-amber' :
                                'bg-error/20 text-error'
                              }`}>
                                {selectedSample.readings.ph.status}
                              </span>
                            </div>
                            <div className="text-2xl font-bold font-mono text-white">
                              {selectedSample.readings.ph.value}
                            </div>
                          </div>

                          {/* Color & Freshness */}
                          <div className="bg-forest/50 rounded-xl p-4 border border-lime/10 md:col-span-2">
                            <div className="flex items-center space-x-2 mb-3">
                              <Eye className="w-4 h-4 text-lime" />
                              <span className="text-white font-medium text-sm">Visual Analysis</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-lime/20"
                                  style={{
                                    backgroundColor: `rgb(${selectedSample.readings.color.r}, ${selectedSample.readings.color.g}, ${selectedSample.readings.color.b})`
                                  }}
                                />
                                <div className="text-sm">
                                  <div className="text-sage">RGB Values</div>
                                  <div className="text-white font-mono">
                                    {selectedSample.readings.color.r}, {selectedSample.readings.color.g}, {selectedSample.readings.color.b}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sage text-sm">Freshness Score</div>
                                <div className="text-2xl font-bold font-mono text-white">
                                  {selectedSample.readings.color.freshness}%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quality Analysis Result */}
                      <div className={`rounded-xl p-6 border-2 ${pathwayColors[selectedSample.analysis.pathway].border} ${pathwayColors[selectedSample.analysis.pathway].bg}`}>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-heading font-bold text-white flex items-center">
                            {getStatusIcon(selectedSample.analysis.overall)}
                            <span className="ml-3">Quality Assessment</span>
                          </h4>
                          <div className={`text-3xl font-bold font-mono ${pathwayColors[selectedSample.analysis.pathway].text}`}>
                            {selectedSample.analysis.overall}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sage text-sm mb-1">Overall Quality Score</div>
                            <div className="text-3xl font-bold text-white">{selectedSample.analysis.quality}%</div>
                          </div>
                          <div>
                            <div className="text-sage text-sm mb-1">Sorting Pathway</div>
                            <div className={`text-lg font-bold ${pathwayColors[selectedSample.analysis.pathway].text}`}>
                              {pathwayColors[selectedSample.analysis.pathway].name}
                            </div>
                          </div>
                        </div>

                        {selectedSample.analysis.issues.length > 0 && (
                          <div>
                            <div className="text-sage text-sm mb-2">Detected Issues</div>
                            <ul className="space-y-1">
                              {selectedSample.analysis.issues.map((issue, i) => (
                                <li key={i} className="text-white text-sm flex items-start">
                                  <span className={`${pathwayColors[selectedSample.analysis.pathway].text} mr-2`}>•</span>
                                  <span>{issue}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedSample.analysis.issues.length === 0 && (
                          <p className="text-white text-sm">
                            All parameters within acceptable ranges. Product approved for processing.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityDemo;
