document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".product button");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;
            const productImage = product.querySelector("img").src;

            const item = {
                name: productName,
                price: parseFloat(productPrice.replace("$", "")),
                image: productImage
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} added to cart!`);
        });
    });
});

