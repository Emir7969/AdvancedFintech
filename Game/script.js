// Array of cash flows
const cashflows = [
    { amount: -100, period: 't=0' },
    { amount: 50, period: 't=1' },
    { amount: 60, period: 't=2' },
    { amount: 70, period: 't=3' },
    { amount: 80, period: 't=4' },
    { amount: 90, period: 't=5' }
];

const discountRate = 10; // 10% discount rate
const correctAnswer = -13.42; // The correct NPV for the cash flows with a 10% discount rate

// Function to display cash flows
function displayCashFlows() {
    const cashflowsElement = document.getElementById("cashflows");
    const cashflowsText = cashflows.map(cashflow => `${cashflow.period}: ${cashflow.amount}`).join(", ");
    cashflowsElement.textContent = `Cash Flows: ${cashflowsText}`;
}

// Function to calculate NPV
function calculateNPV() {
    const options = document.getElementsByName("answer");
    let selectedAnswer;

    for (const option of options) {
        if (option.checked) {
            selectedAnswer = parseFloat(option.value);
            break;
        }
    }

    const resultElement = document.getElementById("result");

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Correct! Well done!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect! Try again.";
        resultElement.style.color = "red";
    }

    // Display cash flows again for clarity
    displayCashFlows();
}

// Initial call to display cash flows
displayCashFlows();
