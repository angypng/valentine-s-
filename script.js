document.addEventListener("DOMContentLoaded", function () {
    // Floating hearts animation
    const body = document.body;
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 500);

    // Pop-up sequence for "No" button
    const noButton = document.getElementById("no-button");
    if (noButton) {
        let clickCount = 0;
        noButton.addEventListener("click", function () {
            const messages = [
                "U sure abt tat? 😢",
                "Really? 😭",
                "Rukk teri band bajati main 💥"
            ];
            if (clickCount < messages.length) {
                alert(messages[clickCount]);
            }
            if (clickCount === 1) {
                document.getElementById("crying-cat").style.display = "block";
            }
            if (clickCount >= messages.length) {
                noButton.style.display = "none";
            }
            clickCount++;
        });
    }

    // "Yes" button click
    const yesButton = document.getElementById("yes-button");
    if (yesButton) {
        yesButton.addEventListener("click", function () {
            document.getElementById("dancing-cat").style.display = "block";
            setTimeout(() => {
                document.getElementById("message-container").style.display = "block";
            }, 2000);
        });
    }
});
