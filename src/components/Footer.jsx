import { motion } from 'framer-motion';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Technology', href: '#technology' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Applications', href: '#applications' },
    ],
    company: [
      { label: 'About', href: '#team' },
      { label: 'The Problem', href: '#problem' },
    ],
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest border-t border-lime/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lime to-sage rounded-xl flex items-center justify-center">
                <span className="text-forest text-2xl font-bold font-heading">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-white">
                  SensoraQ
                </span>
                <span className="text-xs text-sage font-mono tracking-wider uppercase">
                  Smart Food Intelligence
                </span>
              </div>
            </div>
            <p className="text-sage leading-relaxed mb-6 max-w-md">
              Multi-sensor food quality detection and automated separation for smarter processing.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sage hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sage hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lime/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sage text-sm">
              © {currentYear} SensoraQ. Intelligent food quality inspection.
            </div>
            <div className="flex items-center space-x-6 text-sage text-sm">
              <span className="font-mono">
                Built with React + Vite + Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
