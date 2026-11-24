import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Radar, Activity, GitBranch, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      number: '01',
      icon: Radar,
      title: 'Multi-sensor inspection',
      description: 'Comprehensive quality assessment through gas, temperature, pH, humidity, colour, and spectroscopy.',
      value: 'Enhanced detection'
    },
    {
      number: '02',
      icon: Activity,
      title: 'Real-time monitoring',
      description: 'Continuous evaluation as products move through processing, enabling immediate response.',
      value: 'Faster decisions'
    },
    {
      number: '03',
      icon: GitBranch,
      title: 'Automated separation',
      description: 'Mechanical sorting directs products to appropriate pathways based on quality.',
      value: 'Improved efficiency'
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Better quality control',
      description: 'Consistent, objective evaluation beyond human visual inspection capabilities.',
      value: 'Quality assurance'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-forest relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />

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
              Key Benefits
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Better visibility. Smarter decisions.{' '}
            <span className="text-gradient">Less waste.</span>
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Measurable improvements through intelligent automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="tech-card group relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime/0 to-lime/0 group-hover:from-lime/5 group-hover:to-lime/0 transition-all duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-lime" />
                    </div>
                    <span className="text-7xl font-bold font-heading text-lime/5 group-hover:text-lime/10 transition-colors">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-lime transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sage leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="pt-6 border-t border-lime/10">
                    <span className="text-sm font-mono text-lime uppercase tracking-wider">
                      → {benefit.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-forest-light/80 to-forest-light/40 border border-lime/20 rounded-2xl px-12 py-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to explore intelligent inspection?
            </h3>
            <p className="text-sage mb-6 max-w-2xl">
              Discover how multi-sensor technology enhances food processing operations.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('technology');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Explore Our Technology
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
