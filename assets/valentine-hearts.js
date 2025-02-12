document.addEventListener("DOMContentLoaded", function () {
    const createHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️"; // You can change this to any emoji or SVG
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 7 + 5 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000);
    };

    setInterval(createHeart, 1000);
});