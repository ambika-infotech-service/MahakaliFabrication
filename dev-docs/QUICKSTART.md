# 🚀 Quick Start Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install all necessary packages including React, React Router, and Tailwind CSS.

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

## ⚡ Quick Customization Checklist

### 1. Update Company Information
- [ ] Edit company name in `src/components/Header/Header.jsx`
- [ ] Update footer contact details in `src/components/Footer/Footer.jsx`
- [ ] Modify about content in `src/components/About/About.jsx`
- [ ] Update contact information in `src/components/Contact/Contact.jsx`

### 2. Replace Placeholder Images
- [ ] Add your company logo
- [ ] Replace hero section images
- [ ] Add service images
- [ ] Update blog post images in `src/data/blogData.js`

### 3. Customize Colors
- [ ] Edit `tailwind.config.js` to change primary, secondary, and accent colors
- [ ] Update gradient colors in components if needed

### 4. Update Blog Content
- [ ] Edit `src/data/blogData.js` with your blog posts
- [ ] Update categories as needed
- [ ] Add real content to blog posts

### 5. Configure Contact Form
- [ ] Integrate with your backend API or email service
- [ ] Update form submission logic in `src/components/Contact/Contact.jsx`

### 6. Add Your Business Details
- [ ] Update address, phone, email in all relevant components
- [ ] Add Google Maps embed in `src/pages/ContactPage.jsx`
- [ ] Update business hours if different

## 📝 Content Files to Edit

| File | Purpose |
|------|---------|
| `src/data/blogData.js` | Blog posts and categories |
| `src/components/Services/Services.jsx` | Service offerings |
| `src/components/About/About.jsx` | Company information |
| `src/components/Footer/Footer.jsx` | Footer links and contact info |
| `src/components/Contact/Contact.jsx` | Contact form and details |

## 🎨 Styling

The project uses Tailwind CSS for styling. You can:
- Use utility classes directly in components
- Customize theme in `tailwind.config.js`
- Add custom styles in `src/styles/index.css`

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## ❓ Need Help?

Check the main README.md for detailed documentation or contact support.
