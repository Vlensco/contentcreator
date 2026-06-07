# Elena Vang Studio — Abstract Expressions & Archives

A highly premium, immersive portfolio website built for artist and creator **Elena Vang**. The application utilizes modern web aesthetics, custom smooth scrolling, and dynamic state-based routing.

## 🌟 Key Features

- **Cohesive Dark Theme**: Re-designed with a consistent, luxury dark-stone color scheme (`bg-stone-950`) and warm typography accents across all pages.
- **State-Based Modular Routing**: Lightning-fast, animated page switches (Home, Bio, Arts, Contact) without heavy router packages, ensuring complete React 19 compatibility.
- **Cinematic Entry Overlay**: Seamless transition overlay on initial page load for a gallery-like welcome experience.
- **Custom Interactive Cursor**: A hardware-accelerated fluid cursor that responds dynamically with scale and blending when hovering interactive elements.
- **Dynamic Scroll Navbar**: Sleek navigation header that remains completely transparent at the top of pages and transitions to a blurred translucent backdrop on scroll.
- **Structured Home Page Flow**: Optimized user journey showing an **ADS Headline (Hero)** &rarr; **Problem** &rarr; **Solusi** &rarr; **Testimoni** &rarr; **Penawaran (Acquisition Packages)**.
- **Tactile Archives (Arts)**: Interactive gallery grid where users can click individual artworks to view details and dimensions, and click to immediately initiate contact inquiries.
- **Refined Contact Form**: Elegant split-layout displaying studio coordinates on the left and a category-aware contact form with animated success state on the right.

---

## 🛠️ Technology Stack

- **Core**: React 19 (TypeScript), HTML5, CSS3
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion v12)
- **Smooth Scrolling**: Lenis Scroll v1.3
- **Icons**: Lucide React
- **Bundler & Dev Server**: Vite

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation & Run

1. Clone this repository (or copy the project directory).
2. Install the node package dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

### Production Build

To verify and compile production-ready bundles, run:
```bash
npm run build
```
The output assets will be generated inside the `/dist` directory.
