const secretOrder = [1, 2, 3, 4];
let userOrder = [];

const buttons = document.querySelectorAll('.secret-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const order = parseInt(button.getAttribute('data-order'));
        userOrder.push(order);
        checkOrder();
    });
});

function checkOrder() {
    if (userOrder.length > secretOrder.length) {
        userOrder = [];
        alert("2");
    } else {
        for (let i = 0; i < userOrder.length; i++) {
            if (userOrder[i] !== secretOrder[i]) {
                userOrder = [];
                alert("Wrong order! Start over.");
                return;
            }
        }
    }
    if (userOrder.length === secretOrder.length) {
        alert("Congratulations! You've clicked the buttons in the correct order!");
        userOrder = []; // Reset for a new attempt if desired
    }
}