// THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THE INITIAL BALANCE & SECURITY DATA
let balance = 555000; // starting balance
const correctPin = "2090"; // security PIN

// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
window.onload = function () {
    let enteredPin = prompt("Enter your PIN:");
    validatePin(enteredPin);
};

// 3. VALIDATE / CHECK THE PIN NUMBER
function validatePin(pin) {
    if (pin === correctPin) {
        let withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
        checkFunds(withdrawalAmount);
    } else {
        handleWrongPin();
    }
}

// 4. CHECK AVAILABILITY OF FUNDS
function checkFunds(amount) {
    if (amount <= balance) {
        balance -= amount;
        receiptTitle.innerText = "Transaction Successful";
        receiptText.innerText = `You withdrew $${amount}. Remaining balance: $${balance}`;
    } else {
        receiptTitle.innerText = "Transaction Failed";
        receiptText.innerText = "Insufficient funds.";
    }
}

// TASK 6: Handle the error layout if the PIN was completely wrong
function handleWrongPin() {
    receiptTitle.innerText = "Error";
    receiptText.innerText = "Incorrect PIN. Please try again.";
}
