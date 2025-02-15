const slidePage = document.querySelector(".slide-page");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let current = 1;

nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default button behavior
        slidePage.style.marginLeft = `-${(index + 1) * 25}%`;
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    });
});

prevBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default button behavior
        slidePage.style.marginLeft = `-${index * 25}%`;
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });
});

// Submit button logic
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    
    setTimeout(function () {
        alert("Your Form Successfully Signed up!");
        location.reload();
    }, 800);
});
