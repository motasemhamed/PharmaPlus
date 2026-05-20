# PharmaPlus
Online Pharmacy
================================================================
        PHARMAPLUS - صيدلية فارما+ الإلكترونية
        Online Pharmacy App - Bilingual (AR/EN)
        Prototype v1.0 | Built with React.js
================================================================

DEVELOPER: Built with Claude AI (Anthropic)
DATE: May 2026
FRAMEWORK: React.js (JSX)
LANGUAGES: Arabic (RTL) + English (LTR)

----------------------------------------------------------------
PROJECT OVERVIEW | نبذة عن المشروع
----------------------------------------------------------------
PharmaPlus is a bilingual online pharmacy mobile-style web app
prototype. It includes a full customer-facing interface and an
admin dashboard, with instant language switching between Arabic
and English with full RTL/LTR support.

----------------------------------------------------------------
APP SECTIONS | أقسام التطبيق
----------------------------------------------------------------

[USER INTERFACE - واجهة المستخدم]
  1. Home Screen          - الرئيسية
     - Promotional banner / بانر العروض
     - Search bar / بحث الأدوية
     - Product categories / التصنيفات
     - Featured products / المنتجات المميزة
     - Quick actions (Prescription, Consult, Interactions, Points)

  2. Products Page        - المنتجات
     - Grid view with filters / عرض شبكي مع فلاتر
     - Category chips / اختيار التصنيف
     - In-stock / out-of-stock badges / شارات التوفر
     - Prescription-required (Rx) indicator

  3. Product Detail       - تفاصيل المنتج
     - Full product info / معلومات كاملة
     - Dosage / الجرعة
     - Side effects / الأعراض الجانبية
     - Contraindications / موانع الاستخدام
     - Manufacturer & active ingredient

  4. Shopping Cart        - سلة التسوق
     - Add / remove / update quantities
     - Subtotal & free delivery notice
     - Order confirmation

  5. My Orders            - طلباتي
     - Order history / سجل الطلبات
     - Status tracking / تتبع الحالة
     - (Pending, Processing, Shipped, Delivered, Cancelled)

  6. Prescription Upload  - الوصفة الطبية
     - Upload Rx image / رفع صورة الوصفة
     - Pharmacist review status / حالة مراجعة الصيدلاني
     - Security & privacy notes

  7. User Profile         - الملف الشخصي
     - Points & order count / النقاط وعدد الطلبات
     - Wishlist count / المفضلة
     - Language toggle / تبديل اللغة
     - Settings & notifications
     - Access to Admin Panel

[ADMIN DASHBOARD - لوحة الإدارة]
  1. Dashboard            - الرئيسية
     - Total orders, users, revenue, products
     - Recent orders list
     - Top-selling products

  2. Manage Products      - إدارة المنتجات
     - Add new product / إضافة منتج
     - Edit product / تعديل
     - Delete product / حذف
     - Stock level indicators (Low/OK/Out)

  3. Manage Orders        - إدارة الطلبات
     - View all orders with customer info
     - Update order status via dropdown
     - Total value per order

  4. Manage Users         - إدارة المستخدمين
     - Customer list / قائمة العملاء
     - Points, order count, join date per user

----------------------------------------------------------------
MOCK DATA INCLUDED | بيانات تجريبية مدرجة
----------------------------------------------------------------
Products (8):
  - Panadol Extra 500mg    | بنادول إكسترا
  - Augmentin 625mg        | أوجمنتين (Rx)
  - Glucophage 500mg       | جلوكوفاج (Rx)
  - Vitamin D3 5000 IU     | فيتامين د3
  - Omega-3 Fish Oil       | أوميجا-3
  - Cetaphil Moisturizer   | سيتافيل
  - Nexium 40mg            | نيكسيوم (Rx)
  - Pampers Baby Wipes     | مناديل بامبرز

Orders (4): With different statuses for demo
Users (4): With points and order history

----------------------------------------------------------------
HOW TO RUN LOCALLY | تشغيل المشروع محلياً
----------------------------------------------------------------
Requirements: Node.js v18+ (https://nodejs.org)

Step 1: Create React App
  npx create-react-app my-pharmacy
  cd my-pharmacy

Step 2: Replace App.js
  - Open: src/App.js
  - Delete all content
  - Paste the full content of pharmacy-app.jsx

Step 3: Install Google Fonts (optional, already loaded via CDN)

Step 4: Run
  npm start

Step 5: Open browser
  http://localhost:3000

----------------------------------------------------------------
HOW TO DEPLOY (FREE) | النشر مجاناً على الإنترنت
----------------------------------------------------------------
Option A - Vercel (Recommended):
  1. Push project to GitHub
  2. Go to https://vercel.com
  3. Import your GitHub repo
  4. Click Deploy → Done!
  Result: https://your-app.vercel.app

Option B - Netlify:
  1. Run: npm run build
  2. Go to https://netlify.com
  3. Drag & drop the /build folder
  Result: https://your-app.netlify.app

Option C - GitHub Pages:
  1. npm install gh-pages --save-dev
  2. Add to package.json: "homepage": "https://username.github.io/repo"
  3. npm run deploy

----------------------------------------------------------------
HOW TO CONVERT TO ANDROID APK | تحويل لتطبيق أندرويد
----------------------------------------------------------------
Method 1 - Capacitor (Recommended):
  npm install @capacitor/core @capacitor/cli @capacitor/android
  npx cap init
  npm run build
  npx cap add android
  npx cap open android
  → Build APK from Android Studio

Method 2 - React Native:
  Rewrite components using React Native primitives
  (View, Text, TouchableOpacity instead of div, span, button)
  npx react-native run-android

----------------------------------------------------------------
FEATURES READY FOR DEVELOPMENT | ميزات جاهزة للتطوير
----------------------------------------------------------------
[ ] Backend API integration (Node.js / Laravel / Django)
[ ] Real authentication (JWT / Firebase)
[ ] Payment gateway (Stripe / Paymob / Fawry)
[ ] Real-time order tracking (Google Maps API)
[ ] Push notifications (Firebase Cloud Messaging)
[ ] Pharmacist chat (WebSocket / Twilio)
[ ] Drug interaction API (RxNorm / DrugBank)
[ ] Database (PostgreSQL / MongoDB)
[ ] Image upload for prescriptions (AWS S3 / Cloudinary)
[ ] Admin analytics charts (Recharts / Chart.js)

----------------------------------------------------------------
FILE STRUCTURE | هيكل الملفات
----------------------------------------------------------------
my-pharmacy/
├── public/
│   └── index.html
├── src/
│   ├── App.js          ← Replace with pharmacy-app.jsx content
│   └── index.js
├── package.json
└── README.txt          ← This file

----------------------------------------------------------------
TECH STACK | التقنيات المستخدمة
----------------------------------------------------------------
- React.js 18+ (Hooks: useState, useEffect)
- CSS-in-JS (inline styles)
- Google Fonts: Cairo (AR) + Nunito (EN)
- No external UI library (pure React)
- No backend (prototype/mock data only)

----------------------------------------------------------------
COLOR PALETTE | لوحة الألوان
----------------------------------------------------------------
Primary:     #00897B  (Teal Green)
Secondary:   #00BFA5  (Light Teal)
Accent:      #FF6B35  (Orange)
Danger:      #E53935  (Red)
Background:  #F0F4F8  (Light Gray)
Text:        #1A2340  (Dark Navy)

----------------------------------------------------------------
CONTACT & SUPPORT
----------------------------------------------------------------
For customization, backend integration, or Android conversion,
contact your developer.

================================================================
                    PharmaPlus v1.0 © 2026
================================================================
