//Toggle class active
const navbar = document.querySelector(".navbar-nav");
//ketika hamburger menu di click
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class active untuk search form
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar sidebar untuk menghilangkan nav
const mn = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!mn.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// scrol reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".content h1, .about h2, form textarea, .about h3, .menu-kami",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".content p, .content a, form .input-box, .about p, .about-img",
  { origin: "right" }
);
ScrollReveal().reveal(".contact h2, .products, .location", { origin: "top" });
ScrollReveal().reveal("form input", { origin: "top" });

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar-nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar-nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector(".navbar");

  header.classList.toggle("sticky", window.scrollY > 100);
};

//modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButtons = document.querySelectorAll(
  ".item-detail-button, .item-detail-buttom2, .item-detail-button3"
);

document.querySelector(".row").addEventListener("click", (e) => {
  if (
    e.target.closest(".item-detail-buttom") ||
    e.target.closest(".item-detail-buttom2") ||
    e.target.closest(".item-detail-buttom3")
  ) {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  }
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
