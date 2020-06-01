// Your code here
const dodger = document.querySelector('#dodger');

dodger.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        movesDodgeLeft();
    } else if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left + 1}px`;
}