// Функция для рендера товаров в корзине
const renderCart = async () => {
    const cartWrapper = document.querySelector('.js-cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      cartWrapper.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    try {
      const response = await fetch('../data/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const cartItems = data.filter(product => cart.includes(String(product.id)));

      cartItems.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('shopping-cart__card');

        cartItem.innerHTML = `
          <div class="shopping-cart__img-wrapper">
            <img class="shopping-cart__img" src="${product.img}" alt="${product.alt}">
          </div>
          <div class="shopping-cart__content-wrapper">
            <span class="shopping-cart__close" data-id="${product.id}">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
              </svg>
            </span>
            <h4 class="shopping-cart__title">${product.name}</h4>
            <p class="shopping-cart__category">T-SHIRT</p>
            <p class="shopping-cart__text">Price: <span class="shopping-cart__text--price">${product.price}</span></p>
            <p class="shopping-cart__text">Color: Red</p>
            <p class="shopping-cart__text">Size: XL</p>
            <p class="shopping-cart__text">Quantity: <span class="shopping-cart__value">1</span></p>
          </div>
        `;

        cartWrapper.appendChild(cartItem);
      });


      const removeButtons = document.querySelectorAll('.shopping-cart__close');
      removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const productId = e.target.closest('.shopping-cart__close').dataset.id;
          removeFromCart(productId);
        });
      });

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };


  const removeFromCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));

    document.querySelector('.js-cart').innerHTML = '';
    renderCart();
  };

  renderCart();
