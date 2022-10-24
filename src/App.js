import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Larissa and is{" "}
          <a href="https://github.com/larissa1992/dictio-app" target="0_blank">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
