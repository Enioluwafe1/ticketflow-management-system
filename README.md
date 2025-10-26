# TicketFlow - Multi-Framework Ticket Management System

A professional ticket management system implemented in **React**, **Vue.js**, and **Twig** to demonstrate framework-agnostic design principles and full-stack capabilities.

## 🎯 Project Overview

This monorepo contains three complete implementations of the same ticket management application, each using a different frontend technology while maintaining identical UI/UX and functionality.

## 📦 Implementations

| Framework | Technology | Status | Directory |
|-----------|-----------|---------|-----------|
| React | React 18 + Hooks | ✅ Complete | [react-implementation/](./react-implementation/) |
| Vue | Vue 3 + Composition API | 🚧 In Progress | [vue-implementation/](./vue-implementation/) |
| Twig | Twig + Vanilla JS | ⏳ Pending | [twig-implementation/](./twig-implementation/) |

## ✨ Features

- 🎨 **Consistent Design** - Identical UI across all frameworks
- 🔐 **Authentication** - Login/Signup with session management
- 📊 **Dashboard** - Real-time statistics
- 🎫 **CRUD Operations** - Complete ticket management
- 📱 **Responsive** - Mobile, tablet, desktop optimized
- ♿ **Accessible** - WCAG AA compliant
- 🎯 **Max Width 1440px** - Centered layout

## 🚀 Quick Start

### React Implementation
```bash
cd react-implementation
npm install
npm start
```

### Vue Implementation
```bash
cd vue-implementation
npm install
npm run dev
```

### Twig Implementation
```bash
cd twig-implementation
composer install
php -S localhost:8000 -t public
```

## 📁 Repository Structure
```
ticketflow-management-system/
├── assets/              # Shared resources (SVGs, design tokens)
├── react-implementation/
├── vue-implementation/
├── twig-implementation/
└── docs/               # Additional documentation
```

## 🎨 Shared Assets

All implementations use shared resources from the `assets/` directory:
- Wave divider SVG
- Design tokens (colors, spacing)
- Logo and icons

## 🔐 Test Credentials

- **Email:** Any valid email (e.g., test@example.com)
- **Password:** Minimum 6 characters (e.g., password123)

## 🛠️ Technologies

### React
- React 18, Lucide Icons, LocalStorage

### Vue
- Vue 3, Vite, Composition API

### Twig
- Twig 3, PHP 8+, Vanilla JavaScript

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

## 👨‍💻 Odunayo Enioluwafe

Built as a comprehensive demonstration of multi-framework development expertise.

