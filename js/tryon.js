const apiUrl = "https://pleased-mammoth-rapid.ngrok-free.app/products";

// Get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function loadProductDetails() {
    const productId = getQueryParam("id");
    if (!productId) {
        console.error("No product ID found in URL.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${productId}`, {
            method: "GET",
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const product = await response.json();

        // Update product card
        document.getElementById("apparel-img").src = product.image_url;
        document.getElementById("apparel-img").alt = product.name;
        document.querySelector(".product-title").textContent = product.name;
        document.querySelector(".product-price").textContent = `$${product.price.toFixed(2)}`;

    } catch (error) {
        console.error("Error loading product details:", error);
    }
}

window.onload = loadProductDetails;