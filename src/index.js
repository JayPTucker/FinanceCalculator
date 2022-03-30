import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React>
    <App />
  </React>,
  document.getElementById('root')
);

function tester() {
    // First Paycheck Avg Calculator
    let paycheck1 = Number(document.getElementById("paycheck-1").value)
    let paycheck2 = Number(document.getElementById("paycheck-2").value)

    // Test Console Log to make sure Math Works
    // console.log(paycheck1 + paycheck2)

    let monthlyIncome = paycheck1 + paycheck2;

    // Uses our monthlyIncome P tag by the ID and prints our Variable onto the page
    document.getElementById("monthlyIncome").innerHTML = monthlyIncome;
}