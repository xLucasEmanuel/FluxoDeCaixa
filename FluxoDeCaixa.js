let family = {
  incomes: [2500,3200, 250, 360],
  expenses: [680, 600, 250, 4000, 2000]
}

function sum(array){
  let total = 0;
  for (let value of array) {
    total += value
  }
  return total  
}

function calculateBalance() {
 const calculateIncomes = sum(family.incomes)
 const calculateExpenses = sum(family.expenses)

 const total = calculateIncomes - calculateExpenses
 const itsOk = total >= 0
 let balanceText ="Negativo"
 if (itsOk) {
  balanceText ="Positivo"
 }

 console.log (`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()