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

  // 2. Kích hoạt nút 3 gạch mở menu mobile
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.add('active');
      if (mobileOverlay) mobileOverlay.classList.add('active');
    });
  }

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

  // Xử lý menu con trượt xuống
  const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('active');
    });
  });
});
.mobile-menu.open {
  visibility: visible !important;
  opacity: 1 !important;
  transform: translateX(0) !important;
  left: 0 !important;
}
.mobile-overlay.open {
  visibility: visible !important;
  opacity: 1 !important;
}
body.menu-open .mobile-menu {
  visibility: visible !important;
  opacity: 1 !important;
  transform: translateX(0) !important;
  left: 0 !important;
  display: block !important;
}
body.menu-open .mobile-overlay {
  visibility: visible !important;
  opacity: 1 !important;
  display: block !important;
}
