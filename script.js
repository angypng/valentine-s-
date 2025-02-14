document.addEventListener("DOMContentLoaded", function () {
    let mainText = document.getElementById("main-text");
    let buttons = document.getElementById("buttons");
    let noButton = document.getElementById("no-button");
    let yesButton = document.getElementById("yes-button");
    let messageContainer = document.getElementById("message-container");

    // Ensure elements exist before modifying
    if (!mainText || !buttons || !noButton || !yesButton || !messageContainer) {
        console.error("One or more required elements are missing in index.html!");
        return;
    }

    setTimeout(() => {
        mainText.innerHTML =
            "Hello love💕 It’s the month of love, and you being born in it just makes everything feel extra magical.";
        startHeartAnimation();
    }, 10000);

    setTimeout(() => {
        mainText.innerHTML +=
            "<br>...n since it’s the month of love, would u do me the honor of being my Valentine love? 💘";
        buttons.classList.remove("hidden");
    }, 20000);

    let noClickCount = 0;
    noButton.addEventListener("click", function () {
        let noMessages = [
            { text: "U sure abt tat? 😢", img: "" },
            { text: "Really? 😭", img: "crying-cat.png" },
            { text: "Rukk teri band bajati main 💥", img: "crying-cat.png" }
        ];

        if (noClickCount < noMessages.length) {
            let msg = noMessages[noClickCount];
            mainText.innerHTML = msg.text;
            if (msg.img) {
                let img = document.createElement("img");
                img.src = msg.img;
                img.alt = "Crying Cat";
                img.className = "crying-cat";
                messageContainer.innerHTML = ""; // Clear previous images
                messageContainer.appendChild(img);
            }
            noClickCount++;
        } else {
            noButton.style.display = "none"; // Hide "No" button
        }
    });

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = `
            <h1>YAY! 💖</h1>
            <img src="happy-cat.gif" alt="Happy Cat" class="happy-cat">
            <div id="heartfelt-messages"></div>
        `;

        showHeartfeltMessages();
    });

    function showHeartfeltMessages() {
        let heartfeltMessages = [
            "Every moment spent with u feels like a precious gift, n I’m beyond grateful for the love we share. You’ve brought so much joy into my life n I’m incredibly lucky to have u by my side. I truly can’t imagine anyone more perfect to spend my life with.",
            "Being with u feels like the best kind of adventure n I never want this journey to end. You light up my world, illuminating every moment we share, n I can’t help but feel so incredibly lucky to be by your side. You’re so much more than just my love! You’re my best friend, my joy, and the reason every day is better than the last."
        ];

        let msgContainer = document.getElementById("heartfelt-messages");
        let i = 0;

        function displayNextMessage() {
            if (i < heartfeltMessages.length) {
                let msg = document.createElement("p");
                msg.textContent = heartfeltMessages[i];
                msg.className = "fade-in-text";
                msgContainer.appendChild(msg);
                i++;
                setTimeout(displayNextMessage, 5000);
            }
        }

        displayNextMessage();
    }

    function startHeartAnimation() {
        let heartContainer = document.createElement("div");
        heartContainer.className = "heart-container";
        document.body.appendChild(heartContainer);

        setInterval(() => {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
            heartContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 8000);
        }, 500);
    }
});
