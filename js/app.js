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
    const expensesFoodValue = getInputValue('expenses-food');
    const expensesRentValue = getInputValue('expenses-rent');
    const expensesClothesValue = getInputValue('expenses-clothes');

    updateValue(incomeValue, expensesFoodValue, expensesRentValue, expensesClothesValue);

});
function takePreValue(){
    const totalExpenses = document.getElementById('total-expenses');
    const expensestext = totalExpenses.innerText;
    const expenses = parseFloat(expensestext);
    return expenses;
}
document.getElementById('save-balanceBtn').addEventListener('click', function () {
    // const totalExpenses = document.getElementById('total-expenses');
    // const expensestext = totalExpenses.innerText;
    // const expenses = parseFloat(expensestext);
    takePreValue();

    const totalExpensesIncome = document.getElementById('balanceAfterExpenses');
    const findTotalBalanceText = totalExpensesIncome.innerText;
    const balance = parseFloat(findTotalBalanceText);

    const addingBalance = expenses + balance;

    const saveSomeMoney = getInputValue('salaryFiledSaveInput');

    const saveCalculate = (addingBalance / 100) * saveSomeMoney;

    const preSaveAmount = document.getElementById('saving-amount');
    preSaveAmount.innerText = saveCalculate;

    const remainingAmount = document.getElementById('remaining-amount');
    const setRemaining= balance-saveCalculate;
    remainingAmount.innerText=setRemaining;
});