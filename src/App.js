import logo from './logo.svg';
import './App.css';
import "h8k-components";
import Slides from "./components/Slides";

function App({ slides }) {
  return (
    <div>
      <div className="App">
        <Slides slides={slides} />
      </div>
    </div>
  );
}

export default App;
