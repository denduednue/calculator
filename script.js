let sequence = [];
const correctSequence = ['1', '2', '3', '4'];

function checkSequence(value) {
    sequence.push(value);

    // Keep only the latest 4 entries
    if (sequence.length > 4) {
        sequence.shift();
    }

    if (sequence.join('') === correctSequence.join('')) {
        const win = window.open('about:blank', '_blank');
        win.location.href = 'https://www.google.com';
        sequence = []; // reset after success
    }
}

document.getElementById('btn1').addEventListener('click', () => checkSequence('1'));
document.getElementById('btn2').addEventListener('click', () => checkSequence('2'));
document.getElementById('btn3').addEventListener('click', () => checkSequence('3'));
document.getElementById('btn4').addEventListener('click', () => checkSequence('4'));