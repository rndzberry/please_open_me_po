function startConfession() {

    document.getElementById("startScreen")
        .classList.add("hidden");

    document.getElementById("questionScreen")
        .classList.remove("hidden");
}


function sayYes() {

    document.getElementById("questionScreen")
        .classList.add("hidden");

    document.getElementById("confessionScreen")
        .classList.remove("hidden");

    typeConfession();
}


function moveNoButton() {

    const button = document.getElementById("noButton");

    const maxX = 200;
    const maxY = 100;

    const randomX =
        Math.random() * maxX - maxX / 2;

    const randomY =
        Math.random() * maxY - maxY / 2;

    button.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}


const confession = `
Hi, I know you probably don’t know me, but I’ve been quietly noticing you for quite some time now. 
I hope this doesn’t come across as strange, 
but I have to admit… you’ve caught my attention.

Perhaps it’s a little unexpected coming from someone you barely know,
but I’ve developed a genuine admiration for you.
There’s just something about you that I find incredibly captivating.
`;

let index = 0;


function typeConfession() {

    const textElement =
        document.getElementById("typingText");

    textElement.innerHTML = "";

    index = 0;

    typeCharacter(textElement);
}


function typeCharacter(element) {

    if (index < confession.length) {

        if (confession[index] === "\n") {

            element.innerHTML += "<br>";

        } else {

            element.innerHTML += confession[index];

        }

        index++;

        setTimeout(
            () => typeCharacter(element),
            35
        );
    }
}


function showFinalMessage() {

    document.getElementById("confessionScreen")
        .classList.add("hidden");

    document.getElementById("finalScreen")
        .classList.remove("hidden");

}