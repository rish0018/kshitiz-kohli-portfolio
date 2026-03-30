# Kshitiz Kohli Portfolio

A modern, interactive portfolio website showcasing professional experience, expertise, achievements, and contact information. Built with React, TypeScript, and cutting-edge web technologies.

## 🌟 Features

- **Interactive UI** - Smooth animations and transitions using GSAP
- **3D Graphics** - Galaxy background effect using Three.js/React Three Fiber
- **Responsive Design** - Fully responsive across all devices with mobile-optimized navigation
- **Multiple Pages**:
  - Home - Landing page with profile overview
  - About - Professional background and summary
  - Experience - Work history and roles
  - Expertise - Skills and technical competencies
  - Achievements - Accomplishments and recognition
  - Contact - Get in touch form
- **Modern UI Components** - shadcn/ui component library
- **Email Integration** - Contact form powered by EmailJS
- **Form Validation** - React Hook Form with Zod validation
- **Dark Theme** - Sleek dark mode design

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- Bun or npm package manager

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
bun install
# or
npm install
```

### Development Server

Start the local development server:

```bash
bun run dev
# or
npm run dev
```

The app will be available at `http://localhost:8080` (or the next available port if 8080 is in use).

### Build for Production

Build the optimized production bundle:

```bash
bun run build
# or
npm run build
```

Preview the production build locally:

```bash
bun run preview
# or
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Routing**: React Router v6
- **Animations**: GSAP
- **3D Graphics**: Three.js with React Three Fiber
- **Forms**: React Hook Form + Zod
- **Data Fetching**: TanStack React Query
- **Email**: EmailJS
- **Testing**: Vitest

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── CardNav.tsx      # Navigation bar
│   ├── ProfileCard.tsx  # Profile display
│   ├── Galaxy.tsx       # 3D background
│   └── ...
├── pages/               # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Expertise.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
├── styles/              # Global styles
├── App.tsx              # Root app component
└── main.tsx             # Entry point
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## 🎨 Customization

### Colors & Styling

Tailwind CSS configuration is in `tailwind.config.ts`. Customize colors, fonts, and other design tokens there.

### Navigation

Update navigation items in `src/components/CardNav.tsx`:

```typescript
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  // Add more items here
];
```

### Logo

Place your logo image as `public/logo.jpg` to display it in the navigation bar.

### Contact Form

The contact form uses EmailJS. To configure:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Update EmailJS credentials in the Contact component
3. Configure your email service and templates

## 🧪 Testing

Run the test suite:

```bash
npm run test          # Run once
npm run test:watch    # Watch mode
```

Test files are located in `src/test/`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Performance

- Optimized bundle with Vite
- Lazy-loaded page components
- CSS modules for scoped styling
- Responsive images and assets

## 📄 License

This project is private and proprietary.

## 💬 Contact

For inquiries, use the contact form on the website.

---

**Built with ❤️ using React + TypeScript + Vite**
