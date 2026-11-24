import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GeometricShapes = ({ variant = 'default' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const shapes = {
    default: (
      <>
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-20 right-10 w-48 h-48 border-2 border-lime/10 rounded-full"
        />
        <motion.div
          style={{ y: y2, opacity, rotate }}
          className="absolute bottom-20 left-10 w-32 h-32 border-2 border-sage/10"
        />
      </>
    ),
    circles: (
      <>
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-10 right-20 w-64 h-64 border-2 border-lime/10 rounded-full"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute top-40 right-40 w-32 h-32 border-2 border-lime/15 rounded-full"
        />
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute bottom-20 left-20 w-40 h-40 border-2 border-sage/10 rounded-full"
        />
      </>
    ),
    squares: (
      <>
        <motion.div
          style={{ y: y1, opacity, rotate }}
          className="absolute top-32 right-16 w-56 h-56 border-2 border-lime/10 rotate-12"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-32 left-16 w-40 h-40 border-2 border-sage/10 rotate-45"
        />
      </>
    ),
    mixed: (
      <>
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-16 right-24 w-48 h-48 border-2 border-lime/10 rounded-full"
        />
        <motion.div
          style={{ y: y2, opacity, rotate }}
          className="absolute top-48 right-10 w-24 h-24 border-2 border-lime/15 rotate-45"
        />
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute bottom-24 left-16 w-56 h-56 border-2 border-sage/10"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-10 left-48 w-32 h-32 border-2 border-sage/15 rounded-full"
        />
      </>
    ),
    triangles: (
      <>
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-20 right-32 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-lime/10"
        />
        <motion.div
          style={{ y: y2, opacity, rotate }}
          className="absolute bottom-32 left-24 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[85px] border-b-sage/10"
        />
      </>
    )
  };

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes[variant] || shapes.default}
    </div>
  );
};

export default GeometricShapes;
