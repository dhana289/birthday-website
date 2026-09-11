const startBtn = document.getElementById("startBtn");

const welcomeSection = document.querySelector(".welcome-section");

const questSection = document.getElementById("questSection");

const questions = document.querySelectorAll(".question-box");

const questMessage = document.getElementById("questMessage");

const questNextBtn = document.getElementById("questNextBtn");

const backToWelcome = document.getElementById("backToWelcome");

const backToQuest = document.getElementById("backToQuest");

const memoriesSection = document.getElementById("memoriesSection");

const backToLike = document.getElementById("backToLike");

const memoriesNextBtn = document.getElementById("memoriesNextBtn");
/* =========================
   DETECTOR PAGE VARIABLES
========================= */

const detectorSection = document.getElementById("detectorSection");

const backToMemories = document.getElementById("backToMemories");

const scanText = document.getElementById("scanText");

const scanProgress = document.getElementById("scanProgress");

const detectorQuestion =
    document.getElementById("detectorQuestion");

const detectorOptions =
    document.querySelectorAll(".detector-option");

const detectorMessage =
    document.getElementById("detectorMessage");

const detectorNextBtn =
    document.getElementById("detectorNextBtn");


/* =========================
   CAKE VARIABLES
========================= */

const cakeSection = document.getElementById("cakeSection");

const flame = document.getElementById("flame");

const candleWrapper = document.getElementById("candleWrapper");

const cakeStatus = document.getElementById("cakeStatus");

const cutCakeBtn = document.getElementById("cutCakeBtn");

const nextAfterCake = document.getElementById("nextAfterCake");

const cakeBody = document.getElementById("cakeBody");

/* =========================
   PASSWORD PAGE VARIABLES
========================= */

const passwordSection =
    document.getElementById("passwordSection");

const backToDetector =
    document.getElementById("backToDetector");

const passwordInput =
    document.getElementById("passwordInput");

const passwordCheckBtn =
    document.getElementById("passwordCheckBtn");

const passwordMessage =
    document.getElementById("passwordMessage");

const lockIcon =
    document.getElementById("lockIcon");

const openLetterBtn =
    document.getElementById("openLetterBtn");
/* =========================
   SECRET LETTER VARIABLES
========================= */

const letterSection =
    document.getElementById("letterSection");

const backToPassword =
    document.getElementById("backToPassword");

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const envelope =
    document.querySelector(".envelope");

const letterIntro =
    document.getElementById("letterIntro");

const actualLetter =
    document.getElementById("actualLetter");

const fakeLetter =
    document.getElementById("fakeLetter");

/* =========================
   FINAL BIRTHDAY PAGE
========================= */

const finalSurpriseBtn =
    document.getElementById("finalSurpriseBtn");

const finalSection =
    document.getElementById("finalSection");

const fireworksCanvas =
    document.getElementById("fireworksCanvas");

const fireworksContext =
    fireworksCanvas.getContext("2d");


/* =========================
   START SURPRISE
========================= */

startBtn.addEventListener("click", function () {

    welcomeSection.style.display = "none";

    questSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});


/* =========================
   QUEST QUESTIONS
========================= */

questions.forEach(function (question, index) {

    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            /* WRONG ANSWER */

            if (button.classList.contains("wrong")) {

                questMessage.innerHTML =
                    "Wrong answer 😒😂 Try again, Pandi! Think properly 👀";

                return;

            }


            /* CORRECT ANSWER */

            if (button.classList.contains("correct")) {

                questMessage.innerHTML =
                    "Correcttt! 🥳🐼 You know yourself very well 😂💗";

                button.style.background = "#ff4f91";

                button.style.color = "white";


                setTimeout(function () {

                    question.classList.remove("active-question");


                    /* NEXT QUESTION */

                    if (index + 1 < questions.length) {

                        questions[index + 1].classList.add(
                            "active-question"
                        );

                        questMessage.innerHTML = "";

                    }


                    /* QUEST COMPLETED */

                    else {

                        questMessage.innerHTML =
                            "🎉 QUEST COMPLETED! 🎉<br>Pandi passed the test 😂💗";

                        questNextBtn.classList.remove(
                            "hidden-button"
                        );

                    }

                }, 1000);

            }

        });

    });

});


/* =========================
   QUEST NEXT → CAKE
========================= */

questNextBtn.addEventListener("click", function () {

    questSection.classList.add("hidden-section");

    cakeSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});


/* =========================
   BACK TO WELCOME
========================= */

backToWelcome.addEventListener("click", function () {

    questSection.classList.add("hidden-section");

    welcomeSection.style.display = "flex";

    window.scrollTo(0, 0);

});


/* =========================
   BACK TO QUEST
========================= */

backToQuest.addEventListener("click", function () {

    cakeSection.classList.add("hidden-section");

    questSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});


/* =========================
   CANDLE OFF
========================= */

candleWrapper.addEventListener("click", function () {

    /* Flame disappears */

    flame.classList.add("flame-off");


    /* Prevent clicking again */

    candleWrapper.style.pointerEvents = "none";


    /* Sparkle blast */

    createSparkleBlast();


    cakeStatus.innerHTML =
        "✨ WISH UNLOCKED! ✨<br>Now cut the cake, Pandi! 🎂😂";


    /* Enable cake cutting button */

    cutCakeBtn.disabled = false;

});


/* =========================
   CUT CAKE
========================= */
cutCakeBtn.addEventListener("click", function () {

    /* Separate cake */

    cakeBody.classList.add("cake-cut");


    /* Remove candle after cutting */

    candleWrapper.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    candleWrapper.style.opacity = "0";

    candleWrapper.style.transform =
        "translateX(-50%) translateY(-30px) scale(0.5)";


    /* Sparkle blast */

    createSparkleBlast();


    cakeStatus.innerHTML =
        "🎉 CAKE CUT SUCCESSFULLY! 🎉<br>Happy Birthday, ANU! 🐼💗";


    /* Hide cut button */

    cutCakeBtn.style.display = "none";


    /* Show Continue button */

    setTimeout(function () {

        nextAfterCake.classList.remove("hidden-button");

    }, 800);

});

/* =========================
   SPARKLE BLAST
========================= */

function createSparkleBlast() {

    const sparkleBlast =
        document.getElementById("sparkleBlast");


    const sparkles = [

        "✨",
        "💖",
        "💗",
        "🌸",
        "⭐",
        "💫",
        "🎀"

    ];


    for (let i = 0; i < 45; i++) {

        const sparkle =
            document.createElement("span");


        sparkle.classList.add("blast-sparkle");


        sparkle.innerHTML =
            sparkles[
                Math.floor(
                    Math.random() * sparkles.length
                )
            ];


        const x =
            Math.random() * 1000 - 500;


        const y =
            Math.random() * 800 - 400;


        sparkle.style.setProperty(
            "--x",
            `${x}px`
        );


        sparkle.style.setProperty(
            "--y",
            `${y}px`
        );


        sparkleBlast.appendChild(sparkle);


        setTimeout(function () {

            sparkle.remove();

        }, 3800);

    }

}

/* =========================
   CAKE → LIKE PAGE
========================= */

nextAfterCake.addEventListener("click", function () {

    cakeSection.classList.add("hidden-section");

    likeSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});


/* =========================
   LIKE PAGE → BACK TO CAKE
========================= */
const nextToMemories = document.getElementById("nextToMemories");
backToCake.addEventListener("click", function () {

    likeSection.classList.add("hidden-section");

    cakeSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});

/* =========================
   NO BUTTON ESCAPE 😂
========================= */

function moveNoButton() {

    const containerWidth =
        likeButtons.clientWidth;

    const containerHeight =
        likeButtons.clientHeight;

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;

    const maxX =
        containerWidth - buttonWidth;

    const maxY =
        containerHeight - buttonHeight;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

}

noBtn.addEventListener("mouseenter", moveNoButton);


/* Mobile touch support 😂 */

noBtn.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

});


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", function () {

    noBtn.style.display = "none";

    yesBtn.style.transform = "scale(1.15)";

    likeMessage.innerHTML =
        "I KNEW ITTTT 😂❤️💗<br>U cannot say NO to me! 🤣😎✨";

    setTimeout(function () {

        nextToMemories.classList.remove("hidden-button");

    }, 800);

});

/* =========================
   LIKE → MEMORIES
========================= */

nextToMemories.addEventListener("click", function () {

    likeSection.classList.add("hidden-section");

    memoriesSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});


/* =========================
   MEMORIES → LIKE
========================= */

backToLike.addEventListener("click", function () {

    memoriesSection.classList.add("hidden-section");

    likeSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});
/* =========================
   MEMORIES → DETECTOR
========================= */

memoriesNextBtn.addEventListener("click", function () {

    memoriesSection.classList.add("hidden-section");

    detectorSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

    startScanner();

});
/* =========================
   DETECTOR → MEMORIES
========================= */

backToMemories.addEventListener("click", function () {

    detectorSection.classList.add("hidden-section");

    memoriesSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});
/* =========================
   START SECRET SCANNER
========================= */

function startScanner() {

    /* Reset */

    scanProgress.style.width = "0%";

    detectorQuestion.classList.add("hidden-question");

    detectorNextBtn.classList.add("hidden-button");

    detectorMessage.innerHTML = "";


    /* Funny scan messages */

    const scanSteps = [

    {
        text: "🧠 Checking intelligence... Hmm... searching... 😂",
        progress: "20%"
    },

    {
        text: "💗 Checking friendship level... 100% VERIFIED! 💗",
        progress: "45%"
    },

    {
        text: "😜 Checking mental condition... WARNING! LEVEL TOO HIGH 🚨😂",
        progress: "70%"
    },

    {
        text: "🎂 Checking birthday girl status... CONFIRMED! 🎉",
        progress: "100%"
    }

];

    let currentStep = 0;


    const scannerInterval = setInterval(function () {

        const step =
            scanSteps[currentStep];


        scanText.innerHTML =
            step.text;


        scanProgress.style.width =
            step.progress;


        currentStep++;


        if (
            currentStep >=
            scanSteps.length
        ) {

            clearInterval(scannerInterval);


            setTimeout(function () {

                scanText.innerHTML =
                    "🚨 ANALYSIS COMPLETE! 🚨";


                setTimeout(function () {

                    detectorQuestion.classList.remove(
                        "hidden-question"
                    );

                }, 1000);

            }, 800);

        }

    }, 1800);

}
/* =========================
   DETECTOR FINAL QUESTION
========================= */

detectorOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        /* WRONG ANSWER */

        if (
            option.classList.contains(
                "wrong-detector"
            )
        ) {

            detectorMessage.innerHTML =
                "🚨 Scanner says: NICE TRY! 😂 Think again, Pandi!";

            return;

        }


        /* CORRECT ANSWER */

        if (
            option.classList.contains(
                "correct-detector"
            )
        ) {

            detectorMessage.innerHTML =
                "🚨 CONFIRMED! 🚨<br>" +
                "Subject is officially NOT normal 😂💗<br>" +
                "ACCESS GRANTED! 🔓✨";


            option.style.background =
                "#ff4f91";

            option.style.color =
                "white";


            setTimeout(function () {

                detectorNextBtn.classList.remove(
                    "hidden-button"
                );

            }, 1000);

        }

    });

});
/* =========================
   DETECTOR → PASSWORD
========================= */

detectorNextBtn.addEventListener("click", function () {

    detectorSection.classList.add("hidden-section");

    passwordSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);


    /* Reset password page */

    passwordInput.value = "";

    passwordMessage.innerHTML = "";

    openLetterBtn.classList.add("hidden-button");

    lockIcon.innerHTML = "🔒";

});
/* =========================
   PASSWORD → DETECTOR
========================= */

backToDetector.addEventListener("click", function () {

    passwordSection.classList.add("hidden-section");

    detectorSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

});
/* =========================
   CHECK PASSWORD
========================= */
function checkPassword() {

    const enteredPassword =
        passwordInput.value
            .trim()
            .toLowerCase();


    /* EMPTY PASSWORD */

    if (enteredPassword === "") {

        passwordMessage.innerHTML =
            "⚠️ Password enter cheyyi Pandi! 😂🔐";

        passwordMessage.style.color = "#e63946";

        return;

    }


    /* CORRECT PASSWORD */

    if (enteredPassword === "pandi") {

        passwordMessage.innerHTML =
            "✅ CORRECT PASSWORD! 🎉🔓<br>" +
            "Access Granted, Pandi! 😂💗";


        passwordMessage.style.color =
            "#1b9c5a";


        lockIcon.innerHTML = "🔓";


        lockIcon.classList.remove(
            "unlock-animation"
        );


        /* Animation restart */

        setTimeout(function () {

            lockIcon.classList.add(
                "unlock-animation"
            );

        }, 10);


        openLetterBtn.classList.remove(
            "hidden-button"
        );


        passwordInput.style.borderColor =
            "#1b9c5a";


        passwordInput.disabled = true;

        passwordCheckBtn.disabled = true;

        passwordCheckBtn.innerHTML =
            "Unlocked 🔓";


        createSparkleBlast();

    }


    /* WRONG PASSWORD */

    else {

        passwordMessage.innerHTML =
            "❌ WRONG PASSWORD! 😂🔐<br>" +
            "Hint ni malli chaduvu, mental 👀";


        passwordMessage.style.color =
            "#e63946";


        passwordInput.style.borderColor =
            "#e63946";


        /* Shake animation */

        passwordInput.classList.remove(
            "wrong-password"
        );


        setTimeout(function () {

            passwordInput.classList.add(
                "wrong-password"
            );

        }, 10);


        setTimeout(function () {

            passwordInput.value = "";

            passwordInput.style.borderColor =
                "#ffd0e1";

        }, 1000);

    }

}
/* =========================
   UNLOCK BUTTON
========================= */

passwordCheckBtn.addEventListener(
    "click",
    checkPassword
);


/* PRESS ENTER */

passwordInput.addEventListener(
    "keypress",
    function (event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    }
);
/* =========================
   PASSWORD → SECRET LETTER
========================= */
openLetterBtn.addEventListener("click", function () {

    passwordSection.classList.add("hidden-section");

    letterSection.classList.remove("hidden-section");


    /* Reset letter state */

    letterIntro.style.display = "block";

    fakeLetter.classList.add("hidden-letter");

    actualLetter.classList.add("hidden-letter");

    envelope.classList.remove("open");


    window.scrollTo(0, 0);

});
/* =========================
   SECRET BACK BUTTON TWIST 😂💗
========================= */

backToPassword.addEventListener("click", function () {

    /* If Fake Letter is visible */

    if (
        !fakeLetter.classList.contains(
            "hidden-letter"
        )
    ) {

        /* Hide Fake Letter */

        fakeLetter.classList.add(
            "hidden-letter"
        );


        /* Show Real Emotional Letter */

        actualLetter.classList.remove(
            "hidden-letter"
        );


        /* Change back button text */

        backToPassword.innerHTML =
            "← Back";


        createSparkleBlast();


        window.scrollTo(0, 0);


        return;

    }


    /* If Real Letter is visible,
       go back to Password page */

    letterSection.classList.add(
        "hidden-section"
    );

    passwordSection.classList.remove(
        "hidden-section"
    );

    window.scrollTo(0, 0);

});
/* =========================
   OPEN ENVELOPE
========================= */

envelopeWrapper.addEventListener("click", function () {

    envelope.classList.add("open");

    createSparkleBlast();


    setTimeout(function () {

        letterIntro.style.display = "none";

        /* Show Fake Letter First */

        fakeLetter.classList.remove(
            "hidden-letter"
        );

        window.scrollTo(0, 0);

    }, 900);

});
/* =========================================
   AGE REVEAL
========================================= */

const ageRevealSection = document.getElementById("ageRevealSection");

const ageCountdown = document.getElementById("ageCountdown");
const countdownNumber = document.getElementById("countdownNumber");

const balloonArea = document.getElementById("balloonArea");
const balloonInstruction = document.getElementById("balloonInstruction");

const balloonWrapper1 = document.getElementById("balloonWrapper1");
const balloonWrapper2 = document.getElementById("balloonWrapper2");

const balloon1 = document.getElementById("balloon1");
const balloon2 = document.getElementById("balloon2");

const number2 = document.getElementById("number2");
const number0 = document.getElementById("number0");

const ageResult = document.getElementById("ageResult");

const backToLetter = document.getElementById("backToLetter");


let firstBalloonPopped = false;
let secondBalloonPopped = false;
let ageRevealStarted = false;


/* =========================================
   OPEN AGE REVEAL
========================================= */

finalSurpriseBtn.addEventListener("click", function () {

    letterSection.classList.add("hidden-section");

    ageRevealSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

    startAgeReveal();

});


/* =========================================
   COUNTDOWN
========================================= */

function startAgeReveal() {

    if (ageRevealStarted) {
        return;
    }

    ageRevealStarted = true;

    firstBalloonPopped = false;
    secondBalloonPopped = false;

    balloonArea.classList.add("hidden-age-content");
    balloonInstruction.classList.add("hidden-age-content");
    ageResult.classList.add("hidden-age-content");

    balloonWrapper1.classList.remove("popped");
    balloonWrapper2.classList.remove("popped");

    balloon1.classList.remove("pop");
    balloon2.classList.remove("pop");

    number2.classList.remove("show");
    number0.classList.remove("show");

    ageCountdown.classList.remove("hidden-age-content");

    showCountdown(3);

}


/* =========================================
   SHOW 3 → 2 → 1
========================================= */

function showCountdown(number) {

    countdownNumber.innerText = number;

    countdownNumber.style.animation = "none";

    void countdownNumber.offsetWidth;

    countdownNumber.style.animation = "countdownPop 1s ease";


    if (number > 1) {

        setTimeout(function () {

            showCountdown(number - 1);

        }, 1000);

    } else {

        setTimeout(function () {

            ageCountdown.classList.add("hidden-age-content");

            balloonArea.classList.remove("hidden-age-content");

            balloonInstruction.classList.remove("hidden-age-content");

        }, 1000);

    }

}


/* =========================================
   FIRST BALLOON → 2
========================================= */

balloon1.addEventListener("click", function () {

    if (firstBalloonPopped) {
        return;
    }

    firstBalloonPopped = true;

    balloonWrapper1.classList.add("popped");

    balloon1.classList.add("pop");

    createBalloonPopEffect(balloonWrapper1);

    setTimeout(function () {

        number2.classList.add("show");

        checkBothBalloons();

    }, 300);

});


/* =========================================
   SECOND BALLOON → 0
========================================= */

balloon2.addEventListener("click", function () {

    if (secondBalloonPopped) {
        return;
    }

    secondBalloonPopped = true;

    balloonWrapper2.classList.add("popped");

    balloon2.classList.add("pop");

    createBalloonPopEffect(balloonWrapper2);

    setTimeout(function () {

        number0.classList.add("show");

        checkBothBalloons();

    }, 300);

});

function checkBothBalloons() {

    if (firstBalloonPopped && secondBalloonPopped) {

        balloonInstruction.classList.add("hidden-age-content");

        // Remove the individual 2 and 0
        // after both balloons are popped
        setTimeout(function () {

            number2.classList.remove("show");
            number0.classList.remove("show");

            number2.style.display = "none";
            number0.style.display = "none";

            // Now show the final 20
            ageResult.classList.remove("hidden-age-content");

        }, 700);


        // After 6 seconds, go to fireworks page
        setTimeout(function () {

            openFinalBirthdayPage();

        }, 6700);

    }

}


/* =========================================
   BALLOON POP EFFECT
========================================= */

function createBalloonPopEffect(wrapper) {

    const rect = wrapper.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + 80;


    for (let i = 0; i < 18; i++) {

        const particle = document.createElement("div");

        particle.innerHTML = ["✨", "💗", "💥", "💕"][Math.floor(Math.random() * 4)];

        particle.style.position = "fixed";

        particle.style.left = centerX + "px";
        particle.style.top = centerY + "px";

        particle.style.fontSize = "20px";

        particle.style.pointerEvents = "none";

        particle.style.zIndex = "9999";

        document.body.appendChild(particle);


        const angle = Math.random() * Math.PI * 2;

        const distance = 50 + Math.random() * 90;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;


        particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.2)`,
                    opacity: 0
                }
            ],
            {
                duration: 700 + Math.random() * 400,
                easing: "ease-out"
            }
        );


        setTimeout(function () {

            particle.remove();

        }, 1200);

    }

}


/* =========================================
   OPEN FINAL FIREWORKS PAGE
========================================= */

function openFinalBirthdayPage() {

    ageRevealSection.classList.add("hidden-section");

    finalSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

    startFireworks();

}


/* =========================================
   BACK TO LETTER
========================================= */

backToLetter.addEventListener("click", function () {

    ageRevealSection.classList.add("hidden-section");

    letterSection.classList.remove("hidden-section");

    window.scrollTo(0, 0);

    ageRevealStarted = false;

});
/* =========================
   FIREWORKS ANIMATION
========================= */

function startFireworks() {

    fireworksCanvas.width =
        window.innerWidth;

    fireworksCanvas.height =
        window.innerHeight;


    const fireworks = [];


    function createFirework() {

        const x =
            Math.random() *
            fireworksCanvas.width;

        const y =
            Math.random() *
            fireworksCanvas.height *
            0.65;


        const particles = [];


        const symbols = [
            "✨",
            "✦",
            "·",
            "✧",
            "★"
        ];


        for (
            let i = 0;
            i < 35;
            i++
        ) {

            const angle =
                (Math.PI * 2 * i) / 35;


            const speed =
                Math.random() * 5 + 2;


            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life:
                    100,

                size:
                    Math.random() * 5 + 2,

                symbol:
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ]

            });

        }


        fireworks.push(
            particles
        );

    }


    function animateFireworks() {

        fireworksContext.clearRect(

            0,
            0,

            fireworksCanvas.width,

            fireworksCanvas.height

        );


        fireworks.forEach(
            function (
                firework,
                fireworkIndex
            ) {

                firework.forEach(
                    function (
                        particle,
                        particleIndex
                    ) {

                        particle.x +=
                            particle.vx;

                        particle.y +=
                            particle.vy;


                        /* Gravity */

                        particle.vy +=
                            0.04;


                        particle.life--;


                        fireworksContext.globalAlpha =
                            particle.life / 100;


                        fireworksContext.font =
                            particle.size * 4 +
                            "px Arial";


                        fireworksContext.fillText(

                            particle.symbol,

                            particle.x,

                            particle.y

                        );


                        if (
                            particle.life <= 0
                        ) {

                            firework.splice(
                                particleIndex,
                                1
                            );

                        }

                    }
                );


                if (
                    firework.length === 0
                ) {

                    fireworks.splice(
                        fireworkIndex,
                        1
                    );

                }

            }
        );


        requestAnimationFrame(
            animateFireworks
        );

    }


    /* First Fireworks */

    createFirework();

    setTimeout(
        createFirework,
        500
    );

    setTimeout(
        createFirework,
        1000
    );

    setTimeout(
        createFirework,
        1500
    );


    /* Continuous Fireworks */

    setInterval(
        createFirework,
        1800
    );


    animateFireworks();

}