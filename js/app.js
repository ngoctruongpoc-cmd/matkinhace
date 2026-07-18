/*==================================================
SECTION 21 - MOBILE MENU (CẬP NHẬT AN TOÀN)
==================================================*/

const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const mobileOverlay = document.querySelector(".mobile-overlay");

function openMobileMenu() {
  if (mobileMenu && mobileOverlay) {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileMenu() {
  if (mobileMenu && mobileOverlay) {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Bọc điều kiện kiểm tra: Chỉ gán sự kiện nếu nút bấm tồn tại trên màn hình
if (mobileToggle) {
  mobileToggle.addEventListener("click", openMobileMenu);
}

if (mobileClose) {
  mobileClose.addEventListener("click", closeMobileMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMobileMenu);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMobileMenu();
  }
});
// Xử lý đóng mở menu con (Accordion) trên giao diện Mobile
document.querySelectorAll(".mobile-dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault(); // Chặn không cho nhảy trang
    const parent = this.parentElement;

    // Toggle class active để đóng/mở
    parent.classList.toggle("active");
  });
});
