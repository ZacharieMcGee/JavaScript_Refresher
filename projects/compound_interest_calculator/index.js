// Compound Interest Calculator

/* Formula --> A = P(1 + r/n)^nt
  A = Future value of intvestment
  P = principal balance
  r = annual interest rate
  n = num interest is compounded per year
  t = number of years 

  Example: Invest 10k into a savings for 20 years, annual interest rate at 6%, compounded monthly

  P = 10000
  r = 6/100 = 0.06
  n = 12
  t = 20
*/

let P = 10000 // Principle balance
let r = 0.06 // Annual Interest Rate
let n = 12 // Compounded Monthly
let t = 20 // Number of years

// Step 1 - define function to calculate final value

function calcCompoundInterest(P, r, n, t) {
  return (P * (Math.pow((1 + (r / n)), (n * t)))).toFixed(2)
}

console.log(calcCompoundInterest(P, r, n, t))

// Step 2 - define function to calc the difference

// Step 3 - create run function to prompt user for necessary information 

// Step 4 - make print statement using template literal