# GitHub Pages Deployment Guide

Complete step-by-step guide for deploying the ITSsafer Portfolio website to GitHub Pages.

## 🚀 Deployment Options

### Option A: Portfolio Repository (Recommended)

This option keeps the portfolio separate from your profile page.

#### Step 1: Create Repository

1. Go to GitHub.com and log in to your account
2. Click **+** icon → **New repository**
3. Repository name: `portfolio` (or `itssafer-portfolio`)
4. Description: "ITSsafer DevOps Professional Portfolio"
5. Choose **Public** (required for GitHub Pages)
6. Click **Create repository**

#### Step 2: Push Files

```bash
# Clone or navigate to your portfolio directory
cd /path/to/ITSsafer-Portfolio

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select `main` branch
5. Select `/ (root)` as the folder
6. Click **Save**

**Your portfolio is now live at:** `https://USERNAME.github.io/portfolio`

---

### Option B: Profile Page Repository

Merge portfolio with your GitHub profile page.

#### Step 1: Create Profile Repository

1. Create repository named: `USERNAME.github.io`
   - Replace `USERNAME` with your GitHub username
   - Example: `ITSsafer-DevOps.github.io`

2. Make it **Public**

#### Step 2: Push Files

```bash
cd /path/to/ITSsafer-Portfolio

git init
git add .
git commit -m "GitHub Pages portfolio"

# Replace USERNAME with your GitHub username
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

git branch -M main
git push -u origin main
```

#### Step 3: Process Automatic

GitHub Pages automatically publishes from `USERNAME.github.io` repositories.

**Your site is now live at:** `https://USERNAME.github.io`

---

## 📋 Pre-Deployment Checklist

- [ ] All files are included (index.html, styles.css, script.js, README.md)
- [ ] GitHub links are correct
- [ ] Project descriptions are accurate
- [ ] Images load correctly locally
- [ ] Links work properly
- [ ] Website is responsive on mobile
- [ ] No console errors in browser

## 🔧 Post-Deployment Verification

### Check Deployment Status

1. Go to repository **Settings** → **Pages**
2. Look for message: "Your site is published at: https://..."
3. Click the link to verify

### Test Your Site

- Visit your live URL
- Test navigation links
- Verify all projects display correctly
- Check responsive design on mobile
- Confirm GitHub links work

### Monitor Build Status

1. Go to repository **Actions** tab
2. Look for "pages build and deployment" workflow
3. Check for green checkmark (success) or red ✕ (failed)

## 🌐 Custom Domain (Optional)

### Add Custom Domain

1. **Domain Setup**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update DNS records to point to GitHub Pages servers

2. **GitHub Configuration**
   - Repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Add `CNAME` file to root with your domain name

3. **Example DNS Records**
   ```
   Type    Name    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     USERNAME.github.io
   ```

## 🔒 SSL/HTTPS

GitHub Pages provides free HTTPS automatically:

1. Repository Settings → Pages
2. Check "Enforce HTTPS"
3. Wait a few minutes for certificate generation
4. Your site is now served over HTTPS

## 📊 SEO & Metadata

### Update Meta Tags

Edit `index.html` to customize:

```html
<meta name="description" content="Your custom description">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
```

### Add Favicon

1. Create or download a favicon.ico file
2. Place in root directory
3. Add to `index.html`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico">
   ```

## 🚨 Troubleshooting

### Site Not Loading

- Wait 2-3 minutes after push
- Check Actions tab for build errors
- Verify repository is Public
- Check Settings → Pages is enabled

### Styling Not Showing

- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check CSS file is in root directory

### Links Not Working

- Verify URLs in HTML are correct
- Check file names are exact (case-sensitive)
- Ensure relative paths are correct

### 404 Error

- Verify index.html is in root directory
- Check file naming and capitalization
- Ensure Settings → Pages points to correct branch/folder

## 📈 Analytics & Tracking (Optional)

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html` before closing `</head>` tag:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

## 🔄 Updating Your Portfolio

### Add Changes to Live Site

1. Make changes locally
2. Test in browser
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio: [describe changes]"
   git push origin main
   ```
4. Wait 1-2 minutes for deployment
5. Refresh your live site

### Update Project Information

1. Edit project details in `index.html`
2. Modify `styles.css` for design changes
3. Update `script.js` for functionality
4. Commit and push changes

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Jekyll Theme](https://pages.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## ✅ Final Checklist

- [ ] Repository created and public
- [ ] Files pushed to main branch
- [ ] GitHub Pages enabled in Settings
- [ ] Site is live and accessible
- [ ] All links working correctly
- [ ] Mobile responsive verified
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Navigation working smoothly

---

## 🎉 Success!

Your ITSsafer DevOps portfolio is now live! Share your portfolio URL with others to showcase your projects.

**Portfolio URL:** `https://[your-url]/portfolio` or `https://[domain]`

---

For additional help, visit:
- GitHub Pages: https://pages.github.com/
- Your Repository: https://github.com/USERNAME
