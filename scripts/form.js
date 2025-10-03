document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modification: ${document.lastModified}`;

// Phones array
const products = [
    { id: "p-01", name: "iPhone 17 Pro", averagerating: 4.9 },
    { id: "p-02", name: "Samsung Galaxy S25 Ultra", averagerating: 4.8 },
    { id: "p-03", name: "Google Pixel 10 Pro", averagerating: 4.7 },
    { id: "p-04", name: "Xiaomi 15 Pro", averagerating: 4.6 },
    { id: "p-05", name: "Redmi 10 Plus", averagerating: 4.4 }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("phoneName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
