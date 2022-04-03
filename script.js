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
    var paycheck1 = Number(document.getElementById("paycheck-1").value)
    var paycheck2 = Number(document.getElementById("paycheck-2").value)
    // Setting our Monthly income to the sum of our paychecks.
    var monthlyIncome = (paycheck1 + paycheck2)

    // Checks using the function above to see if our paychecks are valid 
    paycheck1Valid = isValidInput(paycheck1, "error-Msg-1")
    paycheck2Valid = isValidInput(paycheck2, "error-Msg-2")

    // Verification for result
    if (paycheck1Valid === true && paycheck2Valid === true) {
        // Add previous monthly income to local storage
        // Use toFixed to make the decimal end on the second integer
        // paycheck1
        localStorage.setItem("paycheck-1", (paycheck1).toFixed(2));
        // paycheck2
        localStorage.setItem("paycheck-2", (paycheck2).toFixed(2));
        // monthlyIncome
        localStorage.setItem("monthlyIncome", monthlyIncome.toFixed(2));

        // Gathers data from LocalStorage and posts it onto the page
        onLoad();
        
    } else {
        alert("Error, unable to generate monthly income");
        document.getElementById("monthlyIncome").innerHTML = "";    
        onLoad()
    }

    return paycheck1;

};

// Create a function that loads our last monthly income from local storage
function onLoad() {

    if (localStorage.getItem("paycheck-1") === null) {
        console.log("No previous data found")
        document.getElementById("monthlyIncome").innerHTML = "";    
    } else {

        // Return functionality
        var weeklyIncome = CalculateWeeklyIncome()
        console.log(weeklyIncome)

        document.getElementById("monthlyIncomeText").innerHTML = "Current Monthly income:"

        document.getElementById("monthlyIncome").innerHTML = (
            "Paycheck 1: $" + localStorage.getItem("paycheck-1") + "<br>" +
            "Paycheck 2: $" + localStorage.getItem("paycheck-2") + "<br>" +
            "Last weekly income: $" + localStorage.getItem("weeklyIncome") + "<br>" +
            "Last monthly income: $" + localStorage.getItem("monthlyIncome") + "/mo"
        );
    };
};

// Loads our onLoad function to post our data immediately on the page.
onLoad();

function CalculateWeeklyIncome() {
    var weeklyIncome = (((localStorage.getItem("paycheck-1") / 2) + 
                            (localStorage.getItem("paycheck-2") / 2))/2).toFixed(2)
    localStorage.setItem("weeklyIncome", weeklyIncome)
    return weeklyIncome;
}

function addElement() {

    var inputValue = document.getElementById("addInput").value

    
    if (inputValue == "") {
        console.log("Nothing here!")
        alert("Please enter a valid input value")
    } else {
        // creates a new input element from the Add button
        var input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", "$0.00");
        input.setAttribute("id", "AdditionsInputBox")
        // Create text that has inputValue set
        var text = document.createElement("p")
        text.append(inputValue)

        document.body.appendChild(text) + ":";
        document.body.appendChild(input)
        
        // Clears our input field
        document.getElementById("addInput").value = ""
    }
}

function CalculateExtraExpenses() {
    // Function that creates a input field for each expense. 
    var inputBox = document.getElementById("AdditionsInputBox")
    var allInputs = document.querySelectorAll('[id="AdditionsInputBox"]')

    // Logs the amount of inputs we have
    console.log(allInputs.length)
    // Logs the value of input 0
    console.log(allInputs[0].value)

    // For loop that will console log every allInputs values
    for (var i = 0; i < allInputs.length - 1; i++) {
        console.log(allInputs[i].value)
    }
};