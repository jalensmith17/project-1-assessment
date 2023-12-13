//variables
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const inputDisplay = document.getElementById('input-display');
const inputField = document.getElementById('input-field');

let inputAmount = 0;
let totalAmount = 0;

//plus button
plusButton.addEventListener('click', function () {
    inputAmount = parseInt(inputField.value);
    totalAmount = totalAmount + inputAmount;
    inputDisplay.innerText = totalAmount;

    if (totalAmount < 0) {
        inputDisplay.style.color = 'red';
    } else {
        inputDisplay.style.color = 'green';
    }
});

//minus button
minusButton.addEventListener('click', function () {
    inputAmount = parseInt(inputField.value);
    totalAmount = totalAmount - inputAmount;
    inputDisplay.innerText = totalAmount;

    if (totalAmount < 0) {
        inputDisplay.style.color = 'red';
    } else {
        inputDisplay.style.color = 'green';
    }
});
