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
        document.getElementById("monthlyIncomeText").innerHTML = "Monthly Income:";
        document.getElementById("monthlyIncome").innerHTML = "$" + monthlyIncome;    
    } else {
        document.getElementById("monthlyIncomeText").innerHTML = "Unable to generate monthly income";
        document.getElementById("monthlyIncome").innerHTML = "";    
    }

    // // Uses our monthlyIncome P tag by the ID and prints our Variable onto the page
};