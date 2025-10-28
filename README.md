# TicketFlow - Multi-Framework Ticket Management System

A professional ticket management system implemented in **React**, **Vue.js**, and **Twig** to demonstrate framework-agnostic design principles and full-stack capabilities.

## 🌐 Live Demos

| Framework | Live URL | Repository |
|-----------|----------|------------|
| **React** | [https://ticketflow-app-react.netlify.app](https://ticketflow-app-react.netlify.app) | [View Code](https://github.com/Enioluwafe1/ticketflow-management-system/tree/main/react-implementation) |
| **Vue.js** | [https://ticketflow-app-vue.netlify.app](https://ticketflow-app-vue.netlify.app) | [View Code](https://github.com/Enioluwafe1/ticketflow-management-system/tree/main/vue-implementation) |
| **Twig** | [https://ticketflow-management-system.onrender.com](https://ticketflow-management-system.onrender.com) | [View Code](https://github.com/Enioluwafe1/ticketflow-management-system/tree/main/twig-implementation) |

## 📦 Implementations

### React Implementation
- **Tech Stack:** React 18, Vite, Lucide Icons
- **Features:** Hooks, Component Architecture, Client-side Routing
- **Deploy:** Netlify
- **Branch:** `deploy-react`

### Vue Implementation
- **Tech Stack:** Vue 3, Vite, Composition API
- **Features:** SFC, Reactive State, Scoped Styles
- **Deploy:** Netlify
- **Branch:** `deploy-vue`

### Twig Implementation
- **Tech Stack:** Twig 3, PHP 8+, Vanilla JS
- **Features:** Server-side Rendering, Template Inheritance
- **Deploy:** Render
- **Branch:** `deploy-twig`

## ✨ Features

- 🎨 **Consistent Design** - Identical UI across all frameworks
- 🔐 **Authentication** - Login/Signup with session management
- 📊 **Dashboard** - Real-time statistics
- 🎫 **CRUD Operations** - Complete ticket management
- 📱 **Responsive** - Mobile, tablet, desktop optimized
- ♿ **Accessible** - WCAG AA compliant
- 🎯 **Max Width 1440px** - Centered layout

## 🚀 Quick Start

### React
```bash
cd react-implementation
npm install
npm run dev
```

### Vue
```bash
cd vue-implementation
npm install
npm run dev
```

### Twig
```bash
cd twig-implementation
composer install
cd public && php -S localhost:8000
```

## 🔐 Test Credentials

- **Email:** Any valid email (e.g., `test@example.com`)
- **Password:** Minimum 6 characters (e.g., `password123`)

## 📁 Repository Structure
```
ticketflow-management-system/
├── react-implementation/    # React + Vite
├── vue-implementation/      # Vue 3 + Vite
├── twig-implementation/     # Twig + PHP
├── assets/                  # Shared design assets
└── docs/                    # Documentation
```

## 🛠️ Technologies

### React
- React 18, Vite 5, Lucide React, LocalStorage

### Vue
- Vue 3, Vite 5, Composition API, Lucide Vue Next

### Twig
- Twig 3, PHP 8.1+, Vanilla JavaScript, LocalStorage

## 📋 Task Compliance

✅ Landing page with wavy SVG background  
✅ Authentication with validation  
✅ Dashboard with statistics  
✅ Complete CRUD operations  
✅ Form validation (title, status required)  
✅ Error handling with toast notifications  
✅ Protected routes with session tokens  
✅ Max-width 1440px centered layout  
✅ Responsive design  
✅ Accessibility compliance  

## 🌟 Deployment

### Netlify (React & Vue)
- Automatic deployments on push to `deploy-react` and `deploy-vue` branches
- Build command: `npm run build`
- Publish directory: `dist`

### Render (Twig)
- Automatic deployments on push to `deploy-twig` branch
- Build command: `composer install`
- Start command: `php -S 0.0.0.0:$PORT -t public`

---

**Built to demonstrate multi-framework expertise and professional development standards**