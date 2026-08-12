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
I've been wanting to tell you this for a while...

I don't really know when it started,
but somewhere along the way,
you became someone really special to me.

I love talking to you,
seeing you smile,
and simply having you around.

So instead of keeping it to myself...

I decided to be brave today.

I like you. ❤️

And if you're willing,
I'd really love to spend some time with you.
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