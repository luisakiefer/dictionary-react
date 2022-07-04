import logo from "./logo.png";
import Dictionary from "./Dictionary.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="word"/>
      </main>
      <footer className="App-footer">Coded by Luisa Kiefer</footer>
    </div>
  );
}

export default App;
