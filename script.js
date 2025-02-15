document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("main-text").innerHTML =
            "Hello love💕 It’s the month of love, and you being born in it just makes everything feel extra magical.";
        startHeartAnimation();
    }, 10000);

    setTimeout(() => {
        document.getElementById("main-text").innerHTML +=
            "<br>...n since it’s the month of love, would u do me the honor of being my Valentine love? 💘";
        document.getElementById("buttons").classList.remove("hidden");
    }, 20000);
});

function handleYes() {
    document.body.innerHTML = `<h1>YAY! 💖</h1> 
        <img src="https://i.postimg.cc/X7XJzXCg/b9ed18688725bda45acd4790177d5dc3.jpg" class="cat-img happy-cat" alt="Happy Cat"> 
        <div id="heartfelt-text"></div>`;

    let messages = [
        "Every moment spent with u feels like a precious gift, n I’m beyond grateful for the love we share. You’ve brought so much joy into my life n I’m incredibly lucky to have u by my side. I truly can’t imagine anyone more perfect to spend my life with.",
        "Being with u feels like the best kind of adventure n I never want this journey to end. You light up my world, illuminating every moment we share, n I can’t help but feel so incredibly lucky to be by your side. You’re so much more than just my love! You’re my best friend, my joy, and the reason every day is better than the last.",
        "You’re not just my Valentine but my favorite part of every single day. No matter what, my heart will always find its way back to you."
    ];

    let index = 0;
    function showMessage() {
        if (index < messages.length) {
            let textDiv = document.getElementById("heartfelt-text");
            let newPara = document.createElement("p");
            newPara.textContent = messages[index];
            textDiv.appendChild(newPara);
            index++;
            setTimeout(showMessage, 6000);
        } else {
            setTimeout(() => {
                document.body.innerHTML += `<h2>I LOVE YOU 💖</h2>`;
                document.body.innerHTML += `<img src="https://i.postimg.cc/QtXNkMD1/c853efb8ecd009025a02db6450de1f19.jpg" class="extra-img" alt="Final Cute Image">`;
            }, 4000);
        }
    }
    showMessage();
}

function handleNo() {
    let noMessages = [
        { text: "U sure abt tat? 😢", img: "" },
        { text: "Really? 😭", img: "https://i.postimg.cc/52TF3LKv/4cd83c2b550f6a1e5bb592dd3a7349dd.jpg" },
        { text: "Rukk teri band bajati main 💥", img: "https://i.postimg.cc/52TF3LKv/4cd83c2b550f6a1e5bb592dd3a7349dd.jpg" }
    ];

    let noCount = parseInt(localStorage.getItem("noCount")) || 0;

    if (noCount < noMessages.length) {
        let msg = noMessages[noCount];
        document.getElementById("main-text").innerHTML = msg.text;
        if (msg.img) {
            document.body.innerHTML += `<img src="${msg.img}" class="cat-img sad-cat" alt="Crying Cat">`;
        }
        localStorage.setItem("noCount", noCount + 1);
    } else {
        document.querySelector(".no").style.display = "none"; // Remove "No" button
    }
}

function startHeartAnimation() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 5 + "s";
        document.querySelector(".heart-container").appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 500);
}
