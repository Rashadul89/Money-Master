function getInputValue(inputID) {
    const inputFeild = document.getElementById(inputID);
    const inputFieldText = inputFeild.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputFeild.value = ' ';
    return inputFieldValue;
};
function updateValue(incomeValue, expensesFoodValue, expensesRentValue, expensesClothesValue) {
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpencesText = totalExpenses.innerText;
    const totalMainExpenses = parseFloat(totalExpencesText);
    const allExpensesValue = expensesFoodValue + expensesRentValue + expensesClothesValue;
    const allTotalExpenses = totalMainExpenses + allExpensesValue;
    totalExpenses.innerText = allTotalExpenses;
    const totalExpensesIncome = document.getElementById('balanceAfterExpenses');
    const totalMainBalance = incomeValue - allExpensesValue
    totalExpensesIncome.innerText = totalMainBalance;
};
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = getInputValue('income-filed');
    if(incomeValue>0){
        const expensesFoodValue = getInputValue('expenses-food');
        const expensesRentValue = getInputValue('expenses-rent');
        const expensesClothesValue = getInputValue('expenses-clothes');
        updateValue(incomeValue, expensesFoodValue, expensesRentValue, expensesClothesValue);
    };
 
   
});
function takePreValue(takeTextValue) {
    const totalNewAmount = document.getElementById(takeTextValue);
    const expensestext = totalNewAmount.innerText;
    const totalCost = parseFloat(expensestext);
    return totalCost;
};
document.getElementById('save-balanceBtn').addEventListener('click', function () {
    const expenses = takePreValue('total-expenses');
    const balance = takePreValue('balanceAfterExpenses');
    const addingBalance = expenses + balance;
    const saveSomeMoney = getInputValue('salaryFiledSaveInput');
    if(saveSomeMoney>0){
        const saveCalculate = (addingBalance / 100) * saveSomeMoney;
        const preSaveAmount = document.getElementById('saving-amount');
        preSaveAmount.innerText = saveCalculate;
        const remainingAmount = document.getElementById('remaining-amount');
        const setRemaining = balance - saveCalculate;
        remainingAmount.innerText = setRemaining;
    };

});

function required()
{
var empt = document.form.text.value;
if (empt === "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}