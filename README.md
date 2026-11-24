# SensoraQ - Smart Food Quality Intelligence

A premium, highly interactive website for SensoraQ, a proposed multi-sensor food quality detection and automated separation system.

## 🌟 Features

- **Cinematic Hero Section** - Immediately communicates the product purpose with interactive visualizations
- **Interactive Quality Demo** - Live demonstration dashboard with realistic sensor readings
- **Animated Process Flow** - Step-by-step visualization of how the system works
- **Conveyor Animation** - Real-time sorting visualization with multiple quality pathways
- **Comprehensive Technology Stack** - Detailed sensor and processing architecture
- **Responsive Design** - Flawless experience across desktop, tablet, and mobile
- **Premium Animations** - Smooth, 60 FPS animations using Framer Motion
- **Dark Theme** - Sophisticated forest green and lime color scheme

## 🎨 Design System

### Colors
- **Primary Background**: `#10271B` (Forest)
- **Primary Accent**: `#B7F36B` (Lime)
- **Secondary Green**: `#315B3E` (Forest Light)
- **Sage**: `#DCE8D1`
- **Warm Ivory**: `#F7F7EF`
- **Warning Amber**: `#F2AD45`
- **Error Red**: `#E45D56`

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter
- **Code/Technical**: IBM Plex Mono

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (version 16 or higher recommended).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sensoraq/
├── public/
│   ├── favicon.svg
│   └── images/          # Add product images here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── ProcessFlow.jsx
│   │   ├── Technology.jsx
│   │   ├── QualityDemo.jsx
│   │   ├── ConveyorAnimation.jsx
│   │   ├── Benefits.jsx
│   │   ├── Applications.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── sensors.js       # Sensor and process data
│   │   ├── team.js          # Team member information
│   │   └── demoData.js      # Quality demo samples
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Key Sections

1. **Hero** - Cinematic introduction with animated product visualization
2. **Problem** - Three key challenges in food quality inspection
3. **Solution** - Three-stage process: Sense → Analyse → Separate
4. **How It Works** - Interactive 9-step process flow
5. **Technology** - 8 sensor technologies with expandable details
6. **Quality Demo** - Interactive demonstration dashboard with 4 sample scenarios
7. **Conveyor Animation** - Animated sorting visualization
8. **Benefits** - 4 key benefits with business value
9. **Applications** - 5 industrial use cases
10. **Team** - Team member profiles and project overview
11. **Contact** - Call-to-action and inquiry information
12. **Footer** - Navigation and branding

## 🔧 Customization

### Update Team Information

Edit `src/data/team.js`:
- Add team member names, roles, and expertise
- Add profile images to `public/images/team/`
- Update image paths in the team data

### Add Real Product Images

Replace emoji placeholders in `src/components/Hero.jsx` and `src/components/QualityDemo.jsx` with actual product images:
- Place images in `public/images/`
- Update image references in components

### Update Contact Information

Edit `src/components/Contact.jsx` to add:
- Email addresses
- Phone numbers
- Physical address
- Social media links

### Modify Demo Data

Edit `src/data/demoData.js` to:
- Add more sample scenarios
- Adjust sensor readings
- Modify quality parameters

## 🎨 Animation Features

- Smooth scroll navigation
- Scroll-triggered section reveals
- Interactive hover states
- Animated sensor scanning effects
- Conveyor belt product flow
- Quality analysis transitions
- Responsive to `prefers-reduced-motion`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Recharts** - Data visualization (available for future use)

## ⚡ Performance

- Optimized animations for 60 FPS
- Lazy-loaded sections with IntersectionObserver
- Responsive images
- Minimal dependencies
- Production build optimization

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- All sensor data in the demo is **illustrative** and not from actual prototype measurements
- The website clearly disclaims that SensoraQ is a **proposed system**
- No fabricated performance statistics, certifications, or customer testimonials
- Team information should be updated with actual names and roles when available

## 📄 License

This project is part of an academic/research presentation for SensoraQ.

## 🤝 Contributing

This is a project-specific website. For inquiries about the SensoraQ system itself, please use the contact information on the website.

---

**Built with precision. Designed for impact. Ready to showcase intelligent food quality inspection.**
