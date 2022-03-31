function isValidInp(paycheck, element) {
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
    // First Paycheck Avg Calculator
    let paycheck1 = Number(document.getElementById("paycheck-1").value)
    let paycheck2 = Number(document.getElementById("paycheck-2").value)

    paycheck1Valid = isValidInp(paycheck1, "error-Msg-1")
    paycheck2Valid = isValidInp(paycheck2, "error-Msg-2")

    if (paycheck1Valid && paycheck2Valid) {
        // console.log("This is a number");
    }

    let monthlyIncome = paycheck1 + paycheck2;

    // Uses our monthlyIncome P tag by the ID and prints our Variable onto the page
    document.getElementById("monthlyIncomeText").innerHTML = "Monthly Income:"
    document.getElementById("monthlyIncome").innerHTML = "$" + monthlyIncome;
};