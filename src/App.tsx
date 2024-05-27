import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const localCount = Number(localStorage.getItem("count")) || 0;
    setCount(localCount);
  }, []);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
            localStorage.setItem("count", newCount.toString());
          }}
        >
          Count is {count.toLocaleString()}
        </button>
      </div>
    </>
  );
}

export default App;
