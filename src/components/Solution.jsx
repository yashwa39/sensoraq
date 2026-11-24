import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Radio, Cpu, GitBranch } from 'lucide-react';
import GeometricShapes from './GeometricShapes';

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stages = [
    {
      icon: Radio,
      title: 'SENSE',
      subtitle: 'Multi-sensor data collection',
      description: 'Gas, temperature, pH, humidity, colour, and spectroscopic sensors work simultaneously.',
      color: 'from-lime to-green-400'
    },
    {
      icon: Cpu,
      title: 'ANALYSE',
      subtitle: 'Intelligent processing',
      description: 'Digital logic and microcontrollers evaluate readings against quality parameters.',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      icon: GitBranch,
      title: 'SEPARATE',
      subtitle: 'Automated sorting',
      description: 'Products are automatically directed to appropriate paths based on analysis.',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section id="solution" ref={ref} className="section-padding bg-gradient-to-b from-forest-light to-forest relative overflow-hidden">
      {/* Animated Geometric Shapes */}
      <GeometricShapes variant="squares" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="solution-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#B7F36B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solution-grid)" />
        </svg>
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
              The Solution
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            From food inspection to{' '}
            <span className="text-gradient">intelligent separation.</span>
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Multi-sensor analysis. Intelligent processing. Automated sorting.
          </p>
        </motion.div>

        {/* Three Connected Stages */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-lime/0 via-lime/30 to-lime/0" />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Connecting Dot */}
                    <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 }}
                        className="w-4 h-4 rounded-full bg-lime shadow-lg shadow-lime/50"
                      />
                    </div>

                    <div className="tech-card text-center relative">
                      {/* Stage Number */}
                      <div className="absolute top-4 right-4 text-5xl font-bold font-heading text-lime/10">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className="relative mb-6 flex justify-center">
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${stage.color} opacity-20 absolute blur-xl`} />
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center relative`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl font-bold font-heading text-white mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-lime font-mono text-sm uppercase tracking-wider mb-4">
                        {stage.subtitle}
                      </p>
                      <p className="text-sage leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-lime opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-forest-light/50 to-forest-light/30 border border-lime/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              A comprehensive approach
            </h3>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Multiple sensing technologies work together with digital processing to evaluate products and automatically separate them by quality.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-lime mb-1">Multi-sensor</div>
                <div className="text-sm text-sage">Comprehensive analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-lime mb-1">Real-time</div>
                <div className="text-sm text-sage">Immediate processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-lime mb-1">Automated</div>
                <div className="text-sm text-sage">Consistent separation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
