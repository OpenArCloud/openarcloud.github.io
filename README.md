# OpenArCloud Website - Lean Sprint Plan

## 🎯 Mission: Ship in 3-4 Evenings
Build a clean, modern website that clearly explains OSCP and gets developers to the GitHub repos. That's it.

## ⚡ Tech Stack
- **11ty** - Dead simple static site generator
- **GitHub Pages** - Free hosting, zero config
- **Markdown** - All content in markdown
- **Minimal CSS** - Maybe Tailwind or just vanilla CSS
- **No JavaScript** - Unless absolutely needed

## 🗺️ Lean Site Structure (6-8 pages MAX)

```
/
├── index.md           # Homepage - What is OSCP + Get Started
├── platform.md        # OSCP technical overview
├── github.md          # List of repos with descriptions
├── about.md           # Mission + current team
├── join.md            # Link to Patreon + partner info
└── contact.md         # Simple contact info
```

## 📝 Page Breakdown

### Homepage (index.md)
- **Hero**: "Open Spatial Computing Platform" 
- **One-liner**: What OSCP is (30 words max)
- **Video embed**: If you have a good YouTube video
- **3 Big CTAs**:
  - → View on GitHub
  - → Read the Docs
  - → Join Community
- **Partner logos** (if you must)

### Platform (platform.md)
- **What is OSCP** (2-3 paragraphs)
- **Core Components** (bullet list):
  - Spatial Service Discovery
  - GeoPose Protocol  
  - Spatial Content Discovery
- **Architecture diagram** (one simple image)
- **Links to GitHub repos**

### GitHub (github.md)
- **Quick Start** section
- **Repository list** with 1-line descriptions:
  - oscp-geopose-protocol - GeoPose implementation
  - oscp-spatial-content-discovery - Content discovery service
  - etc.
- **Contributing** guidelines (brief)

### About (about.md)
- **Mission** (2 paragraphs)
- **Current Leadership** (names + titles only)
- **Contact info**

### Join (join.md)
- **Individual Membership** → Link to Patreon
- **Organizations** → Contact us
- **Why Join** (3 bullet points)

### Contact (contact.md)
- Email
- GitHub org link
- Maybe a simple form (Formspree or similar)

## 🏃 Sprint Plan

### Evening 1: Setup & Structure
```bash
# 1. Initialize 11ty project
npm init -y
npm install @11ty/eleventy

# 2. Basic folder structure
mkdir src src/_includes src/_includes/layouts

# 3. Create base layout
# 4. Set up GitHub repo
# 5. Configure GitHub Pages
```

### Evening 2: Core Content
- Write homepage content
- Write platform overview
- Create GitHub repos list
- Add about page

### Evening 3: Design & Polish
- Basic CSS (responsive, clean)
- Navigation
- Footer
- Test on mobile
- Deploy to GitHub Pages

### Evening 4: Buffer/Launch
- Fix any issues
- Add analytics (if needed)
- Final review
- Ship it!

## 📁 Minimal File Structure

```
oarc-website/
├── src/
│   ├── _includes/
│   │   └── layouts/
│   │       └── base.njk
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── oscp-architecture.png
│   ├── index.md
│   ├── platform.md
│   ├── github.md
│   ├── about.md
│   ├── join.md
│   └── contact.md
├── .eleventy.js
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Design Approach
- **Font**: System fonts (no Google Fonts)
- **Colors**: Black, white, one accent color
- **Layout**: Single column, max-width 800px
- **Mobile**: Naturally responsive (it's just text)

## ✂️ What We're NOT Doing
- ❌ Working groups pages
- ❌ Events/News section  
- ❌ Testbeds
- ❌ Blog
- ❌ Complex membership system
- ❌ Search
- ❌ Dark mode
- ❌ Animations
- ❌ Three.js visualizations
- ❌ Multiple layouts
- ❌ Image galleries

## 📋 Quick Start Checklist

### Pre-Sprint
- [ ] Gather any must-have images (logo, architecture diagram)
- [ ] Get YouTube video URL if exists
- [ ] List of GitHub repos to feature
- [ ] Patreon account setup

### Sprint
- [ ] Evening 1: Setup complete, test deployment works
- [ ] Evening 2: All content written and added
- [ ] Evening 3: Looks good on mobile and desktop
- [ ] Evening 4: Live on GitHub Pages

## 🚀 11ty Quickstart

```bash
# Clone and go
git clone [your-repo]
cd oarc-website
npm install
npm run serve  # Local dev
npm run build  # Build for production
```

### Minimal .eleventy.js
```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
```

### Minimal package.json scripts
```json
{
  "scripts": {
    "serve": "eleventy --serve",
    "build": "eleventy"
  }
}
```

## 🎯 Success Criteria
- Loads fast (< 2 seconds)
- Clear what OSCP is
- Easy to find GitHub repos
- Works on mobile
- Can update content easily
- Deployed and live

## 💭 Remember
- Perfect is the enemy of done
- You can always iterate later
- Focus on developers finding the GitHub repos
- Everything else is secondary

---

**That's it. No more planning. Start coding.**