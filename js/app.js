document.addEventListener("DOMContentLoaded", async () => {
  // 1. Tự động tải sản phẩm từ file products.json
  try {
    const res = await fetch('/_data/products.json');
    const products = await res.json();
    const grid = document.getElementById('product-list');
    
    if (grid && products.length > 0) {
      grid.innerHTML = products.map(p => `
        <article class="product-card">
          <span class="product-badge">${p.badge}</span>
          <div class="product-wishlist"><i class="fa-regular fa-heart"></i></div>
          <div class="product-image"><img src="${p.image}" alt="${p.title}" /></div>
          <div class="product-content">
            <h3>${p.title}</h3>
            <div class="product-rating">★★★★★ <span>(99)</span></div>
            <div class="product-price">
              <span class="old-price">${p.old_price}</span>
              <span class="new-price">${p.price}</span>
            </div>
            <div class="product-save">${p.save}</div>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </article>
      `).join('');
    }
  } catch (e) {
    console.log("Đang tải dữ liệu sản phẩm...");
  }

  // 2. Kích hoạt menu mobile chạy 100%
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.style.cssText = 'visibility: visible !important; opacity: 1 !important; transform: translateX(0) !important; left: 0 !important;';
      if (mobileOverlay) mobileOverlay.style.cssText = 'visibility: visible !important; opacity: 1 !important;';
    });
  }

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.style.cssText = '';
      if (mobileOverlay) mobileOverlay.style.cssText = '';
    });
  }

  if (mobileOverlay && mobileMenu) {
    mobileOverlay.addEventListener('click', () => {
      mobileMenu.style.cssText = '';
      mobileOverlay.style.cssText = '';
    });
  }
});
/* Khi checkbox được bấm chọn, tự động lôi cái menu mobile ra hiển thị */
#menu-toggle-checkbox:checked ~ .mobile-menu,
#menu-toggle-checkbox:checked ~ .mobile-overlay {
  visibility: visible !important;
  opacity: 1 !important;
  transform: translateX(0) !important;
  display: block !important;
}
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Tự động tải sản phẩm từ file products.json
  try {
    const res = await fetch('/_data/products.json');
    const products = await res.json();
    const grid = document.getElementById('product-list');
    
    if (grid && products.length > 0) {
      grid.innerHTML = products.map(p => `
        <article class="product-card">
          <span class="product-badge">${p.badge}</span>
          <div class="product-wishlist"><i class="fa-regular fa-heart"></i></div>
          <div class="product-image"><img src="${p.image}" alt="${p.title}" /></div>
          <div class="product-content">
            <h3>${p.title}</h3>
            <div class="product-rating">★★★★★ <span>(99)</span></div>
            <div class="product-price">
              <span class="old-price">${p.old_price}</span>
              <span class="new-price">${p.price}</span>
            </div>
            <div class="product-save">${p.save}</div>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </article>
      `).join('');
    }
  } catch (e) {
    console.log("Đang tải dữ liệu sản phẩm...");
  }

  // 2. Kích hoạt đóng/mở menu mobile
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      if (mobileOverlay) mobileOverlay.classList.remove('active');
    });
  }

  if (mobileOverlay && mobileMenu) {
    mobileOverlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
    });
  }

  // Xử lý trượt dropdown bên trong mobile menu
  const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('active');
    });
  });
});
