import List from './List'
import Form from './Form'

const Main = () => {
    return (
        <div className="py-12 w-full lg:w-4/5 h-full">
            <div className="h-full bg-gray-600 p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col items-center">
                <div className="flex flex-col space-y-3 items-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">ExpenseTrackr</div>
                    <div className="text-sm sm:text-base">Track your expenses</div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-7 sm:space-y-0 sm:space-x-7 w-full mx-auto mt-10">
                    <div className="flex flex-col w-full sm:w-1/2 space-y-10">
                        <div className="bg-gray-500 p-5 rounded-xl bg-opacity-70 backdrop-filter backdrop-blur-lg flex flex-col space-y-3 w-1/2">
                            <span className="text-lg sm:text-xl">Total Balance</span>
                            <span className="text-xl sm:text-2xl">Rs. 1000</span>
                        </div>
                        <div className="mt-4">
                            <Form />
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <List />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main