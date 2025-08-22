# 🎓 University Website - Modern College Landing Page

A responsive and modern college website built with React.js, featuring a beautiful landing page with course information, campus locations, facilities, student testimonials, and an interactive contact form.

![College Website Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

### 🏠 **Home Section**
- Hero section with university branding
- Sticky navigation with smooth scrolling
- Responsive mobile menu with hamburger icon
- Call-to-action buttons

### 📚 **Courses Section**
- Three main course categories: Intermediate, Degree, BTech
- Hover effects and modern card design
- Responsive grid layout

### 🏛️ **Campus Locations**
- Three campus locations: Kandukur, Ongole, Nellore
- Image overlays with location names
- Interactive hover effects

### 🏢 **Facilities**
- Library, Playground, and Canteen sections
- High-quality facility images
- Detailed descriptions

### 👥 **Student Testimonials**
- Real student feedback with photos
- Contact information for students
- Professional testimonial layout

### 📧 **Contact Form**
- **Interactive Modal Popup** with form validation
- **Mandatory Fields**: Name, Mobile, Email
- **Email Integration**: Sends details to admin email
- **Mobile Responsive**: Optimized for all devices
- **Real-time Validation**: Instant error feedback

### 📱 **Mobile Responsive**
- Fully responsive design for all screen sizes
- Touch-friendly navigation
- Optimized modal for mobile devices
- Smooth scrolling navigation

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS3 with custom animations
- **Icons**: React Icons (Font Awesome)
- **Development**: ESLint for code quality
- **Package Manager**: npm

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/surendra3403/university_web_page.git
   cd university_web_page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The app will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
university_web_page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── App.css          # Main stylesheet
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎨 Key Features Explained

### Contact Form System
- **Modal Popup**: Clean, centered modal design
- **Form Validation**: 
  - Name: Required field
  - Mobile: 10-digit validation
  - Email: Format validation with regex
- **Email Integration**: Uses `mailto:` protocol to open user's email client
- **Responsive Design**: Optimized for mobile with larger touch targets

### Navigation System
- **Sticky Navigation**: Stays at top when scrolling
- **Smooth Scrolling**: Animated navigation to sections
- **Mobile Menu**: Off-canvas navigation for mobile devices
- **Section Links**: HOME, ABOUT, COURSE, BLOG, CONTACT

### Responsive Design
- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 768px (tablet), 480px (mobile)
- **Touch Friendly**: Large buttons and inputs for mobile
- **Flexible Layout**: Adapts to all screen sizes

## 🔧 Customization

### Changing Contact Email
Edit the email address in `src/App.jsx`:
```javascript
const mailtoLink = `mailto:surendra3403@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

### Modifying Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #f44336;
  --secondary-color: #c2d2b7;
  --text-color: #333;
}
```

### Adding New Sections
1. Add new section in `src/App.jsx`
2. Add corresponding styles in `src/App.css`
3. Update navigation if needed

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- **Larger Touch Targets**: 44px minimum for buttons
- **Readable Font Sizes**: 16px minimum for text
- **Optimized Modal**: Full-width on mobile with proper spacing
- **Smooth Animations**: 60fps animations for better performance

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Surendra Podapati**
- GitHub: [@surendra3403](https://github.com/surendra3403)
- Email: surendrapodapati02@gmail.com

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Vite for the fast build tool
- React Icons for the beautiful icon library
- All contributors and supporters

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [Coming Soon]

📧 **Contact**: surendrapodapati02@gmail.com
