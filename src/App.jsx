
function App() {
  return (
    <>
      <div className="flex w-screen background h-screen justify-center items-center space-x-10  px-10">
        <div className="py-12 h-full w-4/5">
          <div className=" h-full bg-gray-600 p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col items-center">
            <div className="flex flex-col space-y-3 items-center">
              <div className="text-3xl font-semibold">ExpenseTrackr</div>
              <div className="text-sm">Track your expenses</div>
            </div>

            <div className="flex space-x-7  w-full mx-auto">
              <div className="flex flex-col">
                <div className="bg-gray-500 p-5 rounded-xl bg-opacity-70 backdrop-filter backdrop-blur-lg flex flex-col space-y-3">
                  <span className="text-xl">Total Balance</span>
                  <span className="text-2xl">Rs. 1000</span>
                </div>
                <div>
                  <form action="">
                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium leading-6">Country</label>
                      <div className="mt-2">
                        <select id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6">
                          <option className="text-gray-900">Income</option>
                          <option className="text-gray-900">Expense</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div>List</div>
            </div>


          </div>
        </div>
        <div className="flex flex-col  justify-center align-items space-y-10 w-2/5 h-full py-12">
          <div className=" h-1/2 bg-gray-600 p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div>Hello World</div>
          </div>
          <div className=" h-1/2 bg-gray-600 p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div>Hello World</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App