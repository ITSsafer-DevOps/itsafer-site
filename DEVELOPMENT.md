# Local Development Guide

Guide for developing and testing the portfolio website locally before deployment.

## 🔧 Local Development Setup

### Method 1: Simple HTTP Server (Recommended for Quick Testing)

#### Using Python 3

```bash
cd /path/to/ITSsafer-Portfolio
python3 -m http.server 8000
```

Visit: http://localhost:8000

#### Using Python 2

```bash
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed)

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit: http://localhost:8080
```

#### Using Ruby

```bash
cd /path/to/ITSsafer-Portfolio
ruby -run -ehttpd . -p8000
```

### Method 2: Using Jekyll Locally

Requires Ruby and Jekyll installation.

#### Install Jekyll

```bash
# Install Ruby first (if not installed)
# macOS:
brew install ruby

# Ubuntu/Debian:
sudo apt-get install ruby ruby-dev

# Then install Jekyll
gem install jekyll bundler
```

#### Run Local Server

```bash
cd /path/to/ITSsafer-Portfolio
jekyll serve --baseurl ""
```

Visit: http://localhost:4000

### Method 3: Visual Studio Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically at `http://localhost:5500`

### Method 4: Using a Full Web Stack

For more advanced development:

#### Using Docker

```bash
# Create Dockerfile in project root
docker build -t portfolio-dev .
docker run -p 8000:80 portfolio-dev
```

#### Using Node.js + Express

```bash
# Create simple Express server
npm init -y
npm install express

# Create server.js
```

## 🧪 Testing Checklist

### Visual Testing

- [ ] All sections display correctly
- [ ] Colors match design specifications
- [ ] Typography is readable
- [ ] Spacing and alignment look good
- [ ] Images load properly (if any)

### Functional Testing

- [ ] Navigation links work smoothly
- [ ] Scroll behavior is smooth
- [ ] Buttons are clickable
- [ ] Links open in correct tabs
- [ ] Forms submit correctly (if any)

### Responsive Testing

#### Desktop (1200px+)
- [ ] Full layout displays correctly
- [ ] All elements visible
- [ ] Proper spacing and padding

#### Tablet (768px - 1199px)
- [ ] Grid adapts properly
- [ ] Navigation is responsive
- [ ] Text is readable

#### Mobile (< 768px)
- [ ] Single column layout works
- [ ] Touch targets are adequate
- [ ] Navigation menu is accessible

#### Small Mobile (< 480px)
- [ ] Extra narrow layout displays
- [ ] All text is readable
- [ ] Buttons are clickable

### Browser Testing

Test on multiple browsers:

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🔍 Testing Tools

### Browser DevTools

**Chrome/Edge:**
- Press `F12` or `Ctrl+Shift+I`
- Use Device Toolbar (Ctrl+Shift+M) for responsive testing

**Firefox:**
- Press `F12` or `Ctrl+Shift+I`
- Use Responsive Design Mode (Ctrl+Shift+M)

**Safari:**
- Enable Developer Menu in Preferences
- Press `Cmd+Option+I`

### Console Debugging

Open browser console to check for errors:

```javascript
// Test smooth scroll
document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});

// Check DOM elements
document.querySelectorAll('.project-card').length

// Test animations
document.querySelectorAll('.project-card')[0].style.opacity = '0.5'
```

## 📊 Performance Testing

### Lighthouse (Chrome)

1. Open DevTools (F12)
2. Click Lighthouse tab
3. Generate report
4. Check Performance, Accessibility, SEO scores

### PageSpeed Insights

Visit: https://pagespeed.web.dev/
- Enter your localhost URL
- Check recommendations

### GTmetrix

Visit: https://gtmetrix.com/
- Test performance
- Check waterfall charts

## 🎨 CSS Testing

### CSS Validation

Visit: https://jigsaw.w3.org/css-validator/
- Validate your `styles.css`
- Check for errors and warnings

### Responsive Design Issues

Common issues to test:
- [ ] Breakpoints work correctly
- [ ] Flexbox/Grid responsive
- [ ] Typography scales properly
- [ ] Media queries function
- [ ] No horizontal scrolling on mobile

## 🔐 Accessibility Testing

### Manual Testing

- [ ] Keyboard navigation works (Tab, Enter key)
- [ ] Color contrast is sufficient
- [ ] Images have alt text
- [ ] Headings are in order (h1, h2, h3...)
- [ ] Links are descriptive

### Using Accessibility Tools

**WAVE (WebAIM)**
- Chrome Extension: "WAVE"
- Highlights accessibility issues

**axe DevTools**
- Chrome Extension: "axe DevTools"
- Detailed accessibility audit

## 📝 Common Issues & Solutions

### Issue: CSS Not Loading

**Solution:**
- Check file path in HTML
- Verify filename capitalization
- Clear browser cache (Ctrl+Shift+Delete)
- Check DevTools Network tab

### Issue: Smooth Scroll Not Working

**Solution:**
- Check JavaScript is enabled
- Verify script.js is loaded
- Check browser console for errors
- Test in different browser

### Issue: Images Not Loading

**Solution:**
- Verify image paths
- Check image file exists
- Use correct file extensions
- Test with placeholder images

### Issue: Links Not Working

**Solution:**
- Verify href attributes
- Check file names match
- Ensure files are in correct location
- Test URLs in browser directly

## 🚀 Pre-Deployment Testing

### Final Checklist

1. **Local Server**
   - [ ] Run local server
   - [ ] Check no errors in console
   - [ ] Verify all pages load

2. **Functionality**
   - [ ] All links work
   - [ ] Animations smooth
   - [ ] Navigation responsive

3. **Responsiveness**
   - [ ] Test on multiple screen sizes
   - [ ] Check touch targets on mobile
   - [ ] Verify no layout breaks

4. **Cross-Browser**
   - [ ] Test major browsers
   - [ ] Check mobile browsers
   - [ ] Verify CSS compatibility

5. **Performance**
   - [ ] Check page load time
   - [ ] Run Lighthouse audit
   - [ ] Optimize images if needed

6. **Accessibility**
   - [ ] Check contrast ratios
   - [ ] Test keyboard navigation
   - [ ] Verify semantic HTML

## 🔄 Git Workflow for Local Development

```bash
# Clone repository
git clone https://github.com/USERNAME/portfolio.git
cd portfolio

# Create development branch
git checkout -b development

# Make changes and commit
git add .
git commit -m "Update: [describe changes]"

# Push to GitHub
git push origin development

# Create Pull Request and merge to main
```

## 📚 Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [Web Accessibility](https://www.w3.org/WAI/)

## ✅ Ready for Deployment?

After completing all testing, you're ready to:
1. Push to GitHub
2. Enable GitHub Pages
3. Share your portfolio!

---

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)
