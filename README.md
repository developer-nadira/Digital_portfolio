# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring a sleek dark theme, glass morphism effects, and comprehensive sections showcasing professional skills and experience.

![Portfolio Preview](https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)

## ✨ Features

### 🎨 **Modern Design**
- **Glass Morphism** effects with backdrop blur
- **Dark Theme** with professional color scheme
- **Smooth Animations** and micro-interactions
- **Floating Elements** with dynamic movements
- **Responsive Design** for all device sizes

### 📱 **Comprehensive Sections**
- **Hero Section** - Eye-catching introduction with modern image styling
- **About** - Personal story and professional achievements
- **Skills** - Technical expertise showcase with interactive tags
- **Experience** - Professional timeline with detailed descriptions
- **Projects** - Portfolio showcase with live demos
- **Services** - Service offerings with feature lists
- **Blog** - Knowledge sharing and insights
- **Contact** - Professional contact form

### 🛠 **Technical Features**
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid & Flexbox** - Modern layout techniques
- **Intersection Observer** - Smooth scroll animations
- **Font Awesome Icons** - Professional iconography
- **Google Fonts** - Inter & JetBrains Mono typography
- **Optimized Performance** - Fast loading and smooth interactions

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Start the frontend**
   ```bash
   cd simple-client
   python -m http.server 8080
   ```
   Visit: `http://localhost:8080`

3. **Start the backend (optional)**
   ```bash
   cd server
   npm install
   npm run dev
   ```
   API running on: `http://localhost:5000`

## 📁 Project Structure

```
portfolio-website/
├── simple-client/          # Frontend (Static Website)
│   └── index.html          # Main HTML file with embedded CSS/JS
├── server/                 # Backend API (Node.js/Express)
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── ...
├── netlify.toml           # Netlify deployment config
├── vercel.json           # Vercel deployment config
├── deploy.sh             # Unix deployment script
├── deploy.bat            # Windows deployment script
└── deployment-guide.md   # Comprehensive deployment guide
```

## 🌐 Deployment Options

### **🟢 Netlify (Recommended)**
```bash
# Using Netlify CLI
npm install -g netlify-cli
netlify deploy --dir=simple-client --prod
```

### **🔷 Vercel**
```bash
# Using Vercel CLI
npm install -g vercel
vercel --prod
```

### **🟠 GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Set source to `main` branch, `/simple-client` folder
3. Access at `https://yourusername.github.io/portfolio-website`

### **🌐 Cloudflare Pages**
1. Connect repository at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Build output directory: `simple-client`
3. Deploy automatically

## 🛠 Easy Deployment Scripts

### Windows
```cmd
deploy.bat
```

### Mac/Linux
```bash
./deploy.sh
```

## 🎯 Customization

### **Update Content**
Edit the content in `simple-client/index.html`:
- Personal information in hero section
- Skills and technologies
- Work experience
- Project details
- Contact information

### **Styling**
Modify CSS variables in the `<style>` section:
```css
:root {
    --primary: #6366f1;        /* Primary color */
    --secondary: #06b6d4;      /* Secondary color */
    --accent: #f59e0b;         /* Accent color */
    --bg-primary: #0f172a;     /* Background color */
    /* ... */
}
```

### **API Integration**
Update the API endpoint in JavaScript:
```javascript
const API_BASE = 'https://your-backend-domain.com/api';
```

## 🔧 Backend API (Optional)

The project includes a Node.js/Express backend for dynamic content:

### **Features**
- RESTful API for projects
- MongoDB integration (with fallback to mock data)
- CORS enabled for frontend integration
- Environment-based configuration

### **Endpoints**
- `GET /api/projects` - Fetch all projects
- `POST /api/contact` - Handle contact form submissions

### **Deployment**
- **Railway**: [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)
- **Heroku**: [heroku.com](https://heroku.com)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Excellent ratings
- **Mobile-First**: Optimized for all devices
- **Fast Loading**: Minimal dependencies, optimized assets

## 🛡 Security Features

- **CSP Headers** - Content Security Policy
- **XSS Protection** - Cross-site scripting prevention
- **Frame Options** - Clickjacking protection
- **HTTPS Ready** - SSL/TLS support

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- 📧 Email: your-email@example.com
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern web design trends
- **Icons**: Font Awesome
- **Images**: Unsplash
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

---

⭐ **Star this repository if you found it helpful!**

🚀 **[Live Demo](https://your-portfolio-domain.com)** | 📖 **[Documentation](./deployment-guide.md)** | 🐛 **[Report Bug](https://github.com/yourusername/portfolio-website/issues)** 