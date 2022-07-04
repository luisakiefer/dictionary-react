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
        <Dictionary defaultKeyword="word" />
      </main>

      <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://github.com/luisakiefer"
          target="_blank"
          rel="noreferrer"
        >
          Luísa Kiefer
        </a>{" "}
        and hosted by {" "} 
        <a href="https://netlify.com" target="_blank" rel="noreferrer">Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
