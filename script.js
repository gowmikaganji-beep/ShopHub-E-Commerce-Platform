let cart = JSON.parse(localStorage.getItem("cart")) || [];

function openBrands(category) {
  localStorage.setItem("category", category);
  window.location.href = "brands.html";
}

function openProducts(brand) {
  localStorage.setItem("brand", brand);
  window.location.href = "products.html";
}

const category = localStorage.getItem("category");
const brand = localStorage.getItem("brand");

if (document.getElementById("brandTitle")) {
  document.getElementById("brandTitle").innerText =
    `Choose ${category} Brand`;
}

/* ===================== PRODUCT DATA ===================== */
const data = {
  lipstick: {
    Lakme: [
      {
        name: "Lakme Matte Lipstick",
        price: 599,
        img: "https://images-static.nykaa.com/media/catalog/product/d/b/db453c4LAKME00000261_M.jpg?tr=w-500"
      }
    ],
    Maybelline: [
      {
        name: "Maybelline Superstay Lipstick",
        price: 699,
        img: "https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/superstay-matte-ink/modules/product-info/amazonian/amazonian-001.jpg"
      }
    ],
    MAC: [
      {
        name: "MAC Ruby Woo Lipstick",
        price: 1999,
        img: "https://m.media-amazon.com/images/I/71vSCCXiszL._AC_UF1000,1000_QL80_.jpg"
      }
    ]
  },

  foundation: {
    Lakme: [
      {
        name: "Lakme 9to5 Foundation",
        price: 799,
        img: "https://www.lakmeindia.com/cdn/shop/files/67004_H-8909106029095.jpg?v=1738220196"
      }
    ],
    Maybelline: [
      {
        name: "Maybelline Fit Me Foundation",
        price: 849,
        img: "https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/fit-me-tube-foundation/module/product-info/230-natural-buff/6902395722472-01.jpg?rev=b6c3252e34684e1d8e1078e296566581&cx=0&cy=0&cw=880&ch=1320&hash=EABB1FF2EE33C98A1FD1B75AB41D926C"
      }
    ],
    MAC: [
      {
        name: "MAC Studio Fix Fluid",
        price: 2599,
        img: "https://m.media-amazon.com/images/I/61mMLQpdmRL.jpg"
      }
    ]
  },

  eyeliner: {
    Lakme: [
      {
        name: "Lakme Eyeconic Eyeliner",
        price: 350,
        img: "https://www.havin.in/cdn/shop/files/41JaRhOS3CL.jpg?v=1712860687"
      }
    ],
    Maybelline: [
      {
        name: "Maybelline Colossal Eyeliner",
        price: 425,
        img: "https://m.media-amazon.com/images/I/518i9EgA+xL.jpg"
      }
    ],
    MAC: [
      {
        name: "MAC Liquidlast Eyeliner",
        price: 1450,
        img: "https://images-static.nykaa.com/media/catalog/product/c/4/c4dc29a773602375783_rv__1.jpg"
      }
    ]
  }
};
/* ======================================================= */

if (document.getElementById("productGrid")) {
  document.getElementById("productTitle").innerText =
    `${brand} ${category}`;

  data[category][brand].forEach(p => {
    document.getElementById("productGrid").innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}', ${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart 🛒");
}
