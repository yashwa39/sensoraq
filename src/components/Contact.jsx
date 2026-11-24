import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageSquare, Lightbulb } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-forest-light to-forest relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-lime font-mono text-sm uppercase tracking-wider border border-lime/30 rounded-full px-6 py-2 bg-lime/10">
                Get In Touch
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Let's build a smarter standard for{' '}
              <span className="text-gradient">food quality.</span>
            </h2>
            
            <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
              Explore multi-sensor inspection and automated separation for safer, smarter food processing.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-forest-light/80 to-forest/80 backdrop-blur-sm border border-lime/20 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-lime" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  Project Inquiries
                </h3>
                <p className="text-sage text-sm">
                  Questions about technology or applications
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-lime" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  Collaboration
                </h3>
                <p className="text-sage text-sm">
                  Research partnerships or technical discussions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-lime" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  General Contact
                </h3>
                <p className="text-sage text-sm">
                  Questions or feedback about SensoraQ
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-center space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <button 
                  onClick={() => {
                    const element = document.getElementById('team');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="btn-secondary"
                >
                  Meet the Team
                </button>
              </div>

              <div className="pt-6 border-t border-lime/10">
                <p className="text-sage text-sm">
                  <span className="text-lime font-semibold">Contact information:</span> Add your preferred contact details here when available
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
