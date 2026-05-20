import { useState, useEffect } from "react";

// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    appName: "PharmaPlus", tagline: "Your Health, Our Priority",
    home: "Home", products: "Products", cart: "Cart", orders: "Orders",
    profile: "Profile", admin: "Admin", search: "Search medicines...",
    categories: "Categories", featured: "Featured Products", offers: "Today's Offers",
    addToCart: "Add to Cart", viewAll: "View All", inCart: "In Cart",
    prescription: "Upload Prescription", myOrders: "My Orders",
    allProducts: "All Products", filter: "Filter", sortBy: "Sort By",
    price: "Price", rating: "Rating", inStock: "In Stock",
    outOfStock: "Out of Stock", qty: "Qty", total: "Total",
    checkout: "Checkout", continueShopping: "Continue Shopping",
    emptyCart: "Your cart is empty", orderNow: "Place Order",
    orderPlaced: "Order Placed!", trackOrder: "Track Order",
    status: "Status", pending: "Pending", processing: "Processing",
    shipped: "Shipped", delivered: "Delivered", cancelled: "Cancelled",
    dashboard: "Dashboard", manageProducts: "Manage Products",
    manageOrders: "Manage Orders", manageUsers: "Manage Users",
    totalSales: "Total Sales", totalOrders: "Total Orders",
    totalUsers: "Total Users", revenue: "Revenue",
    addProduct: "Add Product", editProduct: "Edit Product",
    deleteProduct: "Delete Product", productName: "Product Name",
    stockQty: "Stock Qty", category: "Category", save: "Save",
    cancel: "Cancel", update: "Update Status", name: "Name",
    email: "Email", phone: "Phone", joined: "Joined",
    uploadRx: "Upload Rx Image", rxPending: "Awaiting Pharmacist Review",
    rxApproved: "Prescription Approved", contraindications: "Contraindications",
    sideEffects: "Side Effects", dosage: "Dosage", manufacturer: "Manufacturer",
    activeIngredient: "Active Ingredient", language: "العربية",
    logout: "Logout", settings: "Settings", account: "My Account",
    notifications: "Notifications", requiredRx: "Prescription Required",
    freeDelivery: "Free Delivery", points: "Points", myPoints: "My Points",
    greeting: "Hello,", user: "User", consult: "Consult Pharmacist",
    chatNow: "Chat Now", interactions: "Drug Interactions Checker",
    check: "Check Now", supplements: "Supplements", skincare: "Skincare",
    babycare: "Baby Care", vitamins: "Vitamins", painRelief: "Pain Relief",
    antibiotics: "Antibiotics", diabetes: "Diabetes", heart: "Heart Health",
    noOrders: "No orders yet", backToHome: "Back to Home",
    detailsTitle: "Product Details", reviews: "Reviews", share: "Share",
    wishlist: "Wishlist", similar: "Similar Products",
    pharmacyName: "PharmaPlus Online Pharmacy",
    address: "123 Health St, Cairo, Egypt",
    hotline: "Hotline: 19999",
    successMsg: "Added to cart successfully!",
    login: "Login", register: "Register", welcome: "Welcome Back!",
    analytics: "Analytics", topProducts: "Top Products",
    recentOrders: "Recent Orders",
  },
  ar: {
    appName: "فارما+", tagline: "صحتك، أولويتنا",
    home: "الرئيسية", products: "المنتجات", cart: "السلة", orders: "طلباتي",
    profile: "حسابي", admin: "الإدارة", search: "ابحث عن دواء...",
    categories: "التصنيفات", featured: "منتجات مميزة", offers: "عروض اليوم",
    addToCart: "أضف للسلة", viewAll: "عرض الكل", inCart: "في السلة",
    prescription: "رفع وصفة طبية", myOrders: "طلباتي",
    allProducts: "جميع المنتجات", filter: "تصفية", sortBy: "ترتيب حسب",
    price: "السعر", rating: "التقييم", inStock: "متوفر",
    outOfStock: "غير متوفر", qty: "الكمية", total: "الإجمالي",
    checkout: "إتمام الشراء", continueShopping: "مواصلة التسوق",
    emptyCart: "سلتك فارغة", orderNow: "تأكيد الطلب",
    orderPlaced: "تم الطلب!", trackOrder: "تتبع الطلب",
    status: "الحالة", pending: "قيد الانتظار", processing: "جاري التجهيز",
    shipped: "تم الشحن", delivered: "تم التسليم", cancelled: "ملغي",
    dashboard: "لوحة التحكم", manageProducts: "إدارة المنتجات",
    manageOrders: "إدارة الطلبات", manageUsers: "إدارة المستخدمين",
    totalSales: "إجمالي المبيعات", totalOrders: "إجمالي الطلبات",
    totalUsers: "إجمالي المستخدمين", revenue: "الإيرادات",
    addProduct: "إضافة منتج", editProduct: "تعديل المنتج",
    deleteProduct: "حذف المنتج", productName: "اسم المنتج",
    stockQty: "الكمية المتاحة", category: "الفئة", save: "حفظ",
    cancel: "إلغاء", update: "تحديث الحالة", name: "الاسم",
    email: "البريد الإلكتروني", phone: "الهاتف", joined: "تاريخ الانضمام",
    uploadRx: "رفع صورة الوصفة", rxPending: "بانتظار مراجعة الصيدلاني",
    rxApproved: "تمت الموافقة على الوصفة", contraindications: "موانع الاستخدام",
    sideEffects: "الأعراض الجانبية", dosage: "الجرعة", manufacturer: "الشركة المصنعة",
    activeIngredient: "المادة الفعالة", language: "English",
    logout: "تسجيل الخروج", settings: "الإعدادات", account: "حسابي",
    notifications: "الإشعارات", requiredRx: "يستلزم وصفة طبية",
    freeDelivery: "توصيل مجاني", points: "نقطة", myPoints: "نقاطي",
    greeting: "أهلاً،", user: "مستخدم", consult: "استشر صيدلانياً",
    chatNow: "تحدث الآن", interactions: "فاحص التفاعلات الدوائية",
    check: "افحص الآن", supplements: "مكملات غذائية", skincare: "العناية بالبشرة",
    babycare: "العناية بالطفل", vitamins: "الفيتامينات", painRelief: "مسكنات الألم",
    antibiotics: "مضادات حيوية", diabetes: "السكري", heart: "صحة القلب",
    noOrders: "لا توجد طلبات بعد", backToHome: "العودة للرئيسية",
    detailsTitle: "تفاصيل المنتج", reviews: "التقييمات", share: "مشاركة",
    wishlist: "المفضلة", similar: "منتجات مشابهة",
    pharmacyName: "صيدلية فارما+ الإلكترونية",
    address: "١٢٣ شارع الصحة، القاهرة، مصر",
    hotline: "خط ساخن: ١٩٩٩٩",
    successMsg: "تمت الإضافة إلى السلة!",
    login: "تسجيل الدخول", register: "إنشاء حساب", welcome: "مرحباً بعودتك!",
    analytics: "الإحصائيات", topProducts: "المنتجات الأكثر مبيعاً",
    recentOrders: "أحدث الطلبات",
  }
};

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id:1, nameEn:"Panadol Extra 500mg", nameAr:"بنادول إكسترا 500مج", price:45, oldPrice:55, category:"painRelief", stock:120, rating:4.8, reviews:234, rx:false, img:"💊", ingredient:"Paracetamol", mfr:"GSK", dosageEn:"1-2 tablets every 4-6h", dosageAr:"قرص إلى قرصين كل 4-6 ساعات", sideEn:"Nausea, liver issues if overdose", sideAr:"غثيان، مشاكل بالكبد عند الجرعات الزائدة", contraEn:"Liver disease, alcohol use", contraAr:"أمراض الكبد، استهلاك الكحول", badge:"Best Seller" },
  { id:2, nameEn:"Augmentin 625mg", nameAr:"أوجمنتين 625مج", price:180, oldPrice:null, category:"antibiotics", stock:45, rating:4.6, reviews:89, rx:true, img:"💉", ingredient:"Amoxicillin+Clavulanate", mfr:"GSK", dosageEn:"One tablet twice daily", dosageAr:"قرص مرتين يومياً", sideEn:"Diarrhea, nausea, allergic reaction", sideAr:"إسهال، غثيان، تفاعل تحسسي", contraEn:"Penicillin allergy, liver disease", contraAr:"حساسية البنسلين، أمراض الكبد", badge:null },
  { id:3, nameEn:"Glucophage 500mg", nameAr:"جلوكوفاج 500مج", price:38, oldPrice:null, category:"diabetes", stock:200, rating:4.9, reviews:412, rx:true, img:"🩺", ingredient:"Metformin", mfr:"Merck", dosageEn:"1-3 tablets daily with meals", dosageAr:"1-3 أقراص يومياً مع الطعام", sideEn:"GI upset, lactic acidosis (rare)", sideAr:"اضطرابات هضمية، حماض لبني (نادر)", contraEn:"Kidney failure, contrast media", contraAr:"فشل كلوي، صبغة الأشعة", badge:"Popular" },
  { id:4, nameEn:"Vitamin D3 5000 IU", nameAr:"فيتامين د3 5000 وحدة", price:95, oldPrice:120, category:"vitamins", stock:300, rating:4.7, reviews:567, rx:false, img:"☀️", ingredient:"Cholecalciferol", mfr:"Nature Made", dosageEn:"One capsule daily", dosageAr:"كبسولة واحدة يومياً", sideEn:"Hypercalcemia if overused", sideAr:"ارتفاع الكالسيوم عند الإفراط", contraEn:"Hypercalcemia, kidney stones", contraAr:"ارتفاع الكالسيوم، حصوات الكلى", badge:"20% OFF" },
  { id:5, nameEn:"Omega-3 Fish Oil", nameAr:"أوميجا-3 زيت السمك", price:130, oldPrice:150, category:"supplements", stock:89, rating:4.5, reviews:203, rx:false, img:"🐟", ingredient:"EPA + DHA", mfr:"Now Foods", dosageEn:"2 capsules with food", dosageAr:"2 كبسولات مع الطعام", sideEn:"Fishy breath, GI upset", sideAr:"رائحة السمك، اضطرابات هضمية", contraEn:"Fish allergy, blood thinners", contraAr:"حساسية للسمك، مميعات الدم", badge:null },
  { id:6, nameEn:"Cetaphil Moisturizer", nameAr:"سيتافيل مرطب", price:245, oldPrice:280, category:"skincare", stock:60, rating:4.8, reviews:891, rx:false, img:"🧴", ingredient:"Glycerin, Petrolatum", mfr:"Galderma", dosageEn:"Apply twice daily", dosageAr:"يوضع مرتين يومياً", sideEn:"Rare: skin irritation", sideAr:"نادر: تهيج جلدي", contraEn:"Known ingredient allergy", contraAr:"حساسية لأي مكون", badge:"Top Rated" },
  { id:7, nameEn:"Nexium 40mg", nameAr:"نيكسيوم 40مج", price:210, oldPrice:null, category:"heart", stock:30, rating:4.7, reviews:145, rx:true, img:"❤️", ingredient:"Esomeprazole", mfr:"AstraZeneca", dosageEn:"One capsule daily before meal", dosageAr:"كبسولة واحدة قبل الطعام", sideEn:"Headache, diarrhea, nausea", sideAr:"صداع، إسهال، غثيان", contraEn:"Allergy to PPIs", contraAr:"حساسية لمثبطات البروتون", badge:null },
  { id:8, nameEn:"Pampers Baby Wipes", nameAr:"مناديل بامبرز للأطفال", price:75, oldPrice:85, category:"babycare", stock:500, rating:4.9, reviews:1204, rx:false, img:"👶", ingredient:"Aloe vera, Vitamin E", mfr:"P&G", dosageEn:"External use only", dosageAr:"للاستخدام الخارجي فقط", sideEn:"Rare: skin rash in sensitive skin", sideAr:"نادر: طفح جلدي للبشرة الحساسة", contraEn:"Skin allergy to ingredients", contraAr:"حساسية للمكونات", badge:"Bundle Deal" },
];

const ORDERS = [
  { id:"ORD-2024-001", date:"2024-12-10", items:["Panadol Extra x2","Vitamin D3 x1"], total:185, status:"delivered", customer:"Ahmed Ali" },
  { id:"ORD-2024-002", date:"2024-12-12", items:["Augmentin 625mg x1","Omega-3 x1"], total:310, status:"shipped", customer:"Sara Mohamed" },
  { id:"ORD-2024-003", date:"2024-12-14", items:["Glucophage 500mg x2","Nexium 40mg x1"], total:286, status:"processing", customer:"Omar Hassan" },
  { id:"ORD-2024-004", date:"2024-12-15", items:["Cetaphil Moisturizer x1"], total:245, status:"pending", customer:"Mona Khaled" },
];

const USERS = [
  { id:1, name:"Ahmed Ali", email:"ahmed@email.com", phone:"01012345678", joined:"2024-01-15", orders:12, points:340 },
  { id:2, name:"Sara Mohamed", email:"sara@email.com", phone:"01123456789", joined:"2024-03-22", orders:7, points:210 },
  { id:3, name:"Omar Hassan", email:"omar@email.com", phone:"01234567890", joined:"2024-06-08", orders:23, points:690 },
  { id:4, name:"Mona Khaled", email:"mona@email.com", phone:"01098765432", joined:"2024-09-30", orders:4, points:120 },
];

const CATS = ["painRelief","antibiotics","diabetes","vitamins","supplements","skincare","heart","babycare"];
const CAT_ICONS = { painRelief:"💊", antibiotics:"💉", diabetes:"🩺", vitamins:"☀️", supplements:"🐟", skincare:"🧴", heart:"❤️", babycare:"👶" };

// ── Helpers ───────────────────────────────────────────────────────────────────
const statusColor = (s) => ({ delivered:"#00897B", shipped:"#1E88E5", processing:"#FB8C00", pending:"#757575", cancelled:"#E53935" }[s] || "#757575");

export default function PharmacyApp() {
  const [lang, setLang] = useState("ar");
  const [view, setView] = useState("home");
  const [prevView, setPrevView] = useState("home");
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [adminTab, setAdminTab] = useState("dashboard");
  const [searchQ, setSearchQ] = useState("");
  const [selCat, setSelCat] = useState("all");
  const [notification, setNotification] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [rxUploaded, setRxUploaded] = useState(false);
  const [orders, setOrders] = useState(ORDERS);
  const [products, setProducts] = useState(PRODUCTS);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const t = T[lang];
  const isRtl = lang === "ar";
  const dir = isRtl ? "rtl" : "ltr";
  const font = isRtl ? "'Cairo', sans-serif" : "'Nunito', sans-serif";

  const navigate = (v) => { setPrevView(view); setView(v); };

  const addToCart = (p) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === p.id);
      if (ex) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty+1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
    setNotification(t.successMsg);
    setTimeout(() => setNotification(""), 2000);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, d) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty+d) } : i));
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const filteredProducts = products.filter(p => {
    const nm = lang === "ar" ? p.nameAr : p.nameEn;
    const matchQ = nm.toLowerCase().includes(searchQ.toLowerCase()) || p.ingredient.toLowerCase().includes(searchQ.toLowerCase());
    const matchC = selCat === "all" || p.category === selCat;
    return matchQ && matchC;
  });

  const updateOrderStatus = (id, status) => setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));

  // Styles
  const S = {
    wrap: { fontFamily: font, background: "#F0F4F8", minHeight: "100vh", maxWidth: 430, margin: "0 auto", position: "relative", overflow: "hidden", direction: dir },
    phone: { background: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 0 40px rgba(0,0,0,0.18)" },
    header: { background: "linear-gradient(135deg, #00897B 0%, #00BFA5 100%)", padding: "14px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 },
    headerTitle: { color: "#fff", fontWeight: 800, fontSize: 20 },
    content: { flex: 1, overflowY: "auto", paddingBottom: 70 },
    bottomNav: { position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#fff", borderTop: "1px solid #E0E0E0", display: "flex", zIndex: 200, boxShadow: "0 -2px 12px rgba(0,0,0,0.08)" },
    navItem: (active) => ({ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 4px 6px", cursor: "pointer", color: active ? "#00897B" : "#9E9E9E", transition: "color 0.2s" }),
    navIcon: { fontSize: 22 },
    navLabel: { fontSize: 10, marginTop: 2, fontWeight: 600 },
    card: { background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", overflow: "hidden" },
    badge: (c) => ({ background: c || "#FF6B35", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20 }),
    btn: (v, sm) => ({ background: v === "outline" ? "transparent" : v === "danger" ? "#E53935" : "#00897B", color: v === "outline" ? "#00897B" : "#fff", border: v === "outline" ? "1.5px solid #00897B" : "none", borderRadius: 10, padding: sm ? "6px 14px" : "12px 20px", fontWeight: 700, cursor: "pointer", fontSize: sm ? 12 : 14, fontFamily: font }),
    chip: (active) => ({ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${active ? "#00897B" : "#E0E0E0"}`, background: active ? "#00897B" : "#fff", color: active ? "#fff" : "#666", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }),
    input: { border: "1.5px solid #E0E0E0", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: font, width: "100%", outline: "none", boxSizing: "border-box", background: "#FAFAFA" },
    sectionTitle: { fontSize: 16, fontWeight: 800, color: "#1A2340", margin: "16px 16px 8px" },
    priceTag: { color: "#00897B", fontWeight: 800, fontSize: 15 },
    oldPrice: { color: "#BDBDBD", textDecoration: "line-through", fontSize: 12, marginInlineStart: 4 },
    starRow: { display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#FB8C00" },
    tag: (c) => ({ display: "inline-block", background: c+"22", color: c, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6 }),
    statCard: (c) => ({ background: `linear-gradient(135deg, ${c}22, ${c}11)`, border: `1.5px solid ${c}44`, borderRadius: 14, padding: "14px 16px", flex: 1 }),
  };

  // ── Notification Toast ────────────────────────────────────────────────────
  const Toast = () => notification ? (
    <div style={{ position: "fixed", top: 70, left: "50%", transform: "translateX(-50%)", background: "#00897B", color: "#fff", padding: "10px 24px", borderRadius: 30, fontSize: 13, fontWeight: 700, zIndex: 9999, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", whiteSpace: "nowrap" }}>
      ✅ {notification}
    </div>
  ) : null;

  // ── HOME VIEW ─────────────────────────────────────────────────────────────
  const HomeView = () => (
    <div style={S.content}>
      {/* Search Bar */}
      <div style={{ padding: "12px 16px" }}>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", [isRtl ? "right" : "left"]: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
          <input style={{ ...S.input, [isRtl ? "paddingRight" : "paddingLeft"]: 38 }} placeholder={t.search} value={searchQ} onChange={e => { setSearchQ(e.target.value); if (e.target.value) navigate("products"); }} />
        </div>
      </div>

      {/* Banner */}
      <div style={{ margin: "0 16px 12px", borderRadius: 18, background: "linear-gradient(135deg, #004D40, #00897B)", padding: "20px 22px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 10, top: -10, fontSize: 80, opacity: 0.15 }}>💊</div>
        <div style={{ fontSize: 11, fontWeight: 600, background: "#FF6B35", display: "inline-block", padding: "3px 10px", borderRadius: 20, marginBottom: 8 }}>🎉 {t.offers}</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{lang==="ar" ? "خصم 20% على الفيتامينات" : "20% OFF on Vitamins"}</div>
        <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 14 }}>{lang==="ar" ? "لفترة محدودة - اطلب الآن!" : "Limited time offer - Order Now!"}</div>
        <button style={{ ...S.btn(), fontSize: 12, padding: "8px 18px" }} onClick={() => { setSelCat("vitamins"); navigate("products"); }}>
          {t.viewAll} →
        </button>
      </div>

      {/* Quick Actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 16px 4px" }}>
        {[
          { icon: "📋", label: t.prescription, color: "#3F51B5", action: () => navigate("prescription") },
          { icon: "💬", label: t.consult, color: "#7B1FA2", action: () => alert(lang==="ar" ? "سيتم الاتصال بصيدلاني قريباً" : "Pharmacist will connect shortly") },
          { icon: "🔄", label: t.interactions, color: "#E65100", action: () => alert(lang==="ar" ? "جاري التطوير" : "Coming soon") },
          { icon: "⭐", label: t.myPoints, color: "#F57F17", action: () => navigate("profile") },
        ].map((a, i) => (
          <div key={i} onClick={a.action} style={{ ...S.card, padding: "14px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, background: a.color+"18", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{a.icon}</div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#333", flex: 1 }}>{a.label}</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div style={S.sectionTitle}>{t.categories}</div>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", padding: "0 16px 4px", scrollbarWidth: "none" }}>
        {CATS.map(c => (
          <div key={c} onClick={() => { setSelCat(c); navigate("products"); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", minWidth: 68 }}>
            <div style={{ width: 56, height: 56, background: "#E8F5E9", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{CAT_ICONS[c]}</div>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#444", textAlign: "center" }}>{t[c]}</span>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 16px 8px" }}>
        <span style={{ ...S.sectionTitle, margin: 0 }}>{t.featured}</span>
        <span onClick={() => navigate("products")} style={{ fontSize: 12, color: "#00897B", fontWeight: 700, cursor: "pointer" }}>{t.viewAll}</span>
      </div>
      <div style={{ display: "flex", gap: 12, overflowX: "auto", padding: "0 16px 16px", scrollbarWidth: "none" }}>
        {products.slice(0, 6).map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );

  // ── Product Card ──────────────────────────────────────────────────────────
  const ProductCard = ({ p }) => {
    const nm = lang === "ar" ? p.nameAr : p.nameEn;
    const inCart = cart.some(i => i.id === p.id);
    return (
      <div style={{ ...S.card, minWidth: 155, cursor: "pointer", flexShrink: 0 }} onClick={() => { setSelected(p); navigate("detail"); }}>
        <div style={{ background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)", height: 110, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, position: "relative" }}>
          {p.img}
          {p.badge && <span style={{ ...S.badge("#FF6B35"), position: "absolute", top: 8, [isRtl ? "left" : "right"]: 8 }}>{p.badge}</span>}
          {p.rx && <span style={{ ...S.badge("#3F51B5"), position: "absolute", top: 8, [isRtl ? "right" : "left"]: 8 }}>Rx</span>}
        </div>
        <div style={{ padding: "10px 10px 12px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#222", marginBottom: 4, lineHeight: 1.3 }}>{nm}</div>
          <div style={S.starRow}>{"★".repeat(Math.floor(p.rating))}<span style={{ color: "#999" }}>({p.reviews})</span></div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 6, justifyContent: "space-between" }}>
            <div>
              <span style={S.priceTag}>{p.price} {lang==="ar"?"ج.م":"EGP"}</span>
              {p.oldPrice && <span style={S.oldPrice}>{p.oldPrice}</span>}
            </div>
          </div>
          <button style={{ ...S.btn(inCart ? "outline" : "solid", true), width: "100%", marginTop: 8 }}
            onClick={e => { e.stopPropagation(); addToCart(p); }}>
            {inCart ? "✓ "+t.inCart : "+ "+t.addToCart}
          </button>
        </div>
      </div>
    );
  };

  // ── PRODUCTS VIEW ─────────────────────────────────────────────────────────
  const ProductsView = () => (
    <div style={S.content}>
      <div style={{ padding: "12px 16px" }}>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", [isRtl?"right":"left"]: 12, top:"50%", transform:"translateY(-50%)", fontSize:16 }}>🔍</span>
          <input style={{ ...S.input, [isRtl?"paddingRight":"paddingLeft"]: 38 }} placeholder={t.search} value={searchQ} onChange={e => setSearchQ(e.target.value)} />
        </div>
      </div>
      <div style={{ display:"flex", gap:8, overflowX:"auto", padding:"0 16px 12px", scrollbarWidth:"none" }}>
        {["all", ...CATS].map(c => (
          <button key={c} style={S.chip(selCat===c)} onClick={() => setSelCat(c)}>
            {c==="all" ? (lang==="ar"?"الكل":"All") : t[c]}
          </button>
        ))}
      </div>
      <div style={{ padding:"0 16px 16px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        {filteredProducts.map(p => {
          const nm = lang==="ar" ? p.nameAr : p.nameEn;
          const inCart = cart.some(i=>i.id===p.id);
          return (
            <div key={p.id} style={{ ...S.card, cursor:"pointer" }} onClick={() => { setSelected(p); navigate("detail"); }}>
              <div style={{ background:"linear-gradient(135deg,#E8F5E9,#F1F8E9)", height:100, display:"flex", alignItems:"center", justifyContent:"center", fontSize:44, position:"relative" }}>
                {p.img}
                {p.rx && <span style={{ ...S.badge("#3F51B5"), position:"absolute", top:6, [isRtl?"right":"left"]:6, fontSize:9 }}>Rx</span>}
              </div>
              <div style={{ padding:"8px 10px 10px" }}>
                <div style={{ fontSize:11, fontWeight:700, color:"#222", marginBottom:3, lineHeight:1.3 }}>{nm}</div>
                <div style={S.starRow}>{"★".repeat(Math.floor(p.rating))}</div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:6 }}>
                  <span style={{ ...S.priceTag, fontSize:13 }}>{p.price} {lang==="ar"?"ج.م":"EGP"}</span>
                  <span style={{ fontSize:10, color: p.stock>0?"#00897B":"#E53935", fontWeight:700 }}>{p.stock>0?t.inStock:t.outOfStock}</span>
                </div>
                <button style={{ ...S.btn(inCart?"outline":"solid", true), width:"100%", marginTop:8, fontSize:11 }}
                  onClick={e=>{e.stopPropagation(); addToCart(p);}}>
                  {inCart?"✓ "+t.inCart:"+ "+t.addToCart}
                </button>
              </div>
            </div>
          );
        })}
        {filteredProducts.length === 0 && (
          <div style={{ gridColumn:"1/-1", textAlign:"center", padding:"40px 0", color:"#999" }}>
            <div style={{ fontSize:48 }}>🔍</div>
            <div style={{ marginTop:8, fontWeight:600 }}>{lang==="ar"?"لا توجد نتائج":"No results found"}</div>
          </div>
        )}
      </div>
    </div>
  );

  // ── DETAIL VIEW ───────────────────────────────────────────────────────────
  const DetailView = () => {
    if (!selected) return null;
    const nm = lang==="ar" ? selected.nameAr : selected.nameEn;
    const inCart = cart.some(i=>i.id===selected.id);
    return (
      <div style={S.content}>
        <div style={{ background:"linear-gradient(135deg,#E8F5E9,#F1F8E9)", height:220, display:"flex", alignItems:"center", justifyContent:"center", fontSize:100 }}>{selected.img}</div>
        <div style={{ padding:"16px 16px 24px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div style={{ flex:1 }}>
              <h2 style={{ margin:0, fontSize:18, fontWeight:800, color:"#1A2340" }}>{nm}</h2>
              <div style={{ color:"#666", fontSize:12, marginTop:4 }}>{selected.mfr} · {selected.ingredient}</div>
            </div>
            {selected.rx && <span style={{ ...S.badge("#3F51B5"), fontSize:11 }}>{t.requiredRx}</span>}
          </div>
          <div style={{ ...S.starRow, marginTop:8 }}>
            {"★".repeat(Math.floor(selected.rating))}
            <span style={{ color:"#555", fontWeight:600 }}>{selected.rating}</span>
            <span style={{ color:"#999" }}>({selected.reviews} {t.reviews})</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:12 }}>
            <span style={{ ...S.priceTag, fontSize:22 }}>{selected.price} {lang==="ar"?"ج.م":"EGP"}</span>
            {selected.oldPrice && <span style={S.oldPrice}>{selected.oldPrice} {lang==="ar"?"ج.م":"EGP"}</span>}
            <span style={{ ...S.tag("#00897B"), marginInlineStart:"auto" }}>{t.freeDelivery} 🚚</span>
          </div>

          {/* Info Sections */}
          {[
            { label: t.dosage, val: lang==="ar" ? selected.dosageAr : selected.dosageEn, icon:"💊" },
            { label: t.sideEffects, val: lang==="ar" ? selected.sideAr : selected.sideEn, icon:"⚠️" },
            { label: t.contraindications, val: lang==="ar" ? selected.contraAr : selected.contraEn, icon:"🚫" },
          ].map((info, i) => (
            <div key={i} style={{ background:"#F8FFFE", border:"1px solid #E0F2F1", borderRadius:12, padding:"12px 14px", marginTop:10 }}>
              <div style={{ fontSize:13, fontWeight:700, color:"#00897B", marginBottom:4 }}>{info.icon} {info.label}</div>
              <div style={{ fontSize:12, color:"#444", lineHeight:1.6 }}>{info.val}</div>
            </div>
          ))}

          <div style={{ display:"flex", gap:10, marginTop:20 }}>
            <button style={{ ...S.btn("outline"), flex:1 }} onClick={() => navigate(prevView)}>← {lang==="ar"?"رجوع":"Back"}</button>
            <button style={{ ...S.btn(), flex:2 }} onClick={() => addToCart(selected)}>
              {inCart ? "✓ "+t.inCart : t.addToCart}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ── CART VIEW ─────────────────────────────────────────────────────────────
  const CartView = () => (
    <div style={S.content}>
      {cart.length === 0 ? (
        <div style={{ textAlign:"center", padding:"60px 20px" }}>
          <div style={{ fontSize:72 }}>🛒</div>
          <div style={{ fontSize:18, fontWeight:700, color:"#555", marginTop:12 }}>{t.emptyCart}</div>
          <button style={{ ...S.btn(), marginTop:20 }} onClick={() => navigate("products")}>{t.continueShopping}</button>
        </div>
      ) : (
        <div style={{ padding:"16px" }}>
          {cart.map(item => {
            const nm = lang==="ar" ? item.nameAr : item.nameEn;
            return (
              <div key={item.id} style={{ ...S.card, padding:"12px 14px", marginBottom:10, display:"flex", gap:12, alignItems:"center" }}>
                <div style={{ width:56, height:56, background:"#E8F5E9", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, flexShrink:0 }}>{item.img}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:700, color:"#222" }}>{nm}</div>
                  <div style={{ ...S.priceTag, fontSize:14 }}>{item.price} {lang==="ar"?"ج.م":"EGP"}</div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:6 }}>
                    <button style={{ width:28, height:28, borderRadius:8, border:"1.5px solid #E0E0E0", background:"#fff", cursor:"pointer", fontWeight:800 }} onClick={() => updateQty(item.id,-1)}>-</button>
                    <span style={{ fontWeight:800, fontSize:14 }}>{item.qty}</span>
                    <button style={{ width:28, height:28, borderRadius:8, border:"1.5px solid #00897B", background:"#E8F5E9", cursor:"pointer", fontWeight:800, color:"#00897B" }} onClick={() => updateQty(item.id,1)}>+</button>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
                  <span style={{ fontWeight:800, color:"#1A2340" }}>{item.price * item.qty} {lang==="ar"?"ج.م":"EGP"}</span>
                  <button style={{ background:"#FFEBEE", border:"none", borderRadius:8, padding:"4px 10px", color:"#E53935", cursor:"pointer", fontSize:12 }} onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              </div>
            );
          })}
          <div style={{ ...S.card, padding:"16px", marginTop:12 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
              <span style={{ color:"#666", fontSize:14 }}>{lang==="ar"?"المجموع الفرعي":"Subtotal"}</span>
              <span style={{ fontWeight:700 }}>{cartTotal} {lang==="ar"?"ج.م":"EGP"}</span>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
              <span style={{ color:"#666", fontSize:14 }}>{lang==="ar"?"التوصيل":"Delivery"}</span>
              <span style={{ color:"#00897B", fontWeight:700 }}>{lang==="ar"?"مجاني":"Free"}</span>
            </div>
            <div style={{ borderTop:"1px dashed #E0E0E0", paddingTop:10, display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontWeight:800, fontSize:16 }}>{t.total}</span>
              <span style={{ ...S.priceTag, fontSize:18 }}>{cartTotal} {lang==="ar"?"ج.م":"EGP"}</span>
            </div>
          </div>
          <button style={{ ...S.btn(), width:"100%", marginTop:14, padding:"14px", fontSize:16 }}
            onClick={() => { setCart([]); setNotification(t.orderPlaced); setTimeout(()=>setNotification(""),3000); navigate("orders"); }}>
            🛍 {t.orderNow}
          </button>
        </div>
      )}
    </div>
  );

  // ── ORDERS VIEW ───────────────────────────────────────────────────────────
  const OrdersView = () => (
    <div style={S.content}>
      <div style={{ padding:"16px" }}>
        {orders.length === 0 ? (
          <div style={{ textAlign:"center", padding:"60px 20px" }}>
            <div style={{ fontSize:60 }}>📦</div>
            <div style={{ fontWeight:700, color:"#555", marginTop:12 }}>{t.noOrders}</div>
          </div>
        ) : orders.map(o => (
          <div key={o.id} style={{ ...S.card, padding:"14px 16px", marginBottom:12 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ fontWeight:800, fontSize:13, color:"#1A2340" }}>{o.id}</div>
                <div style={{ fontSize:11, color:"#999", marginTop:2 }}>{o.date}</div>
              </div>
              <span style={{ background: statusColor(o.status)+"22", color: statusColor(o.status), fontSize:11, fontWeight:700, padding:"4px 10px", borderRadius:20 }}>
                {t[o.status]}
              </span>
            </div>
            <div style={{ marginTop:10, fontSize:12, color:"#555" }}>{o.items.join(" · ")}</div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:10 }}>
              <span style={{ ...S.priceTag }}>{o.total} {lang==="ar"?"ج.م":"EGP"}</span>
              <button style={{ ...S.btn("outline", true) }}>{t.trackOrder} →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── PRESCRIPTION VIEW ─────────────────────────────────────────────────────
  const PrescriptionView = () => (
    <div style={S.content}>
      <div style={{ padding:"16px" }}>
        <div style={{ ...S.card, padding:"24px", textAlign:"center" }}>
          <div style={{ fontSize:60, marginBottom:12 }}>📋</div>
          <h3 style={{ margin:"0 0 8px", fontSize:17, color:"#1A2340" }}>{t.prescription}</h3>
          <p style={{ color:"#666", fontSize:13, lineHeight:1.6 }}>
            {lang==="ar" ? "ارفع صورة واضحة للوصفة الطبية وسيقوم صيدلانينا بمراجعتها خلال دقائق" : "Upload a clear photo of your prescription and our pharmacist will review it within minutes"}
          </p>
          {!rxUploaded ? (
            <div>
              <div style={{ border:"2px dashed #00897B", borderRadius:14, padding:"30px 20px", margin:"16px 0", cursor:"pointer", background:"#F0FFF8" }} onClick={() => setRxUploaded(true)}>
                <div style={{ fontSize:40 }}>📷</div>
                <div style={{ color:"#00897B", fontWeight:700, marginTop:8, fontSize:14 }}>{t.uploadRx}</div>
                <div style={{ color:"#999", fontSize:12, marginTop:4 }}>{lang==="ar"?"JPG، PNG، PDF":"JPG, PNG, PDF"}</div>
              </div>
              <button style={{ ...S.btn(), width:"100%" }} onClick={() => setRxUploaded(true)}>
                📤 {t.uploadRx}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ background:"#E8F5E9", borderRadius:14, padding:"20px", margin:"16px 0" }}>
                <div style={{ fontSize:36 }}>✅</div>
                <div style={{ color:"#00897B", fontWeight:800, marginTop:8 }}>{t.rxPending}</div>
                <div style={{ color:"#666", fontSize:12, marginTop:6 }}>{lang==="ar"?"سيتم التواصل معك قريباً":"We will contact you soon"}</div>
              </div>
              <button style={{ ...S.btn("outline"), width:"100%" }} onClick={() => setRxUploaded(false)}>
                {lang==="ar"?"رفع وصفة أخرى":"Upload Another"}
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div style={{ marginTop:16 }}>
          {[
            { icon:"📷", text: lang==="ar"?"تأكد من وضوح الصورة وإمكانية قراءة الوصفة بالكامل":"Ensure the image is clear and the full prescription is readable" },
            { icon:"⏱", text: lang==="ar"?"وقت المراجعة 15-30 دقيقة":"Review time: 15-30 minutes" },
            { icon:"🔒", text: lang==="ar"?"بياناتك محمية ومشفرة بالكامل":"Your data is fully encrypted and protected" },
          ].map((s, i) => (
            <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"10px 0", borderBottom:i<2?"1px solid #F0F0F0":"none" }}>
              <span style={{ fontSize:22 }}>{s.icon}</span>
              <span style={{ fontSize:13, color:"#555", flex:1, lineHeight:1.5 }}>{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── PROFILE VIEW ──────────────────────────────────────────────────────────
  const ProfileView = () => (
    <div style={S.content}>
      <div style={{ background:"linear-gradient(135deg,#00897B,#00BFA5)", padding:"28px 20px 20px", textAlign:"center" }}>
        <div style={{ width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:40, margin:"0 auto 10px" }}>👤</div>
        <div style={{ color:"#fff", fontWeight:800, fontSize:18 }}>{lang==="ar"?"أحمد علي":"Ahmed Ali"}</div>
        <div style={{ color:"rgba(255,255,255,0.85)", fontSize:13 }}>ahmed@email.com</div>
        <div style={{ display:"flex", gap:16, justifyContent:"center", marginTop:14 }}>
          {[
            { label: lang==="ar"?"طلباتي":"Orders", val:"12" },
            { label: lang==="ar"?"نقاطي":"Points", val:"340" },
            { label: lang==="ar"?"المفضلة":"Wishlist", val:"8" },
          ].map((s,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <div style={{ color:"#fff", fontWeight:800, fontSize:20 }}>{s.val}</div>
              <div style={{ color:"rgba(255,255,255,0.8)", fontSize:11 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:"16px" }}>
        {[
          { icon:"📦", label: t.myOrders, action: () => navigate("orders") },
          { icon:"📋", label: t.prescription, action: () => navigate("prescription") },
          { icon:"🔔", label: t.notifications, action: ()=>{} },
          { icon:"📍", label: lang==="ar"?"عناويني":"My Addresses", action: ()=>{} },
          { icon:"🌐", label: t.language, action: () => setLang(l => l==="ar"?"en":"ar") },
          { icon:"⚙️", label: t.settings, action: ()=>{} },
          { icon:"🛡", label: isAdmin ? (lang==="ar"?"لوحة الإدارة":"Admin Panel") : (lang==="ar"?"دخول الإدارة":"Admin Access"), action: () => { setIsAdmin(true); navigate("admin"); } },
          { icon:"🚪", label: t.logout, action: ()=>{}, danger: true },
        ].map((item, i) => (
          <div key={i} onClick={item.action} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 4px", borderBottom:i<7?"1px solid #F5F5F5":"none", cursor:"pointer" }}>
            <span style={{ fontSize:22 }}>{item.icon}</span>
            <span style={{ flex:1, fontWeight:600, fontSize:14, color: item.danger?"#E53935":"#333" }}>{item.label}</span>
            <span style={{ color:"#BDBDBD", fontSize:18 }}>{isRtl?"‹":"›"}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // ── ADMIN VIEW ────────────────────────────────────────────────────────────
  const AdminView = () => {
    const [newProduct, setNewProduct] = useState({ nameEn:"", nameAr:"", price:"", stock:"", category:"painRelief", rx:false, img:"💊" });

    const totalRevenue = orders.reduce((s,o) => s+o.total, 0);

    return (
      <div style={S.content}>
        {/* Admin Tabs */}
        <div style={{ display:"flex", background:"#fff", borderBottom:"1px solid #E0E0E0", position:"sticky", top:0, zIndex:50 }}>
          {[
            { key:"dashboard", icon:"📊", label: t.dashboard },
            { key:"products", icon:"💊", label: lang==="ar"?"المنتجات":"Products" },
            { key:"orders", icon:"📦", label: lang==="ar"?"الطلبات":"Orders" },
            { key:"users", icon:"👥", label: lang==="ar"?"المستخدمين":"Users" },
          ].map(tab => (
            <div key={tab.key} onClick={() => setAdminTab(tab.key)} style={{ flex:1, padding:"10px 4px", textAlign:"center", cursor:"pointer", borderBottom: adminTab===tab.key ? "2.5px solid #00897B" : "2.5px solid transparent", color: adminTab===tab.key ? "#00897B" : "#999" }}>
              <div style={{ fontSize:18 }}>{tab.icon}</div>
              <div style={{ fontSize:9, fontWeight:700, marginTop:2 }}>{tab.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard Tab */}
        {adminTab==="dashboard" && (
          <div style={{ padding:"16px" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
              {[
                { label: t.totalOrders, val: orders.length, icon:"📦", color:"#00897B" },
                { label: t.totalUsers, val: USERS.length, icon:"👥", color:"#3F51B5" },
                { label: t.revenue, val: totalRevenue+" ج.م", icon:"💰", color:"#FB8C00" },
                { label: lang==="ar"?"المنتجات":"Products", val: products.length, icon:"💊", color:"#E91E63" },
              ].map((s, i) => (
                <div key={i} style={{ ...S.statCard(s.color), display:"flex", flexDirection:"column", gap:4 }}>
                  <div style={{ fontSize:24 }}>{s.icon}</div>
                  <div style={{ fontWeight:800, fontSize:20, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize:11, color:"#666" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={S.sectionTitle}>{t.recentOrders}</div>
            {orders.slice(0,3).map(o => (
              <div key={o.id} style={{ ...S.card, padding:"12px 14px", marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:12, color:"#333" }}>{o.id}</div>
                  <div style={{ fontSize:11, color:"#999" }}>{o.customer}</div>
                </div>
                <div style={{ textAlign: isRtl?"left":"right" }}>
                  <span style={{ background: statusColor(o.status)+"22", color: statusColor(o.status), fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:12 }}>{t[o.status]}</span>
                  <div style={{ fontWeight:700, color:"#00897B", marginTop:4, fontSize:13 }}>{o.total} ج.م</div>
                </div>
              </div>
            ))}

            <div style={S.sectionTitle}>{t.topProducts}</div>
            {products.sort((a,b)=>b.reviews-a.reviews).slice(0,3).map(p => (
              <div key={p.id} style={{ ...S.card, padding:"12px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ fontSize:28 }}>{p.img}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:12 }}>{lang==="ar"?p.nameAr:p.nameEn}</div>
                  <div style={{ fontSize:11, color:"#999" }}>{p.reviews} {t.reviews}</div>
                </div>
                <span style={{ ...S.priceTag, fontSize:13 }}>{p.price} ج.م</span>
              </div>
            ))}
          </div>
        )}

        {/* Products Tab */}
        {adminTab==="products" && (
          <div style={{ padding:"16px" }}>
            <button style={{ ...S.btn(), width:"100%", marginBottom:14 }} onClick={() => setShowProductModal(true)}>
              + {t.addProduct}
            </button>
            {products.map(p => (
              <div key={p.id} style={{ ...S.card, padding:"12px 14px", marginBottom:10, display:"flex", gap:12, alignItems:"center" }}>
                <div style={{ fontSize:30, width:44, height:44, background:"#E8F5E9", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>{p.img}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:12 }}>{lang==="ar"?p.nameAr:p.nameEn}</div>
                  <div style={{ fontSize:11, color:"#666" }}>{p.price} ج.م · {lang==="ar"?"المخزون:":"Stock:"} {p.stock}</div>
                  <div style={{ fontSize:10, color: p.stock>50?"#00897B":p.stock>0?"#FB8C00":"#E53935", fontWeight:700, marginTop:2 }}>
                    {p.stock>50?"● "+t.inStock:p.stock>0?"● "+lang==="ar"?"مخزون منخفض":"Low Stock":"● "+t.outOfStock}
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  <button style={{ ...S.btn("outline", true), fontSize:10, padding:"4px 10px" }} onClick={() => setEditingProduct(p)}>{lang==="ar"?"تعديل":"Edit"}</button>
                  <button style={{ ...S.btn("danger", true), fontSize:10, padding:"4px 10px" }} onClick={() => setProducts(prev => prev.filter(x=>x.id!==p.id))}>{lang==="ar"?"حذف":"Del"}</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Orders Tab */}
        {adminTab==="orders" && (
          <div style={{ padding:"16px" }}>
            {orders.map(o => (
              <div key={o.id} style={{ ...S.card, padding:"14px 16px", marginBottom:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between" }}>
                  <div>
                    <div style={{ fontWeight:800, fontSize:13 }}>{o.id}</div>
                    <div style={{ fontSize:12, color:"#555", marginTop:2 }}>👤 {o.customer}</div>
                    <div style={{ fontSize:11, color:"#999" }}>📅 {o.date}</div>
                  </div>
                  <span style={{ background: statusColor(o.status)+"22", color: statusColor(o.status), fontSize:11, fontWeight:700, padding:"4px 10px", borderRadius:20, height:"fit-content" }}>{t[o.status]}</span>
                </div>
                <div style={{ fontSize:12, color:"#666", margin:"8px 0" }}>{o.items.join(" · ")}</div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={S.priceTag}>{o.total} ج.م</span>
                  <select style={{ ...S.input, width:"auto", fontSize:12, padding:"6px 10px" }} value={o.status} onChange={e => updateOrderStatus(o.id, e.target.value)}>
                    {["pending","processing","shipped","delivered","cancelled"].map(s => (
                      <option key={s} value={s}>{t[s]}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Users Tab */}
        {adminTab==="users" && (
          <div style={{ padding:"16px" }}>
            {USERS.map(u => (
              <div key={u.id} style={{ ...S.card, padding:"14px 16px", marginBottom:12 }}>
                <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                  <div style={{ width:44, height:44, borderRadius:"50%", background:"#E8F5E9", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>👤</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:800, fontSize:13 }}>{u.name}</div>
                    <div style={{ fontSize:11, color:"#666" }}>{u.email}</div>
                    <div style={{ fontSize:11, color:"#999" }}>{u.phone}</div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:8, marginTop:10 }}>
                  {[
                    { label: lang==="ar"?"طلبات":"Orders", val: u.orders, color:"#00897B" },
                    { label: lang==="ar"?"نقاط":"Points", val: u.points, color:"#FB8C00" },
                    { label: lang==="ar"?"منذ":"Since", val: u.joined.slice(0,7), color:"#3F51B5" },
                  ].map((s,i) => (
                    <div key={i} style={{ flex:1, background:s.color+"11", borderRadius:8, padding:"6px 8px", textAlign:"center" }}>
                      <div style={{ fontWeight:800, fontSize:13, color:s.color }}>{s.val}</div>
                      <div style={{ fontSize:10, color:"#666" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Modal */}
        {showProductModal && (
          <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"flex-end", justifyContent:"center", zIndex:9999 }}>
            <div style={{ background:"#fff", borderRadius:"20px 20px 0 0", padding:"20px 16px 30px", width:"100%", maxWidth:430 }}>
              <div style={{ fontWeight:800, fontSize:16, marginBottom:14 }}>+ {t.addProduct}</div>
              {[
                { label: lang==="ar"?"الاسم بالإنجليزية":"Name (EN)", key:"nameEn" },
                { label: lang==="ar"?"الاسم بالعربية":"Name (AR)", key:"nameAr" },
                { label: t.price, key:"price" },
                { label: t.stockQty, key:"stock" },
              ].map(f => (
                <div key={f.key} style={{ marginBottom:10 }}>
                  <div style={{ fontSize:12, fontWeight:600, color:"#555", marginBottom:4 }}>{f.label}</div>
                  <input style={S.input} value={newProduct[f.key]} onChange={e => setNewProduct(p => ({ ...p, [f.key]: e.target.value }))} />
                </div>
              ))}
              <div style={{ display:"flex", gap:10, marginTop:14 }}>
                <button style={{ ...S.btn("outline"), flex:1 }} onClick={() => setShowProductModal(false)}>{t.cancel}</button>
                <button style={{ ...S.btn(), flex:2 }} onClick={() => {
                  setProducts(prev => [...prev, { ...newProduct, id: Date.now(), price: +newProduct.price, stock: +newProduct.stock, rating:4.5, reviews:0, rx:false, oldPrice:null, badge:null, ingredient:"", mfr:"", dosageEn:"", dosageAr:"", sideEn:"", sideAr:"", contraEn:"", contraAr:"" }]);
                  setShowProductModal(false);
                  setNewProduct({ nameEn:"", nameAr:"", price:"", stock:"", category:"painRelief", rx:false, img:"💊" });
                }}>{t.save}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  const views = { home: <HomeView/>, products: <ProductsView/>, detail: <DetailView/>, cart: <CartView/>, orders: <OrdersView/>, prescription: <PrescriptionView/>, profile: <ProfileView/>, admin: <AdminView/> };
  const navItems = [
    { key:"home", icon:"🏠", label: t.home },
    { key:"products", icon:"💊", label: t.products },
    { key:"cart", icon:"🛒", label: t.cart, badge: cartCount },
    { key:"orders", icon:"📦", label: t.orders },
    { key:"profile", icon:"👤", label: t.profile },
  ];

  const headerTitle = { home: t.appName, products: t.allProducts, detail: t.detailsTitle, cart: t.cart, orders: t.myOrders, prescription: t.prescription, profile: t.profile, admin: t.admin }[view];

  return (
    <div style={S.wrap}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <div style={S.phone}>
        <Toast />

        {/* Header */}
        <div style={S.header}>
          {view !== "home" ? (
            <button onClick={() => navigate(prevView||"home")} style={{ background:"rgba(255,255,255,0.2)", border:"none", borderRadius:8, width:36, height:36, cursor:"pointer", color:"#fff", fontSize:18 }}>{isRtl?"›":"‹"}</button>
          ) : <div style={{ width:36 }} />}
          <span style={S.headerTitle}>{headerTitle}</span>
          <button onClick={() => setLang(l => l==="ar"?"en":"ar")} style={{ background:"rgba(255,255,255,0.2)", border:"none", borderRadius:8, padding:"6px 10px", cursor:"pointer", color:"#fff", fontSize:12, fontWeight:700 }}>
            {t.language}
          </button>
        </div>

        {/* View */}
        <div style={{ flex:1, overflow:"hidden", display:"flex", flexDirection:"column" }}>
          {views[view]}
        </div>

        {/* Bottom Nav */}
        {view !== "admin" && (
          <div style={S.bottomNav}>
            {navItems.map(n => (
              <div key={n.key} style={S.navItem(view===n.key)} onClick={() => navigate(n.key)}>
                <div style={{ position:"relative" }}>
                  <span style={S.navIcon}>{n.icon}</span>
                  {n.badge > 0 && (
                    <span style={{ position:"absolute", top:-6, [isRtl?"left":"right"]:-6, background:"#FF6B35", color:"#fff", fontSize:9, fontWeight:800, width:16, height:16, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{n.badge}</span>
                  )}
                </div>
                <span style={S.navLabel}>{n.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
