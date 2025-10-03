document.addEventListener("DOMContentLoaded", () => {
    let counter = localStorage.getItem("reviewCount") || 0;
    counter++;
    localStorage.setItem("reviewCount", counter);
    const el = document.getElementById("reviewCounter");
    if (el) el.textContent = counter;
});
