function isValidInput(paycheck, element) {
    if (paycheck === 0) {
        document.getElementById(element).innerHTML = "Error, Please type a proper integer above";
        return false;
    }
    else {
        document.getElementById(element).innerHTML = "";
        return true;
    }
}

function calculateIncome() {
    // Our Variables

    // Setting paychecks 1/2 to turn from a string into a Number
    let paycheck1 = Number(document.getElementById("paycheck-1").value)
    let paycheck2 = Number(document.getElementById("paycheck-2").value)
    // Setting our Monthly income to the sum of our paychecks.
    let monthlyIncome = paycheck1 + paycheck2;


    // Checks using the function above to see if our paychecks are valid 
    paycheck1Valid = isValidInput(paycheck1, "error-Msg-1")
    paycheck2Valid = isValidInput(paycheck2, "error-Msg-2")

    // Verification for result
    if (paycheck1Valid === true && paycheck2Valid === true) {
        document.getElementById("monthlyIncomeText").innerHTML = "New Monthly Income:";
        document.getElementById("monthlyIncome").innerHTML = "$" + monthlyIncome + "/mo";  
        // Add previous monthly income to local storage
        // paycheck1
        localStorage.setItem("paycheck-1", paycheck1);
        // paycheck2
        localStorage.setItem("paycheck-2", paycheck2);
        // monthlyIncome
        localStorage.setItem("monthly-income", monthlyIncome);
        
    } else {
        alert("Error, unable to generate monthly income");
        document.getElementById("monthlyIncome").innerHTML = "";    
        onLoad()
    }

};

// Create a function that loads our last monthly income from local storage
function onLoad() {

    document.getElementById("monthlyIncomeText").innerHTML = "Last monthly income:"

    document.getElementById("monthlyIncome").innerHTML = (
        "Paycheck 1: $" + localStorage.getItem("paycheck-1") + "<br>" +
        "Paycheck 2: $" + localStorage.getItem("paycheck-2") + "<br>" +
        "Last monthly income: $" + localStorage.getItem("monthly-income") + "/mo"
        );
}

onLoad();