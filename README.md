# Mahakali Fabrication - Professional React Website

A modern, responsive, and professional website for Mahakali Fabrication built with React, Vite, and Tailwind CSS. This website showcases fabrication services, company information, and includes a fully functional blog section.

## ✨ Features

- **Modern Design**: Clean, minimalist design with focus on typography and high-quality visuals
- **Fully Responsive**: Looks great on all devices - desktop, tablet, and mobile
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Friendly**: Semantic HTML structure for better search engine optimization
- **Blog Section**: Integrated blog with category filtering and search functionality
- **Contact Form**: Professional contact page with form validation
- **Smooth Navigation**: React Router for seamless page transitions

## 🚀 Tech Stack

- **React 19** - Latest version of React
- **Vite** - Next generation frontend tooling
- **React Router DOM** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

## 📁 Project Structure

```
MahakaliFabrication/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, and other assets
│   │   ├── images/
│   │   └── fonts/
│   ├── components/        # Reusable components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── About/
│   │   ├── Blog/
│   │   └── Contact/
│   ├── data/              # Static data and content
│   │   └── blogData.js
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogPost.jsx
│   │   └── ContactPage.jsx
│   ├── styles/            # Global styles
│   │   └── index.css
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1a1a',    // Main dark color
  secondary: '#f97316',  // Orange accent
  accent: '#0ea5e9',     // Blue accent
}
```

### Fonts

The project uses Google Fonts (Inter and Poppins). To change fonts, update the import in `src/styles/index.css` and the font family in `tailwind.config.js`.

### Content

- **Blog Posts**: Update `src/data/blogData.js`
- **Services**: Edit `src/components/Services/Services.jsx`
- **Company Info**: Modify `src/components/About/About.jsx` and `src/pages/AboutPage.jsx`
- **Contact Details**: Update `src/components/Footer/Footer.jsx` and `src/components/Contact/Contact.jsx`

### Images

Replace placeholder images with your own:
1. Add images to `src/assets/images/`
2. Update image references in components
3. For blog posts, update the image URLs in `src/data/blogData.js`

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Services overview
- About section preview
- Blog preview
- CTA section

### About Page (`/about`)
- Company information
- Mission and vision
- Why choose us section
- Features and benefits

### Services Page (`/services`)
- Detailed service offerings
- Process workflow
- Call-to-action

### Blog Page (`/blog`)
- Blog post listings
- Category filtering
- Search functionality

### Blog Post (`/blog/:id`)
- Full article content
- Author information
- Related posts
- Social sharing buttons

### Contact Page (`/contact`)
- Contact form
- Contact information
- Business hours
- Map placeholder

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy the `dist` folder

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 To-Do / Future Enhancements

- [ ] Add animation on scroll
- [ ] Integrate backend API for contact form
- [ ] Add image gallery for projects
- [ ] Implement dark mode
- [ ] Add testimonials section
- [ ] Create admin panel for blog management
- [ ] Add multi-language support

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 💬 Support

For questions or support, contact: info@mahakalifabrication.com

---

**Built with ❤️ using React + Vite + Tailwind CSS**
