(function () {
  const keys = {
    products: "urt_products",
    cart: "urt_cart",
    users: "urt_users",
    currentUser: "urt_current_user",
    orders: "urt_orders",
    coupon: "urt_coupon"
  };

  const defaultProducts = [
    { id: "p1", name: "Oversized Utility Jacket", price: 68, size: "L", category: "Jackets", gender: "Unisex", condition: "Like New", dateAdded: "2026-02-22", description: "Heavyweight thrifted utility jacket with relaxed cut and clean hardware.", images: ["https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"] },
    { id: "p2", name: "Vintage Graphic Tee", price: 32, size: "M", category: "Tops", gender: "Unisex", condition: "Gently Used", dateAdded: "2026-02-25", description: "Soft faded cotton tee with authentic 90s wash and bold graphic print.", images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?auto=format&fit=crop&w=900&q=80"] },
    { id: "p3", name: "Loose Denim Carpenter Pants", price: 54, size: "XL", category: "Bottoms", gender: "Men", condition: "Gently Used", dateAdded: "2026-02-20", description: "Wide-leg carpenter denim with durable texture and easy street fit.", images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80"] },
    { id: "p4", name: "Retro Varsity Jacket", price: 88, size: "M", category: "Vintage", gender: "Unisex", condition: "Vintage", dateAdded: "2026-02-28", description: "Retro varsity silhouette with original patch details and ribbed trim.", images: ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80"] },
    { id: "p5", name: "Cropped Workwear Shirt", price: 36, size: "S", category: "Tops", gender: "Women", condition: "Like New", dateAdded: "2026-02-27", description: "Structured cropped shirt with utility pocket and neutral tan finish.", images: ["https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1503341338985-95e12f87f95d?auto=format&fit=crop&w=900&q=80"] },
    { id: "p6", name: "Canvas Messenger Bag", price: 29, size: "M", category: "Accessories", gender: "Unisex", condition: "Gently Used", dateAdded: "2026-02-19", description: "Rugged canvas sling bag, perfect for daily city moves.", images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"] },
    { id: "p7", name: "Washed Cargo Shorts", price: 34, size: "L", category: "Bottoms", gender: "Men", condition: "Like New", dateAdded: "2026-02-24", description: "Relaxed cargo shorts with faded wash and roomy pockets.", images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80"] },
    { id: "p8", name: "Earth Tone Knit Vest", price: 41, size: "S", category: "Vintage", gender: "Women", condition: "Vintage", dateAdded: "2026-03-01", description: "Textured knit vest in earthy palette, easy layering essential.", images: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?auto=format&fit=crop&w=900&q=80"] },
    { id: "p9", name: "Neutral Bomber Jacket", price: 74, size: "XL", category: "Jackets", gender: "Men", condition: "Gently Used", dateAdded: "2026-02-26", description: "Minimal bomber jacket with clean lines and comfortable fit.", images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80"] },
    { id: "p10", name: "Vintage Leather Belt", price: 21, size: "M", category: "Accessories", gender: "Unisex", condition: "Vintage", dateAdded: "2026-02-18", description: "Classic aged leather belt with metal buckle patina.", images: ["https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1555529771-35a45f64d7cf?auto=format&fit=crop&w=900&q=80"] },
    { id: "p11", name: "Relaxed Corduroy Trousers", price: 49, size: "M", category: "Bottoms", gender: "Unisex", condition: "Like New", dateAdded: "2026-03-02", description: "Soft corduroy trousers with modern tapered silhouette.", images: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"] },
    { id: "p12", name: "Classic Plaid Flannel", price: 39, size: "XS", category: "Tops", gender: "Women", condition: "Gently Used", dateAdded: "2026-02-21", description: "Soft plaid flannel shirt with oversized vintage shape.", images: ["https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"] }
  ];

  function getJSON(key, fallback) {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function setJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function initStorage() {
    if (!localStorage.getItem(keys.products)) setJSON(keys.products, defaultProducts);
    if (!localStorage.getItem(keys.cart)) setJSON(keys.cart, []);
    if (!localStorage.getItem(keys.users)) setJSON(keys.users, []);
    if (!localStorage.getItem(keys.orders)) setJSON(keys.orders, []);
  }

  function getProducts() { return getJSON(keys.products, []); }
  function setProducts(items) { setJSON(keys.products, items); }
  function getCart() { return getJSON(keys.cart, []); }
  function setCart(items) { setJSON(keys.cart, items); updateCartCount(); }
  function getOrders() { return getJSON(keys.orders, []); }
  function setOrders(items) { setJSON(keys.orders, items); }
  function money(n) { return "$" + Number(n).toFixed(2); }

  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce(function (sum, item) { return sum + item.quantity; }, 0);
    document.querySelectorAll(".cart-count").forEach(function (el) { el.textContent = count; });
  }

  function navMenu() {
    const btn = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");
    if (!btn || !links) return;
    btn.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  function renderProductCard(product) {
    return (
      '<article class="card product-card">' +
        '<a href="product.html?id=' + product.id + '"><img src="' + product.images[0] + '" alt="' + product.name + '" /></a>' +
        '<div class="product-body">' +
          "<h3>" + product.name + "</h3>" +
          '<div class="product-meta"><span>' + product.category + "</span><span>Size " + product.size + "</span></div>" +
          '<p class="price">' + money(product.price) + "</p>" +
          '<div class="product-meta"><span>' + product.gender + "</span><span>" + product.condition + "</span></div>" +
          '<button class="btn btn-primary full add-cart" data-id="' + product.id + '">Add to Cart</button>' +
        "</div>" +
      "</article>"
    );
  }

  function addToCart(id, quantity) {
    const cart = getCart();
    const qty = Number(quantity) || 1;
    const existing = cart.find(function (item) { return item.id === id; });
    if (existing) existing.quantity += qty;
    else cart.push({ id: id, quantity: qty });
    setCart(cart);
    alert("Added to cart.");
  }

  function bindAddToCart(root) {
    root.querySelectorAll(".add-cart").forEach(function (btn) {
      btn.addEventListener("click", function () {
        addToCart(this.dataset.id, 1);
      });
    });
  }

  function homePage() {
    const featured = document.getElementById("featured-grid");
    if (!featured) return;
    const products = getProducts().slice(0, 8);
    featured.innerHTML = products.map(renderProductCard).join("");
    bindAddToCart(featured);

    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("newsletter-email").value.trim();
        if (!email) return;
        alert("Subscribed successfully.");
        newsletterForm.reset();
      });
    }
  }

  function shopPage() {
    const grid = document.getElementById("shop-grid");
    if (!grid) return;

    const priceRange = document.getElementById("filter-price");
    const priceValue = document.getElementById("price-value");
    const category = document.getElementById("filter-category");
    const size = document.getElementById("filter-size");
    const gender = document.getElementById("filter-gender");
    const sort = document.getElementById("sort-products");

    function render() {
      let items = getProducts().slice();
      const maxPrice = Number(priceRange.value);
      priceValue.textContent = maxPrice;

      items = items.filter(function (p) { return p.price <= maxPrice; });
      if (category.value !== "all") items = items.filter(function (p) { return p.category === category.value; });
      if (size.value !== "all") items = items.filter(function (p) { return p.size === size.value; });
      if (gender.value !== "all") items = items.filter(function (p) { return p.gender === gender.value; });

      if (sort.value === "low-high") items.sort(function (a, b) { return a.price - b.price; });
      if (sort.value === "high-low") items.sort(function (a, b) { return b.price - a.price; });
      if (sort.value === "newest") items.sort(function (a, b) { return new Date(b.dateAdded) - new Date(a.dateAdded); });

      if (!items.length) {
        grid.innerHTML = "<p class='notice'>No products match your filters.</p>";
        return;
      }

      grid.innerHTML = items.map(renderProductCard).join("");
      bindAddToCart(grid);
    }

    [priceRange, category, size, gender, sort].forEach(function (el) { el.addEventListener("input", render); });
    [category, size, gender, sort].forEach(function (el) { el.addEventListener("change", render); });
    render();
  }

  function productPage() {
    const wrap = document.getElementById("product-detail");
    if (!wrap) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = getProducts().find(function (p) { return p.id === id; }) || getProducts()[0];

    if (!product) {
      wrap.innerHTML = "<p class='notice'>Product not found.</p>";
      return;
    }

    wrap.innerHTML =
      '<div class="card product-gallery-main">' +
        '<img id="main-product-image" src="' + product.images[0] + '" alt="' + product.name + '" />' +
        '<div class="thumbnail-row" id="thumb-row">' +
          product.images.map(function (img, i) {
            return '<img src="' + img + '" data-img="' + img + '" alt="' + product.name + ' thumbnail" class="' + (i === 0 ? "active" : "") + '" />';
          }).join("") +
        "</div>" +
      "</div>" +
      '<article class="card product-info-card">' +
        "<h1>" + product.name + "</h1>" +
        '<p class="price">' + money(product.price) + "</p>" +
        "<p>" + product.description + "</p>" +
        "<p><strong>Condition:</strong> " + product.condition + "</p>" +
        "<p><strong>Category:</strong> " + product.category + "</p>" +
        "<p><strong>Gender:</strong> " + product.gender + "</p>" +
        "<p><strong>Size:</strong> " + product.size + "</p>" +
        '<div class="qty-wrap">' +
          '<label for="product-qty">Quantity:</label>' +
          '<input type="number" id="product-qty" min="1" value="1" />' +
        "</div>" +
        '<button id="product-add" class="btn btn-primary">Add to Cart</button>' +
      "</article>";

    const mainImage = document.getElementById("main-product-image");
    document.querySelectorAll("#thumb-row img").forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        mainImage.src = this.dataset.img;
        document.querySelectorAll("#thumb-row img").forEach(function (t) { t.classList.remove("active"); });
        this.classList.add("active");
      });
    });

    document.getElementById("product-add").addEventListener("click", function () {
      addToCart(product.id, document.getElementById("product-qty").value);
    });
  }

  function calculateCartTotals() {
    const cart = getCart();
    const products = getProducts();
    const subtotal = cart.reduce(function (sum, item) {
      const product = products.find(function (p) { return p.id === item.id; });
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 7.99) : 0;
    const coupon = localStorage.getItem(keys.coupon) || "";
    const discount = coupon === "THRIFT10" ? subtotal * 0.1 : 0;
    const total = Math.max(0, subtotal + shipping - discount);
    return { subtotal: subtotal, shipping: shipping, discount: discount, total: total };
  }

  function cartPage() {
    const itemsWrap = document.getElementById("cart-items");
    if (!itemsWrap) return;

    function render() {
      const cart = getCart();
      const products = getProducts();

      if (!cart.length) {
        itemsWrap.innerHTML = "<p class='notice'>Your cart is empty. <a href='shop.html'>Start shopping</a>.</p>";
      } else {
        itemsWrap.innerHTML = cart.map(function (item) {
          const p = products.find(function (x) { return x.id === item.id; });
          if (!p) return "";
          return (
            '<article class="card cart-item">' +
              '<img src="' + p.images[0] + '" alt="' + p.name + '" />' +
              "<div>" +
                "<h3>" + p.name + "</h3>" +
                "<p>" + money(p.price) + " | Size " + p.size + "</p>" +
                '<label>Qty:' +
                  '<input type="number" min="1" value="' + item.quantity + '" data-id="' + item.id + '" class="cart-qty" />' +
                "</label>" +
              "</div>" +
              "<div>" +
                '<button class="btn btn-outline remove-item" data-id="' + item.id + '">Remove</button>' +
              "</div>" +
            "</article>"
          );
        }).join("");
      }

      const totals = calculateCartTotals();
      document.getElementById("cart-subtotal").textContent = money(totals.subtotal);
      document.getElementById("cart-shipping").textContent = money(totals.shipping);
      document.getElementById("cart-discount").textContent = "-" + money(totals.discount);
      document.getElementById("cart-total").textContent = money(totals.total);

      document.querySelectorAll(".cart-qty").forEach(function (input) {
        input.addEventListener("change", function () {
          const cartItems = getCart();
          const target = cartItems.find(function (c) { return c.id === input.dataset.id; });
          if (target) target.quantity = Math.max(1, Number(input.value) || 1);
          setCart(cartItems);
          render();
        });
      });

      document.querySelectorAll(".remove-item").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const updated = getCart().filter(function (c) { return c.id !== btn.dataset.id; });
          setCart(updated);
          render();
        });
      });
    }

    const applyBtn = document.getElementById("apply-coupon");
    const input = document.getElementById("coupon-code");
    if (applyBtn && input) {
      applyBtn.addEventListener("click", function () {
        const code = input.value.trim().toUpperCase();
        if (code === "THRIFT10") {
          localStorage.setItem(keys.coupon, code);
          alert("Coupon applied: 10% off");
        } else {
          localStorage.removeItem(keys.coupon);
          alert("Invalid coupon code");
        }
        render();
      });
    }

    render();
  }

  function checkoutPage() {
    const form = document.getElementById("checkout-form");
    if (!form) return;

    const itemsWrap = document.getElementById("checkout-items");
    const confirmation = document.getElementById("order-confirmation");

    function renderSummary() {
      const cart = getCart();
      const products = getProducts();
      if (!cart.length) {
        itemsWrap.innerHTML = "<p class='notice'>Your cart is empty. <a href='shop.html'>Go to shop</a>.</p>";
        form.querySelector("button[type='submit']").disabled = true;
      } else {
        itemsWrap.innerHTML = cart.map(function (item) {
          const p = products.find(function (x) { return x.id === item.id; });
          if (!p) return "";
          return "<p>" + item.quantity + " x " + p.name + " <strong>" + money(p.price * item.quantity) + "</strong></p>";
        }).join("");
      }
      const totals = calculateCartTotals();
      document.getElementById("checkout-subtotal").textContent = money(totals.subtotal);
      document.getElementById("checkout-shipping").textContent = money(totals.shipping);
      document.getElementById("checkout-discount").textContent = "-" + money(totals.discount);
      document.getElementById("checkout-total").textContent = money(totals.total);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const cart = getCart();
      if (!cart.length) return;

      const totals = calculateCartTotals();
      const currentUser = getJSON(keys.currentUser, null);
      const orderId = "ORD-" + Date.now();

      const order = {
        id: orderId,
        date: new Date().toISOString(),
        customer: {
          fullName: document.getElementById("fullName").value.trim(),
          email: document.getElementById("email").value.trim(),
          phone: document.getElementById("phone").value.trim(),
          address: document.getElementById("address").value.trim(),
          city: document.getElementById("city").value.trim(),
          state: document.getElementById("state").value.trim(),
          zip: document.getElementById("zip").value.trim()
        },
        userEmail: currentUser ? currentUser.email : document.getElementById("email").value.trim(),
        items: cart,
        delivery: document.querySelector("input[name='delivery']:checked").value,
        payment: document.querySelector("input[name='payment']:checked").value,
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        discount: totals.discount,
        total: totals.total,
        status: "Processing"
      };

      const orders = getOrders();
      orders.push(order);
      setOrders(orders);

      setCart([]);
      localStorage.removeItem(keys.coupon);
      form.classList.add("hidden");
      document.querySelector(".summary-box").classList.add("hidden");

      confirmation.classList.remove("hidden");
      confirmation.innerHTML =
        "<h2>Order Confirmed</h2>" +
        "<p>Thanks for shopping Urban Revival Thrift.</p>" +
        "<p><strong>Order ID:</strong> " + orderId + "</p>" +
        "<p><strong>Total Paid:</strong> " + money(totals.total) + "</p>" +
        "<p>You will receive a confirmation email shortly (demo).</p>" +
        '<a class="btn btn-primary" href="shop.html">Continue Shopping</a>';

      updateCartCount();
    });

    renderSummary();
  }

  function accountPage() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    if (!loginForm || !registerForm) return;

    const profileSection = document.getElementById("profile-section");
    const orderHistory = document.getElementById("order-history");
    const ordersList = document.getElementById("orders-list");

    function getUsers() { return getJSON(keys.users, []); }
    function setUsers(users) { setJSON(keys.users, users); }

    function refreshAccountView() {
      const current = getJSON(keys.currentUser, null);
      if (!current) {
        profileSection.classList.add("hidden");
        orderHistory.classList.add("hidden");
        return;
      }

      profileSection.classList.remove("hidden");
      orderHistory.classList.remove("hidden");

      document.getElementById("profile-name").value = current.name || "";
      document.getElementById("profile-email").value = current.email || "";
      document.getElementById("profile-phone").value = current.phone || "";
      document.getElementById("profile-address").value = current.address || "";

      const myOrders = getOrders().filter(function (order) { return order.userEmail === current.email; });
      if (!myOrders.length) {
        ordersList.innerHTML = "<p class='notice'>No orders yet.</p>";
      } else {
        ordersList.innerHTML = myOrders.map(function (order) {
          return (
            '<article class="card" style="padding: .8rem; margin-bottom: .7rem;">' +
              "<p><strong>" + order.id + "</strong> | " + new Date(order.date).toLocaleDateString() + "</p>" +
              "<p>Status: " + order.status + "</p>" +
              "<p>Total: " + money(order.total) + "</p>" +
            "</article>"
          );
        }).join("");
      }
    }

    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const users = getUsers();
      const email = document.getElementById("register-email").value.trim().toLowerCase();
      if (users.some(function (u) { return u.email === email; })) {
        alert("Email already registered.");
        return;
      }
      const user = {
        id: "u" + Date.now(),
        name: document.getElementById("register-name").value.trim(),
        email: email,
        password: document.getElementById("register-password").value,
        phone: "",
        address: ""
      };
      users.push(user);
      setUsers(users);
      setJSON(keys.currentUser, user);
      registerForm.reset();
      alert("Account created and logged in.");
      refreshAccountView();
    });

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim().toLowerCase();
      const password = document.getElementById("login-password").value;
      const user = getUsers().find(function (u) { return u.email === email && u.password === password; });
      if (!user) {
        alert("Invalid email or password.");
        return;
      }
      setJSON(keys.currentUser, user);
      loginForm.reset();
      alert("Logged in successfully.");
      refreshAccountView();
    });

    document.getElementById("profile-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const current = getJSON(keys.currentUser, null);
      if (!current) return;
      const users = getUsers();
      const idx = users.findIndex(function (u) { return u.email === current.email; });
      if (idx === -1) return;

      users[idx].name = document.getElementById("profile-name").value.trim();
      users[idx].phone = document.getElementById("profile-phone").value.trim();
      users[idx].address = document.getElementById("profile-address").value.trim();
      setUsers(users);
      setJSON(keys.currentUser, users[idx]);
      alert("Profile updated.");
      refreshAccountView();
    });

    document.getElementById("logout-btn").addEventListener("click", function () {
      localStorage.removeItem(keys.currentUser);
      refreshAccountView();
    });

    refreshAccountView();
  }

  function adminPage() {
    const form = document.getElementById("admin-product-form");
    if (!form) return;

    const productWrap = document.getElementById("admin-products");
    const orderWrap = document.getElementById("admin-orders");
    const revenue = document.getElementById("stat-revenue");
    const totalOrders = document.getElementById("stat-orders");

    function renderProducts() {
      const products = getProducts();
      if (!products.length) {
        productWrap.innerHTML = "<p class='notice'>No products found.</p>";
        return;
      }

      productWrap.innerHTML =
        '<table class="admin-table">' +
          "<thead>" +
            "<tr><th>Name</th><th>Price</th><th>Category</th><th>Size</th><th>Actions</th></tr>" +
          "</thead>" +
          "<tbody>" +
            products.map(function (p) {
              return (
                "<tr>" +
                  "<td>" + p.name + "</td>" +
                  "<td>" + money(p.price) + "</td>" +
                  "<td>" + p.category + "</td>" +
                  "<td>" + p.size + "</td>" +
                  "<td>" +
                    '<button class="btn btn-outline admin-edit" data-id="' + p.id + '">Edit</button> ' +
                    '<button class="btn btn-dark admin-delete" data-id="' + p.id + '">Delete</button>' +
                  "</td>" +
                "</tr>"
              );
            }).join("") +
          "</tbody>" +
        "</table>";

      document.querySelectorAll(".admin-delete").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const id = btn.dataset.id;
          const next = getProducts().filter(function (p) { return p.id !== id; });
          setProducts(next);
          renderProducts();
        });
      });

      document.querySelectorAll(".admin-edit").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const p = getProducts().find(function (item) { return item.id === btn.dataset.id; });
          if (!p) return;
          document.getElementById("admin-form-title").textContent = "Edit Product";
          document.getElementById("admin-product-id").value = p.id;
          document.getElementById("admin-name").value = p.name;
          document.getElementById("admin-price").value = p.price;
          document.getElementById("admin-size").value = p.size;
          document.getElementById("admin-category").value = p.category;
          document.getElementById("admin-gender").value = p.gender;
          document.getElementById("admin-condition").value = p.condition;
          document.getElementById("admin-image").value = p.images[0] || "";
          document.getElementById("admin-images").value = (p.images || []).slice(1).join(",");
          document.getElementById("admin-description").value = p.description;
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }

    function renderOrders() {
      const orders = getOrders();
      totalOrders.textContent = String(orders.length);
      const totalRevenue = orders.reduce(function (sum, o) { return sum + Number(o.total || 0); }, 0);
      revenue.textContent = money(totalRevenue);

      if (!orders.length) {
        orderWrap.innerHTML = "<p class='notice'>No orders yet.</p>";
        return;
      }

      orderWrap.innerHTML =
        '<table class="admin-table">' +
          "<thead>" +
            "<tr><th>Order ID</th><th>Date</th><th>Customer</th><th>Total</th><th>Status</th></tr>" +
          "</thead>" +
          "<tbody>" +
            orders.map(function (o) {
              return (
                "<tr>" +
                  "<td>" + o.id + "</td>" +
                  "<td>" + new Date(o.date).toLocaleDateString() + "</td>" +
                  "<td>" + o.customer.fullName + "</td>" +
                  "<td>" + money(o.total) + "</td>" +
                  "<td>" + o.status + "</td>" +
                "</tr>"
              );
            }).join("") +
          "</tbody>" +
        "</table>";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const current = getProducts();
      const existingId = document.getElementById("admin-product-id").value;

      const mainImage = document.getElementById("admin-image").value.trim();
      const extraImages = document.getElementById("admin-images").value.trim()
        .split(",")
        .map(function (x) { return x.trim(); })
        .filter(Boolean);

      const productData = {
        id: existingId || "p" + Date.now(),
        name: document.getElementById("admin-name").value.trim(),
        price: Number(document.getElementById("admin-price").value),
        size: document.getElementById("admin-size").value,
        category: document.getElementById("admin-category").value,
        gender: document.getElementById("admin-gender").value,
        condition: document.getElementById("admin-condition").value,
        description: document.getElementById("admin-description").value.trim(),
        dateAdded: new Date().toISOString().split("T")[0],
        images: [mainImage].concat(extraImages)
      };

      if (existingId) {
        const idx = current.findIndex(function (p) { return p.id === existingId; });
        if (idx > -1) current[idx] = productData;
      } else {
        current.push(productData);
      }

      setProducts(current);
      form.reset();
      document.getElementById("admin-product-id").value = "";
      document.getElementById("admin-form-title").textContent = "Add New Product";
      renderProducts();
    });

    renderProducts();
    renderOrders();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initStorage();
    navMenu();
    updateCartCount();

    const page = document.body.dataset.page;
    if (page === "home") homePage();
    if (page === "shop") shopPage();
    if (page === "product") productPage();
    if (page === "cart") cartPage();
    if (page === "checkout") checkoutPage();
    if (page === "account") accountPage();
    if (page === "admin") adminPage();
  });
})();
