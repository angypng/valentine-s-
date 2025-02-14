document.addEventListener("DOMContentLoaded", function() {
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
    document.body.innerHTML = `<h1>YAY! 💖</h1> <img src="happy-cat.gif" alt="Happy Cat">`;
}

function handleNo() {
    let noMessages = [
        { text: "U sure abt tat? 😢", img: "" },
        { text: "Really? 😭", img: "crying-cat.png" },
        { text: "Rukk teri band bajati main 💥", img: "crying-cat.png" }
    ];
    
    let noCount = parseInt(localStorage.getItem("noCount")) || 0;

    if (noCount < noMessages.length) {
        let msg = noMessages[noCount];
        document.getElementById("main-text").innerHTML = msg.text;
        if (msg.img) {
            document.body.innerHTML += `<img src="${msg.img}" alt="Crying Cat">`;
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
        heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
        document.querySelector(".heart-container").appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 500);
}
