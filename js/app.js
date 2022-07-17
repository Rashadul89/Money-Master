
// document.getElementById('calculate-btn').addEventListener('click',function(){
//     // for income calculation 
//     const incomeInput=document.getElementById('total-income');
//     const eincomeValueText=incomeInput.value;
//     const incomeValue=parseFloat(eincomeValueText);
     
//    //   get value from Income inputs
//    const totalIncome=document.getElementById('income-balance');
//    const totalIncomeText=totalIncome.innerText;
//    const totalMainIncome=parseFloat(totalIncomeText);
   
//    totalIncome.innerText =totalMainIncome+incomeValue;
//    // clear input field 
//    incomeInput.value= ' ';
// });
document.getElementById('calculate-btn').addEventListener('click',function(){
    
    // for expenses calculation
 const expensesFoodInput=document.getElementById('expenses-food');
 const expenceFoodValueText=expensesFoodInput.value;
 const expenceFoodValue=parseFloat(expenceFoodValueText);
  
//   get value from food inputs
const totalExpences=document.getElementById('total-expenses');
const totalExpencesText=totalExpences.innerText;
const totalMainExpenses=parseFloat(totalExpencesText);

totalExpences.innerText =totalMainExpenses+expenceFoodValue;
// clear input field 
expensesFoodInput.value= ' ';
});
