

# Personal Portfolio Website — Chamarty Abhinav Siddartha

## Design Theme
- Dark navy/black background with neon blue & purple gradient accents
- Glassmorphism cards with backdrop blur and subtle borders
- Smooth scroll-triggered reveal animations on every section
- Typing text animation in the hero section
- Hover glow effects on cards and buttons
- Futuristic, developer-focused aesthetic throughout

---

## Pages & Sections (Single-Page Scrolling Layout)

### 1. Navigation Bar
- Sticky top navbar with glass effect background
- Links to all sections (smooth scroll)
- Mobile hamburger menu
- Resume Download button in the nav

### 2. Hero Section
- Full-screen landing with gradient background particles/mesh
- Profile image (from provided URL) with glow ring
- Typing animation cycling through: "Full Stack Developer", "DevOps Enthusiast", "AI Explorer"
- Tagline and subtext
- CTA buttons: "View Projects" and "Contact Me"

### 3. Objective Section
- Brief about section with animated text reveal
- Glass card with the objective statement

### 4. Skills Section
- Categorized skill cards (Programming, Web Dev, App Dev, Tools, DevOps, Soft Skills)
- Animated progress bars or icon-based grid with hover glow effects
- Each category in its own glass card

### 5. Education Timeline
- Vertical timeline layout
- Two entries: University (B.Tech) and Junior College
- Animated reveal as user scrolls

### 6. Experience Section
- Cards for BHEL internship and upcoming ICMR-NIN internship
- Glass card design with role details

### 7. Projects Section
- Grid of project cards with gradient borders
- Each card: project name, description, tech stack badges, and placeholder image area
- NutriVision AI card links to the live project URL
- Hover lift/glow effect

### 8. Achievements Section
- Icon-accented list of achievements in a glass card
- Animated entry on scroll

### 9. Leadership & Roles
- Clean list with role icons
- NSS, SPIC MACAY, Fest Coordinator

### 10. Certification Highlight
- Featured card for ICMR-NIN INFUSE Summit 2025
- Details about team selection and NutriVision AI showcase

### 11. Currently Learning & Future Goals
- Two side-by-side glass cards
- Placeholder content the user can customize later

### 12. Hobbies Section
- Simple icon grid with hobby labels

### 13. Contact Section
- Contact form (Name, Email, Message) — client-side only for now (no email backend)
- Display phone, email, and social icon placeholders (LinkedIn, GitHub)
- Note: Actual email sending would require a backend integration added later

### 14. Footer
- Social links, copyright, "Built with ❤️" line

---

## Technical Approach
- Single-page React app with smooth scrolling between sections
- All content hardcoded (no backend needed for initial version)
- Custom CSS animations for typing effect, scroll reveals, and hover glows
- Fully mobile responsive with Tailwind breakpoints
- Contact form will show a success toast on submit (email sending can be wired up later with an edge function)
- Resume download button (will link to a placeholder PDF URL)
- Blog and Certificates Gallery sections included as placeholder cards for future content

