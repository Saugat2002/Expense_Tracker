import Details from "./components/Details";
import MainCard from "./components/Main/MainCard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex w-screen h-screen background justify-center items-center space-x-10 px-10">
        <MainCard />
        <div className="flex flex-col justify-center align-items space-y-10 w-2/5 h-full py-12">
          <Details title = "Income"/>
          <Details title="Expense"/>
        </div>
      </div>
    </div>
  );
}

export default App;