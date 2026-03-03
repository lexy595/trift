"use strict";

const KEYS = {
  products: "tbb_products",
  users: "tbb_users",
  currentUser: "tbb_current_user",
  cart: "tbb_cart",
  orders: "tbb_orders",
  coupon: "tbb_coupon",
  adminSession: "tbb_admin_session"
};

const ADMIN_CREDENTIALS = {
  email: "admin@thriftbyb.com",
  password: "TBb_Admin_2026!"
};

const EMAILJS_CONFIG = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  customerTemplateId: "YOUR_CUSTOMER_TEMPLATE_ID",
  adminTemplateId: "YOUR_ADMIN_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  adminEmail: "admin@thriftbyb.com"
};

const PAYSTACK_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const DELIVERY_OPTIONS = {
  lagos_pickup: { label: "Lagos Pickup", fee: 0 },
  lagos_delivery: { label: "Lagos Delivery", fee: 2500 },
  nationwide_delivery: { label: "Nationwide Delivery", fee: 5000 }
};

const DEFAULT_PRODUCTS = [
  {
    id: "P1001",
    name: "Satin Crop Blouse",
    price: 10500,
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    condition: "Like New",
    featured: true,
    description: "Soft satin crop blouse perfect for brunch and weekend outings.",
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1002",
    name: "Vintage Denim Jacket",
    price: 18500,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    condition: "Vintage",
    featured: true,
    description: "Classic oversized denim jacket with edgy Lagos streetwear vibes.",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1003",
    name: "Floral Slip Dress",
    price: 13200,
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    condition: "Like New",
    featured: true,
    description: "Flirty floral slip dress with soft silhouette and light texture.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1004",
    name: "Pleated Mini Skirt",
    price: 9800,
    category: "Skirts",
    sizes: ["XS", "S", "M", "L"],
    condition: "Like New",
    featured: false,
    description: "Structured pleated mini skirt for everyday chic looks.",
    images: [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1005",
    name: "Beaded Shoulder Bag",
    price: 12000,
    category: "Accessories",
    sizes: ["M"],
    condition: "Vintage",
    featured: false,
    description: "Statement shoulder bag with hand-beaded details and gold chain.",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1006",
    name: "Ribbed Bodycon Dress",
    price: 14900,
    category: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    condition: "Like New",
    featured: false,
    description: "Figure-hugging ribbed dress with minimal polished fit.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1007",
    name: "Graphic Tee",
    price: 7500,
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    condition: "Vintage",
    featured: false,
    description: "Soft cotton graphic tee styled for layered streetwear.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1008",
    name: "Cropped Leather Jacket",
    price: 24000,
    category: "Jackets",
    sizes: ["S", "M", "L"],
    condition: "Like New",
    featured: true,
    description: "Bold cropped leather jacket with premium finish.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1009",
    name: "Lace Trim Cami",
    price: 8600,
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    condition: "Like New",
    featured: false,
    description: "Elegant cami top with lace trim and soft drape.",
    images: [
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "P1010",
    name: "Tulle Midi Skirt",
    price: 11500,
    category: "Skirts",
    sizes: ["S", "M", "L", "XL"],
    condition: "Vintage",
    featured: false,
    description: "Flowy tulle midi skirt with dreamy feminine volume.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

const page = document.body.dataset.page || "";

document.addEventListener("DOMContentLoaded", () => {
  initData();
  initNav();
  initScrollReveal();
  attachGlobalEvents();
  updateCartCount();
  routePage();
});

function routePage() {
  if (page === "home") initHomePage();
  if (page === "shop") initShopPage();
  if (page === "product") initProductPage();
  if (page === "cart") initCartPage();
  if (page === "checkout") initCheckoutPage();
  if (page === "account") initAccountPage();
  if (page === "admin-login") initAdminLoginPage();
  if (page === "admin-dashboard") initAdminDashboardPage();
}

function initData() {
  if (!getJSON(KEYS.products)) setJSON(KEYS.products, DEFAULT_PRODUCTS);
  if (!getJSON(KEYS.users)) setJSON(KEYS.users, []);
  if (!getJSON(KEYS.cart)) setJSON(KEYS.cart, []);
  if (!getJSON(KEYS.orders)) setJSON(KEYS.orders, []);
}

function getJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Failed reading ${key}`, error);
    return fallback;
  }
}

function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function naira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(Number(amount) || 0);
}

function initNav() {
  const button = document.getElementById("hamburgerBtn");
  const links = document.getElementById("navLinks");
  if (button && links) {
    button.addEventListener("click", () => links.classList.toggle("open"));
  }

  const currentUser = getCurrentUser();
  const userChip = document.getElementById("userChip");
  if (userChip) {
    userChip.textContent = currentUser ? `Hi, ${currentUser.name.split(" ")[0]}` : "My Account";
  }
}

function initScrollReveal() {
  const items = [...document.querySelectorAll(".fade-in")];
  if (!items.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.1 }
  );
  items.forEach((el) => observer.observe(el));
}

function attachGlobalEvents() {
  document.body.addEventListener("click", (event) => {
    const addBtn = event.target.closest("[data-add-product]");
    if (addBtn) {
      const productId = addBtn.dataset.addProduct;
      const size = addBtn.dataset.size || "M";
      addToCart(productId, size);
      return;
    }

    const logoutBtn = event.target.closest("[data-logout]");
    if (logoutBtn) {
      localStorage.removeItem(KEYS.currentUser);
      updateCartCount();
      window.location.href = "account.html";
    }
  });
}

function getProducts() {
  return getJSON(KEYS.products, []);
}

function getCart() {
  return getJSON(KEYS.cart, []);
}

function getOrders() {
  return getJSON(KEYS.orders, []);
}

function getCurrentUser() {
  return getJSON(KEYS.currentUser);
}

function updateCartCount() {
  const totalItems = getCart().reduce((sum, item) => sum + item.qty, 0);
  const chips = document.querySelectorAll("[data-cart-count]");
  chips.forEach((chip) => {
    chip.textContent = totalItems;
  });
}

function addToCart(productId, size) {
  const products = getProducts();
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.productId === productId && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ productId, size, qty: 1 });
  }
  setJSON(KEYS.cart, cart);
  updateCartCount();
  showToast(`${product.name} added to cart`);
}

function showToast(message) {
  let toast = document.getElementById("miniToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "miniToast";
    toast.style.position = "fixed";
    toast.style.bottom = "16px";
    toast.style.right = "16px";
    toast.style.background = "#111";
    toast.style.color = "#fff";
    toast.style.padding = "0.7rem 1rem";
    toast.style.borderRadius = "10px";
    toast.style.zIndex = "9999";
    toast.style.boxShadow = "0 8px 18px rgba(0,0,0,.2)";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.style.opacity = "0";
  }, 1300);
}

function buildProductCard(product) {
  return `
    <article class="product-card fade-in">
      <div class="product-media">
        <a href="product.html?id=${product.id}">
          <img loading="lazy" src="${product.images[0]}" alt="${product.name}">
        </a>
        <span class="tag">${product.condition}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-meta">${product.category} • Sizes ${product.sizes.join("/")}</p>
        <div class="price-row">
          <span class="price">${naira(product.price)}</span>
          <button class="btn btn-primary" data-add-product="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function initHomePage() {
  const products = getProducts().filter((item) => item.featured).slice(0, 8);
  const container = document.getElementById("featuredProducts");
  if (container) {
    container.innerHTML = products.map(buildProductCard).join("");
    initScrollReveal();
  }
}

function initShopPage() {
  const state = {
    maxPrice: 30000,
    category: "",
    size: "",
    sort: "default"
  };

  const maxPriceInput = document.getElementById("maxPrice");
  const maxPriceValue = document.getElementById("maxPriceValue");
  const categoryInput = document.getElementById("filterCategory");
  const sizeInput = document.getElementById("filterSize");
  const sortInput = document.getElementById("sortProducts");
  const output = document.getElementById("shopProducts");
  const count = document.getElementById("resultCount");
  const toggle = document.getElementById("toggleFilters");
  const panel = document.getElementById("filterPanel");

  if (toggle && panel) {
    toggle.addEventListener("click", () => panel.classList.toggle("hidden"));
  }

  function render() {
    let items = [...getProducts()];
    items = items.filter((item) => item.price <= state.maxPrice);
    if (state.category) items = items.filter((item) => item.category === state.category);
    if (state.size) items = items.filter((item) => item.sizes.includes(state.size));

    if (state.sort === "price-low") items.sort((a, b) => a.price - b.price);
    if (state.sort === "price-high") items.sort((a, b) => b.price - a.price);
    if (state.sort === "name-az") items.sort((a, b) => a.name.localeCompare(b.name));

    count.textContent = `${items.length} items`;
    output.innerHTML = items.length ? items.map(buildProductCard).join("") : `<div class="empty-state">No products match your filters.</div>`;
    initScrollReveal();
  }

  if (maxPriceInput) {
    maxPriceInput.addEventListener("input", () => {
      state.maxPrice = Number(maxPriceInput.value);
      maxPriceValue.textContent = naira(state.maxPrice);
      render();
    });
    maxPriceValue.textContent = naira(state.maxPrice);
  }

  if (categoryInput) {
    categoryInput.addEventListener("change", () => {
      state.category = categoryInput.value;
      render();
    });
  }

  if (sizeInput) {
    sizeInput.addEventListener("change", () => {
      state.size = sizeInput.value;
      render();
    });
  }

  if (sortInput) {
    sortInput.addEventListener("change", () => {
      state.sort = sortInput.value;
      render();
    });
  }

  render();
}

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = getProducts().find((item) => item.id === id) || getProducts()[0];
  if (!product) return;

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = naira(product.price);
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("productCondition").textContent = product.condition;
  const sizeSelect = document.getElementById("productSize");
  const mainImage = document.getElementById("productMainImage");
  const thumbs = document.getElementById("productThumbnails");

  mainImage.src = product.images[0];
  mainImage.alt = product.name;
  sizeSelect.innerHTML = product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("");

  thumbs.innerHTML = product.images
    .map(
      (src, index) => `
      <button type="button" class="thumb ${index === 0 ? "active" : ""}" data-image="${src}">
        <img src="${src}" alt="${product.name} thumbnail ${index + 1}">
      </button>
    `
    )
    .join("");

  thumbs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-image]");
    if (!button) return;
    mainImage.src = button.dataset.image;
    [...thumbs.querySelectorAll(".thumb")].forEach((thumb) => thumb.classList.remove("active"));
    button.classList.add("active");
  });

  document.getElementById("addToCartProduct").addEventListener("click", () => {
    addToCart(product.id, sizeSelect.value);
  });
}

function getCartItemsDetailed() {
  const cart = getCart();
  const products = getProducts();
  return cart
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return {
        ...item,
        product,
        lineTotal: product.price * item.qty
      };
    })
    .filter(Boolean);
}

function getCouponDiscount(subtotal, code) {
  if (code === "FEM10") return subtotal * 0.1;
  return 0;
}

function getCartTotals(deliveryOption) {
  const items = getCartItemsDetailed();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const coupon = localStorage.getItem(KEYS.coupon) || "";
  const discount = getCouponDiscount(subtotal, coupon);
  const fee = DELIVERY_OPTIONS[deliveryOption]?.fee ?? 0;
  const total = Math.max(subtotal - discount + fee, 0);
  return { items, subtotal, discount, fee, total, coupon };
}

function initCartPage() {
  const cartList = document.getElementById("cartList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountEl = document.getElementById("cartDiscount");
  const feeEl = document.getElementById("cartDeliveryFee");
  const totalEl = document.getElementById("cartTotal");
  const deliverySelect = document.getElementById("cartDeliveryOption");
  const couponInput = document.getElementById("couponCode");
  const applyBtn = document.getElementById("applyCoupon");
  const notice = document.getElementById("cartNotice");
  const checkoutBtn = document.getElementById("goCheckout");
  const storedDelivery = localStorage.getItem("tbb_delivery_option") || "lagos_pickup";
  deliverySelect.value = storedDelivery;
  couponInput.value = localStorage.getItem(KEYS.coupon) || "";

  function render() {
    const selectedDelivery = deliverySelect.value;
    const { items, subtotal, discount, fee, total } = getCartTotals(selectedDelivery);
    localStorage.setItem("tbb_delivery_option", selectedDelivery);

    if (!items.length) {
      cartList.innerHTML = `<div class="empty-state">Your cart is empty. Start shopping stylish pieces.</div>`;
      checkoutBtn.classList.add("hidden");
    } else {
      checkoutBtn.classList.remove("hidden");
      cartList.innerHTML = items
        .map(
          (item) => `
          <div class="cart-item">
            <img src="${item.product.images[0]}" alt="${item.product.name}">
            <div>
              <h4>${item.product.name}</h4>
              <p>${item.product.category} • Size ${item.size}</p>
              <div class="qty-row">
                <button class="qty-btn" data-dec="${item.productId}" data-size="${item.size}">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" data-inc="${item.productId}" data-size="${item.size}">+</button>
                <button class="btn btn-light" data-remove="${item.productId}" data-size="${item.size}">Remove</button>
              </div>
            </div>
            <strong>${naira(item.lineTotal)}</strong>
          </div>
        `
        )
        .join("");
    }

    subtotalEl.textContent = naira(subtotal);
    discountEl.textContent = `- ${naira(discount)}`;
    feeEl.textContent = naira(fee);
    totalEl.textContent = naira(total);
    updateCartCount();
  }

  cartList.addEventListener("click", (event) => {
    const cart = getCart();
    const inc = event.target.closest("[data-inc]");
    const dec = event.target.closest("[data-dec]");
    const remove = event.target.closest("[data-remove]");
    if (!inc && !dec && !remove) return;

    const productId = (inc || dec || remove).dataset.inc || (inc || dec || remove).dataset.dec || (inc || dec || remove).dataset.remove;
    const size = (inc || dec || remove).dataset.size;
    const item = cart.find((entry) => entry.productId === productId && entry.size === size);
    if (!item) return;

    if (inc) item.qty += 1;
    if (dec) item.qty -= 1;
    if (remove || item.qty <= 0) {
      const next = cart.filter((entry) => !(entry.productId === productId && entry.size === size));
      setJSON(KEYS.cart, next);
    } else {
      setJSON(KEYS.cart, cart);
    }
    render();
  });

  applyBtn.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    if (!code) {
      localStorage.removeItem(KEYS.coupon);
      notice.innerHTML = `<div class="notice">Coupon cleared.</div>`;
      render();
      return;
    }
    if (code === "FEM10") {
      localStorage.setItem(KEYS.coupon, code);
      notice.innerHTML = `<div class="notice success">Coupon FEM10 applied. You saved 10%.</div>`;
    } else {
      localStorage.removeItem(KEYS.coupon);
      notice.innerHTML = `<div class="notice error">Invalid coupon code.</div>`;
    }
    render();
  });

  deliverySelect.addEventListener("change", render);
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
  render();
}

function initCheckoutPage() {
  const form = document.getElementById("checkoutForm");
  const summary = document.getElementById("checkoutSummary");
  const totalAmount = document.getElementById("checkoutTotal");
  const notice = document.getElementById("checkoutNotice");
  const deliverySelect = document.getElementById("deliveryOption");
  const user = getCurrentUser();

  if (window.emailjs && EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
    window.emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  if (!getCart().length) {
    summary.innerHTML = `<div class="empty-state">Cart is empty. Add products before checkout.</div>`;
    form.classList.add("hidden");
    return;
  }

  if (user) {
    form.fullName.value = user.name || "";
    form.email.value = user.email || "";
    form.phone.value = user.phone || "";
    form.address.value = user.address || "";
  }

  deliverySelect.value = localStorage.getItem("tbb_delivery_option") || "lagos_pickup";

  function renderSummary() {
    const totals = getCartTotals(deliverySelect.value);
    summary.innerHTML = totals.items
      .map(
        (item) => `
        <div class="summary-line">
          <span>${item.product.name} x ${item.qty} (${item.size})</span>
          <strong>${naira(item.lineTotal)}</strong>
        </div>
      `
      )
      .join("");
    summary.innerHTML += `
      <div class="summary-line"><span>Subtotal</span><strong>${naira(totals.subtotal)}</strong></div>
      <div class="summary-line"><span>Discount</span><strong>- ${naira(totals.discount)}</strong></div>
      <div class="summary-line"><span>Delivery</span><strong>${naira(totals.fee)}</strong></div>
    `;
    totalAmount.textContent = naira(totals.total);
  }

  deliverySelect.addEventListener("change", () => {
    localStorage.setItem("tbb_delivery_option", deliverySelect.value);
    renderSummary();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const totals = getCartTotals(deliverySelect.value);
    const data = {
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      deliveryOption: deliverySelect.value
    };

    if (!data.fullName || !data.email || !data.phone || !data.address) {
      notice.innerHTML = `<div class="notice error">Please complete all checkout fields.</div>`;
      return;
    }

    beginPaystackCheckout(totals.total, data.email, (paymentRef) => {
      finalizeOrder(data, totals, paymentRef).then((result) => {
        notice.innerHTML = `<div class="notice success">Order ${result.order.id} confirmed. Payment successful.</div>`;
        form.reset();
        summary.innerHTML = `<p>Thank you for shopping with THRIFT BY B. Confirmation sent.</p>`;
        totalAmount.textContent = naira(0);
      });
    });
  });

  renderSummary();
}

function beginPaystackCheckout(amount, email, onSuccess) {
  if (window.PaystackPop) {
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount: Math.round(amount * 100),
      currency: "NGN",
      callback: function (response) {
        onSuccess(response.reference);
      },
      onClose: function () {
        showToast("Payment popup closed");
      }
    });
    handler.openIframe();
    return;
  }
  const fallbackRef = `DEMO-${Date.now()}`;
  console.warn("Paystack script not loaded. Using demo fallback reference.");
  onSuccess(fallbackRef);
}

async function finalizeOrder(customerData, totals, paymentRef) {
  const user = getCurrentUser();
  const order = {
    id: `TBB-${Date.now()}`,
    date: new Date().toISOString(),
    customerId: user?.id || null,
    customerName: customerData.fullName,
    customerEmail: customerData.email,
    customerPhone: customerData.phone,
    address: customerData.address,
    deliveryOption: customerData.deliveryOption,
    deliveryLabel: DELIVERY_OPTIONS[customerData.deliveryOption].label,
    items: totals.items.map((entry) => ({
      productId: entry.product.id,
      name: entry.product.name,
      qty: entry.qty,
      size: entry.size,
      price: entry.product.price,
      lineTotal: entry.lineTotal
    })),
    subtotal: totals.subtotal,
    discount: totals.discount,
    deliveryFee: totals.fee,
    total: totals.total,
    paymentRef,
    status: "Paid"
  };

  const orders = getOrders();
  orders.push(order);
  setJSON(KEYS.orders, orders);
  setJSON(KEYS.cart, []);
  localStorage.removeItem(KEYS.coupon);
  updateCartCount();

  try {
    await sendOrderEmails(order);
  } catch (error) {
    console.error("Order email failed", error);
  }
  return { order };
}

async function sendOrderEmails(order) {
  if (!window.emailjs || EMAILJS_CONFIG.publicKey === "YOUR_EMAILJS_PUBLIC_KEY") {
    console.warn("EmailJS not configured. Skipping email send.");
    return;
  }

  const dateText = new Date(order.date).toLocaleString("en-NG");
  const orderLines = order.items.map((i) => `${i.name} x${i.qty} (${i.size}) - ${naira(i.lineTotal)}`).join("\n");
  const summary = `Order ID: ${order.id}\nDate: ${dateText}\nItems:\n${orderLines}\nDelivery: ${order.deliveryLabel}\nTotal: ${naira(order.total)}`;

  const customerPayload = {
    to_name: order.customerName,
    to_email: order.customerEmail,
    subject: "Your THRIFT BY B Order Confirmation",
    message: `Thank you for shopping with THRIFT BY B!\nHere are your order details:\n${summary}\nWe will contact you shortly.`
  };

  const adminPayload = {
    to_name: "THRIFT BY B Admin",
    to_email: EMAILJS_CONFIG.adminEmail,
    subject: "New Order Received - THRIFT BY B",
    message: `A new order has been placed.\nCustomer: ${order.customerName}\nEmail: ${order.customerEmail}\nPhone: ${order.customerPhone}\nAddress: ${order.address}\n${summary}`
  };

  await Promise.allSettled([
    window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.customerTemplateId, customerPayload),
    window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.adminTemplateId, adminPayload)
  ]);
}

function initAccountPage() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const switchBtns = document.querySelectorAll("[data-auth-tab]");
  const profilePanel = document.getElementById("profilePanel");
  const authPanel = document.getElementById("authPanel");
  const notice = document.getElementById("accountNotice");
  const historyBody = document.getElementById("orderHistoryBody");
  const profileForm = document.getElementById("profileForm");

  switchBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchBtns.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.authTab;
      registerForm.classList.toggle("hidden", target !== "register");
      loginForm.classList.toggle("hidden", target !== "login");
    });
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const users = getJSON(KEYS.users, []);
    const data = {
      id: `U-${Date.now()}`,
      name: registerForm.regName.value.trim(),
      email: registerForm.regEmail.value.trim().toLowerCase(),
      phone: registerForm.regPhone.value.trim(),
      password: registerForm.regPassword.value,
      address: registerForm.regAddress.value.trim(),
      createdAt: new Date().toISOString()
    };
    if (users.some((entry) => entry.email === data.email)) {
      notice.innerHTML = `<div class="notice error">Account already exists with this email.</div>`;
      return;
    }
    users.push(data);
    setJSON(KEYS.users, users);
    setJSON(KEYS.currentUser, data);
    notice.innerHTML = `<div class="notice success">Account created successfully.</div>`;
    renderAccount();
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const users = getJSON(KEYS.users, []);
    const email = loginForm.loginEmail.value.trim().toLowerCase();
    const password = loginForm.loginPassword.value;
    const found = users.find((entry) => entry.email === email && entry.password === password);
    if (!found) {
      notice.innerHTML = `<div class="notice error">Invalid email or password.</div>`;
      return;
    }
    setJSON(KEYS.currentUser, found);
    notice.innerHTML = `<div class="notice success">Welcome back ${found.name}.</div>`;
    renderAccount();
  });

  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const current = getCurrentUser();
    if (!current) return;
    const users = getJSON(KEYS.users, []);
    const next = {
      ...current,
      name: profileForm.profileName.value.trim(),
      phone: profileForm.profilePhone.value.trim(),
      address: profileForm.profileAddress.value.trim()
    };
    const updatedUsers = users.map((entry) => (entry.id === current.id ? next : entry));
    setJSON(KEYS.users, updatedUsers);
    setJSON(KEYS.currentUser, next);
    notice.innerHTML = `<div class="notice success">Profile updated.</div>`;
    renderAccount();
  });

  function renderAccount() {
    const account = getCurrentUser();
    updateCartCount();
    if (!account) {
      authPanel.classList.remove("hidden");
      profilePanel.classList.add("hidden");
      return;
    }
    authPanel.classList.add("hidden");
    profilePanel.classList.remove("hidden");
    document.getElementById("profileNameText").textContent = account.name;
    profileForm.profileName.value = account.name || "";
    profileForm.profilePhone.value = account.phone || "";
    profileForm.profileAddress.value = account.address || "";
    const orders = getOrders().filter((entry) => entry.customerId === account.id || entry.customerEmail === account.email);
    historyBody.innerHTML = orders.length
      ? orders
          .map(
            (order) => `
        <tr>
          <td>${order.id}</td>
          <td>${new Date(order.date).toLocaleDateString("en-NG")}</td>
          <td>${order.items.length} item(s)</td>
          <td>${order.deliveryLabel}</td>
          <td>${naira(order.total)}</td>
        </tr>
      `
          )
          .join("")
      : `<tr><td colspan="5">No orders yet.</td></tr>`;
  }

  renderAccount();
}

function initAdminLoginPage() {
  const form = document.getElementById("adminLoginForm");
  const notice = document.getElementById("adminNotice");
  if (getJSON(KEYS.adminSession)) {
    window.location.href = "admin-dashboard.html";
    return;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.adminEmail.value.trim().toLowerCase();
    const password = form.adminPassword.value;
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setJSON(KEYS.adminSession, { email, loggedAt: new Date().toISOString() });
      window.location.href = "admin-dashboard.html";
      return;
    }
    notice.innerHTML = `<div class="notice error">Invalid admin credentials.</div>`;
  });
}

function initAdminDashboardPage() {
  const session = getJSON(KEYS.adminSession);
  if (!session) {
    window.location.href = "admin-login.html";
    return;
  }

  const productForm = document.getElementById("adminProductForm");
  const productTable = document.getElementById("adminProductsBody");
  const ordersBody = document.getElementById("adminOrdersBody");
  const revenueEl = document.getElementById("statRevenue");
  const orderCountEl = document.getElementById("statOrders");
  const productCountEl = document.getElementById("statProducts");
  const adminLogout = document.getElementById("adminLogout");

  adminLogout.addEventListener("click", () => {
    localStorage.removeItem(KEYS.adminSession);
    window.location.href = "admin-login.html";
  });

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const products = getProducts();
    const next = {
      id: `P${Date.now()}`,
      name: productForm.productName.value.trim(),
      price: Number(productForm.productPrice.value),
      category: productForm.productCategory.value,
      sizes: productForm.productSizes.value
        .split(",")
        .map((s) => s.trim().toUpperCase())
        .filter(Boolean),
      condition: productForm.productCondition.value,
      description: productForm.productDescription.value.trim(),
      images: productForm.productImages.value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      featured: false
    };
    if (!next.images.length) {
      next.images = ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"];
    }
    products.push(next);
    setJSON(KEYS.products, products);
    productForm.reset();
    renderAdmin();
  });

  productTable.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest("[data-delete-product]");
    const editBtn = event.target.closest("[data-edit-product]");
    if (!deleteBtn && !editBtn) return;
    const id = (deleteBtn || editBtn).dataset.deleteProduct || (deleteBtn || editBtn).dataset.editProduct;
    const products = getProducts();
    const product = products.find((entry) => entry.id === id);
    if (!product) return;

    if (deleteBtn) {
      const next = products.filter((entry) => entry.id !== id);
      setJSON(KEYS.products, next);
      renderAdmin();
      return;
    }

    const name = window.prompt("Product name:", product.name) || product.name;
    const price = Number(window.prompt("Price (NGN):", product.price)) || product.price;
    const sizesRaw = window.prompt("Sizes (comma separated):", product.sizes.join(",")) || product.sizes.join(",");
    const updated = {
      ...product,
      name,
      price,
      sizes: sizesRaw
        .split(",")
        .map((s) => s.trim().toUpperCase())
        .filter(Boolean)
    };
    const next = products.map((entry) => (entry.id === id ? updated : entry));
    setJSON(KEYS.products, next);
    renderAdmin();
  });

  function renderAdmin() {
    const products = getProducts();
    const orders = getOrders();
    const revenue = orders.reduce((sum, order) => sum + order.total, 0);
    revenueEl.textContent = naira(revenue);
    orderCountEl.textContent = orders.length;
    productCountEl.textContent = products.length;

    productTable.innerHTML = products
      .map(
        (product) => `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${naira(product.price)}</td>
        <td>${product.sizes.join(", ")}</td>
        <td>
          <button class="btn btn-light" data-edit-product="${product.id}">Edit</button>
          <button class="btn btn-secondary" data-delete-product="${product.id}">Delete</button>
        </td>
      </tr>
    `
      )
      .join("");

    ordersBody.innerHTML = orders.length
      ? orders
          .map(
            (order) => `
      <tr>
        <td>${order.id}</td>
        <td>${new Date(order.date).toLocaleDateString("en-NG")}</td>
        <td>${order.customerName}</td>
        <td>${order.items.length} item(s)</td>
        <td>${order.deliveryLabel}</td>
        <td>${naira(order.total)}</td>
      </tr>
    `
          )
          .join("")
      : `<tr><td colspan="6">No orders yet.</td></tr>`;
  }

  renderAdmin();
}
