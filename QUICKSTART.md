# SensoraQ - Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Install Node.js
If you don't have Node.js installed:
- Visit https://nodejs.org/
- Download and install the LTS (Long Term Support) version
- Verify installation: `node --version` (should show v16 or higher)

### Step 2: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Recharts (charts)

### Step 3: Start the Development Server
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## 🎯 First Things to Customize

### 1. Update Team Information
**File**: `src/data/team.js`

Replace placeholder names with actual team members:
```javascript
{
  name: 'Your Name',
  role: 'Your Role',
  expertise: 'Your Expertise',
  image: '/images/team/your-photo.jpg' // Optional
}
```

### 2. Add Team Photos (Optional)
1. Create folder: `public/images/team/`
2. Add photos (recommended size: 400x400px, JPG or PNG)
3. Update image paths in `src/data/team.js`

### 3. Add Contact Information
**File**: `src/components/Contact.jsx`

Replace the placeholder text at the bottom with your actual contact details.

### 4. Update Social Links
**File**: `src/components/Footer.jsx`

Replace `#` in social media links with your actual profiles:
```javascript
<a href="https://twitter.com/yourhandle">
<a href="https://linkedin.com/in/yourprofile">
```

## 📱 Sections Overview

The website contains these sections in order:

1. **Hero** - Main landing with animated product demo
2. **Problem** - 3 key challenges (slow inspection, hidden spoilage, food waste)
3. **Solution** - 3-stage process (Sense → Analyse → Separate)
4. **How It Works** - Interactive 9-step process flow
5. **Technology** - 8 sensor technologies (expandable cards)
6. **Quality Demo** - Interactive dashboard with 4 fruit samples
7. **Conveyor Animation** - Automated sorting visualization
8. **Benefits** - 4 key advantages
9. **Applications** - 5 industrial use cases
10. **Team** - Team profiles and project info
11. **Contact** - Final CTA
12. **Footer** - Links and branding

## 🎨 Color Reference

Quick reference for the brand colors (already configured in Tailwind):

- **forest** - Dark green background `#10271B`
- **lime** - Bright accent `#B7F36B`
- **sage** - Light green text `#DCE8D1`
- **ivory** - Warm white `#F7F7EF`
- **amber** - Warning `#F2AD45`
- **error** - Red `#E45D56`

Use in components:
```jsx
<div className="bg-forest text-lime border-sage">
```

## 🔧 Common Tasks

### Add a New Sensor
**File**: `src/data/sensors.js`

Add to the `sensors` array:
```javascript
{
  id: 'your-sensor',
  name: 'Sensor Name',
  icon: 'IconName', // From Lucide React
  shortDesc: 'Brief description',
  description: 'Full description...',
  role: 'What it does',
  technologies: ['Tech 1', 'Tech 2'],
  color: 'from-blue-400/20 to-blue-400/5'
}
```

### Add a New Demo Sample
**File**: `src/data/demoData.js`

Add to the `demoSamples` array with sensor readings and analysis results.

### Change Font
**File**: `index.html` and `tailwind.config.js`

1. Update Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js` under `theme.extend.fontFamily`

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## 📤 Deployment Options

### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-detects Vite configuration

### Option 3: GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/sensoraq",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Port 3000 already in use
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001  // or any available port
}
```

### Animations not smooth
Check if `prefers-reduced-motion` is enabled in browser settings. The site respects this preference.

### Icons not showing
Make sure the icon name in data files matches Lucide React icon names exactly.

## 💡 Tips

1. **Keep it Simple**: Don't add too many custom features initially
2. **Test Responsive**: Check on mobile devices or use browser dev tools
3. **Use Real Images**: Replace emoji placeholders with actual photos when available
4. **Update Regularly**: Keep dependencies updated with `npm update`
5. **Performance**: The site is optimized - avoid adding heavy libraries

## 📞 Need Help?

- Check the main `README.md` for detailed documentation
- Review component files - they're well-commented
- All data is in the `src/data/` folder for easy editing

---

**You're all set! Start customizing and make SensoraQ shine! 🌟**
