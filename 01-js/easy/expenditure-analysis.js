/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return [];
  }

  const totalsByCategory = new Map();

  for (const transaction of transactions) {
    if (!transaction || typeof transaction.category === 'undefined') {
      continue;
    }

    const category = transaction.category;
    const price = typeof transaction.price === 'number' ? transaction.price : 0;
    const existingTotal = totalsByCategory.get(category) || 0;

    totalsByCategory.set(category, existingTotal + price);
  }

  return Array.from(totalsByCategory.entries()).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;