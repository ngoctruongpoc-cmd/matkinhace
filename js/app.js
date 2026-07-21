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

  // 2. Kích hoạt nút 3 gạch menu mobile
  const menuBtn = document.querySelector('.menu-toggle, .hamburger, header .fa-bars, .nav-toggle, [aria-label="Menu"]');
  const navMenu = document.querySelector('nav ul, .nav-menu, .mobile-menu');
  
  // Tự tìm theo cấu trúc thông dụng nếu không khớp class trên
  const toggleBtn = document.querySelector('.fa-bars') || document.querySelector('.navbar-toggler') || document.querySelector('header .fa-bars');
  const targetNav = document.querySelector('nav') || document.querySelector('.nav-links');

  if (toggleBtn && targetNav) {
    toggleBtn.addEventListener('click', () => {
      targetNav.classList.toggle('active');
    });
  }
});
