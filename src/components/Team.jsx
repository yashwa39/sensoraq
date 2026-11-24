import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { team } from '../data/team';
import { User } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" ref={ref} className="section-padding bg-forest relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />

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
              The Team
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Building the future of{' '}
            <span className="text-gradient">food quality intelligence</span>
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary team bringing together expertise in sensors, automation, digital systems, and food technology.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="tech-card group text-center"
            >
              {/* Profile Image Placeholder */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden border border-lime/20">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-lime/40" />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold font-heading text-white mb-2">
                {member.name}
              </h3>
              
              <p className="text-lime font-mono text-sm mb-4">
                {member.role}
              </p>

              <div className="pt-4 border-t border-lime/10">
                <p className="text-sage text-sm leading-relaxed">
                  {member.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About the Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-forest-light/80 to-forest/60 border border-lime/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-6 text-center">
              About SensoraQ
            </h3>
            
            <div className="space-y-6 text-sage leading-relaxed">
              <p>
                SensoraQ is a proposed multi-sensor food quality detection and automated separation system developed to address challenges in industrial food processing. The project integrates diverse sensing technologies with digital processing and mechanical automation.
              </p>
              
              <p>
                The system architecture combines gas sensors, temperature and humidity monitoring, pH measurement, colour analysis, ultrasonic inspection, and advanced spectroscopic techniques (FTIR and NMR). These sensor inputs are processed through signal conditioning circuits, digital logic gates, and microcontroller systems (Arduino and Raspberry Pi) to make quality classification decisions.
              </p>

              <p>
                Based on the analysis, an automated sorting mechanism separates products into appropriate pathways. The goal is to improve food quality monitoring, detect potential spoilage and adulteration, reduce food wastage, and enhance processing efficiency.
              </p>

              <div className="pt-6 border-t border-lime/10 mt-6">
                <p className="text-sm text-sage">
                  <span className="text-lime font-semibold">Note:</span> SensoraQ is presented as a proposed system architecture. 
                  Sensor technologies and processing methods are based on established principles in food science and quality control. 
                  Performance characteristics are illustrative and require validation through prototype development and testing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
