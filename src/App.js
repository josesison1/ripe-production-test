import "./App.css";
import SingleView from "./views/SingleView";

const App = () => {
  return (
    <>
      <div className="font-Montserrat flex justify-center m-2 p-8">
        <div className="flex flex-col space-y-10">
          <SingleView />
        </div>
      </div>
    </>
  );
};

export default App;
