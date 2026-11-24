# SensoraQ - Deployment Guide

Complete guide for deploying your SensoraQ website to production.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Updated team member information in `src/data/team.js`
- [ ] Added team photos (optional) to `public/images/team/`
- [ ] Updated contact information in `src/components/Contact.jsx`
- [ ] Updated social media links in `src/components/Footer.jsx`
- [ ] Added actual product images if available
- [ ] Tested the site on mobile, tablet, and desktop
- [ ] Verified all links and navigation work correctly
- [ ] Checked that animations are smooth
- [ ] Reviewed all content for accuracy

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**
- Free tier with generous limits
- Automatic HTTPS
- Continuous deployment from Git
- Fast global CDN
- Easy custom domain setup

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SensoraQ website"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to https://netlify.com and sign up
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

**Live in ~2 minutes!** 🎉

---

### Option 2: Vercel (Also Excellent)

**Why Vercel?**
- Built by Next.js creators
- Excellent performance
- Free tier available
- Automatic preview deployments

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy on Vercel**
   - Go to https://vercel.com and sign up
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite - just click Deploy
   - Done!

3. **Custom Domain**
   - Go to Project settings → Domains
   - Add your domain and configure DNS

---

### Option 3: GitHub Pages (Free, but requires extra setup)

**Why GitHub Pages?**
- Completely free
- Integrated with GitHub
- Good for portfolio/academic projects

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/sensoraq/', // Replace with your repo name
     server: {
       port: 3000,
       open: true
     }
   })
   ```

3. **Update package.json**
   Add these lines:
   ```json
   {
     "homepage": "https://yourusername.github.io/sensoraq",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site will be live at: `https://yourusername.github.io/sensoraq`

---

### Option 4: Self-Hosted (VPS/Cloud)

**For more control, host on your own server.**

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure web server** (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Set up HTTPS** using Let's Encrypt:
   ```bash
   certbot --nginx -d yourdomain.com
   ```

---

## 🔧 Build Optimization

### 1. Optimize Images
Before deploying, compress images:
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target: < 200KB per image
- Use WebP format when possible

### 2. Environment Variables (If needed)
Create `.env` file (don't commit to Git):
```env
VITE_API_URL=your-api-url
VITE_CONTACT_EMAIL=your-email
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### 3. Analytics (Optional)
Add Google Analytics by adding to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🌐 Custom Domain Setup

### DNS Configuration

For most hosting providers, set these DNS records:

**A Records** (for root domain):
```
Type: A
Name: @
Value: [your-hosting-ip]
```

**CNAME Record** (for www):
```
Type: CNAME
Name: www
Value: your-site.netlify.app (or your hosting URL)
```

Wait 1-24 hours for DNS propagation.

---

## 🔒 Security Best Practices

1. **HTTPS Only**
   - All modern hosting provides free HTTPS
   - Never deploy without SSL certificate

2. **Environment Variables**
   - Never commit API keys or secrets
   - Use hosting provider's environment variables

3. **Dependencies**
   - Keep dependencies updated: `npm update`
   - Check for vulnerabilities: `npm audit`

---

## 📊 Performance Monitoring

### After Deployment, Test:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Target: 90+ score

2. **GTmetrix**
   - https://gtmetrix.com/
   - Check loading times

3. **Lighthouse** (Chrome DevTools)
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Expected Performance:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+

---

## 🔄 Continuous Deployment

### Automatic Updates with Netlify/Vercel

Once connected to GitHub:
1. Make changes locally
2. Commit and push to GitHub
3. Site automatically rebuilds and deploys
4. See live changes in ~1 minute

**Pro Tip**: Create a `develop` branch for testing before merging to `main`.

---

## 📱 Mobile Optimization

The site is already mobile-optimized, but verify:

1. Test on actual devices if possible
2. Use Chrome DevTools device emulation
3. Test all interactive features
4. Verify text is readable without zooming
5. Check that buttons are easily tappable

---

## 🎯 SEO Optimization

### Update meta tags in `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="SensoraQ - Smart Food Quality Detection and Automated Separation System using multi-sensor inspection technology" />
  <meta name="keywords" content="food quality, sensor technology, food inspection, automated sorting, food safety" />
  <meta name="author" content="SensoraQ Team" />
  
  <!-- Open Graph (Facebook/LinkedIn) -->
  <meta property="og:title" content="SensoraQ | Smart Food Quality Intelligence" />
  <meta property="og:description" content="Multi-sensor food quality detection and automated separation system" />
  <meta property="og:image" content="/images/og-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SensoraQ | Smart Food Quality Intelligence" />
  <meta name="twitter:description" content="Multi-sensor food quality detection and automated separation system" />
  <meta name="twitter:image" content="/images/twitter-card.jpg" />
  
  <title>SensoraQ | Smart Food Quality Intelligence</title>
</head>
```

### Create Social Media Images:
- **OG Image**: 1200x630px (for Facebook/LinkedIn sharing)
- **Twitter Card**: 1200x675px
- Save in `public/images/`

---

## 🐛 Common Deployment Issues

### Issue: Blank page after deployment
**Solution**: Check `base` path in `vite.config.js` matches your deployment URL

### Issue: 404 on page refresh
**Solution**: Configure hosting for SPA (Single Page App)
- Netlify: Automatic
- Vercel: Automatic  
- Others: Redirect all routes to `index.html`

### Issue: Images not loading
**Solution**: Use relative paths starting with `/` (e.g., `/images/logo.png`)

### Issue: Slow loading
**Solution**: 
- Compress images
- Enable gzip compression on server
- Use CDN (most modern hosts provide this)

---

## 📈 Post-Deployment

### Share Your Website:
- [ ] Add to your GitHub profile README
- [ ] Share on LinkedIn
- [ ] Add to your portfolio
- [ ] Submit to relevant showcases
- [ ] Share with academic supervisors/reviewers

### Monitor:
- Check analytics weekly
- Monitor uptime
- Review user feedback
- Update content as needed

---

## 🎉 You're Live!

Your SensoraQ website is now live and ready to impress visitors with its premium design and smooth interactions.

**Need Help?**
- Check hosting provider docs
- Review the main README.md
- Consult Vite deployment guide: https://vitejs.dev/guide/static-deploy

**Success looks like:**
- ✅ Fast loading (< 3 seconds)
- ✅ Mobile responsive
- ✅ HTTPS enabled
- ✅ All sections working
- ✅ Animations smooth
- ✅ SEO optimized

---

Built with precision. Deployed with confidence. Ready to showcase! 🚀
