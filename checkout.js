document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");
    const totalAmount = document.getElementById("total-amount");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function calculateTotal() {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `$${total.toFixed(2)}`;
    }

    calculateTotal();

    checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;

        if (!name || !email || !address || !phone) {
            alert("Please fill in all fields!");
            return;
        }

        alert(`Order placed successfully!\n\nName: ${name}\nEmail: ${email}\nTotal: ${totalAmount.textContent}`);
        localStorage.removeItem("cart"); // Clear cart after successful order
        window.location.href = "index.html"; // Redirect to home page
    });
});
