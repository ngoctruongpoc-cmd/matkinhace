document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Trỏ thẳng vào file products.json chuẩn nằm trong thư mục _data
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
});
