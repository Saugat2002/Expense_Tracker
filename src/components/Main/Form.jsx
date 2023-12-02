import { useState, useContext } from "react"
import { ExpenseTrackerContext } from "../../context/context"
import { incomeCategories, expenseCategories } from "../../constants/categories"
import formatDate from "../../utils/formatDate"

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date())
}

const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: Math.floor(Math.random() * 1000000).toString() };
        addTransaction(transaction);
        setFormData(initialState);
    };

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="type" className="block text-sm font-medium">Type</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="Income" className="text-gray-700">Income</option>
                        <option value="Expense" className="text-gray-700">Expense</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        {selectedCategories.map((c) => (
                            <option key={c.type} value={c.type} className="text-gray-700">{c.type}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Amount (in NRs.)</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formatDate(formData.date)}
                        onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
                        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center pt-6">
                <button
                    type="submit"
                    onClick={createTransaction}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                >
                    Create
                </button>
            </div>
        </form>
    );
}

export default Form