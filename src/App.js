import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="navigationBar">
      <nav>
        <div>
          <Link>
            <p>
              <span>S</span>StudyNotion
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
