# Alpha Consulting Engineers Website Package

## Overview
This package contains the complete source code and assets for the Alpha Consulting Engineers Pte Ltd corporate website revamp.

## Project Structure

```
alpha-consulting-package/
├── README.md                 # This file
├── source-code/              # Complete React/Vite project
│   ├── client/               # Frontend React application
│   │   ├── src/
│   │   │   ├── pages/        # Page components (Home, Services, Projects, About, Contact)
│   │   │   ├── components/   # Reusable components (Header, Footer, UI)
│   │   │   ├── App.tsx       # Main app with routing
│   │   │   └── index.css     # Global styles and design tokens
│   │   └── index.html        # HTML template
│   ├── package.json          # Dependencies
│   └── vite.config.ts        # Vite configuration
│
└── assets/                   # Original and generated assets
    ├── AlphaLogo.tif         # Original company logo
    ├── alpha-logo.png        # Converted PNG logo
    ├── alpha-logo-transparent.png  # Transparent background logo
    ├── HeroSectionSkyline.png      # Homepage hero image
    ├── LandingPage.png       # Design mockup - Landing page
    ├── AboutUS.png           # Design mockup - About page
    ├── OurProjects.png       # Design mockup - Projects page
    ├── Services.png          # Design mockup - Services page
    ├── NewWesbiteTemplate.jpg      # Future state template
    ├── ACEPL_Company_Brochure-(2025_01).docx  # Company brochure
    ├── company-data.md       # Extracted company information
    ├── RevampVision.tsx      # Original proposal code
    ├── TransformationDemo.tsx      # Original demo code
    └── generated-images/     # AI-generated images for the website
        ├── hero-singapore-skyline.jpg
        ├── about-corporate-building.jpg
        ├── services-blueprint-bg.jpg
        ├── engineering-team-meeting.jpg
        └── construction-site-progress.jpg
```

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 + shadcn/ui components
- **Routing:** Wouter
- **Animations:** Framer Motion

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm (recommended) or npm

### Installation

1. Navigate to the source code directory:
```bash
cd source-code
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open http://localhost:3000 in your browser

### Build for Production
```bash
pnpm build
```

## Design System

### Colors
- **Primary (Alpha Green):** #16a34a
- **Background:** White (#ffffff)
- **Text:** Slate gray (#1e293b)
- **Muted:** Light gray (#f1f5f9)

### Typography
- **Headlines:** DM Serif Display (serif)
- **Body:** DM Sans (sans-serif)

### Key Features
- Responsive design (mobile-first)
- Fixed navigation header
- Scroll-to-top on page navigation
- Animated statistics counters
- Filterable project gallery
- Contact form with validation

## Pages
1. **Home** - Hero section, services overview, featured projects, stats, about preview
2. **Services** - MEP engineering services with detailed descriptions
3. **Projects** - Filterable gallery of 15+ projects across 6 categories
4. **About** - Company history, certifications, team information
5. **Contact** - Contact form, office location, Google Maps integration

## CDN Image URLs Used
The website references images hosted on CDN. Key URLs:
- Logo: https://files.manuscdn.com/user_upload_by_module/session_file/310519663036241636/bkdvcfLndUfIzmUo.png
- Hero: https://files.manuscdn.com/user_upload_by_module/session_file/310519663036241636/bkdvcfLndUfIzmUo.png

## Notes for Continuation
- The project uses Manus-specific CDN URLs for images. You may need to re-upload images to your own hosting.
- The contact form is frontend-only. Backend integration required for actual email sending.
- Google Maps integration uses a proxy. You'll need your own API key for production.

## Company Information
- **Company:** Alpha Consulting Engineers Pte Ltd (ACEPL)
- **Established:** January 1995
- **Services:** Mechanical & Electrical Engineering Consultancy
- **Certifications:** ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
- **Location:** 1 Jalan Kilang Timor, #08-01 Pacific Tech Centre, Singapore 159303
