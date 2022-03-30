
function tester() {
    // First Paycheck Avg Calculator
    let paycheck1 = Number(document.getElementById("paycheck-1").value)
    let paycheck2 = Number(document.getElementById("paycheck-2").value)


    // The code below is designed to make sure there is a proper number (integer) entered into the input box
    if (paycheck1 === 0) {
        console.log("This is NOT a number (1)")
        // alert("The values entered below are not valid numbers, please try again");
        document.getElementById("error-Msg-1").innerHTML = "Error, Please type a proper integer above";
    } else if (paycheck2 === 0) {
        console.log("This is NOT a number (2)")
        document.getElementById("error-Msg-2").innerHTML = "Error, Please type a proper integer above";
    } else {
        document.getElementById("error-Msg-1").innerHTML = "";
        document.getElementById("error-Msg-2").innerHTML = "";
        console.log("This is a number");
    }

    // Test Console Log to make sure Math Works
    // console.log(paycheck1 + paycheck2)

    let monthlyIncome = paycheck1 + paycheck2;

    // Uses our monthlyIncome P tag by the ID and prints our Variable onto the page
    document.getElementById("monthlyIncome").innerHTML = monthlyIncome;
};