import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionType = transactions.filter((t) => t.type === title);
    const total = transactionType.reduce((acc, curr) => acc += curr.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    transactionType.forEach((transaction) => {
        const category = categories.find((cat) => cat.type === transaction.category);
        if (category) category.amount += transaction.amount;
    })

    const filteredCategories = categories.filter((cat) => cat.amount !== 0);
    const chartData = {
        datasets: [{
            data: filteredCategories.map((cat) => cat.amount),
            backgroundColor: filteredCategories.map((cat) => cat.color)
        }],
        labels: filteredCategories.map((cat) => cat.type)
    }

    const data = filteredCategories.map((cat) => ([
        {
            x: cat.type,
            y: cat.amount,
        }
    ]));

    const colors = filteredCategories.map((cat) => ({
        fill: cat.color,
    }));

    return { total, chartData, data, colors }
}

export default useTransactions;