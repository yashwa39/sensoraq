import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const ConveyorAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const products = [
    { emoji: '🍎', path: 'green', delay: 0, name: 'Fresh' },
    { emoji: '🍊', path: 'amber', delay: 2, name: 'Review' },
    { emoji: '🍇', path: 'green', delay: 4, name: 'Fresh' },
    { emoji: '🍋', path: 'red', delay: 6, name: 'Reject' },
  ];

  const pathConfig = {
    green: { color: '#B7F36B', icon: CheckCircle2, label: 'Accepted', yOffset: -100 },
    amber: { color: '#F2AD45', icon: AlertTriangle, label: 'Review', yOffset: 0 },
    red: { color: '#E45D56', icon: XCircle, label: 'Rejected', yOffset: 100 },
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-forest-light to-forest relative overflow-hidden">
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
              Automated Separation
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            From inspection to{' '}
            <span className="text-gradient">intelligent sorting</span>
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Products automatically sorted based on real-time quality analysis.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-forest-light/50 to-forest/50 backdrop-blur-sm rounded-3xl border border-lime/20 p-8 md:p-12 overflow-hidden">
            {/* Conveyor Belt Base */}
            <div className="relative h-96 md:h-[500px]">
              {/* Input Zone */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="bg-forest-light border border-lime/30 rounded-xl p-4 text-center">
                  <div className="text-lime font-mono text-sm mb-2">INPUT</div>
                  <div className="text-white text-xs">Food Entry</div>
                </div>
              </div>

              {/* Sensor Scanning Zone */}
              <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <motion.div
                    animate={isInView ? {
                      boxShadow: [
                        '0 0 20px rgba(183, 243, 107, 0.3)',
                        '0 0 40px rgba(183, 243, 107, 0.6)',
                        '0 0 20px rgba(183, 243, 107, 0.3)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-forest-light border-2 border-lime/50 rounded-xl p-6 text-center"
                  >
                    <div className="text-lime font-mono text-sm mb-2">SCANNING</div>
                    <div className="text-white text-xs mb-3">Multi-Sensor Analysis</div>
                    <div className="flex space-x-1 justify-center">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-8 bg-lime rounded"
                          animate={isInView ? {
                            scaleY: [0.3, 1, 0.3],
                            opacity: [0.3, 1, 0.3]
                          } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  {/* Scanning beam effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-lime/0 via-lime/30 to-lime/0"
                    animate={isInView ? { y: [-100, 100] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Output Paths */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-20">
                {Object.entries(pathConfig).map(([key, config]) => {
                  const Icon = config.icon;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      className="bg-forest-light border-2 rounded-xl p-4 text-center min-w-[140px]"
                      style={{ borderColor: config.color }}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" style={{ color: config.color }} />
                      <div className="font-mono text-sm font-bold mb-1" style={{ color: config.color }}>
                        {config.label.toUpperCase()}
                      </div>
                      <div className="text-sage text-xs">Output Path</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Animated Products */}
              {isInView && products.map((product, index) => {
                const pathInfo = pathConfig[product.path];
                return (
                  <motion.div
                    key={`${product.emoji}-${index}`}
                    className="absolute text-5xl"
                    initial={{ 
                      x: 0, 
                      y: '50%',
                      opacity: 0 
                    }}
                    animate={{
                      x: ['0%', '28%', '28%', '90%'],
                      y: ['50%', '50%', `calc(50% + ${pathInfo.yOffset}px)`, `calc(50% + ${pathInfo.yOffset}px)`],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 8,
                      times: [0, 0.3, 0.5, 1],
                      repeat: Infinity,
                      delay: product.delay,
                      ease: 'linear'
                    }}
                  >
                    <div className="relative">
                      {product.emoji}
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{
                          duration: 8,
                          times: [0, 0.3, 0.4, 0.9, 1],
                          repeat: Infinity,
                          delay: product.delay
                        }}
                      >
                        <div 
                          className="text-xs font-mono font-bold px-2 py-1 rounded"
                          style={{ 
                            backgroundColor: `${pathInfo.color}20`,
                            color: pathInfo.color,
                            border: `1px solid ${pathInfo.color}`
                          }}
                        >
                          {product.name}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Conveyor Belt Lines */}
              <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
                {/* Main belt */}
                <motion.line
                  x1="0"
                  y1="50%"
                  x2="30%"
                  y2="50%"
                  stroke="#B7F36B"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                  transition={{ duration: 1 }}
                />
                {/* Green path */}
                <motion.path
                  d="M 30% 50% Q 60% 50%, 90% 30%"
                  stroke={pathConfig.green.color}
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                {/* Amber path */}
                <motion.line
                  x1="30%"
                  y1="50%"
                  x2="90%"
                  y2="50%"
                  stroke={pathConfig.amber.color}
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                {/* Red path */}
                <motion.path
                  d="M 30% 50% Q 60% 50%, 90% 70%"
                  stroke={pathConfig.red.color}
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {Object.entries(pathConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <div key={key} className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" style={{ color: config.color }} />
                    <span className="text-white text-sm font-medium">{config.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConveyorAnimation;
