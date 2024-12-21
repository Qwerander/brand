const renderProducts = (data) => {
  const productsWrapper = document.querySelector(".products__wrapper");

  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("products__item");

    productElement.innerHTML = `
        <img class="products__img" src="${product.img}" alt="${product.alt}">
        <div class="products__item-wrapper">
          <h3 class="products__name">${product.name}</h3>
          <p class="products__text">${product.text}</p>
          <div class="products__bottom">
            <span class="products__price">${product.price}</span>
            <button class="products__add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      `;

    productsWrapper.appendChild(productElement);
  });

  const addToCartButtons = document.querySelectorAll(".products__add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.dataset.id;
      addToCart(productId);
    });
  });
};

const addToCart = (productId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.includes(productId)) {
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  } else {
    alert("Product is already in the cart.");
  }
};

const fetchProductsData = async () => {
  try {
    const response = await fetch("../data/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

fetchProductsData();
