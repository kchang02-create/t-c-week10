console.log("Hello world!")

function changeLetter(letter) { 
    tester.textContent=letter; 
}

let currentSize = 20
function changeFontSize(delta) { 
    currentSize = currentSize + delta; 

    if (currentSize <10) {
        currentSize = 10;
    }
    tester.style.fontSize = `${currentSize}px`;
    console.log(currentSize);
}

let currentRotate=0
function changeRotation(delta) {
    currentRotate = currentRotate + delta;
    tester.style.transform = `rotate(${currentRotate}deg)`;
    console.log(currentRotate);
}

