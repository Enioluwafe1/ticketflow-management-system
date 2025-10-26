# TicketFlow - React Implementation

A professional ticket management system built with React + Vite, featuring authentication, CRUD operations, and responsive design.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Access at: **http://localhost:5173/**

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Technologies Used

- **React 18** - UI Library
- **Vite 5** - Build tool (fast HMR)
- **Lucide React** - Icon library
- **LocalStorage** - Data persistence & authentication
- **CSS3** - Component-specific styling

## 📁 Project Structure
```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Toast.jsx
│   │   └── Toast.css
│   ├── Landing/
│   │   ├── LandingPage.jsx
│   │   └── LandingPage.css
│   ├── Auth/
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   └── Auth.css
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   └── Tickets/
│       ├── TicketManagement.jsx
│       ├── TicketModal.jsx
│       ├── Tickets.css
│       └── TicketModal.css
├── utils/
│   ├── auth.js
│   └── storage.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## ✨ Features

- ✅ Landing page with wavy SVG and decorative circles
- ✅ Authentication (Login/Signup) with validation
- ✅ Protected routes with session management
- ✅ Dashboard with real-time statistics
- ✅ Full CRUD operations for tickets
- ✅ Form validation with inline errors
- ✅ Toast notifications for feedback
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Max-width 1440px centered layout
- ✅ Accessibility compliant

## 🔐 Test Credentials

- **Email:** Any valid email (e.g., `test@example.com`)
- **Password:** Minimum 6 characters (e.g., `password123`)
- **Name:** Any name for signup

## 🎨 Component Architecture

### Layout Components
- **Header** - Navigation with auth state
- **Footer** - Site-wide footer
- **Toast** - Notification system

### Page Components
- **LandingPage** - Hero + features
- **LoginPage** - Login form
- **SignupPage** - Registration form
- **Dashboard** - Statistics overview
- **TicketManagement** - Full CRUD interface
- **TicketModal** - Create/Edit modal

### Utility Modules
- **auth.js** - Authentication helpers
- **storage.js** - LocalStorage management

## 🎯 Validation Rules

| Field | Required | Validation |
|-------|----------|------------|
| Title | Yes | Non-empty string |
| Status | Yes | `open`, `in_progress`, or `closed` |
| Description | No | Optional text |
| Priority | No | `low`, `medium`, or `high` |

## 🎨 Design System

### Colors
- Primary: `#2563eb`
- Success: `#10b981`
- Warning: `#f59e0b`
- Danger: `#dc2626`

### Status Colors
- Open: Green (`#10b981`)
- In Progress: Amber (`#f59e0b`)
- Closed: Gray (`#6b7280`)

### Layout
- Max width: `1440px`
- Mobile: `< 480px`
- Tablet: `481px - 768px`
- Desktop: `> 768px`

## 🔄 Data Flow

1. **Authentication**: LocalStorage (`ticketapp_session`)
2. **Tickets**: LocalStorage (`ticketapp_tickets`)
3. **State Management**: React useState/useEffect hooks
4. **Navigation**: Component-based routing

## 🐛 Known Issues

- No backend integration (mock data only)
- No search/filter functionality
- No pagination for large datasets
- Session expires on browser close

## 📝 Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint (if configured)
```

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

**Built with React + Vite - Component-based architecture for scalability and maintainability**