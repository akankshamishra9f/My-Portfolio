# Design Guidelines: Akanksha Mishra Portfolio Website

## Design Approach
**Reference-Based Approach**: Modern portfolio aesthetic inspired by Dribbble/Behance showcases with heavy emphasis on neon/cyberpunk visual treatment.

## Core Theme
**Purple-Pink Neon Theme** with glowing gradients, animated lighting effects, and interactive hover states throughout.

## Typography
- **Primary Font**: Poppins (headings, nav, buttons)
- **Secondary Font**: Montserrat (body text, descriptions)
- **Hierarchy**: Large bold headings (3xl-6xl), medium subheadings (xl-2xl), body text (base-lg)

## Layout System
- **Spacing Units**: Tailwind classes p-8, p-12, p-16, p-20 for sections; p-4, p-6 for cards/components
- **Container**: max-w-7xl centered with px-4 on mobile, px-8 on desktop
- **Section Padding**: py-20 desktop, py-12 mobile

## Color Palette (Purple-Pink Neon)
- **Gradients**: Purple-to-pink radial/linear gradients for backgrounds
- **Glow Effects**: Neon purple (#a855f7) and pink (#ec4899) for hover states, shadows, and accent elements
- **Background**: Dark base (near-black) with subtle purple/pink gradient overlays
- **Text**: White primary, light purple/pink for accents

## Component Library

### Navigation
- Fixed top navigation with glassmorphism effect (backdrop-blur)
- Smooth scroll links to sections
- Glowing hover state on nav items

### Hero Section (Home)
- **Layout**: Centered content with profile photo placeholder (circular with neon glow border)
- **Typing Animation**: Animated text cycling through "Web Developer | Python Programmer | Creative Designer" using Typed.js
- **Greeting**: "Hi, I'm Akanksha Mishra 👋" with fade-in animation
- **Background**: Floating particles or subtle animated gradient
- **CTAs**: Three glowing gradient buttons ("About Me", "Projects", "Contact") with hover lift effect

### About Me Section
- **Content Block**: Text content with education card
- **Education Card**: St. John College, B.Sc Computer Science (2023-2026) with neon border
- **Hobbies/Fun Facts**: Listed with icon bullets
- **Animation**: Fade-in from left on scroll

### Skills Section
- **Grid Layout**: 4 columns desktop, 2 tablet, 1 mobile
- **Skill Cards**: Each skill (HTML, CSS, JavaScript, Java, Python, Django, C++, WordPress, React.js, Git & GitHub, Figma, MySQL, Tailwind CSS) with:
  - Icon (Font Awesome or Lucide)
  - Skill name
  - Progress bar or proficiency indicator
  - Glow effect on hover with lift animation

### Projects Section
- **Grid**: 2x2 grid (2 columns desktop, 1 mobile)
- **Project Cards** (4 total):
  1. Portfolio Website (HTML, CSS, JS)
  2. Weather App (JavaScript API)
  3. Student Management System (Python + Django)
  4. Blog Website (WordPress)
- **Card Design**: 
  - Project thumbnail placeholder
  - Title and tech stack tags
  - Hover: Lift animation + intense neon glow border
  - Brief description appears on hover

### Education Section
- **Timeline Card**: Single prominent card or simple timeline
- **Content**: St. John College, B.Sc CS (2023-2026), Key Coursework (Web Dev, OOP Java, DBMS, Python)
- **Visual**: Neon connector lines or glowing card border

### Contact Section
- **Contact Form**: EmailJS-ready form with glowing input fields
  - Name, Email, Message fields
  - Neon-bordered inputs with focus glow
  - Submit button with gradient + glow
- **Social Links**: Large icon buttons for:
  - ✉️ Email: akanksha@example.com
  - 💼 LinkedIn: linkedin.com/in/akankshamishra
  - 💻 GitHub: github.com/akankshaM
- **Hover**: Icons glow and scale on hover

### Footer
- **Content**: "© 2025 Akanksha Mishra | Designed with 💖 and Code"
- **Background**: Subtle floating star particles or light neon lines

## Animations & Interactions
- **Scroll Animations**: AOS library for fade-in, slide-up, and zoom effects on section entry
- **Typing Effect**: Typed.js for hero section text rotation
- **Hover Effects**: 
  - Glow shadows (box-shadow with neon colors)
  - Lift transform (translateY(-8px))
  - Scale for buttons/icons
- **Scroll-to-Top Button**: Fixed bottom-right, appears after scrolling, neon circular button
- **Smooth Scroll**: CSS scroll-behavior: smooth
- **Particles**: Floating background particles using particles.js or CSS animations

## Special Features
- **Dark/Light Theme Toggle**: Switch button in nav with smooth color transition
- **Neon Dividers**: Glowing gradient lines between major sections
- **Gradient Buttons**: Purple-to-pink gradient with glow effect
- **Glassmorphism**: Subtle blur effects on navigation and card overlays

## Responsive Design
- **Mobile**: Single column, stacked sections, smaller text sizes, touch-friendly buttons
- **Tablet**: 2-column grids where applicable
- **Desktop**: Full multi-column layouts, larger text, enhanced animations

## Images
- **Profile Photo**: Circular placeholder in hero section (300x300px) with animated neon glow border
- **Project Thumbnails**: 4 placeholder images for project cards (600x400px aspect ratio) - can be screenshot mockups or abstract tech visuals

This portfolio emphasizes visual impact through consistent neon theming, smooth animations, and interactive elements that create an engaging, memorable user experience perfect for a computer science student showcasing technical skills with creative flair.