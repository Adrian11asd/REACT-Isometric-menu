import "./styles.css";
import Block from "./components/Block";

export default function App() {
  const buttons = ["Home", "Profile", "About", "Settings", "Exit"];

  return (
    <div className="App">
      <div className="PageContainer">
        <ul className="ButtonList">
          {buttons.map((item, i) => {
            return (
              <li key={i + item}>
                <Block index={buttons.length - i}>{item}</Block>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
