function getInputValue(inputID) {
    const inputFeild = document.getElementById(inputID);
    const inputFieldText = inputFeild.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputFeild.value = ' ';
    return inputFieldValue;
};
function updateValue(incomeValue,expensesFoodValue,expensesRentValue,expensesClothesValue){
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpencesText = totalExpenses.innerText;
    const totalMainExpenses = parseFloat(totalExpencesText);
    const allExpensesValue = expensesFoodValue+expensesRentValue+expensesClothesValue;
    const allTotalExpenses = totalMainExpenses + allExpensesValue;
    totalExpenses.innerText=allTotalExpenses;

    const totalExpensesIncome=document.getElementById('balanceAfterExpenses');
    const totalMainBalance=incomeValue-allExpensesValue
    totalExpensesIncome.innerText=totalMainBalance;

    
};
document.getElementById('calculate-btn').addEventListener('click', function () { 
    const incomeValue = getInputValue('income-filed');
    const expensesFoodValue = getInputValue('expenses-food');
    const expensesRentValue = getInputValue('expenses-rent');
    const expensesClothesValue = getInputValue('expenses-clothes'); 

   updateValue(incomeValue,expensesFoodValue,expensesRentValue,expensesClothesValue);

});

function findTotalBalance(){
    
};
