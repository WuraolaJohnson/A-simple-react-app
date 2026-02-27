import "./App.css";
import Message from "./components/Message";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  const handleAppClick = () => {
    alert("Event Handler: Clicked from App.tsx (JSX Event)");
  };

  return (
    <>
      <div className="container mt-5">
        <Message />
        <hr />
        
        <div className="row">
          <div className="col-md-6">
            <ClassCounter title="Counter Demo" />
          </div>
          <div className="col-md-6">
            <FunctionalCounter initialCount={10} label="State & Props Demo" />
          </div>
        </div>

        <div className="mt-4 p-3 border rounded border-primary">
          <button className="btn btn-info w-100" onClick={handleAppClick}>
            Test App Level Event
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
