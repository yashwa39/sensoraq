import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { sensors } from '../data/sensors';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GeometricShapes from './GeometricShapes';

const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedSensor, setExpandedSensor] = useState(null);

  return (
    <section id="technology" ref={ref} className="section-padding bg-gradient-to-b from-forest to-forest-light relative overflow-hidden">
      <GeometricShapes variant="mixed" />
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-lime font-mono text-sm uppercase tracking-wider border border-lime/30 rounded-full px-6 py-2 bg-lime/10">
              Technology Stack
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Multiple signals.{' '}
            <span className="text-gradient">One intelligent decision.</span>
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Diverse sensing technologies for comprehensive quality profiles.
          </p>
        </motion.div>

        {/* Sensor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sensors.map((sensor, index) => {
            const Icon = LucideIcons[sensor.icon];
            const isExpanded = expandedSensor === sensor.id;

            return (
              <motion.div
                key={sensor.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.6 }}
                className="relative group"
              >
                <div className={`tech-card h-full flex flex-col transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-lime' : ''
                }`}>
                  {/* Icon and Title */}
                  <div className="mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sensor.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {sensor.name}
                    </h3>
                    
                    <p className="text-sm text-lime font-mono mb-4">
                      {sensor.shortDesc}
                    </p>
                  </div>

                  {/* Basic Description */}
                  <div className="flex-1">
                    <p className="text-sage text-sm leading-relaxed mb-4">
                      {sensor.description}
                    </p>
                    
                    <div className="pt-4 border-t border-lime/10">
                      <div className="text-xs font-mono text-lime uppercase tracking-wider mb-1">
                        Role
                      </div>
                      <div className="text-sm text-white font-medium">
                        {sensor.role}
                      </div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedSensor(isExpanded ? null : sensor.id)}
                    className="mt-4 w-full flex items-center justify-center space-x-2 text-lime hover:text-white transition-colors py-2 border-t border-lime/10"
                  >
                    <span className="text-sm font-medium">
                      {isExpanded ? 'Less details' : 'Technical details'}
                    </span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {/* Expanded Technical Details */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 z-20"
                  >
                    <div className="bg-forest-light border border-lime/30 rounded-xl p-6 shadow-2xl">
                      <div className="text-xs font-mono text-lime uppercase tracking-wider mb-3">
                        Technologies Used
                      </div>
                      <ul className="space-y-2">
                        {sensor.technologies.map((tech, i) => (
                          <li key={i} className="text-sm text-sage flex items-start">
                            <span className="text-lime mr-2">•</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Processing Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-forest-light/80 to-forest/80 border border-lime/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-6 text-center">
              Processing Architecture
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                  <LucideIcons.Zap className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">
                  Signal Conditioning
                </h4>
                <p className="text-sage text-sm leading-relaxed">
                  Analog circuits filter, amplify, and convert raw sensor signals to processable digital data.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                  <LucideIcons.Binary className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">
                  Digital Logic
                </h4>
                <p className="text-sage text-sm leading-relaxed">
                  Combinational and sequential logic gates perform preliminary processing and threshold comparisons.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lime/20 to-green-600/20 flex items-center justify-center">
                  <LucideIcons.Cpu className="w-10 h-10 text-lime" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">
                  Microcontrollers
                </h4>
                <p className="text-sage text-sm leading-relaxed">
                  Arduino and Raspberry Pi systems evaluate multi-sensor data against quality parameters.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
