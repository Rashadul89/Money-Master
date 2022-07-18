document.getElementById('calculate-btn').addEventListener('click', function () {
    // for food expenses calculation
    const expensesFoodInput = document.getElementById('expenses-food');
    const expensesFoodValueText = expensesFoodInput.value;
    const expensesFoodValue = parseFloat(expensesFoodValueText);

    //   get value from Expenses
    const totalExpences = document.getElementById('total-expenses');
    const totalExpencesText = totalExpences.innerText;
    const totalMainExpenses = parseFloat(totalExpencesText);

    // clear input field 
    expensesFoodInput.value = ' ';

    // for rent expenses calculation
    const expensesRentInput = document.getElementById('expenses-rent');
    const expensesRentValueText = expensesRentInput.value;
    const expensesRentValue = parseFloat(expensesRentValueText);
    // clear input field 
    expensesRentInput.value = ' ';
    // for Clothes expenses calculation
    const expensesClothesInput = document.getElementById('expenses-clothes');
    const expensesClothesValueText = expensesClothesInput.value;
    const expensesClothesValue = parseFloat(expensesClothesValueText);
    // clear input field 
    expensesClothesInput.value = ' ';

    //    adding for expenses
    const foodRentValue = expensesFoodValue + expensesRentValue + expensesClothesValue;
    totalExpences.innerText = totalMainExpenses + foodRentValue;

});
