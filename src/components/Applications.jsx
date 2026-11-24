import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Factory, Package, Truck, Target, Building2 } from 'lucide-react';

const Applications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const applications = [
    {
      icon: Factory,
      title: 'Fruit Processing',
      description: 'Real-time quality inspection during washing, sorting, and packaging.',
      useCase: 'Processing plants',
      gradient: 'from-lime/20 to-green-500/20'
    },
    {
      icon: Package,
      title: 'Food Packaging',
      description: 'Quality checkpoints before packaging to ensure product standards.',
      useCase: 'Packaging operations',
      gradient: 'from-blue-400/20 to-cyan-500/20'
    },
    {
      icon: Truck,
      title: 'Export & Import',
      description: 'Inspection at export facilities and import receiving points.',
      useCase: 'International trade',
      gradient: 'from-purple-400/20 to-pink-500/20'
    },
    {
      icon: Building2,
      title: 'Quality Control Labs',
      description: 'Deployment within QC stations as part of food safety programs.',
      useCase: 'QA laboratories',
      gradient: 'from-amber/20 to-orange-500/20'
    },
    {
      icon: Target,
      title: 'Supply Chain',
      description: 'Strategic checkpoints to monitor and maintain quality standards.',
      useCase: 'Distribution networks',
      gradient: 'from-indigo-400/20 to-blue-500/20'
    }
  ];

  return (
    <section id="applications" ref={ref} className="section-padding bg-gradient-to-b from-forest to-forest-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #B7F36B 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
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
              Applications
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Where <span className="text-gradient">SensoraQ</span> can be applied
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Multi-sensor inspection for diverse industrial environments.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="tech-card group relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-lime" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-4 group-hover:text-lime transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-sage text-sm leading-relaxed mb-6">
                    {app.description}
                  </p>

                  <div className="pt-4 border-t border-lime/10">
                    <div className="text-xs font-mono text-lime uppercase tracking-wider mb-1">
                      Use Case
                    </div>
                    <div className="text-sm text-white font-medium">
                      {app.useCase}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industrial Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-forest-light/80 to-forest/60 border border-lime/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-6 text-center">
              Designed for Industrial Environments
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-heading font-bold text-lime mb-3">
                  Target Industries
                </h4>
                <ul className="space-y-2 text-sage">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Fruit processing and sorting facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Food packaging and distribution centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Agricultural export operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Quality control laboratories</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-lime mb-3">
                  Integration Considerations
                </h4>
                <ul className="space-y-2 text-sage">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Modular sensor configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Existing conveyor system compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Customizable quality parameters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>Data logging and reporting capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sage text-sm border-t border-lime/10 pt-6">
              SensoraQ is designed as a proposed system for industrial food quality inspection. 
              Deployment scenarios are based on the system architecture and intended capabilities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Applications;
