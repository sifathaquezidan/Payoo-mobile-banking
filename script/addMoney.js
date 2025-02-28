document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    
    if(convertedPin===1234){
        //console.log("okay, you can add")
        const sum = convertedMainBalance+convertedAmount;
        //document.getElementById("main-balance").innerText = sum;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
        added ${convertedAmount} from ${account-number} account
        `
        container.appendChild(p);
        }
    else{
        alert("Incorrect PIN")
    }

})