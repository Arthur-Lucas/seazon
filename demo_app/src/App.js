import "./App.css";
import theme from "seazon";
import logo from "../src/logoSeazon.svg"

export default function App() {
  theme.getThemeFromDate("20/06", "18/12");
  return (
    <div className="App seazon-main-color">
      <header className="seazon-third-color">
        <img src={logo}></img>
        <h1>Seazon</h1>
        <h2>This is a test of our season library</h2>
      </header>
      <div className="rectangle seazon-second-color"></div>
    </div>
  );
}
