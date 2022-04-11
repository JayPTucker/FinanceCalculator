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
    var paycheck1 = parseInt(document.getElementById("paycheck-1").value)
    var paycheck2 = parseInt(document.getElementById("paycheck-2").value)
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
        console.log("Weekly income " + weeklyIncome)

        document.getElementById("monthlyIncomeText").innerHTML = "Current Monthly income: <br><p>Taxes not included</p>"

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

    let inputValue = prompt("What is this expense called?");

    if (inputValue != null) {
        console.log(inputValue)

        // First we will apply it to the page WITH a delete button
        var input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", inputValue)
        input.setAttribute("id", "AdditionsInputBox")

        document.body.appendChild(input);

        // Adds Save Button
        var saveElementButton = document.createElement("button")
        saveElementButton.setAttribute("type", "button")
        saveElementButton.setAttribute("id", "saveBtn")

        // Adds Delete Button
        var removeElementButton = document.createElement("button")
        removeElementButton.setAttribute("type", "button")
        removeElementButton.setAttribute("id", "deleteBtn")

        // Appends our Save and Delete buttons to the page.
        document.body.appendChild(saveElementButton)
        document.body.appendChild(removeElementButton)
        document.getElementById("saveBtn").innerHTML = "Save"
        document.getElementById("deleteBtn").innerHTML = "Delete"

        // Then make sure the delete button works properly and deletes from local storage
    } else {
        alert("Please enter a proper title for this expense.")
    }
    
}

function removeElement() {

}

function saveElement() {

}

// function CalculateExtraExpenses() {
//     // Function that creates a input field for each expense.
//     var allInputs = document.querySelectorAll('[id="AdditionsInputBox"]')

//     var totalExpenses = 0;

//     allInputs.forEach(input => {
//         console.log(input.value)
//         // Add our inputs to an array
//         additionsArray.push(input.value)

//         localStorage.setItem('additionsArray', additionsArray);

//         totalExpenses += parseInt(input.value)

//         console.log(totalExpenses)
//     })
// };