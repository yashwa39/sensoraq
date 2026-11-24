import { motion } from 'framer-motion';
import { ChevronDown, Scan, CheckCircle2, XCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#B7F36B 1px, transparent 1px), linear-gradient(90deg, #B7F36B 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, 0, Math.random() * 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="container-custom px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-lime/10 border border-lime/30 rounded-full px-4 py-2"
            >
              <Scan className="w-4 h-4 text-lime" />
              <span className="text-lime text-sm font-mono uppercase tracking-wider">
                Smart Food Quality Intelligence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight"
            >
              Good food deserves to be{' '}
              <span className="text-gradient">recognised.</span>
              <br />
              Bad food shouldn't{' '}
              <span className="text-gradient">slip through.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-sage leading-relaxed max-w-2xl"
            >
              Intelligent multi-sensor inspection. Automated separation. Real-time quality decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('technology')}
                className="btn-primary"
              >
                Explore the Technology
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary"
              >
                See How It Works
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Conceptual Product Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            {/* Main Product Visualization */}
            <div className="relative bg-gradient-to-br from-forest-light/50 to-forest/50 backdrop-blur-sm rounded-3xl border border-lime/20 p-8 overflow-hidden">
              {/* Scanning Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-lime/20 to-transparent"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Conveyor Belt Representation */}
              <div className="relative space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Automated Quality Inspection
                  </h3>
                  <p className="text-sage text-sm">Real-time multi-sensor analysis</p>
                </div>

                {/* Product Flow Visualization */}
                <div className="space-y-4">
                  {/* Fresh Product */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center justify-between bg-lime/10 border border-lime/30 rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">🍎</div>
                      <div>
                        <div className="font-medium text-white">Fresh Apple</div>
                        <div className="text-xs text-sage">Quality: Excellent</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-6 h-6 text-lime" />
                      <span className="text-lime font-mono text-sm font-semibold">PASS</span>
                    </div>
                  </motion.div>

                  {/* Suspect Product */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                    className="flex items-center justify-between bg-amber/10 border border-amber/30 rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">🍊</div>
                      <div>
                        <div className="font-medium text-white">Early Deterioration</div>
                        <div className="text-xs text-amber">Quality: Suspect</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-amber font-mono text-sm font-semibold">REVIEW</span>
                    </div>
                  </motion.div>

                  {/* Rejected Product */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                    className="flex items-center justify-between bg-error/10 border border-error/30 rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">🍋</div>
                      <div>
                        <div className="font-medium text-white">Spoiled Fruit</div>
                        <div className="text-xs text-error">Quality: Poor</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-6 h-6 text-error" />
                      <span className="text-error font-mono text-sm font-semibold">REJECT</span>
                    </div>
                  </motion.div>
                </div>

                {/* Sensor Indicators */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-lime/10">
                  {['GAS', 'TEMP', 'pH', 'COLOR'].map((sensor, i) => (
                    <motion.div
                      key={sensor}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      className="text-center"
                    >
                      <div className="text-xs font-mono text-lime">{sensor}</div>
                      <div className="w-full h-1 bg-lime/20 rounded mt-1">
                        <motion.div
                          className="h-full bg-lime rounded"
                          animate={{ width: ['0%', '100%'] }}
                          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Tech Labels */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-20 bg-forest-light border border-lime/30 rounded-lg px-4 py-2 text-sm font-mono text-lime"
            >
              Multi-sensor
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
              className="absolute -left-4 bottom-20 bg-forest-light border border-lime/30 rounded-lg px-4 py-2 text-sm font-mono text-lime"
            >
              Automated
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('problem')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-sage hover:text-lime transition-colors"
        >
          <span className="text-sm font-mono">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
