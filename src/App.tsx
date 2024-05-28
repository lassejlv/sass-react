import { useEffect, useState } from "react";
import "./styles/app.scss";

function App() {
  const [count, setCount] = useState<number>(0);
  const plusCount = count > 100 ? Math.floor(Math.random() * 5000) : 10;

  useEffect(() => {
    const localCount = Number(localStorage.getItem("count")) || 0;
    setCount(localCount);
  }, []);

  return (
    <>
      <div className="card">
        <button
          className="btn"
          onClick={() => {
            const newCount = count + plusCount;
            setCount(newCount);
            localStorage.setItem("count", newCount.toString());
          }}
        >
          Count is {count.toLocaleString()}
        </button>

        <button
          className="btn-danger"
          onClick={() => {
            setCount(0);
            localStorage.setItem("count", "0");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
