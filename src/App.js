import "./App.css";
import WorkFlowSpace from "./components";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <Header />
      </header>
      <WorkFlowSpace />
    </div>
  );
}

export default App;
