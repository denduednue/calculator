const secretOrder = [1, 2, 3, 4];
let userOrder = [];

const buttons = document.querySelectorAll('.secret-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const order = parseInt(button.getAttribute('data-order'), 10);
        userOrder.push(order);
        checkOrder();
    });
});

function checkOrder() {
    for (let i = 0; i < userOrder.length; i++) {
        if (userOrder[i] !== secretOrder[i]) {
            alert("Wrong order! Start over.");
            userOrder = [];
            return;
        }
    }

    if (userOrder.length === secretOrder.length) {
        alert("Congratulations! You've clicked the buttons in the correct order!");
        userOrder = []; // Reset for a new attempt
    }
}
