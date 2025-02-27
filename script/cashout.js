document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutPin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(cashoutPin);
    const cashoutAmount = document.getElementById("cashout-amount").value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin===1234) {
        const sum = convertedMainBalance - convertedCashoutAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else {
        alert("You've entered invalid PIN");
    }
})
