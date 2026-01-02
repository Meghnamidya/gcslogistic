# GCS Logistics React Application

## Features

- ✅ Pure React (No Vite or CRA eject)
- ✅ React Router for navigation
- ✅ Separate page components for each section
- ✅ All files in .js format
- ✅ Responsive Bootstrap design
- ✅ Animated components with WOW.js
- ✅ Owl Carousel for sliders

## Project Structure

```
logistica-1.0.0/
├── public/
│   ├── index.html
│   ├── css/              # Original CSS files
│   ├── img/              # Original images
│   ├── js/               # Original JavaScript
│   └── lib/              # Third-party libraries
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Spinner.js
│   │   ├── BackToTop.js
│   │   └── PageHeader.js
│   ├── pages/            # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   ├── Team.js
│   │   ├── Testimonial.js
│   ├── App.js            # Main app with routing
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── package.json
└── README.md
```

## Available Pages & Routes

- `/` - Home page with carousel, services, features
- `/about` - About us page
- `/services` - Services listing page
- `/contact` - Contact form and map
- `/team` - Team members page
- `/testimonial` - Customer testimonials

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Move assets to public folder (if not already there):**
   - Ensure `css/`, `img/`, `js/`, and `lib/` folders are in the `public` directory
   - These folders should already be in your root directory

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Bootstrap 5
- Font Awesome 5
- Owl Carousel
- WOW.js for animations
- jQuery (for legacy plugins)

## Notes

- All components are in `.js` format (not `.jsx`)
- External libraries (jQuery, Bootstrap, Owl Carousel, etc.) are loaded dynamically
- Original CSS and assets are preserved in the `public` folder
- The app uses React Router for client-side routing

## Development

To modify pages, edit the corresponding file in `src/pages/`:
- Home page: `src/pages/Home.js`
- About page: `src/pages/About.js`
- Services: `src/pages/Services.js`
- etc.

To modify shared components (Navbar, Footer), edit files in `src/components/`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is based on the Logistica template from HTML Codex, distributed by ThemeWagon.
