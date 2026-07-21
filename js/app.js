document.addEventListener("DOMContentLoaded", () => {
  // 1. Hàm tự động đổ dữ liệu vào HTML
  async function fetchData(file, selector, callback) {
    try {
      const response = await fetch(`/${file}`);
      const data = await response.json();
      const element = document.querySelector(selector);
      if (element && data) {
        callback(element, data);
      }
    } catch (error) {
      console.log(`Chưa có dữ liệu cho file: ${file}`);
    }
  }

  // 2. Kết nối trang quản trị ra website
  // Thay đổi tiêu đề Hero
  fetchData(
    "home.json",
    ".hero-content h1",
    (el, data) => (el.innerText = data.hero_title),
  );

  // Thay đổi mô tả Hero
  fetchData(
    "home.json",
    ".hero-content p",
    (el, data) => (el.innerText = data.hero_desc),
  );

  // Thay đổi thông tin liên hệ ở Footer (Giả sử có class footer-contact-list)
  fetchData("contact.json", ".footer-contact-list", (el, data) => {
    el.innerHTML = `
            <li>📍 ${data.address}</li>
            <li>☎ ${data.phone}</li>
            <li>✉ ${data.email}</li>
        `;
  });
});
// Tự động load sản phẩm từ CMS
async function loadProducts() {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  try {
    // Lấy dữ liệu từ file dữ liệu sản phẩm của CMS
    // Đại ca lưu ý: Nếu đại ca lưu sản phẩm vào folder 'products',
    // Netlify CMS thường tạo file .json hoặc .md.
    const response = await fetch("/products/index.json");
    const products = await response.json();

    if (products && products.length > 0) {
      // Nếu có sản phẩm mới, ta xóa code cũ đi và hiển thị sản phẩm mới
      productList.innerHTML = products
        .map(
          (p) => `
                <article class="product-card">
                    <div class="product-image"><img src="${p.image}" alt="${p.title}"></div>
                    <div class="product-content">
                        <h3>${p.title}</h3>
                        <div class="product-price"><span>${p.price}đ</span></div>
                        <a href="#" class="btn btn-primary">Xem chi tiết</a>
                    </div>
                </article>
            `,
        )
        .join("");
    }
  } catch (e) {
    console.log("Đang dùng code cũ, chưa có dữ liệu sản phẩm từ CMS.");
  }
  document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch('/_data/products.json');
    const products = await res.json();
    const grid = document.getElementById('product-list');
    if(grid && products.length > 0) {
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
  } catch(e) {
    console.log("Đang tải dữ liệu sản phẩm...");
  }
});
}

// Chạy hàm khi trang web tải xong
loadProducts();
