document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemElement = event.target.closest(".item");
        const itemId = itemElement.getAttribute("data-id");
        const itemName = itemElement.getAttribute("data-name");
        const itemPrice = parseFloat(itemElement.getAttribute("data-price"));
  
        const cartItem = {
          id: itemId,
          name: itemName,
          price: itemPrice,
        };
  
        cartItems.push(cartItem);
        updateCart();
      });
    });
  
    function updateCart() {
      cartList.innerHTML = "";
      totalPrice = 0;
  
      cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
                  ${item.name} - ksh${item.price}
                  <button class="remove-from-cart" data-index="${index}">Remove</button>
              `;
        cartList.appendChild(li);
        totalPrice += item.price;
      });
  
      totalPriceElement.textContent = totalPrice.toFixed(2);
      addRemoveButtonsListeners();
    } 
});
  
