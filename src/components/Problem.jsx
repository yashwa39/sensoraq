import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Eye, TrendingDown } from 'lucide-react';
import GeometricShapes from './GeometricShapes';

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      number: '01',
      icon: Clock,
      title: 'Slow manual inspection',
      description: 'Visual inspection is time-consuming and misses internal defects.',
      impact: 'Processing bottlenecks'
    },
    {
      number: '02',
      icon: Eye,
      title: 'Hidden spoilage',
      description: 'Spoiled food often looks normal. Chemical changes escape visual detection.',
      impact: 'Quality control failures'
    },
    {
      number: '03',
      icon: TrendingDown,
      title: 'Food wastage',
      description: 'Imprecise assessment leads to false rejections or missed defects.',
      impact: 'Financial losses'
    }
  ];

  return (
    <section id="problem" ref={ref} className="section-padding bg-gradient-to-b from-forest to-forest-light relative overflow-hidden">
      {/* Animated Geometric Shapes */}
      <GeometricShapes variant="circles" />

      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />

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
              The Challenge
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Food quality deserves more than{' '}
            <span className="text-gradient">a second look.</span>
          </h2>
          
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            Industrial food processing faces challenges that eyes alone cannot solve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="tech-card group"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-lime" />
                  </div>
                  <span className="text-6xl font-bold font-heading text-lime/10">
                    {problem.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-white mb-4">
                  {problem.title}
                </h3>

                <p className="text-sage leading-relaxed mb-4">
                  {problem.description}
                </p>

                <div className="pt-4 border-t border-lime/10">
                  <span className="text-sm font-mono text-error uppercase tracking-wider">
                    → {problem.impact}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-forest-light to-forest-light/50 border border-lime/20 rounded-2xl px-12 py-8">
            <p className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2">
              That's where intelligent inspection makes the difference.
            </p>
            <p className="text-sage">
              Multi-sensor analysis reveals what the eye cannot see.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
