import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "./styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
