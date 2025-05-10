let clickOrder = 0;

function openGoogle() {
    window.open('https://www.google.com', '_blank');
    clickOrder = 0; // Reset the order after completing the sequence
}

document.getElementById('btn1').addEventListener('click', function() {
    if (clickOrder === 0) {
        clickOrder++;
    }
    checkSequence();
});

document.getElementById('btn2').addEventListener('click', function() {
    if (clickOrder === 1) {
        clickOrder++;
    }
    checkSequence();
});

document.getElementById('btn3').addEventListener('click', function() {
    if (clickOrder === 2) {
        clickOrder++;
    }
    checkSequence();
});

document.getElementById('btn4').addEventListener('click', function() {
    if (clickOrder === 3) {
        clickOrder++;
    }
    checkSequence();
});

function checkSequence() {
    if (clickOrder === 4) {
        openGoogle();
    }
}