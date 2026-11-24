import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { processSteps } from '../data/sensors';

const ProcessFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-forest relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest-light to-forest opacity-50" />

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
              The Process
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            How <span className="text-gradient">SensoraQ</span> works
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Follow the journey of food products through intelligent multi-sensor inspection and automated separation.
          </p>
        </motion.div>

        {/* Desktop Flow Diagram */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Flow Line */}
            <svg className="absolute top-20 left-0 w-full h-32" style={{ zIndex: 0 }}>
              <motion.path
                d="M 50 60 Q 200 20, 350 60 T 650 60 Q 800 100, 950 60 T 1250 60"
                stroke="#B7F36B"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {processSteps.slice(0, 5).map((step, index) => {
                const Icon = LucideIcons[step.icon];
                return (
                  <motion.button
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => setSelectedStep(step.id === selectedStep ? null : step.id)}
                    className={`tech-card text-left transition-all ${
                      selectedStep === step.id ? 'ring-2 ring-lime' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-lime" />}
                    </div>
                    <div className="text-xs font-mono text-lime mb-2">STEP {step.id}</div>
                    <h4 className="text-base font-heading font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-sage line-clamp-2">
                      {step.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8 relative z-10">
              {processSteps.slice(5, 9).map((step, index) => {
                const Icon = LucideIcons[step.icon];
                return (
                  <motion.button
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    onClick={() => setSelectedStep(step.id === selectedStep ? null : step.id)}
                    className={`tech-card text-left transition-all ${
                      selectedStep === step.id ? 'ring-2 ring-lime' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-lime" />}
                    </div>
                    <div className="text-xs font-mono text-lime mb-2">STEP {step.id}</div>
                    <h4 className="text-base font-heading font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-sage line-clamp-2">
                      {step.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, index) => {
            const Icon = LucideIcons[step.icon];
            return (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                onClick={() => setSelectedStep(step.id === selectedStep ? null : step.id)}
                className={`tech-card w-full text-left transition-all ${
                  selectedStep === step.id ? 'ring-2 ring-lime' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-lime/20 flex items-center justify-center">
                      {Icon && <Icon className="w-8 h-8 text-lime" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-lime mb-1">STEP {step.id}</div>
                    <h4 className="text-lg font-heading font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-sage">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Step Detail */}
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-12"
          >
            {processSteps
              .filter(step => step.id === selectedStep)
              .map(step => {
                const Icon = LucideIcons[step.icon];
                return (
                  <div key={step.id} className="bg-gradient-to-br from-forest-light to-forest border border-lime/30 rounded-2xl p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-10 h-10 text-lime" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-mono text-lime mb-2">STEP {step.id} DETAILS</div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-lg text-sage mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="bg-forest/50 rounded-xl p-6 border border-lime/20">
                          <div className="text-sm font-mono text-lime mb-2">TECHNOLOGY</div>
                          <div className="text-white font-medium">{step.tech}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </motion.div>
        )}

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-lime/10 border border-lime/30 rounded-2xl px-8 py-4">
            <p className="text-sage">
              <span className="text-lime font-semibold">Tip:</span> Click on any step to see detailed information
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;
