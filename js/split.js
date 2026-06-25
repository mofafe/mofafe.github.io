document.querySelectorAll(".split").forEach(el => {
    el.innerHTML = [...el.textContent]
        .map(c => `<span>${c}</span>`)
        .join("");

    el.querySelectorAll("span").forEach(span => {
        span.addEventListener("mouseenter", () => {
            span.style.animation = "none";
            span.offsetHeight; // リセット
            span.style.animation = "jump 0.4s ease";
        });
    });
});