import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/buttonComponent.jsx";
import ImageComponent from "./components/imgComponent.jsx";

function App() {
  const url =
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
  const alt = "immagine presa da google";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent text="cerca" />
        <ImageComponent src={url} alt={alt} />
      </header>
    </div>
  );
}

export default App;
