//console.log("Zidaan")

//step-1: id ke dhorsi getElementById diye
document.getElementById("login-btn").addEventListener('click', function(event){
   event.preventDefault();
   const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;
    //console.log(accountNumber,pin);
    if(accountNumber.length===11){
        //console.log("Yes!!!")
        if(parseInt(pin)===1234){
            //console.log("Your PIN is correct!")
            window.location.href="./main.html"
        }
        else{
            alert("Wrong PIN!")
        }
    }
    else{
        alert("Need valid account number")
    }

})