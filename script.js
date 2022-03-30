
function tester() {
    // First Paycheck Avg Calculator
    let paycheck1 = Number(document.getElementById("paycheck-1").value)
    let paycheck2 = Number(document.getElementById("paycheck-2").value)


    // Code below checks to see if there's a valid number entered into the text box.
    if (Number.isFinite(paycheck1) && Number.isFinite(paycheck2)) {
        console.log("This is a number")
    } else {
        console.log("This is NOT a number")
        alert("The values entered below are not valid numbers, please try again")
    }

    // Test Console Log to make sure Math Works
    // console.log(paycheck1 + paycheck2)

    let monthlyIncome = paycheck1 + paycheck2;

    // Uses our monthlyIncome P tag by the ID and prints our Variable onto the page
    document.getElementById("monthlyIncome").innerHTML = monthlyIncome;
};