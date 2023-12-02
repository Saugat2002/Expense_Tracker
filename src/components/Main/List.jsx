import { useContext } from 'react'
import { ExpenseTrackerContext } from "../../context/context.jsx"

const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

    return (
        // <div className="bg-gray-500 p-5 rounded-xl bg-opacity-70 backdrop-filter backdrop-blur-lg flex flex-col space-y-3">
        <ul className="divide-y overflow-y-scroll max-h-96 divide-gray-200">
            {transactions && transactions.map((transaction) => (
                <li key={transaction.id} className="py-4 flex">
                    <div className={`flex-shrink-0 h-10 w-10 ${transaction.type === 'Income' ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center`}>
                        {transaction.type === 'Income' ? (
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        )}
                    </div>
                    <div className="ml-3">
                        <p className="text-md font-semibold text-white">{transaction.category}</p>
                        <p className="text-sm text-white">NRs. {transaction.amount} - {transaction.date}</p>
                    </div>
                    <div className="ml-auto">
                        <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
        // </div>
    )
}

export default List