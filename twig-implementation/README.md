# TicketFlow - Twig Implementation

A professional ticket management system built with Twig templating engine and PHP, featuring authentication, CRUD operations, and responsive design.

## 🚀 Quick Start

### Prerequisites

- PHP 8.0 or higher
- Composer (PHP package manager)
- A web server (Apache/Nginx) or PHP built-in server

### Installation

1. **Install dependencies:**
```bash
composer install
```

2. **Start PHP development server:**
```bash
cd public
php -S localhost:8000
```

3. **Access the application:**

Open browser to: **http://localhost:8000**

## 📦 Technologies Used

- **Twig 3** - PHP templating engine
- **PHP 8+** - Server-side language
- **Vanilla JavaScript** - Client-side interactivity
- **LocalStorage** - Data persistence & authentication
- **CSS3** - Modern styling

## 📁 Project Structure
```
twig-implementation/
├── public/                    # Web-accessible files
│   ├── css/
│   │   ├── global.css        # Global styles
│   │   ├── components.css    # Component styles
│   │   └── pages.css         # Page-specific styles
│   ├── js/
│   │   ├── auth.js           # Authentication logic
│   │   ├── storage.js        # Data storage management
│   │   ├── toast.js          # Toast notifications
│   │   └── validation.js     # Form validation
│   ├── index.php             # Landing page entry
│   ├── login.php             # Login page entry
│   ├── signup.php            # Signup page entry
│   ├── dashboard.php         # Dashboard page entry
│   ├── tickets.php           # Tickets page entry
│   └── .htaccess             # Apache configuration
├── src/
│   ├── Controllers/
│   │   └── PageController.php   # Page routing controller
│   └── Utils/
│       ├── Session.php          # Session management
│       └── Router.php           # URL routing
├── templates/
│   ├── layout/
│   │   ├── base.html.twig       # Base template
│   │   ├── header.html.twig     # Header component
│   │   └── footer.html.twig     # Footer component
│   └── pages/
│       ├── landing.html.twig    # Landing page
│       ├── login.html.twig      # Login page
│       ├── signup.html.twig     # Signup page
│       ├── dashboard.html.twig  # Dashboard page
│       └── tickets.html.twig    # Tickets management
├── vendor/                      # Composer dependencies
├── composer.json                # PHP dependencies
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## ✨ Features

- ✅ Landing page with wavy SVG and decorative circles
- ✅ Authentication (Login/Signup) with validation
- ✅ Client-side session management (LocalStorage)
- ✅ Dashboard with real-time statistics
- ✅ Full CRUD operations for tickets
- ✅ Form validation with inline errors
- ✅ Toast notifications
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Max-width 1440px centered layout
- ✅ Accessibility compliant
- ✅ Template inheritance with Twig

## 🔐 Test Credentials

- **Email:** Any valid email (e.g., `test@example.com`)
- **Password:** Minimum 6 characters (e.g., `password123`)
- **Name:** Any name for signup

## 🎨 Architecture

### Server-Side (PHP + Twig)
- **PageController** - Handles routing and renders Twig templates
- **Twig Templates** - Server-side HTML generation with template inheritance
- **Template Blocks** - Reusable layout components

### Client-Side (JavaScript)
- **Auth.js** - Authentication management (LocalStorage)
- **Storage.js** - Ticket CRUD operations (LocalStorage)
- **Toast.js** - Notification system
- **Validation.js** - Form validation utilities

### Data Flow
1. User requests URL (e.g., `/dashboard.php`)
2. PHP controller renders Twig template
3. Browser receives HTML
4. JavaScript handles interactions (CRUD, auth)
5. Data persists in LocalStorage

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

## 🔄 Twig Features Used

### Template Inheritance
```twig
{% extends "layout/base.html.twig" %}
```

### Blocks
```twig
{% block title %}Page Title{% endblock %}
{% block body %}Content{% endblock %}
```

### Include
```twig
{% include 'layout/header.html.twig' %}
```

### Variables
```twig
{{ variable }}
```

### Conditionals
```twig
{% if condition %}
  ...
{% endif %}
```

## 🚀 Deployment

### Apache Configuration

Ensure mod_rewrite is enabled and `.htaccess` is in the `public/` folder.

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name ticketflow.local;
    root /path/to/twig-implementation/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
```

### Production Checklist

- [ ] Enable Twig template caching
- [ ] Set proper file permissions
- [ ] Configure error logging
- [ ] Use HTTPS
- [ ] Enable GZIP compression
- [ ] Set security headers

## 🐛 Known Issues

- No backend database (uses LocalStorage)
- No server-side session validation
- No search/filter functionality
- No pagination for large datasets
- Session expires on browser close

## 📝 Development Commands
```bash
# Install dependencies
composer install

# Update dependencies
composer update

# Start development server
cd public && php -S localhost:8000

# Check PHP version
php --version

# Validate composer.json
composer validate
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Use different port
php -S localhost:8001
```

### Twig Not Found
```bash
# Reinstall dependencies
rm -rf vendor
composer install
```

### Permission Errors
```bash
# Fix file permissions (Linux/Mac)
chmod -R 755 public
```

## 📚 Twig Resources

- [Twig Documentation](https://twig.symfony.com/doc/)
- [Twig for Template Designers](https://twig.symfony.com/doc/3.x/templates.html)
- [PHP Documentation](https://www.php.net/docs.php)

## 📄 License

MIT License

---

**Built with Twig + PHP - Server-side templating with client-side interactivity**
```

---

## 📊 **COMPLETE FILE CREATION ORDER SUMMARY**
```
PRIORITY ORDER (Create in this exact sequence):

✅ FOUNDATION CSS (Files 1-3)
1.  public/css/global.css
2.  public/css/components.css
3.  public/css/pages.css

✅ JAVASCRIPT UTILITIES (Files 4-7)
4.  public/js/auth.js
5.  public/js/storage.js
6.  public/js/toast.js
7.  public/js/validation.js

✅ PHP UTILITIES (Files 8-9)
8.  src/Utils/Session.php
9.  src/Utils/Router.php

✅ PHP CONTROLLERS (File 10)
10. src/Controllers/PageController.php

✅ TWIG LAYOUTS (Files 11-13)
11. templates/layout/base.html.twig
12. templates/layout/header.html.twig
13. templates/layout/footer.html.twig

✅ TWIG PAGES (Files 14-18)
14. templates/pages/landing.html.twig
15. templates/pages/login.html.twig
16. templates/pages/signup.html.twig
17. templates/pages/dashboard.html.twig
18. templates/pages/tickets.html.twig

✅ PHP ENTRY POINTS (Files 19-23)
19. public/index.php
20. public/login.php
21. public/signup.php
22. public/dashboard.php
23. public/tickets.php

✅ CONFIGURATION (Files 24-26)
24. public/.htaccess
25. .gitignore
26. README.md

PLUS: composer.json (already created)

TOTAL: 27 files to create
```

---

## 📁 **Final Twig Project Structure**
```
twig-implementation/
│
├── vendor/                         # Composer dependencies (auto-created)
│   └── twig/
│
├── public/                         # WEB ROOT - Entry point
│   ├── css/
│   │   ├── global.css             # ✅ YOU CREATE
│   │   ├── components.css         # ✅ YOU CREATE
│   │   └── pages.css              # ✅ YOU CREATE
│   │
│   ├── js/
│   │   ├── auth.js                # ✅ YOU CREATE
│   │   ├── storage.js             # ✅ YOU CREATE
│   │   ├── toast.js               # ✅ YOU CREATE
│   │   └── validation.js          # ✅ YOU CREATE
│   │
│   ├── index.php                  # ✅ YOU CREATE (landing page)
│   ├── login.php                  # ✅ YOU CREATE
│   ├── signup.php                 # ✅ YOU CREATE
│   ├── dashboard.php              # ✅ YOU CREATE
│   ├── tickets.php                # ✅ YOU CREATE
│   └── .htaccess                  # ✅ YOU CREATE
│
├── src/
│   ├── Controllers/
│   │   └── PageController.php     # ✅ YOU CREATE
│   │
│   └── Utils/
│       ├── Session.php            # ✅ YOU CREATE
│       └── Router.php             # ✅ YOU CREATE
│
├── templates/
│   ├── layout/
│   │   ├── base.html.twig         # ✅ YOU CREATE
│   │   ├── header.html.twig       # ✅ YOU CREATE
│   │   └── footer.html.twig       # ✅ YOU CREATE
│   │
│   └── pages/
│       ├── landing.html.twig      # ✅ YOU CREATE
│       ├── login.html.twig        # ✅ YOU CREATE
│       ├── signup.html.twig       # ✅ YOU CREATE
│       ├── dashboard.html.twig    # ✅ YOU CREATE
│       └── tickets.html.twig      # ✅ YOU CREATE
│
├── composer.json                  # ✅ YOU CREATE
├── composer.lock                  # Auto-created by composer
├── .gitignore                     # ✅ YOU CREATE
└── README.md                      # ✅ YOU CREATE
```

---

## ✅ **Verification Checklist**
```
CSS:
[ ] public/css/global.css
[ ] public/css/components.css
[ ] public/css/pages.css

JAVASCRIPT:
[ ] public/js/auth.js
[ ] public/js/storage.js
[ ] public/js/toast.js
[ ] public/js/validation.js

PHP UTILITIES:
[ ] src/Utils/Session.php
[ ] src/Utils/Router.php

PHP CONTROLLERS:
[ ] src/Controllers/PageController.php

TWIG LAYOUTS:
[ ] templates/layout/base.html.twig
[ ] templates/layout/header.html.twig
[ ] templates/layout/footer.html.twig

TWIG PAGES:
[ ] templates/pages/landing.html.twig
[ ] templates/pages/login.html.twig
[ ] templates/pages/signup.html.twig
[ ] templates/pages/dashboard.html.twig
[ ] templates/pages/tickets.html.twig

PHP ENTRY POINTS:
[ ] public/index.php
[ ] public/login.php
[ ] public/signup.php
[ ] public/dashboard.php
[ ] public/tickets.php

CONFIGURATION:
[ ] composer.json
[ ] public/.htaccess
[ ] .gitignore
[ ] README.md

TOTAL: 27 files ✅