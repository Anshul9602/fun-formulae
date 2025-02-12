document.addEventListener("DOMContentLoaded", function () {
    const createHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️"; // You can change this to any emoji or SVG

        // Randomize position across the entire page
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh"; // Spread across the page

        // Randomize animation speed for a natural effect
        heart.style.animationDuration = Math.random() * 6 + 5 + "s"; // Between 5s - 11s

        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 11000);
    };

    // Generate hearts every 800ms
    setInterval(createHeart, 800);
});