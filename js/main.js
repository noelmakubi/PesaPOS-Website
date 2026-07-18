// ===== Language Toggle =====
const translations = {
  en: {
    // Nav
    features: "Features",
    pricing: "Pricing",
    download: "Download",
    // Hero
    badge: "Modern Offline-First Business OS",
    title1: "Your Business,",
    title2: "Simplified.",
    desc: "World-class POS and business management platform designed for SMEs in Tanzania and East Africa. Inventory, sales, customers, AI analytics, cloud sync and more.",
    cta1: "Get it on Google Play",
    cta2: "Download on App Store",
    stat1label: "Products (Free)",
    stat2label: "Languages",
    stat3label: "Offline Ready",
    // Features
    featuresTitle: "Everything You Need",
    featuresSubtitle: "Powerful features to run your business smoothly",
    f1title: "Point of Sale",
    f1desc: "Fast checkout with Cash, M-Pesa, Card, and Credit payment methods. Barcode scanning included.",
    f2title: "Inventory",
    f2desc: "Track stock levels, movements, low stock alerts, and inventory valuation. Never run out of products.",
    f3title: "AI Analysis",
    f3desc: "Ask questions about your business in natural language. Get insights on sales, profit, customers, and restocking.",
    f4title: "Cloud Sync",
    f4desc: "Access your business from multiple devices. Automatic cloud backup keeps your data safe.",
    f5title: "Reports",
    f5desc: "Daily, weekly, and monthly sales reports. Revenue, profit, expenses, and trends at a glance.",
    f6title: "Offline First",
    f6desc: "Works completely without internet. Sync automatically when you're back online.",
    f7title: "Bilingual",
    f7desc: "Full support for English and Kiswahili. Switch languages instantly from settings.",
    f8title: "Credit Sales",
    f8desc: "Sell on credit, track debts, record payments, and monitor outstanding balances per customer.",
    // Pricing
    pricingTitle: "Simple, Transparent Pricing",
    pricingSubtitle: "Start free, upgrade when you need more",
    freeName: "Free",
    freeDesc: "Start for free, no account required",
    silverName: "Silver",
    silverDesc: "For growing businesses",
    goldName: "Gold",
    goldDesc: "Everything, unlimited",
    // Free features
    fFree1: "Point of Sale",
    fFree2: "50 Products",
    fFree3: "20 Customers",
    fFree4: "Sales History",
    fFree5: "Backup & Restore",
    fFree6: "Dark Mode",
    fFree7: "English & Kiswahili",
    // Silver features
    fSilv1: "200 Products",
    fSilv2: "100 Customers",
    fSilv3: "Suppliers Module",
    fSilv4: "Expenses Tracking",
    fSilv5: "Daily Reports",
    fSilv6: "Barcode Scanner",
    fSilv7: "Credit Sales & Debts",
    fSilv8: "CSV Export & Import",
    // Gold features
    fGold1: "Unlimited Products",
    fGold2: "Unlimited Customers",
    fGold3: "Multi-Store",
    fGold4: "Full Reports",
    fGold5: "Inventory Tracking",
    fGold6: "Cloud Sync",
    fGold7: "AI Analysis & Predictions",
    fGold8: "WhatsApp Receipts",
    // Buttons
    getStarted: "Get Started",
    upgradeSilver: "Upgrade to Silver",
    upgradeGold: "Upgrade to Gold",
    // Download
    downloadTitle: "Download PesaPOS",
    downloadSub: "Available on Android, iOS, and direct APK download",
    dl1: "Google Play",
    dl1sub: "Android 8.0+",
    dl2: "App Store",
    dl2sub: "iOS 15+",
    dl3: "Direct APK",
    dl3sub: "v1.0.0 — 15 MB",
    // Footer
    footerTagline: "Your Business, Simplified",
    allRights: "All rights reserved.",
    // Misc
    month: "/month",
    best: "BEST",
  },
  sw: {
    // Nav
    features: "Vipengele",
    pricing: "Bei",
    download: "Pakua",
    // Hero
    badge: "Mfumo wa Biashara wa Kisasa Bila Mtandao",
    title1: "Biashara Yako,",
    title2: "Imerahisishwa.",
    desc: "Jukwaa la kisasa la POS na usimamizi wa biashara lililo mbuniwa kwa SMEs Tanzania na Afrika Mashariki. Hesabu, mauzo, wateja, uchambuzi wa AI, usawazishaji wingu na zaidi.",
    cta1: "Pakua kwenye Google Play",
    cta2: "Pakua kwenye App Store",
    stat1label: "Bidhaa (Bure)",
    stat2label: "Lugha",
    stat3label: "Bila Mtandao",
    // Features
    featuresTitle: "Kila Kitu Unachohitaji",
    featuresSubtitle: "Vipengele vyenye nguvu kusimamia biashara yako kwa urahisi",
    f1title: "Sehemu ya Kuuza",
    f1desc: "Malipo ya haraka kwa Pesa Taslimu, M-Pesa, Kadi, na Deni. Uchanganuzi wa barcode umewekwa.",
    f2title: "Hesabu ya Bidhaa",
    f2desc: "Fuatilia viwango vya hesabu, mazoezi, alama za chini, na ukadiriaji wa hesabu. Usikimbie bidhaa.",
    f3title: "Uchambuzi wa AI",
    f3desc: "Uliza maswali kuhusu biashara yako kwa lugha ya kawaida. Pata maarifa kuhusu mauzo, faida, wateja, na kujazwa.",
    f4title: "Usawazishaji Wingu",
    f4desc: "Fikia biashara yako kutoka vifaa vingi. Uhifadhi wa wingu wenye uhakika unalinda data yako.",
    f5title: "Ripoti",
    f5desc: "Ripoti za mauzo za kila siku, wiki, na mwezi. Mapato, faida, matumizi, na mwenendo kwa mtazamo mmoja.",
    f6title: "Bila Mtandao Kwanza",
    f6desc: "Inafanya kazi kabisa bila mtandao. Sawazisha moja kwa moja unaporudi mtandaoni.",
    f7title: "Lugha Mbili",
    f7desc: "Usaidizi kamili kwa English na Kiswahili. Badilisha lugha mara moja kutoka mipangilio.",
    f8title: "Mauzo kwa Deni",
    f8desc: "Uza kwa deni, fuatilia madeni, rekodi malipo, na uangalie salio la kila mteja.",
    // Pricing
    pricingTitle: "Bei Rahisi, Wazi",
    pricingSubtitle: "Anza bure, boresha unapohitaji zaidi",
    freeName: "Bure",
    freeDesc: "Anza bure, huna akaunti hitajika",
    silverName: "Silver",
    silverDesc: "Kwa biashara zinazokua",
    goldName: "Gold",
    goldDesc: "Kila kitu, bila kikomo",
    // Free features
    fFree1: "Sehemu ya Kuuza",
    fFree2: "Bidhaa 50",
    fFree3: "Wateja 20",
    fFree4: "Historia ya Mauzo",
    fFree5: "Hifadhi & Rejesha",
    fFree6: "Mode ya Giza",
    fFree7: "English na Kiswahili",
    // Silver features
    fSilv1: "Bidhaa 200",
    fSilv2: "Wateja 100",
    fSilv3: "Moduli ya Wachuuzi",
    fSilv4: "Fuatilia Matumizi",
    fSilv5: "Ripoti za Kila Siku",
    fSilv6: "Skana ya Barcode",
    fSilv7: "Mauzo ya Deni",
    fSilv8: "Hamisha & Ingiza CSV",
    // Gold features
    fGold1: "Bidhaa Bila Kikomo",
    fGold2: "Wateja Bila Kikomo",
    fGold3: "Maduka Mengi",
    fGold4: "Ripoti Kamili",
    fGold5: "Fuatilia Hesabu",
    fGold6: "Usawazishaji Wingu",
    fGold7: "Uchambuzi & Utabiri wa AI",
    fGold8: "Risiti za WhatsApp",
    // Buttons
    getStarted: "Anza Sasa",
    upgradeSilver: "Boresha hadi Silver",
    upgradeGold: "Boresha hadi Gold",
    // Download
    downloadTitle: "Pakua PesaPOS",
    downloadSub: "Inapatikana kwenye Android, iOS, na pakua APK moja kwa moja",
    dl1: "Google Play",
    dl1sub: "Android 8.0+",
    dl2: "App Store",
    dl2sub: "iOS 15+",
    dl3: "APK Moja kwa Moja",
    dl3sub: "v1.0.0 — 15 MB",
    // Footer
    footerTagline: "Biashara Yako, Imerahisishwa",
    allRights: "Haki zote zimehifadhiwa.",
    // Misc
    month: "/mwezi",
    best: "BORA",
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all elements with data-en / data-sw
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Update lang toggle label
  document.getElementById('langLabel').textContent = lang === 'en' ? 'SW' : 'EN';

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'sw' ? 'sw' : 'en';

  // Store preference
  localStorage.setItem('pesapos-lang', lang);
}

// ===== Theme Toggle =====
let currentTheme = 'dark';

function setTheme(theme) {
  currentTheme = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('pesapos-theme', theme);
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ===== Header Scroll =====
function handleScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ===== Mobile Menu =====
function toggleMenu() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Language toggle
  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'sw' : 'en');
  });

  // Load saved language
  const saved = localStorage.getItem('pesapos-lang');
  if (saved) setLanguage(saved);

  // Scroll
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleTheme);

  // Load saved theme (default: dark)
  const savedTheme = localStorage.getItem('pesapos-theme') || 'dark';
  setTheme(savedTheme);

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', toggleMenu);

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('active');
    });
  });
});
