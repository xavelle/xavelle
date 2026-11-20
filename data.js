/* XAVELLE — seed data (used when Firestore is empty / not configured)
   Hierarchical categories: 13 MAIN categories, each with SUB categories.
   Every product has: main (main-category slug) + sub (sub-category slug). */
const U = (id) => `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`;

const MAIN_CATEGORIES = [
  { slug: 'men', bn: 'মেনস', en: "Men's", img: U('photo-1603252109303-2751441dd157'), subs: [
    { slug: 'panjabi', bn: 'পাঞ্জাবি', en: 'Panjabi' },
    { slug: 'shirt', bn: 'শার্ট', en: 'Shirt' },
    { slug: 'tshirt', bn: 'টি-শার্ট', en: 'T-Shirt' },
    { slug: 'polo', bn: 'পোলো শার্ট', en: 'Polo Shirt' },
    { slug: 'pant', bn: 'প্যান্ট ও ট্রাউজার', en: 'Pant & Trouser' },
    { slug: 'sneakers', bn: 'স্নিকার্স', en: 'Sneakers' },
    { slug: 'winter', bn: 'শীতের পোশাক', en: 'Winter Wear' },
  ] },
  { slug: 'women', bn: 'ওমেনস', en: "Women's", img: U('photo-1610030469983-98e550d6193c'), subs: [
    { slug: 'saree', bn: 'শাড়ি', en: 'Saree' },
    { slug: 'kurti', bn: 'কুর্তি', en: 'Kurti' },
    { slug: 'threepiece', bn: 'থ্রি-পিস', en: 'Three-Piece' },
    { slug: 'hijab', bn: 'হিজাব', en: 'Hijab' },
    { slug: 'womens-shoes', bn: 'ওমেনস জুতা', en: "Women's Shoes" },
  ] },
  { slug: 'kids', bn: 'কিডস', en: 'Kids', img: U('photo-1471286174890-9c112ffca5b4'), subs: [
    { slug: 'kids-panjabi', bn: 'কিডস পাঞ্জাবি', en: 'Kids Panjabi' },
    { slug: 'kids-tshirt', bn: 'কিডস টি-শার্ট', en: 'Kids T-Shirt' },
    { slug: 'kids-dress', bn: 'কিডস ড্রেস', en: 'Kids Dress' },
    { slug: 'kids-shoes', bn: 'কিডস জুতা', en: 'Kids Shoes' },
  ] },
  { slug: 'home', bn: 'হোম টেক্সটাইল', en: 'Home Textiles', img: U('photo-1522771739844-6a9f6d5f14af'), subs: [
    { slug: 'bedsheet', bn: 'বেডশিট', en: 'Bedsheet' },
    { slug: 'curtain', bn: 'পর্দা', en: 'Curtain' },
    { slug: 'cushion', bn: 'কুশন', en: 'Cushion' },
    { slug: 'towel', bn: 'তোয়ালে', en: 'Towel' },
  ] },
  { slug: 'cosmetics', bn: 'কসমেটিকস', en: 'Cosmetics', img: U('photo-1596462502278-27bfdc403348'), subs: [
    { slug: 'skincare', bn: 'স্কিনকেয়ার', en: 'Skincare' },
    { slug: 'makeup', bn: 'মেকআপ', en: 'Makeup' },
    { slug: 'perfume', bn: 'পারফিউম', en: 'Perfume' },
    { slug: 'attar', bn: 'আতর', en: 'Attar' },
  ] },
  { slug: 'electronics', bn: 'ইলেকট্রনিক্স', en: 'Electronics & Gadgets', img: U('photo-1505740420928-5e560c06d30e'), subs: [
    { slug: 'earbuds', bn: 'ইয়ারবাডস', en: 'Earbuds' },
    { slug: 'smartwatch', bn: 'স্মার্ট ওয়াচ', en: 'Smart Watch' },
    { slug: 'powerbank', bn: 'পাওয়ার ব্যাংক', en: 'Power Bank' },
    { slug: 'charger', bn: 'চার্জার ও কেবল', en: 'Charger & Cable' },
  ] },
  { slug: 'islamic', bn: 'ইসলামিক', en: 'Islamic', img: U('photo-1519817650390-64a93db51149'), subs: [
    { slug: 'thobe', bn: 'থোব', en: 'Thobe' },
    { slug: 'tupi', bn: 'টুপি', en: 'Tupi' },
    { slug: 'tasbih', bn: 'তাসবিহ', en: 'Tasbih' },
    { slug: 'jaynamaz', bn: 'জায়নামাজ', en: 'Jaynamaz' },
  ] },
  { slug: 'accessories', bn: 'অ্যাক্সেসরিজ', en: 'Accessories', img: U('photo-1523275335684-37898b6baf30'), subs: [
    { slug: 'watch', bn: 'ঘড়ি', en: 'Watch' },
    { slug: 'wallet', bn: 'ওয়ালেট', en: 'Wallet' },
    { slug: 'belt', bn: 'বেল্ট', en: 'Belt' },
    { slug: 'sunglasses', bn: 'সানগ্লাস', en: 'Sunglasses' },
    { slug: 'bag', bn: 'ব্যাগ', en: 'Bag' },
  ] },
  { slug: 'food', bn: 'ফুড', en: 'Food', img: U('photo-1587049352846-4a222e784d38'), subs: [
    { slug: 'honey', bn: 'মধু', en: 'Honey' },
    { slug: 'dates', bn: 'খেজুর', en: 'Dates' },
    { slug: 'dryfruits', bn: 'ড্রাই ফ্রুটস', en: 'Dry Fruits' },
  ] },
  { slug: 'footwear', bn: 'ফুটওয়্যার', en: 'Footwear', img: U('photo-1543163521-1bf539c55dd2'), subs: [
    { slug: 'sandal', bn: 'স্যান্ডেল', en: 'Sandal' },
    { slug: 'loafer', bn: 'লোফার', en: 'Loafer' },
    { slug: 'panjabi-shoe', bn: 'পাঞ্জাবি জুতা', en: 'Panjabi Shoe' },
  ] },
  { slug: 'gifts', bn: 'গিফট আইটেম', en: 'Gift Items', img: U('photo-1549465220-1a8b9238cd48'), subs: [
    { slug: 'giftbox', bn: 'গিফট বক্স', en: 'Gift Box' },
    { slug: 'comboset', bn: 'কম্বো সেট', en: 'Combo Set' },
  ] },
  { slug: 'sports', bn: 'স্পোর্টস', en: 'Sports', img: U('photo-1571019613454-1cb2f99b2d8b'), subs: [
    { slug: 'gymwear', bn: 'জিম ওয়্যার', en: 'Gym Wear' },
    { slug: 'sportsshoes', bn: 'স্পোর্টস জুতা', en: 'Sports Shoes' },
  ] },
  { slug: 'baby', bn: 'বেবি', en: 'Baby', img: U('photo-1522771930-78848d9293e8'), subs: [
    { slug: 'babydress', bn: 'বেবি ড্রেস', en: 'Baby Dress' },
    { slug: 'babycare', bn: 'বেবি কেয়ার', en: 'Baby Care' },
  ] },
];

/* Back-compat: flat list of all sub-categories (slug → labels + parent main) */
const CATEGORIES = MAIN_CATEGORIES.flatMap((m) => m.subs.map((s) => ({ slug: s.slug, bn: s.bn, en: s.en, main: m.slug, img: m.img })));

function mainOf(slug) { return MAIN_CATEGORIES.find((m) => m.slug === slug) || { slug, bn: slug, en: slug, img: FALLBACK_IMG, subs: [] }; }
function subOf(mainSlug, subSlug) {
  const m = mainOf(mainSlug);
  const s = m.subs.find((x) => x.slug === subSlug);
  return s ? { ...s, main: mainSlug } : { slug: subSlug, bn: subSlug, en: subSlug, main: mainSlug };
}

const SEED_PRODUCTS = [
  { id: "p19", sku: "A100019", nameBn: "জামদানি শাড়ি", nameEn: "Jamdani Saree", main: "women", sub: "saree", price: 3490, oldPrice: 4500, img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"], descBn: "ঐতিহ্যবাহী হাতে বোনা জামদানি শাড়ি, উৎসবের জন্য সেরা।", descEn: "Traditional hand-woven Jamdani saree, best for festivals.", sizes: ["Free Size"], stock: 10, tag: "featured", visible: true },
  { id: "p20", sku: "A100020", nameBn: "কটন কুর্তি", nameEn: "Cotton Kurti", main: "women", sub: "kurti", price: 1250, oldPrice: 1650, img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop"], descBn: "নরম কটন কুর্তি, প্রতিদিনের জন্য আরামদায়ক।", descEn: "Soft cotton kurti, comfortable for everyday wear.", sizes: ["S", "M", "L", "XL"], stock: 28, tag: "", visible: true },
  { id: "p21", sku: "A100021", nameBn: "প্রিমিয়াম থ্রি-পিস", nameEn: "Premium Three-Piece", main: "women", sub: "threepiece", price: 2190, oldPrice: 2890, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"], descBn: "কামিজ, সালোয়ার ও ওড়নার সম্পূর্ণ সেট, সুন্দর প্রিন্ট।", descEn: "Complete kameez, salwar and dupatta set with beautiful print.", sizes: ["S", "M", "L", "XL"], stock: 16, tag: "new", visible: true },
  { id: "p22", sku: "A100022", nameBn: "প্রিমিয়াম হিজাব", nameEn: "Premium Hijab", main: "women", sub: "hijab", price: 550, oldPrice: 750, img: "https://images.unsplash.com/photo-1693985007521-e08e64770947?q=80&w=800&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1693985007521-e08e64770947?q=80&w=800&auto=format&fit=crop"], descBn: "নরম জর্জেট ফেব্রিকের হিজাব, সারাদিন আরামদায়ক।", descEn: "Soft georgette hijab, comfortable all day.", sizes: ["Free Size"], stock: 48, tag: "", visible: true },
  { id: "p23", sku: "A100023", nameBn: "ওমেনস ব্লক হিল", nameEn: "Women's Block Heel", main: "women", sub: "womens-shoes", price: 1650, oldPrice: 2200, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"], descBn: "স্টাইলিশ ও আরামদায়ক ব্লক হিল, অনুষ্ঠানের জন্য।", descEn: "Stylish comfortable block heel, perfect for occasions.", sizes: ["36", "37", "38", "39", "40"], stock: 14, tag: "new", visible: true },
];

const SEED_TESTIMONIALS = [
  { name: 'সাদিয়া ইসলাম', loc: 'ধানমন্ডি, ঢাকা', rating: 5, text: 'জামদানি শাড়িটা ছবির মতোই পেয়েছি, বুননটা খুব সুন্দর। ডেলিভারিও দ্রুত হয়েছে।' },
  { name: 'তানভীর হাসান', loc: 'চট্টগ্রাম', rating: 5, text: 'স্ত্রীর জন্য থ্রি-পিসটা নিয়েছিলাম — কাপড়ের কোয়ালিটি দামের তুলনায় দুর্দান্ত। ক্যাশ অন ডেলিভারি সুবিধা ভালো লেগেছে।' },
  { name: 'নুসরাত জাহান', loc: 'সিলেট', rating: 4, text: 'হিজাবটা দারুণ। ফেব্রিকটা নরম, প্যাকেজিংও খুব সুন্দর ছিল। আবার অর্ডার করবো।' },
  { name: 'রাকিব আহমেদ', loc: 'রাজশাহী', rating: 5, text: 'অর্ডারের পর ফোনে কনফার্ম করেছে, ট্র্যাকিংও ঠিকঠাক কাজ করেছে।' },
];

const SEED_FAQS = [
  { q: 'কিভাবে অর্ডার করবো?', a: 'পণ্য পছন্দ করে কার্টে যোগ করুন, এরপর চেকআউট পেজে নাম, মোবাইল নম্বর ও ঠিকানা দিয়ে অর্ডার কনফার্ম করুন।' },
  { q: 'ডেলিভারিতে কত সময় লাগে?', a: 'ঢাকার ভিতরে ১–২ দিন এবং ঢাকার বাইরে ২–৪ কর্মদিবস সময় লাগে।' },
  { q: 'কোন কোন পেমেন্ট মেথড আছে?', a: 'ক্যাশ অন ডেলিভারি, বিকাশ ও নগদ দিয়ে পেমেন্ট করা যায়।' },
  { q: 'পণ্য রিটার্ন করা যাবে?', a: 'ডেলিভারি ম্যানের সামনে প্রোডাক্ট চেক করে নিতে পারবেন।' },
  { q: 'অর্ডার ট্র্যাক করবো কিভাবে?', a: 'Track Order পেজে অর্ডার নম্বর অথবা শুধু মোবাইল নম্বর দিলেই অর্ডারের বর্তমান অবস্থা দেখতে পাবেন।' },
  { q: 'ক্যাশ অন ডেলিভারি আছে কি?', a: 'হ্যাঁ, সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা রয়েছে।' },
];

const DISTRICTS = ['ঢাকা (সিটি)', 'ঢাকা (সাব-এরিয়া)', 'কক্সবাজার', 'কুমিল্লা', 'কুড়িগ্রাম', 'কুষ্টিয়া', 'কিশোরগঞ্জ', 'খাগড়াছড়ি', 'খুলনা', 'গাইবান্ধা', 'গাজীপুর', 'গোপালগঞ্জ', 'চট্টগ্রাম', 'চাঁদপুর', 'চাঁপাইনবাবগঞ্জ', 'চুয়াডাঙ্গা', 'জয়পুরহাট', 'জামালপুর', 'ঝালকাঠি', 'ঝিনাইদহ', 'টাঙ্গাইল', 'ঠাকুরগাঁও', 'দিনাজপুর', 'নওগাঁ', 'নরসিংদী', 'নাটোর', 'নড়াইল', 'নারায়ণগঞ্জ', 'নীলফামারী', 'নেত্রকোণা', 'নোয়াখালী', 'পঞ্চগড়', 'পটুয়াখালী', 'পাবনা', 'পিরোজপুর', 'ফরিদপুর', 'ফেনী', 'বগুড়া', 'বরগুনা', 'বরিশাল', 'বাগেরহাট', 'বান্দরবান', 'ব্রাহ্মণবাড়িয়া', 'ভোলা', 'ময়মনসিংহ', 'মাগুরা', 'মাদারীপুর', 'মানিকগঞ্জ', 'মুন্সীগঞ্জ', 'মেহেরপুর', 'মৌলভীবাজার', 'যশোর', 'রংপুর', 'রাজবাড়ী', 'রাজশাহী', 'রাঙ্গামাটি', 'লক্ষ্মীপুর', 'লালমনিরহাট', 'শরীয়তপুর', 'শেরপুর', 'সাতক্ষীরা', 'সিরাজগঞ্জ', 'সিলেট', 'সুনামগঞ্জ', 'হবিগঞ্জ'];

const COURIERS = ['Steadfast', 'Pathao Courier', 'Paperfly', 'Sundarban', 'SA Paribahan', 'RedX', 'Manual/Other'];

/* Order stages — used by the customer Track Order timeline */
const STAGES = [
  { key: 'pending', bn: 'অপেক্ষমান', en: 'Pending' },
  { key: 'confirmed', bn: 'কনফার্ম', en: 'Confirmed' },
  { key: 'packed', bn: 'প্যাক করা', en: 'Packed' },
  { key: 'shipped', bn: 'কুরিয়ারে দেওয়া', en: 'Handed to Courier' },
  { key: 'in-transit', bn: 'ট্রানজিটে', en: 'In Transit' },
  { key: 'out-for-delivery', bn: 'ডেলিভারির পথে', en: 'Out for Delivery' },
  { key: 'delivered', bn: 'ডেলিভারি সম্পন্ন', en: 'Delivered' },
  { key: 'cancelled', bn: 'বাতিল', en: 'Cancelled' },
];

const DEFAULT_SETTINGS = {
  shopName: 'XAVELLE',
  phone: '01887099973',
  whatsapp: '8801887099973',
  email: 'care@xavelle.com.bd',
  address: 'Shop-3/1, Eastern Plaza, Hatirpool, Dhaka 1205',
  deliveryCity: 70, deliverySub: 90, deliveryOutside: 110, freeAbove: 2500,
  bkash: '01887099973', nagad: '01887099973',
  sections: { hero: true, flashSale: true, combo: true, testimonials: true, bestSellers: true, newArrivals: true },
  hiddenCategories: ['men', 'kids', 'home', 'cosmetics', 'electronics', 'islamic', 'accessories', 'food', 'footwear', 'gifts', 'sports', 'baby'], /* main-category slugs hidden from storefront */
  social: { facebook: 'https://www.facebook.com/profile.php?id=61596225310656', instagram: '', youtube: '' }, /* footer social icons */
  messenger: '61596225310656', /* Xavelle Facebook Page ID — m.me লিংকের জন্য */
  promoBar: { text: '', on: false }, /* উপরের প্রোমো বার */
  heroBanners: [{ img: 'https://i.ibb.co/bjjX3CKP/banner.jpg', title: '', link: '#shop' }], /* হোমপেজ হিরো ব্যানার */
  imgbbKey: '', /* free image upload API key (imgbb.com) */
  story: { /* গল্পের পেজ (story.html) — অ্যাডমিন প্যানেল থেকে নিয়ন্ত্রণ */
    on: true,
    ch1t: 'হাতে বোনা ঐতিহ্য', ch1s: 'প্রতিটা থ্রি-পিস শুরু হয় নিখুঁত মাপ আর যত্নের কাটিং দিয়ে',
    ch2t: 'প্রতিটা সেলাইয়ে যত্ন', ch2s: 'খাঁটি কাপড়, মজবুত সেলাই — কোনো তাড়াহুড়ো নেই',
    ch3t: 'কারিগরের হাত থেকে আপনার আলমারিতে', ch3s: 'ভালোবাসা দিয়ে বানানো পোশাক, সরাসরি আপনার কাছে',
    productIds: ['p21', 'p19', 'p20', 'p22'],
  },
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop';
