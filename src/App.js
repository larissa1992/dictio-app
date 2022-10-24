import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          Coded by Larissa and is{" "}
          <a
            href="https://github.com/larissa1992/dictio-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
