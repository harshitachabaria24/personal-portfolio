# Portfolio Customization Guide

Welcome to your "Quiet Power" portfolio! This guide will help you customize it with your own information.

## 🎨 Theme Colors

Your portfolio uses these exact colors:
- **Warm Beige** (#F5EFE6) - Main background
- **Soft Cream** (#EDE4D8) - Section backgrounds & cards
- **Deep Charcoal** (#2C2C2C) - Text & strong elements
- **Muted Blush** (#C8A2A8) - Accents, buttons & hover states
- **Soft Shadow** (rgba(0, 0, 0, 0.08)) - Subtle shadows

## ✏️ How to Customize

### 1. Personal Information (Home Page)

Edit `/src/app/pages/Home.tsx`:
- Update your name
- Change the hero description
- Modify the "About Me" section with your story

### 2. Add Your Projects

Edit `/src/app/data/projects.ts`:

Each project has this structure:
```typescript
{
  id: "unique-project-id",
  title: "Your Project Title",
  description: "Short 2-line description",
  techStack: ["Tech1", "Tech2", "Tech3"],
  githubUrl: "https://github.com/yourusername/repo",
  liveDemoUrl: "https://your-demo.com", // Optional
  caseStudy: {
    problem: "What problem does this solve?",
    architecture: "How is it built? What's the system design?",
    implementation: "How did you implement it? Key features?",
    challenges: "What challenges did you face? How did you solve them?",
    outcome: "What were the results? Metrics? Impact?"
  }
}
```

**To add a new project:**
1. Copy an existing project object
2. Change the `id` to be unique (use lowercase with dashes)
3. Update all fields with your project details
4. Save the file

**To remove a project:**
- Simply delete the project object from the array

### 3. Update Skills & Resume

Edit `/src/app/pages/Resume.tsx`:

**Skills Section:**
- Modify the `skillCategories` array
- Each category has: title, icon (from lucide-react), and skills array

**Education:**
- Update university name and graduation year

**Certifications:**
- Add/remove certifications as needed

**Resume Download:**
- Upload your PDF resume to your hosting
- Update the download button link

### 4. Contact Information

Edit `/src/app/pages/Contact.tsx`:

Update these links:
- Email: `your.email@example.com`
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`

**Form Submission:**
The contact form currently shows an alert. To make it functional:
- Connect to a backend service (EmailJS, Formspree, etc.)
- Or use Supabase for storing messages

### 5. Navigation Logo

Edit `/src/app/components/Navbar.tsx`:
- Change "Harshita" to your name or logo

## 📱 Pages Structure

Your portfolio has 4 main pages:

1. **Home (/)** - Hero section + About Me
2. **Projects (/projects)** - List of all projects
3. **Resume (/resume)** - Skills, education, certifications
4. **Contact (/contact)** - Contact form + social links

Plus dynamic routes:
- **/projects/:projectId** - Detailed case study for each project

## 🎯 Tips for Startups

Based on your requirements:

✅ **What startups look for:**
- Clear problem-solving approach (shown in case studies)
- Technical depth (architecture & implementation details)
- Ability to overcome challenges
- Measurable outcomes
- Professional yet personal tone

✅ **Your portfolio showcases:**
- Cloud & security expertise (AWS, encryption)
- Full-stack capabilities (MERN, Flask, etc.)
- Problem-solving mindset
- Soft confidence through design

## 🚀 Quick Customization Checklist

- [ ] Update name in Navbar
- [ ] Write your hero description (Home page)
- [ ] Write your About Me story
- [ ] Add your real projects to projects.ts
- [ ] Update GitHub URLs
- [ ] Add your skills to Resume page
- [ ] Update education details
- [ ] Change contact email, GitHub, LinkedIn
- [ ] Upload and link your PDF resume
- [ ] Add live demo links if you have them

## 🎨 Design Philosophy

Your portfolio follows "Quiet Power":
- **Soft outside, Solid inside**
- Minimal animations (subtle, not distracting)
- Clean typography hierarchy
- Generous white space
- Professional yet approachable

## 📂 File Structure

```
/src/app/
  ├── pages/          # All page components
  ├── components/     # Reusable components (Navbar, Root)
  ├── data/          # Project data
  └── routes.ts      # Route configuration

/src/styles/
  ├── fonts.css      # Google Fonts imports
  └── theme.css      # Color palette & variables
```

## 💡 Next Steps

1. **Add a profile photo** to the Home hero section
2. **Connect contact form** to a backend service
3. **Add project screenshots** to case study pages
4. **Write compelling case studies** with specific metrics
5. **Get feedback** from friends or mentors

---

Your portfolio is live and ready to customize! 🎉
