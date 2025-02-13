document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    let noClickCount = 0;

    // No button click sequence
    noButton.addEventListener("click", function () {
        const noResponses = [
            "U sure abt tat? 😢",
            "Really? 🥺",
            "Rukk teri band bajati main 💥"
        ];
        if (noClickCount < noResponses.length) {
            alert(noResponses[noClickCount]);
            noClickCount++;
        } else {
            noButton.style.display = "none"; // Remove "No" button after 3 clicks
        }
    });

    // Yes button click sequence
    yesButton.addEventListener("click", function () {
        document.body.innerHTML = `
            <h1>❤️ Happy Valentine's Day! ❤️</h1>
            <img src="happy-dancing-cat.gif" class="cat-meme">
            <div id="heartfelt-messages"></div>
        `;
        startHeartfeltMessages();
    });

    function startHeartfeltMessages() {
        const messages = [
            "Every moment spent with u feels like a precious gift,",
            "n I’m beyond grateful for the love we share. 💖",
            "You’ve brought so much joy into my life,",
            "n I’m incredibly lucky to have u by my side.",
            "I truly can’t imagine anyone more perfect to spend my life with. 💕",
            "---",
            "Being with u feels like the best kind of adventure,",
            "n I never want this journey to end. ✨",
            "You light up my world, illuminating every moment we share. 💫",
            "I can’t help but feel so incredibly lucky to be by your side. 💞",
            "---",
            "You’re so much more than just my love!",
            "You’re my best friend, my joy,",
            "and the reason every day is better than the last. 💓",
            "---",
            "You’re not just my Valentine, but my favorite part of every single day. 💗",
            "No matter what, my heart will always find its way back to you. 💘",
            "---",
            "💖 I LOVE YOU 💖"
        ];
        
        let index = 0;
        const messageContainer = document.createElement("div");
        messageContainer.id = "message-container";
        messageContainer.style.fontFamily = "'Dancing Script', cursive";
        messageContainer.style.fontSize = "1.8rem";
        messageContainer.style.textAlign = "center";
        messageContainer.style.opacity = "0";
        messageContainer.style.transition = "opacity 2s";
        document.body.appendChild(messageContainer);

        function showNextMessage() {
            if (index < messages.length) {
                const message = document.createElement("p");
                message.textContent = messages[index];

                if (messages[index] === "---") {
                    message.style.margin = "20px 0";
                } else {
                    message.style.opacity = "0";
                    message.style.transition = "opacity 2s";
                }

                messageContainer.appendChild(message);

                setTimeout(() => {
                    message.style.opacity = "1";
                }, 500);

                index++;
                setTimeout(showNextMessage, 3500);
            } else {
                setTimeout(showFinalText, 4000); // Delay before "I LOVE YOU"
            }
        }

        showNextMessage();
    }

    function showFinalText() {
        const finalText = document.createElement("h1");
        finalText.innerHTML = "💖 I LOVE YOU 💖";
        finalText.style.fontSize = "3rem";
        finalText.style.color = "#ff5e78";
        finalText.style.opacity = "0";
        finalText.style.transition = "opacity 2s";
        document.body.appendChild(finalText);

        setTimeout(() => {
            finalText.style.opacity = "1";
        }, 500);

        // Adding subtle neon doodles behind final text
        for (let i = 0; i < 3; i++) {
            let doodle = document.createElement("div");
            doodle.classList.add("neon-doodle");
            doodle.style.width = "80px";
            doodle.style.height = "80px";
            doodle.style.background = "url('neon-heart.png') no-repeat center";
            doodle.style.backgroundSize = "contain";
            doodle.style.position = "absolute";
            doodle.style.opacity = "0.1";
            doodle.style.left = `${30 + i * 100}px`;
            doodle.style.top = `${150 + i * 80}px`;
            document.body.appendChild(doodle);
        }
    }
});

