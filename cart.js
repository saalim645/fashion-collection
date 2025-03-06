document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-container");
    const clearCartButton = document.getElementById("clear-cart");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCartItems() {
        cartContainer.innerHTML = ""; // Clear the container before displaying

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("cart-item");
            productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(productDiv);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                displayCartItems();
            });
        });
    }

    displayCartItems();

    clearCartButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        cart = [];
        displayCartItems();
    });
});
document.getElementById("checkout-btn").addEventListener("click", function () {
    window.location.href = "checkout.html";
});
