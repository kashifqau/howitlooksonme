const apiUrl = "https://pleased-mammoth-rapid.ngrok-free.app/products";

async function loadProducts() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        const productList = document.getElementById("product-list");

        productList.innerHTML = "";

        products.forEach(product => {
            console.log("Product:", product);

            // Create product card
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}">
                <p class="product-title">${product.name}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <a href="tryon.html?id=${product.id}" class="button">Try On</a>
            `;

            productList.appendChild(productCard);
        });

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// Load products when the page loads
window.onload = loadProducts;